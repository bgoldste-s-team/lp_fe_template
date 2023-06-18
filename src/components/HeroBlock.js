import React from 'react';
import Link from 'next/link';

const HeroBlock = ({ header, subheader, body, cta1_text, cta2_text, cta1_link, cta2_link, image_link }) => {
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";

    return (
        <div  className="scroll-p-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4">
            {image_link && (
                <div className={imageContainerClasses}>
                    <img src={image_link} alt="Hero Image" className="object-cover max-h-96 mx-auto" />
                </div>
            )}
            <h2   className={headerClasses}>{header}</h2>
            <p className={subheaderClasses}>{subheader}</p>
            <p className={subheaderClasses}>{body}</p>
            <div className={buttonContainerClasses}>
                {cta1_link && (
                    <Link href={cta1_link}>

                            <button className={buttonClasses}>{cta1_text}</button>

                    </Link>
                )}
                {cta2_link && (
                    <Link href={cta2_link}>

                            <button className={buttonClasses}>{cta2_text}</button>

                    </Link>
                )}
            </div>
        </div>
    );
};

export default HeroBlock;

