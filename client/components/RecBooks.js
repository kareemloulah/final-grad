import React from "react";
import { objectToArray, removeDuplicates } from "../utils/helpers";

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
  // Remove deplicated elements
  const booksArrayUnique = removeDuplicates(booksArray);
  // Select only First 3 books
  const booksArrayFirst3 = booksArrayUnique.slice(0, 3);
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
