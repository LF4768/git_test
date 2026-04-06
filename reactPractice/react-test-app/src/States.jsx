// const [stateValue, setStateValue] = useState(initialValue)

import React,{ useState } from "react";

const COLORS = ["green","pink","blue","orange","red"]

function States() {
    const [backgroundColor,setBackgroundColor] = useState(COLORS[0])
    const [counter, setCounter] = useState(0)
    
    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
        backgroundColor != color ? setCounter((prevValue) => prevValue + 1) : null 
    }


    return (
        <div className="App" style={{backgroundColor}}>
            <p style={{color: "white"}}>The Color of this page has been changed {counter} times</p>
            {COLORS.map((color)=> {
                return <button type="button" key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? "selected" :""}> {color}</button>
            })}
        </div>
    )
}

function Incrementor() {
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter((prevValue) => (prevValue + 1))
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={Increment}>Increment the Number</button>
        </div>
    )

}

function Input() {
    return <input type="text"/>
}

function Clock() {
    const d = new Date()

    const [timer,setTimer] = useState(d.getHours() + ":" +  d.getMinutes() + ":" + d.getSeconds() + " PM");

    function timeHandler() {
        const d = new Date()
        setTimer(d.getHours() + ":" +  d.getMinutes() + ":" + d.getSeconds() + " PM")
    }

    const key = crypto.randomUUID();
    setInterval(() => timeHandler(),1000)
    return (
        <>
        <h1>{timer}</h1>
        <Input/>
        </>
    )
}



export default Clock