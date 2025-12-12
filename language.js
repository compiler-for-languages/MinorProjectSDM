/**********************************************
   GLOBAL: load saved language (default en)
**********************************************/
let savedLang = localStorage.getItem( "siteLang" ) || "en";


/**********************************************
   SITE-WIDE TEXT FOR HOME + NAVIGATION + TILES
**********************************************/
const siteText = {
    en: {
        homeTitle: "Welcome to the SDM Cataract Information Portal",
        homePara: "Please navigate using given options to learn more about cataract, surgery, and post-operative care in both English and Kannada.",
        menu: [ "Home", "What is Cataract?", "Before Surgery", "After Surgery", "FAQs", "Contact / Help" ],
        tiles: {
            t1: "What is Cataract?",
            t2: "Before Surgery",
            t3: "After Surgery",
            t4: "FAQs",
            t5: "Contact / Help"
        }
    },
    kn: {
        homeTitle: "ಎಸ್‌ಡಿಎಂ ಕ್ಯಾಟರಾಕ್ಟ್ ಮಾಹಿತಿ ಪೋರ್ಟಲ್‌ಗೆ ಸ್ವಾಗತ",
        homePara: "ಕ್ಯಾಟರಾಕ್ಟ್, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಲು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳು ಬಳಸಿ.",
        menu: [ "ಮುಖಪುಟ", "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ", "ಪ್ರಶ್ನೋತ್ತರ", "ಸಂಪರ್ಕ / ಸಹಾಯ" ],
        tiles: {
            t1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?",
            t2: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು",
            t3: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ",
            t4: "ಪ್ರಶ್ನೋत्तर",
            t5: "ಸಂಪರ್ಕ / ಸಹಾಯ"
        }
    }
};


