---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Aangepaste reisgids maken
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Dit artikel moet worden nagekeken_**

Met OsmAnd [MapCreator](../../versions/map-creator.md) kunt u uw eigen unieke, aangepaste [Reisgids](../../user/plan-route/travel-guides.md) maken. U kunt tekst uit elke bron (van Wikipedia tot de blog van uw vriend) gebruiken als basis voor een gids en deze koppelen aan het GPX-spoor.

### De bestanden voorbereiden {#prepare-the-files}

Sla uw spoor op met de extensie *[.GPX](../osmand-file-formats/osmand-gpx.md)* en het tekstbestand als *.html*. Om uw aangepaste *Reisgids* succesvol te maken, moeten de namen van het GPX-bestand en het html-bestand identiek zijn. Bijvoorbeeld, *Milaan.gpx* en *Milaan.html*.
De GPX-sporen kunnen van internet worden gedownload of u kunt er een maken [met OsmAnd](../../user/plan-route/create-route.md) of een ander GPX-creatieprogramma (Brouter, of een vergelijkbaar programma).
Voeg de punten die u wilt bezoeken toe aan uw route en sla die route vervolgens op als een GPX-spoor.

Het kiezen van de bron voor de tekst van uw gids is geheel aan u. Het kan een artikel in een reisblog zijn, een Wikipedia-pagina, enz. Kopieer eenvoudig de tekst, plak deze vervolgens in een teksteditor en sla deze op met een *.html*-extensie. Zorg ervoor dat de naam van het GPX-spoor en het HTML-bestand identiek zijn.

### De tool starten {#launch-the-tool}

Download de nieuwste versie van [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) en pak de bestanden uit het archief uit.

:::note
Hoe u deze tool gebruikt, wordt beschreven in het artikel [Offline raster- en vectorkaarten maken](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Start uw console en open de MapCreator-map.

Voorbeeld: `cd /home/user/OsmAndMapCreator-main/`

Voor *Linux* voert u ./utilites.sh (*Windows*: utilities.bat-bestand) travel-guide-creator uit.

Wanneer u wordt gevraagd om het pad op te geven, plakt u het pad naar de map waar u uw bestanden hebt voorbereid.

Voorbeeld: `cd /home/user/MyCustomGuides/`

We raden u af om uw bestanden in de map *OsmAnd MapCreator* zelf te plaatsen. Raadpleeg het *Read me*-bestand voor stapsgewijze commando's.

### Bestanden importeren {#import-files}

Uw bestand zou binnen enkele seconden moeten worden gemaakt. Standaard krijgt het de naam *travel_guide.sqlite*, maar u kunt het een andere naam geven. Zorg ervoor dat u het opslaat met de bestandsextensie *sqlite*. Bijvoorbeeld, *Milaan_weekend_tour.sqlite*. Daarna moet u het overbrengen naar uw apparaat. Specifiek, naar de map waar OsmAnd-reisgidsen worden opgeslagen. U kunt het pad naar die map controleren in *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Kopieer het bestand daarheen met behulp van een mobiele bestandsbeheerder of door uw telefoon met de computer te verbinden. Start de app opnieuw op.

### Uw gids gebruiken {#use-your-guide}

Nadat u de app hebt gestart, gaat u naar het menu *[Reisgidsen](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Gebruik de zoekfunctie om nieuwe artikelen te bekijken.