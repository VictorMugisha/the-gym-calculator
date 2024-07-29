// src/components/Screen.tsx
import React from 'react';
import { useScreen } from '../contexts/ScreenContext';

const Screen: React.FC = () => {
  const { display } = useScreen();

  return (
    <div className="bg-gray-300 text-right p-4 text-2xl">
      {display}
    </div>
  );
};

export default Screen;
