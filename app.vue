<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <div class="po-wrapper text-white">
        <Navbar />
      </div>
      <div>
        <transition name="page" mode="out-in">
          <div class="bg-green-50">
            <NuxtPage />
          </div>
        </transition>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title,
});
onMounted(() => {
  useNuxtApp().$aos();
});
</script>

<style>
@import "aos/dist/aos.css";
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
