import 'hammerjs';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i7 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i5$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i7$1 from '@angular/material/badge';
import { MatBadgeModule } from '@angular/material/badge';
import * as i3$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i4$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i5$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i6$2 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i6$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4$4 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i6 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import * as i3$1 from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i4$2 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i4$3 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i5$3 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i3$3 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as i1 from '@jsonforms/angular';
import { JsonFormsControl, JsonFormsBaseRenderer, JsonFormsArrayControl, JsonFormsControlWithDetail, JsonFormsAbstractControl, JsonFormsModule } from '@jsonforms/angular';
import { composeWithUi, Actions, rankWith, isEnumControl, isBooleanControl, isDateControl, isNumberControl, or, isIntegerControl, isRangeControl, isMultiLineControl, isStringControl, and, optionIs, mapStateToLabelProps, uiTypeIs, decode, mapDispatchToArrayControlProps, findUISchema, setReadonly, getFirstPrimitiveProp, createDefaultValue, mapStateToArrayControlProps, Generate, isObjectControl, Paths, encode, deriveTypes, isObjectArrayControl, isPrimitiveArrayControl, mapStateToLayoutProps, isVisible, getAjv, deriveLabelForUISchemaElement, defaultJsonFormsI18nState, categorizationHasCategory, mapStateToArrayLayoutProps, unsetReadonly, isObjectArrayWithNesting } from '@jsonforms/core';
import { startWith, map } from 'rxjs/operators';
import merge from 'lodash/merge';
import some from 'lodash/some';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import { cloneDeep } from 'lodash';

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
 * To use this component you will need to add your own tester:
 * <pre><code>
 * ...
 * export const AutocompleteControlRendererTester: RankedTester = rankWith(2, isEnumControl);
 * ...
 * </code></pre>
 * Add the tester and renderer to JSONForms registry:
 * <pre><code>
 * ...
 * { tester: AutocompleteControlRendererTester, renderer: AutocompleteControlRenderer },
 * ...
 * </code></pre>
 * Furthermore you need to update your module.
 * <pre><code>
 * ...
 * imports: [JsonFormsAngularMaterialModule, MatAutocompleteModule],
 * declarations: [AutocompleteControlRenderer]
 * ...
 * </code></pre>
 *
 */
class AutocompleteControlRenderer extends JsonFormsControl {
    options;
    filteredOptions;
    shouldFilter;
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value;
    ngOnInit() {
        super.ngOnInit();
        this.shouldFilter = false;
        this.filteredOptions = this.form.valueChanges.pipe(startWith(''), map((val) => this.filter(val)));
    }
    updateFilter(event) {
        // ENTER
        if (event.keyCode === 13) {
            this.shouldFilter = false;
        }
        else {
            this.shouldFilter = true;
        }
    }
    onSelect(ev) {
        const path = composeWithUi(this.uischema, this.path);
        this.shouldFilter = false;
        this.jsonFormsService.updateCore(Actions.update(path, () => ev.option.value));
        this.triggerValidation();
    }
    filter(val) {
        return (this.options || this.scopedSchema.enum || []).filter((option) => !this.shouldFilter ||
            !val ||
            option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    getOwnProps() {
        return {
            ...super.getOwnProps(),
            options: this.options,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AutocompleteControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AutocompleteControlRenderer, selector: "AutocompleteControlRenderer", inputs: { options: "options" }, usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        type="text"
        (change)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matAutocomplete]="auto"
        (keydown)="updateFilter($event)"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-autocomplete
        autoActiveFirstOption
        #auto="matAutocomplete"
        (optionSelected)="onSelect($event)"
      >
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ option }}
        </mat-option>
      </mat-autocomplete>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i7.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i7.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AutocompleteControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'AutocompleteControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        type="text"
        (change)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matAutocomplete]="auto"
        (keydown)="updateFilter($event)"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-autocomplete
        autoActiveFirstOption
        #auto="matAutocomplete"
        (optionSelected)="onSelect($event)"
      >
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ option }}
        </mat-option>
      </mat-autocomplete>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; }, propDecorators: { options: [{
                type: Input
            }] } });
