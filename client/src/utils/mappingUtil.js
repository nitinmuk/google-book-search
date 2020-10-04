export default {
    mapGoogleBook: function(googleBook) {
        return {
            title: googleBook.volumeInfo.title,
            subtitle: googleBook.volumeInfo.subtitle,
            authors: googleBook.volumeInfo.authors,
            image: googleBook.volumeInfo.imageLinks.thumbnail,
            description: googleBook.volumeInfo.description,
            link: googleBook.volumeInfo.infoLink,
            averageRating: googleBook.volumeInfo.averageRating,
            id: googleBook.id
        }
    }
}