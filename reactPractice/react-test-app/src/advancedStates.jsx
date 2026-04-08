import React, {useState} from "react"

function Person() {
    const [person, setPerson] = useState({name: "jack", age: 24})

    // Bad Function

    // const handleIncrease = () => {
    //     person.age = person.age + 1;
    //     setPerson(person);
    // }

    // GOOD Function 

    const handleIncreaseAge = () => {
        console.log("in handleIncreaseAge (before Call): ", person)
        const newPerson = {...person , age: person.age + 1};
        console.log("in handleIncreaseAge (after call): ", person)
        setPerson(newPerson)
    }

    console.log("After HandleIncreaseAge Component: ", person)

    return (
        <>
            <h1>My name is {person.name}</h1>
            <h1>My age is {person.age}</h1>
            <button onClick={handleIncreaseAge}>Increase my age</button>
        </>
    )

}

function StateUpdaterExample() {

    const [player, setPlayer] = useState({name: "Jackson", level: 1})

    const handleLevelIncrease = () => {
        setPlayer((prevPlayer) => ({...player, level: prevPlayer.level + 1}))
        setPlayer((prevPlayer) => ({...player, level: prevPlayer.level + 1}))
    }

    return (
        <>
            <h1>Player name is {player.name}</h1>
            <h1>Player Level is {player.level}</h1>
            <button onClick={handleLevelIncrease}>Increase Level</button>
        </>
    )
}

function CustomInput() {
    const [value,setValue] = useState("")

    return (
        <>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)}></input>
        </>
    )
}

function FullName() {
    const [person,setPerson] = useState({firstName:"", lastName: ""})

    // const handleFirstNameChange = (event) => {
    //     setPerson({...person,firstName: event.target.value})
    // }

    // const handleLastNameChange = (event) => {
    //     setPerson({...person, lastName: event.target.value})
    // }


    
    
    
    // return (
    //     <>
    //     <h1>Hi! {person.firstName} {person.lastName}</h1>
    //     <input  type="text" placeholder="Enter First Name" value={person.firstName} onChange={handleFirstNameChange}></input>
    //     <input type="text" placeholder="Enter Last Name" value={person.lastName} onChange={handleLastNameChange}></input>
    //     </>
    // )


    // BETTER CODE

    const handleNameChange = (event) => {
        const {name,value} = event.target

        setPerson({...person, [name]:value})
    }


    return (
        <>
            <h1>Hi! {person.firstName} {person.lastName}</h1>
            <input name="firstName" type="text" placeholder="Enter First Name" value={person.firstName} onChange={handleNameChange}></input>
            <input name="lastName" type="text" placeholder="Enter Last Name" value={person.lastName} onChange={handleNameChange}></input>
        </>
    )

}



export default FullName