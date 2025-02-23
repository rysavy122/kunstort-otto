"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_home_home_module_ts"],{

/***/ 8463:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_auth0_features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/auth0-features.component */ 7066);
/* harmony import */ var _shared_components_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/home.component */ 2622);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);




class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 3,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-page-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-home-banner")(2, "app-auth0-features");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_shared_components_auth0_features_component__WEBPACK_IMPORTED_MODULE_0__.Auth0FeaturesComponent, _shared_components_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__.PageLayoutComponent],
  encapsulation: 2
});

/***/ }),

/***/ 9762:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class HomeModule {}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_home_module_ts.js.map