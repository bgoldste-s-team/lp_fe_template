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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Navbar = (param)=>{\n    let { site  } = param;\n    // const { siteName, siteImgUrl }  = useContext(AppContext);\n    const siteName = site.name;\n    console.log(site);\n    console.log(site.pages);\n    const pages = site.pages;\n    console.log(pages);\n    const determineFontSize = (text)=>{\n        const length = text.length;\n        if (length < 10) return \"text-xl\";\n        if (length < 20) return \"text-lg\";\n        if (length < 30) return \"text-base\";\n        return \"text-sm\";\n    };\n    const dynamicFontSize = determineFontSize(siteName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-base-100 border-b-2 border-accent  sticky  top-0 shadow-lg shadow-cyan-500/50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"break-all\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"btn btn-ghost normal-case \".concat(dynamicFontSize, \" w-40  \"),\n                        children: siteName\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 30,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            tabIndex: 0,\n                            className: \"btn btn-primary btn-outline\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-base-content\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M4 6h16M4 12h16M4 18h7\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 141\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 38,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            tabIndex: 0,\n                            className: \"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, \"home\", false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 23\n                                }, undefined),\n                                pages.filter((p)=>p.show_in_navbar === true && !p.is_homepage).map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: p.slug,\n                                            children: p.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 31\n                                        }, undefined)\n                                    }, p.id, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 27\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-ghost btn-circle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 w-5\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                lineNumber: 60,\n                                columnNumber: 121\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-ghost btn-circle\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"indicator\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-5 w-5\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    stroke: \"currentColor\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: \"2\",\n                                        d: \"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 123\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"badge badge-xs badge-primary indicator-item\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n                lineNumber: 58,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/cs_fe/src/components/Navbar.js\",\n        lineNumber: 28,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar); // <div className=\"navbar sticky  p-2  top-0 z-50\">\n //     <div className=\"navbar-start \">\n //     <div></div>\n //     </div>\n //       {/*  {\n //             site.logo_image_url ?\n //             <img src={site.logo_image_url} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //                 :\n //                 <img src={'https://dexterlabs-public.s3.amazonaws.com/images/pagesake_logo.png'} className=\"w-20 h-20 rounded-full mr-2 bg-neutral-content\" />\n //         }*/}\n //     <div className=\"navbar-center  \">\n //         {/*<img src={siteData.site_image} className=\"w-16 rounded-full mr-2\" />*/}\n //     <Link href=\"/\"className=\"btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl  break-words  drop-shadow px-0 mx-0 \"> \n //             {siteName}</Link>\n //         <Link href=\"/\"className=\"btn-md   btn-ghost self-center text-2xl  break-words px-0 mx-0 \">\n //             {siteName}\n //         </Link>\n //     </div>\n //     <div className=\"navbar-end\">\n //         <div className=\"dropdown dropdown-end\">\n //             <label tabIndex={0} className=\"btn btn-ghost   \">\n //             <FaBars className='text-2xl '/>\n //                 {/*<svg width=\"64px\" height=\"64px\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path fill=\"#000000\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5  fill-primary stroke-accent\" stroke-width='1.3'  viewBox=\"0 0 20 20\"  ><g id=\"SVGRepo_iconCarrier\"> <path fill=\"\" className= \"\" fill-rule=\"evenodd\" d=\"M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z\"></path> </g></svg>*/}\n //                 {/*className=\"h-5 w-5 stroke-current\" fill=\"none\" viewBox=\"0 0 64 64\"  stroke-width=\"2\"*/}\n //             </label>\n //             {/*<label tabIndex={0} className=\"btn btn-ghost rounded-btn\">Dropdown</label>*/}\n //             {/*<ul tabIndex={0} className=\"menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0\">*/}\n //             <ul tabIndex={0} className=\"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\">\n //                 <li key={'home'}>\n //                     <Link href=\"/\">Home</Link>\n //                 </li>\n //                 {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (\n //                     <li key={p.id}>\n //                         <Link href={p.slug}>{p.title}</Link>\n //                     </li>\n //                 ))}\n //             </ul>\n //         </div>\n //     </div>\n // </div>\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlLO0NBQ2pLLGVBQWU7Q0FJZix3Q0FBd0M7Q0FDeEMscUZBQXFGO0NBQ3JGLHlJQUF5STtDQUN6SSxnQ0FBZ0M7Q0FDaEMscUdBQXFHO0NBRXJHLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1DQUFtQztDQUVuQyxrREFBa0Q7Q0FFbEQsZ0VBQWdFO0NBQ2hFLDhDQUE4QztDQUM5QywyZEFBMmQ7Q0FDM2QsaVlBQWlZO0NBQ2pZLDZHQUE2RztDQUM3Ryx1QkFBdUI7Q0FDdkIsK0ZBQStGO0NBQy9GLGlLQUFpSztDQUVqSywwR0FBMEc7Q0FDMUcsb0NBQW9DO0NBQ3BDLGlEQUFpRDtDQUNqRCx3QkFBd0I7Q0FDeEIsZ0dBQWdHO0NBQ2hHLHNDQUFzQztDQUN0QywrREFBK0Q7Q0FDL0QsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUl0QixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcz8zZDBlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtGYUJhcnN9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuY29uc3QgTmF2YmFyID0gKHtzaXRlfSkgPT4ge1xuXG5cbiAgLy8gY29uc3QgeyBzaXRlTmFtZSwgc2l0ZUltZ1VybCB9ICA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHNpdGVOYW1lID0gc2l0ZS5uYW1lXG5cbiAgICBjb25zb2xlLmxvZyhzaXRlKVxuICAgIGNvbnNvbGUubG9nKHNpdGUucGFnZXMpXG4gICAgY29uc3QgcGFnZXMgPSBzaXRlLnBhZ2VzO1xuICAgIGNvbnNvbGUubG9nKHBhZ2VzKVxuICAgIGNvbnN0IGRldGVybWluZUZvbnRTaXplID0gKHRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuZ3RoIDwgMTApIHJldHVybiAndGV4dC14bCc7XG4gICAgICBpZiAobGVuZ3RoIDwgMjApIHJldHVybiAndGV4dC1sZyc7XG4gICAgICBpZiAobGVuZ3RoIDwgMzApIHJldHVybiAndGV4dC1iYXNlJztcbiAgICAgIHJldHVybiAndGV4dC1zbSc7XG4gIH07XG4gICAgY29uc3QgZHluYW1pY0ZvbnRTaXplID0gZGV0ZXJtaW5lRm9udFNpemUoc2l0ZU5hbWUpO1xuICByZXR1cm4gKFxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctYmFzZS0xMDAgYm9yZGVyLWItMiBib3JkZXItYWNjZW50ICBzdGlja3kgIHRvcC0wIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTBcIj5cbiAgXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdicmVhay1hbGwnPlxuICAgIDxwIGNsYXNzTmFtZT17YGJ0biBidG4tZ2hvc3Qgbm9ybWFsLWNhc2UgJHtkeW5hbWljRm9udFNpemV9IHctNDAgIGB9PlxuICAgIHtzaXRlTmFtZX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tb3V0bGluZVwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtYmFzZS1jb250ZW50XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGg3XCIgLz48L3N2Zz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cIm1lbnUgbWVudS1zbSBkcm9wZG93bi1jb250ZW50IG10LTMgei1bMV0gcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsnaG9tZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZXMuZmlsdGVyKHAgPT4gcC5zaG93X2luX25hdmJhciA9PT0gdHJ1ZSAmJiAhcC5pc19ob21lcGFnZSkubWFwKCAocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Auc2x1Z30+e3AudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWVuZFwiPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBidG4tY2lyY2xlXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTUgdy01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCIgLz48L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLWNpcmNsZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE1IDE3aDVsLTEuNDA1LTEuNDA1QTIuMDMyIDIuMDMyIDAgMDExOCAxNC4xNThWMTFhNi4wMDIgNi4wMDIgMCAwMC00LTUuNjU5VjVhMiAyIDAgMTAtNCAwdi4zNDFDNy42NyA2LjE2NSA2IDguMzg4IDYgMTF2My4xNTljMCAuNTM4LS4yMTQgMS4wNTUtLjU5NSAxLjQzNkw0IDE3aDVtNiAwdjFhMyAzIDAgMTEtNiAwdi0xbTYgMEg5XCIgLz48L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UteHMgYmFkZ2UtcHJpbWFyeSBpbmRpY2F0b3ItaXRlbVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbiAgKVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG4gICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBzdGlja3kgIHAtMiAgdG9wLTAgei01MFwiPlxuXG5cbiAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydCBcIj5cbiAgICAgIC8vICAgICA8ZGl2PjwvZGl2PlxuICAgICAgLy8gICAgIDwvZGl2PlxuXG4gICAgICAvLyAgICAgICB7LyogIHtcbiAgICAgIC8vICAgICAgICAgICAgIHNpdGUubG9nb19pbWFnZV91cmwgP1xuICAgICAgLy8gICAgICAgICAgICAgPGltZyBzcmM9e3NpdGUubG9nb19pbWFnZV91cmx9IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgbXItMiBiZy1uZXV0cmFsLWNvbnRlbnRcIiAvPlxuICAgICAgLy8gICAgICAgICAgICAgICAgIDpcbiAgICAgIC8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vZGV4dGVybGFicy1wdWJsaWMuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvcGFnZXNha2VfbG9nby5wbmcnfSBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC1mdWxsIG1yLTIgYmctbmV1dHJhbC1jb250ZW50XCIgLz5cbiAgICAgIC8vICAgICAgICAgfSovfVxuXG4gICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNlbnRlciAgXCI+XG4gICAgICAvLyAgICAgICAgIHsvKjxpbWcgc3JjPXtzaXRlRGF0YS5zaXRlX2ltYWdlfSBjbGFzc05hbWU9XCJ3LTE2IHJvdW5kZWQtZnVsbCBtci0yXCIgLz4qL31cbiAgICAgIC8vICAgICA8TGluayBocmVmPVwiL1wiY2xhc3NOYW1lPVwiYnRuLW1kICBoaWRkZW4gc206YmxvY2sgYnRuLWdob3N0IHNlbGYtY2VudGVyIHRleHQtbGcgbGc6dGV4dC0yeGwgIGJyZWFrLXdvcmRzICBkcm9wLXNoYWRvdyBweC0wIG14LTAgXCI+IFxuICAgICAgLy8gICAgICAgICAgICAge3NpdGVOYW1lfTwvTGluaz5cbiAgICAgIC8vICAgICAgICAgPExpbmsgaHJlZj1cIi9cImNsYXNzTmFtZT1cImJ0bi1tZCAgIGJ0bi1naG9zdCBzZWxmLWNlbnRlciB0ZXh0LTJ4bCAgYnJlYWstd29yZHMgcHgtMCBteC0wIFwiPlxuXG4gICAgICAvLyAgICAgICAgICAgICB7c2l0ZU5hbWV9XG4gICAgICAvLyAgICAgICAgIDwvTGluaz5cbiAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cblxuICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWVuZFwiPlxuXG4gICAgICAvLyAgICAgICAgICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgICBcIj5cbiAgICAgIC8vICAgICAgICAgICAgIDxGYUJhcnMgY2xhc3NOYW1lPSd0ZXh0LTJ4bCAnLz5cbiAgICAgIC8vICAgICAgICAgICAgICAgICB7Lyo8c3ZnIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTkgNGExIDEgMCAwMS0xIDFIMmExIDEgMCAwMTAtMmgxNmExIDEgMCAwMTEgMXptMCA2YTEgMSAwIDAxLTEgMUgyYTEgMSAwIDExMC0yaDE2YTEgMSAwIDAxMSAxem0tMSA3YTEgMSAwIDEwMC0ySDJhMSAxIDAgMTAwIDJoMTZ6XCI+PC9wYXRoPiA8L2c+PC9zdmc+Ki99XG4gICAgICAvLyAgICAgICAgICAgICAgICAgey8qPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC01IHctNSAgZmlsbC1wcmltYXJ5IHN0cm9rZS1hY2NlbnRcIiBzdHJva2Utd2lkdGg9JzEuMycgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiAgPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBmaWxsPVwiXCIgY2xhc3NOYW1lPSBcIlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE5IDRhMSAxIDAgMDEtMSAxSDJhMSAxIDAgMDEwLTJoMTZhMSAxIDAgMDExIDF6bTAgNmExIDEgMCAwMS0xIDFIMmExIDEgMCAxMTAtMmgxNmExIDEgMCAwMTEgMXptLTEgN2ExIDEgMCAxMDAtMkgyYTEgMSAwIDEwMCAyaDE2elwiPjwvcGF0aD4gPC9nPjwvc3ZnPiovfVxuICAgICAgLy8gICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cImgtNSB3LTUgc3Ryb2tlLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiAgc3Ryb2tlLXdpZHRoPVwiMlwiKi99XG4gICAgICAvLyAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgLy8gICAgICAgICAgICAgey8qPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHJvdW5kZWQtYnRuXCI+RHJvcGRvd248L2xhYmVsPiovfVxuICAgICAgLy8gICAgICAgICAgICAgey8qPHVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJtZW51IGRyb3Bkb3duLWNvbnRlbnQgICAgYmctcHJpbWFyeS1jb250ZW50IHRleHQtcHJpbWFyeSAgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IG14LWF1dG8gdy03MiBtdC00IHAtMFwiPiovfVxuXG4gICAgICAvLyAgICAgICAgICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIj5cbiAgICAgIC8vICAgICAgICAgICAgICAgICA8bGkga2V5PXsnaG9tZSd9PlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAvLyAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgIC8vICAgICAgICAgICAgICAgICB7cGFnZXMuZmlsdGVyKHAgPT4gcC5zaG93X2luX25hdmJhciA9PT0gdHJ1ZSAmJiAhcC5pc19ob21lcGFnZSkubWFwKCAocCkgPT4gKFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwLmlkfT5cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Auc2x1Z30+e3AudGl0bGV9PC9MaW5rPlxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgLy8gICAgICAgICAgICAgICAgICkpfVxuXG5cblxuICAgICAgLy8gICAgICAgICAgICAgPC91bD5cbiAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAvLyA8L2Rpdj5cbiJdLCJuYW1lcyI6WyJMaW5rIiwiRmFCYXJzIiwiTmF2YmFyIiwic2l0ZSIsInNpdGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsImRldGVybWluZUZvbnRTaXplIiwidGV4dCIsImxlbmd0aCIsImR5bmFtaWNGb250U2l6ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJsYWJlbCIsInRhYkluZGV4Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJ1bCIsImxpIiwiaHJlZiIsImZpbHRlciIsInNob3dfaW5fbmF2YmFyIiwiaXNfaG9tZXBhZ2UiLCJtYXAiLCJzbHVnIiwidGl0bGUiLCJpZCIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});