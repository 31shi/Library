import { useEffect, useState } from "react";
import {
  addBook,
  getBooks,
  upDateBook,
  deleteBook,
} from "./components/bookServices";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";


export default function Book() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({
    title: '',
    author: '',
  });
  
  //アクセス時にリストを取得
  useEffect(() => {
    async function fetchData() {
        try {
            const {data} = await getBooks();
            setBooks(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    setCurrentBook({
      ...currentBook,
      [target.name]: target.value, // 入力要素の名前をキーとして値を設定
    });
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const originalBooks = [...books];
    try {
        const { data } = await addBook({ 
          title: currentBook.title,
          author: currentBook.author,
        });
        const updatedBooks = [...originalBooks, data];
        setBooks(updatedBooks);
        setCurrentBook({
          title: '',
          author: '',
        });
    } catch (error) {
        console.log(error);
    }
  }

  const handleUpdate = async (currentBookId) => {
    const originalBooks = [...books];
    try {
        const updatedBooks = [...originalBooks];
        const index = updatedBooks.findIndex(book => book.id === currentBookId);
        updatedBooks[index] = { ...updatedBooks[index] };
        updatedBooks[index].completed = !updatedBooks[index].completed;
        setBooks(updatedBooks);
        await upDateBook(currentBookId, { completed: updatedBooks[index].completed });
    } catch (error) {
        setBooks(originalBooks);
        console.log(error);
    }
  }

  const handleDelete = async (currentBookId) => {
    const originalBooks = [...books];
    try {
        await deleteBook(currentBookId);
        const updatedBooks = originalBooks.filter(book => book.id !== currentBookId);
        setBooks(updatedBooks);
    } catch (error) {
        setBooks(originalBooks);
        console.log(error);
    }
  }

  return (
    <div className="collectionList">
      <h1>My library</h1>
      <div>
        <div>
          <AddBook 
            currentBook={currentBook}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <BookList 
            books={books}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}
