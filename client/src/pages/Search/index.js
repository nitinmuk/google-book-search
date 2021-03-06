import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import mappingUtil from "../../utils/mappingUtil";
import BooksContainer from "../../components/BooksContainer";
import Alert from "../../components/Alert";

const Search = () => {
    const inputRef = useRef();
    const [books, setBooks] = useState();
    const [searchButtonState, setSearchButtonState] = useState(false);
    const [saveButtonState, setSaveButtonState] = useState(false);
    const [searchErrorState, setSearchErrorState] = useState(false);
    const [bookTitle, setBookTitle] = useState();
    const [openAlert, setOpenAlert] = useState(false);
    /**
     * once user submit search request, it will trigger search
     * API request to fetch searched books and set it as component
     * state
     */
    const handleSearchSubmit = async () => {
        try {
            setBooks(undefined);
            setSearchErrorState(false);
            const searchText = inputRef.current.value.trim();
            if (searchText !== "") {
                setSearchButtonState(true);
                const searchedBooks = await API.searchBooks(searchText);
                if (searchedBooks.data && searchedBooks.data.length) {
                    setBooks(searchedBooks.data.map(book => mappingUtil.mapGoogleBook(book)));
                }
                else {
                    searchedBooks.status === 200 ? setBooks([]) : setSearchErrorState(true);
                }
            }
            setSearchButtonState(false);
            inputRef.current.value = "";
        }
        catch (error) {
            setSearchErrorState(true);
            console.log("Error: ", error);
        }

    }
    /**
     * handler to save book
     * @param {book google id to save} id 
     */
    const handleSaveBook = async (id) => {
        try {
            setSaveButtonState(true);
            const filteredBooks = books.filter((book) => book.id === id);
            if (filteredBooks && filteredBooks.length) {
                setBookTitle(filteredBooks[0].title);
                const response = await API.saveBooks(filteredBooks[0]);
                if(response.status !== 201) {
                    setSearchErrorState(true);
                }
            }
            setSaveButtonState(false);
        } catch (error) {
            console.log("Error", error);
            setSearchErrorState(true);
            
        } finally {
            setOpenAlert(true);
        }

    }
    
    return (
        <div>
            <Header />
            <Title />
            <SearchForm
                onClick={handleSearchSubmit}
                ref={inputRef}
                disabled={searchButtonState} 
            />
            <BooksContainer
                books={books}
                onClickHandler={handleSaveBook}
                disableButton={saveButtonState}
                pageType="Search"
                error={searchErrorState} 
            />
            <Alert
            bookTitle={bookTitle}
            openModal={openAlert}
            status={searchErrorState ? "Error!" : "Success!"}
            handleModalClose={() => setOpenAlert(false)}
            action="save"
            />
            <Footer />
        </div>
    );
}

export default Search;