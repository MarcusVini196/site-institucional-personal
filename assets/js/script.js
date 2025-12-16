const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});

menuOverlay.addEventListener("click", closeMenu);

function closeMenu() {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
}


// contact modal
function openContact() { document.getElementById('modal').style.display = 'flex' }
function closeModal() { document.getElementById('modal').style.display = 'none' }
document.getElementById('agendarTop').addEventListener('click', openContact);
document.getElementById('agendarHero').addEventListener('click', openContact);

// select plan action
function selectPlan(name) {
    openContact();
    // prefill WhatsApp link for convenience
    const wa = document.querySelector('#modal a');
    if (wa) wa.href = 'https://wa.me/5591999999999?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20plano%20' + encodeURIComponent(name);
}