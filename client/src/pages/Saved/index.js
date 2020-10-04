import React, { useState, useEffect } from "react";
import BooksContainer from "../../components/BooksContainer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import API from "../../utils/API";

const Saved = () => {
    const [savedBooks, setSavedBooks] = useState();
    const [deleteButtonState, setDeleteButtonState] = useState(false);

    useEffect(() => {
        loadBooks()
    }, []);

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(response =>
                setSavedBooks(response.data)
            )
            .catch(err => console.log(err));
    };

    /**
     * handles delete button event to delete book
     * @param {id of book which need to be deleted} id 
     */
    const handleDeleteBook = async (id) => {
        setDeleteButtonState(true);
        await API.deleteBooks(id);
        setSavedBooks(savedBooks.filter(book => book._id !== id));
        setDeleteButtonState(false);
    }
    return (
        <div>
            <Header />
            <Title />
            <BooksContainer books={savedBooks} onClickHandler={handleDeleteBook} disableButton={deleteButtonState} pageType="Saved" />
        </div>

    );
}

export default Saved;