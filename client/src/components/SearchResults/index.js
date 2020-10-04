import React from "react";
import { Button, Card, Container, Image, Grid } from "semantic-ui-react";

const SearchResults = ({ books, saveBook, disableSave }) => {
    if (books && books.length) {
        return (
            <Container>
                <h3>Searched Books</h3>
                <Card.Group>
                    {getCards(books, saveBook, disableSave)}
                </Card.Group>
            </Container>
        );
    }
    else {
        return (<div></div>);
    }
}

/**
 * returns an array of cards where each book from book array is mapped
 * to one of the cards.
 * @param {array of books to render} books 
 */
function getCards(books, saveBook, disableSave) {
    if (books && books.length) {
        const cards = books.map(book => {
            return (
                <Card fluid key={book.id}>
                    <Card.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Header textAlign="left"><strong>{book.title}</strong></Card.Header>
                                    <Card.Meta textAlign="left">{book.subtitle}</Card.Meta>
                                    <Card.Meta textAlign="left">written By: {getAuthorsNames(book.authors)}</Card.Meta>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Column width={3}>
                                <Image floated="left" size="small" src={book.image} />
                            </Grid.Column>
                            <Grid.Column width={13} textAlign="justified">
                                <Card.Description as="p">{book.description}</Card.Description>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button color="green" disable={disableSave.saveButtonState} onClick={() => saveBook(book.id)}>Save</Button>
                            <Button as="a" href={book.link} target="_blank" rel="noopener noreferrer" color="yellow">View</Button>
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return cards;
    }
}
/**
 * returns a comma separated string of authors
 * corresponding to input authors array
 * @param {array of book authors} authors 
 */
function getAuthorsNames(authors) {
    if (authors && authors.length) {
        return authors.reduce((authorList, author) => `${authorList}, ${author}`);
    }
}

export default SearchResults;