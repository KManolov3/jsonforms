import { ControlElement, Dispatch, Layout, JsonSchema, UISchemaElement, CoreActions, JsonFormsState, OwnPropsOfMasterListItem, mapStateToArrayControlProps, mapDispatchToArrayControlProps, JsonFormsRendererRegistryEntry, JsonFormsCellRendererRegistryEntry, LabelElement } from '@jsonforms/core';
import { PropType, ComputedRef } from 'vue';
/**
 * Constructs a props declaration for Vue components which can be used
 * for registered renderers and cells. These are typically used in combination
 * with one of the provided bindings, e.g. 'useJsonFormsControl'.
 *
 * Use the generic type parameter when using a specialized binding, e.g.
 * `rendererProps<Layout>()` in combination with `useJsonFormsLayout` or
 * `rendererProps<ControlElement>()` in combination with `useJsonFormsControl`.
 */
export declare const rendererProps: <U = UISchemaElement>() => {
    schema: {
        required: true;
        type: PropType<JsonSchema>;
    };
    uischema: {
        required: true;
        type: PropType<U>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: PropType<JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: PropType<JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
};
/**
 * Constructs a props declaration for Vue components which shall be used as
 * master list items.
 */
export declare const masterListItemProps: () => {
    index: {
        required: true;
        type: NumberConstructor;
    };
    selected: {
        required: true;
        type: BooleanConstructor;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    schema: {
        required: true;
        type: PropType<JsonSchema>;
    };
    handleSelect: {
        required: false;
        type: PropType<(index: number) => void>;
        default: undefined;
    };
    removeItem: {
        required: false;
        type: PropType<(path: string, value: number) => void>;
        default: undefined;
    };
};
export interface RendererProps<U = UISchemaElement> {
    schema: JsonSchema;
    uischema: U;
    path: string;
    enabled?: boolean;
    renderers?: JsonFormsRendererRegistryEntry[];
    cells?: JsonFormsCellRendererRegistryEntry[];
    config?: any;
}
export interface ControlProps extends RendererProps {
    uischema: ControlElement;
}
export type Required<T> = T extends object ? {
    [P in keyof T]-?: NonNullable<T[P]>;
} : T;
export declare function useControl<R, D, P extends {}>(props: P, stateMap: (state: JsonFormsState, props: P) => R): {
    control: ComputedRef<Required<R>>;
};
export declare function useControl<R, D, P extends {}>(props: P, stateMap: (state: JsonFormsState, props: P) => R, dispatchMap: (dispatch: Dispatch<CoreActions>) => D): {
    control: ComputedRef<Required<R>>;
} & D;
/**
 * Provides generic bindings for 'Control' elements.
 * Should be used when no specialized bindings are appropriate.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsControl: (props: ControlProps) => {
    control: ComputedRef<{
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which can provide a 'detail',
 * for example array and object renderers.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsControlWithDetail: (props: ControlProps) => {
    control: ComputedRef<{
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which resolve to 'enum' schema elements.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsEnumControl: (props: ControlProps) => {
    control: ComputedRef<{
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        options: import("@jsonforms/core").EnumOption[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which resolve to manually constructed
 * 'oneOf' enums. These are used to enhance enums with label support.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsOneOfEnumControl: (props: ControlProps) => {
    control: ComputedRef<{
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        options: import("@jsonforms/core").EnumOption[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
type UseJsonFormsArrayControlReturnType = {
    control: ComputedRef<Required<ReturnType<typeof mapStateToArrayControlProps>>>;
} & ReturnType<typeof mapDispatchToArrayControlProps>;
/**
 * Provides bindings for 'Control' elements which resolve to 'array' schema elements.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsArrayControl: (props: ControlProps) => UseJsonFormsArrayControlReturnType;
/**
 * Provides bindings for 'Control' elements which resolve to 'allOf' schema elements.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsAllOfControl: (props: ControlProps) => {
    control: ComputedRef<{
        rootSchema: NonNullable<JsonSchema>;
        path: string;
        id: string;
        indexOfFittingSchema: number;
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        data: any;
        translations: import("@jsonforms/core").CombinatorTranslations;
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which resolve to 'anyOf' schema elements.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsAnyOfControl: (props: ControlProps) => {
    control: ComputedRef<{
        rootSchema: NonNullable<JsonSchema>;
        path: string;
        id: string;
        indexOfFittingSchema: number;
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        data: any;
        translations: import("@jsonforms/core").CombinatorTranslations;
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which resolve to 'oneOf' schema elements.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsOneOfControl: (props: ControlProps) => {
    control: ComputedRef<{
        rootSchema: NonNullable<JsonSchema>;
        path: string;
        id: string;
        indexOfFittingSchema: number;
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        data: any;
        translations: import("@jsonforms/core").CombinatorTranslations;
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfControl;
/**
 * Provides bindings for 'Control' elements which resolve to multiple choice enums.
 *
 * Access bindings via the provided reactive `control` object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsMultiEnumControl: (props: ControlProps) => {
    control: ComputedRef<{
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        options: import("@jsonforms/core").EnumOption[];
    }>;
} & import("@jsonforms/core").DispatchPropsOfMultiEnumControl;
export interface LayoutProps extends RendererProps {
    uischema: Layout;
}
/**
 * Provides bindings for 'Layout' elements, e.g. VerticalLayout, HorizontalLayout, Group.
 *
 * Access bindings via the provided reactive 'layout' object.
 */
export declare const useJsonFormsLayout: (props: LayoutProps) => {
    layout: ComputedRef<{
        direction: NonNullable<"row" | "column">;
        label: string;
        config: any;
        uischema: UISchemaElement;
        schema: NonNullable<JsonSchema>;
        data: any;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
    }>;
};
/**
 * Provides bindings for 'Control' elements which resolve to 'array' elements which
 * shall be rendered as a layout instead of a control.
 *
 * Access bindings via the provided reactive 'layout' object.
 */
export declare const useJsonFormsArrayLayout: (props: ControlProps) => {
    layout: ComputedRef<{
        data: number;
        translations: import("@jsonforms/core").ArrayTranslations;
        minItems: number;
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        rootSchema: NonNullable<JsonSchema>;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
    }>;
};
/**
 * Provides bindings for list elements of a master-list-detail control setup.
 * The element using this binding is not supposed to be registered as an own renderer
 * but used in a more specialized control.
 *
 * Access bindings via the provided reactive 'item' object.
 */
export declare const useJsonFormsMasterListItem: (props: OwnPropsOfMasterListItem) => {
    item: ComputedRef<{
        translations: import("@jsonforms/core").ArrayTranslations;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        path: string;
        index: number;
        selected: boolean;
    }>;
};
/**
 * Provides specialized bindings which can be used for any renderer.
 * Useful for meta elements like dispatchers.
 *
 * Access bindings via the provided reactive 'renderer' object.
 */
export declare const useJsonFormsRenderer: (props: RendererProps) => {
    renderer: ComputedRef<{
        config: any;
        uischema: UISchemaElement;
        schema: NonNullable<JsonSchema | undefined>;
        enabled: NonNullable<boolean | undefined>;
        visible: NonNullable<boolean | undefined>;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
    }>;
    rootSchema: ComputedRef<NonNullable<JsonSchema>>;
};
/**
 * Provides bindings for 'Label' elements.
 *
 * Access bindings via the provided reactive `label` object.
 */
export declare const useJsonFormsLabel: (props: RendererProps<LabelElement>) => {
    label: ComputedRef<{
        text: string;
        visible: boolean;
        config: any;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
    }>;
};
/**
 * Provides bindings for cell elements. Cells are meant to show simple inputs,
 * for example without error validation, within a larger structure like tables.
 *
 * Access bindings via the provided reactive 'cell' object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsCell: (props: ControlProps) => {
    handleChange(path: string, value: any): void;
    cell: ComputedRef<{
        isValid: boolean;
        rootSchema: NonNullable<JsonSchema>;
        uischema: ControlElement;
        errors: string;
        data: any;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
    }>;
};
/**
 * Provides bindings for enum cell elements. Cells are meant to show simple inputs,
 * for example without error validation, within a larger structure like tables.
 *
 * Access bindings via the provided reactive 'cell' object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsEnumCell: (props: ControlProps) => {
    handleChange(path: string, value: any): void;
    cell: ComputedRef<{
        isValid: boolean;
        rootSchema: NonNullable<JsonSchema>;
        uischema: ControlElement;
        errors: string;
        data: any;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
        options: import("@jsonforms/core").EnumOption[];
    }>;
};
/**
 * Provides bindings for 'oneOf' enum cell elements. Cells are meant to show simple inputs,
 * for example without error validation, within a larger structure like tables.
 *
 * Access bindings via the provided reactive 'cell' object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsOneOfEnumCell: (props: ControlProps) => {
    handleChange(path: string, value: any): void;
    cell: ComputedRef<{
        isValid: boolean;
        rootSchema: NonNullable<JsonSchema>;
        uischema: ControlElement;
        errors: string;
        data: any;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: JsonFormsCellRendererRegistryEntry[];
        options: import("@jsonforms/core").EnumOption[];
    }>;
};
/**
 * Provides bindings for a cell dispatcher. Cells are meant to show simple inputs,
 * for example without error validation, within a larger structure like tables.
 *
 * Access bindings via the provided reactive 'cell' object.
 * Dispatch changes via the provided `handleChange` method.
 */
export declare const useJsonFormsDispatchCell: (props: ControlProps) => {
    handleChange(path: string, value: any): void;
    cell: ComputedRef<{
        cells: JsonFormsCellRendererRegistryEntry[];
        isValid: boolean;
        rootSchema: NonNullable<JsonSchema>;
        uischema: ControlElement;
        errors: string;
        data: any;
        id: string;
        config: any;
        schema: NonNullable<JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
};
export {};