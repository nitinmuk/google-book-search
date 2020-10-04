import React from "react";
import { Button, Card, Container, Image, Grid } from "semantic-ui-react";

const SearchResults = ({ books }) => {
    if (books && books.length) {
        return (
            <Container>
                <h3>Searched Books</h3>
                <Card.Group>
                    {getCards(books)}
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
function getCards(books) {
    if (books && books.length) {
        const cards = books.map(book => {
            return (
                <Card fluid key={book.id}>
                    <Card.Content>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card.Header textAlign="left"><strong>{book.volumeInfo.title}</strong></Card.Header>
                                    <Card.Meta textAlign="left">{book.volumeInfo.subtitle}</Card.Meta>
                                    <Card.Meta textAlign="left">written By: {getAuthorsNames(book.volumeInfo.authors)}</Card.Meta>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Column width={3}>
                                <Image floated="left" size="small" src={book.volumeInfo.imageLinks.thumbnail} />
                            </Grid.Column>
                            <Grid.Column width={13} textAlign="justified">
                                <Card.Description as="p">{book.volumeInfo.description}</Card.Description>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button color="green">Save</Button>
                            <Button as="a" href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" color="yellow">View</Button>
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