export declare const schema: {
    definitions: {
        itemsType: {
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
                date: {
                    type: string;
                    format: string;
                    default: string;
                };
            };
        };
        stringDef: {
            type: string;
            default: string;
        };
        numberDef: {
            type: string;
            default: number;
        };
        intDef: {
            type: string;
            default: number;
        };
        boolDef: {
            type: string;
            default: boolean;
        };
        arrayDef: {
            type: string;
            default: string[];
        };
    };
    type: string;
    properties: {
        objectArray: {
            type: string;
            items: {
                $ref: string;
            };
        };
        stringArray: {
            type: string;
            items: {
                type: string;
                default: string;
            };
        };
        objectArrayWithPropertyRefs: {
            type: string;
            items: {
                type: string;
                properties: {
                    string1: {
                        $ref: string;
                    };
                    string2: {
                        type: string;
                    };
                    number: {
                        $ref: string;
                    };
                    int: {
                        $ref: string;
                    };
                    bool: {
                        $ref: string;
                    };
                    array: {
                        $ref: string;
                    };
                };
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        scope: string;
    }[];
};
export declare const data: {};
