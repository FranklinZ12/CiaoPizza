const dateForm = () => {
    const form = document.querySelector('#registerForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        console.log(JSON.stringify(data));
        form.reset();
    });
}

