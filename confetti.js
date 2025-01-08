(function() {
    const confettiStyles = `
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: #FF5733;
            opacity: 1;
            pointer-events: none;
            z-index: 1000;
        }
    `;

    function getRandomColor() {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33FF", "#FF5733", "#33D4FF", "#FFD700", "#FF1493"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = confettiStyles;
    document.head.appendChild(styleSheet);

    window.triggerConfetti = function() {
        const numConfetti = 50;

        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            const randomX = Math.random() * window.innerWidth;
            const randomSize = Math.random() * 5 + 5;

            confetti.style.left = `${randomX}px`;
            confetti.style.width = `${randomSize}px`;
            confetti.style.height = `${randomSize}px`;
            confetti.style.backgroundColor = getRandomColor();

            document.body.appendChild(confetti);

            const animation = confetti.animate([
                {
                    transform: `translate(0, 0) rotate(0deg)`,
                    opacity: 1
                },
                {
                    transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1500 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            animation.onfinish = () => {
                confetti.remove();
            };
        }
    };
})();
