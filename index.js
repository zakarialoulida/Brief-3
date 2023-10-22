const icons = document.getElementById("icons");
const nav = document.getElementById("nav");
/*const faqs=document.querySelectorAll(".faq")*/

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});
/*faqs.forEach(faq =>{
    faq.addEventListener("click",()=>
    {faq.classList.toggle("activ");
    });
});*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    const question = faq.querySelector(".question");
    const answer = faq.querySelector(".answer");

    question.addEventListener("click", () => {
        faq.classList.toggle("active");

        if (faq.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0";
        }
    });
});
/*****formulaire**********/
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const cin = document.getElementById('cin').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    const nameRegex = /^[A-Za-z]{3,}$/;
    const cinRegex = /^\d{12}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\+212\d{9}$/;

    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';

    if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
        errorMessage.innerHTML += 'Le nom et le prénom doivent contenir au moins 3 caractères.<br>';
    }

    if (!cinRegex.test(cin)) {
        errorMessage.innerHTML += 'Le numéro de CIN doit contenir exactement 12 chiffres.<br>';
    }

    if (!emailRegex.test(email)) {
        errorMessage.innerHTML += 'Adresse e-mail non valide.<br>';
    }

    if (!phoneRegex.test(telephone)) {
        errorMessage.innerHTML += 'Le numéro de téléphone doit commencer par +212 et contenir 12 chiffres au total.<br>';
    }

    if (errorMessage.innerHTML === '') {
        alert('Inscription réussie !');
        this.reset();
    }
});