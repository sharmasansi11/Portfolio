// /* ================= EMAILJS INITIALIZATION ================= */
// (function () {
//     emailjs.init("zedhgqqcpgoBItaft");
// })();

// /* ================= CONTACT FORM HANDLING ================= */
// const form = document.getElementById("contact-form");
// const statusMessage = document.getElementById("form-status");

// if (form) {
//     form.addEventListener("submit", function (e) {
//         e.preventDefault(); // stop page reload

//         statusMessage.textContent = "Sending message...";

//         emailjs.sendForm(
//             "service_0gty6tb",     // ← ADD SERVICE ID HERE
//             "Contact Us",    // ← ADD TEMPLATE ID HERE
//             this
//         )
//         .then(() => {
//             // ✅ SUCCESS (STEP 6.5 SUCCESS PART)
//             statusMessage.textContent = "Message sent successfully!";
//             form.reset();
//         })
//         .catch((error) => {
//             // ❌ ERROR (STEP 6.5 ERROR PART)
//             statusMessage.textContent = "Failed to send message. Please try again.";
//             console.error("EmailJS Error:", error);
//         });
//     });
// }




// /* ================= THEME HANDLING ================= */

// const themeSelect = document.getElementById("theme");
// const body = document.body;

// /* Apply theme */
// function applyTheme(theme) {
//     if (theme === "dark") {
//         body.setAttribute("data-theme", "dark");
//     } 
//     else if (theme === "light") {
//         body.setAttribute("data-theme", "light");
//     } 
//     else {
//         body.removeAttribute("data-theme"); // system default
//     }
// }

// /* Load saved theme */
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//     applyTheme(savedTheme);
//     if (themeSelect) themeSelect.value = savedTheme;
// }

// /* Theme change event */
// if (themeSelect) {
//     themeSelect.addEventListener("change", () => {
//         const selectedTheme = themeSelect.value;
//         localStorage.setItem("theme", selectedTheme);
//         applyTheme(selectedTheme);
//     });
// }

/* ================= EMAILJS INITIALIZATION ================= */

/* ================= EMAILJS INITIALIZATION ================= */

if (typeof emailjs !== "undefined") {
    emailjs.init("zedhgqqcpgoBItaft");
}

/* ================= CONTACT FORM HANDLING ================= */

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

if (form && typeof emailjs !== "undefined") {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        if (statusMessage) {
            statusMessage.textContent = "Sending message...";
        }

        emailjs.sendForm(
    "service_0gty6tb",
    "template_2flskem",
    this
)
        .then(() => {

            if (statusMessage) {
                statusMessage.textContent = "Message sent successfully!";
            }

            form.reset();

        })
        .catch((error) => {

            if (statusMessage) {
                statusMessage.textContent =
                    "Failed to send message. Please try again.";
            }

            console.error("EmailJS Error:", error);

        });

    });

}

/* ================= THEME HANDLING ================= */

const themeSelect = document.getElementById("theme");
const body = document.body;

/* Apply theme */

function applyTheme(theme) {

    if (theme === "dark") {
        body.setAttribute("data-theme", "dark");
    }

    else if (theme === "light") {
        body.setAttribute("data-theme", "light");
    }

    else {
        body.removeAttribute("data-theme");
    }

}

/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

    if (themeSelect) {
        themeSelect.value = savedTheme;
    }

}

/* Theme change event */

if (themeSelect) {

    themeSelect.addEventListener("change", () => {

        const selectedTheme = themeSelect.value;

        localStorage.setItem("theme", selectedTheme);

        applyTheme(selectedTheme);

    });

}