/**********************************************
   CATARACT PAGE TRANSLATIONS (full objects)
**********************************************/
const cataractPage = {
    en: {
        cat_title: "What is Cataract?",
        cat_p1: "A cataract is a condition where the natural lens inside the eye becomes cloudy, preventing light from entering the eye clearly. The lens normally works like a transparent glass that focuses light onto the retina to create sharp, clear vision. When a cataract forms, this lens gradually loses its transparency and becomes foggy or opaque. As a result, vision slowly becomes blurry, hazy, dim, or distorted.",
        cat_p2: "Cataracts usually develop slowly over many years and are most commonly related to aging. However, they can also occur earlier in life due to medical conditions like diabetes, long-term use of steroid medications, eye injuries, infections, or genetic factors. Extended exposure to sunlight (UV rays), smoking, and poor nutrition may further speed up cataract formation.",
        cat_p3: "In the early stages, cataracts may not cause noticeable symptoms. Over time, the clouding becomes dense enough to interfere with everyday activities such as reading, driving, recognizing faces, or seeing clearly in bright sunlight. Colors may start to appear dull, lights may seem too bright, and night vision becomes difficult due to glare and halos.",
        cat_p4: "Cataracts are very common and one of the leading causes of preventable blindness worldwide. Fortunately, modern cataract treatment is extremely safe and effective. Surgery involves removing the cloudy lens and replacing it with a clear artificial lens, restoring sharp vision and improving quality of life. Since cataracts do not improve on their own and cannot be treated with medicines or glasses, surgery remains the only permanent solution.",
        cat_symptoms_title: "Common Symptoms of Cataract",
        cat_symptoms_list: [
            "Blurry or cloudy vision",
            "Difficulty seeing at night",
            "Sensitivity to light and glare",
            "Seeing halos around lights",
            "Faded or yellowish colors",
            "Frequent change in glasses power"
        ],
        cat_types_title: "Types of Cataract",
        cat_types_list: [
            "Nuclear Cataract: Affects the center of the lens",
            "Cortical Cataract: Affects the edges of the lens",
            "Posterior Subcapsular Cataract: Affects the back of the lens; fast-growing",
            "Congenital Cataract: Present at birth"
        ],
        cat_when_title: "When Should You Go for Cataract Surgery?",
        when_p1: "Cataract surgery becomes necessary when your vision starts affecting your daily life.",
        when_list: [
            "Difficulty driving (especially at night)",
            "Unable to read clearly",
            "Colors appear faded",
            "Your doctor notices rapid cataract growth",
            "High eye pressure due to cataract"
        ],
        when_note: "Modern cataract surgery is extremely safe, quick (10–20 minutes), and painless.",
        cat_history_title: "History of Cataract Surgery",
        hist_intro: "Cataract surgery has evolved dramatically through history:",
        hist_list: [
            "600 BC – Sushruta: First documented cataract removal in ancient India.",
            "1700s: First surgical extraction of the lens.",
            "1949: First artificial lens (IOL) implanted.",
            "1967: Phacoemulsification invented (modern ultrasound technique).",
            "Today: One of the safest and most successful surgeries worldwide."
        ]
    },

    kn: {
        cat_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?",
        cat_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೆ ಕಣ್ಣಿನ ಒಳಗಿನ ನೈಸರ್ಗಿಕ ಲೆನ್ಸ್ ಮೋಡಗೊಳ್ಳುವ ಸ್ಥಿತಿ. ಇದರಿಂದ ಬೆಳಕು ಸ್ಪಷ್ಟವಾಗಿ ಕಣ್ಣಿಗೆ ತಲುಪಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ. ಲೆನ್ಸ್ ಸಾಮಾನ್ಯವಾಗಿ ಪಾರದರ್ಶಕ ಗಾಜಿನಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ಬೆಳಕನ್ನು ರೆಟಿನಾಗೆ ಕೇಂದ್ರೀಕರಿಸಿ ಸ್ಪಷ್ಟ ದೃಷ್ಟಿ ನೀಡುತ್ತದೆ. ಕ್ಯಾಟರಾಕ್ಟ್ ಉಂಟಾದಾಗ, ಲೆನ್ಸ್ ನಿಧಾನವಾಗಿ ಸ್ಪಷ್ಟತೆಯನ್ನು ಕಳೆದು ಮೋಡಗೊಳ್ಳುತ್ತದೆ. ಇದರಿಂದ ದೃಷ್ಟಿ ಮಸುಕಾಗುತ್ತದೆ ಅಥವಾ ವಿಕೃತವಾಗುತ್ತದೆ.",
        cat_p2: "ಕ್ಯಾಟರಾಕ್ಟ್ ಸಾಮಾನ್ಯವಾಗಿ ವಯಸ್ಸಿನೊಂದಿಗೆ ನಿಧಾನವಾಗಿ ಬೆಳೆಯುತ್ತದೆ. ಆದರೆ ಮಧುಮೇಹ, ದೀರ್ಘಕಾಲಿಕ ಸ್ಟೆರಾಯ್ಡ್ ಔಷಧಿಯ ಬಳಕೆ, ಕಣ್ಣಿಗೆ ಗಾಯ, ಸೋಂಕುಗಳು ಅಥವಾ ಆನುವಂಶಿಕ ಕಾರಣಗಳಿಂದ ಕೂಡ ಆಗಬಹುದು. ಸೂರ್ಯಕಿರಣ (UV) ನಿಮಗೆ ಹೆಚ್ಚು ತಲುಪಿದರೆ, ಧೂಮಪಾನ ಮತ್ತು ಅಯೋಗ್ಯ ಆಹಾರವೂ ಕ್ಯಾಟರಾಕ್ಟ್ ಬೆಳವಣಿಗೆಯನ್ನು ವೇಗಗೊಳಿಸಬಹುದು.",
        cat_p3: "ಪ್ರಾಥಮಿಕ ಹಂತದಲ್ಲಿ ಲಕ್ಷಣಗಳು ಕಾಣಿಸಿಕೊಳ್ಳದಿರಬಹುದು. ಸಮಯ ಜತೆಗೆ ಮೋಡಗೊಳ್ಳುವುದು ತೀವ್ರವಾಗಿದ್ರೆ ಓದುವುದು, ಚಾಲನೆ, ಮುಖಗಳನ್ನು ಗುರುತಿಸುವುದು ಅಥವಾ ತೀವ್ರ ಬೆಳಕಿನಲ್ಲಿ ನೋಡುವುದು ಕಷ್ಟವಾಗುತ್ತದೆ. ಬಣ್ಣಗಳು ಮಂಕಾಗಬಹುದು ಮತ್ತು ರಾತ್ರಿ ದೃಷ್ಟಿ ಗ್ಲೇರ್‌ ಅಥವಾ ಹಾಲೋಗಳಿಂದ ಕಷ್ಟವಾಗಬಹುದು.",
        cat_p4: "ಕ್ಯಾಟರಾಕ್ಟ್‌ಗಳು ಸಾಮಾನ್ಯವೆ ಹಾಗೂ ತಡೆಗಟ್ಟಬಹುದಾದ ಕುರುಡೆತನದ ಪ್ರಮುಖ ಕಾರಣಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಆದಾಗ್ಯೂ, ಆಧುನಿಕ ಚಿಕಿತ್ಸೆಗೆ ಲಭ್ಯವಿರುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಮೋಡದ ಲೆನ್ಸ್ ತೆಗೆದು ಅದರ ಸ್ಥಳಕ್ಕೆ ಸ್ಪಷ್ಟ ಕೃತಕ ಲೆನ್ಸ್ (IOL) ಹಾಕಲಾಗುತ್ತದೆ.",
        cat_symptoms_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಸಾಮಾನ್ಯ ಲಕ್ಷಣಗಳು",
        cat_symptoms_list: [
            "ಮಸುಕಾದ ಅಥವಾ ಮೋಡದಂತಹ ದೃಷ್ಟಿ",
            "ರಾತ್ರಿಯಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣದಿರುವುದು",
            "ಬೆಳಕಿಗೆ ಸಂವೇದನೆ ಮತ್ತು ಗ್ಲೇರ್",
            "ಬೆಳಕಿನ ಸುತ್ತ ೆ ಹಾಲೋ ಕಾಣುವುದು",
            "ಬಣ್ಣಗಳು ಮಂಕಾಗುವುದು",
            "ಕಣ್ಣಿನ ಚಶ್ಮೆಯ ಶಕ್ತಿ తరತರಿ ಬದಲಾಗುವುದು"
        ],
        cat_types_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಪ್ರಕಾರಗಳು",
        cat_types_list: [
            "ನ್ಯೂಕ್ಲಿಯರ್ ಕ್ಯಾಟರಾಕ್ಟ್: ಲೆನ್ಸ್‌ನ ಕೇಂದ್ರವನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ",
            "ಕೋರ್ಟಿಕಲ್ ಕ್ಯಾಟರಾಕ್ಟ್: ಲೆನ್ಸ್‌ನ ಬಾಹ್ಯ ಭಾಗವನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ",
            "ಪೋಸ್ಟೀರಿಯರ್ ಸಬ್‌ಕ್ಯಾಪ್ಸುಲರ್ ಕ್ಯಾಟರಾಕ್ಟ್: ಲೆನ್ಸ್‌ನ ಹಿಂಭಾಗವನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ; ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತದೆ",
            "ಸಂಭವಕ್ಷಣಿಕ (Congenital) ಕ್ಯಾಟರಾಕ್ಟ್: ಹುಟ್ಟಿದಾಗಲ್ಲೇ ಇರುವದು"
        ],
        cat_when_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ಯಾವಾಗ ಮಾಡಿಸಬೇಕು?",
        when_p1: "ನಿಮ್ಮ ದೈನಂದಿನ ಕಾರ್ಯಗಳಲ್ಲಿ ದೃಷ್ಟಿ ವ್ಯತ್ಯಯವು ಸಮಸ್ಯೆ ಉಂಟುಮಾಡುತ್ತಿದ್ದರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಪರಿಗಣಿಸಬಹುದು.",
        when_list: [
            "ರಾತ್ರಿ ಚಾಲನೆ ಕಷ್ಟವಾಗುವುದು",
            "ಸ್ಪಷ್ಟವಾಗಿ ಓದಲು ಆಗದಿರುವುದು",
            "ಬಣ್ಣಗಳು ಮಸಕಾಗುವುದು",
            "ಕ್ಯಾಟರಾಕ್ಟ್ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವುದು",
            "ಕಣ್ಣಿನ ಒಳ ಒತ್ತಡ ಹೆಚ್ಚಾಗುವುದಾದರೆ"
        ],
        when_note: "ಆಧುನಿಕ ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಕ್ಷಮ, ಕಡಿಮೆ ಸಮಯ (10–20 ನಿಮಿಷ) ಮತ್ತು ನೋವಿಲ್ಲದಿರುತ್ತದೆ.",
        cat_history_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಇತಿಹಾಸ",
        hist_intro: "ಇತಿಹಾಸದಲ್ಲಿ ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬಹಳ ಮಟ್ಟಿಗೆ ಅಭಿವೃದ್ಧಿಪಡಿಸಿದೆ:",
        hist_list: [
            "ಸುಶ್ರುತ — ಪ್ರಾಚೀನ ಭಾರತದ ಹೊತ್ತು ಕ್ಯಾಟರಾಕ್ಟ್ ತೆಗೆದುಹಾಕುವ ಪ್ರಥಮ ದಾಖಲೆ",
            "1700s — ಲೆನ್ಸ್ ತೆಗೆದುಹಾಕುವ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳು ಅಭಿವೃದ್ಧಿ ಆದವು",
            "1949 — ಮೊದಲ ಕೃತಕ ಲೆನ್ಸ್ (IOL)",
            "1967 — ಫೇಕೋಎಮಲ್ಸಿಫಿಕೇಶನ್ ಆವಿಷ್ಕೃತಾಯಿತು",
            "ಇಂದು — ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಯಶಸ್ವಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳಲ್ಲಿ ಒಂದು"
        ]
    }
};


