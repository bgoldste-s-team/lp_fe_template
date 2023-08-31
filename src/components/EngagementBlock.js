// import React from 'react';
// import HeroBlock from "@/components/HeroBlock";


// const EngagementBlock = ({
//                 engagementBlock
//                    }) => {





//     if (engagementBlock.type === 'HeroBlock') {
//         return (
//             <HeroBlock
//                 header={engagementBlock.header}
//                 subheader={engagementBlock.subheader}
//                 body={engagementBlock.body}
//                 cta1_text={engagementBlock.cta1_text}
//                 cta2_text={engagementBlock.cta2_text}
//                 cta1_link={engagementBlock.cta1_link}
//                 cta2_link={engagementBlock.cta2_link}
//                 image_link={engagementBlock.image_url}

//             />
//         )
//     }
//     return (
//     <h1>ENGAGMENT BLOCK {engagementBlock.header}</h1>
//     );
// };

// export default EngagementBlock;



import React from 'react';
import Link from 'next/link';

const EngagementBlock = ({ engagementBlock}) => {
    const {header, subheader, body, cta1_text, cta2_text, cta1_link, cta2_link, image_url } = engagementBlock
    const containerClasses = "flex justify-center p-12 bg-secondary"; // Centered container
    const cardClasses = "card  w-full items-center justify-center max-w-screen-md bg-base-300 text-base-content border-primary border-4 p-4 shadow-xl"; // Limited max-width for large screens
    const imageContainerClasses = "  text-center"; // Centered image container
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg text-center";
    const bodyClasses = "text-md text-center";

    return (
        <div data-theme="garden" className={containerClasses}>
            <div className={cardClasses}>
                {image_url && (
                    <div className={imageContainerClasses}>
                        <img src={image_url} alt="Hero Image" style={{ maxHeight: '40vh', maxWidth: '100%', width: 'auto' , }} />
                    </div>
                )}
                <div className="card-body items-center justify-center">
                    <h2 className="card-title">{header}</h2>
                    <p className={subheaderClasses}>{subheader}</p>
                    <p className={bodyClasses}>{body}</p>
                    <div className="card-actions items-center justify-center">
                        {cta2_link && (
                            <Link href={cta2_link}>
                                <button className="btn btn-secondary ">{cta2_text}</button>
                            </Link>
                        )}
                        {cta1_link && (
                            <Link href={cta1_link}>
                                <button className="btn btn-primary">{cta1_text}</button>
                            </Link>
                        )}
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngagementBlock;