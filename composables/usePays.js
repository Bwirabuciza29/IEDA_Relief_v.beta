import { ref, watch } from "vue";

const paysList = ref([
  "All",
  "USA",
  "DRC",
  "Burkina Faso",
  "CAR",
  "Niger",
  "Mali",
  "Cameroun",
  "Tchad",
]);

const selectedPays = ref("All");
const dropdownOpen = ref(false);

/* Sauvegarde navigateur */
if (process.client) {
  const saved = localStorage.getItem("selectedPays");
  if (saved) selectedPays.value = saved;
}

watch(selectedPays, (val) => {
  if (process.client) {
    localStorage.setItem("selectedPays", val);
  }
});

export function usePays() {
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };

  const selectPays = (pays) => {
    selectedPays.value = pays;
    dropdownOpen.value = false;
  };

  return {
    paysList,
    selectedPays,
    dropdownOpen,
    toggleDropdown,
    selectPays,
  };
}
