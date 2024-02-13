export declare const schema: {
    type: string;
    properties: {
        oneOfMultiEnum: {
            type: string;
            uniqueItems: boolean;
            items: {
                oneOf: {
                    const: string;
                    title: string;
                }[];
            };
        };
        multiEnum: {
            type: string;
            uniqueItems: boolean;
            items: {
                type: string;
                enum: string[];
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
export declare const data: {
    oneOfMultiEnum: string[];
    multiEnum: string[];
};
