const navItems = document.querySelectorAll('.nav-links .nav-item');
const headerTitle = document.querySelector('.content-area header h1');
const contentArea = document.querySelector('.content-area');
const dashboardCards = document.querySelector('.dashboard-cards');

navItems.forEach(navItem => {
    navItem.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        if (this.id === 'pbtn') {
            headerTitle.textContent = "Profile Overview";
            dashboardCards.innerHTML = `
                <div class="card">
                    <div class="card-header"><h2>User Information</h2><i class="fas fa-info-circle"></i></div>
                    <div class="card-body"><p><strong>Name:</strong> John Doe</p><p><strong>Email:</strong> john.doe@example.com</p><p><strong>Location:</strong> New York</p></div>
                </div>
                `;
        } else if (this.id === 'mbtn') {
            headerTitle.textContent = "Your Matches";
            dashboardCards.innerHTML = `
                <div class="card">
                    <div class="card-header"><h2>Potential Matches</h2><i class="fas fa-heart"></i></div>
                    <div class="card-body"><p>Display your matches here.</p></div>
                </div>
                `;
        } else if (this.id === 'sbtn') {
            headerTitle.textContent = "Available Services";
            dashboardCards.innerHTML = `
                <div class="card">
                    <div class="card-header"><h2>Our Services</h2><i class="fas fa-cog"></i></div>
                    <div class="card-body"><ul><li>Service 1</li><li>Service 2</li></ul></div>
                </div>
                `;
        } else if (this.id === 'lbtn') {
            window.location.href = "../home/index.html";
        }
    });
});


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
const firebaseConfig = {
  apiKey: "AIzaSyBXVtqhEzteztF2dM29AxyPtH7v1pz0nKo",
  authDomain: "roomi-1ceb3.firebaseapp.com",
  projectId: "roomi-1ceb3",
  storageBucket: "roomi-1ceb3.firebasestorage.app",
  messagingSenderId: "200210916462",
  appId: "1:200210916462:web:3d8170be3115a8adf2f27f",
  measurementId: "G-G1234NWHFL"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
