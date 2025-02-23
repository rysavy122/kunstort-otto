"use strict";
(self["webpackChunkspa_angular_typescript_hello_world"] = self["webpackChunkspa_angular_typescript_hello_world"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  pathMatch: 'full',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.module */ 9762)).then(m => m.HomeModule)
}, {
  path: 'plakate',
  pathMatch: 'full',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_plakate_plakate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/plakate/plakate.module */ 8571)).then(m => m.PlakateModule)
}, {
  path: 'plakate/mein-plakat',
  pathMatch: 'full',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_plakate_mein-plakat_mein-plakat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/plakate/mein-plakat/mein-plakat.module */ 826)).then(m => m.MeinPlakatModule)
}, {
  path: 'profile',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/profile/profile.module */ 649)).then(m => m.ProfileModule),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'public',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_public_public_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/public/public.module */ 9841)).then(m => m.PublicModule)
}, {
  path: 'public/polylog',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_public_polylog_polylog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/public/polylog/polylog.module */ 6353)).then(m => m.PolylogModule)
}, {
  path: 'protected',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_protected_protected_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/protected/protected.module */ 1336)).then(m => m.ProtectedModule),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin.module */ 6394)).then(m => m.AdminModule),
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'callback',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_callback_callback_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/callback/callback.module */ 6874)).then(m => m.CallbackModule)
}, {
  path: '**',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/not-found/not-found.module */ 8924)).then(m => m.NotFoundModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/user.service */ 8386);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_page_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/page-loader.component */ 5839);






function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
  }
}
class AppComponent {
  constructor(auth, userService) {
    this.auth = auth;
    this.userService = userService;
    this.isAuth0Loading$ = this.auth.isLoading$;
  }
  handleKeyDown(event) {
    console.log(`Key: ${event.key}, Ctrl: ${event.ctrlKey}, Shift: ${event.shiftKey}`);
    // Check for Ctrl + Shift + L
    if (event.ctrlKey && event.shiftKey && event.key === 'L') {
      event.preventDefault(); // Prevent any default behavior associated with this key combination
      this.promptForAdminCode();
    }
  }
  promptForAdminCode() {
    const adminCode = prompt('Kunstort Otto Admin Code:');
    const correctCode = 'OTTO-admin'; // Replace with your secure code
    if (adminCode === correctCode) {
      localStorage.setItem('isAdmin', 'true');
      alert('Administrator Zugriff gewährleistet.');
      this.triggerAuth0Login();
    } else {
      alert('Code ist falsch. Zugriff verweigert.');
    }
  }
  triggerAuth0Login() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile'
      },
      authorizationParams: {
        prompt: 'login'
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  decls: 4,
  vars: 4,
  consts: [["class", "page-layout", 4, "ngIf", "ngIfElse"], ["auth0Loaded", ""], [1, "page-layout"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.isAuth0Loading$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_components_page_loader_component__WEBPACK_IMPORTED_MODULE_1__.PageLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ 1679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthHttpInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthModule.forRoot({
    ..._environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.auth0,
    httpInterceptor: {
      allowedList: [`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/admin`, `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/protected`]
    }
  }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__.AuthModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentPositionService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.CommentPositionService),
/* harmony export */   "ExternalApiService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ExternalApiService),
/* harmony export */   "ForschungsFrageService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ForschungsFrageService),
/* harmony export */   "FreezePolylogService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.FreezePolylogService),
/* harmony export */   "KommentarModel": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_0__.KommentarModel),
/* harmony export */   "KommentarService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.KommentarService),
/* harmony export */   "MediaPositionService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.MediaPositionService),
/* harmony export */   "MediaService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.MediaService),
/* harmony export */   "MessageService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.MessageService),
/* harmony export */   "PlakatService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.PlakatService),
/* harmony export */   "RoleService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.RoleService),
/* harmony export */   "ScrollService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ScrollService),
/* harmony export */   "UserService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.UserService)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 3902);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8138);



/***/ }),

/***/ 9106:
/*!***************************************************!*\
  !*** ./src/app/core/models/api-response.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4054:
/*!************************************************!*\
  !*** ./src/app/core/models/app-error.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2813:
/*!*****************************************************!*\
  !*** ./src/app/core/models/auth0-resource.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1071:
/*!*******************************************************!*\
  !*** ./src/app/core/models/comment-position.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3449:
/*!*******************************************!*\
  !*** ./src/app/core/models/file.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3902:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KommentarModel": () => (/* reexport safe */ _kommentar_model__WEBPACK_IMPORTED_MODULE_12__.KommentarModel)
/* harmony export */ });
/* harmony import */ var _api_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-response.model */ 9106);
/* harmony import */ var _app_error_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error.model */ 4054);
/* harmony import */ var _auth0_resource_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth0-resource.model */ 2813);
/* harmony import */ var _message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.model */ 2255);
/* harmony import */ var _request_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-config.model */ 4425);
/* harmony import */ var _user_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.model */ 8266);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.model */ 9249);
/* harmony import */ var _comment_position_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment-position.model */ 1071);
/* harmony import */ var _media_position_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media-position.model */ 3760);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file.model */ 3449);
/* harmony import */ var _sticker_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sticker.model */ 8014);
/* harmony import */ var _logo_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logo.model */ 7101);
/* harmony import */ var _kommentar_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kommentar.model */ 2722);
/* harmony import */ var _plakat_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plakat.model */ 3723);
/* harmony import */ var _postCard_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postCard.model */ 1367);
















/***/ }),

/***/ 2722:
/*!************************************************!*\
  !*** ./src/app/core/models/kommentar.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KommentarModel": () => (/* binding */ KommentarModel)
/* harmony export */ });
class KommentarModel {}

/***/ }),

/***/ 7101:
/*!*******************************************!*\
  !*** ./src/app/core/models/logo.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3760:
/*!*****************************************************!*\
  !*** ./src/app/core/models/media-position.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2255:
/*!**********************************************!*\
  !*** ./src/app/core/models/message.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3723:
/*!*********************************************!*\
  !*** ./src/app/core/models/plakat.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1367:
/*!***********************************************!*\
  !*** ./src/app/core/models/postCard.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4425:
/*!*****************************************************!*\
  !*** ./src/app/core/models/request-config.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8014:
/*!**********************************************!*\
  !*** ./src/app/core/models/sticker.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8266:
/*!***************************************************!*\
  !*** ./src/app/core/models/user-profile.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9249:
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9306:
/*!***********************************************************!*\
  !*** ./src/app/core/services/comment-position.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentPositionService": () => (/* binding */ CommentPositionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class CommentPositionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/CommentPositions/`;
  }
  getCommentPositions() {
    return this.http.get(this.apiUrl);
  }
  getCommentPositionById(commentId) {
    return this.http.get(`${this.apiUrl}${commentId}`);
  }
  saveCommentPosition(position) {
    return this.http.post(this.apiUrl, position);
  }
}
CommentPositionService.ɵfac = function CommentPositionService_Factory(t) {
  return new (t || CommentPositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CommentPositionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CommentPositionService,
  factory: CommentPositionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3769:
/*!*******************************************************!*\
  !*** ./src/app/core/services/external-api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalApiService": () => (/* binding */ ExternalApiService)
/* harmony export */ });
/* harmony import */ var _Users_denisrysavy_Projects_kunstort_otto_frontend_otto_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 4294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ExternalApiService {
  constructor(http) {
    this.http = http;
    this.callExternalApiWithAxios = /*#__PURE__*/function () {
      var _ref = (0,_Users_denisrysavy_Projects_kunstort_otto_frontend_otto_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (options) {
        try {
          const response = yield axios__WEBPACK_IMPORTED_MODULE_1___default()(options.config);
          const {
            data
          } = response;
          return {
            data,
            error: null
          };
        } catch (error) {
          if (axios__WEBPACK_IMPORTED_MODULE_1___default().isAxiosError(error) && error.response) {
            const axiosError = error;
            const {
              response
            } = axiosError;
            let message = 'http request failed';
            if (response && response.statusText) {
              message = response.statusText;
            }
            if (axiosError.message) {
              message = axiosError.message;
            }
            if (response && response.data && response.data.message) {
              message = response.data.message;
            }
            return {
              data: null,
              error: {
                message
              }
            };
          }
          return {
            data: null,
            error: {
              message: error.message
            }
          };
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.callExternalApi = config => {
      return this.http.request(config.method, config.url, {
        headers: {
          ...config.headers
        }
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(data => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          data: data,
          error: null
        });
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
        if (err.error && err.status) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
            data: null,
            error: err.error
          });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          data: null,
          error: {
            message: err.message
          }
        });
      }));
    };
  }
}
ExternalApiService.ɵfac = function ExternalApiService_Factory(t) {
  return new (t || ExternalApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
ExternalApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ExternalApiService,
  factory: ExternalApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9081:
/*!**********************************************************!*\
  !*** ./src/app/core/services/forschungsfrage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForschungsFrageService": () => (/* binding */ ForschungsFrageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ForschungsFrageService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/forschungsfragen`;
    this.forschungsfragenSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.forschungsfragen$ = this.forschungsfragenSource.asObservable();
  }
  createForschungsfrage(forschungsfrage, imageFile) {
    const formData = new FormData();
    formData.append('title', forschungsfrage);
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
    return this.http.post(this.apiUrl, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(newFrage => {
      this.forschungsfragenSource.next([...this.forschungsfragenSource.value, newFrage]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
  }
  getAllForschungsfragen() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(fragen => {
      this.forschungsfragenSource.next(fragen);
    }));
  }
  getForschungsfrageById(id) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }
  getLatestForschungsfrage() {
    const url = `${this.apiUrl}/latest`;
    return this.http.get(url);
  }
  handleError(error) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
  }
}
ForschungsFrageService.ɵfac = function ForschungsFrageService_Factory(t) {
  return new (t || ForschungsFrageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
ForschungsFrageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ForschungsFrageService,
  factory: ForschungsFrageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8306:
/*!*********************************************************!*\
  !*** ./src/app/core/services/freeze-polylog.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreezePolylogService": () => (/* binding */ FreezePolylogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FreezePolylogService {
  constructor() {
    this.freezeKey = 'VKb2xiYiQ2';
    this.freezeState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getInitialState());
  }
  getInitialState() {
    const storedState = localStorage.getItem(this.freezeKey);
    return storedState ? JSON.parse(storedState) : false;
  }
  setFreezeState(isFrozen) {
    this.freezeState.next(isFrozen);
    localStorage.setItem(this.freezeKey, JSON.stringify(isFrozen));
  }
  getFreezeState() {
    return this.freezeState.asObservable();
  }
}
FreezePolylogService.ɵfac = function FreezePolylogService_Factory(t) {
  return new (t || FreezePolylogService)();
};
FreezePolylogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FreezePolylogService,
  factory: FreezePolylogService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentPositionService": () => (/* reexport safe */ _comment_position_service__WEBPACK_IMPORTED_MODULE_5__.CommentPositionService),
/* harmony export */   "ExternalApiService": () => (/* reexport safe */ _external_api_service__WEBPACK_IMPORTED_MODULE_0__.ExternalApiService),
/* harmony export */   "ForschungsFrageService": () => (/* reexport safe */ _forschungsfrage_service__WEBPACK_IMPORTED_MODULE_2__.ForschungsFrageService),
/* harmony export */   "FreezePolylogService": () => (/* reexport safe */ _freeze_polylog_service__WEBPACK_IMPORTED_MODULE_3__.FreezePolylogService),
/* harmony export */   "KommentarService": () => (/* reexport safe */ _kommentar_service__WEBPACK_IMPORTED_MODULE_4__.KommentarService),
/* harmony export */   "MediaPositionService": () => (/* reexport safe */ _media_position_service__WEBPACK_IMPORTED_MODULE_6__.MediaPositionService),
/* harmony export */   "MediaService": () => (/* reexport safe */ _media_service__WEBPACK_IMPORTED_MODULE_7__.MediaService),
/* harmony export */   "MessageService": () => (/* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService),
/* harmony export */   "PlakatService": () => (/* reexport safe */ _plakat_service__WEBPACK_IMPORTED_MODULE_11__.PlakatService),
/* harmony export */   "RoleService": () => (/* reexport safe */ _role_service__WEBPACK_IMPORTED_MODULE_8__.RoleService),
/* harmony export */   "ScrollService": () => (/* reexport safe */ _scroll_service__WEBPACK_IMPORTED_MODULE_10__.ScrollService),
/* harmony export */   "UserService": () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_9__.UserService)
/* harmony export */ });
/* harmony import */ var _external_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-api.service */ 3769);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 1245);
/* harmony import */ var _forschungsfrage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forschungsfrage.service */ 9081);
/* harmony import */ var _freeze_polylog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freeze-polylog.service */ 8306);
/* harmony import */ var _kommentar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kommentar.service */ 8689);
/* harmony import */ var _comment_position_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-position.service */ 9306);
/* harmony import */ var _media_position_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media-position.service */ 6243);
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media.service */ 255);
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./role.service */ 5111);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ 8386);
/* harmony import */ var _scroll_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll.service */ 5488);
/* harmony import */ var _plakat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plakat.service */ 6095);














