export declare const personCoreSchema: {
    type: string;
    properties: {
        name: {
            type: string;
            minLength: number;
            description: string;
        };
        vegetarian: {
            type: string;
        };
        birthDate: {
            type: string;
            format: string;
            description: string;
        };
        nationality: {
            type: string;
            enum: string[];
        };
    };
};
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
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        text: string;
        elements?: undefined;
    } | {
        type: string;
        elements: ({
            type: string;
            scope: string;
            suggestion?: undefined;
        } | {
            type: string;
            scope: string;
            suggestion: string[];
        })[];
        text?: undefined;
    })[];
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
