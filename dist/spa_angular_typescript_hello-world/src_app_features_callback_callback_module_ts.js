"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_callback_callback_module_ts"],{

/***/ 6029:
/*!**************************************************************!*\
  !*** ./src/app/features/callback/callback-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackRoutingModule": () => (/* binding */ CallbackRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callback.component */ 4601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: "profile",
  component: _callback_component__WEBPACK_IMPORTED_MODULE_0__.CallbackComponent
}];
class CallbackRoutingModule {}
CallbackRoutingModule.ɵfac = function CallbackRoutingModule_Factory(t) {
  return new (t || CallbackRoutingModule)();
};
CallbackRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CallbackRoutingModule
});
CallbackRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CallbackRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4601:
/*!*********************************************************!*\
  !*** ./src/app/features/callback/callback.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackComponent": () => (/* binding */ CallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/navigation/desktop/nav-bar.component */ 6993);
/* harmony import */ var _shared_components_navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/navigation/mobile/mobile-nav-bar.component */ 1287);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);






function CallbackComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-page-layout")(2, "div", 2)(3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "p", 5)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const error_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](error_r3.message);
  }
}
function CallbackComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-nav-bar")(2, "app-mobile-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c0 = ["*"];
class CallbackComponent {
  constructor(auth) {
    this.auth = auth;
    this.error$ = this.auth.error$;
  }
}
CallbackComponent.ɵfac = function CallbackComponent_Factory(t) {
  return new (t || CallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
CallbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CallbackComponent,
  selectors: [["app-callback"]],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf", "ngIfElse"], ["noError", ""], [1, "content-layout"], ["id", "page-title", 1, "content__title"], [1, "content__body"], ["id", "page-description"], [1, "page-layout"], [1, "page-layout__content"]],
  template: function CallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CallbackComponent_ng_container_0_Template, 9, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CallbackComponent_ng_template_2_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, ctx.error$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _shared_components_navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.MobileNavBarComponent, _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__.PageLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6874:
/*!******************************************************!*\
  !*** ./src/app/features/callback/callback.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackModule": () => (/* binding */ CallbackModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback.component */ 4601);
/* harmony import */ var _callback_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback-routing.module */ 6029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class CallbackModule {}
CallbackModule.ɵfac = function CallbackModule_Factory(t) {
  return new (t || CallbackModule)();
};
CallbackModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CallbackModule
});
CallbackModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _callback_routing_module__WEBPACK_IMPORTED_MODULE_2__.CallbackRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CallbackModule, {
    declarations: [_callback_component__WEBPACK_IMPORTED_MODULE_1__.CallbackComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _callback_routing_module__WEBPACK_IMPORTED_MODULE_2__.CallbackRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_callback_callback_module_ts.js.map