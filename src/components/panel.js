import '../css/App.css';
import { useState, useEffect } from 'react';

function Panel({ children, content, currentPanel, index }) {
  const [Hours, setHours] = useState('00');
  const [Minutes, setMinutes] = useState('00');
  const [Seconds, setSeconds] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      setHours(String(d.getHours()).padStart(2, '0'));
      setMinutes(String(d.getMinutes()).padStart(2, '0'));
      setSeconds(String(d.getSeconds()).padStart(2, '0'));
    }, 200);

    return () => clearInterval(timer);
  }, []);

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