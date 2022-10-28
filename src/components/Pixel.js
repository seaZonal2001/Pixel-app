import { useState } from 'react';
import '../styles/pixel.scss';

const Pixel = (props) => {
    const {selectedColor}=props;

    const [pixelColor,setPixelColor]=useState('#fff');
    const [oldColor,setOldColor]=useState(pixelColor);
    const [canChangeColor,setCanChangeColor]=useState(true);

    const applyColor = () => {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
    }
    const changeColorOnHover = () => {
        setOldColor(pixelColor);
        setPixelColor(selectedColor);
    }
    const resetColor = () => {
        if(canChangeColor){
            setPixelColor(oldColor);
        }
        setCanChangeColor(true);
    }
    return (
        <div onClick={applyColor} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} className='pixel' style={{backgroundColor:pixelColor}}></div>
    );
}

export default Pixel;