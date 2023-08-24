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

/***/ "./src/components/AmazonProductCard.js":
/*!*********************************************!*\
  !*** ./src/components/AmazonProductCard.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AmazonProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_review_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/review_data.json */ \"./src/data/review_data.json\");\n/* harmony import */ var _lib_formatSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/formatSlug */ \"./src/lib/formatSlug.js\");\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\n\n\n\n\n\n\nfunction AmazonProductCard(param) {\n    let { product  } = param;\n    console.log(product);\n    if (!product || !product.product_name || !product.url) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-compact  bg-base-100 shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.thumbnail_image,\n                    alt: \"Album\",\n                    className: \" h-24 w-24p-4\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title\",\n                        children: product.product_name\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: product.brand\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, this),\n                    product.price_value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge badge-success\",\n                        children: [\n                            \"$\",\n                            product.price_value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: product.url,\n                            className: \"btn btn-primary\",\n                            children: [\n                                \"Buy Now\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaCartShopping, {\n                                        className: \"mx-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                lineNumber: 19,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n        lineNumber: 17,\n        columnNumber: 1\n    }, this);\n} // <div className=\"bg-secondary-content text-secondary card card-compact bg-base-100 shadow-xl \">\n //      <figure>\n //        <Image\n //          src={product.thumbnail_image}\n //          alt={product.name}\n //          width=\"0\"\n //          height=\"0\"\n //          sizes=\"100vw\"\n //          className=\"h-48 w-48 \"\n //        ></Image>\n //      </figure>\n //        <div className=\"card-body \">\n //            <div className=\"card-title \">\n //              <h2 className=\"prose-md text-neutral-content\">\n //                <Link className=\"text-neutral\" href={product.url}>{product.product_name}</Link>\n //              </h2>\n //            </div>\n //            <div className=\"card-actions grid grid-cols-2\">\n //                    <Link className=\"btn-link btn\" href={'asdf'}>\n //                        Read review\n //                    </Link>\n //                <button className=\"btn btn-primary\">\n //                  <Link href={product.url}>\n //                    Buy Now{\" \"}\n //                  </Link>\n //                </button>\n //          </div>\n //        </div>\n //    </div>\n_c = AmazonProductCard;\nvar _c;\n$RefreshReg$(_c, \"AmazonProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbWF6b25Qcm9kdWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ29CO0FBQ1A7QUFJakI7QUFDVixTQUFTSyxrQkFBa0IsS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFHWixJQUFJLENBQUNBLFdBQVcsQ0FBQ0EsUUFBUUcsWUFBWSxJQUFJLENBQUNILFFBQVFJLEdBQUcsRUFBRTtRQUNyRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0QscUJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBTyw0RUFBQ0M7b0JBQUlDLEtBQUtULFFBQVFVLGVBQWU7b0JBQUVDLEtBQUk7b0JBQVFMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUNqRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBR04sV0FBVTtrQ0FBY04sUUFBUUcsWUFBWTs7Ozs7O2tDQUNoRCw4REFBQ1U7a0NBQUdiLFFBQVFjLEtBQUs7Ozs7OztvQkFFZmQsUUFBUWUsV0FBVyxrQkFDckIsOERBQUNWO3dCQUFJQyxXQUFVOzs0QkFBc0I7NEJBQUVOLFFBQVFlLFdBQVc7Ozs7Ozs7a0NBRTFELDhEQUFDVjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1gsa0RBQUlBOzRCQUFDcUIsTUFBTWhCLFFBQVFJLEdBQUc7NEJBQUVFLFdBQVU7O2dDQUFrQjs4Q0FFbkQsOERBQUNXOzhDQUNDLDRFQUFDbkIsMkRBQWNBO3dDQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXBDLENBQUMsQ0FHQSxpR0FBaUc7Q0FDakcsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix5Q0FBeUM7Q0FDekMsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLGtDQUFrQztDQUNsQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHNDQUFzQztDQUN0QywyQ0FBMkM7Q0FDM0MsOERBQThEO0NBQzlELGlHQUFpRztDQUNqRyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLDZEQUE2RDtDQUU3RCxtRUFBbUU7Q0FDbkUscUNBQXFDO0NBQ3JDLDZCQUE2QjtDQUU3QixzREFBc0Q7Q0FDdEQsNkNBQTZDO0NBQzdDLGtDQUFrQztDQUVsQywyQkFBMkI7Q0FDM0IsMkJBQTJCO0NBSTNCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsWUFBWTtLQXZFV1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW1hem9uUHJvZHVjdENhcmQuanM/M2E5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCByZXZpZXdEYXRhIGZyb20gXCJAL2RhdGEvcmV2aWV3X2RhdGEuanNvblwiO1xuaW1wb3J0IGZvcm1hdFNsdWcgZnJvbSBcIkAvbGliL2Zvcm1hdFNsdWdcIjtcbmltcG9ydCB7XG4gICBGYUNhcnRTaG9wcGluZ1xuXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFtYXpvblByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9KSB7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3QpXG5cblxuICBpZiAoIXByb2R1Y3QgfHwgIXByb2R1Y3QucHJvZHVjdF9uYW1lIHx8ICFwcm9kdWN0LnVybCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1jb21wYWN0ICBiZy1iYXNlLTEwMCBzaGFkb3cteGxcIj5cbiAgPGZpZ3VyZT48aW1nIHNyYz17cHJvZHVjdC50aHVtYm5haWxfaW1hZ2V9IGFsdD1cIkFsYnVtXCIgY2xhc3NOYW1lPScgaC0yNCB3LTI0cC00Jy8+PC9maWd1cmU+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgPGgyIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC5wcm9kdWN0X25hbWV9PC9oMj5cbiAgICA8cD57cHJvZHVjdC5icmFuZH08L3A+XG4gICAgey8qPHA+e3Byb2R1Y3QucHJvZHVjdF9kZXNjcmlwdGlvbj99PC9wPiovfVxuICAgIHsgcHJvZHVjdC5wcmljZV92YWx1ZSAmJiBcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2Utc3VjY2Vzcyc+JHtwcm9kdWN0LnByaWNlX3ZhbHVlfTwvZGl2PlxuICB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1lbmRcIj5cbiAgICAgIDxMaW5rIGhyZWY9e3Byb2R1Y3QudXJsfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgQnV5IE5vd1xuICAgICAgICA8c3Bhbj4gXG4gICAgICAgICAgPEZhQ2FydFNob3BwaW5nIGNsYXNzTmFtZT0nbXgtMScvPlxuICAgICAgICA8L3NwYW4gPlxuICAgICAgIFxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxuXG4gICAgXG4gICk7XG59XG5cblxuIC8vIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5LWNvbnRlbnQgdGV4dC1zZWNvbmRhcnkgY2FyZCBjYXJkLWNvbXBhY3QgYmctYmFzZS0xMDAgc2hhZG93LXhsIFwiPlxuIC8vICAgICAgPGZpZ3VyZT5cbiAvLyAgICAgICAgPEltYWdlXG4gLy8gICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbF9pbWFnZX1cbiAvLyAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAvLyAgICAgICAgICB3aWR0aD1cIjBcIlxuIC8vICAgICAgICAgIGhlaWdodD1cIjBcIlxuIC8vICAgICAgICAgIHNpemVzPVwiMTAwdndcIlxuIC8vICAgICAgICAgIGNsYXNzTmFtZT1cImgtNDggdy00OCBcIlxuIC8vICAgICAgICA+PC9JbWFnZT5cbiAvLyAgICAgIDwvZmlndXJlPlxuIC8vICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBcIj5cbiAvLyAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj5cbiAvLyAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb3NlLW1kIHRleHQtbmV1dHJhbC1jb250ZW50XCI+XG4gLy8gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsXCIgaHJlZj17cHJvZHVjdC51cmx9Pntwcm9kdWN0LnByb2R1Y3RfbmFtZX08L0xpbms+XG4gLy8gICAgICAgICAgICAgIDwvaDI+XG4gLy8gICAgICAgICAgICA8L2Rpdj5cbiAvLyAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGdyaWQgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgICAgICBcbiAvLyAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuLWxpbmsgYnRuXCIgaHJlZj17J2FzZGYnfT5cbiAvLyAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgcmV2aWV3XG4gLy8gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAvLyAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuIC8vICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvZHVjdC51cmx9PlxuIC8vICAgICAgICAgICAgICAgICAgICBCdXkgTm93e1wiIFwifVxuICAgICAgICAgICAgICAgICAgIFxuIC8vICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuIC8vICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG5cblxuIC8vICAgICAgICAgIDwvZGl2PlxuIC8vICAgICAgICA8L2Rpdj5cbiAvLyAgICA8L2Rpdj4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwicmV2aWV3RGF0YSIsImZvcm1hdFNsdWciLCJGYUNhcnRTaG9wcGluZyIsIkFtYXpvblByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0X25hbWUiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWd1cmUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWxfaW1hZ2UiLCJhbHQiLCJoMiIsInAiLCJicmFuZCIsInByaWNlX3ZhbHVlIiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AmazonProductCard.js\n"));

/***/ })

});