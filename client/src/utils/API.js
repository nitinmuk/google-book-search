import axios from "axios";

export default {
    //search books from google API
    searchBooks: function(searchText) {
        return axios.get(`/api/search/books?searchText=${searchText}`);
    }
}