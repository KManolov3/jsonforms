import { Translator } from '@jsonforms/core';
export declare const schema: {
    type: string;
    properties: {
        comments: {
            type: string;
            items: {
                type: string;
                properties: {
                    date: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                        maxLength: number;
                    };
                    enum: {
                        type: string;
                        const: string;
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
        options: {
            showSortButtons: boolean;
        };
    }[];
};
export declare const data: {
    comments: {
        date: string;
        message: string;
    }[];
};
export declare const translations: {
    comments: {
        noDataMessage: string;
        addTooltip: string;
        deleteDialogAccept: string;
        deleteDialogDecline: string;
        deleteDialogMessage: string;
    };
};
export declare const translate: Translator;
