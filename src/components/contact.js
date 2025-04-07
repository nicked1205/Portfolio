import { useEffect, useState, useRef } from 'react';
import '../css/App.css';
import emailjs from 'emailjs-com';

function Contact({currentPanel}) {
    const [openMenu, setOpenMenu] = useState(false);
    const [openInputs, setOpenInputs] = useState(false);
    const [cid, setCid] = useState();
    const [status, setStatus] = useState(0);
    const [message, setMessage] = useState('');
    const [noti, setNoti] = useState('');

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
        setStatus(0);
        clearTimeout(cid);
        setNoti('');
      }
      // eslint-disable-next-line
    }, [currentPanel])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      const formData = new FormData(form.current);
      const email = formData.get("email");
      const name = formData.get("name");
      const message = formData.get("message");

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!email && !name && !message) {
        setNoti("Please enter something :)");
        return;
      }

      if (!email || !name || !message) {
        setNoti("Please don't leave any field empty :(");
        return;
      }

      if (!emailPattern.test(email)) {
        setNoti("Please enter a valid email so I can contact you back :D");
        return;
      }

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
              <input type='text' name='name' className='name-input' placeholder='Name' onFocus={() => setNoti('')}></input>
              <input type='text' name='email' className='email-input' placeholder='Email' onFocus={() => setNoti('')}></input>
              <textarea name='message' className='content-input' placeholder='Message' value={message} onChange={handleMessageChange} onFocus={() => setNoti('')}></textarea>
              <div className='submit-button-container'>
                {status === 0 && <button className='submit-button'>Submit</button>}
                {status === 1 && <div className='loader'></div>}
                {status === 2 && <div className='information sent'>Email Sent!</div>}
                {status === 3 && <div className='information sent'>Error...</div>}
                <div className='back-btn-container'>
                  <div className='back-btn' onClick={() => {
                    setOpenInputs(false);
                    setStatus(0);
                    }}>
                    <svg fill="#4AF626" version="1.1" id="Capa_1" viewBox="0 0 489.394 489.394" stroke="#4AF626">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier"> 
                        <g> 
                          <path d="M375.789,92.867H166.864l17.507-42.795c3.724-9.132,1-19.574-6.691-25.744c-7.701-6.166-18.538-6.508-26.639-0.879 L9.574,121.71c-6.197,4.304-9.795,11.457-9.563,18.995c0.231,7.533,4.261,14.446,10.71,18.359l147.925,89.823 c8.417,5.108,19.18,4.093,26.481-2.499c7.312-6.591,9.427-17.312,5.219-26.202l-19.443-41.132h204.886 c15.119,0,27.418,12.536,27.418,27.654v149.852c0,15.118-12.299,27.19-27.418,27.19h-226.74c-20.226,0-36.623,16.396-36.623,36.622 v12.942c0,20.228,16.397,36.624,36.623,36.624h226.74c62.642,0,113.604-50.732,113.604-113.379V206.709 C489.395,144.062,438.431,92.867,375.789,92.867z"></path> 
                        </g> 
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
      {noti !== '' && (<div className='notification information'>{noti}</div>)}
    </>
  );
}

export default Contact;