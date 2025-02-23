"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_public_public_module_ts"],{

/***/ 5664:
/*!*****************************************************!*\
  !*** ./src/app/features/public/public.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicComponent": () => (/* binding */ PublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class PublicComponent {
  constructor() {}
  ngOnInit() {}
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) {
  return new (t || PublicComponent)();
};
PublicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PublicComponent,
  selectors: [["app-public"]],
  decls: 24,
  vars: 0,
  consts: [[1, "content-layout"], ["id", "page-title", 1, "content__title"], [1, "content__body"], ["id", "page-description"], [2, "font-size", "1.3em", "font-weight", "bold"], ["routerLink", "polylog", "target", "_blank", "rel", "noopener noreferrer", 1, "page-polylog__button"]],
  template: function PublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-page-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Polylog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "p", 3)(6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Polylog ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Unter dem Wort Polylog verstehen wir einen Austausch zwischen vielen, eine Unterhaltung unter mehr als zwei Teilnehmenden.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br")(11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " In unserem Polylog sollen sich alle Menschen, die mit OTTO im Kontakt sind, oder noch in Kontakt kommen wollen, gegenseitig informieren und inspirieren k\u00F6nnen zu allem, was gerade in und um OTTO passiert. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br")(14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Zu der jeweils aktuellen Forschungsfrage, die ein*e K\u00FCnstler*in mitbringt, wird dann nicht nur in Gruppen in den physischen Denk- und Aktionsr\u00E4umen von OTTO geforscht, gearbeitet, erfahren, gedacht und kommuniziert. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br")(17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Der Polylog soll das Geschehen \u00FCber diese R\u00E4ume hinaustragen und erm\u00F6glichen, dass auch Besucher*innen auf das Geschehen einwirken k\u00F6nnen. Er soll noch mehr Menschen auf den k\u00FCnstlerischen Forschungsreisen in und um Ottersberg mit einbeziehen und vor allem das Erlebnis dokumentieren. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br")(20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Hier kann kommentiert werden, Material geteilt und aufeinander Bezug genommen werden und der Prozess sich so weiterentwickeln und verdichten. Am Ende einer Forschungsphase wird der Polylog dann zur Grundlage f\u00FCr die finale Dokumentation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " zum Polylog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.PageLayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 9841:
/*!**************************************************!*\
  !*** ./src/app/features/public/public.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.component */ 5664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class PublicModule {}
PublicModule.ɵfac = function PublicModule_Factory(t) {
  return new (t || PublicModule)();
};
PublicModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PublicModule
});
PublicModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _public_component__WEBPACK_IMPORTED_MODULE_1__.PublicComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_public_component__WEBPACK_IMPORTED_MODULE_1__.PublicComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_public_public_module_ts.js.map