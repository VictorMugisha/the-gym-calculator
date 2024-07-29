import { createContext } from "react";

// type ReturnType = React.SetStateAction<number> | null

type ScreenContextType = {
    screenState: number; 
    setScreenState: React.Dispatch<React.SetStateAction<number>>;
} | null

const ScreenContext = createContext<ScreenContextType>(null)

export default ScreenContext 