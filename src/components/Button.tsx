interface ButtonProps {
    className?: string
    value: string | number
}

export default function Button({ className, value }: ButtonProps) {


    return (
        <button
            className={`bg-gray-300 text-[2rem] border-none outline-none h-28 flex items-center justify-center ${className}`}
        >
            {value}
        </button>
    );
}
