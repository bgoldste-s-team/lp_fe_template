"use strict";
(() => {
var exports = {};
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 9039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Results)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/data/review_data.json
var review_data = __webpack_require__(5772);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ProductLink.js





function ProductLink({ product  }) {
    const review = reviewData.posts.find((r)=>r.product.id === product.id);
    const slug = review?.slug;
    if (!slug) {
        return null;
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: "bg-neutral-content  card card-compact bg-base-100 shadow-xl ",
        children: [
            /*#__PURE__*/ _jsx("figure", {
                children: /*#__PURE__*/ _jsx(Image, {
                    src: product.thumbnail,
                    alt: product.name,
                    width: "0",
                    height: "0",
                    sizes: "100vw",
                    className: "h-48 w-48 "
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "card-body ",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "card-title ",
                        children: /*#__PURE__*/ _jsx("h2", {
                            className: "prose-md text-neutral-content",
                            children: /*#__PURE__*/ _jsx(Link, {
                                className: "text-neutral",
                                href: product.url,
                                children: product.name
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "card-actions grid grid-cols-2",
                        children: [
                            slug ? /*#__PURE__*/ _jsx(Link, {
                                className: "btn-link btn",
                                href: slug,
                                children: "Read review"
                            }) : null,
                            /*#__PURE__*/ _jsx("button", {
                                className: "btn btn-primary",
                                children: /*#__PURE__*/ _jsxs(Link, {
                                    href: product.url,
                                    children: [
                                        "Buy Now",
                                        " ",
                                        !product.price.includes("None") ? "for " + product.price : null
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/data/sc_data.json
var sc_data = __webpack_require__(3013);
;// CONCATENATED MODULE: ./src/lib/formatSlug.js
function formatSlug(url) {
    return "/" + url;
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Badge.js


const Badge = ()=>{
    const names = [
        "NEW",
        "COOL",
        "FUN",
        "INFO",
        "BEST OF",
        "HMMM",
        "WTF"
    ];
    const colors = [
        "bg-primary",
        "bg-secondary",
        "bg-accent",
        "bg-info",
        "bg-success",
        "bg-warning",
        "bg-error"
    ];
    const [randomIndex, setRandomIndex] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setRandomIndex(Math.floor(Math.random() * names.length));
    }, [
        names.length
    ]);
    const getRandomColorClass = ()=>{
        return colors[randomIndex];
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `badge ${getRandomColorClass()}`,
        children: names[randomIndex]
    });
};
/* harmony default export */ const components_Badge = (Badge);

;// CONCATENATED MODULE: ./src/components/ContentCard.js







function ContentCard({ content  }) {
    console.log(content);
    let thumbnail = content?.products?.[0]?.product?.thumbnail;
    if (!thumbnail) {
        thumbnail = content?.product?.thumbnail;
        if (!thumbnail) {
            return null;
        }
    }
    // console.log(content.products[0])
    const guides = sc_data/* posts */.x;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card mx-auto xs:w-full glass mx-2 my-2  image-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: thumbnail,
                    alt: content.title,
                    width: "0",
                    height: "0",
                    sizes: "100vw",
                    className: "h-full w-full "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body  items-center text-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "card-title text-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: formatSlug(content.slug),
                            children: [
                                content.title,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Badge, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-white",
                        children: [
                            content.content.slice(0, 250),
                            "..."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card-actions",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: content.product?.url ?? content.products?.[0]["product"].url ?? "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-secondary",
                                    children: "Buy Now"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-primary",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: formatSlug(content.slug),
                                    children: "Read More"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/results.js




function Results() {
    const router = (0,router_.useRouter)();
    const { traits  } = router.query;
    const traitsArray = traits ? traits.split(",") : [];
    // Filter posts based on the selected traits
    const filteredPosts = review_data/* posts.filter */.x.filter((post)=>traitsArray.some((trait)=>post.content.toLowerCase().includes(trait.toLowerCase())));
    // TODO: Replace this with your actual UI
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Results"
            }),
            filteredPosts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "card",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ContentCard, {
                        content: post
                    })
                }, post.id))
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,664,636,675,351], () => (__webpack_exec__(9039)));
module.exports = __webpack_exports__;

})();