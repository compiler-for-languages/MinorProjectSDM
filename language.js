const siteText = {
    en: {
        homeTitle: "Welcome to the SDM Cataract Information Portal",
        homePara: "Use the tiles below to learn more about cataract, surgery, and post-operative care in both English and Kannada.",
        menu: ["Home", "What is Cataract?", "Before Surgery", "After Surgery", "FAQs", "Contact / Help"]
    },
    kn: {
        homeTitle: "ಎಸ್‌ಡಿಎಂ ಕ್ಯಾಟರಾಕ್ಟ್ ಮಾಹಿತಿ ಪೋರ್ಟಲ್‌ಗೆ ಸ್ವಾಗತ",
        homePara: "ಕ್ಯಾಟರಾಕ್ಟ್, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಲು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳು ಬಳಸಿ.",
        menu: ["ಮುಖಪುಟ", "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮುನ್ನ", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ", "ಪ್ರಶ್ನೋತ್ತರ", "ಸಂಪರ್ಕ / ಸಹಾಯ"]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("language");
    const savedLang = localStorage.getItem("siteLang") || "en";
    langSelect.value = savedLang;
    setLanguage(savedLang);

    langSelect.addEventListener("change", () => {
        const lang = langSelect.value;
        localStorage.setItem("siteLang", lang);
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    const t = siteText[lang];
    if (!t) return;

    t.menu.forEach((label, i) => {
        const el = document.getElementById("nav" + i);
        if (el) el.textContent = label;
    });

    const homeTitle = document.getElementById("homeTitle");
    const homePara = document.getElementById("homePara");

    if (homeTitle) homeTitle.textContent = t.homeTitle;
    if (homePara) homePara.textContent = t.homePara;
}
