<template>
  <div class="relative mj-container mx-auto px-4 py-8">
    <!-- Boutons alignés horizontalement -->
    <div class="flex justify-center space-x-4 mb-8">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'px-4 py-3 font-medium rounded-lg transition-colors duration-300',
          activeTab === index
            ? 'bg-custom-green text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="absolute inset-0 flex justify-center items-center z-0 top-20">
      <span
        class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray-500 opacity-10"
      >
        IEDA
      </span>
      <span
        class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray-500 opacity-10 ml-4"
      >
        Relief
      </span>
    </div>

    <!-- Contenu dynamique -->
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      v-show="activeTab === index"
      class="flex flex-col md:flex-row items-center justify-center text-center md:text-left transition-opacity duration-500"
      :class="activeTab === index ? 'opacity-100' : 'opacity-0 hidden'"
    >
      <!-- Texte au centre -->
      <div class="md:w-1/2 mb-6">
        <h2 class="text-5xl font-bold text-gray-800">{{ tab.title }}</h2>
        <p class="text-gray-600 mt-4 text-justify">
          {{ tab.description }}
        </p>
        <NuxtLink :to="localPagePath('about')">
          <button
            class="mt-6 px-6 py-3 text-sm bg-custom-green text-white rounded-lg hover:bg-green-600 transition"
          >
            {{ t("mission.btn", "View More") }}
          </button>
        </NuxtLink>
      </div>

      <!-- Image à droite -->
      <div class="md:w-1/2 flex justify-center relative">
        <!-- Image principale -->
        <div class="relative">
          <!-- Image principale -->
          <img
            :src="tab.image"
            alt="Image"
            class="w-full max-w-sm rounded-lg shadow-md"
          />
          <!-- Gradient en dessous -->
          <div
            class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-custom-green to-transparent rounded-b-lg pointer-events-none"
          ></div>
        </div>

        <!-- Image superposée -->
        <img
          :src="imageSrc"
          alt="Overlay"
          class="absolute -bottom-24 w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto"
        />
      </div>
    </div>
    <div class="px-4 py-8">
      <!-- Boutons alignés horizontalement -->

      <div class="flex justify-between items-center my-8 relative z-10">
        <h2 class="text-2xl font-semibold text-gray-900">
          {{ tit_1 }} <span class="font-sri">{{ tit_2 }}</span> {{ tit_3 }}
        </h2>
        <div class="flex gap-4">
          <button
            class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <span class="sr-only">Previous</span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </span>
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded-full bg-custom-green text-white hover:bg-green-600"
          >
            <span class="sr-only">Next</span>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Repeated Card -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card bg-white p-6 rounded-lg text-center transition-transform duration-300 hover:scale-105"
        >
          <div class="flex justify-center items-center mb-4">
            <img
              :src="card.image"
              alt="Icône"
              class="w-10 h-10 transition-all duration-300 hover:z-10 hover:scale-110"
            />
          </div>

          <h3 class="text-lg font-medium text-gray-800">{{ card.title }}</h3>
          <p
            class="text-sm text-gray-600 mt-2 hover:underline hover:text-green-400"
          >
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n();
const imageSrc = ref("/img/rectori.png");
const title_1 = ref(t("mission.title_1"));
const title_2 = ref(t("mission.title_2"));
const title_3 = ref(t("mission.title_3"));
const desc_1 = ref(t("mission.desc_1"));
const desc_2 = ref(t("mission.desc_2"));
const desc_3 = ref(t("mission.desc_3"));
const tit_1 = ref(t("mission.tit_1"));
const tit_2 = ref(t("mission.tit_2"));
const tit_3 = ref(t("mission.tit_3"));
const ct1 = ref(t("mission.ct1"));
const ct2 = ref(t("mission.ct2"));
const ct3 = ref(t("mission.ct3"));
const cd1 = ref(t("mission.cd1"));
const cd2 = ref(t("mission.cd2"));
const cd3 = ref(t("mission.cd3"));

const tabs = [
  {
    title: title_1,
    description: desc_1,
    image: "/img/v3.jpeg",
  },
  {
    title: title_2,
    description: desc_2,
    image: "/img/vision.jpg",
  },
  {
    title: title_3,
    description: desc_3,
    image: "/img/v2.jpeg",
  },
];
const cards = [
  {
    title: ct1,
    description: cd1,
    image: "/img/lo.svg",
  },
  {
    title: ct2,
    description: cd2,
    image: "/img/lol.svg",
  },
  {
    title: ct3,
    description: cd3,
    image: "/img/lolo.svg",
  },
];

const activeTab = ref(0);
// Fonction pour générer un chemin localisé
const localPagePath = (route) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return `${prefix}/${route}`;
};
</script>

<style>
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
