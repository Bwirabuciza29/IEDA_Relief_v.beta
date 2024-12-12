<template>
  <div class="mj-container my-4">
    <!-- Liste des pays -->
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
        <img :src="country.flag" :alt="country.name" class="w-6 h-4" />
        <span class="font-medium">{{ country.name }}</span>
      </div>
    </div>

    <!-- Loader -->
    <div v-show="isLoading" class="loader"></div>

    <!-- Liste des images -->
    <div
      v-if="filteredImages.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <div v-for="image in filteredImages" :key="image.id">
        <IKImage
          :url-endpoint="urlEndpoint"
          :path="image.path"
          width="400"
          class="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-[-10px]"
        />
      </div>
    </div>
    <p v-else class="text-center text-xl font-semibold">
      Veuillez patienter pour le chargement de la gallerie
      <span class="text-green-500 font-bold">{{ activeCountry }}...</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { IKImage } from "imagekitio-vue";

// Liste des pays
const countries = [
  {
    name: "RCA",
    flag: "https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",
  },
  {
    name: "cameroun",
    flag: "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
  },
  {
    name: "RDC",
    flag: "https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png",
  },
  {
    name: "NIGER",
    flag: "https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png",
  },
  {
    name: "mali",
    flag: "https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png",
  },
];

// Données des images
const images = ref([]);
const urlEndpoint = "https://ik.imagekit.io/cameroun";
const activeCountry = ref(countries[0].name); // RCA est par défaut actif
const isLoading = ref(false);

// Charger les images depuis l'API
const fetchImages = async () => {
  isLoading.value = true;
  const apiKey = "private_bcy6iVTNSQCxz2EkywMUDSnAAsw=";
  const folderPath = `/${activeCountry.value}`;
  const url = `https://api.imagekit.io/v1/files?path=${folderPath}&includeFolder=false`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(apiKey + ":")}`,
      },
    });
    const data = await response.json();
    images.value = data.map((file) => ({
      id: file.fileId,
      path: file.filePath,
      country: activeCountry.value,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);
  } finally {
    isLoading.value = false;
  }
};

// Fonction pour changer de pays
const selectCountry = (country) => {
  activeCountry.value = country;
  localStorage.setItem("activeCountry", country);
  fetchImages(); // Recharger les images pour le pays actif
};

// Filtrer les images en fonction du pays actif
const filteredImages = computed(() => {
  return images.value.filter((image) => image.country === activeCountry.value);
});

// Initialisation
onMounted(() => {
  const storedCountry = localStorage.getItem("activeCountry");
  if (storedCountry && countries.some((c) => c.name === storedCountry)) {
    activeCountry.value = storedCountry;
  }
  fetchImages();
});
</script>

<style scoped>
.bg-custom-green {
  background-color: #4caf50;
}

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
