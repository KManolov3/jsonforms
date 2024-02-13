export declare const schema: {
    type: string;
    properties: {
        comments: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    message1: {
                        type: string;
                    };
                    message2: {
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        scope: string;
        options: {
            elementLabelProp: string;
            detail: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
            };
        };
    }[];
};
export declare const data: {
    comments: {
        message1: string;
        message2: string;
    }[];
};
