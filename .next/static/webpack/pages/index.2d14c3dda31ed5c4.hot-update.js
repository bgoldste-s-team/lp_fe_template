"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FeaturedPages.js":
/*!*****************************************!*\
  !*** ./src/components/FeaturedPages.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FeaturedPages = (param)=>{\n    let { pages , pageGroupName  } = param;\n    console.log(pages, pageGroupName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-base-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hero-content text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-bold\",\n                                children: [\n                                    pageGroupName ? pageGroupName : \"Pages\",\n                                    \" num pages: \",\n                                    pages.length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                lineNumber: 12,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-6\",\n                                children: \"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                lineNumber: 13,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                        lineNumber: 11,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                    lineNumber: 10,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 place-items-center gap-2\",\n                children: pages.map((page)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card w-96 bg-neutral text-neutral-content h-full w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body items-center text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"card-title\",\n                                    children: page.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 27\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        page.page_description.slice(0, 50),\n                                        \"..\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 27\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-actions justify-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: page.slug,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-primary\",\n                                            children: \"Read More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 31\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 31\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 27\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                            lineNumber: 21,\n                            columnNumber: 23\n                        }, undefined)\n                    }, page.id, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/FeaturedPages.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = FeaturedPages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedPages);\nvar _c;\n$RefreshReg$(_c, \"FeaturedPages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlZFBhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QjtBQUc3QixNQUFNQyxnQkFBZ0IsU0FBNEI7UUFBM0IsRUFBQ0MsTUFBSyxFQUFFQyxjQUFhLEVBQUM7SUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0M7SUFDbkIscUJBQ0YsOERBQUNHO1FBQUlDLFdBQVc7OzBCQUNaLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUdELFdBQVU7O29DQUFzQkosZ0JBQWdCQSxnQkFBZ0IsT0FBTztvQ0FBQztvQ0FBYUQsTUFBTU8sTUFBTTs7Ozs7OzswQ0FDckcsOERBQUNDO2dDQUFFSCxXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQyw4REFBQ0Q7Z0JBQUlDLFdBQVc7MEJBQ1hMLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxxQkFDTiw4REFBQ047d0JBQW1CQyxXQUFVO2tDQUN4Qiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDTTtvQ0FBR04sV0FBVTs4Q0FBY0ssS0FBS0UsS0FBSzs7Ozs7OzhDQUN0Qyw4REFBQ0o7O3dDQUFHRSxLQUFLRyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDLEdBQUU7d0NBQUk7Ozs7Ozs7OENBQ3RDLDhEQUFDVjtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ1Asa0RBQUlBO3dDQUFDaUIsTUFBTUwsS0FBS00sSUFBSTtrREFDckIsNEVBQUNDOzRDQUFPWixXQUFVO3NEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFOdkNLLEtBQUtRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxDO0tBaENNbkI7QUFpQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZWRQYWdlcy5qcz8zYjdiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmNvbnN0IEZlYXR1cmVkUGFnZXMgPSAoe3BhZ2VzLCBwYWdlR3JvdXBOYW1lfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBhZ2VzLCBwYWdlR3JvdXBOYW1lKVxuICAgIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPXsnYmctYmFzZS0yMDAnfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZFwiPntwYWdlR3JvdXBOYW1lID8gcGFnZUdyb3VwTmFtZSA6ICdQYWdlcyd9IG51bSBwYWdlczoge3BhZ2VzLmxlbmd0aH08L2gxPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNlwiPlByb3ZpZGVudCBjdXBpZGl0YXRlIHZvbHVwdGF0ZW0gZXQgaW4uIFF1YWVyYXQgZnVnaWF0IHV0IGFzc3VtZW5kYSBleGNlcHR1cmkgZXhlcmNpdGF0aW9uZW0gcXVhc2kuIEluIGRlbGVuaXRpIGVhcXVlIGF1dCByZXB1ZGlhbmRhZSBldCBhIGlkIG5pc2kuPC9wPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgcGxhY2UtaXRlbXMtY2VudGVyIGdhcC0yJ30+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgIGtleT17cGFnZS5pZH0gY2xhc3NOYW1lPVwiY2FyZCB3LTk2IGJnLW5ldXRyYWwgdGV4dC1uZXV0cmFsLWNvbnRlbnQgaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntwYWdlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYWdlLnBhZ2VfZGVzY3JpcHRpb24uc2xpY2UoMCw1MCl9Li48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5SZWFkIE1vcmU8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3RcIj5EZW55PC9idXR0b24+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQYWdlcztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiRmVhdHVyZWRQYWdlcyIsInBhZ2VzIiwicGFnZUdyb3VwTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCIsInAiLCJtYXAiLCJwYWdlIiwiaDIiLCJ0aXRsZSIsInBhZ2VfZGVzY3JpcHRpb24iLCJzbGljZSIsImhyZWYiLCJzbHVnIiwiYnV0dG9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FeaturedPages.js\n"));

/***/ })

});