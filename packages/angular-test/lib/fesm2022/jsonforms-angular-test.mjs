import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Actions } from '@jsonforms/core';
import { JsonFormsAngularService, UnknownRenderer, JsonFormsOutlet } from '@jsonforms/angular';

const baseSetup = (testConfig) => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [testConfig.componentUT],
            imports: testConfig.imports,
            providers: [JsonFormsAngularService].concat(testConfig.providers),
        }).compileComponents();
    });
};
const getJsonFormsService = (component) => {
    return component.jsonFormsService;
};
const setupMockStore = (fixture, testData) => {
    const component = fixture.componentInstance;
    component.uischema = testData.uischema;
    component.schema = testData.schema;
    getJsonFormsService(component).init({
        core: {
            data: testData.data,
            schema: testData.schema,
            errors: testData.errors,
            uischema: testData.uischema,
        },
    });
    getJsonFormsService(component).registerRenderers(testData.renderers);
};

const prepareComponent$3 = (testConfig, instance) => {
    const fixture = TestBed.createComponent(testConfig.componentUT);
    const component = fixture.componentInstance;
    const checkboxDebugElement = fixture.debugElement.query(By.directive(instance));
    const checkboxInstance = checkboxDebugElement.componentInstance;
    const checkboxNativeElement = checkboxDebugElement.nativeElement;
    return { fixture, component, checkboxInstance, checkboxNativeElement };
};
const data = { foo: true };
const defaultBooleanTestSchema = {
    type: 'object',
    properties: {
        foo: {
            type: 'boolean',
        },
    },
};
const uischema = {
    type: 'Control',
    scope: '#/properties/foo',
};
const defaultBooleanTestData = {
    data,
    schema: defaultBooleanTestSchema,
    uischema,
};
const booleanBaseTest = (testConfig, instance) => () => {
    let fixture;
    let checkboxNativeElement;
    let checkboxInstance;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$3(testConfig, instance);
        fixture = preparedComponents.fixture;
        checkboxNativeElement = preparedComponents.checkboxNativeElement;
        checkboxInstance = preparedComponents.checkboxInstance;
        component = preparedComponents.component;
    });
    it('should render', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe(true);
        expect(checkboxInstance.checked).toBe(true);
        expect(checkboxInstance.disabled).toBe(false);
        // the component is wrapped in a div
        const hasDisplayNone = 'none' === fixture.nativeElement.children[0].style.display;
        const hasHidden = fixture.nativeElement.children[0].hidden;
        expect(hasDisplayNone || hasHidden).toBeFalsy();
    });
    it('should support updating the state', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => false));
        fixture.detectChanges();
        expect(component.data).toBe(false);
        expect(checkboxInstance.checked).toBe(false);
    });
    it('should update with undefined value', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => undefined));
        fixture.detectChanges();
        expect(component.data).toBe(undefined);
        expect(checkboxInstance.checked).toBe(false);
    });
    it('should update with null value', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => null));
        fixture.detectChanges();
        expect(component.data).toBe(null);
        expect(checkboxInstance.checked).toBe(false);
    });
    it('should not update with wrong ref', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => true));
        getJsonFormsService(component).updateCore(Actions.update('bar', () => false));
        fixture.detectChanges();
        expect(component.data).toBe(true);
        expect(checkboxInstance.checked).toBe(true);
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be disabled', () => {
        component.uischema = uischema;
        component.disabled = true;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(checkboxInstance.disabled).toBe(true);
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be hidden', () => {
        component.uischema = uischema;
        component.visible = false;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        // the component is wrapped in a div
        const hasDisplayNone = 'none' === fixture.nativeElement.children[0].style.display;
        const hasHidden = fixture.nativeElement.children[0].hidden;
        expect(hasDisplayNone || hasHidden).toBeTruthy();
    });
    it('id should be present in output', () => {
        component.uischema = uischema;
        component.id = 'myId';
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(checkboxNativeElement.id).toBe('myId');
    });
};
const booleanInputEventTest = (testConfig, instance, selectorForClick) => () => {
    let fixture;
    let checkboxNativeElement;
    let checkboxInstance;
    let component;
    let elementToClick;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$3(testConfig, instance);
        fixture = preparedComponents.fixture;
        checkboxNativeElement = preparedComponents.checkboxNativeElement;
        checkboxInstance = preparedComponents.checkboxInstance;
        component = preparedComponents.component;
        elementToClick = checkboxNativeElement.querySelector(selectorForClick);
    });
    it('should update via input event', () => {
        component.uischema = uischema;
        getJsonFormsService(component).init({
            core: {
                data: data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        fixture.detectChanges();
        component.ngOnInit();
        const spy = spyOn(component, 'onChange');
        elementToClick.click();
        // trigger change detection
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
        expect(checkboxInstance.checked).toBe(false);
    });
};
const booleanErrorTest = (testConfig, instance, errorTestInformation) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$3(testConfig, instance);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
    });
    it('should display errors', () => {
        component.uischema = uischema;
        const formsService = getJsonFormsService(component);
        formsService.init({
            core: {
                data,
                schema: defaultBooleanTestSchema,
                uischema: uischema,
            },
        });
        formsService.updateCore(Actions.updateErrors([
            {
                instancePath: '/foo',
                message: 'Hi, this is me, test error!',
                keyword: '',
                schemaPath: '',
                params: {},
            },
        ]));
        formsService.refresh();
        component.ngOnInit();
        fixture.detectChanges();
        const debugErrors = fixture.debugElement.queryAll(By.directive(errorTestInformation.errorInstance));
        expect(debugErrors.length).toBe(errorTestInformation.numberOfElements);
        expect(debugErrors[errorTestInformation.indexOfElement].nativeElement
            .textContent).toBe('Hi, this is me, test error!');
    });
};

