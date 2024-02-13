export declare const schema: {
    type: string;
    properties: {
        occupation: {
            type: string;
        };
        comments: {
            type: string;
            description: string;
            minItems: number;
            maxItems: number;
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
                };
            };
        };
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
    required: string[];
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        scope: string;
        options: {
            showSortButtons: boolean;
            restrict: boolean;
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
        date: string;
        message: string;
    }[];
};
