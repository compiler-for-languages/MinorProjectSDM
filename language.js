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
            t4: "ಪ್ರಶ್ನೋತ್ತರ",
            t5: "ಸಂಪರ್ಕ / ಸಹಾಯ"
        }
    }
};


/**********************************************
   CATARACT PAGE TRANSLATIONS
**********************************************/
const cataractPage = {
    en: {
        cat_title: "What is Cataract?",
        cat_p1: "A cataract is a condition where the natural lens inside the eye becomes cloudy...",
        cat_p2: "Cataracts usually develop slowly...",
        cat_p3: "In the early stages, cataracts may not cause noticeable symptoms...",
        cat_p4: "Cataracts are very common...",
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
            "Posterior Subcapsular Cataract",
            "Congenital Cataract"
        ],
        cat_when_title: "When Should You Go for Cataract Surgery?",
        when_p1: "Cataract surgery becomes necessary when your vision starts affecting your daily life.",
        when_list: [
            "Difficulty driving at night",
            "Unable to read clearly",
            "Colors appear faded",
            "Doctor notices rapid cataract growth",
            "High eye pressure"
        ],
        when_note: "Modern cataract surgery is extremely safe and painless.",
        cat_history_title: "History of Cataract Surgery",
        hist_intro: "Cataract surgery has evolved dramatically:",
        hist_list: [
            "Sushruta – First cataract removal",
            "1700s – First extraction",
            "1949 – First artificial lens",
            "1967 – Phacoemulsification invented",
            "Today – One of the safest surgeries"
        ]
    },

    kn: {
        cat_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?",
        cat_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೆ ಕಣ್ಣಿನ ಒಳಗಿನ ಲೆನ್ಸ್ ಮೋಡಗೊಳ್ಳುವುದು...",
        cat_p2: "ಕ್ಯಾಟರಾಕ್ಟ್ ಸಾಮಾನ್ಯವಾಗಿ ನಿಧಾನವಾಗಿ ಬೆಳೆಯುತ್ತದೆ...",
        cat_p3: "ಮೂದಲ ಹಂತದಲ್ಲಿ ಲಕ್ಷಣ ಗೊತ್ತಾಗದೇ ಇರಬಹುದು...",
        cat_p4: "ಕ್ಯಾಟರಾಕ್ಟ್‌ಗಳು ಬಹಳ ಸಾಮಾನ್ಯ...",
        cat_symptoms_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಲಕ್ಷಣಗಳು",
        cat_symptoms_list: [
            "ಮಸುಕಾದ ದೃಷ್ಟಿ",
            "ರಾತ್ರಿ ಕಾಣುವುದಕ್ಕಿರುವ ಕಷ್ಟ",
            "ಬೆಳಕಿಗೆ ಗ್ಲೇರ್",
            "ಬೆಳಕಿನ ಸುತ್ತ ಹಾಲೋ",
            "ಬಣ್ಣಗಳು ಮಂಕಾಗುವುದು",
            "ಚಶ್ಮೆ ಶಕ್ತಿ ಬದಲಾವಣೆ"
        ],
        cat_types_title: "ಕ್ಯಾಟರಾಕ್ಟ್‌ನ ಪ್ರಕಾರಗಳು",
        cat_types_list: [
            "ನ್ಯೂಕ್ಲಿಯರ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಕೋರ್ಟಿಕಲ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಪೋಸ್ಟೀರಿಯರ್ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಜನನಸಿದ್ಧ ಕ್ಯಾಟರಾಕ್ಟ್"
        ],
        cat_when_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮಾಡಿಸಬೇಕಾದ ಸಮಯ",
        when_p1: "ದೈನಂದಿನ ಜೀವನಕ್ಕೆ ತೊಂದರೆ ಉಂಟಾದಾಗ...",
        when_list: [
            "ರಾತ್ರಿ ವಾಹನ ಚಲಾಯಿಸಲು ಕಷ್ಟ",
            "ಓದಲು ಕಷ್ಟ",
            "ಬಣ್ಣಗಳು ಮಂಕಾಗುವುದು",
            "ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಕ್ಯಾಟರಾಕ್ಟ್",
            "ಕಣ್ಣು ಒತ್ತಡ ಹೆಚ್ಚಳ"
        ],
        when_note: "ಆಧುನಿಕ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸುರಕ್ಷಿತ.",
        cat_history_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಇತಿಹಾಸ",
        hist_intro: "ಇತಿಹಾಸ ಅಭಿವೃದ್ಧಿ:",
        hist_list: [
            "ಸುಶ್ರುತ",
            "1700ಗಳಲ್ಲಿನ ತಂತ್ರಗಳು",
            "1949 – ಕೃತಕ ಲೆನ್ಸ್",
            "1967 – ಫೇಕೋ",
            "ಇಂದಿನ ಯಶಸ್ವಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ"
        ]
    }
};


