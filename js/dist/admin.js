/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/components/PollsSettingsPage.tsx":
/*!****************************************************!*\
  !*** ./src/admin/components/PollsSettingsPage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollsSettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);




var PollsSettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function PollsSettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PollsSettingsPage, _ExtensionPage);
  var _proto = PollsSettingsPage.prototype;
  _proto.content = function content() {
    return m("div", {
      className: "PollsSettingsPage"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "PollsSettingsTabPage PollsSettingsPage--settings"
    }, m("div", {
      className: "Form"
    }, this.settingsItems().toArray(), m("div", {
      className: "Form-group"
    }, this.submitButton())))));
  };
  _proto.settingsItems = function settingsItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('general', m("div", {
      className: "Section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.general.heading')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.general.help')), this.generalItems().toArray()));
    items.add('globalPolls', m("div", {
      className: "Section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.global_polls.heading')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.global_polls.help')), this.globalPollsItems().toArray()));
    items.add('image', m("div", {
      className: "Section"
    }, m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.image.heading')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.image.help')), this.imageItems().toArray()));
    return items;
  };
  _proto.generalItems = function generalItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('colorBlend', this.buildSettingComponent({
      setting: 'fof-polls.optionsColorBlend',
      type: 'switch',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.options_color_blend'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.options_color_blend_help')
    }));
    items.add('maxOptions', this.buildSettingComponent({
      setting: 'fof-polls.maxOptions',
      type: 'number',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.max_options'),
      min: 2
    }));
    return items;
  };
  _proto.globalPollsItems = function globalPollsItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('enableGlobalPolls', this.buildSettingComponent({
      setting: 'fof-polls.enableGlobalPolls',
      type: 'boolean',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.enable_global_polls'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.enable_global_polls_help')
    }));
    return items;
  };
  _proto.imageItems = function imageItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('allowOptionImage', this.buildSettingComponent({
      setting: 'fof-polls.allowOptionImage',
      type: 'switch',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.allow_option_image')
    }));
    items.add('allowImageUploads', this.buildSettingComponent({
      setting: 'fof-polls.allowImageUploads',
      type: 'switch',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.allow_image_uploads'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.allow_image_uploads_help')
    }));
    items.add('imageHeight', this.buildSettingComponent({
      setting: 'fof-polls.image_height',
      type: 'number',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.image_height')
    }));
    items.add('imageWidth', this.buildSettingComponent({
      setting: 'fof-polls.image_width',
      type: 'number',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.admin.settings.image_width')
    }));
    return items;
  };
  return PollsSettingsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/index.ts":
/*!***************************************!*\
  !*** ./src/admin/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _PollsSettingsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PollsSettingsPage */ "./src/admin/components/PollsSettingsPage.tsx");

var components = {
  PollsSettingsPage: _PollsSettingsPage__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.components)
/* harmony export */ });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PollsSettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PollsSettingsPage */ "./src/admin/components/PollsSettingsPage.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/admin/components/index.ts");



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof/polls', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('fof-polls').registerPage(_components_PollsSettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerPermission({
    icon: 'fas fa-poll',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.view_results_without_voting'),
    permission: 'discussion.polls.viewResultsWithoutVoting',
    allowGuest: true
  }, 'view').registerPermission({
    icon: 'fas fa-poll',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.start'),
    permission: 'discussion.polls.start'
  }, 'start').registerPermission({
    icon: 'fas fa-poll',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.start_global'),
    permission: 'startGlobalPoll'
  }, 'start').registerPermission({
    icon: 'fas fa-pencil-alt',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.self_edit'),
    permission: 'polls.selfEdit'
  }, 'start').registerPermission({
    icon: 'fas fa-pencil-alt',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.self_post_edit'),
    permission: 'polls.selfPostEdit'
  }, 'start').registerPermission({
    icon: 'fas fa-image',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.upload_images'),
    permission: 'uploadPollImages'
  }, 'start').registerPermission({
    icon: 'fas fa-poll',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.vote'),
    permission: 'discussion.polls.vote'
  }, 'reply').registerPermission({
    icon: 'fas fa-poll',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.change_vote'),
    permission: 'polls.changeVote'
  }, 'reply').registerPermission({
    icon: 'fas fa-pencil-alt',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.admin.permissions.moderate'),
    permission: 'discussion.polls.moderate'
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* reexport safe */ _src_admin__WEBPACK_IMPORTED_MODULE_0__.components)
/* harmony export */ });
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map