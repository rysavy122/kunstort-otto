"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_plakate_plakate_module_ts"],{

/***/ 8571:
/*!****************************************************!*\
  !*** ./src/app/features/plakate/plakate.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlakateModule": () => (/* binding */ PlakateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _plakate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plakate */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class PlakateModule {}
PlakateModule.ɵfac = function PlakateModule_Factory(t) {
  return new (t || PlakateModule)();
};
PlakateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PlakateModule
});
PlakateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _plakate__WEBPACK_IMPORTED_MODULE_1__.PlakateComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PlakateModule, {
    declarations: [_plakate__WEBPACK_IMPORTED_MODULE_1__.PlakateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7884:
/*!*********************************************!*\
  !*** ./src/app/features/plakate/plakate.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlakateComponent": () => (/* binding */ PlakateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class PlakateComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.message = 'Hier werden Plakate erstellt...';
  }
  ngOnInit() {}
}
PlakateComponent.ɵfac = function PlakateComponent_Factory(t) {
  return new (t || PlakateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.MessageService));
};
PlakateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PlakateComponent,
  selectors: [["app-plakate"]],
  decls: 17,
  vars: 0,
  consts: [[1, "content-layout"], ["id", "page-title", 1, "content__title"], [1, "content__body"], ["id", "page-description"], ["routerLink", "mein-plakat", "target", "_blank", "rel", "noopener noreferrer", 1, "page-plakate__button"], [1, "bubble"], [1, "content"]],
  template: function PlakateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-page-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Digitale PLAKATWERKSTATT:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " In OTTOs digitaler Plakatwerkstatt darf jede*r, ob Kursteilnehmer*in oder Besucher*in, eigene Plakate gestalten. Dazu k\u00F6nnen Fotos und Bilder hochgeladen und genutzt werden, es stehen Stickerpakete bereit, die OTTO zu der aktuellen Forschungsfrage erstellt, und mit verschiedenen Pinselfarben und -gr\u00F6\u00DFen kann auch direkt auf der digitalen Bildfl\u00E4che neues entstehen. Die gestalteten Plakate k\u00F6nnen gespeichert und heruntergeladen werden. So wird die Plakatgalerie immer gr\u00F6\u00DFer und Du kannst Deinen eigenen kreativen Einfluss in den Ort geben. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Los gehts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Werde teil des TRANSFORMATIONS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "ZENTRUM:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Plakate sind f\u00FCr OTTO ein wichtiger Transformationskanal, um entstandene Werke weiter bzw. zur\u00FCck in den Ort zu geben. Mal mit offenen Fragestellungen, mal als rein bildlicher Dialog. Auf Plakaten entstehen neue Zusammenh\u00E4nge und Begegnungen, die vor allem auf OTTOs Plakats\u00E4ule mitten in Ottersberg auftauchen, aber immer wieder auch an anderen Orten. So ist stets f\u00FCr alle Menschen sichtbar, was gerade bei OTTO passiert, welche Themen bearbeitet, welche Fragen erforscht werden. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_1__.PageLayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_features_plakate_plakate_module_ts.js.map