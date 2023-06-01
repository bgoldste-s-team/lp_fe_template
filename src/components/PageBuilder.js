import HeroBlock from "@/components/HeroBlock";
import TextBlock from "@/components/TextBlock";

export default function PageBuilder({page}){
    return(
        <div>
        <h1>Page builder</h1>

            {page.content_blocks.map((c) => {
                if (c.type === 'HeroBlock') {
                    return (
                        <HeroBlock
                            key={c.id}
                            contentBlockId={c.id}
                            header={c.header}
                            subheader={c.subheader}
                            body={c.body}
                            cta1_text={c.cta1_text}
                            cta2_text={c.cta2_text}
                            cta1_link={c.cta1_link}
                            cta2_link={c.cta2_link}
                        />
                    );
                } else {
                    // Render other block component
                    return (
                        <TextBlock
                            key={c.id}
                            contentBlockId={c.id}
                            header={c.header}
                            subheader={c.subheader}
                            body={c.body}
                        />
                    );
                }
            })}
        </div>
    )
}