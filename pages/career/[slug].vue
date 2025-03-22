<template>
  <div>
    <div class="mj-container my-10 relative mt-24">
      <!-- Image filigranne au coin supérieur à gauche -->
      <div class="absolute -top-8 -left-28 w-28 h-28 hidden sm:block z-10">
        <img
          src="/img/sha.png"
          alt="Filigrane haut gauche"
          class="w-full h-full object-contain opacity-20"
        />
      </div>

      <!-- Contenu principal -->
      <div class="bg-green-50 p-4">
        <div class="mb-8 flex items-center justify-between space-x-4">
          <div class="whitespace-nowrap aos-init aos-animate">
            <NuxtLink to="/career" class="group">
              <h2
                class="flex items-center justify-start text-xl font-bold text-bleu relative cursor-pointer"
              >
                <span class="relative hover:text-custom-green">
                  {{ t("news.rtn") }}
                </span>
                <span
                  class="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-green transition-all group-hover:w-full"
                ></span>
                <!-- Icône Font Awesome -->
              </h2>
            </NuxtLink>
          </div>
          <div class="relative mt-1 h-4 w-full">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
        </div>
        <div>
          <div v-if="!loading && carriere" class="p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <!-- Carte Titre -->
              <div class="bg-blue-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-blue-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-heading"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div class="text-lg text-gray-700">Description du poste :</div>
                <div class="text-2xl font-semibold text-gray-800">
                  {{ carriere.titre }}
                </div>
              </div>

              <!-- Carte Besoin -->
              <div class="bg-green-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-green-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-users"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">Besoin :</div>
                  <div class="text-2xl font-bold text-gray-800">
                    {{ carriere.besoin }} personnes
                  </div>
                </div>
              </div>

              <!-- Carte Lieu -->
              <div class="bg-yellow-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-yellow-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-map-marker-alt"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">Lieu :</div>
                  <div class="text-2xl font-bold text-gray-800">
                    {{ carriere.lieu }}
                  </div>
                </div>
              </div>

              <!-- Carte Type de contrat -->
              <div class="bg-pink-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-pink-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-file-signature"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">Type de contrat :</div>
                  <div class="text-2xl font-bold text-gray-800">
                    {{ carriere.type_contrat }}
                  </div>
                </div>
              </div>

              <!-- Carte Date de rédaction -->
              <div class="bg-purple-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-purple-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-calendar-alt"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">Date de rédaction :</div>
                  <div class="text-xl text-gray-800">
                    {{ carriere.date_redaction }}
                  </div>
                </div>
              </div>

              <!-- Carte Date de clôture -->
              <div class="bg-red-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-red-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-calendar-times"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">Date de clôture :</div>
                  <div class="text-xl text-gray-800">
                    {{ carriere.date_cloture }}
                  </div>
                </div>
              </div>

              <!-- Carte Date de prise de service -->
              <div class="bg-indigo-100 rounded-lg p-6 relative">
                <div
                  class="absolute top-4 right-4 text-indigo-300 text-[6vw] md:text-6xl opacity-20"
                >
                  <i class="fas fa-calendar-check"></i>
                  <!-- Icône Font Awesome -->
                </div>
                <div>
                  <div class="text-lg text-gray-700">
                    Date de prise de service :
                  </div>
                  <div class="text-xl text-gray-800">
                    {{ carriere.date_prise }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Div pour ouvrir la modale PDF -->
            <div
              v-if="carriere.pdf"
              class="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4"
            >
              <!-- Div pour ouvrir la modale PDF -->
              <div
                class="bg-blue-500 text-white p-2 rounded flex items-center cursor-pointer mb-4 sm:mb-0"
                @click="ouvrirPdf"
              >
                <i class="fas fa-file-pdf mr-2"></i> Voir le PDF
              </div>

              <!-- Div pour postuler -->
              <a
                href="mailto:jobsrdc@iedarelief.org"
                class="bg-green-500 text-white p-2 rounded flex items-center cursor-pointer"
              >
                <i class="fas fa-paper-plane mr-2"></i> Postuler maintenant
              </a>
            </div>
          </div>

          <div v-else class="text-center">
            <p v-show="isLoading" class="text-gray-500 loader"></p>
          </div>

          <!-- MODALE PDF -->
          <div
            v-if="pdfVisible"
            class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="rounded-lg overflow-hidden w-full max-w-3xl relative">
              <button
                class="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                @click="fermerPdf"
              ></button>
              <div class="flex justify-center items-center w-full py-6">
                <div
                  class="w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                >
                  <div
                    class="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-300"
                  >
                    <h2 class="text-lg font-semibold text-custom-green">
                      Aperçu du document
                    </h2>
                    <button
                      @click="fermerPdf"
                      class="relative text-sm text-custom-green font-semibold overflow-hidden group"
                    >
                      Fermer
                      <span
                        class="absolute left-0 bottom-0 h-0.5 bg-custom-green w-0 group-hover:w-full transition-all duration-300"
                      ></span>
                    </button>
                  </div>
                  <iframe
                    :src="`https://docs.google.com/gview?url=${pdfUrl}&embedded=true`"
                    class="w-full h-[80vh] bg-white"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
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
  </div>
</template>

<script setup>
import { useRoute, useRuntimeConfig } from "#app";
const { t, locale } = useI18n();
import { ref, onMounted, watch } from "vue";

const route = useRoute();
const config = useRuntimeConfig();
const carriere = ref(null);
const loading = ref(true);
const pdfUrl = ref(null);
const pdfVisible = ref(false);
const isLoading = ref(false);
watch(
  route,
  () => {
    isLoading.value = true;
    loading.value = true; // En début de chargement, mettre aussi loading à true
    setTimeout(() => {
      isLoading.value = false;
      loading.value = false; // Fin du chargement
    }, 1000);
  },
  { immediate: true }
);
onMounted(async () => {
  const directusUrl = config.public.directus.url;
  try {
    const response = await fetch(
      `${directusUrl}/items/carriere?filter[slug][_eq]=${route.params.slug}&fields=*,pdf.id,pdf.filename_disk`
    );
    const data = await response.json();
    if (data.data.length > 0) {
      carriere.value = data.data[0];

      if (carriere.value.pdf) {
        pdfUrl.value = `${directusUrl}/assets/${carriere.value.pdf.id}`;
      }
    } else {
      carriere.value = null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des détails :", error);
  } finally {
    loading.value = false;
  }
});

const ouvrirPdf = () => {
  pdfVisible.value = true;
};

const fermerPdf = () => {
  pdfVisible.value = false;
};
</script>

<style scoped>
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
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
