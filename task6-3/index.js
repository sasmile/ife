window.onload=function () {
    function formationIn() {
        var formation = document.getElementById("formation");
        var text = [];
        formation.value.split(/[\r\s\n\,\，\、]+/).forEach(function (ele) {
            text.push(ele);
        });

    }
    var listform = document.getElementById("list");
    var newli = document.createElement("li");
    document.getElementById("leftin").onclick = function leftIn() {
        newli.innerHTML = formationIn();
        listform.insertBefore(newli,listform.firstChild);
    }
}
document.getElementById("rightin").onclick = function rightIn() {
        newli.innerHTML = formationIn();
        listform.insertBefore(newli,listform.firstChild);
}
document.getElementById("leftout").onclick = function leftOut() {
}
document.getElementById("rightin").onclick = function rightOut() {
        }