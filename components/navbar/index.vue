<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-cente text-black bg-white"
  >
    <header class="mj-container z-50 flex w-full items-center justify-between">
      <NuxtLink to="/">
        <img
          src="/img/logo.png"
          alt="Maajabu Logo"
          class="h-12 sm:h-12 py-2 my-2"
        />
      </NuxtLink>
      <!-- Menu Desktop -->
      <div class="flex-grow">
        <nav class="hidden justify-center space-x-6 font-semibold md:flex">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="localPath(item)"
            class="duration-400 transform transition hover:scale-105 hover:text-green-400 hover:underline"
            :class="{
              'text-green-500 underline': isActiveLink(localPath(item)),
            }"
          >
            {{ item }}
          </NuxtLink>
        </nav>
      </div>

      <!-- LangSwitcher à droite (visible sur desktop) -->
      <LangSwitcher class="hidden md:block" />

      <!-- Bouton Toggle Menu Mobile toujours visible -->
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

      <!-- Menu Mobile -->
      <transition name="fade">
        <nav
          v-if="menuOpen"
          class="fixed h-96 inset-0 z-40 m-4 flex flex-grow flex-col items-center space-y-6 rounded-lg border border-gray-300 bg-gradient-to-b from-white via-white/70 to-white/40 p-8 backdrop-blur-md transition-transform duration-300 ease-out"
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

          <LangSwitcher class="mt-4 block md:hidden" />
        </nav>
      </transition>
    </header>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const route = useRoute();
const menuOpen = ref(false);

// Méthode pour basculer l'état du menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Fonction pour fermer le menu
const closeMenu = () => {
  menuOpen.value = false;
};

// Les éléments de menu, calculés en fonction de la langue actuelle
const menuItems = computed(() => [
  t("menu.home"),
  t("menu.about"),
  t("menu.works"),
  t("menu.pages"),
  t("menu.team"),
  t("menu.contact"),
]);

// Fonction de gestion des liens avec la langue actuelle
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
    case t("menu.team"):
      return `${prefix}/team`;
    case t("menu.contact"):
      return `${prefix}/contact`;
    case t("menu.donation"):
      return `${prefix}/donation`;

    default:
      return `${prefix}/`;
  }
};

// Vérification si le lien est actif
const isActiveLink = (path) => route.path === path;
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
