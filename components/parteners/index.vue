<template>
  <div class="mj-container">
    <div class="bg-white rounded-lg py-4 text-center my-6">
      <p class="text-custom-green uppercase tracking-widest text-xs">
        {{ t1 }}
      </p>
      <h1 class="text-3xl font-semibold">
        {{ t2 }} <span class="font-sri"> {{ t3 }}</span>
      </h1>
    </div>
    <div class="bg-white rounded-lg p-4">
      <div class="flex justify-center space-x-4 mb-8">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'px-4 py-3 font-medium rounded-lg transition-colors duration-300',
            activeTab === index
              ? 'bg-custom-green text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-300',
          ]"
        >
          {{ tab.title }}
        </button>
      </div>

      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between text-center md:text-left transition-opacity duration-500"
        :class="activeTab === index ? 'opacity-100' : 'opacity-0 hidden'"
      >
        <!-- Section texte (50%) -->
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
            {{ tab.title }}
          </h2>
          <p class="text-gray-600 mt-4 text-justify">
            {{ tab.description }}
          </p>
          <h3 class="text-xl font-semibold text-custom-green mt-6">
            {{ tab.s_title }}
          </h3>
          <p class="text-gray-600 mt-2">
            {{ tab.s_desc }}
          </p>

          <!-- Liste des postes -->
          <ul class="space-y-3 mt-4 pl-4" v-show="activeTab === 1">
            <li class="flex items-center">
              <!-- Icône -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-custom-green mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <a href="#" class="text-custom-green hover:underline">
                {{ tab.desc_list_1 }}
              </a>
            </li>
            <li class="flex items-center">
              <!-- Icône -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-custom-green mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <a href="#" class="text-custom-green hover:underline">
                {{ tab.desc_list_2 }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Section image (100% de la partie droite) -->
        <div class="md:w-1/2 px-4 flex justify-center items-center relative">
          <!-- Image principale -->
          <img
            :src="tab.image"
            alt="Image"
            class="w-full h-auto rounded-lg shadow-md object-cover"
          />
          <!-- Image superposée -->
          <img
            :src="imageSrc"
            alt="Overlay"
            class="absolute bottom-4 right-4 w-20 h-20 md:w-32 md:h-32 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n();
const imageSrc = ref("/img/rectori.png");
// Initialiser les variables avant de les utiliser
const title_1 = ref(t("parteners.title_1"));
const title_2 = ref(t("parteners.title_2"));
const title_3 = ref(t("parteners.title_3"));
const desc_1 = ref(t("parteners.desc_1"));
const desc_2 = ref(t("parteners.desc_2"));
const desc_3 = ref(t("parteners.desc_3"));
const desc_title_2 = ref(t("parteners.desc_title_2"));
const desc_desc_2 = ref(t("parteners.desc_desc_2"));
const desc_list_1 = ref(t("parteners.desc_list_1"));
const desc_list_2 = ref(t("parteners.desc_list_2"));
const desc_btn_1 = ref(t("parteners.desc_btn_1"));
const desc_btn_2 = ref(t("parteners.desc_btn_2"));
const t1 = ref(t("parteners.t1"));
const t2 = ref(t("parteners.t2"));
const t3 = ref(t("parteners.t3"));

// Ensuite, vous pouvez utiliser ces variables dans le tableau
const tabs = [
  {
    title: title_1,
    description: desc_1,
    image: "/img/partener.jpg",
  },
  {
    title: title_2,
    description: desc_2,
    image: "/img/aork.jpg",
    s_title: desc_title_2,
    s_desc: desc_desc_2,
    desc_list_1: desc_list_1,
    desc_list_2: desc_list_2,
  },
  {
    title: title_3,
    description: desc_3,
    image: "/img/bby.jpeg",
    desc_btn_1: desc_btn_1,
    desc_btn_2: desc_btn_2,
  },
];

const activeTab = ref(0);
</script>

<style>
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
