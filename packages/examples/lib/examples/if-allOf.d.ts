export declare const schema: {
    type: string;
    properties: {
        foo: {
            type: string;
        };
        bar: {
            type: string;
        };
        baz: {
            type: string;
        };
        nested: {
            type: string;
            properties: {
                foo: {
                    type: string;
                };
                bar: {
                    type: string;
                };
            };
            allOf: {
                if: {
                    properties: {
                        foo: {
                            const: string;
                        };
                    };
                };
                then: {
                    required: string[];
                };
            }[];
        };
    };
    allOf: ({
        if: {
            properties: {
                foo: {
                    const: string;
                };
            };
        };
        then: {
            required: string[];
        };
        allOf?: undefined;
    } | {
        allOf: {
            if: {
                properties: {
                    foo: {
                        pattern: string;
                    };
                };
            };
            then: {
                required: string[];
            };
        }[];
        if?: undefined;
        then?: undefined;
    })[];
};
export declare const uischema: {
    type: string;
    elements: {
        label: string;
        type: string;
        scope: string;
    }[];
};
