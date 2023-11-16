import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BookGridList } from "~/components/book-grid-list/book-grid-list";
import { ThemeToggle } from "~/components/theme-toggle/theme-toggle";

export default component$(() => {
  return (
    <>
      <div class="">
        <h1>Hi 👋</h1>
        <p>
          Can't wait to see what you build with qwik!
          <br />
          Happy coding.
        </p>
        <button class="btn">123</button>
      </div>
      <ThemeToggle />
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
