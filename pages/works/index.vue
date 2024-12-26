<template>
  <section class="bg-green-50">
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20 z-10">
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
                {{ t("works.title") }}
              </h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold"
                    >{{ t("works.sub_title") }}/
                  </a>
                  <span>{{ t("works.title") }}</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/w10.jpg"
                alt="About Us Section"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contenu du work -->
    <div class="mj-container my-16 relative">
      <!-- Image filigranne au coin supérieur à gauche -->
      <div class="absolute -top-8 -left-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane haut gauche"
          class="w-full h-full object-contain opacity-50"
        />
      </div>

      <!-- Contenu principal -->
      <div>
        <!-- Boutons -->
        <div class="flex justify-center font-semibold space-x-4 mb-8">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'px-4 py-2 rounded-lg',
              activeTab === tab
                ? 'bg-custom-green  text-white font-semibold'
                : 'bg-gray-200 text-gray-700',
            ]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Contenu -->
        <div
          v-if="activeTab === t('works.btn_1_title')"
          class="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bg-white rounded-lg overflow-hidden group"
          >
            <div class="relative">
              <img
                :src="card.image"
                alt="Card Image"
                class="w-full h-44 object-cover rounded-t-lg transform transition-all duration-300 group-hover:scale-110 group-hover:z-10"
              />
              <span
                class="absolute top-2 right-2 bg-white border border-custom-green text-black text-xs px-2 py-1 rounded-md"
              >
                {{ card.tag }}
              </span>
            </div>

            <div class="p-2">
              <h2 class="font-bold text-xl mb-2">{{ card.title }}</h2>
              <p class="text-gray-600 mb-2">
                {{ truncateText(card.description, 50) }}
              </p>
              <nuxt-link
                :to="localPagePath(card.id)"
                class="mt-4 inline-block text-custom-green text-sm font-medium overflow-hidden relative"
              >
                <span
                  class="relative z-10 group-hover:text-custom-green-dark duration-300 ease-in-out"
                >
                  {{ t("operation.btn") }}
                </span>
                <span
                  class="absolute bottom-0 left-0 h-[3px] w-0 bg-custom-green group-hover:w-full transition-all duration-500 ease-in-out"
                ></span>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div v-else class="text-center">
          <p class="text-gray-600">
            Content for {{ activeTab }} is not available yet.
          </p>
        </div>
      </div>

      <!-- Image filigranne au coin inférieur à droite -->
      <div class="absolute -bottom-8 -right-24 w-28 h-28 hidden sm:block">
        <img
          src="/img/Titik-titik.png"
          alt="Filigrane bas droite"
          class="w-full h-full object-contain opacity-50"
        />
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
const { t, locale } = useI18n();

const activeTab = ref(t("works.btn_1_title"));

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
  },
];

const router = useRouter();

// Fonction pour rediriger vers la page des détails
const goToDetails = (id) => {
  router.push(localPath(id));
};

// Fonction pour tronquer le texte
function truncateText(text, limit) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
const localPagePath = (id) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return `${prefix}/works/${id}`;
};
</script>
