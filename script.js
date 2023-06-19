
const buttonSort = document.querySelector(".button-sort")
const result = document.querySelector(".h5-sortear")

function sort() {
    const numeroDe = Math.ceil(document.querySelector(".numero-de").value);
    const numeroAte = Math.floor(document.querySelector(".numero-ate").value);
    const valorSorteado = Math.floor(Math.random() * (numeroAte - numeroDe + 1)) + numeroDe;

    if (numeroDe >= numeroAte) {
        result.innerHTML = "O número inicial precisa ser menor do que o numero final!"
    } else {
        result.innerHTML = "O valor sortedo foi: " + "<b>" + valorSorteado + "</b>";
    }
}

buttonSort.addEventListener("click", sort)

