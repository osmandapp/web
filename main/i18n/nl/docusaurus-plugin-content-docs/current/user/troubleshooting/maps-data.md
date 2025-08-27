---
source-hash: 5be228574247e03992e3e0ddd030d4377aa5bc7c791ba46b7915c2586ebae9b4
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

OsmAnd is ontworpen om OpenStreetMap (OSM) te ondersteunen en geeft zoveel mogelijk prioriteit aan dit pad. Bovendien zijn er licentiebeperkingen die OsmAnd niet toestaan om te worden gedistribueerd met Google Maps-gegevens.

### Kaarten laden langzaam op Android 11, 12 (SD-kaart) {#maps-slowly-loading-on-android-11-12-sd-card}

Vanwege de nieuwe [regels voor opslagtoegang die zijn geïntroduceerd in Android 11 en 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), kunnen gebruikers tragere prestaties ervaren bij het openen van kaarten die zijn opgeslagen op SD-kaarten. Deze wijzigingen kunnen ook leiden tot zichtbaarheids- en toegangsbeperkingen voor bestanden in SD-kaartmappen. Meer discussies en technische inzichten zijn te vinden via de volgende links: [Reddit-discussie](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

Op dit moment zijn de volgende oplossingen beschikbaar:

#### 1. Migreer de OsmAnd-gegevensopslagmap naar "Interne app-geheugen" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- U kunt de opslagmap wijzigen door de optie ***Intern app-geheugen*** te selecteren in *Menu → Instellingen → OsmAnd-instellingen → Gegevensopslagmap*.

- Houd er echter rekening mee dat het interne geheugen vaak beperkt is. Als tijdelijke oplossing kunt u belangrijke bestanden naar het interne geheugen verplaatsen, terwijl u zelden gebruikte kaarten op de SD-kaart bewaart. Gebruik een bestandsbeheerder om deze bestanden handmatig over te zetten wanneer dat nodig is.

Het ontwikkelingsteam zoekt actief naar efficiëntere oplossingen om de prestaties van de SD-kaart te verbeteren onder het nieuwe Android-opslagbeleid.

#### 2. Gebruik de "Download"-map van de SD-kaart {#2-use-the-sd-cards-download-folder}

U kunt proberen het probleem met het langzaam laden van kaarten op te lossen door de **Download**-map van de SD-kaart op te geven voor OsmAnd-opslag onder *Menu → Instellingen → OsmAnd-instellingen → Gegevensopslagmap → Handmatig opgegeven*. De volgende paden zijn mogelijk:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Dit pad kan fouten veroorzaken bij het openen van meerdere bestanden. U kunt bijvoorbeeld de Wereldoverzichtskaart downloaden, maar andere regio's verschijnen mogelijk niet.

- ***/storage/XXXX-XXXX/Download***  
   Dit pad zou consistent moeten werken voor het downloaden van kaarten en andere gegevens. Houd er echter rekening mee dat OsmAnd bestanden die door andere apps of programma's (bijv. SasPlanet) naar deze map zijn geschreven, niet zal herkennen. Voor meer details, zie [deze handleiding](../../technical/map-creation/create-offline-maps-yourself.md).

De "XXXX-XXXX" staat voor het unieke identificatienummer van uw SD-kaart, dat soms te vinden is in het mappad onder *Externe opslag 2*-opties of kan worden gevonden met andere methoden. Meer onderzoek en details over deze oplossing zijn beschikbaar [hier](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. "Media"-opslagoptie {#3-media-storage-option}

Als eerdere oplossingen niet werken of beperkt lijken, kunt u proberen de "Media"-opslagoptie te gebruiken om problemen met het langzaam laden van kaarten of opslagtoegang op te lossen. Deze methode maakt het mogelijk om een map te selecteren die toegankelijk is voor OsmAnd en andere apps, met name handig voor externe of verwijderbare opslag.

### Een "Algemeen toegankelijke" OsmAnd-gegevensopslagmap kiezen met behulp van de "Media"-opslag {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

Android is strenger geworden met opslagmachtigingen, waardoor de toegang tot app-specifieke mappen vaak wordt beperkt, vooral bij nieuwe installaties of systeemupgrades. De standaard gegevensopslag van OsmAnd kan beperkt zijn, waardoor deze onzichtbaar is voor andere apps of zelfs bestandsbeheerders. Veel gebruikers willen kaarten en gegevens opslaan in toegankelijke externe opslag voor back-up, synchronisatie of handmatig bestandsbeheer.

OsmAnd heeft echter geen *Alle bestanden toegang*-toestemming (vanwege Google's beperkingen), waardoor de keuze van mappen wordt beperkt. Een oplossing is het gebruik van de "Media"-opslagmap, waaraan Android doorgaans bredere lees-/schrijftoegang verleent. Om dit te doen:

- Ga naar *OsmAnd's Instellingen → OsmAnd-instellingen → Gegevensopslagmap* en bekijk de beschikbare opslaggebieden. Gebruik de vrije ruimte-indicator om de doelopslag te identificeren, vaak gelabeld als *Externe opslag 2*.
- Noteer het huidige mappad, dat eruit kan zien als */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Schakel over naar de optie *Handmatig opgegeven* en wijzig het pad naar een media-toegankelijke map. Op veel systemen werkt het wijzigen van */Android/data/* naar */media/* (bijv. ***/storage/xxxx-xxxx/media***). Sommige systemen vereisen mogelijk andere padwijzigingen.

Een correct pad zal OsmAnd geen fouten met schrijfmachtigingen geven. Voordat u deze wijzigingen aanbrengt, moet u ervoor zorgen dat OsmAnd de juiste opslagmachtigingen heeft, inclusief "Media"-opslagmachtiging, onder Android's **Apps**-instellingen. In nieuwere Android-versies kunnen deze machtigingen zich in geavanceerde of verborgen menu's bevinden.

### Kaartgegevens verwijderen na de app-update (als "Multiuser Storage 1" is geselecteerd) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

In de Android-versie van OsmAnd kan het selecteren van *Multiuser Storage 1* als opslaglocatie leiden tot het verwijderen van alle [lokale kaarten](../personal/maps-resources.md#local-maps) telkens wanneer de app automatisch wordt bijgewerkt, zoals van versie 4.1.9 naar 4.1.10, 4.1.11 of later (**Android 11, 12**). Dit probleem is gedocumenteerd op [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Om te voorkomen dat uw kaartgegevens verloren gaan tijdens updates, kunt u de volgende oplossingen overwegen:

1. *Maak een back-up van uw bestanden*. Voordat u OsmAnd bijwerkt, maakt u een [back-up](../personal/import-export.md) van de kaarten die zijn opgeslagen in *..Android/obb/net.osmand*. Na het bijwerken herstelt u de bestanden voordat u de bijgewerkte OsmAnd-app start.

2. *Wijzig het opslagpad*. Verplaats de OsmAnd-map naar een locatie die door alle apps kan worden geschreven (bijv. Wi-Fi FTP-server, X-plore, of via een USB-kabel naar een pc). Wijzig het mappad van:
   - /storage/emulated/0/Android/**obb**/net.osmand
   naar
   - /storage/emulated/0/Android/**media**/net.osmand.


### Geen kaarten worden weergegeven voor Google Pixel-apparaten {#no-maps-rendering-for-google-pixel-devices}

Voor de OsmAnd 4.2 Android-versies kan [kaartweergave mislukken](https://github.com/osmandapp/OsmAnd/issues/15045) op Google Pixel-apparaten, waardoor gebruikers een leeg wit scherm zien in plaats van een kaart.

Om dit probleem op te lossen, schakelt u over naar OpenGL-weergave:

- Navigeer naar *OsmAnd-menu → Instellingen → OsmAnd-instellingen → Kaartweergave-engine → Versie 2 (OpenGL)*.
- Start OsmAnd opnieuw op om de wijzigingen toe te passen.


### Langzame kaartweergave in OsmAnd oplossen {#resolving-slow-map-rendering-in-osmand}

<!--
Other header variants:

- Optimizing OsmAnd performance for offline maps
- Improving map redrawing speed in OsmAnd
-->

Om het probleem van langzame kaartweergave op te lossen, vooral bij het gebruik van offline vectorkaarten, moeten de volgende stappen worden genomen:

1. **Schakel onnodige kaartfuncties uit.** Schakel 3D-reliëf, hoogtelijnen, heuvelschaduwen en hellingen uit, wat de verwerkingskracht die nodig is om kaarten weer te geven aanzienlijk kan verhogen. U kunt dit doen in *Menu → Kaart configureren*.

2. **Vereenvoudig kaartdetails.** Verberg minder kritieke elementen zoals grenzen, POI's, OSM-notities, weerlagen, aanvullende details (*Menu → Kaart configureren → Kaartweergave*) om de kaartweergave te stroomlijnen en de snelheid te verbeteren.

3. **Beperk het aantal weergegeven POI's.** Geef alleen de belangrijkste POI's weer of beperk de categorieën die tijdens de navigatie worden weergegeven, wat kan helpen de kaartweergave te versnellen. Open deze instellingen in *Menu → Navigatie → Instellingen*.

4. **Pas de kaartvergroter aan.** De instelling van de kaartvergroter kan een belangrijke factor zijn bij het vertragen van de kaart. Stel de vergroter in op 100% door lang op de **"+"** of **"-"** knop op het kaartscherm te drukken om de weergave te optimaliseren.

5. **Schakel auto-zoom uit.** Auto-zoom kan leiden tot frequent opnieuw tekenen van de kaart tijdens de navigatie, wat vertragingen veroorzaakt. Schakel auto-zoom uit in *Menu → Instellingen → Profiel → Navigatie-instellingen → [Kaart tijdens navigatie](../navigation/guidance/map-during-navigation.md)*.

6. **Gebruik alleen offline kaarten.** Online kaarten, vooral wanneer ze niet van tevoren zijn gedownload, kunnen het laden van kaarten vertragen. Schakel over naar het gebruik van alleen offline kaarten voor soepelere prestaties.

Deze wijzigingen zouden de tijd die nodig is om kaarten weer te geven moeten verkorten, vooral tijdens de navigatie. Voor meer gedetailleerde configuratie-opties, raadpleeg de [Kaartinstellingenhandleiding](https://osmand.net/docs/user/map/interact-with-map#settings).


## Hoogtelijnen {#contour-lines}

### Is er een manier om hoogtelijnen in voeten in plaats van meters weer te geven? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Ja, hoogtelijnen kunnen in voeten in plaats van meters worden weergegeven. Voordat u de hoogtelijngegevens downloadt, kiest u tussen Voeten of Meters: [lees er hier meer over](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Hoogtelijnen, hoogtegegevens of 3D-reliëf worden niet weergegeven {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Controleer of de gegevens van de juiste regio zijn gedownload. Ga naar ***Menu → Kaarten & Bronnen → Downloads → Uw Regio***. [Hoe kaarten te downloaden](../start-with/first-steps.md#how-to-download-maps).
- Controleer of de [plugin](../plugins/topography.md#required-setup-parameters) is ingeschakeld en zichtbaar in ***Menu → Plugins → Topografie***.
- Controleer of de items in de sectie Topografie zijn ingeschakeld in ***Menu → Kaart configureren → Topografie → Hoogtelijnen / Terrein / 3D-reliëf***.
- Controleer uw aankopen: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Werk de app bij naar de nieuwste versie.
- Verwijder en download de vereiste kaarten opnieuw om ervoor te zorgen dat er geen beschadigde bestanden zijn.
- Start OsmAnd opnieuw op om instellingen en gegevens te vernieuwen.


## Zoeken {#search}

### Gestructureerd (stad *→* straat *→* huis) adres zoeken vindt het huis niet {#structured-city--street--house-address-search-doesnt-find-the-house}

Als u een locatie probeert te zoeken met behulp van de structuur *Stad → Straat → Huisnummer* en er geen resultaten worden geretourneerd, overweeg dan de volgende tips en mogelijke oorzaken:

> **Tip**: Probeer een full-text zoekopdracht zonder de stad op te geven, aangezien het adres mogelijk onder een andere stad is vermeld.

**Mogelijke problemen:**

- **Huis ontbreekt**. Het huis staat mogelijk niet op OpenStreetMap, of het is wel aanwezig maar zonder toegewezen nummers. U kunt dit controleren met een voorbeeld [hier](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Onjuiste straatnaam**. De straatnaam die aan het huis is gekoppeld, is mogelijk onjuist in OpenStreetMap. Controleer de `addr:street`-tag om ervoor te zorgen dat de straatnaam exact overeenkomt met die in de taggingsinformatie van de straat.

- **Probleem met Nominatim**. Het huis is mogelijk aanwezig in OpenStreetMap, maar niet gevonden via Nominatim (de zoekmachine die door OpenStreetMap wordt gebruikt). U kunt meer leren over het oplossen van adresgerelateerde problemen [hier](https://wiki.openstreetmap.org/wiki/Addresses).

- **Mogelijk probleem in OsmAnd**. Als het huis aanwezig is in Nominatim maar nog steeds niet wordt gevonden in OsmAnd, ligt het probleem mogelijk specifiek bij OsmAnd. U kunt bijdragen aan het oplossen hiervan door verder onderzoek te doen. Meer details zijn te vinden in dit [technische artikel](../../technical/algorithms/trace-address-search-issues.md).


## Tracks en punten {#tracks-and-points}

### Hoe verschillende plaatsen op de kaart te markeren {#how-to-mark-different-places-on-the-map}

U kunt notities achterlaten en locaties op de kaart markeren in verschillende vormen, elk met een ander doel:

- *[Favorieten](../personal/favorites.md)*. Dit zijn permanente punten op de kaart waar u beschrijvingen kunt toevoegen. Om een Favoriet te maken, tikt u lang → tikt u op Toevoegen. Favorieten zijn geweldig voor het markeren van plaatsen die u vaak bezoekt of die u wilt bewaren voor toekomstige referentie.

- *[Markeringen](../personal/markers.md)*. Markeringen zijn tijdelijke punten, vaak gebruikt voor navigatie of planning. Ze kunnen de afstand vanaf uw huidige locatie of een ander punt weergeven en kunnen snel worden verwijderd wanneer ze niet langer nodig zijn. Om een Markering toe te voegen, tikt u lang → tikt u op Markering.

- *[Waypoints](../map/tracks/index.md#types-of-tracks)*. Waypoints worden langs routes geplaatst die u maakt, zodat u specifieke stops of locaties langs uw reis kunt markeren. U kunt ook beschrijvingen aan deze punten toevoegen. Om een waypoint toe te voegen, tikt u lang op de kaart → Routebeschrijving → toevoegen als tussenliggend waypoint.

- *[Audio-/videonotities](../plugins/audio-video-notes.md)*. Met deze notities kunt u audio-, video- of fotobestanden koppelen aan specifieke locaties op de kaart. Om in te schakelen, activeert u de Audio-/videonotities-plugin in *OsmAnd-menu → Plugins*. Om er een toe te voegen, tikt u lang → Acties → kies het vereiste bestand om bij te voegen.

- *[OSM-notities](../plugins/osm-editing.md#create--modify-osm-note)*. Dit zijn rapporten die u kunt maken om fouten of ontbrekende informatie op OpenStreetMap te markeren. Schakel de OSM-bewerkingsplugin in het *OsmAnd-menu → Plugins* in. Om een OSM-notitie toe te voegen, tikt u lang → Acties → OSM-notitie toevoegen.

- *[POI's (Points of Interest)](../map/point-layers-on-map.md#points-of-interest-pois)*. Dit zijn vooraf gedefinieerde punten uit de gegevensbron van OpenStreetMap, zoals restaurants, parken of bezienswaardigheden. U kunt POI's bekijken door de POI-overlay in het menu *Kaart configureren* in te schakelen of door een categorie te selecteren.

- *[Zoeken](../search/index.md)*. U kunt ook de zoekfunctie gebruiken om plaatsen op de kaart te vinden en te markeren.