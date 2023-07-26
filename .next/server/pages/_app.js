(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AppContext": () => (/* binding */ AppContext),
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./src/components/Layout.js + 2 modules
var Layout = __webpack_require__(7376);
// EXTERNAL MODULE: ./src/data/site_data.json
var site_data = __webpack_require__(7656);
;// CONCATENATED MODULE: ./src/contexts/SiteContext.js

const SiteContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext("")));
/* harmony default export */ const contexts_SiteContext = ((/* unused pure expression or super */ null && (SiteContext)));

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__(600);
;// CONCATENATED MODULE: ./src/pages/_app.js
// pages/_app.js








const AppContext = /*#__PURE__*/ (0,external_react_.createContext)();
function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const [theme, setTheme] = (0,external_react_.useState)(site_data/* theme */.rS);
    const [siteName, setSiteName] = (0,external_react_.useState)(site_data/* name */.u2);
    const [siteDesc, setSiteDesc] = (0,external_react_.useState)(site_data/* description */.WL);
    const [siteImgUrl, setSiteImgUrl] = (0,external_react_.useState)(site_data/* site_image */.vC);
    (0,external_react_.useEffect)(()=>{
        if (router.query.theme) {
            setTheme(router.query.theme);
        }
        if (router.query.siteName) {
            setSiteName(router.query.siteName);
        }
        if (router.query.siteDesc) {
            setSiteDesc(router.query.siteDesc);
        }
        if (router.query.siteImgUrl) {
            setSiteImgUrl(router.query.siteImgUrl);
        }
        const fetchSiteData = async ()=>{
            try {
                const siteId = "30";
                const baseUrl = "http://127.0.0.1:8000";
                const response = await fetch(`${baseUrl}/api/sites/${siteId}`);
                // console.log(process.env)
                // const response = await fetch(`${baseUrl}/api/sites/${siteId}/`); // Replace with your API endpoint
                const data = await response.json();
                setTheme(data.theme);
                setSiteName(data.name);
                setSiteDesc(data.description);
                setSiteImgUrl(data.site_image);
            } catch (error) {
                console.error("Error fetching site data:", error);
            }
        };
        fetchSiteData();
    }, [
        router.query
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_.ThemeProvider, {
        attribute: "class",
        children: /*#__PURE__*/ jsx_runtime_.jsx(AppContext.Provider, {
            value: {
                siteName,
                theme,
                siteDesc,
                siteImgUrl
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                "data-theme": theme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}


/***/ }),

/***/ 600:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,664,298,656,376], () => (__webpack_exec__(7209)));
module.exports = __webpack_exports__;

})();