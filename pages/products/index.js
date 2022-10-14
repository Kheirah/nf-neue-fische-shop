import GridList from "../../components/GridList";
import Link from "next/link";
import Head from "next/head";
import { getAllProducts } from "../../services/productServices";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Alle Produkte</title>
      </Head>
      <h1>Products</h1>
      <p>Liste alle Produkte</p>
      <GridList>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </GridList>
      <Link href={`/products/create`}>Produkt hinzufügen</Link>
    </>
  );
}
