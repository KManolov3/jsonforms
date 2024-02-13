import { UISchemaElement } from '@jsonforms/core';
export declare const schema: {
    type: string;
    properties: {
        b: {
            type: string;
        };
        c: {
            type: string;
            minLength: number;
        };
    };
    if: {
        properties: {
            b: {
                enum: boolean[];
            };
        };
    };
    then: {
        required: string[];
    };
};
export declare const uischema: UISchemaElement;
export declare const data: {};