/**********************************************
   PRE-SURGERY PAGE TRANSLATIONS
**********************************************/
const preSurgeryPage = {
    en: {
        pre_title: "Before Cataract Surgery",
        pre_p1: "Preparing for cataract surgery is simple, but it is important to follow a few steps to ensure a smooth and safe procedure. These instructions will help you get ready and avoid any last-minute complications.",
        pre_checklist_title: "Pre-Surgery Checklist",
        pre_list: [
            "General health check-up and blood tests (as advised)",
            "Blood sugar and blood pressure should be under control",
            "ECG may be advised for elderly patients",
            "Use any prescribed eye drops before surgery",
            "Do not eat or drink anything 6 hours before surgery (if instructed)",
            "Bring all your current medications",
            "A family member or attendant should accompany you"
        ],
        pre_bring_title: "What to Bring on the Day of Surgery",
        pre_bring_list: [
            "Personal ID proof",
            "Doctor’s prescription and past medical records",
            "Your regular medicines",
            "A clean cloth to cover the eye after surgery"
        ],
        pre_notes_title: "Important Notes",
        pre_note1: "Avoid applying hair oil, makeup, or face creams on the day of surgery.",
        pre_note2: "Wear loose and comfortable clothes.",
        pre_note3: "Inform the doctor if you have fever, cough, or cold before surgery."
    },

    kn: {
        pre_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು",
        pre_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ತಯಾರಾಗುವುದು ಸುಲಭ, ಆದರೆ ಸುರಕ್ಷಿತ ಮತ್ತು ಸುಗಮ ಪ್ರಕ್ರಿಯೆಯಿಗಾಗಿ ಕೆಲವು ಸೂಚನೆಗಳನ್ನು ತಪ್ಪದೇ ಪಾಲಿಸಬೇಕು. ಈ ಸೂಚನೆಗಳು ನಿಮಗೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸರಿಯಾಗಿ ತಯಾರಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
        pre_checklist_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲಿನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
        pre_list: [
            "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ತಪಾಸಣೆ ಮತ್ತು ರಕ್ತ ಪರೀಕ್ಷೆಗಳು (ಸಲಹೆಯಂತೆ)",
            "ರಕ್ತದ ಸಕ್ಕರೆ ಮತ್ತು ರಕ್ತದ ಒತ್ತಡ ನಿಯಂತ್ರಣದಲ್ಲಿ ಇರಬೇಕು",
            "ಹಿರಿಯರಿಗೆ ECG ಸಲಹೆ ಮಾಡಬಹುದು",
            "ವೈದ್ಯರು ಸೂಚಿಸಿದರೆ ಕಣ್ಣಿನ ಹನಿಗಳನ್ನು ಬಳಸಿ",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ 6 ಗಂಟೆಗಳ ಹಿಂದೆ ಏನೂ ತಿನ್ನಬೇಡಿ / ಕುಡಿಯಬೇಡಿ (ಸಲಹೆಯಿದ್ದರೆ)",
            "ಪ್ರಸ್ತುತ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಎಲ್ಲಾ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಬರಿರಿ",
            "ಒಬ್ಬ ಕುಟುಂಬ ಸದಸ್ಯರು ಅಥವಾ ಸಹಾಯಕ ಜೊತೆಗೆ ಇರಲಿ"
        ],
        pre_bring_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ದಿನ ಏನು ತರಬೇಕು",
        pre_bring_list: [
            "ವೈಯಕ್ತಿಕ ಗುರುತು (ID proof)",
            "ವೈದ್ಯರ ನೈಯಾಜ್ಯ ಮತ್ತು ಹಿಂದಿನ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು",
            "ನಿಮ್ಮ ನಿಯಮಿತ ಔಷಧಿಗಳು",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಕಣ್ಣನ್ನು ಮುಚ್ಚಲು ಸ್ವಚ್ಛ ಬಟ್ಟೆ"
        ],
        pre_notes_title: "ಮುಖ್ಯ ಸೂಚನೆಗಳು",
        pre_note1: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ದಿನ ಹೊತ್ತು ಹಾಕಿಕೊಳ್ಳಬೇಡಿ (ಹೇರ್ ಆಯಿಲ್) ಅಥವಾ ಮೇಕಪ್ ಬಳಸದಿರಿ.",
        pre_note2: "ಆರಮದಾಯಕ, ವಿಶಾಲವಾದ ಬಟ್ಟೆ ಧರಿಸಿ.",
        pre_note3: "ಜ್ವರ, ಕೆಮ್ಮು ಅಥವಾ ಸर्दಿ ಇದ್ದರೆ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿ."
    }
};