/***/ }),

/***/ 8689:
/*!****************************************************!*\
  !*** ./src/app/core/services/kommentar.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KommentarService": () => (/* binding */ KommentarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class KommentarService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/kommentare`;
    this.kommentareSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.kommentare$ = this.kommentareSource.asObservable();
  }
  addKommentar(kommentar) {
    return this.http.post(this.apiUrl, kommentar).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(newKommentar => {
      this.kommentareSource.next([...this.kommentareSource.value, newKommentar]);
    }));
  }
  deleteKommentar(id) {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getAllKommentare() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(kommentare => {
      this.kommentareSource.next(kommentare);
    }));
  }
}
KommentarService.ɵfac = function KommentarService_Factory(t) {
  return new (t || KommentarService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
KommentarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: KommentarService,
  factory: KommentarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6243:
/*!*********************************************************!*\
  !*** ./src/app/core/services/media-position.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaPositionService": () => (/* binding */ MediaPositionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MediaPositionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/MediaPositions/`;
  }
  getMediaPositions() {
    return this.http.get(this.apiUrl);
  }
  getMediaPositionById(commentId) {
    return this.http.get(`${this.apiUrl}${commentId}`);
  }
  saveMediaPosition(position) {
    return this.http.post(this.apiUrl, position);
  }
}
MediaPositionService.ɵfac = function MediaPositionService_Factory(t) {
  return new (t || MediaPositionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MediaPositionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaPositionService,
  factory: MediaPositionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 255:
/*!************************************************!*\
  !*** ./src/app/core/services/media.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaService": () => (/* binding */ MediaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MediaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/kommentare/`;
  }
  uploadMedia(mediaFile, forschungsfrageId) {
    const formData = new FormData();
    formData.append('media', mediaFile, mediaFile.name);
    // Include ForschungsfrageId if required by your API
    formData.append('forschungsfrageId', forschungsfrageId.toString());
    const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/kommentare/uploadmedia`;
    return this.http.post(endpoint, formData);
  }
  getAllMedia(forschungsfrageId) {
    return this.http.get(this.apiUrl + 'media/' + forschungsfrageId);
  }
  deleteMedia(fileName) {
    const decodedFileName = decodeURIComponent(fileName);
    const encodedFileName = encodeURIComponent(decodedFileName);
    return this.http.delete(`${this.apiUrl}deleteMedia/${encodedFileName}`, {
      responseType: 'text'
    });
  }
}
MediaService.ɵfac = function MediaService_Factory(t) {
  return new (t || MediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MediaService,
  factory: MediaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1245:
/*!**************************************************!*\
  !*** ./src/app/core/services/message.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _external_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-api.service */ 3769);




class MessageService {
  constructor(externalApiService) {
    this.externalApiService = externalApiService;
    this.getPublicResource = () => {
      const config = {
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/public`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.externalApiService.callExternalApi(config).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(response => {
        const {
          data,
          error
        } = response;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          data: data ? data : null,
          error
        });
      }));
    };
    this.getProtectedResource = () => {
      const config = {
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/protected`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.externalApiService.callExternalApi(config).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(response => {
        const {
          data,
          error
        } = response;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          data: data ? data : null,
          error
        });
      }));
    };
    this.getAdminResource = () => {
      const config = {
        url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/admin`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      };
      return this.externalApiService.callExternalApi(config).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(response => {
        const {
          data,
          error
        } = response;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          data: data ? data : null,
          error
        });
      }));
    };
  }
  getAllMessages() {
    const config = {
      url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages`,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    };
    return this.externalApiService.callExternalApi(config);
  }
  getMessageById(id) {
    const config = {
      url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages/${id}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    };
    return this.externalApiService.callExternalApi(config);
  }
  createMessage(message) {
    const config = {
      url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/messages`,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: message
    };
    return this.externalApiService.callExternalApi(config);
  }
}
MessageService.ɵfac = function MessageService_Factory(t) {
  return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_external_api_service__WEBPACK_IMPORTED_MODULE_1__.ExternalApiService));
};
MessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: MessageService,
  factory: MessageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6095:
/*!*************************************************!*\
  !*** ./src/app/core/services/plakat.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlakatService": () => (/* binding */ PlakatService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PlakatService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/plakate/`;
  }
  getPlakatById(plakatId) {
    return this.http.get(`${this.apiUrl}/${plakatId}`);
  }
  createPlakat(plakat) {
    return this.http.post(this.apiUrl, plakat);
  }
  updatePlakat(plakatId, drawingJson) {
    return this.http.put(`${this.apiUrl}/${plakatId}`, drawingJson);
  }
  deletePlakat(plakatId) {
    return this.http.delete(`${this.apiUrl}/${plakatId}`);
  }
  addSticker(plakatId, sticker) {
    return this.http.post(`${this.apiUrl}/${plakatId}/stickers`, sticker);
  }
}
PlakatService.ɵfac = function PlakatService_Factory(t) {
  return new (t || PlakatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
PlakatService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PlakatService,
  factory: PlakatService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5111:
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class RoleService {
  constructor(auth, http) {
    this.auth = auth;
    this.http = http;
    this.roleKey = 'userRole';
    this.roles = [];
  }
  setRole(role) {
    if (!localStorage.getItem(this.roleKey)) {
      localStorage.setItem(this.roleKey, role);
    }
  }
  getRole() {
    return localStorage.getItem(this.roleKey);
  }
  clearRole() {
    localStorage.removeItem(this.roleKey);
  }
}
RoleService.ɵfac = function RoleService_Factory(t) {
  return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RoleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: RoleService,
  factory: RoleService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5488:
/*!*************************************************!*\
  !*** ./src/app/core/services/scroll.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollService": () => (/* binding */ ScrollService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ScrollService {
  constructor() {
    this.featuresSection = null;
  }
  setFeaturesSection(element) {
    this.featuresSection = element;
  }
  scrollToFeatures() {
    if (this.featuresSection) {
      const offsetTop = this.featuresSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        top: 500,
        behavior: 'smooth'
      });
    }
  }
}
ScrollService.ɵfac = function ScrollService_Factory(t) {
  return new (t || ScrollService)();
};
ScrollService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollService,
  factory: ScrollService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
 // Import environment


class UserService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/users`; // Base URL for user-related endpoints
  }
  // Use the User interface in the saveUser method
  saveUser(user) {
    const endpoint = `${this.apiUrl}/save`; // Complete URL to the save user endpoint
    console.log("User saved");
    return this.http.post(endpoint, user);
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2814:
/*!**********************************************************************!*\
  !*** ./src/app/features/public/polylog/comment/comment.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentComponent": () => (/* binding */ CommentComponent)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ 7707);
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/Draggable */ 1821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var src_app_core_services_kommentar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/kommentar.service */ 8689);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







const _c0 = ["commentDialog"];
const _c1 = ["draggableElement"];
function CommentComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.editKommentar(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.openReplyDialog(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_div_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.deleteKommentar(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r3.isMenuOpen);
  }
}
function CommentComponent_div_0_div_15__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_div_15__svg_svg_8_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.openReplyDialog(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CommentComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CommentComponent_div_0_div_15__svg_svg_8_Template, 2, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_div_15_Template__svg_svg_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.deleteKommentar(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const reply_r12 = ctx.$implicit;
    const kommentar_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](reply_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.getSafeHtml(reply_r12.comment), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Datum: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, reply_r12.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", kommentar_r1.id !== undefined);
  }
}
function CommentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1, 2)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_0_Template__svg_svg_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const kommentar_r1 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.toggleMenu(kommentar_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CommentComponent_div_0_div_13_Template, 7, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CommentComponent_div_0_div_15_Template, 11, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const kommentar_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", kommentar_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](kommentar_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.getSafeHtml(kommentar_r1.comment), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Datum: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, kommentar_r1.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isMenuOpen && ctx_r0.activeCommentId === kommentar_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", kommentar_r1.replies);
  }
}
gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_Draggable__WEBPACK_IMPORTED_MODULE_3__["default"]);
class CommentComponent {
  constructor(sanitizer, kommentarService) {
    this.sanitizer = sanitizer;
    this.kommentarService = kommentarService;
    this.isMenuOpen = false;
    this.activeCommentId = null;
    this.kommentare = [];
    this.errorMessage = 'Fehler beim laden der Forschungsfrage.';
    this.isDialogOpen = false;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.initializeDraggable();
  }
  loadKommentare() {
    this.kommentarService.getAllKommentare().subscribe(kommentare => {
      this.kommentare = kommentare.map(k => this.assignRandomPosition(k));
      setTimeout(() => this.initializeDraggable(), 0);
    });
  }
  assignRandomPosition(comment, index = 0) {
    const x = Math.floor(Math.random() * window.innerWidth - 250);
    const y = Math.floor(Math.random() * window.innerHeight - 1050);
    const transformStyle = `translateX(${x}px) translateY(${y}px)`;
    return {
      ...comment,
      style: {
        transform: transformStyle,
        backgroundColor: this.generateRandomColor(),
        color: '#000000'
      }
    };
  }
  initializeDraggable() {
    this.draggableElements.forEach(element => {
      gsap_Draggable__WEBPACK_IMPORTED_MODULE_3__["default"].create(element.nativeElement, {
        type: "x,y",
        bounds: window,
        inertia: true
      });
    });
  }
  isColorUnacceptable(color) {
    const unacceptableColors = ['#000000', '#ffffff', '#e21c52'];
    const colorDistanceThreshold = 150;
    for (let unacceptable of unacceptableColors) {
      if (this.getColorDistance(color, unacceptable) < colorDistanceThreshold) {
        return true;
      }
    }
    return false;
  }
  getColorDistance(color1, color2) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    if (!rgb1 || !rgb2) return 0;
    let distance = 0;
    distance += Math.pow(rgb1.r - rgb2.r, 2);
    distance += Math.pow(rgb1.g - rgb2.g, 2);
    distance += Math.pow(rgb1.b - rgb2.b, 2);
    return Math.sqrt(distance);
  }
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  generateRandomColor() {
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const part = Math.floor(Math.random() * 256).toString(16);
      color += part.padStart(2, '0');
    }
    if (this.isColorUnacceptable(color)) {
      return this.generateRandomColor();
    }
    return color;
  }
  getSafeHtml(content) {
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
  }
  toggleMenu(commentId) {
    this.isMenuOpen = this.activeCommentId !== commentId || !this.isMenuOpen;
    this.activeCommentId = commentId;
  }
  editKommentar(commentId) {
    // Logic to handle editing a comment
  }
  openDialog(parentId) {
    this.isDialogOpen = true;
    this.commentDialog.parentKommentarId = parentId;
  }
  openReplyDialog(parentId) {
    this.openDialog(parentId);
    this.isMenuOpen = false;
  }
  trackById(index, item) {
    return item.id; // assuming `id` is a unique identifier for each comment
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
  deleteKommentar(id) {
    this.kommentarService.deleteKommentar(id).subscribe(() => {
      // Update the state of the comments and replies
      this.kommentare.forEach((kommentar, index) => {
        if (kommentar.id === id) {
          // Delete the top-level comment
          this.kommentare.splice(index, 1);
        } else {
          // Check and delete the reply if it matches the id
          kommentar.replies = kommentar.replies.filter(reply => reply.id !== id);
        }
      });
    });
  }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) {
  return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_kommentar_service__WEBPACK_IMPORTED_MODULE_0__.KommentarService));
};
CommentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CommentComponent,
  selectors: [["app-comment"]],
  viewQuery: function CommentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.commentDialog = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggableElements = _t);
    }
  },
  inputs: {
    comment: "comment"
  },
  decls: 1,
  vars: 2,
  consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "commentar", 3, "ngStyle"], ["draggableElement", ""], [3, "innerHTML"], [1, "icons"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-three-dots", 3, "click"], ["d", "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"], ["class", "menu", 3, "show", 4, "ngIf"], [1, "replies"], ["class", "reply-comment", 4, "ngFor", "ngForOf"], [1, "menu"], [3, "click"], [1, "reply-comment"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-reply-fill", "viewBox", "0 0 16 16", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-trash3-fill", 3, "click"], ["d", "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-reply-fill", 3, "click"], ["d", "M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"]],
  template: function CommentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CommentComponent_div_0_Template, 16, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kommentare)("ngForTrackBy", ctx.trackById);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 3021:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/auth0-feature.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth0FeatureComponent": () => (/* binding */ Auth0FeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class Auth0FeatureComponent {
  constructor() {
    this.roleSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectRole() {
    this.roleSelected.emit(this.role);
    console.log(this.role);
  }
}
Auth0FeatureComponent.ɵfac = function Auth0FeatureComponent_Factory(t) {
  return new (t || Auth0FeatureComponent)();
};
Auth0FeatureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Auth0FeatureComponent,
  selectors: [["app-auth0-feature"]],
  inputs: {
    title: "title",
    description: "description",
    resourceUrl: "resourceUrl",
    icon: "icon",
    role: "role"
  },
  outputs: {
    roleSelected: "roleSelected"
  },
  decls: 7,
  vars: 3,
  consts: [[1, "auth0-feature", 3, "click"], [1, "auth0-feature__headline"], ["alt", "external link icon", 1, "auth0-feature__icon", 3, "src"], [1, "auth0-feature__description"]],
  template: function Auth0FeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Auth0FeatureComponent_Template_div_click_0_listener() {
        return ctx.selectRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7066:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/auth0-features.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth0FeaturesComponent": () => (/* binding */ Auth0FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var _auth0_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-feature.component */ 3021);
/* harmony import */ var _dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/otto-admin-dialog.component */ 6471);






class Auth0FeaturesComponent {
  constructor(auth, roleService, userService, elRef, scrollService) {
    this.auth = auth;
    this.roleService = roleService;
    this.userService = userService;
    this.elRef = elRef;
    this.scrollService = scrollService;
    this.isAdminAuthenticated = false;
    this.isAdminDialogOpen = false; // Controls the dialog visibility
  }

  ngAfterViewInit() {
    const featuresSectionElement = this.elRef.nativeElement.querySelector('#featuresSection');
    if (featuresSectionElement) {
      this.scrollService.setFeaturesSection(featuresSectionElement); // Register the element reference
    }
  }

  handleRoleSelected(role) {
    if (role === 'Team' && !this.isAdminAuthenticated) {
      this.isAdminDialogOpen = true; // Open the dialog
      return;
    }
    // Proceed with sign-up for non-team roles or if already authenticated
    this.selectedRole = role;
    this.roleService.setRole(role);
    this.handleSignUp();
  }
  handleAdminAuthSuccess() {
    this.isAdminAuthenticated = true; // Mark as authenticated
    this.isAdminDialogOpen = false; // Close the dialog
    this.selectedRole = 'Team'; // Set the role to 'Team'
    this.handleSignUp(); // Proceed with sign-up
  }

  handleSignUp() {
    const role = this.selectedRole || 'guest'; // Default to guest if no role selected
    console.log('handleSignUp triggered with role:', role);
    this.auth.user$.subscribe(user => {
      if (user) {
        const email = user.email;
        const newUser = {
          email: email,
          role: role
        };
        this.userService.saveUser(newUser).subscribe({
          next: () => console.log('User saved successfully to the database'),
          error: error => console.error('Error saving user to the database', error)
        });
      }
    });
    this.auth.loginWithRedirect({
      appState: {
        target: `/profile?role=${role}`
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
        ui_locales: 'de'
      }
    });
  }
}
Auth0FeaturesComponent.ɵfac = function Auth0FeaturesComponent_Factory(t) {
  return new (t || Auth0FeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.ScrollService));
};
Auth0FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: Auth0FeaturesComponent,
  selectors: [["app-auth0-features"]],
  decls: 10,
  vars: 5,
  consts: [["id", "featuresSection", 1, "auth0-features"], [1, "auth0-features__title", 2, "color", "black"], [1, "auth0-features__grid"], ["featuresSection", ""], ["title", "Als Besucher*in", "description", "Melde dich als Besucher*in an, wenn du bereits an OTTOs Angeboten teilnimmst, du das in Zukunft vorhast, oder alles lieber mit etwas Abstand beobachtest. Als Besucher*in kannst du hier auf dem interaktiven Teil unserer Website aktiv teilhaben am Polylog, Erfahrungen aus den OTTO R\u00E4umen teilen, dich selbst in Bezug setzen oder auch einen k\u00FCnstlerischen Impuls auf Plakaten umsetzen und so in den Ort hineingeben. Dabei freut OTTO sich \u00FCber jeden Besuch, ob einmalig, regelm\u00E4\u00DFig, fl\u00FCchtig oder intensiv. Alle Stimmen sind willkommen..", "icon", "../../../assets/img/OTTO GIF 1.gif", 3, "role", "roleSelected"], ["title", "Als Institution", "description", "Als F\u00F6rderer*in oder Kooperationspartner*in kannst du mit diesem Zugang das Logo deiner Institution hochladen und durch einen Algorithmus fragmentieren und neu anordnen lassen. ", "icon", "../../../assets/img/OTTO GIF 3.gif", 3, "role", "roleSelected"], ["title", "Als Team", "description", "Teammitglieder von OTTO k\u00F6nnen \u00FCber diesen Zugang Kursdokumentationen teilen, den Polylog ordnen, Impulse hineingeben..", "icon", "../../../assets/img/OTTO GIF 2.gif", 3, "role", "roleSelected"], ["title", "Als K\u00FCnstler*in", "description", "Dieser Zugang erm\u00F6glicht dir als gastierende*r K\u00FCnstler*in die Gestaltung des Polylograumes mit der aktuellen Forschungsfrage und deinem Design. Du kannst Impulse hineingeben, die sich an der Hauptfragestellung orientieren und Bildmaterial aus dem Kursgeschehen hinzuf\u00FCgen. ", "icon", "../../../assets/img/OTTO GIF 4.gif", 3, "role", "roleSelected"], [3, "isOpen", "close", "adminAuthSuccess"]],
  template: function Auth0FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "W\u00E4hle eine Rolle aus und mache mit.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2, 3)(5, "app-auth0-feature", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("roleSelected", function Auth0FeaturesComponent_Template_app_auth0_feature_roleSelected_5_listener($event) {
        return ctx.handleRoleSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-auth0-feature", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("roleSelected", function Auth0FeaturesComponent_Template_app_auth0_feature_roleSelected_6_listener($event) {
        return ctx.handleRoleSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-auth0-feature", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("roleSelected", function Auth0FeaturesComponent_Template_app_auth0_feature_roleSelected_7_listener($event) {
        return ctx.handleRoleSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-auth0-feature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("roleSelected", function Auth0FeaturesComponent_Template_app_auth0_feature_roleSelected_8_listener($event) {
        return ctx.handleRoleSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-otto-admin-dialog", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function Auth0FeaturesComponent_Template_app_otto_admin_dialog_close_9_listener() {
        return ctx.isAdminDialogOpen = false;
      })("adminAuthSuccess", function Auth0FeaturesComponent_Template_app_otto_admin_dialog_adminAuthSuccess_9_listener() {
        return ctx.handleAdminAuthSuccess();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("role", "Gast");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("role", "Institution");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("role", "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("role", "K\u00FCnstler");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", ctx.isAdminDialogOpen);
    }
  },
  dependencies: [_auth0_feature_component__WEBPACK_IMPORTED_MODULE_1__.Auth0FeatureComponent, _dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_2__.OttoAdminDialogComponent],
  encapsulation: 2
});

/***/ }),

/***/ 1099:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/buttons/login-button.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginButtonComponent": () => (/* binding */ LoginButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);



class LoginButtonComponent {
  constructor(auth) {
    this.auth = auth;
    this.loginClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  handleLogin() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile'
      },
      authorizationParams: {
        prompt: 'login'
      }
    });
    this.loginClick.emit(); // Emit event when login button is clicked
  }
}

LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) {
  return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
LoginButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginButtonComponent,
  selectors: [["app-login-button"]],
  outputs: {
    loginClick: "loginClick"
  },
  decls: 2,
  vars: 0,
  consts: [[1, "button__login", 3, "click"]],
  template: function LoginButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() {
        return ctx.handleLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anmelden");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 500:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/buttons/logout-button.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutButtonComponent": () => (/* binding */ LogoutButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);



class LogoutButtonComponent {
  constructor(auth, doc) {
    this.auth = auth;
    this.doc = doc;
  }
  handleLogout() {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin
      }
    });
  }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) {
  return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
LogoutButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LogoutButtonComponent,
  selectors: [["app-logout-button"]],
  decls: 2,
  vars: 0,
  consts: [[1, "button__logout", 3, "click"]],
  template: function LogoutButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutButtonComponent_Template_button_click_0_listener() {
        return ctx.handleLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ausloggen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9089:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/buttons/signup-button.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupButtonComponent": () => (/* binding */ SignupButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);




const _c0 = ["featuresSection"];
class SignupButtonComponent {
  constructor(auth, roleService, scrollService) {
    this.auth = auth;
    this.roleService = roleService;
    this.scrollService = scrollService;
    this.signupClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.scrollToFeatures = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  handleSignUp() {
    const role = this.roleService.getRole();
    if (!role) {
      this.scrollService.scrollToFeatures();
      console.log("scroll into role");
    } else {
      this.auth.loginWithRedirect({
        appState: {
          target: '/profile'
        },
        authorizationParams: {
          prompt: 'login',
          screen_hint: 'signup',
          ui_locales: 'de'
        }
      });
    }
    this.signupClick.emit();
  }
}
SignupButtonComponent.ɵfac = function SignupButtonComponent_Factory(t) {
  return new (t || SignupButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.ScrollService));
};
SignupButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupButtonComponent,
  selectors: [["app-signup-button"]],
  viewQuery: function SignupButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.featuresSection = _t.first);
    }
  },
  outputs: {
    signupClick: "signupClick",
    scrollToFeatures: "scrollToFeatures"
  },
  decls: 2,
  vars: 0,
  consts: [[1, "button__sign-up", 3, "click"]],
  template: function SignupButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupButtonComponent_Template_button_click_0_listener() {
        return ctx.handleSignUp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Registrieren");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7605:
/*!*************************************************************!*\
  !*** ./src/app/shared/components/code-snippet.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeSnippetComponent": () => (/* binding */ CodeSnippetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CodeSnippetComponent {}
CodeSnippetComponent.ɵfac = function CodeSnippetComponent_Factory(t) {
  return new (t || CodeSnippetComponent)();
};
CodeSnippetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CodeSnippetComponent,
  selectors: [["app-code-snippet"]],
  inputs: {
    code: "code",
    title: "title"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "code-snippet"], [1, "code-snippet__title"], [1, "code-snippet__container"], [1, "code-snippet__wrapper"], [1, "code-snippet__body"]],
  template: function CodeSnippetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "pre", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 2164:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/dialog/comment-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentDialogComponent": () => (/* binding */ CommentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_kommentar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/kommentar.service */ 8689);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function CommentDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Teile deine Meinung mit uns.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Verfasse ein Kommentar und nehme an der Diskussion teil.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CommentDialogComponent_div_0_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.commentTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CommentDialogComponent_div_0_Template_textarea_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.editorContent = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentDialogComponent_div_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Best\u00E4tigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentDialogComponent_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.commentTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.editorContent);
  }
}
class CommentDialogComponent {
  constructor(kommentarService) {
    this.kommentarService = kommentarService;
    this.isOpen = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.commentSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.editorContent = '';
  }
  handleSubmit() {
    if (!this.editorContent.trim()) return;
    const newComment = {
      title: this.commentTitle?.trim() || undefined,
      comment: this.editorContent,
      parentKommentarId: this.parentKommentarId
    };
    this.kommentarService.addKommentar(newComment).subscribe({
      next: savedComment => {
        this.commentSubmitted.emit(savedComment);
        this.closeDialog();
      },
      error: error => {
        console.error('Error saving comment:', error);
      }
    });
  }
  closeDialog() {
    this.close.emit();
  }
}
CommentDialogComponent.ɵfac = function CommentDialogComponent_Factory(t) {
  return new (t || CommentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_kommentar_service__WEBPACK_IMPORTED_MODULE_0__.KommentarService));
};
CommentDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CommentDialogComponent,
  selectors: [["app-comment-dialog"]],
  inputs: {
    isOpen: "isOpen",
    parentKommentarId: "parentKommentarId"
  },
  outputs: {
    close: "close",
    commentSubmitted: "commentSubmitted"
  },
  decls: 1,
  vars: 1,
  consts: [["id", "modal-container", 4, "ngIf"], ["id", "modal-container"], [1, "modal-backdrop"], [1, "modal"], ["action", "\n\n          "], [1, "inputs"], ["type", "text", "placeholder", "Titel...", 1, "comment-title-input", 2, "margin-bottom", "25px", "width", "90%", 3, "ngModel", "ngModelChange"], ["placeholder", "Kommentar...", 3, "ngModel", "ngModelChange"], [1, "buttons"], [1, "submit-button", 3, "click"], [1, "close-button", 3, "click"]],
  template: function CommentDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CommentDialogComponent_div_0_Template, 16, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  encapsulation: 2
});

/***/ }),

/***/ 7921:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/dialog/confirm-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogComponent": () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ConfirmationDialogComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Neue Forschungsfrage wird gestellt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfirmationDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConfirmationDialogComponent_div_0_div_2_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Stelle eine neue Forschungsfrage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Die aktuelle Diskussion mit allen Kommentaren wird dann gel\u00F6scht.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Achtung ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br")(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br")(16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Neue Forschungsfrage stellen ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Best\u00E4tigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationDialogComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
  }
}
class ConfirmationDialogComponent {
  constructor(forschungsfrageService, toastr) {
    this.forschungsfrageService = forschungsfrageService;
    this.toastr = toastr;
    this.forschungsfrage = '';
    this.isOpen = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onSuccessfulUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLoading = false;
  }
  handleSubmit() {
    if (!this.forschungsfrage.trim()) {
      return;
    }
    this.isLoading = true;
    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage, this.imageFile).subscribe({
      next: response => {
        console.log('Forschungsfrage saved:', response);
        this.onSuccessfulUpload.emit();
        this.closeDialog(true);
        this.isLoading = false;
      },
      error: error => {
        console.error('Error saving Forschungsfrage:', error);
        this.toastr.error('Fehler beim Stellen der Forschungsfrage!', 'Error');
        this.isLoading = false;
        this.closeDialog(false);
      }
    });
  }
  closeDialog(success = false) {
    this.close.emit(success);
    console.log("Zurück Works");
    this.isOpen = false;
  }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) {
  return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.ForschungsFrageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
ConfirmationDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ConfirmationDialogComponent,
  selectors: [["app-confirm-dialog"]],
  inputs: {
    imageFile: "imageFile",
    forschungsfrage: "forschungsfrage",
    isOpen: "isOpen"
  },
  outputs: {
    close: "close",
    onSuccessfulUpload: "onSuccessfulUpload"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal-backdrop"], ["class", "loading-indicator", 4, "ngIf"], [1, "modal"], [1, "submit-button", 3, "click"], [1, "close-button", 3, "click"], [1, "loading-indicator"], [1, "loading-dots"]],
  template: function ConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmationDialogComponent_div_0_Template, 22, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 4704:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/dialog/confirm-freeze-dialog.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationFreezeDialogComponent": () => (/* binding */ ConfirmationFreezeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_freeze_polylog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/freeze-polylog.service */ 8306);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ConfirmationFreezeDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br")(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationFreezeDialogComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationFreezeDialogComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.VKb2xiYiQ2 ? "Taue den Polylog auf." : "Friere den Polylog ein.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.VKb2xiYiQ2 ? "Wenn du den Polylog auftaust, k\u00F6nnen wieder neue Beitr\u00E4ge oder Antworten erstellt werden." : "Wenn du den Polylog einfrierst k\u00F6nnen keine neuen Beitr\u00E4ge oder Antworten erstellt werden.", " Die aktuelle Diskussion mit allen Kommentaren wird dann ", ctx_r0.VKb2xiYiQ2 ? "wieder aktiviert" : "eingefroren", ",. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.VKb2xiYiQ2 ? "Polylog auftauen?" : "Polylog einfrieren?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.VKb2xiYiQ2 ? "Auftauen" : "Einfrieren");
  }
}
class ConfirmationFreezeDialogComponent {
  constructor(freezePolylogService, toastr) {
    this.freezePolylogService = freezePolylogService;
    this.toastr = toastr;
    this.isOpen = false;
    this.VKb2xiYiQ2 = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.stateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.freezePolylogService.getFreezeState().subscribe(state => {
      this.VKb2xiYiQ2 = state;
    });
  }
  handleSubmit() {
    this.freezePolylogService.setFreezeState(!this.VKb2xiYiQ2);
    this.VKb2xiYiQ2 ? this.toastr.success('Polylog erfolgreich eingefroren!', 'Success') : this.toastr.success('Polylog erfolgreich aufgetaut!', 'Success');
    this.closeDialog();
  }
  closeDialog(success = false) {
    this.close.emit(success);
  }
}
ConfirmationFreezeDialogComponent.ɵfac = function ConfirmationFreezeDialogComponent_Factory(t) {
  return new (t || ConfirmationFreezeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_freeze_polylog_service__WEBPACK_IMPORTED_MODULE_0__.FreezePolylogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
ConfirmationFreezeDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ConfirmationFreezeDialogComponent,
  selectors: [["app-confirm-freeze-dialog"]],
  inputs: {
    isOpen: "isOpen"
  },
  outputs: {
    close: "close",
    stateChanged: "stateChanged"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal-backdrop"], [1, "modal"], [1, "submit-button", 3, "click"], [1, "close-button", 3, "click"]],
  template: function ConfirmationFreezeDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmationFreezeDialogComponent_div_0_Template, 15, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 895:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/dialog/delete-dialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ 3825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function DeleteDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Starte eine Neue Diskussion.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Willst du wirklich eine Neue Diskussion starten ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Die aktuelle Diskussion mit allen Kommentaren wird dann gel\u00F6scht. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Achtung ! Dies kann nicht r\u00FCckg\u00E4ngig gemacht werden !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Best\u00E4tigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteDialogComponent_div_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class DeleteDialogComponent {
  constructor(forschungsfrageService) {
    this.forschungsfrageService = forschungsfrageService;
    this.forschungsfragen = [];
    this.forschungsfrage = '';
    this.isOpen = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  handleSubmit() {
    if (!this.forschungsfrage.trim()) {
      return;
    }
    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage, this.imageFile).subscribe({
      next: response => {
        console.log('Forschungsfrage saved:', response);
        this.closeDialog(true);
      },
      error: error => {
        console.error('Error saving Forschungsfrage:', error);
        this.closeDialog(false);
      }
    });
  }
  closeDialog(success = false) {
    this.close.emit(success);
  }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
  return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core__WEBPACK_IMPORTED_MODULE_0__.ForschungsFrageService));
};
DeleteDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeleteDialogComponent,
  selectors: [["app-delete-dialog"]],
  inputs: {
    forschungsfrage: "forschungsfrage",
    imageFile: "imageFile",
    isOpen: "isOpen"
  },
  outputs: {
    close: "close"
  },
  decls: 1,
  vars: 1,
  consts: [["id", "modal-container", 4, "ngIf"], ["id", "modal-container"], [1, "modal-backdrop"], [1, "modal"], [1, "submit-button", 3, "click"], [1, "close-button", 3, "click"]],
  template: function DeleteDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DeleteDialogComponent_div_0_Template, 17, 0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 797:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog/new-poster-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPosterDialogComponent": () => (/* binding */ NewPosterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function NewPosterDialogComponent_div_0_ul_20_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_ul_20_li_1_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const color_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.selectColor(color_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, color_r4), " ");
  }
}
function NewPosterDialogComponent_div_0_ul_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPosterDialogComponent_div_0_ul_20_li_1_Template, 3, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.colors);
  }
}
function NewPosterDialogComponent_div_0_ul_28_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_ul_28_li_1_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const color_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.selectBackgroundColor(color_r8, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, color_r8), " ");
  }
}
function NewPosterDialogComponent_div_0_ul_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPosterDialogComponent_div_0_ul_28_li_1_Template, 3, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.backgroundColors);
  }
}
const _c0 = function (a0) {
  return {
    focused: a0
  };
};
function NewPosterDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fang ein neues Plakat an.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Willst du wirklich eine Neues Plakat anfangen ? Das aktuelle Plakat wird gel\u00F6scht. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br")(9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Achtung ! Dies kann nicht r\u00FCckg\u00E4ngig gemacht werden !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "W\u00E4hle eine Rahmen Farbe:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.toggleDropdown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewPosterDialogComponent_div_0_ul_20_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "W\u00E4hle eine Hintergrundfarbe:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_Template_div_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.toggleBackgroundDropdown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NewPosterDialogComponent_div_0_ul_28_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.handleSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Best\u00E4tigen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPosterDialogComponent_div_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.dropdownOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 6, ctx_r0.selectedColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dropdownOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.backgroundDropdownOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 8, ctx_r0.selectedBackgroundColor), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.backgroundDropdownOpen);
  }
}
class NewPosterDialogComponent {
  constructor() {
    this.isOpen = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectedColor = 'Königsblau'; // Default selected color
    this.selectedBackgroundColor = 'Weiß'; // Default background color
    this.dropdownOpen = false; // Control the dropdown visibility
    this.backgroundDropdownOpen = false; // Control background color dropdown visibility
    this.colors = ['Königsblau', 'Violette', 'Rot', 'Turquise', 'Lila', 'Pink', 'Gelb', 'Rosa', 'Minze', 'Babyblau', 'Orange', 'Grün'];
    this.backgroundColors = ['Weiß', 'Hellblau', 'Schwarz', 'Blau', 'Rot', 'Grün', 'Gelb', 'Rosa'];
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle dropdown open/close
  }

  toggleBackgroundDropdown() {
    this.backgroundDropdownOpen = !this.backgroundDropdownOpen;
  }
  selectColor(color, event) {
    event.stopPropagation(); // Prevent the parent click event from firing
    this.selectedColor = color;
    this.dropdownOpen = false; // Close the dropdown after selection
  }

  selectBackgroundColor(color, event) {
    event.stopPropagation();
    this.selectedBackgroundColor = color;
    this.backgroundDropdownOpen = false;
  }
  handleSubmit() {
    this.closeDialog(true);
  }
  closeDialog(success = false) {
    this.close.emit({
      success: success,
      color: this.selectedColor,
      backgroundColor: this.selectedBackgroundColor // Ensure the background color is emitted
    });

    this.isOpen = false;
  }
}
NewPosterDialogComponent.ɵfac = function NewPosterDialogComponent_Factory(t) {
  return new (t || NewPosterDialogComponent)();
};
NewPosterDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NewPosterDialogComponent,
  selectors: [["app-new-poster-dialog"]],
  inputs: {
    isOpen: "isOpen"
  },
  outputs: {
    close: "close"
  },
  decls: 1,
  vars: 1,
  consts: [["id", "modal-container", "style", " border:2px solid royalblue;", 4, "ngIf"], ["id", "modal-container", 2, "border", "2px solid royalblue"], [1, "modal-backdrop"], [1, "modal"], [1, "custom-select-wrapper"], [1, "custom-select", 3, "ngClass", "click"], [1, "select-selected"], ["class", "select-items", 4, "ngIf"], [1, "submit-button", 2, "background-color", "royalblue", 3, "click"], [1, "close-button", 3, "click"], [1, "select-items"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
  template: function NewPosterDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewPosterDialogComponent_div_0_Template, 33, 14, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
  encapsulation: 2
});

/***/ }),

/***/ 6471:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog/otto-admin-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OttoAdminDialogComponent": () => (/* binding */ OttoAdminDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function OttoAdminDialogComponent_div_0_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bitte Admin Passwort eingeben, um als Teammitglied fortzufahren. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function OttoAdminDialogComponent_div_0_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sie haben die maximale Anzahl von Versuchen erreicht. Bitte warten Sie ", ctx_r2.remainingTime, " Minuten. ");
  }
}
function OttoAdminDialogComponent_div_0_div_7__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 16)(2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function OttoAdminDialogComponent_div_0_div_7__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 19)(2, "path", 20)(3, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function OttoAdminDialogComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OttoAdminDialogComponent_div_0_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.adminPassword = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OttoAdminDialogComponent_div_0_div_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OttoAdminDialogComponent_div_0_div_7__svg_svg_3_Template, 3, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OttoAdminDialogComponent_div_0_div_7__svg_svg_4_Template, 4, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.showPassword ? "text" : "password")("ngModel", ctx_r3.adminPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.showPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showPassword);
  }
}
function OttoAdminDialogComponent_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OttoAdminDialogComponent_div_0_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.validateAdminPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Best\u00E4tigen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function OttoAdminDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Zugang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OttoAdminDialogComponent_div_0_h6_5_Template, 2, 0, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OttoAdminDialogComponent_div_0_h6_6_Template, 2, 1, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OttoAdminDialogComponent_div_0_div_7_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OttoAdminDialogComponent_div_0_button_8_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OttoAdminDialogComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.closeDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Zur\u00FCck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLockedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLockedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLockedOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLockedOut);
  }
}
class OttoAdminDialogComponent {
  constructor(toastr) {
    this.toastr = toastr;
    this.isOpen = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.adminAuthSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.adminPassword = '';
    this.showPassword = false;
    this.isLockedOut = false;
    this.remainingTime = 0;
    this.maxAttempts = 5;
    this.lockoutTime = 60 * 60 * 1000; // 1 hour in milliseconds
  }

  ngOnInit() {
    this.checkLockout();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  validateAdminPassword() {
    const correctPassword = 'Otto-admin';
    const attempts = parseInt(localStorage.getItem('adminAttempts') || '0', 10);
    if (attempts >= this.maxAttempts) {
      this.handleLockout();
      return;
    }
    if (this.adminPassword === correctPassword) {
      this.toastr.success('Zugriff gewährt. Sie können sich jetzt als Teammitglied anmelden.', 'Erfolgreich');
      localStorage.removeItem('adminAttempts'); // Reset attempts on success
      this.adminAuthSuccess.emit(true);
      this.closeDialog(true);
    } else {
      this.adminPassword = ''; // Clear password
      const newAttempts = attempts + 1;
      const remainingAttempts = this.maxAttempts - newAttempts;
      localStorage.setItem('adminAttempts', newAttempts.toString());
      // Show a toast with the failed attempts and remaining attempts
      this.toastr.error(`Falsches Passwort. Versuche: ${newAttempts}/${this.maxAttempts}. Verbleibende Versuche: ${remainingAttempts}.`, 'Fehler');
      if (newAttempts >= this.maxAttempts) {
        this.handleLockout();
      }
    }
  }
  handleLockout() {
    const lockoutEnd = Date.now() + this.lockoutTime;
    localStorage.setItem('lockoutEnd', lockoutEnd.toString());
    this.checkLockout();
  }
  checkLockout() {
    const lockoutEnd = parseInt(localStorage.getItem('lockoutEnd') || '0', 10);
    const now = Date.now();
    if (lockoutEnd > now) {
      this.isLockedOut = true;
      this.remainingTime = Math.ceil((lockoutEnd - now) / 60000); // Remaining time in minutes
      this.startLockoutTimer();
    } else {
      this.isLockedOut = false;
      localStorage.removeItem('lockoutEnd');
      localStorage.removeItem('adminAttempts'); // Reset attempts after lockout
    }
  }

  startLockoutTimer() {
    const interval = setInterval(() => {
      const lockoutEnd = parseInt(localStorage.getItem('lockoutEnd') || '0', 10);
      const now = Date.now();
      if (lockoutEnd <= now) {
        this.isLockedOut = false;
        this.remainingTime = 0;
        localStorage.removeItem('lockoutEnd');
        clearInterval(interval);
      } else {
        this.remainingTime = Math.ceil((lockoutEnd - now) / 60000);
      }
    }, 60000); // Update every minute
  }

  closeDialog(success = false) {
    this.close.emit(success);
  }
}
OttoAdminDialogComponent.ɵfac = function OttoAdminDialogComponent_Factory(t) {
  return new (t || OttoAdminDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
};
OttoAdminDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OttoAdminDialogComponent,
  selectors: [["app-otto-admin-dialog"]],
  inputs: {
    isOpen: "isOpen"
  },
  outputs: {
    close: "close",
    adminAuthSuccess: "adminAuthSuccess"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal-backdrop"], [1, "modal"], [4, "ngIf"], ["style", "color: red;", 4, "ngIf"], ["class", "password-field", 4, "ngIf"], ["class", "submit-button", 3, "click", 4, "ngIf"], [1, "close-button", 3, "click"], [2, "color", "red"], [1, "password-field"], ["placeholder", "Admin Passwort", 2, "width", "90%", 3, "type", "ngModel", "ngModelChange"], [1, "icon-button-plakat", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-eye", "viewBox", "0 0 16 16", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "class", "bi bi-eye-slash", "viewBox", "0 0 16 16", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eye"], ["d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"], ["d", "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-eye-slash"], ["d", "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"], ["d", "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"], ["d", "M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"], [1, "submit-button", 3, "click"]],
  template: function OttoAdminDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OttoAdminDialogComponent_div_0_Template, 11, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  encapsulation: 2
});

/***/ }),

/***/ 9421:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/editor/tiny-mce.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinyMceComponent": () => (/* binding */ TinyMceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function TinyMceComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
  }
}
class TinyMceComponent {
  constructor() {
    this.editorContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isLoading = true; // Initial loading state
    this.showSpinner = false; // Controls spinner visibility
    this.apiKey = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.serverUrl}/api/kommentare/`;
  }
  ngAfterViewInit() {
    // Delay for showing the spinner
    this.spinnerTimeout = setTimeout(() => this.showSpinner = true, 500);
    tinymce.init({
      selector: '#tinyMceEditor',
      plugins: ' ',
      images_upload_url: '/api/upload-image',
      media_upload_url: '/api/upload-audio',
      setup: editor => {
        editor.on('change', () => {
          this.editorContent.emit(editor.getContent());
        });
      },
      init_instance_callback: editor => {
        this.isLoading = false;
        this.showSpinner = false;
        clearTimeout(this.spinnerTimeout); // Clear the timeout if editor loads before the delay
      },

      apikey: 'YOUR_API_KEY_HERE'
    });
  }
  ngOnDestroy() {
    if (!this.isLoading) {
      tinymce.remove(tinymce.get('tinyMceEditor'));
    }
    clearTimeout(this.spinnerTimeout); // Ensure to clear timeout on component destruction
  }
}

