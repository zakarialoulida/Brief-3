const icons = document.getElementById("icons");
const nav = document.getElementById("nav");
/*const faqs=document.querySelectorAll(".faq")*/

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

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
    const cinRegex = /^[a-zA-Z]{2}\d{6}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\+212\d{9}$/;

    const errorMessage1 = document.getElementById('error-message1');
    errorMessage1.innerHTML = '';
    const errorMessage2 = document.getElementById('error-message2');
    errorMessage2.innerHTML = '';
    const errorMessage3 = document.getElementById('error-message3');
    errorMessage3.innerHTML = '';
    const errorMessage4= document.getElementById('error-message4');
    errorMessage4.innerHTML = '';
   


    if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
        errorMessage1.innerHTML ='Le nom et le prénom doivent contenir au moins 3 caractères.<br>';
    }

    if (!cinRegex.test(cin)) {
        errorMessage2.innerHTML = 'Le numéro de CIN doit contenir exactement 2 alphabets et 6  chiffres.<br>';
    }

    if (!emailRegex.test(email)) {
        errorMessage3.innerHTML = 'Adresse e-mail non valide.<br>';
    }

    if (!phoneRegex.test(telephone)) {
        errorMessage4.innerHTML = 'Le numéro de téléphone doit commencer par +212 et contenir 12 chiffres au total.<br>';
    }

    if (errorMessage.innerHTML === '') {
        alert('Inscription réussie !');
        this.reset();
    }
});