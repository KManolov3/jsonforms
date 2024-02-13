export declare const schema: {
    type: string;
    items: {
        type: string;
        properties: {
            plainEnum: {
                type: string;
                enum: string[];
            };
            oneOfEnum: {
                type: string;
                oneOf: {
                    const: string;
                    title: string;
                }[];
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        scope: string;
    }[];
};
export declare const data: any[];