TinyMceComponent.ɵfac = function TinyMceComponent_Factory(t) {
  return new (t || TinyMceComponent)();
};
TinyMceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TinyMceComponent,
  selectors: [["app-tiny-mce"]],
  outputs: {
    editorContent: "editorContent"
  },
  decls: 3,
  vars: 1,
  consts: [["class", "loading-spinner", 4, "ngIf"], ["id", "tinyMceEditor"], [1, "loading-spinner"]],
  template: function TinyMceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TinyMceComponent_div_1_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "textarea", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 2622:
/*!*****************************************************!*\
  !*** ./src/app/shared/components/home.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class HomeComponent {
  constructor() {
    this.background = '';
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home-banner"]],
  decls: 12,
  vars: 0,
  consts: [[1, "home-banner", "home-banner--aqua-emerald"], [1, "home-banner__wrapper"], [1, "home-banner__headline"], [1, "home-banner__description"], [2, "color", "#f2d91a", "font-weight", "bold"], ["routerLink", "public/polylog", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "button--secondary"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gemeinsam forschen!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Willkommen auf der interaktiven WebSeite vom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kunstort Ottersberg eV");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hier geht es direkt zum Blog \u2192 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 7667:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* binding */ COMPONENTS)
/* harmony export */ });
/* harmony import */ var _auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth0-feature.component */ 3021);
/* harmony import */ var _auth0_features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth0-features.component */ 7066);
/* harmony import */ var _code_snippet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-snippet.component */ 7605);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ 2622);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ 7401);
/* harmony import */ var _page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-footer-hyperlink.component */ 5358);
/* harmony import */ var _page_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-footer.component */ 7595);
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-layout.component */ 4852);
/* harmony import */ var _page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-loader.component */ 5839);
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toast/toast.component */ 257);
/* harmony import */ var _dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/confirm-dialog.component */ 7921);
/* harmony import */ var _dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/confirm-freeze-dialog.component */ 4704);
/* harmony import */ var _dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/comment-dialog.component */ 2164);
/* harmony import */ var _editor_tiny_mce_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor/tiny-mce.component */ 9421);
/* harmony import */ var src_app_features_public_polylog_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/features/public/polylog/comment/comment.component */ 2814);
/* harmony import */ var _dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/delete-dialog.component */ 895);
/* harmony import */ var _dialog_new_poster_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/new-poster-dialog.component */ 797);
/* harmony import */ var _dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/otto-admin-dialog.component */ 6471);


















