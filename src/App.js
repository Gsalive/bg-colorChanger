import React from 'react';
import { useState } from 'react';
import ColorPicker from './Components/ColorPicker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const colors = ['#9FECF1','#DFFDFF','#BDB2FF','#FAD1FA','#FEC868'];
  const [backgroundColor, setBackgroundColor] = useState(null);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };
  return (
    <div >
   
    <ColorPicker colors={colors}   onColorChange={handleColorChange} />
    
  </div>
  );
};

export default App;
