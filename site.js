// Armoric Studio — statistiques + compteur GoatCounter

(() => {
  // Enregistre les visites avec GoatCounter.
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter =
    "https://armoricstudio.goatcounter.com/count";

  document.head.appendChild(script);

  // Affiche le nombre total de visites dans le footer.
  const counter = document.getElementById("visit-count");

  if (counter) {
    fetch("https://armoricstudio.goatcounter.com/counter/TOTAL.json")
      .then(response => {
        if (!response.ok) throw new Error("Compteur indisponible");
        return response.json();
      })
      .then(data => {
        const total = Number(data.count);

        if (Number.isFinite(total)) {
          counter.textContent =
            "👁 " +
            total.toLocaleString("fr-FR") +
            (total > 1 ? " visites" : " visite");
        }
      })
      .catch(() => {
        counter.textContent = "👁 Visites";
      });
  }
})();
