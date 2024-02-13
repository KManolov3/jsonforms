export declare const schema: {
    $defs: {
        Base: {
            type: string;
            properties: {
                width: {
                    type: string;
                };
            };
        };
        Child: {
            type: string;
            allOf: ({
                $ref: string;
                properties?: undefined;
            } | {
                properties: {
                    geometry: {
                        type: string;
                    };
                };
                $ref?: undefined;
            })[];
        };
    };
    type: string;
    properties: {
        element: {
            $ref: string;
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        text: string;
        scope?: undefined;
    } | {
        type: string;
        scope: string;
        text?: undefined;
    })[];
};
