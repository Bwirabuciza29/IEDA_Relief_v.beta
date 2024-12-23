// plugins/particles.client.js
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Ajouter la version UMD de particles.js depuis un CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // particles.js est maintenant chargé et peut être utilisé
      console.log("particles.js chargé");
    };
    document.head.appendChild(script);
  }
});
