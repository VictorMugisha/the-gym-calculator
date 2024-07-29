
type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    type: "operator" | "operand"
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <button
            className={`bg-gray-300 text-[3rem] border-none outline-none h-28 flex items-center justify-center + ${className}`}
        >
            {children}
        </button>
    )
}
