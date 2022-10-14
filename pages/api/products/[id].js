import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import { getProductById } from "../../../services/productServices";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const product = await getProductById(id);
      return response.status(200).json(product);
    case "PUT":
      const data = JSON.parse(request.body);
      const updatedProduct = await Product.findByIdAndUpdate(id, data);
      return response
        .status(200)
        .json({ message: "Product updated", updatedProduct: updatedProduct });
    case "DELETE":
      await Product.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ message: "Product deleted", deletedId: id });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
