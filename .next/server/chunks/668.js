"use strict";
exports.id = 668;
exports.ids = [668];
exports.modules = {

/***/ 4668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar.js


const Navbar = ({ site  })=>{
    // const { siteName, siteImgUrl }  = useContext(AppContext);
    const siteName = site.name;
    console.log(site);
    console.log(site.pages);
    const pages = site.pages;
    console.log(pages);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "navbar bg-primary sticky text-primary-content p-2  top-0 z-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-start ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl text-primary-content break-words px-0 mx-0 ",
                    children: [
                        "     ",
                        siteName
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-center sm:hidden ",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "btn-md   btn-ghost self-center text-2xl text-primary-content break-words px-0 mx-0 ",
                    children: siteName
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-end",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "dropdown dropdown-end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            tabIndex: 0,
                            className: "btn btn-ghost  ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5  fill-primary stroke-accent",
                                "stroke-width": "1.3",
                                viewBox: "0 0 20 20",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    id: "SVGRepo_iconCarrier",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "",
                                            className: "",
                                            "fill-rule": "evenodd",
                                            d: "M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                                        }),
                                        " "
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            tabIndex: 0,
                            className: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",
                            children: pages.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: p.slug,
                                        children: p.title
                                    })
                                }, p.id))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/data/sc_data.json
var sc_data = __webpack_require__(3013);
// EXTERNAL MODULE: ./src/data/review_data.json
var review_data = __webpack_require__(5772);
// EXTERNAL MODULE: ./src/data/site_data.json
var site_data = __webpack_require__(7656);
;// CONCATENATED MODULE: ./src/components/NetworkFooter.js





const guides = sc_data/* posts */.x;
const posts = review_data/* posts */.x;
const combinedData = posts.concat(guides);
const NetworkFooter_NetworkFooter = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "footer-title",
                children: "More Sites for You:"
            }),
            siteData.site_network_data.map((g)=>/*#__PURE__*/ _jsxs(Link, {
                    href: g.url,
                    className: "link link-hover",
                    children: [
                        /*#__PURE__*/ _jsxs("span", {
                            className: "font-bold ",
                            children: [
                                g.name,
                                "  "
                            ]
                        }),
                        " -  ",
                        g.description.slice(0, 250),
                        "..."
                    ]
                }, g.url))
        ]
    });
};
/* harmony default export */ const components_NetworkFooter = ((/* unused pure expression or super */ null && (NetworkFooter_NetworkFooter)));

;// CONCATENATED MODULE: ./src/components/Footer.js






const Footer_guides = sc_data/* posts */.x;
const Footer_posts = review_data/* posts */.x;
const Footer_combinedData = Footer_posts.concat(Footer_guides);
const paths = Footer_combinedData.map((post)=>({
        params: {
            slug: post.slug,
            data: "hello"
        }
    }));
const Footer = ()=>{
    return /*#__PURE__*/ _jsxs("footer", {
        className: "footer p-10 bg-secondary text-secondary-content",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "footer-title",
                        children: "Reviews"
                    }),
                    Footer_posts.map((p)=>/*#__PURE__*/ _jsx(Link, {
                            href: `/${p.slug}`,
                            className: "link link-hover",
                            children: p.title
                        }, p.slug))
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "footer-title",
                        children: "Guides"
                    }),
                    Footer_guides.map((g)=>/*#__PURE__*/ _jsx(Link, {
                            href: `/${g.slug}`,
                            className: "link link-hover",
                            children: g.title
                        }, g.slug))
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "footer-title",
                        children: "About"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        className: "link link-hover",
                        children: "Terms of use"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        className: "link link-hover",
                        children: "Privacy policy"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        className: "link link-hover",
                        children: "Cookie policy"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(NetworkFooter, {})
        ]
    });
};
/* harmony default export */ const components_Footer = ((/* unused pure expression or super */ null && (Footer)));

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/components/Layout.js






function Layout({ children , pageTitle , pageDescription , site  }) {
    const measurementId = site_data/* ga_measurement_id */.LJ;
    const amazonId = site_data/* referral_tag */.cJ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: pageDescription
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
                strategy: "lazyOnload"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "google-analytics",
                strategy: "lazyOnload",
                children: `
                  
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "az-b1",
                type: "text/javascript",
                strategy: "lazyOnload",
                children: `
            amzn_assoc_ad_type = "link_enhancement_widget";
            amzn_assoc_tracking_id = "${amazonId}";
            amzn_assoc_linkid = "4d7ad7aad1d2f07afbfbd4de67812deb";
            amzn_assoc_placement = "";
            amzn_assoc_marketplace = "amazon";
            amzn_assoc_region = "US";
               `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "az-b2",
                strategy: "lazyOnload",
                src: "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                site: site
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "",
                children: children
            })
        ]
    });
}


/***/ })

};
;