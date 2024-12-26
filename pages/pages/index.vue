<template>
  <section class="bg-green-50">
    <!-- Header Section -->
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block z-10"
      />
      <div class="mj-container">
        <div
          class="relative flex flex-col md:flex-row rounded-lg overflow-hidden"
        >
          <div class="flex-1 p-6 md:p-8">
            <h1 class="text-4xl text-white font-bold mb-2">
              {{ t("operation.title") }}
            </h1>
            <nav class="text-sm text-black">
              <div class="inline-block bg-white p-3 rounded-lg">
                <a href="/" class="hover:underline font-semibold">
                  {{ t("operation.sub_title") }}/
                </a>
                <span> {{ t("operation.title") }}</span>
              </div>
            </nav>
          </div>
          <div class="flex-1 hidden md:flex">
            <img
              src="/img/o2.jpg"
              class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div class="mj-container my-6 text-center">
      <div class="text-center">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          {{ t("operation.op") }}
        </p>
        <h1 class="text-3xl font-semibold">
          {{ t("operation.ti_1") }}
          <span class="font-sri"> {{ t("operation.op") }} </span>
        </h1>
      </div>
      <div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
        <button
          v-for="(filter, index) in filters"
          :key="index"
          :class="[
            'px-5 py-2 md:px-6 md:py-2 rounded-lg font-medium text-sm md:text-base',
            activeFilter === filter.value
              ? 'bg-custom-green text-white hover:bg-green-600'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
          ]"
          @click="applyFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="mj-container my-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div
          v-for="(card, index) in filteredCards"
          :key="index"
          class="flex bg-white rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
        >
          <!-- Section Image -->
          <div class="relative w-1/3 overflow-hidden">
            <img
              :src="card.image"
              alt="Card image"
              class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
          </div>

          <!-- Section Contenu -->
          <div class="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h3
                class="text-lg font-semibold text-gray-800 group-hover:text-custom-green-dark transition-colors duration-300"
              >
                {{ card.title }}
              </h3>
              <p
                class="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300"
              >
                {{ truncateText(card.description, 50) }}
              </p>
            </div>

            <div class="mt-4">
              <!-- Bouton -->
              <nuxt-link
                :to="localPagePath(card.id)"
                class="mt-4 inline-block text-custom-green text-sm font-medium overflow-hidden group relative"
              >
                <span
                  class="relative z-10 group-hover:text-custom-green-dark duration-300 ease-in-out"
                >
                  {{ t("operation.btn") }}
                </span>
                <span
                  class="absolute bottom-0 left-0 h-[3px] w-0 bg-custom-green group-hover:w-full transition-all duration-500 ease-in-out"
                ></span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partners Section -->
    <div class="my-16">
      <LogOurs />
    </div>
    <div>
      <LogLogger />
    </div>
    <!-- Footer Section -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const { t, locale } = useI18n();

// Filtres disponibles
const filters = [
  { label: "Operations", value: "operations" },
  { label: "Program", value: "program" },
];

// Liste des cartes
const cards = [
  {
    id: 1,
    title: t("operation.c1_t"),
    description: t("operation.c1_de"),
    image: "/img/1.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 2,
    title: t("operation.c2_t"),
    description: t("operation.c2_de"),
    image: "/img/2.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 3,
    title: t("operation.c3_t"),
    description: t("operation.c3_de"),
    image: "/img/3.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 4,
    title: t("operation.c4_t"),
    description: t("operation.c4_de"),
    image: "/img/4.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 5,
    title: t("operation.c5_t"),
    description: t("operation.c5_de"),
    image: "/img/5.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 6,
    title: t("operation.c6_t"),
    description: t("operation.c6_de"),
    image: "/img/6.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 7,
    title: t("operation.c7_t"),
    description: t("operation.c7_de"),
    image: "/img/7.jpg",
    progress: 30,
    category: "operations",
  },
  {
    id: 8,
    title: t("operation.c8_t"),
    description: t("operation.c8_de"),
    image: "/img/i1.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 9,
    title: t("operation.c9_t"),
    description: t("operation.c9_de"),
    image: "/img/i2.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 10,
    title: t("operation.c10_t"),
    description: t("operation.c10_de"),
    image: "/img/i3.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 11,
    title: t("operation.c11_t"),
    description: t("operation.c11_de"),
    image: "/img/i4.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 12,
    title: t("operation.c12_t"),
    description: t("operation.c12_de"),
    image: "/img/i5.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 13,
    title: t("operation.c13_t"),
    description: t("operation.c13_de"),
    image: "/img/i6.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 14,
    title: t("operation.c14_t"),
    description: t("operation.c14_de"),
    image: "/img/i7.jpg",
    progress: 30,
    category: "program",
  },
  {
    id: 15,
    title: t("operation.c15_t"),
    description: t("operation.c15_de"),
    image: "/img/i8.jpg",
    progress: 30,
    category: "program",
  },
];
const activeFilter = ref("operations");

// Calcul des cartes filtrées
const filteredCards = computed(() => {
  return activeFilter.value === "all"
    ? cards
    : cards.filter((card) => card.category === activeFilter.value);
});

// Appliquer un filtre
function applyFilter(filter) {
  activeFilter.value = filter;
}

// Troncature du texte
function truncateText(text, limit) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}

// Fonction pour générer un chemin localisé pour `/pages/{id}`
const localPagePath = (id) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return `${prefix}/pages/${id}`;
};
</script>
