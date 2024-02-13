import maxBy from 'lodash/maxBy';
import React, { useContext, useMemo, useState } from 'react';
import { getConfig, convertToValidClassName as convertToValidClassName$2, getAjv, rankWith as rankWith$1, isControl, isDescriptionHidden, NOT_APPLICABLE, computeLabel, and, isEnumControl, optionIs, isOneOfEnumControl, Helpers, findUISchema, createDefaultValue, composePaths, isObjectArrayWithNesting, uiTypeIs, isVisible, deriveLabelForUISchemaElement, Paths, getControlPath, Resolve, encode, Test, isBooleanControl, isDateControl, isDateTimeControl, isIntegerControl, isNumberControl, isNumberFormatControl, isRangeControl, isStringControl, isMultiLineControl, isTimeControl } from '@jsonforms/core';
import { useJsonForms, withJsonFormsControlProps, Control, DispatchCell, withJsonFormsEnumProps, withJsonFormsOneOfEnumProps, withJsonFormsArrayControlProps, JsonFormsDispatch, withTranslateProps, withJsonFormsLayoutProps, withJsonFormsLabelProps, withJsonFormsCellProps, withJsonFormsEnumCellProps } from '@jsonforms/react';
import isEmpty from 'lodash/isEmpty';
import remove from 'lodash/remove';
import join from 'lodash/join';
import filter from 'lodash/filter';
import reduce from 'lodash/reduce';
import merge from 'lodash/merge';
import range from 'lodash/range';
import fpfilter from 'lodash/fp/filter';
import fpmap from 'lodash/fp/map';
import fpflow from 'lodash/fp/flow';
import fpkeys from 'lodash/fp/keys';
import fpstartCase from 'lodash/fp/startCase';

const REGISTER_STYLE = 'REGISTER_STYLE';
const REGISTER_STYLES = 'REGISTER_STYLES';
const UNREGISTER_STYLE = 'UNREGISTER_STYLE';
const registerStyle$1 = (styleName, classNames) => ({
    type: REGISTER_STYLE,
    name: styleName,
    classNames,
});
const unregisterStyle = (styleName) => ({
    type: UNREGISTER_STYLE,
    name: styleName,
});
const registerStyles = (styleDefs) => ({
    type: REGISTER_STYLES,
    styles: styleDefs,
});

const i18nDefaults = {
    'enum.none': 'None',
};

const removeStyle = (styles, name) => {
    const copy = styles.slice();
    remove(copy, (styleDef) => styleDef.name === name);
    return copy;
};
const registerStyle = (styles, { name, classNames }) => {
    const copy = removeStyle(styles, name);
    copy.push({ name, classNames });
    return copy;
};
const findStyle = (styles) => (style, ...args) => {
    const foundStyles = filter(styles, (s) => s.name === style);
    return reduce(foundStyles, (res, style) => {
        if (typeof style.classNames === 'function') {
            return res.concat(style.classNames(args));
        }
        return res.concat(style.classNames);
    }, []);
};
const findStyleAsClassName = (styles) => (style, ...args) => join(findStyle(styles)(style, args), ' ');
const stylingReducer = (state = [], action) => {
    switch (action.type) {
        case REGISTER_STYLE: {
            return registerStyle(state, {
                name: action.name,
                classNames: action.classNames,
            });
        }
        case REGISTER_STYLES: {
            return action.styles.reduce((allStyles, style) => registerStyle(allStyles, style), state);
        }
        case UNREGISTER_STYLE: {
            return removeStyle(state, action.name);
        }
        default:
            return state;
    }
};

const getStyle = (state) => (styleName, ...args) => findStyle(state.jsonforms.styles)(styleName, args);
const getStyleAsClassName = (state) => (styleName, ...args) => findStyleAsClassName(state.jsonforms.styles)(styleName, args);

const vanillaStyles = [
    {
        name: 'control',
        classNames: ['control'],
    },
    {
        name: 'control.trim',
        classNames: ['trim'],
    },
    {
        name: 'control.input',
        classNames: ['input'],
    },
    {
        name: 'control.select',
        classNames: ['select'],
    },
    {
        name: 'control.checkbox',
        classNames: ['checkbox'],
    },
    {
        name: 'control.radio',
        classNames: ['radio'],
    },
    {
        name: 'control.radio.option',
        classNames: ['radio-option'],
    },
    {
        name: 'control.radio.input',
        classNames: ['radio-input'],
    },
    {
        name: 'control.radio.label',
        classNames: ['radio-label'],
    },
    {
        name: 'control.validation.error',
        classNames: ['validation_error'],
    },
    {
        name: 'control.validation',
        classNames: ['validation'],
    },
    {
        name: 'categorization',
        classNames: ['categorization'],
    },
    {
        name: 'categorization.master',
        classNames: ['categorization-master'],
    },
    {
        name: 'categorization.detail',
        classNames: ['categorization-detail'],
    },
    {
        name: 'category.group',
        classNames: ['category-group'],
    },
    {
        name: 'category.subcategories',
        classNames: ['category-subcategories'],
    },
    {
        name: 'array.layout',
        classNames: ['array-layout'],
    },
    {
        name: 'array.children',
        classNames: ['children'],
    },
    {
        name: 'group.layout',
        classNames: ['group-layout'],
    },
    {
        name: 'horizontal.layout',
        classNames: ['horizontal-layout'],
    },
    {
        name: 'horizontal.layout.item',
        classNames: ([size]) => [`horizontal-layout-${size}`],
    },
    {
        name: 'vertical.layout',
        classNames: ['vertical-layout'],
    },
    {
        name: 'array.table.validation.error',
        classNames: ['validation_error'],
    },
    {
        name: 'array.table.validation',
        classNames: ['validation'],
    },
    {
        name: 'array.table',
        classNames: ['array-table-layout', 'control'],
    },
    {
        name: 'array.control.validation.error',
        classNames: ['validation_error'],
    },
    {
        name: 'array.control.validation',
        classNames: ['validation'],
    },
    {
        name: 'array.control.add',
        classNames: ['button-add'],
    },
    {
        name: 'array.child.controls',
        classNames: ['child-controls'],
    },
    {
        name: 'array.child.controls.up',
        classNames: ['button-up'],
    },
    {
        name: 'array.child.controls.down',
        classNames: ['button-down'],
    },
    {
        name: 'array.child.controls.delete',
        classNames: ['button-delete'],
    },
    {
        name: 'array.control',
        classNames: ['array-control-layout', 'control'],
    },
    {
        name: 'input.description',
        classNames: ['input-description'],
    },
];

