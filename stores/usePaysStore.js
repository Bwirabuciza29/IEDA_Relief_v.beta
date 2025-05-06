// stores/usePaysStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRuntimeConfig } from "#app";

export const usePaysStore = defineStore("pays", () => {
  const paysList = ref([]);
  const selectedPays = ref("All");
  const isLoading = ref(false);
  const dropdownOpen = ref(false);

  const fetchPays = async () => {
    try {
      isLoading.value = true;
      const config = useRuntimeConfig();
      const directusUrl = config.public.directus.url;
      const response = await fetch(`${directusUrl}/items/pays`);
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des pays.");
      const data = await response.json();
      paysList.value = ["All", ...data.data.map((p) => p.designation)];
    } catch (err) {
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const selectPays = (pays) => {
    selectedPays.value = pays;
    dropdownOpen.value = false;
    console.log("Pays sélectionné :", pays);
  };

  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };

  return {
    paysList,
    selectedPays,
    isLoading,
    dropdownOpen,
    fetchPays,
    selectPays,
    toggleDropdown,
  };
});
