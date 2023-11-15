import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useBookDetail = routeLoader$(async (requestEvent) => {
  const bookId = requestEvent.params.bookId;
  console.log("bookId", bookId);
  return bookId;
});

export default component$(() => {
  const book = useBookDetail();
  return <>bookId: {book.value}</>;
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
