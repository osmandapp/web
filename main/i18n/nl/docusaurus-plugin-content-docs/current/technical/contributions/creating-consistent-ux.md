---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Een consistente gebruikerservaring creëren {#creating-a-consistent-user-experience}

De bruikbaarheid van onze complexe functies wordt doorslaggevend verbeterd door de bewoording en goede vertalingen, en zoveel mogelijk consistentie. Het is de moeite waard om even na te denken over veel uitdrukkingen of zinnen. :)

Let op het volgende:

## 1. Consistente bewoording {#1-consistent-wording}

Gebruik slechts **één uitdrukking** voor een bepaalde functie, meng geen twee mogelijke uitdrukkingen. Voorbeelden:

* Controleer op bestaande uitdrukkingen en hergebruik deze in nieuwe strings
* Gebruik overal _"navigatie"_, niet _"routering"_.
* Gebruik _"tracking"_, niet _"monitoring"_
* We gebruiken _"positie"_ voor waar u bent, terwijl _"locatie"_ verwijst naar willekeurige punten
* We gebruiken _"bestemming"_, niet _"doel"_
* We gebruiken _"snelheid"_, niet _"velocity"_
* Ken het verschil tussen _"hoogte"_ en _"altitude"_
* Het is nu _"OsmAnd"_, niet _"Osmand"_ :)

## 2. Tekst schrijven {#2-authoring-text}

* Probeer bestaande stringconstanten zoveel mogelijk te hergebruiken, dit is goed voor het geheugen en de prestaties.
* Voor zeer herbruikbare strings 'XXX' hebben we vaak een `shared_string_XXX`
* Strings worden vaak hergebruikt! Wanneer u bestaande strings wijzigt, controleer dan dubbel alle voorkomens ervan in de code
* Onnodige tekst rommelt schermen op zonder veel te helpen. Wees kort en precies, voeg alleen woorden toe die _noodzakelijke_ informatie overbrengen.
* Controleer de weergave van de bewoording in de app, met name op apparaten met een lage dichtheid. Te veel regeleinden, afgesneden tekst of opgeblazen menuknoppen kunnen een scherm of dialoog onbruikbaar maken.
* In sommige gevallen zijn er conventies, die het waard zijn om te controleren, in plaats van "iets uit te vinden". Dus als 99% van de commerciële navigatiesystemen in uw taal aankondigt "u heeft uw bestemming bereikt", dan is het gebruik van "u bent aangekomen waar u wilde zijn" misschien niet de beste keuze... :)
* Markeer duidelijk alle functies die internettoegang vereisen met de uitdrukking "online".
* De basistaal voor OsmAnd is Amerikaans Engels. Er is een vertaalmap voor Brits Engels voor alle uitdrukkingen en spelling die verschilt.

## 3. Rendering {#3-rendering}

* Een opmerking over rendering: De kaartweergave van onze kaartstijlen is getest op bruikbaarheid en zichtbaarheid op een veelheid aan kaartlocaties, met veel apparaten en schermtechnologieën, en onder verschillende lichtomstandigheden. _"Spontane verbeteringen"_ aan de renderer zijn bijna altijd twijfelachtig, en vereisen op zijn minst meer onderzoek en testen dan u misschien denkt... :)