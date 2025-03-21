

<template>
  <div>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ carriere.titre }}</h1>
      <p>Type: {{ carriere.type.designation }}</p>
      <p>Besoin: {{ carriere.besoin }}</p>
      <p>Lieu: {{ carriere.lieu }}</p>
      <p>Type de Contrat: {{ carriere.type_contrat }}</p>
      <p>
        Date de clôture: {{ carriere.date_cloture }}
      </p>

      <button
        class="bg-green-500 text-white p-2 rounded mt-4"
        @click="alert('Postuler maintenant!')"
      >
        Postuler maintenant
      </button>

      <!-- Affichage du PDF -->
      <div class="mt-4">
        <a
          :href="carriere.pdf"
          target="_blank"
          class="text-blue-600 underline"
        >
          Ouvrir le PDF
        </a>
      </div>
    </div>
  </div>
</template>
