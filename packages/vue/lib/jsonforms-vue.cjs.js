'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var maxBy = require('lodash/maxBy');
var core = require('@jsonforms/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var maxBy__default = /*#__PURE__*/_interopDefaultLegacy(maxBy);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

var script$3 = vue.defineComponent({
  name: 'UnknownRenderer'
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, "No applicable renderer found.");
}

script$3.render = render$3;

var _excluded = ["control"],
  _excluded2 = ["control"],
  _excluded3 = ["control"],
  _excluded4 = ["rootSchema"],
  _excluded5 = ["control"],
  _excluded6 = ["control"],
  _excluded7 = ["control"],
  _excluded8 = ["control"],
  _excluded9 = ["control"];
var rendererProps = function rendererProps() {
  return {
    schema: {
      required: true,
      type: [Object, Boolean]
    },
    uischema: {
      required: true,
      type: Object
    },
    path: {
      required: true,
      type: String
    },
    enabled: {
      required: false,
      type: Boolean,
      "default": undefined
    },
    renderers: {
      required: false,
      type: Array,
      "default": undefined
    },
    cells: {
      required: false,
      type: Array,
      "default": undefined
    },
    config: {
      required: false,
      type: Object,
      "default": undefined
    }
  };
};
var masterListItemProps = function masterListItemProps() {
  return {
    index: {
      required: true,
      type: Number
    },
    selected: {
      required: true,
      type: Boolean
    },
    path: {
      required: true,
      type: String
    },
    schema: {
      required: true,
      type: [Object, Boolean]
    },
    handleSelect: {
      required: false,
      type: Function,
      "default": undefined
    },
    removeItem: {
      required: false,
      type: Function,
      "default": undefined
    }
  };
};
function useControl(props, stateMap, dispatchMap) {
  var jsonforms = vue.inject('jsonforms');
  var dispatch = vue.inject('dispatch');
  if (!jsonforms || !dispatch) {
    throw "'jsonforms' or 'dispatch' couldn't be injected. Are you within JSON Forms?";
  }
  var id = vue.ref(undefined);
  var control = vue.computed(function () {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, props), stateMap({
      jsonforms: jsonforms
    }, props)), {}, {
      id: id.value
    });
  });
  var dispatchMethods = dispatchMap === null || dispatchMap === void 0 ? void 0 : dispatchMap(dispatch);
  vue.onBeforeMount(function () {
    if (control.value.uischema.scope) {
      id.value = core.createId(control.value.uischema.scope);
    }
  });
  vue.onUnmounted(function () {
    if (id.value) {
      core.removeId(id.value);
      id.value = undefined;
    }
  });
  return _objectSpread2({
    control: control
  }, dispatchMethods);
}
var useJsonFormsControl = function useJsonFormsControl(props) {
  return useControl(props, core.mapStateToControlProps, core.mapDispatchToControlProps);
};
var useJsonFormsControlWithDetail = function useJsonFormsControlWithDetail(props) {
  return useControl(props, core.mapStateToControlWithDetailProps, core.mapDispatchToControlProps);
};
var useJsonFormsEnumControl = function useJsonFormsEnumControl(props) {
  return useControl(props, core.mapStateToEnumControlProps, core.mapDispatchToControlProps);
};
var useJsonFormsOneOfEnumControl = function useJsonFormsOneOfEnumControl(props) {
  return useControl(props, core.mapStateToOneOfEnumControlProps, core.mapDispatchToControlProps);
};
var useJsonFormsArrayControl = function useJsonFormsArrayControl(props) {
  return useControl(props, core.mapStateToArrayControlProps, core.mapDispatchToArrayControlProps);
};
var useJsonFormsAllOfControl = function useJsonFormsAllOfControl(props) {
  return useControl(props, core.mapStateToAllOfProps, core.mapDispatchToControlProps);
};
var useJsonFormsAnyOfControl = function useJsonFormsAnyOfControl(props) {
  return useControl(props, core.mapStateToAnyOfProps, core.mapDispatchToControlProps);
};
var useJsonFormsOneOfControl = function useJsonFormsOneOfControl(props) {
  return useControl(props, core.mapStateToOneOfProps, core.mapDispatchToControlProps);
};
var useJsonFormsMultiEnumControl = function useJsonFormsMultiEnumControl(props) {
  return useControl(props, core.mapStateToMultiEnumControlProps, core.mapDispatchToMultiEnumProps);
};
var useJsonFormsLayout = function useJsonFormsLayout(props) {
  var _useControl = useControl(props, core.mapStateToLayoutProps),
    control = _useControl.control,
    other = _objectWithoutProperties(_useControl, _excluded);
  return _objectSpread2({
    layout: control
  }, other);
};
var useJsonFormsArrayLayout = function useJsonFormsArrayLayout(props) {
  var _useControl2 = useControl(props, core.mapStateToArrayLayoutProps),
    control = _useControl2.control,
    other = _objectWithoutProperties(_useControl2, _excluded2);
  return _objectSpread2({
    layout: control
  }, other);
};
var useJsonFormsMasterListItem = function useJsonFormsMasterListItem(props) {
  var _useControl3 = useControl(props, core.mapStateToMasterListItemProps),
    control = _useControl3.control,
    other = _objectWithoutProperties(_useControl3, _excluded3);
  return _objectSpread2({
    item: control
  }, other);
};
var useJsonFormsRenderer = function useJsonFormsRenderer(props) {
  var jsonforms = vue.inject('jsonforms');
  var dispatch = vue.inject('dispatch');
  if (!jsonforms || !dispatch) {
    throw "'jsonforms' or 'dispatch' couldn't be injected. Are you within JSON Forms?";
  }
  var rawProps = vue.computed(function () {
    return core.mapStateToJsonFormsRendererProps({
      jsonforms: jsonforms
    }, props);
  });
  var rootSchema = vue.computed(function () {
    return rawProps.value.rootSchema;
  });
  var renderer = vue.computed(function () {
    var _rawProps$value = rawProps.value;
      _rawProps$value.rootSchema;
      var rest = _objectWithoutProperties(_rawProps$value, _excluded4);
    return rest;
  });
  return {
    renderer: renderer,
    rootSchema: rootSchema
  };
};
var useJsonFormsLabel = function useJsonFormsLabel(props) {
  var _useControl4 = useControl(props, core.mapStateToLabelProps),
    control = _useControl4.control,
    other = _objectWithoutProperties(_useControl4, _excluded5);
  return _objectSpread2({
    label: control
  }, other);
};
var useJsonFormsCell = function useJsonFormsCell(props) {
  var _useControl5 = useControl(props, core.mapStateToCellProps, core.mapDispatchToControlProps),
    control = _useControl5.control,
    other = _objectWithoutProperties(_useControl5, _excluded6);
  return _objectSpread2({
    cell: control
  }, other);
};
var useJsonFormsEnumCell = function useJsonFormsEnumCell(props) {
  var _useControl6 = useControl(props, core.defaultMapStateToEnumCellProps, core.mapDispatchToControlProps),
    control = _useControl6.control,
    other = _objectWithoutProperties(_useControl6, _excluded7);
  return _objectSpread2({
    cell: control
  }, other);
};
var useJsonFormsOneOfEnumCell = function useJsonFormsOneOfEnumCell(props) {
  var _useControl7 = useControl(props, core.mapStateToOneOfEnumCellProps, core.mapDispatchToControlProps),
    control = _useControl7.control,
    other = _objectWithoutProperties(_useControl7, _excluded8);
  return _objectSpread2({
    cell: control
  }, other);
};
var useJsonFormsDispatchCell = function useJsonFormsDispatchCell(props) {
  var _useControl8 = useControl(props, core.mapStateToDispatchCellProps, core.mapDispatchToControlProps),
    control = _useControl8.control,
    other = _objectWithoutProperties(_useControl8, _excluded9);
  return _objectSpread2({
    cell: control
  }, other);
};

