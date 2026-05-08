/* =========================
   GET CURRENT LANGUAGE
========================= */

function getCurrentLanguage(){

    return localStorage.getItem(
        "selectedLanguage"
    ) || "English";

}


/* =========================
   TRANSLATIONS
========================= */

const translations = {

    English: {

        categories: "Shop By Categories",
        brands: "Shop By Brand",
        notifications: "Notifications",
        language: "Choose Language",
        orders: "My Orders",
        wishlist: "My Wishlist",
        cart: "My Cart"

    },

    Hindi: {

        categories: "शॉप बाय कैटेगरी",
        brands: "ब्रांड खोजें",
        notifications: "सूचनाएं",
        language: "भाषा चुनें",
        orders: "मेरे ऑर्डर",
        wishlist: "मेरी विशलिस्ट",
        cart: "माय कार्ट"

    },

    Bengali: {

        categories: "বিভাগ অনুযায়ী কিনুন",
        brands: "ব্র্যান্ড অনুযায়ী খুঁজুন",
        notifications: "বিজ্ঞপ্তি",
        language: "ভাষা নির্বাচন করুন",
        orders: "আমার অর্ডার",
        wishlist: "আমার উইশলিস্ট",
        cart: "আমার কার্ট"

    },

    Tamil: {

        categories: "வகைப்படி வாங்கவும்",
        brands: "பிராண்ட் மூலம் தேடுங்கள்",
        notifications: "அறிவிப்புகள்",
        language: "மொழியை தேர்வு செய்யவும்",
        orders: "என் ஆர்டர்கள்",
        wishlist: "என் விருப்பப்பட்டியல்",
        cart: "என் கார்ட்"

    },

    Telugu: {

        categories: "వర్గాల వారీగా కొనండి",
        brands: "బ్రాండ్ ద్వారా శోధించండి",
        notifications: "నోటిఫికేషన్లు",
        language: "భాషను ఎంచుకోండి",
        orders: "నా ఆర్డర్లు",
        wishlist: "నా విష్‌లిస్ట్",
        cart: "నా కార్ట్"

    }

};


/* =========================
   APPLY LANGUAGE
========================= */

function applyLanguage(){

    const selectedLanguage =
    getCurrentLanguage();

    const langData =
    translations[selectedLanguage];

    if(!langData) return;

    /* CATEGORY */
    const categoryText =
    document.getElementById("lang-categories");

    if(categoryText){
        categoryText.innerText =
        langData.categories;
    }

    /* BRAND */
    const brandText =
    document.getElementById("lang-brands");

    if(brandText){
        brandText.innerText =
        langData.brands;
    }

    /* NOTIFICATIONS */
    const notificationText =
    document.getElementById("lang-notifications");

    if(notificationText){
        notificationText.innerText =
        langData.notifications;
    }

    /* LANGUAGE */
    const languageText =
    document.getElementById("lang-language");

    if(languageText){
        languageText.innerText =
        langData.language;
    }

    /* ORDERS */
    const orderText =
    document.getElementById("lang-orders");

    if(orderText){
        orderText.innerText =
        langData.orders;
    }

    /* WISHLIST */
    const wishlistText =
    document.getElementById("lang-wishlist");

    if(wishlistText){
        wishlistText.innerText =
        langData.wishlist;
    }

    /* CART */
    const cartText =
    document.getElementById("lang-cart");

    if(cartText){
        cartText.innerText =
        langData.cart;
    }

}


/* =========================
   ACTIVE LANGUAGE
========================= */

function setActiveLanguage(){

    const currentLanguage =
    getCurrentLanguage();

    const items =
    document.querySelectorAll(
        ".language-item"
    );

    items.forEach((item)=>{

        item.classList.remove("active");

        if(
            item.dataset.lang ===
            currentLanguage
        ){
            item.classList.add("active");
        }

    });

}


/* =========================
   LOAD
========================= */

window.addEventListener(
    "DOMContentLoaded",
    function(){

        applyLanguage();
        setActiveLanguage();

    }
);