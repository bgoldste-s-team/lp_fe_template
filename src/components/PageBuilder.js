
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
import Link from "next/link";
import EngagementBlock from "@/components/EngagementBlock";
import AmazonProductCard from "@/components/AmazonProductCard";
import ProductBank from "@/components/ProductBank";
import ContentNetwork from "@/components/ContentNetwork";
import TitleBlock from "@/components/TitleBlock";
import ContactFormBlock from "@/components/ContactFormBlock";
export default function PageBuilder({ page, site }) {

    const adRules = {

        full_ads: {
            showAmazonAds: true,
            showPagesakeAds: true,
            showContentNetwork: true, //goes at the bottom, just before page footer.
            showMiscReferralAds: true // not sure where this will go, maybe just don't bother for right now? 
        },
        light_ads:{
            showAmazonAds: false,
            showPagesakeAds: true,
            showContentNetwork: true,
            showMiscReferralAds: true
        },
        no_ads:{
            showAmazonAds: false,
            showPagesakeAds: false,
            showContentNetwork: false,
            showMiscReferralAds: false
        },
        no_ads_with_amazon:{
            showAmazonAds: true,
            showPagesakeAds: false,
            showContentNetwork: false,
            showMiscReferralAds: false
        }

    }
 

    const adLevel = site.ad_level;

    const showAmazonAds = adRules[adLevel].showAmazonAds;
    const showPagesakeAds = adRules[adLevel].showPagesakeAds
    const showContentNetwork = adRules[adLevel].showContentNetwork
    const showMiscReferralAds = adRules[adLevel].showMiscReferralAds

    const  showContactForm = site.show_contact_form;



    const amazonProducts = site.amazon_products;
    const amazonProductsLength = amazonProducts.length;
    // const sortedAmazonProducts = amazonProducts.sort((a,b) => a.id - b.id);


    const seed = (13 * page.id) % 37;

    function shuffleArrayWithSeed(array) {


        const shuffled = [...array];
        for (let i = 0; i < array.length; i++) {
            const newIndex = (i + seed) % array.length;
            [shuffled[i], shuffled[newIndex]] = [shuffled[newIndex], shuffled[i]];
        }
        return shuffled;
    }
    function getNextThreeProducts(products, startIndex) {
        if (startIndex + 3 <= products.length) {
            return products.slice(startIndex, startIndex + 3);
        } else {
            const endChunk = products.slice(startIndex);
            const startChunk = products.slice(0, 3 - endChunk.length);
            return endChunk.concat(startChunk);
        }
    }
    const shuffledProducts = shuffleArrayWithSeed(amazonProducts);

    const engagementBlocks = site.engagement_blocks;
    const engagementBlocksLength = engagementBlocks.length;
    const contentBlocks = page.content_blocks;
    const contentBlocksLength = contentBlocks.length;
   

    const pageTop = 0;
    const pageMiddle = Math.floor(contentBlocksLength/2);
    const pageBottom = contentBlocksLength -1;


    function getEngagementBlock(index) {
        let position;
        if (index === pageTop) {
            position = 1;  // For top
        } else if (index === pageMiddle) {
            position = 2;  // For middle
        } else if (index === pageBottom) {
            position = 3;  // For bottom
        }

        if (position !== undefined) {
            return engagementBlocks.filter(eb => eb.position === position);
        } else {
            return [];
        }
    }








    return (
        <div className=''>
      
          <TitleBlock page={page} />
 


            {page.content_blocks.map((c, index) => {
                let engagementBlocks = getEngagementBlock(index);
                let commonDiv = (Component, SecondComponent, secondComponentProps) => (


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
                            page={page}
                        />
                        {engagementBlocks && engagementBlocks.map(eb => (
                            <EngagementBlock key ={eb.id} engagementBlock={eb} />
                        ))


                        }
                        {SecondComponent &&

                            <SecondComponent
                                {...secondComponentProps}
                                page={page}
                                site={site}
                                index={index}
                            />

                        }

                    </div>
                );

                switch (c.type) {
                    case 'HeroBlock':
                        {/*return commonDiv(HeroBlock, AmazonProductCard, {product:site.amazon_products[0]});*/}
                          if (index  === 0) {
                            return commonDiv(HeroBlock, null);
                        }
                        if (index % 2 === 0) {
                            return commonDiv(HeroBlock, ProductBank, 
                            {
                                products:getNextThreeProducts(shuffledProducts, (index+3)) ,
                                site:site
                            });
                        }
                        return commonDiv(HeroBlock, AdBlock, );
                        

                    case 'TextBlock':
                           if (index  === 0) {
                            return commonDiv(TextBlock, null);
                        }
                        if (index % 2 === 0) {
                          return commonDiv(TextBlock, ProductBank, 
                            {
                                products:getNextThreeProducts(amazonProducts, (index+3)) ,
                            });
                        }
                        return commonDiv(TextBlock,AdBlock,{name:'tessts'});
                        

         
                    case 'TableOfContentsBlock':
                        return commonDiv(TableOfContentsBlock, AdBlock)
                    
                     case 'FeaturedPagesBlock':
                        return (
                            <div className={"scroll-mt-16"}  key={c.id} id={c.order}>  
                                <FeaturedPages 
                                
                                    pages={site.pages}
                                    header={c.header}
                                    pageGroupName={page.page_group}
                                />
                            </div>
                            )
                
                  
                    default:
                        return(
                            <h1>Type Not supported {c.type}</h1>
                        )
                }


            })}


            {showContentNetwork && 
             <ContentNetwork />
            }

             {showContactForm && 
             <ContactFormBlock site_id={site.id} />
            }
          
        </div>
    );
}


