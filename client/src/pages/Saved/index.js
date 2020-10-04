import React, { useState, useEffect } from "react";
import BooksContainer from "../../components/BooksContainer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import API from "../../utils/API";
import Footer from "../../components/Footer";

const Saved = () => {
    const [savedBooks, setSavedBooks] = useState();
    const [deleteButtonState, setDeleteButtonState] = useState(false);

    useEffect(() => {
        async function loadBooks() {
            try {
                const response = await API.getBooks();
                setSavedBooks(response.data);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        loadBooks();
    }, [setSavedBooks]);

    /**
     * handles delete button event to delete book
     * @param {id of book which need to be deleted} id 
     */
    const handleDeleteBook = async (id) => {
        try {
            setDeleteButtonState(true);
            await API.deleteBooks(id);
            setSavedBooks(savedBooks.filter(book => book._id !== id));
            setDeleteButtonState(false);
        } catch (error) {
            console.log("Error: ", error);
        }
        
    }
    return (
        <div>
            <Header />
            <Title />
            <BooksContainer books={savedBooks} onClickHandler={handleDeleteBook} disableButton={deleteButtonState} pageType="Saved" />
            <Footer />
        </div>

    );
}

export default Saved;