/**********************************************
   POST-SURGERY PAGE TRANSLATIONS
**********************************************/
const postSurgeryPage = {
    en: {
        post_title: "After Cataract Surgery",
        post_p1: "Recovery after cataract surgery is usually smooth and comfortable. Following the care instructions will help your eye heal faster and prevent complications.",
        post_do_title: "Things You Should Do",
        post_do_list: [
            "Use eye drops as prescribed",
            "Wear the protective eye shield while sleeping",
            "Keep the operated eye clean and dry",
            "Attend all follow-up check-ups",
            "Wear sunglasses in bright sunlight"
        ],
        post_dont_title: "Things You Should Avoid",
        post_dont_list: [
            "Do not rub or press the operated eye",
            "Avoid water entering the eye for 1 week",
            "Avoid lifting heavy weights",
            "Avoid bending your head too much",
            "Avoid smoking and alcohol",
            "Do not drive until your doctor permits"
        ],
        post_warn_title: "Warning Signs — Visit the Hospital If You Notice",
        post_warn_list: [
            "Severe pain in the eye",
            "Sudden decrease in vision",
            "Excessive redness or swelling",
            "Continuous watering",
            "Flashes of light or floaters"
        ],
        post_meds_title: "Eye Drop Instructions",
        post_meds_p1: "Use only the prescribed eye drops and follow the instructed schedule carefully."
    },

    kn: {
        post_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ",
        post_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಚೇತರಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಲಭ ಮತ್ತು ಆರಾಮದಾಯಕವಾಗಿರುತ್ತದೆ. ನೀಡಿದ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿದರೆ ಕಣ್ಣಿನ ಗುಣಮುಖತೆ ವೇಗವಾಗಿ ಆಗುತ್ತದೆ ಮತ್ತು ಸಮಸ್ಯೆಗಳು ತಡೆಯಲ್ಪಡುತ್ತವೆ.",
        post_do_title: "ನೀವು ಮಾಡಬೇಕಾದುದು",
        post_do_list: [
            "ವೈದ್ಯರು ಸೂಚಿಸಿದಂತೆ ಕಣ್ಣಿನ ಹನಿಗಳನ್ನು ಬಳಸಿ",
            "ನಿದ್ರಿಸುವಾಗ ಕಣ್ಣಿನ ರಕ್ಷಣಾ ಶೀಲ್ಡ್ ಧರಿಸಿ",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೊಂಡ ಕಣ್ಣನ್ನು ಸ್ವಚ್ಛ ಹಾಗೂ ಒಣವಾಗಿರಿಸಿ",
            "ಎಲ್ಲಾ ಫಾಲೋಅಪ್ ತಪಾಸಣೆಗೆ ಹಾಜರಾಗಿ",
            "ಪ್ರಬಲ ಸೂರ್ಯಕಿರಣದಲ್ಲಿ ಸನ್‌ಗ್ಲಾಸ್ಸ್ ಧರಿಸಿ"
        ],
        post_dont_title: "ತಪ್ಪದೇ ತಪ್ಪಿಸಬೇಕಾದ ಅವಶ್ಯಕತೆಗಳು",
        post_dont_list: [
            "ಶಸ್ತ್ರಗತ ಕಣ್ಣು ರಾಬ್ ಅಥವಾ ಒತ್ತಬೇಡಿ",
            "ಒಂದು ವಾರ ಕಣ್ಣಿಗೆ ನೀರು ಹೋಗುವಂತೆ ಮಾಡಬೇಡಿ",
            "ಭಾರದ ವಸ್ತುಗಳನ್ನು ಎತ್ತಬೇಡಿ",
            "ತಲೆಯನ್ನು ಹೆಚ್ಚು ಬಾಗಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ",
            "ಧೂಮಪಾನ ಮತ್ತು ಮದ್ಯಪಾನ ತಪ್ಪಿಸಿ",
            "ವೈದ್ಯರು ಅನುಮತಿಸುವವರೆಗೂ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ"
        ],
        post_warn_title: "ಎಚ್ಚರಿಕೆ ಲಕ್ಷಣಗಳು — ಕಂಡರೆ ಆಸ್ಪತ್ರೆಗೆ ತಲುಪಿಸಿ",
        post_warn_list: [
            "ಕಣ್ಣಿನಲ್ಲಿ ತೀವ್ರ ನೋವು",
            "ದೃಷ್ಟಿಯಲ್ಲಿ ತೀವ್ರ ಕಡಿಮೆಯುಂಟಾಗುವುದು",
            "ಅತಿಯಾದ ಕೆಂಪುತನ ಅಥವಾ ಊತ",
            "ನಿರಂತರ ಕಣ್ಣೀರಾಗುವುದು",
            "ಬೆಳಕಿನ ಛಿದ್ರಗಳು ಅಥವಾ ಫ್ಲೋಟರ್ ಗಳು ಕಾಣುವುದು"
        ],
        post_meds_title: "ಕಣ್ಣಿನ ಹನಿ ಸೂಚನೆಗಳು",
        post_meds_p1: "ಸಲಹೆ ಮಾಡಲಾದ ಹನಿಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ ಮತ್ತು ಸೂಚಿಸಿದ ವೇಳಾಪಟ್ಟಿ ಪಾಲಿಸಿ."
    }
};


