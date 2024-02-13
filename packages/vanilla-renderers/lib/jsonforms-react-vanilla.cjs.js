'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var maxBy = require('lodash/maxBy');
var React = require('react');
var core = require('@jsonforms/core');
var react = require('@jsonforms/react');
var isEmpty = require('lodash/isEmpty');
var remove = require('lodash/remove');
var join = require('lodash/join');
var filter = require('lodash/filter');
var reduce = require('lodash/reduce');
var merge = require('lodash/merge');
var range = require('lodash/range');
var fpfilter = require('lodash/fp/filter');
var fpmap = require('lodash/fp/map');
var fpflow = require('lodash/fp/flow');
var fpkeys = require('lodash/fp/keys');
var fpstartCase = require('lodash/fp/startCase');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var maxBy__default = /*#__PURE__*/_interopDefaultLegacy(maxBy);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var isEmpty__default = /*#__PURE__*/_interopDefaultLegacy(isEmpty);
var remove__default = /*#__PURE__*/_interopDefaultLegacy(remove);
var join__default = /*#__PURE__*/_interopDefaultLegacy(join);
var filter__default = /*#__PURE__*/_interopDefaultLegacy(filter);
var reduce__default = /*#__PURE__*/_interopDefaultLegacy(reduce);
var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);
var range__default = /*#__PURE__*/_interopDefaultLegacy(range);
var fpfilter__default = /*#__PURE__*/_interopDefaultLegacy(fpfilter);
var fpmap__default = /*#__PURE__*/_interopDefaultLegacy(fpmap);
var fpflow__default = /*#__PURE__*/_interopDefaultLegacy(fpflow);
var fpkeys__default = /*#__PURE__*/_interopDefaultLegacy(fpkeys);
var fpstartCase__default = /*#__PURE__*/_interopDefaultLegacy(fpstartCase);

var REGISTER_STYLE = 'REGISTER_STYLE';
var REGISTER_STYLES = 'REGISTER_STYLES';
var UNREGISTER_STYLE = 'UNREGISTER_STYLE';
var registerStyle$1 = function (styleName, classNames) { return ({
    type: REGISTER_STYLE,
    name: styleName,
    classNames: classNames,
}); };
var unregisterStyle = function (styleName) { return ({
    type: UNREGISTER_STYLE,
    name: styleName,
}); };
var registerStyles = function (styleDefs) { return ({
    type: REGISTER_STYLES,
    styles: styleDefs,
}); };

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var i18nDefaults = {
    'enum.none': 'None',
};

var removeStyle = function (styles, name) {
    var copy = styles.slice();
    remove__default["default"](copy, function (styleDef) { return styleDef.name === name; });
    return copy;
};
var registerStyle = function (styles, _a) {
    var name = _a.name, classNames = _a.classNames;
    var copy = removeStyle(styles, name);
    copy.push({ name: name, classNames: classNames });
    return copy;
};
var findStyle = function (styles) {
    return function (style) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var foundStyles = filter__default["default"](styles, function (s) { return s.name === style; });
        return reduce__default["default"](foundStyles, function (res, style) {
            if (typeof style.classNames === 'function') {
                return res.concat(style.classNames(args));
            }
            return res.concat(style.classNames);
        }, []);
    };
};
var findStyleAsClassName = function (styles) {
    return function (style) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return join__default["default"](findStyle(styles)(style, args), ' ');
    };
};
var stylingReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case REGISTER_STYLE: {
            return registerStyle(state, {
                name: action.name,
                classNames: action.classNames,
            });
        }
        case REGISTER_STYLES: {
            return action.styles.reduce(function (allStyles, style) {
                return registerStyle(allStyles, style);
            }, state);
        }
        case UNREGISTER_STYLE: {
            return removeStyle(state, action.name);
        }
        default:
            return state;
    }
};

var getStyle = function (state) {
    return function (styleName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return findStyle(state.jsonforms.styles)(styleName, args);
    };
};
var getStyleAsClassName = function (state) {
    return function (styleName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return findStyleAsClassName(state.jsonforms.styles)(styleName, args);
    };
};