const COMPONENTS = [..._navigation__WEBPACK_IMPORTED_MODULE_4__.NAVIGATION_COMPONENTS, _auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__.Auth0FeatureComponent, _auth0_features_component__WEBPACK_IMPORTED_MODULE_1__.Auth0FeaturesComponent, _toast_toast_component__WEBPACK_IMPORTED_MODULE_9__.ToastComponent, _dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_15__.DeleteDialogComponent, _dialog_new_poster_dialog_component__WEBPACK_IMPORTED_MODULE_16__.NewPosterDialogComponent, _dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__.ConfirmationDialogComponent, _dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmationFreezeDialogComponent, _dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_12__.CommentDialogComponent, src_app_features_public_polylog_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__.CommentComponent, _dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_17__.OttoAdminDialogComponent, _editor_tiny_mce_component__WEBPACK_IMPORTED_MODULE_13__.TinyMceComponent, _code_snippet_component__WEBPACK_IMPORTED_MODULE_2__.CodeSnippetComponent, _home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_5__.PageFooterHyperlinkComponent, _page_footer_component__WEBPACK_IMPORTED_MODULE_6__.PageFooterComponent, _page_layout_component__WEBPACK_IMPORTED_MODULE_7__.PageLayoutComponent, _page_loader_component__WEBPACK_IMPORTED_MODULE_8__.PageLoaderComponent];

