import { useEffect, useState, useRef } from 'react';
import '../css/App.css';
import axios from 'axios'

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
      // eslint-disable-next-line
    }, [currentPanel])

    const form = useRef();

    const sendEmail = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form.current);
  
      try {
        const response = await axios.post('/api/send-email', formData);
        console.log('Message sent successfully!');
      } catch (error) {
        console.log('There was an error sending the message.');
      }
    };


  return (
    <>
      <div className={`contact-menu ${openMenu ? 'on' : 'off'} ${openInputs ? 'close' : 'open'}`} onClick={() => {
          if (!openInputs) setOpenMenu(!openMenu)
        }}>
          <div className={`linkedin-button ${openInputs ? 'hidden': ''}`} onClick={handleClickLinkedIn}>
            <svg fill="#4AF626" fillOpacity={0.7} height="75%" width="75%" version="1.1" id="Layer_1" viewBox="0 0 310.00 310.00" transform="matrix(1, 0, 0, 1, 0, 0)" stroke="#4AF626"strokeWidth="0.0031">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.8599999999999999"></g>
              <g id="SVGRepo_iconCarrier"> 
                <g id="XMLID_801_"> 
                  <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> 
                  <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path> 
                </g> 
              </g>
            </svg>
          </div>
          <div className={`email-button ${openInputs ? 'hidden': ''}`} onClick={handleClickEmail}>
            <svg viewBox="0 0 24 24" opacity={0.7} fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#4AF626"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
              </g>
            </svg>
          </div>
          <div className={`github-button ${openInputs ? 'hidden': ''}`} onClick={handleClickGithub}>
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0,0,256,256">
                <g fill="#4af626" fillOpacity={0.7} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                    <g transform="scale(8.53333,8.53333)">
                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                </g>
            </svg>
          </div>
          <div className='contact-menu-center'></div>
          <div className='contact-menu-center'></div>
      </div>
      <div className='contact-form-container'>
        <form ref={form} onSubmit={sendEmail} className={`contact-form ${openInputs ? 'open' : 'close'}`}>
          { openInputs && (
            <>
              <input className='name-input' placeholder='Name'></input>
              <input className='email-input' placeholder='Email'></input>
              <textarea className='content-input' placeholder='Message'></textarea>
              <button className='submit-button'>Submit</button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Contact;