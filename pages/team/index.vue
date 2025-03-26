<template>
  <section class="bg-green-50 relative">
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
                {{ t("operation.sub_title") }}
                <span
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-custom-green scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"
                ></span>
              </a>
              /
              <span class="text-bold text-custom-green">{{
                t("team.title_1")
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
            src="/img/t.jpg"
            alt="About Us Section"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Images de fond (filigrane) -->

    <!-- contenu de l'equipe -->
    <div class="mj-container my-4">
      <div class="py-8 px-4">
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
    <div class="mj-container my-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Liste des drapeaux -->
        <div class="col-span-1 bg-white p-4 rounded-lg relative">
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-no-repeat bg-bottom bg-contain opacity-20 hidden md:block"
            style="background-image: url('/img/ref.jpg')"
          ></div>

          <h2 class="text-lg font-bold text-center mb-4">
            {{ t("team.p_2") }}
          </h2>
          <ul class="space-y-2">
            <li
              v-for="(country, index) in countries"
              :key="index"
              @click="selectCountry(index)"
              :class="[
                'flex items-center space-x-2 p-2 rounded-lg cursor-pointer',
                activeCountry === index
                  ? 'bg-custom-green text-white'
                  : 'hover:bg-gray-200',
              ]"
            >
              <img
                :src="country.flag"
                :alt="country.name"
                class="w-8 h-8 rounded-full"
              />
              <a
                :class="[
                  'text-sm font-medium',
                  activeCountry === index ? 'text-white' : 'text-gray-800',
                ]"
                href="#"
              >
                {{ country.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Détails du pays -->
        <div
          class="col-span-2 bg-white p-6 rounded-lg flex flex-col items-start space-y-4"
        >
          <!-- Nom du pays -->
          <h2 class="text-2xl font-bold mb-4">
            {{ countries[activeCountry].name }}
          </h2>

          <!-- Image du pays -->
          <div class="w-full mb-4 border-b-4 pb-4">
            <img
              :src="countries[activeCountry].image"
              alt="Image du pays"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <h2 class="text-lg font-bold text-center mb-4">
            {{ countries[activeCountry].chief.title }}
          </h2>
          <div class="w-full flex items-start mb-6 border-b-2">
            <!-- Photo du Chef de Mission -->
            <div class="flex-shrink-0 mr-4 mb-4">
              <img
                :src="countries[activeCountry].chief.image"
                alt="Photo du chef de mission"
                class="w-24 h-24 object-container rounded-full border border-gray-300"
              />
            </div>

            <!-- Informations du Chef de Mission -->
            <div class="flex-grow">
              <!-- Nom et Postnom -->
              <h3 class="text-lg font-bold">
                {{ countries[activeCountry].chief.name }}
              </h3>

              <!-- Détails -->

              <p class="text-sm text-gray-700">
                <span class="font-semibold">Gender:</span>
                {{ countries[activeCountry].chief.gender }}
              </p>
              <!-- <p class="text-sm text-gray-700">
                <span class="font-semibold">Bio:</span>
                {{ countries[activeCountry].chief.description }}
              </p> -->
            </div>
          </div>
          <h2 class="text-lg font-bold text-center mb-4">
            {{ t("team.p_3") }}
          </h2>
          <!-- Section Chef de Mission -->

          <!-- Détails de contact -->
          <div class="w-full grid grid-cols-1 text-sm sm:grid-cols-2 gap-4">
            <!-- Adresse -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-map-marker-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.address }}
              </span>
            </div>

            <!-- Téléphone -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-phone-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.tel }}
              </span>
            </div>

            <!-- GSM -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-mobile-alt bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span class="text-gray-700 font-medium">
                {{ countries[activeCountry].details.gsm }}
              </span>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-4">
              <i
                class="fas fa-envelope bg-gray-200 p-2 rounded-full text-custom-green text-lg"
              ></i>
              <span
                class="text-gray-700 font-medium hover:underline hover:text-custom-green"
              >
                {{ countries[activeCountry].details.email }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="mj-container" />
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
const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    image: "/img/pa1.jpg",
    chief: {
      title: t("leader.title_1"),
      image: "/img/coach.jpg",
      name: "Phil MAANULWA",
      gender: "Male",
      description: "Founder, President & CEO.",
    },
    details: {
      address: "10103 Foundren Rd, Suite 435 Houston, Texas 77096",
      tel: "+1 713-774-2522",
      gsm: "+1 713-774-2529",
      email: "philma@iedarelief.org",
    },
  },
  {
    name: "Burkina Faso",
    flag: "https://flagcdn.com/bf.svg",
    image: "/img/burk.jpg",
    chief: {
      title: t("leader.title_4"),
      image: "/img/bintu.jpg",
      name: "Micka BINTU",
      gender: "Female",
      description: "Spécialiste des programmes de développement rural.",
    },
    details: {
      address:
        "05 BP 6402 Ouaga 05, Boulevard Muammar Kadhafi, secteur 53, Section PLot 17, Parcelle No 6 Ouaga2000",
      tel: "+226 25374622",
      gsm: "+226 65584909",
      email: "burkinafasooffice@iedarelief.org",
    },
  },
  {
    name: t("pays.rca"),
    flag: "https://flagcdn.com/cf.svg",
    image: "/img/r.jpg",
    chief: {
      title: t("leader.title_2"),
      image: "/img/francois.jpg",
      name: "François DE PAUL",
      gender: "Male",
      description:
        "Experte en gestion humanitaire et opérations sur le terrain.",
    },
    details: {
      address:
        "Av. Barthélemy BOGANDA, Quartier SICA III, 3ème Arrondissement Bangui, Centrafrique, BP 1774 Bangui",
      tel: "+236 72510065",
      gsm: "+236 72510065",
      email: "caroffice@iedarelief.org",
    },
  },
  {
    name: t("pays.cam"),
    flag: "https://flagcdn.com/cm.svg",
    image: "/img/camero.jpg",
    chief: {
      title: t("leader.title_3"),
      image: "/img/dav.jpg",
      name: "David KISUBA",
      gender: "Male",
      description:
        "Coordinateur de programmes avec expertise en santé publique.",
    },
    details: {
      address:
        " Yaoundé, derrière la sous-préfecture de Tshinga, montée Palais des congrès m. ",
      tel: " +237  82315311",
      gsm: "+236 74125446",
      email: "cameroonoffice@iedarelief.org",
    },
  },
  {
    name: t("pays.drc"),
    flag: "https://flagcdn.com/cd.svg",
    image: "/img/gogo.png",
    chief: {
      title: t("leader.title_2"),
      image: "/img/francois.jpg",
      name: "François OMENDE",
      gender: "Male",
      description:
        "Responsable humanitaire avec une expertise en gestion des crises.",
    },
    details: {
      address:
        "Avenue O.U.A, N°17, Quartier Basoko/GB, Commune de Ngaliema, ville de Kinshasa, RDC",
      tel: "+243 980375904",
      gsm: "+243 995614803 ",
      email: "drcmission@iedarelief.org, drcoffice@iedarelief.org",
    },
  },
  {
    name: "Niger",
    flag: "https://flagcdn.com/ne.svg",
    image: "/img/niamey.jpg",
    chief: {
      title: t("leader.title_3"),
      image: "/img/cis.jpg",
      name: "Bakary CISSE",
      postnom: "Diop",
      nationality: "Nigérien",
      gender: "Male",
      description:
        "Gestionnaire de programmes spécialisés dans les projets d'accès à l'eau.",
    },
    details: {
      address:
        "Quartier Bobiel vers école Galaxy plus premier virage à gauche après le siège National de ADN FUSHA, Commune I,Ville de Niamey ",
      tel: "+227 89 97 04 60 ",
      gsm: "+227 89 97 04 60 ",
      email: "nigermission@iedarelief.org",
    },
  },
  {
    name: "Mali",
    flag: "https://flagcdn.com/ml.svg",
    image: "img/mali.jpg",
    chief: {
      title: t("leader.title_3"),
      image: "/img/audacieux.jpg",
      name: "Audacieux KITSA",
      gender: "Male",
      description: "Spécialiste en développement communautaire.",
    },
    details: {
      address: "BP 3113 Bamako, Hamdallay, ACI 2000, 5eme Arrondissement",
      tel: "+223 74613901",
      gsm: "+223 74613901",
      email: "malioffice@iedarelief.org",
    },
  },
];

// Pays actif
const activeCountry = ref(0);

// Fonction pour changer de pays
const selectCountry = (index) => {
  activeCountry.value = index;
};
</script>
