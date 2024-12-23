<template>
  <section class="bg-green-50">
    <div v-if="card">
      <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
        <img
          src="/img/Vectoria.png"
          alt="Decorative Vector"
          class="absolute top-0 left-64 h-full w-auto z-10 hidden sm:block"
        />
        <div class="mj-container">
          <div class="relative">
            <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
              <div class="flex-1 p-6 md:p-8">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {{ card.title }}
                </h1>

                <nav class="text-sm text-black">
                  <div class="inline-block bg-white p-3 rounded-lg">
                    <a href="/works" class="hover:underline font-semibold">{{
                      t("works.title")
                    }}</a>
                    /
                    <span>{{ card.title }}</span>
                  </div>
                </nav>
              </div>
              <div class="flex-1 hidden md:flex">
                <img
                  :src="card.image"
                  alt="About Us Section"
                  class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:z-10 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mj-container mt-8">
        <div
          class="bg-white flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
        >
          <!-- Section Gauche -->
          <div class="flex-1">
            <h1 class="text-4xl font-bold text-black mb-4">
              {{ card.title }}, which means "land of honest men"
            </h1>
            <p class="text-gray-600">
              Since the Mali crisis in 2012, WFP signed a tripartite accord
              (UNHCR, WFP, and IEDA Relief) to ensure food distribution to
              33,000 Mali refugees living in and outside the camps.
            </p>
            <p class="text-gray-600 mt-4">
              Food distribution is done on a monthly basis and it includes rice,
              CSB, oil, salt, and cereals. WFP avails about 6888 tonnes (574
              tonnes monthly) through UNHCR, which pays for the operational
              costs at around 180,000 USD.
            </p>

            <!-- Liste des activités avec icônes -->
            <div v-if="card" class="mb-16">
              <!-- Affichage du contenu spécifique pour id === 1 -->
              <div v-if="card.id === 1">
                <h2 class="text-2xl font-bold text-black mb-4">
                  IEDA Relief organizes the following activities:
                </h2>
                <ul class="list-none space-y-4">
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-calendar-alt text-blue-500 mr-3"></i>
                    Monthly distribution plans (MDP)
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-utensils text-green-500 mr-3"></i>
                    Evaluate the Refugee feeding situation, specifically those
                    in specific needs
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-child text-yellow-500 mr-3"></i>
                    Avail Blanket supplementary Feeding to young girls and boys
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-handshake text-purple-500 mr-3"></i>
                    Organizing joint meeting prior and after distribution with
                    all the stakeholders to ensure accountability in the process
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section Droite -->
          <div class="w-full h-72 mb-12 md:w-1/3 bg-green-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">
              Have Additional Questions?
            </h3>
            <ul class="space-y-4">
              <li class="flex items-center">
                <i
                  class="fas fa-envelope text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.email
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-phone-alt text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.phone
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-map-marker-alt text-white text-xs mr-3 rounded-full p-2 bg-green-500"
                ></i>
                <span class="text-gray-600 hover:underline mb-4"
                  >{{ card.li_2 }} {{ card.capital }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mj-container mb-8">
        <div
          class="bg-white mt-4 flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
        >
          <!-- Section Gauche -->
          <div class="flex-1">
            <div class="relative">
              <!-- Début video -->
              <div
                class="w-full h-full overflow-hidden rounded-lg shadow-lg bg-custom-green"
              >
                <!-- Header -->
                <div
                  class="z-20 w-full bg-custom-green bg-opacity-70 px-4 py-2 backdrop-blur-lg"
                >
                  <div class="-m-2 flex flex-wrap items-center justify-between">
                    <!-- Circles -->
                    <div class="w-auto p-2">
                      <div class="flex flex-row">
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-red-500 bg-red-400"
                          ></div>
                        </div>
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-yellow-500 bg-yellow-400"
                          ></div>
                        </div>
                        <div class="w-auto p-1">
                          <div
                            class="h-2 w-2 rounded-full border border-green-500 bg-green-400"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <!-- Text -->
                    <div class="p-2">
                      <div
                        class="mx-auto max-w-xs rounded bg-white px-4 py-0.5 text-center text-xs font-medium tracking-tight text-custom-green"
                      >
                        <span>IEDA Relief</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Video Section -->
                <div class="relative">
                  <div
                    ref="youtube"
                    class="plyr w-full rounded-lg shadow-lg"
                    controls
                    :data-plyr-provider="'youtube'"
                    :data-plyr-embed-id="card.videoId"
                  ></div>
                </div>
              </div>
            </div>
            <!-- Fin video -->
            <!-- Description principale -->
            <div>
              <div v-show="card && card.id === 1" class="mt-6">
                <h2 class="text-2xl font-bold text-black mb-4">
                  IEDA Relief organizes the following activities:
                </h2>
                <ul class="list-none space-y-4">
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-calendar-alt text-blue-500 mr-3"></i>
                    Monthly distribution plans (MDP)
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-utensils text-green-500 mr-3"></i>
                    Evaluate the Refugee feeding situation, specifically those
                    in specific needs
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-child text-yellow-500 mr-3"></i>
                    Avail Blanket supplementary Feeding to young girls and boys
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-handshake text-purple-500 mr-3"></i>
                    Organizing joint meeting prior and after distribution with
                    all the stakeholders to ensure accountability in the process
                  </li>
                </ul>
              </div>
            </div>
            <!-- Section Volunteer -->
            <div class="mt-6">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                Volunteer with Us
              </h2>
              <p class="text-gray-600 mb-4">
                Egestas pretium aenean pharetra magna ac placerat. Nisi lacus
                sed viverra tellus.
              </p>
              <NuxtLink
                to="/works"
                class="text-custom-blue underline hover:text-blue-600 font-semibold"
                >BACK TO WORK!
              </NuxtLink>
            </div>
            <hr class="my-6" />
            <!-- Tags sociaux -->

            <!-- Social Icons -->
            <div
              class="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4 mt-6"
            >
              <!-- Tags -->
              <div
                class="flex flex-wrap gap-2 justify-center w-full sm:justify-start"
              >
                <span
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm text-center"
                >
                  #SocialImpact
                </span>
                <span
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm text-center"
                >
                  #ChangingLives
                </span>
              </div>
              <!-- Social Icons -->
            </div>
            <!-- Fin Social Icons -->
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="text-gray-600">Loading...</p>
    </div>
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
import { onMounted, ref, nextTick } from "vue";
const { t } = useI18n();
const route = useRoute();
const card = ref(null);
const video = ref(null);
const youtube = ref(null);

function animateValue(target, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = range / (duration / 10);
  const interval = setInterval(() => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      current = end;
      clearInterval(interval);
    }
    target.value = Math.round(current);
  }, 10);
}
// Déclaration des données
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);

