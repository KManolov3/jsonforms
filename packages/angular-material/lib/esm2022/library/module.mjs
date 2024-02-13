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
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { AutocompleteControlRenderer } from './controls/autocomplete.renderer';
import { BooleanControlRenderer } from './controls/boolean.renderer';
import { DateControlRenderer } from './controls/date.renderer';
import { NumberControlRenderer } from './controls/number.renderer';
import { RangeControlRenderer } from './controls/range.renderer';
import { TextAreaRenderer } from './controls/textarea.renderer';
import { TextControlRenderer } from './controls/text.renderer';
import { ToggleControlRenderer } from './controls/toggle.renderer';
import { LabelRenderer } from './other/label.renderer';
import { JsonFormsDetailComponent } from './other/master-detail/detail';
import { MasterListComponent } from './other/master-detail/master';
import { ObjectControlRenderer } from './other/object.renderer';
import { TableRenderer } from './other/table.renderer';
import { CategorizationTabLayoutRenderer } from './layouts/categorization-layout.renderer';
import { GroupLayoutRenderer } from './layouts/group-layout.renderer';
import { HorizontalLayoutRenderer } from './layouts/horizontal-layout.renderer';
import { VerticalLayoutRenderer } from './layouts/vertical-layout.renderer';
import { ArrayLayoutRenderer } from './layouts/array-layout.renderer';
import { LayoutChildrenRenderPropsPipe } from './layouts';
import * as i0 from "@angular/core";
export class JsonFormsAngularMaterialModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnJhcnkvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNE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Z0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLCtCQUErQjt3QkFDL0IsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLDJCQUEyQjt3QkFDM0IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IE1hdFNsaWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRm9ybXNNb2R1bGUgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlQ29udHJvbFJlbmRlcmVyIH0gZnJvbSAnLi9jb250cm9scy9hdXRvY29tcGxldGUucmVuZGVyZXInO1xuaW1wb3J0IHsgQm9vbGVhbkNvbnRyb2xSZW5kZXJlciB9IGZyb20gJy4vY29udHJvbHMvYm9vbGVhbi5yZW5kZXJlcic7XG5pbXBvcnQgeyBEYXRlQ29udHJvbFJlbmRlcmVyIH0gZnJvbSAnLi9jb250cm9scy9kYXRlLnJlbmRlcmVyJztcbmltcG9ydCB7IE51bWJlckNvbnRyb2xSZW5kZXJlciB9IGZyb20gJy4vY29udHJvbHMvbnVtYmVyLnJlbmRlcmVyJztcbmltcG9ydCB7IFJhbmdlQ29udHJvbFJlbmRlcmVyIH0gZnJvbSAnLi9jb250cm9scy9yYW5nZS5yZW5kZXJlcic7XG5pbXBvcnQgeyBUZXh0QXJlYVJlbmRlcmVyIH0gZnJvbSAnLi9jb250cm9scy90ZXh0YXJlYS5yZW5kZXJlcic7XG5pbXBvcnQgeyBUZXh0Q29udHJvbFJlbmRlcmVyIH0gZnJvbSAnLi9jb250cm9scy90ZXh0LnJlbmRlcmVyJztcbmltcG9ydCB7IFRvZ2dsZUNvbnRyb2xSZW5kZXJlciB9IGZyb20gJy4vY29udHJvbHMvdG9nZ2xlLnJlbmRlcmVyJztcbmltcG9ydCB7IExhYmVsUmVuZGVyZXIgfSBmcm9tICcuL290aGVyL2xhYmVsLnJlbmRlcmVyJztcbmltcG9ydCB7IEpzb25Gb3Jtc0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vb3RoZXIvbWFzdGVyLWRldGFpbC9kZXRhaWwnO1xuaW1wb3J0IHsgTWFzdGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb3RoZXIvbWFzdGVyLWRldGFpbC9tYXN0ZXInO1xuaW1wb3J0IHsgT2JqZWN0Q29udHJvbFJlbmRlcmVyIH0gZnJvbSAnLi9vdGhlci9vYmplY3QucmVuZGVyZXInO1xuaW1wb3J0IHsgVGFibGVSZW5kZXJlciB9IGZyb20gJy4vb3RoZXIvdGFibGUucmVuZGVyZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcml6YXRpb25UYWJMYXlvdXRSZW5kZXJlciB9IGZyb20gJy4vbGF5b3V0cy9jYXRlZ29yaXphdGlvbi1sYXlvdXQucmVuZGVyZXInO1xuaW1wb3J0IHsgR3JvdXBMYXlvdXRSZW5kZXJlciB9IGZyb20gJy4vbGF5b3V0cy9ncm91cC1sYXlvdXQucmVuZGVyZXInO1xuaW1wb3J0IHsgSG9yaXpvbnRhbExheW91dFJlbmRlcmVyIH0gZnJvbSAnLi9sYXlvdXRzL2hvcml6b250YWwtbGF5b3V0LnJlbmRlcmVyJztcbmltcG9ydCB7IFZlcnRpY2FsTGF5b3V0UmVuZGVyZXIgfSBmcm9tICcuL2xheW91dHMvdmVydGljYWwtbGF5b3V0LnJlbmRlcmVyJztcbmltcG9ydCB7IEFycmF5TGF5b3V0UmVuZGVyZXIgfSBmcm9tICcuL2xheW91dHMvYXJyYXktbGF5b3V0LnJlbmRlcmVyJztcbmltcG9ydCB7IExheW91dENoaWxkcmVuUmVuZGVyUHJvcHNQaXBlIH0gZnJvbSAnLi9sYXlvdXRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBKc29uRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCb29sZWFuQ29udHJvbFJlbmRlcmVyLFxuICAgIFRleHRBcmVhUmVuZGVyZXIsXG4gICAgVGV4dENvbnRyb2xSZW5kZXJlcixcbiAgICBOdW1iZXJDb250cm9sUmVuZGVyZXIsXG4gICAgUmFuZ2VDb250cm9sUmVuZGVyZXIsXG4gICAgRGF0ZUNvbnRyb2xSZW5kZXJlcixcbiAgICBUb2dnbGVDb250cm9sUmVuZGVyZXIsXG4gICAgVmVydGljYWxMYXlvdXRSZW5kZXJlcixcbiAgICBIb3Jpem9udGFsTGF5b3V0UmVuZGVyZXIsXG4gICAgQ2F0ZWdvcml6YXRpb25UYWJMYXlvdXRSZW5kZXJlcixcbiAgICBHcm91cExheW91dFJlbmRlcmVyLFxuICAgIExhYmVsUmVuZGVyZXIsXG4gICAgTWFzdGVyTGlzdENvbXBvbmVudCxcbiAgICBKc29uRm9ybXNEZXRhaWxDb21wb25lbnQsXG4gICAgT2JqZWN0Q29udHJvbFJlbmRlcmVyLFxuICAgIEF1dG9jb21wbGV0ZUNvbnRyb2xSZW5kZXJlcixcbiAgICBUYWJsZVJlbmRlcmVyLFxuICAgIEFycmF5TGF5b3V0UmVuZGVyZXIsXG4gICAgTGF5b3V0Q2hpbGRyZW5SZW5kZXJQcm9wc1BpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSnNvbkZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Gb3Jtc0FuZ3VsYXJNYXRlcmlhbE1vZHVsZSB7fVxuIl19