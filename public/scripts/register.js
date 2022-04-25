const formularioRegistro = () => {

    const registerForm = document.getElementById('register-Form');
    registerForm.onsubmit = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.table(nombre, apellido, email, password);
    }
};