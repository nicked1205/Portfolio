import '../css/App.css';
import { useState } from 'react';
import HelloWorld from '../resources/HelloWorld.png';

function Terminal({currentPanel, setScrambling}) {
    const [tab, setTab] = useState(0);
    const [eid, setEid] = useState()

    const texts = [
        ["sudo apt install toilet", 
        "toilet --metal 'Hello World'"],
        ["gcc error.c -o screen_glitch"]
    ];

    const error = () => {
        setScrambling(false);
        const matches1 = document.querySelectorAll('.panel');
        for (let el of matches1) {
            el.classList.remove('panel');
        }
        const matches2 = document.querySelectorAll('.grid-box');
        for (let el of matches2) {
            el.classList.remove('grid-box');
        }
        // const glitchable = document.querySelectorAll('.glitch');
        // for (let el of glitchable) el.classList.add('super-glitch');
        // const underlays = document.querySelectorAll('.underlay');
        // for (let el of underlays) el.classList.add('super-glitch');
        const resetPrompt = document.querySelector('.reset-prompt');
        resetPrompt.classList.remove('hidden');
        setTimeout(() => resetPrompt.innerHTML = 'Screen Compromised. System reset in 2', 1500);
        setTimeout(() => resetPrompt.innerHTML = 'Screen Compromised. System reset in 1', 3000);
        setTimeout(() => window.location.reload(), 4000);
    }

    const handleChangeTab = (e) => {
        if (tab === 0) {
            setTab(1);
            setEid(setTimeout(() => error(), 1500));
        } else {
            setTab(0);
            setScrambling(true);
            if (eid) {
                console.log(eid);
                clearTimeout(eid);
            }
        }
    }

    return (
    ['', ' underlay'].map((className, index) => (
        <div className={`terminal${className}`}>
            <div className={`terminal-tab-container${className}`}>
                <div className={`terminal-tab ${tab === 0 ? 'active' : 'inactive'}${className}`} onClick={() => handleChangeTab()}>coolstuff</div>
                <div className={`terminal-tab ${tab === 1 ? 'active' : 'inactive'}${className}`} onClick={() => handleChangeTab()}>error</div>
                <div className={`terminal-control-container${className}`}>
                    <div className={`terminal-control${className}`}></div>
                    <div className={`terminal-control${className}`}></div>
                    <div className={`terminal-control${className}`}></div>
                </div>
            </div>
            <div className='content-horizontal'>
                <div className='terminal-text user glitch' data-text={`>>\n${tab === 0 ? '>>' : ''}`}>
                    &gt;&gt; <br/>
                    {tab === 0 && <>&gt;&gt;</>}
                </div>
                {currentPanel === 1 && (
                <div className='terminal-text-container'>
                    {texts[tab].map((text, index) => {
                        return (<div key={index + 2 * tab} className='glitch terminal-text typewriter'>{text}</div>);
                    })}
                </div>
                )}
            </div>
            { tab === 0 && currentPanel === 1 ?  (
            <img className='hello-world' src={HelloWorld} alt='HelloWorld'></img>
            ) : <div/>}
        </div>
    ))
    );
}

export default Terminal;