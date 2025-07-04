---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Come tradurre OsmAnd - Abbiamo bisogno del tuo aiuto! {#how-to-translate-osmand---we-need-your-assistance}


Apprezziamo molto il tuo aiuto nella traduzione di OsmAnd! Fornire traduzioni del testo visualizzato non è molto complicato, il modo preferito per fornire traduzioni di stringhe è descritto qui: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Se una lingua in cui vorresti aiutare a tradurre non è ancora elencata lì, apri un problema [qui](https://github.com/osmandapp/Osmand/issues) (richiede un account github).
* I file di lingua esistenti potrebbero anche essere modificati modificando il rispettivo file _strings.xml_ direttamente nel nostro codice tramite i meccanismi di github, ma questo non è il modo preferito.
* Solo per riferimento: le stringhe master sono conservate nel [file strings.xml in inglese americano](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). I dati delle stringhe per l'estrattore di dati della mappa si trovano nei file `swing_messages_{language}.properties` nel progetto [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(NOTA Hardy: il link è rotto!)**.

Grazie per il tuo aiuto!

## Alcune domande e risposte frequenti: {#some-frequent-questions-and-answers}

#### D1: Quali stringhe devo tradurre? {#q1-which-strings-should-i-translate}
Lo strumento Weblate è autoesplicativo. Solo se provi a modificare i file direttamente:
* In `strings.xml`, le stringhe appaiono come `<string name="shared_string_save_as_gpx">Salva come traccia GPX</string>`. Traduci solo la parte `Salva percorso come traccia GPX`.
* In `swing_messages.properties`, le stringhe appaiono come `IndexCreator.INDEX_CITIES=Indicizzazione città...`. Traduci solo la parte destra `Indicizzazione città...`.

#### D2: Non voglio creare in Weblate o github, posso semplicemente inviarti il file? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Sì, puoi inviare il file via email, ma prova i modi preferiti, è facile.

#### D3: Come devo controllare cosa è cambiato nel file __English strings.xml__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Utilizza Weblate come descritto sopra, ti mostrerà tutte le modifiche. Se vuoi controllare manualmente la sorgente rispetto al tuo file: le nuove stringhe vengono solitamente aggiunte all'inizio del file di risorse della lingua master. Puoi scaricarlo e utilizzare un'utilità come pspad o vim per confrontarli. Puoi anche utilizzare *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* o la cronologia del file su github per visualizzare le ultime modifiche.

## Quali lingue saranno incluse in OsmAnd? {#what-languages-will-be-included-in-osmand}

> Cari traduttori,
>
> Grazie mille a tutti per i vostri sforzi per completare le traduzioni della nostra lingua di visualizzazione e anche per localizzare OsmAnd in sempre più lingue su [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Si prega di notare quanto segue: sono felice di includere nel menu di selezione della lingua di visualizzazione di OsmAnd qualsiasi nuova lingua con un tasso di traduzione >10% (la contrassegnerò come "incompleta" finché non raggiungerà circa l'80%). Si prega di aprire un problema con OsmAnd se avete bisogno che questo venga fatto, controllo solo sporadicamente queste cifre su Weblate.
>
> Sfortunatamente, le lingue con codici ISO 639-2 a 3 lettere sembrano attualmente avere problemi in Android, vedere ad esempio * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Ciò significa che, sfortunatamente, qualsiasi lingua di questo tipo potrebbe non essere visualizzata nei menu di OsmAnd sul tuo dispositivo. (Questo problema riguarda solo la lingua utilizzata nei menu dell'app, non nella mappa, ovviamente.)
>
> Grazie,
> Dr. Hardy Mueller