const defaultContext = {
    styles: vanillaStyles,
};
const JsonFormsStyleContext = React.createContext(defaultContext);
const useStyleContext = () => useContext(JsonFormsStyleContext);
const useStyles = () => {
    const { styles } = useStyleContext();
    return styles;
};

const addVanillaControlProps = (mapStateToProps) => (state, ownProps) => {
    const props = mapStateToProps(state, ownProps);
    const config = getConfig(state);
    const trim = config.trim;
    const controlElement = props.uischema;
    const isValid = isEmpty(props.errors);
    const styles = getStyle(state)('control');
    let classNames = !isEmpty(controlElement.scope)
        ? styles.concat([`${convertToValidClassName$2(controlElement.scope)}`])
        : [''];
    if (trim) {
        classNames = classNames.concat(getStyle(state)('control.trim'));
    }
    const labelClass = getStyleAsClassName(state)('control.label');
    const descriptionClassName = getStyleAsClassName(state)('input.description');
    const validationClassName = getStyleAsClassName(state)('control.validation');
    const validationErrorClassName = getStyleAsClassName(state)('control.validation.error');
    const inputClassName = ['validate'].concat(isValid ? 'valid' : 'invalid');
    return {
        ...props,
        getStyleAsClassName: getStyleAsClassName(state),
        getStyle: getStyle(state),
        classNames: {
            wrapper: classNames.join(' '),
            input: inputClassName.join(' '),
            label: labelClass,
            description: descriptionClassName,
            validation: validationClassName,
            validationError: validationErrorClassName,
        },
    };
};
const withVanillaControlProps = (Component) => function WithVanillaControlProps(props) {
    const ctx = useJsonForms();
    const contextStyles = useStyles();
    const controlElement = props.uischema;
    const config = ctx.config;
    const trim = config && config.trim;
    const styles = useMemo(() => findStyle(contextStyles)('control'), [contextStyles]);
    let classNames = !isEmpty(controlElement.scope)
        ? styles.concat([`${convertToValidClassName$2(controlElement.scope)}`])
        : [''];
    if (trim) {
        classNames = classNames.concat(findStyle(contextStyles)('control.trim'));
    }
    const isValid = isEmpty(props.errors);
    const labelClass = useMemo(() => findStyleAsClassName(contextStyles)('control.label'), [contextStyles]);
    const descriptionClassName = useMemo(() => findStyleAsClassName(contextStyles)('input.description'), [contextStyles]);
    const validationClassName = useMemo(() => findStyleAsClassName(contextStyles)('control.validation'), [contextStyles]);
    const validationErrorClassName = useMemo(() => findStyleAsClassName(contextStyles)('control.validation.error'), [contextStyles]);
    const inputClassName = ['validate'].concat(isValid ? 'valid' : 'invalid');
    const getStyleAsClassName = useMemo(() => findStyleAsClassName(contextStyles), [contextStyles]);
    const getStyle = useMemo(() => findStyle(contextStyles), [contextStyles]);
    const wrapper = classNames.join(' ');
    const input = inputClassName.join(' ');
    const classNamesProp = useMemo(() => ({
        wrapper,
        input,
        label: labelClass,
        description: descriptionClassName,
        validation: validationClassName,
        validationError: validationErrorClassName,
    }), [
        wrapper,
        input,
        labelClass,
        descriptionClassName,
        validationClassName,
        validationErrorClassName,
    ]);
    return (React.createElement(Component, { ...props, getStyleAsClassName: getStyleAsClassName, getStyle: getStyle, classNames: classNamesProp }));
};
const addVanillaLayoutProps = (mapStateToProps) => (state, ownProps) => {
    const props = mapStateToProps(state, ownProps);
    return {
        ...props,
        getStyleAsClassName: getStyleAsClassName(state),
        getStyle: getStyle(state),
    };
};
const addVanillaCellProps = (mapStateToCellsProps) => (state, ownProps) => {
    const props = mapStateToCellsProps(state, ownProps);
    const inputClassName = ['validate'].concat(props.isValid ? 'valid' : 'invalid');
    return {
        ...props,
        className: inputClassName.join(' '),
        getStyleAsClassName: getStyleAsClassName(state),
        getStyle: getStyle(state),
    };
};
const withVanillaCellPropsForType = (type) => (Component) => function WithVanillaCellPropsForType(props) {
    const inputClassName = ['validate'].concat(props.isValid ? 'valid' : 'invalid');
    const styles = useStyles();
    const definedStyle = findStyleAsClassName(styles)(type);
    if (definedStyle) {
        inputClassName.push(definedStyle);
    }
    return (React.createElement(Component, { ...props, getStyleAsClassName: findStyleAsClassName(styles), getStyle: findStyle(styles), className: inputClassName.join(' ') }));
};
const withAjvProps = (Component) => function WithAjvProps(props) {
    const ctx = useJsonForms();
    const ajv = getAjv({ jsonforms: { ...ctx } });
    return React.createElement(Component, { ...props, ajv: ajv });
};
const withVanillaCellProps = withVanillaCellPropsForType('control.input');
const withVanillaEnumCellProps = withVanillaCellPropsForType('control.select');
const withVanillaBooleanCellProps = withVanillaCellPropsForType('control.checkbox');

