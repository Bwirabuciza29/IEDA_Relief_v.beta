<template>
  <div>
    <div
      class="grid grid-cols-2 gap-4 md:flex md:justify-center md:space-x-4 mb-8 mt-8"
    >
      <div
        v-for="country in countries"
        :key="country.name"
        :class="{
          'flex items-center justify-center space-x-2 cursor-pointer px-4 py-2 w-full md:w-auto': true,
          'bg-custom-green text-white': activeCountry === country.name,
          'bg-white border border-gray-300': activeCountry !== country.name,
        }"
        @click="selectCountry(country.name)"
      >
        <NuxtImg :src="country.flag" :alt="country.name" class="w-6 h-4" />
        <span class="font-medium">{{ country.name }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
// Les catégori
import { ref, computed } from "vue";
const { t } = useI18n();
const countries = [
  {
    name: "USA",
    flag: "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
  },
  {
    name: "Belgique",
    flag: "https://www.countryflags.com/wp-content/uploads/belgium-belgian-flag-png-square-large.png",
  },
  {
    name: "BurkinaFaso",
    flag: "https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",
  },
  {
    name: "RCA",
    flag: "https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",
  },
  {
    name: "Cameroun",
    flag: "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
  },
  {
    name: "RD.Congo",
    flag: "https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png",
  },
  {
    name: "Niger",
    flag: "https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png",
  },
  {
    name: "Mali",
    flag: "https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png",
  },
];

// Vérifiez si localStorage est disponible
const activeCountry = ref("USA"); // Valeur par défaut

if (typeof window !== "undefined" && window.localStorage) {
  activeCountry.value = localStorage.getItem("activeCountry") || "USA";
}

// Filtrer les images par pays
const filteredImages = computed(() => {
  return images.filter((image) => image.country === activeCountry.value);
});

// Fonction pour changer de pays
const selectCountry = (country) => {
  activeCountry.value = country;
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("activeCountry", country);
  }
};
</script>

