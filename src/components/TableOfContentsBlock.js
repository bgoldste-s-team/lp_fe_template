import React from 'react';
import Link from 'next/link';

const TableOfContentsBlock = ({ header, subheader, cta1_text, cta2_text, cta1_link, cta2_link, image_link, page }) => {
    const imageContainerClasses = "w-full h-auto mx-auto";
    const headerClasses = "text-3xl font-bold mb-4 text-center";
    const subheaderClasses = "text-lg mb-6 text-center";
    const buttonClasses = "bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100";
    const buttonContainerClasses = "flex justify-center gap-4 mt-4";



    return (
        <div className={'text-center'}>
            <h1>TABLE OF CONTENTS</h1>
            <ul>
            {page.content_blocks.map((c) => (

                <li key={c.id}>
                    <Link href={`#${c.order}`}>
                          {c.order} {c.header} {c.type}
                    </Link>
                </li>

            ))}
            </ul>
        </div>
    );
};

export default TableOfContentsBlock ;

