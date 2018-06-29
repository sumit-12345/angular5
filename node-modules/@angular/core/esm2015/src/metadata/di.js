/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '../di/injection_token';
import { makeParamDecorator, makePropDecorator } from '../util/decorators';
/**
 * This token can be used to create a virtual provider that will populate the
 * `entryComponents` fields of components and ng modules based on its `useValue`.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) will be added to the `entryComponents` property.
 *
 * \@usageNotes
 * ### Example
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on the router configuration which refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * \@NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * \@experimental
 */
export const /** @type {?} */ ANALYZE_FOR_ENTRY_COMPONENTS = new InjectionToken('AnalyzeForEntryComponents');
/**
 * Type of the Attribute decorator / constructor function.
 *
 *
 * @record
 */
export function AttributeDecorator() { }
function AttributeDecorator_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (name: string): any;
    */
    /* TODO: handle strange member:
    new (name: string): Attribute;
    */
}
/**
 * Attribute decorator and metadata.
 *
 * \@Annotation
 */
export const /** @type {?} */ Attribute = makeParamDecorator('Attribute', (attributeName) => ({ attributeName }));
/**
 * Base class for query metadata.
 *
 * @see `ContentChildren`.
 * @see `ContentChild`.
 * @see `ViewChildren`.
 * @see `ViewChild`.
 * @abstract
 */
export class Query {
}
/**
 * Type of the ContentChildren decorator / constructor function.
 *
 * @see `ContentChildren`.
 * @record
 */
export function ContentChildrenDecorator() { }
function ContentChildrenDecorator_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (selector: Type<any>|Function|string, opts?: {descendants?: boolean, read?: any}): any;
    */
    /* TODO: handle strange member:
    new (selector: Type<any>|Function|string, opts?: {descendants?: boolean, read?: any}): Query;
    */
}
/**
 * ContentChildren decorator and metadata.
 *
 *
 * \@Annotation
 */
export const /** @type {?} */ ContentChildren = makePropDecorator('ContentChildren', (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: false, descendants: false }, data)), Query);
/**
 * Type of the ContentChild decorator / constructor function.
 *
 *
 *
 * @record
 */
export function ContentChildDecorator() { }
function ContentChildDecorator_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (selector: Type<any>|Function|string, opts?: {read?: any}): any;
    */
    /* TODO: handle strange member:
    new (selector: Type<any>|Function|string, opts?: {read?: any}): ContentChild;
    */
}
/**
 * ContentChild decorator and metadata.
 *
 *
 * \@Annotation
 */
export const /** @type {?} */ ContentChild = makePropDecorator('ContentChild', (selector, data = {}) => (Object.assign({ selector, first: true, isViewQuery: false, descendants: true }, data)), Query);
/**
 * Type of the ViewChildren decorator / constructor function.
 *
 * @see `ViewChildren`.
 *
 *
 * @record
 */
export function ViewChildrenDecorator() { }
function ViewChildrenDecorator_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (selector: Type<any>|Function|string, opts?: {read?: any}): any;
    */
    /* TODO: handle strange member:
    new (selector: Type<any>|Function|string, opts?: {read?: any}): ViewChildren;
    */
}
/**
 * ViewChildren decorator and metadata.
 *
 * \@Annotation
 */
export const /** @type {?} */ ViewChildren = makePropDecorator('ViewChildren', (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: true, descendants: true }, data)), Query);
/**
 * Type of the ViewChild decorator / constructor function.
 *
 * @see `ViewChild`.
 * @record
 */
export function ViewChildDecorator() { }
function ViewChildDecorator_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (selector: Type<any>|Function|string, opts?: {read?: any}): any;
    */
    /* TODO: handle strange member:
    new (selector: Type<any>|Function|string, opts?: {read?: any}): ViewChild;
    */
}
/**
 * ViewChild decorator and metadata.
 *
 * \@Annotation
 */
