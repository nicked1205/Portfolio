import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../css/App.css';
import useDecode from '../functions/useDecode';
import { line } from '../functions/variants';

const experiences = [
    {
        company: 'TCOM Corporation',
        short: 'TCOM',
        role: 'Web Developer and Data Engineer Intern',
        start: '11/2023',
        end: '02/2024',
        points: [
            'Sought out and patched 20 bugs/day for a HR management website for a Japan-based company',
            'Collaborated with five seniors to develop an e-commerce site, contributing over 15% of the codebase',
            'Integrated GraphQL APIs into the Next.js front-end and optimised query schemas and indexing, reducing data transfer and fetch latency by 20%',
        ],
    },
    {
        company: 'DataAnnotations and OutlierAI',
        short: 'DataAnnotations / OutlierAI',
        start: '03/2024',
        end: '07/2025',
        points: [
            'Developed and optimized over 10 AI models, improving accuracy and response quality by 20% and reducing processing time significantly',
            'Implemented instructed techniques and advised software for data validation, achieving a notable reduction in input errors and improving data integrity',
            'Conducted performance assessments for 200+ chatbot interactions, including categorized ratings, transcript writing and feedback provision, increasing response accuracy and relevance by 15%',
        ],
    },
    {
        company: 'Code Camp',
        short: 'Code Camp',
        start: '06/2024',
        end: '09/2025',
        points: [
            'Instructed students aged 7-13 afterschool around 5 hours weekly on basic programming languages including Python, or through interactive platforms nominally Scratch and Roblox Studio',
            'Ensure smooth sessions with over 20 children by collaborating with different teams to tackle any arisen problems, and keeping discipline',
        ],
    },
    {
        company: 'Walter and Eliza Hall Institute of Medical Research',
        short: 'WEHI',
        role: 'BioNix',
        start: '07/2024',
        end: '11/2024',
        points: [
            'Strengthened understanding of open source norms, refined over a dozen documentations around Nix, BioNix, Kraken2, TRF, and RepeatMasker',
            'Committed open source, wrapping 3 bioinformatics software previously unavailable in nixpkgs',
            'Wrote expressions to execute 4-7 individual processing stages and conduct an assessment on each stage in isolation',
        ],
    },
    {
        company: 'Legend Sports',
        short: 'Legend Sports',
        role: 'Software Developer and Computer Vision Engineer',
        start: '10/2025',
        end: '12/2025',
        points: [
            'Built a spatial sound engine from player and ball telemetry with ffmpeg-python, achieving sub 200 ms sync latency',
            'Developed a Next.js event-tagging interface with timeline scrubbing and hotkeys, reaching 180 events/hour',
            'Co-developed a YOLO detection model with Roboflow, improving mAP@0.5 by around 10 points',
        ],
    },
];

// The axis runs 01/2023 to 01/2026; extend AXIS_MONTHS and years for later roles
const AXIS_START_YEAR = 2023;
const AXIS_MONTHS = 36;
const years = ['', '2024', '2025', '2026'];
const MIN_GAP = 3; // months, keeps markers from overlapping when start dates are close
const DRAW_DELAY = 0.3;
const DRAW_DURATION = 1.4;

const monthOf = (date) => {
    const [month, year] = date.split('/').map(Number);
    return (year - AXIS_START_YEAR) * 12 + month - 1;
};
const positions = experiences.reduce(
    (acc, experience) => [...acc, Math.max(monthOf(experience.start), (acc.length ? acc[acc.length - 1] : -MIN_GAP) + MIN_GAP)],
    []
);
const leftOf = (month) => `${10 + (month / AXIS_MONTHS) * 80}%`;
// Each marker blinks in as the drawing line reaches it
const reachedAt = (month) => DRAW_DELAY + DRAW_DURATION * (month / AXIS_MONTHS);

const blink = (delay) => ({
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    show: { opacity: [0, 1, 0, 1, 0, 1], transition: { delay, duration: 0.5, times: [0, 0.1, 0.2, 0.4, 0.6, 1] } },
});

