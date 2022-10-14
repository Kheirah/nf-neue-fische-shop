import { getProductById } from "../../services/productServices";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Button from "../../components/Button";
import { router } from "next/router";

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const product = await getProductById(id);

  return {
    props: product,
  };
}

export default function Product({ id, name, description, price, category }) {
  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    await response.json();
    router.push("/products");
  }

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
      <Section>
        <h2>Admin Optionen</h2>
        <Link href={`/products/${id}/update`}>Produkt bearbeiten</Link>
        <Button type="button" onClick={handleDelete}>
          Produkt löschen
        </Button>
      </Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--text-primary);
  width: 20rem;
`;
