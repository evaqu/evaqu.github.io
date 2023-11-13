function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

var toggleButton = document.getElementById('toggleButton');
toggleButton.onclick = toggleTheme;
