---
source-hash: 4279e8b0f36e69d2e860ec2e48cb3a48d0b171f309dc5569b62b8e5d94ae87fa
sidebar_position: 3
title: Navigatie
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

*Android*. OsmAnd gebruikt twee verschillende **offline routeringsengines**: een *Java-gebaseerde engine* en een *Native (C++) engine*.

- De *Java-gebaseerde engine* wordt gebruikt in de [Veilige modus](../plugins/development.md#safe), maar is ongeveer 10 keer trager dan de native engine. Het heeft ook strikte geheugenbeperkingen, wat kan leiden tot fouten zoals *Niet genoeg geheugen om te berekenen*. Als u dit probleem tegenkomt, navigeer dan naar *Plugins → OsmAnd-ontwikkeling → Instellingen →* [*Veilige modus*](../plugins/development.md#safe) en zorg ervoor dat deze optie is uitgeschakeld.
- De *Native (C++) engine* biedt betere prestaties, maar de efficiëntie ervan hangt af van het geheugen en de processormogelijkheden van uw apparaat. Over het algemeen presteert native routering goed voor routes onder de 300 km, met routeberekeningstijden variërend van 15 seconden tot 4 minuten. Als het proces langer dan 4 minuten duurt, is het raadzaam om te stoppen, aangezien de applicatie kan crashen.


### Hoe routes langer dan 250 km berekenen? {#how-to-calculate-routes-longer-than-250km}

1. Als de app na 7-8 minuten rekentijd geen route toont, overweeg dan om [tussenpunten te plaatsen](../navigation/setup/route-navigation.md#route-recalculation) (kies bijvoorbeeld plaatsen op snelwegen). 3-4 tussenpunten zijn voldoende om zelfs routes van 1000 km te berekenen.

2. Voor topapparaten kunt u het geheugen vergroten tot 512 MB of 1024 MB - [Toegewezen geheugen voor routering](../plugins/development.md#memory-allocated-for-routing).

3. Voor de Android-versie kunt u een navigatieprofiel aanmaken met online of externe routering (BRouter). Lees er hier meer over [hier](../navigation/routing/brouter.md).

### Berekening van 50 km routes voor voetgangers {#calculation-of-50-km-routes-for-pedestrians}

Als u het profiel **Wandelen** in OsmAnd gebruikt, kan de applicatie crashen bij het berekenen van routes langer dan 50 km. Dit probleem doet zich specifiek voor wanneer de [**Standaard Routering A***](../navigation/guidance/navigation-settings.md#development-settings) is geselecteerd in de navigatie-instellingen. Verschillende factoren kunnen bijdragen aan dit probleem:

- De routelengte overschrijdt 50 km.
- Het aantal directe punten op de route is groter dan 1 miljoen.
- U gebruikt een mobiel apparaat om de route te berekenen, wat niet wordt aanbevolen voor routes van deze lengte. Overweeg het gebruik van de webversie voor betere prestaties.

Om crashes met routes van vergelijkbare afstanden te voorkomen, kunt u overschakelen naar andere profieltypen, zoals **Fiets**.


## De berekende route lijkt niet correct {#the-calculated-route-does-not-seem-correct}

Om problemen met verkeerde of suboptimale routes op te sporen, kunt u een nieuwe post openen in [Github discussies](https://github.com/osmandapp/OsmAnd/discussions) of [Github issue](https://github.com/osmandapp/Osmand/issues) en zo gedetailleerd mogelijk de volgende informatie specificeren:

- Welke versie van OsmAnd gebruikt u, op welk apparaat?
- Gebruikt u de offline kaarten die binnen de OsmAnd-app worden aangeboden om te downloaden, of online (tegel-/raster) kaarten?
- Als u offline kaarten gebruikt, vertel ons dan de exacte naam van het kaartbestand waar het routeringsprobleem optreedt, en de editiedatum ervan.
- Vertel ons of u de in-app offline routering van OsmAnd hebt gebruikt, of een online routeringsprovider zoals YOURS, OpenRouteService of OSRM.
- Welk routeringsprofiel is gekozen in de OsmAnd-app (auto, fiets of voetganger)?
- Specificeer zo exact mogelijk het begin- en eindpunt van uw route. Vertel indien mogelijk de stadsnaam en straatnaam voor elk. Ook een [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) van openstreetmap.org kan nuttig zijn.
- Vertel ons uw verwachte routering, en hoe OsmAnd routeert.

## Weginformatie {#road-information}

### OsmAnd toont slechts enkele flitspalen {#osmand-only-shows-some-speed-cams}

Vanwege de geodata die afkomstig is van het OpenStreetMap-project zijn er momenteel twee methoden hoe flitspalen zijn geïntegreerd in de ruwe OSM-data:

- Een punt (in OSM-terminologie "node" genoemd) van een weg is getagd met "highway=speed_camera", zie OSM wiki op [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Een groep OSM-data-elementen wordt samengevoegd in een zogenaamde "relatie" die meer elementen bevat dan een enkele node om de richting te beschrijven die door de flitspaal wordt gedekt. Zie [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Momenteel kan OsmAnd alleen gebruik maken van de elementen die bestaan uit een enkele node. Het analyseren van relaties zal in een toekomstige release komen.


## Stemnavigatie {#voice-navigation}

### Waarom zou ik een TTS-stem gebruiken in plaats van een opgenomen stem? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

**Tekst-naar-spraak (TTS)** stemmen genereren dynamisch gesproken aanwijzingen, waardoor ze straatnamen, plaatsnamen en snelwegnummers kunnen uitspreken. Daarentegen zijn **opgenomen stemmen** beperkt tot vooraf opgenomen zinnen en kunnen ze geen specifieke namen of nummers uitspreken.

*Voordelen van TTS ten opzichte van opgenomen stemmen:*

- Spreekt straatnamen en dynamische informatie uit.
- Wordt regelmatig bijgewerkt met nieuwe functies.
- Biedt betere flexibiliteit voor navigatie.

Om TTS in OsmAnd te gebruiken, moet uw apparaat een **TTS-engine** geïnstalleerd hebben. Veel apparaten worden geleverd met een vooraf geïnstalleerde TTS-engine, maar extra engines kunnen handmatig worden geïnstalleerd indien nodig. [Lijst met ondersteunde TTS-engines en talen voor Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Voor gedetailleerde instructies over het instellen en aanpassen van gesproken aanwijzingen, raadpleeg: [Gids voor het instellen van stemnavigatie](../navigation/guidance/voice-navigation.md).

### TTS werkt niet goed? Volg deze stappen om het te verhelpen {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemen met **Tekst-naar-spraak (TTS)** zijn doorgaans gerelateerd aan **Android-systeeminstellingen**, niet aan de OsmAnd-app zelf.

1. Zorg ervoor dat een TTS-engine is geïnstalleerd.

    - Open *Apparaatinstellingen → Taal & invoer → Tekst-naar-spraakopties*.
    - Controleer of een **TTS-engine** is geïnstalleerd (bijv. Google TTS, Samsung TTS, Pico).
    - Als er geen engine is geïnstalleerd, selecteer dan *“Meer installeren…”* en download een compatibele.
    - [Lijst met ondersteunde TTS-engines en talen.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Controleer de TTS-taalinstellingen.

    - Selecteer de taal die u wilt gebruiken in *Android-instellingen → Tekst-naar-spraakopties*.
    - Tik op *“Luister naar een voorbeeld”* om te testen of de TTS-engine werkt.
    - Als u niets hoort, update of installeer de TTS-engine dan opnieuw.

3. Pas de OsmAnd-stemnavigatie-instellingen aan.

    - Open *OsmAnd → Menu → Profiel configureren → Navigatie-instellingen → Gesproken aanwijzingen*.
    - Selecteer een compatibele *Taal → TTS*.
    - Test de gesproken aanwijzingen door te navigeren naar *Menu → Plugins → OsmAnd-ontwikkeling inschakelen → Instellingen → Gesproken aanwijzingen testen*.

#### Aanvullende stappen {#additional-steps}

- *Google TTS bijwerken*. Open de Google Play Store, zoek naar **Google Tekst-naar-spraak** en werk deze bij.
- *Navigatie simuleren*. Tik op de *Navigatieknop → Instellingen → Navigatie simuleren* om te controleren of de stembegeleiding wordt afgespeeld.
- *OsmAnd opnieuw installeren*:
   - **Instellingen back-uppen:** *Menu → Instellingen → Exporteren naar bestand*.
   - Verwijder OsmAnd en installeer het vervolgens opnieuw vanuit de app store.
   - Instellingen herstellen: *Menu → Instellingen → Bestand importeren*.

Voor aanvullende probleemoplossing, bezoek:

- [Gids voor stemnavigatie](../navigation/guidance/voice-navigation.md)
- [Instellingen importeren/exporteren](../personal/import-export.md)


## Overig {#other}

### Navigatie stopt wanneer het scherm uit is {#navigation-stops-while-screen-is-off}

- [Hetzelfde probleem](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) met het opnemen van tracks op de achtergrond.