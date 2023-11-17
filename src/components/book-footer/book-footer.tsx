import { component$ } from "@builder.io/qwik";
import PlayIcon from "/icons/play.svg";
import SkipBack from "/icons/skip-back.svg";
import SkipForward from "/icons/skip-forward.svg";

export const BookFooter = component$(() => {
  return (
    <footer class="fixed bottom-0 left-0 right-0 z-10 flex h-[72px] items-center justify-between border-t bg-white px-6">
      <div class="h-14 w-[30%] min-w-[180px] bg-black/10"></div>
      <div class="flex h-14 w-[40%] max-w-[722px] flex-col items-center justify-center space-y-2">
        <div class="flex items-center space-x-4">
          <button class="btn btn-sm btn-ghost btn-circle">
            <img
              src={SkipBack}
              alt="SkipBack"
              class="h-4 w-4"
              width={16}
              height={16}
            />
          </button>
          <button class="btn btn-circle btn-sm flex items-center justify-center hover:scale-110">
            <img
              src={PlayIcon}
              alt="play"
              class="h-4 w-4"
              width={16}
              height={16}
            />
          </button>
          <button class="btn btn-sm btn-ghost btn-circle">
            <img
              src={SkipForward}
              alt="SkipForward"
              class="h-4 w-4"
              width={16}
              height={16}
            />
          </button>
        </div>
        <div class="flex w-full items-center space-x-2">
          <div></div>
          <div class='flex-1 relative'>
            <div class='w-full rounded-full h-2 bg-black/10'></div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="h-14 w-[30%] min-w-[180px] bg-black/10"></div>
    </footer>
  );
});