/***/ }),

/***/ 8674:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/inputs/new-question-input.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewQuestionInputComponent": () => (/* binding */ NewQuestionInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NewQuestionInputComponent {
  constructor() {}
  handleNewQuestionInput() {
    /*     this.auth.loginWithRedirect({
          appState: {
            target: '/profile',
          },
          authorizationParams: {
            prompt: 'login',
          },
        }); */
  }
}
NewQuestionInputComponent.ɵfac = function NewQuestionInputComponent_Factory(t) {
  return new (t || NewQuestionInputComponent)();
};
NewQuestionInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NewQuestionInputComponent,
  selectors: [["app-new-question-input"]],
  decls: 1,
  vars: 0,
  consts: [["type", "text", "placeholder", "Stelle eine Neue Forschungsfrage", 1, "input--primary"]],
  template: function NewQuestionInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7324:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DESKTOP_COMPONENTS": () => (/* binding */ DESKTOP_COMPONENTS)
/* harmony export */ });
/* harmony import */ var _nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar-brand.component */ 8222);
/* harmony import */ var _nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar-buttons.component */ 7097);
/* harmony import */ var _nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar-tab.component */ 6746);
/* harmony import */ var _nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar-tabs.component */ 8032);
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar.component */ 6993);





