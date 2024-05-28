function login() {
    const data = {
        username: this.username,
        password: this.password
    };

    fetch('http://localhost:8080/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                this.token = data.token;
                // Guardar el token en el store
                localStorage.setItem('token', this.token);
                window.location.href = "productos.html"
            } else {
                alert('Usuario o contraseña incorrectos.');
            }
        });
}


function signup() {
    window.location.href = "signup.html"; 
}

function cancelar() {
    window.location.href = "inicio.html";
}