class InputControl extends Control {
    render() {
        const { classNames, description, id, errors, label, uischema, schema, rootSchema, visible, enabled, required, path, cells, config, } = this.props;
        const isValid = errors.length === 0;
        const divClassNames = [classNames.validation]
            .concat(isValid ? classNames.description : classNames.validationError)
            .join(' ');
        const appliedUiSchemaOptions = merge({}, config, uischema.options);
        const showDescription = !isDescriptionHidden(visible, description, this.state.isFocused, appliedUiSchemaOptions.showUnfocusedDescription);
        const testerContext = {
            rootSchema: rootSchema,
            config: config,
        };
        const cell = maxBy(cells, (r) => r.tester(uischema, schema, testerContext));
        if (cell === undefined ||
            cell.tester(uischema, schema, testerContext) === NOT_APPLICABLE) {
            console.warn('No applicable cell found.', uischema, schema);
            return null;
        }
        else {
            return (React.createElement("div", { className: classNames.wrapper, hidden: !visible, onFocus: this.onFocus, onBlur: this.onBlur, id: id },
                React.createElement("label", { htmlFor: id + '-input', className: classNames.label }, computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk)),
                React.createElement(DispatchCell, { uischema: uischema, schema: schema, path: path, id: id + '-input', enabled: enabled }),
                React.createElement("div", { className: divClassNames }, !isValid ? errors : showDescription ? description : null)));
        }
    }
}
const inputControlTester = rankWith$1(1, isControl);
var InputControl$1 = withVanillaControlProps(withJsonFormsControlProps(InputControl));

const RadioGroup = ({ classNames, id, label, options, required, description, errors, data, uischema, visible, config, enabled, path, handleChange, }) => {
    const contextStyles = useStyles();
    const [isFocused, setFocus] = useState(false);
    const radioControl = useMemo(() => findStyleAsClassName(contextStyles)('control.radio'), [contextStyles]);
    const radioOption = useMemo(() => findStyleAsClassName(contextStyles)('control.radio.option'), [contextStyles]);
    const radioInput = useMemo(() => findStyleAsClassName(contextStyles)('control.radio.input'), [contextStyles]);
    const radioLabel = useMemo(() => findStyleAsClassName(contextStyles)('control.radio.label'), [contextStyles]);
    const isValid = errors.length === 0;
    const divClassNames = [classNames.validation]
        .concat(isValid ? classNames.description : classNames.validationError)
        .join(' ');
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    const showDescription = !isDescriptionHidden(visible, description, isFocused, appliedUiSchemaOptions.showUnfocusedDescription);
    const hasRadioClass = !radioControl || radioControl === 'radio';
    let groupStyle = {};
    if (hasRadioClass) {
        groupStyle = {
            display: 'flex',
            flexDirection: 'vertical' === appliedUiSchemaOptions.orientation ? 'column' : 'row',
        };
    }
    return (React.createElement("div", { className: classNames.wrapper, hidden: !visible, onFocus: () => setFocus(true), onBlur: () => setFocus(false) },
        React.createElement("label", { htmlFor: id, className: classNames.label }, computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk)),
        React.createElement("div", { className: radioControl, style: groupStyle }, options.map((option) => (React.createElement("div", { key: option.label, className: radioOption },
            React.createElement("input", { type: 'radio', value: option.value, id: option.value, name: id, checked: data === option.value, onChange: (_) => handleChange(path, option.value), disabled: !enabled, className: radioInput }),
            React.createElement("label", { htmlFor: option.value, className: radioLabel }, option.label))))),
        React.createElement("div", { className: divClassNames }, !isValid ? errors : showDescription ? description : null)));
};

const RadioGroupControl = (props) => {
    return React.createElement(RadioGroup, { ...props });
};
const radioGroupControlTester = rankWith$1(3, and(isEnumControl, optionIs('format', 'radio')));
var RadioGroupControl$1 = withVanillaControlProps(withJsonFormsEnumProps(RadioGroupControl));

const OneOfRadioGroupControl = (props) => {
    return React.createElement(RadioGroup, { ...props });
};
const oneOfRadioGroupControlTester = rankWith$1(3, and(isOneOfEnumControl, optionIs('format', 'radio')));
var OneOfRadioGroupControl$1 = withVanillaControlProps(withJsonFormsOneOfEnumProps(OneOfRadioGroupControl));

