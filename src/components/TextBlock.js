import React from 'react';
import ReactMarkdown from 'react-markdown';

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

    // Define your components here
    const components = {
        h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-red-500" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-xl font-semibold text-blue-500" {...props} />,
        p: ({node, ...props}) => <p className="text-gray-500" {...props} />,
        img: ({node, ...props}) => <img className="mx-auto" {...props} />,
        a: ({node, ...props}) => <a className="text-blue-500 hover:text-blue-700 underline" {...props} />,
        code: ({node, inline, className, children, ...props}) => <code className={`${className} p-1 bg-gray-200 rounded`} {...props} />,
    };

    return (
        <div key={key} contentBlockId={contentBlockId}>
            {header && <h2 className="text-2xl font-bold mb-4 text-center">{header}</h2>}
            {subheader && <h3 className="text-lg mb-2 text-center">{subheader}</h3>}
            {image_link &&
                <div className="flex justify-center">
                    <img src={image_link} alt="Hero Image" />
                </div>
            }
            {body && <ReactMarkdown components={components} children={body} />}
            <div className="flex justify-center space-x-4  py-4">
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
