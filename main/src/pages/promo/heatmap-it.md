---
title: OsmAnd Heatmap — dove le persone pedalano, camminano e guidano davvero
---

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

![Logo](@site/static/img/promo/logo_osmand_black.png)

# OsmAnd Heatmap: esplora milioni di tracce GPS reali

**OsmAnd Heatmap** è un nuovo strumento web che mostra dove le persone si muovono davvero — a piedi, in bici, in auto e non solo. È costruito sulle **tracce GPS pubbliche di OpenStreetMap**: ogni traccia caricata dai contributori OSM viene contata per cella della mappa, per attività e per mese di caricamento, e disegnata come heatmap. Più la linea è luminosa, più tracce passano da quel punto.

È costruito interamente su dati aperti — e ti permette di vedere ogni singola traccia dietro l'immagine.

Lo strumento è attualmente in **test**: [test.osmand.net/map/prototypes/heatmap.html](https://test.osmand.net/map/prototypes/heatmap.html)

![OsmAnd Heatmap intorno a Cracovia](@site/static/img/promo/heatmap/overview.webp)

:::note Cosa c'è dentro
Sono indicizzate più di **8,3 milioni** di tracce GPX di OSM. Circa **6,7 milioni** vengono mostrate di default; le altre sono tracce molto corte, rade o illeggibili, nascoste finché non attivi il gruppo *Ignored*. Le tracce sono raggruppate per attività: auto, ciclismo (strada, MTB, gravel, e-bike…), a piedi (escursionismo, corsa, camminata…), moto, sport invernali, sport acquatici, sport aerei e altro.
:::

_________________

## L'interfaccia

La mappa occupa lo schermo, il pannello a sinistra contiene quattro sezioni. Le tile vengono caricate una volta sola; tutti i filtri qui sotto si applicano istantaneamente nel browser.

### Display

Come appare la heatmap.

![Impostazioni Display](@site/static/img/promo/heatmap/display.webp)

- **Algorithm** — *Smooth (Gaussian)* disegna nastri morbidi, *Sharp thin lines* mantiene le linee nitide a zoom bassi, *Raw cells* mostra la griglia sottostante.
- **Colours** — quattro palette: *Vivid* per la mappa chiara, *Turbo*, *Hot* e *Blue* per la mappa scura.
- **Width** e **Glow** delle linee.
- **Scale** — *Equalized* distribuisce i colori in modo uniforme sulle tracce visibili (così 1, 2 e 3 tracce hanno colori distinti), *Log* è la classica scala logaritmica. Con **Auto** attivo la scala si adatta all'area visibile; disattivalo e imposta il tuo **max**.
- **Opacity** del livello heat e stile della **Map** sottostante: *Grey*, *Dark* o *Colour*.

### Data filter

Quali tracce vengono contate.

![Filtro dati](@site/static/img/promo/heatmap/filter.webp)

- **OSM upload month** — due cursori limitano l'intervallo di date: vengono disegnate solo le tracce caricate su OpenStreetMap in quel periodo. L'intervallo completo parte dal 2005.
- **Hide cells under N tracks** — il numero minimo di tracce necessario per disegnare una linea. Con **1** ogni singola traccia è visibile; con **5** compaiono solo i punti in cui si sovrappongono almeno cinque tracce — i percorsi popolari risaltano, il rumore sparisce.

### Activities

![Attività](@site/static/img/promo/heatmap/activities.webp)

Ogni gruppo di attività ha una casella e un conteggio delle tracce. Espandi un gruppo per scegliere le singole attività — ad esempio solo *Mountain biking* dentro *Cycling*. I pulsanti rapidi **All**, **None**, **Foot + cycling** e **No motor** cambiano le combinazioni tipiche con un clic. Il gruppo *Ignored* (tracce corte, rade, illeggibili o senza orari) è disattivato di default.

### Review tracks

![Revisione tracce](@site/static/img/promo/heatmap/review.webp)

La heatmap non è solo un'immagine — puoi arrivare alle tracce che ci stanno dietro. Zooma a **16 o più** e clicca una linea sulla mappa: il pannello elenca le tracce che passano sotto il clic. Scegline una per vederla sulla mappa con i dettagli, scaricare il file GPX originale o lasciare una recensione. Chiunque può vedere le tracce e le recensioni; per inviarne una serve l'accesso (vedi sotto).

### Data source

![Fonte dei dati](@site/static/img/promo/heatmap/datasource.webp)

Quante tracce corrispondono al filtro attuale, quando sono stati generati i dati e come vengono calcolati i colori. Ogni utente OSM viene contato al massimo una volta per cella, attività e mese, così un singolo utente molto attivo non può colorare un'intera regione.

_________________

## Esempio: sentieri per mountain bike in Alta Austria

Cerchiamo i percorsi MTB intorno a Kallham, Austria (48,38° N, 13,60° E) percorsi negli ultimi cinque anni.

**1. Scegli l'attività.** Premi **None**, espandi **Cycling** e spunta **Mountain biking**.

**2. Imposta il periodo.** Sposta il cursore sinistro della data su 2021-09 — le tracce più vecchie non servono.

**3. Imposta la densità.** Inserisci **3** in *Hide cells under … tracks*: restano solo i sentieri percorsi da almeno tre persone.

![Filtro MTB](@site/static/img/promo/heatmap/example-filter.webp)

La mappa ora mostra la rete di sentieri che i biker usano davvero:

![Heatmap MTB vicino a Kallham](@site/static/img/promo/heatmap/example-filter-map.webp)

**4. Zooma e clicca un sentiero.** Apri [questo punto a zoom 16](https://test.osmand.net/map/prototypes/heatmap.html#16/48.3388/13.6612) e clicca una delle linee.

![Zoom 16](@site/static/img/promo/heatmap/example-zoom16.webp)

La sezione **Review tracks** elenca le tracce sotto il clic, ognuna con attività, nome del file, lunghezza, data e distanza dal punto:

![Tracce sotto il clic](@site/static/img/promo/heatmap/example-tracks-list.webp)

**5. Seleziona una traccia.** Clicca una voce dell'elenco (o la linea sulla mappa): la traccia viene evidenziata sulla mappa e si apre la sua scheda — link alla traccia OSM, attività, lunghezza, data, tag e descrizione. **Download GPX** ti dà il file originale da OpenStreetMap con tempo e quota.

![Traccia selezionata](@site/static/img/promo/heatmap/example-track-selected.webp)

**6. Lascia una recensione.** Scegli un giudizio — *Correct*, *Wrong activity*, *Bad quality*, *Wrong line*, *Simulated* o *Not a track* —, indica facoltativamente l'attività corretta e un commento, poi premi **Send review**.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/promo/heatmap/example-verdict.webp').default} alt="Giudizio"/></td>
    <td><img src={require('@site/static/img/promo/heatmap/example-saved.webp').default} alt="Recensione salvata"/></td>
  </tr>
