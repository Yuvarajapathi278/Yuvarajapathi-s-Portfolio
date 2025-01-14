// Toggle menu bar and navbar
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

// Highlight active section and sticky header on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu on scroll
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
};

// Circular progress bar animation
document.querySelectorAll('.circular-progress').forEach(progress => {
    const percent = progress.getAttribute('data-percent');
    const circle = document.createElement('svg');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    circle.innerHTML = `
        <circle cx="60" cy="60" r="${radius}" stroke="#ddd" />
        <circle cx="60" cy="60" r="${radius}" stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}" />
    `;
    progress.appendChild(circle);

    // Animate the progress
    setTimeout(() => {
        const progressCircle = circle.querySelector('circle:nth-child(2)');
        progressCircle.style.transition = 'stroke-dashoffset 1s ease-in-out';
        progressCircle.style.strokeDashoffset = offset;
        progress.querySelector('.progress-value').textContent = percent + '%';
    }, 100);
});

// Rotating titles
const titles = ["Aspiring Software Developer", "Aspiring Software Engineer", "Aspiring Associate Software Developer"];
let index = 0;
const titleElement = document.getElementById("title");

setInterval(() => {
    titleElement.textContent = titles[index];
    index = (index + 1) % titles.length;
}, 3000);

// Wavy text animation
const wavyText = document.querySelector('.wavy-text');

function animateWavyText() {
    wavyText.style.transform = 'translateY(10px)';
    setTimeout(() => {
        wavyText.style.transform = 'translateY(0)';
    }, 2500);
}

setInterval(animateWavyText, 5000);

// Raindrop animation
const rainContainer = document.querySelector('.rain-container');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 1 + 1}s`;
    rainContainer.appendChild(raindrop);

    // Remove the raindrop after it falls off the screen
    setTimeout(() => {
        raindrop.remove();
    }, 2000);
}

function startRain() {
    setInterval(createRaindrop, 50);
}

startRain();