// Navbar//
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');

document.onclick = function(e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function() {
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
    }
    // Scrolling Text
let parent = document.querySelectorAll('.animate-text');
for (let i = 0; i < parent.length; i++) {
    parent[i].style.width = parent[i].children[0].clientWidth + "px";
};
// BTN
const btn = document.querySelector('.btn');
btn.onmousemove = function(e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', x + 'px')
        btn.style.setProperty('--y', y + 'px')

    }
    // SVG