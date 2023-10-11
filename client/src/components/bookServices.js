import axios from "axios";
const apiUrl = "http://localhost:5000/api/books";

export function getBooks() {
    return axios.get(apiUrl);
}

export function addBook(book) {
    return axios.post(apiUrl, book);
}

export function upDateBook(id, book) {
    return axios.put(apiUrl + "/" + id, book);
}

export function deleteBook(id) {
    return axios.delete(apiUrl + "/" + id);
}