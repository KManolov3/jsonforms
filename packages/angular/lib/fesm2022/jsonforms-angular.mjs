import * as i0 from '@angular/core';
import { Directive, Input, Component, EventEmitter, Output, NgModule } from '@angular/core';
import { configReducer, setConfig, i18nReducer, updateI18n, generateJsonSchema, generateDefaultUISchema, Actions, defaultMiddleware, coreReducer, uischemaRegistryReducer, computeLabel, mapStateToControlProps, mapStateToControlWithDetailProps, mapStateToArrayControlProps, mapStateToJsonFormsRendererProps, getConfig, isControl, createId } from '@jsonforms/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep, get, isEqual } from 'lodash';
import merge from 'lodash/merge';
import maxBy from 'lodash/maxBy';
import 'ajv';

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
class JsonFormsBaseRenderer {
    uischema;
    schema;
    path;
    getOwnProps() {
        return {
            uischema: this.uischema,
            schema: this.schema,
            path: this.path,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsBaseRenderer, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsBaseRenderer, inputs: { uischema: "uischema", schema: "schema", path: "path" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsBaseRenderer, decorators: [{
            type: Directive
        }], propDecorators: { uischema: [{
                type: Input
            }], schema: [{
                type: Input
            }], path: [{
                type: Input
            }] } });

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
const USE_STATE_VALUE = Symbol('Marker to use state value');
class JsonFormsAngularService {
    _state;
    state;
    middleware;
    init(initialState = {
        core: {
            data: undefined,
            schema: undefined,
            uischema: undefined,
            validationMode: 'ValidateAndShow',
            additionalErrors: undefined,
        },
    }, middleware = defaultMiddleware) {
        this.middleware = middleware;
        this._state = initialState;
        this._state.config = configReducer(undefined, setConfig(this._state.config));
        this._state.i18n = i18nReducer(this._state.i18n, updateI18n(this._state.i18n?.locale, this._state.i18n?.translate, this._state.i18n?.translateError));
        this.state = new BehaviorSubject({ jsonforms: this._state });
        const data = initialState.core.data;
        const schema = initialState.core.schema ?? generateJsonSchema(data);
        const uischema = initialState.core.uischema ?? generateDefaultUISchema(schema);
        this.updateCore(Actions.init(data, schema, uischema));
    }
    get $state() {
        if (!this.state) {
            throw new Error('Please call init first!');
        }
        return this.state.asObservable();
    }
    /**
     * @deprecated use {@link JsonFormsAngularService.addRenderer}
     */
    registerRenderer(renderer, tester) {
        this.addRenderer(renderer, tester);
    }
    addRenderer(renderer, tester) {
        this._state.renderers.push({ renderer, tester });
        this.updateSubject();
    }
    /**
     * @deprecated use {@link JsonFormsAngularService.setRenderer}
     */
    registerRenderers(renderers) {
        this.setRenderers(renderers);
    }
    setRenderers(renderers) {
        this._state.renderers = renderers;
        this.updateSubject();
    }
    /**
     * @deprecated use {@link JsonFormsAngularService.removeRenderer}
     */
    unregisterRenderer(tester) {
        this.removeRenderer(tester);
    }
    removeRenderer(tester) {
        const findIndex = this._state.renderers.findIndex((v) => v.tester === tester);
        if (findIndex === -1) {
            return;
        }
        const renderers = this._state.renderers.filter((v) => v.tester !== tester);
        this._state.renderers = renderers;
        this.updateSubject();
    }
    updateValidationMode(validationMode) {
        const coreState = this.middleware(this._state.core, Actions.setValidationMode(validationMode), coreReducer);
        this._state.core = coreState;
        this.updateSubject();
    }
    updateI18n(i18nAction) {
        const i18nState = i18nReducer(this._state.i18n, i18nAction);
        if (i18nState !== this._state.i18n) {
            this._state.i18n = i18nState;
            this.updateSubject();
        }
        return i18nAction;
    }
    updateCore(coreAction) {
        const coreState = this.middleware(this._state.core, coreAction, coreReducer);
        if (coreState !== this._state.core) {
            this._state.core = coreState;
            this.updateSubject();
        }
        return coreAction;
    }
    /**
     * @deprecated use {@link JsonFormsAngularService.setUiSchemas}
     */
    updateUiSchema(uischemaAction) {
        const uischemaState = uischemaRegistryReducer(this._state.uischemas, uischemaAction);
        this._state.uischemas = uischemaState;
        this.updateSubject();
        return uischemaAction;
    }
    setUiSchemas(uischemas) {
        this._state.uischemas = uischemas;
        this.updateSubject();
    }
    updateConfig(setConfigAction) {
        const configState = configReducer(this._state.config, setConfigAction);
        this._state.config = configState;
        this.updateSubject();
        return setConfigAction;
    }
    setUiSchema(uischema) {
        const newUiSchema = uischema ?? generateDefaultUISchema(this._state.core.schema);
        const coreState = this.middleware(this._state.core, Actions.updateCore(this._state.core.data, this._state.core.schema, newUiSchema), coreReducer);
        if (coreState !== this._state.core) {
            this._state.core = coreState;
            this.updateSubject();
        }
    }
    setSchema(schema) {
        const coreState = this.middleware(this._state.core, Actions.updateCore(this._state.core.data, schema ?? generateJsonSchema(this._state.core.data), this._state.core.uischema), coreReducer);
        if (coreState !== this._state.core) {
            this._state.core = coreState;
            this.updateSubject();
        }
    }
    setData(data) {
        const coreState = this.middleware(this._state.core, Actions.updateCore(data, this._state.core.schema, this._state.core.uischema), coreReducer);
        if (coreState !== this._state.core) {
            this._state.core = coreState;
            this.updateSubject();
        }
    }
    getLocale() {
        return this._state.i18n?.locale;
    }
    setLocale(locale) {
        this._state.i18n.locale = locale;
        this.updateSubject();
    }
    setReadonly(readonly) {
        this._state.readonly = readonly;
        this.updateSubject();
    }
    setMiddleware(middleware) {
        this._state.middleware = middleware;
        this.updateSubject();
    }
    getState() {
        return cloneDeep({ jsonforms: this._state });
    }
    getConfig() {
        return cloneDeep(this._state.config);
    }
    refresh() {
        this.updateSubject();
    }
    updateCoreState(data, schema, uischema, ajv, validationMode, additionalErrors) {
        const newData = data === USE_STATE_VALUE ? this._state.core.data : data;
        const newSchema = schema === USE_STATE_VALUE
            ? this._state.core.schema
            : schema ?? generateJsonSchema(newData);
        const newUischema = uischema === USE_STATE_VALUE
            ? this._state.core.uischema
            : uischema ?? generateDefaultUISchema(newSchema);
        const newAjv = ajv === USE_STATE_VALUE ? this._state.core.ajv : ajv;
        const newValidationMode = validationMode === USE_STATE_VALUE
            ? this._state.core.validationMode
            : validationMode;
        const newAdditionalErrors = additionalErrors === USE_STATE_VALUE
            ? this._state.core.additionalErrors
            : additionalErrors;
        this.updateCore(Actions.updateCore(newData, newSchema, newUischema, {
            ajv: newAjv,
            validationMode: newValidationMode,
            additionalErrors: newAdditionalErrors,
        }));
    }
    updateSubject() {
        this.state.next({ jsonforms: this._state });
    }
}

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
class JsonFormsAbstractControl extends JsonFormsBaseRenderer {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAbstractControl, deps: [{ token: JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsAbstractControl, selector: "ng-component", inputs: { id: "id", disabled: "disabled", visible: "visible" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAbstractControl, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: JsonFormsAngularService }]; }, propDecorators: { id: [{
                type: Input
            }], disabled: [{
                type: Input
            }], visible: [{
                type: Input
            }] } });

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
class JsonFormsControl extends JsonFormsAbstractControl {
    mapToProps(state) {
        const props = mapStateToControlProps(state, this.getOwnProps());
        return { ...props };
    }
}
class JsonFormsControlWithDetail extends JsonFormsAbstractControl {
    mapToProps(state) {
        const props = mapStateToControlWithDetailProps(state, this.getOwnProps());
        return { ...props };
    }
}

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
class JsonFormsArrayControl extends JsonFormsAbstractControl {
    mapToProps(state) {
        const props = mapStateToArrayControlProps(state, this.getOwnProps());
        return { ...props };
    }
}

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
class UnknownRenderer {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UnknownRenderer, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: UnknownRenderer, selector: "unknown.renderer", ngImport: i0, template: 'No applicable renderer found!', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: UnknownRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'unknown.renderer',
                    template: 'No applicable renderer found!',
                }]
        }] });

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
const areEqual = (prevProps, nextProps) => {
    return (get(prevProps, 'renderers.length') === get(nextProps, 'renderers.length') &&
        get(prevProps, 'cells.length') === get(nextProps, 'cells.length') &&
        get(prevProps, 'uischemas.length') === get(nextProps, 'uischemas.length') &&
        get(prevProps, 'schema') === get(nextProps, 'schema') &&
        isEqual(get(prevProps, 'uischema'), get(nextProps, 'uischema')) &&
        get(prevProps, 'path') === get(nextProps, 'path'));
};
class JsonFormsOutlet extends JsonFormsBaseRenderer {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsOutlet, deps: [{ token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsOutlet, selector: "jsonforms-outlet", inputs: { renderProps: "renderProps" }, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsOutlet, decorators: [{
            type: Directive,
            args: [{
                    selector: 'jsonforms-outlet',
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: JsonFormsAngularService }]; }, propDecorators: { renderProps: [{
                type: Input
            }] } });

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
// TODO Can this be rewritten to not use DoCheck and OnChanges?
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
class JsonForms {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonForms, deps: [{ token: JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: JsonForms, selector: "jsonforms", inputs: { uischema: "uischema", schema: "schema", data: "data", renderers: "renderers", uischemas: "uischemas", readonly: "readonly", validationMode: "validationMode", ajv: "ajv", config: "config", i18n: "i18n", additionalErrors: "additionalErrors", middleware: "middleware" }, outputs: { dataChange: "dataChange", errors: "errors" }, providers: [JsonFormsAngularService], usesOnChanges: true, ngImport: i0, template: '<jsonforms-outlet></jsonforms-outlet>', isInline: true, dependencies: [{ kind: "directive", type: JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonForms, decorators: [{
            type: Component,
            args: [{
                    selector: 'jsonforms',
                    template: '<jsonforms-outlet></jsonforms-outlet>',
                    providers: [JsonFormsAngularService],
                }]
        }], ctorParameters: function () { return [{ type: JsonFormsAngularService }]; }, propDecorators: { uischema: [{
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
class JsonFormsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsModule, declarations: [JsonFormsOutlet, UnknownRenderer, JsonForms], exports: [JsonFormsOutlet, JsonForms] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [JsonFormsOutlet, UnknownRenderer, JsonForms],
                    exports: [JsonFormsOutlet, JsonForms],
                }]
        }] });

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

/**
 * Generated bundle index. Do not edit.
 */

export { JsonForms, JsonFormsAbstractControl, JsonFormsAngularService, JsonFormsArrayControl, JsonFormsBaseRenderer, JsonFormsControl, JsonFormsControlWithDetail, JsonFormsModule, JsonFormsOutlet, USE_STATE_VALUE, UnknownRenderer };
//# sourceMappingURL=jsonforms-angular.mjs.map
