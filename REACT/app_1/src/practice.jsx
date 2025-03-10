export const Practice = () => {
  const students = [1];
  return (
    <>
      {/* <p>{students.length && "No Student"}</p> */}
      {/* <p>{students.length === 0 && "No student"}</p> */}
      <p>{!students.length && "No student"}</p>

      <p>number of student is : {students.length}</p>
    </>
  );
};

//? react does not render false, null, undefined, or true and NaN in dom.
//? However, it does render 0 and empty string as exception.
//? So, if you want to render 0 or empty string, you can use logical AND operator.
