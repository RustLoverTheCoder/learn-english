import { component$ } from "@builder.io/qwik";

export const SearchHeader = component$(() => {
  return (
    <>
      <div class="flex h-auto w-full">
        <div
          class="flex min-h-[30rem] w-full flex-col items-center justify-center px-4 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.dribbble.com/users/415360/screenshots/17301380/media/7f1296f15bbb1622666a5f105bef4cc5.png")',
          }}
        >
          <div class="form-control flex w-full items-center justify-center">
            <input
              type="search"
              placeholder="Search"
              class="input input-bordered w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
});
