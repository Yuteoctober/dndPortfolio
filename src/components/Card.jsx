import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { motion, spring } from 'framer-motion';

function Card({ darkMode,deg, setMedal, href, target, rel, img, cardContent, cardRotate, cardNumber, cardTxt, x, y }) {
  
  const [position, setPosition] = useState({ x, y });
  const [rotation, setRotation] = useState(0);

  const handleDragEnd = () => {
    // Reset the rotation to the original degree when drag ends
    setRotation(deg);
  };

  
  const handleDragStop = (e, data) => {
    // Update the position when the card is dragged
    setPosition({ x: data.x, y: data.y });
  };

  // Add a window resize event listener
  useEffect(() => {
    const handleWindowResize = () => {
      // Calculate the new position based on the bounds of the screen
      const clientWidth  = window.innerWidth;
      const clientHeight = window.innerHeight;
      // console.log('Y' + clientHeight)


      let newX = position.x;
      let newY = position.y;

      if (newX < 0) {
        newX = 0;
      } else if (newX > clientWidth) {
        newX = clientWidth - 120;
      }

      if (newY < clientHeight || newY > clientHeight) {
        newY = -100
      }

   

      // Update the card's position
      console.log('X' + newX )
      setPosition({ x: newX, y: newY });
    };

    // Attach the event listener
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [position]);


  return (
    <>
      <Draggable
        cancel='.card_h2'
        axis="both"
        handle={`.${cardNumber}`}
        position={position}
        grid={[0.01, 0.01]}
        scale={1}
        bounds='section'
        onStop={handleDragStop}
      >
         <div className={cardRotate}>
          <motion.div 
          whileTap={{ rotate: [-3,0,3,0,-3],
            transition: { duration: 0.22, 
            repeat: Infinity, }}}
            style={{ rotate: rotation === 0? deg : rotation}  }  
            onTap={handleDragEnd}      
          className={`${cardNumber} ${darkMode? '':'dark'}`}>
            <div className="card_bg"></div>
            <div>
              <span>{img}</span>
              <h2 
                className='card_h2'
                onClick={() => setMedal(true)}>{cardTxt}
                <p>{cardContent}</p>
              </h2>
            </div>
          </motion.div>
        </div>
      </Draggable>
    </>
  );
}

export default Card