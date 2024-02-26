        // Custom JavaScript code for toggling the collapse
        document.addEventListener('DOMContentLoaded', function () {
            var collapsibleElement = document.getElementById('navbarCollapse');
            var navbarToggler = document.querySelector('.navbar-toggler');

            navbarToggler.addEventListener('click', function () {
                collapsibleElement.classList.toggle('show');
            });
        });

    