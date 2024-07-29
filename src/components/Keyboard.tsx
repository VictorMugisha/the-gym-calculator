import Button from "./Button";

export default function Keyboard() {
    

    return (
        <div
            className="w-full grid grid-cols-4 gap-[1px] bg-black"
        >
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>÷</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>x</Button>
            <Button>6</Button>
            <Button>5</Button>
            <Button>4</Button>
            <Button>-</Button>
            <Button>3</Button>
            <Button>2</Button>
            <Button>1</Button>
            <Button>+</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
        </div>
    );
}