const DESKTOP_COMPONENTS = [_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__.NavBarBrandComponent, _nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__.NavBarButtonsComponent, _nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_2__.NavBarTabComponent, _nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_3__.NavBarTabsComponent, _nav_bar_component__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent];

/***/ }),

/***/ 8222:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/nav-bar-brand.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarBrandComponent": () => (/* binding */ NavBarBrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NavBarBrandComponent {}
NavBarBrandComponent.ɵfac = function NavBarBrandComponent_Factory(t) {
  return new (t || NavBarBrandComponent)();
};
NavBarBrandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarBrandComponent,
  selectors: [["app-nav-bar-brand"]],
  decls: 3,
  vars: 0,
  consts: [[1, "nav-bar__brand"], ["routerLink", "/"], ["src", "https://ottoblob.blob.core.windows.net/images/Kunstort-Otto_Logo.png", "alt", "Otto logo", 1, "nav-bar__logo", 2, "height", "50px", "margin-left", "50px"]],
  template: function NavBarBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 7097:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/nav-bar-buttons.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarButtonsComponent": () => (/* binding */ NavBarButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _buttons_login_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../buttons/login-button.component */ 1099);
/* harmony import */ var _buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/logout-button.component */ 500);
/* harmony import */ var _buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/signup-button.component */ 9089);






function NavBarButtonsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-logout-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function NavBarButtonsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-signup-button")(1, "app-login-button");
  }
}
class NavBarButtonsComponent {
  constructor(auth) {
    this.auth = auth;
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }
}
NavBarButtonsComponent.ɵfac = function NavBarButtonsComponent_Factory(t) {
  return new (t || NavBarButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
NavBarButtonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NavBarButtonsComponent,
  selectors: [["app-nav-bar-buttons"]],
  decls: 5,
  vars: 4,
  consts: [[1, "nav-bar__buttons"], [4, "ngIf", "ngIfElse"], ["loggedOut", ""]],
  template: function NavBarButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NavBarButtonsComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NavBarButtonsComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.isAuthenticated$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _buttons_login_button_component__WEBPACK_IMPORTED_MODULE_0__.LoginButtonComponent, _buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_1__.LogoutButtonComponent, _buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_2__.SignupButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6746:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/nav-bar-tab.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarTabComponent": () => (/* binding */ NavBarTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NavBarTabComponent {}
NavBarTabComponent.ɵfac = function NavBarTabComponent_Factory(t) {
  return new (t || NavBarTabComponent)();
};
NavBarTabComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarTabComponent,
  selectors: [["app-nav-bar-tab"]],
  inputs: {
    path: "path",
    label: "label"
  },
  decls: 2,
  vars: 2,
  consts: [["routerLinkActive", "nav-bar__tab--active", 1, "nav-bar__tab", 2, "color", "black", 3, "routerLink"]],
  template: function NavBarTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.path);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  encapsulation: 2
});

/***/ }),

/***/ 8032:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/nav-bar-tabs.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarTabsComponent": () => (/* binding */ NavBarTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar-tab.component */ 6746);




function NavBarTabsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-bar-tab", 6)(2, "app-nav-bar-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class NavBarTabsComponent {
  constructor(auth) {
    this.auth = auth;
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }
}
NavBarTabsComponent.ɵfac = function NavBarTabsComponent_Factory(t) {
  return new (t || NavBarTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
NavBarTabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavBarTabsComponent,
  selectors: [["app-nav-bar-tabs"]],
  decls: 7,
  vars: 3,
  consts: [[1, "nav-bar__tabs"], ["target", "_blank", "path", "/plakate", "label", "Plakate"], ["target", "_blank", "path", "/public", "label", "Polylog"], ["path", "/profile", "label", "Profil"], ["path", "/archiv", "label", "Archiv"], [4, "ngIf"], ["path", "/protected", "label", "Protected"], ["path", "/admin", "label", "Admin"]],
  template: function NavBarTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-bar-tab", 1)(2, "app-nav-bar-tab", 2)(3, "app-nav-bar-tab", 3)(4, "app-nav-bar-tab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavBarTabsComponent_ng_container_5_Template, 3, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx.isAuthenticated$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_0__.NavBarTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6993:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/navigation/desktop/nav-bar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar-brand.component */ 8222);
/* harmony import */ var _nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar-buttons.component */ 7097);
/* harmony import */ var _nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar-tabs.component */ 8032);




class NavBarComponent {}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)();
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  decls: 5,
  vars: 0,
  consts: [[1, "nav-bar__container"], [1, "nav-bar"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-nav-bar-brand")(3, "app-nav-bar-tabs")(4, "app-nav-bar-buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__.NavBarBrandComponent, _nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__.NavBarButtonsComponent, _nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_2__.NavBarTabsComponent],
  encapsulation: 2
});

/***/ }),

/***/ 7401:
/*!*******************************************************!*\
  !*** ./src/app/shared/components/navigation/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAVIGATION_COMPONENTS": () => (/* binding */ NAVIGATION_COMPONENTS)
/* harmony export */ });
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop */ 7324);
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile */ 1041);


const NAVIGATION_COMPONENTS = [..._desktop__WEBPACK_IMPORTED_MODULE_0__.DESKTOP_COMPONENTS, ..._mobile__WEBPACK_IMPORTED_MODULE_1__.MOBILE_COMPONENTS];

/***/ }),

/***/ 1041:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOBILE_COMPONENTS": () => (/* binding */ MOBILE_COMPONENTS)
/* harmony export */ });
/* harmony import */ var _mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-nav-bar-brand.component */ 9049);
/* harmony import */ var _mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-nav-bar-buttons.component */ 3631);
/* harmony import */ var _mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-nav-bar-tab.component */ 3520);
/* harmony import */ var _mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-nav-bar-tabs.component */ 206);
/* harmony import */ var _mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-nav-bar.component */ 1287);





const MOBILE_COMPONENTS = [_mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__.MobileNavBarBrandComponent, _mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__.MobileNavBarButtonsComponent, _mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_2__.MobileNavBarTabComponent, _mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_3__.MobileNavBarTabsComponent, _mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__.MobileNavBarComponent];

/***/ }),

/***/ 9049:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/mobile-nav-bar-brand.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavBarBrandComponent": () => (/* binding */ MobileNavBarBrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class MobileNavBarBrandComponent {
  constructor() {
    this.mobileNavBarBrandClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onMobileNavBarBrandClick() {
    this.mobileNavBarBrandClick.emit();
  }
}
MobileNavBarBrandComponent.ɵfac = function MobileNavBarBrandComponent_Factory(t) {
  return new (t || MobileNavBarBrandComponent)();
};
MobileNavBarBrandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MobileNavBarBrandComponent,
  selectors: [["app-mobile-nav-bar-brand"]],
  outputs: {
    mobileNavBarBrandClick: "mobileNavBarBrandClick"
  },
  decls: 3,
  vars: 0,
  consts: [[1, "mobile-nav-bar__brand"], ["routerLink", "/", 3, "click"], ["src", "https://ottoblob.blob.core.windows.net/images/Kunstort-Otto_Logo.png", "alt", "Otto logo", 1, "mobile-nav-bar__logo", 2, "height", "62px", "margin-top", "25px"]],
  template: function MobileNavBarBrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileNavBarBrandComponent_Template_a_click_1_listener() {
        return ctx.onMobileNavBarBrandClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 3631:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/mobile-nav-bar-buttons.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavBarButtonsComponent": () => (/* binding */ MobileNavBarButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _buttons_login_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../buttons/login-button.component */ 1099);
/* harmony import */ var _buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/logout-button.component */ 500);
/* harmony import */ var _buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../buttons/signup-button.component */ 9089);







