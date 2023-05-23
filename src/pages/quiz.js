import { useState } from 'react';
import { useRouter } from 'next/router';
import siteData from "@/data/site_data.json";


export default function Quiz() {
    const router = useRouter();
    const initialState = siteData.quiz_traits.reduce((obj, trait) => ({ ...obj, [trait]: false }), {});

    const [traits, setTraits] = useState(initialState);
    const [currentTraitIndex, setCurrentTraitIndex] = useState(0);

    const handleTraitChange = (event) => {
        setTraits({ ...traits, [event.target.name]: event.target.checked });
    };

    const handleNext = () => {
        if (currentTraitIndex < siteData.quiz_traits.length - 1) {
            setCurrentTraitIndex(currentTraitIndex + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = (event) => {
        event?.preventDefault();
        const selectedTraits = Object.keys(traits).filter((trait) => traits[trait]);
        router.push(`/results?traits=${selectedTraits.join(',')}`);
    };

    return (
        <div>
            <h1>Quiz</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="checkbox"
                        id={siteData.quiz_traits[currentTraitIndex]}
                        name={siteData.quiz_traits[currentTraitIndex]}
                        checked={traits[siteData.quiz_traits[currentTraitIndex]]}
                        onChange={handleTraitChange}
                    />
                    <label htmlFor={siteData.quiz_traits[currentTraitIndex]}>
                        Are you {siteData.quiz_traits[currentTraitIndex]}?
                    </label>
                </div>
                <button type="button" onClick={handleNext}>Next</button>
                {currentTraitIndex === siteData.quiz_traits.length - 1 && (
                    <button type="submit">Submit</button>
                )}
            </form>
        </div>
    );
}