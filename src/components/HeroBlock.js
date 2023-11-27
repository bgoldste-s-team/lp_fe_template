import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const HeroBlock = ({
  header,
  subheader,
  body,
  cta1_text,
  cta2_text,
  cta1_link,
  cta2_link,
  image_link,
}) => {


  function spliceAfterThirdPeriod(text) {
    const sentences = text.split(".");
    if (sentences.length < 3) {
      return text;
    }
    return sentences.slice(0, 2).join(".") + ".";
  }

  const splicedBody = spliceAfterThirdPeriod(body);

  return (
    <div
      className="hero min-h-[50vh] "
      style={{ backgroundImage: `url(${image_link})` }}
    >
      <div className="hero-overlay bg-base-100"></div>

      <div className="hero-content text-center text-base-content my-10">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-bold">{header}</h1>
          <p className="mb-5 text-2xl">{subheader}</p>
          <p className="mb-5">{splicedBody}</p>

          <div className="flex justify-center gap-4 mt-4">
            {cta2_link && (
              <Link className="btn btn-secondary" href={cta2_link}>
                {cta2_text}
              </Link>
            )}
            {cta1_link && (
              <Link className="btn btn-primary" href={cta1_link}>
                {cta1_text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

{
  /*
<button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button><button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button><button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button><button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
       */
}
