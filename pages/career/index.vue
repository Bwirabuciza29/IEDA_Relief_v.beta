<template>
  <section class="bg-green-50">
    <!-- DEBUT LA PREMIERE SECTION -->
    <div class="p-8 mt-16">
      <div class="mj-container">
        <!-- Début Actualités -->

        <div
          class="relative flex flex-col md:flex-row bg-custom-green overflow-hidden"
        >
          <!-- Texte -->
          <div
            class="w-full md:w-1/2 p-8 text-white flex flex-col justify-center relative z-20 md:pr-16"
          >
            <h2 class="text-3xl font-bold mb-4">{{ t("carriere.title") }}</h2>
            <p class="mb-6 text-lg md:-mr-52 text-justify rounded-lg">
              {{ t("carriere.carriere_description") }}
            </p>
            <!-- <div class="flex space-x-4">
              <button
                class="bg-white text-custom-green font-semibold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
              >
                Nous contacter
              </button>
            </div> -->
          </div>

          <!-- Image -->
          <div class="hidden md:block md:w-1/2 relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-custom-green to-transparent z-10"
            ></div>
            <img
              src="/img/career.jpg"
              alt="People reading books"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
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

      <!-- Contenu principal des jobs postés -->
      <div class="bg-white p-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <h2
              class="flex items-center justify-start text-xl font-semibold text-bleu sm:text-2xl"
            >
              <span data-v-8f1205ab="">{{ t("carriere.titles") }}</span>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          delectus minima rem veniam, eum dicta ullam et, debitis natus
          laudantium provident rerum. Magnam, laborum. Iure ratione aspernatur
          nostrum laudantium eveniet!
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
<style>
/* Font Awesome import */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
/* Loader Styles */
.loader {
  z-index: 99 !important;
  width: 36px;
  height: 36px;
  display: block;
  margin: 10px auto;
  position: relative;
  color: #f0efef;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  -webkit-animation: rotation 1s linear infinite;
}

.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: #055fc5;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
  -webkit-transform: scale(0.5) translate(0, 0);
  -moz-transform: scale(0.5) translate(0, 0);
  -ms-transform: scale(0.5) translate(0, 0);
  -o-transform: scale(0.5) translate(0, 0);
}

.loader::before {
  background-color: #02ab4b;
  transform: scale(0.5) translate(-36px, -36px);
  -webkit-transform: scale(0.5) translate(-36px, -36px);
  -moz-transform: scale(0.5) translate(-36px, -36px);
  -ms-transform: scale(0.5) translate(-36px, -36px);
  -o-transform: scale(0.5) translate(-36px, -36px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>
