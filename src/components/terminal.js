import '../css/panel.css';
import { useState, useEffect } from 'react';
import { typewriter } from '../functions/typewriter';

function Terminal({currentPanel}) {
    const [tab, setTab] = useState(0);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        if (currentPanel === 1 && !typing) {
            setTyping(true);
            typewriter(tab);
        }
    }
    , [tab, currentPanel, typing]);

    return (
    ['', ' underlay'].map((className, index) => (
        <div className={`terminal${className}`}>
            <div className={`terminal-tab-container${className}`}>
                <div className={`terminal-tab ${tab === 0 ? 'active' : 'inactive'}${className}`} onClick={() => {setTab(0)}}>coolstuff</div>
                <div className={`terminal-tab ${tab === 1 ? 'active' : 'inactive'}${className}`} onClick={() => {setTab(1)}}>error</div>
                <div className={`terminal-control-container${className}`}>
                    <div className={`terminal-control${className}`}></div>
                    <div className={`terminal-control${className}`}></div>
                    <div className={`terminal-control${className}`}></div>
                </div>
            </div>
            <div className='terminal-text glitch'>
                nick@adudeslaptop:~$ <br/>
                nick@adudeslaptop:~$
            </div>
            <div id="typedtext" className='terminal-text glitch' />
        </div>
    ))
    );
}

export default Terminal;