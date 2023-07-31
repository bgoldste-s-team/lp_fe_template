import React from 'react';
import HeroBlock from "@/components/HeroBlock";


const EngagementBlock = ({
                engagementBlock
                   }) => {





    if (engagementBlock.type === 'HeroBlock') {
        return (
            <HeroBlock
                header={engagementBlock.header}
                subheader={engagementBlock.subheader}
                body={engagementBlock.body}
                cta1_text={engagementBlock.cta1_text}
                cta2_text={engagementBlock.cta2_text}
                cta1_link={engagementBlock.cta1_link}
                cta2_link={engagementBlock.cta2_link}
                image_link={engagementBlock.image_url}

            />
        )
    }
    return (
    <h1>ENGAGMENT BLOCK {engagementBlock.header}</h1>
    );
};

export default EngagementBlock;
