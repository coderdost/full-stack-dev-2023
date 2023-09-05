const model = require('../model/product')

console.log(model.Product);
const Product = model.Product;

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const dbResponse = await product.save();
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(201).json(error);
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const dbResponse = await Product.find();
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(201).json(error);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbResponse = await Product.findById(id);
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(201).json(error);
  }
};

exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbResponse = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbResponse = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const dbResponse = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(dbResponse);
  }
  catch (error) {
    res.status(400).json(error);
  }
};
