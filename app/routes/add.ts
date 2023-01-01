import type { ActionArgs } from "@remix-run/node";
import { addToList } from "~/service/BookService";

export async function action({ request }: ActionArgs) {
  const isbn = await request.text();
  addToList(isbn);
  return true;
}
