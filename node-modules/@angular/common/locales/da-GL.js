/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/da-GL", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        if (n === 1 || !(t === 0) && (i === 0 || i === 1))
            return 1;
        return 5;
    }
    exports.default = [
        'da-GL', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
            ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
            ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
        ],
        [
            ['S', 'M', 'T', 'O', 'T', 'F', 'L'], ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
            ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
            ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
            [
                'januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september',
                'oktober', 'november', 'december'
            ]
        ],
        u, [['fKr', 'eKr'], ['f.Kr.', 'e.Kr.'], u], 1, [6, 0],
        ['dd/MM/y', 'd. MMM y', 'd. MMMM y', 'EEEE \'den\' d. MMMM y'],
        ['HH.mm', 'HH.mm.ss', 'HH.mm.ss z', 'HH.mm.ss zzzz'], ['{1} {0}', u, '{1} \'kl\'. {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', '.'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'kr.', 'dansk krone', {
            'AUD': ['AU$', '$'],
            'DKK': ['kr.'],
            'ISK': [u, 'kr.'],
            'JPY': ['JP¥', '¥'],
            'NOK': [u, 'kr.'],
            'RON': [u, 'L'],
            'SEK': [u, 'kr.'],
            'THB': ['฿'],
            'TWD': ['NT$']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGEtR0wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kYS1HTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLGdCQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzQixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUM3RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUN4RSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMzQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUN4RSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMzQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQy9GO2dCQUNFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVztnQkFDbkYsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO2FBQ2xDO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLENBQUM7UUFDOUQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO1lBQ25FLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ2Y7UUFDRCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLFxuICAgICAgdCA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/fDArJC9nLCAnJyksIDEwKSB8fCAwO1xuICBpZiAobiA9PT0gMSB8fCAhKHQgPT09IDApICYmIChpID09PSAwIHx8IGkgPT09IDEpKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RhLUdMJywgW1snYScsICdwJ10sIFsnQU0nLCAnUE0nXSwgdV0sIFtbJ0FNJywgJ1BNJ10sIHUsIHVdLFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdPJywgJ1QnLCAnRicsICdMJ10sIFsnc8O4bi4nLCAnbWFuLicsICd0aXIuJywgJ29ucy4nLCAndG9yLicsICdmcmUuJywgJ2zDuHIuJ10sXG4gICAgWydzw7huZGFnJywgJ21hbmRhZycsICd0aXJzZGFnJywgJ29uc2RhZycsICd0b3JzZGFnJywgJ2ZyZWRhZycsICdsw7hyZGFnJ10sXG4gICAgWydzw7gnLCAnbWEnLCAndGknLCAnb24nLCAndG8nLCAnZnInLCAnbMO4J11cbiAgXSxcbiAgW1xuICAgIFsnUycsICdNJywgJ1QnLCAnTycsICdUJywgJ0YnLCAnTCddLCBbJ3PDuG4nLCAnbWFuJywgJ3RpcicsICdvbnMnLCAndG9yJywgJ2ZyZScsICdsw7hyJ10sXG4gICAgWydzw7huZGFnJywgJ21hbmRhZycsICd0aXJzZGFnJywgJ29uc2RhZycsICd0b3JzZGFnJywgJ2ZyZWRhZycsICdsw7hyZGFnJ10sXG4gICAgWydzw7gnLCAnbWEnLCAndGknLCAnb24nLCAndG8nLCAnZnInLCAnbMO4J11cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ2phbi4nLCAnZmViLicsICdtYXIuJywgJ2Fwci4nLCAnbWFqJywgJ2p1bi4nLCAnanVsLicsICdhdWcuJywgJ3NlcC4nLCAnb2t0LicsICdub3YuJywgJ2RlYy4nXSxcbiAgICBbXG4gICAgICAnamFudWFyJywgJ2ZlYnJ1YXInLCAnbWFydHMnLCAnYXByaWwnLCAnbWFqJywgJ2p1bmknLCAnanVsaScsICdhdWd1c3QnLCAnc2VwdGVtYmVyJyxcbiAgICAgICdva3RvYmVyJywgJ25vdmVtYmVyJywgJ2RlY2VtYmVyJ1xuICAgIF1cbiAgXSxcbiAgdSwgW1snZktyJywgJ2VLciddLCBbJ2YuS3IuJywgJ2UuS3IuJ10sIHVdLCAxLCBbNiwgMF0sXG4gIFsnZGQvTU0veScsICdkLiBNTU0geScsICdkLiBNTU1NIHknLCAnRUVFRSBcXCdkZW5cXCcgZC4gTU1NTSB5J10sXG4gIFsnSEgubW0nLCAnSEgubW0uc3MnLCAnSEgubW0uc3MgeicsICdISC5tbS5zcyB6enp6J10sIFsnezF9IHswfScsIHUsICd7MX0gXFwna2xcXCcuIHswfScsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnLiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICdrci4nLCAnZGFuc2sga3JvbmUnLCB7XG4gICAgJ0FVRCc6IFsnQVUkJywgJyQnXSxcbiAgICAnREtLJzogWydrci4nXSxcbiAgICAnSVNLJzogW3UsICdrci4nXSxcbiAgICAnSlBZJzogWydKUMKlJywgJ8KlJ10sXG4gICAgJ05PSyc6IFt1LCAna3IuJ10sXG4gICAgJ1JPTic6IFt1LCAnTCddLFxuICAgICdTRUsnOiBbdSwgJ2tyLiddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbJ05UJCddXG4gIH0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==