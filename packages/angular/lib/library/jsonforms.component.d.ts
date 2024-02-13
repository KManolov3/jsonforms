import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { JsonFormsState, OwnPropsOfRenderer, UISchemaElement } from '@jsonforms/core';
import { JsonFormsBaseRenderer } from './base.renderer';
import { JsonFormsAngularService } from './jsonforms.service';
import * as i0 from "@angular/core";
export declare class JsonFormsOutlet extends JsonFormsBaseRenderer<UISchemaElement> implements OnInit, OnDestroy {
    private viewContainerRef;
    private componentFactoryResolver;
    private jsonformsService;
    private subscription;
    private previousProps;
    constructor(viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, jsonformsService: JsonFormsAngularService);
    set renderProps(renderProps: OwnPropsOfRenderer);
    ngOnInit(): void;
    update(state: JsonFormsState): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonFormsOutlet, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<JsonFormsOutlet, "jsonforms-outlet", never, { "renderProps": { "alias": "renderProps"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=jsonforms.component.d.ts.map