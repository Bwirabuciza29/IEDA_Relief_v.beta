<template>
  <section>
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
          class="flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
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
          </div>

          <!-- Section Droite -->
          <div class="w-full md:w-1/3 bg-gray-100 rounded-lg p-2">
            <ul class="space-y-4">
              <!-- Item 1 -->
              <li class="flex items-center space-x-3">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-custom-green text-white rounded-full"
                >
                  <i class="fa-solid fa-calendar-days"></i>
                </span>
                <p class="text-gray-800 text-sm font-medium">November, 1</p>
              </li>

              <!-- Item 2 -->
              <li class="flex items-center space-x-3">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-custom-green text-white rounded-full"
                >
                  <i class="fa-solid fa-city"></i>
                </span>
                <p class="text-gray-800 text-sm font-medium">
                  {{ card.capital }}
                </p>
              </li>

              <!-- Item 3 -->
              <li class="flex items-center space-x-3">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-custom-green text-white rounded-full"
                >
                  <i class="fa-solid fa-tents"></i>
                </span>
                <p class="text-gray-800 text-sm font-medium">Welcome City</p>
              </li>

              <!-- Item 4 -->
              <li class="flex items-center space-x-3">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-custom-green text-white rounded-full"
                >
                  <i class="fa-solid fa-car"></i>
                </span>
                <p class="text-gray-800 text-sm font-medium">10km or 2.5kr</p>
              </li>
            </ul>

            <p class="text-gray-800 font-bold border-t border-b py-2 mt-4">
              Potential: $500 - $5,000
            </p>
            <button
              class="mt-2 w-full bg-custom-green text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
      <div class="mj-container mb-8">
        <div
          class="flex flex-col md:flex-row p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-8"
        >
          <!-- Section Gauche -->
          <div class="flex-1">
            <div class="relative mb-6">
              <img
                :src="card.image"
                alt="IEDA Relief Activities"
                class="w-full h-64 object-cover rounded-lg"
              />
              <div
                class="absolute inset-0 flex items-center justify-center"
                aria-label="Play Video"
              >
                <img
                  src="/img/Play.png"
                  alt="Play"
                  class="w-20 h-20 transition-all duration-300 hover:z-10 hover:scale-105"
                />
              </div>
            </div>

            <!-- Description principale -->
            <div>
              <h2 class="text-xl font-bold text-gray-800 mb-4">
                IEDA Relief organizes the following activities:
              </h2>
              <p class="text-gray-600 mb-4">
                Mattis vulputate enim nulla aliquet porttitor lacus luctus
                accumsan tortor. Sed nisi lacus sed viverra tellus.
              </p>

              <!-- Activités listées -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Monthly distribution plans (MDP)
                  </h3>
                  <p class="text-gray-600">
                    Facilisis volutpat est velit egestas dui id ornare arcu
                    pretium aenean pharetra odio.
                  </p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Evaluate the Refugee
                  </h3>
                  <p class="text-gray-600">
                    Evaluate the refugee feeding situation, specifically those
                    in specific needs.
                  </p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Avail Blanket supplementary
                  </h3>
                  <p class="text-gray-600">
                    Avail Blanket supplementary Feeding to young girls and boys.
                  </p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Organizing joint meeting prior
                  </h3>
                  <p class="text-gray-600">
                    Organizing joint meeting prior and after distribution to
                    ensure accountability.
                  </p>
                </div>
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
              <div
                class="flex items-center gap-3 justify-center w-full sm:w-auto sm:justify-end"
              >
                <a
                  href="https://facebook.com"
                  class="bg-gray-200 flex items-center justify-center p-2 rounded-full text-black hover:bg-blue-800 hover:text-white transition"
                >
                  <i class="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="https://instagram.com"
                  class="bg-gray-200 flex items-center justify-center p-2 rounded-full text-black hover:bg-pink-800 hover:text-white transition"
                >
                  <i class="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="https://twitter.com"
                  class="bg-gray-200 flex items-center justify-center p-2 rounded-full text-black hover:bg-gray-600 hover:text-white transition"
                >
                  <i class="fa-brands fa-x-twitter text-lg"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  class="bg-gray-200 flex items-center justify-center p-2 rounded-full text-black hover:bg-blue-900 hover:text-white transition"
                >
                  <i class="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Section Droite -->
          <div
            class="w-full h-48 md:w-1/3 bg-gray-100 rounded-lg p-4 transition-all duration-300 hover:z-10 hover:scale-105"
          >
            <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">
              Have Additional Questions?
            </h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i
                  class="fas fa-envelope text-white text-xs mr-3 rounded-full p-2 bg-custom-green"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.email
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-phone-alt text-white text-xs mr-3 rounded-full p-2 bg-custom-green"
                ></i>
                <span class="text-gray-600 hover:underline">{{
                  card.phone
                }}</span>
              </li>
              <li class="flex items-center">
                <i
                  class="fas fa-map-marker-alt text-white text-xs mr-3 rounded-full p-2 bg-custom-green"
                ></i>
                <span class="text-gray-600 hover:underline"
                  >{{ card.li_2 }} {{ card.capital }}</span
                >
              </li>
            </ul>
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
const { t } = useI18n();
const route = useRoute();
const card = ref(null);

