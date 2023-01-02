export const BookApiKey = "";
export const BookApiPath = "https://api.nytimes.com/svc/books/v3";

export const IsbnApiKey = "";
export const IsbnApiPath = "https://api2.isbndb.com";

export interface ListDto {
  display_name: string;
  list_name_encoded: string;
}

export interface BookDto {
  rank: number;
  title: string;
  author: string;
  book_image: string;
  description: string;
  amazon_product_url: string;
  primary_isbn10: string;
  primary_isbn13: string;
}

export interface BookDetailsDto {
  title: string;
  isbn13: string;
  language: string;
  date_published: string;
  pages: number;
  image: string;
  excerpt: string;
  synopsis: string;
  subjects: string[];
  authors: string[];
  reviews: string[];
}

export async function fetchList(name: string): Promise<BookDto[]> {
  const response = await fetch(
    `${BookApiPath}/lists/current/${name}.json?api-key=${BookApiKey}`,
  );
  const data = await response.json();
  console.log(data);
  return data?.results?.books ?? [];
}

export async function fetchListNames(): Promise<ListDto[]> {
  const response = await fetch(
    `${BookApiPath}/lists/names.json?api-key=${BookApiKey}`,
  );
  const data = await response.json();
  return data.results;
}

export async function getBookDetails(isbn: string): Promise<BookDetailsDto> {
  const response = await fetch(
    `${IsbnApiPath}/book/${isbn}`,
    {
      headers: {
        Authorization: IsbnApiKey,
      },
    },
  );
  const data = await response.json();
  return data.book;
}

export async function addToList(isbn: string) {
  // Prisma integration
}
