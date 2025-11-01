/* ===========================
   LAMASO LUX - JS
   =========================== */

// Sélection des éléments
const formulaireContainer = document.getElementById('formulaire-container');
const produitNom = document.getElementById('produit-nom');
const message = document.getElementById('message');
const form = document.getElementById('commandeForm');
let prixSelectionne = '';

// Met à jour le prix selon la sélection
function changerPrix(select, id) {
  const prix = select.value;
  document.getElementById(`prix-${id}`).innerText = prix + " DH";
  prixSelectionne = prix + " DH";
}

// Ouvre le formulaire de commande
function ouvrirFormulaire(nom) {
  const prix = prixSelectionne || document.querySelector(`#prix-${nom.toLowerCase().replace(/\s+/g, '')}`)?.innerText || '';
  produitNom.innerText = `${nom} - ${prix}`;
  document.getElementById('produit-hidden').value = nom;
  document.getElementById('prix-hidden').value = prix;
  formulaireContainer.classList.add('actif');
  document.body.style.overflow = 'hidden';
}

// Ferme le formulaire
function fermerFormulaire() {
  formulaireContainer.classList.remove('actif');
  document.body.style.overflow = 'auto';
}

// Envoie la commande (affiche un message de succès)
function envoyerCommande(event) {
  event.preventDefault();
  formulaireContainer.classList.remove('actif');
  message.classList.add('actif');
  form.reset();
  prixSelectionne = '';

  setTimeout(() => {
    message.classList.remove('actif');
  }, 4000);
}

// Animation au défilement
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => observer.observe(card));

// Bouton WhatsApp avec logo
const whatsappBtn = document.createElement('a');
whatsappBtn.href = "https://wa.me/212771908373?text=Bonjour%20Lamaso%20Lux%20!%20Je%20souhaite%20commander%20un%20parfum.";
whatsappBtn.className = "whatsapp-btn";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = `<img src="whatsapp-logo.png" alt="WhatsApp">`; // ضع صورة الشعار في نفس المجلد
document.body.appendChild(whatsappBtn);

// Mode sombre / clair
const toggleMode = document.createElement('button');
toggleMode.className = 'dark-toggle';
toggleMode.innerText = '🌙';
document.body.appendChild(toggleMode);

toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleMode.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Animation header au chargement
window.addEventListener('load', () => {
  document.querySelector('.header').classList.add('loaded');
});
