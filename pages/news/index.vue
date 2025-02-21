<template>
  <section class="bg-green-50">
    <!-- DEBUT LA PREMIERE SECTION -->
    <div class="p-8 mt-16">
      <div class="mj-container hidden sm:block">
        <!-- Début Actualités -->
        <transition-group
          name="fade"
          tag="div"
          class="flex flex-col bg-custom-green text-white overflow-hidden h-80"
        >
          <!-- Boucle sur les articles -->
          <div
            v-for="article in currentArticles"
            :key="article.id"
            class="flex w-full"
          >
            <!-- Contenu texte -->
            <div class="p-6 w-2/3 flex flex-col">
              <div
                class="text-sm font-semibold text-green-50 mb-4 flex items-center space-x-2"
              >
                <span class="underline underline-offset-4">{{
                  article.categorie?.description
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
                <span class="font-semibold"
                  >Publié le {{ formatDate(article.date_created) }}</span
                >
                {{ article.resume }}
              </p>

              <!-- Bouton "Lire plus" -->
              <button
                class="text-green-50 font-semibold text-sm flex items-center space-x-1 group"
                @click="lirePlus(article.slug)"
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

              <!-- Boutons de pagination en dessous du bouton "Lire plus" -->
              <div
                class="bg-white flex items-center justify-between mt-6 text-sm text-black w-full"
                key="pagination"
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
              <div
                class="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded"
              >
                {{ article.categorie?.description }}
              </div>
              <img
                :src="`https://admin.iedarelief.org/assets/${article.coverImg}`"
                alt="Illustration de l'article"
                class="w-full h-80 object-cover"
              />
            </div>
          </div>
        </transition-group>
        <!-- Fin Actualités -->
      </div>
    </div>
    <!-- FINI LA PREMIERE SECTION -->
    <!-- DEBUT LA DEUXIEME SECTION -->
    <div class="mj-container my-10 relative">
      <!-- Image filigranne au coin supérieur à gauche -->
      <div class="absolute -top-8 -left-28 w-28 h-28 hidden sm:block z-10">
        <img
          src="/img/sha.png"
          alt="Filigrane haut gauche"
          class="w-full h-full object-contain opacity-20"
        />
      </div>

      <!-- Contenu principal -->
      <div class="bg-white p-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <h2
              class="flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl"
            >
              <span data-v-8f1205ab="">Nos Blogs</span>
            </h2>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div class="container mx-auto p-4">
          <!-- Onglets pour les pays -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:space-x-4 mb-6"
          >
            <div
              v-for="pays in paysList"
              :key="pays"
              :value="pays"
              @click="changerFiltre(pays)"
              class="relative cursor-pointer px-4 py-2 text-sm font-semibold transition duration-300 text-center"
              :class="[
                filtrePays === pays
                  ? 'text-green-600 font-bold bg-green-100'
                  : 'text-gray-700 hover:text-green-600',
              ]"
            >
              {{ pays }}
              <span
                v-if="filtrePays === pays"
                class="absolute bottom-0 left-0 h-[2px] bg-green-600 transition-all duration-300"
                :style="{ width: '100%' }"
              ></span>
              <span
                v-else
                class="absolute bottom-0 left-0 h-[2px] bg-transparent transition-all duration-300 group-hover:w-full"
              ></span>
            </div>
          </div>

          <!-- Articles affichés avec transition -->
          <Transition name="slide" mode="out-in">
            <div
              key="filtrePays"
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div
                v-for="article in articlesAffiches"
                :key="article.id"
                class="group border overflow-hidden bg-white hover:shadow-lg transition duration-300"
              >
                <!-- Image avec overlay -->
                <div class="relative">
                  <img
                    :src="`https://admin.iedarelief.org/assets/${article.coverImg}`"
                    :alt="article.titre"
                    class="w-full h-56 object-cover transform group-hover:scale-110 transition duration-300"
                  />
                  <!-- Catégorie sur l'image à droite -->
                  <span
                    class="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {{ article.categorie?.description }}
                  </span>
                </div>

                <!-- Contenu de la carte -->
                <div class="p-4">
                  <h2 class="text-lg font-bold text-gray-800 mb-2 truncate">
                    {{ article.titre }}
                  </h2>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                    {{ article.categorie?.description }}
                  </p>
                  <!-- Boutons en bas -->
                  <div class="flex items-center justify-between">
                    <!-- Bouton Lire Plus avec Soulignement animé -->
                    <button
                      @click="lirePlus(article.slug)"
                      class="flex items-center text-custom-green font-semibold hover:text-custom-green transition duration-300 group"
                    >
                      <span class="relative">
                        Lire plus
                        <span
                          class="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 group-hover:w-full"
                        ></span>
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="ml-2 w-4 h-4 transform group-hover:rotate-45 transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </button>

                    <!-- Date de l'article -->
                    <span
                      class="text-gray-500 text-sm flex items-center space-x-2 bg-gray-100 p-2 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      <span>{{ formatDates(article.date_created) }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Pagination avec transitions -->
          <div class="flex justify-center items-center mt-6 space-x-4">
            <!-- Bouton Précédent -->
            <div
              @click="pagePrecedente"
              :class="[
                'flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-300',
                pageActuelle === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700',
              ]"
            >
              <i class="fas fa-chevron-left"></i>
            </div>

            <!-- Indicateur de page -->
            <span class="text-gray-700 font-semibold text-sm sm:text-base">
              Page {{ pageActuelle }} / {{ nombreTotalPages }}
            </span>

            <!-- Bouton Suivant -->
            <div
              @click="pageSuivante"
              :class="[
                'flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-300',
                pageActuelle === nombreTotalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700',
              ]"
            >
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="relative mt-1 h-4 w-full">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
      </div>
      <!-- Contenu principal -->
      <div class="absolute -bottom-8 -right-28 w-28 h28 hidden sm:block">
        <img
          src="/img/sha.png"
          alt="Filigrane bas droite"
          class="w-full h-full object-contain opacity-20"
        />
      </div>
    </div>
    <!-- FIN LA DEUXIEME SECTION -->
    <hr class="mj-container" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <div>
      <LogLogger />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>


