const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const urgencia = [];
const pacientes =[];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;

    pacientes.push(nome);

    atualizarLista();

    frm.reset();
    frm.inPaciente.focus();


})

frm.btUrgencia.addEventListener("click", () => {

    if(!frm.checkValidity()) {
        alert("Informe o nome do paciente");
        frm.inPaciente.focus()
        return;
    } 

    const nome = frm.inPaciente.value;

    urgencia.push(nome);

    atualizarLista();

    frm.reset();
    frm.inPaciente.focus();

} )

frm.btAtender.addEventListener("click", () => {
    
    if(urgencia.length == 0 && pacientes.length == 0) {
        alert("Não há paciente na fila.");
        return
    } 

    let atender;

    if(urgencia.length > 0) {
        atender = urgencia.shift();
    } else {
        atender = pacientes.shift();
    }

    respNome.innerText = atender;

    atualizarLista();
})

function atualizarLista() {
    let lista = "";

    urgencia.forEach((pacientes, i) => {
        lista += `${i + 1}. ${pacientes} (Urgência)\n`;
    })

    pacientes.forEach((paciente, i) => {
        lista += `${urgencia.length + i + 1}. ${paciente}\n`;
    })
    respLista.innerText = lista
}
