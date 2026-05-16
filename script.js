/* =========================
   GLOBAL CLICK HANDLER (NAVBAR FIX)
========================= */

document.addEventListener("click", function (e) {

    /* BAG ICON */
    document.addEventListener("click", function (e) {

    const bag = e.target.closest(".fa-bag-shopping");

    if (!bag) return;

    e.preventDefault();

    window.location.href = "cart.html";

});

    /* SEARCH ICON */
    if (e.target.closest(".fa-magnifying-glass")) {
        window.location.href = "search.html";
    }

    /* BACK BUTTON */
    if (e.target.closest(".back-btn")) {

        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }

    }

});


/* =========================
   BANNER SLIDER (FIXED SINGLE VERSION)
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("bannerTrack");
    const dotsContainer = document.getElementById("dots");

    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll("img");
    let index = 0;
    const total = slides.length;

    if (total === 0) return;

    /* CREATE DOTS */
    dotsContainer.innerHTML = "";

    for (let i = 0; i < total; i++) {
        const dot = document.createElement("span");
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll("span");

    function update() {

        track.scrollTo({
            left: index * track.clientWidth,
            behavior: "smooth"
        });

        dots.forEach(d => d.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    /* AUTO SLIDE */
    setInterval(() => {
        index = (index + 1) % total;
        update();
    }, 3000);

    /* MANUAL SCROLL SYNC */
    track.addEventListener("scroll", () => {

        clearTimeout(track.timer);

        track.timer = setTimeout(() => {

            index = Math.round(track.scrollLeft / track.clientWidth);
            update();

        }, 100);

    });

    update();

});


/* =========================
   MENU SYSTEM
========================= */

function openMenu() {

    const overlay = document.getElementById("menuOverlay");

    if (window.innerWidth >= 768) {
        document.getElementById("sideMenuDesktop")?.classList.add("active");
    } else {
        document.getElementById("sideMenuMobile")?.classList.add("active");
    }

    if (overlay) overlay.classList.add("active");

}


/* CLOSE MENU */
document.addEventListener("click", function (e) {

    const mobileMenu = document.getElementById("sideMenuMobile");
    const desktopMenu = document.getElementById("sideMenuDesktop");
    const menuBtn = document.querySelector(".ri-menu-line");

    if (mobileMenu && mobileMenu.classList.contains("active")) {

        if (!mobileMenu.contains(e.target) && !menuBtn?.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }

    }

    if (desktopMenu && desktopMenu.classList.contains("active")) {

        if (!desktopMenu.contains(e.target)) {

            desktopMenu.classList.remove("active");

            const overlay = document.getElementById("menuOverlay");
            if (overlay) overlay.classList.remove("active");

        }

    }

});


/* =========================
   LOGIN BASED UI
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");
    const myOrders = document.getElementById("myOrders");

    if (myOrders) {
        myOrders.style.display = user ? "block" : "none";
    }

});


/* =========================
   DESKTOP SEARCH HISTORY
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("desktopSearchInput");
    const box = document.getElementById("searchHistoryBox");

    if (!input || !box) return;

    function getData() {
        return JSON.parse(localStorage.getItem("searchHistory")) || [];
    }

    function setData(data) {
        localStorage.setItem("searchHistory", JSON.stringify(data));
    }

    function render() {

        const data = getData();
        box.innerHTML = "";

        data.slice(0, 10).forEach((item, index) => {

            const div = document.createElement("div");

            div.innerHTML = `
                <span>${item}</span>
                <button>✖</button>
            `;

            div.querySelector("span").onclick = () => {
                input.value = item;
                box.style.display = "none";
            };

            div.querySelector("button").onclick = () => {
                data.splice(index, 1);
                setData(data);
                render();
            };

            box.appendChild(div);

        });

    }

    function save(value) {

        if (!value.trim()) return;

        let data = getData();

        data = data.filter(i => i !== value);
        data.unshift(value);

        if (data.length > 10) data.pop();

        setData(data);
    }

    input.addEventListener("focus", () => {
        render();
        box.style.display = "block";
    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            save(input.value);
            render();
        }

    });

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".desktop-search")) {
            box.style.display = "none";
        }

    });

});


/* =========================
   SEARCH FUNCTION
========================= */

function goToSearch() {
    window.location.href = "search.html";
}

document.addEventListener("click", function (e) {

    const bag = e.target.closest(".cart-icon");

    if (!bag) return;

    e.preventDefault();
    e.stopPropagation(); // 🔥 IMPORTANT

    window.location.href = "cart.html";

});

document.addEventListener("click", function (e) {

    const heart = e.target.closest(".fa-heart, .ri-heart-line");

    if (!heart) return;

    window.location.href = "wishlist.html";

});

/* =========================
   CLOSE ALL MENUS
========================= */

function closeAllMenus(){

    document
    .querySelectorAll(".dropdown-menu")
    .forEach(menu => {

        menu.classList.remove("active");

    });

    document
    .querySelectorAll(".filter-btn")
    .forEach(btn => {

        btn.classList.remove("active");

    });
}

/* =========================
   TOGGLE MENU
========================= */

function toggleMenu(menuId, button){

    let menu =
    document.getElementById(menuId);

    let isOpen =
    menu.classList.contains("active");

    closeAllMenus();

    if(!isOpen){

        menu.classList.add("active");

        button.classList.add("active");
    }
}

/* =========================
   SORT
========================= */

function toggleSortMenu(el){

    toggleMenu("sortMenu", el);
}

/* CATEGORY */

function toggleCategoryMenu(el){

    toggleMenu("categoryMenu", el);
}

/* GENDER */

function toggleGenderMenu(el){

    toggleMenu("genderMenu", el);
}

/* FILTER */

function openFilters(){

    alert("Filters panel coming soon");
}

/* SORT FUNCTION */

function sortProducts(type){

    alert(type + " sorting applied");

    closeAllMenus();
}

/* CLICK OUTSIDE CLOSE */

document.addEventListener("click", function(e){

    if(
        !e.target.closest(".filter-btn")
        &&
        !e.target.closest(".dropdown-menu")
    ){

        closeAllMenus();
    }

});