/**********************************************
   PRE-SURGERY PAGE TRANSLATIONS
**********************************************/
const preSurgeryPage = {
    en: {
        pre_title: "Before Cataract Surgery",
        pre_p1: "Preparing for cataract surgery is simple...",
        pre_checklist_title: "Pre-Surgery Checklist",
        pre_list: [
            "Health check-up",
            "Sugar & BP control",
            "ECG if needed",
            "Use prescribed drops",
            "Do not eat before surgery",
            "Bring medications",
            "Bring an attendant"
        ],
        pre_bring_title: "What to Bring",
        pre_bring_list: [
            "ID proof",
            "Medical records",
            "Medicines",
            "Clean cloth"
        ],
        pre_notes_title: "Important Notes",
        pre_note1: "Avoid hair oil or makeup.",
        pre_note2: "Wear loose clothes.",
        pre_note3: "Inform doctor about fever/cough."
    },

    kn: {
        pre_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು",
        pre_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ತಯಾರಾಗುವುದು ಸುಲಭ...",
        pre_checklist_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮುನ್ನದ ಪಟ್ಟಿ",
        pre_list: [
            "ಆರೋಗ್ಯ ತಪಾಸಣೆ",
            "ಸಕ್ಕರೆ & BP ನಿಯಂತ್ರಣ",
            "ಹಿರಿಯರಿಗೆ ECG",
            "ಕಣ್ಣಿನ ಹನಿ ಬಳಸಿ",
            "6 ಗಂಟೆ ಏನೂ ತಿನ್ನಬೇಡಿ",
            "ಔಷಧಿಗಳು ತರಿರಿ",
            "ಒಬ್ಬ ಸಹಾಯಕ ತರಿರಿ"
        ],
        pre_bring_title: "ಎನು ತರಬೇಕು",
        pre_bring_list: [
            "ID",
            "ಹಿನ್ನೆಲೆ ದಾಖಲೆಗಳು",
            "ಔಷಧಿಗಳು",
            "ಸ್ವಚ್ಛ ಬಟ್ಟೆ"
        ],
        pre_notes_title: "ಮುಖ್ಯ ಸೂಚನೆಗಳು",
        pre_note1: "ಹೇರ್ ಆಯಿಲ್ / ಮೇಕಪ್ ಬೇಡ.",
        pre_note2: "ಆರಾಮದಾಯಕ ಬಟ್ಟೆ ಧರಿಸಿ.",
        pre_note3: "ಜ್ವರ/ಕೆಮ್ಮು ಇದ್ದರೆ ತಿಳಿಸಿ."
    }
};

