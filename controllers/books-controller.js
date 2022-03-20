const Book = require("../model/Book");

const getAllBooks = async (req,res,next)=>{
    let books;
    try{
        books = await Book.find();
    } catch(err){
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message:"No products found"})
    }
    return res.status(200).json({books});
};

const getById = async(req,res,next) => {
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"Book not found"});
    }
    return res.status(200).json({book});
};

const addBook = async (req,res,next)=>{
    const {name,image,description,qty,unitprice} = req.body;
    let book;
    try{
        book = new Book({
            name,
            image,
            description,
            qty,
            unitprice

        });
        await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:'Unable to add book'})
    }
    return res.status(201).json({book});
};

const updateBook = async (req,res,next) => {
    const id = req.params.id;
    const {name,image,description,qty,unitprice} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            image,
            description,
            qty,
            unitprice
        });
        book = await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:'Unable to update book'})
    }
    return res.status(200).json({book});

};

const deleteBook = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Product successfulyy deleted"});
};


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;