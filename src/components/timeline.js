import { useEffect, useState } from 'react';
import '../css/App.css';

function Timeline({currentPanel}) {
    const [mark, setMark] = useState(-1);
    const experiences = ['TCOM Corporation', 'DataAnnotations', 'Code Camp', 'Walter and Eliza Hall Instistute of Medical Research', 'Outlier'];
    const [mid, setMid] = useState();
    const [open, setOpen] = useState(false);
    const [oid, setOid] = useState();

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
    }, [currentPanel])

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
                    <div className='experience-container'>
                        {experiences.map((str, index) => {
                            return (
                                (mark === index && <div className='information glitch' key={index}>{str}</div>)
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timeline;