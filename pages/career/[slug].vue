<template>
  <div class="mt-24">
    <div v-if="!loading && carriere">
      <h1 class="text-2xl font-bold">{{ carriere.titre }}</h1>
      <p><strong>Besoin :</strong> {{ carriere.besoin }} personnes</p>
      <p><strong>Lieu :</strong> {{ carriere.lieu }}</p>
      <p><strong>Type de contrat :</strong> {{ carriere.type_contrat }}</p>
      <p>
        <strong>Date de la Rédaction de l’offre :</strong>
        {{ carriere.date_redaction }}
      </p>
      <p><strong>Date de clôture :</strong> {{ carriere.date_cloture }}</p>
      <p>
        <strong>Date de Prise de Service :</strong> {{ carriere.date_prise }}
      </p>

      <!-- Bouton pour ouvrir la modale PDF -->
      <div v-if="carriere.pdf" class="mt-4">
        <button class="bg-blue-500 text-white p-2 rounded" @click="ouvrirPdf">
          Voir le PDF
        </button>
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
</template>

<script setup>
import { useRoute, useRuntimeConfig } from "#app";
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
