import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import landingStyles from "~/styles/landing.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: landingStyles },
  ];
};

export default function Home() {
  return (
  <section className="landing">
    <img src="/book.jpeg" alt="book" />
    <h1>Read more in 2023</h1>

    <nav>
      <Link to={"/hardcover-fiction"}>
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