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
              <span class="relative hover:text-custom-green">Retour</span>
              <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-green transition-all group-hover:w-full"
              ></span>
              <!-- Icône Font Awesome -->
              <i
                class="ml-2 fa fa-arrow-left transition-transform text-black duration-300 group-hover:rotate-180 hover:custom-green"
              ></i>
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

        <div v-if="article" class="overflow-hidden">
          <!-- Image principale -->
          <img
            :src="`https://admin.iedarelief.org/assets/${article.coverImg}`"
            :alt="article.titre"
            class="w-full h-64 object-cover"
          />

          <!-- Contenu de l'article -->
          <div class="flex flex-col bg-white my-4 p-6">
            <p class="text-sm text-gray-500 mb-2">
              <span class="fas fa-tag text-green-500 mr-2"></span>
              {{ article.categorie?.description }}
            </p>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              {{ article.titre }}
            </h1>

            <p
              class="text-gray-700 leading-relaxed text-justify"
              v-html="article.content"
            ></p>
          </div>

          <!-- Bouton retour -->
          <div class="p-6 border-t flex justify-end items-center space-x-4">
            <p class="text-gray-600 text-sm">
              Publié le
              <span class="font-semibold">{{
                formatDateTime(article.date_created)
              }}</span>
            </p>

            <div class="flex items-center space-x-1 group">
              <div class="relative inline-block">
                <!-- Bouton Partager -->
                <button
                  @click="toggleMenu"
                  class="text-custom-green font-bold relative group"
                >
                  Partager
                  <span
                    class="absolute bottom-0 left-0 w-full h-0.5 bg-custom-green transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left"
                  ></span>
                </button>

                <!-- Menu de partage (au-dessus) -->
                <div
                  v-if="menuOpen"
                  class="absolute bottom-full mb-2 w-auto border bg-green-50 rounded-lg z-10 transition-transform duration-300 ease-out"
                  :class="
                    menuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  "
                >
                  <ul class="flex flex-col p-4 space-y-2">
                    <li>
                      <SocialShare
                        :label="false"
                        network="email"
                        class="flex items-center space-x-2 text-custom-green hover:text-red-600 hover:rotate-45 transition-transform duration-200"
                      >
                      </SocialShare>
                    </li>

                    <li>
                      <SocialShare
                        :label="false"
                        network="whatsapp"
                        class="flex items-center space-x-2 text-custom-green hover:text-green-600 hover:rotate-45 transition-transform duration-200"
                      >
                      </SocialShare>
                    </li>
                    <li>
                      <SocialShare
                        :label="false"
                        network="facebook"
                        class="flex items-center space-x-2 text-custom-green hover:text-blue-600 hover:rotate-45 transition-transform duration-200"
                      >
                        <i class="fab fa-facebook"></i>
                        <span>Facebook</span>
                      </SocialShare>
                    </li>
                    <li>
                      <SocialShare
                        network="x"
                        :label="false"
                        class="flex items-center space-x-2 text-custom-green hover:text-gray-600 hover:rotate-45 transition-transform duration-200"
                      >
                        <i class="fab fa-x-twitter"></i>
                        <span>X</span>
                      </SocialShare>
                    </li>
                    <li>
                      <SocialShare
                        network="linkedin"
                        :label="false"
                        class="flex items-center space-x-2 text-custom-green hover:text-blue-700 hover:rotate-45 transition-transform duration-200"
                      >
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                      </SocialShare>
                    </li>
                  </ul>
                </div>
              </div>

              <img src="/img/an.gif" alt="Partager" class="w-10 h-10 -mt-3" />
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <p v-show="isLoading" class="text-gray-500 loader"></p>
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
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRuntimeConfig } from "#app";

const route = useRoute();
const router = useRouter();
const article = ref(null);
const error = ref(null);

// Fonction pour récupérer un article par slug
const fetchArticle = async () => {
  try {
    const slug = route.params.slug;
    const config = useRuntimeConfig();
    const directusUrl = config.public.directus.url;

    // Requête pour récupérer l'article avec son slug
    const response = await fetch(
      `${directusUrl}/items/article?filter[slug][_eq]=${slug}&fields=*,categorie.description,pays.designation`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'article.");
    }

    const data = await response.json();

    if (data.data.length === 0) {
      // Si aucun article trouvé, redirection vers la liste des articles
      router.push("/news");
    } else {
      article.value = data.data[0];
    }
  } catch (err) {
    error.value = err.message;
    console.error(err);
  }
};

// Charger l'article au montage
onMounted(() => {
  fetchArticle();
});

// Retour à la page précédente
const goBack = () => {
  router.back();
};

// Menu toggle (si nécessaire pour votre interface)
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
function formatDateTime(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
const isLoading = ref(false);
watch(
  route,
  () => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  },
  { immediate: true }
);
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
