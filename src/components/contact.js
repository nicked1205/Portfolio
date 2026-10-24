import { Fragment, useEffect, useState, useRef } from 'react';
import '../css/App.css';
import emailjs from '@emailjs/browser';

// What the prompt line under the menu says while each channel is hovered
const channelHints = {
    email: 'compose_email',
    github: 'open github.com/nicked1205',
    linkedin: 'open linkedin.com/in/nicknguyen2150',
    resume: 'download resume',
};

const emailAddress = 'nick.nguyen2150@gmail.com';


const resumes = [
    { label: 'AI/ML', file: 'Nick-Nguyen-Resume-AIML.pdf' },
    { label: 'SOFTWARE', file: 'Nick-Nguyen-Resume-Software-Engineering.pdf' },
];

function Contact({currentPanel}) {
    const [hovered, setHovered] = useState(null);
    const [menuReady, setMenuReady] = useState(false);
    const [resumePicker, setResumePicker] = useState(false);
    const [copied, setCopied] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openInputs, setOpenInputs] = useState(false);
    const [cid, setCid] = useState();
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleClickLinkedIn = () => {
      if (openMenu) {
        setOpenMenu(false)
        window.open('https://www.linkedin.com/in/nicknguyen2150/')
      }
    }

    const handleClickGithub = () => {
      if (openMenu) {
        setOpenMenu(false)
        window.open('https://github.com/nicked1205')
      }
    }

    // Keep the menu open and turn the prompt line into a choice of resume versions
    const handleClickResume = (e) => {
      if (!openMenu) return;
      e.stopPropagation();
      setResumePicker(true);
    }

    const handleClickEmail = () => {
      setOpenMenu(false)
      setCid(setTimeout(() => setOpenInputs(true), 100))
    }

    useEffect(() => {
      if (currentPanel !== 4) {
        setOpenMenu(false);
        setOpenInputs(false);
        setStatus(0);
        clearTimeout(cid);
        setErrors({});
      }
      // eslint-disable-next-line
    }, [currentPanel])

    // Escape backs out of the form, or closes the open menu
    useEffect(() => {
      if (currentPanel !== 4) return;
      const handleKey = (e) => {
        if (e.key !== 'Escape') return;
        if (openInputs) {
          setOpenInputs(false);
          setStatus(0);
          setErrors({});
        } else {
          setOpenMenu(false);
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }, [currentPanel, openInputs])

    // The buttons slide out from under the cursor when the menu opens, so ignore hovers until they've
    // settled (matches the 0.3s transition), and clear the hint on close
    useEffect(() => {
      if (!openMenu) {
        setMenuReady(false);
        setHovered(null);
        setResumePicker(false);
        return;
      }
      const id = setTimeout(() => setMenuReady(true), 300);
      return () => clearTimeout(id);
    }, [openMenu])

    const hoverChannel = (channel) => () => {
      if (menuReady) setHovered(channel);
    };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      const formData = new FormData(form.current);
      const email = formData.get("email");
      const name = formData.get("name");
      const message = formData.get("message");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const nextErrors = {};
      if (!name) nextErrors.name = 'required';
      if (!email) nextErrors.email = 'required';
      else if (!emailPattern.test(email)) nextErrors.email = 'invalid address';
      if (!message) nextErrors.message = 'required';
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      setStatus(1);

      emailjs
        .sendForm('service_q6v9kvs', 'template_1xe3mrb', form.current, '1Tt4OCNr7LlQot-_J')
        .then(
          (result) => {
            setStatus(2);
            setMessage('');
            console.log(result.text);
            console.log('Message sent successfully!');
            e.target.reset();
          },
          (error) => {
            setStatus(3);
            console.log(error.text);
            console.log('There was an error sending the message.');
          }
        );
    };

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const copyEmail = () => {
      navigator.clipboard.writeText(emailAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    };

    const clearError = (field) => () => setErrors((prev) => ({ ...prev, [field]: undefined }));

    const statusLines = {
      1: 'transmitting...',
      2: 'message delivered',
      3: 'error: transmission failed, try again',
    };


  return (
    <>
      <div className={`contact-menu ${openMenu ? 'on' : 'off'} ${openInputs ? 'close' : 'open'}`} onClick={() => {
          if (!openInputs) setOpenMenu(!openMenu)
        }}>
          <div className={`linkedin-button bracket-hover ${openInputs ? 'hidden': ''}`} onClick={handleClickLinkedIn} onMouseEnter={hoverChannel('linkedin')} onMouseLeave={() => setHovered(null)}>
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
          <div className={`email-button bracket-hover ${openInputs ? 'hidden': ''}`} onClick={handleClickEmail} onMouseEnter={hoverChannel('email')} onMouseLeave={() => setHovered(null)}>
            <svg viewBox="0 0 24 24" opacity={0.7} fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="#4AF626"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
              </g>
            </svg>
          </div>
          <div className={`github-button bracket-hover ${openInputs ? 'hidden': ''}`} onClick={handleClickGithub} onMouseEnter={hoverChannel('github')} onMouseLeave={() => setHovered(null)}>
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0,0,256,256">
                <g fill="#4af626" fillOpacity={0.7} fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                    <g transform="scale(8.53333,8.53333)">
                        <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                </g>
            </svg>
          </div>
          <div className={`resume-button bracket-hover ${openInputs ? 'hidden': ''}`} onClick={handleClickResume} onMouseEnter={hoverChannel('resume')} onMouseLeave={() => setHovered(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#4AF626" strokeOpacity={0.7} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2h9l5 5v15H6z" />
              <path d="M14 2v6h6" />
              <path d="M9 9h3M9 13h8M9 17h8" />
            </svg>
          </div>
          <div className='contact-menu-center'></div>
          <div className='contact-menu-center'></div>
      </div>
      <div className='contact-form-container'>
        <form ref={form} onSubmit={sendEmail} className={`contact-form ${openInputs ? 'open' : 'close'}`}>
          { openInputs && (
            <>
              <div className='form-header'>
                <span>&gt; compose_message</span>
                <div className='form-text-btn' title='Back (Esc)' onClick={() => {
                  setOpenInputs(false);
                  setStatus(0);
                  setErrors({});
                  }}>back</div>
              </div>
              <div className='form-to'>
                <span className='form-prompt'>to &gt;</span>
                <span className='form-address'>{emailAddress}</span>
                <div className='form-text-btn' onClick={copyEmail}>{copied ? 'copied' : 'copy'}</div>
              </div>
              <label className='form-row'>
                <span className='form-prompt'>name &gt;</span>
                <input type='text' name='name' className='form-input' autoComplete='name' onFocus={clearError('name')}></input>
                {errors.name && <span className='form-error'>! {errors.name}</span>}
              </label>
              <label className='form-row'>
                <span className='form-prompt'>email &gt;</span>
                <input type='text' name='email' className='form-input' autoComplete='email' onFocus={clearError('email')}></input>
                {errors.email && <span className='form-error'>! {errors.email}</span>}
              </label>
              <label className='form-row form-row-message'>
                <span className='form-prompt'>message &gt;</span>
                {errors.message && <span className='form-error'>! {errors.message}</span>}
                <textarea name='message' className='form-input form-textarea' value={message} onChange={handleMessageChange} onFocus={clearError('message')}></textarea>
              </label>
              <div className='submit-button-container'>
                {status !== 1 && status !== 2 && <button className='submit-button'>send</button>}
                {status !== 0 && (
                  <div className='form-status'>
                    &gt; {statusLines[status]}{status === 1 && <span className='contact-hint-caret'>_</span>}
                  </div>
                )}
              </div>
            </>
          )}
        </form>
      </div>
      {!openInputs && (
        <div className='contact-hint glitch'>
          {openMenu && resumePicker ? (
            <>
              &gt; download resume:
              {resumes.map((resume, index) => (
                <Fragment key={resume.file}>
                  {index > 0 && <span className='resume-separator'>|</span>}
                  <a className='resume-link' href={`${process.env.PUBLIC_URL}/resume/${resume.file}`} target='_blank' rel='noreferrer'>{resume.label}</a>
                </Fragment>
              ))}
            </>
          ) : (
            <>&gt; {!openMenu ? 'establish_connection' : hovered ? channelHints[hovered] : 'select_channel'}<span className='contact-hint-caret'>_</span></>
          )}
        </div>
      )}
    </>
  );
}

export default Contact;