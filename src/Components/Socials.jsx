import React from 'react';
import '../Styles/Socials.css';
function Socials() {


  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="socials" id='socials'> 
      <h2 style={{color:'white'}}>Socials</h2>

      <div className="soc">
        <dotlottie-player
          src="https://lottie.host/28449cec-d0d7-4950-b750-76a4b0ca68e3/DValK2ICLS.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ width: '60px', height: '60px' }}
        ></dotlottie-player>
        <a href="https://github.com/ekxhta" target="_blank" rel="noopener noreferrer">@ekxhta</a>
      </div>

      <div className="soc">
        <dotlottie-player 
        src="https://lottie.host/d6300a9b-7dcd-49f9-a370-5150dc3db70c/ZZwj7SlWzx.json" 
        background="transparent" 
        speed="1" 
        style={{width: "60px", height: "60px"}} loop autoplay></dotlottie-player>
        <a href="https://www.linkedin.com/in/ekshta-mishra" target="_blank" rel="noopener noreferrer">@ekshta mishra</a>
      </div>

      <div className="soc">
        <img src='/assets/mail.png' alt="new-post"/>

        <a href="mailto:ekshta.mishra29@gmail.com">@ekshta.mishra29@gmail.com</a>
      </div>
    </div>
  );
}

export default Socials;