</table>

Il tuo giudizio viene salvato e mostrato accanto alla traccia nell'elenco. Le recensioni ci aiutano a migliorare la classificazione delle attività e a ripulire i dati.

:::tip Accedi per inviare recensioni
Le recensioni sono legate al tuo account **OsmAnd Cloud**. Prima di inviarne una, attiva il tuo account sul server di test su [test.osmand.net/map/account](https://test.osmand.net/map/account) — accedi con la stessa e-mail che usi per OsmAnd Cloud nell'app — poi torna alla heatmap. Per vedere tracce e recensioni non serve alcun account.
:::

_________________

## Suggerimenti

- L'URL conserva la posizione della mappa (`#zoom/lat/lon`), così puoi condividere il link di qualsiasi luogo.
- Le impostazioni Display restano salvate nel browser; i filtri si azzerano ricaricando la pagina.
- Per il classico look da heatmap usa la mappa *Dark* con la palette *Hot* o *Blue*.
- In una strada trafficata possono sovrapporsi migliaia di tracce; l'elenco mostra le 60 più vicine al clic.

## Dicci cosa ne pensi

La heatmap è un prototipo e il tuo feedback decide come si evolverà.

- **Sondaggio di 2 minuti** — come la usi e cosa manca: [modulo di feedback sulla Heatmap](https://docs.google.com/forms/d/e/1FAIpQLSfIb8eml7Fzu12BanlZo5229gURGgtUyuhcftAxisaAe6AALg/viewform)
- **Valuta le tracce** — zooma, clicca un sentiero che conosci e invia un giudizio. Bastano pochi secondi e migliora direttamente i dati (prima accedi con il tuo account OsmAnd Cloud su [test.osmand.net/map/account](https://test.osmand.net/map/account)).

_________________

<LinksSocial/>
<LinksTelegram/>
