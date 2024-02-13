export declare const schema: {
    type: string;
    properties: {
        zipCode: {
            type: string;
            maxLength: number;
        };
        zipCodeWithoutTrim: {
            type: string;
            maxLength: number;
        };
        zipCodeWithoutRestrict: {
            type: string;
            maxLength: number;
        };
    };
};
export declare const uischema: {
    type: string;
    elements: {
        type: string;
        elements: {
            type: string;
            scope: string;
            label: string;
            options: {
                trim: boolean;
                restrict: boolean;
            };
        }[];
    }[];
};
export declare const data: {
    zipCode: string;
    zipCodeWithoutTrim: string;
    zipCodeWithoutRestrict: string;
};
