import { BsGlobe } from "react-icons/bs";

function Medal({color, style, 
  img, setMedal, cardTxt, 
  href, target, rel, text1,
  title1, title2, text2,
  title3, text3, title4, text4, 
  picContext, piccontext, darkMode
 }) {
  

  return (
    <div className="card_medal_container"
        onClick={() => {
          setMedal(false)
        }}>
            <div className="card_medal" 
          onClick={(e) => e.stopPropagation()}>
            <div className="medal_top" style={{ backgroundImage: `url(${img})` }}>
              <h2 style={{color: color}}>{cardTxt}</h2>
            </div>
            <div className="medal_btm" style={{ background: darkMode ? 'white' : '#1a1a1a' }}>
              <a className="Web" href={href} target={target} rel={rel}
              style={{ color: darkMode ? 'Black' : 'white' }}>
              <BsGlobe/>
              </a>
              <h1 style={{ color: darkMode ? 'Black' : 'white' }}>{title1}</h1>              
              <p style={{ color: darkMode ? 'Black' : 'white' }}>{text1}</p>
              <h1 style={{ color: darkMode ? 'Black' : 'white' }}>{title2}</h1>
              <p style={{ color: darkMode ? 'Black' : 'white' }}>{text2}</p>
              <h1 style={{ color: darkMode ? 'Black' : 'white' }}>{title3}</h1>
              <p style={{ color: darkMode ? 'Black' : 'white' }}>{text3}</p>
              <img className="img_context" src={picContext} />
              <p className="pic_p" style={{ color: darkMode ? 'Black' : 'white' }}>{piccontext}</p>
              <h1 style={{ color: darkMode ? 'Black' : 'white' }}>{title4}</h1>
              <p style={{ color: darkMode ? 'Black' : 'white' }}>{text4}</p>
            </div>
            
          </div>
    </div>
  )
}

export default Medal
