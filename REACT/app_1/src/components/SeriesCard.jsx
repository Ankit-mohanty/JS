// import PropTypes from 'prop-types';
import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  /*   const btnStyle = {
    padding: "1.2rem 2.4rem",
    border: "none",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
    fontWeight:"bold",
    cursor: "pointer",
  }; */
  /* 
  const ButtonAnkit=styled.button({
    
    padding: "1.2rem 2.4rem",
    border: "none",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
    fontWeight:"bold",
    cursor: "pointer",
  }); */

  const ButtonAnkit = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `;

  // we are using square braces because in js we vab use "-" in the key so we use square braces.
  const ratingCondition = rating >= 8.5 ? styles["super-hit"] : styles.average;
  return (
    <li className={styles.card}>
      <img src={img_url} alt="Queen of tears" width="30%" height="40%" />
      {/* <section className={styles["card-content"]}> */}
      <section className='flex flex-col gap-6 p-6'>
        {/* <img src={img_url} alt="Queen of tears" width="30%" height="40%" /> */}
        <h1>Name : {name}</h1>
        <h2>
          {/* Rating: <span className={`rating ${rating>=8.5?"super-hit":"average"}`}>{rating}</span> */}
          Rating:{" "}
          <span className={`${styles.rating} ${ratingCondition}`}>
            {rating}
          </span>
        </h2>
        <h3 >Genre:{genre} </h3>
        <p>Summary: {description}</p>
        <p>Cast: {cast}</p>
        {/* <h1 style={{ margin: "1.2rem" }} >Name : {name}</h1>
        <h2 style={{ margin: "1.2rem" }}>Rating: {rating}</h2>
        <h3 style={{ margin: "1.2rem" }}>Genre:{genre} </h3>

        <p style={{ margin: "1.2rem" }}>Summary: {description}</p>
        
        */}
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button style={btnStyle}>Watch IT</button> */}
          <ButtonAnkit rating={rating}>Watch IT</ButtonAnkit>
        </a>
      </section>
    </li>
  );
};