var vanillaStyles = [
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
        classNames: function (_a) {
            var size = _a[0];
            return ["horizontal-layout-".concat(size)];
        },
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

var defaultContext = {
    styles: vanillaStyles,
};
var JsonFormsStyleContext = React__default["default"].createContext(defaultContext);
var useStyleContext = function () {
    return React.useContext(JsonFormsStyleContext);
};
var useStyles = function () {
    var styles = useStyleContext().styles;
    return styles;
};

var addVanillaControlProps = function (mapStateToProps) {
    return function (state, ownProps) {
        var props = mapStateToProps(state, ownProps);
        var config = core.getConfig(state);
        var trim = config.trim;
        var controlElement = props.uischema;
        var isValid = isEmpty__default["default"](props.errors);
        var styles = getStyle(state)('control');
        var classNames = !isEmpty__default["default"](controlElement.scope)
            ? styles.concat(["".concat(core.convertToValidClassName(controlElement.scope))])
            : [''];
        if (trim) {
            classNames = classNames.concat(getStyle(state)('control.trim'));
        }
        var labelClass = getStyleAsClassName(state)('control.label');
        var descriptionClassName = getStyleAsClassName(state)('input.description');
        var validationClassName = getStyleAsClassName(state)('control.validation');
        var validationErrorClassName = getStyleAsClassName(state)('control.validation.error');
        var inputClassName = ['validate'].concat(isValid ? 'valid' : 'invalid');
        return __assign(__assign({}, props), { getStyleAsClassName: getStyleAsClassName(state), getStyle: getStyle(state), classNames: {
                wrapper: classNames.join(' '),
                input: inputClassName.join(' '),
                label: labelClass,
                description: descriptionClassName,
                validation: validationClassName,
                validationError: validationErrorClassName,
            } });
    };
};
var withVanillaControlProps = function (Component) {
    return function WithVanillaControlProps(props) {
        var ctx = react.useJsonForms();
        var contextStyles = useStyles();
        var controlElement = props.uischema;
        var config = ctx.config;
        var trim = config && config.trim;
        var styles = React.useMemo(function () { return findStyle(contextStyles)('control'); }, [contextStyles]);
        var classNames = !isEmpty__default["default"](controlElement.scope)
            ? styles.concat(["".concat(core.convertToValidClassName(controlElement.scope))])
            : [''];
        if (trim) {
            classNames = classNames.concat(findStyle(contextStyles)('control.trim'));
        }
        var isValid = isEmpty__default["default"](props.errors);
        var labelClass = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.label'); }, [contextStyles]);
        var descriptionClassName = React.useMemo(function () { return findStyleAsClassName(contextStyles)('input.description'); }, [contextStyles]);
        var validationClassName = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.validation'); }, [contextStyles]);
        var validationErrorClassName = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.validation.error'); }, [contextStyles]);
        var inputClassName = ['validate'].concat(isValid ? 'valid' : 'invalid');
        var getStyleAsClassName = React.useMemo(function () { return findStyleAsClassName(contextStyles); }, [contextStyles]);
        var getStyle = React.useMemo(function () { return findStyle(contextStyles); }, [contextStyles]);
        var wrapper = classNames.join(' ');
        var input = inputClassName.join(' ');
        var classNamesProp = React.useMemo(function () { return ({
            wrapper: wrapper,
            input: input,
            label: labelClass,
            description: descriptionClassName,
            validation: validationClassName,
            validationError: validationErrorClassName,
        }); }, [
            wrapper,
            input,
            labelClass,
            descriptionClassName,
            validationClassName,
            validationErrorClassName,
        ]);
        return (React__default["default"].createElement(Component, __assign({}, props, { getStyleAsClassName: getStyleAsClassName, getStyle: getStyle, classNames: classNamesProp })));
    };
};
var addVanillaLayoutProps = function (mapStateToProps) {
    return function (state, ownProps) {
        var props = mapStateToProps(state, ownProps);
        return __assign(__assign({}, props), { getStyleAsClassName: getStyleAsClassName(state), getStyle: getStyle(state) });
    };
};
var addVanillaCellProps = function (mapStateToCellsProps) {
    return function (state, ownProps) {
        var props = mapStateToCellsProps(state, ownProps);
        var inputClassName = ['validate'].concat(props.isValid ? 'valid' : 'invalid');
        return __assign(__assign({}, props), { className: inputClassName.join(' '), getStyleAsClassName: getStyleAsClassName(state), getStyle: getStyle(state) });
    };
};
var withVanillaCellPropsForType = function (type) { return function (Component) {
    return function WithVanillaCellPropsForType(props) {
        var inputClassName = ['validate'].concat(props.isValid ? 'valid' : 'invalid');
        var styles = useStyles();
        var definedStyle = findStyleAsClassName(styles)(type);
        if (definedStyle) {
            inputClassName.push(definedStyle);
        }
        return (React__default["default"].createElement(Component, __assign({}, props, { getStyleAsClassName: findStyleAsClassName(styles), getStyle: findStyle(styles), className: inputClassName.join(' ') })));
    };
}; };
var withAjvProps = function (Component) {
    return function WithAjvProps(props) {
        var ctx = react.useJsonForms();
        var ajv = core.getAjv({ jsonforms: __assign({}, ctx) });
        return React__default["default"].createElement(Component, __assign({}, props, { ajv: ajv }));
    };
};
var withVanillaCellProps = withVanillaCellPropsForType('control.input');
var withVanillaEnumCellProps = withVanillaCellPropsForType('control.select');
var withVanillaBooleanCellProps = withVanillaCellPropsForType('control.checkbox');

var InputControl =  (function (_super) {
    __extends(InputControl, _super);
    function InputControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputControl.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, description = _a.description, id = _a.id, errors = _a.errors, label = _a.label, uischema = _a.uischema, schema = _a.schema, rootSchema = _a.rootSchema, visible = _a.visible, enabled = _a.enabled, required = _a.required, path = _a.path, cells = _a.cells, config = _a.config;
        var isValid = errors.length === 0;
        var divClassNames = [classNames.validation]
            .concat(isValid ? classNames.description : classNames.validationError)
            .join(' ');
        var appliedUiSchemaOptions = merge__default["default"]({}, config, uischema.options);
        var showDescription = !core.isDescriptionHidden(visible, description, this.state.isFocused, appliedUiSchemaOptions.showUnfocusedDescription);
        var testerContext = {
            rootSchema: rootSchema,
            config: config,
        };
        var cell = maxBy__default["default"](cells, function (r) { return r.tester(uischema, schema, testerContext); });
        if (cell === undefined ||
            cell.tester(uischema, schema, testerContext) === core.NOT_APPLICABLE) {
            console.warn('No applicable cell found.', uischema, schema);
            return null;
        }
        else {
            return (React__default["default"].createElement("div", { className: classNames.wrapper, hidden: !visible, onFocus: this.onFocus, onBlur: this.onBlur, id: id },
                React__default["default"].createElement("label", { htmlFor: id + '-input', className: classNames.label }, core.computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk)),
                React__default["default"].createElement(react.DispatchCell, { uischema: uischema, schema: schema, path: path, id: id + '-input', enabled: enabled }),
                React__default["default"].createElement("div", { className: divClassNames }, !isValid ? errors : showDescription ? description : null)));
        }
    };
    return InputControl;
}(react.Control));
var inputControlTester = core.rankWith(1, core.isControl);
var InputControl$1 = withVanillaControlProps(react.withJsonFormsControlProps(InputControl));

