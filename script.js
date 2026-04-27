
/* =========================
   BANNER SLIDER
========================= */

const slider = document.getElementById("slider");

if (slider) {
    const slides = slider.querySelectorAll("img");

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: "smooth"
        });

    }, 4000);
}




/* SEARCH */
function goToSearch() {
    window.location.href = "search.html";
}


/* OPEN MENU (SMART SWITCH) */
function openMenu() {

    const overlay = document.getElementById("menuOverlay");

    if (window.innerWidth >= 768) {
        document.getElementById("sideMenuDesktop").classList.add("active");
    } else {
        document.getElementById("sideMenuMobile").classList.add("active");
    }

    if (overlay) overlay.classList.add("active");
}


/* CLOSE MENU */
function closeMenu() {

    const overlay = document.getElementById("menuOverlay");

    document.getElementById("sideMenuMobile").classList.remove("active");
    document.getElementById("sideMenuDesktop").classList.remove("active");

    if (overlay) overlay.classList.remove("active");
}


/* LOGIN BASED ITEM */
document.addEventListener("DOMContentLoaded", function () {

    let user = localStorage.getItem("username");
    let myOrders = document.getElementById("myOrders");

    if (myOrders) {
        myOrders.style.display =
            (user && user.trim() !== "") ? "block" : "none";
    }

});