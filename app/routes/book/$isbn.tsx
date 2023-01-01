import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { getBookDetails } from "~/service/BookService";
import type { BookDetailsDto } from "~/service/BookService";
import { useLoaderData } from "@remix-run/react";
import { Tag } from "antd";
import isbnStyles from "~/styles/isbn.css";

interface RouteData {
  book: BookDetailsDto
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: isbnStyles },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  return {
    book: await getBookDetails(params.isbn!)
  };
};

export default function IsbnPage() {
  const {book} = useLoaderData() as RouteData;

  return <article>
    <img src={book.image} alt={book.title} />
    <h1>{book.title}</h1>
    <h4>{book.authors[0]}</h4>

    <ul>
      {book
      ?.subjects
      ?.map(it => <li key={it}><Tag>{it}</Tag></li>)}
    </ul>

    <p>{book.synopsis}</p>
  </article>
}