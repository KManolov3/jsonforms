export declare const data: {
    warehouseitems: {
        name: string;
        buyer: {
            email: string;
            age: number;
        };
        status: string;
    }[];
};
export declare const schema: {
    definitions: {
        warehouseitem: {
            type: string;
            properties: {
                name: {
                    type: string;
                };
                buyer: {
                    type: string;
                    properties: {
                        email: {
                            type: string;
                            format: string;
                        };
                        age: {
                            type: string;
                        };
                    };
                };
                status: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
        };
    };
    type: string;
    properties: {
        warehouseitems: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
};
export declare const uischema: {
    type: string;
    scope: string;
    options: {
        labelRef: string;
    };
};
