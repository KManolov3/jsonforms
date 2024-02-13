export declare const schema: {
    type: string;
    properties: {
        string: {
            type: string;
        };
        boolean: {
            type: string;
            description: string;
        };
        number: {
            type: string;
        };
        integer: {
            type: string;
        };
        date: {
            type: string;
            format: string;
        };
        time: {
            type: string;
            format: string;
        };
        dateTime: {
            type: string;
            format: string;
        };
        enum: {
            type: string;
            enum: string[];
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
export declare const data: {
    string: string;
    boolean: boolean;
    number: number;
    integer: number;
    date: string;
    time: string;
    dateTime: string;
    enum: string;
};
export declare const extendedSchema: {
    type: string;
    properties: {
        multilineString: {
            type: string;
            description: string;
        };
        slider: {
            type: string;
            minimum: number;
            maximum: number;
            default: number;
            description: string;
        };
        trimText: {
            type: string;
            description: string;
        };
        restrictText: {
            type: string;
            maxLength: number;
            description: string;
        };
        unfocusedDescription: {
            type: string;
            description: string;
        };
        hideRequiredAsterisk: {
            type: string;
            description: string;
        };
        toggle: {
            type: string;
            description: string;
        };
    };
    required: string[];
};
export declare const extendedUischema: {
    type: string;
    elements: ({
        type: string;
        scope: string;
        options: {
            multi: boolean;
            slider?: undefined;
            trim?: undefined;
            restrict?: undefined;
            showUnfocusedDescription?: undefined;
            hideRequiredAsterisk?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            slider: boolean;
            multi?: undefined;
            trim?: undefined;
            restrict?: undefined;
            showUnfocusedDescription?: undefined;
            hideRequiredAsterisk?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            trim: boolean;
            multi?: undefined;
            slider?: undefined;
            restrict?: undefined;
            showUnfocusedDescription?: undefined;
            hideRequiredAsterisk?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            restrict: boolean;
            multi?: undefined;
            slider?: undefined;
            trim?: undefined;
            showUnfocusedDescription?: undefined;
            hideRequiredAsterisk?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            showUnfocusedDescription: boolean;
            multi?: undefined;
            slider?: undefined;
            trim?: undefined;
            restrict?: undefined;
            hideRequiredAsterisk?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            hideRequiredAsterisk: boolean;
            multi?: undefined;
            slider?: undefined;
            trim?: undefined;
            restrict?: undefined;
            showUnfocusedDescription?: undefined;
            toggle?: undefined;
        };
        label?: undefined;
    } | {
        type: string;
        scope: string;
        label: string;
        options: {
            toggle: boolean;
            multi?: undefined;
            slider?: undefined;
            trim?: undefined;
            restrict?: undefined;
            showUnfocusedDescription?: undefined;
            hideRequiredAsterisk?: undefined;
        };
    })[];
};
export declare const extendedData: {
    multilineString: string;
    slider: number;
    trimText: string;
    restrictText: string;
    toggle: boolean;
};
