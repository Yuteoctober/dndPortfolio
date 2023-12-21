import { useEffect, useState, useRef } from 'react';
import DndGrid from './components/DndGrid';
import Card from './components/Card';
import HeaderSocial from './components/HeaderSocial';
import Medal from './components/Medal';
import { BiSolidNote } from "react-icons/bi";
import { BsFillPencilFill,
  BsFillCloudSunFill, 
  BsSearchHeartFill, 
  BsFillKeyboardFill,
  BsPersonFill,
  BsFillPatchQuestionFill,
  Bs9CircleFill } from "react-icons/bs";

import {projectDescriptions} from './components/data'
import todobg from './Images/todolistbg.png'
import weatherbg from './Images/weatherbg.png'
import wikibg from './Images/wikibg.jpg'
import typingbg from './Images/typingbg.jpg'
import userauthbg from './Images/forest.jpg'
import slottobg from './Images/slottobg.jpg'
import stickynotesBg from './Images/stickynotesBg.jpg'


function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [medal1, setMedal1] = useState(false)
  const [medal2, setMedal2] = useState(false)
  const [medal3, setMedal3] = useState(false)
  const [medal4, setMedal4] = useState(false)
  const [medal5, setMedal5] = useState(false)
  const [medal6, setMedal6] = useState(false)
  const [medal7, setMedal7] = useState(false)
  const [gridMode, setGridMode] = useState(false)
  const [disableGrid, setDisableGrid] = useState(false)

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation === 90 || window.orientation === -90) {
        setGridMode(false)
        setDisableGrid(true)
      } else {
        setDisableGrid(false)
        
      }
    };
    //lisen to landscape
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []); 

  function preventBehavior(e) { //prevent screen moving
    const scrollableElement = e.target.closest('.card_medal');
    // const scrollableElement2 = e.target.closest('.grid_container');

    if (scrollableElement) {
      return;
    }
  
    e.preventDefault();
  }
  document.addEventListener("touchmove", preventBehavior, { passive: false });

  useEffect(() => {
    // Function to update the section's height
    function updateSectionHeight() {
      const viewportHeight = window.innerHeight;
      const section = document.querySelector('section');
      if (section) {
        section.style.height = `${viewportHeight}px`;
      }
    }
    // Initial update
    updateSectionHeight();

    // listen
    window.addEventListener('resize', updateSectionHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSectionHeight);
    };
  }, []);


  function getRandomPosition() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // middle
    // const middleX = viewportWidth / 2;
    const middleY = viewportHeight / 2;
    const margin = 450; 
   
    let randomX = Math.floor(Math.random() * viewportWidth)
    // const randomX = Math.floor(
    //   middleX - margin + Math.random() * (1.4 * margin)
    // ); 
    const randomY = Math.floor(
      middleY - margin + Math.random() * (.45 * margin) 
    );
    if (viewportWidth - randomX <= 100) {
      randomX = randomX - 100
    }
    console.log(randomX)
    return { x: randomX, y: randomY };
  }
  
  
  const medal1Props = {
    setMedal: setMedal1,
    darkMode: darkMode,
    img: todobg,
    title1: projectDescriptions[0].title1,
    text1: projectDescriptions[0].text1,
    title2: projectDescriptions[0].title2,
    text2: projectDescriptions[0].text2,
    title3: projectDescriptions[0].title3,
    text3: projectDescriptions[0].text3,
    title4: projectDescriptions[0].title4,
    text4: projectDescriptions[0].text4,
    picContext: projectDescriptions[0].picContext,
    piccontext: projectDescriptions[0].piccontext,
    cardTxt: 'TODO LIST APP',
    href: 'https://yute-dev.netlify.app/TodoList',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#d0a3a3f7',
    color: 'white',
  };

   const medal2Props = {
    setMedal: setMedal2,
    darkMode: darkMode,
    img: weatherbg,
    title1: projectDescriptions[1].title1,
    text1: projectDescriptions[1].text1,
    title2: projectDescriptions[1].title2,
    text2: projectDescriptions[1].text2,
    title3: projectDescriptions[1].title3,
    text3: projectDescriptions[1].text3,
    title4: projectDescriptions[1].title4,
    text4: projectDescriptions[1].text4,
    picContext: projectDescriptions[1].picContext,
    piccontext: projectDescriptions[1].piccontext,
    cardTxt: 'WEATHER APP',
    href: 'https://yute-dev.netlify.app/Weather',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#a07fc4',
    color: 'white',
  };

  const medal3Props = {
    setMedal: setMedal3,
    darkMode: darkMode,
    img: wikibg,
    title1: projectDescriptions[2].title1,
    text1: projectDescriptions[2].text1,
    title2: projectDescriptions[2].title2,
    text2: projectDescriptions[2].text2,
    title3: projectDescriptions[2].title3,
    text3: projectDescriptions[2].text3,
    title4: projectDescriptions[2].title4,
    text4: projectDescriptions[2].text4,
    picContext: projectDescriptions[2].picContext,
    piccontext: projectDescriptions[2].piccontext,
    cardTxt: 'WIKI SEARCH APP',
    href: 'https://yute-dev.netlify.app/Wikipedia',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#a7a7a7',
  };

  const medal4Props = {
    setMedal: setMedal4,
    darkMode: darkMode,
    img: typingbg,
    title1: projectDescriptions[3].title1,
    text1: projectDescriptions[3].text1,
    title2: projectDescriptions[3].title2,
    text2: projectDescriptions[3].text2,
    title3: projectDescriptions[3].title3,
    text3: projectDescriptions[3].text3,
    title4: projectDescriptions[3].title4,
    text4: projectDescriptions[3].text4,
    picContext: projectDescriptions[3].picContext,
    piccontext: projectDescriptions[3].piccontext,
    cardTxt: 'TYPING PRACTICE',
    href: 'https://yuteoctober.github.io/typingGame/',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#7b9dd7',
    color: 'rgb(56, 53, 53)',
  };
  
  const medal5Props = {
    setMedal: setMedal5,
    darkMode: darkMode,
    img: userauthbg,
    title1: projectDescriptions[4].title1,
    text1: projectDescriptions[4].text1,
    title2: projectDescriptions[4].title2,
    text2: projectDescriptions[4].text2,
    title3: projectDescriptions[4].title3,
    text3: projectDescriptions[4].text3,
    title4: projectDescriptions[4].title4,
    text4: projectDescriptions[4].text4,
    picContext: projectDescriptions[4].picContext,
    piccontext: projectDescriptions[4].piccontext,
    cardTxt: 'USER AUTHEN APP',
    href: 'https://yute-dev.netlify.app/SignIn',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#85c3ab',
    color: 'white',
  };

  const medal6Props = {
    setMedal: setMedal6,
    darkMode: darkMode,
    img: slottobg,
    title1: projectDescriptions[5].title1,
    text1: projectDescriptions[5].text1,
    title2: projectDescriptions[5].title2,
    text2: projectDescriptions[5].text2,
    title3: projectDescriptions[5].title3,
    text3: projectDescriptions[5].text3,
    title4: projectDescriptions[5].title4,
    text4: projectDescriptions[5].text4,
    picContext: projectDescriptions[5].picContext,
    piccontext: projectDescriptions[5].piccontext,
    cardTxt: 'LUCKY DRAW APP',
    href: 'https://yuteoctober.github.io/LottoApp/',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#85c3ab',
    color: 'white',
  };

  const medal7Props = {
    setMedal: setMedal7,
    darkMode: darkMode,
    img: stickynotesBg,
    title1: projectDescriptions[6].title1,
    text1: projectDescriptions[6].text1,
    title2: projectDescriptions[6].title2,
    text2: projectDescriptions[6].text2,
    title3: projectDescriptions[6].title3,
    text3: projectDescriptions[6].text3,
    title4: projectDescriptions[6].title4,
    text4: projectDescriptions[6].text4,
    picContext: projectDescriptions[6].picContext,
    piccontext: projectDescriptions[6].piccontext,
    cardTxt: 'Fullstack StickyNotes',
    href: 'https://fullstack-stickynotes.netlify.app/',
    target: '_blank',
    rel: 'noopener noreferrer',
    style: '#85c3ab',
    color: 'white',
  };

  const Card1Props = {
    ...getRandomPosition(),
    img: <BsFillPencilFill />,
    setMedal: setMedal1,
    cardRotate: 'card_rotate1',
    cardNumber: 'card_one',
    cardContent: 'Efficiently manage your daily tasks and activities.',
    cardTxt: 'TODO LIST',
    deg: 7,
    darkMode: darkMode,
  };

  const Card2Props = {
    ...getRandomPosition(),
    img: <BsFillCloudSunFill />,
    setMedal: setMedal2,
    cardRotate: 'card_rotate2',
    cardNumber: 'card_two',
    cardContent: "Check real-time weather by user's location.",
    cardTxt: 'WEATHER',
    deg: -9,
    darkMode: darkMode,
  };
  
  const Card3Props = {
    ...getRandomPosition(),
    img: <BsSearchHeartFill />,
    setMedal: setMedal3,
    cardRotate: 'card_rotate3',
    cardNumber: 'card_three',
    cardContent: 'Search engine by using Wikipedia API.',
    cardTxt: 'WIKI SEARCH',
    deg: 12,
    darkMode: darkMode,
  };
  
  const Card4Props = {
    ...getRandomPosition(),
    img: <BsFillKeyboardFill />,
    setMedal: setMedal4,
    cardRotate: 'card_rotate4',
    cardNumber: 'card_four',
    cardContent: 'Practicing typing with result analysis.',
    cardTxt: 'TYPING PRACTICE',
    deg: -12,
    darkMode: darkMode,
  };
  
  const Card5Props = {
    ...getRandomPosition(),
    img: <BsPersonFill />,
    setMedal: setMedal5,
    cardRotate: 'card_rotate5',
    cardNumber: 'card_five',
    cardContent: "Authenticate user's login and registration.",
    cardTxt: 'USER AUTHEN',
    deg: 6,
    darkMode: darkMode,
  };

  const Card6Props = {
    ...getRandomPosition(),
    img: <Bs9CircleFill />,
    setMedal: setMedal6,
    cardRotate: 'card_rotate6',
    cardNumber: 'card_six',
    cardContent: "Random your lucky numbers.",
    cardTxt: 'SLOTTER',
    deg: -9,
    darkMode: darkMode,
  };

  const Card7Props = {
    ...getRandomPosition(),
    img: <BiSolidNote />,
    setMedal: setMedal7,
    cardRotate: 'card_rotate7',
    cardNumber: 'card_seven',
    cardContent: "Fullstack Sticky Notes",
    cardTxt: 'Sticky Notes',
    deg: 5,
    darkMode: darkMode,
  };

  
  
  return (
    <section>
      {medal1 && <Medal {...medal1Props} />}
      {medal2 && <Medal {...medal2Props} />}
      {medal3 && <Medal {...medal3Props} />}
      {medal4 && <Medal {...medal4Props} />}
      {medal5 && <Medal {...medal5Props} />}
      {medal6 && <Medal {...medal6Props} />}
      {medal7 && <Medal {...medal7Props} />}
      
      <HeaderSocial darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        setGridMode={setGridMode} 
        gridMode={gridMode}
        disableGrid={disableGrid}/>

      {gridMode? (
        <DndGrid 
        darkMode={darkMode}
        setMedal1={setMedal1}
        setMedal2={setMedal2}
        setMedal3={setMedal3}
        setMedal4={setMedal4}
        setMedal5={setMedal5} 
        setMedal6={setMedal6} 
        setMedal7={setMedal7} 
      />
      ):(
        <>
          <Card {...Card1Props}/>
          <Card {...Card2Props}/>
          <Card {...Card3Props}/>
          <Card {...Card4Props}/>
          <Card {...Card5Props}/>
          <Card {...Card6Props}/>
          <Card {...Card7Props}/>
        </>
      )}

      <div className='btm_nav'>
        <p>© 2023 - Yute Lilitprapun</p>
      </div>
    </section>
  );
}

export default App;