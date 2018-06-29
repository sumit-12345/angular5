"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
/**
 * @deprecated Please use a Host directly instead of this class. This will be removed prior to 1.0.
 */
class FileSystemHost extends core_1.virtualFs.ScopedHost {
    constructor(dir) {
        super(new node_1.NodeJsSyncHost(), core_1.normalize(dir));
    }
}
exports.FileSystemHost = FileSystemHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zeXN0ZW0taG9zdC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvc2NoZW1hdGljcy90b29scy9maWxlLXN5c3RlbS1ob3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsK0NBQTREO0FBQzVELG9EQUEyRDtBQUUzRDs7R0FFRztBQUNILG9CQUE0QixTQUFRLGdCQUFTLENBQUMsVUFBYztJQUMxRCxZQUFZLEdBQVc7UUFDckIsS0FBSyxDQUFDLElBQUkscUJBQWMsRUFBRSxFQUFFLGdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IG5vcm1hbGl6ZSwgdmlydHVhbEZzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgTm9kZUpzU3luY0hvc3QgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9ub2RlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIGEgSG9zdCBkaXJlY3RseSBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MuIFRoaXMgd2lsbCBiZSByZW1vdmVkIHByaW9yIHRvIDEuMC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVTeXN0ZW1Ib3N0IGV4dGVuZHMgdmlydHVhbEZzLlNjb3BlZEhvc3Q8e30+IHtcbiAgY29uc3RydWN0b3IoZGlyOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuZXcgTm9kZUpzU3luY0hvc3QoKSwgbm9ybWFsaXplKGRpcikpO1xuICB9XG59XG4iXX0=