const prepareComponent$2 = (testConfig, instance, elementToUse) => {
    const fixture = TestBed.createComponent(testConfig.componentUT);
    const component = fixture.componentInstance;
    const result = { fixture, component };
    if (instance && elementToUse) {
        const textElement = fixture.debugElement.query(By.css(instance));
        const textNativeElement = elementToUse(textElement);
        result.textElement = textElement;
        result.textNativeElement = textNativeElement;
    }
    return result;
};
const defaultData$1 = { foo: 'foo' };
const defaultSchema$1 = {
    type: 'object',
    properties: {
        foo: {
            type: 'string',
        },
    },
};
const defaultUischema$1 = {
    type: 'Control',
    scope: '#/properties/foo',
};
const defaultTextTestData = {
    data: defaultData$1,
    schema: defaultSchema$1,
    uischema: defaultUischema$1,
};
const textBaseTest = (testConfig, instance, elementToUse, testData = defaultTextTestData) => () => {
    let fixture;
    let textElement;
    let textNativeElement;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$2(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        textNativeElement = preparedComponents.textNativeElement;
        textElement = preparedComponents.textElement;
        component = preparedComponents.component;
    });
    it('should render', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe('foo');
        expect(textNativeElement.value).toBe('foo');
        expect(textNativeElement.disabled).toBe(false);
        // the component is wrapped in a div
        const hasDisplayNone = 'none' === fixture.nativeElement.children[0].style.display;
        const hasHidden = fixture.nativeElement.children[0].hidden;
        expect(!hasDisplayNone && !hasHidden).toBeTruthy();
    });
    it('should support updating the state', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => 'bar'));
        fixture.detectChanges();
        expect(component.data).toBe('bar');
        expect(textNativeElement.value).toBe('bar');
    });
    it('should update with undefined value', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => undefined));
        fixture.detectChanges();
        expect(component.data).toBe(undefined);
        expect(textNativeElement.value).toBe('');
    });
    it('should update with null value', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => null));
        fixture.detectChanges();
        expect(component.data).toBe(null);
        expect(textNativeElement.value).toBe('');
    });
    it('should not update with wrong ref', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => 'foo'));
        getJsonFormsService(component).updateCore(Actions.update('bar', () => 'bar'));
        fixture.detectChanges();
        expect(component.data).toBe('foo');
        expect(textNativeElement.value).toBe('foo');
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be disabled', () => {
        component.uischema = testData.uischema;
        component.disabled = true;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textNativeElement.disabled).toBe(true);
    });
    it('can be hidden', () => {
        component.uischema = testData.uischema;
        component.visible = false;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        const hasDisplayNone = 'none' === fixture.nativeElement.children[0].style.display;
        const hasHidden = fixture.nativeElement.children[0].hidden;
        expect(hasDisplayNone || hasHidden).toBeTruthy();
    });
    it('id should be present in output', () => {
        component.uischema = testData.uischema;
        component.id = 'myId';
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textElement.nativeElement.id).toBe('myId');
    });
};
const textInputEventTest = (testConfig, instance, elementToUse, testData = defaultTextTestData) => () => {
    let fixture;
    let textNativeElement;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$2(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        textNativeElement = preparedComponents.textNativeElement;
        component = preparedComponents.component;
    });
    it('should update via input event', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        const spy = spyOn(component, 'onChange');
        textNativeElement.value = 'bar';
        if (textNativeElement.dispatchEvent) {
            textNativeElement.dispatchEvent(new Event('input'));
        }
        // trigger change detection
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
        expect(textNativeElement.value).toBe('bar');
    });
};
const textErrorTest = (testConfig, errorTestInformation, testData = defaultTextTestData) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$2(testConfig);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
    });
    it('should display errors', () => {
        component.uischema = testData.uischema;
        const formsService = getJsonFormsService(component);
        formsService.init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: undefined,
            },
        });
        formsService.updateCore(Actions.updateErrors([
            {
                instancePath: '/foo',
                message: 'Hi, this is me, test error!',
                keyword: '',
                schemaPath: '',
                params: {},
            },
        ]));
        formsService.refresh();
        component.ngOnInit();
        fixture.detectChanges();
        const debugErrors = fixture.debugElement.queryAll(By.directive(errorTestInformation.errorInstance));
        expect(debugErrors.length).toBe(errorTestInformation.numberOfElements);
        expect(debugErrors[errorTestInformation.indexOfElement].nativeElement
            .textContent).toBe('Hi, this is me, test error!');
    });
};
const textTypeTest = (testConfig, instance, elementToUse, testData = defaultTextTestData) => () => {
    let fixture;
    let component;
    let textNativeElement;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$2(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
        textNativeElement = preparedComponents.textNativeElement;
    });
    it('should show password independent of schema', () => {
        const uischema = JSON.parse(JSON.stringify(testData.uischema));
        uischema.options = { format: 'password' };
        const schema = JSON.parse(JSON.stringify(testData.schema));
        schema.properties.foo.format = 'email';
        component.uischema = uischema;
        component.schema = schema;
        getJsonFormsService(component).init({
            core: { data: testData.data, schema: schema, uischema: uischema },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textNativeElement.type).toBe('password');
    });
    it('should show email', () => {
        const schema = JSON.parse(JSON.stringify(testData.schema));
        schema.properties.foo.format = 'email';
        component.uischema = testData.uischema;
        component.schema = schema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textNativeElement.type).toBe('email');
    });
    xit('should show tel', () => {
        const schema = JSON.parse(JSON.stringify(testData.schema));
        schema.properties.foo.format = 'tel';
        component.uischema = testData.uischema;
        component.schema = schema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textNativeElement.type).toBe('tel');
    });
    xit('should fallback to text', () => {
        const schema = JSON.parse(JSON.stringify(testData.schema));
        schema.properties.foo.format = 'foo';
        component.uischema = testData.uischema;
        component.schema = schema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(textNativeElement.type).toBe('text');
    });
};

