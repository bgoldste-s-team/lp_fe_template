"use strict";
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 7376:
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar-start ",
                children: [
                    site.logo_image_url ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: site.logo_image_url,
                        className: "w-20 h-20 rounded-full mr-2 bg-neutral-content"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://dexterlabs-public.s3.amazonaws.com/images/pagesake_logo.png",
                        className: "w-20 h-20 rounded-full mr-2 bg-neutral-content"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl text-primary-content break-words px-0 mx-0 ",
                        children: [
                            "     ",
                            siteName
                        ]
                    })
                ]
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            tabIndex: 0,
                            className: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }, "home"),
                                pages.filter((p)=>p.show_in_navbar === true && !p.is_homepage).map((p)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: p.slug,
                                            children: p.title
                                        })
                                    }, p.id))
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Footer.js


const Footer = ({ site , pages  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer p-10 bg-secondary text-secondary-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: site.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: pages.map((page)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: page.slug,
                                children: page.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: page.page_description
                            })
                        ]
                    }, page.id))
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./src/data/site_data.json
var site_data = __webpack_require__(7656);
;// CONCATENATED MODULE: ./src/components/Layout.js






function Layout({ children , pageTitle , pageDescription , site  }) {
    const measurementId = "G-XYGCHM2B97" //hardcoding global ps analytics siteData["ga_measurement_id"];
    ;
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                site: site,
                pages: site.pages
            })
        ]
    });
}


/***/ })

};
;