<template>
  <section class="bg-green-50 relative">
    <img
      src="/img/droite.png"
      alt="Filigrane supérieur droit"
      class="absolute top-80 right-0 w-40 pointer-events-none hidden sm:block"
    />
    <img
      src="/img/gauche.png"
      alt="Filigrane inférieur gauche"
      class="absolute bottom-80 left-0 w-40 opacity-100 pointer-events-none hidden sm:block"
    />

    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <!-- Image vectorielle (positionnée au-dessus du conteneur) -->
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto z-10 hidden sm:block"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <!-- Texte (à gauche sur grand écran) -->
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
                {{ t("img.title_1") }}
              </h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">Home </a>
                  /
                  <span>{{ t("img.title_1") }}</span>
                </div>
              </nav>
            </div>

            <!-- Image (à droite sur grand écran) -->
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/gal.jpg"
                alt="About Us Section"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contenu de l'equipe -->
    <div class="mj-container my-4">
      <div class="py-8 px-4">
        <!-- Titre Principal -->
        <div class="text-center my-6">
          <p class="text-custom-green uppercase tracking-widest text-xs">
            {{ t("img.title_1") }}
          </p>
          <h1 class="text-3xl font-semibold">
            {{ t("team.title_2") }}
            <span class="font-sri"> {{ t("img.title_1") }}</span>
          </h1>
        </div>

        <!-- Navigation des catégories -->
        <div
          class="flex justify-center space-x-4 mb-8 flex-wrap md:flex-nowrap"
        >
          <button
            v-for="(category, index) in categories"
            :key="index"
            :class="[
              'px-4 py-2 text-lg font-medium border-b-2',
              activeCategory === category
                ? 'border-custom-green text-custom-green'
                : 'border-transparent text-gray-600 hover:text-gray-800',
              // Taille et espacement adaptatifs
              'sm:text-base sm:px-3 sm:py-1 md:text-lg md:px-4 md:py-2',
            ]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <!-- Section : Management -->
        <div
          v-show="activeCategory === t('team.btn_1')"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="(member, index) in team"
            :key="index"
            class="relative group bg-white shadow-md rounded-lg overflow-hidden hover:bg-custom-green transition"
          >
            <!-- Effet de Hover -->
            <div
              class="absolute inset-0 bg-custom-green hover:border-white opacity-0 group-hover:opacity-90 transition"
            ></div>

            <!-- Contenu des cartes -->
            <div class="relative p-4 text-center group-hover:text-white z-10">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-custom-green hover:border-white"
              />
              <h2 class="text-lg font-semibold">{{ member.name }}</h2>
              <p class="text-sm">{{ member.role }}</p>

              <!-- Icônes -->
              <!-- Icônes -->
              <div class="flex justify-center space-x-2 mt-4">
                <a
                  :href="member.social.linkedin"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  :href="member.social.twitter"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-x-twitter"></i>
                </a>
                <a
                  :href="member.social.facebook"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Section : Board of Direction -->
        <div
          v-show="activeCategory === t('team.btn_2')"
          class="text-center text-gray-600"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(member, index) in board"
              :key="index"
              class="relative group bg-white shadow-md rounded-lg overflow-hidden hover:bg-custom-green transition"
            >
              <!-- Effet de Hover -->
              <div
                class="absolute inset-0 bg-custom-green opacity-0 group-hover:opacity-90 transition"
              ></div>

              <!-- Contenu des cartes -->
              <div class="relative p-4 text-center group-hover:text-white z-10">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-custom-green hover:borger-white"
                />
                <h2 class="text-lg font-semibold">{{ member.name }}</h2>
                <p class="text-sm">{{ member.role }}</p>

                <!-- Icônes -->
                <!-- Icônes -->
                <div class="flex justify-center space-x-2 mt-4">
                  <a
                    :href="member.social.linkedin"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    :href="member.social.twitter"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-x-twitter"></i>
                  </a>
                  <a
                    :href="member.social.facebook"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section : Financial Repport -->
        <div
          v-show="activeCategory === t('team.btn_3')"
          class="text-center text-gray-600"
        >
          <all />
        </div>
      </div>
    </div>
    <!-- gallerie ici -->
    <div class="mj-container">
      <h1 class="text-3xl font-bold text-center mb-6">
        Notre galerie complète d'images
      </h1>
      <div class="flex justify-center space-x-4 mb-8">
        <div
          v-for="country in countries"
          :key="country.name"
          :class="
            'flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ' +
            (activeCountry === country.name ? 'bg-gray-200' : 'bg-white')
          "
          @click="selectCountry(country.name)"
        >
          <img :src="country.flag" :alt="country.name" class="w-6 h-4" />
          <span class="font-medium">{{ country.name }}</span>
        </div>
      </div>
      <!-- img debut -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="image in filteredImages"
          :key="image.id"
          class="relative group overflow-hidden"
        >
          <img
            :src="image.url"
            :alt="image.title"
            class="w-full h-64 object-cover"
          />
          <!-- Icône en bas à droite -->
          <div
            class="absolute bottom-20 right-0 bg-green-50 p-1 flex items-center justify-center"
          >
            <div class="relative w-8 h-8">
              <img
                src="/img/ar.svg"
                alt="icon"
                class="h-full w-full bg-gray-700 text-white p-4 absolute -bottom-1 -right-1"
              />
            </div>
          </div>

          <div class="p-4">
            <p class="font-bold text-lg">{{ image.title }}</p>
            <p class="text-sm text-gray-600">Par : {{ image.author }}</p>
          </div>
        </div>
      </div>
      <!-- img end -->
    </div>
    <hr class="mj-container mt-8" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>
