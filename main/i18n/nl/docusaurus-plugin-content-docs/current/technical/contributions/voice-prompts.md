---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Navigatiesteminstructies {#navigation-voice-prompts}


## 1. Enkele basisprincipes {#1-some-basics}

* OsmAnd ondersteunt zowel door Text-to-Speech (TTS) gesynthetiseerde instructies als vooraf opgenomen stemmen.
* Het gebruik van een TTS-stem heeft de voorkeur, het is flexibeler en kan bijvoorbeeld ook de namen van plaatsen of straten uitspreken.
* Vooraf opgenomen stemmen worden alleen aanbevolen als terugval als uw apparaat helemaal geen TTS ondersteunt in de geselecteerde taal.
* Om TTS te gebruiken, moet uw apparaat een geïnstalleerde TTS-engine hebben die de taal ondersteunt die u wilt horen. De meeste apparaten worden geleverd met een of twee reeds vooraf geïnstalleerde engines. Alleen voor minder gangbare talen moet u mogelijk een TTS-engine van derden vinden en installeren.
* Voor welke gebeurtenis steminstructies worden aangeboden, en hun timing, wordt bepaald door de OsmAnd-stemroutercode.
* Maar de woordenschat en zinsconstructie voor elke taal worden gespecificeerd in een configuratiebestand _xx-yy_tts.js_, waarbij xx de ISO 639-1-taalcode is en yy een optionele regionale of vergelijkbare specificatie. Alleen voor opgenomen stemmen is een extra submap _voice_ vereist met alle benodigde opgenomen uitdrukkingen als _.ogg_-bestanden.
* De map-/bestandsconventie op het apparaat is `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

De _tts.js_-configuratiebestanden moeten een koptekst bevatten zoals hieronder, die bijhoudt welke specifieke functies zijn geïmplementeerd en geverifieerd voor het betreffende bestand:

```
// GEÏMPLEMENTEERDE (X) of ONTBREKENDE ( ) FUNCTIES, (N.V.T.) indien niet nodig in deze taal:
//
// (X) Basis navigatie-instructies: route (her)berekend (met afstand- en tijdsondersteuning), afslagen, rotondes, U-bochten, rechtdoor/volgen, aankomst
// (X) Aankondigen van namen van nabijgelegen punten (bestemming / tussenpunt / GPX-waypoint / favorieten / POI)
// (X) Aandacht instructies: SNELHEIDSCAMERA; SNELHEIDSBEPERKING; GRENSCONTROLE; SPOORWEG; VERKEERSDREMPEL; TOLHUISJE; STOP; VOETGANGER; MAXIMUM; TUNNEL
// (X) Overige instructies: gps verloren, van route af, terug naar route
// (X) Straatnaam en voorzetsels (op / aan / naar) en straatbestemming (richting) ondersteuning
// (X) Afstandseenheid ondersteuning (meters / voet / yard)
// (N.V.T.) Speciale grammatica: (specificeer welke)
// (X) Ondersteuning voor het aankondigen van snelwegafslagen
```

## 2. Stemtalen en varianten {#2-voice-languages-and-variants}

* Sommige veelvoorkomende spraakpakketten zijn vooraf geïnstalleerd in OsmAnd, andere vereisen een eenmalige download. (Houd er rekening mee dat ook de vooraf geïnstalleerde pakketten lijken alsof ze een download zijn.)
* Voor sommige talen bieden we verschillende regionale varianten aan. Het horen van de overeenkomstige regionale uitspraak hangt af van de mogelijkheden van uw apparaat.
* Voor sommige stemmen bieden we ook extra varianten aan met bijvoorbeeld kortere ('informele') instructies of sommige instructies gedempt om de spraakzaamheid te verminderen.

## 3. Testen van steminstructies {#3-testing-of-voice-prompts}

U kunt tijdelijk de OsmAnd-ontwikkelingsplug-in inschakelen, vervolgens naar de instellingen gaan en de knop `Test steminstructies` gebruiken. Deze biedt verschillende aankondigingsvoorbeelden voor elk type OsmAnd-instructie, met een breed scala aan getallen om de tijd-/afstandsopmaak en uitspraak te testen. De knoptekst geeft de basisinhoud van de instructie weer, de exacte bewoording wordt gespecificeerd in het tts.js-bestand dat u test.
Er is ook een testknop die uw apparaatinstellingen en taalcapaciteiten toont.

Tijdens de navigatie kan de huidige steminstructie altijd worden geactiveerd door op de afslagpijlwidget te tikken.

## 4. Een nieuwe TTS-stemtaal/-variant maken {#4-creating-a-new-tts-voice-languagevariant}

Enkele tips:

- OsmAnd levert alleen de bewoording, woordvolgorde, grammatica in termen van verbuigingen, naamvallen, enkelvoud/meervoud, enz., terwijl de uitspraak wordt uitgevoerd door de TTS-engine die u op het apparaat gebruikt (er zijn ingebouwde en externe engines)
- Dit gebeurt in één stemdefinitiebestand per taal. Op GitHub bevinden de bestanden zich [hier](https://github.com/osmandapp/OsmAnd-resources/tree/master/voice), en zie hierboven voor de map-/bestandsconventies op uw apparaat lokaal.
- Het bestand is nu in js (gemigreerd van voormalig PROLOG om het gangbaarder te maken).
- Om een nieuw configuratiebestand te maken, begint u met klonen van _en\_tts.js_, d.w.z. gebruik dat als sjabloon.
- Het kan dan nuttig zijn om te kijken naar bestaande configuratiebestanden voor grammaticaal complexere talen (bijv. Duits, Tsjechisch of Slowaaks) om te kijken naar bestaande oplossingen voor speciale grammatica, woordvolgorde, getalvorming, enz. Kijk vooral naar talen die vergelijkbaar zijn met de uwe.
- U kunt uw eigen tts-bestand (of uw verbeteringen aan bestaande) zelf lokaal testen, voordat u een pull-aanvraag indient, plaats het gewoon op uw apparaat met de juiste bestands-/mapconventie.