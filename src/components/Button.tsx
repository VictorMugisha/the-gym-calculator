// src/components/Button.tsx
import React from 'react';
import { useScreen } from '../contexts/ScreenContext';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  const { display, setDisplay } = useScreen();

  const handleClick = () => {
    switch (label) {
      case 'AC':
        setDisplay('0');
        break;
      case '+/-':
        setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
        break;
      case '%':
        setDisplay((prev) => String(Number(prev) / 100));
        break;
      case '=':
        try {
          setDisplay(String(eval(display)));
        } catch {
          setDisplay('Error');
        }
        break;
      default:
        setDisplay((prev) => (prev === '0' ? label : prev + label));
        break;
    }
  };

  return (
    <button onClick={handleClick} className={`p-4 ${className}`}>
      {label}
    </button>
  );
};

export default Button;
