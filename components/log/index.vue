<template>
  <div class="h-full w-full flex justify-center items-center">
    <div
      class="grid grid-cols-2 gap-4 px-4 md:flex md:flex-wrap md:justify-center md:gap-8"
    >
      <a
        v-for="(logo, index) in logos"
        :key="index"
        :href="logo.href"
        target="_blank"
        class="block"
      >
        <img
          :src="logo.src"
          :alt="`Logo ${index}`"
          class="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { src: "/img/uni.png", href: "https://www.unicef.org/" },
  { src: "/img/uhncr.png", href: "https://www.unhcr.org/" },
  { src: "/img/oim.png", href: "https://www.iom.int/" },
  { src: "/img/guide-star.png", href: "https://www.guidestar.org/" },
  { src: "/img/uu.png", href: "https://www.unfpa.org/" },
  {
    src: "/img/central-emergency.png",
    href: "https://cerf.un.org/",
  },
  {
    src: "/img/donor-houston.png",
    href: "https://theasthmafiles.org/content/donorhouston-donorhouston-profile-report-2",
  },
];
</script>
