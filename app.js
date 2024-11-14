// Sélection des éléments du DOM
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Sélection des formulaires
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

// Basculer entre les modes connexion et inscription
signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Écouteur pour le formulaire de connexion
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Empêche la soumission par défaut
  
  // Récupère les valeurs des champs de connexion
  const username = signInForm.querySelector("input[type='text']").value;
  const password = signInForm.querySelector("input[type='password']").value;
  
  console.log("Connexion :", username, password);
  
  // Envoi des données de connexion au serveur
  try {
    const response = await fetch("mongodb://localhost:27017/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("Connexion réussie:", data);
      // Redirection ou autre action après la connexion
    } else {
      console.log("Erreur de connexion:", response.statusText);
    }
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
});

// Écouteur pour le formulaire d'inscription
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Empêche la soumission par défaut
  
  // Récupère les valeurs des champs d'inscription
  const username = signUpForm.querySelector("input[type='text']").value;
  const email = signUpForm.querySelector("input[type='email']").value;
  const password = signUpForm.querySelector("input[type='password']").value;
  
  console.log("Inscription :", username, email, password);
  
  // Envoi des données d'inscription au serveur
  try {
    const response = await fetch("mongodb://localhost:27017/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("Inscription réussie:", data);
      // Redirection ou autre action après l'inscription
    } else {
      console.log("Erreur d'inscription:", response.statusText);
    }
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
});