/**********************************************
   HELPERS: set text and lists safely
**********************************************/
function setText ( id, text )
{
    const el = document.getElementById( id );
    if ( el ) el.textContent = text;
}

function setList ( id, items )
{
    const ul = document.getElementById( id );
    if ( !ul ) return;
    ul.innerHTML = "";
    items.forEach( item =>
    {
        const li = document.createElement( "li" );
        li.textContent = item;
        ul.appendChild( li );
    } );
}


/**********************************************
   UPDATE HOME NAV + TILES (works with or without nav IDs)
**********************************************/
function updateHomeAndNav ( lang )
{
    const t = siteText[ lang ];

    // First try ID-based nav (nav0..nav5)
    for ( let i = 0; i < 6; i++ )
    {
        const el = document.getElementById( "nav" + i );
        if ( el && t.menu[ i ] ) el.textContent = t.menu[ i ];
    }

    // Fallback: update desktop-nav anchors if IDs weren't present
    const desktopAnchors = document.querySelectorAll( ".desktop-nav a" );
    desktopAnchors.forEach( ( a, i ) =>
    {
        if ( t.menu[ i ] ) a.textContent = t.menu[ i ];
    } );

    // Mobile menu fallback
    const mobileAnchors = document.querySelectorAll( ".mobile-menu a" );
    mobileAnchors.forEach( ( a, i ) =>
    {
        // mobile menu links in your HTML start from cataract (index 1 in desktop), so we align them if needed.
        if ( t.menu[ i + 1 ] ) a.textContent = t.menu[ i + 1 ];
    } );

    // homepage text if present
    setText( "homeTitle", t.homeTitle );
    setText( "homePara", t.homePara );

    // tile titles — these IDs must be added in index.html (tile1..tile5) — otherwise skip
    if ( document.getElementById( "tile1" ) ) setText( "tile1", t.tiles.t1 );
    if ( document.getElementById( "tile2" ) ) setText( "tile2", t.tiles.t2 );
    if ( document.getElementById( "tile3" ) ) setText( "tile3", t.tiles.t3 );
    if ( document.getElementById( "tile4" ) ) setText( "tile4", t.tiles.t4 );
    if ( document.getElementById( "tile5" ) ) setText( "tile5", t.tiles.t5 );
}


