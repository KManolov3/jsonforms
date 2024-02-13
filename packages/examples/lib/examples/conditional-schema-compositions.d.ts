export declare const schema: {
    type: string;
    properties: {
        name: {
            type: string;
            minLength: number;
            description: string;
        };
        recurrence: {
            type: string;
            enum: string[];
        };
    };
    anyOf: {
        if: {
            properties: {
                recurrence: {
                    const: string;
                };
            };
        };
        then: {
            properties: {
                lastname: {
                    type: string;
                };
                age: {
                    type: string;
                };
            };
        };
    }[];
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        elements: ({
            type: string;
            scope: string;
            rule?: undefined;
        } | {
            type: string;
            scope: string;
            rule: {
                effect: string;
                condition: {
                    scope: string;
                    schema: {
                        const: string;
                    };
                };
            };
        })[];
    }[];
};
