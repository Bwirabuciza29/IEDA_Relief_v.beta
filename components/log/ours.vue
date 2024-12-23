<template>
  <section class="mj-container relative z-10">
    <div class="container mx-auto px-4">
      <div class="text-center my-6">
        <p class="text-custom-green uppercase tracking-widest text-xs">
          {{ t1 }}
        </p>
        <h1 class="text-3xl font-semibold">
          {{ t2 }} <span class="font-sri"> {{ t3 }}</span>
        </h1>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="group flex justify-center items-center bg-white p-4 rounded transform transition-transform duration-300 hover:scale-105"
        >
          <a :href="partner.link" target="_blank" class="block">
            <img
              :src="partner.logo"
              :alt="partner.alt"
              class="max-w-20 h-auto filter grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
// Initialiser les variables avant de les utiliser
const t1 = ref(t("logo.t1"));
const t2 = ref(t("logo.t2"));
const t3 = ref(t("logo.t3"));

const partners = [
  {
    id: 1,
    logo: "/img/hc.jpeg",
    alt: "Partner 1",
    link: "https://www.unhcr.org",
  },
  {
    id: 11,
    logo: "/img/who.png",
    alt: "Partner 10",
    link: "https://www.who.int/",
  },
  {
    id: 2,
    logo: "/img/unicef.png",
    alt: "Partner 2",
    link: "https://www.unicef.org/",
  },
  {
    id: 3,
    logo: "/img/undpi.png",
    alt: "Partner 7",
    link: "https://www.undp.org/",
  },
  {
    id: 4,
    logo: "/img/wfp.png",
    alt: "Partner 9",
    link: "https://www.wfp.org/",
  },
  {
    id: 5,
    logo: "/img/oim.png",
    alt: "Partner 4",
    link: "https://www.iom.int/",
  },
  {
    id: 6,
    logo: "/img/fa.gif",
    alt: "Partner 5",
    link: "https://www.fao.org/home/en/",
  },
  {
    id: 8,
    logo: "/img/uu.png",
    alt: "Partner 9",
    link: "https://www.unfpa.org/",
  },
  {
    id: 7,
    logo: "/img/tx.jpeg",
    alt: "Partner 3",
    link: "https://www.co.houston.tx.us/",
  },

  {
    id: 9,
    logo: "/img/shelter.jpg",
    alt: "Partner 8",
    link: "https://www.shelterboxusa.org/",
  },
  {
    id: 12,
    logo: "/img/act.png",
    alt: "Partner 12",
    link: "https://www.interaction.org/",
  },
  {
    id: 10,
    logo: "/img/ch.png",
    alt: "Partner 10",
    link: "https://www.churchofjesuschrist.org/?lang=fra",
  },
];
</script>
