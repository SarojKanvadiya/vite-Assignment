import { useEffect, useState } from "react";

export default function UserInfo() {
    useEffect(() => {
        console.log("Component Mounted!");
    }, [])

    return (
        <h1 className="heading">Welcome to React!</h1>
    )
}

export function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component Updated!")
    }, [count])
    return (
        <>
            <p className="counter"><span>Count :</span> {count} </p>
            <button className="counterBtn" onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let interval = setInterval(() => {

            console.log("counter is running....");
            setCount(count + 1);
        }, 2000);
       
            return ()=>{
                clearInterval(interval);
                console.log("Component Unmounted!");
            };
           
    }, [count])
    return <p className="timer"><span>Timer: </span>{count}</p>
}