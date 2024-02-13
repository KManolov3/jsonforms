export declare const schema: {
    type: string;
    properties: {
        price: {
            type: string;
            maximum: number;
            minimum: number;
            default: number;
        };
        age: {
            type: string;
        };
        height: {
            type: string;
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        elements: ({
            type: string;
            scope: string;
            label: {
                text: string;
            };
            options?: undefined;
        } | {
            type: string;
            scope: string;
            label?: undefined;
            options?: undefined;
        } | {
            type: string;
            scope: string;
            label: {
                text: string;
            };
            options: {
                slider: boolean;
            };
        })[];
    }[];
};
export declare const data: {};
