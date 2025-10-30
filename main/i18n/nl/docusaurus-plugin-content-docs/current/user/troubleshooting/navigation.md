---
source-hash: 848546295eb67d895bd6bd5a48afe6f2f110a62b992de04aa47e91eee03c9082
sidebar_position: 3
title:  Navigatie
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Routeberekening {#route-calculation}

### Routeberekening is traag {#route-calculation-is-slow}

*Android*. OsmAnd gebruikt twee verschillende **offline routeberekeningsengines**: een *op Java gebaseerde engine* en een *Native (C++) engine*.

- De *op Java gebaseerde engine* wordt gebruikt in [Veilige modus](../plugins/development.md#overview), maar is ongeveer 10 keer trager dan de native engine. Het heeft ook strikte geheugenbeperkingen, wat kan leiden tot fouten zoals *Niet genoeg geheugen om te berekenen*. Als u dit probleem tegenkomt, navigeer dan naar *Plugins → OsmAnd ontwikkeling → Instellingen →* [*Veilige modus*](../plugins/development.md#overview) en zorg ervoor dat deze optie is uitgeschakeld.
- De *Native (C++) engine* biedt betere prestaties, maar de efficiëntie hangt af van het geheugen en de processormogelijkheden van uw apparaat. Over het algemeen presteert native routeberekening goed voor routes onder de 300 km, met routeberekeningstijden die variëren van 15 seconden tot 4 minuten. Als het proces langer dan 4 minuten duurt, is het raadzaam om te stoppen, omdat de applicatie kan crashen.


### Onjuiste of onderbroken routes {#incorrect-or-broken-routes}

Soms kan OsmAnd onverwachte navigatieresultaten weergeven. In plaats van het wegennet te volgen, kan de route verschijnen als een rechte gestippelde lijn naar een niet-gerelateerd punt, of kan de navigatie volledig mislukken. Dit wijst meestal op het feit dat routering naar de geselecteerde locatie niet mogelijk is met de huidige configuratie. Vergelijkbare problemen zijn gemeld door gebruikers op [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) en [meer](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/).

**Oorzaken:**

- Verouderde of gedupliceerde kaarten. Kaarten met verschillende updatedatums of duplicaten kunnen de connectiviteit verstoren (vooral over regio's/grenzen).
- Beschadigde profielinstellingen. Aangepaste/gewijzigde profielen (bijv. Fiets) kunnen inconsistent gedrag veroorzaken.
- Ongelijke routeberekeningsengine: Verschillende engines (HH × Java vs HH × C++) kunnen dezelfde kaarten anders verwerken.

**Oplossingen:**

1. Herstel uw profiel.
- Open *Menu* → *Instellingen* → *App-profiel (Navigatieprofiel)*.
- Selecteer *Herstellen naar standaard*.

2. Verwijder en installeer kaarten opnieuw.
- Open *Menu* → *Kaarten & Resources* → *Lokaal* en verwijder alle kaarten voor de getroffen regio('s).
- Ga vervolgens naar *Menu* → *Kaarten & Resources* → *Downloads* en download de kaarten opnieuw.
- Optioneel controleren in *Menu* → *Kaarten & Resources* → *Updates* om ervoor te zorgen dat alle regio's dezelfde updatedatum hebben.

3. Schakel routeberekeningsengine om.
- Schakel de plugin in: *Menu* → *Plugins* → *OsmAnd ontwikkeling*.
- Open vervolgens *Menu* → *Instellingen* → *App-profiel* → *Navigatie-instellingen* → *Routeparameters* → *Ontwikkeling* → *Routetype* en schakel *HH × C++* ↔ *HH × Java* om (u kunt ook A* classic of A* 2-fase proberen).

4. Als laatste redmiddel.
- Herinstalleer de app en download kaarten opnieuw (helpt bij aanhoudende verborgen conflicten).


### Hoe routes langer dan 250 km berekenen? {#how-to-calculate-routes-longer-than-250km}

1. Als de app na 7-8 minuten berekeningstijd geen route toont, overweeg dan om [tussenpunten te plaatsen](../navigation/setup/route-navigation.md#route-recalculation) (kies bijvoorbeeld plaatsen op snelwegen). 3-4 tussenpunten zijn voldoende om zelfs routes van 1000 km te berekenen.

2. Voor high-end apparaten kunt u het geheugen verhogen tot 512 MB of 1024 MB - [Geheugen toegewezen aan apparaten](../plugins/development.md#memory-settings).

3. Voor de Android-versie kunt u een Navigatieprofiel aanmaken met Online of Derde-partij routeberekening (BRouter). Lees er meer over [hier](../navigation/routing/brouter.md).

### Berekening van 50 km routes voor voetgangers {#calculation-of-50-km-routes-for-pedestrians}

Als u het **Wandel**-profiel in OsmAnd gebruikt, kan de applicatie crashen bij het berekenen van routes van meer dan 50 km. Dit probleem treedt specifiek op wanneer de [**Standaard Routeberekening A***](../navigation/guidance/navigation-settings.md#development-settings) is geselecteerd in de navigatie-instellingen. Verschillende factoren kunnen bijdragen aan dit probleem:

- De routelengte is meer dan 50 km.
- Het aantal directe punten op de route is groter dan 1 miljoen.
- U gebruikt een mobiel apparaat om de route te berekenen, wat niet wordt aanbevolen voor routes van deze lengte. Overweeg de webversie te gebruiken voor betere prestaties.

Om crashes met routes van vergelijkbare afstanden te voorkomen, kunt u overschakelen naar andere profieltypes zoals **Fiets**.


## De berekende route lijkt niet correct {#the-calculated-route-does-not-seem-correct}

Om problemen met verkeerde of suboptimale routes op te sporen, kunt u een nieuw bericht openen in [Github discussies](https://github.com/osmandapp/OsmAnd/discussions) of een [Github issue](https://github.com/osmandapp/Osmand/issues) aanmaken en zo gedetailleerd mogelijk de volgende informatie specificeren:

- Welke versie van OsmAnd gebruikt u, op welk apparaat?
- Gebruikt u de offline kaarten die binnen de OsmAnd-app te downloaden zijn, of online (tegel / raster) kaarten?
- Als u offline kaarten gebruikt, vertel ons dan de exacte naam van het kaartbestand waar het routeprobleem zich voordoet, en de editiedatum ervan.
- Vertel ons of u de in-app offline routeberekening van OsmAnd hebt gebruikt, of een online routeprovider zoals YOURS, OpenRouteService of OSRM.
- Welk routeprofiel is gekozen in de OsmAnd-app (auto, fiets of voetganger)?
- Specificeer zo exact mogelijk het begin- en eindpunt van uw route. Geef indien mogelijk de stadsnaam en straatnaam voor elk op. Ook een [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) van openstreetmap.org kan nuttig zijn.
- Vertel ons uw verwachte route, en hoe OsmAnd de route berekent.

## Weginformatie {#road-information}

### OsmAnd toont slechts enkele flitspalen {#osmand-only-shows-some-speed-cams}

Vanwege de geodata afkomstig van het OpenStreetMap-project zijn er momenteel twee methoden waarop flitspalen in de ruwe OSM-data zijn geïntegreerd:

- Een punt (in OSM-terminologie een "node" genoemd) van een weg is getagd met "highway=speed_camera", zie OSM wiki op [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Een groep OSM-data-elementen wordt samengevoegd in een zogenaamde "relation" die meer elementen bevat dan een enkele node om de richting te beschrijven die door de flitspaal wordt gedekt. Zie [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Momenteel kan OsmAnd alleen gebruikmaken van de elementen die uit een enkele node bestaan. Het analyseren van relaties komt in een toekomstige release.


## Spraaknavigatie {#voice-navigation}

### Waarom zou ik een TTS-stem gebruiken in plaats van een opgenomen stem? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Tekst-naar-spraak (TTS)** stemmen genereren gesproken aanwijzingen dynamisch, waardoor ze straatnamen, plaatsnamen en snelwegnummers kunnen uitspreken. Daarentegen zijn **opgenomen stemmen** beperkt tot vooraf opgenomen zinnen en kunnen ze geen specifieke namen of nummers uitspreken.

*Voordelen van TTS ten opzichte van opgenomen stemmen:*

- Spreekt straatnamen en dynamische informatie uit.
- Wordt regelmatig bijgewerkt met nieuwe functies.
- Biedt meer flexibiliteit voor navigatie.

Om TTS in OsmAnd te gebruiken, moet op uw apparaat een **TTS-engine** geïnstalleerd zijn. Veel apparaten worden geleverd met een vooraf geïnstalleerde TTS-engine, maar indien nodig kunnen er extra handmatig worden geïnstalleerd. [Lijst van ondersteunde TTS-engines en talen voor Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Voor gedetailleerde instructies over het instellen en aanpassen van Spraakaanwijzingen, raadpleeg: [Installatiegids Spraaknavigatie](../navigation/guidance/voice-navigation.md).

### TTS functioneert niet naar behoren? Volg deze stappen om het op te lossen {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemen met **Tekst-naar-spraak (TTS)** zijn doorgaans gerelateerd aan **Android-systeeminstellingen**, niet aan de OsmAnd-app zelf.  

1. Zorg ervoor dat er een TTS-engine is geïnstalleerd.

    - Open *Apparaatinstellingen → Taal & Invoer → Tekst-naar-spraakopties*.
    - Controleer of er een **TTS-engine** is geïnstalleerd (bijv. Google TTS, Samsung TTS, Pico).
    - Als er geen engine is geïnstalleerd, selecteer dan *“Meer installeren…”* en download een compatibele.
    - [Lijst van ondersteunde TTS-engines en talen.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifieer de TTS-taalinstellingen.

    - Selecteer de taal die u wilt gebruiken in *Android-instellingen → Tekst-naar-spraakopties*.
    - Tik op *“Luister naar een voorbeeld”* om te testen of de TTS-engine werkt.
    - Als u niets hoort, update of herinstalleer dan de TTS-engine.

3. Pas de instellingen voor spraaknavigatie in OsmAnd aan.

    - Open *OsmAnd → Menu → Profiel configureren → Navigatie-instellingen → Spraakaanwijzingen*.
    - Selecteer een compatibele *Taal → TTS*.
    - Test de spraakaanwijzingen door te navigeren naar *Menu → Plugins → OsmAnd Ontwikkeling inschakelen → Instellingen → Test Spraakaanwijzingen*.

#### Aanvullende stappen {#additional-steps}

- *Update Google TTS*. Open Google Play Store, zoek naar **Google Tekst-naar-spraak**, en update het.  
- *Simuleer Navigatie*. Tik op *Navigatieknop → Instellingen → Simuleer Navigatie* om te controleren of de spraakbegeleiding wordt afgespeeld.  
- *Herinstalleer OsmAnd*:  
   - **Maak een back-up van de instellingen:** *Menu → Instellingen → Exporteren naar bestand*.  
   - Verwijder OsmAnd en installeer het opnieuw vanuit de app store.  
   - Herstel de instellingen: *Menu → Instellingen → Importeren uit bestand*.

Voor aanvullende probleemoplossing, bezoek:

- [Gids Spraaknavigatie](../navigation/guidance/voice-navigation.md)  
- [Instellingen Importeren/Exporteren](../personal/import-export.md)  


## Overig {#other}

### Navigatie stopt als het scherm uit is {#navigation-stops-while-screen-is-off}

- [Hetzelfde probleem](../troubleshooting/track-recording-issues.md#overview) met het opnemen van tracks op de achtergrond.