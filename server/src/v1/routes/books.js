const express = require('express');
const router = express.Router();
const Book = require("../models/book");

router.post('/', async (req, res) => {
    try {
        //DBに保存
        const book = await new Book(req.body).save();
        res.send(book);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        //DBからデータを取得
        const books = await Book.find();
        res.send(books);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        //データを更新
        const book = await Book.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(book);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        //データを削除
        const book = await Book.findByIdAndDelete(req.params.id);
        res.send(book);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;