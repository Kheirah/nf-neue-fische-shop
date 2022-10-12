import GridList from "../../components/GridList";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <p>Liste alle Produkte</p>
      <GridList>
        <li>
          <Link href="/products/guppy">Guppy</Link>
        </li>
        <li>
          <Link href="/products/Regenbogenfisch">Regenbogenfisch</Link>
        </li>
      </GridList>
    </>
  );
}
