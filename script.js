// script.js — shared by all pages
document.addEventListener( "DOMContentLoaded", () =>
{


    const siteText = {
        en: {
            homeTitle: "Welcome to the SDM Cataract Information Portal",
            homePara: "Use the tiles below to learn more about cataract, surgery and aftercare.",
            menu: [ "Home", "What is Cataract?", "Before Surgery", "After Surgery", "FAQs", "Contact / Help" ]
        },
        kn: {
            homeTitle: "ಎಸ್‌ಡಿಎಂ ಕ್ಯಾಟರಾಕ್ಟ್ ಮಾಹಿತಿ ಪೋರ್ಟಲ್‌ಗೆ ಸ್ವಾಗತ",
            homePara: "ಕ್ಯಾಟರಾಕ್ಟ್, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಲು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳು ಬಳಸಿ.",
            menu: [ "ಮುಖಪುಟ", "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮುನ್ನ", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ", "ಪ್ರಶ್ನೋತ್ತರ", "ಸಂಪರ್ಕ / ಸಹಾಯ" ]
        }
    };

    // language selector (master header)
    const languageSelect = document.getElementById( "language" );
    if ( languageSelect )
    {
        languageSelect.addEventListener( "change", () =>
        {
            languageSelect.addEventListener( "change", () =>
            {
                const lang = languageSelect.value;
                localStorage.setItem( 'siteLang', lang );

                // update menu labels
                const labels = siteText[ lang ].menu;
                labels.forEach( ( txt, i ) =>
                {
                    const el = document.getElementById( 'nav' + i );
                    if ( el ) el.textContent = txt;
                } );

                // update home page heading & paragraph if present
                const t = document.getElementById( 'homeTitle' );
                const p = document.getElementById( 'homePara' );
                if ( t && p )
                {
                    t.textContent = siteText[ lang ].homeTitle;
                    p.textContent = siteText[ lang ].homePara;
                }

                // also re-render FAQ page if open
                if ( window.renderPageForLang ) window.renderPageForLang( lang );
            } );

        } );
        // set previously saved
        const saved = localStorage.getItem( 'siteLang' );
        if ( saved ) languageSelect.value = saved;
    }

    // attach listeners to play buttons (uses data-text attribute)
    document.body.addEventListener( 'click', ( e ) =>
    {
        if ( e.target.matches( '.listen-btn' ) )
        {
            const text = e.target.getAttribute( 'data-text' );
            const lang = ( languageSelect && languageSelect.value === 'kn' ) ? 'kn-IN' : 'en-IN';
            speakText( text, lang );
        }
    } );
} );

// TTS function (uses Web Speech API)
function speakText ( text, lang = 'en-IN' )
{
    if ( !( 'speechSynthesis' in window ) )
    {
        alert( 'Text-to-speech is not supported in this browser.' );
        return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance( text );
    u.lang = lang;
    u.rate = 0.95;
    window.speechSynthesis.speak( u );
}
