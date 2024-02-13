export declare const schema: {
    type: string;
    properties: {
        firstName: {
            type: string;
            minLength: number;
            description: string;
        };
        secondName: {
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
        provideAddress: {
            type: string;
        };
        address: {
            type: string;
            properties: {
                street: {
                    type: string;
                };
                streetNumber: {
                    type: string;
                };
                city: {
                    type: string;
                };
                postalCode: {
                    type: string;
                    maxLength: number;
                };
            };
        };
        vegetarianOptions: {
            type: string;
            properties: {
                vegan: {
                    type: string;
                };
                favoriteVegetable: {
                    type: string;
                    enum: string[];
                };
                otherFavoriteVegetable: {
                    type: string;
                };
            };
        };
    };
};
export declare const uischema: {
    options: {
        variant: string;
        showNavButtons: boolean;
    };
    type: string;
    elements: ({
        type: string;
        label: string;
        elements: ({
            type: string;
            elements: {
                type: string;
                scope: string;
            }[];
            scope?: undefined;
        } | {
            type: string;
            scope: string;
            elements?: undefined;
        })[];
        i18n?: undefined;
        rule?: undefined;
    } | {
        type: string;
        i18n: string;
        elements: {
            type: string;
            elements: {
                type: string;
                scope: string;
            }[];
        }[];
        rule: {
            effect: string;
            condition: {
                scope: string;
                schema: {
                    const: boolean;
                };
            };
        };
        label?: undefined;
    } | {
        type: string;
        label: string;
        elements: ({
            type: string;
            scope: string;
            rule?: undefined;
        } | {
            type: string;
            scope: string;
            rule: {
                effect: string;
                condition: {
                    scope: string;
                    schema: {
                        const: string;
                    };
                };
            };
        })[];
        rule: {
            effect: string;
            condition: {
                scope: string;
                schema: {
                    const: boolean;
                };
            };
        };
        i18n?: undefined;
    })[];
};
export declare const data: {
    provideAddress: boolean;
    vegetarian: boolean;
};
