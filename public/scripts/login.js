
const dateForm = () => {
    const form = document.querySelector('#loginForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        fetch('http://localhost:4000/api/auth/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                if (data.ok) {
                    window.location.href = '/public/perfil.html'
                } else {
                    alert('Error, usuario no existente')
                    form.reset();
                }
            })
    });
}