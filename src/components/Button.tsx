
type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    type: "operator" | "operand"
}

export default function Button({ children, className, type }: ButtonProps) {
    const buttonStyles = type === "operator" ? {
        backgroundColor: "rgb(243,134,54)",
        color: "white"
    } : {
        backgroundColor: "rgb(219,219,219)",
        color: "black",
        fontWeight: 600
    }
    return (
        <button
            style={buttonStyles}
            className={`bg-gray-300 text-[2rem] border-none outline-none h-28 flex items-center justify-center + ${className}`}
        >
            {children}
        </button>
    )
}
