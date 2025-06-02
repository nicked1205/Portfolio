import '../css/App.css';
import ProjectCard from './project-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import UnrefusableValentine from '../resources/UnrefusableValentine.png';
import Portfolio from '../resources/Portfolio.png';
import AIA from '../resources/AIA.png';
import BioNix from '../resources/BioNix.png';
import Kamo from '../resources/kamo.png';
import DataProcessingPortal from '../resources/DataProcessingPortal.png';
import formatContent from '../functions/util';

function ProjectDisplay() {
    const [slide, setSlide] = useState(0);
    const projects = [['Algorithms in Action', 'A website that visualizes different computer algorithms for students to understand them better and educators to better deliver their lessons', 'Tech: Javascript, CSS, HTML'], ['BioNix', 'Wrapping bioinformatics software into a package manager called BioNix', 'Tech: Nix, Markdown'], ['Unrefusable Valentine', 'An ultimate web app designed to ask someone to be your Valentine in a way that is impossible to say no', 'Tech: ReactJS, TailwindCSS, HTML'], ['Portfolio', 'My digital portofio to showcase my experiences, projects, contacts and most importantly, my UI design and development capabilities', 'Tech: ReactJS, HTML, CSS'], ['Kamo', 'An AI Chatbot that assists students with subjects information of multiple universities, and course optimization', 'Tech: VueJS, CSS, HTML, .Net Core, MySQL'], ['Data Processing Portal', 'A website that receives a list of product information page URLs of any eCommerce websites in Australia, and a custom prompt denoting the curation of data, scrapes the data and returns downloadable CSV or Excel files with the curated data', 'Tech: ReactJS, Express, TailwindCSS, OpenAI API']] 
    const githubUrls = ['https://github.com/tuankhainguy/algorithms-in-action.github.io', 'https://github.com/WEHI-ResearchComputing/BioNix-GettingStarted/wiki', 'https://github.com/nicked1205/Unrefusable-Valentine', 'https://github.com/nicked1205/Portfolio', '', 'https://github.com/nicked1205/Data-Processing-Portal']
    const webUrls = ['https://dev-aia.vercel.app/', '', 'https://valentine-delta-livid.vercel.app/', 'https://portfolio-mu-ecru-53.vercel.app/', '', 'https://data-processing-portal-blush.vercel.app/']
    const imageUrls = [AIA, BioNix, UnrefusableValentine, Portfolio, Kamo, DataProcessingPortal]
    const [formattedContent, setFormattedContent] = useState()

    useEffect(() => {
        setFormattedContent(formatContent(projects[slide], null))
        // eslint-disable-next-line
    }, [slide])

    return (
        <>
            <div  className='project-display'>
                <div className='project-display-top'>
                    <div className='decorative-bar'></div>
                    <div className='terminal-control-container'>
                        <div className='terminal-control'></div>
                        <div className='terminal-control'></div>
                        <div className='terminal-control'></div>
                    </div>
                </div>
                <div className='project-display-bottom'>
                    <div className='project-info'>
                        {projects.map((str, index) => {
                            return (
                                (slide === index && formattedContent)
                            )
                        })}
                    </div>
                    <div className='project-slider'>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: '.slider-prev',
                                nextEl: '.slider-next',
                            }}
                            loop={true}
                            className='slider'
                        >
                            {projects.map((projects, index) => {
                                return (
                                <SwiperSlide key={index}>
                                    <ProjectCard githubUrl={githubUrls[index]} webUrl={webUrls[index]} imageUrl={imageUrls[index]}/>
                                </SwiperSlide>
                            )})}
                        </Swiper>
                        <div className='slider-prev' onClick={() => setSlide(slide === 0 ? projects.length - 1 : slide - 1)}>
                        <svg fill="#4AF626" height="100%" width="100%" version="1.1" id="Layer_1" viewBox="0 0 330 330" stroke="#4AF626" transform="matrix(-1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> 
                            </g>
                        </svg>
                        </div>
                        <div className='slider-next' onClick={() => setSlide(slide === projects.length - 1 ? 0 : slide + 1)}>
                            <svg fill="#4AF626" height="100%" width="100%" version="1.1" id="Layer_1" viewBox="0 0 330 330" stroke="#4AF626">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> 
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div  className='project-display underlay'>
                <div className='project-display-top underlay'>
                    <div className='decorative-bar underlay'></div>
                </div>
                <div className='project-display-bottom'>
                    <div className='project-info underlay'></div>
                </div>
            </div>
        </>
    );
}

export default ProjectDisplay;