/**********************************************
   PAGE-SPECIFIC UPDATERS
**********************************************/
function updateCataractPage ( lang )
{
    if ( !document.getElementById( "cat_title" ) ) return;
    const t = cataractPage[ lang ];

    setText( "cat_title", t.cat_title );
    setText( "cat_p1", t.cat_p1 );
    setText( "cat_p2", t.cat_p2 );
    setText( "cat_p3", t.cat_p3 );
    setText( "cat_p4", t.cat_p4 );

    setText( "cat_symptoms_title", t.cat_symptoms_title );
    setList( "cat_symptoms_list", t.cat_symptoms_list );

    setText( "cat_types_title", t.cat_types_title );
    setList( "cat_types_list", t.cat_types_list );

    setText( "cat_when_title", t.cat_when_title );
    setText( "when_p1", t.when_p1 );
    setList( "when_list", t.when_list );
    setText( "when_note", t.when_note );

    setText( "cat_history_title", t.cat_history_title );
    setText( "hist_p1", t.hist_intro );
    setList( "hist_list", t.hist_list );
}

function updatePreSurgeryPage ( lang )
{
    if ( !document.getElementById( "pre_title" ) ) return;
    const t = preSurgeryPage[ lang ];

    setText( "pre_title", t.pre_title );
    setText( "pre_p1", t.pre_p1 );

    setText( "pre_checklist_title", t.pre_checklist_title );
    setList( "pre_list", t.pre_list );

    setText( "pre_bring_title", t.pre_bring_title );
    setList( "pre_bring_list", t.pre_bring_list );

    setText( "pre_notes_title", t.pre_notes_title );
    setText( "pre_note1", t.pre_note1 );
    setText( "pre_note2", t.pre_note2 );
    setText( "pre_note3", t.pre_note3 );
}

