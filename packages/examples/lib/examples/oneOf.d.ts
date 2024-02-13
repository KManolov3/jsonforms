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
            additionalProperties: boolean;
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
            additionalProperties: boolean;
        };
    };
    type: string;
    properties: {
        name: {
            type: string;
        };
        addressOrUser: {
            oneOf: {
                $ref: string;
            }[];
        };
    };
    required: string[];
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        scope: string;
    }[];
};
