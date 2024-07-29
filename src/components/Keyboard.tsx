import Button from "./Button";

export default function Keyboard() {


    return (
        <div
            className="w-full grid grid-cols-4 gap-[1px] bg-black"
        >
            <Button className="" value={"AC"} />
            <Button className="" value={"+/-"} />
            <Button className="" value={"%"} />
            <Button className="bg-orange-500 text-white" value={"÷"} />
            <Button className="" value={7} />
            <Button className="" value={8} />
            <Button className="" value={9} />
            <Button className="bg-orange-500 text-white" value={"x"} />
            <Button className="" value={6} />
            <Button className="" value={5} />
            <Button className="" value={4} />
            <Button className="bg-orange-500 text-white" value={"-"} />
            <Button className="" value={3} />
            <Button className="" value={2} />
            <Button className="" value={1} />
            <Button className="bg-orange-500 text-white" value={"+"} />
            <Button className="col-span-2" value={0} />
            <Button className="" value={"."} />
            <Button className="bg-orange-500 text-white" value={"="} />
        </div>
    );
}
