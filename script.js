/* =========================
   BANNER SLIDER
========================= */

const track = document.querySelector(".banner-track");
const slides = document.querySelectorAll(".banner-track img");
const dotsContainer = document.getElementById("dots");

let index = 0;
const total = slides.length;

/* 🔥 CREATE DOTS */
dotsContainer.innerHTML = "";

for (let i = 0; i < total; i++) {
    let dot = document.createElement("span");
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll("#dots span");

function updateDots() {
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
}

function goToSlide(i) {
    index = i;

    track.scrollTo({
        left: track.clientWidth * i,
        behavior: "smooth"
    });

    updateDots();
}

/* 🔥 AUTO SLIDE (3 sec) */
setInterval(() => {
    index = (index + 1) % total;
    goToSlide(index);
}, 3000);

/* 🔥 MANUAL SCROLL SYNC */
track.addEventListener("scroll", () => {
    clearTimeout(track.timer);

    track.timer = setTimeout(() => {
        index = Math.round(track.scrollLeft / track.clientWidth);
        updateDots();
    }, 100);
});

/* INIT */
updateDots();

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

document.addEventListener("click", (e) => {
    if (!e.target.closest(".desktop-search")) {
        box.style.display = "none";
    }
});

const input = document.getElementById("desktopSearchInput");
const box = document.getElementById("searchHistoryBox");

if (input && box) {

    function getData() {
        return JSON.parse(localStorage.getItem("searchHistory")) || [];
    }

    function setData(data) {
        localStorage.setItem("searchHistory", JSON.stringify(data));
    }

    function render() {
        let data = getData();
        box.innerHTML = "";

        data.slice(0, 10).forEach((item, index) => {
            let div = document.createElement("div");

            div.innerHTML = `
                <span>${item}</span>
                <button onclick="deleteItem(${index})">✖</button>
            `;

            div.querySelector("span").onclick = () => {
                input.value = item;
                box.style.display = "none";
            };

            box.appendChild(div);
        });
    }

    window.deleteItem = function(index) {
        let data = getData();
        data.splice(index, 1);
        setData(data);
        render();
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

}

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("bannerTrack");
    const images = track.querySelectorAll("img");
    const dotsContainer = document.getElementById("dots");

    let index = 0;
    const total = images.length;

    // safety check
    if (!track || !dotsContainer || total === 0) return;

    // CREATE DOTS
    dotsContainer.innerHTML = "";
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("span");
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll("span");

    function render() {
        // move slide
        track.scrollTo({
            left: index * track.clientWidth,
            behavior: "smooth"
        });

        // update dots
        dots.forEach(d => d.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    // AUTO SLIDE
    setInterval(() => {
        index = (index + 1) % total;
        render();
    }, 3000);

    // MANUAL SCROLL SYNC
    track.addEventListener("scroll", () => {
        clearTimeout(track.timer);

        track.timer = setTimeout(() => {
            index = Math.round(track.scrollLeft / track.clientWidth);
            render();
        }, 80);
    });

    // INIT
    render();

});



function openCategory() {
    window.location.href = "categories.html";
}
