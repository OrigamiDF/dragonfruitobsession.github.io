const mediaQuery = window.matchMedia("(min-width: 700px)")
// Check if the media query is true

function AltImage21() {
if (mediaQuery.matches) {
document.getElementById("graphs-2021").style.display = "flex";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
} else {
document.getElementById("graphs-2021").style.display = "flex";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
}
}

function AltImage22() {
if (mediaQuery.matches) {
document.getElementById("graphs-2022").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
} else {
document.getElementById("graphs-2022").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
}
}

function AltImage23() {
if (mediaQuery.matches) {
document.getElementById("graphs-2023").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
} else {
document.getElementById("graphs-2023").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2024").style.display = "none";
}
}

function AltImage24() {
if (mediaQuery.matches) {
document.getElementById("graphs-2024").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
} else {
document.getElementById("graphs-2024").style.display = "flex";
document.getElementById("graphs-2021").style.display = "none";
document.getElementById("graphs-2022").style.display = "none";
document.getElementById("graphs-2023").style.display = "none";
}
}
