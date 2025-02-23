"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["src_app_features_profile_profile_module_ts"],{

/***/ 7420:
/*!*******************************************************!*\
  !*** ./src/app/features/profile/profile.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/dialog/confirm-dialog.component */ 7921);
/* harmony import */ var _shared_components_dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/dialog/confirm-freeze-dialog.component */ 4704);
/* harmony import */ var _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/page-layout.component */ 4852);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);












const _c0 = ["confirmDialog"];
const _c1 = ["confirmFreezeDialog"];
const _c2 = ["fileInput"];
function ProfileComponent_ng_container_7_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Willkommen auf deinem K\u00FCnstler Profil. Als K\u00FCnstler kannst du ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_ng_container_7_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Willkomen auf deinem Gast Profil, als Gast kannst du die Seite besuchen und Plakate erstellen, sowie am Polylog teilnehmen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_ng_container_7_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Hallo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Willkommen auf deinem Institutions Profil. Als Institution kannst du neben den Plakaten auch noch Postkarten erstellen und dein Logo auf kreative Weise umgestalten.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Klicke hier und werde kreativ \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_ng_container_7_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Willkommen auf deinem Otto Team Profil.Als Team Mitglied kannst du neue Forschungsfragen einstellen, den Polylog konfigurieren und Benutzerrechte konfigurieren.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_ng_container_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProfileComponent_ng_container_7_div_11_div_5_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProfileComponent_ng_container_7_div_11_div_6_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProfileComponent_ng_container_7_div_11_div_7_Template, 8, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProfileComponent_ng_container_7_div_11_div_8_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hallo, ", user_r5["username"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hallo, ", user_r5["username"] ? user_r5["username"] : user_r5["name"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.role === "K\u00FCnstler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.role === "Gast");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.role === "Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.role === "Team");
  }
}
function ProfileComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 14)(5, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProfileComponent_ng_container_7_div_11_Template, 9, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hallo, ", user_r5["username"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Angemeldet als: ", ctx_r0.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Email: ", user_r5.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.role);
  }
}
function ProfileComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", null, 21)(2, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProfileComponent_form_10_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.forschungsfrage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ProfileComponent_form_10_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_form_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.openConfirmDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Neue Forschungsfrage stellen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_form_10_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.openFreezeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Polylog Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.forschungsfrage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r12.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.VKb2xiYiQ2 ? "Polylog auftauen" : "Polylog einfrieren", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.VKb2xiYiQ2 ? "Inaktiv" : "Aktiv");
  }
}
function ProfileComponent_div_11_div_7_div_1_li_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Kein Logo ausgew\u00E4hlt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_11_div_7_div_1_li_2_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const frage_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", frage_r23.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProfileComponent_div_11_div_7_div_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Logo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProfileComponent_div_11_div_7_div_1_li_2_span_4_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProfileComponent_div_11_div_7_div_1_li_2_img_5_Template, 1, 1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const frage_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", frage_r23.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !frage_r23.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", frage_r23.imagePath);
  }
}
function ProfileComponent_div_11_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProfileComponent_div_11_div_7_div_1_li_2_Template, 6, 3, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r21.paginatedForschungsfragen);
  }
}
function ProfileComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProfileComponent_div_11_div_7_div_1_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 31)(3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_div_11_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.changePage(ctx_r27.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span")(8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_div_11_div_7_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.changePage(ctx_r29.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r20.forschungsfragen.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r20.currentPage, " / ", ctx_r20.totalPages, "");
  }
}
function ProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00DCbersicht Forschungsfragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Hier ist eine \u00DCbersicht von allen bereits gestellten Forschungsfragen, die in der Datenbank gespeichert sind. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_div_11_Template__svg_svg_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.toggleForschungsfragen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProfileComponent_div_11_div_7_Template, 13, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rotated", ctx_r2.isExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isExpanded);
  }
}
class ProfileComponent {
  constructor(auth, toastr, forschungsfrageService, freezePolylogService, userService, roleService, route) {
    this.auth = auth;
    this.toastr = toastr;
    this.forschungsfrageService = forschungsfrageService;
    this.freezePolylogService = freezePolylogService;
    this.userService = userService;
    this.roleService = roleService;
    this.route = route;
    this.forschungsfrage = '';
    this.forschungsfragen = [];
    this.selectedFile = null;
    this.title = 'Decoded ID Token';
    this.user$ = this.auth.user$;
    this.code$ = this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(user => JSON.stringify(user, null, 2)));
    this.role = null;
    this.isAdmin = false;
    this.roleAvatarMap = {
      'Gast': 'https://ottoblob.blob.core.windows.net/images/*image00040 Kopie.png',
      'Institution': 'https://ottoblob.blob.core.windows.net/images/*image00021 Kopie.png',
      'Team': 'https://ottoblob.blob.core.windows.net/images/*image00013 Kopie 2.png',
      'Künstler': 'https://ottoblob.blob.core.windows.net/images/*image00042 Kopie.png'
    };
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalItems = 0;
    this.isExpanded = false;
    this.isDialogOpen = false;
    this.isFreezeDialogOpen = false;
    this.VKb2xiYiQ2 = false;
  }
  ngOnInit() {
    this.subscribeToForschungsfragen();
    this.fetchAllForschungsfragen();
    this.freezePolylogService.getFreezeState().subscribe(state => {
      this.VKb2xiYiQ2 = state;
    });
    this.role = this.roleService.getRole();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    console.log(this.role);
    // Subscribe to user after login
    this.auth.user$.subscribe(user => {
      console.log('User after login:', user);
      if (user) {
        const role = this.role || 'guest'; // Get the selected role or default to guest
        // Create a User object
        const newUser = {
          email: user.email,
          role: role
        };
        // Send user data to the backend
        this.userService.saveUser(newUser).subscribe({
          next: response => console.log('User saved successfully to the database', response),
          error: error => console.error('Error saving user to the database', error)
        });
      }
    });
  }
  toggleForschungsfragen() {
    this.isExpanded = !this.isExpanded;
  }
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  get avatarUrl() {
    return this.roleAvatarMap[this.role || ''];
  }
  fetchAllForschungsfragen() {
    this.forschungsfrageService.getAllForschungsfragen().subscribe();
  }
  changePage(page) {
    if (this.itemsPerPage > 0) this.currentPage = page;
  }
  get paginatedForschungsfragen() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.forschungsfragen.slice(startIndex, startIndex + this.itemsPerPage);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        this.toastr.warning('Wähle ein Logo für die Forschungsfrage!', 'Achtung');
        return;
      }
      this.selectedFile = file;
    }
  }
  subscribeToForschungsfragen() {
    this.forschungsfrageService.forschungsfragen$.subscribe(fragen => {
      this.forschungsfragen = fragen;
      this.totalItems = fragen.length;
    }, error => console.error('Error fetching Forschungsfragen:', error));
  }
  clearFileInput() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.value = '';
      this.selectedFile = null;
    }
  }
  openConfirmDialog() {
    if (this.selectedFile) {
      this.confirmDialog.imageFile = this.selectedFile;
      this.confirmDialog.forschungsfrage = this.forschungsfrage;
      this.confirmDialog.isOpen = true;
    } else {
      console.log("No File Selected");
      this.toastr.info('Kein Logo für die Forschungsfrage ausgewählt!', 'Info');
    }
  }
  closeDialog(success) {
    this.isDialogOpen = false;
    this.isFreezeDialogOpen = false;
    if (success) {
      this.toastr.success('Forschungsfrage erfolgreich gestellt!', 'Success');
      this.forschungsfrage = '';
      this.selectedFile = null;
    }
  }
  openFreezeDialog() {
    this.isFreezeDialogOpen = true;
  }
  unfreezePolylog() {
    this.freezePolylogService.setFreezeState(false);
    if (this.VKb2xiYiQ2) {
      this.openFreezeDialog();
    } else {
      this.openFreezeDialog();
    }
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.ForschungsFrageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.FreezePolylogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  viewQuery: function ProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.confirmDialog = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.confirmFreezeDialog = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    }
  },
  decls: 16,
  vars: 7,
  consts: [[1, "content-layout"], ["id", "page-title", 1, "content__title"], [1, "content__body"], ["id", "page1", 2, "height", "90vh"], ["id", "page-description"], [4, "ngIf"], ["class", "forschungsfragen", 4, "ngIf"], [3, "isOpen", "close", "onSuccessfulUpload"], ["confirmDialog", ""], [3, "isOpen", "close"], ["confirmFreezeDialog", ""], [1, "profile-grid"], [1, "profile__header"], ["alt", "Profile", 1, "profile__avatar", 2, "margin-top", "50px", 3, "src"], [1, "profile__headline"], [1, "profile__title"], [1, "profile__role"], [1, "profile__description"], ["style", "margin-top:5vh;", 4, "ngIf"], [2, "margin-top", "5vh"], ["routerLink", "/plakate/mein-plakat", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "button--secondary", 2, "border", "1px solid black"], ["frageForm", "ngForm"], ["id", "input-forschungsfrage", "type", "text", "name", "forschungsfrage", "required", "", "placeholder", "Neue Forschungsfrage...", 2, "margin-bottom", "50px", "width", "350px", 3, "ngModel", "ngModelChange"], ["forschungsfrageInput", "ngModel"], ["type", "file", "accept", "image/*", 2, "display", "block", "margin-bottom", "0px", "border", "none", 3, "change"], ["fileInput", ""], [1, "submit-button", 3, "disabled", "click"], [1, "submit-button", 3, "click"], [1, "forschungsfragen"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-down", 3, "click"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"], [1, "pagination-controls"], [1, "controlls-button", 3, "click"], ["color", "black", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-left"], ["fill-rule", "evenodd", "d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"], [2, "font-size", "1.5rem"], ["color", "black", "xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"], [4, "ngFor", "ngForOf"], ["style", "height: 50px", "alt", "Uploaded Image", 3, "src", 4, "ngIf"], ["alt", "Uploaded Image", 2, "height", "50px", 3, "src"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-page-layout")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Profil ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProfileComponent_ng_container_7_Template, 12, 5, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProfileComponent_form_10_Template, 17, 4, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProfileComponent_div_11_Template, 8, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-confirm-dialog", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function ProfileComponent_Template_app_confirm_dialog_close_12_listener($event) {
        return ctx.closeDialog($event);
      })("onSuccessfulUpload", function ProfileComponent_Template_app_confirm_dialog_onSuccessfulUpload_12_listener() {
        return ctx.clearFileInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-confirm-freeze-dialog", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("close", function ProfileComponent_Template_app_confirm_freeze_dialog_close_14_listener($event) {
        return ctx.closeDialog($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, ctx.user$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", ctx.isDialogOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isOpen", ctx.isFreezeDialogOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialogComponent, _shared_components_dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationFreezeDialogComponent, _shared_components_page_layout_component__WEBPACK_IMPORTED_MODULE_3__.PageLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 649:
/*!****************************************************!*\
  !*** ./src/app/features/profile/profile.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared */ 1679);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 7420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class ProfileModule {}
ProfileModule.ɵfac = function ProfileModule_Factory(t) {
  return new (t || ProfileModule)();
};
ProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfileModule
});
ProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: '',
    component: _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_profile_profile_module_ts.js.map