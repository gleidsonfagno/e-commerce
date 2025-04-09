const question = document.querySelectorAll(".faq-question");

question.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const svgIcon = question.querySelector('.faq-question span');

    answer.classList.toggle("open");
    svgIcon.classList.toggle("rotated")
  });
});
