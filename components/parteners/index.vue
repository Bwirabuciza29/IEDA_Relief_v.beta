<template>
  <div class="mj-container">
    <div class="text-center my-6">
      <p class="text-custom-green uppercase tracking-widest text-xs">
        {{ t1 }}
      </p>
      <h1 class="text-3xl font-semibold">
        {{ t2 }} <span class="font-sri"> {{ t3 }}</span>
      </h1>
    </div>
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
        <p class="text-gray-600 mt-4">
          {{ tab.description }}
        </p>
        <h2 class="text-xl font-semibold text-custom-green mb-4">
          {{ tab.s_title }}
        </h2>

        <!-- Description -->
        <p class="text-gray-600 mb-4">
          {{ tab.s_desc }}
        </p>

        <!-- Liste des postes -->
        <ul class="list-disc pl-5 space-y-2">
          <ul>
            <a href="#" class="text-custom-green hover:underline">
              {{ tab.desc_list_1 }}
            </a>
          </ul>
          <ul>
            <a href="#" class="text-custom-green hover:underline">
              {{ tab.desc_list_2 }}
            </a>
          </ul>
        </ul>
        <div class="flex flex-col sm:flex-row gap-4 my-4">
          <button
            class="bg-gray-800 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            {{ tab.desc_btn_1 }}
          </button>
          <button
            class="bg-custom-green text-white font-semibold px-6 py-2 rounded-md hover:bg-custom-green transition"
          >
            {{ tab.desc_btn_2 }}
          </button>
        </div>
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
    image: "/img/part.jpg",
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
