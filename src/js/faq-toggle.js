const question = document.querySelectorAll(".faq-question")

question.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
    answer.classList.toggle('open');
    })
})