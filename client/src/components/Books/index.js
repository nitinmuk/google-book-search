import React from "react";
import { Button, Card, Image, Grid, Icon } from "semantic-ui-react";

const Books = (props) => {
    return (
        <Card.Group>
            {getCards(props)}
        </Card.Group>
    );
}
/**
 * returns an array of cards where each book from book array is mapped
 * to one of the cards.
 * @param {array of books to render} books 
 */
function getCards({ books, onClickHandler, disableButton, pageType }) {
    if (books && books.length) {
        const cards = books.map(book => {
            return (
                <Card fluid key={book.id ? book.id : book._id}>
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
                                {getBookImage(book.image)}
                            </Grid.Column>
                            <Grid.Column width={13} textAlign="justified">
                                <Card.Description as="p">{book.description}</Card.Description>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            {getSaveOrDeleteButton(pageType, disableButton, book, onClickHandler)}
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
 * returns either the save or delete button based on which page is being rendered.
 * @param {type of page being rendered currently} pageType 
 * @param {if to disable button} disableButton 
 * @param {book corresponding to current card} book 
 * @param {function to handle the click on the button} onClickHandler 
 */
function getSaveOrDeleteButton(pageType, disableButton, book, onClickHandler) {
    switch (pageType) {
        case "Search":
            return (
                <Button color="green" disable={disableButton.saveButtonState} onClick={() => onClickHandler(book.id)}>Save</Button>
            );
        case "Saved":
            return (
                <Button color="red" disable={disableButton.deleteButtonState} onClick={() => onClickHandler(book._id,book.title)}>Delete</Button>
            )
        default:
            return;
    }

}

/**
 *if url defined then render same otherwise render a book icon 
 * @param {book image url} url 
 */
function getBookImage(url) {
    if (url) {
        return (
            <Image floated="left" size="small" src={url} />
        );
    }
    else {
        return (
            <Icon size="massive" color="green" name="book" />
        );
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

export default Books;