import { UISchemaElement } from '@jsonforms/core';
export declare const schema: {
    type: string;
    properties: {
        name: {
            type: string;
            minLength: number;
            description: string;
        };
        vegetarian: {
            type: string;
        };
        birthDate: {
            type: string;
            format: string;
            description: string;
        };
        nationality: {
            type: string;
            enum: string[];
        };
    };
};
export declare const uischema: UISchemaElement;
export declare const data: {
    name: string;
    vegetarian: boolean;
    birthDate: string;
    personalData: {
        age: number;
    };
    postalCode: string;
};
