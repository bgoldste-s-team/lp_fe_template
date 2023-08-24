
export default function ContentNetwork({}) {
  const contentNetworkData = [
      {
        title: "I Got An AI To Write 40000 articles for me.",
        description: "Here's What Happened.",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1509-image.png",
        site: "Five Buck Sites",
        accent:"success",
        badgeCopy:"WOA"
      },
      {
        title: "Crazy Benefits for Business Owners",
        description: "SUPER intersting article about asdfasdf asdf asdf asdf",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1507-image.png",
        accent:"primary",
        badgeCopy:"COOL"
      },
       {
        title: "FIrst Article",
        description: "SUPER intersting article about asdfasdf asdf asdf asdf",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1507-image.png",
        accent:"secondary",
        badgeCopy:"COOL"   
      },
            {
        title: "I Got An AI To Write 40000 articles for me.",
        description: "Here's What Happened.",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1509-image.png",
        site: "Five Buck Sites",
        accent:"error",
        badgeCopy:"WOA"
      },
      {
        title: "Crazy Benefits for Business Owners",
        description: "SUPER intersting article about asdfasdf asdf asdf asdf",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1507-image.png",
        accent:"info",
        badgeCopy:"COOL"
      },
       {
        title: "Web Developers HATE him",
        description: "SUPER intersting article about asdfasdf asdf asdf asdf",
        url: "https://asdfasdf.com",
        thumbnail_url: "https://dexterlabs-public.s3.amazonaws.com/images/dogsledding-1507-image.png",
        accent:"secondary",
        badgeCopy:"COOL"   
      },
   
   


    ];
return (
  <div className="bg-primary p-4">
    <h2 className="text-primary-content text-center py-2 text-3xl">Related Content</h2>
    <ul className="grid gap-4 justify-center grid-auto-rows: minmax(120px, auto) md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {contentNetworkData.map((c) => (
        <li key={c.title}>
          <div className="card card-compact p-4 w-120 h-120 bg-base-100 shadow-xl overflow-hidden">
            <figure><img className='w-40 h-40' src={c.thumbnail_url} alt="Thumbnail for article" /></figure>
            <div className='card-body'>
              <div className='h-12 overflow-hidden flex flex-row justify-between'>
                <h2 className="card-title  text-xl mb-2">{c.title}</h2>
                <div className={`mr-4 badge badge-${c.accent}`}>{c.badgeCopy}</div>
              </div>
              <p className="h-12 overflow-hidden ">{c.description}</p>
            </div>
            <div className="card-actions justify-center">
              <button className='btn btn-primary btn-wide'> Read More</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}





