const werkbeurten = [
    [10, "1, 2, 3",],
    [11, "4, 5, 6" ],
    [12, "7, 8, 9"],
    [13, "10, 11, 12"]
]

const belangrijke_data = [
    [new Date(2024, 2, 11), "Bestuursvergadering"],
    [new Date(2024, 3, 19), "Algemene Ledenvergadering"],
]

function template(date, title) {
    if (date instanceof Date) {
        date = date.toLocaleDateString("nl-NL", { month: "long", day: "numeric"})
        return `<tr><td>${date}</td><td>${title}</td></tr>`
    }
    return `<tr><td>${date}</td><td>${title}</td></tr>`
}

const werkbeurten_selector = document.querySelector(".werkbeurten")

werkbeurten.forEach(item => werkbeurten_selector.innerHTML += template(item[0], item[1]))

const belangrijke_data_selector = document.querySelector(".data")

belangrijke_data.forEach(item => {
    let date = new Date(item[0]);
    if (date > Date.now() ) {
        belangrijke_data_selector.innerHTML += template(date, item[1])
    }
})