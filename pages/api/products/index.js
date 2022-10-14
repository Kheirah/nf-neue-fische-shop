import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import { getAllProducts } from "../../../services/productServices";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const products = await getAllProducts();
      return response.status(200).json(products);
    case "POST":
      const postData = JSON.parse(request.body);
      const newProduct = await Product.create(postData);
      return response.status(201).json({
        message: "Product created successfully",
        createdId: newProduct.id,
      });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}