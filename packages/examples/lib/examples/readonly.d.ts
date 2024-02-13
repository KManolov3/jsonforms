export declare const schema: {
    type: string;
    properties: {
        readonly: {
            type: string;
            readOnly: boolean;
        };
        readonlyByUISchema: {
            type: string;
        };
        notReadonly: {
            type: string;
        };
    };
};
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        label: string;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        label: string;
        options: {
            readonly: boolean;
        };
    })[];
};
export declare const data: {
    readonly: string;
    readonlyByUISchema: string;
    notReadonly: string;
};
