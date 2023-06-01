import React from 'react';
import Link from 'next/link'
const HeroBlock = ({ header, subheader, cta1_text, cta2_text, cta1_link,cta2_link }) => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-4 ">
            <h2 className="text-3xl font-bold mb-4">{header}</h2>
            <p className="text-lg mb-6">{subheader}</p>
            <Link href={cta1_link}>
                <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
                    {cta1_text}
                </button>
            </Link>
            <Link href={cta2_link}>
                <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
                    {cta2_text}
                </button>
            </Link>
        </div>
    );
};

export default HeroBlock;