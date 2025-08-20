// Enkel JavaScript for å håndtere skjema-innsending uten backend.
// Viser en kort oppsummering av hva brukeren skrev i #resultat.

document.addEventListener('DOMContentLoaded', function() {
  const skjema = document.getElementById('kontaktSkjema');
  const resultat = document.getElementById('resultat');

  skjema.addEventListener('submit', function(e) {
    e.preventDefault(); // Forhindre vanlig innsending

    // Hent verdier fra skjemaet
    const navn = document.getElementById('navn').value.trim();
    const epost = document.getElementById('epost').value.trim();
    const fag = document.getElementById('fag').value;
    const melding = document.getElementById('melding').value.trim();

    // Vis en enkel oppsummering til brukeren
    resultat.innerHTML = `
      <h3>Takk for innsendelsen!</h3>
      <p><strong>Navn:</strong> ${navn || '(ikke oppgitt)'}</p>
      <p><strong>E-post:</strong> ${epost || '(ikke oppgitt)'}</p>
      <p><strong>Favorittfag:</strong> ${fag}</p>
      <p><strong>Melding:</strong> ${melding || '(ingen melding)'}</p>
    `;

    // Rens skjema (valgfritt) — la elevene prøve både med og uten reset
    // skjema.reset();
  });
});