var script$2 = vue.defineComponent({
  name: 'DispatchRenderer',
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useJsonFormsRenderer(props);
  },
  computed: {
    determinedRenderer: function determinedRenderer() {
      var _this = this;
      var testerContext = {
        rootSchema: this.rootSchema,
        config: this.config
      };
      var renderer = maxBy__default["default"](this.renderer.renderers, function (r) {
        return r.tester(_this.renderer.uischema, _this.renderer.schema, testerContext);
      });
      if (renderer === undefined || renderer.tester(this.renderer.uischema, this.renderer.schema, testerContext) === -1) {
        return script$3;
      } else {
        return renderer.renderer;
      }
    }
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.determinedRenderer), vue.normalizeProps(vue.guardReactiveProps(_ctx.renderer)), null, 16);
}

script$2.render = render$2;

var script$1 = vue.defineComponent({
  name: 'DispatchCell',
  props: _objectSpread2({}, rendererProps()),
  setup: function setup(props) {
    return useJsonFormsDispatchCell(props);
  },
  computed: {
    determinedCell: function determinedCell() {
      var _this = this;
      var testerContext = {
        rootSchema: this.cell.rootSchema,
        config: this.config
      };
      var cell = maxBy__default["default"](this.cell.cells, function (r) {
        return r.tester(_this.cell.uischema, _this.cell.schema, testerContext);
      });
      if (cell === undefined || cell.tester(this.cell.uischema, this.cell.schema, testerContext) === -1) {
        return script$3;
      } else {
        return cell.cell;
      }
    }
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.determinedCell), vue.normalizeProps(vue.guardReactiveProps(_ctx.cell)), null, 16);
}

