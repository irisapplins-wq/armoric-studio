// Armoric Studio — scripts communs
// Le compteur global nécessite un petit service de comptage externe ou un backend.
// Tant qu'il n'est pas configuré, on affiche uniquement le nombre de visites de ce navigateur, sans prétendre qu'il s'agit du total du site.
(() => {
  const el=document.getElementById('visit-count'); if(!el) return;
  const key='armoric_local_visits'; let n=Number(localStorage.getItem(key)||0)+1; localStorage.setItem(key,String(n));
  el.textContent=n+' sur cet appareil';
})();
