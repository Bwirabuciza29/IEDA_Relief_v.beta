<template>
  <div class="mt-24">
    <div v-if="!loading && carriere">
      <h1 class="text-2xl font-bold">{{ carriere.titre }}</h1>
      <p><strong>Besoin :</strong> {{ carriere.besoin }} personnes</p>
      <p><strong>Lieu :</strong> {{ carriere.lieu }}</p>
      <p><strong>Description :</strong> {{ carriere.description }}</p>

      <!-- Bouton pour afficher le PDF -->
      <div v-if="carriere.pdf" class="mt-4">
        <button class="bg-blue-500 text-white p-2 rounded" @click="ouvrirPdf">
          Voir le PDF
        </button>
      </div>

      <!-- Affichage du PDF en iframe si ouvert -->
      <div v-if="pdfVisible" class="mt-4">
        <iframe :src="pdfUrl" class="w-full h-[500px] border rounded"></iframe>
      </div>
    </div>

    <div v-else-if="loading">
      <p>Chargement...</p>
    </div>

    <div v-else>
      <p>Carrière non trouvée.</p>
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

      // Générer l'URL du fichier PDF si disponible
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

// Fonction pour afficher le PDF
const ouvrirPdf = () => {
  pdfVisible.value = true;
};
</script>
