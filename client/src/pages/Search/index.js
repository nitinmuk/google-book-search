import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import SearchResults from "../../components/SearchResults";
import Footer from "../../components/Footer";
import mappingUtil from "../../utils/mappingUtil";

const Search = () => {
    const inputRef = useRef();
    const [books, setBooks] = useState([]);
    const [searchButtonState, setSearchButtonState] = useState(false);
    const [saveButtonState, setSaveButtonState] = useState(false);
    /**
     * once user submit search request, it will trigger search
     * API request to fetch searched books and set it as component
     * state
     */
    const handleSearchSubmit = async () => {
        setBooks([]);
        const searchText = inputRef.current.value.trim();
        if (searchText !== "") {
            setSearchButtonState(true);
            const searchedBooks = await API.searchBooks(searchText);
            setBooks(searchedBooks.data.map(book => mappingUtil.mapGoogleBook(book)));
            setSearchButtonState(false);
            inputRef.current.value = "";
        }
    }
    const handleSaveBook = async (id) => {
        setSaveButtonState(true);
        const filteredBooks = books.filter((book) => book.id === id);
        if (filteredBooks && filteredBooks.length) {
            await API.saveBooks(filteredBooks[0]);
        }
        setSaveButtonState(false);
    }
    return (
        <div>
            <Header />
            <Title />
            <SearchForm onClick={handleSearchSubmit} ref={inputRef} disabled={searchButtonState} />
            <SearchResults books={books} saveBook={handleSaveBook} disableSave={saveButtonState} />
            <Footer />
        </div>
    );
}

export default Search;