function MobileNavBarButtonsComponent_app_logout_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-logout-button");
  }
}
function MobileNavBarButtonsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-signup-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("signupClick", function MobileNavBarButtonsComponent_ng_template_3_Template_app_signup_button_signupClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onSignup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-login-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("loginClick", function MobileNavBarButtonsComponent_ng_template_3_Template_app_login_button_loginClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class MobileNavBarButtonsComponent {
  constructor(auth) {
    this.auth = auth;
    this.isAuthenticated$ = this.auth.isAuthenticated$;
    this.signupClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.loginClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  onSignup() {
    this.signupClick.emit(); // Emit signup click to parent
  }

  onLogin() {
    this.loginClick.emit(); // Emit login click to parent
  }
}

MobileNavBarButtonsComponent.ɵfac = function MobileNavBarButtonsComponent_Factory(t) {
  return new (t || MobileNavBarButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};
MobileNavBarButtonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MobileNavBarButtonsComponent,
  selectors: [["app-mobile-nav-bar-buttons"]],
  outputs: {
    signupClick: "signupClick",
    loginClick: "loginClick"
  },
  decls: 5,
  vars: 4,
  consts: [[1, "mobile-nav-bar__buttons"], [4, "ngIf", "ngIfElse"], ["loggedOut", ""], [3, "signupClick"], [3, "loginClick"]],
  template: function MobileNavBarButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobileNavBarButtonsComponent_app_logout_button_1_Template, 1, 0, "app-logout-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MobileNavBarButtonsComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.isAuthenticated$))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _buttons_login_button_component__WEBPACK_IMPORTED_MODULE_0__.LoginButtonComponent, _buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_1__.LogoutButtonComponent, _buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_2__.SignupButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 3520:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/mobile-nav-bar-tab.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavBarTabComponent": () => (/* binding */ MobileNavBarTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class MobileNavBarTabComponent {
  constructor() {
    this.mobileNavBarTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onMobileNavBarTabClick() {
    this.mobileNavBarTabClick.emit(this.path);
  }
}
MobileNavBarTabComponent.ɵfac = function MobileNavBarTabComponent_Factory(t) {
  return new (t || MobileNavBarTabComponent)();
};
MobileNavBarTabComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MobileNavBarTabComponent,
  selectors: [["app-mobile-nav-bar-tab"]],
  inputs: {
    path: "path",
    label: "label"
  },
  outputs: {
    mobileNavBarTabClick: "mobileNavBarTabClick"
  },
  decls: 2,
  vars: 2,
  consts: [["routerLinkActive", "mobile-nav-bar__tab--active", 1, "mobile-nav-bar__tab", 3, "routerLink", "click"]],
  template: function MobileNavBarTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileNavBarTabComponent_Template_a_click_0_listener() {
        return ctx.onMobileNavBarTabClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.path);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  encapsulation: 2
});

/***/ }),

/***/ 206:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/mobile-nav-bar-tabs.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavBarTabsComponent": () => (/* binding */ MobileNavBarTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ 9226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-nav-bar-tab.component */ 3520);





function MobileNavBarTabsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-mobile-nav-bar-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarTabsComponent_ng_container_4_Template_app_mobile_nav_bar_tab_mobileNavBarTabClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onMobileNavBarTabClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-mobile-nav-bar-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarTabsComponent_ng_container_4_Template_app_mobile_nav_bar_tab_mobileNavBarTabClick_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onMobileNavBarTabClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class MobileNavBarTabsComponent {
  constructor(auth) {
    this.auth = auth;
    this.mobileNavBarTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }
  onMobileNavBarTabClick(path) {
    this.mobileNavBarTabClick.emit(path);
  }
}
MobileNavBarTabsComponent.ɵfac = function MobileNavBarTabsComponent_Factory(t) {
  return new (t || MobileNavBarTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
MobileNavBarTabsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MobileNavBarTabsComponent,
  selectors: [["app-mobile-nav-bar-tabs"]],
  outputs: {
    mobileNavBarTabClick: "mobileNavBarTabClick"
  },
  decls: 6,
  vars: 3,
  consts: [[1, "mobile-nav-bar__tabs"], ["path", "/profile", "label", "Profile", 3, "mobileNavBarTabClick"], ["target", "_blank", "path", "/public", "label", "Polylog", 3, "mobileNavBarTabClick"], ["target", "_blank", "path", "/plakate", "label", "Plakate", 3, "mobileNavBarTabClick"], [4, "ngIf"], ["path", "/protected", "label", "Protected", 3, "mobileNavBarTabClick"], ["path", "/admin", "label", "Admin", 3, "mobileNavBarTabClick"]],
  template: function MobileNavBarTabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-mobile-nav-bar-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarTabsComponent_Template_app_mobile_nav_bar_tab_mobileNavBarTabClick_1_listener($event) {
        return ctx.onMobileNavBarTabClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-mobile-nav-bar-tab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarTabsComponent_Template_app_mobile_nav_bar_tab_mobileNavBarTabClick_2_listener($event) {
        return ctx.onMobileNavBarTabClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-mobile-nav-bar-tab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarTabsComponent_Template_app_mobile_nav_bar_tab_mobileNavBarTabClick_3_listener($event) {
        return ctx.onMobileNavBarTabClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MobileNavBarTabsComponent_ng_container_4_Template, 3, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.isAuthenticated$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_0__.MobileNavBarTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 1287:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/mobile/mobile-nav-bar.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavBarComponent": () => (/* binding */ MobileNavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-nav-bar-brand.component */ 9049);
/* harmony import */ var _mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-nav-bar-buttons.component */ 3631);
/* harmony import */ var _mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-nav-bar-tabs.component */ 206);







function MobileNavBarComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MobileNavBarComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MobileNavBarComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "app-mobile-nav-bar-tabs", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mobileNavBarTabClick", function MobileNavBarComponent_div_6_Template_app_mobile_nav_bar_tabs_mobileNavBarTabClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.handleNavTabClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-mobile-nav-bar-buttons", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("signupClick", function MobileNavBarComponent_div_6_Template_app_mobile_nav_bar_buttons_signupClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.closeMobileMenu());
    })("loginClick", function MobileNavBarComponent_div_6_Template_app_mobile_nav_bar_buttons_loginClick_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class MobileNavBarComponent {
  constructor(router) {
    this.router = router;
    this.MobileMenuState = {
      OPEN: 'open',
      CLOSED: 'closed'
    };
    this.MobileMenuIcon = {
      CLOSE: 'close',
      MENU: 'menu'
    };
    this.mobileMenuState = this.MobileMenuState.CLOSED;
    this.mobileMenuIcon = this.MobileMenuIcon.MENU;
  }
  ngOnInit() {
    this.router.events.subscribe(ev => {
      if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        if (this.mobileMenuState === this.MobileMenuState.OPEN) {
          this.closeMobileMenu();
        }
      }
    });
  }
  toggleMobileMenu() {
    switch (this.mobileMenuState) {
      case this.MobileMenuState.OPEN:
        {
          this.closeMobileMenu();
          return;
        }
      case this.MobileMenuState.CLOSED:
        {
          this.openMobileMenu();
          return;
        }
    }
  }
  closeMobileMenu() {
    document.body.classList.remove('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.CLOSED;
    this.mobileMenuIcon = this.MobileMenuIcon.MENU;
  }
  openMobileMenu() {
    document.body.classList.add('mobile-scroll-lock');
    this.mobileMenuState = this.MobileMenuState.OPEN;
    this.mobileMenuIcon = this.MobileMenuIcon.CLOSE;
  }
  handleNavTabClick(path) {
    if (this.mobileMenuState === this.MobileMenuState.OPEN && path === this.router.url) {
      this.closeMobileMenu();
    }
  }
}
MobileNavBarComponent.ɵfac = function MobileNavBarComponent_Factory(t) {
  return new (t || MobileNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
MobileNavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MobileNavBarComponent,
  selectors: [["app-mobile-nav-bar"]],
  decls: 7,
  vars: 3,
  consts: [[1, "mobile-nav-bar__container"], [1, "mobile-nav-bar"], [3, "mobileNavBarBrandClick"], ["id", "mobile-menu-toggle-button", 1, "mobile-nav-bar__toggle", 3, "click"], [4, "ngIf"], ["class", "mobile-nav-bar__menu", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "36", "height", "36", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"], ["d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"], [1, "mobile-nav-bar__menu"], [3, "mobileNavBarTabClick"], [3, "signupClick", "loginClick"]],
  template: function MobileNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "app-mobile-nav-bar-brand", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mobileNavBarBrandClick", function MobileNavBarComponent_Template_app_mobile_nav_bar_brand_mobileNavBarBrandClick_2_listener() {
        return ctx.closeMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileNavBarComponent_Template_span_click_3_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobileNavBarComponent_ng_container_4_Template, 3, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobileNavBarComponent_ng_container_5_Template, 3, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MobileNavBarComponent_div_6_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mobileMenuIcon === ctx.MobileMenuIcon.MENU);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mobileMenuIcon === ctx.MobileMenuIcon.CLOSE);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mobileMenuState === ctx.MobileMenuState.OPEN);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_0__.MobileNavBarBrandComponent, _mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_1__.MobileNavBarButtonsComponent, _mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_2__.MobileNavBarTabsComponent],
  encapsulation: 2
});

/***/ }),

/***/ 5358:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/page-footer-hyperlink.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageFooterHyperlinkComponent": () => (/* binding */ PageFooterHyperlinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class PageFooterHyperlinkComponent {}
PageFooterHyperlinkComponent.ɵfac = function PageFooterHyperlinkComponent_Factory(t) {
  return new (t || PageFooterHyperlinkComponent)();
};
PageFooterHyperlinkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageFooterHyperlinkComponent,
  selectors: [["app-page-footer-hyperlink"]],
  inputs: {
    path: "path"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "page-footer__hyperlink", 3, "href"]],
  template: function PageFooterHyperlinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7595:
/*!************************************************************!*\
  !*** ./src/app/shared/components/page-footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageFooterComponent": () => (/* binding */ PageFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-footer-hyperlink.component */ 5358);



function PageFooterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "app-page-footer-hyperlink", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resource_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", resource_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", resource_r1.label, " ");
  }
}
class PageFooterComponent {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.resourceList = [{
      path: 'https://auth0.com/why-auth0/',
      label: 'Warum Mitglied werden ?'
    }, {
      path: 'https://auth0.com/docs/get-started',
      label: 'Wie funktioniert es ?'
    }, {
      path: 'https://kunstort-otto.de/wer-sind-wir/',
      label: 'Wer wir sind.'
    }, {
      path: 'https://kunstort-otto.de/kontakt/',
      label: 'Kontaktiere uns für Fragen und Anliegen.'
    }];
  }
}
PageFooterComponent.ɵfac = function PageFooterComponent_Factory(t) {
  return new (t || PageFooterComponent)();
};
PageFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageFooterComponent,
  selectors: [["app-footer"]],
  decls: 27,
  vars: 2,
  consts: [[1, "page-footer"], [1, "page-footer-grid"], [1, "page-footer-grid__info"], [1, "page-footer-info__message"], [1, "page-footer-message__headline"], ["path", "https://auth0.com/"], [1, "page-footer-message__description"], ["path", "https://auth0.com/docs/quickstarts/"], [1, "page-footer-info__button"], ["id", "create-account-button", "href", "https://kunstort-otto.de/teilhaben-und-unterstuetzen/", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "button--secondary"], [1, "page-footer-info__resource-list"], ["class", "page-footer-info__resource-list-item", 4, "ngFor", "ngForOf"], [1, "page-footer-grid__brand"], [1, "page-footer-brand"], ["src", "https://kunstort-otto.de/wp-content/themes/kso/images/kso-sprechblase.svg", "alt", "Auth0", "width", "20", "height", "22.22", 1, "page-footer-brand__logo"], ["path", "https://kunstort-otto.de/"], [1, "page-footer-info__resource-list-item"], [3, "path"]],
  template: function PageFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4)(5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Website made by\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-page-footer-hyperlink", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Denis Rysavy in Zusammenarbeit mit Kunsort Ottersberg .eV.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6)(12, "app-page-footer-hyperlink", 7)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "u");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Lorem ipsum dolor sit amet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Werde jetzt F\u00F6rderer/:in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PageFooterComponent_div_21_Template, 3, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "app-page-footer-hyperlink", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "kunstort-otto.de");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A9 2023 - ", ctx.currentYear, " rysavy / Kunstort Ottersberge.V. Alle Rechte vorbehalten. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resourceList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_0__.PageFooterHyperlinkComponent],
  encapsulation: 2
});

