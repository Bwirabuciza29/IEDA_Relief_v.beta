<template>
  <section class="bg-green-50">
    <!--  Top Title -->
    <div class="mj-container bg-green-50 mt-20">
      <div
        class="relative flex flex-col md:flex-row bg-custom-green overflow-hidden"
      >
        <img
          src="/img/Vectoria.png"
          alt="Decorative Vector"
          class="absolute top-0 left-64 h-full w-auto hidden sm:block z-20"
        />
        <!-- Texte -->
        <div
          class="w-full md:w-1/2 p-6 md:p-8 text-white flex flex-col justify-center relative z-20"
        >
          <h1 class="text-4xl font-bold mb-2">{{ t("about.title_1") }}</h1>
          <nav class="text-sm text-black">
            <div class="inline-block bg-white p-3 rounded-lg">
              <a href="/" class="relative group font-semibold">
                {{ t("about.title_2") }}
                <span
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-custom-green scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"
                ></span>
              </a>
              /
              <span class="text-bold text-custom-green">{{
                t("about.title_1")
              }}</span>
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
            src="/img/cha.png"
            alt="About Us Section"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Fin Top Title -->
    <div class="mj-container my-16">
      <div class="my-8 p-4 bg-white md:p-6 lg:p-8">
        <div class="relative mt-1 h-4 w-full">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
        <h2
          class="text-xl text-black font-bold text-center mb-4 mt-4 sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <span> {{ t("about.ab_1") }} </span>
          <span class="text-custom-green">({{ t("about.ab_2") }}</span>
          <span class="text-custom-blue"> {{ t("about.ab_3") }})</span>
        </h2>
        <p class="text-justify">{{ t("about.ab_4") }}</p>
        <div class="relative mt-1 h-4 w-full">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Card 1 -->
        <div
          class="group bg-white flex flex-col items-start p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <img
              src="/img/lo.svg"
              alt="icon"
              class="w-10 h-10 mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            <h3
              class="text-xl font-semibold group-hover:text-custom-green transition-colors duration-300"
            >
              {{ t("about.card_1_title") }}
            </h3>
          </div>
          <p class="text-gray-600">
            {{ t("about.card_1_desc") }}
          </p>
        </div>

        <!-- Card 2 -->
        <div class="group overflow-hidden">
          <img
            src="/img/c3.jpg"
            alt="Image 1"
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <!-- Card 3 -->
        <div
          class="group bg-white flex flex-col items-start p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <img
              src="/img/lol.svg"
              alt="Icon"
              class="w-10 h-10 mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            <h3
              class="text-xl font-semibold group-hover:text-custom-green transition-colors duration-300"
            >
              {{ t("about.card_2_title") }}
            </h3>
          </div>
          <p class="text-gray-600">
            {{ t("about.card_2_desc") }}
          </p>
        </div>

        <!-- Card 4 -->
        <div class="group overflow-hidden">
          <img
            src="/img/c4.jpg"
            alt="Image 2"
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <!-- Card 5 -->
        <div
          class="group bg-white flex flex-col items-start p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <img
              src="/img/lolo.svg"
              alt="Icon"
              class="w-10 h-10 mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            <h3
              class="text-xl font-semibold group-hover:text-custom-green transition-colors duration-300"
            >
              {{ t("about.card_3_title") }}
            </h3>
          </div>
          <p class="text-gray-600">
            {{ t("about.card_3_desc") }}
          </p>
        </div>

        <!-- Card 6 -->
        <div class="group overflow-hidden">
          <img
            src="/img/c5.jpg"
            alt="Image 3"
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
    <!-- team -->
    <div class="mj-container">
      <div>
        <!-- Titre Principal -->
        <div class="text-center">
          <p class="text-custom-green uppercase tracking-widest text-xs">
            {{ t("team.title_1") }}
          </p>
          <h1 class="text-3xl font-semibold">
            {{ t("team.title_2") }}
            <span class="font-sri"> {{ t("team.title_3") }}</span>
          </h1>
        </div>

        <!-- Navigation des catégories -->
        <div
          class="flex justify-center space-x-4 mb-8 flex-wrap md:flex-nowrap"
        >
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
            <!-- Effet de Hover -->
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
    </div>
    <!-- fin team -->
    <div class="mj-container my-16">
      <!-- Vidéo avec plyr -->
      <div
        class="bg-black flex flex-col md:flex-row items-center rounded-xl md:items-start gap-4 w-full"
      >
        <!-- Video Section -->
        <div
          class="w-full md:w-1/2 mx-auto overflow-hidden bg-custom-green rounded-l-xl"
        >
          <!-- Header -->
          <div
            class="top-0 z-20 w-full bg-custom-green bg-opacity-70 px-4 py-2 backdrop-blur-lg"
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

          <!-- Video -->
          <div class="relative">
            <div
              ref="youtube"
              class="plyr w-full rounded-lg shadow-lg"
              controls
              data-plyr-provider="youtube"
              data-plyr-embed-id="https://www.youtube.com/watch?v=ob7yQHX25GA"
            ></div>
          </div>
        </div>

        <!-- Text Section -->
        <div class="w-full md:w-1/2 p-4">
          <h2 class="text-lg font-bold text-gray-100">
            Blue Marble Health A Plan to Fight Diseases of Poverty amid Wealth
            Phil Maanulwa TEDxSugarLand
          </h2>
          <p class="text-gray-400 text-sm pt-8 text-justify">
            Phill Maanulwa the CEO/Founder of IEDA Relief share on how One
            person can have a huge impact on others if they choose to take
            extraordinary action. Anyone can build something amazing if their
            aspirations are big enough and their tenacity is strong enough.
            #TEDX SugarLand
          </p>

          <!-- Footer avec la ligne séparatrice -->
          <div class="pt-4">
            <hr />
            <div class="flex items-center justify-between space-x-4 mt-20">
              <!-- Date avec icône -->
              <div class="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008H12v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <span class="ml-2">Le 30 Oct. 2017</span>
              </div>

              <!-- Titre et Avatar -->
              <div class="flex items-center space-x-2">
                <span class="text-gray-400">IEDA Relief</span>
                <img
                  src="/img/loieda.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fin Vidéo avec plyr -->
      <!-- Section d'informations -->
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <!-- Élément 1 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ count1 }}+
          </h3>
          <p class="text-gray-600">{{ t("about.number_1") }}</p>
        </div>
        <!-- Élément 2 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ (count2 / 1000000).toFixed(1) }} {{ t("about.number_text") }}
          </h3>
          <p class="text-gray-600">{{ t("about.number_2") }}</p>
        </div>
        <!-- Élément 3 -->
        <div>
          <h3 class="text-4xl font-bold font-sri text-custom-green">
            {{ count3 }}
          </h3>
          <p class="text-gray-600">{{ t("about.number_3") }}</p>
        </div>
      </div>
    </div>
    <div class="mj-container my-16">
      <h2 class="text-3xl font-bold text-gray-800 text-center">
        {{ t("about.support_title_1") }}
        <span class="text-green-500 font-sri">
          {{ t("about.support_title_2") }}</span
        >
      </h2>
    </div>
    <div class="mj-container my-16">
      <div class="relative bg-gray-50 h-64 overflow-hidden p-4">
        <!-- Filigrane haut gauche -->
        <div class="absolute top-0 left-0 opacity-50">
          <img
            src="/img/f.png"
            alt="Filigrane haut gauche"
            class="w-32 h-auto sm:w-48 md:w-56 lg:w-72 xl:w-80 filter grayscale"
          />
        </div>

        <!-- Filigrane bas droite -->
        <div class="absolute bottom-0 right-0 opacity-50">
          <img
            src="/img/ff.png"
            alt="Filigrane bas droite"
            class="w-32 h-auto sm:w-48 md:w-56 lg:w-72 xl:w-80 filter grayscale"
          />
        </div>

        <!-- Contenu principal -->
        <div
          class="relative z-10 mj-container text-center flex flex-col items-center justify-center"
        >
          <div class="mx-auto mb-4">
            <img
              src="/img/mik.svg"
              alt="Icône"
              class="w-12 h-12 transition-all duration-300 hover:z-10 hover:scale-110"
            />
          </div>

          <p class="text-lg font-semibold text-gray-800">
            {{ t("about.support_motivation_1") }} <br />
            <span class="italic font-bold text-gray-800">
              {{ t("about.support_motivation_2") }} <br />
            </span>
            {{ t("about.support_motivation_3") }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative mj-container my-16">
      <h2 class="text-3xl font-bold text-gray-800 text-center">
        {{ t("about.question_title_1") }}
        <span class="text-green-500 font-sri">
          {{ t("about.question_title_2") }}</span
        >
      </h2>

      <!-- FAQ Section -->
      <div class="mt-10 space-y-4 max-w-xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="overflow-hidden">
          <button
            @click="toggleFAQ(index)"
            class="w-full text-left flex justify-between rounded-lg items-center px-4 py-4 bg-white transition-transform duration-300 ease-in-out"
          >
            <span
              :class="{ 'text-custom-green font-medium': activeFAQ === index }"
              class="text-gray-800 text-lg"
            >
              {{ faq.question }}
            </span>
            <span
              class="bg-gray-200 rounded-full p-2"
              :class="{
                ' bg-green-100 rounded-full p-2': activeFAQ === index,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :class="{
                  'rotate-180 text-green-500 bg-green-100 rounded-full':
                    activeFAQ === index,
                }"
                class="h-4 w-4 text-black transform transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            v-if="activeFAQ === index"
            class="px-4 py-3 text-gray-600 bg-gray-50"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
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
import { ref, onMounted } from "vue";
const video = ref(null);
const { t } = useI18n();

