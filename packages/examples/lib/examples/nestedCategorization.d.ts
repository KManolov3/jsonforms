export declare const schema: {
    type: string;
    properties: {
        cat1: {
            type: string;
            properties: {
                subcat11: {
                    type: string;
                };
            };
        };
        cat2: {
            type: string;
            properties: {
                subcat21: {
                    type: string;
                };
                subcat22: {
                    type: string;
                };
            };
        };
        cat3: {
            type: string;
            properties: {
                subcat31: {
                    type: string;
                };
                subcat32: {
                    type: string;
                };
                subcat33: {
                    type: string;
                };
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        label: string;
        elements: {
            type: string;
            elements: {
                type: string;
                label: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
            }[];
        }[];
    }[];
};
export declare const data: {};
