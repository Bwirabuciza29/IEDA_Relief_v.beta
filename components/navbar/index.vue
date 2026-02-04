<template>
  <div class="w-full fixed top-0 left-0 z-50 bg-green-50 border-b border-gray-200">
    <div class="flex mj-container">
      <!-- Logo à gauche -->
      <nuxtLink
        to="/"
        class="flex items-center px-2 py-2 shrink-0 border border-custom-green"
      >
        <img src="/img/ie.png" alt="Ieda Relief" class="h-24" />
      </nuxtLink>
      <nav
        class="md:hidden px-4 py-3 text-sm font-medium flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
      >
        <!-- Antenne -->

        <div
          v-show="isLoading"
          class="loader absolute inset-0 z-0 flex items-center justify-center"
        ></div>

        <!-- Langue + Contacts -->
        <div class="flex justify-end sm:justify-start items-center w-full">
          <!-- <LangSwitcher class="w-full ml-4" /> -->
          <ul class="space-y-2">
            <li>
              <div class="relative" ref="dropdownRef">
                <button
                  @click.stop.prevent="toggleDropdown"
                  class="flex items-center space-x-1 px-2 py-2 bg-custom-green text-white transition duration-200"
                >
                  <span>{{ selectedPays }}</span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>

                <!-- Dropdown animé -->
                <transition
                  name="fade-slide"
                  enter-active-class="transition duration-200 ease-out"
                  leave-active-class="transition duration-150 ease-in"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-2"
                >
                  <ul
                    v-if="dropdownOpen"
                    class="absolute z-50 top-full left-0 mt-2 w-40 bg-white text-custom-green border rounded shadow-md"
                  >
                    <li
                      v-for="p in paysList"
                      :key="p"
                      @click="selectPays(p)"
                      class="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      :class="selectedPays === p ? 'bg-custom-green text-white' : ''"
                    >
                      {{ p }}
                    </li>
                  </ul>
                </transition>
              </div>
            </li>
            <li>
              <div>
                <LangSwitcher class="w-full" />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Contenu nav à droite -->
      <div class="flex flex-col flex-1 justify-between w-full">
        <!-- Ligne du haut -->
        <nav
          class="hidden md:flex items-center justify-between border-b px-4 py-2 text-sm font-medium"
        >
          <!-- Antenne -->
          <div
            class="relative flex items-center text-gray-700 space-x-2"
            ref="dropdownRef"
          >
            <span class="text-custom-green">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span> {{ t("list.title") }}</span>
            <span class="text-gray-400">
              <i class="fa-solid fa-arrow-right text-xs text-gray-500"></i>
            </span>

            <!-- Bouton toggle -->
            <div class="relative inline-block" ref="dropdownRef">
              <button
                @click.stop="toggleDropdown"
                class="text-custom-green cursor-pointer flex items-center space-x-1"
              >
                <span>{{ selectedPays }}</span>
                <i class="fas fa-chevron-down text-xs text-gray-500"></i>
              </button>

              <!-- Dropdown animé -->
              <transition
                name="fade-slide"
                enter-active-class="transition duration-200 ease-out"
                leave-active-class="transition duration-150 ease-in"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <ul
                  v-if="dropdownOpen"
                  class="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-md z-50"
                >
                  <li
                    v-for="p in paysList"
                    :key="p"
                    @click="selectPays(p)"
                    class="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    :class="selectedPays === p ? 'bg-green-500 text-white' : ''"
                  >
                    {{ p }}
                  </li>
                </ul>
              </transition>
            </div>

            <!-- Loading -->
            <div
              v-show="isLoading"
              class="loader absolute inset-0 z-0 flex items-center justify-center"
            ></div>
          </div>

          <!-- Langue + Contacts -->
          <div class="flex items-center space-x-3">
            <LangSwitcher class="hidden md:block" />
            <div
              class="relative flex items-center space-x-2 text-gray-700"
              ref="dropdownRef"
            ></div>
            <div class="bg-white border border-green-200 p-1.5">
              <a
                href="tel:+17137742522"
                class="flex items-center space-x-2 text-custom-green font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span>Contacts</span>
              </a>
            </div>
          </div>
        </nav>

        <div class="flex items-center justify-between px-4 py-2">
          <nav class="hidden items-start ml-4 space-x-6 font-semibold md:flex">
            <NuxtLink
              v-for="(item, index) in menuItem"
              :key="index"
              :to="localPath(item)"
              class="relative group text-gray-500 duration-400 transform transition hover:scale-105 hover:text-green-400"
              :class="{
                'text-green-500': isActiveLink(localPath(item)),
              }"
            >
              {{ item }}
              <span
                class="absolute left-0 bottom-0 h-[2px] w-0 bg-green-400 transition-all duration-500 group-hover:w-full"
              ></span>
            </NuxtLink>
            <div class="relative group">
              <!-- Bouton qui contrôle le menu -->
              <button
                @click="toggleDropdowns"
                class="flex items-center gap-2 font-semibold text-gray-500 hover:text-green-400 transition"
              >
                {{ t("footer.title") }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-green-400 transition-all duration-500 group-hover:w-full"
                ></span>
                <!-- Icône Font Awesome dynamique -->
                <i
                  class="fas transform transition-all duration-300 ease-in-out text-sm"
                  :class="{
                    'fa-chevron-up': isDropdownOpen || isHovering,
                    'fa-chevron-down': !(isDropdownOpen || isHovering),
                    'rotate-180': isDropdownOpen || isHovering,
                    'rotate-0': !(isDropdownOpen || isHovering),
                  }"
                ></i>
              </button>

              <!-- Dropdown avec animation -->
              <div
                @mouseenter="isHovering = true"
                @mouseleave="isHovering = false"
                v-show="isDropdownOpen || isHovering"
                class="absolute text-gray-500 flex flex-col bg-white border border-green-200 mt-2 w-40 duration-400 transform transition hover:scale-105"
                :class="{
                  'opacity-100 scale-100': isDropdownOpen || isHovering,
                  'opacity-0 scale-95': !(isDropdownOpen || isHovering),
                }"
              >
                <!-- Lien "Work" -->
                <NuxtLink
                  :to="localPath(t('menu.team'))"
                  class="px-4 py-2 hover:bg-green-100 hover:text-green-400"
                  :class="{
                    'text-green-500': isActiveLink(localPath(t('menu.team'))),
                  }"
                  @click="closeDropdown"
                >
                  {{ t("menu.team") }}
                </NuxtLink>

                <!-- Lien "News" -->
                <NuxtLink
                  :to="localPath(t('menu.images'))"
                  class="px-4 py-2 hover:bg-green-100 hover:text-green-400"
                  :class="{
                    'text-green-500': isActiveLink(localPath(t('menu.images'))),
                  }"
                  @click="closeDropdown"
                >
                  {{ t("menu.images") }}
                </NuxtLink>
                <NuxtLink
                  :to="localPath(t('menu.works'))"
                  class="px-4 py-2 hover:bg-green-100 hover:text-green-400"
                  :class="{
                    'text-green-500': isActiveLink(localPath(t('menu.works'))),
                  }"
                  @click="closeDropdown"
                >
                  {{ t("menu.works") }}
                </NuxtLink>
              </div>
            </div>
            <div class="relative text-gray-500">
              <NuxtLink
                :to="localPath(t('menu.contact'))"
                @click="closeDropdown"
                :class="{
                  'text-green-500': isActiveLink(localPath(t('menu.contact'))),
                }"
                class="group relative inline-block duration-400 transform transition hover:scale-105 hover:text-green-400"
              >
                {{ t("menu.contact") }}
                <span
                  class="absolute left-0 bottom-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </div>
          </nav>
          <div class="flex items-center space-x-4">
            <NuxtLink
              :to="localPagePath('donation')"
              class="hidden md:block items-center bg-custom-green text-white px-4 py-1 border border-green-300 border-opacity-50 hover:bg-white hover:text-custom-green transition duration-200 ease-in-out"
            >
              {{ t("donation.btn_3") }}
            </NuxtLink>
          </div>
        </div>
        <!-- Bouton Toggle Menu Mobile toujours visible -->
        <div class="flex items-center">
          <button
            @click="toggleMenu"
            class="fixed right-4 top-6 z-50 text-green-500 md:hidden p-2 -mt-4 bg-green-100"
          >
            <!-- SVG pour le bouton du menu -->
            <svg
              v-if="!menuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Menu Mobile -->
        <transition name="fade">
          <nav
            v-if="menuOpen"
            class="fixed h-auto inset-0 z-40 m-4 flex flex-grow flex-col items-center space-y-6 rounded-lg border border-gray-300 bg-gradient-to-b from-white via-white/70 to-white/40 p-8 backdrop-blur-md transition-transform duration-300 ease-out"
          >
            <NuxtLink
              v-for="(item, index) in menuItems"
              :key="index"
              :to="localPath(item)"
              @click="closeMenu"
              class="font-semibold text-green-400 hover:text-green-400 hover:underline text-2xl
  transition-opacity duration-300 opacity-0 animate-fadeIn delay-{{
    index * 100
  }}"
              :class="{
                'text-green-500 underline': isActiveLink(localPath(item)),
              }"
            >
              {{ item }}
            </NuxtLink>
            <NuxtLink
              :to="localPagePath('donation')"
              class="flex items-center bg-custom-green text-white px-4 py-1 border border-green-300 border-opacity-50 hover:bg-white hover:text-custom-green transition duration-200 ease-in-out"
            >
              {{ t("donation.btn_3") }}
            </NuxtLink>
          </nav>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from "vue";
