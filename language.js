/**********************************************
   SITE-WIDE TEXT FOR HOME + NAVIGATION
**********************************************/
const siteText = {
    en: {
        homeTitle: "Welcome to the SDM Cataract Information Portal",
        homePara: "Please navigate using given options to learn more about cataract, surgery, and post-operative care in both English and Kannada.",
        menu: [ "Home", "What is Cataract?", "Before Surgery", "After Surgery", "FAQs", "Contact / Help" ]
    },
    kn: {
        homeTitle: "ಎಸ್‌ಡಿಎಂ ಕ್ಯಾಟರಾಕ್ಟ್ ಮಾಹಿತಿ ಪೋರ್ಟಲ್‌ಗೆ ಸ್ವಾಗತ",
        homePara: "ಕ್ಯಾಟರಾಕ್ಟ್, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಲು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳು ಬಳಸಿ.",
        menu: [ "ಮುಖಪುಟ", "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮುನ್ನ", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ", "ಪ್ರಶ್ನೋತ್ತರ", "ಸಂಪರ್ಕ / ಸಹಾಯ" ]
    }
};


/**********************************************
   BASIC UPDATE FUNCTIONS
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
   UPDATE NAVIGATION + HOMEPAGE
**********************************************/
function updateHomeAndNav ( lang )
{
    const t = siteText[ lang ];

    // Update navigation menu
    t.menu.forEach( ( label, i ) =>
    {
        const el = document.getElementById( "nav" + i );
        if ( el ) el.textContent = label;
    } );

    // Update home page (if present)
    setText( "homeTitle", t.homeTitle );
    setText( "homePara", t.homePara );
}


/**********************************************
   CATARACT PAGE TRANSLATIONS
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
        cat_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೆ ಕಣ್ಣಿನ ಒಳಗಿನ ನೈಸರ್ಗಿಕ ಲೆನ್ಸ್ ಮೋಡಗೊಳ್ಳುವ ಸ್ಥಿತಿ...",
        cat_p2: "ಕ್ಯಾಟರಾಕ್ಟ್ ಸಾಮಾನ್ಯವಾಗಿ ವಯಸ್ಸು ಹೆಚ್ಚಾದಂತೆ ನಿಧಾನವಾಗಿ ಬೆಳೆಯುತ್ತದೆ...",
        cat_p3: "ಪ್ರಾರಂಭಿಕ ಹಂತದಲ್ಲಿ ಲಕ್ಷಣಗಳು ತುಂಬಾ ಸ್ಪಷ್ಟವಾಗಿರದು...",
        cat_p4: "ಕ್ಯಾಟರಾಕ್ಟ್ ವಿಶ್ವದಾದ್ಯಂತ ತಡೆಗಟ್ಟಬಹುದಾದ ಕುರುಡೆತನದ ಪ್ರಮುಖ ಕಾರಣಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ...",
        cat_symptoms_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಸಾಮಾನ್ಯ ಲಕ್ಷಣಗಳು",
        cat_symptoms_list: [
            "ಮಸುಕಾದ ಅಥವಾ ಮೋಡದಂತಹ ದೃಷ್ಟಿ",
            "ರಾತ್ರಿ ವೇಳೆ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣದಿರುವುದು",
            "ಬೆಳಕಿಗೆ ಸಂವೇದನೆ",
            "ಬೆಳಕಿನ ಸುತ್ತ ಹಾಲೊಗಳು ಕಾಣುವುದು",
            "ಬಣ್ಣಗಳು ಮಂಕಾಗಿ ಕಾಣುವುದು",
            "ಗ್ಲಾಸ್ ಪವಾರು ಬದಲಾವಣೆಯ頻度 ಹೆಚ್ಚಾಗುವುದು"
        ],
        cat_types_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಪ್ರಕಾರಗಳು",
        cat_types_list: [
            "ನ್ಯೂಕ್ಲಿಯರ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಕೋರ್ಟಿಕಲ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಪೋಸ್ಟೀರಿಯರ್ ಸಬ್‌ಕ್ಯಾಪ್ಸುಲರ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಸಂಭವಕ್ಷಣಿಕ (Congenital) ಕ್ಯಾಟರಾಕ್ಟ್"
        ],
        cat_when_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ಯಾವಾಗ ಮಾಡಿಸಬೇಕು?",
        when_p1: "ನಿಮ್ಮ ದಿನನಿತ್ಯದ ಜೀವನಕ್ಕೆ ತೊಂದರೆ ಆಗುತ್ತಿದ್ದರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಗತ್ಯ.",
        when_list: [
            "ರಾತ್ರಿಯಲ್ಲಿ ಚಾಲನೆ ಕಷ್ಟ",
            "ಓದುವಲ್ಲಿ ತೊಂದರೆ",
            "ಬಣ್ಣಗಳು ಮಂಕಾಗುವುದು",
            "ಕ್ಯಾಟರಾಕ್ಟ್ ವೇಗವಾಗಿ ಬೆಳೆಯುವುದು",
            "ಕಣ್ಣಿನ ಒత్తಡಿನ ಹೆಚ್ಚಳ"
        ],
        when_note: "ಇಂದು ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸುರಕ್ಷಿತ ಮತ್ತು ವೇಗವಾದ ವಿಧಾನವಾಗಿದೆ.",
        cat_history_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಇತಿಹಾಸ",
        hist_intro: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಇತಿಹಾಸದಲ್ಲಿ ಹಲವಾರು ಬದಲಾವಣೆಗಳನ್ನು ಕಂಡಿದೆ:",
        hist_list: [
            "ಸುಶ್ರುತ — ಕಣ್ಣಿನ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಮೊದಲ ದಾಖಲೆ",
            "1700ರ ದಶಕ — ಲೆನ್ಸ್ ತೆಗೆದುಹಾಕುವ ವಿಧಾನ",
            "1949 — ಮೊದಲ ಕೃತಕ ಲೆನ್ಸ್",
            "1967 — ಫೇಕೋಎಮಲ್ಸಿಫಿಕೇಶನ್",
            "ಇಂದು — ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ವಿಧಾನ"
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
        pre_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ತಯಾರಾಗುವುದು ಸುಲಭ, ಆದರೆ ಸುರಕ್ಷಿತ ಮತ್ತು ಸುಗಮ ಪ್ರಕ್ರಿಯೆಯಿಗಾಗಿ ಕೆಲವು ಸೂಚನೆಗಳನ್ನು ತಪ್ಪದೇ ಪಾಲಿಸಬೇಕು. ಈ ಸೂಚನೆಗಳು ನಿಮಗೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸರಿಯಾದ ರೀತಿಯಲ್ಲಿ ತಯಾರಾಗಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",

        pre_checklist_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲಿನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
        pre_list: [
            "ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ತಪಾಸಣೆ ಮತ್ತು ರಕ್ತ ಪರೀಕ್ಷೆಗಳು (ಸಲಹೆಯಂತೆ)",
            "ಬ್ಲಡ್ ಶುಗರ್ ಮತ್ತು BP ನಿಯಂತ್ರಣದಲ್ಲಿರಬೇಕು",
            "ಹಿರಿಯರಿಗೆ ECG ಸಲಹೆ ಮಾಡಬಹುದು",
            "ವೈದ್ಯರು ಸೂಚಿಸಿದರೆ ಕಣ್ಣಿನ ಹನಿ ಬಳಸಿರಿ",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ 6 ಗಂಟೆಗಳ ಹಿಂದೆ ಏನೂ ತಿನ್ನಬೇಡಿ / ಕುಡಿಯಬೇಡಿ (ಸಲಹೆಯಿದ್ದರೆ)",
            "ಪ್ರಸ್ತುತ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಎಲ್ಲಾ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಬರಿರಿ",
            "ಒಬ್ಬ ಕುಟುಂಬ ಸದಸ್ಯರು ಅಥವಾ ಸಹಾಯಕ ಜೊತೆಗಿರಲಿ"
        ],

        pre_bring_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ದಿನ ಏನು ತೆಗೆದುಕೊಂಡು ಬರಬೇಕು",
        pre_bring_list: [
            "ವೈಯಕ್ತಿಕ ಗುರುತು (ID proof)",
            "ವೈದ್ಯರ ಒತ್ತಾಯ ಪತ್ರ ಮತ್ತು ಹಿಂದಿನ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳು",
            "ನಿಮ್ಮ ನಿಯಮಿತ ಔಷಧಿಗಳು",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಕಣ್ಣನ್ನು ಮುಚ್ಚಲು ಸ್ವಚ್ಛವಾದ ಬಟ್ಟೆ"
        ],

        pre_notes_title: "ಮುಖ್ಯ ಸೂಚನೆಗಳು",
        pre_note1: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ದಿನ ಹೆರ್ ಆಯಿಲ್, ಮೈಕಪ್, ಅಥವಾ ಕ್ರೀಮ್ ಬಳಸದಿರಿ.",
        pre_note2: "ಆರಾಮದಾಯಕವಾದ ವಿಶಾಲ ಬಟ್ಟೆ ಧರಿಸಿರಿ.",
        pre_note3: "ಜ್ವರ, ಕೆಮ್ಮು, ಅಥವಾ ಜಲದೋಷ ಇದ್ದರೆ ವೈದ್ಯರಿಗೆ ತಿಳಿಸಿರಿ."
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
        post_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಚೇತರಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಲಭ ಮತ್ತು ಆರಾಮಕರವಾಗಿರುತ್ತದೆ. ನೀಡಿದ ಸೂಚನೆಗಳನ್ನು ಪಾಲಿಸಿದರೆ ಕಣ್ಣಿನ ಗುಣಮುಖತೆ ವೇಗವಾಗಿ ಆಗುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ ಸಮಸ್ಯೆಗಳು ತಡೆಯಲ್ಪಡುತ್ತವೆ.",

        post_do_title: "ನೀವು ಮಾಡಬೇಕಾದ ಕೆಲಸಗಳು",
        post_do_list: [
            "ವೈದ್ಯರು ಸೂಚಿಸಿದಂತೆ ಕಣ್ಣಿನ ಹನಿಗಳನ್ನು ಬಳಸಿರಿ",
            "ನಿದ್ರಿಸುವಾಗ ಕಣ್ಣಿನ ರಕ್ಷಣಾ ಕವಚವನ್ನು ಧರಿಸಿರಿ",
            "ಶಸ್ತ್ರಗೊಂಡ ಕಣ್ಣನ್ನು ಸ್ವಚ್ಛ ಮತ್ತು ಬರ್ದುವಾಗಿರಿಸಿ",
            "ಫಾಲೋ-ಅಪ್ ಪರೀಕ್ಷೆಗಳಿಗೆ ಹಾಜರಾಗಿ",
            "ಪ್ರಬಲ ಸೂರ್ಯಕಿರಣದಲ್ಲಿ ಸನ್‌ಗ್ಲಾಸ್ಸ್ ಧರಿಸಿರಿ"
        ],

        post_dont_title: "ತಪ್ಪದೇ ತಪ್ಪಿಸಬೇಕಾದ ಕೆಲಸಗಳು",
        post_dont_list: [
            "ಶಸ್ತ್ರಗೊಂಡ ಕಣ್ಣನ್ನು ಒತ್ತಬೇಡಿ ಅಥವಾ ಒರೆಯಬೇಡಿ",
            "ಒಂದು ವಾರ ಕಣ್ಣಿಗೆ ನೀರು ಹೋಗುವುದನ್ನು ತಪ್ಪಿಸಿರಿ",
            "ಭಾರವಾದ ವಸ್ತುಗಳನ್ನು ಎತ್ತಬೇಡಿ",
            "ತಲೆಯನ್ನು ಹೆಚ್ಚು ಬಾಗಿಸುವುದನ್ನು ತಪ್ಪಿಸಿರಿ",
            "ಧೂಮಪಾನ ಮತ್ತು ಮದ್ಯಪಾನ ಬೇಡ",
            "ವೈದ್ಯರು ಅನುಮತಿಸುವವರೆಗೆ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ"
        ],

        post_warn_title: "ಎಚ್ಚರಿಕೆ ಲಕ್ಷಣಗಳು — ಇವು ಕಂಡರೆ ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಹೋಗಿ",
        post_warn_list: [
            "ಕಣ್ಣಿನಲ್ಲಿ ತೀವ್ರ ನೋವು",
            "ಹಠಾತ್ ದೃಷ್ಟಿಯಲ್ಲಿ ಕಡಿಮೆಯಾಗುವುದು",
            "ಅತಿ ಹೆಚ್ಚು ಕೆಂಪಾಗುವುದು ಅಥವಾ ಊತ",
            "ನಿರಂತರವಾಗಿ ಕಣ್ಣೀರು ಬರುವುದು",
            "ಬೆಳಕಿನ ಮಿಂಚುಗಳು ಅಥವಾ ಕಪ್ಪು ಕಲೆಗಳು ಕಾಣುವುದು"
        ],

        post_meds_title: "ಕಣ್ಣಿನ ಹನಿಗಳ ಸೂಚನೆಗಳು",
        post_meds_p1: "ವೈದ್ಯರು ಸೂಚಿಸಿದ ಹನಿಯನ್ನು ಮಾತ್ರ ಬಳಸಿರಿ ಮತ್ತು ಅವರ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಸರಿಯಾಗಿ ಪಾಲಿಸಿರಿ."
    } };


/**********************************************
   UPDATE FUNCTIONS FOR EACH PAGE
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


/**********************************************
   MASTER LANGUAGE SWITCHER (GLOBAL)
**********************************************/
document.getElementById( "language" ).addEventListener( "change", function ()
{
    const lang = this.value;

    updateHomeAndNav( lang );
    updateCataractPage( lang );
    updatePreSurgeryPage( lang );
    updatePostSurgeryPage( lang );
} );


/**********************************************
   INITIALIZE ALL PAGES IN ENGLISH
**********************************************/
updateHomeAndNav( "en" );
updateCataractPage( "en" );
updatePreSurgeryPage( "en" );
updatePostSurgeryPage( "en" );


function playAudio ( id )
{
    try { speechSynthesis.cancel(); } catch ( e ) { }

    const lang = document.getElementById( "language" ).value;

    let text = "";

    // Full page audio
    if ( id === "FULL_PAGE" )
    {
        text = document.querySelector( "main" ).innerText;
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
