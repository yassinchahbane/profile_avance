document.getElementById("contactForm").addEventListener("submit", function(event){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Tous les champs sont obligatoires.");
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        event.preventDefault();
    } else {
        alert("Formulaire soumis avec succès !");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
