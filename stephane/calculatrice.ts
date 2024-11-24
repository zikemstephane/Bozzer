function check(value:any) {
    const tex = document.getElementById('result');
    if (tex.value === "Comment peut-on vous aider ?") {
        tex.value = '';
    }
    tex.value += value; 
}

function Ac() {
    const tex = document.getElementById('result');
    tex.value = '';
}

function DEL() {
    const tex = document.getElementById('result');
    tex.value = tex.value.slice(0, -1); 
}

function egale() {
    const tex = document.getElementById('result');
    try {
        tex.value = eval(tex.value); 
    } catch (e) {
        tex.value = 'Erreur de saisie'; 
    }
}