<template>
  <div>
    <div class="relative mj-container px-4 sm:px-6 lg:px-8">
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
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ home }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/about"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ about }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/works"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ works }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/pages"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ pages }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/contact"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ contact }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
          </ul>
        </div>

        <!-- Section suivante -->
        <div>
          <h4 class="font-semibold text-gray-700 mb-2">{{ title }}</h4>
          <ul class="space-y-1">
            <li>
              <nuxtLink
                to="/"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ home }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/about"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ about }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/works"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ works }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/pages"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ pages }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
            <li>
              <nuxtLink
                to="/contact"
                class="group text-gray-600 hover:text-custom-green font-semibold text-sm relative"
              >
                {{ contact }}
                <span
                  class="absolute left-0 bottom-0 h-[2px] w-0 bg-custom-green transition-all duration-300 group-hover:w-full"
                ></span>
              </nuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social and Contact -->
        <div>
          <div class="space-y-2">
            <h4 class="font-semibold text-black">{{ t("logger.of") }}</h4>
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
      <div
        class="absolute inset-0 flex justify-center items-center z-0 -left-72"
      >
        <span
          class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray-500 opacity-10"
        >
          IEDA
        </span>
        <span
          class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray-500 opacity-10 ml-4"
        >
          Relief
        </span>
      </div>
      <hr class="my-4" />
      <div
        class="grid grid-cols-1 sm:justify-items-center sm:grid-cols-3 gap-4 py-4"
      >
        <!-- Site Web -->
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

        <!-- Téléphone -->
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

        <!-- Fax -->
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
        <!-- Texte -->
        <div class="text-sm text-white hover:text-custom-green hover:underline">
          © {{ currentYear }} IEDA Relief All rights reserved.
        </div>
        <div class="text-sm text-white hover:text-custom-green hover:underline">
          Made with ❤️ and ☕
        </div>
        <!-- Liens des réseaux sociaux -->
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
      <!-- <div class="flex justify-center items-center text-white p-4">
        <div class="text-center text-xs max-w-lg">
          <p class="mb-4">
            Les cookies sont importants pour le bon fonctionnement d'un site
            web. Pour améliorer votre expérience, nous utilisons des cookies
            pour collecter des statistiques afin d'optimiser les
            fonctionnalités.
          </p>
          <button
            class="bg-custom-green hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
          >
            Accepter les cookies
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const title = ref(t("footer.title"));
const desc_1 = ref(t("footer.desc_1"));
const desc_2 = ref(t("footer.desc_2"));
const desc_3 = ref(t("footer.desc_3"));
const home = ref(t("footer.home"));
const about = ref(t("footer.about"));
const works = ref(t("footer.works"));
const pages = ref(t("footer.pages"));
const contact = ref(t("footer.contact"));
const mail = ref(t("footer.mail"));
const currentYear = new Date().getFullYear();
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

a,
i {
  transition: color 0.3s ease;
}
</style>


