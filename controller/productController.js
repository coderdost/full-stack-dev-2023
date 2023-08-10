const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
}

const getProducts = (req, res) => {
    res.json(products);
}

const getProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product);
}

const replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(201).json(products);
}

const updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json(products);
}

const deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.status(201).json(product);
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    replaceProduct,
    deleteProduct
}