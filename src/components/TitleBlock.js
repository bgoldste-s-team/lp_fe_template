const TitleBlock = ({page}) => {
	return (
		<div className="hero  bg-base-100">
            <div className="hero-content text-center p-12 flex flex-col">
          
	  			<h1 className="text-4xl font-bold pt-4">{page.title}</h1>
		  		<p className="">Last Updated: {new Date(page.publish_date).toLocaleDateString()}</p>

			</div>
	   </div>
	)
};

export default TitleBlock;