import { PropType } from 'vue';
import { Styles } from '../styles';
declare const listItem: import("vue").DefineComponent<{
    initiallyExpanded: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        required: false;
        type: StringConstructor;
        default: string;
    };
    moveUpEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    moveDownEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    moveUp: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    moveDown: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    deleteEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    delete: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}, unknown, {
    expanded: boolean;
}, {
    contentClasses(): string;
    toolbarClasses(): string;
}, {
    expandClicked(): void;
    moveUpClicked(event: Event): void;
    moveDownClicked(event: Event): void;
    deleteClicked(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    initiallyExpanded: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        required: false;
        type: StringConstructor;
        default: string;
    };
    moveUpEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    moveDownEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    moveUp: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    moveDown: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    deleteEnabled: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    delete: {
        required: false;
        type: FunctionConstructor;
        default: undefined;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}>>, {
    initiallyExpanded: boolean;
    label: string;
    moveUpEnabled: boolean;
    moveDownEnabled: boolean;
    moveUp: Function;
    moveDown: Function;
    deleteEnabled: boolean;
    delete: Function;
}, {}>;
export default listItem;
