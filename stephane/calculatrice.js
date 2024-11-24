function check(value) {
    var tex = document.getElementById('result');
    if (tex.innerHTML === "Comment peut-on vous aider ?") {
        //tex.value = '';
    }
    tex.value += value;
}
function Ac() {
    var tex = document.getElementById('result');
    tex.value = '';
}
function DEL() {
    var tex = document.getElementById('result');
    tex.value = tex.value.slice(0, -1);
}
function egale() {
    var tex = document.getElementById('result');
    try {
        tex.value = eval(tex.value);
    }
    catch (e) {
        tex.value = 'Erreur de saisie';
    }
}