// Data for FAQs
const faqs = ref([
  {
    question: t("about.question_1"),
    answer: t("about.question_1_answer"),
  },
  {
    question: t("about.question_2"),
    answer: t("about.question_2_answer"),
  },
  {
    question: t("about.question_3"),
    answer: t("about.question_3_answer"),
  },
  {
    question: t("about.question_4"),
    answer: t("about.question_4_answer"),
  },
  {
    question: t("about.question_5"),
    answer: t("about.question_5_answer"),
  },
]);
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
    image: "/img/avatar6.jpg",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
  },
  {
    name: "Stanis WEMBONYAMA",
    role: t("team.lead_6"),
    image: "/img/avatar5.jpg",
    social: {
      linkedin: "https://linkedin.com/in/emmarussel",
      twitter: "https://twitter.com/emmarussel",
      facebook: "https://facebook.com/emmarussel",
    },
  },
  {
    name: "Alain MAHESHE",
    role: t("team.lead_7"),
    image: "/img/avatar3.jpg",
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
    image: "/img/avatar9.jpg",
    social: {
      linkedin: "https://linkedin.com/in/shafinaadjani",
      twitter: "https://twitter.com/shafinaadjani",
      facebook: "https://facebook.com/shafinaadjani",
    },
  },
  {
    name: "Kelly BROOME",
    role: t("team.lead_10"),
    image: "/img/avatar2.jpg",
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
// State to track the active FAQ
const activeFAQ = ref(null);

// Toggle function
const toggleFAQ = (index) => {
  activeFAQ.value = activeFAQ.value === index ? null : index;
};
// Fonction d'animation des chiffres
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
const youtube = ref(null);
onMounted(() => {
  const { $plyr } = useNuxtApp();
  // Initialisation du lecteur Plyr pour la vidéo YouTube
  const youtubePlayer = new $plyr(youtube.value, {
    autoplay: false,
    muted: false,
  });
  // Durée de 2s
  animateValue(count1, 0, 20, 2000);
  // Durée de 3s
  animateValue(count2, 0, 2200000, 3000);
  // Durée de 1.5s
  animateValue(count3, 0, 2008, 1500);
  const player = new (useNuxtApp().$plyr)(video.value);
});
</script>

