import React from 'react';
import Link from 'next/link';
import {FaArrowDown,FaCircle} from "react-icons/fa6";

const TableOfContentsBlock = ({ header, subheader, cta1_text, cta2_text, cta1_link, cta2_link, image_link, page }) => {
  



    return (
        <div className={'card card-compact items-center py-2  '}>
        <div className='card-body '>
            <h2 className='text-2xl card-title'>On This Page...</h2>
            <ul className={'p-4 space-y-2 border-l-2 border-primary'}>

            {page.content_blocks.filter(c => c.type === 'HeroBlock' || c.type === 'TextBlock').map((c) => (

                <li key={c.id}>
                    <Link href={`#${c.order}`} className='flex flex-row' >
                          <span className=' text-lg'>- {c.header} </span>  <FaArrowDown className='text-primary text-md ml-3'/>
                    </Link>
                </li>

            ))}
            </ul>
            </div>
        </div>
    );
};

export default TableOfContentsBlock ;

