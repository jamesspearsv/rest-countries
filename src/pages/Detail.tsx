import { useParams } from "react-router";

export default function DetailPage() {
  const { country } = useParams();
  return <h1>Detail page for {country}</h1>;
}
