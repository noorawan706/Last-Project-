// Book Service Button Scroll

function bookService() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// Booking Form

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let customerName =
        document.getElementById("name").value;

    let phone =
        document.getElementById("phone").value;

    let address =
        document.getElementById("address").value;

    let appliance =
        document.getElementById("appliance").value;

    let problem =
        document.getElementById("problem").value;

    // Validation

    if (
        customerName === "" ||
        phone === "" ||
        address === "" ||
        appliance === "Select Appliance Type" ||
        problem === ""
    ) {

        alert("Please fill all fields.");
        return;
    }

    // Success Message

    document.getElementById("message").innerHTML =
        "✅ Thank You " + customerName +
        "! Your booking has been submitted successfully.";

    bookingForm.reset();
});

// Service Cards Hover Effect

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});