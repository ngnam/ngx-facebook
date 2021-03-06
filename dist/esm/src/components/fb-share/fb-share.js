var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { FBMLAttribute, FBMLComponent } from '../fbml-component';
import * as i0 from "@angular/core";
/**
 * @name Share Button
 * @shortdesc Share button component
 * @fbdoc https://developers.facebook.com/docs/plugins/share-button
 * @description
 * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
 * @usage
 * ```html
 * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
 * ```
 */
var FBShareComponent = /** @class */ (function (_super) {
    __extends(FBShareComponent, _super);
    function FBShareComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-share-button') || this;
    }
    FBShareComponent.ɵfac = function FBShareComponent_Factory(t) { return new (t || FBShareComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FBShareComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBShareComponent, selectors: [["fb-share"]], inputs: { href: "href", layout: "layout", mobileIframe: "mobileIframe", size: "size" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBShareComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "href", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "layout", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBShareComponent.prototype, "mobileIframe", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBShareComponent.prototype, "size", void 0);
    return FBShareComponent;
}(FBMLComponent));
export { FBShareComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBShareComponent, [{
        type: Component,
        args: [{
                selector: 'fb-share',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { href: [{
            type: Input
        }], layout: [{
            type: Input
        }], mobileIframe: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=fb-share.js.map