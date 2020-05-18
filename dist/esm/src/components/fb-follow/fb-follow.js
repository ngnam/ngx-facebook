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
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
var FBFollowComponent = /** @class */ (function (_super) {
    __extends(FBFollowComponent, _super);
    function FBFollowComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-follow') || this;
    }
    FBFollowComponent.ɵfac = function FBFollowComponent_Factory(t) { return new (t || FBFollowComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FBFollowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBFollowComponent, selectors: [["fb-follow"]], inputs: { colorScheme: "colorScheme", href: "href", kidDirectedSite: "kidDirectedSite", layout: "layout", showFaces: "showFaces", size: "size", width: "width" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBFollowComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "colorScheme", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "href", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", Boolean)
    ], FBFollowComponent.prototype, "kidDirectedSite", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "layout", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "showFaces", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "size", void 0);
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBFollowComponent.prototype, "width", void 0);
    return FBFollowComponent;
}(FBMLComponent));
export { FBFollowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBFollowComponent, [{
        type: Component,
        args: [{
                selector: 'fb-follow',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { colorScheme: [{
            type: Input
        }], href: [{
            type: Input
        }], kidDirectedSite: [{
            type: Input
        }], layout: [{
            type: Input
        }], showFaces: [{
            type: Input
        }], size: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
//# sourceMappingURL=fb-follow.js.map