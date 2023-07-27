
import React from 'react';
import HeroBlock from '@/components/HeroBlock';
import TextBlock from '@/components/TextBlock';
import ProductCardBlock from "@/components/ProductCardBlock";
import TableOfContentsBlock from "@/components/TableOfContentsBlock";
import CaseStudyBlock from "@/components/CaseStudyBlock";
import ContactBlock from "@/components/ContactBlock";
import SubscribeBlock from "@/components/SubscribeBlock";
import FeaturedPages from "@/components/FeaturedPages";
import AdBlock from "@/components/AdBlock";

export default function PageBuilder({ page, site }) {
    return (
        <div>



            {page.content_blocks.map((c, index) => {
                let commonDiv = (Component, SecondComponent) => (
                    <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                        <Component
                            contentBlockId={c.id}
                            header={c.header}
                            subheader={c.subheader}
                            body={c.body}
                            cta1_text={c.cta1_text}
                            cta2_text={c.cta2_text}
                            cta1_link={c.cta1_link}
                            cta2_link={c.cta2_link}
                            image_link={c.image_url}
                        />
                        {SecondComponent && <SecondComponent />} {/* Add your SecondComponent here */}
                    </div>
                );

                switch (c.type) {
                    case 'HeroBlock':
                        return commonDiv(HeroBlock, AdBlock);
                        return (
                            <div className={"scroll-mt-16"}  key={c.id} id={0}>
                                <HeroBlock

                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />

                                {/*{index !== page.content_blocks.length - 1 && <hr className=" border border-gray-300" />} /!* Add divider *!/*/}
                            </div>
                        )
                    case 'TextBlock':
                        return commonDiv(TextBlock, AdBlock);
                        return(
                            <div className={"scroll-mt-16"} key={c.id} id={c.order}>
                                <TextBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'ProductCardBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <ProductCardBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'TableOfContentsBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <TableOfContentsBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                    page={page}
                                />
                            </div>
                        )
                    case 'TableOfContentsBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <TableOfContentsBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'CaseStudyBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <CaseStudyBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'SubscribeBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <SubscribeBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'ContactBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <ContactBlock
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                />
                            </div>
                        )
                    case 'FeaturedPagesBlock':
                        return(
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
                                <FeaturedPages
                                    contentBlockId={c.id}
                                    header={c.header}
                                    subheader={c.subheader}
                                    body={c.body}
                                    cta1_text={c.cta1_text}
                                    cta2_text={c.cta2_text}
                                    cta1_link={c.cta1_link}
                                    cta2_link={c.cta2_link}
                                    image_link={c.image_url}
                                    pages={site.pages.filter((p) => p.slug !== page.page_group && p.page_group === page.page_group)}
                                    pageGroupName={ page.page_group}
                                />
                            </div>
                        )
                    default:
                        return(
                            <h1>Type Not supported {c.type}</h1>
                        )
                }


            })}
            <h1>Debug Info:Title: {page.title} Slug: {page.slug}</h1>
            <p>Total Content Blocks: {page.content_blocks.length}</p>

        </div>
    );
}
