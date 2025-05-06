<template>
  <section class="bg-green-50 relative mt-24">
    <div class="mj-container bg-green-50 mt-16 p-8">
      <div
        class="relative flex flex-col md:flex-row bg-custom-green overflow-hidden"
      >
        <!-- Texte -->
        <div
          class="w-full md:w-1/2 p-6 md:p-8 text-white flex flex-col justify-center relative z-20"
        >
          <h1 class="text-4xl font-bold mb-2">{{ t("img.title_1") }}</h1>
          <nav class="text-sm text-black">
            <div class="inline-block bg-white p-3 rounded-lg">
              <a href="/" class="relative group font-semibold">
                {{ t("about.title_2") }}
                <span
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-custom-green scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"
                ></span>
              </a>
              /
              <span class="text-bold text-custom-green">
                <span>{{ t("img.title_1") }}</span></span
              >
            </div>
          </nav>
        </div>

        <!-- Image -->
        <div class="hidden md:block md:w-1/2 relative">
          <!-- Dégradé à gauche -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-custom-green to-transparent z-10"
          ></div>
          <!-- Image pleine largeur/hauteur -->
          <img
            src="/img/gal.jpg"
            alt="About Us Section"
            class="w-full h-60 object-cover"
          />
        </div>
      </div>
    </div>

    <!-- contenu de l'equipe -->
    <div class="mj-container">
      <div class="py-8 px-4">
        <!-- Titre Principal -->
        <div class="text-center">
          <p class="text-custom-green uppercase tracking-widest text-xs">
            {{ t("img.title_1") }}
          </p>
          <h1 class="text-3xl font-semibold">
            {{ t("team.title_2") }}
            <span class="font-sri"> {{ t("img.title_1") }}</span>
          </h1>
        </div>
      </div>
    </div>
    <!-- gallerie ici -->
    <div class="mj-container">
      <!-- <h1 class="text-4xl font-bold text-center mb-6">
        {{ t("img.title_3") }}
      </h1> -->

      <!-- img debut -->
      <div class="mj-container my-4 bg-white p-2">
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
        <div class="relative mt-1 mb-4 h-4 w-full">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
        <!-- Loader -->
        <div v-show="isLoading" class="loader"></div>
        <div>
          <div
            v-if="filteredImages.length"
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div
              v-for="image in filteredImages"
              :key="image.id"
              class="relative group overflow-hidden"
            >
              <!-- Image avec hover avancée et transition -->
              <div class="relative overflow-hidden">
                <IKImage
                  :url-endpoint="urlEndpoint"
                  :path="image.path"
                  width="400"
                  class="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-y-[-10px]"
                />
              </div>

              <!-- Icône en bas à droite -->
              <div
                class="absolute bottom-20 right-0 bg-green-50 p-1 flex items-center justify-center"
              >
                <div class="relative w-8 h-8">
                  <p
                    class="h-full w-full bg-custom-green text-white p-4 absolute -bottom-1 -right-1"
                  ></p>
                </div>
              </div>

              <!-- Texte avec animation de soulignement et apparition au hover -->
              <div class="p-4">
                <p class="font-bold text-lg relative inline-block">
                  {{ activeCountry }}
                  <span
                    class="absolute left-0 bottom-0 h-[2px] bg-custom-green w-0 transition-all duration-300 ease-in-out group-hover:w-full"
                  ></span>
                </p>
                <p
                  class="text-sm text-gray-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  Par Equipe IEDA Relief {{ activeCountry }}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-xl font-semibold">
            {{ t("dialogue.title_1") }}
            <span class="text-custom-green font-bold"
              >{{ activeCountry }}
            </span>
            {{ t("dialogue.title_2") }}
          </div>
        </div>
        <div class="relative mt-1 mb-4 h-4 w-full">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
        <!-- Liste des images -->
      </div>

      <!-- img end -->
    </div>
    <hr class="mj-container mt-8" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { IKImage } from "imagekitio-vue";
const { t } = useI18n();
// Liste des pays
const countries = [
  {
    id: "1",
    name: "RCA",
    flag: "https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",
  },
  {
    id: "2",
    name: "cameroun",
    flag: "https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",
  },
  {
    id: "3",
    name: "RDC",
    flag: "https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png",
  },
  {
    id: "4",
    name: "NIGER",
    flag: "https://www.countryflags.com/wp-content/uploads/niger-flag-png-large.png",
  },
  {
    id: "5",
    name: "mali",
    flag: "https://www.countryflags.com/wp-content/uploads/mali-flag-png-large.png",
  },
  {
    id: "6",
    name: "BurkinaFaso",
    flag: "https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",
  },
];

// Données des images
const images = ref([]);
const urlEndpoint = "https://ik.imagekit.io/cameroun";
const activeCountry = ref(countries[0].name);
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
  fetchImages();
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
