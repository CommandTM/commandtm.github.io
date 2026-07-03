let girl_boy_spans = document.getElementsByClassName("girl-boy")

for (let girl_boy of girl_boy_spans) {
    if (Math.random() > 0.49) {
        girl_boy.innerHTML = girl_boy.classList.contains("capital")? "Girl" : "girl"
    } else {
        girl_boy.innerHTML = girl_boy.classList.contains("capital")? "Boy" : "boy"
    }
}

let her_his_spans = document.getElementsByClassName("her-his")

for (let her_his of her_his_spans) {
    if (Math.random() > 0.49) {
        her_his.innerHTML = her_his.classList.contains("capital")? "Her" : "her"
    } else {
        her_his.innerHTML = her_his.classList.contains("capital")? "His" : "his"
    }
}

let she_he_spans = document.getElementsByClassName("she-he")

for (let she_he of she_he_spans) {
    if (Math.random() > 0.49) {
        she_he.innerHTML = she_he.classList.contains("capital")? "She" : "she"
    } else {
        she_he.innerHTML = she_he.classList.contains("capital")? "He" : "he"
    }
}

let her_him_spans = document.getElementsByClassName("her-him")

for (let her_him of her_him_spans) {
    if (Math.random() > 0.49) {
        her_him.innerHTML = her_him.classList.contains("capital")? "Her" : "her"
    } else {
        her_him.innerHTML = her_him.classList.contains("capital")? "Him" : "him"
    }
}