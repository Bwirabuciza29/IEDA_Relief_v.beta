<template>
  <div>
    <hero
      background="/flags/pbn-chad.jpeg"
      subtitle="Mission"
      titleHighlight="ieda Relief"
      title="Tchad"
      description="Helping communities to become Self-sufficient"
      buttonText="Donate now"
      buttonColor="bg-custom-green hover:bg-blue-700"
    />
    <alls
      title="Tchad"
      subtitle="Creating a stable environment using sustainable solutions"
      description="Depuis 2008, nous avons travaillé dans 12 pays avec un investissement de $80M sur 260 projets en assistant les personnes durant leur transition vers le développement à long terme. Notre effectif de plus de 1.100 employés met l’accent sur les groupes marginalisés à savoir les personnes déplacées internes et les réfugiés. Nous avons facilité et fourni les composantes clés d’assistance et couplé des activités en développement des capacités communautaires pour créer une voix locale, une appropriation des compétences techniques, afin d’accroitre leur viabilité à long terme. "
      email="tchadmission@iedarelief.org"
      phone="+23563016686, 63096523"
      address="République du Tchad,  N’Djamena, Quartier Chagoua, Rue 5713, porte 0265 près de l’hôtel la Persévérance,  axe CA7"
      rightImage="/flags/tchad.jpg"
      vectorImage="/img/Vectoria.png"
      bgColor="bg-custom-green"
    />
    <div class="mt-16 bg-white p-4 border-t border-b border-custom-green">
      <log />
    </div>
    <volunteer
      title="Join our Mission"
      imageSrc="/flags/pbn-chad.jpeg"
      imageAlt="Volunteer helping"
      badge="IEDA Relief"
      cardTitle="Helping communities to become Self-sufficient..."
      cardText="Helping others and making a difference in the world is what will help to make the world a better place by improving people's lives. One person at a time, one day at a time, and one project at a time, you can make a difference that will leave a lasting impact on the world."
      buttonText="Donate now"
      accentColor="custom-green"
      cardBgColor="custom-blue"
    />
    <div></div>
    <div
      class="my-4 py-4 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/img/bg/m.png')"
    >
      <div class="relative h-4 w-full">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
        ></div>
      </div>
      <div class="pt-2 pb-8 px-4 mj-container">
        <!-- Titre Principal -->
        <div class="text-center my-6">
          <p class="text-custom-green uppercase tracking-widest text-xs">
            {{ t("team.title_1") }}
          </p>
          <h1 class="text-3xl font-semibold">
            {{ t("team.title_2") }}
            <span class="font-sri"> {{ t("team.title_3") }}</span>
          </h1>
        </div>

        <!-- Navigation des catégories -->
        <div class="flex justify-center space-x-4 mb-8 flex-wrap md:flex-nowrap">
          <button
            v-for="(category, index) in categories"
            :key="index"
            :class="[
              'px-4 py-2 text-lg font-medium border-b-2',
              activeCategory === category
                ? 'border-custom-green text-custom-green'
                : 'border-transparent text-gray-600 hover:text-gray-800',
              // Taille et espacement adaptatifs
              'sm:text-base sm:px-3 sm:py-1 md:text-lg md:px-4 md:py-2',
            ]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <!-- Section : Management -->
        <div
          v-show="activeCategory === t('team.btn_1')"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="(member, index) in team"
            :key="index"
            class="relative group bg-white rounded-lg overflow-hidden hover:bg-custom-green transition"
          >
            <div
              class="absolute inset-0 bg-custom-green hover:border-white opacity-0 group-hover:opacity-90 transition"
            ></div>
            <!-- Contenu des cartes -->
            <div class="relative p-4 text-center group-hover:text-white z-10">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-custom-green hover:border-white"
              />
              <h2 class="text-lg font-semibold">{{ member.name }}</h2>
              <p class="text-sm">{{ member.role }}</p>

              <!-- Icônes -->
              <!-- Icônes -->
              <div class="flex justify-center space-x-2 mt-4">
                <a
                  :href="member.social.linkedin"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  :href="member.social.twitter"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-x-twitter"></i>
                </a>
                <a
                  :href="member.social.facebook"
                  target="_blank"
                  class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Section : Board of Direction -->
        <div
          v-show="activeCategory === t('team.btn_2')"
          class="text-center text-gray-600"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(member, index) in board"
              :key="index"
              class="relative group bg-white rounded-lg overflow-hidden hover:bg-custom-green transition"
            >
              <!-- Effet de Hover -->
              <div
                class="absolute inset-0 bg-custom-green opacity-0 group-hover:opacity-90 transition"
              ></div>

              <!-- Contenu des cartes -->
              <div class="relative p-4 text-center group-hover:text-white z-10">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-custom-green hover:borger-white"
                />
                <h2 class="text-lg font-semibold">{{ member.name }}</h2>
                <p class="text-sm">{{ member.role }}</p>

                <!-- Icônes -->
                <!-- Icônes -->
                <div class="flex justify-center space-x-2 mt-4">
                  <a
                    :href="member.social.linkedin"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    :href="member.social.twitter"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-x-twitter"></i>
                  </a>
                  <a
                    :href="member.social.facebook"
                    target="_blank"
                    class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-custom-green hover:bg-white hover:text-custom-green transition"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section : Financial Repport -->
        <div
          v-show="activeCategory === t('team.btn_3')"
          class="text-center text-gray-600"
        >
          <all />
        </div>
      </div>
      <div class="relative mb-2 h-4 w-full">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
        ></div>
      </div>
    </div>
    <actualite />
  </div>
