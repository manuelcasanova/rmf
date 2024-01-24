//Hooks
import { useState } from "react"


//Images
import brushWhite from "../../images/brush-white.png"
import brush from "../../images/brush.png"


export default function Colors ({color, setColor}) {

  const [colors, setColors] = useState(false)
  const showColors = () => { setColors(prev => !prev)}

return (
  <div>

{color === 'black' &&
          <><img className='brush' src={brushWhite} alt="Brush" onClick={showColors} /></>
        }

        {color !== 'black' &&
          <><img className='brush' src={brush} alt="Brush" onClick={showColors} /></>
        }


        {colors && <div className='colors'>
          <div className='color black white-line' onClick={(e) => setColor("black")}></div>
          <div className='color white black-line' onClick={(e) => setColor("white")}></div>
          <div className='color pink black-line' onClick={(e) => setColor("pink")}></div>
          <div className='color blue black-line' onClick={(e) => setColor("blue")}></div>
          <div className='color green black-line' onClick={(e) => setColor("green")}></div>
          <div className='color red black-line' onClick={(e) => setColor("red")}></div>
        </div>}

  </div>
)

}