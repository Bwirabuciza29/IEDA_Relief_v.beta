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
    <div class="mj-container -mt-20">
      <h1 class="text-4xl font-bold text-center mb-6">
        {{ t("img.title_3") }}
      </h1>
        <div
          class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-4 mb-8 mt-8"
        >
          <div
            v-for="country in countries"
            :key="country.name"
            :class="{
              'flex items-center justify-center space-x-2 cursor-pointer px-4 py-2 w-full md:w-auto': true,
              'bg-custom-green text-white': activeCountry === country.name,
              'bg-white border border-gray-300': activeCountry !== country.name,
            }"
            @click="selectCountry(country.name)"
          >
            <NuxtImg :src="country.flag" :alt="country.name" class="w-6 h-4" />
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
          <!-- Image avec hover avancée et transition -->
          <div class="relative overflow-hidden">
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-[-10px]"
            />
          </div>

          <!-- Icône en bas à droite -->
          <div
            class="absolute bottom-20 right-0 bg-green-50 p-1 flex items-center justify-center"
          >
            <div class="relative w-8 h-8">
              <p
                class="h-full w-full bg-custom-green text-white p-4 absolute -bottom-1 -right-1"
              ></p>
            </div>
          </div>

          <!-- Texte avec animation de soulignement et apparition au hover -->
          <div class="p-4">
            <p class="font-bold text-lg relative inline-block">
              {{ image.country }}
              <span
                class="absolute left-0 bottom-0 h-[2px] bg-custom-green w-0 transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </p>
            <p
              class="text-sm text-gray-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            >
              Par : {{ image.author }}
            </p>
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
  {
    name: "USA",
    flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
  },
  {
    name: "Belgique",
    flag: "https://www.countryflags.com/wp-content/uploads/belgium-belgian-flag-png-square-large.png",
  },
  {
    name: "BurkinaFaso",
    flag: "https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",
  },
  {
    name: "RCA",
    flag: "https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",
  },
  {
    name: "Cameroun",
    flag: "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
  },
  {
    name: "RD.Congo",
    flag: "https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png",
  },
  {
    name: "Niger",
    flag: "https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png",
  },
  {
    name: "Mali",
    flag: "https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png",
  },
];

const images = [
  {
    id: 1,
    url: "/img/gal.jpg",
    title: "IEDA Relief",
    author: "Team USA",
    country: "USA",
  },
  {
    id: 2,
    url: "/img/cm.jpg",
    title: "IEDA Relief",
    author: "Team USA",
    country: "USA",
  },
  {
    id: 3,
    url: "/img/gal.jpg",
    title: "IEDA Relief",
    author: "Team USA",
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
    country: "BurkinaFaso",
  },
  {
    id: 8,
    url: "/images/burkina2.jpg",
    title: "Image 2",
    author: "Auteur Burkina Faso",
    country: "BurkinaFaso",
  },
  {
    id: 9,
    url: "/images/burkina3.jpg",
    title: "Image 3",
    author: "Auteur Burkina Faso",
    country: "BurkinaFaso",
  },
  {
    id: 10,
    url: "https://ik.imagekit.io/cameroun/RCA/img_1%20(12).jpg?updatedAt=1733926680923",
    title: "Image 1",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 11,
    url: "https://ik.imagekit.io/cameroun/RCA/img_1%20(15).jpg?updatedAt=1733926682394",
    title: "Image 2",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 12,
    url: "https://ik.imagekit.io/cameroun/RCA/rca%20(2).jpg?updatedAt=1733926690828",
    title: "Image 3",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 12,
    url: "https://ik.imagekit.io/cameroun/RCA/img_1%20(9).jpg?updatedAt=1733926690089",
    title: "Image 3",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 12,
    url: "https://ik.imagekit.io/cameroun/RCA/img_1%20(7).jpg?updatedAt=1733926688492",
    title: "Image 3",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 12,
    url: "https://ik.imagekit.io/cameroun/RCA/img_1%20(16).jpg?updatedAt=1733926682081",
    title: "Image 3",
    author: "Auteur RCA",
    country: "RCA",
  },
  {
    id: 13,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0040.jpg?updatedAt=1733921917137",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 14,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0044.jpg?updatedAt=1733921921849",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 15,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0029.jpg?updatedAt=1733921914578",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 25,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0034.jpg?updatedAt=1733921915474",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 26,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0027.jpg?updatedAt=1733921910607",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 27,
    url: "https://ik.imagekit.io/cameroun/cameroun/IMG-20241210-WA0049.jpg?updatedAt=1733921924669",
    title: "Cameroun",
    author: "Team IEDA Cameroun Cameroun",
    country: "Cameroun",
  },
  {
    id: 16,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0093.jpg?updatedAt=1733926192528",
    title: "Image 1",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 17,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0056.jpg?updatedAt=1733926160489",
    title: "Image 2",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 18,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0051.jpg?updatedAt=1733926162100",
    title: "Image 3",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 18,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0067.jpg?updatedAt=1733926172229",
    title: "Image 3",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 18,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0070.jpg?updatedAt=1733926174375",
    title: "Image 3",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 18,
    url: "https://ik.imagekit.io/cameroun/RDC/IMG-20241210-WA0076.jpg?updatedAt=1733926180800",
    title: "Image 3",
    author: "Auteur RD Congo",
    country: "RD.Congo",
  },
  {
    id: 19,
    url: "https://ik.imagekit.io/cameroun/NIGER/IMG-20241210-WA0065.jpg?updatedAt=1733925526552",
    title: "Image 1",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 20,
    url: "https://ik.imagekit.io/cameroun/NIGER/IMG-20241210-WA0048.jpg?updatedAt=1733925519859",
    title: "Image 2",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 21,
    url: "https://ik.imagekit.io/cameroun/NIGER/IMG-20241210-WA0053.jpg?updatedAt=1733925519431",
    title: "Image 3",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 21,
    url: "https://ik.imagekit.io/cameroun/NIGER/IMG-20241210-WA0056.jpg?updatedAt=1733925519249",
    title: "Image 3",
    author: "Auteur Niger",
    country: "Niger",
  },
  {
    id: 21,
    url: "https://ik.imagekit.io/cameroun/NIGER/IMG-20241210-WA0052.jpg?updatedAt=1733925519237",
    title: "Image 3",
    author: "Auteur Niger",
    country: "Niger",
  },

  {
    id: 22,
    url: "https://ik.imagekit.io/cameroun/mali/IMG-20241210-WA0104.jpg?updatedAt=1733926515829",
    title: "Image 1",
    author: "Auteur Mali",
    country: "Mali",
  },
  {
    id: 23,
    url: "https://ik.imagekit.io/cameroun/mali/IMG-20241210-WA0102.jpg?updatedAt=1733926514840",
    title: "Image 2",
    author: "Auteur Mali",
    country: "Mali",
  },
  {
    id: 24,
    url: "https://ik.imagekit.io/cameroun/mali/IMG-20241210-WA0095.jpg?updatedAt=1733926512373",
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

