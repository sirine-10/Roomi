const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
document.getElementById("formsignin").addEventListener("submit", function (e) {
	e.preventDefault(); 
  
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value.trim();
  
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
	if (!emailRegex.test(email)) {
	  alert("Please enter a valid email address.");
	  return;
	}
  
	if (password.length < 8) {
	  alert("Password must be at least 8 characters long.");
	  return;
	}
  
	
	const strongPassword = /(?=.*[A-Z])(?=.*\d).{8,}/;
	if (!strongPassword.test(password)) {
	  alert("Password must contain at least one uppercase letter and one number.");
	  return;
	}
  
	alert("Form is valid! Submitting...");
	
  });
  document.getElementById("formsignup").addEventListener("submit", function (e) {
	e.preventDefault(); 
  
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value.trim();
  
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
	if (!emailRegex.test(email)) {
	  alert("Please enter a valid email address.");
	  return;
	}
  
	if (password.length < 8) {
	  alert("Password must be at least 8 characters long.");
	  return;
	}
  

	const strongPassword = /(?=.*[A-Z])(?=.*\d).{8,}/;
	if (!strongPassword.test(password)) {
	  alert("Password must contain at least one uppercase letter and one number.");
	  return;
	}
  
	alert("Form is valid! Submitting...");
  });
  


  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
const formSignUp = document.getElementById("formsignup");
const formSignIn = document.getElementById("formsignin");
formSignUp.addEventListener("submit", (e) => {
	e.preventDefault();
	const email = formSignUp.querySelector("input[type='email']").value;
	const password = formSignUp.querySelector("input[type='password']").value;
  
	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		const user = userCredential.user;
		console.log("User signed up:", user);
		alert("Account created! You can now sign in.");
		window.location.href="../prefrences/prefrences.html";
	  })
	  .catch((error) => {
		console.error(" Sign Up Error:", error.message);
		alert(error.message);
	  });
  });
  formSignIn.addEventListener("submit", (e) => {
	e.preventDefault();
	const email = formSignIn.querySelector("input[type='email']").value;
	const password = formSignIn.querySelector("input[type='password']").value;
  
	signInWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		const user = userCredential.user;
		console.log(" Signed in:", user);
		alert("Welcome back!");
		window.location.href="../dashborad/profile.html"
		
	  })
	  .catch((error) => {
		console.error(" Sign In Error:", error.message);
		alert(error.message);
	  });
  });

document.getElementById('signUp').addEventListener('click', () => {
  document.getElementById('container').classList.add("right-panel-active");
});
document.getElementById('signIn').addEventListener('click', () => {
  document.getElementById('container').classList.remove("right-panel-active");
});



 

  
