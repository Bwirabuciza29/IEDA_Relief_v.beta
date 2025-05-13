<template>
  <div class="mj-container bg-white">
    <div class="relative w-full bg-center bg-cover flex items-center">
      <div class="us-container my-4">
        <div class="relative mt-1 h-4 w-full">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
        <div class="flex items-center justify-center mt-8">
          <div class="text-center">
            <h1 class="text-4xl font-bold">
              <span class="font-sri"> {{ t("menu.news") }} </span>
            </h1>
            <div class="w-1/2 h-1 bg-primary_1 mx-auto mt-2"></div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
          <div
            v-for="article in articlesAffiches"
            :key="article.id"
            class="group relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center overflow-hidden"
            :style="{
              backgroundImage: `url(https://admin.iedarelief.org/assets/${article.coverImg})`,
            }"
          >
            <div
              class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"
            ></div>

            <div
              class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center"
            >
              <a
                href="#"
                class="text-xs bg-custom-green text-white px-5 py-2 uppercase hover:bg-white transition ease-in-out duration-500"
              >
                {{ article.categorie?.description }}
              </a>
              <div class="text-white font-regular flex flex-col justify-start">
                <span class="text-3xl leading-0 font-semibold">{{
                  new Date(article.date_created).getDate()
                }}</span>
                <span class="-mt-3">{{
                  new Date(article.date_created).toLocaleString("fr-FR", {
                    month: "long",
                  })
                }}</span>
              </div>
            </div>

            <main class="p-5 z-10">
              <a
                href="#"
                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                {{ article.titre }}
              </a>
            </main>

            <!-- Bouton Voir plus en bas à droite, visible au hover -->
            <div
              class="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <div
                @click="lirePlus(article.slug)"
                class="group relative inline-block text-white text-sm rounded transition"
              >
                {{ t("news.more") }}
                <span
                  class="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="loading" class="flex justify-center items-center py-10">
          <div class="loader"></div>
        </div>
        <div>
          <div class="flex justify-end">
            <div class="flex items-center py-8">
              <div
                @click="pagePrecedente"
                :class="[
                  'flex items-center justify-center w-10 h-10  cursor-pointer transition-all duration-300',
                  pageActuelle === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700',
                ]"
              >
                <i class="fas fa-chevron-left"></i>
              </div>

              <!-- Indicateur de page -->
              <span
                class="text-gray-700 font-semibold text-sm sm:text-base mx-4"
              >
                Page {{ pageActuelle }} / {{ nombreTotalPages }}
              </span>

              <!-- Bouton Suivant -->
              <div
                @click="pageSuivante"
                :class="[
                  'flex items-center justify-center w-10 h-10 cursor-pointer transition-all duration-300',
                  pageActuelle === nombreTotalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700',
                ]"
              >
                <i class="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- here -->
        <div class="relative mt-1 h-4 w-full">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRuntimeConfig, navigateTo } from "#app";
const { t, locale } = useI18n();
const articles = ref([]);
const paysList = ref([]);
const categories = ref([]);
const error = ref(null);
const loading = ref(true);

const filtrePays = ref("All");
const pageActuelle = ref(1);
const articlesParPage = 6;
const articlesPerPage = 1;
const currentPage = ref(1);

// Fonction pour récupérer les options (pays et catégories)
const fetchOptions = async () => {
  loading.value = true;
  try {
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;

    const articlesResponse = await fetch(
      `${directusUrl}/items/article?fields=*,categorie.description,pays.designation`
    );
    if (!articlesResponse.ok)
      throw new Error("Erreur lors de la récupération des articles.");
    const articlesData = await articlesResponse.json();
    articles.value = articlesData.data;

    const paysResponse = await fetch(`${directusUrl}/items/pays`);
    if (!paysResponse.ok)
      throw new Error("Erreur lors de la récupération des pays.");
    const paysData = await paysResponse.json();
    paysList.value = ["All", ...paysData.data.map((pays) => pays.designation)];

    const categoriesResponse = await fetch(`${directusUrl}/items/categorie`);
    if (!categoriesResponse.ok)
      throw new Error("Erreur lors de la récupération des catégories.");
    const categoriesData = await categoriesResponse.json();
    categories.value = categoriesData.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Charger les données au montage du composant
onMounted(() => {
  fetchOptions();
});

// Articles filtrés par pays
const articlesFiltres = computed(() => {
  return filtrePays.value === "All"
    ? articles.value
    : articles.value.filter(
        (article) => article.pays?.designation === filtrePays.value
      );
});

// Gestion de la pagination
const nombreTotalPages = computed(() =>
  Math.ceil(articlesFiltres.value.length / articlesParPage)
);
const totalPages = computed(() =>
  Math.ceil(articlesFiltres.value.length / articlesPerPage)
);
const articlesTries = computed(() => {
  return [...articlesFiltres.value].sort(
    (a, b) => new Date(b.date_created) - new Date(a.date_created)
  );
});
const articlesAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * articlesParPage;
  return articlesTries.value.slice(debut, debut + articlesParPage);
});
const currentArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  return articlesTries.value.slice(start, start + articlesPerPage);
});

// Gestion du filtre par pays
const changerFiltre = (pays) => {
  filtrePays.value = pays;
  pageActuelle.value = 1;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("filtrePays", pays);
  }
};

// Navigation entre les pages
const pageSuivante = () => {
  if (pageActuelle.value < nombreTotalPages.value) pageActuelle.value++;
};
const pagePrecedente = () => {
  if (pageActuelle.value > 1) pageActuelle.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
// Redirection vers l'article
const lirePlus = (slug) => {
  navigateTo(`/news/${slug}`);
};

// Formater la date pour affichage
const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const localeDate = new Date(date).toLocaleDateString("fr-FR", options);
  return localeDate.replace(", ", " à ");
};
// Formater la date pour affichage sans l'heure
const formatDates = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("fr-FR", options);
};
</script>