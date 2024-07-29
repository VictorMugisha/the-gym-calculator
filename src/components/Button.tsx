import { useContext, useState } from "react"
import { ScreenContextProvider } from "../contexts/ScreenContext"

interface ButtonProps {
    className?: string
    value: string | number
    operation?: "reset" | "add" | "minus" | "multiply" | "divide" | "modulus" | "dot" | "equal" | "negate"
}

export default function Button({ className, value, operation }: ButtonProps) {
    const [operand, setOperand] = useState<string>("")
    const context = useContext(ScreenContextProvider)

    function handleClick() {
        if (typeof value === "number") {
            console.log("it's a number");
            if (context?.screenValue === 0) {
                context.setScreenValue(value)
                return
            } else {
                if (context?.screenValue.toString().length === 9) {
                    return
                }
                context?.setScreenValue(prevValue => {
                    return parseInt(prevValue.toString() + value)
                })
            }
        } else {
            if (context?.screenValue === 0) {
                return
            }
            switch (operation) {
                case "reset":
                    context?.setScreenValue(0)
                    break
                case "add":
                    setOperand(context?.screenValue.toString() + "+")
                    console.log(operand);
                    break
                case "minus":
                    setOperand(context?.screenValue.toString() + "-")
                    console.log(operand);
                    break
                case "divide":
                    setOperand(context?.screenValue.toString() + "/")
                    console.log(operand);
                    break
                case "multiply":
                    setOperand(context?.screenValue.toString() + "*")
                    break
                case "modulus":
                    setOperand(context?.screenValue.toString() + "%")
                    break
                case "negate":
                    context?.setScreenValue(prevValue => {
                        return prevValue * -1
                    })
                    break
                case "dot":
                    if (context?.screenValue.toString().includes('.')) {
                        return
                    }
                    context?.setScreenValue(prevValue => {
                        return parseInt(prevValue.toString() + value + 0)
                    })
                    break
                // case "equal":
                //     setOperand(context?.screenValue as number)
                //     break
            }
        }
    }

    return (
        <button
            className={`bg-gray-300 text-[2rem] border-none outline-none h-28 flex items-center justify-center ${className}`}
            onClick={handleClick}
        >
            {value}
        </button>
    );
}