function updatePostSurgeryPage ( lang )
{
    if ( !document.getElementById( "post_title" ) ) return;
    const t = postSurgeryPage[ lang ];

    setText( "post_title", t.post_title );
    setText( "post_p1", t.post_p1 );

    setText( "post_do_title", t.post_do_title );
    setList( "post_do_list", t.post_do_list );

    setText( "post_dont_title", t.post_dont_title );
    setList( "post_dont_list", t.post_dont_list );

    setText( "post_warn_title", t.post_warn_title );
    setList( "post_warn_list", t.post_warn_list );

    setText( "post_meds_title", t.post_meds_title );
    setText( "post_meds_p1", t.post_meds_p1 );
}



function updateContactPage ( lang )
{
    if ( !document.getElementById( "contact_title" ) ) return;

    const t = contactPage[ lang ];

    setText( "contact_title", t.contact_title );
    setText( "contact_desc", t.contact_desc );
    setText( "phone_title", t.phone_title );
    // phone_value remains same (number doesn't change)
    setText( "email_title", t.email_title );
    // email_value remains same
    setText( "location_title", t.location_title );
    setText( "location_value", t.location_value );
    setText( "map_title", t.map_title );
    setText( "footer_text", t.footer_text );
}


function updateFAQPage ( lang )
{
    if ( !document.getElementById( "faq_title" ) ) return;
    const t = faqPage[ lang ];

    setText( "faq_title", t.faq_title );
    setText( "faq_sub", t.faq_sub );
}


