let girl_boy_spans = document.getElementsByClassName("girl-boy")

for (let girl_boy of girl_boy_spans) {
    if (Math.random() > 0.49) {
        girl_boy.innerHTML = girl_boy.classList.contains("capital")? "Girl" : "girl"
    } else {
        girl_boy.innerHTML = girl_boy.classList.contains("capital")? "Boy" : "boy"
    }
}