script$1.render = render$1;

var isObject = function isObject(elem) {
  return elem && _typeof(elem) === 'object';
};
var EMPTY = vue.reactive([]);
var script = vue.defineComponent({
  name: 'JsonForms',
  components: {
    DispatchRenderer: script$2
  },
  provide: function provide() {
    return {
      jsonforms: this.jsonforms,
      dispatch: this.dispatch
    };
  },
  props: {
    data: {
      required: true,
      type: [String, Number, Boolean, Array, Object]
    },
    schema: {
      required: false,
      type: [Object, Boolean],
      "default": undefined
    },
    uischema: {
      required: false,
      type: Object,
      "default": undefined
    },
    renderers: {
      required: true,
      type: Array
    },
    cells: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    config: {
      required: false,
      type: Object,
      "default": undefined
    },
    readonly: {
      required: false,
      type: Boolean,
      "default": false
    },
    uischemas: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    validationMode: {
      required: false,
      type: String,
      "default": 'ValidateAndShow'
    },
    ajv: {
      required: false,
      type: Object,
      "default": undefined
    },
    i18n: {
      required: false,
      type: Object,
      "default": undefined
    },
    additionalErrors: {
      required: false,
      type: Array,
      "default": function _default() {
        return EMPTY;
      }
    },
    middleware: {
      required: false,
      type: Function,
      "default": core.defaultMiddleware
    }
  },
  emits: ['change'],
  data: function data() {
    var _this$schema,
      _this$uischema,
      _this = this,
      _this$i18n,
      _this$i18n2,
      _this$i18n3;
    var dataToUse = this.data;
    var generatorData = isObject(dataToUse) ? dataToUse : {};
    var schemaToUse = (_this$schema = this.schema) !== null && _this$schema !== void 0 ? _this$schema : core.Generate.jsonSchema(generatorData);
    var uischemaToUse = (_this$uischema = this.uischema) !== null && _this$uischema !== void 0 ? _this$uischema : core.Generate.uiSchema(schemaToUse, undefined, undefined, schemaToUse);
    var initCore = function initCore() {
      var initialCore = {
        data: dataToUse,
        schema: schemaToUse,
        uischema: uischemaToUse
      };
      var core$1 = _this.middleware(initialCore, core.Actions.init(dataToUse, schemaToUse, uischemaToUse, {
        validationMode: _this.validationMode,
        ajv: _this.ajv,
        additionalErrors: _this.additionalErrors
      }), core.coreReducer);
      return core$1;
    };
    return {
      schemaToUse: schemaToUse,
      dataToUse: dataToUse,
      uischemaToUse: uischemaToUse,
      jsonforms: {
        core: initCore(),
        config: core.configReducer(undefined, core.Actions.setConfig(this.config)),
        i18n: core.i18nReducer(this.i18n, core.Actions.updateI18n((_this$i18n = this.i18n) === null || _this$i18n === void 0 ? void 0 : _this$i18n.locale, (_this$i18n2 = this.i18n) === null || _this$i18n2 === void 0 ? void 0 : _this$i18n2.translate, (_this$i18n3 = this.i18n) === null || _this$i18n3 === void 0 ? void 0 : _this$i18n3.translateError)),
        renderers: this.renderers,
        cells: this.cells,
        uischemas: this.uischemas,
        readonly: this.readonly
      }
    };
  },
  computed: {
    coreDataToUpdate: function coreDataToUpdate() {
      return [this.dataToUse, this.schemaToUse, this.uischemaToUse, this.validationMode, this.ajv, this.additionalErrors];
    },
    eventToEmit: function eventToEmit() {
      return {
        data: this.jsonforms.core.data,
        errors: this.jsonforms.core.errors
      };
    }
  },
  watch: {
    schema: function schema(newSchema) {
      var generatorData = isObject(this.data) ? this.data : {};
      this.schemaToUse = newSchema !== null && newSchema !== void 0 ? newSchema : core.Generate.jsonSchema(generatorData);
      if (!this.uischema) {
        this.uischemaToUse = core.Generate.uiSchema(this.schemaToUse, undefined, undefined, this.schemaToUse);
      }
    },
    uischema: function uischema(newUischema) {
      this.uischemaToUse = newUischema !== null && newUischema !== void 0 ? newUischema : core.Generate.uiSchema(this.schemaToUse, undefined, undefined, this.schemaToUse);
    },
    data: function data(newData) {
      this.dataToUse = newData;
    },
    renderers: function renderers(newRenderers) {
      this.jsonforms.renderers = newRenderers;
    },
    cells: function cells(newCells) {
      this.jsonforms.cells = newCells;
    },
    uischemas: function uischemas(newUischemas) {
      this.jsonforms.uischemas = newUischemas;
    },
    config: {
      handler: function handler(newConfig) {
        this.jsonforms.config = core.configReducer(undefined, core.Actions.setConfig(newConfig));
      },
      deep: true
    },
    readonly: function readonly(newReadonly) {
      this.jsonforms.readonly = newReadonly;
    },
    coreDataToUpdate: function coreDataToUpdate() {
      this.jsonforms.core = this.middleware(this.jsonforms.core, core.Actions.updateCore(this.dataToUse, this.schemaToUse, this.uischemaToUse, {
        validationMode: this.validationMode,
        ajv: this.ajv,
        additionalErrors: this.additionalErrors
      }), core.coreReducer);
    },
    eventToEmit: function eventToEmit(newEvent) {
      this.$emit('change', newEvent);
    },
    i18n: {
      handler: function handler(newI18n) {
        this.jsonforms.i18n = core.i18nReducer(this.jsonforms.i18n, core.Actions.updateI18n(newI18n === null || newI18n === void 0 ? void 0 : newI18n.locale, newI18n === null || newI18n === void 0 ? void 0 : newI18n.translate, newI18n === null || newI18n === void 0 ? void 0 : newI18n.translateError));
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.$emit('change', {
      data: this.jsonforms.core.data,
      errors: this.jsonforms.core.errors
    });
  },
  methods: {
    dispatch: function dispatch(action) {
      this.jsonforms.core = this.middleware(this.jsonforms.core, action, core.coreReducer);
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dispatch_renderer = vue.resolveComponent("dispatch-renderer");
  return vue.openBlock(), vue.createBlock(_component_dispatch_renderer, {
    schema: _ctx.jsonforms.core.schema,
    uischema: _ctx.jsonforms.core.uischema,
    path: ''
  }, null, 8, ["schema", "uischema"]);
}

script.render = render;

exports.DispatchCell = script$1;
exports.DispatchRenderer = script$2;
exports.JsonForms = script;
exports.UnknownRenderer = script$3;
exports.masterListItemProps = masterListItemProps;
exports.rendererProps = rendererProps;
exports.useControl = useControl;
exports.useJsonFormsAllOfControl = useJsonFormsAllOfControl;
exports.useJsonFormsAnyOfControl = useJsonFormsAnyOfControl;
exports.useJsonFormsArrayControl = useJsonFormsArrayControl;
exports.useJsonFormsArrayLayout = useJsonFormsArrayLayout;
exports.useJsonFormsCell = useJsonFormsCell;
exports.useJsonFormsControl = useJsonFormsControl;
exports.useJsonFormsControlWithDetail = useJsonFormsControlWithDetail;
exports.useJsonFormsDispatchCell = useJsonFormsDispatchCell;
exports.useJsonFormsEnumCell = useJsonFormsEnumCell;
exports.useJsonFormsEnumControl = useJsonFormsEnumControl;
exports.useJsonFormsLabel = useJsonFormsLabel;
exports.useJsonFormsLayout = useJsonFormsLayout;
exports.useJsonFormsMasterListItem = useJsonFormsMasterListItem;
exports.useJsonFormsMultiEnumControl = useJsonFormsMultiEnumControl;
exports.useJsonFormsOneOfControl = useJsonFormsOneOfControl;
exports.useJsonFormsOneOfEnumCell = useJsonFormsOneOfEnumCell;
exports.useJsonFormsOneOfEnumControl = useJsonFormsOneOfEnumControl;
exports.useJsonFormsRenderer = useJsonFormsRenderer;
//# sourceMappingURL=jsonforms-vue.cjs.js.map
