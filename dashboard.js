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
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const bgVideoForm = document.getElementById('bg-video-form');
const bgVideoUrlInput = document.getElementById('bg-video-url');
const addVideoForm = document.getElementById('add-video-form');
const videosListContainer = document.getElementById('videos-list');

// Check user auth state
auth.onAuthStateChanged(user => {
    if (user) {
        // User is logged in
        loginView.style.display = 'none';
        dashboardView.style.display = 'block';
        loadCurrentData();
    } else {
        // User is logged out
        loginView.style.display = 'block';
        dashboardView.style.display = 'none';
    }
});

// Login logic
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.error("Login Error:", error);
            loginError.textContent = "فشل تسجيل الدخول. تأكد من البريد وكلمة المرور.";
        });
});

// Logout logic
logoutBtn.addEventListener('click', () => {
    auth.signOut();
});

// Load current data from Firestore
function loadCurrentData() {
    // Load background video URL
    db.collection('portfolio').doc('config').get().then(doc => {
        if (doc.exists && doc.data().backgroundVideoUrl) {
            bgVideoUrlInput.value = doc.data().backgroundVideoUrl;
        }
    });

    // Load and display videos
    db.collection('videos').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        videosListContainer.innerHTML = ''; // Clear list
        snapshot.forEach(doc => {
            const video = doc.data();
            const videoEl = document.createElement('div');
            videoEl.classList.add('video__card');
            videoEl.innerHTML = `
                <img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" alt="Video Thumbnail" class="video__thumbnail">
                <h3 class="video__title">${video.title_ar}</h3>
                <button class="btn btn--delete" data-id="${doc.id}"><i class="fas fa-trash"></i> حذف</button>
            `;
            videosListContainer.appendChild(videoEl);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.btn--delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const docId = e.currentTarget.getAttribute('data-id');
                if (confirm('هل أنت متأكد من حذف هذا الفيديو؟')) {
                    db.collection('videos').doc(docId).delete();
                }
            });
        });
    });
}

// Update background video
bgVideoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUrl = bgVideoUrlInput.value;
    db.collection('portfolio').doc('config').set({
        backgroundVideoUrl: newUrl
    }, { merge: true })
    .then(() => alert('تم تحديث فيديو الخلفية بنجاح!'))
    .catch(error => console.error("Error updating background video: ", error));
});

// Add new video
addVideoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const videoId = document.getElementById('video-id').value;
    const titleAr = document.getElementById('video-title-ar').value;
    const titleEn = document.getElementById('video-title-en').value;
    const titleFr = document.getElementById('video-title-fr').value;

    db.collection('videos').add({
        videoId: videoId,
        title_ar: titleAr,
        title_en: titleEn,
        title_fr: titleFr,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert('تمت إضافة الفيديو بنجاح!');
        addVideoForm.reset();
    })
    .catch(error => console.error("Error adding video: ", error));
});
