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
            class="bg-white rounded-lg overflow-hidden"
          >
            <div class="relative">
              <img
                :src="card.image"
                alt="Card Image"
                class="w-full h-44 object-cover rounded-lg transform transition-all duration-300 hover:z-10 hover:scale-110"
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
              <button
                class="bg-custom-green text-white px-6 py-2 rounded-lg hover:underline"
                @click="goToDetails(card.id)"
              >
                {{ t("works.btn") }}
              </button>
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
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const tabs = [
  t("works.btn_1_title"),
  t("works.btn_2_title"),
  t("works.btn_3_title"),
];
const activeTab = ref(t("works.btn_1_title"));

const cards = [
  {
    id: 1,
    image: "/img/w1.png",
    tag: t("works.title"),
    title: "Burkina Faso",
    capital: "Ouagadougou",
    mean: "Burkina Faso, which means land of honest men",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+226 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
    description:
      "Empowering communities with essential knowledge and practices to promote health and prevent",
  },
  {
    id: 2,
    image: "/img/w2.png",
    tag: t("works.title"),
    title: "Cameroun",
    capital: "Younde",
    description:
      "Providing Harper with the freedom and independence to navigate the world with ease",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+237 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 3,
    image: "/img/w3.png",
    tag: t("works.title"),
    title: "Central Africa Republic",
    capital: "Bangui",
    description:
      "Join us in providing compassionate support and resources for Daniel as he embarks on his",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+236 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },

  {
    id: 4,
    image: "/img/w4.png",
    tag: t("works.title"),
    title: "Mali",
    capital: "Bamako",
    description:
      "Cancer Battle Fund provides critical financial support for Olivia's medical treatment, offering hope and …",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+223 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 5,
    image: "/img/w5.png",
    tag: t("works.title"),
    title: "Niger",
    capital: "Niamey",
    description:
      "Response teams delivering lifesaving aid for children impacted by any major humanitarian ..",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+227 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 6,
    image: "/img/w6.png",
    tag: t("works.title"),
    title: "Philippines",
    capital: "Manille",
    description:
      "Safe havens where children receive nurturing care, education, and support for their holistic …",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+65 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 7,
    image: "/img/w7.png",
    tag: t("works.title"),
    title: "Haiti",
    capital: "Port-au-Prince",
    description:
      "Supporting access to schooling, tutoring and educational resources for children …",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+509 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 8,
    image: "/img/w8.png",
    tag: t("works.title"),
    title: "Democratic Rep. of the Congo",
    capital: "Kinshasa",
    description:
      "Providing specialized medical care and rehabilitation to children affected by war, offering hope and …",
    contacts: [
      {
        email: "name@domain.com",
        phone: "+243 000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
  {
    id: 9,
    image: "/img/w9.png",
    tag: t("works.title"),
    title: "Get Involved",
    description:
      "Bringing essential healthcare services directly to underserved communities, ensuring access …",
    contacts: [
      {
        email: "name@domain.com",
        phone: "000 000 000",
        li_2: "123 Main Street, town name",
      },
    ],
  },
];

const router = useRouter();

const goToDetails = (id) => {
  router.push(`/works/${id}`);
};
function truncateText(text, limit) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
</script>
