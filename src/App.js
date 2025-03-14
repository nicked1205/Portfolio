import './css/App.css';
import Panel from './components/panel';
import { useState, useEffect } from 'react';
import personalPhoto from './resources/glow-personal-photo.png';
import pinkPersonalPhoto from './resources/pink-personal-photo.png';

function App() {
  let panels = ["Name", "Introduction", "Experience", "Projects", "Contact"];
  const [currentPanel, setCurrentPanel] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <div>
      <Panel content={panels[0]} index={0} currentPanel={currentPanel}>
        <div className="panel-content-split">
          <div className="grid-box" >
            <img src={personalPhoto} className='personal-image' alt="personal" />  
            <img src={pinkPersonalPhoto} className='personal-image-underlay' alt="personal-underlay" />
          </div>
          <div className="glitch" >

          </div>
        </div>
      </Panel>
      <Panel content={panels[1]} index={1} currentPanel={currentPanel}/>
      <Panel content={panels[2]} index={2} currentPanel={currentPanel}/>
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
