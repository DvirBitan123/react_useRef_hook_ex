import { useRef } from "react";

export default function Counter() {
    const myRef = useRef<HTMLDivElement>(null);

    return (
        <div>
        <button type="button" onClick={() => {
            let myNum: number = +myRef.current!.textContent!
            myNum++;
            myRef.current!.textContent = myNum.toString();
            console.log(myRef.current);
        }}>ADD</button>
        <button type="button" onClick={() => {
            let zeroRef: number = +myRef.current!.textContent!;
            zeroRef = 0;
            myRef.current!.textContent = zeroRef.toString()
        }
        }>ZERO
        </button>
        <div ref={myRef}>0</div>
        </div>
    ) 
}
