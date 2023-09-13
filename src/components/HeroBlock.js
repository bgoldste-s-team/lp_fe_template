import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";

const HeroBlock = ({ header, subheader, body, cta1_text, cta2_text, cta1_link, cta2_link, image_link }) => {
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const button1Classes = "btn "
    const button2Classes = "btn  btn-accent";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";
    const bodyClasses = "text-lg mb-6 text-center whitespace-pre-line";

    return (
        <div   className="scroll-p-0 bg-primary text-primary-content py-10 px-4 space-y-4">
            {image_link && (
                <div className={imageContainerClasses}>
                    <img src={image_link} alt="Hero Image" className="object-cover max-h-96 mx-auto" />
                </div>
            )}
            <h2   className={headerClasses}>{header}</h2>
            <p className={subheaderClasses}>{subheader}</p>
            <p className={subheaderClasses}>{body}</p>
             <ReactMarkdown className={bodyClasses}>{body}</ReactMarkdown>

            <div className={buttonContainerClasses}>
                
                {cta2_link && (
                    <Link href={cta2_link}>

                            <button className={button2Classes}>{cta2_text}</button>

                    </Link>
                )}
                {cta1_link && (
                    <Link href={cta1_link}>

                            <button className={button1Classes}>{cta1_text}</button>

                    </Link>
                )}
            </div>
             </div>
    );
};

export default HeroBlock;

{/*
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button><button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button><button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button><button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
       */}