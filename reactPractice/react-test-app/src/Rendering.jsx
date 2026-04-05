

// function Animals() {
//     const animals = ["Lion", "Cow", "Bat", "Snake"];

//     return (
//         <>
        
//         <h1>Animals:</h1>
//         <ul>
//             {animals.map((animal) => {
//                 return <li key={animal}>{animal}</li>
//             })}
//         </ul>
//         </>
//     )
// }

// Different Way

// function Animals() {
//     const animals = ["Lion", "Cow", "Bat", "Snake"]
//     const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

//     return (
//         <>
//         <h1>Animals:</h1>
//         <ul>
//             {animalsList}
//         </ul>
//         </>
//     )
// }

// function ListItem(props) {
//     return <li>{props.name}</li>
// }

// function List(props){
//     return(
//         <ul>
//             {props.animals.map((animal) => {
//                 return animal.startsWith("L") ? <li key ={animal}>{animal}</li> : null;
//             })}
//         </ul>
//     );
// }

// Different Way

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }




// function List(props) {

//     if(!props.animals) {
//         return <h1>Loading...</h1>
//     }

//     if(props.animals.length == 0) {
//         return <h1>There are no animals</h1>
//     }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") && <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   );
// }

// With Ternary

// function List(props) {
//     return (
//         <>
//         {!props.animals ? (<div>Loading...</div>) :
//          props.animals.length > 0 ? (
//             <ul>
//                 {props.animals.map((animal) => {
//                    return <li key={animal}>{animal}</li>
//                 })}
//             </ul>
//          ) : <div>There are no animals</div>  
//         }  

//         </>
//     )
// }

// With && Operator

function List(props) {
    return (
        <>
        {!props.animals && <div>Loading...</div>}
        {props.animals && props.animals.length > 0 && (
            <ul>
                {props.animals.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        )}
        {props.animals && props.animals.length == 0 && <div>There are no animals</div>}
        </>
    )
}

function Animals() {
    const animals= ["Lion", "Cow", "Bat", "Snake"]

    return(
        <>
           <h1>Animals:</h1>
           <List/>
        </>
    )
}


// function Item(props) {
//     return <li key={props.name}>{props.isPacked ? <del> {props.name + '✅'} </del>: props.name}</li>
// }


// function Item(props) {
//     return <li key={props.name}>{props.name} {props.isPacked && "✅"}</li>
// }

// method using JS more

function Item(props) {
    let item = props.name;
    if(props.isPacked) {
        item = (<del>{props.name} ✅ </del>);
    }
    return <li>{item}</li>

}


function ItemList(){ 
    return (
        <>
        <Item  isPacked={true} name="Water Bottle"/> 
        <Item  isPacked={false} name="Toothbrush"/>          
        <Item  isPacked={false} name="Charger"/>          
        </>
    )
}



export default ItemList