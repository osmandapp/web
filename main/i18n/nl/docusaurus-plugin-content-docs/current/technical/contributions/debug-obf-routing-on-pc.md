---
source-hash: 07c0ae968b6fbc9eae5d8ad2f409109fd8923c80ddab63d2f07f3c692f96ba59
sidebar_position: 5
---

# OBF-routering debuggen op een pc {#debug-obf-routing-on-a-pc}


- ga naar [https://osmand.net](https://osmand.net "https://osmand.net") en download [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") via de link aan de rechterkant van het scherm, en pak het uit,
- kopieer het OBF-bestand van je telefoon of tablet naar die map,
- start OsmandMapCreator via een bat-bestand of sh-bestand,
- zorg voor een internetverbinding zodat mapcreator kaarttegels kan downloaden, controleer alle menu's en instellingen in mapcreator,
- stel de werkmap van mapcreator in op de map waar mapcreator zelf en het OBF-bestand zich bevinden.
- pan en zoom de kaart naar de plaats waar je routeringsproblemen hebt en die wordt gedekt door het genoemde OBF-bestand,
- klik met de rechtermuisknop op de kaart om start- en eindpunten en verschillende routeringsengines in te stellen

Vind de plaatsnaam waarmee een straat is geassocieerd in offline OBF-kaarten
- Zorg dat er een Java-framework op je desktopcomputer is geïnstalleerd.
- Download OsmAndMapCreator, bijvoorbeeld van [download.osmand.net/releases](https://download.osmand.net/releases/) en pak het uit naar je pc.
- Neem een willekeurig kaartbestand met de extensie OBF en plaats het in dezelfde map waar alle bestanden van mapcreator zich bevinden.
- Start OsmAndMapCreator op je pc door `OsmAndMapCreator.bat` of `OsmAndMapCreator.sh` uit te voeren
- Zorg ervoor dat je internettoegang hebt op je pc, en dat de instellingen van Mapcreator zo zijn dat tegels worden gedownload wanneer je de kaart naar je locatie sleept en inzoomt waar je probleem zich bevindt.
- Als je bent ingezoomd op je gebied, klik dan met de rechtermuisknop op de kaart en kies "adres tonen" uit het pop-upmenu.
- Normaal gesproken zouden nu alle straatnamen uit het OBF-bestand moeten worden weergegeven, en de plaatsnaam waarmee elke straat is geassocieerd in OsmAnd's offline zoekfunctie.