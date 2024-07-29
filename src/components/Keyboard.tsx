import { useContext, useEffect, useState } from "react";
import ScreenContext from "../contexts/ScreenContext";
import Button from "./Button";

export default function Keyboard() {
    const [firstOperand, setFirstOperand] = useState<number | undefined>(undefined)
    const [lastOperand, setLastOperand] = useState<number | null>(null)
    const [operator, setOperator] = useState<string | null>(null)
    const context = useContext(ScreenContext);
    const [screen, setScreen] = useState<number>(0)

    useEffect(() => {
        // setFirstOperand(screen)
        console.log(screen);
    }, [screen])


    function handleDelegation(event: React.MouseEvent<HTMLDivElement>) {
        console.log(typeof event);

        const target = event.target as HTMLElement;

        if (target.className.includes("operator")) {
            setOperator(target.innerHTML)
            return
        }

        if (target.className.includes("reset")) {
            context?.setScreenState(0);
            setScreen(0)
        }

        if (context?.screenState.toString().length === 9) {
            return
        }

        if (context?.screenState === 0 && target.className.includes("operand")) {
            context?.setScreenState(() => {
                // setScreen(+target.innerHTML)
                return +target.innerHTML;
            });
            return
        }

        if (context?.screenState != 0 && target.className.includes("operand")) {
            context?.setScreenState((prevState) => {
                setScreen(prevState)
                return prevState;
            });
            
            return
        }


    }

    return (
        <div
            className="w-full grid grid-cols-4 gap-[1px] bg-black"
            onClick={handleDelegation}
        >
            <Button className="reset">AC</Button>
            <Button className="operator">+/-</Button>
            <Button className="operator">%</Button>
            <Button className="operator">÷</Button>
            <Button className="operand">7</Button>
            <Button className="operand">8</Button>
            <Button className="operand">9</Button>
            <Button className="operator">x</Button>
            <Button className="operand">6</Button>
            <Button className="operand">5</Button>
            <Button className="operand">4</Button>
            <Button className="operator">-</Button>
            <Button className="operand">3</Button>
            <Button className="operand">2</Button>
            <Button className="operand">1</Button>
            <Button className="operator">+</Button>
            <Button className="col-span-2 operand">0</Button>
            <Button className="operand">.</Button>
            <Button className="operator">=</Button>
        </div>
    );
}