// Can be refactored to use common block
  // case 'CaseStudyBlock':
  //                       return(
  //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
  //                               <CaseStudyBlock
  //                                   contentBlockId={c.id}
  //                                   header={c.header}
  //                                   subheader={c.subheader}
  //                                   body={c.body}
  //                                   cta1_text={c.cta1_text}
  //                                   cta2_text={c.cta2_text}
  //                                   cta1_link={c.cta1_link}
  //                                   cta2_link={c.cta2_link}
  //                                   image_link={c.image_url}
  //                               />
  //                           </div>
  //                       )
  //                   case 'SubscribeBlock':
  //                       return(
  //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
  //                               <SubscribeBlock
  //                                   contentBlockId={c.id}
  //                                   header={c.header}
  //                                   subheader={c.subheader}
  //                                   body={c.body}
  //                                   cta1_text={c.cta1_text}
  //                                   cta2_text={c.cta2_text}
  //                                   cta1_link={c.cta1_link}
  //                                   cta2_link={c.cta2_link}
  //                                   image_link={c.image_url}
  //                               />
  //                           </div>
  //                       )
  //                   case 'ContactBlock':
  //                       return(
  //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
  //                               <ContactBlock
  //                                   contentBlockId={c.id}
  //                                   header={c.header}
  //                                   subheader={c.subheader}
  //                                   body={c.body}
  //                                   cta1_text={c.cta1_text}
  //                                   cta2_text={c.cta2_text}
  //                                   cta1_link={c.cta1_link}
  //                                   cta2_link={c.cta2_link}
  //                                   image_link={c.image_url}
  //                               />
  //                           </div>
  //                       )
  //                   case 'FeaturedPagesBlock':
  //                       return(
  //                           <div className={"scroll-mt-16"}  key={c.id} id={c.order}>
  //                               <FeaturedPages
  //                                   contentBlockId={c.id}
  //                                   header={c.header}
  //                                   subheader={c.subheader}
  //                                   body={c.body}
  //                                   cta1_text={c.cta1_text}
  //                                   cta2_text={c.cta2_text}
  //                                   cta1_link={c.cta1_link}
  //                                   cta2_link={c.cta2_link}
  //                                   image_link={c.image_url}
  //                                   pages={site.pages.filter((p) => p.slug !== page.page_group && p.page_group === page.page_group)}
  //                                   pageGroupName={ page.page_group}
  //                               />
  //                           </div>
  //                       )