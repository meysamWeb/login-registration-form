const signup = document.querySelector(".t-signup"),
    signin = document.querySelector(".t-signin"),
    addClass = document.querySelector(".site");

signup.addEventListener("click", () => {
    addClass.className = 'site signup-show';
});

signin.addEventListener("click", () => {
    addClass.className = 'site signin-show';
});

// show password in input
const triggerButtons = document.querySelectorAll('.trigger');

triggerButtons.forEach(triggerButton => {
    triggerButton.addEventListener("click", () => {
        // Find the corresponding password input for this trigger
        const inputPassword = triggerButton.nextElementSibling;

        if (inputPassword.type === 'password') {
            // change input type to show the password
            inputPassword.type = 'text';

            // change icon class
            triggerButton.className = 'ri-eye-line icon-password';
        } else {
            // back to default
            inputPassword.type = 'password';
            triggerButton.className = 'ri-eye-off-line icon-password';
        }
    });
});


