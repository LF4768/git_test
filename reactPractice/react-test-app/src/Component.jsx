function FirstComponent() {
    const icon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    const person = {name: "Jack Daniel", age: 45}
    return(
        <>
        <h1>Hi my name is {person.name}. I am {person.age} years old</h1>
        <h1 className="firstClass">This is my first ever component</h1>
        <h2 style={{color: 'blue'}}>I still dont understand how half of this works</h2>
        <h3>But i guess thats the fun part right?</h3>
        <h1>anyways, heres a picture of github</h1>
        <img src={icon} alt="github icon" />

        
        </>
    )
}


function SecondComponent() {
    return <h1>Exporting a second component</h1>
}

function ButtonPractice1(props) {

    const prop = {
        color: props.color,
        fontSize: props.fontSize + "px"
    }
    return <button style={prop}>{props.text}</button>
}

function test() {
    console.log(1);
}

function ButtonPractice2({checking=14,color="red",random="Click Me",checkClick = test}) {

    const prop = {
        color: color,
        fontSize: checking + "px"
    }
    return <button onClick={checkClick} style={prop}>{random}</button>
}

function Options() {
    const testButtonClick = () => {
        console.log(2);
    }
    
    return(
        <>
        <ButtonPractice2 ></ButtonPractice2>
        <ButtonPractice2  random="Head to next Page" color="red" checking={30}></ButtonPractice2>
        <ButtonPractice2 checkClick={testButtonClick} color="green" checking={40}></ButtonPractice2>

        </>
    )
}

export  {FirstComponent, SecondComponent, Options};

function Profile({name,url,size,profession,awardNum,awardData,discoverData}) {
  <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl({url})}
      alt = {name}
      width={size}
      height={size}
      />
    <ul>
      <li>
      <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awardNum}</b>
        {awardData}
      </li>
      <li>
        <b>Discovered</b>
        {discoverData}
      </li>
    </ul>
  </section>
}

export default function Gallery() {
  return (
    <div>
{/*       <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section> */}
      
      <Profile name="gianluigi Buffon" 
        url='szV5sdG' size={70}  
        awardNum={4} 
        awardData="Test" 
        discoverData="test 2"/>
      
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