/**********************************************
   INIT: apply savedLang on DOMContentLoaded
**********************************************/
document.addEventListener( "DOMContentLoaded", () =>
{
    // set language selector if present
    const langSel = document.getElementById( "language" );
    if ( langSel ) langSel.value = savedLang;

    updateHomeAndNav( savedLang );
    updateCataractPage( savedLang );
    updatePreSurgeryPage( savedLang );
    updatePostSurgeryPage( savedLang );
    updateContactPage( savedLang );
    updateFAQPage( savedLang );
} );

langSelect.addEventListener( "change", () =>
{
    const lang = langSelect.value;
    localStorage.setItem( "siteLang", lang );

    if ( window.updateFAQPage ) updateFAQPage( lang );
    renderPageForLang( lang );
} );

/**********************************************
   USER CHANGES LANGUAGE -> persist + apply
**********************************************/
const langElement = document.getElementById( "language" );
if ( langElement )
{
    langElement.addEventListener( "change", function ()
    {
        const lang = this.value;
        localStorage.setItem( "siteLang", lang );

        updateHomeAndNav( lang );
        updateCataractPage( lang );
        updatePreSurgeryPage( lang );
        updatePostSurgeryPage( lang );
        updateContactPage( lang );
        updateFAQPage( lang );
    } );
}

/**********************************************
   CONTACT PAGE TRANSLATION
**********************************************/
const contactPage = {
    en: {
        contact_title: "Contact Us",
        contact_desc: "Tap the card below to call or email us.",
        phone_title: "Phone",
        email_title: "Email",
        location_title: "Location",
        location_value: "Dharwad – SDM College of Medical Sciences & Hospital",
        map_title: "Find us on Map",
        footer_text: "© 2025 SDM College of Medical Sciences & Hospital, Dharwad. Developed by SDMCET."
    },

    kn: {
        contact_title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        contact_desc: "ಕಾಲ್ ಅಥವಾ ಇಮೇಲ್ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
        phone_title: "ದೂರವಾಣಿ",
        email_title: "ಇಮೇಲ್",
        location_title: "ಸ್ಥಳ",
        location_value: "ಧಾರವಾಡ – SDM ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ",
        map_title: "ನಮಗೆ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ಹುಡುಕಿ",
        footer_text: "© 2025 ಎಸ್‌ಡಿಎಂ ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ, ಧಾರವಾಡ. ಎಸ್‌ಡಿಎಂಸಿಇಟಿ ನಿರ್ಮಿಸಲಾಗಿದೆ."
    }
};

/**********************************************
   AUDIO (unchanged behavior)
**********************************************/
function playAudio ( id )
{
    try { speechSynthesis.cancel(); } catch ( e ) { }

    const lang = ( document.getElementById( "language" ) || { value: "en" } ).value;
    let text = "";
    if ( id === "FULL_PAGE" )
    {
        const m = document.querySelector( "main" );
        if ( !m ) return;
        text = m.innerText;
    } else
    {
        const el = document.getElementById( id );
        if ( !el ) return alert( "Audio text not found: " + id );
        text = el.innerText;
    }

    const msg = new SpeechSynthesisUtterance( text );
    msg.lang = ( lang === "kn" ) ? "kn-IN" : "en-US";
    msg.rate = 1;
    msg.pitch = 1;
    speechSynthesis.speak( msg );
}

/**********************************************
   FAQ PAGE TRANSLATION
**********************************************/
const faqPage = {
    en: {
        faq_title: "Frequently Asked Questions",
        faq_sub: "Click on any question to read the detailed answer."
    },

    kn: {
        faq_title: "ಅಡಿಕಡಿಯಾಗಿ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        faq_sub: "ವಿಸ್ತೃತ ಉತ್ತರವನ್ನು ನೋಡಲು ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಒತ್ತಿರಿ."
    }
};