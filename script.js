// Function to trigger confetti
function triggerConfetti() {
    const confettiContainer = document.getElementById("confetti");

    // Create confetti elements
    const confettiElement = document.createElement("div");
    confettiElement.classList.add("confetti");
    confettiContainer.appendChild(confettiElement);

    // Add animation for confetti
    setTimeout(() => {
        confettiElement.style.transform = `translateY(${Math.random() * 1000}px) rotate(${Math.random() * 360}deg)`;
        confettiElement.style.opacity = 0;
    }, 100);
}

// Listen for checkbox clicks
document.getElementById("yesCheckbox1").addEventListener("change", function () {
    if (this.checked) {
        triggerConfetti();
    }
});

document.getElementById("yesCheckbox2").addEventListener("change", function () {
    if (this.checked) {
        triggerConfetti();
    }
});

