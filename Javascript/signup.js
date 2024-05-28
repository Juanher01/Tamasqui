function registrationForm() {
    return {
        login: '',
        name: '',
        password: '',
        email: '',
        address: '',
        phone_number: '',
        
        register() {
            const data = {
                login: this.login,
                name: this.name,
                password: this.password,
                email: this.email,
                address: this.address,
                phone_number: this.phone_number
            };

            fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Usuario registrado exitosamente.');
                    window.location.href = "login.html";
                } else {
                    alert('Error al registrar usuario.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error en el servidor.');
            });
        },

        cancelar() {
            window.location.href = "login.html";
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('registrationForm', registrationForm);
});
