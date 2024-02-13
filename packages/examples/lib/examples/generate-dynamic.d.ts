import { StateProps } from '../example';
export declare const actions: {
    label: string;
    apply: (props: StateProps) => {
        data: {
            id: string;
        };
        schema?: import("@jsonforms/core").JsonSchema;
        uischema?: import("@jsonforms/core").UISchemaElement;
        renderers: import("@jsonforms/core").JsonFormsRendererRegistryEntry[];
        cells?: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
        config?: any;
        uischemas?: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
    };
}[];
