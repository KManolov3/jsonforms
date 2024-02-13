export declare const orderSchema: {
    type: string;
    properties: {
        orderId: {
            type: string;
        };
        purchaseDate: {
            type: string;
            format: string;
        };
        price: {
            type: string;
        };
        shippingAddress: {
            $ref: string;
        };
    };
    definitions: {
        shippingAddress: {
            type: string;
            properties: {
                aptNo: {
                    type: string;
                };
                streetNumber: {
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
        elements: {
            type: string;
            scope: string;
        }[];
    }[];
};
export declare const data: {
    orderId: string;
    purchaseDate: string;
    price: number;
    shippingAddress: {
        aptNo: number;
        streetNumber: number;
    };
};
