document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;

        if (!username || !email || !password || !passwordConfirm) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== passwordConfirm) {
            alert('Passwords do not match.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
        form.submit(); // Now actually submit the form
    });
});