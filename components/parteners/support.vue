<template>
  <section class="mj-container">
    <!-- Titre de la section -->
    <div class="text-center my-4">
      <p class="text-custom-green uppercase tracking-widest text-xs">
        {{ t1 }}
      </p>
      <h1 class="text-2xl sm:text-3xl font-semibold">
        {{ t2 }}
        <span class="font-sri text-custom-green"> {{ t3 }}</span>
      </h1>
    </div>

    <!-- Grille des cartes -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1 -->
      <div
        class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-lg mx-auto"
      >
        <div class="w-full md:w-1/2 h-40 md:h-auto">
          <img
            src="/img/enf.png"
            alt="Empowering Lives"
            class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="p-4 w-full md:w-1/2 flex flex-col justify-center">
          <img src="/img/Quote.png" alt="Icon" class="w-6 mb-3" />
          <h3 class="text-base font-semibold mb-1">{{ title_1 }}</h3>
          <p class="text-sm text-gray-600 hover:underline">{{ desc_1 }}</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-lg mx-auto"
      >
        <div class="w-full md:w-1/2 h-40 md:h-auto">
          <img
            src="/img/po.png"
            alt="Overcoming Adversity"
            class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="p-4 w-full md:w-1/2 flex flex-col justify-center">
          <img src="/img/Quote.png" alt="Icon" class="w-6 mb-3" />
          <h3 class="text-base font-semibold mb-1">{{ title_2 }}</h3>
          <p class="text-sm text-gray-600 hover:underline">{{ desc_2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

// Initialisation des variables traduites
const t1 = ref(t("support.t1"));
const t2 = ref(t("support.t2"));
const t3 = ref(t("support.t3"));
const title_1 = ref(t("support.title_1"));
const title_2 = ref(t("support.title_2"));
const desc_1 = ref(t("support.desc_1"));
const desc_2 = ref(t("support.desc_2"));
</script>
