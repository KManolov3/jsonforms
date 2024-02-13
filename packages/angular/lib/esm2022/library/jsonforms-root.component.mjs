/*
  The MIT License

  Copyright (c) 2017-2020 EclipseSource Munich
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
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Actions, defaultMiddleware, } from '@jsonforms/core';
import Ajv from 'ajv';
import { JsonFormsAngularService, USE_STATE_VALUE } from './jsonforms.service';
import * as i0 from "@angular/core";
import * as i1 from "./jsonforms.service";
import * as i2 from "./jsonforms.component";
// TODO Can this be rewritten to not use DoCheck and OnChanges?
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
export class JsonForms {
    jsonformsService;
    uischema;
    schema;
    data;
    renderers;
    uischemas;
    dataChange = new EventEmitter();
    readonly;
    validationMode;
    ajv;
    config;
    i18n;
    additionalErrors;
    middleware = defaultMiddleware;
    errors = new EventEmitter();
    previousData;
    previousErrors;
    initialized = false;
    oldI18N;
    constructor(jsonformsService) {
        this.jsonformsService = jsonformsService;
    }
    ngOnInit() {
        this.jsonformsService.init({
            core: {
                data: this.data,
                uischema: this.uischema,
                schema: this.schema,
                ajv: this.ajv,
                validationMode: this.validationMode,
                additionalErrors: this.additionalErrors,
            },
            uischemas: this.uischemas,
            i18n: this.i18n,
            renderers: this.renderers,
            config: this.config,
            readonly: this.readonly,
        }, this.middleware);
        this.jsonformsService.$state.subscribe((state) => {
            const data = state?.jsonforms?.core?.data;
            const errors = state?.jsonforms?.core?.errors;
            if (this.previousData !== data) {
                this.previousData = data;
                this.dataChange.emit(data);
            }
            if (this.previousErrors !== errors) {
                this.previousErrors = errors;
                this.errors.emit(errors);
            }
        });
        this.oldI18N = this.i18n;
        this.initialized = true;
    }
    ngDoCheck() {
        // we can't use ngOnChanges as then nested i18n changes will not be detected
        // the update will result in a no-op when the parameters did not change
        if (this.oldI18N?.locale !== this.i18n?.locale ||
            this.oldI18N?.translate !== this.i18n?.translate ||
            this.oldI18N?.translateError !== this.i18n?.translateError) {
            this.jsonformsService.updateI18n(Actions.updateI18n(this.oldI18N?.locale === this.i18n?.locale
                ? this.jsonformsService.getState().jsonforms.i18n.locale
                : this.i18n?.locale, this.oldI18N?.translate === this.i18n?.translate
                ? this.jsonformsService.getState().jsonforms.i18n.translate
                : this.i18n?.translate, this.oldI18N?.translateError === this.i18n?.translateError
                ? this.jsonformsService.getState().jsonforms.i18n.translateError
                : this.i18n?.translateError));
            this.oldI18N = this.i18n;
        }
    }
    ngOnChanges(changes) {
        if (!this.initialized) {
            return;
        }
        const newData = changes.data;
        const newSchema = changes.schema;
        const newUiSchema = changes.uischema;
        const newRenderers = changes.renderers;
        const newUischemas = changes.uischemas;
        const newI18n = changes.i18n;
        const newReadonly = changes.readonly;
        const newValidationMode = changes.validationMode;
        const newAjv = changes.ajv;
        const newConfig = changes.config;
        const newAdditionalErrors = changes.additionalErrors;
        if (newData ||
            newSchema ||
            newUiSchema ||
            newValidationMode ||
            newAjv ||
            newAdditionalErrors) {
            this.jsonformsService.updateCoreState(newData ? newData.currentValue : USE_STATE_VALUE, newSchema ? newSchema.currentValue : USE_STATE_VALUE, newUiSchema ? newUiSchema.currentValue : USE_STATE_VALUE, newAjv ? newAjv.currentValue : USE_STATE_VALUE, newValidationMode ? newValidationMode.currentValue : USE_STATE_VALUE, newAdditionalErrors ? newAdditionalErrors.currentValue : USE_STATE_VALUE);
        }
        if (newRenderers && !newRenderers.isFirstChange()) {
            this.jsonformsService.setRenderers(newRenderers.currentValue);
        }
        if (newUischemas && !newUischemas.isFirstChange()) {
            this.jsonformsService.setUiSchemas(newUischemas.currentValue);
        }
        if (newI18n && !newI18n.isFirstChange()) {
            this.jsonformsService.updateI18n(Actions.updateI18n(newI18n.currentValue?.locale, newI18n.currentValue?.translate, newI18n.currentValue?.translateError));
        }
        if (newReadonly && !newReadonly.isFirstChange()) {
            this.jsonformsService.setReadonly(newReadonly.currentValue);
        }
        if (newConfig && !newConfig.isFirstChange()) {
            this.jsonformsService.updateConfig(Actions.setConfig(newConfig.currentValue));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonForms, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: JsonForms, selector: "jsonforms", inputs: { uischema: "uischema", schema: "schema", data: "data", renderers: "renderers", uischemas: "uischemas", readonly: "readonly", validationMode: "validationMode", ajv: "ajv", config: "config", i18n: "i18n", additionalErrors: "additionalErrors", middleware: "middleware" }, outputs: { dataChange: "dataChange", errors: "errors" }, providers: [JsonFormsAngularService], usesOnChanges: true, ngImport: i0, template: '<jsonforms-outlet></jsonforms-outlet>', isInline: true, dependencies: [{ kind: "directive", type: i2.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonForms, decorators: [{
            type: Component,
            args: [{
                    selector: 'jsonforms',
                    template: '<jsonforms-outlet></jsonforms-outlet>',
                    providers: [JsonFormsAngularService],
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; }, propDecorators: { uischema: [{
                type: Input
            }], schema: [{
                type: Input
            }], data: [{
                type: Input
            }], renderers: [{
                type: Input
            }], uischemas: [{
                type: Input
            }], dataChange: [{
                type: Output
            }], readonly: [{
                type: Input
            }], validationMode: [{
                type: Input
            }], ajv: [{
                type: Input
            }], config: [{
                type: Input
            }], i18n: [{
                type: Input
            }], additionalErrors: [{
                type: Input
            }], middleware: [{
                type: Input
            }], errors: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbmZvcm1zLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnJhcnkvanNvbmZvcm1zLXJvb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFRUCxpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEdBQW9CLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUUvRSwrREFBK0Q7QUFDL0QsNkRBQTZEO0FBTTdELE1BQU0sT0FBTyxTQUFTO0lBc0JBO0lBckJYLFFBQVEsQ0FBa0I7SUFDMUIsTUFBTSxDQUFhO0lBQ25CLElBQUksQ0FBTTtJQUNWLFNBQVMsQ0FBbUM7SUFDNUMsU0FBUyxDQUEwRDtJQUNsRSxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUN0QyxRQUFRLENBQVU7SUFDbEIsY0FBYyxDQUFpQjtJQUMvQixHQUFHLENBQU07SUFDVCxNQUFNLENBQU07SUFDWixJQUFJLENBQXFCO0lBQ3pCLGdCQUFnQixDQUFnQjtJQUNoQyxVQUFVLEdBQWUsaUJBQWlCLENBQUM7SUFDMUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBRTdDLFlBQVksQ0FBTTtJQUNsQixjQUFjLENBQWdCO0lBRTlCLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDNUIsT0FBTyxDQUFxQjtJQUU1QixZQUFvQixnQkFBeUM7UUFBekMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUFHLENBQUM7SUFFakUsUUFBUTtRQUNOLElBQUksQ0FBQyxn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Q0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUMxQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO3dHQWpKVSxTQUFTOzRGQUFULFNBQVMsbVhBRlQsQ0FBQyx1QkFBdUIsQ0FBQywrQ0FEMUIsdUNBQXVDOzs0RkFHdEMsU0FBUztrQkFMckIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDOzhHQUVVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksVUFBVTtzQkFBbkIsTUFBTTtnQkFDRSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIE1JVCBMaWNlbnNlXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERvQ2hlY2ssXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9ucyxcbiAgSnNvbkZvcm1zSTE4blN0YXRlLFxuICBKc29uRm9ybXNSZW5kZXJlclJlZ2lzdHJ5RW50cnksXG4gIEpzb25TY2hlbWEsXG4gIE1pZGRsZXdhcmUsXG4gIFVJU2NoZW1hRWxlbWVudCxcbiAgVUlTY2hlbWFUZXN0ZXIsXG4gIFZhbGlkYXRpb25Nb2RlLFxuICBkZWZhdWx0TWlkZGxld2FyZSxcbn0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCBBanYsIHsgRXJyb3JPYmplY3QgfSBmcm9tICdhanYnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIFVTRV9TVEFURV9WQUxVRSB9IGZyb20gJy4vanNvbmZvcm1zLnNlcnZpY2UnO1xuXG4vLyBUT0RPIENhbiB0aGlzIGJlIHJld3JpdHRlbiB0byBub3QgdXNlIERvQ2hlY2sgYW5kIE9uQ2hhbmdlcz9cbi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1jb25mbGljdGluZy1saWZlY3ljbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pzb25mb3JtcycsXG4gIHRlbXBsYXRlOiAnPGpzb25mb3Jtcy1vdXRsZXQ+PC9qc29uZm9ybXMtb3V0bGV0PicsXG4gIHByb3ZpZGVyczogW0pzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1zIGltcGxlbWVudHMgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSB1aXNjaGVtYTogVUlTY2hlbWFFbGVtZW50O1xuICBASW5wdXQoKSBzY2hlbWE6IEpzb25TY2hlbWE7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgcmVuZGVyZXJzOiBKc29uRm9ybXNSZW5kZXJlclJlZ2lzdHJ5RW50cnlbXTtcbiAgQElucHV0KCkgdWlzY2hlbWFzOiB7IHRlc3RlcjogVUlTY2hlbWFUZXN0ZXI7IHVpc2NoZW1hOiBVSVNjaGVtYUVsZW1lbnQgfVtdO1xuICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgdmFsaWRhdGlvbk1vZGU6IFZhbGlkYXRpb25Nb2RlO1xuICBASW5wdXQoKSBhanY6IEFqdjtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIGkxOG46IEpzb25Gb3Jtc0kxOG5TdGF0ZTtcbiAgQElucHV0KCkgYWRkaXRpb25hbEVycm9yczogRXJyb3JPYmplY3RbXTtcbiAgQElucHV0KCkgbWlkZGxld2FyZTogTWlkZGxld2FyZSA9IGRlZmF1bHRNaWRkbGV3YXJlO1xuICBAT3V0cHV0KCkgZXJyb3JzID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvck9iamVjdFtdPigpO1xuXG4gIHByaXZhdGUgcHJldmlvdXNEYXRhOiBhbnk7XG4gIHByaXZhdGUgcHJldmlvdXNFcnJvcnM6IEVycm9yT2JqZWN0W107XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBvbGRJMThOOiBKc29uRm9ybXNJMThuU3RhdGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uZm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmpzb25mb3Jtc1NlcnZpY2UuaW5pdChcbiAgICAgIHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICB1aXNjaGVtYTogdGhpcy51aXNjaGVtYSxcbiAgICAgICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxuICAgICAgICAgIGFqdjogdGhpcy5hanYsXG4gICAgICAgICAgdmFsaWRhdGlvbk1vZGU6IHRoaXMudmFsaWRhdGlvbk1vZGUsXG4gICAgICAgICAgYWRkaXRpb25hbEVycm9yczogdGhpcy5hZGRpdGlvbmFsRXJyb3JzLFxuICAgICAgICB9LFxuICAgICAgICB1aXNjaGVtYXM6IHRoaXMudWlzY2hlbWFzLFxuICAgICAgICBpMThuOiB0aGlzLmkxOG4sXG4gICAgICAgIHJlbmRlcmVyczogdGhpcy5yZW5kZXJlcnMsXG4gICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICAgIHJlYWRvbmx5OiB0aGlzLnJlYWRvbmx5LFxuICAgICAgfSxcbiAgICAgIHRoaXMubWlkZGxld2FyZVxuICAgICk7XG4gICAgdGhpcy5qc29uZm9ybXNTZXJ2aWNlLiRzdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gc3RhdGU/Lmpzb25mb3Jtcz8uY29yZT8uZGF0YTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHN0YXRlPy5qc29uZm9ybXM/LmNvcmU/LmVycm9ycztcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzRGF0YSAhPT0gZGF0YSkge1xuICAgICAgICB0aGlzLnByZXZpb3VzRGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJldmlvdXNFcnJvcnMgIT09IGVycm9ycykge1xuICAgICAgICB0aGlzLnByZXZpb3VzRXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB0aGlzLmVycm9ycy5lbWl0KGVycm9ycyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbGRJMThOID0gdGhpcy5pMThuO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIC8vIHdlIGNhbid0IHVzZSBuZ09uQ2hhbmdlcyBhcyB0aGVuIG5lc3RlZCBpMThuIGNoYW5nZXMgd2lsbCBub3QgYmUgZGV0ZWN0ZWRcbiAgICAvLyB0aGUgdXBkYXRlIHdpbGwgcmVzdWx0IGluIGEgbm8tb3Agd2hlbiB0aGUgcGFyYW1ldGVycyBkaWQgbm90IGNoYW5nZVxuICAgIGlmIChcbiAgICAgIHRoaXMub2xkSTE4Tj8ubG9jYWxlICE9PSB0aGlzLmkxOG4/LmxvY2FsZSB8fFxuICAgICAgdGhpcy5vbGRJMThOPy50cmFuc2xhdGUgIT09IHRoaXMuaTE4bj8udHJhbnNsYXRlIHx8XG4gICAgICB0aGlzLm9sZEkxOE4/LnRyYW5zbGF0ZUVycm9yICE9PSB0aGlzLmkxOG4/LnRyYW5zbGF0ZUVycm9yXG4gICAgKSB7XG4gICAgICB0aGlzLmpzb25mb3Jtc1NlcnZpY2UudXBkYXRlSTE4bihcbiAgICAgICAgQWN0aW9ucy51cGRhdGVJMThuKFxuICAgICAgICAgIHRoaXMub2xkSTE4Tj8ubG9jYWxlID09PSB0aGlzLmkxOG4/LmxvY2FsZVxuICAgICAgICAgICAgPyB0aGlzLmpzb25mb3Jtc1NlcnZpY2UuZ2V0U3RhdGUoKS5qc29uZm9ybXMuaTE4bi5sb2NhbGVcbiAgICAgICAgICAgIDogdGhpcy5pMThuPy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5vbGRJMThOPy50cmFuc2xhdGUgPT09IHRoaXMuaTE4bj8udHJhbnNsYXRlXG4gICAgICAgICAgICA/IHRoaXMuanNvbmZvcm1zU2VydmljZS5nZXRTdGF0ZSgpLmpzb25mb3Jtcy5pMThuLnRyYW5zbGF0ZVxuICAgICAgICAgICAgOiB0aGlzLmkxOG4/LnRyYW5zbGF0ZSxcbiAgICAgICAgICB0aGlzLm9sZEkxOE4/LnRyYW5zbGF0ZUVycm9yID09PSB0aGlzLmkxOG4/LnRyYW5zbGF0ZUVycm9yXG4gICAgICAgICAgICA/IHRoaXMuanNvbmZvcm1zU2VydmljZS5nZXRTdGF0ZSgpLmpzb25mb3Jtcy5pMThuLnRyYW5zbGF0ZUVycm9yXG4gICAgICAgICAgICA6IHRoaXMuaTE4bj8udHJhbnNsYXRlRXJyb3JcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMub2xkSTE4TiA9IHRoaXMuaTE4bjtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0RhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgY29uc3QgbmV3U2NoZW1hID0gY2hhbmdlcy5zY2hlbWE7XG4gICAgY29uc3QgbmV3VWlTY2hlbWEgPSBjaGFuZ2VzLnVpc2NoZW1hO1xuICAgIGNvbnN0IG5ld1JlbmRlcmVycyA9IGNoYW5nZXMucmVuZGVyZXJzO1xuICAgIGNvbnN0IG5ld1Vpc2NoZW1hcyA9IGNoYW5nZXMudWlzY2hlbWFzO1xuICAgIGNvbnN0IG5ld0kxOG4gPSBjaGFuZ2VzLmkxOG47XG4gICAgY29uc3QgbmV3UmVhZG9ubHkgPSBjaGFuZ2VzLnJlYWRvbmx5O1xuICAgIGNvbnN0IG5ld1ZhbGlkYXRpb25Nb2RlID0gY2hhbmdlcy52YWxpZGF0aW9uTW9kZTtcbiAgICBjb25zdCBuZXdBanYgPSBjaGFuZ2VzLmFqdjtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjaGFuZ2VzLmNvbmZpZztcbiAgICBjb25zdCBuZXdBZGRpdGlvbmFsRXJyb3JzID0gY2hhbmdlcy5hZGRpdGlvbmFsRXJyb3JzO1xuXG4gICAgaWYgKFxuICAgICAgbmV3RGF0YSB8fFxuICAgICAgbmV3U2NoZW1hIHx8XG4gICAgICBuZXdVaVNjaGVtYSB8fFxuICAgICAgbmV3VmFsaWRhdGlvbk1vZGUgfHxcbiAgICAgIG5ld0FqdiB8fFxuICAgICAgbmV3QWRkaXRpb25hbEVycm9yc1xuICAgICkge1xuICAgICAgdGhpcy5qc29uZm9ybXNTZXJ2aWNlLnVwZGF0ZUNvcmVTdGF0ZShcbiAgICAgICAgbmV3RGF0YSA/IG5ld0RhdGEuY3VycmVudFZhbHVlIDogVVNFX1NUQVRFX1ZBTFVFLFxuICAgICAgICBuZXdTY2hlbWEgPyBuZXdTY2hlbWEuY3VycmVudFZhbHVlIDogVVNFX1NUQVRFX1ZBTFVFLFxuICAgICAgICBuZXdVaVNjaGVtYSA/IG5ld1VpU2NoZW1hLmN1cnJlbnRWYWx1ZSA6IFVTRV9TVEFURV9WQUxVRSxcbiAgICAgICAgbmV3QWp2ID8gbmV3QWp2LmN1cnJlbnRWYWx1ZSA6IFVTRV9TVEFURV9WQUxVRSxcbiAgICAgICAgbmV3VmFsaWRhdGlvbk1vZGUgPyBuZXdWYWxpZGF0aW9uTW9kZS5jdXJyZW50VmFsdWUgOiBVU0VfU1RBVEVfVkFMVUUsXG4gICAgICAgIG5ld0FkZGl0aW9uYWxFcnJvcnMgPyBuZXdBZGRpdGlvbmFsRXJyb3JzLmN1cnJlbnRWYWx1ZSA6IFVTRV9TVEFURV9WQUxVRVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobmV3UmVuZGVyZXJzICYmICFuZXdSZW5kZXJlcnMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmpzb25mb3Jtc1NlcnZpY2Uuc2V0UmVuZGVyZXJzKG5ld1JlbmRlcmVycy5jdXJyZW50VmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChuZXdVaXNjaGVtYXMgJiYgIW5ld1Vpc2NoZW1hcy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuanNvbmZvcm1zU2VydmljZS5zZXRVaVNjaGVtYXMobmV3VWlzY2hlbWFzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0kxOG4gJiYgIW5ld0kxOG4uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmpzb25mb3Jtc1NlcnZpY2UudXBkYXRlSTE4bihcbiAgICAgICAgQWN0aW9ucy51cGRhdGVJMThuKFxuICAgICAgICAgIG5ld0kxOG4uY3VycmVudFZhbHVlPy5sb2NhbGUsXG4gICAgICAgICAgbmV3STE4bi5jdXJyZW50VmFsdWU/LnRyYW5zbGF0ZSxcbiAgICAgICAgICBuZXdJMThuLmN1cnJlbnRWYWx1ZT8udHJhbnNsYXRlRXJyb3JcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobmV3UmVhZG9ubHkgJiYgIW5ld1JlYWRvbmx5LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5qc29uZm9ybXNTZXJ2aWNlLnNldFJlYWRvbmx5KG5ld1JlYWRvbmx5LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0NvbmZpZyAmJiAhbmV3Q29uZmlnLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5qc29uZm9ybXNTZXJ2aWNlLnVwZGF0ZUNvbmZpZyhcbiAgICAgICAgQWN0aW9ucy5zZXRDb25maWcobmV3Q29uZmlnLmN1cnJlbnRWYWx1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=