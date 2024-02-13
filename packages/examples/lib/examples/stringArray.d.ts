export declare const schema: {
    type: string;
    properties: {
        comments: {
            description: string;
            type: string;
            items: {
                type: string;
                maxLength: number;
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
    comments: string[];
};
