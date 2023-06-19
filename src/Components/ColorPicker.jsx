import React, { useState } from 'react';
import './ColorPicker.css'


const ColorPicker = ({ colors,onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
    onColorChange(color); 
  };

  return (
    <div id="div1" > 
      <button id="btn"  onClick={toggleColorList}>Pick a color</button>
      {isOpen && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                alignItems:'baseline',
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '5px',
                marginTop:'15px',
                borderRadius: '20%',
                cursor: 'pointer'
              }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      )}
    
    </div>
  );
};

export default ColorPicker;
