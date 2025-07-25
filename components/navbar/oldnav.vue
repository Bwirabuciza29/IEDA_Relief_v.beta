<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-cente text-black bg-white"
  >
    <header class="mj-container z-50 flex w-full items-center justify-between bg-white">
      <div class="relative flex items-center">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="Ieda Logo" class="h-12 sm:h-12 py-2 my-2 mr-4" />
        </NuxtLink>
        <div
          v-show="isLoading"
          class="loader absolute inset-0 z-0 flex items-center justify-center bg-white"
        ></div>
      </div>

      <!-- Menu Desktop -->
      <div class="flex-grow">
        <nav class="hidden justify-center space-x-6 font-semibold md:flex">
          <NuxtLink
            v-for="(item, index) in menuItem"
            :key="index"
            :to="localPath(item)"
            class="relative group duration-400 transform transition hover:scale-105 hover:text-green-400"
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
              @click="toggleDropdown"
              class="flex items-center gap-2 font-semibold text-black hover:text-green-400 transition"
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
              class="absolute flex flex-col bg-white border border-green-200 mt-2 w-40 duration-400 transform transition hover:scale-105"
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
          <div class="relative">
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
      </div>

      <!-- LangSwitcher à droite (visible sur desktop) -->
      <div class="flex items-center space-x-4">
        <LangSwitcher class="hidden md:block" />
        <NuxtLink
          :to="localPagePath('donation')"
          class="hidden md:block items-center bg-custom-green text-white px-4 py-1 border border-green-300 border-opacity-50 hover:bg-white hover:text-custom-green transition duration-200 ease-in-out"
        >
          {{ t("donation.btn_3") }}
        </NuxtLink>
      </div>

      <!-- Bouton Toggle Menu Mobile toujours visible -->
      <div class="flex items-center">
        <!-- LangSwitcher aligné à gauche -->
        <LangSwitchers class="block lg:hidden ml-8" />
        <!-- Bouton de menu avec marge à gauche -->
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
    </header>
  </div>
</template>

<script setup>
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
// État pour gérer l'ouverture via clic
const isDropdownOpen = ref(false);

// État pour détecter le survol
const isHovering = ref(false);

// Fonction pour basculer l'état du dropdown via clic
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Fonction pour fermer le dropdown
function closeDropdown() {
  isDropdownOpen.value = false;
}
// Les éléments du menu
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
    case t("menu.career"):
      return `${prefix}/career`;
    case t("menu.works"):
      return `${prefix}/works`;
    case t("menu.team"):
      return `${prefix}/team`;
    case t("menu.images"):
      return `${prefix}/images`;
    case t("menu.contact"):
      return `${prefix}/contact`;
    case t("menu.donation"):
      return `${prefix}/donation`;
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
// Vérification si le lien est actif
const isActiveLink = (path) => route.path === path;
const isLoading = ref(false);
watch(
  route,
  () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  },
  { immediate: true }
);
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
