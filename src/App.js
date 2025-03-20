import './css/App.css';
import Panel from './components/panel';
import InformationDisplay from './components/information-display';
import Terminal from './components/terminal';
import Timeline from './components/timeline.js';
import { useState, useEffect } from 'react';
import personalPhoto from './resources/glow-personal-photo.png';
import pinkPersonalPhoto from './resources/pink-personal-photo.png';
import { scramble } from './functions/scrambler.js';

function App() {
  let panels = ["Introduction", "Roles", "Experience", "Projects", "Contact"];
  const [currentPanel, setCurrentPanel] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrambling, setScrambling] = useState(false);

  useEffect(() => {
    const preventScroll = (event) => event.preventDefault();
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScroll, { passive: false });

    const handleResize = () => setDisplayHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const handleScroll = (event) => {
      if (isScrolling) return;
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 600);

      if (event.deltaY > 0) {
        setCurrentPanel((prev) => Math.min(prev + 1, panels.length - 1));
      } else if (event.deltaY < 0) {
        setCurrentPanel((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling, panels.length]);

  useEffect(() => {
    window.scrollTo({ top: displayHeight * currentPanel, behavior: "smooth" });
  }, [currentPanel, displayHeight]);

  const handleClick = (index) => () => {
    setCurrentPanel(index);
    window.scrollTo({top: displayHeight * index, behavior: 'smooth'});
  }

  useEffect(() => {
    if (currentPanel === 1) {
      scramble();
      setTimeout(() => setScrambling(true), 500);
    } else {
      setTimeout(() => setScrambling(false), 500);
    }
  }, [currentPanel]);

  return (
    <div>
      <div className='reset-prompt iam hidden'>Screen Compromised. System reset in 3</div>
      <Panel content={panels[0]} index={0} currentPanel={currentPanel}>
        <div className="panel-content-split">
          <div className="panel-1 grid-box" >
            <img src={personalPhoto} className='personal-image' alt="personal" />  
            <img src={pinkPersonalPhoto} className='personal-image underlay' alt="personal-underlay" />
          </div>
          <div className="panel-1 grid-box" >
            <InformationDisplay contentID={0} />  
          </div>
        </div>
      </Panel>
      <Panel content={panels[1]} index={1} currentPanel={currentPanel}>
        <div className="panel-content-split">
          <div className="panel-2 grid-box" >
            {currentPanel === 1 && <div className='try-tab glitch'>Try 'error' tab<br/>!! Epilepsy Warning !!</div>}
             <Terminal currentPanel={currentPanel} setScrambling={setScrambling} />
          </div>
          <div className="panel-2 grid-box" >
            <div className='occupation-container'>
              <div className='iam glitch' data-text='I am a'>I am a</div>
                <div id='scramble' className='occupation glitch' hidden={!scrambling}></div>
                <div className='occupation glitch' hidden={scrambling} data-text='@!-_\\/—=+*^?#'>@!-_\\/—=+*^?#</div>
            </div>
          </div>
        </div>
      </Panel>
      <Panel content={panels[2]} index={2} currentPanel={currentPanel}>
        <Timeline currentPanel={currentPanel}/>
      </Panel>
      <Panel content={panels[3]} index={3} currentPanel={currentPanel}/>
      <Panel content={panels[4]} index={4} currentPanel={currentPanel}/>
      <div className='tracker-container'>
        <div className="tracker">
          {panels.map((panel, index) => (
            <button
              key={index}
              onClick={handleClick(index)}
              className={currentPanel === index ? "active" : ""}
              data-text={panel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
