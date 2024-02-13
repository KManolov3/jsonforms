/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import maxBy from 'lodash/maxBy';
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef, } from '@angular/core';
import { createId, isControl, getConfig, mapStateToJsonFormsRendererProps, } from '@jsonforms/core';
import { UnknownRenderer } from './unknown.component';
import { JsonFormsBaseRenderer } from './base.renderer';
import { JsonFormsControl } from './control';
import { JsonFormsAngularService } from './jsonforms.service';
import { get, isEqual } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "./jsonforms.service";
const areEqual = (prevProps, nextProps) => {
    return (get(prevProps, 'renderers.length') === get(nextProps, 'renderers.length') &&
        get(prevProps, 'cells.length') === get(nextProps, 'cells.length') &&
        get(prevProps, 'uischemas.length') === get(nextProps, 'uischemas.length') &&
        get(prevProps, 'schema') === get(nextProps, 'schema') &&
        isEqual(get(prevProps, 'uischema'), get(nextProps, 'uischema')) &&
        get(prevProps, 'path') === get(nextProps, 'path'));
};
export class JsonFormsOutlet extends JsonFormsBaseRenderer {
    viewContainerRef;
    componentFactoryResolver;
    jsonformsService;
    subscription;
    previousProps;
    constructor(viewContainerRef, componentFactoryResolver, jsonformsService) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.jsonformsService = jsonformsService;
    }
    set renderProps(renderProps) {
        this.path = renderProps.path;
        this.schema = renderProps.schema;
        this.uischema = renderProps.uischema;
        this.update(this.jsonformsService.getState());
    }
    ngOnInit() {
        this.subscription = this.jsonformsService.$state.subscribe({
            next: (state) => this.update(state),
        });
    }
    update(state) {
        const props = mapStateToJsonFormsRendererProps(state, {
            schema: this.schema,
            uischema: this.uischema,
            path: this.path,
        });
        if (areEqual(this.previousProps, props)) {
            return;
        }
        else {
            this.previousProps = props;
        }
        const { renderers } = props;
        const schema = this.schema || props.schema;
        const uischema = this.uischema || props.uischema;
        const testerContext = {
            rootSchema: props.rootSchema,
            config: getConfig(state),
        };
        const renderer = maxBy(renderers, (r) => r.tester(uischema, schema, testerContext));
        let bestComponent = UnknownRenderer;
        if (renderer !== undefined &&
            renderer.tester(uischema, schema, testerContext) !== -1) {
            bestComponent = renderer.renderer;
        }
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(bestComponent);
        this.viewContainerRef.clear();
        const currentComponentRef = this.viewContainerRef.createComponent(componentFactory);
        if (currentComponentRef.instance instanceof JsonFormsBaseRenderer) {
            const instance = currentComponentRef.instance;
            instance.uischema = uischema;
            instance.schema = schema;
            instance.path = this.path;
            if (instance instanceof JsonFormsControl) {
                const controlInstance = instance;
                if (controlInstance.id === undefined) {
                    const id = isControl(props.uischema)
                        ? createId(props.uischema.scope)
                        : undefined;
                    instance.id = id;
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsOutlet, deps: [{ token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsOutlet, selector: "jsonforms-outlet", inputs: { renderProps: "renderProps" }, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsOutlet, decorators: [{
            type: Directive,
            args: [{
                    selector: 'jsonforms-outlet',
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i1.JsonFormsAngularService }]; }, propDecorators: { renderProps: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmZvcm1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJyYXJ5L2pzb25mb3Jtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxLQUFLLE1BQU0sY0FBYyxDQUFDO0FBQ2pDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFJTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsU0FBUyxFQUlULGdDQUFnQyxHQUlqQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7OztBQUV0QyxNQUFNLFFBQVEsR0FBRyxDQUNmLFNBQXdDLEVBQ3hDLFNBQXdDLEVBQ3hDLEVBQUU7SUFDRixPQUFPLENBQ0wsR0FBRyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7UUFDekUsR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQztRQUNqRSxHQUFHLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztRQUN6RSxHQUFHLENBQUMsU0FBUyxFQUFFLFFB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IENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IG1heEJ5IGZyb20gJ2xvZGFzaC9tYXhCeSc7XG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNyZWF0ZUlkLFxuICBpc0NvbnRyb2wsXG4gIGdldENvbmZpZyxcbiAgSnNvbkZvcm1zUHJvcHMsXG4gIEpzb25Gb3Jtc1N0YXRlLFxuICBKc29uU2NoZW1hLFxuICBtYXBTdGF0ZVRvSnNvbkZvcm1zUmVuZGVyZXJQcm9wcyxcbiAgT3duUHJvcHNPZlJlbmRlcmVyLFxuICBTdGF0ZVByb3BzT2ZKc29uRm9ybXNSZW5kZXJlcixcbiAgVUlTY2hlbWFFbGVtZW50LFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuaW1wb3J0IHsgVW5rbm93blJlbmRlcmVyIH0gZnJvbSAnLi91bmtub3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKc29uRm9ybXNCYXNlUmVuZGVyZXIgfSBmcm9tICcuL2Jhc2UucmVuZGVyZXInO1xuaW1wb3J0IHR5cGUgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2wnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UgfSBmcm9tICcuL2pzb25mb3Jtcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgZ2V0LCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgYXJlRXF1YWwgPSAoXG4gIHByZXZQcm9wczogU3RhdGVQcm9wc09mSnNvbkZvcm1zUmVuZGVyZXIsXG4gIG5leHRQcm9wczogU3RhdGVQcm9wc09mSnNvbkZvcm1zUmVuZGVyZXJcbikgPT4ge1xuICByZXR1cm4gKFxuICAgIGdldChwcmV2UHJvcHMsICdyZW5kZXJlcnMubGVuZ3RoJykgPT09IGdldChuZXh0UHJvcHMsICdyZW5kZXJlcnMubGVuZ3RoJykgJiZcbiAgICBnZXQocHJldlByb3BzLCAnY2VsbHMubGVuZ3RoJykgPT09IGdldChuZXh0UHJvcHMsICdjZWxscy5sZW5ndGgnKSAmJlxuICAgIGdldChwcmV2UHJvcHMsICd1aXNjaGVtYXMubGVuZ3RoJykgPT09IGdldChuZXh0UHJvcHMsICd1aXNjaGVtYXMubGVuZ3RoJykgJiZcbiAgICBnZXQocHJldlByb3BzLCAnc2NoZW1hJykgPT09IGdldChuZXh0UHJvcHMsICdzY2hlbWEnKSAmJlxuICAgIGlzRXF1YWwoZ2V0KHByZXZQcm9wcywgJ3Vpc2NoZW1hJyksIGdldChuZXh0UHJvcHMsICd1aXNjaGVtYScpKSAmJlxuICAgIGdldChwcmV2UHJvcHMsICdwYXRoJykgPT09IGdldChuZXh0UHJvcHMsICdwYXRoJylcbiAgKTtcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2pzb25mb3Jtcy1vdXRsZXQnLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uRm9ybXNPdXRsZXRcbiAgZXh0ZW5kcyBKc29uRm9ybXNCYXNlUmVuZGVyZXI8VUlTY2hlbWFFbGVtZW50PlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcHJldmlvdXNQcm9wczogU3RhdGVQcm9wc09mSnNvbkZvcm1zUmVuZGVyZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBqc29uZm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJlbmRlclByb3BzKHJlbmRlclByb3BzOiBPd25Qcm9wc09mUmVuZGVyZXIpIHtcbiAgICB0aGlzLnBhdGggPSByZW5kZXJQcm9wcy5wYXRoO1xuICAgIHRoaXMuc2NoZW1hID0gcmVuZGVyUHJvcHMuc2NoZW1hO1xuICAgIHRoaXMudWlzY2hlbWEgPSByZW5kZXJQcm9wcy51aXNjaGVtYTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmpzb25mb3Jtc1NlcnZpY2UuZ2V0U3RhdGUoKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuanNvbmZvcm1zU2VydmljZS4kc3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChzdGF0ZTogSnNvbkZvcm1zU3RhdGUpID0+IHRoaXMudXBkYXRlKHN0YXRlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShzdGF0ZTogSnNvbkZvcm1zU3RhdGUpIHtcbiAgICBjb25zdCBwcm9wcyA9IG1hcFN0YXRlVG9Kc29uRm9ybXNSZW5kZXJlclByb3BzKHN0YXRlLCB7XG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxuICAgICAgdWlzY2hlbWE6IHRoaXMudWlzY2hlbWEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgfSk7XG4gICAgaWYgKGFyZUVxdWFsKHRoaXMucHJldmlvdXNQcm9wcywgcHJvcHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldmlvdXNQcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBjb25zdCB7IHJlbmRlcmVycyB9ID0gcHJvcHMgYXMgSnNvbkZvcm1zUHJvcHM7XG4gICAgY29uc3Qgc2NoZW1hOiBKc29uU2NoZW1hID0gdGhpcy5zY2hlbWEgfHwgcHJvcHMuc2NoZW1hO1xuICAgIGNvbnN0IHVpc2NoZW1hID0gdGhpcy51aXNjaGVtYSB8fCBwcm9wcy51aXNjaGVtYTtcbiAgICBjb25zdCB0ZXN0ZXJDb250ZXh0ID0ge1xuICAgICAgcm9vdFNjaGVtYTogcHJvcHMucm9vdFNjaGVtYSxcbiAgICAgIGNvbmZpZzogZ2V0Q29uZmlnKHN0YXRlKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBtYXhCeShyZW5kZXJlcnMsIChyKSA9PlxuICAgICAgci50ZXN0ZXIodWlzY2hlbWEsIHNjaGVtYSwgdGVzdGVyQ29udGV4dClcbiAgICApO1xuICAgIGxldCBiZXN0Q29tcG9uZW50OiBUeXBlPGFueT4gPSBVbmtub3duUmVuZGVyZXI7XG4gICAgaWYgKFxuICAgICAgcmVuZGVyZXIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgcmVuZGVyZXIudGVzdGVyKHVpc2NoZW1hLCBzY2hlbWEsIHRlc3RlckNvbnRleHQpICE9PSAtMVxuICAgICkge1xuICAgICAgYmVzdENvbXBvbmVudCA9IHJlbmRlcmVyLnJlbmRlcmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPVxuICAgICAgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoYmVzdENvbXBvbmVudCk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY3VycmVudENvbXBvbmVudFJlZiA9XG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgaWYgKGN1cnJlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UgaW5zdGFuY2VvZiBKc29uRm9ybXNCYXNlUmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID1cbiAgICAgICAgY3VycmVudENvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBKc29uRm9ybXNCYXNlUmVuZGVyZXI8VUlTY2hlbWFFbGVtZW50PjtcbiAgICAgIGluc3RhbmNlLnVpc2NoZW1hID0gdWlzY2hlbWE7XG4gICAgICBpbnN0YW5jZS5zY2hlbWEgPSBzY2hlbWE7XG4gICAgICBpbnN0YW5jZS5wYXRoID0gdGhpcy5wYXRoO1xuICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgSnNvbkZvcm1zQ29udHJvbCkge1xuICAgICAgICBjb25zdCBjb250cm9sSW5zdGFuY2UgPSBpbnN0YW5jZSBhcyBKc29uRm9ybXNDb250cm9sO1xuICAgICAgICBpZiAoY29udHJvbEluc3RhbmNlLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IGlzQ29udHJvbChwcm9wcy51aXNjaGVtYSlcbiAgICAgICAgICAgID8gY3JlYXRlSWQocHJvcHMudWlzY2hlbWEuc2NvcGUpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAoaW5zdGFuY2UgYXMgSnNvbkZvcm1zQ29udHJvbCkuaWQgPSBpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==