const prepareComponent$1 = (testConfig, instance, elementToUse) => {
    const fixture = TestBed.createComponent(testConfig.componentUT);
    const component = fixture.componentInstance;
    const result = { fixture, component };
    if (instance && elementToUse) {
        const numberElement = fixture.debugElement.query(By.css(instance));
        const numberNativeElement = elementToUse(numberElement);
        result.numberElement = numberElement;
        result.numberNativeElement = numberNativeElement;
    }
    return result;
};
const defaultData = { foo: 123.123 };
const defaultSchema = {
    type: 'object',
    properties: {
        foo: {
            type: 'number',
        },
    },
};
const defaultUischema = {
    type: 'Control',
    scope: '#/properties/foo',
};
const defaultNumberTestData = {
    data: defaultData,
    schema: defaultSchema,
    uischema: defaultUischema,
};
const updateWithSiblingNumberValue = (fixture, testData, expectations) => {
    setupMockStore(fixture, testData);
    getJsonFormsService(fixture.componentInstance).init({
        core: {
            data: { foo: 123.123, bar: 456.456 },
            schema: testData.schema,
            uischema: undefined,
        },
    });
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    expectations();
};
const numberBaseTest = (testConfig, instance, elementToUse, testData = defaultNumberTestData) => () => {
    let fixture;
    let numberElement;
    let numberNativeElement;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$1(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        numberNativeElement = preparedComponents.numberNativeElement;
        numberElement = preparedComponents.numberElement;
        component = preparedComponents.component;
    });
    it('should render floats', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: testData });
        getJsonFormsService(component).updateCore(Actions.init(testData.data, testData.schema));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe(123.123);
        expect(numberNativeElement.value).toBe('123.123');
        // step is of type string
        expect(numberNativeElement.step).toBe('0.1');
        expect(numberNativeElement.disabled).toBe(false);
        // the component is wrapped in a div
        expect(fixture.nativeElement.children[0].style.display).not.toBe('none');
    });
    it('should render integers', () => {
        const state = {
            data: { foo: 123 },
            schema: {
                type: 'object',
                properties: {
                    foo: { type: 'integer' },
                },
            },
            uischema: testData.uischema,
        };
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: state });
        getJsonFormsService(component).updateCore(Actions.init(state.data, state.schema));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe(123);
        expect(numberNativeElement.value).toBe('123');
        // step is of type string
        expect(numberNativeElement.step).toBe('1');
        expect(numberNativeElement.disabled).toBe(false);
        // the component is wrapped in a div
        expect(fixture.nativeElement.children[0].style.display).not.toBe('none');
    });
    it('should support updating the state', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: testData });
        getJsonFormsService(component).updateCore(Actions.init(testData.data, testData.schema));
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(fixture.componentInstance).updateCore(Actions.update('foo', () => 456.456));
        fixture.detectChanges();
        expect(component.data).toBe(456.456);
        expect(Number(numberNativeElement.value)).toBe(456.456);
    });
    it('should update with undefined value', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: testData });
        getJsonFormsService(component).updateCore(Actions.init(testData.data, testData.schema));
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(fixture.componentInstance).updateCore(Actions.update('foo', () => undefined));
        fixture.detectChanges();
        expect(component.data).toBe(undefined);
        expect(numberNativeElement.value).toBe('');
    });
    it('should update with null value', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: testData });
        getJsonFormsService(component).updateCore(Actions.init(testData.data, testData.schema));
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(fixture.componentInstance).updateCore(Actions.update('foo', () => null));
        fixture.detectChanges();
        expect(component.data).toBe(null);
        expect(numberNativeElement.value).toBe('');
    });
    it('should not update with wrong ref', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({ core: testData });
        getJsonFormsService(component).updateCore(Actions.init(testData.data, testData.schema));
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(fixture.componentInstance).updateCore(Actions.update('bar', () => 456.456));
        fixture.detectChanges();
        expect(component.data).toBe(123.123);
        expect(Number(numberNativeElement.value)).toBe(123.123);
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be disabled', () => {
        component.uischema = testData.uischema;
        component.disabled = true;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(numberNativeElement.disabled).toBe(true);
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be hidden', () => {
        component.uischema = testData.uischema;
        component.visible = false;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        const hasDisplayNone = 'none' === fixture.nativeElement.children[0].style.display;
        const hasHidden = fixture.nativeElement.children[0].hidden;
        expect(hasDisplayNone || hasHidden).toBeTruthy();
    });
    it('id should be present in output', () => {
        component.uischema = testData.uischema;
        component.id = 'myId';
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: testData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(numberElement.nativeElement.id).toBe('myId');
    });
};
const numberInputEventTest = (testConfig, instance, elementToUse, testData = defaultNumberTestData) => () => {
    let fixture;
    let numberNativeElement;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$1(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        numberNativeElement = preparedComponents.numberNativeElement;
        component = preparedComponents.component;
    });
    it('should update via input event', () => {
        component.uischema = testData.uischema;
        getJsonFormsService(component).init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: undefined,
            },
        });
        fixture.detectChanges();
        component.ngOnInit();
        const spy = spyOn(component, 'onChange');
        numberNativeElement.value = 456.456;
        if (numberNativeElement.dispatchEvent) {
            numberNativeElement.dispatchEvent(new Event('input'));
        }
        // trigger change detection
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
        expect(Number(numberNativeElement.value)).toBe(456.456);
    });
};
const numberErrorTest = (testConfig, errorTestInformation, testData = defaultNumberTestData) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$1(testConfig);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
    });
    it('should display errors', () => {
        component.uischema = testData.uischema;
        const formsService = getJsonFormsService(component);
        formsService.init({
            core: {
                data: testData.data,
                schema: testData.schema,
                uischema: undefined,
            },
        });
        formsService.updateCore(Actions.updateErrors([
            {
                instancePath: '/foo',
                message: 'Hi, this is me, test error!',
                keyword: '',
                schemaPath: '',
                params: {},
            },
        ]));
        formsService.refresh();
        component.ngOnInit();
        fixture.detectChanges();
        const debugErrors = fixture.debugElement.queryAll(By.directive(errorTestInformation.errorInstance));
        expect(debugErrors.length).toBe(errorTestInformation.numberOfElements);
        expect(debugErrors[errorTestInformation.indexOfElement].nativeElement
            .textContent).toBe('Hi, this is me, test error!');
    });
};
const additionalSchema = {
    type: 'object',
    properties: {
        foo: {
            type: 'number',
            minimum: -42.42,
            maximum: 42,
            multipleOf: 3,
        },
    },
};
const additionalTestData = {
    data: defaultData,
    schema: additionalSchema,
    uischema: defaultUischema,
};
const numberAdditionalPropsTest = (testConfig, instance, elementToUse, testData = additionalTestData) => () => {
    let fixture;
    let numberNativeElement;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent$1(testConfig, instance, elementToUse);
        fixture = preparedComponents.fixture;
        numberNativeElement = preparedComponents.numberNativeElement;
    });
    it('should respect min,max,multipleOf', () => {
        setupMockStore(fixture, testData);
        getJsonFormsService(fixture.componentInstance).updateCore(Actions.init(testData.data, testData.schema));
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();
        // step, min and max are of type string on an input control
        expect(numberNativeElement.step).toBe('3');
        expect(numberNativeElement.min).toBe('-42.42');
        expect(numberNativeElement.max).toBe('42');
    });
};

