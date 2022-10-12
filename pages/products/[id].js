import { getProductById } from "../../services/productServices";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const product = await getProductById(id);

  return {
    props: product,
  };
}

export default function Product({ name, description, price, category }) {
  return (
    <>
      <Head>
        <title>Product: {name}</title>
      </Head>
      <h1>Produkt {name}</h1>
      <p>Preis: {price}</p>
      <h2>Details</h2>
      <Table>
        <tbody>
          <tr>
            <TdBold>Beschreibung:</TdBold>
            <td>{description}</td>
          </tr>
          <tr>
            <TdBold>Kategorie:</TdBold>
            <td>{category}</td>
          </tr>
        </tbody>
      </Table>
      <Link href={`/products`}>Alle Produkte</Link>
    </>
  );
}

const Price = styled.p`
  font-size: 1.5rem;
`;

const Table = styled.table`
  font-size: 0.9rem;
  text-align: left;
  text-align: left;
  max-width: 40rem;
  margin-bottom: 2rem;
`;

const TdBold = styled.td`
  vertical-align: baseline;
  font-weight: bold;
  display: block;
  margin-right: 2rem;
  padding-left: 0;
`;
