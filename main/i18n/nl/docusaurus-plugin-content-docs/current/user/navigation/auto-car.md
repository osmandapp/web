---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
ios: false
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Overzicht {#overview}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) is software ontwikkeld door Google waarmee gebruikers hun Android-apparaten kunnen verbinden met compatibele multimediasystemen in voertuigen. *Android Auto* biedt een aangepaste en geoptimaliseerde versie van de OsmAnd-app voor veilig gebruik tijdens het rijden, waardoor de navigatiefuncties van de app gemakkelijker en veiliger toegankelijk zijn.

De **Android Auto**-functie wordt alleen ondersteund bij gebruik van de OsmAnd-app die beschikbaar is in de [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **OPMERKING**: *Android Auto is geen directe replicatie van de OsmAnd mobiele app. Het heeft een vereenvoudigde interface, gericht op essentiële navigatiefuncties om veilig rijden te garanderen. Sommige geavanceerde functies worden niet ondersteund vanwege platformbeperkingen.*


### Verbindingsscherm {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Terwijl uw apparaat is verbonden met *Android Auto*, is de kaart op het app-scherm vergrendeld. Dit is een opzettelijke beveiligingsfunctie om ervoor te zorgen dat navigatie uitsluitend vanaf het autodashboard wordt bediend, waardoor afleiding tijdens het rijden wordt geminimaliseerd. Raadpleeg de [veelgestelde vragen](#common-issues-and-solutions) over het verbindingsscherm.


### Startscherm {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Wanneer u de applicatie opent, wordt een lijst met categorieën weergegeven. Voor eenvoudige navigatie kunt u deze verbergen door op de knop in de rechterbovenhoek van het scherm te tikken.

- Tik op de menuknop om de lijst met categorieën te verbergen.
- Tik in de rechterbovenhoek van het scherm op de knop naast de functieknopen als u wilt terugkeren naar de lijst.


### Interactie met de kaart {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

*Android Auto* toont de OsmAnd-interface aangepast aan het scherm van het multimediasysteem van het voertuig. Interactie met de kaart is beperkt tot knoppen zoals:

- [OsmAnd-menu](#destination-points). Bevat een lijst met beschikbare opties voor het toewijzen van een route-eindpunt of een vrije rit.
- [Instellingen](#voice-prompts). Deze knop is verantwoordelijk voor: 1. toegang tot het in-/uitschakelen van *gesproken aanwijzingen* wanneer u de geselecteerde route navigeert; 2. routegegevens (tijd en afstand) voor de volgende stop weergeven.
- [Zoeken](#search). Door op de knop te tikken, wordt een scherm geopend met toegang tot de zoekfuncties.
- [Mijn locatie](../widgets/map-buttons.md#my-location-and-zoom). Verplaatst het zichtbare deel van de kaart zodat uw huidige locatie in het midden van het scherm staat.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Hiermee kunt u in- en uitzoomen op het zichtbare deel van de kaart.
- [Kompas](../widgets/map-buttons.md#compass). Toont welke van de vier beschikbare kaartoriëntatiemodi op het scherm van uw apparaat is geselecteerd.


## Vereiste instellingsparameters {#required-setup-parameters}

### Navigatie starten {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Om OsmAnd in *Android Auto* te laten werken, moet u uw Android-apparaat [verbinden](#connection-screen) met het multimediasysteem van uw voertuig. Het Android-besturingssysteem moet zijn bijgewerkt naar versie 6.0 of hoger.

- Ga naar de [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en) websites om te zien hoe u uw apparaat kunt verbinden en instellen.

- Niet alle voertuigen ondersteunen de mogelijkheid om apparaten te verbinden. Controleer de [lijst voor *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- U moet een **betaalde versie** van de app aanschaffen of een [abonnement](../purchases/android.md#free-and-paid-features) afsluiten. Controleer uw huidige abonnement hier *Menu → Instellingen → Aankopen*.

- *Android Auto* gebruikt het eerste [OsmAnd Rijprofiel](#profile-first) in de profiellijst voor navigatie. Stel het voorkeursprofiel in op de eerste plaats, behalve het *Kaart bekijken*-profiel, dit wordt niet gelezen door *Android Auto*. Ga hiervoor naar OsmAnd *Menu → Instellingen → App-profielen → Profiellijst bewerken* → verplaats uw [**Rijden**](#profile-first)-profiel naar de eerste plaats of na het *Kaart bekijken*-profiel.

- Het is belangrijk om te onthouden dat *Android Auto* een data-intensieve applicatie is, inclusief mobiele data, en de kwaliteit van het systeem kan afhangen van de kwaliteit van uw verbinding en de snelheid van uw internettoegang.

### Profiel eerst {#profile-first}

U kunt geen profiel rechtstreeks selecteren in *Android Auto* op het voertuigscherm.
Als u al een profiel op uw apparaat hebt geselecteerd dat overeenkomt met het type voertuig, zoals *Rijden*, *Vrachtwagen*, *Auto*, *Motorfiets*, *Bromfiets*, **activeert de app automatisch** het juiste profiel wanneer u verbinding maakt met Android Auto. Als u bijvoorbeeld een *Vrachtwagen*-profiel hebt geselecteerd en uw apparaat verbinding maakt met **Android Auto**, activeert de app dat profiel.

Als u geen *Rij*-profiel op uw apparaat hebt geselecteerd dat overeenkomt met uw voertuigtype, schakelt OsmAnd automatisch over naar het *Rij*-profiel. Dit wordt gedaan om basisnavigatie te bieden en mogelijke problemen te voorkomen die worden veroorzaakt door het gebruik van het verkeerde profiel voor een specifiek voertuigtype.

**Waarom het belangrijk is:**

1. **Rijveiligheid.** Verschillende soorten transport vereisen verschillende informatie en instellingen tijdens het rijden. Vrachtwagenchauffeurs kunnen bijvoorbeeld beperkt zijn in de hoogte, het gewicht en de breedte van hun voertuigen, dus het *Vrachtwagen*-profiel biedt hen de juiste beperkingen en richtlijnen. Fietsers en motorrijders hebben informatie nodig over fietspaden en routes, zonder gegevens voor vrachtwagens.

2. **Bruikbaarheid en efficiëntie.** Navigatie moet worden aangepast aan de behoeften van een bepaalde vervoerswijze. Hierdoor kunnen gebruikers de tijd die nodig is om optimale routes te vinden verkorten en onnodige verkeersbeperkingen vermijden.

3. **Foutvermijding.** Overschakelen naar het *Rij*-profiel wanneer er geen specifiek profiel is voor de geselecteerde vervoerswijze, biedt u constante toegang tot de minimaal noodzakelijke instellingen en informatie, waardoor mogelijke fouten en misverstanden tijdens het rijden worden voorkomen.


## Bestemmingspunten {#destination-points}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

U kunt eerder ingestelde en toegevoegde [POI's](../map/point-layers-on-map.md#points-of-interest-pois), of [Favorieten](../personal/favorites.md), of [Markeringen](../personal/markers.md) als bestemmingspunt selecteren. Het is ook mogelijk om een opgenomen of gedownloade [Track](../personal/tracks/manage-tracks.md) voor de route te selecteren, de [Zoekfunctie](../search/index.md) te gebruiken, of een bestemming te selecteren uit de route [Geschiedenis](../search/search-history.md) of een *Vrije rit* te maken.

1. Als u een bepaalde locatie op de kaart als eindpunt wilt, selecteert u de juiste categorie punten uit de lijst, [POI's](#poi-categories), [Favorieten](#favorites), of [Kaartmarkeringen](#map-markers).

    - Alle categorieën kunnen niet meer lijstitems bevatten dan door het multimediasysteem van uw voertuig worden geleverd. Dit betekent dat de lijst in *Android Auto* onvolledig kan zijn, en alle andere mappen zijn alleen beschikbaar in de OsmAnd-app op uw apparaat.
    - De map [Laatst gewijzigd](#folder-last-modified) bevat een lijst met recente bestemmingen, gesorteerd op datum van toevoeging of wijziging.
    - De lijst met alle andere mappen is gesorteerd op de meest recente update, nieuwe mappen staan bovenaan de lijst. Het is niet mogelijk om hun volgorde handmatig te wijzigen.
    - De lijst met punten binnen mappen is gesorteerd op afstand tot deze, beginnend met de dichtstbijzijnde. Elk punt heeft een naam of coördinaten, een gevormd pictogram (kleur en pictogram standaard ingesteld of door u gekozen in de OsmAnd-applicatie), en de afstand van het punt van de huidige locatie tot dit.

2. Selecteer de categorie [Geschiedenis](#history) om een van de recente bestemmingen te vinden die in het geheugen van het apparaat zijn opgeslagen.

3. Selecteer [Zoeken](#search) om een bestemming in te voeren vanuit de beschikbare zoekcategorieën.

4. Kies **Vrije rit** om een reis te maken zonder een opgegeven eindpunt.

:::note
Tijdens het rijden kunnen geselecteerde punten [aangekondigd](#voice-prompts) worden wanneer u ze nadert of passeert. Zie de instellingen voor [Gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) in het betreffende artikel om gesproken meldingen in te stellen.
:::


### Geschiedenis {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

In de categorie Geschiedenis kunt u een bestemming selecteren uit een lijst met eindpunten. Ze zijn gesorteerd op meest recent gebruik, beginnend met de nieuwste. Dit kan handig zijn voor snelle toegang tot veelgebruikte routes. Om te leren hoe u een bestemming kunt gebruiken of verwijderen, leest u het artikel [Zoekgeschiedenis](../search/search-history.md).


### POI-categorieën {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POI's (Points of Interest) zijn een type punten die plaatsen of objecten op de kaart identificeren die belangrijk of interessant zijn voor gebruikers. Ze worden gemarkeerd door speciale pictogrammen die in de [OsmAnd-instellingen](../map/point-layers-on-map.md#poi-types) worden geleverd en in groepen worden gesorteerd.

Volg deze stappen om een route naar een POI in *Android Auto* te bouwen:

1. Selecteer de gewenste POI uit de lijst met beschikbare categorieën, of voer de naam van de POI in met [Zoeken](#search).
2. Door op een categorie te tikken, wordt het volgende scherm met een lijst met POI's geopend.
3. Door op een item in de lijst te tikken, wordt de navigatie geopend.
4. OsmAnd berekent de route en toont deze op het *Android Auto*-scherm. Tik op de knop **Start** om naar die locatie te navigeren.
5. Afhankelijk van uw OsmAnd-app [instellingen](../navigation/guidance/navigation-settings.md) en uw voertuig, kunt u [gesproken aanwijzingen](#voice-prompts) ontvangen om u naar een bestemming te leiden.


### Favorieten {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favorieten* is een van de functies van OsmAnd waarmee u een soort bladwijzers (notities) op de kaart kunt maken. Tijdens het gebruik van *Android Auto* kunt u geen Favorieten toevoegen of wijzigen, alleen bestaande gebruiken. De lijst met [Favorieten](../personal/favorites.md#manage-favorites) vindt u in de OsmAnd-app *Menu → Mijn plaatsen → Favorieten*. Als u ze wilt gebruiken voor navigatie, voeg dan de benodigde plaatsen toe aan de favorieten voordat u het apparaat verbindt met het multimediasysteem van uw voertuig.

Volg de onderstaande stappen om een route naar een favoriet punt in *Android Auto* te maken:

1. Door op een map te tikken, wordt het volgende scherm met een lijst met favoriete mappen geopend.
2. Door op een item in de lijst te tikken, wordt de navigatie geopend.


### Kaartmarkeringen {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Om uw eindbestemming als kaartmarkering te definiëren, moet u eerst het vereiste aantal markeringen in de OsmAnd-app op uw apparaat maken voordat u deze met het systeem verbindt. Markeringen moeten beschikbaar zijn in de lijst *Menu → Kaartmarkering*. Dit wordt uitgebreider beschreven in het artikel [Markeringen](../personal/markers.md).


### Tracks {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Om een route naar een bestemming te bouwen, kunt u een bestaande track selecteren die beschikbaar is in de OsmAnd-app. De track kan van tevoren worden [gedownload](../personal/tracks/manage-tracks.md#import), worden gebruikt als [opgenomen](../plugins/trip-recording.md) of worden gemaakt in [Route plannen](../plan-route/create-route.md).

Selecteer uit de lijst met tracks in het *Menu → Mijn plaatsen → [Tracks](../personal/tracks/manage-tracks.md)* de gewenste voordat u verbinding maakt met het multimediasysteem van het voertuig, en de route zal ofwel naar het begin van de track worden opgebouwd of de huidige richting langs de track weergeven.

Tracks kunnen ook rechtstreeks op het voertuigscherm in *Android Auto* worden geselecteerd. Ze zijn georganiseerd in mappen die u hebt gemaakt, en voor gemakkelijke en snelle toegang tot recent geopende tracks is er een speciale map [Laatst gewijzigd](#folder-last-modified).


### Zoeken {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Naar Zoeken gaan geeft u snel toegang tot een lijst met recente [bestemmingsgeschiedenis](#history). Vergelijkbaar met het [Navigatiemenu](../navigation/setup/route-navigation.md#navigation-menu), waar alle OsmAnd-bestemmingsmethoden zoals een adres, POI's of coördinaten zijn verzameld.

U kunt de zoekfunctie gebruiken om de gewenste plaats op de kaart te vinden voor routeplanning vanuit elke beschikbare zoekcategorie.

- [Adres](../search/search-address.md) - begin het adres in het zoekveld te typen.
- [POI](../search/search-poi.md) en [Aangepaste POI](../search/search-poi.md) - de lijst met nabijgelegen vergelijkbare namen zal ook POI's of hun categorieën weergeven.
- [Coördinaten zoeken](../search/search-address#coordinates-search) - voer de coördinaten in om het punt op de kaart te vinden.


### Map Laatst gewijzigd {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)


De categorieën Favorieten en Tracks hebben een speciale map *Laatst gewijzigd*. Aangezien de lijst in deze categorieën erg groot kan zijn, omdat deze al uw bestaande favorieten of tracks bevat, is deze map noodzakelijk voor gemakkelijke en snelle toegang tot uw meest recente bestemmingen.


## Navigatiefuncties {#navigation-features}

Naast de basisfuncties van de OsmAnd-app in *Android Auto* die handige navigatie in uw voertuig bieden, zijn er een aantal extra functies die uw ervaring verbeteren en navigatie persoonlijker, comfortabeler en efficiënter maken.


### Volgende afslag & Route-info {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

De widget **Volgende afslag** toont de afstand en het type van de [volgende afslagmanoeuvre](../widgets/nav-widgets.md#next-turn) en de [straatnaam](../widgets/nav-widgets.md#street-name).

Route-informatie bestaat uit:

- [geschatte reistijd](../widgets/nav-widgets.md#time-to-destination),
- [geschatte aankomsttijd](../widgets/nav-widgets.md#time-to-destination),
- [reisafstand](../widgets/nav-widgets.md#distance-to-destination).

Indien ingeschakeld, toont de [widgetinstelling](#eta-next-stop) (Route-informatie) routegegevens voor de volgende stop ([het tussenpunt](../navigation/setup/route-navigation.md#intermediate-destinations)).


### Schermwaarschuwingswidget {#screen-alert-widget}

Deze informatiewidget combineert waarschuwingstypen zoals **Voetgangersoversteekplaatsen** en **Snelheidslimiet**.

- De typen waarschuwingen hebben een verschillend uiterlijk, afhankelijk van de **<Translate android="true" ids="driving_region"/>** en kunnen worden geconfigureerd in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *Android Auto* is het niet mogelijk om de weergave van waarschuwingen in te stellen, u moet de widget in de applicatie configureren voordat u de navigatie start en uw apparaat met het voertuig verbindt.
- Voor een gedetailleerde beschrijving van de waarschuwingstypen, zie [dit artikel](../widgets/nav-widgets.md#alert-types).
- Om schermwaarschuwingen voor beschikbare profielen in te stellen, zie het artikel [Navigatie-instellingen](../navigation/guidance/navigation-settings.md#screen-alerts).


### Snelheidsmeter {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

De **Snelheidsmeter**-widget is een geïntegreerd interface-element dat de *huidige snelheid* met behulp van GPS-gegevens en de *snelheidslimiet* uit de [OSM-database](https://wiki.openstreetmap.org/wiki/Key:maxspeed) en [OsmAnd-instellingen](../navigation/guidance/voice-navigation.md#speed-limit) op het scherm van het multimediasysteem van het voertuig weergeeft.

- De **Snelheidsmeter-widget** is [*profielafhankelijk*](../personal/profiles.md), dus als u de instellingen voor één profiel wijzigt, worden deze niet op een ander profiel toegepast.
- Er is geen optie om de weergave van de **Snelheidsmeter-widget** rechtstreeks in *Android Auto* aan te passen, u moet deze configureren in de OsmAnd-app voordat u de navigatie start en uw apparaat met het voertuig verbindt.
- Voor meer informatie over het toevoegen en configureren van de *Snelheidsmeter*-widget op het display, leest u het artikel [Informatiewidgets](../widgets/info-widgets.md#speedometer).


### Kaartweergave (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

De OsmAnd-app stelt u in staat om de 3D-kaartweergave op het *Android Auto*-scherm te gebruiken om uw route en navigatie weer te geven.

- Om deze functie in te schakelen, moet u [Kaartweergave Versie 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) selecteren.
- Open de hoofd *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* rechtstreeks in de OsmAnd-app.
- Na het configureren van de instellingen, wordt de **3D-knop** weergegeven op het *Android Auto*-scherm wanneer de categorielijst voor bestemmingen is gesloten.
- U kunt schakelen tussen 3D / 2D-kaartmodi door op deze knop te tikken.


### Gesproken aanwijzingen {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Gesproken aanwijzingen zijn een van de meest nuttige functies van OsmAnd tijdens het navigeren voor *Android Auto*, waardoor u realtime begeleiding krijgt en de bestuurder zich kan concentreren op de weg. Gesproken aanwijzingen geven duidelijke instructies over afslagen, richtingen en andere navigatie-instructies, wat zorgt voor een veiliger en comfortabeler gebruik van het navigatiesysteem.

Om [gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) te configureren volgens het geselecteerde profiel, moet u dit doen voordat u een route start in de OsmAnd-app op uw apparaat. In *Android Auto* is alleen de instelling beschikbaar om alle geselecteerde gesproken aanwijzingen tegelijkertijd uit of aan te zetten (*Instellingenknop → Gesproken aanwijzingen (aan/uit)*).


### ETA Volgende stop {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

In de OsmAnd-app kunt u een of meer [tussenpunten](../navigation/setup/route-navigation.md#intermediate-destinations) voor de navigatieroute selecteren.

Om [**Route-info** voor een tussenpunt (volgende stop)](#next-turn--route-info) in of uit te schakelen, gaat u naar *Android Auto (OsmAnd)→ Instellingenknop → Routegegevens voor de volgende stop weergeven → Aan/Uit*. Deze optie toont de tijd en afstand tot de volgende stop op de [*Route-info*-widget](#next-turn--route-info).


### Kaartmodus {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

*Android Auto* en OsmAnd bieden de mogelijkheid om de kaart aan te passen aan de lichtomstandigheden. In de *Dagkaartmodus* blijft het kleurenschema helder en contrasterend, waardoor het zelfs bij fel zonlicht gemakkelijker te lezen is. In de *Nachtmodus* worden de kaarten donkerder, wat de bestuurder helpt beter te navigeren in het donker.

OsmAnd heeft opties voor de [kaartmodus](../map/vector-maps.md#map-mode), maar wanneer u de app in *Android Auto* gebruikt, worden deze opties genegeerd. In plaats daarvan wordt de modus gebruikt die u hebt geselecteerd in de systeeminstellingen van *Android Auto* voor kaarten.

- Selecteer Dagmodus of Nachtmodus om de kaartweergave ongewijzigd te laten.
- Als u wilt dat de kaartweergavemodus afhankelijk van het tijdstip van de dag schakelt, selecteert u de Automatische modus.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->


### Gesplitst scherm {#split-screen}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

De OsmAnd-app kan worden geopend en gebruikt om te navigeren in *Android Auto* op het multimediasysteem van het voertuig, tegelijkertijd met muziek-, berichten- of andere meldingsapps. Het instellen van de gesplitste schermweergave op een telefoon die is verbonden met *Android Auto* of op het scherm in uw voertuigsysteem.

1. Tik op het startscherm op Apps.
2. Tik op Instellingen.
3. Zoek Meerdere vensters en kies de schakelaar.
4. Keer terug naar het startscherm.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->


In de Android Auto-instellingen kunt u de positie van de taakbalk en de lay-out van het startscherm wijzigen:

- **Positie van de taakbalk:**
  Ga naar *Android Auto-instellingen → Snelle bedieningselementen voor apps weergeven* en schakel de schakelaar uit. Dit verplaatst de taakbalk van de onderkant naar de zijkant van het scherm.

- **Lay-out van het startscherm:**
  Ga naar *Android Auto-instellingen → Lay-out wijzigen → Locatie bestuurdersstoel wijzigen* om de lay-out aan te passen op basis van de positie van de bestuurdersstoel.


## Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. [Probleem met kaartoriëntatie.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Probleem met volumeregeling.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Locatievertragingen (ANR-crashes).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Veelgestelde vragen over het verbindingsscherm:
    - *Waarom kan ik de app niet bedienen vanaf mijn telefoon wanneer deze is verbonden met Android Auto?*
        Om veiligheidsredenen is het OsmAnd-app-scherm op uw telefoon vergrendeld wanneer deze is verbonden met Android Auto. U kunt alleen met de app communiceren via het autodashboard.
    - *Kan ik het vergrendelde scherm uitschakelen en de app op mijn telefoon gebruiken?*
        Nee, Android Auto dwingt deze beperking af om afleiding tijdens het rijden te voorkomen.
    - *Wat moet ik doen als mijn telefoon en autodashboard niet verbonden lijken te zijn?*
        Zorg ervoor dat uw apparaat correct is verbonden via USB of Bluetooth.
        Start het infotainmentsysteem van uw auto en de OsmAnd-app opnieuw op als de verbinding instabiel is.


> *Laatst bijgewerkt: maart 2025*