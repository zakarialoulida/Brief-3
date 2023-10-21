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
