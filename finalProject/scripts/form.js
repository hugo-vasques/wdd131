// ------- Dynamic Footer -------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// ------- Hamburger Button -------
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ------- Review Counter -------
function incrementReviewCount() {
    let count = localStorage.getItem("tasteReviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("tasteReviewCount", count);
    return count;
}

// ------- Review Summary -------
function showReviewSummary(name, subject, rating, message) {
    const summary = `Thank you, ${name}! You sent a "${subject}" with a rating of ${rating} stars. Message: "${message}"`;
    console.log(summary);
}

// ------- Validation and Submit -------
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const subjectValue = document.getElementById("subject").value;
    const ratingChecked = document.querySelector('input[name="rating"]:checked');
    const messageValue = document.getElementById("message").value.trim();

    if (!nameValue || !emailValue || !subjectValue || !ratingChecked) {
        let missing = [];
        if (!nameValue) missing.push("name");
        if (!emailValue) missing.push("email");
        if (!subjectValue) missing.push("case");
        if (!ratingChecked) missing.push("rating");
        alert(`Please fill in the following required field(s): ${missing.join(", ")}`);
        return;
    }

    incrementReviewCount();
    showReviewSummary(nameValue, subjectValue, ratingChecked.value, messageValue);

    window.location.href = "thanks.html";
});