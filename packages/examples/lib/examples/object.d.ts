export declare const schema: {
    $schema: string;
    type: string;
    properties: {
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
};
export declare const uischemaRoot: {
    type: string;
    scope: string;
};
export declare const uischemaNonRoot: {
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
                scope: string;
                expectedValue: string;
            };
        };
        options: {
            detail: {
                type: string;
                label: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
            };
        };
    })[];
};
