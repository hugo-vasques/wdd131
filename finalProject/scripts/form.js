// ------- Dynamic Footer -------
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// ------- Hamburguer Button -------
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// ------- Products -------
const products = [
    { id: "pz-001", name: "Cuy Frito Cajamarquino", averagerating: 4.8 },
    { id: "pz-002", name: "Humitas de Maíz", averagerating: 4.5 },
    { id: "pz-003", name: "Juane Amazónico", averagerating: 4.7 },
    { id: "pz-004", name: "Patarashca de Pescado", averagerating: 4.9 },
    { id: "pz-005", name: "Tacacho con Cecina", averagerating: 4.6 }
];

function populateProducts() {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}
document.addEventListener("DOMContentLoaded", populateProducts);

// ------- Review Count -------
function incrementReviewCount() {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);
    return count;
}

// ------- Review -------
function showReviewSummary() {
    const selectedProduct = document.getElementById("product").value;
    const ratingChecked = document.querySelector('input[name="rating"]:checked');
    const rating = ratingChecked ? ratingChecked.value : "N/A";
    const review = document.getElementById("review").value || "(No review written)";

    const message = `You reviewed ${selectedProduct} with a rating of ${rating} stars. Review: "${review}"`;
    console.log(message);
}

// ------- Validation and Submit -------
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const ratingChecked = document.querySelector('input[name="rating"]:checked');
    const productValue = document.getElementById("product").value;
    const dateValue = document.getElementById("completeDate").value;

    if (!productValue || !dateValue || !ratingChecked) {
        e.preventDefault();
        let missing = [];
        if (!productValue) missing.push("product");
        if (!dateValue) missing.push("installation date");
        if (!ratingChecked) missing.push("overall rating");
        alert(`Please fill in the following required field(s): ${missing.join(", ")}`);
        return;
    }

    incrementReviewCount();
    showReviewSummary();
});