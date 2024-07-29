// // src/contexts/ScreenContext.tsx
// import { createContext, useState, useContext, ReactNode } from 'react';

// interface ScreenContextProps {
//   display: string;
//   setDisplay: (value: string) => void;
// }

// const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

// export const useScreen = () => {
//   const context = useContext(ScreenContext);
//   if (!context) {
//     throw new Error('useScreen must be used within a ScreenProvider');
//   }
//   return context;
// };

// export const ScreenProvider = ({ children }: { children: ReactNode }) => {
//   const [display, setDisplay] = useState<string>('0');
  
//   return (
//     <ScreenContext.Provider value={{ display, setDisplay }}>
//       {children}
//     </ScreenContext.Provider>
//   );
// };

// export default ScreenProvider;

// src/contexts/ScreenContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ScreenContextProps {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
};

export const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [display, setDisplay] = useState<string>('0');
  
  return (
    <ScreenContext.Provider value={{ display, setDisplay }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
