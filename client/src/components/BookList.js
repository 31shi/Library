import React from 'react'

export default function BookList ({ books, handleDelete }) {
    return (
        <div className="list">
            {books.map((book) => (
                <div key={book._id}  className="list-item">
                <div className="book-info">
                    <span className="title">{book.title}</span>
                    <span className="author">{book.author}</span>
                </div>
                <input 
                    type="submit" 
                    value="delete" 
                    onClick={() => handleDelete(book._id)}
                    className="delete-btn"
                />
                </div>
            ))}
        </div>
    )
}