var RadioGroup = function (_a) {
    var classNames = _a.classNames, id = _a.id, label = _a.label, options = _a.options, required = _a.required, description = _a.description, errors = _a.errors, data = _a.data, uischema = _a.uischema, visible = _a.visible, config = _a.config, enabled = _a.enabled, path = _a.path, handleChange = _a.handleChange;
    var contextStyles = useStyles();
    var _b = React.useState(false), isFocused = _b[0], setFocus = _b[1];
    var radioControl = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.radio'); }, [contextStyles]);
    var radioOption = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.radio.option'); }, [contextStyles]);
    var radioInput = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.radio.input'); }, [contextStyles]);
    var radioLabel = React.useMemo(function () { return findStyleAsClassName(contextStyles)('control.radio.label'); }, [contextStyles]);
    var isValid = errors.length === 0;
    var divClassNames = [classNames.validation]
        .concat(isValid ? classNames.description : classNames.validationError)
        .join(' ');
    var appliedUiSchemaOptions = merge__default["default"]({}, config, uischema.options);
    var showDescription = !core.isDescriptionHidden(visible, description, isFocused, appliedUiSchemaOptions.showUnfocusedDescription);
    var hasRadioClass = !radioControl || radioControl === 'radio';
    var groupStyle = {};
    if (hasRadioClass) {
        groupStyle = {
            display: 'flex',
            flexDirection: 'vertical' === appliedUiSchemaOptions.orientation ? 'column' : 'row',
        };
    }
    return (React__default["default"].createElement("div", { className: classNames.wrapper, hidden: !visible, onFocus: function () { return setFocus(true); }, onBlur: function () { return setFocus(false); } },
        React__default["default"].createElement("label", { htmlFor: id, className: classNames.label }, core.computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk)),
        React__default["default"].createElement("div", { className: radioControl, style: groupStyle }, options.map(function (option) { return (React__default["default"].createElement("div", { key: option.label, className: radioOption },
            React__default["default"].createElement("input", { type: 'radio', value: option.value, id: option.value, name: id, checked: data === option.value, onChange: function (_) { return handleChange(path, option.value); }, disabled: !enabled, className: radioInput }),
            React__default["default"].createElement("label", { htmlFor: option.value, className: radioLabel }, option.label))); })),
        React__default["default"].createElement("div", { className: divClassNames }, !isValid ? errors : showDescription ? description : null)));
};

var RadioGroupControl = function (props) {
    return React__default["default"].createElement(RadioGroup, __assign({}, props));
};
var radioGroupControlTester = core.rankWith(3, core.and(core.isEnumControl, core.optionIs('format', 'radio')));
var RadioGroupControl$1 = withVanillaControlProps(react.withJsonFormsEnumProps(RadioGroupControl));

var OneOfRadioGroupControl = function (props) {
    return React__default["default"].createElement(RadioGroup, __assign({}, props));
};
var oneOfRadioGroupControlTester = core.rankWith(3, core.and(core.isOneOfEnumControl, core.optionIs('format', 'radio')));
var OneOfRadioGroupControl$1 = withVanillaControlProps(react.withJsonFormsOneOfEnumProps(OneOfRadioGroupControl));

