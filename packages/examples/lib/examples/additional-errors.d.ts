import { ErrorObject } from 'ajv';
import { StateProps } from '../example';
export declare const additionalErrors: ErrorObject[];
export declare const actions: {
    label: string;
    apply: (props: StateProps) => {
        additionalErrors: ErrorObject<string, Record<string, any>, unknown>[];
        data: any;
        schema?: import("@jsonforms/core").JsonSchema;
        uischema?: import("@jsonforms/core").UISchemaElement;
        renderers: import("@jsonforms/core").JsonFormsRendererRegistryEntry[];
        cells?: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
        config?: any;
        uischemas?: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
    };
}[];
