import { useLoaderData } from "@remix-run/react";
import { fetchList, fetchListNames } from "~/service/BookService";
import type {BookDto} from "~/service/BookService";
import Book from "~/components/Book";
import { AutoComplete } from "antd";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import movieListStyles from "~/styles/movie-list.css";

interface Option {
  value: string;
  encoded: string;
}

interface RouteData {
  books: BookDto[],
  lists: Option[]
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: movieListStyles },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  return {
    books: await fetchList(params.list ?? "hardcover-fiction"),
    lists: (await fetchListNames()).map(it => ({
      value: it.display_name,
      encoded: it.list_name_encoded
    }))
  }
};

export default function MovieList() {
  const data = useLoaderData() as RouteData;

  function viewList(option: Option) {
    window.location.href = `/${option.encoded}`;
  }

  return (
  <section>
    <header>
      <AutoComplete
        size="large"
        options={data.lists}
        placeholder="Best selling list"
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={(val, op) => viewList(op)}
      />
    </header>

    <ul>
      {data.books.map(it => <li key={it.primary_isbn10}>
        <Book book={it} />
      </li>)}
    </ul>
  </section>);
}