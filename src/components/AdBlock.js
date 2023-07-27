import React from 'react';
import Link from 'next/link';

const AdBlock = () => {


    return (
        <div className="hero  bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center">
            {/*<div  className="scroll-p-0 bg-gradient-to-r from-primary to-secondary text-white py-10 px-4">*/}
            <div className="hero-content flex-col lg:flex-row  items-center">
                <div className={'flex flex-col items-center justify-center'}>

                    <img src="https://dexterlabs-public.s3.us-west-1.amazonaws.com/pagesake_logo.png"
                         className =" bg-stone-300 max-w-sm rounded-lg shadow-2xl h-16 w-16 "
                    />
                    <h4 className={'text-xl '}>Pagesake</h4>
                </div>
                <div>
                    <h1 className="text-4xl ">Don&apos;t Just Browse The Web. <br />
                        <span className={'text-green-200  font-bold mt-4'}>Create it.</span>
                    </h1>
                    <p className="py-2">Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. </p>
                    <p className="py-2">See what the savviest creators on the web are already doing, checkout Pagesake today! </p>
                    <div className={'flex justify-center gap-4 mt-4'}>
                        <button className="btn btn-secondary btn-outline"><Link href={'https://pagesake.com'}>Learn More</Link></button>
                        <button className="btn btn-primary"><Link href={'https://pagesake.com'}>Start for Free</Link></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdBlock;