const prepareComponent = (testConfig, instance) => {
    const fixture = TestBed.createComponent(testConfig.componentUT);
    const component = fixture.componentInstance;
    const rangeElement = fixture.debugElement.query(By.directive(instance));
    const thumbElement = fixture.debugElement.query(By.css('[matsliderthumb]')); //rangeElement.nativeElement.children[0]; // todo: find a safer way to get the 'matSliderThumb'
    const result = {
        fixture,
        component,
        rangeElement,
        thumbElement,
    };
    return result;
};
const rangeDefaultData = { foo: 1.234 };
const rangeDefaultSchema = {
    type: 'object',
    properties: {
        foo: {
            type: 'number',
            minimum: -42.42,
            maximum: 42.42,
            default: 0.42,
        },
    },
};
const rangeDefaultUischema = {
    type: 'Control',
    scope: '#/properties/foo',
    options: { slider: true },
};
const rangeDefaultTestData = {
    data: rangeDefaultData,
    schema: rangeDefaultSchema,
    uischema: rangeDefaultUischema,
};
const rangeBaseTest = (testConfig, instance) => () => {
    let fixture;
    let rangeElement;
    let thumbElement;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
        fixture = preparedComponents.fixture;
        rangeElement = preparedComponents.rangeElement;
        thumbElement = preparedComponents.thumbElement;
        component = preparedComponents.component;
    });
    it('should render floats', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe(1.234);
        expect(thumbElement.componentInstance.data).toBe(1.234);
        // step is of type string
        expect(rangeElement.componentInstance.step).toBe(1);
        expect(rangeElement.componentInstance.min).toBe(-42.42);
        expect(rangeElement.componentInstance.max).toBe(42.42);
        expect(rangeElement.componentInstance.disabled).toBe(false);
        expect(fixture.nativeElement.children[0].style.display).not.toBe('none');
    });
    it('should render integer', () => {
        component.uischema = rangeDefaultTestData.uischema;
        const schema = JSON.parse(JSON.stringify(rangeDefaultTestData.schema));
        schema.properties.foo.type = 'integer';
        schema.properties.foo.minimum = -42;
        schema.properties.foo.maximum = 42;
        schema.properties.foo.default = 1;
        setupMockStore(fixture, {
            uischema: rangeDefaultTestData.uischema,
            schema,
            data: { foo: 12 },
        });
        getJsonFormsService(component).updateCore(Actions.init({ foo: 12 }, schema, rangeDefaultTestData.uischema));
        fixture.componentInstance.ngOnInit();
        fixture.detectChanges();
        expect(component.data).toBe(12);
        expect(thumbElement.componentInstance.data).toBe(12);
        // step is of type string
        expect(rangeElement.componentInstance.step).toBe(1);
        expect(rangeElement.componentInstance.min).toBe(-42);
        expect(rangeElement.componentInstance.max).toBe(42);
        expect(rangeElement.componentInstance.disabled).toBe(false);
        // the component is wrapped in a div
        expect(fixture.nativeElement.children[0].style.display).not.toBe('none');
    });
    it('should support updating the state', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => 4.56));
        fixture.detectChanges();
        expect(component.data).toBe(4.56);
        expect(thumbElement.componentInstance.data).toBe(4.56);
    });
    it('should update with undefined value', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => undefined));
        fixture.detectChanges();
        expect(component.data).toBe(undefined);
        expect(thumbElement.componentInstance.data).toBe(undefined);
    });
    it('should update with null value', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => null));
        fixture.detectChanges();
        expect(component.data).toBe(null);
        expect(thumbElement.componentInstance.data).toBe(null);
    });
    it('should not update with wrong ref', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        getJsonFormsService(component).updateCore(Actions.update('foo', () => 1.234));
        getJsonFormsService(component).updateCore(Actions.update('bar', () => 456.456));
        fixture.detectChanges();
        expect(component.data).toBe(1.234);
        expect(thumbElement.componentInstance.data).toBe(1.234);
    });
    // store needed as we evaluate the calculated enabled value to disable/enable the control
    it('can be disabled', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        component.disabled = true;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(rangeElement.componentInstance.disabled).toBe(true);
    });
    it('can be hidden', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        component.visible = false;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        fixture.detectChanges();
        component.ngOnInit();
        expect(fixture.nativeElement.children[0].style.display).toBe('none');
    });
    it('id should be present in output', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        component.id = 'myId';
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        expect(rangeElement.nativeElement.id).toBe('myId');
    });
};
const rangeInputEventTest = (testConfig, instance) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
    });
    xit('should update via input event', async () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        getJsonFormsService(component).init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: rangeDefaultTestData.uischema,
            },
        });
        component.ngOnInit();
        fixture.detectChanges();
        const spy = spyOn(component, 'onChange');
        const sliderElement = fixture.debugElement.query(By.css('.mat-slider')).nativeElement;
        const trackElement = fixture.debugElement.query(By.css('.mat-slider-wrapper')).nativeElement;
        const dimensions = trackElement.getBoundingClientRect();
        const x = dimensions.left + dimensions.width * 0.2;
        const y = dimensions.top + dimensions.height * 0.2;
        dispatchEvent(sliderElement, createMouseEvent('mousedown', x, y, 0));
        // trigger change detection
        fixture.detectChanges();
        await fixture.whenStable();
        expect(spy).toHaveBeenCalled();
    });
};
const rangeErrorTest = (testConfig, instance, errorTestInformation) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
        fixture = preparedComponents.fixture;
        component = preparedComponents.component;
    });
    it('should display errors', () => {
        component.uischema = rangeDefaultTestData.uischema;
        component.schema = rangeDefaultTestData.schema;
        const formsService = getJsonFormsService(component);
        formsService.init({
            core: {
                data: rangeDefaultTestData.data,
                schema: rangeDefaultTestData.schema,
                uischema: undefined,
            },
        });
        formsService.updateCore(Actions.updateErrors([
            {
                instancePath: '/foo',
                message: 'Hi, this is me, test error!',
                keyword: '',
                schemaPath: '',
                params: {},
            },
        ]));
        formsService.refresh();
        component.ngOnInit();
        fixture.detectChanges();
        const debugErrors = fixture.debugElement.queryAll(By.directive(errorTestInformation.errorInstance));
        expect(debugErrors.length).toBe(errorTestInformation.numberOfElements);
        expect(debugErrors[errorTestInformation.indexOfElement].nativeElement
            .textContent).toBe('Hi, this is me, test error!');
    });
};
/** Creates a browser MouseEvent with the specified options. */
const createMouseEvent = (type, x = 0, y = 0, button = 0) => {
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, true /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, button /* button */, null /* relatedTarget */);
    // `initMouseEvent` doesn't allow us to pass the `buttons` and
    // defaults it to 0 which looks like a fake event.
    Object.defineProperty(event, 'buttons', { get: () => 1 });
    return event;
};
/** Utility to dispatch any event on a Node. */
const dispatchEvent = (node, event) => {
    node.dispatchEvent(event);
    return event;
};

/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
const beforeEachLayoutTest = (Renderer, { declarations = [], imports = [], providers = [] } = {}) => {
    TestBed.configureTestingModule({
        declarations: [Renderer, UnknownRenderer, JsonFormsOutlet, ...declarations],
        imports,
        providers: [JsonFormsAngularService, ...providers],
    }).compileComponents();
    return TestBed.createComponent(Renderer);
};

/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

/**
 * Generated bundle index. Do not edit.
 */

export { additionalTestData, baseSetup, beforeEachLayoutTest, booleanBaseTest, booleanErrorTest, booleanInputEventTest, defaultBooleanTestData, defaultBooleanTestSchema, defaultNumberTestData, defaultTextTestData, getJsonFormsService, numberAdditionalPropsTest, numberBaseTest, numberErrorTest, numberInputEventTest, prepareComponent$1 as prepareComponent, rangeBaseTest, rangeDefaultData, rangeDefaultSchema, rangeDefaultTestData, rangeDefaultUischema, rangeErrorTest, rangeInputEventTest, setupMockStore, textBaseTest, textErrorTest, textInputEventTest, textTypeTest, updateWithSiblingNumberValue };
//# sourceMappingURL=jsonforms-angular-test.mjs.map
