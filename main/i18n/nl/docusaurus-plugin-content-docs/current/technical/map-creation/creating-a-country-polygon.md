---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Een landpolygoon maken
versions: '*'
---
**_Dit artikel moet worden nagekeken_**

Dit artikel beschrijft hoe je een polygoon maakt voor een ontbrekend land in geofabrik.de en hoe je deze polygoon toevoegt aan de kaartgeneratieserver van OsmAnd.

## Introductie {#introduction}

OsmAnd wordt geleverd met veel kaarten voor veel landen. De meeste kaarten worden gemaakt van "ruwe data" kaarten die zijn gedownload van [geofabrik.de](http://download.geofabrik.de). Geofabrik levert deze ruwe data kaarten gratis aan iedereen en zij leveren (commerciële) diensten en producten op basis van deze kaarten.

Geofabrik.de heeft de strategie om kaarten te leveren voor landen die door een groter aantal gebruikers of door hun klanten worden aangevraagd. Dit betekent dat sommige kaarten nooit op geofabrik terechtkomen, omdat er simpelweg niet genoeg aanvragen voor zijn (of helemaal geen), zoals sommige exotische landen zoals de Seychellen of Burundi, enz.

## Serverproces {#server-process}
Vanwege deze strategische beslissing van geofabrik heeft OsmAnd een optie om kaarten voor deze landen te genereren en de tools [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) en [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) worden hiervoor gebruikt. Voor OsmAndMapCreator is dit een proces in drie stappen:
- OsmAndMapCreator heeft een polygoon nodig die de buitenste grens van het land omringt.
- OsmAndMapCreator heeft de "ruwe data kaart" nodig van het volgende hogere niveau dat dit land omvat. Voor Burundi betekent dit dat OsmAndMapCreator de Afrika-kaart nodig heeft. Voor Noordrijn-Westfalen betekent dit dat OsmAndMapCreator de Duitsland-kaart nodig heeft.
- [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) maakt een "ruwe data" kaart van de polygoon door de kaartgegevens uit de "ouder" kaart te extraheren.
- OsmAndMapCreator maakt een OsmAnd obf-kaart op basis van de tussentijdse "ruwe data" kaart die door osmconvert is gegenereerd.

## Noodzakelijke acties {#necessary-actions}
Afhankelijk van de complexiteit van de (gegenereerde) polygoon kan deze complete reeks acties in totaal 10 minuten tot 2 uur duren.

### 1. Haal de OpenStreetMap-relatie op van Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Ga naar [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Vul de naam van uw land in
- Eenmaal gevonden, klik op de link "(details)"
- Scroll in Details naar "OSM: relation " en noteer of kopieer het relatie-ID-nummer.

### 2. Genereer de polygoon {#2-generate-the-polygon}
- Ga naar [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Vul (of plak) het "OSM: relation " ID-nummer dat u van Nominatim hebt opgehaald voor het gewenste land in het veld "Id of relation".
- Dit creëert een standaardpolygoon, bestaande uit 250 tot 3500 knooppunten (NPoints). De polygoon zelf is te vinden in de kolom "poly".
- In het geval van meer dan 350 knooppunten moet u de polygoon vereenvoudigen. Hoe eenvoudiger de polygoon, hoe sneller de landkaart kan worden gemaakt (uiteraard afhankelijk van de inhoud).

### 3. Vereenvoudig de polygoon {#3-simplify-the-polygon}
Het aantal knooppunten (NPoints) moet zo laag mogelijk zijn voor de snelst mogelijke creatie van de kaart door OsmAndMapCreator. Zoals vermeld: in het geval van meer dan 350 knooppunten, probeer ze te verminderen door de polygoon te vereenvoudigen.
- In het geval van meer dan 350 knooppunten, probeer ze te verminderen door te "spelen" met de X-variabele (naar mijn ervaring doen de andere er niet echt toe)
- Soms krijg je geweldige resultaten (90 NPoints, 200 NPoints, 270 NPoints) en dan ben je klaar met deze stap. Soms kun je gewoon niet onder de 450 NPoints komen. Dan moet je verdere handmatige stappen toepassen.
- Sla je uiteindelijke polygoon op in een bestand. Gebruik de juiste standaardnaam ervoor, zoals france.poly. Houd je aan kleine letters.

### 4. Verdere wijziging en vereenvoudiging van de polygoon {#4-further-modification-and-simplification-of-the-polygon}
- Open JOSM (download indien nodig) en open het polygoonbestand dat u hebt gemaakt (hebt u een kopie/back-up gemaakt van de originele polygoon die u hebt opgeslagen?).
- Voeg een achtergrond toe via het menu "Afbeeldingen" en selecteer de standaard "OpenStreetMap (Mapnik)" achtergrond.
- Verwijder handmatig knooppunten waar mogelijk. \*Opmerking:\* Houd de polygoon zo dicht mogelijk rond de grens. U hebt wel enige overlap nodig, maar probeer deze onder de 2-5 kilometer te houden. Overlap in landen wordt voor elk land twee keer gegenereerd. Minder overlap betekent minder rendertijd en renderfouten. Bij kustlijnen en rond eilanden probeer meer afstand te houden (20 kilometer). Dit wordt algemeen geaccepteerd en de zee is toch "leeg".
- Wanneer u het beste hebt gedaan wat u kunt, kunt u de bijgewerkte, gecorrigeerde polygoon opslaan. Zoals gezegd: probeer zo min mogelijk knooppunten te krijgen, maar soms is een landsgrens zo ingewikkeld dat u gewoon meer knooppunten nodig hebt om deze te beschrijven en de polygoon zo dicht mogelijk rond de grens te houden: zo zij het.
- **Upload de polygoon niet naar OSM**. JOSM zal u vragen om uw werk te uploaden naar OpenStreetMap. Doe dit niet voor deze polygonen, tenzij u precies weet wat u doet. Bijna elk land ter wereld is al perfect gedekt in OpenStreetMap (anders zou nominatim u de details over het land niet kunnen geven, en polygons.openstreetmap.fr zou de polygoon niet kunnen genereren op basis van het OSM-relatie-ID).

### 5. De polygoon toevoegen aan de OsmAnd-server {#5-adding-the-polygon-to-the-osmand-server}

Om dit te kunnen doen, moet u zich registreren als gebruiker.

Om de kaartgeneratie mogelijk te maken, zijn er twee stappen vereist:
- De polygoon toevoegen aan de kaartgegevenssectie
- Het land toevoegen aan het gegevensbestand dat wordt gebruikt om de OsmAnd obf-kaarten te genereren.

De polygoon toevoegen aan de kaartgegevenssectie
- Ga naar het webadres van de OsmAnd-ontwikkelingsserver op [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Selecteer de OsmAnd-misc sectie.
- Selecteer "fork" om uw eigen persoonlijke repository te maken
- Maak een nieuw bestand en kopieer uw polygoongegevens erin. Sla het bestand op.
- Maak een pull request.

De kaartcreatie toevoegen aan de batchlijst
- Ga naar het webadres van de OsmAnd-ontwikkelingsserver op [github.com/osmandapp](https://github.com/osmandapp/)
- Selecteer de OsmAnd-tools sectie.
- Selecteer "fork" om uw eigen persoonlijke repository te maken.
- Ga in uw persoonlijke repository naar de map obf-generation/regions.
- Selecteer het bestand indexes.xml en klik op bewerken.
- Voeg uw land toe op de relevante locatie en sla het bestand op.
- Maak een pull request.

## Uw eigen persoonlijke kaarten maken van een polygoon {#creating-your-own-personal-maps-from-a-poly}

U kunt bijvoorbeeld polygonen maken van landen, provincies/staten, regio's en steden.

Stel dat uw dochter een paar dagen met een vriendin naar Parijs gaat. Ze is niet geïnteresseerd in navigatie, wandelen of fietsen (tenzij absoluut noodzakelijk), maar ze wil wel weten waar ze is, waar ze heen moet en waar ze de interessante plaatsen (POI's) kan vinden. Daarnaast heeft ze een kleine telefoon (lage CPU, weinig geheugen) en een kleine SD-kaart (vol met muziek). De kaart moet dus zo klein mogelijk zijn: zowel voor opslag als voor prestaties. U kunt natuurlijk de kaart voor france\_ile-de-france.obf met Parijs downloaden, maar u kunt ook een "op maat gemaakte" Parijs-kaart genereren.
- Laat uw dochter OsmAnd downloaden, of nog beter: laat haar OsmAnd+ kopen
- Haal het OSM-relatie-ID voor Parijs op van Nominatim.
- Haal de (vereenvoudigde) polygoon voor het Parijs-ID op van polygons.openstreetmap.fr
- download of compileer [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert)
- download "ruwe data" kaart van Ile-de-France van geofabrik.de
- maak een ruwe data kaart van Parijs van de Ile-de-France kaart en de Parijs polygoon zoals:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Download de OsmAndMapCreator-applicatie van [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/")
- Maak uw OsmAnd obf-kaart van de Paris.osm.pbf-gegevenskaart met behulp van OsmAndMapCreator.