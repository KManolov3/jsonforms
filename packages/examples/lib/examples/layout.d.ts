export declare const schema: {
    type: string;
    properties: {
        personalData: {
            type: string;
            properties: {
                age: {
                    type: string;
                    description: string;
                };
                height: {
                    type: string;
                };
                drivingSkill: {
                    type: string;
                    maximum: number;
                    minimum: number;
                    default: number;
                };
            };
            required: string[];
        };
        vegetarian: {
            type: string;
        };
        birthDate: {
            type: string;
            format: string;
        };
        occupation: {
            type: string;
        };
        postalCode: {
            type: string;
            maxLength: number;
        };
        name: {
            type: string;
            minLength: number;
            description: string;
        };
        nationality: {
            type: string;
            enum: string[];
        };
    };
    required: string[];
};
export declare const uischemaVertical: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const uischemaHorizontal: {
    type: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const uischemaGroup: {
    type: string;
    label: string;
    elements: {
        type: string;
        label: string;
        scope: string;
    }[];
};
export declare const uischemaComplex: {
    type: string;
    label: string;
    elements: {
        type: string;
        elements: {
            type: string;
            elements: {
                type: string;
                label: string;
                scope: string;
            }[];
        }[];
    }[];
};
export declare const data: {
    name: string;
    vegetarian: boolean;
    birthDate: string;
    personalData: {
        age: number;
    };
    postalCode: string;
};
