---
source-hash: 1f3d617b7cbeec60a46ac2de62365a32fbe7c0b18d256e5efb0c6e968e640f3b
sidebar_position: 4
title:  Kaarten & Gegevens
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Kaarten {#maps}

### Waarom biedt OsmAnd geen toegang tot Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

OsmAnd is ontworpen om OpenStreetMap (OSM) te ondersteunen en geeft zoveel mogelijk prioriteit aan dit pad. Daarnaast zijn er licentiebeperkingen die het niet toestaan dat OsmAnd wordt gedistribueerd met gegevens van Google Maps.

### Kaarten laden traag op Android 11, 12 (SD-kaart) {#maps-slowly-loading-on-android-11-12-sd-card}

Vanwege de nieuwe [regels voor opslagtoegang die zijn geïntroduceerd in Android 11 en 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), kunnen gebruikers tragere prestaties ervaren bij het openen van kaarten die op SD-kaarten zijn opgeslagen. Deze wijzigingen kunnen ook zichtbaarheids- en toegangsbeperkingen veroorzaken voor bestanden in mappen op de SD-kaart. Meer discussies en technische inzichten zijn te vinden op de volgende links: [Reddit-discussie](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Op dit moment zijn de volgende oplossingen beschikbaar:

#### 1. Migreer de OsmAnd-gegevensopslagmap naar "Intern app-geheugen" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- U kunt de opslagmap wijzigen door de optie ***Intern app-geheugen*** te selecteren in *Menu → Instellingen → OsmAnd-instellingen → Gegevensopslagmap*.

- Houd er echter rekening mee dat het interne geheugen vaak beperkt is. Als tijdelijke oplossing kunt u belangrijke bestanden naar het interne geheugen verplaatsen en zelden gebruikte kaarten op de SD-kaart bewaren. Gebruik een bestandsbeheerder om deze bestanden handmatig over te zetten wanneer dat nodig is.

Het ontwikkelingsteam is actief op zoek naar efficiëntere oplossingen om de prestaties van de SD-kaart onder het nieuwe opslagbeleid van Android te verbeteren.

#### 2. Gebruik de "Download"-map van de SD-kaart {#2-use-the-sd-cards-download-folder}

U kunt proberen het probleem van het traag laden van kaarten op te lossen door de **Download**-map van de SD-kaart op te geven voor OsmAnd-opslag onder *Menu → Instellingen → OsmAnd-instellingen → Gegevensopslagmap → Handmatig opgegeven*. De volgende paden zijn mogelijk:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Dit pad kan fouten veroorzaken bij het openen van meerdere bestanden. U kunt bijvoorbeeld de Wereldoverzichtskaart downloaden, maar andere regio's verschijnen mogelijk niet.

- ***/storage/XXXX-XXXX/Download***  
   Dit pad zou consistent moeten werken voor het downloaden van kaarten en andere gegevens. Let er echter op dat OsmAnd bestanden die door andere apps of programma's (bijv. SasPlanet) naar deze map zijn geschreven, niet zal herkennen. Voor meer details, zie [deze gids](../../technical/map-creation/create-offline-maps-yourself.md).

De "XXXX-XXXX" vertegenwoordigt het unieke identificatienummer van uw SD-kaart, dat soms te vinden is in het mappad onder de opties *Externe opslag 2* of via andere methoden kan worden gevonden. Meer onderzoek en details over deze oplossing zijn [hier](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744) beschikbaar.

#### 3. "Media"-opslagoptie {#3-media-storage-option}

Als eerdere oplossingen niet werken of beperkt lijken, kunt u proberen de "Media"-opslagoptie te gebruiken om problemen met het traag laden van kaarten of opslagtoegang op te lossen. Deze methode maakt het mogelijk een map te selecteren die toegankelijk is voor OsmAnd en andere apps, wat met name handig is voor externe of verwijderbare opslag.

### Een "algemeen toegankelijke" OsmAnd-gegevensopslagmap kiezen met behulp van de "Media"-opslag {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android is strenger geworden met opslagrechten, waardoor de toegang tot app-specifieke mappen vaak wordt beperkt, vooral bij nieuwe installaties of systeemupgrades. De standaard gegevensopslag van OsmAnd kan beperkt zijn, waardoor deze onzichtbaar is voor andere apps of zelfs bestandsbeheerders. Veel gebruikers willen kaarten en gegevens opslaan in toegankelijke externe opslag voor back-up, synchronisatie of handmatig bestandsbeheer.

OsmAnd heeft echter niet de *Toegang tot alle bestanden*-machtiging (vanwege de beperkingen van Google), wat de keuze van mappen beperkt. Een oplossing is het gebruik van de "Media"-opslagmap, waaraan Android doorgaans bredere lees-/schrijftoegang verleent. Om dit te doen:

- Ga naar *OsmAnd’s Instellingen → OsmAnd-instellingen → Gegevensopslagmap* en bekijk de beschikbare opslagruimtes. Gebruik de indicator voor vrije ruimte om de doelopslag te identificeren, vaak aangeduid als *Externe opslag 2*.
- Noteer het huidige mappad, dat eruit kan zien als */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Schakel over naar de optie *Handmatig opgegeven* en wijzig het pad naar een voor media toegankelijke map. Op veel systemen werkt het wijzigen van */Android/data/* naar */media/* (bijv. ***/storage/xxxx-xxxx/media***). Sommige systemen vereisen mogelijk andere padaanpassingen.

Een correct pad zal OsmAnd niet vragen om schrijfrechtenfouten. Voordat u deze wijzigingen aanbrengt, moet u ervoor zorgen dat OsmAnd de juiste opslagrechten heeft, inclusief de "Media"-opslagmachtiging, onder de **Apps**-instellingen van Android. In nieuwere Android-versies kunnen deze machtigingen zich in geavanceerde of verborgen menu's bevinden.

### Kaartgegevens verwijderen na de app-update (als "Multiuser Storage 1" is geselecteerd) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

In de Android-versie van OsmAnd kan het selecteren van *Multiuser Storage 1* als opslaglocatie leiden tot het verwijderen van alle [lokale kaarten](../personal/maps-resources.md#local) wanneer de app automatisch wordt bijgewerkt, bijvoorbeeld van versie 4.1.9 naar 4.1.10, 4.1.11 of later (**Android 11, 12**). Dit probleem is gedocumenteerd op [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Om te voorkomen dat u uw kaartgegevens verliest tijdens updates, kunt u de volgende oplossingen overwegen:

1. *Maak een back-up van uw bestanden*. Maak voordat u OsmAnd bijwerkt een [back-up](../personal/import-export.md) van de kaarten die zijn opgeslagen in *..Android/obb/net.osmand*. Herstel na het bijwerken de bestanden voordat u de bijgewerkte OsmAnd-app start.

2. *Wijzig het opslagpad*. Verplaats de OsmAnd-map naar een locatie die door alle apps beschrijfbaar is (bijv. Wi-Fi FTP-server, X-plore, of via een USB-kabel naar een pc). Wijzig het mappad van:
   - /storage/emulated/0/Android/**obb**/net.osmand
   naar
   - /storage/emulated/0/Android/**media**/net.osmand.


### Geen kaartweergave voor Google Pixel-apparaten {#no-maps-rendering-for-google-pixel-devices}

Voor de OsmAnd 4.2 Android-versies kan de [kaartweergave mislukken](https://github.com/osmandapp/OsmAnd/issues/15045) op Google Pixel-apparaten, waardoor gebruikers een leeg wit scherm zien in plaats van een kaart.

Om dit probleem op te lossen, schakelt u over naar OpenGL-rendering:

- Navigeer naar *OsmAnd-menu → Instellingen → OsmAnd-instellingen → Kaartweergave-engine → Versie 2 (OpenGL)*.
- Herstart OsmAnd om de wijzigingen toe te passen.


### Trage kaartweergave in OsmAnd oplossen {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Om het probleem van trage kaartweergave op te lossen, vooral bij het gebruik van offline vectorkaarten, moeten de volgende stappen worden ondernomen:

1. **Schakel onnodige kaartfuncties uit.** Schakel 3D-reliëf, contourlijnen, schaduwreliëf en hellingen uit, die de benodigde verwerkingskracht voor het weergeven van kaarten aanzienlijk kunnen verhogen. U kunt dit doen in *Menu → Kaart configureren*.

2. **Vereenvoudig kaartdetails.** Verberg minder kritieke elementen zoals grenzen, POI's, OSM-notities, weerlagen, extra details (*Menu → Kaart configureren → Kaartweergave*) om de kaartweergave te stroomlijnen en de snelheid te verbeteren.

3. **Beperk het aantal weergegeven POI's.** Geef alleen de belangrijkste POI's weer of beperk de categorieën die tijdens de navigatie worden weergegeven, wat kan helpen de kaartweergave te versnellen. U kunt deze instellingen openen in *Menu → Navigatie → Instellingen*.

4. **Pas de kaartvergroting aan.** De instelling voor kaartvergroting kan een belangrijke factor zijn bij het vertragen van de kaart. Stel de vergroting in op 100% door lang op de **"+"** of **"-"** knop op het kaartscherm te drukken om de weergave te optimaliseren.

5. **Schakel automatisch zoomen uit.** Automatisch zoomen kan leiden tot frequent opnieuw tekenen van de kaart tijdens de navigatie, wat vertragingen veroorzaakt. Schakel automatisch zoomen uit in *Menu → Instellingen → Profiel → Navigatie-instellingen → [Kaart tijdens navigeren](../navigation/guidance/map-during-navigation.md)*.

6. **Gebruik alleen offline kaarten.** Online kaarten, vooral wanneer ze niet van tevoren zijn gedownload, kunnen het laden van de kaart vertragen. Schakel over naar het gebruik van alleen offline kaarten voor een soepelere prestatie.

Deze wijzigingen zouden de tijd die nodig is om kaarten weer te geven moeten verminderen, vooral tijdens de navigatie. Voor meer gedetailleerde configuratie-opties, raadpleeg de [Gids voor Kaartinstellingen](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Contourlijnen {#contour-lines}

### Is er een manier om contourlijnen in voet in plaats van meters weer te geven? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Ja, contourlijnen kunnen in voet in plaats van meters worden weergegeven. Voordat u de contourlijngegevens downloadt, kiest u tussen Voet of Meters: [lees er hier meer over](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Contourlijnen, hoogtegegevens of 3D-reliëf worden niet weergegeven {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Controleer of de gegevens van de juiste regio zijn gedownload. Ga naar ***Menu → Kaarten & bronnen → Downloads → Uw regio***. [Hoe kaarten te downloaden](../start-with/first-steps.md#how-to-download-maps).
- Controleer of de [plugin](../plugins/topography.md#required-setup-parameters) is ingeschakeld en zichtbaar is in ***Menu → Plugins → Topografie***.
- Controleer of de items in de sectie Topografie zijn ingeschakeld in ***Menu → Kaart configureren → Topografie → Contourlijnen / Terrein / 3D-reliëf***.
- Controleer uw aankopen: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Werk de app bij naar de nieuwste versie.
- Verwijder en download de vereiste kaarten opnieuw om er zeker van te zijn dat er geen beschadigde bestanden zijn.
- Herstart OsmAnd om de instellingen en gegevens te vernieuwen.


## Zoeken {#search}

### Gestructureerd zoeken naar adres (stad → straat → huis) vindt het huis niet {#structured-city--street--house-address-search-doesnt-find-the-house}

Als u probeert een locatie te zoeken met de structuur *Stad → Straat → Huisnummer* en er geen resultaten worden geretourneerd, overweeg dan de volgende tips en mogelijke oorzaken:

> **Tip**: Probeer een volledige tekstzoekopdracht zonder de stad op te geven, aangezien het adres mogelijk onder een andere stad wordt vermeld.

**Mogelijke problemen:**

- **Huis ontbreekt**. Het huis staat mogelijk niet op OpenStreetMap, of het kan aanwezig zijn maar zonder toegewezen nummers. U kunt dit controleren met een voorbeeld [hier](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Onjuiste straatnaam**. De straatnaam die aan het huis is gekoppeld, kan onjuist zijn in OpenStreetMap. Controleer de `addr:street`-tag om ervoor te zorgen dat de straatnaam exact overeenkomt met die in de tag-informatie van de straat.

- **Probleem met Nominatim**. Het huis kan aanwezig zijn in OpenStreetMap, maar niet worden gevonden via Nominatim (de zoekmachine die door OpenStreetMap wordt gebruikt). U kunt meer leren over hoe u adresgerelateerde problemen kunt oplossen [hier](https://wiki.openstreetmap.org/wiki/Addresses).

- **Mogelijk probleem in OsmAnd**. Als het huis aanwezig is in Nominatim maar nog steeds niet wordt gevonden in OsmAnd, kan het probleem specifiek zijn voor OsmAnd. U kunt bijdragen aan het oplossen hiervan door verder onderzoek te doen. Meer details zijn te vinden in dit [technische artikel](../../technical/algorithms/trace-address-search-issues.md).


## Tracks en Punten {#tracks-and-points}

### Hoe verschillende plaatsen op de kaart te markeren {#how-to-mark-different-places-on-the-map}

U kunt op verschillende manieren notities achterlaten en locaties op de kaart markeren, elk met een ander doel:

- *[Favorieten](../personal/favorites.md)*. Dit zijn permanente punten op de kaart waar u beschrijvingen kunt toevoegen. Om een Favoriet te maken, *lang tikken → tik op Toevoegen*. Favorieten zijn ideaal voor het markeren van plaatsen die u vaak bezoekt of wilt bewaren voor toekomstig gebruik.

- *[Markeringen](../personal/markers.md)*. Markeringen zijn tijdelijke punten, vaak gebruikt voor navigatie of planning. Ze kunnen de afstand tot uw huidige locatie of een ander punt tonen en kunnen snel worden verwijderd wanneer ze niet langer nodig zijn. Om een Markering toe te voegen, *lang tikken → tik op Markering*.

- *[Routepunten](../map/tracks/index.md#types-of-tracks)*. Routepunten worden geplaatst langs routes die u maakt, en helpen u specifieke stops of locaties langs uw reis te markeren. U kunt ook beschrijvingen aan deze punten toevoegen. Om een routepunt toe te voegen, *lang tikken op de kaart → Route → toevoegen als tussenpunt*.

- *[Audio-/videonotities](../plugins/audio-video-notes.md)*. Met deze notities kunt u audio-, video- of fotobestanden aan specifieke locaties op de kaart koppelen. Om dit in te schakelen, activeert u de Audio-/videonotities-plugin in *OsmAnd-menu → Plugins*. Om er een toe te voegen, *lang tikken → Acties → kies het vereiste bestand om bij te voegen*.

- *[OSM-notities](../plugins/osm-editing.md#create--modify-osm-note)*. Dit zijn meldingen die u kunt maken om fouten of ontbrekende informatie op OpenStreetMap te markeren. Schakel de OSM-bewerkingsplugin in het *OsmAnd-menu → Plugins* in. Om een OSM-notitie toe te voegen, *lang tikken → Acties → OSM-notitie toevoegen*.

- *[POI's (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois)*. Dit zijn vooraf gedefinieerde punten uit de gegevensbron van OpenStreetMap, zoals restaurants, parken of bezienswaardigheden. U kunt POI's bekijken door de POI-overlay in te schakelen in het *Kaart configureren*-menu of door een categorie te selecteren.

- *[Zoeken](../search/index.md)*. U kunt ook de zoekfunctie gebruiken om plaatsen op de kaart te vinden en te markeren.