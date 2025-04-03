import { useEffect, useState } from 'react';
import '../css/App.css';
import formatContent from '../functions/util';

function Timeline({currentPanel}) {
    const [mark, setMark] = useState(-1);
    const experiences = [['TCOM Corporation', '12/2023-2-2024', 'Sought for and patch bugs for spa project, a website managing employees and customers at once for a company Japan-based', 'Collaborated with a group of five seniors to develop a website similar to Amazon, specializing in front-end responsive web development, contributing over 15% of existing codes', 'Conducted demo presentations for leaders, resolving around 20 bugs a day, brainstorming and implementing better UI design ideas'], ['DataAnnotations and OutlierAI', '03/2024 - Present', 'Developed and optimized over 10 AI models, improving accuracy and response quality by 20% and reducing processing time significantly', 'Implemented instructed techniques and advised software for data validation, achieving a notable reduction in input errors and improving data integrity', 'Conducted performance assessments for 200+ chatbot interactions, including categorized ratings, transcript writing and feedback provision, increasing response accuracy and relevance by 15%'], ['Code Camp', '06/2024 - Present', 'Instructed students aged 7-13 afterschool around 5 hours weekly on basic programming languages including Python, or through interactive platforms nominally Scratch and Roblox Studio', 'Ensure smooth sessions with over 20 children by collaborating with different teams to tackle any arisen problems, and keeping discipline'], ['Walter and Eliza Hall Instistute of Medical Research', '07/2024 - 11/2024', 'Strengthened understanding of open source norms, refine over a dozen documentations around Nix, BioNix, Kraken2, TRF and RepeatMasker to make it easier and quicker to comprehend concepts', 'Committed as an open source contributor in wrapping 3 underlying bioinformatics software, mainly Kraken2, contemporarily unavailable in nixpkgs', 'Wrote expressions to execute a variety of tools as 4-7 individual processing stages based on software and conduct assessment on each stage in isolation']];
    const [mid, setMid] = useState();
    const [open, setOpen] = useState(false);
    const [oid, setOid] = useState();
    const [formattedContent, setFormattedContent] = useState()

    useEffect(() => {
        if (currentPanel === 2) {
            setMid(setTimeout(() => {
                setMark(0);
                setOpen(true);
            }, 5000))
        } 
        else {
            setOpen(false);
            if (mid) clearTimeout(mid);
            setMark(-1);
        }
        // eslint-disable-next-line
    }, [currentPanel])

    useEffect(() => {
        if (mark >= 0) {
            setFormattedContent(formatContent(experiences[mark], null))
        }
        // eslint-disable-next-line
    }, [mark])

    const handleClick = () => {
        if (oid) clearTimeout(oid);
        setOpen(false);
        setOid(setTimeout(() => setOpen(true), 700));
    }

    return (
        <>
            <div className='timeline-container'>
                <div className='timeline'></div>
                {['','2024','','2025'].map((key, index) => {
                    return (
                        <div key={index} className={`timeline-year-marker-${index}`} data-text={key}></div>
                    )
                })}
                {experiences.map((experience, index) => {
                    return (
                        <div key={index} className={`timeline-marker-${index} timeline-marker ${mark === index  ? 'on' : 'off'}`} onClick={() => {
                            setMark(index);
                            if (mark !== index) handleClick();
                        }}>
                            <div className='timeline-marker-center'></div>
                            <div className='timeline-marker-center'></div>
                        </div>
                    )
                })}
            </div>
            <div className='experience-display-container'>
                <div className={`experience-display ${open ? 'open' : 'close'}`}>
                    {experiences.map((str, index) => {
                        return (
                            (mark === index && <div className='glitch' key={index}>{formattedContent}</div>)
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Timeline;