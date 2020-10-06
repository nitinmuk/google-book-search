import React, { useState, useEffect } from "react";
import BooksContainer from "../../components/BooksContainer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import Alert from "../../components/Alert";

const Saved = () => {
    const [savedBooks, setSavedBooks] = useState();
    const [deleteButtonState, setDeleteButtonState] = useState(false);
    const [savedErrorState, setSavedErrorState] = useState(false);
    const [bookTitle, setBookTitle] = useState();
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        async function loadBooks() {
            try {
                setSavedErrorState(false);
                const response = await API.getBooks();
                response.status === 200 ?
                    setSavedBooks(response.data) : setSavedErrorState(true);
            } catch (error) {
                console.log("Error: ", error);
                setSavedErrorState(true);
            }
        }
        loadBooks();
    }, [setSavedBooks]);

    /**
     * handles delete button event to delete book
     * @param {id of book which need to be deleted} id 
     */
    const handleDeleteBook = async (id, title) => {
        try {
            setDeleteButtonState(true);
            setSavedErrorState(false);
            setBookTitle(title);
            const response = await API.deleteBooks(id);
            response.status === 204
                ? setSavedBooks(savedBooks.filter(book => book._id !== id)) : setSavedErrorState(true);
            setDeleteButtonState(false);
        } catch (error) {
            console.log("Error: ", error);
            setSavedErrorState(true);
        } finally {
            setOpenAlert(true);
        }

    }
    return (
        <div>
            <Header />
            <Title />
            <BooksContainer
                books={savedBooks}
                onClickHandler={handleDeleteBook}
                disableButton={deleteButtonState}
                pageType="Saved"
                error={savedErrorState} />
            <Alert
            bookTitle={bookTitle}
            openModal={openAlert}
            status={savedErrorState ? "Error!" : "Success!"}
            handleModalClose={() => setOpenAlert(false)}
            action="delete"
            />
            <Footer />
        </div>

    );
}

export default Saved;