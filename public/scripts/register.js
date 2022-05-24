const dateForm = () => {
    const form = document.querySelector('#registerForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        fetch('http://localhost:4000/api/auth/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                if (data.ok) {
                    alert('Usuario creado correctamente')
                    window.location.href = '/public/perfil.html'
                } else {
                    alert(data.msg)
                    form.reset();
                }
            })
    });
}

