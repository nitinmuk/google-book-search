import axios from "axios";

export default {
    //search books from google API
    searchBooks: function(searchText) {
        return axios.get(`/api/search/books?searchText=${searchText}`);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    saveBooks: function(book) {
        return axios.post("/api/books", book);
    },
    deleteBooks: function(id) {
        return axios.delete(`/api/books/${id}`);
    }

}