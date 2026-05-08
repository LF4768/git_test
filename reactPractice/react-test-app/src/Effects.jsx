import { useEffect, useState } from "react"



export default function Effects() { 
    const [counter,setCounter] = useState(0)

    useEffect(() => {
        const key = setInterval(() =>{
            setCounter((prev) => (prev + 1))
        }, 1000)

        return () => {
            clearInterval(key);
        }
    },[])
    
    
    
    return (
        <>
            <h1>{counter} seconds have passed</h1>
        </>
    )
}