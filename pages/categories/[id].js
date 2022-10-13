import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  getAllCategories,
  getCategoryById,
} from "../../services/categoriesServices";

export async function getStaticProps(ctx) {
  const { id } = ctx.params;
  const category = await getCategoryById(id);

  return {
    props: category,
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const listOfIds = categories.map((category) => category.id);

  return {
    paths: listOfIds.map((id) => ({ params: { id: id } })),
    fallback: false,
  };
}

export default function Categories({ name, description }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{`Kategorie: ${name}`}</title>
      </Head>
      <h1>Kategorie: {name}</h1>
      <p>{description}</p>
      <Link href={`/categories`}>Alle Kategorien</Link>
    </>
  );
}