<script setup>
// Les catégori
import { ref, computed, onMounted } from "vue";
const { t } = useI18n();
const countries = [
  { name: "USA", flag: " https://flagcdn.com/48x36/us.png" },
  { name: "Belgique", flag: "https://flagcdn.com/48x36/be.png" },
  { name: "Burkina Faso", flag: "https://flagcdn.com/48x36/bf.png" },
  { name: "RCA", flag: "https://flagcdn.com/48x36/cf.png" },
  { name: "Cameroun", flag: "https://flagcdn.com/48x36/cm.png" },
  { name: "RD Congo", flag: "https://flagcdn.com/48x36/cd.png" },
  { name: "Niger", flag: "https://flagcdn.com/48x36/ne.png" },
  { name: "Mali", flag: "https://flagcdn.com/48x36/ml.png" },
];

const images = [
  {
    id: 1,
    url: "/img/gal.jpg",
    title: "Image 1",
    author: "Auteur USA",
    country: "USA",
  },
  {
    id: 2,
    url: "/img/cm.jpg",
    title: "Image 2",
    author: "Auteur USA",
    country: "USA",
  },
  {
    id: 3,
    url: "/img/gal.jpg",
    title: "Image 3",
    author: "Auteur USA",
    country: "USA",
  },
  {
    id: 4,
    url: "/images/belgique1.jpg",
    title: "Image 1",
    author: "Auteur Belgique",
    country: "Belgique",
  },
  {
    id: 5,
    url: "/images/belgique2.jpg",
    title: "Image 2",
    author: "Auteur Belgique",
    country: "Belgique",
  },
  {
    id: 6,
    url: "/images/belgique3.jpg",
    title: "Image 3",
    author: "Auteur Belgique",
    country: "Belgique",
  },
  {
    id: 7,
    url: "/images/burkina1.jpg",
    title: "Image 1",
    author: "Auteur Burkina Faso",
    country: "Burkina Faso",
  },
  {
    id: 8,
    url: "/images/burkina2.jpg",
    title: "Image 2",
    author: "Auteur Burkina Faso",
    country: "Burkina Faso",
  },
  {
    id: 9,
    url: "/images/burkina3.jpg",
    title: "Image 3",
    author: "Auteur Burkina Faso",
    country: "Burkina Faso",
  },
  {
    id: 10,
    url: "/images/rca1.jpg",
    title: "Image 1",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 11,
    url: "/images/rca2.jpg",
    title: "Image 2",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 12,
    url: "/images/rca3.jpg",
    title: "Image 3",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 13,
    url: "/images/cameroun1.jpg",
    title: "Image 1",
    author: "Auteur Cameroun",
    country: "Cameroun",
  },
  {
    id: 14,
    url: "/images/cameroun2.jpg",
    title: "Image 2",
    author: "Auteur Cameroun",
    country: "Cameroun",
  },
  {
    id: 15,
    url: "/images/cameroun3.jpg",
    title: "Image 3",
    author: "Auteur Cameroun",
    country: "Cameroun",
  },
  {
    id: 16,
    url: "/images/rdcongo1.jpg",
    title: "Image 1",
    author: "Auteur RD Congo",
    country: "RD Congo",
  },
  {
    id: 17,
    url: "/images/rdcongo2.jpg",
    title: "Image 2",
    author: "Auteur RD Congo",
    country: "RD Congo",
  },
  {
    id: 18,
    url: "/images/rdcongo3.jpg",
    title: "Image 3",
    author: "Auteur RD Congo",
    country: "RD Congo",
  },
  {
    id: 19,
    url: "/images/niger1.jpg",
    title: "Image 1",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 20,
    url: "/images/niger2.jpg",
    title: "Image 2",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 21,
    url: "/images/niger3.jpg",
    title: "Image 3",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 22,
    url: "/images/mali1.jpg",
    title: "Image 1",
    author: "Auteur Mali",
    country: "Mali",
  },
  {
    id: 23,
    url: "/images/mali2.jpg",
    title: "Image 2",
    author: "Auteur Mali",
    country: "Mali",
  },
  {
    id: 24,
    url: "/images/mali3.jpg",
    title: "Image 3",
    author: "Auteur Mali",
    country: "Mali",
  },
];

// Vérifiez si localStorage est disponible
const activeCountry = ref("USA"); // Valeur par défaut

if (typeof window !== "undefined" && window.localStorage) {
  activeCountry.value = localStorage.getItem("activeCountry") || "USA";
}

// Filtrer les images par pays
const filteredImages = computed(() => {
  return images.filter((image) => image.country === activeCountry.value);
});

// Fonction pour changer de pays
const selectCountry = (country) => {
  activeCountry.value = country;
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("activeCountry", country);
  }
};
</script>