const { t, locale } = useI18n();
const route = useRoute();

const { paysList, selectedPays, dropdownOpen, toggleDropdown, selectPays } = usePays();
/* -----------------------------------
   MENU MOBILE
----------------------------------- */

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

/* -----------------------------------
   CLICK OUTSIDE DROPDOWN
----------------------------------- */

const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
};

/* -----------------------------------
   MENU FOOTER DROPDOWN
----------------------------------- */

const isDropdownOpen = ref(false);
const isHovering = ref(false);

const toggleDropdowns = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

/* -----------------------------------
   MENU ITEMS
----------------------------------- */

const menuItem = computed(() => [
  t("menu.home"),
  t("menu.about"),
  t("menu.news"),
  t("menu.pages"),
  t("menu.career"),
]);

const menuItems = computed(() => [
  t("menu.home"),
  t("menu.about"),
  t("menu.works"),
  t("menu.pages"),
  t("menu.career"),
  t("menu.team"),
  t("menu.images"),
  t("menu.news"),
  t("menu.contact"),
]);

/* -----------------------------------
   ROUTING MULTI LANGUE
----------------------------------- */

const localPath = (item) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;

  switch (item) {
    case t("menu.home"):
      return `${prefix}/`;
    case t("menu.about"):
      return `${prefix}/about`;
    case t("menu.works"):
      return `${prefix}/works`;
    case t("menu.pages"):
      return `${prefix}/pages`;
    case t("menu.career"):
      return `${prefix}/career`;
    case t("menu.team"):
      return `${prefix}/team`;
    case t("menu.images"):
      return `${prefix}/images`;
    case t("menu.contact"):
      return `${prefix}/contact`;
    case t("menu.news"):
      return `${prefix}/news`;
    default:
      return `${prefix}/`;
  }
};

const localPagePath = (route) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return `${prefix}/${route}`;
};

const isActiveLink = (path) => {
  return route.path === path || route.fullPath === path;
};

/* -----------------------------------
   LOADER ROUTE
----------------------------------- */

const isLoading = ref(false);

watch(
  route,
  () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 800);
  },
  { immediate: true }
);

/* -----------------------------------
   INIT
----------------------------------- */

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Loader Styles */
.loader {
  z-index: 99 !important;
  width: 36px;
  height: 36px;
  display: block;
  margin: 10px auto;
  position: relative;
  color: #f0efef;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  -webkit-animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: #055fc5;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
  -webkit-transform: scale(0.5) translate(0, 0);
  -moz-transform: scale(0.5) translate(0, 0);
  -ms-transform: scale(0.5) translate(0, 0);
  -o-transform: scale(0.5) translate(0, 0);
}

.loader::before {
  background-color: #02ab4b;
  transform: scale(0.5) translate(-36px, -36px);
  -webkit-transform: scale(0.5) translate(-36px, -36px);
  -moz-transform: scale(0.5) translate(-36px, -36px);
  -ms-transform: scale(0.5) translate(-36px, -36px);
  -o-transform: scale(0.5) translate(-36px, -36px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