// The card draws out as a green line, then opens downward; closing runs the same steps in reverse
const ease = [0.39, 0.575, 0.565, 1];
const green = 'rgb(74 246 38 / 1)';
const hiddenBorder = 'rgb(74 246 38 / 0)';
const openUp = {
    width: { duration: 0.35, ease },
    height: { delay: 0.35, duration: 0.35, ease },
    borderColor: { duration: 0.7, times: [0, 0.5, 1] },
};
const closeDown = {
    height: { duration: 0.35, ease },
    width: { delay: 0.35, duration: 0.35, ease },
    borderColor: { duration: 0.7, times: [0, 0.5, 1] },
};

function ExperienceCard({ experience }) {
    const company = useDecode(experience.company, { delay: 0.75 });

    return (
        <motion.div
            className='experience-display'
            initial={{ width: 0, height: 0 }}
            animate={{ width: '100%', height: 'auto', borderColor: [hiddenBorder, green, hiddenBorder], transition: openUp }}
            exit={{ width: 0, height: 0, borderColor: [hiddenBorder, green, hiddenBorder], transition: closeDown }}
        >
            <motion.div
                className='experience-content'
                initial='hidden'
                animate='show'
                variants={{ show: { transition: { delayChildren: 0.75, staggerChildren: 0.1 } } }}
            >
                <motion.div variants={line} className='experience-company'>{company}</motion.div>
                {experience.role && <motion.div variants={line} className='experience-role'>{experience.role}</motion.div>}
                <motion.div variants={line} className='experience-date'>[ {experience.start} &rarr; {experience.end} ]</motion.div>
                <ul className='experience-points'>
                    {experience.points.map((point) => (
                        <motion.li key={point} variants={line}>{point}</motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}

function Timeline({ currentPanel }) {
    const active = currentPanel === 2;
    const [mark, setMark] = useState(-1);
    const [hover, setHover] = useState(-1);
    const labelled = hover >= 0 ? hover : mark;

    useEffect(() => {
        if (!active) {
            setMark(-1);
            return;
        }
        // Open the latest role once the line has finished drawing
        const id = setTimeout(() => setMark(experiences.length - 1), (DRAW_DELAY + DRAW_DURATION + 0.3) * 1000);
        return () => clearTimeout(id);
    }, [active]);

    return (
        <>
            <div className='timeline-container'>
                <motion.div
                    className='timeline'
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    transition={active ? { delay: DRAW_DELAY, duration: DRAW_DURATION, ease: 'linear' } : { duration: 0.2 }}
                />
                {years.map((year, index) => (
                    <motion.div
                        key={index}
                        className='timeline-year-marker'
                        data-text={year}
                        style={{ left: leftOf(index * 12) }}
                        initial='hidden'
                        animate={active ? 'show' : 'hidden'}
                        variants={blink(reachedAt(index * 12))}
                    />
                ))}
                {experiences.map((experience, index) => (
                    <motion.div
                        key={experience.company}
                        className={`timeline-marker ${mark === index ? 'on' : 'off'}`}
                        style={{ left: leftOf(positions[index]) }}
                        initial='hidden'
                        animate={active ? 'show' : 'hidden'}
                        variants={blink(reachedAt(positions[index]))}
                        onClick={() => setMark(index)}
                        onHoverStart={() => setHover(index)}
                        onHoverEnd={() => setHover(-1)}
                    >
                        <div className='timeline-marker-center'></div>
                        <div className='timeline-marker-center'></div>
                        {mark === index && <motion.div layoutId='timeline-ring' className='timeline-marker-ring' />}
                    </motion.div>
                ))}
                <AnimatePresence>
                    {labelled >= 0 && (
                        <motion.div
                            key={labelled}
                            className='timeline-label glitch'
                            style={{ left: leftOf(positions[labelled]) }}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        >
                            &gt; {experiences[labelled].short}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='experience-display-container'>
                <AnimatePresence mode='wait'>
                    {mark >= 0 && <ExperienceCard key={mark} experience={experiences[mark]} />}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Timeline;
