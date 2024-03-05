//  объекты для книг
let book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    genre: 'Роман',
    pages: 1225
};

let book2 = {
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    year: 1866,
    genre: 'Роман',
    pages: 331
};

//  массив для библиотеки
let library = [];

// Функция для добавления книги в библиотеку
function addBookToLibrary(book) {
    library.push(book);
}

// Добавляем книги в библиотеку
addBookToLibrary(book1);
addBookToLibrary(book2);

// Выводим содержимое библиотеки
console.log(library);


// Функция для удаления книги из библиотеки по названию
function removeBook(title) {
    library = library.filter(book => book.title !== title);
}
// Функция для поиска книг по автору и вывода списка всех книг этого автора
function findBooksByAuthor(author) {
    return library.filter(book => book.author === author);
}