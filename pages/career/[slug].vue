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
            <h2
              class="flex items-center justify-start text-xl font-bold text-bleu relative group cursor-pointer"
              @click="goBack"
            >
              <span class="relative hover:text-custom-green">
                {{ t("news.rtn") }}</span
              >
              <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-green transition-all group-hover:w-full"
              ></span>
              <!-- Icône Font Awesome -->
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
        <div>
          <div v-if="!loading && carriere" class="p-4">
            <h1 class="text-2xl font-bold mb-4">{{ carriere.titre }}</h1>
            <p class="mb-2">
              <strong>Besoin :</strong> {{ carriere.besoin }} personnes
            </p>
            <p class="mb-2"><strong>Lieu :</strong> {{ carriere.lieu }}</p>
            <p class="mb-2">
              <strong>Type de contrat :</strong> {{ carriere.type_contrat }}
            </p>
            <p class="mb-2">
              <strong>Date de la Rédaction de l’offre :</strong>
              {{ carriere.date_redaction }}
            </p>
            <p class="mb-2">
              <strong>Date de clôture :</strong> {{ carriere.date_cloture }}
            </p>
            <p class="mb-4">
              <strong>Date de Prise de Service :</strong>
              {{ carriere.date_prise }}
            </p>

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
              <div
                class="bg-green-500 text-white p-2 rounded flex items-center cursor-pointer"
              >
                <i class="fas fa-paper-plane mr-2"></i> Postuler maintenant
              </div>
            </div>
          </div>

          <div v-else-if="loading">
            <p>Chargement...</p>
          </div>

          <div v-else>
            <p>Carrière non trouvée.</p>
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
  </div>
</template>

<script setup>
import { useRoute, useRuntimeConfig } from "#app";
const { t, locale } = useI18n();
import { ref, onMounted } from "vue";

const route = useRoute();
const config = useRuntimeConfig();
const carriere = ref(null);
const loading = ref(true);
const pdfUrl = ref(null);
const pdfVisible = ref(false);

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
/* Animation d'apparition de la modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
