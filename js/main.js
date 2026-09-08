/* =========================================
   GAERISH E-TRADE
   MAIN JAVASCRIPT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =========================
           MOBILE MENU
        ========================= */

        const menuToggle =
            document.getElementById("menuToggle");

        const navbar =
            document.getElementById("navbar");


        if (menuToggle && navbar) {

            menuToggle.addEventListener(
                "click",
                function () {

                    navbar.classList.toggle("active");

                }
            );

        }


        /* =========================
           CLOSE MENU AFTER CLICK
        ========================= */

        const navLinks =
            document.querySelectorAll(
                ".navbar a"
            );


        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (navbar) {
                            navbar.classList.remove(
                                "active"
                            );
                        }

                    }
                );

            }
        );


        /* =========================
           CURRENT YEAR
        ========================= */

        const yearElements =
            document.querySelectorAll(
                ".current-year"
            );


        yearElements.forEach(
            function (element) {

                element.textContent =
                    new Date().getFullYear();

            }
        );

    }
);
