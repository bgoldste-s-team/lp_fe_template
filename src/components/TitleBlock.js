const TitleBlock = ({ page }) => {
  return (
    <div
      className="hero min-h-[60vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-secondary"
      style={{
        backgroundImage: `${page.image_url ? `url(${page.image_url})` : ""}`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="py-6  text-2xl sm:text-4xl md:text-5xl font-bold break-words ">
            {page.title}
          </h1>
          <p className="py-2">{page.page_description}</p>
          <p className="text-sm py-2">
            Last Updated: {new Date(page.publish_date).toLocaleDateString()}
          </p>

        </div>
      </div>
    </div>
  );
};

export default TitleBlock;

{
  /*<div className="hero  bg-base-100">
            <div className="hero-content text-center p-12 flex flex-col">
          
	  			<h1 className="text-4xl font-bold pt-4">{page.title} {page.image_url	}</h1>
	  			<h1 className="text-xl pt-4">{page.page_description}</h1>
		  		<p className="">Last Updated: {new Date(page.publish_date).toLocaleDateString()}</p>

			</div>
	   </div>*/
}
