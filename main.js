function myFunction() {
    document.getElementById("thankYou").innerHTML = "Thank you for contacting me! Can't wait to connect soon."
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();

            const target = document.querySelector(e.target.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
