import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Actions } from '@jsonforms/core';
import { baseSetup, getJsonFormsService, } from './util';
const prepareComponent = (testConfig, instance) => {
    const fixture = TestBed.createComponent(testConfig.componentUT);
    const component = fixture.componentInstance;
    const checkboxDebugElement = fixture.debugElement.query(By.directive(instance));
    const checkboxInstance = checkboxDebugElement.componentInstance;
    const checkboxNativeElement = checkboxDebugElement.nativeElement;
    return { fixture, component, checkboxInstance, checkboxNativeElement };
};
const data = { foo: true };
export const defaultBooleanTestSchema = {
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
export const defaultBooleanTestData = {
    data,
    schema: defaultBooleanTestSchema,
    uischema,
};
export const booleanBaseTest = (testConfig, instance) => () => {
    let fixture;
    let checkboxNativeElement;
    let checkboxInstance;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
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
export const booleanInputEventTest = (testConfig, instance, selectorForClick) => () => {
    let fixture;
    let checkboxNativeElement;
    let checkboxInstance;
    let component;
    let elementToClick;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
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
export const booleanErrorTest = (testConfig, instance, errorTestInformation) => () => {
    let fixture;
    let component;
    baseSetup(testConfig);
    beforeEach(() => {
        const preparedComponents = prepareComponent(testConfig, instance);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWJyYXJ5L2Jvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBLE9BQU8sRUFBb0IsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9DLE9BQU8sRUFBOEIsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUNMLFNBQVMsRUFHVCxtQkFBbUIsR0FDcEIsTUFBTSxRQUFRLENBQUM7QUFFaEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUN2QixVQUF5QixFQUN6QixRQUFpQixFQUNqQixFQUFFO0lBQ0YsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEUsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQzVDLE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQ3JELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQ3ZCLENBQUM7SUFDRixNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hFLE1BQU0scUJBQXFCLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDO0lBRWpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLENBQUM7QUFDekUsQ0FBQyxDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQWU7SUFDbEQsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNG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Q0FBQztRQUN4QixNQUFNLFdBQVcsR0FBbUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQy9ELEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQ2pELENBQUM7UUFDRixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FDSixXQUFXLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYTthQUMzRCxXQUFXLENBQ2YsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuICBcbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG4gIFxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICBcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIFxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQgdHlwZSB7IERlYnVnRWxlbWVudCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBCeSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHR5cGUgeyBKc29uRm9ybXNDb250cm9sIH0gZnJvbSAnQGpzb25mb3Jtcy9hbmd1bGFyJztcbmltcG9ydCB7IENvbnRyb2xFbGVtZW50LCBKc29uU2NoZW1hLCBBY3Rpb25zIH0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCB7XG4gIGJhc2VTZXR1cCxcbiAgRXJyb3JUZXN0RXhwZWN0YXRpb24sXG4gIFRlc3RDb25maWcsXG4gIGdldEpzb25Gb3Jtc1NlcnZpY2UsXG59IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IHByZXBhcmVDb21wb25lbnQgPSA8QyBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wsIEk+KFxuICB0ZXN0Q29uZmlnOiBUZXN0Q29uZmlnPEM+LFxuICBpbnN0YW5jZTogVHlwZTxJPlxuKSA9PiB7XG4gIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudCh0ZXN0Q29uZmlnLmNvbXBvbmVudFVUKTtcbiAgY29uc3QgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgY29uc3QgY2hlY2tib3hEZWJ1Z0VsZW1lbnQgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5xdWVyeShcbiAgICBCeS5kaXJlY3RpdmUoaW5zdGFuY2UpXG4gICk7XG4gIGNvbnN0IGNoZWNrYm94SW5zdGFuY2UgPSBjaGVja2JveERlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcbiAgY29uc3QgY2hlY2tib3hOYXRpdmVFbGVtZW50ID0gY2hlY2tib3hEZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICByZXR1cm4geyBmaXh0dXJlLCBjb21wb25lbnQsIGNoZWNrYm94SW5zdGFuY2UsIGNoZWNrYm94TmF0aXZlRWxlbWVudCB9O1xufTtcblxuY29uc3QgZGF0YSA9IHsgZm9vOiB0cnVlIH07XG5leHBvcnQgY29uc3QgZGVmYXVsdEJvb2xlYW5UZXN0U2NoZW1hOiBKc29uU2NoZW1hID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIGZvbzoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIH0sXG4gIH0sXG59O1xuY29uc3QgdWlzY2hlbWE6IENvbnRyb2xFbGVtZW50ID0ge1xuICB0eXBlOiAnQ29udHJvbCcsXG4gIHNjb3BlOiAnIy9wcm9wZXJ0aWVzL2ZvbycsXG59O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRCb29sZWFuVGVzdERhdGEgPSB7XG4gIGRhdGEsXG4gIHNjaGVtYTogZGVmYXVsdEJvb2xlYW5UZXN0U2NoZW1hLFxuICB1aXNjaGVtYSxcbn07XG5cbmV4cG9ydCBjb25zdCBib29sZWFuQmFzZVRlc3QgPVxuICA8QyBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wsIEk+KFxuICAgIHRlc3RDb25maWc6IFRlc3RDb25maWc8Qz4sXG4gICAgaW5zdGFuY2U6IFR5cGU8ST5cbiAgKSA9PlxuICAoKSA9PiB7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PjtcbiAgICBsZXQgY2hlY2tib3hOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBsZXQgY2hlY2tib3hJbnN0YW5jZTogYW55O1xuICAgIGxldCBjb21wb25lbnQ6IEM7XG5cbiAgICBiYXNlU2V0dXAodGVzdENvbmZpZyk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IHByZXBhcmVkQ29tcG9uZW50cyA9IHByZXBhcmVDb21wb25lbnQodGVzdENvbmZpZywgaW5zdGFuY2UpO1xuICAgICAgZml4dHVyZSA9IHByZXBhcmVkQ29tcG9uZW50cy5maXh0dXJlO1xuICAgICAgY2hlY2tib3hOYXRpdmVFbGVtZW50ID0gcHJlcGFyZWRDb21wb25lbnRzLmNoZWNrYm94TmF0aXZlRWxlbWVudDtcbiAgICAgIGNoZWNrYm94SW5zdGFuY2UgPSBwcmVwYXJlZENvbXBvbmVudHMuY2hlY2tib3hJbnN0YW5jZTtcbiAgICAgIGNvbXBvbmVudCA9IHByZXBhcmVkQ29tcG9uZW50cy5jb21wb25lbnQ7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJlbmRlcicsICgpID0+IHtcbiAgICAgIGNvbXBvbmVudC51aXNjaGVtYSA9IHVpc2NoZW1hO1xuXG4gICAgICBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCkuaW5pdCh7XG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHNjaGVtYTogZGVmYXVsdEJvb2xlYW5UZXN0U2NoZW1hLFxuICAgICAgICAgIHVpc2NoZW1hOiB1aXNjaGVtYSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgY29tcG9uZW50Lm5nT25Jbml0KCk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGV4cGVjdChjb21wb25lbnQuZGF0YSkudG9CZSh0cnVlKTtcbiAgICAgIGV4cGVjdChjaGVja2JveEluc3RhbmNlLmNoZWNrZWQpLnRvQmUodHJ1ZSk7XG4gICAgICBleHBlY3QoY2hlY2tib3hJbnN0YW5jZS5kaXNhYmxlZCkudG9CZShmYWxzZSk7XG4gICAgICAvLyB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSBkaXZcbiAgICAgIGNvbnN0IGhhc0Rpc3BsYXlOb25lID1cbiAgICAgICAgJ25vbmUnID09PSBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheTtcbiAgICAgIGNvbnN0IGhhc0hpZGRlbiA9IGZpeHR1cmUubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5oaWRkZW47XG4gICAgICBleHBlY3QoaGFzRGlzcGxheU5vbmUgfHwgaGFzSGlkZGVuKS50b0JlRmFsc3koKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHN1cHBvcnQgdXBkYXRpbmcgdGhlIHN0YXRlJywgKCkgPT4ge1xuICAgICAgY29tcG9uZW50LnVpc2NoZW1hID0gdWlzY2hlbWE7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCkudXBkYXRlQ29yZShcbiAgICAgICAgQWN0aW9ucy51cGRhdGUoJ2ZvbycsICgpID0+IGZhbHNlKVxuICAgICAgKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgZXhwZWN0KGNvbXBvbmVudC5kYXRhKS50b0JlKGZhbHNlKTtcbiAgICAgIGV4cGVjdChjaGVja2JveEluc3RhbmNlLmNoZWNrZWQpLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdXBkYXRlIHdpdGggdW5kZWZpbmVkIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29tcG9uZW50LnVpc2NoZW1hID0gdWlzY2hlbWE7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCkudXBkYXRlQ29yZShcbiAgICAgICAgQWN0aW9ucy51cGRhdGUoJ2ZvbycsICgpID0+IHVuZGVmaW5lZClcbiAgICAgICk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGV4cGVjdChjb21wb25lbnQuZGF0YSkudG9CZSh1bmRlZmluZWQpO1xuICAgICAgZXhwZWN0KGNoZWNrYm94SW5zdGFuY2UuY2hlY2tlZCkudG9CZShmYWxzZSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB1cGRhdGUgd2l0aCBudWxsIHZhbHVlJywgKCkgPT4ge1xuICAgICAgY29tcG9uZW50LnVpc2NoZW1hID0gdWlzY2hlbWE7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCkudXBkYXRlQ29yZShcbiAgICAgICAgQWN0aW9ucy51cGRhdGUoJ2ZvbycsICgpID0+IG51bGwpXG4gICAgICApO1xuICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBleHBlY3QoY29tcG9uZW50LmRhdGEpLnRvQmUobnVsbCk7XG4gICAgICBleHBlY3QoY2hlY2tib3hJbnN0YW5jZS5jaGVja2VkKS50b0JlKGZhbHNlKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIG5vdCB1cGRhdGUgd2l0aCB3cm9uZyByZWYnLCAoKSA9PiB7XG4gICAgICBjb21wb25lbnQudWlzY2hlbWEgPSB1aXNjaGVtYTtcblxuICAgICAgZ2V0SnNvbkZvcm1zU2VydmljZShjb21wb25lbnQpLmluaXQoe1xuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBzY2hlbWE6IGRlZmF1bHRCb29sZWFuVGVzdFNjaGVtYSxcbiAgICAgICAgICB1aXNjaGVtYTogdWlzY2hlbWEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbXBvbmVudC5uZ09uSW5pdCgpO1xuICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS51cGRhdGVDb3JlKFxuICAgICAgICBBY3Rpb25zLnVwZGF0ZSgnZm9vJywgKCkgPT4gdHJ1ZSlcbiAgICAgICk7XG4gICAgICBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCkudXBkYXRlQ29yZShcbiAgICAgICAgQWN0aW9ucy51cGRhdGUoJ2JhcicsICgpID0+IGZhbHNlKVxuICAgICAgKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgZXhwZWN0KGNvbXBvbmVudC5kYXRhKS50b0JlKHRydWUpO1xuICAgICAgZXhwZWN0KGNoZWNrYm94SW5zdGFuY2UuY2hlY2tlZCkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICAvLyBzdG9yZSBuZWVkZWQgYXMgd2UgZXZhbHVhdGUgdGhlIGNhbGN1bGF0ZWQgZW5hYmxlZCB2YWx1ZSB0byBkaXNhYmxlL2VuYWJsZSB0aGUgY29udHJvbFxuICAgIGl0KCdjYW4gYmUgZGlzYWJsZWQnLCAoKSA9PiB7XG4gICAgICBjb21wb25lbnQudWlzY2hlbWEgPSB1aXNjaGVtYTtcbiAgICAgIGNvbXBvbmVudC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgZXhwZWN0KGNoZWNrYm94SW5zdGFuY2UuZGlzYWJsZWQpLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG4gICAgLy8gc3RvcmUgbmVlZGVkIGFzIHdlIGV2YWx1YXRlIHRoZSBjYWxjdWxhdGVkIGVuYWJsZWQgdmFsdWUgdG8gZGlzYWJsZS9lbmFibGUgdGhlIGNvbnRyb2xcbiAgICBpdCgnY2FuIGJlIGhpZGRlbicsICgpID0+IHtcbiAgICAgIGNvbXBvbmVudC51aXNjaGVtYSA9IHVpc2NoZW1hO1xuICAgICAgY29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgZ2V0SnNvbkZvcm1zU2VydmljZShjb21wb25lbnQpLmluaXQoe1xuICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBzY2hlbWE6IGRlZmF1bHRCb29sZWFuVGVzdFNjaGVtYSxcbiAgICAgICAgICB1aXNjaGVtYTogdWlzY2hlbWEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbXBvbmVudC5uZ09uSW5pdCgpO1xuICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAvLyB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSBkaXZcbiAgICAgIGNvbnN0IGhhc0Rpc3BsYXlOb25lID1cbiAgICAgICAgJ25vbmUnID09PSBmaXh0dXJlLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheTtcbiAgICAgIGNvbnN0IGhhc0hpZGRlbiA9IGZpeHR1cmUubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5oaWRkZW47XG4gICAgICBleHBlY3QoaGFzRGlzcGxheU5vbmUgfHwgaGFzSGlkZGVuKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnaWQgc2hvdWxkIGJlIHByZXNlbnQgaW4gb3V0cHV0JywgKCkgPT4ge1xuICAgICAgY29tcG9uZW50LnVpc2NoZW1hID0gdWlzY2hlbWE7XG4gICAgICBjb21wb25lbnQuaWQgPSAnbXlJZCc7XG5cbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgZXhwZWN0KGNoZWNrYm94TmF0aXZlRWxlbWVudC5pZCkudG9CZSgnbXlJZCcpO1xuICAgIH0pO1xuICB9O1xuZXhwb3J0IGNvbnN0IGJvb2xlYW5JbnB1dEV2ZW50VGVzdCA9XG4gIDxDIGV4dGVuZHMgSnNvbkZvcm1zQ29udHJvbCwgST4oXG4gICAgdGVzdENvbmZpZzogVGVzdENvbmZpZzxDPixcbiAgICBpbnN0YW5jZTogVHlwZTxJPixcbiAgICBzZWxlY3RvckZvckNsaWNrOiBzdHJpbmdcbiAgKSA9PlxuICAoKSA9PiB7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PjtcbiAgICBsZXQgY2hlY2tib3hOYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBsZXQgY2hlY2tib3hJbnN0YW5jZTogYW55O1xuICAgIGxldCBjb21wb25lbnQ6IEM7XG4gICAgbGV0IGVsZW1lbnRUb0NsaWNrOiBhbnk7XG5cbiAgICBiYXNlU2V0dXAodGVzdENvbmZpZyk7XG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IHByZXBhcmVkQ29tcG9uZW50cyA9IHByZXBhcmVDb21wb25lbnQodGVzdENvbmZpZywgaW5zdGFuY2UpO1xuICAgICAgZml4dHVyZSA9IHByZXBhcmVkQ29tcG9uZW50cy5maXh0dXJlO1xuICAgICAgY2hlY2tib3hOYXRpdmVFbGVtZW50ID0gcHJlcGFyZWRDb21wb25lbnRzLmNoZWNrYm94TmF0aXZlRWxlbWVudDtcbiAgICAgIGNoZWNrYm94SW5zdGFuY2UgPSBwcmVwYXJlZENvbXBvbmVudHMuY2hlY2tib3hJbnN0YW5jZTtcbiAgICAgIGNvbXBvbmVudCA9IHByZXBhcmVkQ29tcG9uZW50cy5jb21wb25lbnQ7XG5cbiAgICAgIGVsZW1lbnRUb0NsaWNrID0gY2hlY2tib3hOYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JGb3JDbGljayk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVwZGF0ZSB2aWEgaW5wdXQgZXZlbnQnLCAoKSA9PiB7XG4gICAgICBjb21wb25lbnQudWlzY2hlbWEgPSB1aXNjaGVtYTtcbiAgICAgIGdldEpzb25Gb3Jtc1NlcnZpY2UoY29tcG9uZW50KS5pbml0KHtcbiAgICAgICAgY29yZToge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgc2NoZW1hOiBkZWZhdWx0Qm9vbGVhblRlc3RTY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IHVpc2NoZW1hLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIGNvbXBvbmVudC5uZ09uSW5pdCgpO1xuXG4gICAgICBjb25zdCBzcHkgPSBzcHlPbihjb21wb25lbnQsICdvbkNoYW5nZScpO1xuICAgICAgZWxlbWVudFRvQ2xpY2suY2xpY2soKTtcbiAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvblxuICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgIGV4cGVjdChzcHkpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgIGV4cGVjdChjaGVja2JveEluc3RhbmNlLmNoZWNrZWQpLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG5leHBvcnQgY29uc3QgYm9vbGVhbkVycm9yVGVzdCA9XG4gIDxDIGV4dGVuZHMgSnNvbkZvcm1zQ29udHJvbCwgST4oXG4gICAgdGVzdENvbmZpZzogVGVzdENvbmZpZzxDPixcbiAgICBpbnN0YW5jZTogVHlwZTxJPixcbiAgICBlcnJvclRlc3RJbmZvcm1hdGlvbjogRXJyb3JUZXN0RXhwZWN0YXRpb25cbiAgKSA9PlxuICAoKSA9PiB7XG4gICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55PjtcbiAgICBsZXQgY29tcG9uZW50OiBDO1xuXG4gICAgYmFzZVNldHVwKHRlc3RDb25maWcpO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBjb25zdCBwcmVwYXJlZENvbXBvbmVudHMgPSBwcmVwYXJlQ29tcG9uZW50KHRlc3RDb25maWcsIGluc3RhbmNlKTtcbiAgICAgIGZpeHR1cmUgPSBwcmVwYXJlZENvbXBvbmVudHMuZml4dHVyZTtcbiAgICAgIGNvbXBvbmVudCA9IHByZXBhcmVkQ29tcG9uZW50cy5jb21wb25lbnQ7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBkaXNwbGF5IGVycm9ycycsICgpID0+IHtcbiAgICAgIGNvbXBvbmVudC51aXNjaGVtYSA9IHVpc2NoZW1hO1xuXG4gICAgICBjb25zdCBmb3Jtc1NlcnZpY2UgPSBnZXRKc29uRm9ybXNTZXJ2aWNlKGNvbXBvbmVudCk7XG4gICAgICBmb3Jtc1NlcnZpY2UuaW5pdCh7XG4gICAgICAgIGNvcmU6IHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHNjaGVtYTogZGVmYXVsdEJvb2xlYW5UZXN0U2NoZW1hLFxuICAgICAgICAgIHVpc2NoZW1hOiB1aXNjaGVtYSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZm9ybXNTZXJ2aWNlLnVwZGF0ZUNvcmUoXG4gICAgICAgIEFjdGlvbnMudXBkYXRlRXJyb3JzKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZVBhdGg6ICcvZm9vJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIaSwgdGhpcyBpcyBtZSwgdGVzdCBlcnJvciEnLFxuICAgICAgICAgICAga2V5d29yZDogJycsXG4gICAgICAgICAgICBzY2hlbWFQYXRoOiAnJyxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgICBmb3Jtc1NlcnZpY2UucmVmcmVzaCgpO1xuXG4gICAgICBjb21wb25lbnQubmdPbkluaXQoKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgY29uc3QgZGVidWdFcnJvcnM6IERlYnVnRWxlbWVudFtdID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQucXVlcnlBbGwoXG4gICAgICAgIEJ5LmRpcmVjdGl2ZShlcnJvclRlc3RJbmZvcm1hdGlvbi5lcnJvckluc3RhbmNlKVxuICAgICAgKTtcbiAgICAgIGV4cGVjdChkZWJ1Z0Vycm9ycy5sZW5ndGgpLnRvQmUoZXJyb3JUZXN0SW5mb3JtYXRpb24ubnVtYmVyT2ZFbGVtZW50cyk7XG4gICAgICBleHBlY3QoXG4gICAgICAgIGRlYnVnRXJyb3JzW2Vycm9yVGVzdEluZm9ybWF0aW9uLmluZGV4T2ZFbGVtZW50XS5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgLnRleHRDb250ZW50XG4gICAgICApLnRvQmUoJ0hpLCB0aGlzIGlzIG1lLCB0ZXN0IGVycm9yIScpO1xuICAgIH0pO1xuICB9O1xuIl19