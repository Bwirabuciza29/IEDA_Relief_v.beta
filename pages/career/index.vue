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
        <!-- debut -->
        <div class="container mx-auto p-4">
          <div>
            <!-- Filtre par rubrique -->
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:space-x-4 mb-6"
            >
              <div
                v-for="rubrique in rubriques"
                :key="rubrique"
                :value="rubrique"
                @click="changerFiltre(rubrique)"
                class="relative cursor-pointer px-4 py-2 text-sm font-semibold transition duration-300 text-center"
                :class="[
                  filtreRubrique === rubrique
                    ? 'text-green-600 font-bold bg-green-100'
                    : 'text-gray-700 hover:text-green-600',
                ]"
              >
                {{ rubrique }}
                <span
                  v-if="filtreRubrique === rubrique"
                  class="absolute bottom-0 left-0 h-[2px] bg-green-600 transition-all duration-300"
                  :style="{ width: '100%' }"
                ></span>
                <span
                  v-else
                  class="absolute bottom-0 left-0 h-[2px] bg-transparent transition-all duration-300 group-hover:w-full"
                ></span>
              </div>
            </div>
            <!-- Liste paginée des carrières -->
            <div
              v-if="!loading"
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <div
                v-for="carriere in carreersAffiches"
                :key="carriere.id"
                class="border rounded shadow p-4"
              >
                <h2 class="font-bold">{{ carriere.titre }}</h2>
                <p>Besoin: {{ carriere.besoin }}</p>
                <p>Lieu: {{ carriere.lieu }}</p>
                <button
                  class="bg-blue-500 text-white p-2 rounded mt-2"
                  @click="afficherDetails(carriere.slug)"
                >
                  Voir les détails
                </button>
              </div>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-4">
              <button
                class="p-2 border rounded mr-2"
                @click="pageActuelle > 1 && pageActuelle--"
              >
                Précédent
              </button>
              <span>Page {{ pageActuelle }} / {{ nombreTotalPages }}</span>
              <button
                class="p-2 border rounded ml-2"
                @click="pageActuelle < nombreTotalPages && pageActuelle++"
              >
                Suivant
              </button>
            </div>
          </div>
          <!-- fibn -->
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
// Déclaration des variables réactives
const carreers = ref([]);
const rubriques = ref([]);
const filtreRubrique = ref("All");
const loading = ref(true);
const error = ref(null);
const pageActuelle = ref(1);
const itemsParPage = 6;

// Récupération des données depuis Directus
const fetchData = async () => {
  loading.value = true;
  try {
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;

    const carreersResponse = await fetch(
      `${directusUrl}/items/carriere?fields=*,type.designation`
    );
    if (!carreersResponse.ok)
      throw new Error("Erreur lors de la récupération des carrières.");
    const carreersData = await carreersResponse.json();

    // Vérification et génération du slug si absent
    carreers.value = carreersData.data.map((carriere) => ({
      ...carriere,
      slug: carriere.slug || carriere.titre.toLowerCase().replace(/\s+/g, "-"),
    }));

    console.log("Carrières récupérées :", carreers.value);

    const rubriquesResponse = await fetch(`${directusUrl}/items/rubriques`);
    if (!rubriquesResponse.ok)
      throw new Error("Erreur lors de la récupération des rubriques.");
    const rubriquesData = await rubriquesResponse.json();
    rubriques.value = ["All", ...rubriquesData.data.map((r) => r.designation)];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Charger les données
onMounted(() => {
  fetchData();
});

// Filtrage basé sur rubrique
const carreersFiltres = computed(() => {
  return filtreRubrique.value === "All"
    ? carreers.value
    : carreers.value.filter(
        (carriere) => carriere.type?.designation === filtreRubrique.value
      );
});

// Pagination
const nombreTotalPages = computed(() =>
  Math.ceil(carreersFiltres.value.length / itemsParPage)
);
const carreersAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * itemsParPage;
  return carreersFiltres.value.slice(debut, debut + itemsParPage);
});
const changerFiltre = (rubrique) => {
  filtreRubrique.value = rubrique;
  pageActuelle.value = 1;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("filtreRubrique", rubrique);
  }
};
// Redirection vers la page détail
const afficherDetails = (slug) => {
  console.log("Slug cliqué :", slug);
  if (!slug) {
    console.error("Erreur : le slug est indéfini !");
    return;
  }
  navigateTo(`/career/${slug}`);
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
