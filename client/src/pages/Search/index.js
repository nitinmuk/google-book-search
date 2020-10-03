import React, { useRef } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchForm from "../../components/SearchForm";
const Search = () => {
    const inputRef = useRef();
    const handleSearchSubmit = () => {
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <Header />
            <Title />
            <SearchForm onClick={handleSearchSubmit} ref={inputRef}/>
        </div>
    );
}

export default Search;