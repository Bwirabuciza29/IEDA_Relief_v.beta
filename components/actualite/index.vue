<template>
  <div class="mj-container bg-white">
    <div
      class="relative w-full bg-center bg-cover flex items-center"
      style="background-image: url('/img/bg.jpg'); background-attachment: fixed"
    >
      <div class="us-container my-4">
        <div class="flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold">Actualités</h1>
            <div class="w-1/2 h-1 bg-primary_1 mx-auto mt-2"></div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
          <div
            v-for="(item, index) in articles"
            :key="index"
            class="group relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center overflow-hidden"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <div
              class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"
            ></div>

            <div
              class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center"
            >
              <a
                href="#"
                class="text-xs bg-custom-green text-white px-5 py-2 uppercase hover:bg-white transition ease-in-out duration-500"
              >
                {{ item.category }}
              </a>
              <div class="text-white font-regular flex flex-col justify-start">
                <span class="text-3xl leading-0 font-semibold">{{
                  item.date.day
                }}</span>
                <span class="-mt-3">{{ item.date.month }}</span>
              </div>
            </div>

            <main class="p-5 z-10">
              <a
                href="#"
                class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                {{ item.title }}
              </a>
            </main>

            <!-- Bouton Voir plus en bas à droite, visible au hover -->
            <div
              class="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                class="group relative inline-block text-white text-sm rounded transition"
              >
                Voir plus
                <span
                  class="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-end">
            <div class="flex items-center py-8">
              <a
                href="#"
                class="h-10 w-10 bg-custom-green hover:bg-secondary_2 font-semibold text-white text-sm flex items-center justify-center"
                >1
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:bg-custom-green hover:text-white text-sm flex items-center justify-center"
                >2
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:bg-custom-green hover:text-white text-sm flex items-center justify-center"
                >3
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:bg-custom-green hover:text-white text-sm flex items-center justify-center"
                >4
              </a>
              <a
                href="#"
                class="h-10 w-10 font-semibold text-gray-800 hover:bg-custom-green hover:text-white text-sm flex items-center justify-center"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const articles = [
  {
    image: "/img/papa.jpg",
    category: "Societé",
    date: { day: "10", month: "May" },
    title: "Le nouveau pape s’appelle Léon XIV",
  },
  {
    image: "/img/usaid.jpg",
    category: "Gouvernance",
    date: { day: "10", month: "Mar" },
    title:
      "Comment la suspension de l’USAID force l’autonomie des secteurs critiques en RDC ",
  },
  {
    image: "/img/ripost.jpg",
    category: "Politics",
    date: { day: "20", month: "Jan" },
    title:
      "Comment la RDC mène la riposte judiciaire contre la guerre dans l’Est",
  },
  {
    image: "/img/haut.png",
    category: "Violence",
    date: { day: "10", month: "Mar" },
    title:
      "Haut-Uélé : des conflits communautaires, l’autre dynamique de violences",
  },
  {
    image: "/img/trans.jpg",
    category: "Politics",
    date: { day: "25", month: "May" },
    title: "La transparence à l’Assemblée nationale : c’est maintenant ?",
  },
  {
    image: "/img/kin.jpeg",
    category: "Politics",
    date: { day: "20", month: "Jan" },
    title: "Kinshasa, entre accalmie et résurgence des tension",
  },
];
</script>