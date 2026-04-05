import React,{ useState } from "react"

function cryptoKeys() {
    const list = [
        {
            id: crypto.randomUUID(),
            task: "finish homework"
        },
        {
            id: crypto.randomUUID(),
            task: "Do the JOB..."
        },
        {
            id: crypto.randomUUID(),
            task: "Meditate"
        }
    ]


    return (
        <ul>
            {list.map((item) => <li key={item.id}>{item.task}</li>)}
        </ul>
    )
    
    // NEVER create keys during rendering
    // <li key={crypto.randomUUID()}></li> Defeats the whole purpose of keys


}

function IndexKeys() {
    const list = ["Igglybuff", "Jigglypuff", "Wigglytuff"]

    return(
        <ul>
            {list.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

function GameReset() {
    const [key, setKey] = useState(0)
    return <Game key={key} resetGame={() => setKey(key+1)} />
}



export default IndexKeys