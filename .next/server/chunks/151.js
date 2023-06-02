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
// import React from 'react';
// import Link from 'next/link'
// const HeroBlock = ({ header, subheader, cta1_text, cta2_text, cta1_link,cta2_link, image_link}) => {
//     return (
//         <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4 ">
//             <img src={image_link} />
//             <h2 className="text-3xl font-bold mb-4">{header}</h2>
//             <p className="text-lg mb-6">{subheader}</p>
//             <Link href={cta1_link}>
//                 <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
//                     {cta1_text}
//                 </button>
//             </Link>
//             <Link href={cta2_link}>
//                 <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
//                     {cta2_text}
//                 </button>
//             </Link>
//         </div>
//     );
// };
//
// export default HeroBlock;import React from 'react';



const HeroBlock = ({ header , subheader , cta1_text , cta2_text , cta1_link , cta2_link , image_link  })=>{
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

;// CONCATENATED MODULE: ./src/components/PageBuilder.js
// import HeroBlock from "@/components/HeroBlock";
// import TextBlock from "@/components/TextBlock";
//
// export default function PageBuilder({page}){
//     return(
//         <div>
//         <h1>Page builder</h1>
//
//             {page.content_blocks.map((c) => {
//                 if (c.type === 'HeroBlock') {
//                     return (
//                         <HeroBlock
//                             key={c.id}
//                             contentBlockId={c.id}
//                             header={c.header}
//                             subheader={c.subheader}
//                             body={c.body}
//                             cta1_text={c.cta1_text}
//                             cta2_text={c.cta2_text}
//                             cta1_link={c.cta1_link}
//                             cta2_link={c.cta2_link}
//                             image_link={c.image_url}
//                         />
//                     );
//                 } else {
//                     // Render other block component
//                     return (
//                         <TextBlock
//                             key={c.id}
//                             contentBlockId={c.id}
//                             header={c.header}
//                             subheader={c.subheader}
//                             body={c.body}
//                             cta1_text={c.cta1_text}
//                             cta2_text={c.cta2_text}
//                             cta1_link={c.cta1_link}
//                             cta2_link={c.cta2_link}
//                             image_link={c.image_url}
//                         />
//                     );
//                 }
//             })}
//         </div>
//     )
// }




function PageBuilder({ page  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Page builder"
            }),
            page.content_blocks.map((c, index)=>{
                if (c.type === "HeroBlock") {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_HeroBlock, {
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
                            index !== page.content_blocks.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: " border border-gray-300"
                            }),
                            " "
                        ]
                    }, c.id);
                } else {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_TextBlock, {
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
                            index !== page.content_blocks.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                className: " border border-gray-300"
                            }),
                            " "
                        ]
                    }, c.id);
                }
            })
        ]
    });
}


/***/ })

};
;