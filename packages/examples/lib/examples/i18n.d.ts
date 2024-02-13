import { JsonFormsCore, AnyAction, Dispatch, Translator } from '@jsonforms/core';
export declare const onChange: (dispatch: Dispatch<AnyAction>) => (extensionState: any) => ({ errors }: Pick<JsonFormsCore, 'data' | 'errors'>) => void;
export declare const uischema: {
    type: string;
    elements: ({
        type: string;
        i18n: string;
        elements: {
            type: string;
            scope: string;
        }[];
        text?: undefined;
    } | {
        type: string;
        text: string;
        i18n?: undefined;
        elements?: undefined;
    } | {
        type: string;
        elements: {
            type: string;
            scope: string;
        }[];
        i18n?: undefined;
        text?: undefined;
    })[];
};
export declare const data: {
    vegetarian: boolean;
    birthDate: string;
    personalData: {
        age: number;
    };
    postalCode: string;
};
export declare const translations: {
    basicInfoGroup: {
        label: string;
    };
    additionalInformationLabel: string;
};
export declare const translate: Translator;
