<template>
  <section class="bg-custom-blue p-8 mx-4 rounded-lg relative z-10 bg-left">
    <div class="mj-container text-center">
      <div class="w-full text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          {{ t1 }}
          <span class="font-sri text-custom-green">{{ t2 }}</span>
          <br />
          <span>{{ t3 }}</span>
        </h2>
        <p class="text-white mb-6">
          {{ desc }}
        </p>
        <form class="space-y-4 w-full max-w-md mx-auto">
          <!-- First Name and Last Name -->
          <div class="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              :placeholder="frm_1"
              class="w-full p-2 text-sm border border-custom-blue rounded-lg focus:ring-2 focus:ring-custom-blue"
              required
            />
            <input
              type="text"
              :placeholder="frm_2"
              class="w-full p-2 text-sm border border-custom-blue rounded-lg focus:ring-2 focus:ring-custom-blue mt-3 md:mt-0"
              required
            />
          </div>
          <!-- Email and Subscribe Button -->
          <div class="space-y-3 gap-2">
            <input
              type="email"
              :placeholder="frm_3"
              class="w-full p-2 text-sm border border-custom-blue rounded-lg focus:ring-2 focus:ring-custom-blue"
              required
            />
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 px-4 text-sm border border-blue-300 rounded-lg hover:bg-blue-700 transition"
            >
              {{ btn }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const t1 = ref(t("subscribe.t1"));
const t2 = ref(t("subscribe.t2"));
const t3 = ref(t("subscribe.t3"));
const desc = ref(t("subscribe.desc"));
const frm_1 = ref(t("subscribe.frm_1"));
const frm_2 = ref(t("subscribe.frm_2"));
const frm_3 = ref(t("subscribe.frm_3"));
const btn = ref(t("subscribe.btn"));
</script>

<style scoped>
.bg-left {
  background-image: url("/img/vg.png");
  background-position: left center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}
</style>
