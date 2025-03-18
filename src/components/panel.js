import '../css/App.css';
import { useState } from 'react';

function Panel({ children, content, currentPanel, index }) {
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0); 
  setInterval(myTimer, 200);

function myTimer() {
  const d = new Date();
  setHours(d.getHours());
  setMinutes(d.getMinutes());
  setSeconds(d.getSeconds());
}

  return (
    <div  className={`panel ${currentPanel === index ? "active" : "inactive"}`}>
      <div className="terminal-lines"></div>
      <div className="status glitch" data-text="Status: Online">
        Status: Online
      </div>
      <div className="time glitch" data-text={`${Hours}:${Minutes}:${Seconds}`}>
        {Hours}:{Minutes}:{Seconds}
      </div>
      {children}
    </div>
  );
}

export default Panel;