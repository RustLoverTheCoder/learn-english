import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { GlobalStore } from "~/context";
import {
  colorSchemeChangeListener,
  getColorPreference,
  setPreference,
} from "../theme-toggle/theme-toggle";

export const Header = component$(() => {
  const globalStore = useContext(GlobalStore);
  const pathname = useLocation().url.pathname;

  useVisibleTask$(() => {
    globalStore.theme = getColorPreference();
    return colorSchemeChangeListener((isDark) => {
      globalStore.theme = isDark ? "dark" : "light";
      setPreference(globalStore.theme);
    });
  });
  return <></>;
});
