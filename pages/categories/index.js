import GridList from "../../components/GridList";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <p>Liste aller Kategorien</p>
  <GridList>
    <li>
      <Link href="/categories/meerwasser">Meerwasser</Link>
    </li>
    <li>
      <Link href="/categories/muscheln">Muscheln</Link>
    </li>
  </GridList>
    </>
  );
}
