import { createContext, useState } from 'react'

type ScreenContextProviderType = {
    screenValue: number,
    setScreenValue: React.Dispatch<React.SetStateAction<number>>;
}

export const ScreenContextProvider = createContext<ScreenContextProviderType | null>(null)

type ScreenContextType = {
    children: JSX.Element
}

export default function ScreenContext({children}: ScreenContextType) {
    const [screenValue, setScreenValue] = useState(0)
    const contextValue = {
        screenValue,
        setScreenValue
    }
    return (
        <ScreenContextProvider.Provider value={contextValue}>
            {children}
        </ScreenContextProvider.Provider>
    )
}
