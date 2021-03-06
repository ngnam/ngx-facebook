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
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
var FBSaveComponent = /** @class */ (function (_super) {
    __extends(FBSaveComponent, _super);
    function FBSaveComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-save') || this;
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        _this.uri = window.location.href;
        return _this;
    }
    FBSaveComponent.ɵfac = function FBSaveComponent_Factory(t) { return new (t || FBSaveComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    FBSaveComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FBSaveComponent, selectors: [["fb-save"]], inputs: { uri: "uri" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FBSaveComponent_Template(rf, ctx) { }, encapsulation: 2 });
    __decorate([
        FBMLAttribute,
        __metadata("design:type", String)
    ], FBSaveComponent.prototype, "uri", void 0);
    return FBSaveComponent;
}(FBMLComponent));
export { FBSaveComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FBSaveComponent, [{
        type: Component,
        args: [{
                selector: 'fb-save',
                template: ''
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { uri: [{
            type: Input
        }] }); })();
//# sourceMappingURL=fb-save.js.map