import React, { useState } from 'react';
import Link from "next/link";




const SearchComponent = ({ pages }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);


const SNIPPET_LENGTH = 80;  // Adjust this value based on your needs
const MAX_MATCHES = 3;

const highlightText = (text, query) => {
  let remainingText = text;
  let matchCount = 0;
  let highlighted = '';

  while (matchCount < MAX_MATCHES) {
    const match = remainingText.match(new RegExp(`(.{0,${SNIPPET_LENGTH}})(${query})(.{0,${SNIPPET_LENGTH}})`, 'i'));
    
    if (!match) break;
    
    highlighted += `...${match[1]}<span class='bg-primary text-primary-content'>${match[2]}</span>${match[3]}... `;
    const indexAfterMatch = match.index + match[0].length;
    remainingText = remainingText.slice(indexAfterMatch);

    matchCount++;
  }

  return highlighted || null;
};

const handleSearch = () => {
    const matchedResults = [];
    
    pages.forEach(page => {
      page.content_blocks.forEach(block => {
        const highlightedHeader = block.header ? highlightText(block.header, searchTerm) : null;
        const highlightedSubheader = block.subheader ? highlightText(block.subheader, searchTerm) : null;
        const highlightedBody = block.body ? highlightText(block.body, searchTerm) : null;

        // Check if the term exists in any of the fields and if the highlight (span tag) is present
        if (
          (highlightedHeader && highlightedHeader.includes('<span')) || 
          (highlightedSubheader && highlightedSubheader.includes('<span')) || 
          (highlightedBody && highlightedBody.includes('<span'))
        ) {
          matchedResults.push({
            pageId: page.id,
            pageSlug: page.is_homepage ? '' : page.slug,
            pageTitle: page.title,
            blockOrder: block.order,
            blockHeader: block.header,
            blockSubheader: block.sub,
            blockBody: highlightedBody,
            image_link: block.image_url
          });
        }
      });
    });

    setResults(matchedResults);
};




  return (
    <div className="p-4">

      <div className="mb-4 flex">
        <input 
          type="text"
          className="flex-grow p-2 border rounded"
          placeholder="Search..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="ml-2 btn btn-primary">
          Search
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.length > 0 ? results.map((result, index) => (
          <div key={index} className="card bordered">
            <figure>
            {result.image_link && (
    
          <img src={result.image_link} alt="Hero Image" className="md:w-3/4" />
   
      )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{result.pageTitle}</h2>
              {/*<p>Page ID: {result.pageId}</p>*/}
              {/*<p>Block Order: {result.blockOrder}</p>*/}
              <div dangerouslySetInnerHTML={{ __html: result.blockHeader || '' }}></div>
              <div dangerouslySetInnerHTML={{ __html: result.blockSubheader || '' }}></div>
              <p dangerouslySetInnerHTML={{ __html: result.blockBody || '' }}></p>
            </div>
           <Link className="btn btn-secondary" href={`/${result.pageSlug}#${result.blockOrder}`}>
           View More
          </Link>
          </div>

        )) : 

        <div className='card card-bordered self-center'> 
            <div className="card-body">
              <h2 className="card-title">No Results Found</h2>
              <p className='text-lg'>Please try changing your search term.</p>
            </div>
        </div>



          }
      </div>
    </div>
  );
}

export default SearchComponent;
