# map-visit [![NPM version](https://img.shields.io/npm/v/map-visit.svg?style=flat)](https://www.npmjs.com/package/map-visit) [![NPM monthly downloads](https://img.shields.io/npm/dm/map-visit.svg?style=flat)](https://npmjs.org/package/map-visit)  [![NPM total downloads](https://img.shields.io/npm/dt/map-visit.svg?style=flat)](https://npmjs.org/package/map-visit) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/map-visit.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/map-visit)

> Map `visit` over an array of objects.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save map-visit
```

## Usage

```js
var mapVisit = require('map-visit');
```

## What does this do?

**Assign/Merge/Extend vs. Visit**

Let's say you want to add a `set` method to your application that will:

* set key-value pairs on a `data` object
* extend objects onto the `data` object
* extend arrays of objects onto the data object

**Example using `extend`**

Here is one way to accomplish this using Lo-Dash's `extend` (comparable to `Object.assign`):

```js
var _ = require('lodash');

var obj = {
  data: {},
  set: function (key, value) {
    if (Array.isArray(key)) {
      _.extend.apply(_, [obj.data].concat(key));
    } else if (typeof key === 'object') {
      _.extend(obj.data, key);
    } else {
      obj.data[key] = value;
    }
  }
};

obj.set('a', 'a');
obj.set([{b: 'b'}, {c: 'c'}]);
obj.set({d: {e: 'f'}});

console.log(obj.data);
//=> {a: 'a', b: 'b', c: 'c', d: { e: 'f' }}
```

The above approach works fine for most use cases. However, **if you also want to emit an event** each time a property is added to the `data` object, or you want more control over what happens as the object is extended, a better approach would be to use `visit`.

**Example using `visit`**

In this approach:

* when an array is passed to `set`, the `mapVisit` library calls the `set` method on each object in the array.
* when an object is passed, `visit` calls `set` on each property in the object.

As a result, the `data` event will be emitted every time a property is added to `data` (events are just an example, you can use this approach to perform any necessary logic every time the method is called).

```js
var mapVisit = require('map-visit');
var visit = require('object-visit');

var obj = {
  data: {},
  set: function (key, value) {
    if (Array.isArray(key)) {
      mapVisit(obj, 'set', key);
    } else if (typeof key === 'object') {
      visit(obj, 'set', key);
    } else {
      // simulate an event-emitter
      console.log('emit', key, value);
      obj.data[key] = value;
    }
  }
};

obj.set('a', 'a');
obj.set([{b: 'b'}, {c: 'c'}]);
obj.set({d: {e: 'f'}});
obj.set({g: 'h', i: 'j', k: 'l'});

console.log(obj.data);
//=> {a: 'a', b: 'b', c: 'c', d: { e: 'f' }, g: 'h', i: 'j', k: 'l'}

// events would look something like:
// emit a a
// emit b b
// emit c c
// emit d { e: 'f' }
// emit g h
// emit i j
// emit k l
```

## About

### Related projects

* [collection-visit](https://www.npmjs.com/package/collection-visit): Visit a method over the items in an object, or map visit over the objects… [more](https://github.com/jonschlinkert/collection-visit) | [homepage](https://github.com/jonschlinkert/collection-visit "Visit a method over the items in an object, or map visit over the objects in an array.")
* [object-visit](https://www.npmjs.com/package/object-visit): Call a specified method on each value in the given object. | [homepage](https://github.com/jonschlinkert/object-visit "Call a specified method on each value in the given object.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 15 | [jonschlinkert](https://github.com/jonschlinkert) |
| 7 | [doowb](https://github.com/doowb) |

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.5.0, on April 09, 2017._