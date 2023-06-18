
const buttonSort = document.querySelector(".button-sort")
const result = document.querySelector(".h5-sortear")

function sort() {
    const numeroDe = document.querySelector(".numero-de").value;
    const numeroAte = document.querySelector(".numero-ate").value;

    const valorSorteado = Math.ceil(Math.random() * (numeroAte - numeroDe + 1));

    if (valorSorteado >= numeroDe) {
        result.innerHTML = "O valor sortedo foi: " + "<b>" + valorSorteado + "</b>";
    }
    else {
        sort();
    }

}

buttonSort.addEventListener("click", sort)

