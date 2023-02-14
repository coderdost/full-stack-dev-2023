const fs = require('fs');
const model = require('../model/product')
const mongoose = require('mongoose');
const Product = model.Product;

// Create
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save((err,doc)=>{
    console.log({err,doc})
    if(err){
      res.status(400).json(err);
    } else{
      res.status(201).json(doc);
    }
  })

  
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({price:{$gt:500}});
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await Product.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