</template>
<script setup>
const { t } = useI18n();

// Les catégories
const categories = [t("team.btn_1"), t("team.btn_2"), t("team.btn_3")];

// Catégorie active
const activeCategory = ref(t("team.btn_1"));
const team = [
  {
    name: "Phil MAANULWA",
    role: t("team.lead_1"),
    image: "/img/coach.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  },
  {
    name: "Valentin TAPSOPA",
    role: t("team.lead_4"),
    image: "/img/valantin.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Christine ANGELANI",
    role: t("team.lead_2"),
    image: "/img/christine.jpg",
    social: {
      linkedin: "https://linkedin.com/in/emmarussel",
      twitter: "https://twitter.com/emmarussel",
      facebook: "https://facebook.com/emmarussel",
    },
  },
  {
    name: "Timothy MUKULE",
    role: t("team.lead_3"),
    image: "/img/tim.jpg",
    social: {
      linkedin: "https://linkedin.com/in/alexberil",
      twitter: "https://twitter.com/alexberil",
      facebook: "https://facebook.com/alexberil",
    },
  },
];
const board = [
  {
    name: "Dulacha WARIO",
    role: t("team.lead_5"),
    image: "/img/photo.png",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  },
  {
    name: "Stanis WEMBONYAMA",
    role: t("team.lead_6"),
    image: "/img/photo.png",
    social: {
      linkedin: "https://linkedin.com/in/emmarussel",
      twitter: "https://twitter.com/emmarussel",
      facebook: "https://facebook.com/emmarussel",
    },
  },
  {
    name: "Alain MAHESHE",
    role: t("team.lead_7"),
    image: "/img/photo.png",
    social: {
      linkedin: "https://linkedin.com/in/alexberil",
      twitter: "https://twitter.com/alexberil",
      facebook: "https://facebook.com/alexberil",
    },
  },
  {
    name: "Phil MAANULWA",
    role: t("team.lead_8"),
    image: "/img/coach.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Hassan KHATER",
    role: t("team.lead_9"),
    image: "/img/photo.png",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Kelly BROOME",
    role: t("team.lead_10"),
    image: "/img/photo.png",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
];

// Fonction pour changer de catégorie
const setActiveCategory = (category) => {
  activeCategory.value = category;
};
</script>
