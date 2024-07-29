import { useContext } from "react"
import { ScreenContextProvider } from "../contexts/ScreenContext"

export default function Screen() {
    const context = useContext(ScreenContextProvider)
    return (
        <div className="w-full bg-slate-500 text-white flex items-center justify-end px-2 text-[4rem]">
            <span>{context?.screenValue}</span>
        </div>
    )
}
