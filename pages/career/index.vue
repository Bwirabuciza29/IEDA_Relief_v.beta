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
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div
                v-for="carriere in carreersAffiches"
                :key="carriere.id"
                class="relative border border-custom-green rounded-lg p-4 bg-white transition-shadow hover:border-gray-600"
              >
                <!-- Type Badge -->
                <div
                  class="absolute top-2 right-2 text-xs sm:text-sm text-gray-500"
                >
                  <span
                    class="flex bg-custom-green px-3 py-1 rounded-lg text-white items-center space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 sm:w-4 sm:h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                    <span>{{ carriere.type.designation }}</span>
                  </span>
                </div>

                <!-- Title -->
                <h2
                  class="text-lg sm:text-xl mt-4 font-bold text-gray-800 mb-4"
                >
                  {{ carriere.titre }}
                </h2>

                <!-- Details -->
                <div class="text-xs sm:text-sm mb-4 text-gray-600 space-y-2">
                  <p>
                    <strong>Besoin :</strong> {{ carriere.besoin }} personne(s)
                  </p>
                  <p><strong>Lieu :</strong> {{ carriere.lieu }}</p>
                  <p>
                    <strong>Type de contrat :</strong>
                    {{ carriere.type_contrat }}
                  </p>
                  <p>
                    <strong>Date de rédaction :</strong>
                    {{ formatDateTime(carriere.date_redaction) }}
                  </p>
                  <p>
                    <strong>Date de clôture :</strong>
                    {{ formatDateTime(carriere.date_cloture) }}
                  </p>
                  <p>
                    <strong>Date de prise de service :</strong>
                    {{ carriere.date_prise }}
                  </p>
                </div>

                <!-- Voir plus button -->

                <button
                  class="absolute bottom-2 right-2 flex items-center space-x-1 text-custom-green hover:text-custom-greens transition-colors group"
                  @click="afficherDetails(carriere.slug)"
                >
                  <span
                    class="text-xs sm:text-sm font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    Voir plus
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              v-if="!loading && carreersAffiches.length === 0"
              class="text-center text-gray-500 py-10 font-semibold"
            >
              <img
                src="/img/po.gif"
                alt="Chargement"
                class="mx-auto mb-4 w-24 h-24"
              />
              {{ t("carriere.none") }}
            </div>
            <!-- Pagination -->
            <!-- Pagination -->
            <div class="flex justify-center items-center mt-6 space-x-4">
              <!-- Bouton Précédent -->
              <div
                @click="pageActuelle > 1 && pageActuelle--"
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
                @click="pageActuelle < nombreTotalPages && pageActuelle++"
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
const formatDateTime = (date) => {
  const optionsDate = { year: "numeric", month: "long", day: "numeric" };
  const optionsTime = { hour: "2-digit", minute: "2-digit" };

  const formattedDate = new Date(date).toLocaleDateString("fr-FR", optionsDate);
  const formattedTime = new Date(date).toLocaleTimeString("fr-FR", optionsTime);

  return `${formattedDate} à ${formattedTime}`;
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
