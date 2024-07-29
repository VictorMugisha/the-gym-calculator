import { useContext } from "react";
import ScreenContext from "../contexts/ScreenContext";

type ButtonProps = {
    children: React.ReactNode | number,
    className?: string,
    type?: "operator" | "operand"
}

export default function Button({ children, className, type }: ButtonProps) {
    const context = useContext(ScreenContext);

    function handleUpdateScreen(event: React.MouseEvent<HTMLButtonElement>) {
        console.log(event.currentTarget.classList);
        // const value = parseInt(event.currentTarget.innerHTML);

        context?.setScreenState((prevState) => {
            if (prevState === 0) {
                return children;
            } else if (prevState?.toString().length === 9) {
                return prevState;
            } else {
                return +`${prevState}${children}`;
            }
        });
    }

    const buttonStyles = type === "operator" ? {
        backgroundColor: "rgb(243,134,54)",
        color: "white"
    } : {
        backgroundColor: "rgb(219,219,219)",
        color: "black",
        fontWeight: 600
    };

    return (
        <button
            style={buttonStyles}
            className={`bg-gray-300 text-[2rem] border-none outline-none h-28 flex items-center justify-center ${className}`}
            onClick={handleUpdateScreen}
        >
            {children}
        </button>
    );
}
