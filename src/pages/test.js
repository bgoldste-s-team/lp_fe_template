import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

function MyComponent() {
    const [value, setValue] = useState("# Hi my name is Ben\nI like to **eat apples**\nHere is a [link](https://www.google.com)");
    const [selectedTab, setSelectedTab] = useState("write");

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(<ReactMarkdown children={markdown} />)
                }
                style={{ width: '50%' }}
            />
            <ReactMarkdown children={value} style={{ width: '50%' }}/>
        </div>
    );
}

export default MyComponent;
