<template>
  <section class="bg-green-50">
    <div class="p-8 mt-20 z-10">
      <div class="mj-container">
        <!-- Début Actualités -->
        <transition-group
          name="fade"
          tag="div"
          class="flex bg-custom-green text-white rounded-lg shadow-lg overflow-hidden h-80"
          v-for="article in currentArticles"
          :key="article.id"
        >
          <!-- Contenu texte  -->

          <div class="p-6 w-2/3">
            <div
              class="text-sm font-semibold text-green-50 mb-4 flex items-center space-x-2"
            >
              <span class="underline underline-offset-4">{{
                article.categorie
              }}</span>
              <span>|</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <span>IEDA Relief</span>
            </div>

            <!-- Titre de l'article -->
            <h2
              class="text-2xl font-bold leading-tight mb-4"
              data-aos="zoom-in"
            >
              {{ article.titre }}
            </h2>

            <!-- Métadonnées (lieu et date) -->
            <p
              class="text-sm mb-4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <span class="font-semibold"> Publié le {{ article.date }}</span>
              {{ article.description }}
              <span class="italic"> {{ article.description }}</span>
              Cette note examine
              <span class="font-semibold"> {{ article.description }}</span>
            </p>

            <!-- Bouton "Lire plus" -->
            <button
              class="text-green-50 font-semibold text-sm flex items-center space-x-1 group"
              @click="readMore(article.slug)"
            >
              <span class="relative">
                Lire plus
                <span
                  class="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transition-all duration-300 group-hover:w-0"
                ></span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4 transition-transform duration-300 group-hover:rotate-90"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </button>

            <!-- Pagination -->
            <div
              class="bg-white flex items-center justify-between mt-6 text-sm text-black"
            >
              <button
                :disabled="currentPage === 1"
                @click="prevPage"
                class="p-4 font-bold text-sm hover:text-custom-green hover:bg-green-50 w-full text-center flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 111.414 1.414L4.414 10l6.293 6.293A1 1 0 0110 18z"
                    clip-rule="evenodd"
                  />
                </svg>
                Précédent
              </button>
              <div class="p-4 font-bold text-sm">
                {{ currentPage }}/{{ totalPages }}
              </div>
              <button
                :disabled="currentPage === totalPages"
                @click="nextPage"
                class="p-4 font-bold text-sm hover:text-custom-green hover:bg-green-50 w-full text-center flex items-center justify-center"
              >
                Suivant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Image (droite) -->
          <div class="relative w-1/3 h-full">
            <!-- Texte "Actualité" en haut à droite -->
            <div
              class="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded"
            >
              Actualité
            </div>
            <!-- Image -->
            <img
              :src="article.image"
              alt="Illustration de l'article"
              class="h-full w-full object-cover"
            />
          </div>
        </transition-group>
        <!-- Fin Actualités -->
      </div>
    </div>
    <!-- contenu du work -->
    <div class="mj-container my-10 relative">
      <!-- Image filigranne au coin supérieur à gauche -->
      <div class="absolute -top-8 -left-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane haut gauche"
          class="w-full h-full object-contain opacity-50"
        />
      </div>

      <!-- Contenu principal -->
      <div class="bg-white py-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        facere a ut, reiciendis recusandae, dolorum itaque sequi voluptatum
        neque velit reprehenderit dicta ipsum quidem, rerum ratione
        necessitatibus expedita! In, cupiditate!
      </div>
      <!-- Contenu principal -->
      <!-- Image filigranne au coin inférieur à droite -->
      <div class="absolute -bottom-8 -right-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane bas droite"
          class="w-full h-full object-contain opacity-50"
        />
      </div>
    </div>
    <hr class="mj-container" />
    <!-- Parteners -->
  </section>
</template>

<script setup>
const { t, locale } = useI18n();
import { ref, computed } from "vue";

const articles = ref([
  {
    id: 1,
    titre: "Premier Article",
    slug: "premier-article",
    description: "Ceci est une brève description du premier article.",
    image: "/img/1.jpg",
    date: "2025-01-10",
    categorie: "Actualité",
  },
  {
    id: 2,
    titre: "Deuxième Article",
    slug: "Deuxième Article",
    description: "Description pour le deuxième article.",
    image: "/img/2.jpg",
    date: "2025-01-09",
    categorie: "Tech",
  },
  {
    id: 3,
    titre: "Troisième Article",
    slug: "Troisième Article",
    description:
      "Un aperçu approfondi sur les dernières tendances en technologie.",
    image: "/img/3.jpg",
    date: "2025-01-12",
    categorie: "Tech",
  },
  {
    id: 4,
    titre: "Quatrième Article",
    slug: "Quatrième Article",
    description:
      "Découvrez les impacts de l'intelligence artificielle sur notre quotidien.",
    image: "/img/4.jpg",
    date: "2025-01-14",
    categorie: "Innovation",
  },
  {
    id: 5,
    titre: "Cinquième Article",
    slug: "Cinquième Article",
    description: "Les meilleures pratiques pour le développement web moderne.",
    image: "/img/5.jpg",
    date: "2025-01-15",
    categorie: "Web",
  },
  {
    id: 6,
    titre: "Sixième Article",
    slug: "Sixième Article",
    description: "Comment sécuriser vos données personnelles en ligne.",
    image: "/img/6.jpg",
    date: "2025-01-16",
    categorie: "Sécurité",
  },
  {
    id: 7,
    titre: "Septième Article",
    slug: "Septième Article",
    description: "L'évolution des frameworks JavaScript en 2025.",
    image: "/img/7.jpg",
    date: "2025-01-17",
    categorie: "Tech",
  },
]);

const currentPage = ref(1);
const articlesPerPage = 1;

const totalPages = computed(() =>
  Math.ceil(articles.value.length / articlesPerPage)
);

const currentArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  return articles.value.slice(start, start + articlesPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const readMore = (slug) => {
  navigateTo(`/news/${slug}`);
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>