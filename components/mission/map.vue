<template>
  <div class="relative">
    <h1 class="text-3xl lg:text-4xl font-bold -mt-16 mb-4 text-center">
      {{ t("map.title_1") }}
      <span class="font-sri text-green-600"> {{ t("map.title_2") }}</span>
    </h1>

    <!-- Carte -->
    <div id="map" class="w-full h-[600px] border-2 border-gray-300 z-10"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useNuxtApp } from "#app";
const { t } = useI18n();
const bureaux = [
  {
    name: "USA - Texas",
    lat: 29.7604,
    lng: -95.3698,
    description:
      "10103 Foundren Rd, Suite 435 Houston, Texas 77096<br>Tel: +1 202-555-0100",
  },
  {
    name: "Belgium - Brussels",
    lat: 50.8503,
    lng: 4.3517,
    description:
      "Rue des Hirondelles, 1 1000 Bruxelles / BELGIQUE<br>Tel: +32 2-555-0101",
  },
  {
    name: "Burkina Faso - Ouagadougou",
    lat: 12.3714,
    lng: -1.5197,
    description:
      "05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi, secteur 53, Section Plot 17, Parcelle No 6 Ouaga2000<br>Tel: +226 25-555-0102",
  },
  {
    name: "C.A.R - Bangui",
    lat: 4.3947,
    lng: 18.5582,
    description:
      "Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui<br>Tel: +236 70-555-0103",
  },
  {
    name: "Cameroun - Yaoundé",
    lat: 3.848,
    lng: 11.5021,
    description:
      "Derrière la sous-préfecture de Tshinga, montée Palais des congrès m.<br>Tel: +237 22-555-0104",
  },
  {
    name: "DRC - Kinshasa",
    lat: -4.4419,
    lng: 15.2663,
    description:
      "Avenue O.U.A, N°17, Quartier Basoko/GB, Commune de Ngaliema, ville de Kinshasa, RDC<br>Tel: +243 81-555-0105",
  },
  {
    name: "Niger - Niamey",
    lat: 13.5127,
    lng: 2.1126,
    description:
      "Quartier Bobiel vers école Galaxy plus, premier virage à gauche après le siège National de ADN FUSHA, Commune I, Ville de Niamey<br>Tel: +227 20-555-0106",
  },
  {
    name: "Mali - Bamako",
    lat: 12.6392,
    lng: -8.0029,
    description:
      "BP 3113 Bamako, Hamdallaye, ACI 2000, 5ème Arrondissement<br>Tel: +223 20-555-0107",
  },
];

onMounted(() => {
  const { $L } = useNuxtApp();

  // Initialisation de la carte
  const map = $L.map("map").setView([10, 0], 2);

  // Ajout d'une couche OpenStreetMap
  $L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Ajout des marqueurs avec les informations
  bureaux.forEach((bureau) => {
    $L.marker([bureau.lat, bureau.lng]).addTo(map).bindPopup(`
      <div class="p-4 max-w-xs bg-white relative">
        <div class="flex items-center mb-2">
          <!-- SVG Icon -->
          <div class="text-custom-green mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-custom-green relative group">
            ${bureau.name}
            <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-custom-green transition-all duration-500 group-hover:w-full"></span>
          </h3>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          ${bureau.description}
        </p>
        <div class="mt-3">
          <NuxtLink to="/" class="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            En savoir plus
          </NuxtLink>
        </div>
        <!-- Filigrane Image -->
        <img src="/img/logo.png" alt="Filigrane" class="absolute bottom-4 right-2 h-12 w-24  pointer-events-none">
      </div>
    `);
  });
});
</script>
