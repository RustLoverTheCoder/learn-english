import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { GlobalStore } from "~/context";
import {
  ThemeToggle,
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
  return (
    <>
      <div class="relative">
        <div class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <a href="#" class="flex">
              <span class="sr-only">Workflow</span>
              <img
                width="35"
                height="32"
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <nav class="flex space-x-10">
              <div class="group relative">
                <button
                  type="button"
                  class="group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-expanded="false"
                >
                  <span>Solutions</span>
                  <svg
                    class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div class="absolute z-10 -ml-4 mt-3 hidden w-screen max-w-md transform group-hover:block lg:max-w-3xl">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Analytics
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Engagement
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Your customers&#039; data will be safe and secure.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Integrations
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Connect with third-party tools that you&#039;re
                            already using.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Automations
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            Reports
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            Get detailed reports that will help you make more
                            informed decisions
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="bg-gray-50 p-5 sm:p-8">
                      <a
                        href="#"
                        class="-m-3 flow-root rounded-md p-3 hover:bg-gray-100"
                      >
                        <div class="flex items-center">
                          <div class="text-base font-medium text-gray-900">
                            Enterprise
                          </div>
                          <span class="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                            {" "}
                            New{" "}
                          </span>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">
                          Empower your entire team with even more advanced
                          tools.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Pricing{" "}
              </a>
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Docs{" "}
              </a>

              <div class="group relative">
                <button
                  type="button"
                  class="group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-expanded="false"
                >
                  <span>More</span>
                  <svg
                    class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div class="absolute left-1/2 z-10 mt-3 hidden w-screen max-w-xs -translate-x-1/2 transform px-2 group-hover:block sm:px-0">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="#"
                        class="-m-3 block rounded-md p-3 hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Help Center
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get all of your questions answered in our forums or
                          contact support.
                        </p>
                      </a>

                      <a
                        href="#"
                        class="-m-3 block rounded-md p-3 hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Guides
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Learn how to maximize our platform to get the most out
                          of it.
                        </p>
                      </a>

                      <a
                        href="#"
                        class="-m-3 block rounded-md p-3 hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Events
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </a>

                      <a
                        href="#"
                        class="-m-3 block rounded-md p-3 hover:bg-gray-50"
                      >
                        <p class="text-base font-medium text-gray-900">
                          Security
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Understand how we take your privacy seriously.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div class="flex items-center md:ml-12 space-x-8">
              <ThemeToggle />
              <a
                href="#"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {" "}
                Sign in{" "}
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                {" "}
                Sign up{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pb-6 pt-5">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    width={35}
                    height={32}
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-6">
                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Analytics
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Engagement
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Security
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Integrations
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Automations
                    </div>
                  </a>

                  <a
                    href="#"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      Reports
                    </div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6">
              <div class="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Docs{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Enterprise{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Help Center{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Guides{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Events{" "}
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {" "}
                  Security{" "}
                </a>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  {" "}
                  Sign up{" "}
                </a>
                <p class="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" class="text-indigo-600 hover:text-indigo-500">
                    {" "}
                    Sign in{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
