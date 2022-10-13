import GridList from "../../components/GridList";
import Link from "next/link";
import { getAllCategories } from "../../services/categoriesServices";

export async function getStaticProps() {
  const categories = await getAllCategories();
  return {
    props: { categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <h1>Categories</h1>
      <p>Liste aller Kategorien</p>
      <GridList>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </GridList>
    </>
  );
}