var convertToValidClassName$1 = core.Helpers.convertToValidClassName;
var ArrayControl = function (_a) {
    var classNames = _a.classNames, data = _a.data, label = _a.label, path = _a.path, schema = _a.schema, errors = _a.errors, addItem = _a.addItem, removeItems = _a.removeItems, moveUp = _a.moveUp, moveDown = _a.moveDown, uischema = _a.uischema, uischemas = _a.uischemas, getStyleAsClassName = _a.getStyleAsClassName, renderers = _a.renderers, rootSchema = _a.rootSchema, translations = _a.translations;
    var controlElement = uischema;
    var childUiSchema = React.useMemo(function () {
        return core.findUISchema(uischemas, schema, uischema.scope, path, undefined, uischema, rootSchema);
    }, [uischemas, schema, uischema.scope, path, uischema, rootSchema]);
    var isValid = errors.length === 0;
    var validationClass = getStyleAsClassName('array.control.validation');
    var divClassNames = [validationClass]
        .concat(isValid ? '' : getStyleAsClassName('array.control.validation.error'))
        .join(' ');
    var buttonClassAdd = getStyleAsClassName('array.control.add');
    var labelClass = getStyleAsClassName('array.control.label');
    var childControlsClass = getStyleAsClassName('array.child.controls');
    var buttonClassUp = getStyleAsClassName('array.child.controls.up');
    var buttonClassDown = getStyleAsClassName('array.child.controls.down');
    var buttonClassDelete = getStyleAsClassName('array.child.controls.delete');
    var controlClass = [
        getStyleAsClassName('array.control'),
        convertToValidClassName$1(controlElement.scope),
    ].join(' ');
    return (React__default["default"].createElement("div", { className: controlClass },
        React__default["default"].createElement("header", null,
            React__default["default"].createElement("label", { className: labelClass }, label),
            React__default["default"].createElement("button", { className: buttonClassAdd, onClick: addItem(path, core.createDefaultValue(schema, rootSchema)) },
                "Add to ",
                label)),
        React__default["default"].createElement("div", { className: divClassNames }, errors),
        React__default["default"].createElement("div", { className: classNames.children }, data ? (range__default["default"](0, data.length).map(function (index) {
            var childPath = core.composePaths(path, "".concat(index));
            return (React__default["default"].createElement("div", { key: index },
                React__default["default"].createElement(react.JsonFormsDispatch, { schema: schema, uischema: childUiSchema || uischema, path: childPath, key: childPath, renderers: renderers }),
                React__default["default"].createElement("div", { className: childControlsClass },
                    React__default["default"].createElement("button", { className: buttonClassUp, "aria-label": translations.upAriaLabel, onClick: function () {
                            moveUp(path, index)();
                        } }, translations.up),
                    React__default["default"].createElement("button", { className: buttonClassDown, "aria-label": translations.downAriaLabel, onClick: function () {
                            moveDown(path, index)();
                        } }, translations.down),
                    React__default["default"].createElement("button", { className: buttonClassDelete, "aria-label": translations.removeAriaLabel, onClick: function () {
                            if (window.confirm('Are you sure you wish to delete this item?')) {
                                removeItems(path, [index])();
                            }
                        } }, translations.removeTooltip))));
        })) : (React__default["default"].createElement("p", null, translations.noDataMessage)))));
};
var ArrayControlRenderer = function (_a) {
    var schema = _a.schema, uischema = _a.uischema, data = _a.data, path = _a.path, rootSchema = _a.rootSchema, uischemas = _a.uischemas, addItem = _a.addItem, getStyle = _a.getStyle, getStyleAsClassName = _a.getStyleAsClassName, removeItems = _a.removeItems, moveUp = _a.moveUp, moveDown = _a.moveDown, id = _a.id, visible = _a.visible, enabled = _a.enabled, errors = _a.errors, translations = _a.translations;
    var controlElement = uischema;
    var labelDescription = core.Helpers.createLabelDescriptionFrom(controlElement, schema);
    var label = labelDescription.show ? labelDescription.text : '';
    var controlClassName = "control ".concat(core.Helpers.convertToValidClassName(controlElement.scope));
    var fieldSetClassName = getStyleAsClassName('array.layout');
    var buttonClassName = getStyleAsClassName('array.button');
    var childrenClassName = getStyleAsClassName('array.children');
    var classNames = {
        wrapper: controlClassName,
        fieldSet: fieldSetClassName,
        button: buttonClassName,
        children: childrenClassName,
    };
    return (React__default["default"].createElement(ArrayControl, { classNames: classNames, data: data, label: label, path: path, schema: schema, errors: errors, addItem: addItem, removeItems: removeItems, moveUp: moveUp, moveDown: moveDown, uischema: uischema, uischemas: uischemas, getStyleAsClassName: getStyleAsClassName, rootSchema: rootSchema, id: id, visible: visible, enabled: enabled, getStyle: getStyle, translations: translations }));
};
var ArrayControlRenderer$1 = withVanillaControlProps(react.withJsonFormsArrayControlProps(ArrayControlRenderer));

var arrayControlTester = core.rankWith(4, core.isObjectArrayWithNesting);

var isCategorization = function (category) { return category.type === 'Categorization'; };
var categorizationTester = core.rankWith(1, core.and(core.uiTypeIs('Categorization'), function (uischema) {
    var hasCategory = function (element) {
        if (isEmpty__default["default"](element.elements)) {
            return false;
        }
        return element.elements
            .map(function (elem) {
            return isCategorization(elem) ? hasCategory(elem) : elem.type === 'Category';
        })
            .reduce(function (prev, curr) { return prev && curr; }, true);
    };
    return hasCategory(uischema);
}));

var getCategoryClassName = function (category, selectedCategory) { return (selectedCategory === category ? 'selected' : ''); };
var CategorizationList = function (_a) {
    var selectedCategory = _a.selectedCategory, elements = _a.elements, data = _a.data, depth = _a.depth, onSelect = _a.onSelect, subcategoriesClassName = _a.subcategoriesClassName, groupClassName = _a.groupClassName, t = _a.t, ajv = _a.ajv;
    var filteredElements = React.useMemo(function () {
        return elements.filter(function (category) {
            return core.isVisible(category, data, undefined, ajv);
        });
    }, [elements, data, ajv]);
    var categoryLabels = React.useMemo(function () { return filteredElements.map(function (cat) { return core.deriveLabelForUISchemaElement(cat, t); }); }, [filteredElements, t]);
    return (React__default["default"].createElement("ul", { className: subcategoriesClassName }, filteredElements.map(function (category, idx) {
        if (isCategorization(category)) {
            return (React__default["default"].createElement("li", { key: categoryLabels[idx], className: groupClassName },
                React__default["default"].createElement("span", null, categoryLabels[idx]),
                React__default["default"].createElement(CategorizationList, { selectedCategory: selectedCategory, elements: category.elements, data: data, ajv: ajv, depth: depth + 1, onSelect: onSelect, subcategoriesClassName: subcategoriesClassName, groupClassName: groupClassName, t: t })));
        }
        else {
            return (React__default["default"].createElement("li", { key: categoryLabels[idx], onClick: onSelect(idx), className: getCategoryClassName(category, selectedCategory) },
                React__default["default"].createElement("span", null, categoryLabels[idx])));
        }
    })));
};

var SingleCategory = function (_a) {
    var category = _a.category, schema = _a.schema, path = _a.path;
    return (
    React__default["default"].createElement("div", { id: 'categorization.detail' }, (category.elements || []).map(function (child, index) { return (React__default["default"].createElement(react.JsonFormsDispatch, { key: "".concat(path, "-").concat(index), uischema: child, schema: schema, path: path })); })));
};

