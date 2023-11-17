import { component$ } from "@builder.io/qwik";

export const BookDetail = component$(() => {
  return (
    <div class="h-auto w-full">
      <div class="container relative mx-auto flex flex-col items-center">
        <div class="h-[20rem] w-full"></div>
        <div class="prose dark:prose-invert">
          It is the morning of the reaping that will kick off the 10th annual
          Hunger Games. In the Capitol, 18-year-old Coriolanus Snow is preparing
          for his one shot at glory as a mentor in the Games. The once-mighty
          house of Snow has fallen on hard times, its fate hanging on the
          slender chance that Coriolanus will be able to out charm, outwit, and
          outmaneuver his fellow students to mentor the winning tribute. The
          odds are against him. He’s been given the humiliating assignment of
          mentoring the female tribute from District 12, the lowest of the low.
          Their fates are now completely intertwined - every choice Coriolanus
          makes could lead to favor or failure, triumph or ruin. Inside the
          arena, it will be a fight to the death. Outside the arena, Coriolanus
          starts to feel for his doomed tribute...and must weigh his need to
          follow the rules against his desire to survive no matter what it
          takes. ©2020 Suzanne Collins (P)2020 Scholastic Inc.
        </div>
      </div>
    </div>
  );
});
