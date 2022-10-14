import dbConnect from "../lib/dbConnect";
import Category from "../models/Category";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  return categories.map(({ id, name, description }) => ({
    id,
    name,
    description,
  }));
}

export async function getCategoryById(categoryId) {
  await dbConnect();

  const category = await Category.findById(categoryId);

  const { id, name, description } = category;

  return { id, name, description };
}
