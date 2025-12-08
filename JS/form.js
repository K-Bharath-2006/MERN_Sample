let form = document.querySelector("#feedbackForm");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let name = document.querySelector("input");
    let course = document.querySelector("#course");
    let rating = document.querySelector("#rating");
    let feedback = document.querySelector("#feedback");


    console.log(name.value,course.value,rating.value,feedback.value);
    let res = document.querySelector("#output");
    res.innerHTML += `<div class="q">
        <h3 class="h3">${name.value}</h3>
        <h5 class="h5">Course : ${course.value}</h5>
        <h5 class="h5">Rating : ${rating.value} / 5</h5>
        <h5 class="h5">Feedback : ${feedback.value}</h5>
    </div>`;
    form.reset();
})