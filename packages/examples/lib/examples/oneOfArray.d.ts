export declare const schema: {
    $schema: string;
    definitions: {
        address: {
            type: string;
            properties: {
                street_address: {
                    type: string;
                };
                city: {
                    type: string;
                };
                state: {
                    type: string;
                };
            };
            required: string[];
        };
        user: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                mail: {
                    type: string;
                };
            };
            required: string[];
        };
    };
    type: string;
    properties: {
        name: {
            type: string;
        };
        addressOrUsers: {
            type: string;
            items: {
                oneOf: {
                    $ref: string;
                }[];
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
