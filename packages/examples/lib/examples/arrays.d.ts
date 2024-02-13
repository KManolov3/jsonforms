export declare const schema: {
    type: string;
    properties: {
        comments: {
            type: string;
            items: {
                type: string;
                properties: {
                    date: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                        maxLength: number;
                    };
                    enum: {
                        type: string;
                        const: string;
                    };
                    oneOfEnum: {
                        type: string;
                        oneOf: {
                            const: string;
                        }[];
                    };
                };
            };
        };
        foo: {
            type: string;
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            showSortButtons: boolean;
        };
    })[];
};
export declare const uischemaWithSorting: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            showSortButtons: boolean;
        };
    })[];
};
export declare const data: {
    comments: ({
        date: string;
        message: string;
        oneOfEnum?: undefined;
    } | {
        date: string;
        message: string;
        oneOfEnum: string;
    })[];
};
