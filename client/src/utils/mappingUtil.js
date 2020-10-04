export default {
    mapGoogleBook: function(googleBook) {
        
        return {
            title: googleBook.volumeInfo.title,
            subtitle: googleBook.volumeInfo.subtitle,
            authors: googleBook.volumeInfo.authors,
            image: googleBook.volumeInfo.imageLinks? googleBook.volumeInfo.imageLinks.thumbnail:undefined,
            description: googleBook.volumeInfo.description,
            link: googleBook.volumeInfo.infoLink,
            id: googleBook.id
        }
    }
}