import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

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
                       image_link
                   }) => {



    return (
        <div key={key} contentBlockId={contentBlockId}>
            {header && <h2 className="text-2xl font-bold mb-4 text-center">{header}</h2>}
            {subheader && <h3 className="text-lg mb-2 text-center">{subheader}</h3>}
            {image_link &&
                <div className="flex justify-center">
                    <img src={image_link} alt="Hero Image" className={'w-250 h-250'}/> {/* Add alt and layout props */}
                </div>
            }
            {body && <p>{body}</p>}
            <div className="flex justify-center space-x-4  py-4">
                {cta1_link && (
                    <a className={'btn btn-primary'} href={cta1_link}>
                        <button>{cta1_text}</button>
                    </a>
                )}
                {cta2_link && (
                    <a  className={'btn btn-secondary'} href={cta2_link}>
                        <button>{cta2_text}</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default TextBlock;
