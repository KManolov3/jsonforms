import { UISchemaElement, JsonFormsCore, AnyAction, Dispatch } from '@jsonforms/core';
export declare const onChange: (dispatch: Dispatch<AnyAction>) => (_: any) => ({ data, errors }: Pick<JsonFormsCore, 'data' | 'errors'>) => import("@jsonforms/core").UpdateErrorsAction;
export declare const schema: {
    type: string;
    properties: {
        name: {
            type: string;
            minLength: number;
        };
        description: {
            type: string;
            minLength: number;
        };
    };
    required: string[];
};
export declare const uischema: UISchemaElement;
export declare const data: {};
