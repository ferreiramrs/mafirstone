const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');

    let data = {
        nome: inputNome.value,
        email: inputEmail.value,
    }

    let leads = JSON.parse(localStorage.getItem("leads"));

    if(leads == null){
        localStorage.setItem("leads", "[]");
        leads = [];
    }

    let lead = JSON.stringify(data);
    leads.push(lead);
    localStorage.setItem("leads", JSON.stringify(leads));
    alert("Prontinho! Agora você já está na lista da beleza ;)")
    inputNome.value = '';
    inputEmail.value = '';
    console.log(leads);
    return false;
})