---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Hoe OsmAnd te vertalen - Wij hebben uw hulp nodig! {#how-to-translate-osmand---we-need-your-assistance}


Wij waarderen uw hulp bij het vertalen van OsmAnd enorm! Het leveren van vertalingen van weergaveteksten is niet erg ingewikkeld, de voorkeursmethode om stringvertalingen te leveren wordt hier beschreven: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Als een taal waarnaar u wilt helpen vertalen nog niet is vermeld, open dan een issue [hier](https://github.com/osmandapp/Osmand/issues) (vereist een GitHub-account).
* Bestaande taalbestanden kunnen ook worden gewijzigd door het betreffende _strings.xml-bestand_ rechtstreeks in onze code te bewerken via GitHub-mechanismen, maar dit is niet de voorkeursmethode.
* Ter referentie: master-strings worden bewaard in het [Amerikaans-Engelse strings.xml-bestand](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). De stringgegevens voor de kaartdata-extractor bevinden zich in de `swing_messages_{language}.properties`-bestanden in het [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing)-project **(LET OP Hardy: link is kapot!)**.

Bedankt voor uw hulp!

## Enkele veelgestelde vragen en antwoorden: {#some-frequent-questions-and-answers}

#### V1: Welke strings moet ik vertalen? {#q1-which-strings-should-i-translate}
De Weblate-tool is vanzelfsprekend. Alleen als u bestanden rechtstreeks probeert te bewerken:
* In `strings.xml` zien strings eruit als `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. Vertaal alleen het deel `Save route as GPX track`.
* In `swing_messages.properties` zien strings eruit als `IndexCreator.INDEX_CITIES=Indexing cities...`. Vertaal alleen het rechterdeel `Indexing cities...`.

#### V2: Ik wil niet aanmaken in Weblate of GitHub, kan ik u het bestand gewoon sturen? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Ja, u kunt het bestand e-mailen, maar probeer alstublieft de voorkeursmethoden, het is eenvoudig.

#### V3: Hoe controleer ik wat er is veranderd in de __Engelse strings.xml__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Gebruik Weblate zoals hierboven beschreven, het toont u alle wijzigingen. Als u de bron handmatig wilt controleren ten opzichte van uw bestand: Nieuwe strings worden meestal bovenaan het mastertaalbronbestand toegevoegd. U kunt het downloaden en een hulpprogramma zoals pspad of vim gebruiken om ze te vergelijken. U kunt ook *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* of de bestandshistorie op GitHub gebruiken om de laatste wijzigingen te bekijken.

## Welke talen worden opgenomen in OsmAnd? {#what-languages-will-be-included-in-osmand}

> Beste vertalers,
>
> Hartelijk dank voor al uw inspanningen om onze weergavetaalvertalingen te voltooien, en ook om OsmAnd in steeds meer talen te lokaliseren op [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Let op het volgende: Ik neem graag elke nieuwe taal met een vertaalpercentage van >10% op in het keuzemenu voor de weergavetaal van OsmAnd (zal het markeren als "onvolledig" totdat het ~80% bereikt). Plaats alstublieft een issue bij OsmAnd als u dit gedaan wilt hebben, ik bekijk deze cijfers op Weblate slechts sporadisch.
>
> Helaas lijken talen met ISO 639-2-codes van 3 letters momenteel problemen te hebben in Android, zie bijvoorbeeld: * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Dit betekent dat, helaas, een dergelijke taal mogelijk niet wordt weergegeven in de OsmAnd-menu's op uw apparaat. (Dit probleem heeft alleen invloed op de taal die wordt gebruikt in de app-menu's, niet op de kaart, natuurlijk.)
>
> Bedankt,
> Dr. Hardy Mueller