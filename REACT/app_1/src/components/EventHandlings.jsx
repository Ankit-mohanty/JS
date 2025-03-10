  
  import "./ev.css";
  export const EventHandling = () => {
    
  const handelButtonClick = () => {
  // const handelButtonClick = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.type);
    alert("Event Fire");
  };

  const handelWelcome=(user)=>{
    console.log(`Hi ${user} Welcome to the event handling`);
  }
  return (
    <>
    {/* function component with named function */}
{/*? We have not call this function if we call this function here it will run without even click on it. So here we just pass the reference not to call here.  */}
  <button onClick={handelButtonClick}>named function</button>

{/* //Fat arrow function */}
{/* In react the event handler receive the event object as an argument by default. However when you use an arrow function directly in the onclick attribute without passing  explicitly event, React does not pass the event object to the handler function. This is because the arrow function create a new function and calls your handler without passing any arguments. */}
      <button onClick={(event)=>handelButtonClick(event)}>Fat arrow function</button>
      
      {/* Inline Function */}
      <button onClick={(event)=>console.log(event)}>Inline Function </button>
    
    
    {/* Inline arrow Function */}
      <button onClick={()=> alert('Event Fire')}>Inline arrow Function</button>


      {/* Passing arguments to event handlers */}
      <button onClick={()=>handelWelcome('Ankit')}> Passing arguments to event handlers</button>

    </>
  );
};
 
