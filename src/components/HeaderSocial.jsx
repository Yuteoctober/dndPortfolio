import { useEffect } from "react";
import { BsGithub, 
  BsLinkedin, 
  BsFillFileTextFill, 
  BsFillSendFill, 
  BsFillHeartFill,
  BsFillGridFill,
  BsFillHandIndexFill, } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";



function HeaderSocial({ darkMode, setDarkMode, setGridMode, gridMode, disableGrid}) {

  // useEffect(() => { //set theme mode base on time 6AM to 6PM
  //   const now = new Date();

  //     const localTime = now.toLocaleTimeString();
  //     console.log(localTime)
  //     console.log(darkMode)

  //     const numTime = localTime.split(':')
  //     console.log(numTime)

  //     const IntNumTime = parseInt(numTime[0]) // hour
  //     console.log(IntNumTime)

  //     const lastPart = numTime[numTime.length - 1]
  //     const AmOrPm = lastPart.split(' ')[1] // AM or PM
  //     console.log(AmOrPm)

  //     if (
  //       (IntNumTime > 5 && IntNumTime < 12 && AmOrPm === 'AM') || 
  //       (IntNumTime === 12 && AmOrPm === 'PM') ||
  //       (IntNumTime < 6 && AmOrPm === 'PM')
  //     ) {
  //       setDarkMode(true);
  //       changeThemeColor('#171717');
  //     } else {
  //       setDarkMode(false);
  //       changeThemeColor('#333232');
  //     }
  //   }, []);


  const changeThemeColor = (newColor) => { // change html top bar color
    const themeColorMeta = document.getElementById('theme-color-meta');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', newColor);
    }
  };

  function setToDarkMode() {
    if (darkMode) {
      setDarkMode(false)
      changeThemeColor('black')
    } else {
      setDarkMode(true)
      changeThemeColor('#e7e7e7')
    }
  }


  return (
    <>
  <AnimatePresence>
  <motion.div className='container_heart'>        
    <motion.div 
      className={`dark-mode ${!darkMode ? 'active' : ''}`} >
    </motion.div>
    <motion.div className='heart'
      style={{ color: darkMode? '#383838' : 'white'}}
      initial={{opacity: 0}}
      animate={{ opacity: [0,1]}}
      transition={{ type:'spring',
        duration: '.5', 
        opacity: '0.5', 
        ease: 'easeInOut', 
        delay: '1.9'}}>
        <motion.div 
          className={`circle ${darkMode? '' : 'dark'}`} 
          onClick={setToDarkMode}> 
            <BsFillHeartFill className="inside_heart"/>
        </motion.div>
      </motion.div>
    </motion.div>

    <motion.div className={`main_txt ${darkMode? '' : 'dark'}`}
      initial={{opacity: 0}}
      animate={{ opacity: [0,1]}}
      transition={{ delay: '.3', ease: 'easeInOut', duration: '1'}}
    >
      <h1>
        <motion.span>
          Yute Lilitprapun   
        </motion.span> 
        &nbsp;is a front-end developer, 
        passionate in crafting resposive website and web application.&nbsp;  
        <span>
          Open to work.
        </span> 
      </h1>
    </motion.div>
    {/* <motion.div className="container_heart">
    <motion.div 
      className={`dark-mode ${!darkMode ? 'active' : ''}`} >
    </motion.div>
    <motion.div className='heart'
            style={{ color: darkMode? '#222222' : '#e7e7e7'}}
            whileTap={{ scale: 4}}
            exit={{ scale: 1}}
            transition={{ duration: '.4' ,type:'spring', opacity: '0'}}
            onClick={setToDarkMode} >
            <BsFillHeartFill />
          </motion.div>
    </motion.div> */}

    <motion.div className={`social_container ${darkMode? 'white' : 'dark'}`}
      initial={{opacity: 0}}
      animate={{ opacity: [0,1]}}
      transition={{ delay: '.3', ease: 'easeInOut', duration: '1'}}
    >
      <div className="github">
        <a className="social_a" href='https://github.com/Yuteoctober'
        target="_blank"
        rel="noopener noreferrer">
          <BsGithub/>
          <span>Github</span>
        </a>
      </div>

      <div className="linkedin">
        <a className="social_a" href='https://drive.google.com/file/d/1XNn23UA2L82P2__Ccuccl3WMdR2rHG57/view'
          target="_blank"
          rel="noopener noreferrer">
          <BsLinkedin/><span>LinkedIn</span>
        </a>
      </div>

      <div className="cv">
      <a className="social_a" href='https://drive.google.com/file/d/1XNn23UA2L82P2__Ccuccl3WMdR2rHG57/view'
        target="_blank"
        rel="noopener noreferrer">
        <BsFillFileTextFill/><span>Resume</span>
        </a>
      </div>

      <div className="email">
        <a className="social_a" href="mailto: yudthsoponvit@gmail.com">
          <BsFillSendFill/>
          <span>Email</span>
        </a>
      </div>

      <motion.div 
        className="grid" onClick={() => {
        setGridMode(!gridMode)}}
        style={{pointerEvents: disableGrid? 'none' : 'auto' }}
        >
        {!gridMode? <BsFillGridFill className="switch_grid" /> : <BsFillHandIndexFill className="switch_touch"/>} 
      </motion.div>
    </motion.div>
    </AnimatePresence>

</>
)
}


export default HeaderSocial