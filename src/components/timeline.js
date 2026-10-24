import { useEffect, useState } from 'react';
import '../css/App.css';
import formatContent from '../functions/util';

function Timeline({currentPanel}) {
    const [mark, setMark] = useState(-1);
    const experiences = [
        ['TCOM Corporation - Web Developer and Data Engineer Intern', '11/2023 - 02/2024', 'Sought out and patched 20 bugs/day for a HR management website for a Japan-based company', 'Collaborated with five seniors to develop an e-commerce site, contributing over 15% of the codebase', 'Integrated GraphQL APIs into the Next.js front-end and optimised query schemas and indexing, reducing data transfer and fetch latency by 20%'],
        ['DataAnnotations and OutlierAI', '03/2024 - 07/2025', 'Developed and optimized over 10 AI models, improving accuracy and response quality by 20% and reducing processing time significantly', 'Implemented instructed techniques and advised software for data validation, achieving a notable reduction in input errors and improving data integrity', 'Conducted performance assessments for 200+ chatbot interactions, including categorized ratings, transcript writing and feedback provision, increasing response accuracy and relevance by 15%'],
        ['Code Camp', '06/2024 - 09/2025', 'Instructed students aged 7-13 afterschool around 5 hours weekly on basic programming languages including Python, or through interactive platforms nominally Scratch and Roblox Studio', 'Ensure smooth sessions with over 20 children by collaborating with different teams to tackle any arisen problems, and keeping discipline'],
        ['Walter and Eliza Hall Institute of Medical Research - BioNix', '07/2024 - 11/2024', 'Strengthened understanding of open source norms, refined over a dozen documentations around Nix, BioNix, Kraken2, TRF, and RepeatMasker', 'Committed open source, wrapping 3 bioinformatics software previously unavailable in nixpkgs', 'Wrote expressions to execute 4-7 individual processing stages and conduct an assessment on each stage in isolation'],
        ['Legend Sports - Software Developer and Computer Vision Engineer', '10/2025 - 12/2025', 'Built a spatial sound engine from player and ball telemetry with ffmpeg-python, achieving sub 200 ms sync latency', 'Developed a Next.js event-tagging interface with timeline scrubbing and hotkeys, reaching 180 events/hour', 'Co-developed a YOLO detection model with Roboflow, improving mAP@0.5 by around 10 points'],
    ];
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
                {['','2024','2025','2026'].map((key, index) => {
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