import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { BookDetail } from "~/components/book-detail/book-detail";
import { BookFooter } from "~/components/book-footer/book-footer";

export const useBookDetail = routeLoader$(async (requestEvent) => {
  const bookId = requestEvent.params.bookId;
  console.log("bookId", bookId);
  return bookId;
});

export default component$(() => {
  const book = useBookDetail();
  console.log("book", book.value);
  return (
    <>
      <BookDetail />
      <BookFooter />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