/***/ }),

/***/ 4852:
/*!************************************************************!*\
  !*** ./src/app/shared/components/page-layout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLayoutComponent": () => (/* binding */ PageLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/desktop/nav-bar.component */ 6993);
/* harmony import */ var _navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/mobile/mobile-nav-bar.component */ 1287);
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast/toast.component */ 257);
/* harmony import */ var _page_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-footer.component */ 7595);





const _c0 = ["*"];
class PageLayoutComponent {}
PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) {
  return new (t || PageLayoutComponent)();
};
PageLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PageLayoutComponent,
  selectors: [["app-page-layout"]],
  ngContentSelectors: _c0,
  decls: 7,
  vars: 0,
  consts: [[1, "page-layout"], [1, "page-layout__content"]],
  template: function PageLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar")(2, "app-mobile-nav-bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-toast");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.MobileNavBarComponent, _toast_toast_component__WEBPACK_IMPORTED_MODULE_2__.ToastComponent, _page_footer_component__WEBPACK_IMPORTED_MODULE_3__.PageFooterComponent],
  encapsulation: 2
});

/***/ }),

/***/ 5839:
/*!************************************************************!*\
  !*** ./src/app/shared/components/page-loader.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageLoaderComponent {
  constructor() {
    this.loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
  }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) {
  return new (t || PageLoaderComponent)();
};
PageLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageLoaderComponent,
  selectors: [["app-page-loader"]],
  decls: 2,
  vars: 1,
  consts: [[1, "loader"], ["alt", "Loading...", 3, "src"]],
  template: function PageLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.loadingImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 257:
/*!************************************************************!*\
  !*** ./src/app/shared/components/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ToastComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onDismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dismiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
class ToastComponent {
  constructor() {
    this.message = 'Hier kommen Dynamisch die Toast Nachrichten';
    this.showToast = false;
  }
  onDismiss() {
    console.log('Toast closed');
  }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) {
  return new (t || ToastComponent)();
};
ToastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ToastComponent,
  selectors: [["app-toast"]],
  decls: 1,
  vars: 1,
  consts: [["id", "toast-wrapper", 4, "ngIf"], ["id", "toast-wrapper"], ["id", "toast-header"], ["id", "dismiss", 3, "click"]],
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_div_0_Template, 5, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToast);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPONENTS": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.COMPONENTS),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7667);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ 4466);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _components_auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth0-feature.component */ 3021);
/* harmony import */ var _components_auth0_features_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth0-features.component */ 7066);
/* harmony import */ var _components_buttons_login_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buttons/login-button.component */ 1099);
/* harmony import */ var _components_buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buttons/logout-button.component */ 500);
/* harmony import */ var _components_buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buttons/signup-button.component */ 9089);
/* harmony import */ var _components_inputs_new_question_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inputs/new-question-input.component */ 8674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_navigation_desktop_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/desktop/nav-bar-brand.component */ 8222);
/* harmony import */ var _components_navigation_desktop_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/desktop/nav-bar-buttons.component */ 7097);
/* harmony import */ var _components_navigation_desktop_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation/desktop/nav-bar-tab.component */ 6746);
/* harmony import */ var _components_navigation_desktop_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/desktop/nav-bar-tabs.component */ 8032);
/* harmony import */ var _components_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/desktop/nav-bar.component */ 6993);
/* harmony import */ var _components_navigation_mobile_mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navigation/mobile/mobile-nav-bar-brand.component */ 9049);
/* harmony import */ var _components_navigation_mobile_mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navigation/mobile/mobile-nav-bar-buttons.component */ 3631);
/* harmony import */ var _components_navigation_mobile_mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navigation/mobile/mobile-nav-bar-tab.component */ 3520);
/* harmony import */ var _components_navigation_mobile_mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navigation/mobile/mobile-nav-bar-tabs.component */ 206);
/* harmony import */ var _components_navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navigation/mobile/mobile-nav-bar.component */ 1287);
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/toast/toast.component */ 257);
/* harmony import */ var _components_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dialog/delete-dialog.component */ 895);
/* harmony import */ var _components_dialog_new_poster_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dialog/new-poster-dialog.component */ 797);
/* harmony import */ var _components_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dialog/confirm-dialog.component */ 7921);
/* harmony import */ var _components_dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dialog/confirm-freeze-dialog.component */ 4704);
/* harmony import */ var _components_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dialog/comment-dialog.component */ 2164);
/* harmony import */ var src_app_features_public_polylog_comment_comment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/features/public/polylog/comment/comment.component */ 2814);
/* harmony import */ var _components_dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dialog/otto-admin-dialog.component */ 6471);
/* harmony import */ var _components_editor_tiny_mce_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/editor/tiny-mce.component */ 9421);
/* harmony import */ var _components_code_snippet_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/code-snippet.component */ 7605);
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/home.component */ 2622);
/* harmony import */ var _components_page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/page-footer-hyperlink.component */ 5358);
/* harmony import */ var _components_page_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/page-footer.component */ 7595);
/* harmony import */ var _components_page_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/page-layout.component */ 4852);
/* harmony import */ var _components_page_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/page-loader.component */ 5839);
// Angular



// Third Party

// Components



































class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_navigation_desktop_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_6__.NavBarBrandComponent, _components_navigation_desktop_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_7__.NavBarButtonsComponent, _components_navigation_desktop_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_8__.NavBarTabComponent, _components_navigation_desktop_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_9__.NavBarTabsComponent, _components_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__.NavBarComponent, _components_navigation_mobile_mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_11__.MobileNavBarBrandComponent, _components_navigation_mobile_mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_12__.MobileNavBarButtonsComponent, _components_navigation_mobile_mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_13__.MobileNavBarTabComponent, _components_navigation_mobile_mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_14__.MobileNavBarTabsComponent, _components_navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__.MobileNavBarComponent, _components_auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__.Auth0FeatureComponent, _components_auth0_features_component__WEBPACK_IMPORTED_MODULE_1__.Auth0FeaturesComponent, _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_16__.ToastComponent, _components_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DeleteDialogComponent, _components_dialog_new_poster_dialog_component__WEBPACK_IMPORTED_MODULE_18__.NewPosterDialogComponent, _components_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__.ConfirmationDialogComponent, _components_dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_20__.ConfirmationFreezeDialogComponent, _components_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__.CommentDialogComponent, src_app_features_public_polylog_comment_comment_component__WEBPACK_IMPORTED_MODULE_22__.CommentComponent, _components_dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_23__.OttoAdminDialogComponent, _components_editor_tiny_mce_component__WEBPACK_IMPORTED_MODULE_24__.TinyMceComponent, _components_code_snippet_component__WEBPACK_IMPORTED_MODULE_25__.CodeSnippetComponent, _components_home_component__WEBPACK_IMPORTED_MODULE_26__.HomeComponent, _components_page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_27__.PageFooterHyperlinkComponent, _components_page_footer_component__WEBPACK_IMPORTED_MODULE_28__.PageFooterComponent, _components_page_layout_component__WEBPACK_IMPORTED_MODULE_29__.PageLayoutComponent, _components_page_loader_component__WEBPACK_IMPORTED_MODULE_30__.PageLoaderComponent, _components_auth0_features_component__WEBPACK_IMPORTED_MODULE_1__.Auth0FeaturesComponent, _components_auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__.Auth0FeatureComponent, _components_buttons_login_button_component__WEBPACK_IMPORTED_MODULE_2__.LoginButtonComponent, _components_buttons_logout_button_component__WEBPACK_IMPORTED_MODULE_3__.LogoutButtonComponent, _components_buttons_signup_button_component__WEBPACK_IMPORTED_MODULE_4__.SignupButtonComponent, _components_inputs_new_question_input_component__WEBPACK_IMPORTED_MODULE_5__.NewQuestionInputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule],
    exports: [_components_navigation_desktop_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_6__.NavBarBrandComponent, _components_navigation_desktop_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_7__.NavBarButtonsComponent, _components_navigation_desktop_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_8__.NavBarTabComponent, _components_navigation_desktop_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_9__.NavBarTabsComponent, _components_navigation_desktop_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__.NavBarComponent, _components_navigation_mobile_mobile_nav_bar_brand_component__WEBPACK_IMPORTED_MODULE_11__.MobileNavBarBrandComponent, _components_navigation_mobile_mobile_nav_bar_buttons_component__WEBPACK_IMPORTED_MODULE_12__.MobileNavBarButtonsComponent, _components_navigation_mobile_mobile_nav_bar_tab_component__WEBPACK_IMPORTED_MODULE_13__.MobileNavBarTabComponent, _components_navigation_mobile_mobile_nav_bar_tabs_component__WEBPACK_IMPORTED_MODULE_14__.MobileNavBarTabsComponent, _components_navigation_mobile_mobile_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__.MobileNavBarComponent, _components_auth0_feature_component__WEBPACK_IMPORTED_MODULE_0__.Auth0FeatureComponent, _components_auth0_features_component__WEBPACK_IMPORTED_MODULE_1__.Auth0FeaturesComponent, _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_16__.ToastComponent, _components_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DeleteDialogComponent, _components_dialog_new_poster_dialog_component__WEBPACK_IMPORTED_MODULE_18__.NewPosterDialogComponent, _components_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__.ConfirmationDialogComponent, _components_dialog_confirm_freeze_dialog_component__WEBPACK_IMPORTED_MODULE_20__.ConfirmationFreezeDialogComponent, _components_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_21__.CommentDialogComponent, src_app_features_public_polylog_comment_comment_component__WEBPACK_IMPORTED_MODULE_22__.CommentComponent, _components_dialog_otto_admin_dialog_component__WEBPACK_IMPORTED_MODULE_23__.OttoAdminDialogComponent, _components_editor_tiny_mce_component__WEBPACK_IMPORTED_MODULE_24__.TinyMceComponent, _components_code_snippet_component__WEBPACK_IMPORTED_MODULE_25__.CodeSnippetComponent, _components_home_component__WEBPACK_IMPORTED_MODULE_26__.HomeComponent, _components_page_footer_hyperlink_component__WEBPACK_IMPORTED_MODULE_27__.PageFooterHyperlinkComponent, _components_page_footer_component__WEBPACK_IMPORTED_MODULE_28__.PageFooterComponent, _components_page_layout_component__WEBPACK_IMPORTED_MODULE_29__.PageLayoutComponent, _components_page_loader_component__WEBPACK_IMPORTED_MODULE_30__.PageLoaderComponent]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  auth0: {
    domain: 'dev-z3z23qam2lr3gsku.us.auth0.com',
    clientId: 'h0vagAbseMlO1yUe9w0FePm2Fh0wAYGw',
    authorizationParams: {
      audience: 'https://dev-z3z23qam2lr3gsku.us.auth0.com/api/v2/',
      redirect_uri: 'http://localhost:4040/callback'
    },
    errorPath: '/callback'
  },
  tinyMCE: {
    api_key: 'umt68mpo8gend1vb2nfktubq4s8ihhg6p36si032mybvqbkn'
  },
  api: {
    serverUrl: 'http://localhost:6060'
  },
  adminAuthentication: {
    secret: 'Otto-admin'
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map