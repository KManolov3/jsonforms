export declare const schema: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        dead: {
            type: string;
        };
        kindOfDead: {
            type: string;
            enum: string[];
        };
        vegetables: {
            type: string;
        };
        kindOfVegetables: {
            type: string;
            enum: string[];
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        label: string;
        scope: string;
        elements?: undefined;
    } | {
        type: string;
        elements: ({
            type: string;
            label: string;
            scope: string;
            rule?: undefined;
        } | {
            type: string;
            label: string;
            scope: string;
            rule: {
                effect: string;
                condition: {
                    scope: string;
                    schema: {
                        const: boolean;
                    };
                };
            };
        })[];
        label?: undefined;
        scope?: undefined;
    })[];
};
export declare const data: {
    name: string;
    dead: boolean;
    vegetables: boolean;
};
