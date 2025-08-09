// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP0hs_1RKXiegzi9qfvqpxTOpR6NTka4I",
  authDomain: "gaz-portofolio.firebaseapp.com",
  projectId: "gaz-portofolio",
  storageBucket: "gaz-portofolio.firebasestorage.app",
  messagingSenderId: "803016673085",
  appId: "1:803016673085:web:4381e1e077f1807eeae754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {

    // Fetch dynamic content from Firestore
    fetchContent();

    /* ==================== CHANGE BACKGROUND HEADER ==================== */
    function scrollHeader() {
        const nav = document.querySelector('.header');
        if (this.scrollY >= 80) {
            nav.classList.add('scroll-header');
        } else {
            nav.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /* ==================== LANGUAGE TRANSLATION ==================== */
    const translations = {
        en: {
            portfolio_title: "Mohamed Ragab - Video Editor Portfolio",
            logo_name: "Mohamed Ragab",
            nav_home: "Home",
            nav_about: "About Me",
            nav_videos: "My Work",
            nav_channel: "My Channel",
            nav_contact: "Contact Me",
            hero_title: "Professional Visual Content Creation",
            hero_subtitle: "From editing and color grading to visual effects, I turn your ideas into creative videos.",
            hero_button: "See My Work",
            about_title: "About Me",
            about_description: "I am a passionate content creator and video editor with experience in software like DaVinci Resolve, Adobe Premiere, and After Effects. I aim to transform raw footage into impactful and engaging visual stories. I always strive to develop my skills and deliver work that exceeds audience expectations.",
            about_button_cv: "View CV",
            videos_title: "My Portfolio",
            channel_title: "Follow me on YouTube",
            channel_desc: "Subscribe to the channel to get the latest in video editing and content creation.",
            channel_button: "Go to Channel",
            contact_title: "Contact Me",
            form_name_placeholder: "Name",
            form_email_placeholder: "Email",
            form_message_placeholder: "Message",
            send_message: "Send Message",
            whatsapp_btn: "Contact via WhatsApp",
            form_success_message: "Your email app has been opened to send the message.",
            footer_text: "© 2024 Mohamed Ragab. All rights reserved."
        },
        fr: {
            portfolio_title: "Portfolio de Mohamed Ragab - Monteur Vidéo",
            logo_name: "Mohamed Ragab",
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_videos: "Mon Travail",
            nav_channel: "Ma Chaîne",
            nav_contact: "Contactez-moi",
            hero_title: "Création de Contenu Visuel Professionnel",
            hero_subtitle: "Du montage et de l'étalonnage aux effets visuels, je transforme vos idées en vidéos créatives.",
            hero_button: "Voir mon travail",
            about_title: "À propos de moi",
            about_description: "Je suis un créateur de contenu et monteur vidéo passionné, avec une expérience dans des logiciels comme DaVinci Resolve, Adobe Premiere et After Effects. Mon objectif est de transformer des séquences brutes en histoires visuelles percutantes et engageantes. Je cherche toujours à développer mes compétences et à livrer un travail qui dépasse les attentes du public.",
            about_button_cv: "Voir le CV",
            videos_title: "Mon Portfolio",
            channel_title: "Suivez-moi sur YouTube",
            channel_desc: "Abonnez-vous à la chaîne pour recevoir les dernières nouveautés en matière de montage vidéo.",
            channel_button: "Aller à la chaîne",
            contact_title: "Contactez-moi",
            form_name_placeholder: "Nom",
            form_email_placeholder: "Email",
            form_message_placeholder: "Message",
            send_message: "Envoyer le message",
            whatsapp_btn: "Contacter via WhatsApp",
            form_success_message: "Votre application de messagerie a été ouverte pour envoyer le message.",
            footer_text: "© 2024 Mohamed Ragab. Tous droits réservés."
        },
        ar: {
            portfolio_title: "My portofolio",
            logo_name: "محمد رجب",
            nav_home: "الرئيسية",
            nav_about: "عني",
            nav_videos: "أعمالي",
            nav_channel: "قناتي",
            nav_contact: "تواصل معي",
            hero_title: "صناعة محتوى مرئي احترافي",
            hero_subtitle: "من المونتاج وتصحيح الألوان إلى المؤثرات البصرية، أحول أفكارك إلى فيديوهات إبداعية.",
            hero_button: "شاهد أعمالي",
            about_title: "عني",
            about_description: "أنا صانع محتوى ومونتير فيديو شغوف، أمتلك خبرة في استخدام برامج مثل DaVinci Resolve, Adobe Premiere, و After Effects. أهدف إلى تحويل المشاهد الأولية إلى قصص مرئية مؤثرة وجذابة. أسعى دائمًا لتطوير مهاراتي وتقديم أعمال تتجاوز توقعات الجمهور.",
            about_button_cv: "عرض السيرة الذاتية",
            videos_title: "أبرز أعمالي",
            channel_title: "تابعني على يوتيوب",
            channel_desc: "اشترك في القناة ليصلك كل جديد في عالم المونتاج وصناعة المحتوى.",
            channel_button: "الذهاب إلى القناة",
            contact_title: "تواصل معي",
            form_name_placeholder: "الاسم",
            form_email_placeholder: "البريد الإلكتروني",
            form_message_placeholder: "الرسالة",
            send_message: "إرسال الرسالة",
            whatsapp_btn: "تواصل عبر واتساب",
            form_success_message: "تم فتح تطبيق البريد الإلكتروني لديك لإرسال الرسالة.",
            footer_text: "© 2024 جميع الحقوق محفوظة لمحمد رجب."
        }
    };

    const langSelector = document.getElementById('lang-selector');
    const translatableElements = document.querySelectorAll('[data-lang]');
    let currentLang = localStorage.getItem('selectedLanguage') || 'ar';
    let videoData = []; // To store video data for translation

    const setLanguage = (lang) => {
        currentLang = lang;
        if (lang === 'ar') {
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', 'ltr');
        }
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Translate dynamic video titles
        document.querySelectorAll('.video__card').forEach(card => {
            const videoId = card.getAttribute('data-video-id');
            const video = videoData.find(v => v.videoId === videoId);
            if (video) {
                const titleEl = card.querySelector('.video__title');
                titleEl.textContent = video[`title_${lang}`] || video.title_ar;
            }
        });

        localStorage.setItem('selectedLanguage', lang);
    };

    langSelector.addEventListener('change', (event) => setLanguage(event.target.value));
    
    // Set initial language
    langSelector.value = currentLang;
    setLanguage(currentLang);

    /* ==================== VIDEO POPUP LOGIC ==================== */
    const videoPopup = document.getElementById('video-popup');
    const videoPopupClose = document.getElementById('video-popup-close');
    const videoIframe = document.getElementById('video-iframe');

    function setupVideoPopup() {
        const videoCards = document.querySelectorAll('.video__card');
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoId = card.getAttribute('data-video-id');
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                videoPopup.classList.add('show');
            });
        });
    }

    videoPopupClose.addEventListener('click', () => {
        videoPopup.classList.remove('show');
        videoIframe.src = ''; // Stop video
    });

    /* ==================== CONTACT FORM LOGIC ==================== */
    const contactForm = document.getElementById('contact-form');
    const formMessageStatus = document.getElementById('form-message-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // ... (rest of your contact form logic remains the same)
        });
    }

    /* ==================== FETCH DATA FROM FIREBASE ==================== */
    function fetchContent() {
        const videosContainer = document.getElementById('videos-container');
        const heroVideoSource = document.getElementById('hero-video-source');
        const heroVideo = document.querySelector('.hero__video');

        // Fetch background video
        db.collection('portfolio').doc('config').onSnapshot(doc => {
            if (doc.exists && doc.data().backgroundVideoUrl) {
                const newSrc = doc.data().backgroundVideoUrl;
                if (heroVideoSource.getAttribute('src') !== newSrc) {
                    heroVideoSource.setAttribute('src', newSrc);
                    heroVideo.load(); // Reload the video element
                }
            }
        });

        // Fetch portfolio videos
        db.collection('videos').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
            videosContainer.innerHTML = ''; // Clear existing static content
            videoData = []; // Reset video data
            snapshot.forEach(doc => {
                const video = doc.data();
                videoData.push(video); // Store for translation
                const videoCard = document.createElement('div');
                videoCard.classList.add('video__card');
                videoCard.setAttribute('data-video-id', video.videoId);
                
                // Set title based on current language
                const title = video[`title_${currentLang}`] || video.title_ar;

                videoCard.innerHTML = `
                    <img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" alt="Video Thumbnail" class="video__thumbnail">
                    <i class="fas fa-play video__play-icon"></i>
                    <h3 class="video__title">${title}</h3>
                `;
                videosContainer.appendChild(videoCard);
            });
            // After creating cards, set up the popup logic
            setupVideoPopup();
        });
    }
});
