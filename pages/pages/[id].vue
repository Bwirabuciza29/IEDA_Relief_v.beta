<template>
  <section class="bg-green-50 mt-24">
    <div v-if="card">
      <div class="mj-container bg-green-50 mt-16 p-8">
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
            <h1 class="text-4xl font-bold mb-2">{{ t("operation.title") }}</h1>
            <nav class="text-sm text-black">
              <div class="inline-block bg-white p-3 rounded-lg">
                <a href="/" class="relative group font-semibold">
                  {{ t("operation.title") }}
                  <span
                    class="absolute bottom-0 left-0 w-full h-0.5 bg-custom-green scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"
                  ></span>
                </a>
                /
                <span class="text-bold text-custom-green">{{
                  card.title
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
              src="/img/r.jpg"
              alt="About Us Section"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="mj-container my-12 bg-white p-4 rounded-lg">
        <div class="relative mb-4 h-4 w-full">
          <div
            data-aos-anchor-placement="top-bottom"
            class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
          ></div>
        </div>
        <!-- Détails en haut avec icône -->
        <div class="flex items-center space-x-4 text-gray-600 text-sm">
          <div class="relative group inline-block">
            <!-- Texte principal -->
            <nuxt-link
              to="/pages"
              class="relative inline-block bg-custom-green text-white px-3 py-1 font-medium group transition duration-300"
            >
              {{ t("back.rtn") }}
              <!-- Animation de soulignement -->
            </nuxt-link>
          </div>

          <div class="flex items-center space-x-1 relative group">
            <i class="fa-solid fa-user-tie"></i>
            <span>ieda Relief</span>
            <!-- Ligne animée -->
            <div
              class="absolute left-0 -bottom-2 h-1 w-0 pt-1 bg-custom-green transition-all duration-700 group-hover:w-full"
            ></div>
          </div>

          <div class="flex items-center space-x-1 relative group">
            <i class="fas fa-calendar-alt"></i>
            <span>Jun 12, 2024</span>
            <!-- Ligne animée -->
            <div
              class="absolute left-0 -bottom-2 h-1 w-0 bg-custom-green transition-all duration-700 group-hover:w-full"
            ></div>
          </div>
        </div>

        <!-- Grand Titre -->
        <h1 class="text-5xl font-bold mt-4">{{ card.title }}</h1>

        <!-- Petit Titre -->
        <!-- <h2 class="text-xl font-medium text-gray-700 mt-2">
          Defending Nature for Generations to Come
        </h2> -->

        <!-- Description -->
        <p class="text-gray-600 mt-4 leading-relaxed text-justify">
          {{ card.description }}
        </p>
        <p class="text-gray-600 mt-4 leading-relaxed text-justify">
          {{ card.descriptions }}
        </p>

        <!-- Section des images -->
        <div class="mt-8 space-y-6">
          <!-- Petites Images -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="h-40 overflow-hidden rounded-lg">
              <img
                :src="card.image_2"
                alt="Child looking into distance"
                class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div class="h-40 overflow-hidden rounded-lg">
              <img
                :src="card.image_3"
                alt="Mother and children"
                class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div class="h-40 overflow-hidden rounded-lg">
              <img
                :src="card.image_4"
                alt="Group of smiling kids"
                class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Contenu supplémentaire sous les images -->
        <div class="mt-12">
          <div class="relative mb-4 h-4 w-full">
            <div
              data-aos-anchor-placement="top-bottom"
              class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[url(/img/line.jpg)] bg-repeat opacity-50 aos-init aos-animate"
            ></div>
          </div>
          <div class="justify mb-8">
            <p class="text-gray-700 leading-relaxed text-justify">
              {{ t("ope.desc") }}
            </p>
          </div>

          <!-- Listes alignées -->
          <div class="grid grid-cols-1 sm:grid-cols-1 gap-6 text-gray-700">
            <!-- Liste à puces -->

            <ul class="space-y-2">
              <li
                v-for="(item, index) in content"
                :key="index"
                class="flex items-start space-x-4"
              >
                <svg
                  class="w-6 h-6 text-blue-500 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-600 text-justify">
                    {{ item.description }}
                  </p>
                </div>
              </li>
            </ul>

            <!-- Liste ordonnée -->
          </div>

          <!-- Titre supplémentaire -->
          <h2 class="text-2xl font-bold mt-8">
            {{ t("ope.t_6") }}
          </h2>
          <p class="text-gray-600 mt-4 text-justify">
            {{ t("ope.t6_d") }}
          </p>

          <!-- Citation -->
          <blockquote
            class="border-l-4 border-blue-500 pl-4 mt-6 text-gray-700 font-sri"
          >
            <p>
              "To defend earth's future, we must rewrite our relationship with
              the environment — from devastation to preservation. The choice is
              to squander our world or sustain its majesty for generations
              ahead."
            </p>
            <footer class="text-gray-600 font-medium mt-2">Willow Brook</footer>
          </blockquote>

          <!-- Texte final -->
          <p class="text-gray-600 mt-6">
            We Work No Matter What, So Let Us Work Together
          </p>

          <!-- Hashtags et icônes -->
          <div class="flex items-center justify-between mt-8">
            <div class="space-x-2">
              <span
                class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                >#SocialImpact</span
              >
              <span
                class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                >#ChangingLives</span
              >
            </div>
            <div class="flex space-x-4 text-green-700 text-lg">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-x-twitter"></i>
              <i class="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <!-- The dernier -->
        <div
          class="flex flex-col sm:flex-row justify-between items-center my-16 border-t border-gray-200 pt-8 space-y-8 sm:space-y-0"
        >
          <!-- Lien Previous -->
          <div class="flex items-center space-x-4">
            <a
              href="#"
              class="flex items-center space-x-2 group hover:underline decoration-green-500"
            >
              <img
                src="/img/p5.png"
                alt="Shelter and infrastructures"
                class="w-16 h-16 rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 class="text-gray-800 font-semibold hover:underline">
                  Shelter and infrastructures
                </h3>
                <div class="flex items-center space-x-1 text-sm text-gray-500">
                  <i class="fas fa-calendar-alt text-green-500"></i>
                  <span>Jun 21, 2024</span>
                </div>
              </div>
            </a>
          </div>

          <!-- Ligne verticale au centre sur les grands écrans -->
          <div class="hidden sm:block w-px bg-gray-300 h-16"></div>

          <!-- Lien Next -->
          <div class="flex items-center space-x-4">
            <a
              href="#"
              class="flex items-center space-x-2 group hover:underline decoration-green-500"
            >
              <div class="text-right">
                <h3
                  class="text-gray-800 font-medium group-hover:decoration-green-500"
                >
                  Health and community...
                </h3>
                <div
                  class="flex items-center justify-end space-x-1 text-sm text-gray-500"
                >
                  <i class="fas fa-calendar-alt text-green-500"></i>
                  <span>Sep 30, 2024</span>
                </div>
              </div>
              <img
                src="/img/p6.png"
                alt="Health and community support"
                class="w-16 h-16 rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-gray-600">Loading...</p>
    </div>
    <!-- Footers -->
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
const frm_name = ref(t("operation.frm_name"));
const frm_email = ref(t("operation.frm_email"));
const frm_t = ref(t("operation.frm_t"));

const cards = [
  {
    id: 1,
    title: t("operation.c1_t"),
    description: t("operation.c1_de"),
    descriptions: t("operation.c1_des"),
    image: "/img/camps.jpg",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 2,
    title: t("operation.c2_t"),
    description: t("operation.c2_de"),
    descriptions: t("operation.c2_des"),
    image: "/img/o4.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 3,
    title: t("operation.c3_t"),
    description: t("operation.c3_de"),
    descriptions: t("operation.c3_des"),
    image: "/img/o5.png",
    image_2: "/img/h1.jpg",
    image_3: "/img/h2.jpg",
    image_4: "/img/h3.jpg",
    progress: 30,
  },
  {
    id: 4,
    title: t("operation.c4_t"),
    description: t("operation.c4_de"),
    descriptions: t("operation.c4_des"),
    image: "/img/o6.png",
    image_2: "/img/f1.jpg",
    image_3: "/img/f2.jpg",
    image_4: "/img/f3.jpg",
    progress: 30,
  },
  {
    id: 5,
    title: t("operation.c5_t"),
    description: t("operation.c5_de"),
    descriptions: t("operation.c5_des"),
    image: "/img/o7.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 6,
    title: t("operation.c6_t"),
    description: t("operation.c6_des"),
    descriptions: t("operation.c6_des"),
    image: "/img/o8.png",
    image_2: "/img/p2.png",
    image_3: "/img/p3.png",
    image_4: "/img/p4.png",
    progress: 30,
  },
  {
    id: 7,
    title: t("operation.c7_t"),
    description: t("operation.c7_de"),
    descriptions: t("operation.c7_de"),
    image: "/img/o9.png",
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
    progress: 30,
  },
  {
    id: 8,
    title: t("operation.c8_t"),
    description: t("operation.c8_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 9,
    title: t("operation.c9_t"),
    description: t("operation.c9_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 10,
    title: t("operation.c10_t"),
    description: t("operation.c10_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 11,
    title: t("operation.c11_t"),
    description: t("operation.c11_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 12,
    title: t("operation.c12_t"),
    description: t("operation.c12_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 13,
    title: t("operation.c13_t"),
    description: t("operation.c13_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 14,
    title: t("operation.c14_t"),
    description: t("operation.c14_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
  {
    id: 15,
    title: t("operation.c15_t"),
    description: t("operation.c15_de"),
    image: "/img/o9.png",
    progress: 30,
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
  },
];

const content = [
  {
    title: t("ope.t_1"),
    description: t("ope.t1_d"),
  },
  {
    title: t("ope.t_2"),
    description: t("ope.t2_d"),
  },
  {
    title: t("ope.t_3"),
    description: t("ope.t3_d"),
  },
  {
    title: t("ope.t_4"),
    description: t("ope.t4_d"),
  },
  {
    title: t("ope.t_5"),
    description: t("ope.t5_d"),
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
