import React from 'react';

const TextBlock = ({ header, subheader, body}) => {
    return (
        <div className="bg-gray-100 py-8 px-4">
            <h2 className="text-2xl font-bold mb-4">{header}</h2>
            <h3 className="text-lg mb-2">{subheader}</h3>
            <p className="text-gray-700">{body}</p>
        </div>
    );
};

export default TextBlock;