const { convertToValidClassName: convertToValidClassName$1 } = Helpers;
const ArrayControl = ({ classNames, data, label, path, schema, errors, addItem, removeItems, moveUp, moveDown, uischema, uischemas, getStyleAsClassName, renderers, rootSchema, translations, }) => {
    const controlElement = uischema;
    const childUiSchema = useMemo(() => findUISchema(uischemas, schema, uischema.scope, path, undefined, uischema, rootSchema), [uischemas, schema, uischema.scope, path, uischema, rootSchema]);
    const isValid = errors.length === 0;
    const validationClass = getStyleAsClassName('array.control.validation');
    const divClassNames = [validationClass]
        .concat(isValid ? '' : getStyleAsClassName('array.control.validation.error'))
        .join(' ');
    const buttonClassAdd = getStyleAsClassName('array.control.add');
    const labelClass = getStyleAsClassName('array.control.label');
    const childControlsClass = getStyleAsClassName('array.child.controls');
    const buttonClassUp = getStyleAsClassName('array.child.controls.up');
    const buttonClassDown = getStyleAsClassName('array.child.controls.down');
    const buttonClassDelete = getStyleAsClassName('array.child.controls.delete');
    const controlClass = [
        getStyleAsClassName('array.control'),
        convertToValidClassName$1(controlElement.scope),
    ].join(' ');
    return (React.createElement("div", { className: controlClass },
        React.createElement("header", null,
            React.createElement("label", { className: labelClass }, label),
            React.createElement("button", { className: buttonClassAdd, onClick: addItem(path, createDefaultValue(schema, rootSchema)) },
                "Add to ",
                label)),
        React.createElement("div", { className: divClassNames }, errors),
        React.createElement("div", { className: classNames.children }, data ? (range(0, data.length).map((index) => {
            const childPath = composePaths(path, `${index}`);
            return (React.createElement("div", { key: index },
                React.createElement(JsonFormsDispatch, { schema: schema, uischema: childUiSchema || uischema, path: childPath, key: childPath, renderers: renderers }),
                React.createElement("div", { className: childControlsClass },
                    React.createElement("button", { className: buttonClassUp, "aria-label": translations.upAriaLabel, onClick: () => {
                            moveUp(path, index)();
                        } }, translations.up),
                    React.createElement("button", { className: buttonClassDown, "aria-label": translations.downAriaLabel, onClick: () => {
                            moveDown(path, index)();
                        } }, translations.down),
                    React.createElement("button", { className: buttonClassDelete, "aria-label": translations.removeAriaLabel, onClick: () => {
                            if (window.confirm('Are you sure you wish to delete this item?')) {
                                removeItems(path, [index])();
                            }
                        } }, translations.removeTooltip))));
        })) : (React.createElement("p", null, translations.noDataMessage)))));
};
const ArrayControlRenderer = ({ schema, uischema, data, path, rootSchema, uischemas, addItem, getStyle, getStyleAsClassName, removeItems, moveUp, moveDown, id, visible, enabled, errors, translations, }) => {
    const controlElement = uischema;
    const labelDescription = Helpers.createLabelDescriptionFrom(controlElement, schema);
    const label = labelDescription.show ? labelDescription.text : '';
    const controlClassName = `control ${Helpers.convertToValidClassName(controlElement.scope)}`;
    const fieldSetClassName = getStyleAsClassName('array.layout');
    const buttonClassName = getStyleAsClassName('array.button');
    const childrenClassName = getStyleAsClassName('array.children');
    const classNames = {
        wrapper: controlClassName,
        fieldSet: fieldSetClassName,
        button: buttonClassName,
        children: childrenClassName,
    };
    return (React.createElement(ArrayControl, { classNames: classNames, data: data, label: label, path: path, schema: schema, errors: errors, addItem: addItem, removeItems: removeItems, moveUp: moveUp, moveDown: moveDown, uischema: uischema, uischemas: uischemas, getStyleAsClassName: getStyleAsClassName, rootSchema: rootSchema, id: id, visible: visible, enabled: enabled, getStyle: getStyle, translations: translations }));
};
var ArrayControlRenderer$1 = withVanillaControlProps(withJsonFormsArrayControlProps(ArrayControlRenderer));

const arrayControlTester = rankWith$1(4, isObjectArrayWithNesting);

const isCategorization = (category) => category.type === 'Categorization';
const categorizationTester = rankWith$1(1, and(uiTypeIs('Categorization'), (uischema) => {
    const hasCategory = (element) => {
        if (isEmpty(element.elements)) {
            return false;
        }
        return element.elements
            .map((elem) => isCategorization(elem) ? hasCategory(elem) : elem.type === 'Category')
            .reduce((prev, curr) => prev && curr, true);
    };
    return hasCategory(uischema);
}));

const getCategoryClassName = (category, selectedCategory) => (selectedCategory === category ? 'selected' : '');
const CategorizationList = ({ selectedCategory, elements, data, depth, onSelect, subcategoriesClassName, groupClassName, t, ajv, }) => {
    const filteredElements = useMemo(() => {
        return elements.filter((category) => isVisible(category, data, undefined, ajv));
    }, [elements, data, ajv]);
    const categoryLabels = useMemo(() => filteredElements.map((cat) => deriveLabelForUISchemaElement(cat, t)), [filteredElements, t]);
    return (React.createElement("ul", { className: subcategoriesClassName }, filteredElements.map((category, idx) => {
        if (isCategorization(category)) {
            return (React.createElement("li", { key: categoryLabels[idx], className: groupClassName },
                React.createElement("span", null, categoryLabels[idx]),
                React.createElement(CategorizationList, { selectedCategory: selectedCategory, elements: category.elements, data: data, ajv: ajv, depth: depth + 1, onSelect: onSelect, subcategoriesClassName: subcategoriesClassName, groupClassName: groupClassName, t: t })));
        }
        else {
            return (React.createElement("li", { key: categoryLabels[idx], onClick: onSelect(idx), className: getCategoryClassName(category, selectedCategory) },
                React.createElement("span", null, categoryLabels[idx])));
        }
    })));
};

