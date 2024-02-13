export declare const schema: {
    type: string;
    properties: {
        postalCode: {
            type: string;
            description: string;
            maxLength: number;
        };
        recurrenceInterval: {
            type: string;
            description: string;
        };
    };
    required: string[];
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        elements: {
            type: string;
            scope: string;
            label: string;
        }[];
    }[];
};
export declare const data: {
    postalCode: string;
};
