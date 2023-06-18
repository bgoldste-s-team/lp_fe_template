import React from 'react';

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
    const containerClasses = "bg-gray-100 py-8 px-4";
    const headerClasses = "text-2xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-2 text-center";
    const bodyClasses = "text-gray-700 text-center whitespace-pre-wrap ";
    const imageContainerClasses = "flex justify-center"; // Added image container classes
    const buttonContainerClasses = "flex justify-center space-x-4  py-4"

    return (
        <div key={key} contentBlockId={contentBlockId} className={containerClasses}>
            {header && <h2 className={headerClasses}>{header}</h2>}
            {subheader && <h3 className={subheaderClasses}>{subheader}</h3>}
            {image_link &&
                <div className={imageContainerClasses}>
                    <img src={image_link} alt="Hero Image" />
                </div>}

            {body && <p className={bodyClasses}>{body}</p>}

            {/* Render additional elements or components based on the existence of their respective props */}
            <div className={buttonContainerClasses}>
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