const cards = [
  {
    id: 1,
    image: "/img/w.jpg",
    tag: t("works.title"),
    title: "Burkina Faso",
    capital: "Ouagadougou",
    mean: "Burkina Faso, which means land of honest men",
    email: "burkinafasooffice@iedarelief.org",
    phone: "+226 25374622",
    li_2: "05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi, secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000",
    description:
      "Empowering communities with essential knowledge and practices to promote health and prevent",
    videoId: "https://www.youtube.com/watch?v=OwEpDNF55dY",
  },
  {
    id: 2,
    image: "/img/w2.jpg",
    tag: t("works.title"),
    title: "Cameroun",
    capital: "Younde",
    description:
      "Providing Harper with the freedom and independence to navigate the world with ease",
    email: "cameroonoffice@iedarelief.org",
    phone: "+236 74125446",
    li_2: "Yaoundé, derrière la sous-préfecture de Tshinga, montée Palais des congrès m.",
    videoId: "https://youtu.be/a_mBE32q0m4",
  },
  {
    id: 3,
    image: "/img/w3.jpg",
    tag: t("works.title"),
    title: "Central Africa Republic",
    capital: "Bangui",
    description:
      "Join us in providing compassionate support and resources for Daniel as he embarks on his",
    email: "caroffice@iedarelief.org",
    phone: "+236 72510065",
    li_2: "Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui",
    videoId: "https://youtu.be/Ue1RvItha5A",
  },

  {
    id: 4,
    image: "/img/w4.jpg",
    tag: t("works.title"),
    title: "Mali",
    capital: "Bamako",
    description:
      "Cancer Battle Fund provides critical financial support for Olivia's medical treatment, offering hope and …",

    email: "malioffice@iedarelief.org",
    phone: "+223 74613901",
    li_2: "BP 3113 Bamako, Hamdallay, ACI 2000, 5eme Arrondissement",
    videoId: "https://youtu.be/JgFih2x1jFA",
  },
  {
    id: 5,
    image: "/img/w5.jpg",
    tag: t("works.title"),
    title: "Niger",
    capital: "Niamey",
    description:
      "Response teams delivering lifesaving aid for children impacted by any major humanitarian ..",

    email: "nigermission@iedarelief.org",
    phone: "+227 89 97 04 60",
    li_2: "Quartier Bobiel vers école Galaxy plus premier virage à gauche après le siège National de ADN FUSHA, Commune I,Ville de Niamey",
    videoId: "https://youtu.be/ogGFt45uu28",
  },
  {
    id: 8,
    image: "/img/w8.jpg",
    tag: t("works.title"),
    title: "Democratic Rep. of the Congo",
    capital: "Kinshasa",
    description:
      "Providing specialized medical care and rehabilitation to children affected by war, offering hope and …",
    email: "drcoffice@iedarelief.org",
    phone: "+243 995614803",
    li_2: "Avenue O.U.A, N°17, Quartier Basoko/GB, Commune de Ngaliema, ville de Kinshasa, RDC",
    videoId: "https://youtu.be/4N1xCpN5EeM",
  },
];

onMounted(async () => {
  const id = parseInt(route.params.id);
  card.value = cards.find((c) => c.id === id);

  if (!card.value) {
    console.error("Card not found");
    return;
  }

  const { $plyr } = useNuxtApp();

  // Assurez-vous que le DOM est prêt avant d'initialiser Plyr
  await nextTick();

  // Initialiser Plyr pour YouTube
  if (youtube.value) {
    try {
      const youtubePlayer = new $plyr(youtube.value, {
        autoplay: false,
        muted: false,
      });
    } catch (error) {
      console.error("Failed to initialize YouTube player:", error);
    }
  } else {
    console.warn("YouTube element is not available");
  }

  // Initialiser Plyr pour une vidéo locale
  if (video.value) {
    try {
      const player = new $plyr(video.value);
    } catch (error) {
      console.error("Failed to initialize video player:", error);
    }
  } else {
    console.warn("Video element is not available");
  }

  // Animation des compteurs
  animateValue(count1, 0, 20, 2000);
  animateValue(count2, 0, 2200000, 3000);
  animateValue(count3, 0, 2008, 1500);
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
