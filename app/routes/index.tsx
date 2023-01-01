import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import movieListStyles from "~/styles/movie-list.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: movieListStyles },
  ];
};

export default function Home() {
  return (
  <section>
    <h1>Read more in 2023</h1>

    <nav>
      <Link to={"/hardcover-fiction"}>
        <label>Hardcover</label>
        <strong>Fiction</strong>
      </Link>
      <Link to={"/business-books"}>
        <strong>Business</strong>
      </Link>
      <Link to={"/science"}>
        <strong>Science</strong>
      </Link>
    </nav>
   
  </section>);
}