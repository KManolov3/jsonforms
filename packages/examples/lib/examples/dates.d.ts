export declare const schema: {
    type: string;
    properties: {
        schemaBased: {
            type: string;
            properties: {
                date: {
                    type: string;
                    format: string;
                    description: string;
                };
                time: {
                    type: string;
                    format: string;
                    description: string;
                };
                datetime: {
                    type: string;
                    format: string;
                    description: string;
                };
            };
        };
        uiSchemaBased: {
            type: string;
            properties: {
                date: {
                    type: string;
                    description: string;
                };
                time: {
                    type: string;
                    description: string;
                };
                datetime: {
                    type: string;
                    description: string;
                };
            };
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        elements: {
            type: string;
            scope: string;
        }[];
    } | {
        type: string;
        elements: ({
            type: string;
            scope: string;
            label: string;
            options: {
                format: string;
                clearLabel: string;
                cancelLabel: string;
                okLabel: string;
                views: string[];
                dateFormat: string;
                dateSaveFormat: string;
                ampm?: undefined;
                dateTimeFormat?: undefined;
                dateTimeSaveFormat?: undefined;
            };
        } | {
            type: string;
            scope: string;
            options: {
                format: string;
                ampm: boolean;
                clearLabel?: undefined;
                cancelLabel?: undefined;
                okLabel?: undefined;
                views?: undefined;
                dateFormat?: undefined;
                dateSaveFormat?: undefined;
                dateTimeFormat?: undefined;
                dateTimeSaveFormat?: undefined;
            };
            label?: undefined;
        } | {
            type: string;
            scope: string;
            options: {
                format: string;
                dateTimeFormat: string;
                dateTimeSaveFormat: string;
                ampm: boolean;
                clearLabel?: undefined;
                cancelLabel?: undefined;
                okLabel?: undefined;
                views?: undefined;
                dateFormat?: undefined;
                dateSaveFormat?: undefined;
            };
            label?: undefined;
        })[];
    })[];
};
export declare const data: {
    schemaBased: {
        date: string;
        time: string;
        datetime: string;
    };
    uiSchemaBased: {
        date: string;
        time: string;
        datetime: string;
    };
};
