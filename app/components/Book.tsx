import { Link } from "@remix-run/react";
import { Button } from "antd";
import type { BookDto } from "~/service/BookService";

export interface BookProps {
  book: BookDto;
}

export default function Book({book}: BookProps) {

  function add() {
    fetch("/add", {
      method: "POST",
      body: book.primary_isbn13
    });
  }

  return <article>
    <div className="cover">
      <img src={book.book_image} alt={book.title} />
      <Button size="large" type="primary" onClick={add}>+</Button>
    </div>
    
    <Link to={`/book/${book.primary_isbn13}`}><h3>{book.title.toLowerCase()}</h3></Link>
    
    <h4>{book.author}</h4>
    <p>{book.description}</p>
  </article>
}