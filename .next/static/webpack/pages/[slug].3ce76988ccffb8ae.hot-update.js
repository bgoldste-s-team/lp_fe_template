"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/components/FeaturedPages.js":
/*!*****************************************!*\
  !*** ./src/components/FeaturedPages.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FeaturedPages = (param)=>{\n    let { pages  } = param;\n    console.log(pages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Featured Pages:\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: page.slug,\n                                children: page.title\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                lineNumber: 13,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: page.page_description\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                lineNumber: 14,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, page.id, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                        lineNumber: 12,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = FeaturedPages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedPages);\nvar _c;\n$RefreshReg$(_c, \"FeaturedPages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlZFBhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QjtBQUc3QixNQUFNQyxnQkFBZ0IsU0FBYTtRQUFaLEVBQUNDLE1BQUssRUFBQztJQUMxQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNGLDhEQUFDRzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJTCxNQUFNTSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNDO3dCQUFpQkMsV0FBVzs7MENBQ3pCLDhEQUFDWCxrREFBSUE7Z0NBQUNZLE1BQU1ILEtBQUtJLElBQUk7MENBQUdKLEtBQUtLLEtBQUs7Ozs7OzswQ0FDbEMsOERBQUNDOzBDQUFHTixLQUFLTyxnQkFBZ0I7Ozs7Ozs7dUJBRnBCUCxLQUFLUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUTlCO0tBZk1oQjtBQWdCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlZFBhZ2VzLmpzPzNiN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuY29uc3QgRmVhdHVyZWRQYWdlcyA9ICh7cGFnZXN9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFnZXMpXG4gICAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICAgIDxoMT5GZWF0dXJlZCBQYWdlczo8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5pZH0gY2xhc3NOYW1lPXsnY2FyZCd9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZS5zbHVnfT57cGFnZS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICA8cD57cGFnZS5wYWdlX2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQYWdlcztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiRmVhdHVyZWRQYWdlcyIsInBhZ2VzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJwYWdlIiwibGkiLCJjbGFzc05hbWUiLCJocmVmIiwic2x1ZyIsInRpdGxlIiwicCIsInBhZ2VfZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FeaturedPages.js\n"));

/***/ })

});