<template>
  <section class="relative bg-custom-green p-8 mx-4">
    <HelpParticles />
    <!-- Titre -->
    <div class="mj-container relative z-10">
      <h2 class="text-3xl text-white md:text-4xl font-bold text-left mb-8">
        {{ t("help.title_1") }}
        <span class="font-sri text-green-100"> {{ t("help.title_2") }}</span>
      </h2>
      <!-- Watermark -->
      <img
        src="/img/filigranne.png"
        alt="Background Watermark"
        class="absolute top-1/2 -left-24 transform -translate-y-1/3 -translate-x-1/4 w-full h-96 opacity-100 pointer-events-none hidden sm:block"
        style="z-index: 20"
      />

      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        <!-- Image avec une image superposée -->
        <div class="relative">
          <!-- Première image -->
          <img
            src="/flags/hight.jpg"
            alt="Main Image"
            class="object-cover w-full sm:w-46 h-46 transition-all duration-300 z-10 border-l-4 border-yellow-500"
          />
        </div>
        <!-- Texte -->
        <div>
          <p class="text-lg text-center text-white">
            {{ t("help.desc") }}
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
        <div
          class="bg-white text-center border-l-4 border-custom-blue shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-5 w-full"
        >
          <div
            class="flex items-center space-x-2 sm:space-x-4 border rounded-full border-custom-green p-1 sm:p-2"
          >
            <img src="/img/food.png" alt="Food Assistance Icon" class="w-4 h-4" />
            <h3 class="font-semibold text-xs">{{ t("help.card_1") }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ t("help.desc") }}
          </p>

          <div
            class="flex items-center space-x-2 sm:space-x-4 border rounded-full border-custom-green p-1 sm:p-2"
          >
            <img src="/img/teach.png" alt="Education Support Icon" class="w-4 h-4" />
            <h3 class="font-semibold text-xs">{{ t("help.card_2") }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ t("help.desc_2") }}
          </p>

          <div
            class="flex items-center space-x-2 sm:space-x-4 border rounded-full border-custom-green p-1 sm:p-2"
          >
            <img
              src="/img/seedling.png"
              alt="Environmental Conservation Icon"
              class="w-4 h-4"
            />
            <h3 class="font-semibold text-xs">{{ t("help.card_3") }}</h3>
          </div>
          <p class="hover:underline text-xs">
            {{ t("help.desc_3") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
</script>
