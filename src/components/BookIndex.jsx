import React from "react";
import BookData from "./BookData";
import Books from "./Books";

//Wrap our Books component in and HOC to pass the data
const BooksWithData = BookData(Books);

class BookIndex extends React.Component {
  render() {
    return <BooksWithData className="BookssWithData" {...this.props} />;
  }
}

export default BookIndex;
