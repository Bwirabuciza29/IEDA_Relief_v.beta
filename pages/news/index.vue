<template>
  <section class="bg-green-50">
    <div class="p-8 mt-16">
      <div class="mj-container hidden sm:block">
        <!-- Début Actualités -->
        <div class="bg-white p-4 flex flex-col items-center justify-center">
          <img
            src="/img/chargement.gif"
            alt="Chargement"
            class="h-48 w-48 mb-2"
          />
          <p class="text-gray-600 text-center text-lg">Under Construction</p>
        </div>
      </div>
    </div>

    <hr class="mj-container" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <div>
      <LogLogger />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>

<script setup>
// Liste des articles
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

// Liste des pays
const listeDesPays = [
  "All",
  "DRC",
  "Burkina Faso",
  "Cameroon",
  "Niger",
  "RCA",
  "Mali",
];

// Filtre pays avec vérification côté client
const filtrePays = ref("All");
onMounted(() => {
  if (typeof localStorage !== "undefined") {
    filtrePays.value = localStorage.getItem("filtrePays") || "All";
  }
});

// Articles filtrés
const articlesFiltres = computed(() => {
  return filtrePays.value === "All"
    ? articles.value
    : articles.value.filter((article) => article.pays === filtrePays.value);
});

// Gestion de la pagination
const pageActuelle = ref(1);
const articlesParPage = 6;
const nombreTotalPages = computed(() =>
  Math.ceil(articlesFiltres.value.length / articlesParPage)
);
const articlesAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * articlesParPage;
  return articlesFiltres.value.slice(debut, debut + articlesParPage);
});

// Gestion du filtre
const changerFiltre = (pays) => {
  filtrePays.value = pays;
  // Réinitialiser la pagination
  pageActuelle.value = 1;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("filtrePays", pays);
  }
};

// Gestion des pages
const pageSuivante = () => {
  if (pageActuelle.value < nombreTotalPages.value) pageActuelle.value++;
};
const pagePrecedente = () => {
  if (pageActuelle.value > 1) pageActuelle.value--;
};

// Redirection vers l'article
const lirePlus = (slug) => {
  navigateTo(`/news/${slug}`);
}; // POUR LE TITRE
const currentPage = ref(1);
const articlesPerPage = 1;

const totalPages = computed(() =>
  Math.ceil(articles.value.length / articlesPerPage)
);

const currentArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  return articles.value.slice(start, start + articlesPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const readMore = (slug) => {
  navigateTo(`/news/${slug}`);
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>