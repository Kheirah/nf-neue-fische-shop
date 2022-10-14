import dbConnect from "../lib/dbConnect";
import Product from "../models/Product";

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate("category");

  return products.map(({ id, name, description, price, category }) => ({
    id,
    name,
    description,
    price,
    category: category.name,
  }));
}

export async function getProductById(productId) {
  await dbConnect();

  const product = await Product.findById(productId).populate("category");

  const { id, name, description, price, category } = product;

  return { id, name, description, price, category: category.name };
}
