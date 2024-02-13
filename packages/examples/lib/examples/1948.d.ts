import { UISchemaElement } from '@jsonforms/core';
export declare const schema: {
    type: string;
    definitions: {
        import: {
            title: string;
            type: string;
            properties: {
                eClass: {
                    const: string;
                };
                document: {
                    type: string;
                };
                package: {
                    type: string;
                };
                prefix: {
                    type: string;
                };
            };
        };
    };
    properties: {
        import: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
};
export declare const uischema: UISchemaElement;
export declare const data: {
    import: {
        document: string;
        package: string;
        prefix: string;
    }[];
};
