import { useEffect, useState } from 'react';
import '../css/App.css';

function Contact({currentPanel}) {
    const [openMenu, setOpenMenu] = useState(false)
    const [openInputs, setOpenInputs] = useState(false)
    const [cid, setCid] = useState()

    const handleClickLinkedIn = () => {
      if (openMenu) {
        setOpenMenu(false)
        window.open('https://www.linkedin.com/in/nick-nguyen-b013b0287/')
      }
    }

    const handleClickGithub = () => {
      if (openMenu) {
        setOpenMenu(false)
        window.open('https://github.com/nicked1205')
      }
    }

    const handleClickEmail = () => {
      setOpenMenu(false)
      setCid(setTimeout(() => setOpenInputs(true), 100))
    }

    useEffect(() => {
      if (currentPanel !== 4) {
        setOpenMenu(false);
        setOpenInputs(false);
        clearTimeout(cid);
      }
    }, [currentPanel])


  return (
    <>
      <div className={`contact-menu ${openMenu ? 'on' : 'off'} ${openInputs ? 'close' : 'open'}`} onClick={() => {
          if (!openInputs) setOpenMenu(!openMenu)
        }}>
          <div className={`linkedin-button ${openInputs ? 'hidden': ''}`} onClick={handleClickLinkedIn}></div>
          <div className={`email-button ${openInputs ? 'hidden': ''}`} onClick={handleClickEmail}></div>
          <div className={`github-button ${openInputs ? 'hidden': ''}`} onClick={handleClickGithub}></div>
          <div className='contact-menu-center'></div>
          <div className='contact-menu-center'></div>
      </div>
      <div className='contact-form-container'>
        <form className={`contact-form ${openInputs ? 'open' : 'close'}`}>
          { openInputs && (
            <>
              <input className='name-input' placeholder='Name'></input>
              <input className='email-input' placeholder='Email'></input>
              <textarea className='content-input' placeholder='Message'></textarea>
              <button className='submit-button' onClick={() => setOpenInputs(false)}>Submit</button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Contact;