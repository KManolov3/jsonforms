export declare const schema: {
    type: string;
    required: string[];
    properties: {
        firstName: {
            type: string;
            minLength: number;
            maxLength: number;
        };
        lastName: {
            type: string;
            minLength: number;
            maxLength: number;
        };
        age: {
            type: string;
            minimum: number;
            maximum: number;
        };
        gender: {
            type: string;
            enum: string[];
        };
        height: {
            type: string;
        };
        dateOfBirth: {
            type: string;
            format: string;
        };
        rating: {
            type: string;
        };
        committer: {
            type: string;
        };
        address: {
            type: string;
            properties: {
                street: {
                    type: string;
                };
                streetnumber: {
                    type: string;
                };
                postalCode: {
                    type: string;
                };
                city: {
                    type: string;
                };
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        text: string;
        elements?: undefined;
        label?: undefined;
        rule?: undefined;
    } | {
        type: string;
        elements: {
            type: string;
            scope: string;
        }[];
        text?: undefined;
        label?: undefined;
        rule?: undefined;
    } | {
        type: string;
        label: string;
        elements: {
            type: string;
            elements: {
                type: string;
                scope: string;
            }[];
        }[];
        rule: {
            effect: string;
            condition: {
                scope: string;
                schema: {
                    const: boolean;
                };
            };
        };
        text?: undefined;
    })[];
};
export declare const data: {
    firstName: string;
    lastName: string;
    committer: boolean;
};
