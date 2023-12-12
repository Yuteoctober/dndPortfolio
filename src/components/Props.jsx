import { BsFillPencilFill, BsFillCloudSunFill, BsSearchHeartFill, BsFillKeyboardFill, BsPersonFill } from "react-icons/bs";
import todobg from '../Images/todolistbg.png';
import weatherbg from '../Images/weatherbg.png';
import wikibg from '../Images/wikibg.jpg';
import typingbg from '../Images/typingbg.jpg';
import userauthbg from '../Images/forest.jpg';
import {projectDescriptions} from './data';


function setMedal1() {
  // Define the functionality for setMedal1.
}

function setMedal2() {
  // Define the functionality for setMedal2.
}

function setMedal3() {
  // Define the functionality for setMedal3.
}

function setMedal4() {
  // Define the functionality for setMedal4.
}

function setMedal5() {
  // Define the functionality for setMedal5.
}



export const medal1Props = {
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

export const medal2Props = {
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

export const medal3Props = {
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

export const medal4Props = {
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

export const medal5Props = {
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

export const Card1Props = {
  ...getRandomPosition(),
  img: <BsFillPencilFill />,
  setMedal: setMedal1,
  cardRotate: 'card_rotate1',
  cardNumber: 'card_one',
  cardContent: 'Efficiently manage your daily tasks and activities.',
  cardTxt: 'TODO LIST',
};

export const Card2Props = {
  ...getRandomPosition(),
  img: <BsFillCloudSunFill />,
  setMedal: setMedal2,
  cardRotate: 'card_rotate2',
  cardNumber: 'card_two',
  cardContent: "Check real-time weather by user's location.",
  cardTxt: 'WEATHER',
};

export const Card3Props = {
  ...getRandomPosition(),
  img: <BsSearchHeartFill />,
  setMedal: setMedal3,
  cardRotate: 'card_rotate3',
  cardNumber: 'card_three',
  cardContent: 'Search engine by using Wikipedia API.',
  cardTxt: 'WIKI SEARCH',
};

export const Card4Props = {
  ...getRandomPosition(),
  img: <BsFillKeyboardFill />,
  setMedal: setMedal4,
  cardRotate: 'card_rotate4',
  cardNumber: 'card_four',
  cardContent: 'Practicing typing with result analysis.',
  cardTxt: 'TYPING PRACTICE',
};

export const Card5Props = {
  ...getRandomPosition(),
  img: <BsPersonFill />,
  setMedal: setMedal5,
  cardRotate: 'card_rotate5',
  cardNumber: 'card_five',
  cardContent: "Authenticate user's login and registration.",
  cardTxt: 'USER AUTHEN',
};