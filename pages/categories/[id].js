import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Kategorie {id}</h1>;
}
