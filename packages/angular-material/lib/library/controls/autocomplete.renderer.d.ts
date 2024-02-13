import { OnInit } from '@angular/core';
import type { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { OwnPropsOfControl, RankedTester } from '@jsonforms/core';
import type { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
export declare class AutocompleteControlRenderer extends JsonFormsControl implements OnInit {
    options: string[];
    filteredOptions: Observable<string[]>;
    shouldFilter: boolean;
    focused: boolean;
    constructor(jsonformsService: JsonFormsAngularService);
    getEventValue: (event: any) => any;
    ngOnInit(): void;
    updateFilter(event: any): void;
    onSelect(ev: MatAutocompleteSelectedEvent): void;
    filter(val: string): string[];
    protected getOwnProps(): OwnPropsOfAutoComplete;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteControlRenderer, "AutocompleteControlRenderer", never, { "options": { "alias": "options"; "required": false; }; }, {}, never, never, false, never>;
}
export declare const enumControlTester: RankedTester;
interface OwnPropsOfAutoComplete extends OwnPropsOfControl {
    options: string[];
}
export {};
//# sourceMappingURL=autocomplete.renderer.d.ts.map