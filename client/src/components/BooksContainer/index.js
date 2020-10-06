import React from "react";
import { Container } from "semantic-ui-react";
import Books from "../Books";
import "./style.css";

const BooksContainer = (props) => {
    if (props.books) {
        if (props.books.length) {
            return (
                <Container fluid className="bookContainer">
                    <h3>{props.pageType === "Search" ? "Search Results" : "Saved Books"}</h3>
                    <Books {...props} />
                </Container>
            );
        }
        else {
            return (
                <Container fluid className="bookContainer">
                    <h4>{props.pageType === "Search" ? "Unable To Find Any Book. Please try some other search text." : "No book is currently saved."}</h4>
                </Container>
            );
        }
    }
    else {
        if (props.error) {
            return (
                <Container fluid className="bookContainer">
                    <h4>We are facing technical issues currently. Please try again. Sorry for inconvenience.</h4>
                </Container>
            );

        }
        else {
            return (<div></div>);
        }

    }
}

export default BooksContainer;