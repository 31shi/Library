import React from 'react'

export default function AddBook ({ currentBook, handleChange, handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title"
                    value={currentBook.title} 
                    onChange={handleChange} 
                    placeholder="title"
                />
                <input 
                    type="text" 
                    name="author"
                    value={currentBook.author} 
                    onChange={handleChange} 
                    placeholder="author"
                />
                <input 
                    type="submit" 
                    value="add" 
                    onClick={handleSubmit}
                    className="add-btn"
                />
            </form>
        </div>
    )
}