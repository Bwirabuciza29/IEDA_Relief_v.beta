<template>
  <div class="bg-gray-50 min-h-screen py-10">
    <div class="container mx-auto px-4">
      <div v-if="article" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Image principale -->
        <img
          :src="article.image"
          alt="Image de l'article"
          class="w-full h-64 object-cover"
        />

        <!-- Contenu de l'article -->
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">{{ article.categorie }}</p>
          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            {{ article.titre }}
          </h1>
          <p class="text-gray-600 text-sm mb-6">
            Publié le <span class="font-semibold">{{ article.date }}</span>
          </p>
          <p class="text-gray-700 leading-relaxed">
            {{ article.description }}
          </p>
        </div>

        <!-- Bouton retour -->
        <div class="p-6 border-t bg-gray-100 flex justify-end">
          <button
            @click="goBack"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <i class="fas fa-arrow-left mr-2"></i> Retour
          </button>
        </div>
      </div>

      <div v-else class="text-center">
        <p class="text-gray-500">Chargement de l'article...</p>
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
</script>

<style>
/* Font Awesome import */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
