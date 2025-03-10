export const App = () => {
  return (
    <div>
      <Net />
      <Net />
      <Net />
    </div>
  );
};

// Functional Component
const Net = () => {
  const dramaName = "Queen Of Tears";
  const rating = 5 + 4;
  const summary =
    "Queen of Tears is a compelling K-drama that explores the complexities of love, betrayal, and family dynamics, with standout performances from Kim Ji-won and Kim Soo-hyun, but occasionally gets bogged down by melodramatic plot twists and unnecessary family drama.";
  const returnGenre = () => {
    return "Romance, Drama";
  };
  let age = 16;
  if (age < 18) 
    return (
      <div>
        <div>
          <img src="queen.jpg" alt="Queen Of Tears" height="40%" width="40%" />
        </div>
        <h1>Drama Name:- {dramaName} </h1>
        <h3>Rating:-{rating} </h3>
        <h6>Genre:-{returnGenre()} </h6>
        <p>{summary} </p>
        <button>Not Available</button>
      </div>
    );
 
    return (
      <div>
        <div>
          <img src="queen.jpg" alt="Queen Of Tears" height="40%" width="40%" />
        </div>
        <h1>Drama Name:- {dramaName} </h1>
        <h3>Rating:-{rating} </h3>
        <h6>Genre:-{returnGenre()} </h6>
        <p>{summary} </p>
        <button>Watch Now</button>
      </div>
    );
  
};
