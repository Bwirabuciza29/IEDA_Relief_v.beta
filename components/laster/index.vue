<template>
  <div>
    <div class="relative mj-container">
      <!-- Grid layout -->
      <div
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 border-gray-300"
      >
        <!-- Logo and Website -->
        <div
          class="max-w-sm mx-auto bg-white border border-custom-green border-dashed p-4 flex flex-col items-start"
        >
          <img src="/img/ie.png" alt="IEDA Relief Logo" class="w-40 sm:w-56" />
        </div>

        <!-- Menu 1 -->
        <div>
          <h4
            class="font-semibold font-sri text-custom-green text-xl border-l-2 border-custom-blue pl-2 mb-2"
          >
            {{ title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks" :key="link.name">
              <NuxtLink
                :to="localPath(link.route)"
                class="group text-gray-600 font-semibold text-sm relative"
                :class="{ 'text-custom-green': isActiveLink(localPath(link.route)) }"
              >
                {{ link.label }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': isActiveLink(localPath(link.route)) }"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Menu 2 (répétition ou autre) -->
        <div>
          <h4
            class="font-semibold text-custom-green font-sri text-xl border-l-2 border-custom-blue pl-2 mb-2"
          >
            {{ title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in footerLinks" :key="link.name + '-2'">
              <NuxtLink
                :to="localPath(link.route)"
                class="group text-gray-600 font-semibold text-sm relative"
                :class="{ 'text-custom-green': isActiveLink(localPath(link.route)) }"
              >
                {{ link.label }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                  :class="{ 'w-full': isActiveLink(localPath(link.route)) }"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social / Contact -->
        <div>
          <div class="space-y-2">
            <h4 class="font-semibold font-sri text-black">{{ t("logger.of") }}</h4>
            <p class="text-gray-600">{{ desc_1 }}</p>
            <p class="text-gray-600">{{ desc_2 }}</p>
            <p class="text-gray-600">{{ desc_3 }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Grid -->
      <hr class="my-4" />
      <div class="grid grid-cols-1 sm:justify-items-center sm:grid-cols-3 gap-4 py-4">
        <a
          href="https://www.iedarelief.org"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-2 text-sm font-semibold text-gray-600"
        >
          <i class="fas fa-globe text-custom-green"></i>
          <span class="relative">
            www.iedarelief.org
            <span
              class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
            ></span>
          </span>
        </a>

        <a
          href="tel:+17137742522"
          class="group flex items-center gap-2 text-sm font-semibold text-gray-600"
        >
          <i class="fas fa-phone-alt text-custom-green"></i>
          <span class="relative">
            Tel: +1 713 774 2522
            <span
              class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
            ></span>
          </span>
        </a>

        <a
          href="tel:+17137742522"
          class="group flex items-center gap-2 text-sm font-semibold text-gray-600"
        >
          <i class="fas fa-fax text-custom-green"></i>
          <span class="relative">
            Fax: +1 713 774 2529
            <span
              class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
            ></span>
          </span>
        </a>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-black">
      <div class="mj-container flex items-center justify-between py-4 px-6">
        <div class="text-sm text-white hover:text-custom-green hover:underline">
          © {{ currentYear }} IEDA Relief All rights reserved.
        </div>
        <div class="text-sm text-white hover:text-custom-green hover:underline">
          Made with ❤️ and ☕
        </div>
        <div class="flex space-x-4">
          <a
            href="https://www.youtube.com/@IEDARelief"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-blue-500"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://x.com/iedarelief1"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-gray-500"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://web.facebook.com/iedarelief/timeline/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-red-500"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/international-emergency-and-development-aide-ieda-relief/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:text-blue-700"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();

const title = ref(t("footer.title"));
const desc_1 = ref(t("footer.desc_1"));
const desc_2 = ref(t("footer.desc_2"));
const desc_3 = ref(t("footer.desc_3"));
const currentYear = new Date().getFullYear();

// Liens footer
const footerLinks = computed(() => [
  { name: "home", label: t("footer.home"), route: "home" },
  { name: "about", label: t("footer.about"), route: "about" },
  { name: "works", label: t("footer.works"), route: "works" },
  { name: "pages", label: t("footer.pages"), route: "pages" },
  { name: "contact", label: t("footer.contact"), route: "contact" },
]);

// Multilang routing
const localPath = (routeName) => {
  const prefix = locale.value === "en-UK" ? "" : `/${locale.value}`;
  return routeName === "home" ? `${prefix}/` : `${prefix}/${routeName}`;
};

// Active link
const isActiveLink = (path) => route.path === path;
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

a,
i {
  transition: color 0.3s ease;
}
</style>
