import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import mappingUtil from "../../utils/mappingUtil";
import BooksContainer from "../../components/BooksContainer";

const Search = () => {
    const inputRef = useRef();
    const [books, setBooks] = useState();
    const [searchButtonState, setSearchButtonState] = useState(false);
    const [saveButtonState, setSaveButtonState] = useState(false);
    /**
     * once user submit search request, it will trigger search
     * API request to fetch searched books and set it as component
     * state
     */
    const handleSearchSubmit = async () => {
        try {
            setBooks(undefined);
            const searchText = inputRef.current.value.trim();
            if (searchText !== "") {
                setSearchButtonState(true);
                const searchedBooks = await API.searchBooks(searchText);
                setBooks(searchedBooks.data.map(book => mappingUtil.mapGoogleBook(book)));
                setSearchButtonState(false);
                inputRef.current.value = "";
            }
        } catch (error) {
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
                await API.saveBooks(filteredBooks[0]);
            }
            setSaveButtonState(false);
        } catch (error) {
            console.log("Error", error);
        }
        
    }
    return (
        <div>
            <Header />
            <Title />
            <SearchForm onClick={handleSearchSubmit} ref={inputRef} disabled={searchButtonState} />
            <BooksContainer books={books} onClickHandler={handleSaveBook} disableButton={saveButtonState} pageType="Search" />
            <Footer />
        </div>
    );
}

export default Search;