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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AmazonProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_review_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/review_data.json */ \"./src/data/review_data.json\");\n/* harmony import */ var _lib_formatSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/formatSlug */ \"./src/lib/formatSlug.js\");\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\n\n\n\n\n\n\nfunction AmazonProductCard(param) {\n    let { product  } = param;\n    console.log(product);\n    if (!product || !product.product_name || !product.url) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-compact bg-base-100 shadow-xl relative\",\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.thumbnail_image,\n                    alt: \"Album\",\n                    className: \"h-48 p-4\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body flex flex-col justify-between\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"card-title\",\n                            children: product.product_name\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-between align-end \",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: product.brand\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 11\n                                    }, this),\n                                    product.price_value && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"badge badge-success\",\n                                        children: [\n                                            \"$\",\n                                            product.price_value\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: product.url,\n                                className: \"btn btn-primary\",\n                                children: [\n                                    \"Buy Now\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaCartShopping, {\n                                            className: \"mx-1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/AmazonProductCard.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n} // <div className=\"bg-secondary-content text-secondary card card-compact bg-base-100 shadow-xl \">\n //      <figure>\n //        <Image\n //          src={product.thumbnail_image}\n //          alt={product.name}\n //          width=\"0\"\n //          height=\"0\"\n //          sizes=\"100vw\"\n //          className=\"h-48 w-48 \"\n //        ></Image>\n //      </figure>\n //        <div className=\"card-body \">\n //            <div className=\"card-title \">\n //              <h2 className=\"prose-md text-neutral-content\">\n //                <Link className=\"text-neutral\" href={product.url}>{product.product_name}</Link>\n //              </h2>\n //            </div>\n //            <div className=\"card-actions grid grid-cols-2\">\n //                    <Link className=\"btn-link btn\" href={'asdf'}>\n //                        Read review\n //                    </Link>\n //                <button className=\"btn btn-primary\">\n //                  <Link href={product.url}>\n //                    Buy Now{\" \"}\n //                  </Link>\n //                </button>\n //          </div>\n //        </div>\n //    </div>\n_c = AmazonProductCard;\nvar _c;\n$RefreshReg$(_c, \"AmazonProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbWF6b25Qcm9kdWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ29CO0FBQ1A7QUFJakI7QUFDVixTQUFTSyxrQkFBa0IsS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFHWixJQUFJLENBQUNBLFdBQVcsQ0FBQ0EsUUFBUUcsWUFBWSxJQUFJLENBQUNILFFBQVFJLEdBQUcsRUFBRTtRQUNyRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0YscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7O1lBQW1EOzBCQUNoRSw4REFBQ0M7MEJBQU8sNEVBQUNDO29CQUFJQyxLQUFLVCxRQUFRVSxlQUFlO29CQUFFQyxLQUFJO29CQUFRTCxXQUFVOzs7Ozs7Ozs7OzswQkFDakUsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFBMEM7a0NBQ3ZELDhEQUFDRDtrQ0FDQyw0RUFBQ087NEJBQUdOLFdBQVU7c0NBQWNOLFFBQVFHLFlBQVk7Ozs7Ozs7Ozs7O2tDQUlsRCw4REFBQ0U7d0JBQUlDLFdBQVU7OzRCQUEwQzswQ0FDdkQsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ087a0RBQUdiLFFBQVFjLEtBQUs7Ozs7OztvQ0FDaEJkLFFBQVFlLFdBQVcsa0JBQ2xCLDhEQUFDVjt3Q0FBSUMsV0FBVTs7NENBQXNCOzRDQUFFTixRQUFRZSxXQUFXOzs7Ozs7Ozs7Ozs7OzBDQUs5RCw4REFBQ3BCLGtEQUFJQTtnQ0FBQ3FCLE1BQU1oQixRQUFRSSxHQUFHO2dDQUFFRSxXQUFVOztvQ0FBa0I7a0RBRW5ELDhEQUFDVztrREFDQyw0RUFBQ25CLDJEQUFjQTs0Q0FBQ1EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEMsQ0FBQyxDQUdBLGlHQUFpRztDQUNqRyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLHlDQUF5QztDQUN6Qyw4QkFBOEI7Q0FDOUIscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsa0NBQWtDO0NBQ2xDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLDJDQUEyQztDQUMzQyw4REFBOEQ7Q0FDOUQsaUdBQWlHO0NBQ2pHLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsNkRBQTZEO0NBRTdELG1FQUFtRTtDQUNuRSxxQ0FBcUM7Q0FDckMsNkJBQTZCO0NBRTdCLHNEQUFzRDtDQUN0RCw2Q0FBNkM7Q0FDN0Msa0NBQWtDO0NBRWxDLDJCQUEyQjtDQUMzQiwyQkFBMkI7Q0FJM0Isa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0tBeEVXUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbWF6b25Qcm9kdWN0Q2FyZC5qcz8zYTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIkAvZGF0YS9yZXZpZXdfZGF0YS5qc29uXCI7XG5pbXBvcnQgZm9ybWF0U2x1ZyBmcm9tIFwiQC9saWIvZm9ybWF0U2x1Z1wiO1xuaW1wb3J0IHtcbiAgIEZhQ2FydFNob3BwaW5nXG5cbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW1hem9uUHJvZHVjdENhcmQoeyBwcm9kdWN0IH0pIHtcbiAgY29uc29sZS5sb2cocHJvZHVjdClcblxuXG4gIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5wcm9kdWN0X25hbWUgfHwgIXByb2R1Y3QudXJsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1jb21wYWN0IGJnLWJhc2UtMTAwIHNoYWRvdy14bCByZWxhdGl2ZVwiPiB7LyogQWRkIHJlbGF0aXZlIGhlcmUgKi99XG4gICAgPGZpZ3VyZT48aW1nIHNyYz17cHJvZHVjdC50aHVtYm5haWxfaW1hZ2V9IGFsdD1cIkFsYnVtXCIgY2xhc3NOYW1lPSdoLTQ4IHAtNCcgLz48L2ZpZ3VyZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPiB7LyogQWRqdXN0ZWQgaGVyZSAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvaDI+XG4gICAgICAgXG4gICAgICAgIHsvKjxwPntwcm9kdWN0LnByb2R1Y3RfZGVzY3JpcHRpb259PC9wPiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tZW5kIFwiPiB7LyogQWRqdXN0ZWQgaGVyZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMic+XG4gICAgICAgICAgPHA+e3Byb2R1Y3QuYnJhbmR9PC9wPlxuICAgICAgICAgIHtwcm9kdWN0LnByaWNlX3ZhbHVlICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2Utc3VjY2Vzcyc+JHtwcm9kdWN0LnByaWNlX3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIH1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TGluayBocmVmPXtwcm9kdWN0LnVybH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgQnV5IE5vd1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZhQ2FydFNob3BwaW5nIGNsYXNzTmFtZT0nbXgtMScgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcbn1cblxuXG4gLy8gPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnktY29udGVudCB0ZXh0LXNlY29uZGFyeSBjYXJkIGNhcmQtY29tcGFjdCBiZy1iYXNlLTEwMCBzaGFkb3cteGwgXCI+XG4gLy8gICAgICA8ZmlndXJlPlxuIC8vICAgICAgICA8SW1hZ2VcbiAvLyAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsX2ltYWdlfVxuIC8vICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuIC8vICAgICAgICAgIHdpZHRoPVwiMFwiXG4gLy8gICAgICAgICAgaGVpZ2h0PVwiMFwiXG4gLy8gICAgICAgICAgc2l6ZXM9XCIxMDB2d1wiXG4gLy8gICAgICAgICAgY2xhc3NOYW1lPVwiaC00OCB3LTQ4IFwiXG4gLy8gICAgICAgID48L0ltYWdlPlxuIC8vICAgICAgPC9maWd1cmU+XG4gLy8gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxuIC8vICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPlxuIC8vICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvc2UtbWQgdGV4dC1uZXV0cmFsLWNvbnRlbnRcIj5cbiAvLyAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWxcIiBocmVmPXtwcm9kdWN0LnVybH0+e3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvTGluaz5cbiAvLyAgICAgICAgICAgICAgPC9oMj5cbiAvLyAgICAgICAgICAgIDwvZGl2PlxuIC8vICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZ3JpZCBncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICAgIFxuIC8vICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4tbGluayBidG5cIiBocmVmPXsnYXNkZid9PlxuIC8vICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCByZXZpZXdcbiAvLyAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuIC8vICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gLy8gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9kdWN0LnVybH0+XG4gLy8gICAgICAgICAgICAgICAgICAgIEJ1eSBOb3d7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgXG4gLy8gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gLy8gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cblxuXG4gLy8gICAgICAgICAgPC9kaXY+XG4gLy8gICAgICAgIDwvZGl2PlxuIC8vICAgIDwvZGl2PiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJyZXZpZXdEYXRhIiwiZm9ybWF0U2x1ZyIsIkZhQ2FydFNob3BwaW5nIiwiQW1hem9uUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RfbmFtZSIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImZpZ3VyZSIsImltZyIsInNyYyIsInRodW1ibmFpbF9pbWFnZSIsImFsdCIsImgyIiwicCIsImJyYW5kIiwicHJpY2VfdmFsdWUiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AmazonProductCard.js\n"));

/***/ })

});