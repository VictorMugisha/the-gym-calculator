// src/components/Keyboard.tsx
import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['6', '5', '4', '-'],
  ['3', '2', '1', '+'],
  ['0', '.', '='],
];

const Keyboard: React.FC = () => {
  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((button, buttonIndex) => (
            <Button
              key={buttonIndex}
              label={button}
              className={rowIndex === 4 && buttonIndex === 0 ? 'flex-1' : 'flex-1'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