/**********************************************
   POST-SURGERY PAGE TRANSLATIONS
**********************************************/
const postSurgeryPage = {
    en: {
        post_title: "After Cataract Surgery",
        post_p1: "Recovery after cataract surgery is usually smooth and comfortable...",
        post_do_title: "Things You Should Do",
        post_do_list: [
            "Use eye drops as prescribed",
            "Wear the protective eye shield",
            "Keep the eye clean",
            "Attend follow-ups",
            "Wear sunglasses"
        ],
        post_dont_title: "Things You Should Avoid",
        post_dont_list: [
            "Do not rub the eye",
            "Avoid water entering eye",
            "Avoid lifting heavy weights",
            "Avoid bending head",
            "Avoid smoking/alcohol",
            "Do not drive"
        ],
        post_warn_title: "Warning Signs",
        post_warn_list: [
            "Severe pain",
            "Sudden vision loss",
            "Redness/swelling",
            "Continuous watering",
            "Flashes or floaters"
        ],
        post_meds_title: "Eye Drop Instructions",
        post_meds_p1: "Use only prescribed drops."
    },

    kn: {
        post_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ",
        post_p1: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಚೇತರಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಲಭ...",
        post_do_title: "ನೀವು ಮಾಡಬೇಕಾದುದು",
        post_do_list: [
            "ವೈದ್ಯರು ಸೂಚಿಸಿದ ಹನಿಗಳನ್ನು ಬಳಸಿ",
            "ರಾತ್ರಿ ಕಣ್ಣು ಕವಚ ಧರಿಸಿ",
            "ಕಣ್ಣು ಸ್ವಚ್ಛ ಇರಲಿ",
            "ಫಾಲೊಅಪ್‌ಗೆ ಹಾಜರಾಗಿರಿ",
            "ಸನ್‌ಗ್ಲಾಸ್ ಧರಿಸಿ"
        ],
        post_dont_title: "ತಪ್ಪಿಸಬೇಕಾದುದು",
        post_dont_list: [
            "ಕಣ್ಣು ಒತ್ತಬೇಡಿ",
            "ನೀರನ್ನು ತಪ್ಪಿಸಿ",
            "ಭಾರ ಎತ್ತಬೇಡಿ",
            "ತಲೆ ಹೆಚ್ಚು ಬಾಗಿಸಬೇಡಿ",
            "ಧೂಮಪಾನ/ಮದ್ಯ ಬೇಡ",
            "ಡ್ರೈವ್ ಮಾಡಬೇಡಿ"
        ],
        post_warn_title: "ಎಚ್ಚರಿಕೆ ಲಕ್ಷಣಗಳು",
        post_warn_list: [
            "ತೀವ್ರ ನೋವು",
            "ದೃಷ್ಟಿ ಕಡಿಮೆಯಾಗುವುದು",
            "ಕೆಂಪಾಗುವುದು/ಊತ",
            "ನಿರಂತರ ನೀರು",
            "ಬೆಳಕಿನ ಫ್ಲಾಶ್/ಫ್ಲೋಟರ್"
        ],
        post_meds_title: "ಕಣ್ಣಿನ ಹನಿ ಸೂಚನೆಗಳು",
        post_meds_p1: "ಸಲಹೆಯ ಹನಿಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ."
    }
};


/**********************************************
   CONTACT PAGE TRANSLATIONS
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
        map_title: "ನಮಗೆ ನಕ್ಷೆಯಲ್ಲಿ ಹುಡುಕಿ",
        footer_text: "© 2025 ಎಸ್‌ಡಿಎಂ ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ, ಧಾರವಾಡ. ಎಸ್‌ಡಿಎಂಸಿಇಟಿ ನಿರ್ಮಿಸಲಾಗಿದೆ."
    }
};


/**********************************************
   FAQ PAGE TRANSLATION (THIS WAS THE PROBLEM)
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


/**********************************************
   HELPERS
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
   HOME + NAV + TILES UPDATE
**********************************************/
function updateHomeAndNav ( lang )
{
    const t = siteText[ lang ];

    for ( let i = 0; i < 6; i++ )
    {
        const el = document.getElementById( "nav" + i );
        if ( el && t.menu[ i ] ) el.textContent = t.menu[ i ];
    }

    setText( "homeTitle", t.homeTitle );
    setText( "homePara", t.homePara );

    if ( document.getElementById( "tile1" ) ) setText( "tile1", t.tiles.t1 );
    if ( document.getElementById( "tile2" ) ) setText( "tile2", t.tiles.t2 );
    if ( document.getElementById( "tile3" ) ) setText( "tile3", t.tiles.t3 );
    if ( document.getElementById( "tile4" ) ) setText( "tile4", t.tiles.t4 );
    if ( document.getElementById( "tile5" ) ) setText( "tile5", t.tiles.t5 );
}


/**********************************************
   UPDATE FAQ PAGE  (THIS WAS FIXED)
**********************************************/
function updateFAQPage ( lang )
{
    if ( !document.getElementById( "faq_title" ) ) return;

    const t = faqPage[ lang ];

    setText( "faq_title", t.faq_title );
    setText( "faq_sub", t.faq_sub );
}


/**********************************************
   INIT: APPLY SAVED LANGUAGE ON LOAD
**********************************************/
document.addEventListener( "DOMContentLoaded", () =>
{
    const langSel = document.getElementById( "language" );
    if ( langSel ) langSel.value = savedLang;

    updateHomeAndNav( savedLang );
    updateCataractPage( savedLang );
    updatePreSurgeryPage( savedLang );
    updatePostSurgeryPage( savedLang );
    updateContactPage( savedLang );
    updateFAQPage( savedLang );
} );


/**********************************************
   LISTEN FOR LANGUAGE CHANGE
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

        // Only FAQ page uses renderPageForLang()
        if ( window.renderPageForLang )
        {
            window.renderPageForLang( lang );
        }
    } );
}


/**********************************************
   AUDIO (unchanged)
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
    msg.lang = lang === "kn" ? "kn-IN" : "en-US";
    msg.rate = 1;
    msg.pitch = 1;
    speechSynthesis.speak( msg );
}
