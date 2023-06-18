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

/***/ "./src/components/TableOfContentsBlock.js":
/*!************************************************!*\
  !*** ./src/components/TableOfContentsBlock.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TableOfContentsBlock = (param)=>{\n    let { header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link , page  } = param;\n    const imageContainerClasses = \"w-full h-auto mx-auto\";\n    const headerClasses = \"text-3xl font-bold mb-4 text-center\";\n    const subheaderClasses = \"text-lg mb-6 text-center\";\n    const buttonClasses = \"bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100\";\n    const buttonContainerClasses = \"flex justify-center gap-4 mt-4\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"TABLE OF CONTENTS\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/TableOfContentsBlock.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"p-4 space-y-2\",\n                children: page.content_blocks.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\".concat(c.order),\n                            children: [\n                                c.order,\n                                \" \",\n                                c.header,\n                                \" \",\n                                c.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/TableOfContentsBlock.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined)\n                    }, c.id, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/TableOfContentsBlock.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/TableOfContentsBlock.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/TableOfContentsBlock.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = TableOfContentsBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableOfContentsBlock);\nvar _c;\n$RefreshReg$(_c, \"TableOfContentsBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHNCbG9jay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNHO0FBRTdCLE1BQU1FLHVCQUF1QixTQUF5RjtRQUF4RixFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFQyxXQUFVLEVBQUVDLEtBQUksRUFBRTtJQUM3RyxNQUFNQyx3QkFBd0I7SUFDOUIsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLG1CQUFtQjtJQUN6QixNQUFNQyxnQkFBZ0I7SUFDdEIsTUFBTUMseUJBQXlCO0lBSS9CLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXOzswQkFDWiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUdGLFdBQVc7MEJBQ2RQLEtBQUtVLGNBQWMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGtCQUV0Qiw4REFBQ0M7a0NBQ0csNEVBQUN0QixrREFBSUE7NEJBQUN1QixNQUFNLElBQVksT0FBUkYsRUFBRUcsS0FBSzs7Z0NBQ2hCSCxFQUFFRyxLQUFLO2dDQUFDO2dDQUFFSCxFQUFFbkIsTUFBTTtnQ0FBQztnQ0FBRW1CLEVBQUVJLElBQUk7Ozs7Ozs7dUJBRjdCSixFQUFFSyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVTdCO0tBekJNekI7QUEyQk4sK0RBQWVBLG9CQUFvQkEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHNCbG9jay5qcz83NWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBUYWJsZU9mQ29udGVudHNCbG9jayA9ICh7IGhlYWRlciwgc3ViaGVhZGVyLCBjdGExX3RleHQsIGN0YTJfdGV4dCwgY3RhMV9saW5rLCBjdGEyX2xpbmssIGltYWdlX2xpbmssIHBhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyQ2xhc3NlcyA9IFwidy1mdWxsIGgtYXV0byBteC1hdXRvXCI7XG4gICAgY29uc3QgaGVhZGVyQ2xhc3NlcyA9IFwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIjtcbiAgICBjb25zdCBzdWJoZWFkZXJDbGFzc2VzID0gXCJ0ZXh0LWxnIG1iLTYgdGV4dC1jZW50ZXJcIjtcbiAgICBjb25zdCBidXR0b25DbGFzc2VzID0gXCJiZy13aGl0ZSB0ZXh0LWJsdWUtNTAwIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtMTAwXCI7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyQ2xhc3NlcyA9IFwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBtdC00XCI7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0ZXh0LWNlbnRlcid9PlxuICAgICAgICAgICAgPGgxPlRBQkxFIE9GIENPTlRFTlRTPC9oMT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9eydwLTQgc3BhY2UteS0yJ30+XG4gICAgICAgICAgICB7cGFnZS5jb250ZW50X2Jsb2Nrcy5tYXAoKGMpID0+IChcblxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2MuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgIyR7Yy5vcmRlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Mub3JkZXJ9IHtjLmhlYWRlcn0ge2MudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlT2ZDb250ZW50c0Jsb2NrIDtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlRhYmxlT2ZDb250ZW50c0Jsb2NrIiwiaGVhZGVyIiwic3ViaGVhZGVyIiwiY3RhMV90ZXh0IiwiY3RhMl90ZXh0IiwiY3RhMV9saW5rIiwiY3RhMl9saW5rIiwiaW1hZ2VfbGluayIsInBhZ2UiLCJpbWFnZUNvbnRhaW5lckNsYXNzZXMiLCJoZWFkZXJDbGFzc2VzIiwic3ViaGVhZGVyQ2xhc3NlcyIsImJ1dHRvbkNsYXNzZXMiLCJidXR0b25Db250YWluZXJDbGFzc2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsImNvbnRlbnRfYmxvY2tzIiwibWFwIiwiYyIsImxpIiwiaHJlZiIsIm9yZGVyIiwidHlwZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TableOfContentsBlock.js\n"));

/***/ })

});