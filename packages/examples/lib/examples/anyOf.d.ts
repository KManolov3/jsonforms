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
        users: {
            type: string;
            items: {
                $ref: string;
            };
        };
        addresses: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
    type: string;
    properties: {
        addressOrUser: {
            anyOf: {
                $ref: string;
            }[];
        };
        addressesOrUsers: {
            anyOf: {
                $ref: string;
            }[];
        };
        addressesOrUsersAnyOfItems: {
            type: string;
            items: {
                anyOf: {
                    $ref: string;
                }[];
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        label?: undefined;
    } | {
        type: string;
        scope: string;
        label: string;
    })[];
};
