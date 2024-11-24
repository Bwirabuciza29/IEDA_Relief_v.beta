<template>
  <section class="bg-custom-green p-8 mx-4 rounded-lg">
    <!-- Titre -->
    <div class="mj-container relative z-10">
      <h2 class="text-3xl text-white md:text-4xl font-bold text-left mb-8">
        {{ title_1 }}
        <span class="font-sri text-green-100"> {{ title_2 }}</span>
      </h2>
      <!-- Watermark -->
      <img
        src="/img/filigranne.png"
        alt="Background Watermark"
        class="absolute top-1/2 -left-24 transform -translate-y-1/3 -translate-x-1/4 w-full h-96 opacity-100 pointer-events-none hidden sm:block"
        style="z-index: 0"
      />

      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <!-- Image avec une image superposée -->
        <div class="relative">
          <img
            src="/img/mum.png"
            alt="Main Image"
            class="rounded-lg object-cover w-46 h-46 transition-all duration-300 hover:z-10 hover:scale-110"
          />
          <img
            src="/img/bf.jpg"
            alt="Overlay Image"
            class="absolute bottom-4 -right-16 w-40 h-40 rounded-lg transition-all duration-300 hover:z-10 hover:scale-110"
          />
        </div>

        <!-- Texte -->
        <div>
          <p class="text-lg text-center text-white">
            {{ desc }}
          </p>
          <!-- Carte arrondie en bas à droite -->
          <div class="relative">
            <img
              src="/img/Number.png"
              alt="Background Image"
              class="absolute -bottom-34 right-4 w-42 h-42 md:w-60 md:h-60 z-0 transition-all duration-300 hover:z-10 hover:scale-110 hidden sm:block"
            />
          </div>
        </div>

        <!-- Carte avec éléments -->
        <div class="bg-white rounded-lg shadow-lg p-6 space-y-5">
          <div
            class="flex items-center space-x-4 border rounded-full border-custom-green p-2"
          >
            <img
              src="/img/food.png"
              alt="Food Assistance Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold text-xs">{{ card_1 }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ desc_1 }}
          </p>

          <div
            class="flex items-center space-x-4 border rounded-full border-custom-green p-2"
          >
            <img
              src="/img/teach.png"
              alt="Education Support Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold text-xs">{{ card_2 }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ desc_2 }}
          </p>

          <div
            class="flex items-center space-x-4 border rounded-full border-custom-green p-2"
          >
            <img
              src="/img/seedling.png"
              alt="Environmental Conservation Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold text-xs">{{ card_3 }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ desc_3 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const title_1 = ref(t("help.title_1"));
const title_2 = ref(t("help.title_2"));
const desc = ref(t("help.desc"));
const card_1 = ref(t("help.card_1"));
const card_2 = ref(t("help.card_2"));
const card_3 = ref(t("help.card_3"));
const desc_1 = ref(t("help.desc_1"));
const desc_2 = ref(t("help.desc_2"));
const desc_3 = ref(t("help.desc_3"));
</script>