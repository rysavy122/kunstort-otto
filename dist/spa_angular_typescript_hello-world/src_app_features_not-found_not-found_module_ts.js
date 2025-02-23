"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_not-found_not-found_module_ts"],{

/***/ 5707:
/*!***********************************************************!*\
  !*** ./src/app/features/not-found/not-found.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);


class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-not-found"]],
  decls: 4,
  vars: 0,
  consts: [[1, "content-layout"], ["id", "page-title", 1, "content__title"]],
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-page-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8924:
/*!********************************************************!*\
  !*** ./src/app/features/not-found/not-found.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ 5707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class NotFoundModule {}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
  return new (t || NotFoundModule)();
};
NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotFoundModule
});
NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundModule, {
    declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_not-found_not-found_module_ts.js.map