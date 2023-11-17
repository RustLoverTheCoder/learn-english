import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BookGridList } from "~/components/book-grid-list/book-grid-list";
import { SearchHeader } from "~/components/search-header/search-header";

export default component$(() => {
  return (
    <>
      <SearchHeader />
      <BookGridList />
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
