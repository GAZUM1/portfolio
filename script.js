document.addEventListener('DOMContentLoaded', () => {

    /* ==================== CHANGE BACKGROUND HEADER ==================== */
    function scrollHeader() {
        const nav = document.querySelector('.header');
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if (this.scrollY >= 80) {
            nav.classList.add('scroll-header');
        } else {
            nav.classList.remove('scroll-header');
        }
    }
    window.addEventListener('scroll', scrollHeader);


    /* ==================== LANGUAGE TRANSLATION ==================== */
    
    // 1. Define all translations in an object
    const translations = {
        en: {
            portfolio_title: "Mohamed Ragab - Video Editor Portfolio",
            logo_name: "Mohamed Ragab",
            nav_home: "Home",
            nav_about: "About Me", // New
            nav_videos: "My Work",
            nav_channel: "My Channel",
            hero_title: "Professional Visual Content Creation",
            hero_subtitle: "From editing and color grading to visual effects, I turn your ideas into creative videos.",
            hero_button: "See My Work",
            about_title: "About Me", // New
            about_description: "I am a passionate content creator and video editor with experience in software like DaVinci Resolve, Adobe Premiere, and After Effects. I aim to transform raw footage into impactful and engaging visual stories. I always strive to develop my skills and deliver work that exceeds audience expectations.", // New
            about_button_cv: "Download CV", // New
            videos_title: "My Portfolio",
            video1_title: "Video Title 1",
            video1_desc: "A short description of the video content and the software used for editing.",
            video2_title: "Video Title 2",
            video2_desc: "A short description of the video content and the software used for editing.",
            video3_title: "Video Title 3",
            video3_desc: "A short description of the video content and the software used for editing.",
            video4_title: "Video Title 4",
            video4_desc: "A short description of the video content and the software used for editing.",
            video5_title: "Video Title 5",
            video5_desc: "A short description of the video content and the software used for editing.",
            video6_title: "Video Title 6",
            video6_desc: "A short description of the video content and the software used for editing.",
            channel_title: "Follow me on YouTube",
            channel_desc: "Subscribe to the channel to get the latest in video editing and content creation.",
            channel_button: "Go to Channel",
            footer_text: "© 2024 Mohamed Ragab. All rights reserved."
        },
        fr: {
            portfolio_title: "Portfolio de Mohamed Ragab - Monteur Vidéo",
            logo_name: "Mohamed Ragab",
            nav_home: "Accueil",
            nav_about: "À propos", // New
            nav_videos: "Mon Travail",
            nav_channel: "Ma Chaîne",
            hero_title: "Création de Contenu Visuel Professionnel",
            hero_subtitle: "Du montage et de l'étalonnage aux effets visuels, je transforme vos idées en vidéos créatives.",
            hero_button: "Voir mon travail",
            about_title: "À propos de moi", // New
            about_description: "Je suis un créateur de contenu et monteur vidéo passionné, avec une expérience dans des logiciels comme DaVinci Resolve, Adobe Premiere et After Effects. Mon objectif est de transformer des séquences brutes en histoires visuelles percutantes et engageantes. Je cherche toujours à développer mes compétences et à livrer un travail qui dépasse les attentes du public.", // New
            about_button_cv: "Télécharger le CV", // New
            videos_title: "Mon Portfolio",
            video1_title: "Titre de la vidéo 1",
            video1_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            video2_title: "Titre de la vidéo 2",
            video2_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            video3_title: "Titre de la vidéo 3",
            video3_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            video4_title: "Titre de la vidéo 4",
            video4_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            video5_title: "Titre de la vidéo 5",
            video5_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            video6_title: "Titre de la vidéo 6",
            video6_desc: "Une courte description du contenu de la vidéo et du logiciel utilisé pour le montage.",
            channel_title: "Suivez-moi sur YouTube",
            channel_desc: "Abonnez-vous à la chaîne pour recevoir les dernières nouveautés en matière de montage vidéo.",
            channel_button: "Aller à la chaîne",
            footer_text: "© 2024 Mohamed Ragab. Tous droits réservés."
        },
        ar: {
            portfolio_title: "بورتفوليو محمد رجب - مونتاج",
            logo_name: "محمد رجب",
            nav_home: "الرئيسية",
            nav_about: "عني", // New
            nav_videos: "أعمالي",
            nav_channel: "قناتي",
            hero_title: "صناعة محتوى مرئي احترافي",
            hero_subtitle: "من المونتاج وتصحيح الألوان إلى المؤثرات البصرية، أحول أفكارك إلى فيديوهات إبداعية.",
            hero_button: "شاهد أعمالي",
            about_title: "عني", // New
            about_description: "أنا صانع محتوى ومونتير فيديو شغوف، أمتلك خبرة في استخدام برامج مثل DaVinci Resolve, Adobe Premiere, و After Effects. أهدف إلى تحويل المشاهد الأولية إلى قصص مرئية مؤثرة وجذابة. أسعى دائمًا لتطوير مهاراتي وتقديم أعمال تتجاوز توقعات الجمهور.", // New
            about_button_cv: "تحميل السيرة الذاتية", // New
            videos_title: "أبرز أعمالي",
            video1_title: "عنوان الفيديو الأول",
            video1_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            video2_title: "عنوان الفيديو الثاني",
            video2_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            video3_title: "عنوان الفيديو الثالث",
            video3_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            video4_title: "عنوان الفيديو الرابع",
            video4_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            video5_title: "عنوان الفيديو الخامس",
            video5_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            video6_title: "عنوان الفيديو السادس",
            video6_desc: "وصف قصير لمحتوى الفيديو والبرامج المستخدمة في المونتاج.",
            channel_title: "تابعني على يوتيوب",
            channel_desc: "اشترك في القناة ليصلك كل جديد في عالم المونتاج وصناعة المحتوى.",
            channel_button: "الذهاب إلى القناة",
            footer_text: "© 2024 جميع الحقوق محفوظة لمحمد رجب."
        }
    };

    // 2. Get the language selector and all elements that need translation
    const langSelector = document.getElementById('lang-selector');
    const translatableElements = document.querySelectorAll('[data-lang]');

    // 3. Create the function to change the language
    const setLanguage = (lang) => {
        // Change HTML lang and dir attributes
        if (lang === 'ar') {
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', 'ltr');
        }

        // Translate each element
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Save the selected language to local storage
        localStorage.setItem('selectedLanguage', lang);
    };

    // 4. Add event listener to the selector
    langSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    
    // 5. Check for a saved language in local storage on page load
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        langSelector.value = savedLang;
        setLanguage(savedLang);
    } else {
        // Set default language if nothing is saved
        setLanguage('ar');
    }
});