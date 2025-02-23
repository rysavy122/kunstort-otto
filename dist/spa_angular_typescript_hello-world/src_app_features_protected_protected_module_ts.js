"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_protected_protected_module_ts"],{

/***/ 8292:
/*!***********************************************************!*\
  !*** ./src/app/features/protected/protected.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedComponent": () => (/* binding */ ProtectedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var _shared_components_code_snippet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/code-snippet.component */ 7605);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);




class ProtectedComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.message = '';
  }
  ngOnInit() {
    this.messageService.getProtectedResource().subscribe(response => {
      const {
        data,
        error
      } = response;
      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }
      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
ProtectedComponent.ɵfac = function ProtectedComponent_Factory(t) {
  return new (t || ProtectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
ProtectedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProtectedComponent,
  selectors: [["app-protected"]],
  decls: 17,
  vars: 1,
  consts: [[1, "content-layout"], ["id", "page-title", 1, "content__title"], [1, "content__body"], ["id", "page-description"], ["title", "Protected Message", 3, "code"], [1, "submit-button"]],
  template: function ProtectedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-page-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Protected Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "p", 3)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "This page retrieves a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "protected message");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " from an external API.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span")(12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Only authenticated users can access this page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-code-snippet", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Forschungsfrage stellen");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("code", ctx.message);
    }
  },
  dependencies: [_shared_components_code_snippet_component__WEBPACK_IMPORTED_MODULE_1__.CodeSnippetComponent, _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_2__.PageLayoutComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1336:
/*!********************************************************!*\
  !*** ./src/app/features/protected/protected.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedModule": () => (/* binding */ ProtectedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _protected_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protected.component */ 8292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class ProtectedModule {}
ProtectedModule.ɵfac = function ProtectedModule_Factory(t) {
  return new (t || ProtectedModule)();
};
ProtectedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProtectedModule
});
ProtectedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _protected_component__WEBPACK_IMPORTED_MODULE_1__.ProtectedComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProtectedModule, {
    declarations: [_protected_component__WEBPACK_IMPORTED_MODULE_1__.ProtectedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_protected_protected_module_ts.js.map