import "../css/App.css";
import ProjectCard from "./project-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import UnrefusableValentine from "../resources/UnrefusableValentine.png";
import Portfolio from "../resources/Portfolio.png";
import AIA from "../resources/AIA.png";
import BioNix from "../resources/BioNix.png";
import Kamo from "../resources/kamo.png";
import Mask from "../resources/Mask.png";
import DataProcessingPortal from "../resources/DataProcessingPortal.png";
import AgentSkillsRegistry from "../resources/agent-skills-registry.jpeg";
import BasketballDeflection from "../resources/basketball-deflection.svg";
import CybersecurityRAG from "../resources/cybersecurity-rag.svg";
import RLHF from "../resources/rlhf.svg";
import formatContent from "../functions/util";

function ProjectDisplay() {
  const [slide, setSlide] = useState(0);
  const projects = [
    [
      "Agent Skills Registry",
      "A full-stack version control system for AI agent prompts, with a GitHub-style diffing engine, rollback, and a secure JWT-authenticated REST API",
      "Tech: Vite/React, TailwindCSS, .NET Core, SQLite, Docker",
    ],
    [
      "Life-saving Mask",
      "An ECommerce Site that focuses on the marketing of Life-Saving mask products",
      "Tech: ReactJS, TailwindCSS, HTML",
    ],
    [
      "Algorithms in Action",
      "An open-source website that visualizes algorithms such as Hashing and Sorting to support students and educators, where I implemented 3 new algorithms and visuals",
      "Tech: JavaScript, CSS, HTML",
    ],
    [
      "BioNix",
      "Wrapping 3 bioinformatics tools previously unavailable in nixpkgs into BioNix, and refining over a dozen documentations around Nix, BioNix, Kraken2, TRF, and RepeatMasker",
      "Tech: Nix, nixpkgs",
    ],
    [
      "Portfolio",
      "My digital portofio to showcase my experiences, projects, contacts and most importantly, my UI design and development capabilities",
      "Tech: ReactJS, HTML, CSS",
    ],
    [
      "Basketball Deflection Detection",
      "A computer vision pipeline that detects deflections in broadcast basketball footage, pairing a custom YOLO detector and SigLIP team clustering with a BiLSTM classifier, lifting F1 from 0.48 to 0.67",
      "Tech: PyTorch, Roboflow, YOLOv8, HuggingFace",
    ],
    [
      "Cybersecurity RAG",
      "A zero-cloud-exposure RAG pipeline for cybersecurity incident response, using hybrid search with a cross-encoder reranker, benchmarked across 100+ queries with RAGAS and DeepEval",
      "Tech: HuggingFace, Streamlit, LangChain, ChromaDB",
    ],
    [
      "RLHF",
      "An RLHF pipeline comparing PPO against DPO on sub-billion-parameter models with LoRA, documenting reward hacking in PPO and DPO's ≈15% lower perplexity degradation",
      "Tech: PyTorch, HuggingFace",
    ],
    [
      "Unrefusable Valentine",
      "An ultimate web app designed to ask someone to be your Valentine in a way that is impossible to say no",
      "Tech: ReactJS, TailwindCSS, HTML",
    ],
    [
      "Kamo",
      "An AI Chatbot that assists students with subjects information of multiple universities, and course optimization",
      "Tech: VueJS, CSS, HTML, .Net Core, MySQL",
    ],
    [
      "Data Processing Portal",
      "A website that receives a list of product information page URLs of any eCommerce websites in Australia, and a custom prompt denoting the curation of data, scrapes the data and returns downloadable CSV or Excel files with the curated data",
      "Tech: ReactJS, Express, TailwindCSS, OpenAI API",
    ],
  ];
  const githubUrls = [
    "https://github.com/nicked1205/agent-skills-registry",
    "https://github.com/nicked1205/Mask-Ecommerce-Site",
    "https://github.com/tuankhainguy/algorithms-in-action.github.io",
    "https://github.com/WEHI-ResearchComputing/BioNix-GettingStarted/wiki",
    "https://github.com/nicked1205/Portfolio",
    "",
    "https://github.com/nicked1205/rag-experiment",
    "https://github.com/nicked1205/reinforcement-learning-human-feedback",
    "https://github.com/nicked1205/Unrefusable-Valentine",
    "",
    "https://github.com/nicked1205/Data-Processing-Portal",
  ];
  const webUrls = [
    "https://agent-skills-registry-4hpi.vercel.app/",
    "https://www.khautrangtaooxy.vn/",
    "https://dev-aia.vercel.app/",
    "",
    "https://www.nickng.me/",
    "",
    "",
    "",
    "https://valentine-delta-livid.vercel.app/",
    "",
    "https://data-processing-portal-blush.vercel.app/",
  ];
  const imageUrls = [
    AgentSkillsRegistry,
    Mask,
    AIA,
    BioNix,
    Portfolio,
    BasketballDeflection,
    CybersecurityRAG,
    RLHF,
    UnrefusableValentine,
    Kamo,
    DataProcessingPortal,
  ];
  const [formattedContent, setFormattedContent] = useState();

  useEffect(() => {
    setFormattedContent(formatContent(projects[slide], null));
    // eslint-disable-next-line
  }, [slide]);

  return (
    <>
      <div className="project-display">
        <div className="project-display-top">
          <div className="decorative-bar"></div>
          <div className="terminal-control-container">
            <div className="terminal-control"></div>
            <div className="terminal-control"></div>
            <div className="terminal-control"></div>
          </div>
        </div>
        <div className="project-display-bottom">
          <div className="project-info">
            {projects.map((str, index) => {
              return slide === index && formattedContent;
            })}
          </div>
          <div className="project-slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".slider-prev",
                nextEl: ".slider-next",
              }}
              loop={true}
              onSlideChange={(swiper) => setSlide(swiper.realIndex)}
              className="slider"
            >
              {projects.map((projects, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard
                      githubUrl={githubUrls[index]}
                      webUrl={webUrls[index]}
                      imageUrl={imageUrls[index]}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="slider-prev">
              <svg
                fill="#4AF626"
                height="100%"
                width="100%"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                stroke="#4AF626"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="slider-next">
              <svg
                fill="#4AF626"
                height="100%"
                width="100%"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                stroke="#4AF626"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="project-display underlay">
        <div className="project-display-top underlay">
          <div className="decorative-bar underlay"></div>
        </div>
        <div className="project-display-bottom">
          <div className="project-info underlay"></div>
        </div>
      </div>
    </>
  );
}

export default ProjectDisplay;
