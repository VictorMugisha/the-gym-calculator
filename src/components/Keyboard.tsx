import Button from "./Button";

export default function Keyboard() {
  return (
    <div className="w-full grid grid-cols-4 gap-[1px] bg-black">
        <Button type="operand">AC</Button>
        <Button type="operand">+/-</Button>
        <Button type="operand">%</Button>
        <Button type="operator">÷</Button>
        <Button type="operand">7</Button>
        <Button type="operand">8</Button>
        <Button type="operand">9</Button>
        <Button type="operator">x</Button>
        <Button type="operand">6</Button>
        <Button type="operand">5</Button>
        <Button type="operand">4</Button>
        <Button type="operator">-</Button>
        <Button type="operand">3</Button>
        <Button type="operand">2</Button>
        <Button type="operand">1</Button>
        <Button type="operator">+</Button>
        <Button className="col-span-2" type="operand">0</Button>
        <Button type="operand">.</Button>
        <Button type="operator">=</Button>
    </div>
  )
}
