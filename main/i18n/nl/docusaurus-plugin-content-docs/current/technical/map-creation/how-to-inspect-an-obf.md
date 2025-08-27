---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Een obf binair bestand inspecteren
versions: '*'
---

**_Dit artikel moet worden nagekeken_**

Als u de inhoud van een obf-bestand wilt inspecteren, moet u [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) downloaden. Daar vindt u een consoletoepassing Inspector (.sh, .bat). Deze consoletoepassing heeft optionele parameters [-vmap, -vaddress, -vtransport] en één vereiste parameter (invoer obf-bestand). Door optionele parameters op te geven, kunt u alle informatie uit het obf-bestand traceren (let op: het kan enorm zijn!).

Voorbeeld en stapsgewijze instructies voor Windows-gebruikers:
- Java Runtime Environment geïnstalleerd hebben
- download of kopieer een Osmand offline kaart van uw apparaat naar uw pc, plaats dat obf-bestand idealiter in de map met alle uitgepakte Mapcreator-bestanden
- Open Windows commandline (bijv. door op de Windows-toets en "r" te drukken, typ dan cmd en druk op enter
- ga naar de map waar u de Osmand-Mapcreator hebt uitgepakt met de opdracht cd en de mapnaam
- typ `dir` om te zien of u in de juiste map bent met het bestand inspector.bat
- typ `inspector -h` om wat helptekst te zien
- typ `inspector -vaddress name_of_your_map.obf \>output.csv`
- als u een Java-consolefout krijgt over onvoldoende geheugen of iets dergelijks, bewerk dan het bestand inspector.bat door het getal bij parameter -Xmx512M (of iets dergelijks) stap voor stap te verhogen naar een hogere waarde
- probeer dat (uiteindelijk zeer grote) CSV-tekstbestand te laden in een editor of programma dat zeer grote bestanden kan laden, zoals Kladblok++ ... of probeer een import in een spreadsheetprogramma zoals Excel of LibreOffice Calc (kies TAB als veldscheidingsteken)
- gebruik een zoekfunctie om plaatsnamen of straatnamen te vinden