<script setup>
import { ref, computed, onMounted } from "vue";
import { useRuntimeConfig, navigateTo } from "#app";

const articles = ref([]);
const paysList = ref([]);
const categories = ref([]);
const error = ref(null);

const filtrePays = ref("All");
const pageActuelle = ref(1);
const articlesParPage = 6;
const articlesPerPage = 1;
const currentPage = ref(1);

// Fonction pour récupérer les options (pays et catégories)
const fetchOptions = async () => {
  try {
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;

    // Récupérer les articles avec leurs relations
    const articlesResponse = await fetch(
      `${directusUrl}/items/article?fields=*,categorie.description,pays.designation`
    );
    if (!articlesResponse.ok)
      throw new Error("Erreur lors de la récupération des articles.");
    const articlesData = await articlesResponse.json();
    articles.value = articlesData.data;

    // Récupérer les pays
    const paysResponse = await fetch(`${directusUrl}/items/pays`);
    if (!paysResponse.ok)
      throw new Error("Erreur lors de la récupération des pays.");
    const paysData = await paysResponse.json();
    paysList.value = ["All", ...paysData.data.map((pays) => pays.designation)];

    // Récupérer les catégories (optionnel)
    const categoriesResponse = await fetch(`${directusUrl}/items/categorie`);
    if (!categoriesResponse.ok)
      throw new Error("Erreur lors de la récupération des catégories.");
    const categoriesData = await categoriesResponse.json();
    categories.value = categoriesData.data;
  } catch (err) {
    error.value = err.message;
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
const articlesAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * articlesParPage;
  return articlesFiltres.value.slice(debut, debut + articlesParPage);
});
const currentArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  return articles.value.slice(start, start + articlesPerPage);
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