var CategorizationRenderer = function (_a) {
    var data = _a.data, uischema = _a.uischema, schema = _a.schema, path = _a.path, selected = _a.selected, t = _a.t, visible = _a.visible, getStyleAsClassName = _a.getStyleAsClassName, onChange = _a.onChange, ajv = _a.ajv;
    var categorization = uischema;
    var elements = categorization.elements;
    var classNames = getStyleAsClassName('categorization');
    var masterClassNames = getStyleAsClassName('categorization.master');
    var detailClassNames = getStyleAsClassName('categorization.detail');
    var subcategoriesClassName = getStyleAsClassName('category.subcategories');
    var groupClassName = getStyleAsClassName('category.group');
    var _b = React.useState(uischema), previousCategorization = _b[0], setPreviousCategorization = _b[1];
    var _c = React.useState(selected !== null && selected !== void 0 ? selected : 0), activeCategory = _c[0], setActiveCategory = _c[1];
    var safeCategory = activeCategory >= categorization.elements.length ? 0 : activeCategory;
    if (categorization !== previousCategorization) {
        setActiveCategory(0);
        setPreviousCategorization(categorization);
    }
    var onCategorySelected = function (categoryIndex) { return function () {
        if (onChange) {
            return onChange(categoryIndex, safeCategory);
        }
        return setActiveCategory(categoryIndex);
    }; };
    return (React__default["default"].createElement("div", { className: classNames, hidden: visible === null || visible === undefined ? false : !visible },
        React__default["default"].createElement("div", { className: masterClassNames },
            React__default["default"].createElement(CategorizationList, { elements: elements, selectedCategory: elements[safeCategory], data: data, ajv: ajv, depth: 0, onSelect: onCategorySelected, subcategoriesClassName: subcategoriesClassName, groupClassName: groupClassName, t: t })),
        React__default["default"].createElement("div", { className: detailClassNames },
            React__default["default"].createElement(SingleCategory, { category: elements[safeCategory], schema: schema, path: path, key: safeCategory }))));
};
var CategorizationRenderer$1 = withAjvProps(withVanillaControlProps(react.withTranslateProps(react.withJsonFormsLayoutProps(CategorizationRenderer))));

var labelRendererTester = core.rankWith(1, core.uiTypeIs('Label'));
var LabelRenderer = function (_a) {
    var text = _a.text, visible = _a.visible, getStyleAsClassName = _a.getStyleAsClassName;
    var classNames = getStyleAsClassName('label-control');
    var isHidden = !visible;
    return (React__default["default"].createElement("label", { hidden: isHidden, className: classNames }, text));
};
var LabelRenderer$1 = withVanillaControlProps(react.withJsonFormsLabelProps(LabelRenderer));

var convertToValidClassName = core.Helpers.convertToValidClassName;
var or = core.Test.or, isObjectArrayControl = core.Test.isObjectArrayControl, isPrimitiveArrayControl = core.Test.isPrimitiveArrayControl, rankWith = core.Test.rankWith;
var tableArrayControlTester = rankWith(3, or(isObjectArrayControl, isPrimitiveArrayControl));
var TableArrayControl =  (function (_super) {
    __extends(TableArrayControl, _super);
    function TableArrayControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmDelete = function (path, index) {
            var p = path.substring(0, path.lastIndexOf('.'));
            _this.props.removeItems(p, [index])();
        };
        return _this;
    }
    TableArrayControl.prototype.render = function () {
        var _this = this;
        var _a = this.props, addItem = _a.addItem, uischema = _a.uischema, schema = _a.schema, rootSchema = _a.rootSchema, path = _a.path, data = _a.data, visible = _a.visible, errors = _a.errors, label = _a.label, getStyleAsClassName = _a.getStyleAsClassName, childErrors = _a.childErrors, translations = _a.translations;
        var controlElement = uischema;
        var tableClass = getStyleAsClassName('array.table.table');
        var labelClass = getStyleAsClassName('array.table.label');
        var buttonClass = getStyleAsClassName('array.table.button');
        var validationClass = getStyleAsClassName('array.table.validation');
        var controlClass = [
            getStyleAsClassName('array.table'),
            convertToValidClassName(controlElement.scope),
        ].join(' ');
        var createControlElement = function (key) { return ({
            type: 'Control',
            label: false,
            scope: schema.type === 'object' ? "#/properties/".concat(key) : '#',
        }); };
        var isValid = errors.length === 0;
        var divClassNames = [validationClass]
            .concat(isValid ? '' : getStyleAsClassName('array.table.validation.error'))
            .join(' ');
        return (React__default["default"].createElement("div", { className: controlClass, hidden: !visible },
            React__default["default"].createElement("header", null,
                React__default["default"].createElement("label", { className: labelClass }, label),
                React__default["default"].createElement("button", { className: buttonClass, onClick: addItem(path, core.createDefaultValue(schema, rootSchema)) }, translations.addTooltip)),
            React__default["default"].createElement("div", { className: divClassNames }, !isValid ? errors : ''),
            React__default["default"].createElement("table", { className: tableClass },
                React__default["default"].createElement("thead", null,
                    React__default["default"].createElement("tr", null,
                        schema.properties ? (fpflow__default["default"](fpkeys__default["default"], fpfilter__default["default"](function (prop) { return schema.properties[prop].type !== 'array'; }), fpmap__default["default"](function (prop) {
                            var _a;
                            return (React__default["default"].createElement("th", { key: prop }, (_a = schema.properties[prop].title) !== null && _a !== void 0 ? _a : fpstartCase__default["default"](prop)));
                        }))(schema.properties)) : (React__default["default"].createElement("th", null, "Items")),
                        React__default["default"].createElement("th", null, "Valid"),
                        React__default["default"].createElement("th", null, "\u00A0"))),
                React__default["default"].createElement("tbody", null, !data || !Array.isArray(data) || data.length === 0 ? (React__default["default"].createElement("tr", null,
                    React__default["default"].createElement("td", null, translations.noDataMessage))) : (data.map(function (_child, index) {
                    var childPath = core.Paths.compose(path, "".concat(index));
                    var errorsPerEntry = filter__default["default"](childErrors, function (error) {
                        var errorPath = core.getControlPath(error);
                        return errorPath.startsWith(childPath);
                    });
                    var validationClassName = getStyleAsClassName('array.validation');
                    var errorValidationClassName = getStyleAsClassName('array.validation.error');
                    var errorClassNames = errorsPerEntry
                        ? [validationClassName]
                            .concat(errorValidationClassName)
                            .join(' ')
                        : validationClassName;
                    return (React__default["default"].createElement("tr", { key: childPath },
                        schema.properties ? (fpflow__default["default"](fpkeys__default["default"], fpfilter__default["default"](function (prop) { return schema.properties[prop].type !== 'array'; }), fpmap__default["default"](function (prop) {
                            var childPropPath = core.Paths.compose(childPath, prop.toString());
                            return (React__default["default"].createElement("td", { key: childPropPath },
                                React__default["default"].createElement(react.DispatchCell, { schema: core.Resolve.schema(schema, "#/properties/".concat(core.encode(prop)), rootSchema), uischema: createControlElement(core.encode(prop)), path: childPath + '.' + prop })));
                        }))(schema.properties)) : (React__default["default"].createElement("td", { key: core.Paths.compose(childPath, index.toString()) },
                            React__default["default"].createElement(react.DispatchCell, { schema: schema, uischema: createControlElement(), path: childPath }))),
                        React__default["default"].createElement("td", null, errorsPerEntry ? (React__default["default"].createElement("span", { className: errorClassNames }, join__default["default"](errorsPerEntry.map(function (e) { return e.message; }), ' and '))) : (React__default["default"].createElement("span", { className: errorClassNames }, "OK"))),
                        React__default["default"].createElement("td", null,
                            React__default["default"].createElement("button", { "aria-label": translations.removeAriaLabel, onClick: function () {
                                    if (window.confirm(translations.deleteDialogMessage)) {
                                        _this.confirmDelete(childPath, index);
                                    }
                                } }, translations.removeTooltip))));
                }))))));
    };
    return TableArrayControl;
}(React__default["default"].Component));
var TableArrayControl$1 = withVanillaControlProps(react.withJsonFormsArrayControlProps(TableArrayControl));

var BooleanCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("input", { type: 'checkbox', checked: !!data, onChange: function (ev) { return handleChange(path, ev.target.checked); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var booleanCellTester = core.rankWith(2, core.isBooleanControl);
var BooleanCell$1 = react.withJsonFormsCellProps(withVanillaBooleanCellProps(BooleanCell));

var DateCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("input", { type: 'date', value: data || '', onChange: function (ev) { return handleChange(path, ev.target.value); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var dateCellTester = core.rankWith(2, core.isDateControl);
var DateCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(DateCell));

var DateTimeCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    var toISOString = function (inputDateTime) {
        return inputDateTime === '' ? '' : inputDateTime + ':00.000Z';
    };
    return (React__default["default"].createElement("input", { type: 'datetime-local', value: (data || '').substr(0, 16), onChange: function (ev) { return handleChange(path, toISOString(ev.target.value)); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var dateTimeCellTester = core.rankWith(2, core.isDateTimeControl);
var DateTimeCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(DateTimeCell));

var EnumCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, schema = props.schema, uischema = props.uischema, path = props.path, handleChange = props.handleChange, options = props.options, t = props.t;
    var noneOptionLabel = React.useMemo(function () { return t('enum.none', i18nDefaults['enum.none'], { schema: schema, uischema: uischema, path: path }); }, [t, schema, uischema, path]);
    return (React__default["default"].createElement("select", { className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, value: data || '', onChange: function (ev) {
            return handleChange(path, ev.target.selectedIndex === 0 ? undefined : ev.target.value);
        } }, [
        React__default["default"].createElement("option", { value: '', key: 'jsonforms.enum.none' }, noneOptionLabel),
    ].concat(options.map(function (optionValue) { return (React__default["default"].createElement("option", { value: optionValue.value, label: optionValue.label, key: optionValue.value })); }))));
};
var enumCellTester = core.rankWith(2, core.isEnumControl);
var EnumCell$1 = react.withJsonFormsEnumCellProps(react.withTranslateProps(withVanillaEnumCellProps(EnumCell)));

var toNumber$1 = function (value) {
    return value === '' ? undefined : parseInt(value, 10);
};
var IntegerCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("input", { type: 'number', step: '1', value: data !== null && data !== void 0 ? data : '', onChange: function (ev) { return handleChange(path, toNumber$1(ev.target.value)); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var integerCellTester = core.rankWith(2, core.isIntegerControl);
var IntegerCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(IntegerCell));

var toNumber = function (value) { return (value === '' ? undefined : Number(value)); };
var NumberCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("input", { type: 'number', step: '0.1', value: data !== null && data !== void 0 ? data : '', onChange: function (ev) { return handleChange(path, toNumber(ev.target.value)); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var numberCellTester = core.rankWith(2, core.isNumberControl);
var NumberCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(NumberCell));

var NumberFormatCell = function (props) {
    var className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange, schema = props.schema;
    var maxLength = schema.maxLength;
    var formattedNumber = props.toFormatted(props.data);
    var onChange = function (ev) {
        var validStringNumber = props.fromFormatted(ev.currentTarget.value);
        handleChange(path, validStringNumber);
    };
    return (React__default["default"].createElement("input", { type: 'text', value: formattedNumber, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, maxLength: uischema.options && uischema.options.restrict ? maxLength : undefined, size: uischema.options && uischema.options.trim ? maxLength : undefined }));
};
var numberFormatCellTester = core.rankWith(4, core.isNumberFormatControl);
var NumberFormatCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(NumberFormatCell));

var SliderCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, schema = props.schema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("div", { style: { display: 'flex' } },
        React__default["default"].createElement("input", { type: 'range', max: schema.maximum, min: schema.minimum, value: data || schema.default, onChange: function (ev) { return handleChange(path, Number(ev.target.value)); }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus, style: { flex: '1' } }),
        React__default["default"].createElement("label", { style: { marginLeft: '0.5em' } }, data || schema.default)));
};
var sliderCellTester = core.rankWith(4, core.isRangeControl);
var SliderCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(SliderCell));

var TextCell = function (props) {
    var config = props.config, data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, schema = props.schema, path = props.path, handleChange = props.handleChange;
    var maxLength = schema.maxLength;
    var appliedUiSchemaOptions = merge__default["default"]({}, config, uischema.options);
    return (React__default["default"].createElement("input", { type: appliedUiSchemaOptions.format === 'password' ? 'password' : 'text', value: data || '', onChange: function (ev) {
            return handleChange(path, ev.target.value === '' ? undefined : ev.target.value);
        }, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, placeholder: appliedUiSchemaOptions.placeholder, maxLength: appliedUiSchemaOptions.restrict ? maxLength : undefined, size: appliedUiSchemaOptions.trim ? maxLength : undefined }));
};
var textCellTester = core.rankWith(1, core.isStringControl);
var TextCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(TextCell));

var TextAreaCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, config = props.config, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    var appliedUiSchemaOptions = merge__default["default"]({}, config, uischema.options);
    return (React__default["default"].createElement("textarea", { value: data || '', onChange: function (ev) {
            return handleChange(path, ev.target.value === '' ? undefined : ev.target.value);
        }, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, placeholder: appliedUiSchemaOptions.placeholder }));
};
var textAreaCellTester = core.rankWith(2, core.isMultiLineControl);
var TextAreaCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(TextAreaCell));

var appendSecondsIfNecessary = function (value) {
    if (typeof value === 'string') {
        var splitValue = value.split(':');
        if (splitValue.length === 2) {
            splitValue.push('00');
        }
        return splitValue.join(':');
    }
    return value;
};
var TimeCell = function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange;
    return (React__default["default"].createElement("input", { type: 'time', value: data || '', onChange: function (ev) {
            return handleChange(path, appendSecondsIfNecessary(ev.target.value));
        }, className: className, id: id, disabled: !enabled, autoFocus: uischema.options && uischema.options.focus }));
};
var timeCellTester = core.rankWith(2, core.isTimeControl);
var TimeCell$1 = react.withJsonFormsCellProps(withVanillaCellProps(TimeCell));

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

var renderChildren = function (layout, schema, className, path, enabled) {
    if (isEmpty__default["default"](layout.elements)) {
        return [];
    }
    var _a = react.useJsonForms(), renderers = _a.renderers, cells = _a.cells;
    return layout.elements.map(function (child, index) {
        return (React__default["default"].createElement("div", { className: className, key: "".concat(path, "-").concat(index) },
            React__default["default"].createElement(react.JsonFormsDispatch, { renderers: renderers, cells: cells, uischema: child, schema: schema, path: path, enabled: enabled })));
    });
};

var groupTester = core.rankWith(1, core.uiTypeIs('Group'));
var GroupLayoutRenderer = function (props) {
    props.data; var otherProps = __rest(props, ["data"]);
    return React__default["default"].createElement(GroupLayoutRendererComponent, __assign({}, otherProps));
};
var GroupLayoutRendererComponent = React__default["default"].memo(function GroupLayoutRendererComponent(_a) {
    var schema = _a.schema, uischema = _a.uischema, path = _a.path, enabled = _a.enabled, visible = _a.visible, label = _a.label, getStyle = _a.getStyle, getStyleAsClassName = _a.getStyleAsClassName;
    var group = uischema;
    var elementsSize = group.elements ? group.elements.length : 0;
    var classNames = getStyleAsClassName('group.layout');
    var childClassNames = ['group-layout-item']
        .concat(getStyle('group.layout.item', elementsSize))
        .join(' ');
    return (React__default["default"].createElement("fieldset", { className: classNames, hidden: visible === undefined || visible === null ? false : !visible },
        !isEmpty__default["default"](label) ? (React__default["default"].createElement("legend", { className: getStyleAsClassName('group.label') }, label)) : (''),
        renderChildren(group, schema, childClassNames, path, enabled)));
});
var GroupLayout = withVanillaControlProps(react.withJsonFormsLayoutProps(GroupLayoutRenderer));

var JsonFormsLayout = function (_a) {
    var className = _a.className, children = _a.children, visible = _a.visible;
    return (React__default["default"].createElement("div", { className: className, hidden: visible === undefined || visible === null ? false : !visible }, children));
};

var horizontalLayoutTester = core.rankWith(1, core.uiTypeIs('HorizontalLayout'));
var HorizontalLayoutRenderer = function (props) {
    props.data; var otherProps = __rest(props, ["data"]);
    return React__default["default"].createElement(HorizontalLayoutRendererComponent, __assign({}, otherProps));
};
var HorizontalLayoutRendererComponent = React__default["default"].memo(function HorizontalLayoutRendererComponent(_a) {
    var schema = _a.schema, uischema = _a.uischema, getStyle = _a.getStyle, getStyleAsClassName = _a.getStyleAsClassName, enabled = _a.enabled, visible = _a.visible, path = _a.path;
    var horizontalLayout = uischema;
    var elementsSize = horizontalLayout.elements
        ? horizontalLayout.elements.length
        : 0;
    var layoutClassName = getStyleAsClassName('horizontal.layout');
    var childClassNames = ['horizontal-layout-item']
        .concat(getStyle('horizontal.layout.item', elementsSize))
        .join(' ');
    return (React__default["default"].createElement(JsonFormsLayout, { className: layoutClassName, visible: visible, enabled: enabled, path: path, uischema: uischema, schema: schema, getStyle: getStyle, getStyleAsClassName: getStyleAsClassName }, renderChildren(horizontalLayout, schema, childClassNames, path, enabled)));
});
var HorizontalLayout = withVanillaControlProps(react.withJsonFormsLayoutProps(HorizontalLayoutRenderer, false));

var verticalLayoutTester = core.rankWith(1, core.uiTypeIs('VerticalLayout'));
var VerticalLayoutRenderer = function (props) {
    props.data; var otherProps = __rest(props, ["data"]);
    return React__default["default"].createElement(VerticalLayoutRendererComponent, __assign({}, otherProps));
};
var VerticalLayoutRendererComponent = React__default["default"].memo(function VerticalLayoutRendererComponent(_a) {
    var schema = _a.schema, uischema = _a.uischema, path = _a.path, visible = _a.visible, enabled = _a.enabled, getStyle = _a.getStyle, getStyleAsClassName = _a.getStyleAsClassName;
    var verticalLayout = uischema;
    var elementsSize = verticalLayout.elements
        ? verticalLayout.elements.length
        : 0;
    var layoutClassName = getStyleAsClassName('vertical.layout');
    var childClassNames = ['vertical-layout-item']
        .concat(getStyle('vertical.layout.item', elementsSize))
        .join(' ');
    return (React__default["default"].createElement(JsonFormsLayout, { className: layoutClassName, uischema: uischema, schema: schema, visible: visible, enabled: enabled, path: path, getStyle: getStyle, getStyleAsClassName: getStyleAsClassName }, renderChildren(verticalLayout, schema, childClassNames, path, enabled)));
});
var VerticalLayout = withVanillaControlProps(react.withJsonFormsLayoutProps(VerticalLayoutRenderer, false));

var vanillaRenderers = [
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
var vanillaCells = [
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

exports.ArrayControl = ArrayControlRenderer$1;
exports.BooleanCell = BooleanCell$1;
exports.Categorization = CategorizationRenderer$1;
exports.Customizable = CustomizableCells;
exports.DateCell = DateCell$1;
exports.DateTimeCell = DateTimeCell$1;
exports.EnumCell = EnumCell$1;
exports.GroupLayout = GroupLayout;
exports.HorizontalLayout = HorizontalLayout;
exports.InputControl = InputControl$1;
exports.IntegerCell = IntegerCell$1;
exports.JsonFormsStyleContext = JsonFormsStyleContext;
exports.LabelRenderer = LabelRenderer$1;
exports.NumberCell = NumberCell$1;
exports.NumberFormatCell = NumberFormatCell$1;
exports.OneOfRadioGroupControl = OneOfRadioGroupControl$1;
exports.REGISTER_STYLE = REGISTER_STYLE;
exports.REGISTER_STYLES = REGISTER_STYLES;
exports.RadioGroupControl = RadioGroupControl$1;
exports.SliderCell = SliderCell$1;
exports.TableArrayControl = TableArrayControl$1;
exports.TextAreaCell = TextAreaCell$1;
exports.TextCell = TextCell$1;
exports.TimeCell = TimeCell$1;
exports.UNREGISTER_STYLE = UNREGISTER_STYLE;
exports.VerticalLayout = VerticalLayout;
exports.addVanillaCellProps = addVanillaCellProps;
exports.addVanillaControlProps = addVanillaControlProps;
exports.addVanillaLayoutProps = addVanillaLayoutProps;
exports.arrayControlTester = arrayControlTester;
exports.booleanCellTester = booleanCellTester;
exports.categorizationTester = categorizationTester;
exports.dateCellTester = dateCellTester;
exports.dateTimeCellTester = dateTimeCellTester;
exports.enumCellTester = enumCellTester;
exports.getStyle = getStyle;
exports.getStyleAsClassName = getStyleAsClassName;
exports.groupTester = groupTester;
exports.horizontalLayoutTester = horizontalLayoutTester;
exports.i18nDefaults = i18nDefaults;
exports.inputControlTester = inputControlTester;
exports.integerCellTester = integerCellTester;
exports.labelRendererTester = labelRendererTester;
exports.numberCellTester = numberCellTester;
exports.numberFormatCellTester = numberFormatCellTester;
exports.oneOfRadioGroupControlTester = oneOfRadioGroupControlTester;
exports.radioGroupControlTester = radioGroupControlTester;
exports.registerStyle = registerStyle$1;
exports.registerStyles = registerStyles;
exports.sliderCellTester = sliderCellTester;
exports.stylingReducer = stylingReducer;
exports.tableArrayControlTester = tableArrayControlTester;
exports.textAreaCellTester = textAreaCellTester;
exports.textCellTester = textCellTester;
exports.timeCellTester = timeCellTester;
exports.unregisterStyle = unregisterStyle;
exports.useStyleContext = useStyleContext;
exports.useStyles = useStyles;
exports.vanillaCells = vanillaCells;
exports.vanillaRenderers = vanillaRenderers;
exports.vanillaStyles = vanillaStyles;
exports.verticalLayoutTester = verticalLayoutTester;
exports.withAjvProps = withAjvProps;
exports.withVanillaBooleanCellProps = withVanillaBooleanCellProps;
exports.withVanillaCellProps = withVanillaCellProps;
exports.withVanillaControlProps = withVanillaControlProps;
exports.withVanillaEnumCellProps = withVanillaEnumCellProps;
//# sourceMappingURL=jsonforms-react-vanilla.cjs.js.map
