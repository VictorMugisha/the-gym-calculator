import { useContext } from "react"
import ScreenContext from "../contexts/ScreenContext"

export default function Screen() {
    const screenContext = useContext(ScreenContext)
    return (
        <div className="w-full bg-slate-500 text-white flex items-center justify-end px-2 text-[4rem]">
            <span>{screenContext?.screenState}</span>
        </div>
    )
}
