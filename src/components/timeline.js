import { useEffect, useState } from 'react';
import '../css/App.css';

function Timeline({currentPanel}) {
    const [mark, setMark] = useState(-1);
    const experiences = ['TCOM Corporation', 'DataAnnotations', 'Code Camp', 'Walter and Eliza Hall Instistute of Medical Research', 'Outlier'];
    const [oid, setOid] = useState();

    useEffect(() => {
        if (currentPanel === 2) {
            setOid(setTimeout(() => setMark(0), 5000))
        } 
        else {
            clearTimeout(oid);
            setMark(-1);
        }
    }, [currentPanel])

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
                        <div key={index} className={`timeline-marker-${index} ${mark === index  ? 'on' : 'off'}`} onClick={() => setMark(index)}>
                            <div className='timeline-marker-center'></div>
                            <div className='timeline-marker-center'></div>
                        </div>
                    )
                })}
            </div>
            <div className='experience-display'>

            </div>
        </>
    );
}

export default Timeline;