import React from "react";
import {  Container } from "semantic-ui-react";
import Books from "../Books";

const BooksContainer = (props) => {
    if (props.books) {
        if(props.books.length){
            return (
                <Container fluid style={{padding:"30px", backgroundColor:"#2185d0"}}>
                    <h3 style={{textAlign:"left", color:"white"}}>{props.pageType==="Search" ? "Search Results" : "Saved Books"}</h3>
                    <Books {...props}/>                    
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <h3>Unable To Find Any Book. Please try again </h3>
                </Container>
            );
        }        
    }
    else {
        return (<div></div>);
    }
}

export default BooksContainer;