const enumControlTester = rankWith(2, isEnumControl);

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
class BooleanControlRenderer extends JsonFormsControl {
    changeDetectionRef;
    constructor(jsonformsService, changeDetectionRef) {
        super(jsonformsService);
        this.changeDetectionRef = changeDetectionRef;
    }
    isChecked = () => this.data || false;
    getEventValue = (event) => event.checked;
    mapAdditionalProps() {
        if (!this.changeDetectionRef.destroyed) {
            this.changeDetectionRef.markForCheck();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BooleanControlRenderer, selector: "BooleanControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="boolean-control">
      <mat-checkbox
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-checkbox>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}.boolean-control{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;height:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'BooleanControlRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="boolean-control">
      <mat-checkbox
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-checkbox>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}.boolean-control{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const booleanControlTester = rankWith(2, isBooleanControl);

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
class DateControlRenderer extends JsonFormsControl {
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.value.toISOString().substr(0, 10);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DateControlRenderer, selector: "DateControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (dateChange)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matDatepicker]="datepicker"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-datepicker-toggle
        matSuffix
        [for]="datepicker"
      ></mat-datepicker-toggle>
      <mat-datepicker #datepicker></mat-datepicker>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i5$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i5$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'DateControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (dateChange)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matDatepicker]="datepicker"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-datepicker-toggle
        matSuffix
        [for]="datepicker"
      ></mat-datepicker-toggle>
      <mat-datepicker #datepicker></mat-datepicker>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const DateControlRendererTester = rankWith(2, isDateControl);

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
class NumberControlRenderer extends JsonFormsControl {
    MAXIMUM_FRACTIONAL_DIGITS = 20;
    oldValue;
    min;
    max;
    multipleOf;
    locale;
    numberFormat;
    decimalSeparator;
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    onChange(ev) {
        const data = this.oldValue
            ? ev.target.value.replace(this.oldValue, '')
            : ev.target.value;
        // ignore these
        if (data === '.' ||
            data === ',' ||
            data === ' ' ||
            // if the value is 0 and we already have a value then we ignore
            (data === '0' &&
                this.getValue() !== '' &&
                // a 0 in the first place
                ((ev.target.selectionStart === 1 && ev.target.selectionEnd === 1) ||
                    // or in the last place as this doesn't change the value (when there is a separator)
                    (ev.target.selectionStart === ev.target.value.length &&
                        ev.target.selectionEnd === ev.target.value.length &&
                        ev.target.value.indexOf(this.decimalSeparator) !== -1)))) {
            this.oldValue = ev.target.value;
            return;
        }
        super.onChange(ev);
        this.oldValue = this.getValue();
    }
    getEventValue = (event) => {
        const cleanPattern = new RegExp(`[^-+0-9${this.decimalSeparator}]`, 'g');
        const cleaned = event.target.value.replace(cleanPattern, '');
        const normalized = cleaned.replace(this.decimalSeparator, '.');
        if (normalized === '') {
            return undefined;
        }
        // convert to number
        const number = +normalized;
        // if not a number just return the string
        if (Number.isNaN(number)) {
            return event.target.value;
        }
        return number;
    };
    getValue = () => {
        if (this.data !== undefined && this.data !== null) {
            if (typeof this.data === 'number') {
                return this.numberFormat.format(this.data);
            }
            return this.data;
        }
        return '';
    };
    mapAdditionalProps(props) {
        if (this.scopedSchema) {
            const testerContext = {
                rootSchema: this.rootSchema,
                config: props.config,
            };
            const defaultStep = isNumberControl(this.uischema, this.rootSchema, testerContext)
                ? 0.1
                : 1;
            this.min = this.scopedSchema.minimum;
            this.max = this.scopedSchema.maximum;
            this.multipleOf = this.scopedSchema.multipleOf || defaultStep;
            const appliedUiSchemaOptions = merge({}, props.config, this.uischema.options);
            const currentLocale = this.jsonFormsService.getLocale();
            if (this.locale === undefined || this.locale !== currentLocale) {
                this.locale = currentLocale;
                this.numberFormat = new Intl.NumberFormat(this.locale, {
                    useGrouping: appliedUiSchemaOptions.useGrouping,
                    maximumFractionDigits: this.MAXIMUM_FRACTIONAL_DIGITS,
                });
                this.determineDecimalSeparator();
                this.oldValue = this.getValue();
            }
            this.form.setValue(this.getValue());
        }
    }
    determineDecimalSeparator() {
        const example = this.numberFormat.format(1.1);
        this.decimalSeparator = example.charAt(1);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NumberControlRenderer, selector: "NumberControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (input)="onChange($event)"
        [value]="getValue()"
        [id]="id"
        [formControl]="form"
        [min]="min"
        [max]="max"
        [step]="multipleOf"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'NumberControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (input)="onChange($event)"
        [value]="getValue()"
        [id]="id"
        [formControl]="form"
        [min]="min"
        [max]="max"
        [step]="multipleOf"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const NumberControlRendererTester = rankWith(2, or(isNumberControl, isIntegerControl));

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
class RangeControlRenderer extends JsonFormsControl {
    changeDetectorRef;
    min;
    max;
    multipleOf;
    focused = false;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    getEventValue = (event) => Number(event);
    mapAdditionalProps() {
        if (this.scopedSchema) {
            this.min = this.scopedSchema.minimum;
            this.max = this.scopedSchema.maximum;
            this.multipleOf = this.scopedSchema.multipleOf || 1;
        }
        this.changeDetectorRef.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RangeControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RangeControlRenderer, selector: "RangeControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="range-control">
      <label class="mat-caption" style="color:rgba(0,0,0,.54)">{{
        label
      }}</label>
      <mat-slider
        [disabled]="!isEnabled()"
        [max]="max"
        [min]="min"
        [step]="multipleOf"
        [discrete]="true"
        [id]="id"
        showTickMarks
        #ngSlider
      >
        <input matSliderThumb (valueChange)="onChange($event)" />
      </mat-slider>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}.range-control{flex:1 1 auto;display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$2.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i4$2.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RangeControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'RangeControlRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="range-control">
      <label class="mat-caption" style="color:rgba(0,0,0,.54)">{{
        label
      }}</label>
      <mat-slider
        [disabled]="!isEnabled()"
        [max]="max"
        [min]="min"
        [step]="multipleOf"
        [discrete]="true"
        [id]="id"
        showTickMarks
        #ngSlider
      >
        <input matSliderThumb (valueChange)="onChange($event)" />
      </mat-slider>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}.range-control{flex:1 1 auto;display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const RangeControlRendererTester = rankWith(4, isRangeControl);

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
class TextAreaRenderer extends JsonFormsControl {
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value || undefined;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextAreaRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextAreaRenderer, selector: "TextAreaRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <textarea
        matInput
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      ></textarea>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextAreaRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TextAreaRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <textarea
        matInput
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      ></textarea>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const TextAreaRendererTester = rankWith(2, isMultiLineControl);

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
class TextControlRenderer extends JsonFormsControl {
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value || undefined;
    getType = () => {
        if (this.uischema.options && this.uischema.options.format) {
            return this.uischema.options.format;
        }
        if (this.scopedSchema && this.scopedSchema.format) {
            switch (this.scopedSchema.format) {
                case 'email':
                    return 'email';
                case 'tel':
                    return 'tel';
                default:
                    return 'text';
            }
        }
        return 'text';
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextControlRenderer, selector: "TextControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TextControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const TextControlRendererTester = rankWith(1, isStringControl);

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
class ToggleControlRenderer extends JsonFormsControl {
    changeDetectorRef;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    isChecked = () => this.data || false;
    getEventValue = (event) => event.checked;
    mapAdditionalProps() {
        this.changeDetectorRef.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToggleControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ToggleControlRenderer, selector: "ToggleControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-slide-toggle
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-slide-toggle>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4$3.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToggleControlRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'ToggleControlRenderer',
                    template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-slide-toggle
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-slide-toggle>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const ToggleControlRendererTester = rankWith(3, and(isBooleanControl, optionIs('toggle', true)));

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
class LabelRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    label;
    visible;
    subscription;
    constructor(jsonFormsService) {
        super();
        this.jsonFormsService = jsonFormsService;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLabelProps(state, this.getOwnProps());
                this.visible = props.visible;
                this.label = props.text;
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LabelRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LabelRenderer, selector: "LabelRenderer", usesInheritance: true, ngImport: i0, template: ` <label class="mat-headline-6"> {{ label }} </label> `, isInline: true, styles: [":host{flex:1 1 auto}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LabelRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'LabelRenderer', template: ` <label class="mat-headline-6"> {{ label }} </label> `, styles: [":host{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const LabelRendererTester = rankWith(4, uiTypeIs('Label'));

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
class JsonFormsDetailComponent {
    _item;
    _schema;
    initialized = false;
    set item(item) {
        if (item) {
            this._item = item;
            this.initialized = true;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsDetailComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: JsonFormsDetailComponent, selector: "jsonforms-detail", inputs: { item: "item" }, ngImport: i0, template: `
    <div *ngIf="initialized">
      <jsonforms-outlet [renderProps]="_item"></jsonforms-outlet>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsDetailComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jsonforms-detail',
                    template: `
    <div *ngIf="initialized">
      <jsonforms-outlet [renderProps]="_item"></jsonforms-outlet>
    </div>
  `,
                }]
        }], propDecorators: { item: [{
                type: Input
            }] } });

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
const keywords = ['#', 'properties', 'items'];
const removeSchemaKeywords = (path) => {
    return decode(path
        .split('/')
        .filter((s) => !some(keywords, (key) => key === s))
        .join('.'));
};
class MasterListComponent extends JsonFormsArrayControl {
    changeDetectorRef;
    masterItems;
    selectedItem;
    selectedItemIdx;
    addItem;
    removeItems;
    highlightedIdx;
    translations;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    onListItemHover(idx) {
        this.highlightedIdx = idx;
    }
    trackElement(_index, element) {
        return element ? element.label : null;
    }
    ngOnInit() {
        super.ngOnInit();
        const dispatch = this.jsonFormsService.updateCore.bind(this.jsonFormsService);
        const { addItem, removeItems } = mapDispatchToArrayControlProps(dispatch);
        this.addItem = addItem;
        this.removeItems = removeItems;
    }
    mapAdditionalProps(props) {
        const { data, path, schema, uischema } = props;
        const controlElement = uischema;
        this.propsPath = props.path;
        const detailUISchema = findUISchema(props.uischemas, schema, `${controlElement.scope}/items`, props.path, 'VerticalLayout', controlElement, props.rootSchema);
        if (!this.isEnabled()) {
            setReadonly(detailUISchema);
        }
        this.translations = props.translations;
        const masterItems = (data || []).map((d, index) => {
            const labelRefInstancePath = controlElement.options?.labelRef &&
                removeSchemaKeywords(controlElement.options.labelRef);
            const isPrimitive = d !== undefined && typeof d !== 'object';
            const masterItem = {
                label: isPrimitive
                    ? d.toString()
                    : get(d, labelRefInstancePath ?? getFirstPrimitiveProp(schema)),
                data: d,
                path: `${path}.${index}`,
                schema,
                uischema: detailUISchema,
            };
            return masterItem;
        });
        this.masterItems = masterItems;
        let newSelectedIdx = -1;
        let newSelectedItem;
        if (this.masterItems.length === 0) {
            // unset select if no elements anymore
            this.selectedItem = undefined;
            this.selectedItemIdx = -1;
        }
        else if (this.selectedItemIdx >= this.masterItems.length) {
            // the previous index is to high, reduce it to the maximal possible
            newSelectedIdx = this.masterItems.length - 1;
            newSelectedItem = this.masterItems[newSelectedIdx];
        }
        else if (this.selectedItemIdx !== -1 &&
            this.selectedItemIdx < this.masterItems.length) {
            newSelectedIdx = this.selectedItemIdx;
            newSelectedItem = this.masterItems[this.selectedItemIdx];
        }
        if (newSelectedItem !== undefined &&
            this.selectedItem !== undefined &&
            (newSelectedItem.label === this.selectedItem.label ||
                newSelectedItem.path === this.selectedItem.path)) {
            // after checking that we are on the same path, set selection
            this.selectedItem = newSelectedItem;
            this.selectedItemIdx = newSelectedIdx;
        }
        else if (this.masterItems.length > 0) {
            // pre-select 1st entry if the previous selected element as fallback
            this.selectedItem = this.masterItems[0];
            this.selectedItemIdx = 0;
        }
        this.changeDetectorRef.markForCheck();
    }
    onSelect(item, idx) {
        this.selectedItem = item;
        this.selectedItemIdx = idx;
    }
    onAddClick() {
        this.addItem(this.propsPath, createDefaultValue(this.scopedSchema, this.rootSchema))();
    }
    onDeleteClick(item) {
        this.removeItems(this.propsPath, [item])();
    }
    mapToProps(state) {
        const props = mapStateToArrayControlProps(state, this.getOwnProps());
        return { ...props };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterListComponent, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MasterListComponent, selector: "jsonforms-list-with-detail-master", usesInheritance: true, ngImport: i0, template: `
    <mat-sidenav-container
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="container"
    >
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <mat-list-item *ngIf="masterItems.length === 0">{{
            translations.noDataMessage
          }}</mat-list-item>
          <mat-list-item
            *ngFor="
              let item of masterItems;
              let i = index;
              trackBy: trackElement
            "
            [class.selected]="item === selectedItem"
            (click)="onSelect(item, i)"
            (mouseover)="onListItemHover(i)"
            (mouseout)="onListItemHover(undefined)"
          >
            <a matLine>{{ item.label || 'No label set' }}</a>
            <button
              mat-icon-button
              class="button item-button hide"
              (click)="onDeleteClick(i)"
              [ngClass]="{ show: highlightedIdx == i }"
              *ngIf="isEnabled()"
            >
              <mat-icon mat-list-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        </mat-nav-list>
        <button
          mat-fab
          color="primary"
          class="add-button"
          (click)="onAddClick()"
          *ngIf="isEnabled()"
        >
          <mat-icon [attr.aria-label]="translations.addAriaLabel">add</mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <jsonforms-detail
          *ngIf="selectedItem"
          [item]="selectedItem"
        ></jsonforms-detail>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `, isInline: true, styles: ["mat-list-item.selected{background:#0000000a}.container{height:100vh}.content{padding:15px;background-color:#fff}.add-button{float:right;margin-top:.5em;margin-right:.25em}.button{float:right;margin-right:.25em}.item-button{position:absolute;top:0;right:0}.show{display:inline-block}mat-sidenav{width:20%}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3$1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i3$1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i3$1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "component", type: i4$4.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i4$4.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "component", type: i5$2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i5$2.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: JsonFormsDetailComponent, selector: "jsonforms-detail", inputs: ["item"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'jsonforms-list-with-detail-master', template: `
    <mat-sidenav-container
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="container"
    >
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <mat-list-item *ngIf="masterItems.length === 0">{{
            translations.noDataMessage
          }}</mat-list-item>
          <mat-list-item
            *ngFor="
              let item of masterItems;
              let i = index;
              trackBy: trackElement
            "
            [class.selected]="item === selectedItem"
            (click)="onSelect(item, i)"
            (mouseover)="onListItemHover(i)"
            (mouseout)="onListItemHover(undefined)"
          >
            <a matLine>{{ item.label || 'No label set' }}</a>
            <button
              mat-icon-button
              class="button item-button hide"
              (click)="onDeleteClick(i)"
              [ngClass]="{ show: highlightedIdx == i }"
              *ngIf="isEnabled()"
            >
              <mat-icon mat-list-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        </mat-nav-list>
        <button
          mat-fab
          color="primary"
          class="add-button"
          (click)="onAddClick()"
          *ngIf="isEnabled()"
        >
          <mat-icon [attr.aria-label]="translations.addAriaLabel">add</mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <jsonforms-detail
          *ngIf="selectedItem"
          [item]="selectedItem"
        ></jsonforms-detail>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-list-item.selected{background:#0000000a}.container{height:100vh}.content{padding:15px;background-color:#fff}.add-button{float:right;margin-top:.5em;margin-right:.25em}.button{float:right;margin-right:.25em}.item-button{position:absolute;top:0;right:0}.show{display:inline-block}mat-sidenav{width:20%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const masterDetailTester = rankWith(4, uiTypeIs('ListWithDetail'));

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
class ObjectControlRenderer extends JsonFormsControlWithDetail {
    detailUiSchema;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    mapAdditionalProps(props) {
        this.detailUiSchema = findUISchema(props.uischemas, props.schema, props.uischema.scope, props.path, () => {
            const newSchema = cloneDeep(props.schema);
            // delete unsupported operators
            delete newSchema.oneOf;
            delete newSchema.anyOf;
            delete newSchema.allOf;
            return Generate.uiSchema(newSchema, 'Group', undefined, this.rootSchema);
        }, props.uischema, props.rootSchema);
        if (isEmpty(props.path)) {
            this.detailUiSchema.type = 'VerticalLayout';
        }
        else {
            this.detailUiSchema.label = startCase(props.path);
        }
        if (!this.isEnabled()) {
            setReadonly(this.detailUiSchema);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ObjectControlRenderer, selector: "ObjectRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-card class="object-layout" appearance="outlined">
      <jsonforms-outlet
        [uischema]="detailUiSchema"
        [schema]="scopedSchema"
        [path]="propsPath"
      >
      </jsonforms-outlet>
    </mat-card>
  `, isInline: true, styles: [".object-layout{padding:16px}\n"], dependencies: [{ kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'ObjectRenderer', template: `
    <mat-card class="object-layout" appearance="outlined">
      <jsonforms-outlet
        [uischema]="detailUiSchema"
        [schema]="scopedSchema"
        [path]="propsPath"
      >
      </jsonforms-outlet>
    </mat-card>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".object-layout{padding:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const ObjectControlRendererTester = rankWith(2, isObjectControl);

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
class TableRenderer extends JsonFormsArrayControl {
    detailUiSchema;
    displayedColumns;
    items;
    columnsToIgnore = ['array', 'object'];
    addItem;
    moveItemUp;
    moveItemDown;
    removeItems;
    translations;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    trackElement(index, _element) {
        return index ? index : null;
    }
    mapAdditionalProps(props) {
        this.items = this.generateCells(props.schema, props.path);
        this.displayedColumns = this.items.map((item) => item.property);
        if (this.isEnabled()) {
            this.displayedColumns.push('action');
        }
        this.translations = props.translations;
    }
    getProps(index, props) {
        const rowPath = Paths.compose(props.path, `${index}`);
        return {
            schema: props.schema,
            uischema: props.uischema,
            path: rowPath,
        };
    }
    remove(index) {
        this.removeItems(this.propsPath, [index])();
    }
    add() {
        this.addItem(this.propsPath, createDefaultValue(this.scopedSchema, this.rootSchema))();
    }
    up(index) {
        this.moveItemUp(this.propsPath, index)();
    }
    down(index) {
        this.moveItemDown(this.propsPath, index)();
    }
    ngOnInit() {
        super.ngOnInit();
        const { addItem, removeItems, moveUp, moveDown } = mapDispatchToArrayControlProps(this.jsonFormsService.updateCore.bind(this.jsonFormsService));
        this.addItem = addItem;
        this.moveItemUp = moveUp;
        this.moveItemDown = moveDown;
        this.removeItems = removeItems;
    }
    generateCells = (schema, rowPath) => {
        if (schema.type === 'object') {
            return this.getValidColumnProps(schema).map((prop) => {
                const encProp = encode(prop);
                const uischema = controlWithoutLabel(`#/properties/${encProp}`);
                if (!this.isEnabled()) {
                    setReadonly(uischema);
                }
                return {
                    property: prop,
                    header: startCase(prop),
                    props: {
                        schema: schema,
                        uischema,
                        path: rowPath,
                    },
                };
            });
        }
        // needed to correctly render input control for multi attributes
        return [
            {
                property: 'DUMMY',
                header: this.label,
                props: {
                    schema: schema,
                    uischema: controlWithoutLabel(`#`),
                    path: rowPath,
                },
            },
        ];
    };
    getValidColumnProps = (scopedSchema) => {
        if (scopedSchema.type === 'object') {
            return Object.keys(scopedSchema.properties).filter((prop) => {
                const types = deriveTypes(scopedSchema.properties[prop]);
                if (types.length > 1) {
                    return false;
                }
                return this.columnsToIgnore.indexOf(types[0]) === -1;
            });
        }
        // primitives
        return [''];
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableRenderer, selector: "TableRenderer", usesInheritance: true, ngImport: i0, template: `
    <table
      mat-table
      [dataSource]="data"
      class="mat-elevation-z8"
      [trackBy]="trackElement"
    >
      <ng-container matColumnDef="action">
        <tr>
          <th mat-header-cell *matHeaderCellDef>
            <button
              mat-button
              color="primary"
              (click)="add()"
              [disabled]="!isEnabled()"
              [matTooltip]="translations.addTooltip"
            >
              <mat-icon>add</mat-icon>
            </button>
          </th>
        </tr>
        <tr>
          <td
            mat-cell
            *matCellDef="
              let row;
              let i = index;
              let first = first;
              let last = last
            "
          >
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(i)"
              [matTooltip]="translations.upAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(i)"
              [matTooltip]="translations.downAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(i)"
              [disabled]="!isEnabled()"
              matTooltipPosition="right"
              [matTooltip]="translations.removeTooltip"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </tr>

        <tr></tr
      ></ng-container>

      <ng-container
        *ngFor="let item of items"
        matColumnDef="{{ item.property }}"
      >
        <th mat-header-cell *matHeaderCellDef>{{ item.header }}</th>
        <td mat-cell *matCellDef="let index = index">
          <jsonforms-outlet
            [renderProps]="getProps(index, item.props)"
          ></jsonforms-outlet>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `, isInline: true, styles: ["table{width:100%}\n", ".cdk-column-action{width:15%}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i5$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5$3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5$3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5$3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5$3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5$3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5$3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5$3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5$3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5$3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5$3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i6$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TableRenderer', template: `
    <table
      mat-table
      [dataSource]="data"
      class="mat-elevation-z8"
      [trackBy]="trackElement"
    >
      <ng-container matColumnDef="action">
        <tr>
          <th mat-header-cell *matHeaderCellDef>
            <button
              mat-button
              color="primary"
              (click)="add()"
              [disabled]="!isEnabled()"
              [matTooltip]="translations.addTooltip"
            >
              <mat-icon>add</mat-icon>
            </button>
          </th>
        </tr>
        <tr>
          <td
            mat-cell
            *matCellDef="
              let row;
              let i = index;
              let first = first;
              let last = last
            "
          >
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(i)"
              [matTooltip]="translations.upAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(i)"
              [matTooltip]="translations.downAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(i)"
              [disabled]="!isEnabled()"
              matTooltipPosition="right"
              [matTooltip]="translations.removeTooltip"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </tr>

        <tr></tr
      ></ng-container>

      <ng-container
        *ngFor="let item of items"
        matColumnDef="{{ item.property }}"
      >
        <th mat-header-cell *matHeaderCellDef>{{ item.header }}</th>
        <td mat-cell *matCellDef="let index = index">
          <jsonforms-outlet
            [renderProps]="getProps(index, item.props)"
          ></jsonforms-outlet>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `, styles: ["table{width:100%}\n", ".cdk-column-action{width:15%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const TableRendererTester = rankWith(3, or(isObjectArrayControl, isPrimitiveArrayControl));
const controlWithoutLabel = (scope) => ({
    type: 'Control',
    scope: scope,
    label: false,
});

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
class CategorizationTabLayoutRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    hidden;
    visibleCategories;
    subscription;
    categoryLabels;
    constructor(jsonFormsService) {
        super();
        this.jsonFormsService = jsonFormsService;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLayoutProps(state, this.getOwnProps());
                this.hidden = !props.visible;
                this.visibleCategories = this.uischema.elements.filter((category) => isVisible(category, props.data, undefined, getAjv(state)));
                this.categoryLabels = this.visibleCategories.map((element) => deriveLabelForUISchemaElement(element, state.jsonforms.i18n?.translate ??
                    defaultJsonFormsI18nState.translate));
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CategorizationTabLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CategorizationTabLayoutRenderer, selector: "jsonforms-categorization-layout", usesInheritance: true, ngImport: i0, template: `
    <mat-tab-group
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      dynamicHeight="true"
    >
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3$3.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i3$3.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CategorizationTabLayoutRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'jsonforms-categorization-layout',
                    template: `
    <mat-tab-group
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      dynamicHeight="true"
    >
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const categorizationTester = rankWith(2, and(uiTypeIs('Categorization'), categorizationHasCategory));

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
class LayoutRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    changeDetectionRef;
    hidden;
    label;
    subscription;
    constructor(jsonFormsService, changeDetectionRef) {
        super();
        this.jsonFormsService = jsonFormsService;
        this.changeDetectionRef = changeDetectionRef;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLayoutProps(state, this.getOwnProps());
                this.label = props.label;
                this.hidden = !props.visible;
                this.changeDetectionRef.markForCheck();
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    trackElement(_index, renderProp) {
        return renderProp
            ? renderProp.path + JSON.stringify(renderProp.uischema)
            : null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LayoutRenderer, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutRenderer, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
class LayoutChildrenRenderPropsPipe {
    transform(uischema, schema, path) {
        const elements = (uischema.elements || []).map((el) => ({
            uischema: el,
            schema: schema,
            path: path,
        }));
        return elements;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'layoutChildrenRenderProps' }]
        }] });

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
class GroupLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GroupLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GroupLayoutRenderer, selector: "GroupLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-card
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      appearance="outlined"
      class="group-layout"
    >
      <mat-card-title class="mat-headline-6">{{ label }}</mat-card-title>
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </mat-card>
  `, isInline: true, styles: [".group-layout{display:flex;flex-direction:column;gap:16px;padding:16px}.group-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i3$2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "pipe", type: LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GroupLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'GroupLayoutRenderer', template: `
    <mat-card
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      appearance="outlined"
      class="group-layout"
    >
      <mat-card-title class="mat-headline-6">{{ label }}</mat-card-title>
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </mat-card>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".group-layout{display:flex;flex-direction:column;gap:16px;padding:16px}.group-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const groupLayoutTester = rankWith(1, uiTypeIs('Group'));

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
class HorizontalLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HorizontalLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HorizontalLayoutRenderer, selector: "HorizontalLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <div
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="horizontal-layout"
    >
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, isInline: true, styles: [".horizontal-layout{display:flex;gap:16px;flex-flow:row wrap;align-items:flex-start;place-content:flex-start center}.horizontal-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "pipe", type: LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HorizontalLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'HorizontalLayoutRenderer', template: `
    <div
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="horizontal-layout"
    >
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".horizontal-layout{display:flex;gap:16px;flex-flow:row wrap;align-items:flex-start;place-content:flex-start center}.horizontal-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const horizontalLayoutTester = rankWith(1, uiTypeIs('HorizontalLayout'));

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
class VerticalLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VerticalLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: VerticalLayoutRenderer, selector: "VerticalLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="vertical-layout">
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, isInline: true, styles: [".vertical-layout{display:flex;flex-direction:column;gap:16px}.vertical-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "pipe", type: LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VerticalLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'VerticalLayoutRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="vertical-layout">
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".vertical-layout{display:flex;flex-direction:column;gap:16px}.vertical-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
const verticalLayoutTester = rankWith(1, uiTypeIs('VerticalLayout'));

/*
  The MIT License

  Copyright (c) 2017-2020 EclipseSource Munich
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
class ArrayLayoutRenderer extends JsonFormsAbstractControl {
    noData;
    translations;
    addItem;
    moveItemUp;
    moveItemDown;
    removeItems;
    uischemas;
    constructor(jsonFormsService) {
        super(jsonFormsService);
    }
    mapToProps(state) {
        const props = mapStateToArrayLayoutProps(state, this.getOwnProps());
        return { ...props };
    }
    remove(index) {
        this.removeItems(this.propsPath, [index])();
    }
    add() {
        this.addItem(this.propsPath, createDefaultValue(this.scopedSchema, this.rootSchema))();
    }
    up(index) {
        this.moveItemUp(this.propsPath, index)();
    }
    down(index) {
        this.moveItemDown(this.propsPath, index)();
    }
    ngOnInit() {
        super.ngOnInit();
        const { addItem, removeItems, moveUp, moveDown } = mapDispatchToArrayControlProps(this.jsonFormsService.updateCore.bind(this.jsonFormsService));
        this.addItem = addItem;
        this.moveItemUp = moveUp;
        this.moveItemDown = moveDown;
        this.removeItems = removeItems;
    }
    mapAdditionalProps(props) {
        this.translations = props.translations;
        this.noData = !props.data || props.data === 0;
        this.uischemas = props.uischemas;
    }
    getProps(index) {
        const uischema = findUISchema(this.uischemas, this.scopedSchema, this.uischema.scope, this.propsPath, undefined, this.uischema, this.rootSchema);
        if (this.isEnabled()) {
            unsetReadonly(uischema);
        }
        else {
            setReadonly(uischema);
        }
        return {
            schema: this.scopedSchema,
            path: Paths.compose(this.propsPath, `${index}`),
            uischema,
        };
    }
    trackByFn(index) {
        return index;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ArrayLayoutRenderer, selector: "app-array-layout-renderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="array-layout">
      <div class="array-layout-toolbar">
        <h2 class="mat-h2 array-layout-title">{{ label }}</h2>
        <span></span>
        <mat-icon
          *ngIf="this.error?.length"
          color="warn"
          matBadge="{{ this.error.split('').length }}"
          matBadgeColor="warn"
          matTooltip="{{ this.error }}"
          matTooltipClass="error-message-tooltip"
        >
          error_outline
        </mat-icon>
        <span></span>
        <button
          mat-button
          matTooltip="{{ translations.addTooltip }}"
          [disabled]="!isEnabled()"
          (click)="add()"
          attr.aria-label="{{ translations.addAriaLabel }}"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
      <p *ngIf="noData">{{ translations.noDataMessage }}</p>
      <div
        *ngFor="
          let item of [].constructor(data);
          let idx = index;
          trackBy: trackByFn;
          last as last;
          first as first
        "
      >
        <mat-card class="array-item" appearance="outlined">
          <mat-card-content>
            <jsonforms-outlet [renderProps]="getProps(idx)"></jsonforms-outlet>
          </mat-card-content>
          <mat-card-actions *ngIf="isEnabled()">
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(idx)"
              attr.aria-label="{{ translations.upAriaLabel }}"
              matTooltip="{{ translations.up }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(idx)"
              attr.aria-label="{{ translations.downAriaLabel }}"
              matTooltip="{{ translations.down }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(idx)"
              attr.aria-label="{{ translations.removeAriaLabel }}"
              matTooltip="{{ translations.removeTooltip }}"
              matTooltipPosition="right"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, isInline: true, styles: [".array-layout{display:flex;flex-direction:column;gap:16px}.array-layout>*{flex:1 1 auto}.array-layout-toolbar{display:flex;align-items:center}.array-layout-title{margin:0}.array-layout-toolbar>span{flex:1 1 auto}.array-item{padding:16px}::ng-deep .error-message-tooltip{white-space:pre-line}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i3$2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i3$2.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i5$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i6$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i6$2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i7$1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'app-array-layout-renderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="array-layout">
      <div class="array-layout-toolbar">
        <h2 class="mat-h2 array-layout-title">{{ label }}</h2>
        <span></span>
        <mat-icon
          *ngIf="this.error?.length"
          color="warn"
          matBadge="{{ this.error.split('').length }}"
          matBadgeColor="warn"
          matTooltip="{{ this.error }}"
          matTooltipClass="error-message-tooltip"
        >
          error_outline
        </mat-icon>
        <span></span>
        <button
          mat-button
          matTooltip="{{ translations.addTooltip }}"
          [disabled]="!isEnabled()"
          (click)="add()"
          attr.aria-label="{{ translations.addAriaLabel }}"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
      <p *ngIf="noData">{{ translations.noDataMessage }}</p>
      <div
        *ngFor="
          let item of [].constructor(data);
          let idx = index;
          trackBy: trackByFn;
          last as last;
          first as first
        "
      >
        <mat-card class="array-item" appearance="outlined">
          <mat-card-content>
            <jsonforms-outlet [renderProps]="getProps(idx)"></jsonforms-outlet>
          </mat-card-content>
          <mat-card-actions *ngIf="isEnabled()">
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(idx)"
              attr.aria-label="{{ translations.upAriaLabel }}"
              matTooltip="{{ translations.up }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(idx)"
              attr.aria-label="{{ translations.downAriaLabel }}"
              matTooltip="{{ translations.down }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(idx)"
              attr.aria-label="{{ translations.removeAriaLabel }}"
              matTooltip="{{ translations.removeTooltip }}"
              matTooltipPosition="right"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".array-layout{display:flex;flex-direction:column;gap:16px}.array-layout>*{flex:1 1 auto}.array-layout-toolbar{display:flex;align-items:center}.array-layout-title{margin:0}.array-layout-toolbar>span{flex:1 1 auto}.array-item{padding:16px}::ng-deep .error-message-tooltip{white-space:pre-line}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
const ArrayLayoutRendererTester = rankWith(4, isObjectArrayWithNesting);

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
class JsonFormsAngularMaterialModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAngularMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAngularMaterialModule, declarations: [BooleanControlRenderer,
            TextAreaRenderer,
            TextControlRenderer,
            NumberControlRenderer,
            RangeControlRenderer,
            DateControlRenderer,
            ToggleControlRenderer,
            VerticalLayoutRenderer,
            HorizontalLayoutRenderer,
            CategorizationTabLayoutRenderer,
            GroupLayoutRenderer,
            LabelRenderer,
            MasterListComponent,
            JsonFormsDetailComponent,
            ObjectControlRenderer,
            AutocompleteControlRenderer,
            TableRenderer,
            ArrayLayoutRenderer,
            LayoutChildrenRenderPropsPipe], imports: [CommonModule,
            JsonFormsModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatSidenavModule,
            MatListModule,
            ReactiveFormsModule,
            MatCardModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatAutocompleteModule,
            MatTableModule,
            MatToolbarModule,
            MatTooltipModule,
            MatBadgeModule], exports: [CommonModule,
            JsonFormsModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatSidenavModule,
            MatListModule,
            ReactiveFormsModule,
            MatCardModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatAutocompleteModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAngularMaterialModule, imports: [CommonModule,
            JsonFormsModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatSidenavModule,
            MatListModule,
            ReactiveFormsModule,
            MatCardModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatAutocompleteModule,
            MatTableModule,
            MatToolbarModule,
            MatTooltipModule,
            MatBadgeModule, CommonModule,
            JsonFormsModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatNativeDateModule,
            MatDatepickerModule,
            MatTabsModule,
            MatSidenavModule,
            MatListModule,
            ReactiveFormsModule,
            MatCardModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatAutocompleteModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: JsonFormsAngularMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        JsonFormsModule,
                        MatFormFieldModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        MatTabsModule,
                        MatSidenavModule,
                        MatListModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatSelectModule,
                        MatButtonModule,
                        MatIconModule,
                        MatAutocompleteModule,
                        MatTableModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatBadgeModule,
                    ],
                    declarations: [
                        BooleanControlRenderer,
                        TextAreaRenderer,
                        TextControlRenderer,
                        NumberControlRenderer,
                        RangeControlRenderer,
                        DateControlRenderer,
                        ToggleControlRenderer,
                        VerticalLayoutRenderer,
                        HorizontalLayoutRenderer,
                        CategorizationTabLayoutRenderer,
                        GroupLayoutRenderer,
                        LabelRenderer,
                        MasterListComponent,
                        JsonFormsDetailComponent,
                        ObjectControlRenderer,
                        AutocompleteControlRenderer,
                        TableRenderer,
                        ArrayLayoutRenderer,
                        LayoutChildrenRenderPropsPipe,
                    ],
                    exports: [
                        CommonModule,
                        JsonFormsModule,
                        MatFormFieldModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        MatTabsModule,
                        MatSidenavModule,
                        MatListModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatSelectModule,
                        MatButtonModule,
                        MatIconModule,
                        MatAutocompleteModule,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [],
                }]
        }] });

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
const angularMaterialRenderers = [
    // controls
    { tester: booleanControlTester, renderer: BooleanControlRenderer },
    { tester: TextControlRendererTester, renderer: TextControlRenderer },
    { tester: TextAreaRendererTester, renderer: TextAreaRenderer },
    { tester: NumberControlRendererTester, renderer: NumberControlRenderer },
    { tester: RangeControlRendererTester, renderer: RangeControlRenderer },
    { tester: DateControlRendererTester, renderer: DateControlRenderer },
    { tester: ToggleControlRendererTester, renderer: ToggleControlRenderer },
    { tester: enumControlTester, renderer: AutocompleteControlRenderer },
    { tester: ObjectControlRendererTester, renderer: ObjectControlRenderer },
    // layouts
    { tester: verticalLayoutTester, renderer: VerticalLayoutRenderer },
    { tester: groupLayoutTester, renderer: GroupLayoutRenderer },
    { tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer },
    { tester: categorizationTester, renderer: CategorizationTabLayoutRenderer },
    { tester: LabelRendererTester, renderer: LabelRenderer },
    { tester: ArrayLayoutRendererTester, renderer: ArrayLayoutRenderer },
    // other
    { tester: masterDetailTester, renderer: MasterListComponent },
    { tester: TableRendererTester, renderer: TableRenderer },
];

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteControlRenderer, BooleanControlRenderer, CategorizationTabLayoutRenderer, DateControlRenderer, DateControlRendererTester, GroupLayoutRenderer, HorizontalLayoutRenderer, JsonFormsAngularMaterialModule, JsonFormsDetailComponent, LabelRenderer, LabelRendererTester, LayoutChildrenRenderPropsPipe, LayoutRenderer, MasterListComponent, NumberControlRenderer, NumberControlRendererTester, ObjectControlRenderer, ObjectControlRendererTester, RangeControlRenderer, RangeControlRendererTester, TableRenderer, TableRendererTester, TextAreaRenderer, TextAreaRendererTester, TextControlRenderer, TextControlRendererTester, ToggleControlRenderer, ToggleControlRendererTester, VerticalLayoutRenderer, angularMaterialRenderers, booleanControlTester, categorizationTester, controlWithoutLabel, enumControlTester, groupLayoutTester, horizontalLayoutTester, masterDetailTester, removeSchemaKeywords, verticalLayoutTester };
//# sourceMappingURL=jsonforms-angular-material.mjs.map
