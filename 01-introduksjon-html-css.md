## Introduksjon til HTML & CSS

Dette dokumentet skal hjelpe deg når du skal repetere grunnleggende HTML og CSS. Innholdet består av korte forklaringer, rene eksempler og små oppgaver du kan jobbe med.

### Læringsmål
- Forstå grunnleggende HTML-struktur (doctype, head, body)
- Bruke vanlige HTML-tagger: overskrifter, avsnitt, lister, lenker, bilder, figcaption
- Lage og style et enkelt skjema med input-typer (text, email, password, checkbox, radio, select, textarea)
- Gjøre enkle CSS-endringer: farger, margin/padding, layout og klasser
- Se hvordan litt JavaScript kan brukes for å håndtere et skjema uten backend

---

### 1) Minimal HTML-side (forklaring under)

Dette er et kort, komplett eksempel du kan lime inn i en fil `grunnleggende.html`.

```html
<!DOCTYPE html>
<html lang="no">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Introduksjon til HTML & CSS</title>
	<link rel="stylesheet" href="grunnleggende.css">
	<script src="grunnleggende.js" defer></script>
</head>
<body>
	<header>
		<h1>Grunnleggende HTML og CSS</h1>
		<p>Se gjennom, forstå koden, og forsøk deretter å endre og utvide koden!</p>
	</header>

	<main>

        <section>
            <h2>Lenker, bilder og video</h2>
            
            <p>Lenke: <a href="https://www.example.com" target="_blank" rel="noopener">Gå til example.com</a></p>
            <!-- Bildet viser bruk av alt-tekst som er viktig for uu (universell utforming) -->
            
            <figure>
                    <img src="https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Eksempel-bilde" width="480" />
                    <figcaption>Et eksempelbilde fra Unsplash.</figcaption>
            </figure>
            
            <figure>
                <iframe width="480" height="270" src="https://youtube.com/embed/3rHolw6p_QY?si=GKQqq1VgLSl7ONWy" frameborder="0"></iframe>
                <figcaption>Videoen fra YouTube er lagt inn vha. en iframe.</figcaption>
            </figure>
        <section>

        <section>
            <h2>Lister</h2>
            <p>
                Du kan bruke en nummerert liste:
            </p>
            <ol>
                <li>En</li>
                <li>To</li>
                <li>Tre</li>
            </ol>
            <p>
                Du kan bruke en unummerert liste:
            </p>
            <ul>
                <li>En</li>
                <li>To</li>
                <li>Tre</li>
            </ul>
        </section>
        
        <section>
            <h2>Eksempel på enkelt skjema</h2>
            <p>Fyll ut skjemaet under for å se hvordan det fungerer:</p>
            
            <form id="demoSkjema">
                <label for="navn">Navn:</label>
                <input id="navn" name="navn" type="text" placeholder="Skriv navn" required>

                <label for="epost">E-post:</label>
                <input id="epost" name="epost" type="email" placeholder="navn@eksempel.no">

                <button type="submit" id="btn">Send</button>
            </form>

            <div id="resultat"></div>
        </section>

	</main> <!-- Avslutter main -->

	<footer>
		<p>Fotnote eller instruksjon</p>
	</footer>
</body>
</html>
```

Forklaring:
- `<!DOCTYPE html>` sier at dokumentet er HTML5.
- `<head>` inneholder metadata og lenker til CSS/JS.
- `<body>` inneholder synlig innhold.
- Overskrifter: `<h1>` til `<h6>` — bruker hierarki.
- Avsnitt: `<p>` for tekstblokker.
- Lenker: `<a href="https://...">Lenketekst</a>` — bruk `target="_blank" rel="noopener"` for eksterne lenker.
- Lister: `<ul>`/`<ol>` med `<li>`-elementer.
- Bilder: `<img src="..." alt="beskrivelse">` — `alt` er viktig for tilgjengelighet.
- Figcaption: bruk `<figure>` og `<figcaption>` for bilde + bildetekst. Kan brukes for å gi kontekst til bilder, illustrasjoner, diagrammer, videoer osv.

---

### 2) Enkelt CSS-eksempel (`grunnleggende.css`)

Dette er et kort og enkelt stilark. Lag filen `grunnleggende.css` og lim inn:

```css
/* Enkel reset */
* { box-sizing: border-box; }

body { 
    font-family: Arial, sans-serif; 
    margin: 0; 
    padding: 16px; 
    background: #f7f9fc; 
}

.container { 
    max-width: 900px; 
    margin: 0 auto; 
    background: #fff; 
    padding: 20px; 
    border-radius: 6px; 
}

header h1 { 
    margin: 0 0 8px 0; 
}

form { 
    display: grid; 
    gap: 1rem; 
    max-width: 480px; 
}

input, textarea, select { 
    padding: 8px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
}

#btn { 
    background: #0366d6; 
    color: #fff; 
    border: none; 
    padding: 8px 12px; 
    border-radius: 4px; 
}
```

Forklaring:
- CSS velger elementer og endrer utseendet deres.
- Vi kaller det for selectors når vi peker ut spesifikke elementer. Eksempelvis kan vi bruke `h1` for å style alle overskrifter.
- Dersom vi ønsker kan vi også bruke `header h1` for å spesifisere at vi kun vil style `h1`-elementer inne i `header`.
- `class` brukes for å gjenbruke regler (f.eks. `.btn`).
- `id` brukes for unike elementer (f.eks. `#resultat`). NB: Kan bare brukes en gang.
- Les mer om CSS box-modellen: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model

---

### 3) Liten JavaScript-hjelp (`grunnleggende.js`)

Dette er et veldig enkelt skript som stopper skjemaet fra å sende til en server og viser innholdet lokalt.

```js
const skjema = document.getElementById('demoSkjema');
const resultat = document.getElementById('resultat');

skjema.addEventListener('submit', function(e) {
    e.preventDefault();
    const navn = document.getElementById('navn').value;
    const epost = document.getElementById('epost').value;
    resultat.textContent = `Navn: ${navn} — E-post: ${epost}`;
});
```

---

### 4) Enkle oppgaver

1. Endre fargene i `grunnleggende.css` og se hva som skjer.
2. Legg til et nytt input-felt i skjemaet (f.eks. telefonnummer).
3. Legg til CSS-klasse `.advarsel` og bruk den for å markere et advarselsavsnitt.
4. Legg til validering: vis en feilmelding hvis epost ikke inneholder `@` (kan løses med HTML5 `required` og `type="email"`, eller med JS).

---

### 5) Tips til repetisjon
- Solo: Vis først et eksempel, forklar hvert element kort, og endre små ting.
- Parvis: Forklar til hverandre, og be hverandre om å gjøre endringer, og legge til nye, ulike elementer.
- Bruk DevTools i nettleseren for å endre CSS direkte og se live-resultater.