const cards = [
  {
    id: 1,
    image: "/img/w1.png",
    tag: t("works.title"),
    title: "Burkina Faso",
    capital: "Ouagadougou",
    mean: "Burkina Faso, which means land of honest men",
    email: "name@domain.com",
    phone: "+226 000 000 000",
    li_2: "123 Main Street, town name",
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
    email: "name@domain.com",
    phone: "+237 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 3,
    image: "/img/w3.png",
    tag: t("works.title"),
    title: "Central Africa Republic",
    capital: "Bangui",
    description:
      "Join us in providing compassionate support and resources for Daniel as he embarks on his",
    email: "name@domain.com",
    phone: "+236 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 4,
    image: "/img/w4.png",
    tag: t("works.title"),
    title: "Mali",
    capital: "Bamako",
    description:
      "Cancer Battle Fund provides critical financial support for Olivia's medical treatment, offering hope and …",

    email: "name@domain.com",
    phone: "+223 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 5,
    image: "/img/w5.png",
    tag: t("works.title"),
    title: "Niger",
    capital: "Niamey",
    description:
      "Response teams delivering lifesaving aid for children impacted by any major humanitarian ..",

    email: "name@domain.com",
    phone: "+227 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 6,
    image: "/img/w6.png",
    tag: t("works.title"),
    title: "Philippines",
    capital: "Manille",
    description:
      "Safe havens where children receive nurturing care, education, and support for their holistic …",

    email: "name@domain.com",
    phone: "+65 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 7,
    image: "/img/w7.png",
    tag: t("works.title"),
    title: "Haiti",
    capital: "Port-au-Prince",
    description:
      "Supporting access to schooling, tutoring and educational resources for children …",
    email: "name@domain.com",
    phone: "+509 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 8,
    image: "/img/w8.png",
    tag: t("works.title"),
    title: "Democratic Rep. of the Congo",
    capital: "Kinshasa",
    description:
      "Providing specialized medical care and rehabilitation to children affected by war, offering hope and …",
    email: "name@domain.com",
    phone: "+243 000 000 000",
    li_2: "123 Main Street, town name",
  },
  {
    id: 9,
    image: "/img/w9.png",
    tag: t("works.title"),
    title: "Get Involved",
    description:
      "Bringing essential healthcare services directly to underserved communities, ensuring access …",
    email: "name@domain.com",
    phone: "000 000 000",
    li_2: "123 Main Street, town name",
  },
];

onMounted(() => {
  const id = parseInt(route.params.id);
  card.value = cards.find((c) => c.id === id);

  if (!card.value) {
    console.error("Card not found");
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
