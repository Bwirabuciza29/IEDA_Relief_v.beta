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
              class="flex items-center justify-start text-xl font-bold text-bleu relative group"
              @click="goBack"
            >
              <span class="relative hover:text-custom-green">Retour</span>
              <span
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-custom-green transition-all group-hover:w-full"
              ></span>
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
            :src="article.image"
            alt="Image de l'article"
            class="w-full h-64 object-cover"
          />

          <!-- Contenu de l'article -->
          <div class="flex flex-col bg-white my-4 p-6">
            <p class="text-sm text-gray-500 mb-2">
              <span class="fas fa-tag text-green-500 mr-2"></span>
              {{ article.categorie }}
            </p>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              {{ article.titre }}
            </h1>

            <p class="text-gray-700 leading-relaxed text-justify">
              {{ article.description }}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatibus, pariatur eveniet voluptates ipsa nesciunt nisi
              consectetur quam molestias rem totam illum enim quos. Quis unde
              sequi alias non vero?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor voluptatibus, pariatur eveniet voluptates
              ipsa nesciunt nisi consectetur quam molestias rem totam illum enim
              quos. Quis unde sequi alias non vero?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolor voluptatibus, pariatur eveniet
              voluptates ipsa nesciunt nisi consectetur quam molestias rem totam
              illum enim quos. Quis unde sequi alias non vero?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolor voluptatibus,
              pariatur eveniet voluptates ipsa nesciunt nisi consectetur quam
              molestias rem totam illum enim quos. Quis unde sequi alias non
              vero?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolor voluptatibus, pariatur eveniet voluptates ipsa nesciunt nisi
              consectetur quam molestias rem totam illum enim quos. Quis unde
              sequi alias non vero?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor voluptatibus, pariatur eveniet voluptates
              ipsa nesciunt nisi consectetur quam molestias rem totam illum enim
              quos. Quis unde sequi alias non vero?
            </p>
          </div>

          <!-- Bouton retour -->
          <div class="p-6 border-t flex justify-end items-center space-x-4">
            <p class="text-gray-600 text-sm">
              Publié le
              <span class="font-semibold">{{ article.date }}</span>
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
          <p class="text-gray-500">Chargement de l'article...</p>
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

const route = useRoute();
const router = useRouter();

const article = ref(null);

const articles = ref([
  {
    id: 1,
    titre: "Premier Article",
    slug: "premier-article",
    description: "Ceci est une brève description du premier article.",
    image: "/img/1.jpg",
    date: "2025-01-10",
    categorie: "Actualité",
    pays: "DRC",
  },
  {
    id: 2,
    titre: "Deuxième Article",
    slug: "deuxieme-article",
    description: "Description pour le deuxième article.",
    image: "/img/2.jpg",
    date: "2025-01-09",
    categorie: "Tech",
    pays: "Burkina Faso",
  },
  {
    id: 3,
    titre: "Troisième Article",
    slug: "troisieme-article",
    description:
      "Un aperçu approfondi sur les dernières tendances en technologie.",
    image: "/img/3.jpg",
    date: "2025-01-12",
    categorie: "Tech",
    pays: "Cameroon",
  },
  {
    id: 4,
    titre: "Quatrième Article",
    slug: "quatrieme-article",
    description:
      "Découvrez les impacts de l'intelligence artificielle sur notre quotidien.",
    image: "/img/4.jpg",
    date: "2025-01-14",
    categorie: "Innovation",
    pays: "Niger",
  },
  {
    id: 5,
    titre: "Cinquième Article",
    slug: "cinquieme-article",
    description: "Les meilleures pratiques pour le développement web moderne.",
    image: "/img/5.jpg",
    date: "2025-01-15",
    categorie: "Web",
    pays: "RCA",
  },
  {
    id: 6,
    titre: "Sixième Article",
    slug: "sixieme-article",
    description: "Comment sécuriser vos données personnelles en ligne.",
    image: "/img/6.jpg",
    date: "2025-01-16",
    categorie: "Sécurité",
    pays: "Mali",
  },
  {
    id: 7,
    titre: "Septième Article",
    slug: "septieme-article",
    description: "L'évolution des frameworks JavaScript en 2025.",
    image: "/img/7.jpg",
    date: "2025-01-17",
    categorie: "Tech",
    pays: "DRC",
  },
]);

// Chargement de l'article à partir du slug
onMounted(() => {
  const slug = route.params.slug;
  // Recherche par slug
  article.value = articles.value.find((item) => item.slug === slug);

  if (!article.value) {
    router.push("/news"); // Redirection si l'article n'existe pas
  }
});

// Retour à la page précédente
const goBack = () => {
  router.back();
};
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style>
/* Font Awesome import */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
