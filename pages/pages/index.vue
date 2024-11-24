<template>
  <section class="bg-green-50">
    <div class="relative bg-custom-green p-8 mx-4 rounded-lg mt-20">
      <img
        src="/img/Vectoria.png"
        alt="Decorative Vector"
        class="absolute top-0 left-64 h-full w-auto hidden sm:block z-10"
      />
      <div class="mj-container">
        <div class="relative">
          <div class="rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div class="flex-1 p-6 md:p-8">
              <h1 class="text-4xl text-white font-bold mb-2">
                {{ t("operation.title") }}
              </h1>
              <nav class="text-sm text-black">
                <div class="inline-block bg-white p-3 rounded-lg">
                  <a href="/" class="hover:underline font-semibold">
                    {{ t("operation.sub_title") }}/
                  </a>
                  <span> {{ t("operation.title") }}</span>
                </div>
              </nav>
            </div>
            <div class="flex-1 hidden md:flex">
              <img
                src="/img/o2.jpg"
                class="w-full h-48 object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mj-container my-10">
      <div class="text-center">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          {{ t("operation.op") }}
        </p>
        <h1 class="text-3xl font-semibold">
          {{ t("operation.ti_1") }}
          <span class="font-sri"> {{ t("operation.op") }} </span>
        </h1>
      </div>
      <!-- cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4"
        >
          <div class="w-32 h-32">
            <img
              :src="card.image"
              alt="card image"
              class="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-800">
              {{ card.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ truncateText(card.description, 50) }}
            </p>

            <!-- Progress bar with animation -->
            <div
              class="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2"
            >
              <div
                class="absolute h-full bg-custom-green transition-all duration-500 ease-in-out"
                :style="{ width: card.progress + '%' }"
              ></div>
            </div>

            <!-- Read more -->
            <nuxt-link
              :to="`/pages/${card.id}`"
              class="relative text-custom-green text-sm font-medium overflow-hidden group"
            >
              <span class="relative z-10 hover:underline">
                {{ t("operation.btn") }}</span
              >
              <span
                class="absolute bottom-0 left-0 right-0 h-0 bg-green-200 group-hover:h-full transition-all duration-300"
              ></span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- end -->
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
const cards = [
  {
    id: 1,
    title: t("operation.c1_t"),
    description: t("operation.c1_de"),
    descriptions: t("operation.c1_des"),
    image: "/img/o3.png",
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
    description: t("operation.c6_de"),
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
    descriptions: t("operation.c7_des"),
    image: "/img/o9.png",
    image_2: "/img/ed1.jpg",
    image_3: "/img/ed2.jpg",
    image_4: "/img/ed3.jpg",
    progress: 30,
  },
];
function truncateText(text, limit) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}
</script>