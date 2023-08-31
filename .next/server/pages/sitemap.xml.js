"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 4768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _data_review_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5772);
/* harmony import */ var _data_site_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7656);
/* harmony import */ var _data_sc_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3013);



function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
        <loc>${_data_site_data_json__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}</loc>
    </url>
    <url>
        <loc>${_data_site_data_json__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/guides</loc>
    </url>
       <url>
        <loc>${_data_site_data_json__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/reviews</loc>
    </url>
    ${posts.map((p)=>{
        return `
    <url>
        <loc>${`${_data_site_data_json__WEBPACK_IMPORTED_MODULE_1__/* .url */ .HQ}/${p.slug}`}</loc>
    </url>
    `;
    }).join("")}
</urlset>
        `;
}
function SitemapXml() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ res  }) {
    // We make an API call to gather the URLs for our site
    const posts = _data_review_data_json__WEBPACK_IMPORTED_MODULE_0__/* .posts.concat */ .x.concat(_data_sc_data_json__WEBPACK_IMPORTED_MODULE_2__/* .posts */ .x);
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitemapXml);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [656,772,13], () => (__webpack_exec__(4768)));
module.exports = __webpack_exports__;

})();