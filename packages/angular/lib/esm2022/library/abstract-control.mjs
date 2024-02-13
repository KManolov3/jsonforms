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
import { Actions, computeLabel, } from '@jsonforms/core';
import { Component, Input } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { JsonFormsBaseRenderer } from './base.renderer';
import { JsonFormsAngularService } from './jsonforms.service';
import merge from 'lodash/merge';
import * as i0 from "@angular/core";
import * as i1 from "./jsonforms.service";
export class JsonFormsAbstractControl extends JsonFormsBaseRenderer {
    jsonFormsService;
    id;
    disabled;
    visible;
    form;
    subscription;
    data;
    label;
    description;
    error;
    scopedSchema;
    rootSchema;
    enabled;
    hidden;
    propsPath;
    constructor(jsonFormsService) {
        super();
        this.jsonFormsService = jsonFormsService;
        this.form = new FormControl({
            value: '',
            disabled: true,
        }, {
            updateOn: 'change',
            validators: this.validator.bind(this),
        });
    }
    getEventValue = (event) => event.value;
    onChange(ev) {
        this.jsonFormsService.updateCore(Actions.update(this.propsPath, () => this.getEventValue(ev)));
        this.triggerValidation();
    }
    shouldShowUnfocusedDescription() {
        const config = this.jsonFormsService.getConfig();
        const appliedUiSchemaOptions = merge({}, config, this.uischema.options);
        return !!appliedUiSchemaOptions.showUnfocusedDescription;
    }
    ngOnInit() {
        this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = this.mapToProps(state);
                const { data, enabled, errors, label, required, schema, rootSchema, visible, path, config, } = props;
                this.label = computeLabel(label, required, config ? config.hideRequiredAsterisk : false);
                this.data = data;
                this.error = errors;
                this.enabled = enabled;
                this.isEnabled() ? this.form.enable() : this.form.disable();
                this.hidden = !visible;
                this.scopedSchema = schema;
                this.rootSchema = rootSchema;
                this.description =
                    this.scopedSchema !== undefined ? this.scopedSchema.description : '';
                this.id = props.id;
                this.form.setValue(data);
                this.propsPath = path;
                this.mapAdditionalProps(props);
            },
        });
        this.triggerValidation();
    }
    validator = (_c) => {
        return this.error ? { error: this.error } : null;
    };
    mapAdditionalProps(_props) {
        // do nothing by default
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    isEnabled() {
        return this.enabled;
    }
    getOwnProps() {
        const props = {
            uischema: this.uischema,
            schema: this.schema,
            path: this.path,
            id: this.id,
        };
        if (this.disabled !== undefined) {
            props.enabled = !this.disabled;
        }
        if (this.visible !== undefined) {
            props.visible = this.visible;
        }
        return props;
    }
    triggerValidation() {
        // these cause the correct update of the error underline, seems to be
        // related to ionic-team/ionic#11640
        this.form.markAsTouched();
        this.form.updateValueAndValidity();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAbstractControl, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsAbstractControl, selector: "ng-component", inputs: { id: "id", disabled: "disabled", visible: "visible" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAbstractControl, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; }, propDecorators: { id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], visible: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJyYXJ5L2Fic3RyYWN0LWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEdBTWIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUVMLFdBQVcsR0FHWixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQzs7O0FBSWpDLE1BQU0sT0FBZ0Isd0JBR3BCLFNBQVEscUJBQXFDO0lBbUJ2QjtJQWhCYixFQUFFLENBQVM7SUFDWCxRQUFRLENBQVU7SUFDbEIsT0FBTyxDQUFVO0lBRTFCLElBQUksQ0FBYztJQUNsQixZQUFZLENBQWU7SUFDM0IsSUFBSSxDQUFNO0lBQ1YsS0FBSyxDQUFTO0lBQ2QsV0FBVyxDQUFTO0lBQ3BCLEtBQUssQ0FBZ0I7SUFDckIsWUFBWSxDQUFhO0lBQ3pCLFVBQVUsQ0FBYTtJQUN2QixPQUFPLENBQVU7SUFDakIsTUFBTSxDQUFVO0lBQ2hCLFNBQVMsQ0FBUztJQUVsQixZQUFzQixnQkFBeUM7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFEWSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBRTdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQ3pCO1lBQ0UsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtTQUNmLEVBQ0Q7WUFDRSxRQUFRLEVBQUUsUUFBUTtZQUNsQixVQUFVLEVB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SyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQWN0aW9ucyxcbiAgY29tcHV0ZUxhYmVsLFxuICBDb250cm9sRWxlbWVudCxcbiAgSnNvbkZvcm1zU3RhdGUsXG4gIEpzb25TY2hlbWEsXG4gIE93blByb3BzT2ZDb250cm9sLFxuICBTdGF0ZVByb3BzT2ZDb250cm9sLFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUNvbnRyb2wsXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvckZuLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgdHlwZSB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBKc29uRm9ybXNCYXNlUmVuZGVyZXIgfSBmcm9tICcuL2Jhc2UucmVuZGVyZXInO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UgfSBmcm9tICcuL2pzb25mb3Jtcy5zZXJ2aWNlJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UnO1xuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSnNvbkZvcm1zQWJzdHJhY3RDb250cm9sPFxuICAgIFByb3BzIGV4dGVuZHMgU3RhdGVQcm9wc09mQ29udHJvbFxuICA+XG4gIGV4dGVuZHMgSnNvbkZvcm1zQmFzZVJlbmRlcmVyPENvbnRyb2xFbGVtZW50PlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuXG4gIGZvcm06IEZvcm1Db250cm9sO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgZGF0YTogYW55O1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgc2NvcGVkU2NoZW1hOiBKc29uU2NoZW1hO1xuICByb290U2NoZW1hOiBKc29uU2NoZW1hO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBoaWRkZW46IGJvb2xlYW47XG4gIHByb3BzUGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBqc29uRm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Db250cm9sKFxuICAgICAge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXBkYXRlT246ICdjaGFuZ2UnLFxuICAgICAgICB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvci5iaW5kKHRoaXMpLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBnZXRFdmVudFZhbHVlID0gKGV2ZW50OiBhbnkpID0+IGV2ZW50LnZhbHVlO1xuXG4gIG9uQ2hhbmdlKGV2OiBhbnkpIHtcbiAgICB0aGlzLmpzb25Gb3Jtc1NlcnZpY2UudXBkYXRlQ29yZShcbiAgICAgIEFjdGlvbnMudXBkYXRlKHRoaXMucHJvcHNQYXRoLCAoKSA9PiB0aGlzLmdldEV2ZW50VmFsdWUoZXYpKVxuICAgICk7XG4gICAgdGhpcy50cmlnZ2VyVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgc2hvdWxkU2hvd1VuZm9jdXNlZERlc2NyaXB0aW9uKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuanNvbkZvcm1zU2VydmljZS5nZXRDb25maWcoKTtcbiAgICBjb25zdCBhcHBsaWVkVWlTY2hlbWFPcHRpb25zID0gbWVyZ2Uoe30sIGNvbmZpZywgdGhpcy51aXNjaGVtYS5vcHRpb25zKTtcbiAgICByZXR1cm4gISFhcHBsaWVkVWlTY2hlbWFPcHRpb25zLnNob3dVbmZvY3VzZWREZXNjcmlwdGlvbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuanNvbkZvcm1zU2VydmljZS4kc3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChzdGF0ZTogSnNvbkZvcm1zU3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLm1hcFRvUHJvcHMoc3RhdGUpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBlbmFibGVkLFxuICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgcm9vdFNjaGVtYSxcbiAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICB9ID0gcHJvcHM7XG4gICAgICAgIHRoaXMubGFiZWwgPSBjb21wdXRlTGFiZWwoXG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgICAgY29uZmlnID8gY29uZmlnLmhpZGVSZXF1aXJlZEFzdGVyaXNrIDogZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9ycztcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQoKSA/IHRoaXMuZm9ybS5lbmFibGUoKSA6IHRoaXMuZm9ybS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gIXZpc2libGU7XG4gICAgICAgIHRoaXMuc2NvcGVkU2NoZW1hID0gc2NoZW1hO1xuICAgICAgICB0aGlzLnJvb3RTY2hlbWEgPSByb290U2NoZW1hO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID1cbiAgICAgICAgICB0aGlzLnNjb3BlZFNjaGVtYSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zY29wZWRTY2hlbWEuZGVzY3JpcHRpb24gOiAnJztcbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHNQYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5tYXBBZGRpdGlvbmFsUHJvcHMocHJvcHMpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLnRyaWdnZXJWYWxpZGF0aW9uKCk7XG4gIH1cblxuICB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKF9jOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3IgPyB7IGVycm9yOiB0aGlzLmVycm9yIH0gOiBudWxsO1xuICB9O1xuXG4gIG1hcEFkZGl0aW9uYWxQcm9wcyhfcHJvcHM6IFByb3BzKSB7XG4gICAgLy8gZG8gbm90aGluZyBieSBkZWZhdWx0XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3duUHJvcHMoKTogT3duUHJvcHNPZkNvbnRyb2wge1xuICAgIGNvbnN0IHByb3BzOiBPd25Qcm9wc09mQ29udHJvbCA9IHtcbiAgICAgIHVpc2NoZW1hOiB0aGlzLnVpc2NoZW1hLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgIH07XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcHMuZW5hYmxlZCA9ICF0aGlzLmRpc2FibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BzLnZpc2libGUgPSB0aGlzLnZpc2libGU7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtYXBUb1Byb3BzKHN0YXRlOiBKc29uRm9ybXNTdGF0ZSk6IFByb3BzO1xuXG4gIHByb3RlY3RlZCB0cmlnZ2VyVmFsaWRhdGlvbigpIHtcbiAgICAvLyB0aGVzZSBjYXVzZSB0aGUgY29ycmVjdCB1cGRhdGUgb2YgdGhlIGVycm9yIHVuZGVybGluZSwgc2VlbXMgdG8gYmVcbiAgICAvLyByZWxhdGVkIHRvIGlvbmljLXRlYW0vaW9uaWMjMTE2NDBcbiAgICB0aGlzLmZvcm0ubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cbn1cbiJdfQ==