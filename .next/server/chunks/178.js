"use strict";
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const FeaturedPages = ({ pages , pageGroupName  })=>{
    console.log(pages, pageGroupName);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-base-200",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hero  ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hero-content text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-md",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-5xl font-bold",
                            children: [
                                pageGroupName ? pageGroupName : "Pages",
                                " num pages: ",
                                pages.length
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 place-items-center gap-2",
                children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card w-96 bg-neutral text-neutral-content h-full w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-body items-center text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "card-title",
                                    children: page.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        page.page_description?.slice(0, 150),
                                        ".."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "card-actions justify-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: page.slug,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn btn-primary",
                                            children: "Read More"
                                        })
                                    })
                                })
                            ]
                        })
                    }, page.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedPages);


/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PageBuilder)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/HeroBlock.js



const HeroBlock = ({ header , subheader , body , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "scroll-p-0 bg-gradient-to-r from-primary to-secondary text-white py-10 px-4",
        children: [
            image_link && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: imageContainerClasses,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image_link,
                    alt: "Hero Image",
                    className: "object-cover max-h-96 mx-auto"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: headerClasses,
                children: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: subheaderClasses,
                children: subheader
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: subheaderClasses,
                children: body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: buttonContainerClasses,
                children: [
                    cta1_link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cta1_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: buttonClasses,
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cta2_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: buttonClasses,
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_HeroBlock = (HeroBlock);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/TextBlock.js


 // Import the Image component from Next.js
const TextBlock = ({ key , contentBlockId , header , subheader , body , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        contentBlockId: contentBlockId,
        children: [
            header && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-2xl font-bold mb-4 text-center",
                children: header
            }),
            subheader && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-lg mb-2 text-center",
                children: subheader
            }),
            image_link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image_link,
                        alt: "Hero Image",
                        className: "w-250 h-250"
                    }),
                    " "
                ]
            }),
            body && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center space-x-4  py-4",
                children: [
                    cta1_link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "btn btn-primary",
                        href: cta1_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "btn btn-secondary",
                        href: cta2_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    }, key);
};
/* harmony default export */ const components_TextBlock = (TextBlock);

;// CONCATENATED MODULE: ./src/components/ProductCardBlock.js



const ProductCardBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4",
        children: [
            image_link && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: imageContainerClasses,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image_link,
                    alt: "Hero Image",
                    className: "object-cover max-h-96 mx-auto"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: headerClasses,
                children: [
                    "PRODUCT CARD",
                    header
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: subheaderClasses,
                children: subheader
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: buttonContainerClasses,
                children: [
                    cta1_link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cta1_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: buttonClasses,
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cta2_link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: buttonClasses,
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProductCardBlock = (ProductCardBlock);

;// CONCATENATED MODULE: ./src/components/TableOfContentsBlock.js



const TableOfContentsBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link , page  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "TABLE OF CONTENTS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "p-4 space-y-2",
                children: page.content_blocks.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `#${c.order}`,
                            children: [
                                c.order,
                                " ",
                                c.header,
                                " ",
                                c.type
                            ]
                        })
                    }, c.id))
            })
        ]
    });
};
/* harmony default export */ const components_TableOfContentsBlock = (TableOfContentsBlock);

;// CONCATENATED MODULE: ./src/components/CaseStudyBlock.js



const CaseStudyBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ _jsxs("div", {
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4",
        children: [
            image_link && /*#__PURE__*/ _jsx("div", {
                className: imageContainerClasses,
                children: /*#__PURE__*/ _jsx("img", {
                    src: image_link,
                    alt: "Hero Image",
                    className: "object-cover max-h-96 mx-auto"
                })
            }),
            /*#__PURE__*/ _jsxs("h2", {
                className: headerClasses,
                children: [
                    "CaseStudyBlock",
                    header
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: subheaderClasses,
                children: subheader
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: buttonContainerClasses,
                children: [
                    cta1_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta1_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta2_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_CaseStudyBlock = ((/* unused pure expression or super */ null && (CaseStudyBlock)));

;// CONCATENATED MODULE: ./src/components/ContactBlock.js



const ContactBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ _jsxs("div", {
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4",
        children: [
            image_link && /*#__PURE__*/ _jsx("div", {
                className: imageContainerClasses,
                children: /*#__PURE__*/ _jsx("img", {
                    src: image_link,
                    alt: "Hero Image",
                    className: "object-cover max-h-96 mx-auto"
                })
            }),
            /*#__PURE__*/ _jsxs("h2", {
                className: headerClasses,
                children: [
                    "ContactBlock",
                    header
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: subheaderClasses,
                children: subheader
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: buttonContainerClasses,
                children: [
                    cta1_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta1_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta2_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ContactBlock = ((/* unused pure expression or super */ null && (ContactBlock)));

;// CONCATENATED MODULE: ./src/components/SubscribeBlock.js



const SubscribeBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ _jsxs("div", {
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4",
        children: [
            image_link && /*#__PURE__*/ _jsx("div", {
                className: imageContainerClasses,
                children: /*#__PURE__*/ _jsx("img", {
                    src: image_link,
                    alt: "Hero Image",
                    className: "object-cover max-h-96 mx-auto"
                })
            }),
            /*#__PURE__*/ _jsxs("h2", {
                className: headerClasses,
                children: [
                    "SubscribeBlock",
                    header
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: subheaderClasses,
                children: subheader
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: buttonContainerClasses,
                children: [
                    cta1_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta1_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta1_text
                        })
                    }),
                    cta2_link && /*#__PURE__*/ _jsx(Link, {
                        href: cta2_link,
                        children: /*#__PURE__*/ _jsx("button", {
                            className: buttonClasses,
                            children: cta2_text
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_SubscribeBlock = ((/* unused pure expression or super */ null && (SubscribeBlock)));

// EXTERNAL MODULE: ./src/components/FeaturedPages.js
var FeaturedPages = __webpack_require__(784);
;// CONCATENATED MODULE: ./src/components/AdBlock.js



const AdBlock = ({ name , page , site , index  })=>{
    console.log("adblock", page, site, index, name);
    return /*#__PURE__*/ _jsx("div", {
        className: "hero  bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "hero-content flex-col lg:flex-row  items-center",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: "https://dexterlabs-public.s3.us-west-1.amazonaws.com/pagesake_logo.png",
                            className: " bg-stone-300 max-w-sm rounded-lg shadow-2xl h-16 w-16 "
                        }),
                        /*#__PURE__*/ _jsxs("h4", {
                            className: "text-xl ",
                            children: [
                                "Pagesake ",
                                name
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    children: [
                        /*#__PURE__*/ _jsxs("h1", {
                            className: "text-4xl ",
                            children: [
                                "Don't Just Browse The Web. ",
                                /*#__PURE__*/ _jsx("br", {}),
                                /*#__PURE__*/ _jsx("span", {
                                    className: "text-green-200  font-bold mt-4",
                                    children: "Create it."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "py-2",
                            children: "Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. "
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "py-2",
                            children: "See what the savviest creators on the web are already doing, checkout Pagesake today! "
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "flex justify-center gap-4 mt-4",
                            children: [
                                /*#__PURE__*/ _jsx("button", {
                                    className: "btn btn-secondary btn-outline",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: "https://pagesake.com",
                                        children: "Learn More"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("button", {
                                    className: "btn btn-primary",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: "https://pagesake.com",
                                        children: "Start for Free"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_AdBlock = ((/* unused pure expression or super */ null && (AdBlock)));

;// CONCATENATED MODULE: ./src/components/EngagementBlock.js



const EngagementBlock = ({ engagementBlock  })=>{
    if (engagementBlock.type === "HeroBlock") {
        return /*#__PURE__*/ jsx_runtime_.jsx(components_HeroBlock, {
            header: engagementBlock.header,
            subheader: engagementBlock.subheader,
            body: engagementBlock.body,
            cta1_text: engagementBlock.cta1_text,
            cta2_text: engagementBlock.cta2_text,
            cta1_link: engagementBlock.cta1_link,
            cta2_link: engagementBlock.cta2_link,
            image_link: engagementBlock.image_url
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
        children: [
            "ENGAGMENT BLOCK ",
            engagementBlock.header
        ]
    });
};
/* harmony default export */ const components_EngagementBlock = (EngagementBlock);

// EXTERNAL MODULE: ./src/data/review_data.json
var review_data = __webpack_require__(5772);
// EXTERNAL MODULE: external "react-icons/fa6"
var fa6_ = __webpack_require__(8514);
;// CONCATENATED MODULE: ./src/components/AmazonProductCard.js






function AmazonProductCard({ product  }) {
    console.log(product);
    if (!product || !product.product_name || !product.url) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card card-compact  bg-base-100 shadow-xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: product.thumbnail_image,
                    alt: "Album",
                    className: " p-4"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "card-title",
                        children: product.product_name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: product.brand
                    }),
                    product.price_value && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "badge badge-success",
                        children: [
                            "$",
                            product.price_value
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card-actions justify-end",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: product.url,
                            className: "btn btn-primary",
                            children: [
                                "Buy Now",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa6_.FaCartShopping, {
                                        className: "mx-1"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
} // <div className="bg-secondary-content text-secondary card card-compact bg-base-100 shadow-xl ">
 //      <figure>
 //        <Image
 //          src={product.thumbnail_image}
 //          alt={product.name}
 //          width="0"
 //          height="0"
 //          sizes="100vw"
 //          className="h-48 w-48 "
 //        ></Image>
 //      </figure>
 //        <div className="card-body ">
 //            <div className="card-title ">
 //              <h2 className="prose-md text-neutral-content">
 //                <Link className="text-neutral" href={product.url}>{product.product_name}</Link>
 //              </h2>
 //            </div>
 //            <div className="card-actions grid grid-cols-2">
 //                    <Link className="btn-link btn" href={'asdf'}>
 //                        Read review
 //                    </Link>
 //                <button className="btn btn-primary">
 //                  <Link href={product.url}>
 //                    Buy Now{" "}
 //                  </Link>
 //                </button>
 //          </div>
 //        </div>
 //    </div>

;// CONCATENATED MODULE: ./src/components/ProductBank.js


function ProductBank({ products  }) {
    console.log(products);
    if (products.length < 1) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-primary-content py-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center text-3xl p-2",
                children: "You Might Like.."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2",
                children: products.map((p)=>/*#__PURE__*/ jsx_runtime_.jsx(AmazonProductCard, {
                        product: p
                    }, p.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/PageBuilder.js















function PageBuilder({ page , site  }) {
    console.log(site);
    const adRules = {
        full_ads: {
            showAmazonAds: true,
            showPagesakeAds: true,
            showContentNetwork: true,
            showMiscReferralAds: true
        },
        light_ads: {
            showAmazonAds: false,
            showPagesakeAds: true,
            showContentNetwork: true,
            showMiscReferralAds: true
        },
        no_ads: {
            showAmazonAds: false,
            showPagesakeAds: false,
            showContentNetwork: false,
            showMiscReferralAds: false
        },
        no_ads_with_amazon: {
            showAmazonAds: true,
            showPagesakeAds: false,
            showContentNetwork: false,
            showMiscReferralAds: false
        }
    };
    const adLevel = site.ad_level;
    const showAmazonAds = adRules[adLevel].showAmazonAds;
    const showPagesakeAds = adRules[adLevel].showPagesakeAds;
    const showContentNetwork = adRules[adLevel].showContentNetwork;
    const showMiscReferralAds = adRules[adLevel].showMiscReferralAds;
    const amazonProducts = site.amazon_products;
    const amazonProductsLength = amazonProducts.length;
    // const sortedAmazonProducts = amazonProducts.sort((a,b) => a.id - b.id);
    function shuffleArrayWithSeed(array) {
        const seed = page.id;
        const shuffled = [
            ...array
        ];
        for(let i = 0; i < array.length; i++){
            const newIndex = (i + seed) % array.length;
            [shuffled[i], shuffled[newIndex]] = [
                shuffled[newIndex],
                shuffled[i]
            ];
        }
        return shuffled;
    }
    function getNextThreeProducts(products, startIndex) {
        if (startIndex + 3 <= products.length) {
            return products.slice(startIndex, startIndex + 3);
        } else {
            const endChunk = products.slice(startIndex);
            const startChunk = products.slice(0, 3 - endChunk.length);
            return endChunk.concat(startChunk);
        }
    }
    const shuffledProducts = shuffleArrayWithSeed(amazonProducts);
    const engagementBlocks = site.engagement_blocks;
    const engagementBlocksLength = engagementBlocks.length;
    const contentBlocks = page.content_blocks;
    const contentBlocksLength = contentBlocks.length;
    const pageTop = 0;
    const pageMiddle = Math.floor(contentBlocksLength / 2);
    const pageBottom = contentBlocksLength - 1;
    function getEngagementBlock(index) {
        let position;
        if (index === pageTop) {
            position = 1; // For top
        } else if (index === pageMiddle) {
            position = 2; // For middle
        } else if (index === pageBottom) {
            position = 3; // For bottom
        }
        if (position !== undefined) {
            return engagementBlocks.filter((eb)=>eb.position === position);
        } else {
            return [];
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "debug: engagement blocks: ",
                    engagementBlocksLength,
                    " ",
                    engagementBlocks.toString()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "debug: content blocks: ",
                    contentBlocksLength
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "pageTop: ",
                    pageTop,
                    " pageMiddle ",
                    pageMiddle,
                    " pageBottom ",
                    pageBottom
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Debug Info:Title: ",
                    page.title,
                    " Slug: ",
                    page.slug
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Total Content Blocks: ",
                    page.content_blocks.length
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Debug Info: AMAazon products length ",
                    amazonProductsLength
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Debug Info: AD Level ",
                    adLevel
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "showAmazonAds: ",
                    showAmazonAds.toString()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "showPagesakeAds: ",
                    showPagesakeAds.toString()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "showContentNetwork: ",
                    showContentNetwork.toString()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "showMiscReferralAds: ",
                    showMiscReferralAds.toString()
                ]
            }),
            page.content_blocks.map((c, index)=>{
                let engagementBlocks = getEngagementBlock(index);
                console.log(index, engagementBlocks);
                let commonDiv = (Component, SecondComponent, secondComponentProps)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "scroll-mt-16",
                        id: c.order,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                contentBlockId: c.id,
                                header: c.header,
                                subheader: c.subheader,
                                body: c.body,
                                cta1_text: c.cta1_text,
                                cta2_text: c.cta2_text,
                                cta1_link: c.cta1_link,
                                cta2_link: c.cta2_link,
                                image_link: c.image_url
                            }),
                            engagementBlocks && engagementBlocks.map((eb)=>/*#__PURE__*/ jsx_runtime_.jsx(components_EngagementBlock, {
                                    engagementBlock: eb
                                }, eb.id)),
                            SecondComponent && /*#__PURE__*/ jsx_runtime_.jsx(SecondComponent, {
                                ...secondComponentProps,
                                page: page,
                                site: site,
                                index: index
                            })
                        ]
                    }, c.id);
                switch(c.type){
                    case "HeroBlock":
                        {}
                        return commonDiv(components_HeroBlock, ProductBank, {
                            products: getNextThreeProducts(amazonProducts, index * 3)
                        });
                    case "TextBlock":
                        {}
                        return commonDiv(components_TextBlock, ProductBank, {
                            products: getNextThreeProducts(amazonProducts, index * 3)
                        });
                    case "ProductCardBlock":
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "scroll-mt-16",
                            id: c.order,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ProductCardBlock, {
                                contentBlockId: c.id,
                                header: c.header,
                                subheader: c.subheader,
                                body: c.body,
                                cta1_text: c.cta1_text,
                                cta2_text: c.cta2_text,
                                cta1_link: c.cta1_link,
                                cta2_link: c.cta2_link,
                                image_link: c.image_url
                            })
                        }, c.id);
                    case "TableOfContentsBlock":
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "scroll-mt-16",
                            id: c.order,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_TableOfContentsBlock, {
                                contentBlockId: c.id,
                                header: c.header,
                                subheader: c.subheader,
                                body: c.body,
                                cta1_text: c.cta1_text,
                                cta2_text: c.cta2_text,
                                cta1_link: c.cta1_link,
                                cta2_link: c.cta2_link,
                                image_link: c.image_url,
                                page: page
                            })
                        }, c.id);
                    case "TableOfContentsBlock":
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "scroll-mt-16",
                            id: c.order,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_TableOfContentsBlock, {
                                contentBlockId: c.id,
                                header: c.header,
                                subheader: c.subheader,
                                body: c.body,
                                cta1_text: c.cta1_text,
                                cta2_text: c.cta2_text,
                                cta1_link: c.cta1_link,
                                cta2_link: c.cta2_link,
                                image_link: c.image_url
                            })
                        }, c.id);
                    default:
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                "Type Not supported ",
                                c.type
                            ]
                        });
                }
            })
        ]
    });
} // Can be refactored to use common block
 // case 'CaseStudyBlock':
 //                       return(
 //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
 //                               <CaseStudyBlock
 //                                   contentBlockId={c.id}
 //                                   header={c.header}
 //                                   subheader={c.subheader}
 //                                   body={c.body}
 //                                   cta1_text={c.cta1_text}
 //                                   cta2_text={c.cta2_text}
 //                                   cta1_link={c.cta1_link}
 //                                   cta2_link={c.cta2_link}
 //                                   image_link={c.image_url}
 //                               />
 //                           </div>
 //                       )
 //                   case 'SubscribeBlock':
 //                       return(
 //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
 //                               <SubscribeBlock
 //                                   contentBlockId={c.id}
 //                                   header={c.header}
 //                                   subheader={c.subheader}
 //                                   body={c.body}
 //                                   cta1_text={c.cta1_text}
 //                                   cta2_text={c.cta2_text}
 //                                   cta1_link={c.cta1_link}
 //                                   cta2_link={c.cta2_link}
 //                                   image_link={c.image_url}
 //                               />
 //                           </div>
 //                       )
 //                   case 'ContactBlock':
 //                       return(
 //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
 //                               <ContactBlock
 //                                   contentBlockId={c.id}
 //                                   header={c.header}
 //                                   subheader={c.subheader}
 //                                   body={c.body}
 //                                   cta1_text={c.cta1_text}
 //                                   cta2_text={c.cta2_text}
 //                                   cta1_link={c.cta1_link}
 //                                   cta2_link={c.cta2_link}
 //                                   image_link={c.image_url}
 //                               />
 //                           </div>
 //                       )
 //                   case 'FeaturedPagesBlock':
 //                       return(
 //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
 //                               <FeaturedPages
 //                                   contentBlockId={c.id}
 //                                   header={c.header}
 //                                   subheader={c.subheader}
 //                                   body={c.body}
 //                                   cta1_text={c.cta1_text}
 //                                   cta2_text={c.cta2_text}
 //                                   cta1_link={c.cta1_link}
 //                                   cta2_link={c.cta2_link}
 //                                   image_link={c.image_url}
 //                                   pages={site.pages.filter((p) => p.slug !== page.page_group && p.page_group === page.page_group)}
 //                                   pageGroupName={ page.page_group}
 //                               />
 //                           </div>
 //                       )


/***/ })

};
;