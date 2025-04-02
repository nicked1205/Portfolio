import '../css/App.css';
import ProjectCard from './project-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

function ProjectDisplay() {
    const [slide, setSlide] = useState(0);
    const projects = ['Algorithms in Action', 'BioNix', 'Unrefusable Valentine', 'Portfolio', 'Kamo', 'Applications Tracker']

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
                    <div className='project-info'></div>
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
                                    <ProjectCard githubUrl='.' webUrl='.'/>
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