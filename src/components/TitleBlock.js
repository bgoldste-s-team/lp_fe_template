const TitleBlock = ({page}) => {
	return (


		<div className="hero min-h-[50vh]" style={{backgroundImage: `url(${page.image_url})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">{page.title}</h1>
      <p className="mb-5">{page.page_description}</p>
      <p className="">Last Updated: {new Date(page.publish_date).toLocaleDateString()}</p>
   
     {/* <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-primary">Get Started</button>*/}
    </div>
  </div>
</div>
		
	)
};

export default TitleBlock;

{/*<div className="hero  bg-base-100">
            <div className="hero-content text-center p-12 flex flex-col">
          
	  			<h1 className="text-4xl font-bold pt-4">{page.title} {page.image_url	}</h1>
	  			<h1 className="text-xl pt-4">{page.page_description}</h1>
		  		<p className="">Last Updated: {new Date(page.publish_date).toLocaleDateString()}</p>

			</div>
	   </div>*/}