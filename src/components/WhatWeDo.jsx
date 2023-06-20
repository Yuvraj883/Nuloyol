import './WhatWeDo.css'; 

const WhatWeDo = ()=>{
    return(
        <>
        <div className='what-we-do'>
            <h1 className='what-we-do-h1'>
                WHAT WE DO
            </h1>
            <p className='what-we-do-p'>
            Get your CRM platform up and running in days, not weeks (or months).
            </p>
            <div className='flex-what-we-do'>
                    <div className='flex-item-what-we-do' >
                        <img src="./images/spyware-detection-loading.png.svg" alt="spyware-icon"/>
                        <h3>Spyware Detection</h3>
                        <p>Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
                    </div>
                    <div className='flex-item-what-we-do' >
                        <img src="./images/keylogger-detection-loading.png.svg" alt="spyware-icon"/>
                        <h3>Keylogge Detection</h3>
                        <p>Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords)..</p>
                    </div>
                    <div className='flex-item-what-we-do' >
                        <img src="./images/find-tracking-apps-loading.png.svg" alt="spyware-icon"/>
                        <h3>Easy To Use</h3>
                        <p>Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
                    </div>
                      <div className='flex-item-what-we-do' >
                        <img src="./images/os-integrity-check-loading.png.svg" alt="spyware-icon"/>
                        <h3>OS Integrity Check</h3>
                        <p>Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
                    </div>
                    <div className='flex-item-what-we-do' >
                        <img src="./images/threat-removal-loading.png.svg" alt="spyware-icon"/>
                        <h3>Threat Removal</h3>
                        <p>Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
                    </div>
                 
                    <div className='flex-item-what-we-do' >
                        <img src="./images/easy-to-use-loading.png.svg" alt="spyware-icon"/>
                        <h3>Easy To Use</h3>
                        <p>We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
                    </div>
                   
            </div>
        </div>
        </>
    )
}
export default WhatWeDo;