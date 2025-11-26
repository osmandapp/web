---
source-hash: bbd8a4068925d6a30bba06c2e75c496a884452d7e338c2615117b76552e9cc2c
sidebar_position: 15
title:  Ritten Registreren
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overzicht {#overview}

De **plug-in Ritten Registreren** is een essentieel hulpmiddel voor het vastleggen van uw routes, bewegingen en trainingen. Met deze functie kunt u niet alleen uw ritten opnemen, maar kunt u uw tracks ook gemakkelijk hergebruiken, wijzigen, bijwerken en delen met anderen.  

Met de *plug-in Ritten Registreren* kunt u nieuwe tracks aanmaken, opgenomen tracks direct op de kaart weergeven en bestaande records beheren. Het biedt waardevolle inzichten in uw ritten, zoals snelheid, hoogteverschillen, terreindetails en gegevens van externe sensoren. De plug-in registreert uw route, waardoor gedetailleerde analyse en delen na uw rit mogelijk is.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geregistreerde rit in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geregistreerde rit in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Vereiste Instelparameters {#required-setup-parameters}

Om te beginnen met het opnemen van tracks, moet u de volgende instellingen doen:

1. [Activeer](../plugins/index.md#enable--disable) de **plug-in Ritten Registreren**.  
2. [Configureer](#recording-settings) de **opname-instellingen** voor het vereiste [profiel](../personal/profiles.md).  
3. [Voeg](#widgets) **widgets voor Ritten Registreren** toe aan het scherm (optioneel).
4. [Beheer](../map/tracks/appearance.md) tracks op de kaart (optioneel).


## Nieuwe Track Registreren {#new-track-recording}

![Afstand/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Afstand/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Met de plug-in Ritten Registreren in OsmAnd kunt u eenvoudig beginnen met het opnemen van uw track met behulp van verschillende handige opties. Hier is hoe u uw reis kunt beginnen:

- [Afstand/Start-Stop widget](#distance-start-stop) — Gebruik om de opname te activeren.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Tik op de knop in het *Hoofd<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Snelle Actie](../widgets/quick-action.md#add-and-delete-actions) knoppen — Om een ritopname te starten, ga naar *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → Actie toevoegen → Mijn Plaatsen* en kies [Start / Pauze: Ritregistratie](../widgets/quick-action.md#my-places).

- *Alleen Android*:
    - Ga naar *Hoofd<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systeemmelding](#notifications) — Gebruik in het meldingengebied van uw apparaat .

    - [Applicatie launcher](#launcher-android) — Gebruik om de opname te starten.  

**Aanbevelingen:**

- [Precieze locatie](../start-with/first-steps.md#permission-to-access-the-location) — Voor een nauwkeurige trackregistratie, zorg ervoor dat OsmAnd deze toestemming heeft.

- [Probleemoplossing](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS-apparaten** kunnen soms tijdelijk **apps op de achtergrond onderbreken of stoppen**, wat de trackregistratie kan verstoren.

- **Locatiebron** (*Alleen Android*) — Pas de instellingen in OsmAnd aan om de meest geschikte GPS-provider te kiezen voor nauwkeurige opnames. [Lees hier meer](../personal/global-settings.md#location-source).


### Startdialoog {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Het startdialoogvenster wordt geopend als de optie **<Translate android="true" ids="show_start_dialog"/>** is ingeschakeld in de instellingensectie van het startdialoogvenster.

![Opname starten in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Het startdialoogvenster wordt geopend als de optie **<Translate ios="true" ids="track_interval_remember"/>** niet is ingeschakeld.

![Opname starten in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Loginterval** (*Android/iOS*). Deze instelling bepaalt hoe vaak de app gegevens van de GPS-sensor opvraagt om nieuwe punten op uw track te markeren. Door het interval aan te passen, kunt u een balans vinden tussen trackdetail en batterijverbruik. Een korter interval resulteert in meer gedetailleerde tracks maar een hoger batterijverbruik, terwijl een langer interval de batterij spaart maar de nauwkeurigheid van de track vermindert.

- **Lijnpictogram** (*Android*). Tik op dit pictogram om toegang te krijgen tot de [opties voor trackweergave](../map/tracks/appearance.md). Hier kunt u aanpassen hoe uw track op de kaart verschijnt, inclusief lijnkleur, dikte en stijl. Zodra u een track met een aangepaste weergave opslaat, worden deze instellingen behouden voor toekomstige opnames, wat zorgt voor consistentie elke keer dat u de track bekijkt of opnieuw inschakelt.

- **Instellingenmenu** (*Android*). Open dit menu om uw opnamevoorkeuren te verfijnen. Voor een gedetailleerd overzicht, zie de sectie [Opname-instellingen](#recording-settings).

- **Onthoud mijn keuze** (*iOS*). Indien ingeschakeld, start de trackregistratie automatisch, zonder te vragen om extra instellingen of bevestiging. Als u de opname-instellingen wilt wijzigen voordat u een nieuwe track start, start dan de plug-in Ritten Registreren opnieuw om het instellingenmenu weer te laten verschijnen.


### Launcher (Android) {#launcher-android}

![Contextmenu van pictogram](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Pictogram Opname Starten](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

U kunt snel een nieuwe trackregistratie starten rechtstreeks vanaf het scherm van uw Android-apparaat met behulp van het contextmenu van het OsmAnd-app-pictogram.

- **Tik lang** op het OsmAnd-app-pictogram om het contextmenu te openen, waar u de optie **Opname Starten** kunt vinden.

- Tik op de optie **Opname Starten** om de OsmAnd-app te starten met de [trackregistratie-instellingen](#overview-screen) weergegeven op het scherm.

- **Tik lang** op de optie **Opname Starten** in het contextmenu van het app-pictogram om een snelkoppeling toe te voegen voor snellere toegang.

Terwijl de trackregistratie actief is, verschijnt er een meldingsbadge op de hoek van het OsmAnd-app-pictogram, wat aangeeft dat de opname bezig is. Voor meer details over het beheren van deze melding, zie de sectie [Meldingen](#notifications).


## Huidige Trackregistratie {#current-track-recording}

Voor *Stoppen / Opslaan / Pauzeren*:

- Om de opname te **Stoppen**, tikt u op de overeenkomstige knop in het dialoogvenster van de [Afstand/Start-Stop widget](#distance-start-stop).

- (*Alleen Android*) Om de opname te **Stoppen**, tikt u op het hoofdmenu-item *Ritregistratie*.

- Om een opnametrack te **Stoppen** of **Opslaan**, ga naar *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> tabblad*](../personal/myplaces.md#tracks) en tik op de juiste knop in het veld *Huidige opnametrack*.

- Om **Opslaan, Pauzeren, een nieuw segment Starten** of de opname **Voltooien**, gebruik de [Snelle Actie](../widgets/quick-action.md#add-and-delete-actions) knoppen. Ga naar *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → Actie toevoegen → [Mijn Plaatsen](../widgets/quick-action.md#my-places)* en voeg een of meer snelle actieknoppen toe.

- (*Alleen Android*) Om een opnametrack te **Pauzeren** of **Opslaan**, gebruik de systeem[melding](#notifications) in het meldingengebied van uw apparaat.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Overzichtsscherm {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![overzicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_new_andr.png)  ![overzicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Opname voltooien in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Opname voltooien in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_new_ios.png)

</TabItem>

</Tabs>

In OsmAnd behandelen de **Android**- en **iOS**-versies de interface voor trackregistratie iets anders. Op Android vindt u een speciaal menu voor de context *Trackregistratie*, terwijl dit op iOS is gestroomlijnd in het contextmenu *Huidige opnametrack*.

Terwijl u een track opneemt, worden er dynamische grafieken gegenereerd die real-time visuele gegevens over uw reis bieden. Deze grafieken kunnen informatie weergeven voor de hele route of alleen voor een geselecteerd segment, afhankelijk van uw zoomniveau.  
Hier is wat u erop kunt vinden:

- **Gegevenswaarden**. Aan de rechterkant van de grafiek staan de ***hoogste***, ***laagste*** en ***gemiddelde*** waarden voor het zichtbare gedeelte van de track.

- **Grafiek voor belangrijke informatie**:
    - ***Android***. Voor de ***Y-as*** op de grafiek kunt u *tot twee parameters* selecteren uit alle beschikbare gegevens zoals *Hoogte*, *Helling*, *Snelheid* en [informatie van externe sensoren](../plugins/external-sensors.md#trip-recording). Voor de ***X-as***, selecteer om ofwel *Afstand*, *Tijd* of *Tijd van de dag* weer te geven.
    - ***iOS***. De parameters zijn georganiseerd in tabbladen *Overzicht*, *Hoogte* en *Snelheid* met de juiste waarden voor de Y-as en *Afstand* voor de X-as.

- **Statistiek**. Voor Android wordt een constante set statistische gegevens weergegeven, onafhankelijk van de grafiekinstellingen: *Afstand*, *Tijdsduur*, *Stijgen*, *Dalen*, *Gemiddelde snelheid*. Voor iOS heeft elk tabblad, Overzicht, Hoogte en Snelheid, een andere gegevensset.

Voor een meer gedetailleerde weergave kunt u **de grafiek schalen**:

- Gebruik het [tweevingergebaar](../map/interact-with-map.md#gestures) om in of uit te zoomen en te focussen op specifieke intervallen.
- Tik op een willekeurig punt in de grafiek om een markering weer te geven die de exacte waarden voor die locatie toont.

| |  
| ------------- |
|**Tabblad Overzicht** iOS (voor Android zijn de Y-as parameters *Hoogte*, *Snelheid* en de X-as parameter is *Afstand*). Dit tabblad toont een grafiek die veranderingen in snelheid en hoogte langs de lengte van de track weergeeft, en belangrijke trackdetails. Trackgegevens voor iOS: *Afstand*, *Tijdsduur*, *Starttijd* en *Eindtijd*. U kunt hieronder zien hoe dit wordt weergegeven in de Android- en iOS-versies. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_overview_new_andr.png)  ![gegevens](@site/static/img/plugins/trip-recording/graph_overview_new_ios.png) |
| **Tabblad Hoogte** iOS (voor Android zijn de Y-as parameters *Hoogte*, *Helling* en de X-as parameter is *Afstand*). Dit tabblad richt zich op het hoogteprofiel van uw opgenomen track en biedt inzicht in hoogteveranderingen en terreinhellingen. Belangrijke statistieken voor iOS zijn: *Gemiddelde Hoogte*, *Hoogtebereik*, *Stijgen* en *Dalen*. De onderstaande grafieken illustreren de verschillen tussen de Android- en iOS-interfaces. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_altitude_new_andr.png)  ![gegevens](@site/static/img/plugins/trip-recording/graph_altitude_new_ios.png) |
| **Tabblad Snelheid** iOS (voor Android is de Y-as parameter *Snelheid* en de X-as parameter is *Afstand*). Het tabblad Snelheid benadrukt snelheidsgerelateerde gegevens gedurende de hele track. Voor iOS bevat het informatie zoals *Gemiddelde Snelheid*, *Maximale Snelheid*, *Tijd in Beweging* en *Gecorrigeerde Afstand*. De onderstaande schermafbeeldingen tonen hoe deze gegevens op beide platforms worden weergegeven. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_speed_new_andr.png)  ![gegevens](@site/static/img/plugins/trip-recording/graph_speed_new_ios.png) |
| Voor **Android** kunt u meer combinaties maken van beschikbare Y-as gegevens en X-as waarden. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Voor meer details kunt u het [**Tracks Contextmenu**](../map/tracks/track-context-menu.md#options) verkennen, waar u verschillende track-gerelateerde opties kunt beheren, zoals hernoemen, verwijderen of waypoints toevoegen. Om aan te passen hoe tracks op de kaart verschijnen, bezoekt u de sectie [**Weergave**](../map/tracks/appearance.md). Als u specifieke waypoints aan uw huidige track wilt toevoegen, bekijk dan de gids [**Trackpunten**](../map/tracks/track-context-menu.md#points--waypoints). Voor eventuele wijzigingen, zoals het hernoemen van een track, gebruikt u het tabblad [**Opties**](https://osmand.net/docs/user/map/track-context-menu#options) binnen het Tracks Contextmenu.
:::


### Tonen op de Kaart {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![toon_tr_opkaart_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Kaarttracks configureren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![toon_tr_opkaart_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Kaarttracks configureren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Beheer welke tracks zichtbaar zijn op uw kaart met een van de twee opties. Ga naar *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> tabblad*](../map/tracks/index.md#my-places) en schakel de optie *Toon op kaart* in voor elke track die u wilt weergeven of verbergen. Als alternatief kunt u naar *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gaan om snel de zichtbaarheid van al uw tracks op één plek aan te passen.


### Geregistreerd GPX-bestand {#recorded-gpx-file}

OsmAnd legt uw reis vast in een gestructureerd [GPX-bestand](https://en.wikipedia.org/wiki/GPS_Exchange_Format), met een hiërarchie van *bestand > track > segmenten > punten*. Zo werkt het:

- **Punten** vertegenwoordigen individuele momenten van uw opgenomen pad, elk gemarkeerd met attributen zoals coördinaten, snelheid, hoogte en koers.
- Deze punten worden gegroepeerd om **tracks** te vormen, die uw hele route vertegenwoordigen.
- Als er een onderbreking in de opname is (bijvoorbeeld als het volgen werd gepauzeerd), start het volgende punt na de onderbreking een nieuw **segment**, wat de scheiding in uw reis markeert.
- Zowel **segmenten** als **tracks** worden visueel weergegeven met *Start*- en *Finish*-pictogrammen op de kaart.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parameter  | Beschrijving |
|-----------------|----------------|
| `trkpt` | **Trackpunt** vertegenwoordigt een specifieke geografische locatie die tijdens uw activiteit is gedetecteerd. Elk trackpunt bevat breedte- en lengtegraadcoördinaten, die de basis vormen van uw opgenomen pad. |
| `trkseg`  | **Tracksegment** groepeert opeenvolgende trackpunten, gescheiden door onderbrekingen in de activiteit, zoals pauzes of stops. Dit helpt om continue beweging te onderscheiden van rustperiodes binnen één opname.  |
| `lat` | **Breedtegraad** geeft de noord-zuidpositie van een punt op het aardoppervlak aan. Het is de helft van het coördinatenpaar dat wordt gebruikt om uw exacte locatie te bepalen.   |
| `lon` | **Lengtegraad** specificeert de oost-westpositie en vult de breedtegraad aan om een punt op de wereldbol nauwkeurig te lokaliseren. Samen bepalen breedte- en lengtegraad uw precieze geografische positie.    |
| `ele` | **Hoogte** meet de hoogte van een trackpunt boven zeeniveau, geregistreerd in meters. Dit kan handig zijn voor het volgen van hoogteveranderingen tijdens uw activiteiten, zoals wandelingen of fietstochten.    |
| `time` | **Tijdstempel** registreert de exacte datum en tijd waarop een trackpunt wordt gelogd. Hiermee kunt u de duur en timing van uw activiteit met precisie volgen.    |
| `hdop` | **Horizontale Dilutie van Precisie (HDOP)** is een maat voor de GPS-nauwkeurigheid, die de potentiële fout in locatie weerspiegelt als gevolg van de posities van de satellieten. In tegenstelling tot de standaard HDOP, gebruiken OsmAnd GPX-tracks deze waarde om de horizontale nauwkeurigheid in meters weer te geven. Let op dat deze implementatie verschilt van de typische HDOP-standaarden. [Lees meer](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Snelheid** registreert uw bewegingssnelheid in meters per seconde. Het geeft inzicht in uw tempo tijdens verschillende segmenten van uw activiteit.  |
| `heading`  | **Koers** geeft de richting aan waarin de voorkant van uw voertuig of apparaat wijst, gemeten in graden. Dit is anders dan de 'course', wat het daadwerkelijke pad van de beweging is. Verschillen kunnen optreden door externe factoren zoals wind, stroming of wegomstandigheden. [Meer over koers](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | **Snelheid** van [externe sensoren](../plugins/external-sensors.md) legt gegevens vast van aangesloten sensoren, wat preciezere snelheidsinformatie oplevert, vooral handig bij het fietsen. Voor meer details, zie de [documentatie van het GPX-bestandsformaat](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Cadans** meet het aantal pedaalomwentelingen per minuut, geregistreerd met [externe sensoren](../plugins/external-sensors.md). Dit is met name handig voor fietsers die hun trapefficiëntie willen monitoren en optimaliseren. [Lees meer](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Fietsvermogen** kwantificeert het vermogen dat wordt gegenereerd tijdens het trappen, vastgelegd door [externe sensoren](../plugins/external-sensors.md). Het is een essentiële metriek voor serieuze fietsers die hun prestaties willen meten. [Lees meer](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Luchttemperatuur** registreert de omgevingstemperatuur tijdens uw activiteit, gemeten met [externe sensoren](../plugins/external-sensors.md). Let op dat watertemperatuur niet wordt ondersteund. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Hartslag** monitort uw hartslagen per minuut, met behulp van gegevens van aangesloten [sensoren](../plugins/external-sensors.md). Deze informatie kan essentieel zijn voor het volgen van uw cardiovasculaire prestaties tijdens trainingen. [Lees meer](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Opname-instellingen {#recording-settings}

Voordat u begint met het volgen van uw ritten, moet u de **plug-in Ritten Registreren** correct configureren voor optimale prestaties.

- **Profielspecifieke instellingen**. Elk profiel in de app kan zijn eigen unieke instellingen voor Ritten Registreren hebben. Hiermee kunt u het opnamegedrag nauwkeurig aanpassen op basis van uw activiteit, zoals autorijden, fietsen of zelfs nordic walking, wat verschillende configuraties kan vereisen.

- **Pas opnameparameters aan**. De opname-instellingen kunnen variëren afhankelijk van hoe u zich verplaatst. Bijvoorbeeld, lange afstanden rijden kan een lagere opnamefrequentie vereisen, terwijl wandelen of lopen kan profiteren van frequentere updates.

- **Precieze locatiegegevens**. Om ervoor te zorgen dat uw opnames soepel en bruikbaar zijn voor toekomstig gebruik, kunt u de manier waarop u locatiepunten vastlegt aanpassen. Dit kan het aanpassen van de opnamefrequentie, het formaat van uw gegevens (zoals het aantal punten per afstandseenheid) of de afstand tussen opgenomen punten omvatten.

- **Algemene instellingen**. De instellingen voor Ritten Registreren worden per profiel geconfigureerd, die u kunt beheren in de algemene [instellingen](../personal/global-settings.md) van de app. Voordat u de plug-in Ritten Registreren aanpast, selecteert u het profiel dat u wilt configureren in de sectie [profielen](../personal/profiles.md). Navigeer van daaruit naar de instellingen van het profiel om toegang te krijgen tot de opties voor Ritten Registreren.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ritten registreren configureren in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Ritten registreren configureren in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ritten registreren configureren in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Ritten registreren configureren in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving |
|---|---|
| **Dialoogvenster batterij-optimalisatie** (*Android*) | Opent de [Android batterij-optimalisatie-instellingen](#battery-optimization). Tik op *Niet meer vragen* als u niet opnieuw gevraagd wilt worden. |
| **Startdialoog tonen** (*Android*) | Schakelt een dialoogvenster in waar u instellingen kunt configureren voordat u de opname start. Indien uitgeschakeld, start de opname automatisch. |
| **Automatisch track opnemen tijdens navigatie** | Neemt de track automatisch op tijdens de navigatie en slaat deze op in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Opmerking*: Trackregistratie verbruikt batterij en blijft op de achtergrond draaien, zelfs als het scherm uit is. |
| **Algemeen loginterval** | Bepaalt hoe vaak locatiepunten worden opgenomen. De standaard is 5 seconden. Dit wordt ingeschakeld met de *Ritregistratie-widget*. |
| **Minimale verplaatsing** | Een filter om te voorkomen dat punten worden opgenomen wanneer er weinig of geen beweging is. Het helpt data-ruis te verminderen.<ul><li>*Neveneffecten*: Rustperiodes worden mogelijk niet opgenomen en kleine bewegingen kunnen worden genegeerd. Dit kan de hoeveelheid naverwerkingsdata verminderen, maar kan ook voorkomen dat GPS-fouten worden gelogd.</li><li>*Aanbeveling*: Stel de verplaatsing in op 5 meter als u minder kleine details in uw opnames wilt.</li></ul> |
| **Minimale nauwkeurigheid** | Filtert locatiepunten uit die onder een minimale nauwkeurigheidsdrempel vallen, zoals gerapporteerd door het apparaat.<ul><li>*Neveneffecten*: Punten in gebieden met een slecht signaal (onder bruggen, bomen, tussen gebouwen of bij sommige weersomstandigheden) kunnen ontbreken.</li><li>*Aanbeveling*: Als u niet zeker bent, is het misschien beter om dit filter uit te schakelen om te voorkomen dat u gegevens mist.</li></ul><details><summary>*Opmerking*</summary>Stel dat de GPS net voor de opname was uitgeschakeld. In dat geval kan het eerste gemeten punt een verminderde nauwkeurigheid hebben, dus het is beter om even te wachten voordat u het punt opneemt of het beste van 3 opeenvolgende punten op te nemen.</details> |
| **Minimale snelheid** | Stelt een drempel in om punten te negeren die onder een bepaalde snelheid zijn opgenomen.<ul><li>*Neveneffecten*: Secties waar de snelheid onder een gespecificeerde drempel daalt, worden niet opgenomen.</li><li>*Aanbeveling*: Gebruik in plaats daarvan het filter *Minimale verplaatsing*, omdat dit betere resultaten kan geven zonder belangrijke gegevens te verliezen.</li></ul><details><summary>*Opmerking*</summary>Probeer eerst de bewegingsdetectie via het filter voor minimale logverplaatsing (B) te gebruiken, dit kan betere resultaten opleveren en u verliest minder gegevens. Als uw tracks bij lage snelheden nog steeds ruis bevatten, probeer dan hier waarden die niet nul zijn. Houd er rekening mee dat sommige metingen helemaal geen snelheidswaarde rapporteren (sommige netwerkgebaseerde methoden), in welk geval u niets zou opnemen.<br/><br/>Snelheid > 0 controle: De meeste GPS-chipsets rapporteren alleen een snelheidswaarde als het algoritme bepaalt dat u in beweging bent, en geen als u dat niet bent. Het gebruik van de > 0 instelling in dit filter maakt dus in zekere zin gebruik van de bewegingsdetectie van de GPS-chipset. Maar zelfs als dit hier niet wordt gefilterd tijdens de opname, gebruiken we deze functie nog steeds in onze GPX-analyse om de Gecorrigeerde afstand te bepalen, d.w.z. de waarde die in dat veld wordt weergegeven, is de afstand die is opgenomen terwijl u in beweging was.</details> |
| **Opnames automatisch splitsen na onderbreking** | Splitst tracks automatisch op basis van tijdsonderbrekingen tussen opgenomen punten. <ul><li>Een nieuw segment begint na een onderbreking van 6 minuten.</li><li>Een nieuwe track begint na een onderbreking van 2 uur.</li><li>Een nieuw bestand begint wanneer de datum verandert.</li><li>Onderbrekingen kunnen het gevolg zijn van GPS-signaalverlies, lage snelheid of configuratie-instellingen.</li></ul><details><summary>*Opmerking*</summary>Een onderbreking wordt geïdentificeerd wanneer er geen punten worden opgenomen. Dit kan gebeuren omdat de locatie niet wordt gedetecteerd of omdat deze wordt gedetecteerd maar niet wordt opgenomen. Verschillende factoren kunnen dit veroorzaken, waaronder zwakke GPS-signalen door slechte weersomstandigheden, of de bewegingssnelheid die onder de geconfigureerde drempel valt. In dergelijke gevallen, hoewel het apparaat de locatie kan detecteren, wordt deze niet opgenomen.<br/><br/>Deze onderbrekingen in opgenomen gegevens kunnen leiden tot de aanmaak van een nieuw segment binnen dezelfde track, een nieuwe track in hetzelfde bestand, of een nieuw GPX-bestand binnen één opname. Dit wordt beheerd binnen één start/stop opnamesessie.</details> |
| **Voorkom standalone logging** (*Android*) | Pauzeert de trackregistratie wanneer de OsmAnd-app wordt afgesloten (via *recente apps*). De achtergrondindicatie wordt niet weergegeven in het Android-meldingspaneel. |
| **Inclusief koers** | Registreert de koers (bewegingsrichting) voor elk punt in het GPX-bestand. De koers is de richting waarin het apparaat wijst, wat kan verschillen van de bewegingsrichting door externe factoren zoals wind of slippen. |
| **Activiteit**  | De optie stelt u in staat om een [activiteitstype](../map/tracks/track-context-menu.md#ttrack-activity-type) voor een profiel vooraf te selecteren, dat vervolgens automatisch wordt toegepast op alle opgenomen tracks. |
| **Externe sensoren** <br/> *Plug-in moet ingeschakeld zijn* | Gegevens van [externe sensoren](../plugins/external-sensors.md#trip-recording) zoals *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, of *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* worden gelogd in het GPX-bestand. *Afstands*gegevens worden niet opgenomen op Android of iOS. Alleen weergegeven wanneer de [plug-in Externe Sensoren](../plugins/external-sensors.md) is ingeschakeld. |
| **Voertuigmetrieken** <br/> *Plug-in moet ingeschakeld zijn* | Gegevens van een [OBD-II scanner](../plugins/vehicle-metrics.md#trip-recording) worden gelogd in het GPX-bestand. Alleen weergegeven wanneer de [plug-in Voertuigmetrieken](../plugins/vehicle-metrics.md) is ingeschakeld.<br />*Opmerking*: U kunt toevoegen welke metrieken u wilt opnemen in het GPX-bestand uit de lijst: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Opslagmap voor tracks** (*Android*) | Bepaalt waar in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* opgenomen tracks worden opgeslagen. Opties zijn onder meer het opslaan van alle tracks in de map Rec of het organiseren ervan per maand, zoals Rec/jjjjj-mm. |
| **Melding** | Regelt de weergave van een systeemmelding voor [ritregistratie](#notifications) in het meldingengebied van het apparaat, waarmee u ritten kunt starten. |
| **Online tracking** (*Android*) | Maakt real-time tracking van uw locatie mogelijk door opgenomen punten naar een opgegeven URL te sturen. Het trackinginterval bepaalt hoe vaak punten worden verzonden, en de tijdbuffer slaat punten op wanneer er geen internetverbinding is.<details><summary>*Opmerking*</summary>Als deze optie is ingeschakeld en de trackregistratie bezig is, wordt de Afstand/Start-Stop (REC) widget **groen** in plaats van **rood**, wat aangeeft dat elk opgenomen punt wordt verzonden naar een opgegeven URL. Het veld **Webadres** stelt u in staat de URL in te voeren met het volgende parameterformaat:<ul><li>`lat={0}`: Breedtegraad</li><li>`lon={1}`: Lengtegraad</li><li>`timestamp={2}`: Tijdstempel (Unix-tijd)</li><li>`hdop={3}`: Horizontale dilutie van precisie</li><li>`altitude={4}`: Hoogte</li><li>`speed={5}`: Snelheid</li><li>`bearing={6}`: Peiling (bewegingsrichting)</li><li>`eta={7}`: Geschatte aankomsttijd (Unix-tijd)</li><li>`etfa={8}`: Geschatte tijd tot het eerste tussenpunt of eindpunt (Unix-tijd)</li><li>`eda={9}`: Geschatte afstand tot aankomst of een markering (in meters)</li><li>`edfa={10}`: Geschatte afstand tot het eerste tussenpunt of eindpunt (in meters)</li></ul>U kunt het **Trackinginterval** instellen om te specificeren hoe vaak locatiepunten worden verzonden, met opties variërend van 0 seconden tot 5 minuten. Daarnaast bepaalt de parameter **Tijdbuffer** hoe lang locatiepunten worden opgeslagen als er geen internetverbinding is, zodat gegevens worden opgeslagen en verzonden wanneer de verbinding wordt hersteld.</details> |
| **Tracks** | Een snelle verwijzing naar de map waar tracks worden opgeslagen in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Plug-ininstellingen naar standaard resetten** | Reset alle ritregistratie-instellingen voor het huidige profiel naar hun standaardwaarden. |
| **Kopiëren van een ander profiel** (*Android*) | Kopieert de ritregistratie-instellingen van het ene profiel naar het andere. |


### Batterij-optimalisatie {#battery-optimization}

<InfoAndroidOnly />

![Track op de kaart iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track op de kaart iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Deze functie stelt u in staat om de batterij-optimalisatie-instellingen voor OsmAnd te beheren om ononderbroken toegang tot uw locatie te garanderen, zelfs wanneer de app op de achtergrond draait tijdens navigatie of trackregistratie.

- **Instellingen voor batterij-optimalisatie**. Opent de Android-instellingen, waar u de batterijbesparende voorkeuren voor OsmAnd kunt wijzigen. [Meer details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Niet meer vragen**. Sluit het dialoogvenster permanent, zodat het niet opnieuw verschijnt.
- **Sluiten**. Sluit het dialoogvenster tijdelijk, het zal de volgende keer dat batterij-optimalisatie aandacht nodig heeft opnieuw verschijnen.


### Meldingen {#notifications}

![Melding Ritten Registreren](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Als [Melding](#recording-settings) is ingeschakeld in de plug-ininstellingen, worden meldingen voor ritregistratie altijd weergegeven in het systeemmeldingsgebied wanneer de opname actief is. Deze melding zorgt ervoor dat het opnameproces niet wordt onderbroken door het systeem en kan niet worden uitgeschakeld tijdens een actieve opname.

- Het meldingengebied wordt geopend wanneer u van boven naar beneden veegt op het scherm en sluit wanneer u omhoog veegt. Deze berichten informeren u over acties zoals het starten/stoppen van de ritregistratie, vooral wanneer automatische opname is ingeschakeld tijdens navigatie.
- Meldingen blijven zichtbaar, ongeacht of de app op de voorgrond, achtergrond draait of gesloten is. U kunt de oude melding handmatig wissen als deze niet langer nodig is, maar dit stopt de lopende opname niet.

**Belangrijke opmerking**.

Dit gedrag is vereist door Android voor elke voorgrondservice, zoals ritregistratie, om voor u zichtbaar te blijven.

- Als de melding wordt verwijderd, stopt Android automatisch de opname. U kunt de instelling [Voorkom standalone logging](#recording-settings) gebruiken.
- De instelling **Melding** in OsmAnd beïnvloedt of de meldingsbalk een snelkoppeling toont om een opname te starten wanneer er geen opname actief is. Het regelt **niet** de zichtbaarheid van de melding tijdens een actieve opname.

**Extra Android-opties**.

![Melding Ritten Registreren](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Android-instellingen → Meldingen en statusbalk → Vergrendelschermmeldingen*** kunt u OsmAnd uit de app-lijst verwijderen om te voorkomen dat meldingen op het vergrendelscherm verschijnen, waardoor onbedoelde schermactivering wordt vermeden. Dit heeft geen invloed op de trackregistratie. Meldingen verschijnen nog steeds in het reguliere meldingengebied.
- **OsmAnd** kan ook verschijnen onder ***Privacy → Speciale Toestemmingen → Scherm inschakelen***. Als u wilt voorkomen dat het scherm wordt ingeschakeld wanneer een melding verschijnt, probeer dan OsmAnd uit deze lijst te verwijderen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Badge-melding**.

![Melding Ritten Registreren](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

De app-pictogrambadge verschijnt naast het OsmAnd-pictogram wanneer de trackregistratie actief is.

- Dit pictogram verdwijnt wanneer de trackregistratie is voltooid. Om te controleren of een opname actief is, kunt u naar *Menu → Mijn Plaatsen → tabblad Tracks* gaan of op de widget tikken om de opname te beheren.  
- Als er geen opname bezig is en de badge nog steeds wordt weergegeven, kan dit betekenen dat er een bericht van OsmAnd in het meldingspaneel van het apparaat is achtergebleven.  
- Om badges in de Android-instellingen uit te schakelen, gaat u naar de *Instellingen → Apps → OsmAnd → Meldingen* van het apparaat en schakelt u de optie voor het weergeven van badges voor deze app uit.


## Widgets {#widgets}

Widgets stellen u in staat om belangrijke informatie over de trackregistratie direct op het scherm weer te geven, zoals *Afstand*, *Duur*, *Stijgen* en *Dalen*. Op Android kunt u ook *Max Snelheid* en *Gemiddelde Helling* widgets toevoegen.

Om *widgets voor Ritten Registreren* te gaan gebruiken, moet u alle volgende instellingen doen:

1. [Activeer de plug-in](../start-with/first-steps.md#how-to-configure-plugins).
2. Configureer de instellingen voor ritregistratie voor het vereiste [profiel](../personal/profiles.md).
3. Voeg de benodigde **widgets voor Ritten Registreren** toe aan het scherm. Let op dat deze configuratie **specifiek is voor elk profiel**.


### Opnamewidget Toevoegen {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_widget_monitoring"/>*

![Afstand/Start-Stop widget toevoegen in Android](@site/static/img/plugins/trip-recording/add_widg_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_widget_monitoring"/>*  

![Afstand/Start-Stop widget toevoegen in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios_2.png)

</TabItem>

</Tabs>

De [widget Ritten Registreren](../widgets/info-widgets.md#trip-recording-widgets) biedt een eenvoudige manier om uw opnamestatus te monitoren en snel toegang te krijgen tot opname-instellingen en details. Deze widget wordt automatisch aan uw scherm toegevoegd wanneer de plug-in Ritten Registreren is ingeschakeld.

Om uw interface aan te passen, kunt u de widget Ritten Registreren en [andere widgets](../plugins/trip-recording#duration-uphill-downhill) toevoegen of verwijderen via het menu Scherm configureren.


### Afstand (Start-Stop) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Opname voltooien in Android](@site/static/img/plugins/trip-recording/distance_start_rec_new_andr.png)
![Ritten registreren widget](@site/static/img/plugins/trip-recording/trip_rec_widgets_mode.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ritten registreren widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Ritten registreren widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)  

</TabItem>

</Tabs>  

Wanneer widgets op de kaart worden weergegeven, onthult het tikken op een van hen extra trackdetails en maakt interactie met de opname mogelijk.
De *Afstand* widget toont de totale afstand van uw huidige opgenomen rit en fungeert als de hoofdinterface voor het beheren van uw opnames. Door erop te tikken wordt het [dialoogvenster Ritten Registreren](#start-a-dialog) geopend, waar u kunt starten, stoppen en gedetailleerde informatie over uw track kunt bekijken.

- De widget wordt automatisch toegevoegd wanneer de *plug-in Ritten Registreren* is ingeschakeld, maar kan worden verborgen via het [menu Scherm configureren](../widgets/configure-screen.md#overview).
- Als de optie *Startdialoog tonen* is uitgeschakeld in de instellingen van de plug-in Ritten Registreren, zal het tikken op de actieve widget nog steeds het *dialoogvenster Ritten Registreren* openen, waardoor u toegang krijgt tot verdere opties en informatie.  

Naast de *Afstand/Start-Stop* widget, bevat de **plug-in Ritten Registreren** drie andere widgets: *Duur*, *Stijgen*, *Dalen*, *Max Snelheid* en *Gemiddelde Helling* (de laatste twee zijn alleen beschikbaar op Android). Deze bieden aanvullende informatie over uw rit, zodat u de voortgang in real-time kunt volgen.

| |
|-----------|
| **Afstand/Start-Stop**. Deze widget toont de afstand van uw lopende ritregistratie. Het wordt automatisch toegevoegd wanneer de plug-in Ritten Registreren is ingeschakeld, maar u kunt het verbergen via het menu Scherm configureren. De widget heeft drie verschillende statussen: *Opnemen*, *Gepauzeerd* en *Inactief*, die elk de huidige status van uw ritregistratie aangeven. |
| ![Ritten registreren (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Om het [dialoogvenster Ritten Registreren](#start-a-dialog) te openen wanneer u op een inactieve widget tikt, schakelt u de optie *Startdialoog tonen* in de instellingen van de plug-in Ritten Registreren in. Als de optie is uitgeschakeld, begint de opname onmiddellijk na het tikken op de widget zonder het dialoogvenster te openen.| 

Op Android ondersteunt de Afstand-widget meerdere weergavemodi:
- **Totale afstand** – totale afstand van de huidige opname (standaard).
- **Laatste stijging** – afstand van het meest recente klimsegment.
- **Laatste daling** – afstand van het meest recente dalingssegment.


### Duur, Stijgen, Dalen {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| |
|------------|
|**Duur**. Toont de totale tijd van de huidige ritregistratie in uren en minuten. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Stijgen**. Toont de totale stijging of het laatste stijgingssegment, afhankelijk van de geselecteerde modus. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Dalen**. Geeft de totale daling of het laatste dalingssegment aan, afhankelijk van de geselecteerde modus. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

| |
|------------|
|**Duur**. Toont de totale tijd van de huidige ritregistratie in uren en minuten. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Stijgen**. Toont de cumulatieve hoogtewinst voor de huidige ritregistratie. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Dalen**. Geeft de totale daling aan die is verzameld tijdens de huidige ritregistratie. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

</TabItem>

</Tabs>

Als u meerdere widgets hebt geselecteerd — *Duur*, *Stijgen* of *Dalen* — kunt u voor elk hetzelfde dialoogvenster openen zonder te hoeven schakelen of het te sluiten. Deze uniforme interface maakt het gemakkelijk om alle gerelateerde informatie naadloos te bekijken en te beheren.

### Max Snelheid & Gemiddelde Helling {#max-speed--average-slope}

<InfoAndroidOnly />

![Max Snelheid Android](@site/static/img/widgets/max_speed_android.png) ![Gemiddelde Helling Android](@site/static/img/widgets/average_slope_android.png)  

De **Max Snelheid** widget toont de maximale snelheid voor de momenteel opgenomen rit. Tik op de widget om te schakelen tussen de algemene maximale snelheid en de maximale snelheid van het laatste stijgings- of dalingssegment.

De **Gemiddelde Helling** widget toont de gemiddelde helling voor het laatste stijgings- of dalingssegment van de huidige rit. Het helpt om te schatten hoe steil de vorige klim of daling was, op basis van hoogtewinst en afstand.


## Gerelateerde Artikelen {#related-articles}

- [Kaart Contextmenu](../map/map-context-menu.md)
- [Track op kaart tonen](../map/tracks/index.md)
- [Analyseren op kaart](../map/tracks/index.md#analyze-track-on-map)
- [Track Contextmenu](../map/tracks/track-context-menu.md)
- [Navigatie op basis van track](../navigation/setup/gpx-navigation.md)

### Veelvoorkomende Problemen en Oplossingen {#common-issues-and-solutions}

- Ritregistratie start niet.
    - Zorg ervoor dat de **plug-in Ritten Registreren** is ingeschakeld: *Menu → Plug-ins → Ritten Registreren → Inschakelen*.
    - Controleer of de instellingen correct zijn: *Menu → Profiel configureren → Plug-ininstellingen → Ritten Registreren*.
    - Als de opname nog steeds niet start, start de app opnieuw en probeer het nogmaals.

- Ritregistratie stopt onverwacht.
    - Controleer of de *batterij-optimalisatie-instellingen van uw apparaat* de opname stoppen. Sommige apparaten kunnen achtergrondactiviteit pauzeren om stroom te besparen. Ga naar *Apparaatinstellingen → Batterij*.

- Geregistreerde afstand komt niet overeen met de werkelijke afstand.
    - Controleer of GPS is ingeschakeld en een actief signaal heeft.  
    - Verlaag de drempel voor GPS-nauwkeurigheid: *Menu → Profiel configureren → Ritten Registreren → Minimale nauwkeurigheid*.

- Geregistreerde tracks zijn ruisachtig. [(controleer)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Geregistreerde tracks hebben gaten. [(controleer)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Hoe de afgelegde afstand te volgen. [(controleer)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Voor aanvullende probleemoplossing, bezoek: [Probleemoplossing voor trackregistratie](https://osmand.net/docs/user/troubleshooting/track-recording-issues).