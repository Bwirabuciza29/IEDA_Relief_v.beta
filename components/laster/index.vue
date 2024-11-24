<template>
  <div>
    <div class="mj-container px-4 sm:px-6 lg:px-8">
      <!-- Grid layout -->
      <div
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 border-gray-300"
      >
        <!-- Logo and Website -->
        <div class="flex flex-col items-start space-y-2">
          <img
            src="/img/logo.png"
            alt="IEDA Relief Logo"
            class="w-24 sm:w-32"
          />
          <p class="text-xs sm:text-sm text-gray-500">www.iedarelief.org</p>
        </div>

        <!-- Menu 1 -->
        <div>
          <h4 class="font-semibold text-gray-700 mb-2">{{ title }}</h4>
          <ul class="space-y-1">
            <li>
              <nuxtLink
                to="/"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ home }}
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/about"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ about }}</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/works"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ works }}</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/pages"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ pages }}
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/contact"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ contact }}</nuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-gray-700 mb-2">{{ title }}</h4>
          <ul class="space-y-1">
            <li>
              <nuxtLink
                to="/"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ home }}
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/about"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ about }}</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/works"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ works }}</nuxtLink
              >
            </li>
            <li>
              <nuxtLink
                to="/pages"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ pages }}
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/contact"
                class="text-gray-600 hover:text-custom-green font-semibold text-sm"
              >
                {{ contact }}</nuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Social and Contact -->
        <div>
          <div class="space-y-2">
            <h4 class="font-semibold text-black">Head Office</h4>
            <p class="text-xs sm:text-sm text-gray-600">
              {{ desc_1 }}
            </p>
            <p class="text-xs sm:text-sm text-gray-600">
              {{ desc_2 }}
            </p>
            <p class="text-xs sm:text-sm text-gray-600">
              {{ desc_3 }}
            </p>
          </div>
          <div class="mt-4">
            <input
              type="email"
              :placeholder="mail"
              class="border-gray-300 border-b p-2 mb-4 w-full text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div
        class="flex flex-cols-3 sm:flex-row items-start sm:items-center py-4 justify-between"
      >
        <div
          class="font-semibold text-gray-600 hover:underline hover:text-custom-green text-sm"
        >
          www.iedarelief.org
        </div>
        <div>
          <p
            class="text-xs sm:text-sm text-gray-600 sm:mt-0 font-semibold hover:underline hover:text-custom-green"
          >
            Tel: +1 713 774 2522
          </p>
        </div>
        <div>
          <p
            class="text-xs sm:text-sm text-gray-600 sm:mt-0 font-semibold hover:underline hover:text-custom-green"
          >
            Fax: +1 713 774 2529
          </p>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-black">
      <div class="mj-container flex items-center justify-between py-4 px-6">
        <!-- Texte -->
        <div class="text-sm text-white hover:text-custom-green hover:underline">
          © 2024 IEDA Relief All rights reserved.
        </div>
        <!-- Liens des réseaux sociaux -->
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-blue-500">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-500">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" class="text-white hover:text-red-500">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-white hover:text-blue-700">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const title = ref(t("footer.title"));
const title_1 = ref(t("footer.title_1"));
const desc_1 = ref(t("footer.desc_1"));
const desc_2 = ref(t("footer.desc_2"));
const desc_3 = ref(t("footer.desc_3"));
const home = ref(t("footer.home"));
const about = ref(t("footer.about"));
const works = ref(t("footer.works"));
const pages = ref(t("footer.pages"));
const contact = ref(t("footer.contact"));
const mail = ref(t("footer.mail"));
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

a,
i {
  transition: color 0.3s ease;
}
</style>


