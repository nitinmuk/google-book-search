import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchForm from "../../components/SearchForm";
import API from "../../utils/API";
import SearchResults from "../../components/SearchResults";
const Search = () => {
    const inputRef = useRef();
    const [books, setBooks] = useState([]);
    const [searchButtonState, setSearchButtonState] = useState(false);
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
            setBooks(searchedBooks.data);
            setSearchButtonState(false);
            inputRef.current.value = "";
        }
    }
    return (
        <div>
            <Header />
            <Title />
            <SearchForm onClick={handleSearchSubmit} ref={inputRef} disabled={searchButtonState} />
            <SearchResults books={books}/>
        </div>
    );
}

export default Search;