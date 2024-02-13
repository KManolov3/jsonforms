export declare const schema: {
    type: string;
    properties: {
        name: {
            type: string;
            default: string;
        };
        name_noDefault: {
            type: string;
        };
        description: {
            type: string;
            default: string;
        };
        done: {
            type: string;
            default: boolean;
        };
        rating: {
            type: string;
            default: number;
        };
        cost: {
            type: string;
            default: number;
        };
        dueDate: {
            type: string;
            format: string;
            default: string;
        };
    };
    required: string[];
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        label?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: boolean;
        scope: string;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            multi: boolean;
        };
        label?: undefined;
    })[];
};
export declare const data: {
    name: string;
    name_noDefault: string;
    description: string;
    done: boolean;
    rating: number;
    cost: number;
    dueDate: string;
};
