<template>
  <div id="particles-container" class="absolute inset-0 z-0"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (typeof window !== "undefined" && window.particlesJS) {
    const particlesConfig = {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 5, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    };

    window.particlesJS("particles-container", particlesConfig);
  }
});
</script>

<style>
#particles-container {
  width: 100%;
  height: 100%;
}
</style>
