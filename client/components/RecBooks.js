import React from "react";

const objectToArray = (obj) => {
  return Object.values(obj).map((value) => {
    console.log(value);
    return value;
  });
};

const bookStyle = {
  backgroundColor: "#E3EDFF",
  borderRadius: "5px",
  padding: "5px",
  margin: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};


function RecBooks({ books }) {

  // Convert JSON to Object
  // const booksObj = JSON.parse(test);

  // Convert Object to Array
  const booksArray = objectToArray(books);
  // Select only First 3 books
  const booksArrayFirst3 = booksArray.slice(0, 3);
  // Print out the books
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {booksArrayFirst3.map((book, i) => (
        <p key={i} style={bookStyle}>
          {book}
        </p>
      ))}
    </div>
  );
}

export default RecBooks;
