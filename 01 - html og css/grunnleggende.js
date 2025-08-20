const skjema = document.getElementById('demoSkjema');
const resultat = document.getElementById('resultat');

skjema.addEventListener('submit', function(e) {
    e.preventDefault();
    const navn = document.getElementById('navn').value;
    const epost = document.getElementById('epost').value;
    resultat.textContent = `Navn: ${navn} — E-post: ${epost}`;
});