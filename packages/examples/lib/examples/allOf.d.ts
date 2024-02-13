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
    };
    type: string;
    properties: {
        billing_address: {
            $ref: string;
        };
        shipping_address: {
            allOf: ({
                $ref: string;
                type?: undefined;
                properties?: undefined;
                required?: undefined;
            } | {
                type: string;
                properties: {
                    type: {
                        type: string;
                        enum: string[];
                    };
                };
                required: string[];
                $ref?: undefined;
            })[];
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        label: string;
        type: string;
        scope: string;
    } | {
        type: string;
        scope: string;
        label?: undefined;
    })[];
};
