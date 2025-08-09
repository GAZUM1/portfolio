document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            cv_title: "CV - Mohamed Ragab",
            name: "Mohamed Ragab",
            job_title: "Video Editor & Content Creator",
            contact_title: "Contact Info",
            location: "Cairo, Egypt",
            skills_title: "Skills",
            skill_1: "Video Editing",
            skill_2: "Color Grading",
            skill_3: "Visual Effects (VFX)",
            skill_5: "Sound Design",
            tools_title: "Software",
            languages_title: "Languages",
            lang_ar: "Arabic (Native)",
            lang_en: "English (Advanced)",
            profile_title: "Profile",
            profile_desc: "A passionate and results-driven video editor with a proven track record of transforming creative ideas into engaging and impactful visual content. I possess strong technical skills and the ability to manage projects from concept to final delivery, with a keen eye for detail and quality.",
            experience_title: "Work Experience",
            exp1_job: "Senior Video Editor",
            present: "Present",
            exp1_company: "XYZ Production | Cairo",
            exp1_desc1: "Led editing and color grading for major projects, including documentaries and commercials.",
            exp1_desc2: "Developed and improved workflows, increasing post-production team efficiency by 30%.",
            exp2_job: "Video Editor",
            exp2_company: "ABC Advertising Agency | Alexandria",
            exp2_desc1: "Edited videos for social media platforms, contributing to a 50% increase in follower engagement.",
            exp2_desc2: "Collaborated with filming and marketing teams to ensure client vision was achieved.",
            print_btn: "Print",
            back_btn: "Back"
        },
        ar: {
            cv_title: "السيرة الذاتية - محمد رجب",
            name: "محمد رجب",
            job_title: "مونتير فيديو وصانع محتوى",
            contact_title: "معلومات التواصل",
            location: "القاهرة, مصر",
            skills_title: "المهارات",
            skill_1: "مونتاج الفيديو",
            skill_2: "تصحيح الألوان",
            skill_3: "المؤثرات البصرية (VFX)",
            skill_5: "تصميم الصوت",
            tools_title: "البرامج",
            languages_title: "اللغات",
            lang_ar: "العربية (اللغة الأم)",
            lang_en: "الإنجليزية (مستوى متقدم)",
            profile_title: "الملف الشخصي",
            profile_desc: "مونتير فيديو شغوف وموجه نحو تحقيق النتائج، أمتلك سجلاً حافلاً في تحويل الأفكار الإبداعية إلى محتوى مرئي جذاب ومؤثر. أتمتع بمهارات تقنية عالية وقدرة على إدارة المشاريع من الفكرة الأولية حتى التسليم النهائي، مع التركيز على التفاصيل الدقيقة والجودة العالية.",
            experience_title: "الخبرة العملية",
            exp1_job: "مونتير فيديو أول",
            present: "الآن",
            exp1_company: "شركة XYZ للإنتاج | القاهرة",
            exp1_desc1: "قيادة عمليات المونتاج وتصحيح الألوان لمشاريع كبرى تشمل أفلام وثائقية وإعلانات تجارية.",
            exp1_desc2: "تطوير وتحسين سير العمل لزيادة كفاءة فريق ما بعد الإنتاج بنسبة 30%.",
            exp2_job: "مونتير فيديو",
            exp2_company: "وكالة ABC الإعلانية | الإسكندرية",
            exp2_desc1: "مونتاج فيديوهات لمنصات التواصل الاجتماعي، مما ساهم في زيادة تفاعل المتابعين بنسبة 50%.",
            exp2_desc2: "التعاون مع فرق التصوير والتسويق لضمان تحقيق رؤية العميل.",
            print_btn: "طباعة",
            back_btn: "العودة"
        },
        fr: {
            cv_title: "CV - Mohamed Ragab",
            name: "Mohamed Ragab",
            job_title: "Monteur Vidéo & Créateur de Contenu",
            contact_title: "Infos de Contact",
            location: "Le Caire, Égypte",
            skills_title: "Compétences",
            skill_1: "Montage Vidéo",
            skill_2: "Étalonnage des couleurs",
            skill_3: "Effets Visuels (VFX)",
            skill_5: "Conception Sonore",
            tools_title: "Logiciels",
            languages_title: "Langues",
            lang_ar: "Arabe (Natif)",
            lang_en: "Anglais (Avancé)",
            profile_title: "Profil",
            profile_desc: "Un monteur vidéo passionné et axé sur les résultats, avec une expérience avérée dans la transformation d'idées créatives en contenu visuel engageant et percutant. Je possède de solides compétences techniques et la capacité de gérer des projets du concept à la livraison finale, avec un sens aigu du détail et de la qualité.",
            experience_title: "Expérience Professionnelle",
            exp1_job: "Monteur Vidéo Senior",
            present: "Aujourd'hui",
            exp1_company: "Production XYZ | Le Caire",
            exp1_desc1: "Direction du montage et de l'étalonnage pour des projets majeurs, y compris des documentaires et des publicités.",
            exp1_desc2: "Développement et amélioration des flux de travail, augmentant l'efficacité de l'équipe de post-production de 30%.",
            exp2_job: "Monteur Vidéo",
            exp2_company: "Agence de Publicité ABC | Alexandrie",
            exp2_desc1: "Montage de vidéos pour les plateformes de médias sociaux, contribuant à une augmentation de 50% de l'engagement des abonnés.",
            exp2_desc2: "Collaboration avec les équipes de tournage et de marketing pour garantir la réalisation de la vision du client.",
            print_btn: "Imprimer",
            back_btn: "Retour"
        }
    };

    const langSelector = document.getElementById('lang-selector');
    const translatableElements = document.querySelectorAll('[data-lang]');

    const setLanguage = (lang) => {
        const htmlEl = document.documentElement;
        if (lang === 'ar') {
            htmlEl.setAttribute('lang', 'ar');
            htmlEl.setAttribute('dir', 'rtl');
        } else {
            htmlEl.setAttribute('lang', lang);
            htmlEl.setAttribute('dir', 'ltr');
        }

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        localStorage.setItem('cvLanguage', lang);
    };

    langSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    
    const savedLang = localStorage.getItem('cvLanguage') || 'en';
    langSelector.value = savedLang;
    setLanguage(savedLang);
});
