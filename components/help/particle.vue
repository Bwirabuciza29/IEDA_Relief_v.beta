<template>
  <div :id="containerId" class="absolute inset-0 z-0">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'

const props = defineProps({
  containerId: {
    type: String,
    default: 'particles-container',
  },
  config: {
    type: Object,
    default: () => ({
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
    }),
  },
})

onMounted(() => {
  if (typeof window !== 'undefined' && window.particlesJS) {
    window.particlesJS(props.containerId, props.config)
  }
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
