<template>
  <section class="bg-green-50">
    <div class="p-8 mt-16">
      <div class="mj-container hidden sm:block">
        <!-- Début Actualités -->
        <div class="bg-white p-4 flex flex-col items-center justify-center">
          <img
            src="/img/chargement.gif"
            alt="Chargement"
            class="h-48 w-48 mb-2"
          />
          <p class="text-gray-600 text-center text-lg">Under Construction</p>
        </div>
      </div>
    </div>

    <hr class="mj-container" />
    <!-- Parteners -->
    <div class="my-16">
      <LogOurs />
    </div>
    <div>
      <LogLogger />
    </div>
    <!-- Footer -->
    <div class="mt-16">
      <laster />
    </div>
  </section>
</template>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>