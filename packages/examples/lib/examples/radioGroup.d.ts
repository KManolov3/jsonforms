export declare const data: {};
export declare const schema: {
    type: string;
    properties: {
        exampleRadioEnum: {
            type: string;
            enum: string[];
        };
        exampleRadioOneOfEnum: {
            type: string;
            oneOf: {
                const: string;
                title: string;
            }[];
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        label: string;
        elements: {
            type: string;
            scope: string;
            options: {
                format: string;
                orientation: string;
            };
        }[];
    } | {
        type: string;
        label: string;
        elements: {
            type: string;
            scope: string;
            options: {
                format: string;
            };
        }[];
    })[];
};
