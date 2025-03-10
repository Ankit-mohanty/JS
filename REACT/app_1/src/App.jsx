import "react";
// import NetflixSeries from "./components/NetflixSeries";

// import "./components/Netflix.css";

// import styles from"./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandlings";
import { EventProps } from "./components/EventProps";


// import { Footer } from "./components/NetflixSeries";
/* export const App = () => {
  return <h1>Welcome To my Territory!!!</h1>
}                         
*/  
/**
 * Main application component that renders a welcome message.
 * @component
 * @returns {JSX.Element} An h1 element containing the welcome message
 */
/* ?
 * A React functional component that renders a welcome message.
 *
 * This component can be implemented in two equivalent ways:
 * 1. Using JSX syntax: <h1>Welcome To my Territory!!!</h1>
 * 2. Using React.createElement(): React.createElement('h1', null, "Welcome To my Territory!!!")
 *
 * JSX is syntactic sugar that gets compiled into React.createElement() calls.
 * Both approaches produce the same output - an h1 element with welcome text.
 *
 * @returns {JSX.Element} An h1 heading element containing the welcome message
 */
/* ? export const App= ()=>{
  return React.createElement('h1',null,"Welcome To my Territory!!!");
} */

// console.log(React.createElement('h1',null,"Welcome To my Territory!!!")
// if we try to pass multiple returns then it will through an error
// export const App = () => {
//   //! using array to avoid unwanted node
//   return  [<NetflixSeries keys="1"/>,<NetflixSeries keys="2"/>];
// }
export const App = () => {
  //! using react fragment to avoid unwanted node
  return (
    <section className="container">
      {/* <h1 className={styles["card-heading"]} >List Of Best Web Series</h1>
      <NetflixSeries/> */}
      {/* <EventHandling /> */}
<EventProps/>
      {/* <Footer /> */}
    </section>
  );
};

// <div>
//   <NetflixSeries/>
//   <NetflixSeries/>
//   <NetflixSeries/>

/*    <div>
        <div>
          {" "}
          <img
            src="download.jpeg"
            alt="Queen of tears"
            width="40%"
            height="40%"
          />
        </div>
        <h1>Solo Leveling</h1>
        <h2>Best anime ever</h2>
        <p>
          Summary:- Queen of Tears is a romantic K-drama that follows the
          tumultuous yet heartwarming love story between a chaebol heiress and
          her husband, an ordinary man. Despite their differences and a
          crumbling marriage, unexpected challenges bring them closer,
          reigniting their love and testing their resilience. Packed with
          emotions, humor, and family drama, the series explores themes of love,
          sacrifice, and redemption, making it a must-watch for K-drama fans.
        </p>
      </div>
      <div>
        <div>
          {" "}
          <img
            src="download.jpeg"
            alt="Queen of tears"
            width="40%"
            height="40%"
          />
        </div>
        <h1>Solo Leveling</h1>
        <h2>Best anime ever</h2>
        <p>
          Summary:- Queen of Tears is a romantic K-drama that follows the
          tumultuous yet heartwarming love story between a chaebol heiress and
          her husband, an ordinary man. Despite their differences and a
          crumbling marriage, unexpected challenges bring them closer,
          reigniting their love and testing their resilience. Packed with
          emotions, humor, and family drama, the series explores themes of love,
          sacrifice, and redemption, making it a must-watch for K-drama fans.
        </p>
      </div>
      <div>
        <div>
          {" "}
          <img
            src="download.jpeg"
            alt="Queen of tears"
            width="40%"
            height="40%"
          />
        </div>
        <h1>Solo Leveling</h1>
        <h2>Best anime ever</h2>
        <p>
          Summary:- Queen of Tears is a romantic K-drama that follows the
          tumultuous yet heartwarming love story between a chaebol heiress and
          her husband, an ordinary man. Despite their differences and a
          crumbling marriage, unexpected challenges bring them closer,
          reigniting their love and testing their resilience. Packed with
          emotions, humor, and family drama, the series explores themes of love,
          sacrifice, and redemption, making it a must-watch for K-drama fans.
        </p>
      </div> */
// </div>

// const NetflixSeries = () => {
//   const names = "Queen of tears";
//   const rating = 5 + 3.2;
//   const summary =
//     " Queen of Tears is a romantic K-drama that follows the tumultuous yet heartwarming love story between a chaebol heiress and her husband, an ordinary man. Despite their differences and a crumbling marriage, unexpected challenges bring them closer, reigniting their love and testing their resilience. Packed with emotions, humor, and family drama, the series explores themes of love, sacrifice, and redemption, making it a must-watch for K-drama fans.";
//   let returnGenre = () => {
//     const genre = "Romantic";
//     return genre;
//   };
//   let age = 15;

//   // let canWatch="Not Available";
//   // if(age>=18) canWatch="Watch It";

// let canWatch=()=>{
//   if(age>=18) return "Watch It"
//   else return "Not Available"
//   ;
// }

/*   if (age < 18) {
    return (
      <div>
        <div>
          {" "}
          <img
            src="download.jpeg"
            alt="Queen of tears"
            width="40%"
            height="40%"
          />
        </div>
        <h1>Name : {names}</h1>
        <h2>Rating: {rating}</h2>
        <h3>Genre:{returnGenre()} </h3>
        <p>Summary: {summary}</p>
        <button>Not Available</button>
      </div>
    );
  } */
//   return (
//       <div>
//         <div>
//           {" "}
//           <img
//             src="download.jpeg"
//             alt="Queen of tears"
//             width="40%"
//             height="40%"
//           />
//         </div>
//         <h1>Name : {names}</h1>
//         <h2>Rating: {rating}</h2>
//         <h3>Genre:{returnGenre()} </h3>
//         <p>Summary: {summary}</p>
//         {/* <button>{age>=18?"Watch It":"Not Available"}</button> */}
// <button>{canWatch()}</button>
//       </div>

//     );
// };

//? Each JSX element must have one parent element, Which means if we have multiple elements then we have to wrap them in a single parent element.
//? Every JSX tag needs to be close . Ypu can using self closing tag or closing tag for elements that don't have any children.

/*
 * React Components Documentation
 *
 * 1. What is a React Component?
 * - A component is a reusable piece of UI
 * - It can be either a function or class that returns JSX
 * - Components must start with capital letters
 *
 * 2. Types of Components:
 * a) Functional Components (Modern approach)
 *    - Simple JavaScript functions
 *    - Accept props as arguments
 *    - Use hooks for state and lifecycle
 *    Example:
 *    const MyComponent = (props) => {
 *      return <div>{props.name}</div>;
 *    }
 *
 * b) Class Components (Legacy approach)
 *    - Extend React.Component
 *    - Have lifecycle methods
 *    - Use this.state and this.props
 *    Example:
 *    class MyComponent extends React.Component {
 *      render() {
 *        return <div>{this.props.name}</div>;
 *      }
 *    }
 *
 * 3. Key Features:
 * - Props: Read-only inputs
 * - State: Internal data storage
 * - Lifecycle: Mount, Update, Unmount
 * - Virtual DOM: Efficient rendering
 *
 * 4. Best Practices:
 * - Keep components small and focused
 * - Use composition over inheritance
 * - Follow single responsibility principle
 * - Maintain proper component hierarchy
 */

/* ?
! Why can not we return multiple elements in JSX?
? After JSX compiled it is converted to JS object. you can not return multiple java script abject at same time.
 */
