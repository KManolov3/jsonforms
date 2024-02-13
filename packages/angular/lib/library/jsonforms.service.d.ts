import { CoreActions, JsonFormsRendererRegistryEntry, JsonFormsState, JsonFormsSubStates, JsonSchema, I18nActions, RankedTester, SetConfigAction, UISchemaActions, UISchemaElement, UISchemaTester, ValidationMode, Middleware } from '@jsonforms/core';
import { Observable } from 'rxjs';
import type { JsonFormsBaseRenderer } from './base.renderer';
import type Ajv from 'ajv';
import type { ErrorObject } from 'ajv';
export declare const USE_STATE_VALUE: unique symbol;
export declare class JsonFormsAngularService {
    private _state;
    private state;
    private middleware;
    init(initialState?: JsonFormsSubStates, middleware?: Middleware): void;
    get $state(): Observable<JsonFormsState>;
    /**
     * @deprecated use {@link JsonFormsAngularService.addRenderer}
     */
    registerRenderer(renderer: JsonFormsBaseRenderer<UISchemaElement>, tester: RankedTester): void;
    addRenderer(renderer: JsonFormsBaseRenderer<UISchemaElement>, tester: RankedTester): void;
    /**
     * @deprecated use {@link JsonFormsAngularService.setRenderer}
     */
    registerRenderers(renderers: JsonFormsRendererRegistryEntry[]): void;
    setRenderers(renderers: JsonFormsRendererRegistryEntry[]): void;
    /**
     * @deprecated use {@link JsonFormsAngularService.removeRenderer}
     */
    unregisterRenderer(tester: RankedTester): void;
    removeRenderer(tester: RankedTester): void;
    updateValidationMode(validationMode: ValidationMode): void;
    updateI18n<T extends I18nActions>(i18nAction: T): T;
    updateCore<T extends CoreActions>(coreAction: T): T;
    /**
     * @deprecated use {@link JsonFormsAngularService.setUiSchemas}
     */
    updateUiSchema<T extends UISchemaActions>(uischemaAction: T): T;
    setUiSchemas(uischemas: {
        tester: UISchemaTester;
        uischema: UISchemaElement;
    }[]): void;
    updateConfig<T extends SetConfigAction>(setConfigAction: T): T;
    setUiSchema(uischema: UISchemaElement | undefined): void;
    setSchema(schema: JsonSchema | undefined): void;
    setData(data: any): void;
    getLocale(): string | undefined;
    setLocale(locale: string): void;
    setReadonly(readonly: boolean): void;
    setMiddleware(middleware: Middleware): void;
    getState(): JsonFormsState;
    getConfig(): any;
    refresh(): void;
    updateCoreState(data: any | typeof USE_STATE_VALUE, schema: JsonSchema | typeof USE_STATE_VALUE, uischema: UISchemaElement | typeof USE_STATE_VALUE, ajv: Ajv | typeof USE_STATE_VALUE, validationMode: ValidationMode | typeof USE_STATE_VALUE, additionalErrors: ErrorObject[] | typeof USE_STATE_VALUE): void;
    private updateSubject;
}
//# sourceMappingURL=jsonforms.service.d.ts.map