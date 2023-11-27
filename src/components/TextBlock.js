// import React from 'react';
// import Image from 'next/image'; // Import the Image component from Next.js

// const TextBlock = ({
//                        key,
//                        contentBlockId,
//                        header,
//                        subheader,
//                        body,
//                        cta1_text,
//                        cta2_text,
//                        cta1_link,
//                        cta2_link,
//                        image_link
//                    }) => {

//     return (
//         <div key={key} contentBlockId={contentBlockId}>
//             {header && <h2 className="text-2xl font-bold mb-4 text-center">{header}</h2>}
//             {subheader && <h3 className="text-lg mb-2 text-center">{subheader}</h3>}
//             {image_link &&
//                 <div className="flex justify-center">
//                     <img src={image_link} alt="Hero Image" className={'w-250 h-250'}/> {/* Add alt and layout props */}
//                 </div>
//             }
//             {body && <p>{body}</p>}
//             <div className="flex justify-center space-x-4  py-4">
//                 {cta1_link && (
//                     <a className={'btn btn-primary'} href={cta1_link}>
//                         <button>{cta1_text}</button>
//                     </a>
//                 )}
//                 {cta2_link && (
//                     <a  className={'btn btn-secondary'} href={cta2_link}>
//                         <button>{cta2_text}</button>
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default TextBlock;

// import React from "react";

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// const TextBlock = ({
//   key,
//   contentBlockId,
//   header,
//   subheader,
//   body,
//   cta1_text,
//   cta2_text,
//   cta1_link,
//   cta2_link,
//   image_link,
// }) => {
//   const imageContainerClasses = "w-full h-auto mx-auto";
//   const headerClasses = "text-3xl font-bold mb-4 text-center";
//   const subheaderClasses = "text-xl mb-6 text-center";
//   const bodyClasses = "text-lg prose space-y-2 ";
//   const buttonClasses =
//     "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
//   const buttonContainerClasses = "flex justify-center gap-4 mt-4";
//   return (
//     <div key={key} contentBlockId={contentBlockId} className="scroll-p-0 py-10 px-4 space-y-4  items-center ">
//       {header && (
//         // <h2 className="text-2xl font-bold mb-4 text-center">{header}</h2>
//         <ReactMarkdown className={headerClasses}>{header}</ReactMarkdown>
//       )}
//       {subheader && <h3 className="text-lg mb-2 text-center">{subheader}</h3>}
//       {image_link && (
//         <div className="flex justify-center">
//           <img src={image_link} alt="Hero Image" className={"w-250 h-250"} />{" "}
//           {/* Add alt and layout props */}
//         </div>
//       )}
//       {/*{body && <p>{body}</p>}*/}

//       <ReactMarkdown plugins={[remarkGfm]} className={bodyClasses}>{body}</ReactMarkdown>
//       <div className="flex justify-center space-x-4  py-4">
//         {cta1_link && (
//           <a className={"btn btn-primary"} href={cta1_link}>
//             <button>{cta1_text}</button>
//           </a>
//         )}
//         {cta2_link && (
//           <a className={"btn btn-secondary"} href={cta2_link}>
//             <button>{cta2_text}</button>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TextBlock;

import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const TextBlock = ({
  key,
  contentBlockId,
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
}) => {
  const imageContainerClasses = "w-full h-auto mx-auto";
  const headerClasses = "text-3xl font-bold mb-4 text-center";
  const subheaderClasses = "text-xl mb-6 text-center";
  const bodyClasses = "text-lg prose space-y-2 px-2";
  const bodyContainerClasses = "max-w-2xl"; // Adjust this width as needed
  const buttonClasses = " rounded-md";
  const buttonContainerClasses = "flex justify-center gap-4 mt-4";

  function spliceAfterThirdPeriod(text) {
    const sentences = text.split(".");
    if (sentences.length < 3) {
      return text;
    }
    return sentences.slice(0, 2).join(".") + ".";
  }

  const splicedBody = spliceAfterThirdPeriod(body);

  return (
    <div
      key={key}
      contentBlockId={contentBlockId}
      className="scroll-p-0 py-10 px-4 space-y-4 flex flex-col items-center"
    >
      {header && (
        <ReactMarkdown className={headerClasses}>{header}</ReactMarkdown>
      )}

      {image_link && (
        <div className="flex justify-center">
          <img src={image_link} alt="Hero Image" className="w-8/12 md:w-2/4" />
        </div>
      )}
      {subheader && <h3 className={subheaderClasses}>{subheader}</h3>}

      <div className={bodyContainerClasses}>
        <ReactMarkdown plugins={[remarkGfm]} className={bodyClasses}>
          {splicedBody}
        </ReactMarkdown>
      </div>

      <div className={buttonContainerClasses}>
        {cta2_link && (
          <Link className="btn btn-secondary" href={cta2_link}>
            {cta2_text}
          </Link>
        )}
        {cta1_link && (
          <Link className="btn btn-primary" href={cta1_link}>
            {cta1_text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
