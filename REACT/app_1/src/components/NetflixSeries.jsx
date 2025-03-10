import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

// ? This is called named export. We can import this component with the same name in the import statement.

const NetflixSeries = () => {
  return (
    //? in react we are not use class keyword because class is a reserved keyword in javascript so we use className.
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

// Default export we can change the name of the component in the import statement.
export default NetflixSeries;
