export declare const schema: {
    type: string;
    properties: {
        occupation: {
            type: string;
        };
        enableArray: {
            type: string;
        };
        comments: {
            type: string;
            title: string;
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
    elements: ({
        type: string;
        scope: string;
        rule?: undefined;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        rule: {
            effect: string;
            condition: {
                type: string;
                conditions: ({
                    schema: {
                        const: string;
                    };
                    scope: string;
                } | {
                    schema: {
                        const: boolean;
                    };
                    scope: string;
                })[];
            };
        };
        options: {
            detail: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
            };
        };
    })[];
};
export declare const data: {
    occupation: string;
    comments: {
        date: string;
        message: string;
    }[];
};
