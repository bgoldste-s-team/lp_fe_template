"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 5073:
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



const HeroBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "scroll-p-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4",
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

;// CONCATENATED MODULE: ./src/components/TextBlock.js


const TextBlock = ({ key , contentBlockId , header , subheader , body , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
    const containerClasses = "bg-gray-100 py-8 px-4";
    const headerClasses = "text-2xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-2 text-center";
    const bodyClasses = "text-gray-700 text-center";
    const imageContainerClasses = "flex justify-center"; // Added image container classes
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        contentBlockId: contentBlockId,
        className: containerClasses,
        children: [
            header && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: headerClasses,
                children: header
            }),
            subheader && /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: subheaderClasses,
                children: subheader
            }),
            body && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: bodyClasses,
                children: body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: imageContainerClasses,
                children: [
                    " ",
                    image_link && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image_link,
                        alt: "Hero Image"
                    })
                ]
            }),
            cta1_link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: cta1_link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    children: cta1_text
                })
            }),
            cta2_link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: cta2_link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    children: cta2_text
                })
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
                    "CaseStudyBlock",
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
/* harmony default export */ const components_CaseStudyBlock = (CaseStudyBlock);

;// CONCATENATED MODULE: ./src/components/ContactBlock.js



const ContactBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
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
                    "ContactBlock",
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
/* harmony default export */ const components_ContactBlock = (ContactBlock);

;// CONCATENATED MODULE: ./src/components/SubscribeBlock.js



const SubscribeBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
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
                    "SubscribeBlock",
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
/* harmony default export */ const components_SubscribeBlock = (SubscribeBlock);

;// CONCATENATED MODULE: ./src/components/PageBuilder.js









function PageBuilder({ page  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: page.content_blocks.map((c, index)=>{
            switch(c.type){
                case "HeroBlock":
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-mt-16",
                        id: 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_HeroBlock, {
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
                case "TextBlock":
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-mt-16",
                        id: c.order,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_TextBlock, {
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
                case "CaseStudyBlock":
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-mt-16",
                        id: c.order,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CaseStudyBlock, {
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
                case "SubscribeBlock":
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-mt-16",
                        id: c.order,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SubscribeBlock, {
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
                case "ContactBlock":
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "scroll-mt-16",
                        id: c.order,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ContactBlock, {
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
    });
}


/***/ })

};
;