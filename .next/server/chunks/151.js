"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 7151:
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



const HeroBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl font-bold mb-4",
                children: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-lg mb-6",
                children: subheader
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: cta1_link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100",
                    children: cta1_text
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: cta2_link,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100",
                    children: cta2_text
                })
            })
        ]
    });
};
/* harmony default export */ const components_HeroBlock = (HeroBlock);

;// CONCATENATED MODULE: ./src/components/TextBlock.js


const TextBlock = ({ header , subheader , body  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-100 py-8 px-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-2xl font-bold mb-4",
                children: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-lg mb-2",
                children: subheader
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-700",
                children: body
            })
        ]
    });
};
/* harmony default export */ const components_TextBlock = (TextBlock);

;// CONCATENATED MODULE: ./src/components/PageBuilder.js



function PageBuilder({ page  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Page builder"
            }),
            page.content_blocks.map((c)=>{
                if (c.type === "HeroBlock") {
                    return /*#__PURE__*/ jsx_runtime_.jsx(components_HeroBlock, {
                        contentBlockId: c.id,
                        header: c.header,
                        subheader: c.subheader,
                        body: c.body,
                        cta1_text: c.cta1_text,
                        cta2_text: c.cta2_text,
                        cta1_link: c.cta1_link,
                        cta2_link: c.cta2_link
                    }, c.id);
                } else {
                    // Render other block component
                    return /*#__PURE__*/ jsx_runtime_.jsx(components_TextBlock, {
                        contentBlockId: c.id,
                        header: c.header,
                        subheader: c.subheader,
                        body: c.body
                    }, c.id);
                }
            })
        ]
    });
}


/***/ })

};
;