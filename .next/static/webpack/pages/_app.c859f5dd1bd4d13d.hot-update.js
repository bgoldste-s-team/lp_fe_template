"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Navbar = (param)=>{\n    let { site  } = param;\n    // const { siteName, siteImgUrl }  = useContext(AppContext);\n    const siteName = site.name;\n    console.log(site);\n    console.log(site.pages);\n    const pages = site.pages;\n    console.log(pages);\n    const determineFontSize = (text)=>{\n        const length = text.length;\n        if (length < 10) return \"text-xl\";\n        if (length < 20) return \"text-lg\";\n        if (length < 30) return \"text-base\";\n        return \"text-sm\";\n    };\n    const dynamicFontSize = determineFontSize(siteName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-base-100 z-50 top-0 sticky\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-start\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"break-all\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"btn btn-ghost normal-case \".concat(dynamicFontSize, \" w-40  \"),\n                        children: siteName\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 40,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown dropdown-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-primary btn-outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-base-content\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M4 6h16M4 12h16M4 18h7\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 141\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, \"home\", false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, undefined),\n                                pages.filter((p)=>p.show_in_navbar === true && !p.is_homepage).map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: p.slug,\n                                            children: p.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 31\n                                        }, undefined)\n                                    }, p.id, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 27\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 46,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar); // <div className=\"navbar sticky  p-2  top-0 z-50\">\n //     <div className=\"navbar-start \">\n //     <div></div>\n //     </div>\n //       {/*  {\n //             site.logo_image_url ?\n //             <img src={site.logo_image_url} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //                 :\n //                 <img src={'https://dexterlabs-public.s3.amazonaws.com/images/pagesake_logo.png'} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //         }*/}\n //     <div className=\"navbar-center  \">\n //         {/*<img src={siteData.site_image} className=\"w-16 rounded-full mr-2\" />*/}\n //     <Link href=\"/\"className=\"btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl  break-words  drop-shadow px-0 mx-0 \"> \n //             {siteName}</Link>\n //         <Link href=\"/\"className=\"btn-md   btn-ghost self-center text-2xl  break-words px-0 mx-0 \">\n //             {siteName}\n //         </Link>\n //     </div>\n //     <div className=\"navbar-end\">\n //         <div className=\"dropdown dropdown-end\">\n //             <label tabIndex={0} className=\"btn btn-ghost   \">\n //             <FaBars className='text-2xl '/>\n //                 {/*<svg width=\"64px\" height=\"64px\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#000000\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5  fill-primary stroke-accent\" stroke-width='1.3'  viewBox=\"0 0 20 20\"  ><g id=\"SVGRepo_iconCarrier\"> <path fill=\"\" className= \"\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*className=\"h-5 w-5 stroke-current\" fill=\"none\" viewBox=\"0 0 64 64\"  stroke-width=\"2\"*/}\n //             </label>\n //             {/*<label tabIndex={0} className=\"btn btn-ghost rounded-btn\">Dropdown</label>*/}\n //             {/*<ul tabIndex={0} className=\"menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0\">*/}\n //             <ul tabIndex={0} className=\"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\">\n //                 <li key={'home'}>\n //                     <Link href=\"/\">Home</Link>\n //                 </li>\n //                 {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (\n //                     <li key={p.id}>\n //                         <Link href={p.slug}>{p.title}</Link>\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     </div>\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzPzNkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge0ZhQmFyc30gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuXG5jb25zdCBOYXZiYXIgPSAoe3NpdGV9KSA9PiB7XG5cblxuICAvLyBjb25zdCB7IHNpdGVOYW1lLCBzaXRlSW1nVXJsIH0gID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3Qgc2l0ZU5hbWUgPSBzaXRlLm5hbWVcblxuICAgIGNvbnNvbGUubG9nKHNpdGUpXG4gICAgY29uc29sZS5sb2coc2l0ZS5wYWdlcylcbiAgICBjb25zdCBwYWdlcyA9IHNpdGUucGFnZXM7XG4gICAgY29uc29sZS5sb2cocGFnZXMpXG4gICAgY29uc3QgZGV0ZXJtaW5lRm9udFNpemUgPSAodGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW5ndGggPCAxMCkgcmV0dXJuICd0ZXh0LXhsJztcbiAgICAgIGlmIChsZW5ndGggPCAyMCkgcmV0dXJuICd0ZXh0LWxnJztcbiAgICAgIGlmIChsZW5ndGggPCAzMCkgcmV0dXJuICd0ZXh0LWJhc2UnO1xuICAgICAgcmV0dXJuICd0ZXh0LXNtJztcbiAgfTtcbiAgICBjb25zdCBkeW5hbWljRm9udFNpemUgPSBkZXRlcm1pbmVGb250U2l6ZShzaXRlTmFtZSk7XG4gIHJldHVybiAoXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBiZy1iYXNlLTEwMCB6LTUwIHRvcC0wIHN0aWNreVwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxuICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBidG4tY2lyY2xlXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE1IDE3aDVsLTEuNDA1LTEuNDA1QTIuMDMyIDIuMDMyIDAgMDExOCAxNC4xNThWMTFhNi4wMDIgNi4wMDIgMCAwMC00LTUuNjU5VjVhMiAyIDAgMTAtNCAwdi4zNDFDNy42NyA2LjE2NSA2IDguMzg4IDYgMTF2My4xNTljMCAuNTM4LS4yMTQgMS4wNTUtLjU5NSAxLjQzNkw0IDE3aDVtNiAwdjFhMyAzIDAgMTEtNiAwdi0xbTYgMEg5XCIgLz48L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UteHMgYmFkZ2UtcHJpbWFyeSBpbmRpY2F0b3ItaXRlbVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPiovfVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9J2JyZWFrLWFsbCc+XG4gICAgPHAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1naG9zdCBub3JtYWwtY2FzZSAke2R5bmFtaWNGb250U2l6ZX0gdy00MCAgYH0+XG4gICAge3NpdGVOYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tZW5kXCI+XG4gICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tb3V0bGluZVwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtYmFzZS1jb250ZW50XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGg3XCIgLz48L3N2Zz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIm1lbnUgbWVudS1zbSBkcm9wZG93bi1jb250ZW50IG10LTMgei1bMV0gcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsnaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZXMuZmlsdGVyKHAgPT4gcC5zaG93X2luX25hdmJhciA9PT0gdHJ1ZSAmJiAhcC5pc19ob21lcGFnZSkubWFwKCAocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Auc2x1Z30+e3AudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuPC9kaXY+XG5cblxuICApXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5cbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIHN0aWNreSAgcC0yICB0b3AtMCB6LTUwXCI+XG5cblxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0IFwiPlxuICAgICAgLy8gICAgIDxkaXY+PC9kaXY+XG4gICAgICAvLyAgICAgPC9kaXY+XG5cbiAgICAgIC8vICAgICAgIHsvKiAge1xuICAgICAgLy8gICAgICAgICAgICAgc2l0ZS5sb2dvX2ltYWdlX3VybCA/XG4gICAgICAvLyAgICAgICAgICAgICA8aW1nIHNyYz17c2l0ZS5sb2dvX2ltYWdlX3VybH0gY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBtci0yIGJnLW5ldXRyYWwtY29udGVudFwiIC8+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgOlxuICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9kZXh0ZXJsYWJzLXB1YmxpYy5zMy5hbWF6b25hd3MuY29tL2ltYWdlcy9wYWdlc2FrZV9sb2dvLnBuZyd9IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgbXItMiBiZy1uZXV0cmFsLWNvbnRlbnRcIiAvPlxuICAgICAgLy8gICAgICAgICB9Ki99XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgXG4gICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyICBcIj5cbiAgICAgIC8vICAgICAgICAgey8qPGltZyBzcmM9e3NpdGVEYXRhLnNpdGVfaW1hZ2V9IGNsYXNzTmFtZT1cInctMTYgcm91bmRlZC1mdWxsIG1yLTJcIiAvPiovfVxuICAgICAgLy8gICAgIDxMaW5rIGhyZWY9XCIvXCJjbGFzc05hbWU9XCJidG4tbWQgIGhpZGRlbiBzbTpibG9jayBidG4tZ2hvc3Qgc2VsZi1jZW50ZXIgdGV4dC1sZyBsZzp0ZXh0LTJ4bCAgYnJlYWstd29yZHMgIGRyb3Atc2hhZG93IHB4LTAgbXgtMCBcIj4gXG4gICAgICAvLyAgICAgICAgICAgICB7c2l0ZU5hbWV9PC9MaW5rPlxuICAgICAgLy8gICAgICAgICA8TGluayBocmVmPVwiL1wiY2xhc3NOYW1lPVwiYnRuLW1kICAgYnRuLWdob3N0IHNlbGYtY2VudGVyIHRleHQtMnhsICBicmVhay13b3JkcyBweC0wIG14LTAgXCI+XG5cbiAgICAgIC8vICAgICAgICAgICAgIHtzaXRlTmFtZX1cbiAgICAgIC8vICAgICAgICAgPC9MaW5rPlxuICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuXG4gICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tZW5kXCI+XG5cbiAgICAgIC8vICAgICAgICAgICAgIDxsYWJlbCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCAgIFwiPlxuICAgICAgLy8gICAgICAgICAgICAgPEZhQmFycyBjbGFzc05hbWU9J3RleHQtMnhsICcvPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIHsvKjxzdmcgd2lkdGg9XCI2NHB4XCIgaGVpZ2h0PVwiNjRweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOSA0YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDAxMC0yaDE2YTEgMSAwIDAxMSAxem0wIDZhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMTEwLTJoMTZhMSAxIDAgMDExIDF6bS0xIDdhMSAxIDAgMTAwLTJIMmExIDEgMCAxMDAgMmgxNnpcIj48L3BhdGg+IDwvZz48L3N2Zz4qL31cbiAgICAgIC8vICAgICAgICAgICAgICAgICB7Lyo8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01ICBmaWxsLXByaW1hcnkgc3Ryb2tlLWFjY2VudFwiIHN0cm9rZS13aWR0aD0nMS4zJyAgdmlld0JveD1cIjAgMCAyMCAyMFwiICA+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGZpbGw9XCJcIiBjbGFzc05hbWU9IFwiXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTkgNGExIDEgMCAwMS0xIDFIMmExIDEgMCAwMTAtMmgxNmExIDEgMCAwMTEgMXptMCA2YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDExMC0yaDE2YTEgMSAwIDAxMSAxem0tMSA3YTEgMSAwIDEwMC0ySDJhMSAxIDAgMTAwIDJoMTZ6XCI+PC9wYXRoPiA8L2c+PC9zdmc+Ki99XG4gICAgICAvLyAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwiaC01IHctNSBzdHJva2UtY3VycmVudFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiICBzdHJva2Utd2lkdGg9XCIyXCIqL31cbiAgICAgIC8vICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAvLyAgICAgICAgICAgICB7Lyo8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3Qgcm91bmRlZC1idG5cIj5Ecm9wZG93bjwvbGFiZWw+Ki99XG4gICAgICAvLyAgICAgICAgICAgICB7Lyo8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIm1lbnUgZHJvcGRvd24tY29udGVudCAgICBiZy1wcmltYXJ5LWNvbnRlbnQgdGV4dC1wcmltYXJ5ICBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggbXgtYXV0byB3LTcyIG10LTQgcC0wXCI+Ki99XG5cbiAgICAgIC8vICAgICAgICAgICAgIDx1bCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9eydob21lJ30+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgIC8vICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIHtwYWdlcy5maWx0ZXIocCA9PiBwLnNob3dfaW5fbmF2YmFyID09PSB0cnVlICYmICFwLmlzX2hvbWVwYWdlKS5tYXAoIChwKSA9PiAoXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3AuaWR9PlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cC5zbHVnfT57cC50aXRsZX08L0xpbms+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgKSl9XG5cblxuXG4gICAgICAvLyAgICAgICAgICAgICA8L3VsPlxuICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgIC8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbIkxpbmsiLCJGYUJhcnMiLCJOYXZiYXIiLCJzaXRlIiwic2l0ZU5hbWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInBhZ2VzIiwiZGV0ZXJtaW5lRm9udFNpemUiLCJ0ZXh0IiwibGVuZ3RoIiwiZHluYW1pY0ZvbnRTaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxhYmVsIiwidGFiSW5kZXgiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInVsIiwibGkiLCJocmVmIiwiZmlsdGVyIiwic2hvd19pbl9uYXZiYXIiLCJpc19ob21lcGFnZSIsIm1hcCIsInNsdWciLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});