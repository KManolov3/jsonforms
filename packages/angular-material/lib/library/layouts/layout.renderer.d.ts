import { OnDestroy, OnInit, ChangeDetectorRef, PipeTransform } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer } from '@jsonforms/angular';
import { Layout, OwnPropsOfRenderer, JsonSchema } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class LayoutRenderer<T extends Layout> extends JsonFormsBaseRenderer<T> implements OnInit, OnDestroy {
    private jsonFormsService;
    protected changeDetectionRef: ChangeDetectorRef;
    hidden: boolean;
    label: string | undefined;
    private subscription;
    constructor(jsonFormsService: JsonFormsAngularService, changeDetectionRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackElement(_index: number, renderProp: OwnPropsOfRenderer): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutRenderer<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutRenderer<any>, "ng-component", never, {}, {}, never, never, false, never>;
}
export declare class LayoutChildrenRenderPropsPipe implements PipeTransform {
    transform(uischema: Layout, schema: JsonSchema, path: string): OwnPropsOfRenderer[];
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutChildrenRenderPropsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LayoutChildrenRenderPropsPipe, "layoutChildrenRenderProps", false>;
}
//# sourceMappingURL=layout.renderer.d.ts.map