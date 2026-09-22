// Armoric Studio — statistiques GoatCounter

(() => {
  // Charge GoatCounter pour comptabiliser les visites du site.
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter =
    "https://armoricstudio.goatcounter.com/count";

  document.head.appendChild(script);
})();
