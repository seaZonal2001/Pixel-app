import { useState } from 'react';
import '../styles/editor.scss';
import { CirclePicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

const MAX=50;
const Editor = () => {
    const [panelWidth,setPanelWidth]=useState(16);
    const [panelHeight,setPanelHeight]=useState(16);
    const [buttonText,setButtonText]=useState('start drawing');
    const [hideOptions,setHideOptions]=useState(false);
    const [hideDrawingPanel,setHideDrawingPanel]=useState(true);
    const [selectedColor,setColor]=useState('#f44336');

    const changeColor = (color) => {
        // console.log(color.hex)
        setColor(color.hex);
    }
    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === 'start drawing'?setButtonText('reset'):setButtonText('start drawing');
    }
    // console.log(`${selectedColor}`);
    return (
        <div id='editor'>
            <h1>Pixel Editor</h1>

            { hideDrawingPanel &&  <h2>Enter Panel Dimensions</h2>}
            { hideDrawingPanel && (<div id='options'>
                <div className='option'>
                    <input type='number' className='panelInput' defaultValue={panelWidth} onChange={e => setPanelWidth(Math.min(MAX,e.target.value))} />
                    <span>Width</span>
                </div>
                <div className='option'>
                    <input type='number' className='panelInput' defaultValue={panelHeight} onChange={e => setPanelHeight(Math.min(MAX,e.target.value))} />
                    <span>Height</span>
                </div>
            </div>) }
            

            <button className='button' onClick={initializeDrawingPanel} >{buttonText}</button>

            { hideOptions && <CirclePicker  color={selectedColor} onChangeComplete={changeColor} />}

            { hideOptions && <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />}
        </div>
    );
}

export default Editor;