const SingleCategory = ({ category, schema, path }) => (
React.createElement("div", { id: 'categorization.detail' }, (category.elements || []).map((child, index) => (React.createElement(JsonFormsDispatch, { key: `${path}-${index}`, uischema: child, schema: schema, path: path })))));

const CategorizationRenderer = ({ data, uischema, schema, path, selected, t, visible, getStyleAsClassName, onChange, ajv, }) => {
    const categorization = uischema;
    const elements = categorization.elements;
    const classNames = getStyleAsClassName('categorization');
    const masterClassNames = getStyleAsClassName('categorization.master');
    const detailClassNames = getStyleAsClassName('categorization.detail');
    const subcategoriesClassName = getStyleAsClassName('category.subcategories');
    const groupClassName = getStyleAsClassName('category.group');
    const [previousCategorization, setPreviousCategorization] = useState(uischema);
    const [activeCategory, setActiveCategory] = useState(selected ?? 0);
    const safeCategory = activeCategory >= categorization.elements.length ? 0 : activeCategory;
    if (categorization !== previousCategorization) {
        setActiveCategory(0);
        setPreviousCategorization(categorization);
    }
    const onCategorySelected = (categoryIndex) => () => {
        if (onChange) {
            return onChange(categoryIndex, safeCategory);
        }
        return setActiveCategory(categoryIndex);
    };
    return (React.createElement("div", { className: classNames, hidden: visible === null || visible === undefined ? false : !visible },
        React.createElement("div", { className: masterClassNames },
            React.createElement(CategorizationList, { elements: elements, selectedCategory: elements[safeCategory], data: data, ajv: ajv, depth: 0, onSelect: onCategorySelected, subcategoriesClassName: subcategoriesClassName, groupClassName: groupClassName, t: t })),
        React.createElement("div", { className: detailClassNames },
            React.createElement(SingleCategory, { category: elements[safeCategory], schema: schema, path: path, key: safeCategory }))));
};
var CategorizationRenderer$1 = withAjvProps(withVanillaControlProps(withTranslateProps(withJsonFormsLayoutProps(CategorizationRenderer))));

const labelRendererTester = rankWith$1(1, uiTypeIs('Label'));
const LabelRenderer = ({ text, visible, getStyleAsClassName }) => {
    const classNames = getStyleAsClassName('label-control');
    const isHidden = !visible;
    return (React.createElement("label", { hidden: isHidden, className: classNames }, text));
};
var LabelRenderer$1 = withVanillaControlProps(withJsonFormsLabelProps(LabelRenderer));

const { convertToValidClassName } = Helpers;
const { or, isObjectArrayControl, isPrimitiveArrayControl, rankWith } = Test;
const tableArrayControlTester = rankWith(3, or(isObjectArrayControl, isPrimitiveArrayControl));
class TableArrayControl extends React.Component {
    constructor() {
        super(...arguments);
        this.confirmDelete = (path, index) => {
            const p = path.substring(0, path.lastIndexOf('.'));
            this.props.removeItems(p, [index])();
        };
    }
    render() {
        const { addItem, uischema, schema, rootSchema, path, data, visible, errors, label, getStyleAsClassName, childErrors, translations, } = this.props;
        const controlElement = uischema;
        const tableClass = getStyleAsClassName('array.table.table');
        const labelClass = getStyleAsClassName('array.table.label');
        const buttonClass = getStyleAsClassName('array.table.button');
        const validationClass = getStyleAsClassName('array.table.validation');
        const controlClass = [
            getStyleAsClassName('array.table'),
            convertToValidClassName(controlElement.scope),
        ].join(' ');
        const createControlElement = (key) => ({
            type: 'Control',
            label: false,
            scope: schema.type === 'object' ? `#/properties/${key}` : '#',
        });
        const isValid = errors.length === 0;
        const divClassNames = [validationClass]
            .concat(isValid ? '' : getStyleAsClassName('array.table.validation.error'))
            .join(' ');
        return (React.createElement("div", { className: controlClass, hidden: !visible },
            React.createElement("header", null,
                React.createElement("label", { className: labelClass }, label),
                React.createElement("button", { className: buttonClass, onClick: addItem(path, createDefaultValue(schema, rootSchema)) }, translations.addTooltip)),
            React.createElement("div", { className: divClassNames }, !isValid ? errors : ''),
            React.createElement("table", { className: tableClass },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        schema.properties ? (fpflow(fpkeys, fpfilter((prop) => schema.properties[prop].type !== 'array'), fpmap((prop) => (React.createElement("th", { key: prop }, schema.properties[prop].title ?? fpstartCase(prop)))))(schema.properties)) : (React.createElement("th", null, "Items")),
                        React.createElement("th", null, "Valid"),
                        React.createElement("th", null, "\u00A0"))),
                React.createElement("tbody", null, !data || !Array.isArray(data) || data.length === 0 ? (React.createElement("tr", null,
                    React.createElement("td", null, translations.noDataMessage))) : (data.map((_child, index) => {
                    const childPath = Paths.compose(path, `${index}`);
                    const errorsPerEntry = filter(childErrors, (error) => {
                        const errorPath = getControlPath(error);
                        return errorPath.startsWith(childPath);
                    });
                    const validationClassName = getStyleAsClassName('array.validation');
                    const errorValidationClassName = getStyleAsClassName('array.validation.error');
                    const errorClassNames = errorsPerEntry
                        ? [validationClassName]
                            .concat(errorValidationClassName)
                            .join(' ')
                        : validationClassName;
                    return (React.createElement("tr", { key: childPath },
                        schema.properties ? (fpflow(fpkeys, fpfilter((prop) => schema.properties[prop].type !== 'array'), fpmap((prop) => {
                            const childPropPath = Paths.compose(childPath, prop.toString());
                            return (React.createElement("td", { key: childPropPath },
                                React.createElement(DispatchCell, { schema: Resolve.schema(schema, `#/properties/${encode(prop)}`, rootSchema), uischema: createControlElement(encode(prop)), path: childPath + '.' + prop })));
                        }))(schema.properties)) : (React.createElement("td", { key: Paths.compose(childPath, index.toString()) },
                            React.createElement(DispatchCell, { schema: schema, uischema: createControlElement(), path: childPath }))),
                        React.createElement("td", null, errorsPerEntry ? (React.createElement("span", { className: errorClassNames }, join(errorsPerEntry.map((e) => e.message), ' and '))) : (React.createElement("span", { className: errorClassNames }, "OK"))),
                        React.createElement("td", null,
                            React.createElement("button", { "aria-label": translations.removeAriaLabel, onClick: () => {
                                    if (window.confirm(translations.deleteDialogMessage)) {
                                        this.confirmDelete(childPath, index);
                                    }
                                } }, translations.removeTooltip))));
                }))))));
    }
}
var TableArrayControl$1 = withVanillaControlProps(withJsonFormsArrayControlProps(TableArrayControl));

const BooleanCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    return (React.createElement("input", { type: 'checkbox', checked: !!data, onChange: (ev) => handleChange(path, ev.target.checked), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const booleanCellTester = rankWith$1(2, isBooleanControl);
var BooleanCell$1 = withJsonFormsCellProps(withVanillaBooleanCellProps(BooleanCell));

const DateCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    return (React.createElement("input", { type: 'date', value: data || '', onChange: (ev) => handleChange(path, ev.target.value), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const dateCellTester = rankWith$1(2, isDateControl);
var DateCell$1 = withJsonFormsCellProps(withVanillaCellProps(DateCell));

const DateTimeCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    const toISOString = (inputDateTime) => {
        return inputDateTime === '' ? '' : inputDateTime + ':00.000Z';
    };
    return (React.createElement("input", { type: 'datetime-local', value: (data || '').substr(0, 16), onChange: (ev) => handleChange(path, toISOString(ev.target.value)), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const dateTimeCellTester = rankWith$1(2, isDateTimeControl);
var DateTimeCell$1 = withJsonFormsCellProps(withVanillaCellProps(DateTimeCell));

const EnumCell = (props) => {
    const { data, className, id, enabled, schema, uischema, path, handleChange, options, t, } = props;
    const noneOptionLabel = useMemo(() => t('enum.none', i18nDefaults['enum.none'], { schema, uischema, path }), [t, schema, uischema, path]);
    return (React.createElement("select", { className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, value: data || '', onChange: (ev) => handleChange(path, ev.target.selectedIndex === 0 ? undefined : ev.target.value) }, [
        React.createElement("option", { value: '', key: 'jsonforms.enum.none' }, noneOptionLabel),
    ].concat(options.map((optionValue) => (React.createElement("option", { value: optionValue.value, label: optionValue.label, key: optionValue.value }))))));
};
const enumCellTester = rankWith$1(2, isEnumControl);
var EnumCell$1 = withJsonFormsEnumCellProps(withTranslateProps(withVanillaEnumCellProps(EnumCell)));

const toNumber$1 = (value) => value === '' ? undefined : parseInt(value, 10);
const IntegerCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    return (React.createElement("input", { type: 'number', step: '1', value: data ?? '', onChange: (ev) => handleChange(path, toNumber$1(ev.target.value)), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const integerCellTester = rankWith$1(2, isIntegerControl);
var IntegerCell$1 = withJsonFormsCellProps(withVanillaCellProps(IntegerCell));

const toNumber = (value) => (value === '' ? undefined : Number(value));
const NumberCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    return (React.createElement("input", { type: 'number', step: '0.1', value: data ?? '', onChange: (ev) => handleChange(path, toNumber(ev.target.value)), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const numberCellTester = rankWith$1(2, isNumberControl);
var NumberCell$1 = withJsonFormsCellProps(withVanillaCellProps(NumberCell));

const NumberFormatCell = (props) => {
    const { className, id, enabled, uischema, path, handleChange, schema } = props;
    const maxLength = schema.maxLength;
    const formattedNumber = props.toFormatted(props.data);
    const onChange = (ev) => {
        const validStringNumber = props.fromFormatted(ev.currentTarget.value);
        handleChange(path, validStringNumber);
    };
    return (React.createElement("input", { type: 'text', value: formattedNumber, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, maxLength: uischema.options && uischema.options.restrict ? maxLength : undefined, size: uischema.options && uischema.options.trim ? maxLength : undefined }));
};
const numberFormatCellTester = rankWith$1(4, isNumberFormatControl);
var NumberFormatCell$1 = withJsonFormsCellProps(withVanillaCellProps(NumberFormatCell));

const SliderCell = (props) => {
    const { data, className, id, enabled, uischema, schema, path, handleChange } = props;
    return (React.createElement("div", { style: { display: 'flex' } },
        React.createElement("input", { type: 'range', max: schema.maximum, min: schema.minimum, value: data || schema.default, onChange: (ev) => handleChange(path, Number(ev.target.value)), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, style: { flex: '1' } }),
        React.createElement("label", { style: { marginLeft: '0.5em' } }, data || schema.default)));
};
const sliderCellTester = rankWith$1(4, isRangeControl);
var SliderCell$1 = withJsonFormsCellProps(withVanillaCellProps(SliderCell));

const TextCell = (props) => {
    const { config, data, className, id, enabled, uischema, schema, path, handleChange, } = props;
    const maxLength = schema.maxLength;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    return (React.createElement("input", { type: appliedUiSchemaOptions.format === 'password' ? 'password' : 'text', value: data || '', onChange: (ev) => handleChange(path, ev.target.value === '' ? undefined : ev.target.value), className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, placeholder: appliedUiSchemaOptions.placeholder, maxLength: appliedUiSchemaOptions.restrict ? maxLength : undefined, size: appliedUiSchemaOptions.trim ? maxLength : undefined }));
};
const textCellTester = rankWith$1(1, isStringControl);
var TextCell$1 = withJsonFormsCellProps(withVanillaCellProps(TextCell));

const TextAreaCell = (props) => {
    const { data, className, id, enabled, config, uischema, path, handleChange } = props;
    const appliedUiSchemaOptions = merge({}, config, uischema.options);
    return (React.createElement("textarea", { value: data || '', onChange: (ev) => handleChange(path, ev.target.value === '' ? undefined : ev.target.value), className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, placeholder: appliedUiSchemaOptions.placeholder }));
};
const textAreaCellTester = rankWith$1(2, isMultiLineControl);
var TextAreaCell$1 = withJsonFormsCellProps(withVanillaCellProps(TextAreaCell));

const appendSecondsIfNecessary = (value) => {
    if (typeof value === 'string') {
        const splitValue = value.split(':');
        if (splitValue.length === 2) {
            splitValue.push('00');
        }
        return splitValue.join(':');
    }
    return value;
};
const TimeCell = (props) => {
    const { data, className, id, enabled, uischema, path, handleChange } = props;
    return (React.createElement("input", { type: 'time', value: data || '', onChange: (ev) => handleChange(path, appendSecondsIfNecessary(ev.target.value)), className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
const timeCellTester = rankWith$1(2, isTimeControl);
var TimeCell$1 = withJsonFormsCellProps(withVanillaCellProps(TimeCell));

var CustomizableCells = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BooleanCell: BooleanCell,
  DateCell: DateCell,
  DateTimeCell: DateTimeCell,
  EnumCell: EnumCell,
  IntegerCell: IntegerCell,
  NumberCell: NumberCell,
  NumberFormatCell: NumberFormatCell,
  SliderCell: SliderCell,
  TextCell: TextCell,
  TextAreaCell: TextAreaCell,
  TimeCell: TimeCell
});

const renderChildren = (layout, schema, className, path, enabled) => {
    if (isEmpty(layout.elements)) {
        return [];
    }
    const { renderers, cells } = useJsonForms();
    return layout.elements.map((child, index) => {
        return (React.createElement("div", { className: className, key: `${path}-${index}` },
            React.createElement(JsonFormsDispatch, { renderers: renderers, cells: cells, uischema: child, schema: schema, path: path, enabled: enabled })));
    });
};

const groupTester = rankWith$1(1, uiTypeIs('Group'));
const GroupLayoutRenderer = (props) => {
    const { data: _data, ...otherProps } = props;
    return React.createElement(GroupLayoutRendererComponent, { ...otherProps });
};
const GroupLayoutRendererComponent = React.memo(function GroupLayoutRendererComponent({ schema, uischema, path, enabled, visible, label, getStyle, getStyleAsClassName, }) {
    const group = uischema;
    const elementsSize = group.elements ? group.elements.length : 0;
    const classNames = getStyleAsClassName('group.layout');
    const childClassNames = ['group-layout-item']
        .concat(getStyle('group.layout.item', elementsSize))
        .join(' ');
    return (React.createElement("fieldset", { className: classNames, hidden: visible === undefined || visible === null ? false : !visible },
        !isEmpty(label) ? (React.createElement("legend", { className: getStyleAsClassName('group.label') }, label)) : (''),
        renderChildren(group, schema, childClassNames, path, enabled)));
});
var GroupLayout = withVanillaControlProps(withJsonFormsLayoutProps(GroupLayoutRenderer));

const JsonFormsLayout = ({ className, children, visible, }) => {
    return (React.createElement("div", { className: className, hidden: visible === undefined || visible === null ? false : !visible }, children));
};

const horizontalLayoutTester = rankWith$1(1, uiTypeIs('HorizontalLayout'));
const HorizontalLayoutRenderer = (props) => {
    const { data: _data, ...otherProps } = props;
    return React.createElement(HorizontalLayoutRendererComponent, { ...otherProps });
};
const HorizontalLayoutRendererComponent = React.memo(function HorizontalLayoutRendererComponent({ schema, uischema, getStyle, getStyleAsClassName, enabled, visible, path, }) {
    const horizontalLayout = uischema;
    const elementsSize = horizontalLayout.elements
        ? horizontalLayout.elements.length
        : 0;
    const layoutClassName = getStyleAsClassName('horizontal.layout');
    const childClassNames = ['horizontal-layout-item']
        .concat(getStyle('horizontal.layout.item', elementsSize))
        .join(' ');
    return (React.createElement(JsonFormsLayout, { className: layoutClassName, visible: visible, enabled: enabled, path: path, uischema: uischema, schema: schema, getStyle: getStyle, getStyleAsClassName: getStyleAsClassName }, renderChildren(horizontalLayout, schema, childClassNames, path, enabled)));
});
var HorizontalLayout = withVanillaControlProps(withJsonFormsLayoutProps(HorizontalLayoutRenderer, false));

const verticalLayoutTester = rankWith$1(1, uiTypeIs('VerticalLayout'));
const VerticalLayoutRenderer = (props) => {
    const { data: _data, ...otherProps } = props;
    return React.createElement(VerticalLayoutRendererComponent, { ...otherProps });
};
const VerticalLayoutRendererComponent = React.memo(function VerticalLayoutRendererComponent({ schema, uischema, path, visible, enabled, getStyle, getStyleAsClassName, }) {
    const verticalLayout = uischema;
    const elementsSize = verticalLayout.elements
        ? verticalLayout.elements.length
        : 0;
    const layoutClassName = getStyleAsClassName('vertical.layout');
    const childClassNames = ['vertical-layout-item']
        .concat(getStyle('vertical.layout.item', elementsSize))
        .join(' ');
    return (React.createElement(JsonFormsLayout, { className: layoutClassName, uischema: uischema, schema: schema, visible: visible, enabled: enabled, path: path, getStyle: getStyle, getStyleAsClassName: getStyleAsClassName }, renderChildren(verticalLayout, schema, childClassNames, path, enabled)));
});
var VerticalLayout = withVanillaControlProps(withJsonFormsLayoutProps(VerticalLayoutRenderer, false));

const vanillaRenderers = [
    { tester: inputControlTester, renderer: InputControl$1 },
    { tester: radioGroupControlTester, renderer: RadioGroupControl$1 },
    { tester: oneOfRadioGroupControlTester, renderer: OneOfRadioGroupControl$1 },
    { tester: arrayControlTester, renderer: ArrayControlRenderer$1 },
    { tester: labelRendererTester, renderer: LabelRenderer$1 },
    { tester: categorizationTester, renderer: CategorizationRenderer$1 },
    { tester: tableArrayControlTester, renderer: TableArrayControl$1 },
    { tester: groupTester, renderer: GroupLayout },
    { tester: verticalLayoutTester, renderer: VerticalLayout },
    { tester: horizontalLayoutTester, renderer: HorizontalLayout },
];
const vanillaCells = [
    { tester: booleanCellTester, cell: BooleanCell$1 },
    { tester: dateCellTester, cell: DateCell$1 },
    { tester: dateTimeCellTester, cell: DateTimeCell$1 },
    { tester: enumCellTester, cell: EnumCell$1 },
    { tester: integerCellTester, cell: IntegerCell$1 },
    { tester: numberCellTester, cell: NumberCell$1 },
    { tester: sliderCellTester, cell: SliderCell$1 },
    { tester: textAreaCellTester, cell: TextAreaCell$1 },
    { tester: textCellTester, cell: TextCell$1 },
    { tester: timeCellTester, cell: TimeCell$1 },
];

export { ArrayControlRenderer$1 as ArrayControl, BooleanCell$1 as BooleanCell, CategorizationRenderer$1 as Categorization, CustomizableCells as Customizable, DateCell$1 as DateCell, DateTimeCell$1 as DateTimeCell, EnumCell$1 as EnumCell, GroupLayout, HorizontalLayout, InputControl$1 as InputControl, IntegerCell$1 as IntegerCell, JsonFormsStyleContext, LabelRenderer$1 as LabelRenderer, NumberCell$1 as NumberCell, NumberFormatCell$1 as NumberFormatCell, OneOfRadioGroupControl$1 as OneOfRadioGroupControl, REGISTER_STYLE, REGISTER_STYLES, RadioGroupControl$1 as RadioGroupControl, SliderCell$1 as SliderCell, TableArrayControl$1 as TableArrayControl, TextAreaCell$1 as TextAreaCell, TextCell$1 as TextCell, TimeCell$1 as TimeCell, UNREGISTER_STYLE, VerticalLayout, addVanillaCellProps, addVanillaControlProps, addVanillaLayoutProps, arrayControlTester, booleanCellTester, categorizationTester, dateCellTester, dateTimeCellTester, enumCellTester, getStyle, getStyleAsClassName, groupTester, horizontalLayoutTester, i18nDefaults, inputControlTester, integerCellTester, labelRendererTester, numberCellTester, numberFormatCellTester, oneOfRadioGroupControlTester, radioGroupControlTester, registerStyle$1 as registerStyle, registerStyles, sliderCellTester, stylingReducer, tableArrayControlTester, textAreaCellTester, textCellTester, timeCellTester, unregisterStyle, useStyleContext, useStyles, vanillaCells, vanillaRenderers, vanillaStyles, verticalLayoutTester, withAjvProps, withVanillaBooleanCellProps, withVanillaCellProps, withVanillaControlProps, withVanillaEnumCellProps };
//# sourceMappingURL=jsonforms-react-vanilla.esm.js.map