export const /** @type {?} */ ViewChild = makePropDecorator('ViewChild', (selector, data) => (Object.assign({ selector, first: true, isViewQuery: true, descendants: true }, data)), Query);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUN6RSxNQUFNLENBQUMsdUJBQU0sNEJBQTRCLEdBQUcsSUFBSSxjQUFjLENBQU0sMkJBQTJCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERqRyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUNsQixrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FBcUJuRixNQUFNO0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUQ5QixNQUFNLENBQUMsdUJBQU0sZUFBZSxHQUE2QixpQkFBaUIsQ0FDdEUsaUJBQWlCLEVBQ2pCLENBQUMsUUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUUsQ0FDL0IsaUJBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxJQUFLLElBQUksRUFBRSxFQUMvRSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRFgsTUFBTSxDQUFDLHVCQUFNLFlBQVksR0FBMEIsaUJBQWlCLENBQ2hFLGNBQWMsRUFBRSxDQUFDLFFBQWMsRUFBRSxPQUFZLEVBQUUsRUFBRSxFQUFFLENBQy9CLGlCQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSyxJQUFJLEVBQUUsRUFDN0YsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RYLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQTBCLGlCQUFpQixDQUNoRSxjQUFjLEVBQUUsQ0FBQyxRQUFjLEVBQUUsT0FBWSxFQUFFLEVBQUUsRUFBRSxDQUMvQixpQkFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUssSUFBSSxFQUFFLEVBQzdGLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRFgsTUFBTSxDQUFDLHVCQUFNLFNBQVMsR0FBdUIsaUJBQWlCLENBQzFELFdBQVcsRUFBRSxDQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsRUFBRSxDQUN6QixpQkFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUssSUFBSSxFQUFFLEVBQ3pGLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICcuLi9kaS9pbmplY3Rpb25fdG9rZW4nO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi90eXBlJztcbmltcG9ydCB7bWFrZVBhcmFtRGVjb3JhdG9yLCBtYWtlUHJvcERlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIHRva2VuIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIHZpcnR1YWwgcHJvdmlkZXIgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZVxuICogYGVudHJ5Q29tcG9uZW50c2AgZmllbGRzIG9mIGNvbXBvbmVudHMgYW5kIG5nIG1vZHVsZXMgYmFzZWQgb24gaXRzIGB1c2VWYWx1ZWAuXG4gKiBBbGwgY29tcG9uZW50cyB0aGF0IGFyZSByZWZlcmVuY2VkIGluIHRoZSBgdXNlVmFsdWVgIHZhbHVlIChlaXRoZXIgZGlyZWN0bHlcbiAqIG9yIGluIGEgbmVzdGVkIGFycmF5IG9yIG1hcCkgd2lsbCBiZSBhZGRlZCB0byB0aGUgYGVudHJ5Q29tcG9uZW50c2AgcHJvcGVydHkuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IHRoZSByb3V0ZXIgY2FuIHBvcHVsYXRlIHRoZSBgZW50cnlDb21wb25lbnRzYFxuICogZmllbGQgb2YgYW4gTmdNb2R1bGUgYmFzZWQgb24gdGhlIHJvdXRlciBjb25maWd1cmF0aW9uIHdoaWNoIHJlZmVyc1xuICogdG8gY29tcG9uZW50cy5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyBoZWxwZXIgZnVuY3Rpb24gaW5zaWRlIHRoZSByb3V0ZXJcbiAqIGZ1bmN0aW9uIHByb3ZpZGVSb3V0ZXMocm91dGVzKSB7XG4gKiAgIHJldHVybiBbXG4gKiAgICAge3Byb3ZpZGU6IFJPVVRFUywgdXNlVmFsdWU6IHJvdXRlc30sXG4gKiAgICAge3Byb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIHVzZVZhbHVlOiByb3V0ZXMsIG11bHRpOiB0cnVlfVxuICogICBdO1xuICogfVxuICpcbiAqIC8vIHVzZXIgY29kZVxuICogbGV0IHJvdXRlcyA9IFtcbiAqICAge3BhdGg6ICcvcm9vdCcsIGNvbXBvbmVudDogUm9vdENvbXB9LFxuICogICB7cGF0aDogJy90ZWFtcycsIGNvbXBvbmVudDogVGVhbXNDb21wfVxuICogXTtcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBwcm92aWRlcnM6IFtwcm92aWRlUm91dGVzKHJvdXRlcyldXG4gKiB9KVxuICogY2xhc3MgTW9kdWxlV2l0aFJvdXRlcyB7fVxuICogYGBgXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY29uc3QgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdBbmFseXplRm9yRW50cnlDb21wb25lbnRzJyk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQXR0cmlidXRlIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGF0IGEgY29uc3RhbnQgYXR0cmlidXRlIHZhbHVlIHNob3VsZCBiZSBpbmplY3RlZC5cbiAgICpcbiAgICogVGhlIGRpcmVjdGl2ZSBjYW4gaW5qZWN0IGNvbnN0YW50IHN0cmluZyBsaXRlcmFscyBvZiBob3N0IGVsZW1lbnQgYXR0cmlidXRlcy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogU3VwcG9zZSB3ZSBoYXZlIGFuIGA8aW5wdXQ+YCBlbGVtZW50IGFuZCB3YW50IHRvIGtub3cgaXRzIGB0eXBlYC5cbiAgICpcbiAgICogYGBgaHRtbFxuICAgKiA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAgICogYGBgXG4gICAqXG4gICAqIEEgZGVjb3JhdG9yIGNhbiBpbmplY3Qgc3RyaW5nIGxpdGVyYWwgYHRleHRgIGxpa2Ugc286XG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL21ldGFkYXRhLnRzIHJlZ2lvbj0nYXR0cmlidXRlTWV0YWRhdGEnfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZSBhcyBUeXBlU2NyaXB0IERlY29yYXRvclxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS90cy9tZXRhZGF0YS9tZXRhZGF0YS50cyByZWdpb249J2F0dHJpYnV0ZUZhY3RvcnknfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZSBhcyBFUzUgYW5ub3RhdGlvblxuICAgKlxuICAgKiBgYGBcbiAgICogdmFyIE15Q29tcG9uZW50ID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICogICAuLi5cbiAgICogfTtcbiAgICpcbiAgICogTXlDb21wb25lbnQuYW5ub3RhdGlvbnMgPSBbXG4gICAqICAgbmV3IG5nLkNvbXBvbmVudCh7Li4ufSlcbiAgICogXVxuICAgKiBNeUNvbXBvbmVudC5wYXJhbWV0ZXJzID0gW1xuICAgKiAgIFtuZXcgbmcuQXR0cmlidXRlKCd0aXRsZScpXVxuICAgKiBdXG4gICAqIGBgYFxuICAgKlxuICAgKlxuICAgKi9cbiAgKG5hbWU6IHN0cmluZyk6IGFueTtcbiAgbmV3IChuYW1lOiBzdHJpbmcpOiBBdHRyaWJ1dGU7XG59XG5cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBBdHRyaWJ1dGUgbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlIHsgYXR0cmlidXRlTmFtZT86IHN0cmluZzsgfVxuXG4vKipcbiAqIEF0dHJpYnV0ZSBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBBdHRyaWJ1dGU6IEF0dHJpYnV0ZURlY29yYXRvciA9XG4gICAgbWFrZVBhcmFtRGVjb3JhdG9yKCdBdHRyaWJ1dGUnLCAoYXR0cmlidXRlTmFtZT86IHN0cmluZykgPT4gKHthdHRyaWJ1dGVOYW1lfSkpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFF1ZXJ5IG1ldGFkYXRhLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgZGVzY2VuZGFudHM6IGJvb2xlYW47XG4gIGZpcnN0OiBib29sZWFuO1xuICByZWFkOiBhbnk7XG4gIGlzVmlld1F1ZXJ5OiBib29sZWFuO1xuICBzZWxlY3RvcjogYW55O1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHF1ZXJ5IG1ldGFkYXRhLlxuICpcbiAqIEBzZWUgYENvbnRlbnRDaGlsZHJlbmAuXG4gKiBAc2VlIGBDb250ZW50Q2hpbGRgLlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqIEBzZWUgYFZpZXdDaGlsZGAuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBRdWVyeSB7fVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIGBDb250ZW50Q2hpbGRyZW5gLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRDaGlsZHJlbkRlY29yYXRvciB7XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGEgY29udGVudCBxdWVyeS5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgQ29udGVudENoaWxkcmVuIHRvIGdldCB0aGUgYFF1ZXJ5TGlzdGAgb2YgZWxlbWVudHMgb3IgZGlyZWN0aXZlcyBmcm9tIHRoZVxuICAgKiBjb250ZW50IERPTS4gQW55IHRpbWUgYSBjaGlsZCBlbGVtZW50IGlzIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZCwgdGhlIHF1ZXJ5IGxpc3Qgd2lsbCBiZVxuICAgKiB1cGRhdGVkLCBhbmQgdGhlIGNoYW5nZXMgb2JzZXJ2YWJsZSBvZiB0aGUgcXVlcnkgbGlzdCB3aWxsIGVtaXQgYSBuZXcgdmFsdWUuXG4gICAqXG4gICAqIENvbnRlbnQgcXVlcmllcyBhcmUgc2V0IGJlZm9yZSB0aGUgYG5nQWZ0ZXJDb250ZW50SW5pdGAgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSB0aGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipkZXNjZW5kYW50cyoqIC0gaW5jbHVkZSBvbmx5IGRpcmVjdCBjaGlsZHJlbiBvciBhbGwgZGVzY2VuZGFudHMuXG4gICAqICogKipyZWFkKiogLSByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBCYXNpYyBFeGFtcGxlXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzaW1wbGUgZGVtb25zdHJhdGlvbiBvZiBob3cgdGhlIGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvciBjYW4gYmUgdXNlZC5cbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvY29udGVudENoaWxkcmVuL2NvbnRlbnRfY2hpbGRyZW5faG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBUYWItcGFuZSBFeGFtcGxlXG4gICAqXG4gICAqIEhlcmUgaXMgYSBzbGlnaHRseSBtb3JlIHJlYWxpc3RpYyBleGFtcGxlIHRoYXQgc2hvd3MgaG93IGBDb250ZW50Q2hpbGRyZW5gIGRlY29yYXRvcnNcbiAgICogY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGEgdGFiIHBhbmUgY29tcG9uZW50LlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGRyZW4vY29udGVudF9jaGlsZHJlbl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtkZXNjZW5kYW50cz86IGJvb2xlYW4sIHJlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge2Rlc2NlbmRhbnRzPzogYm9vbGVhbiwgcmVhZD86IGFueX0pOiBRdWVyeTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gbWV0YWRhdGEuXG4gKlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiAgQEFubm90YXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRDaGlsZHJlbjogQ29udGVudENoaWxkcmVuRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ0NvbnRlbnRDaGlsZHJlbicsXG4gICAgKHNlbGVjdG9yPzogYW55LCBkYXRhOiBhbnkgPSB7fSkgPT5cbiAgICAgICAgKHtzZWxlY3RvciwgZmlyc3Q6IGZhbHNlLCBpc1ZpZXdRdWVyeTogZmFsc2UsIGRlc2NlbmRhbnRzOiBmYWxzZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGQgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudENoaWxkRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBDb250ZW50Q2hpbGQgdG8gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IG9yIHRoZSBkaXJlY3RpdmUgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZyb21cbiAgICogdGhlIGNvbnRlbnQgRE9NLiBJZiB0aGUgY29udGVudCBET00gY2hhbmdlcywgYW5kIGEgbmV3IGNoaWxkIG1hdGNoZXMgdGhlIHNlbGVjdG9yLFxuICAgKiB0aGUgcHJvcGVydHkgd2lsbCBiZSB1cGRhdGVkLlxuICAgKlxuICAgKiBDb250ZW50IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyQ29udGVudEluaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gdGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqcmVhZCoqIC0gcmVhZCBhIGRpZmZlcmVudCB0b2tlbiBmcm9tIHRoZSBxdWVyaWVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZC9jb250ZW50X2NoaWxkX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGQvY29udGVudF9jaGlsZF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IGFueTtcbiAgbmV3IChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IENvbnRlbnRDaGlsZDtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGQgbWV0YWRhdGEuXG4gKlxuICogQHNlZSBgQ29udGVudENoaWxkYC5cbiAqXG4gKlxuICovXG5leHBvcnQgdHlwZSBDb250ZW50Q2hpbGQgPSBRdWVyeTtcblxuLyoqXG4gKiBDb250ZW50Q2hpbGQgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKlxuICogQEFubm90YXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRDaGlsZDogQ29udGVudENoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ0NvbnRlbnRDaGlsZCcsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogdHJ1ZSwgaXNWaWV3UXVlcnk6IGZhbHNlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pLFxuICAgIFF1ZXJ5KTtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdDaGlsZHJlbkRlY29yYXRvciB7XG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGEgdmlldyBxdWVyeS5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgVmlld0NoaWxkcmVuIHRvIGdldCB0aGUgYFF1ZXJ5TGlzdGAgb2YgZWxlbWVudHMgb3IgZGlyZWN0aXZlcyBmcm9tIHRoZVxuICAgKiB2aWV3IERPTS4gQW55IHRpbWUgYSBjaGlsZCBlbGVtZW50IGlzIGFkZGVkLCByZW1vdmVkLCBvciBtb3ZlZCwgdGhlIHF1ZXJ5IGxpc3Qgd2lsbCBiZSB1cGRhdGVkLFxuICAgKiBhbmQgdGhlIGNoYW5nZXMgb2JzZXJ2YWJsZSBvZiB0aGUgcXVlcnkgbGlzdCB3aWxsIGVtaXQgYSBuZXcgdmFsdWUuXG4gICAqXG4gICAqIFZpZXcgcXVlcmllcyBhcmUgc2V0IGJlZm9yZSB0aGUgYG5nQWZ0ZXJWaWV3SW5pdGAgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSB0aGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipyZWFkKiogLSByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZHJlbi92aWV3X2NoaWxkcmVuX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy92aWV3Q2hpbGRyZW4vdmlld19jaGlsZHJlbl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICpcbiAgICogQEFubm90YXRpb25cbiAgICovXG4gIChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IGFueTtcbiAgbmV3IChzZWxlY3RvcjogVHlwZTxhbnk+fEZ1bmN0aW9ufHN0cmluZywgb3B0cz86IHtyZWFkPzogYW55fSk6IFZpZXdDaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBWaWV3Q2hpbGRyZW4gbWV0YWRhdGEuXG4gKi9cbmV4cG9ydCB0eXBlIFZpZXdDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIFZpZXdDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBWaWV3Q2hpbGRyZW46IFZpZXdDaGlsZHJlbkRlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAgICdWaWV3Q2hpbGRyZW4nLCAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKHtzZWxlY3RvciwgZmlyc3Q6IGZhbHNlLCBpc1ZpZXdRdWVyeTogdHJ1ZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSxcbiAgICBRdWVyeSk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgVmlld0NoaWxkIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBzZWUgYFZpZXdDaGlsZGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NoaWxkRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDb25maWd1cmVzIGEgdmlldyBxdWVyeS5cbiAgICpcbiAgICogWW91IGNhbiB1c2UgVmlld0NoaWxkIHRvIGdldCB0aGUgZmlyc3QgZWxlbWVudCBvciB0aGUgZGlyZWN0aXZlIG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmcm9tIHRoZVxuICAgKiB2aWV3IERPTS4gSWYgdGhlIHZpZXcgRE9NIGNoYW5nZXMsIGFuZCBhIG5ldyBjaGlsZCBtYXRjaGVzIHRoZSBzZWxlY3RvcixcbiAgICogdGhlIHByb3BlcnR5IHdpbGwgYmUgdXBkYXRlZC5cbiAgICpcbiAgICogVmlldyBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlclZpZXdJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqICoqTWV0YWRhdGEgUHJvcGVydGllcyoqOlxuICAgKlxuICAgKiAqICoqc2VsZWN0b3IqKiAtIHRoZSBkaXJlY3RpdmUgdHlwZSBvciB0aGUgbmFtZSB1c2VkIGZvciBxdWVyeWluZy5cbiAgICogKiAqKnJlYWQqKiAtIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfaG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZC92aWV3X2NoaWxkX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge3JlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcgKHNlbGVjdG9yOiBUeXBlPGFueT58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge3JlYWQ/OiBhbnl9KTogVmlld0NoaWxkO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZCBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgVmlld0NoaWxkID0gUXVlcnk7XG5cbi8qKlxuICogVmlld0NoaWxkIGRlY29yYXRvciBhbmQgbWV0YWRhdGEuXG4gKlxuICogQEFubm90YXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFZpZXdDaGlsZDogVmlld0NoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ1ZpZXdDaGlsZCcsIChzZWxlY3RvcjogYW55LCBkYXRhOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogdHJ1ZSwgaXNWaWV3UXVlcnk6IHRydWUsIGRlc2NlbmRhbnRzOiB0cnVlLCAuLi5kYXRhfSksXG4gICAgUXVlcnkpO1xuIl19