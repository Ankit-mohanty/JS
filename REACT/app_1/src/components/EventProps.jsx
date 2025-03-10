import "./ev.css"

export const EventProps=()=>{
const HandelWelcomeUser=(user)=>{
    alert(`Hi ${user} Welcome to the event handling`);
}
const handelHover=()=>{
    alert('Hovered');
}
    return (<>
    <WelcomeUser onButtonClick={()=>HandelWelcomeUser('Ankit')}
        onMouseEnter={handelHover}
        />
    </>);


};

const WelcomeUser=(props)=>{
    const handelGreetings=()=>{
        console.log(`Hey User Welcome`);
  
  props.onButtonClick();
    }
    return(<>
    <button onClick={props.onButtonClick}>Click Me </button>
    <button onMouseEnter={props.onMouseEnter}>Hover over Me </button>
    <button onClick={handelGreetings}>GreetIng </button>
    </>)
}