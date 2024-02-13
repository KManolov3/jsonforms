import { JsonFormsCellRendererRegistryEntry, JsonFormsUISchemaRegistryEntry, JsonFormsRendererRegistryEntry, JsonSchema, UISchemaElement, JsonFormsI18nState } from '@jsonforms/core';
export interface ExampleDescription {
    name: string;
    label: string;
    data: any;
    schema: JsonSchema;
    uischema: UISchemaElement;
    uischemas?: JsonFormsUISchemaRegistryEntry[];
    config?: any;
    actions?: {
        label: string;
        apply: (props: StateProps) => any;
    }[];
    i18n?: JsonFormsI18nState;
}
export interface StateProps {
    data: any;
    schema?: JsonSchema;
    uischema?: UISchemaElement;
    renderers: JsonFormsRendererRegistryEntry[];
    cells?: JsonFormsCellRendererRegistryEntry[];
    config?: any;
    uischemas?: JsonFormsUISchemaRegistryEntry[];
}
