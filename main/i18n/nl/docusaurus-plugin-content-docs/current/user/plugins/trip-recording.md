---
source-hash: 65d58e4d60970c5f1ac65b7011c0c7fe2efa530f4578330a7ac4de7a0624b753
sidebar_position: 15
title:  Ritregistratie
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

De **Ritregistratie-plugin** is een essentieel hulpmiddel voor het vastleggen van uw routes, bewegingen en trainingen. Met deze functie kunt u niet alleen uw ritten opnemen, maar ook eenvoudig hergebruiken, wijzigen, bijwerken en uw tracks delen met anderen.

Met de *Ritregistratie-plugin* kunt u nieuwe tracks aanmaken, opgenomen tracks direct op de kaart weergeven en bestaande records beheren. Het biedt waardevolle inzichten in uw ritten, zoals snelheid, hoogteverschillen, terreindetails en gegevens van externe sensoren. De plugin registreert uw route, waardoor gedetailleerde analyse en delen na uw rit mogelijk is.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opgenomen rit in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Opgenomen rit in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Vereiste instellingsparameters {#required-setup-parameters}

Om tracks op te nemen, moet u de volgende instellingen maken:

1. [Schakel](../plugins/index.md#enable--disable) de **Ritregistratie-plugin** in.
2. [Configureer](#recording-settings) de **opname-instellingen** voor het vereiste [profiel](../personal/profiles.md).
3. [Voeg](#widgets) **Ritregistratie-widgets** toe aan het scherm (optioneel).
4. [Beheer](../map/tracks/appearance.md) tracks op de kaart (optioneel).


## Nieuwe track opnemen {#new-track-recording}

![Afstand/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Afstand/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Met de Ritregistratie-plugin in OsmAnd kunt u eenvoudig beginnen met het opnemen van uw track met behulp van verschillende handige opties. Zo kunt u uw reis beginnen:

- [Afstand/Start-Stop widget](#distance-start-stop) — Gebruik om de opname te activeren.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Tik op de knop in het tabblad *Hoofd <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- [Snelactie](../widgets/quick-action.md#add-and-delete-actions) knoppen — Om een rit op te nemen, gaat u naar *Menu → Scherm configureren → Aangepaste knoppen → Snelactie → Actie toevoegen → Mijn plaatsen* en kiest u [Start / Pauze: Ritregistratie](../widgets/quick-action.md#my-places).

- *Alleen Android*:
    - Ga naar *Hoofd <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Systeemmelding](#notifications) — Gebruik in het meldingengebied van uw apparaat.

    - [Applicatiestarter](#launcher-android) — Gebruik om de opname te starten.

**Aanbevelingen:**

- [Nauwkeurige locatie](../start-with/first-steps.md#permission-to-access-the-location) — Voor nauwkeurige trackregistratie, zorg ervoor dat OsmAnd deze toestemming heeft.

- [Probleemoplossing](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **iOS-apparaten** kunnen soms tijdelijk **apps opschorten of stoppen** die op de achtergrond draaien, wat de trackregistratie kan onderbreken.

- **Locatiebron** (*Alleen Android*) — Pas instellingen in OsmAnd aan om de meest geschikte GPS-provider te kiezen voor nauwkeurige opnames. [Meer informatie hier](../personal/global-settings.md#location-source).


### Start een dialoogvenster {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Het startdialoogvenster wordt geopend als de optie **<Translate android="true" ids="show_start_dialog"/>** is ingeschakeld in het instellingengedeelte van het startdialoogvenster.

![Opname starten in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Het startdialoogvenster wordt geopend als de optie **<Translate ios="true" ids="track_interval_remember"/>** niet is ingeschakeld.

![Opname starten in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Loginterval** (*Android/iOS*). Deze instelling bepaalt hoe vaak de app gegevens van de GPS-sensor opvraagt om nieuwe punten op uw track te markeren. Door het interval aan te passen, kunt u een balans vinden tussen trackdetail en batterijverbruik. Een korter interval resulteert in gedetailleerdere tracks maar een hoger batterijverbruik, terwijl een langer interval de batterij spaart maar de tracknauwkeurigheid vermindert.

- **Lijnicoon** (*Android*). Tik op dit icoon om de [Trackweergave-opties](../map/tracks/appearance.md) te openen. Hier kunt u aanpassen hoe uw track op de kaart verschijnt, inclusief lijnkleur, dikte en stijl. Zodra u een track met een aangepaste weergave opslaat, blijven deze instellingen behouden voor toekomstige opnames, wat consistentie garandeert elke keer dat u de track bekijkt of opnieuw inschakelt.

- **Instellingenmenu** (*Android*). Open dit menu om uw opnamevoorkeuren nauwkeurig af te stemmen. Voor een gedetailleerd overzicht, raadpleeg de sectie [Ritregistratie-instellingen](#recording-settings).

- **Mijn keuze onthouden** (*iOS*). Indien ingeschakeld, start de trackregistratie automatisch, zonder te vragen om aanvullende instellingen of bevestiging. Als u de opname-instellingen wilt wijzigen voordat u een nieuwe track start, start u de Ritregistratie-plugin opnieuw om het instellingenmenu opnieuw te laten verschijnen.


### Launcher (Android) {#launcher-android}

![Contextmenu van icoon](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Start opname-icoon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

U kunt snel een nieuwe trackregistratie starten direct vanaf het scherm van uw Android-apparaat met behulp van het contextmenu van het OsmAnd-app-icoon.

- **Lang tikken** op het OsmAnd-app-icoon om het contextmenu te openen, waar u de optie **Opname starten** kunt vinden.

- Tik op de optie **Opname starten** om de OsmAnd-app te starten met de [trackregistratie-instellingen](#overview-screen) op het scherm.

- **Lang tikken** op de optie **Opname starten** in het contextmenu van het app-icoon, om een snelkoppeling toe te voegen voor snellere toegang.

Terwijl de trackregistratie actief is, verschijnt er een meldingsbadge in de hoek van het OsmAnd-app-icoon, wat aangeeft dat de opname bezig is. Voor meer details over het beheren van deze melding, zie de sectie [Melding](#notifications).


## Huidige track opnemen {#current-track-recording}

Voor *Stoppen / Opslaan / Pauzeren*:

- Om de opname te **stoppen**, tikt u op de corresponderende knop in het dialoogvenster van de [Afstand/Start-Stop widget](#distance-start-stop).

- (*Alleen Android*) Om de opname te **stoppen**, tikt u op het menu-item *Ritregistratie* in het hoofdmenu.

- Om een opnametrack te **stoppen** of **op te slaan**, gaat u naar *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> tabblad*](../personal/myplaces.md#tracks) en tikt u op de juiste knop in het veld *Momenteel opnemende track*.

- Om een nieuw segment op te **slaan, pauzeren, starten** of de opname te **beëindigen**, gebruikt u de [Snelactie](../widgets/quick-action.md#add-and-delete-actions) knoppen. Ga naar *Menu → Scherm configureren → Aangepaste knoppen → Snelactie → Actie toevoegen → [Mijn plaatsen](../widgets/quick-action.md#my-places)* en voeg een of meer snelactieknoppen toe.

- (*Alleen Android*) Om een opnametrack te **pauzeren** of **op te slaan**, gebruikt u de systeem [melding](#notifications) in het meldingengebied van uw apparaat.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Overzichtsscherm {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![overzicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![overzicht](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Opname beëindigen in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Opname beëindigen in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd behandelen de **Android**- en **iOS**-versies de trackregistratie-interface iets anders. Op Android vindt u een speciaal menu voor de *Trackregistratie*-context, terwijl dit op iOS is gestroomlijnd in het contextmenu *Momenteel opnemende track*.

Terwijl u een track opneemt, worden dynamische grafieken gegenereerd, die real-time visuele gegevens over uw reis bieden. Deze grafieken kunnen informatie weergeven voor de hele route of slechts voor een geselecteerd segment, afhankelijk van uw zoomniveau.
Hier is wat u erop kunt vinden:

- **Gegevenswaarden**. Aan de rechterkant van de grafiek staan de ***hoogste***, ***laagste*** en ***gemiddelde*** waarden voor het zichtbare deel van de track.

- **Grafiek voor belangrijke informatie**:
    - ***Android***. Voor de ***Y-as*** op de grafiek kunt u *maximaal twee parameters* selecteren uit alle beschikbare gegevens, zoals *Hoogte*, *Helling*, *Snelheid* en [externe sensorinformatie](../plugins/external-sensors.md#trip-recording). Voor de ***X-as*** selecteert u om *Afstand*, *Tijd* of *Tijdstip* weer te geven.
    - ***iOS***. De parameters zijn georganiseerd in tabbladen *Overzicht*, *Hoogte* en *Snelheid* met de juiste waarden voor de Y-as en *Afstand* voor de X-as.

- **Statistiek**. Voor Android wordt een constante set statistische gegevens weergegeven, onafhankelijk van de grafiekinstellingen: *Afstand*, *Tijdsduur*, *Omhoog*, *Omlaag*, *Gemiddelde snelheid*. Voor iOS heeft elk tabblad, Overzicht, Hoogte en Snelheid, een andere dataset.

Voor een gedetailleerder beeld kunt u de grafiek **schalen**:

- Gebruik het [tweevingergebaar](../map/interact-with-map.md#gestures) om in of uit te zoomen en u te concentreren op specifieke intervallen.
- Tik op een willekeurig punt in de grafiek om een markering weer te geven die de exacte waarden voor die locatie toont.

| |
| ------------- |
|**Overzicht** tabblad iOS (voor Android zijn de Y-as parameters *Hoogte*, *Snelheid*, en de X-as parameter is *Afstand*). Dit tabblad toont een grafiek met veranderingen in snelheid en hoogte langs de lengte van de track, en belangrijke trackdetails. Trackgegevens voor iOS: *Afstand*, *Tijdsduur*, *Starttijd* en *Eindtijd*. U kunt zien hoe dit wordt weergegeven in de Android- en iOS-versies hieronder. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![gegevens](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Hoogte** tabblad iOS (voor Android zijn de Y-as parameters *Hoogte*, *Helling*, en de X-as parameter is *Afstand*). Dit tabblad richt zich op het hoogteprofiel van uw opgenomen track, en geeft inzicht in hoogteveranderingen en terreinhellingen. Belangrijke metingen voor iOS zijn: *Gemiddelde hoogte*, *Hoogtebereik*, *Omhoog* en *Omlaag*. De onderstaande grafieken illustreren de verschillen tussen Android- en iOS-interfaces. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![gegevens](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Snelheid** tabblad iOS (voor Android is de Y-as parameter *Snelheid* en de X-as parameter is *Afstand*). Het tabblad Snelheid toont snelheidsgerelateerde gegevens gedurende de track. Voor iOS omvat het informatie zoals *Gemiddelde snelheid*, *Maximale snelheid*, *Tijd in beweging* en *Gecorrigeerde afstand*. De onderstaande schermafbeeldingen tonen hoe deze gegevens op beide platforms worden weergegeven. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![gegevens](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Voor **Android** kunt u meer combinaties van beschikbare Y-as gegevens en X-as waarden maken. |
| ![gegevens](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Voor meer details kunt u het [**Tracks Contextmenu**](../map/tracks/track-context-menu.md#options) verkennen, waar u verschillende trackgerelateerde opties kunt beheren, zoals hernoemen, verwijderen of waypoints toevoegen. Om aan te passen hoe tracks op de kaart verschijnen, bezoekt u de sectie [**Uiterlijk**](../map/tracks/appearance.md). Als u specifieke waypoints aan uw huidige track wilt toevoegen, raadpleegt u de handleiding [**Trackpunten**](../map/tracks/track-context-menu.md#points--waypoints). Voor eventuele wijzigingen, zoals het hernoemen van een track, gebruikt u het tabblad [**Opties**](https://osmand.net/docs/user/map/track-context-menu#options) binnen het Tracks Contextmenu.
:::


### Weergeven op de kaart {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Kaarttracks configureren Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Kaarttracks configureren iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Beheer welke tracks zichtbaar zijn op uw kaart met behulp van een van de twee opties. Ga naar *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> tabblad*](../map/tracks/index.md#my-places) en schakel de optie *Weergeven op kaart* in voor elke track die u wilt weergeven of verbergen. Als alternatief kunt u naar *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) gaan om snel de zichtbaarheid van al uw tracks op één plek aan te passen.


### Opgenomen GPX-bestand {#recorded-gpx-file}

OsmAnd legt uw reis vast in een gestructureerd [GPX-bestand](https://en.wikipedia.org/wiki/GPS_Exchange_Format), met een hiërarchie van *bestand > track > segmenten > punten*. Zo werkt het:

- **Punten** vertegenwoordigen individuele momenten van uw opgenomen pad, elk gemarkeerd met attributen zoals coördinaten, snelheid, hoogte en koers.
- Deze punten worden gegroepeerd om **tracks** te vormen, die uw hele route vertegenwoordigen.
- Als er een onderbreking is in de opname (bijvoorbeeld als het volgen werd gepauzeerd), start het volgende punt na de onderbreking een nieuw **segment**, wat de scheiding in uw reis markeert.
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


| Parameter | Beschrijving |
|---|---|
| `trkpt` | **Trackpunt** vertegenwoordigt een specifieke geografische locatie die tijdens uw activiteit is gedetecteerd. Elk trackpunt bevat breedte- en lengtegraadcoördinaten, die de basis vormen van uw opgenomen pad. |
| `trkseg` | **Tracksegment** groepeert opeenvolgende trackpunten, gescheiden door onderbrekingen in activiteit, zoals pauzes of stops. Dit helpt continue beweging te onderscheiden van inactieve perioden binnen één opname. |
| `lat` | **Breedtegraad** geeft de noord-zuidpositie van een punt op het aardoppervlak aan. Het is de helft van het coördinatenpaar dat wordt gebruikt om uw exacte locatie te bepalen. |
| `lon` | **Lengtegraad** specificeert de oost-westpositie, als aanvulling op de breedtegraad, om een punt op de wereldbol nauwkeurig te lokaliseren. Samen definiëren breedte- en lengtegraad uw precieze geografische positie. |
| `ele` | **Hoogte** meet de hoogte van een trackpunt boven zeeniveau, geregistreerd in meters. Dit kan nuttig zijn voor het bijhouden van hoogteveranderingen tijdens uw activiteiten, zoals wandelingen of fietstochten. |
| `time` | **Tijdstempel** registreert de exacte datum en tijd waarop een trackpunt wordt gelogd. Hiermee kunt u de duur en timing van uw activiteit nauwkeurig bijhouden. |
| `hdop` | **Horizontale Dilutie van Precisie (HDOP)** is een maat voor GPS-nauwkeurigheid, die de potentiële fout in de locatie als gevolg van de posities van de satellieten weergeeft. In tegenstelling tot de standaard HDOP, gebruiken OsmAnd GPX-tracks deze waarde om horizontale nauwkeurigheid in meters weer te geven. Houd er rekening mee dat deze implementatie afwijkt van typische HDOP-standaarden. [Meer informatie](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Snelheid** registreert uw bewegingssnelheid in meters per seconde. Het geeft inzicht in uw tempo tijdens verschillende segmenten van uw activiteit. |
| `heading` | **Koers** geeft de richting aan waarin uw voertuig of apparaat is gericht, gemeten in graden. Het is anders dan de koers, wat het werkelijke bewegingspad is. Verschillen kunnen optreden als gevolg van externe factoren zoals wind, stroming of wegomstandigheden. [Meer over koers](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Snelheid** van [externe sensoren](../plugins/external-sensors.md) legt gegevens vast van aangesloten sensoren, wat nauwkeurigere snelheidsinformatie biedt, vooral handig bij het fietsen. Voor meer details, raadpleeg de [GPX-bestandsformaatdocumentatie](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Cadans** meet het aantal pedaalomwentelingen per minuut, opgenomen met behulp van [externe sensoren](../plugins/external-sensors.md). Dit is bijzonder nuttig voor fietsers die hun trapefficiëntie willen monitoren en optimaliseren. [Lees meer](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Fietsvermogen** kwantificeert het vermogen dat wordt gegenereerd tijdens het trappen, vastgelegd door [externe sensoren](../plugins/external-sensors.md). Het is een essentiële meting voor serieuze fietsers die hun prestaties willen meten. [Meer informatie](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Luchttemperatuur** registreert de omgevingstemperatuur tijdens uw activiteit, gemeten met behulp van [externe sensoren](../plugins/external-sensors.md). Houd er rekening mee dat watertemperatuur niet wordt ondersteund. [Details hier](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Hartslag** bewaakt uw hartslagen per minuut, met behulp van gegevens van aangesloten [sensoren](../plugins/external-sensors.md). Deze informatie kan van vitaal belang zijn voor het bijhouden van uw cardiovasculaire prestaties tijdens trainingen. [Meer informatie](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Opname-instellingen {#recording-settings}

Voordat u begint met het volgen van uw ritten, moet u de **Ritregistratie-plugin** correct configureren voor optimale prestaties.

- **Profielspecifieke instellingen**. Elk profiel in de app kan zijn eigen unieke Ritregistratie-instellingen hebben. Hierdoor kunt u het opnamegedrag nauwkeurig aanpassen op basis van uw activiteit, zoals autorijden, fietsen of zelfs Nordic walking, waarvoor mogelijk verschillende configuraties nodig zijn.

- **Opnameparameters aanpassen**. De opname-instellingen kunnen variëren afhankelijk van hoe u beweegt. Bijvoorbeeld, lange afstanden rijden kan een lagere opnamefrequentie vereisen, terwijl wandelen of lopen kan profiteren van frequentere updates.

- **Nauwkeurige locatiegegevens**. Om ervoor te zorgen dat uw opnames soepel en bruikbaar zijn voor toekomstig gebruik, kunt u de manier aanpassen waarop u locatiepunten vastlegt. Dit kan het aanpassen van de opnamefrequentie, het formaat van uw gegevens (zoals het aantal punten per afstandseenheid) of de afstand tussen opgenomen punten omvatten.

- **Algemene instellingen**. Ritregistratie-instellingen worden per profiel geconfigureerd, die u kunt beheren in de algemene [instellingen](../personal/global-settings.md) van de app. Voordat u de Ritregistratie-plugin aanpast, selecteert u het profiel dat u wilt configureren in de sectie [profielen](../personal/profiles.md). Navigeer vandaar naar de instellingen van het profiel om toegang te krijgen tot de Ritregistratie-opties.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ritregistratie configureren in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Ritregistratie configureren in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ritregistratie configureren in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Ritregistratie configureren in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving |
|---|---|
| **Batterijoptimalisatie dialoogvenster** (*Android*) | Opent de [Android batterijoptimalisatie-instellingen](#battery-optimization). Tik op *Niet meer vragen* als u niet opnieuw wilt worden gevraagd. |
| **Startdialoogvenster weergeven** (*Android*) | Schakelt een dialoogvenster in waar u instellingen kunt configureren voordat u begint met opnemen. Indien uitgeschakeld, start de opname automatisch. |
| **Track automatisch opnemen tijdens navigatie** | Neemt de track automatisch op tijdens navigatie en slaat deze op in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Opmerking*: Trackregistratie verbruikt batterij en blijft op de achtergrond draaien, zelfs als het scherm uit is. |
| **Algemeen loginterval** | Bepaalt hoe vaak locatiepunten worden opgenomen. De standaardwaarde is 5 seconden. Het wordt ingeschakeld met de *Ritregistratie-widget*. |
| **Minimale verplaatsing** | Een filter om te voorkomen dat punten worden opgenomen wanneer er weinig of geen beweging is. Het helpt ruis in de gegevens te verminderen.<ul><li>*Neveneffecten*: Rustperiodes worden mogelijk niet opgenomen en kleine bewegingen kunnen worden genegeerd. Dit kan de nabewerkingsgegevens verminderen, maar kan ook voorkomen dat GPS-fouten worden gelogd.</li><li>*Aanbeveling*: Stel de verplaatsing in op 5 meter als u minder kleine details in uw opnames wilt.</li></ul> |
| **Minimale nauwkeurigheid** | Filtert locatiepunten uit die onder een minimale nauwkeurigheidsindicatiedrempel vallen, zoals gerapporteerd door het apparaat.<ul><li>*Neveneffecten*: Punten in gebieden met een slecht signaal (onder bruggen, bomen, tussen gebouwen of in sommige weersomstandigheden) kunnen ontbreken.</li><li>*Aanbeveling*: Als u twijfelt, is het beter om dit filter uit te schakelen om te voorkomen dat gegevens ontbreken.</li></ul><details><summary>*Opmerking*</summary>Stel dat de GPS vlak voor de opname was uitgeschakeld. In dat geval kan het eerste gemeten punt een verminderde nauwkeurigheid hebben, dus het is beter om even te wachten voordat u het punt opneemt of het beste van 3 opeenvolgende punten opneemt.</details> |
| **Minimale snelheid** | Stelt een drempel in om punten die onder een bepaalde snelheid zijn opgenomen te negeren.<ul><li>*Neveneffecten*: Secties waar de snelheid onder een gespecificeerde drempel daalt, worden niet opgenomen.</li><li>*Aanbeveling*: Gebruik in plaats daarvan het filter *Minimale verplaatsing*, omdat dit betere resultaten kan opleveren zonder belangrijke gegevens te verliezen.</li></ul><details><summary>*Opmerking*</summary>Probeer eerst de bewegingsdetectie via het filter voor minimale verplaatsing (B) te gebruiken, dit kan betere resultaten opleveren en u verliest minder gegevens. Als uw tracks bij lage snelheden ruis blijven vertonen, probeer dan niet-nulwaarden hier. Houd er rekening mee dat sommige metingen helemaal geen snelheidsgegevens rapporteren (sommige netwerkgebaseerde methoden), in welk geval u niets zou opnemen.<br/><br/>Snelheid > 0 controle: De meeste GPS-chipsets rapporteren alleen een snelheidsgegevens als het algoritme bepaalt dat u in beweging bent, en geen als u dat niet bent. Het gebruik van de > 0 instelling in dit filter gebruikt in zekere zin de bewegingsdetectie van de GPS-chipset. Maar zelfs als hier niet gefilterd wordt tijdens de opname, gebruiken we deze functie nog steeds in onze GPX-analyse om de gecorrigeerde afstand te bepalen, d.w.z. de waarde die in dat veld wordt weergegeven, is de afstand die is opgenomen terwijl u in beweging was.</details> |
| **Opnames automatisch splitsen na onderbreking** | Splitst tracks automatisch op basis van tijdsverschillen tussen opgenomen punten. <ul><li>Een nieuw segment start na een onderbreking van 6 minuten.</li><li>Een nieuwe track start na een onderbreking van 2 uur.</li><li>Een nieuw bestand start wanneer de datum verandert.</li><li>Onderbrekingen kunnen het gevolg zijn van GPS-signaalverlies, lage snelheid of configuratie-instellingen.</li></ul><details><summary>*Opmerking*</summary>Een onderbreking wordt geïdentificeerd wanneer er geen punten worden opgenomen. Dit kan gebeuren omdat de locatie niet wordt gedetecteerd of omdat deze wel wordt gedetecteerd maar niet wordt opgenomen. Verschillende factoren kunnen dit veroorzaken, waaronder zwakke GPS-signalen als gevolg van slechte weersomstandigheden, of de bewegingssnelheid die onder de geconfigureerde drempel valt. In dergelijke gevallen, zelfs als het apparaat de locatie detecteert, wordt deze niet opgenomen.<br/><br/>Deze onderbrekingen in opgenomen gegevens kunnen het creëren van een nieuw segment binnen dezelfde track, een nieuwe track in hetzelfde bestand, of een nieuw GPX-bestand binnen één opname activeren. Dit wordt beheerd binnen één start/stop opnamesessie.</details> |
| **Standalone loggen voorkomen** (*Android*) | Pauzeert de trackregistratie wanneer de OsmAnd-app wordt afgesloten (via *recente apps*). De achtergrondindicatie wordt niet weergegeven in het Android-meldingenpaneel. |
| **Koers opnemen** | Registreert de koers (bewegingsrichting) voor elk punt in het GPX-bestand. De koers is de richting waarin het apparaat is gericht, wat kan afwijken van de bewegingsrichting als gevolg van externe factoren zoals wind of slippen. |
| **Activiteit** | Met deze optie kunt u een [activiteitstype](../map/tracks/track-context-menu.md#track-information-activity) voor een profiel vooraf selecteren, dat vervolgens automatisch wordt toegepast op alle opgenomen tracks. |
| **Externe sensoren** <br/> *Plugin moet ingeschakeld zijn* | Gegevens van [externe sensoren](../plugins/external-sensors.md#trip-recording) zoals *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, of *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* worden gelogd naar het GPX-bestand. *Afstandsgegevens* worden niet opgenomen op Android of iOS. Wordt alleen weergegeven wanneer de [Externe sensoren-plugin](../plugins/external-sensors.md) is ingeschakeld. |
| **Voertuigstatistieken** <br/> *Plugin moet ingeschakeld zijn* | Gegevens van [OBD-II scanner](../plugins/vehicle-metrics.md#trip-recording) worden gelogd naar het GPX-bestand. Wordt alleen weergegeven wanneer de [Voertuigstatistieken-plugin](../plugins/vehicle-metrics.md) is ingeschakeld.<br />*Opmerking*: U kunt toevoegen welke statistieken moeten worden opgenomen in het GPX-bestand uit de lijst: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Trackopslagmap** (*Android*) | Bepaalt waar in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* opgenomen tracks worden opgeslagen. Opties omvatten het opslaan van alle tracks in de map Rec of het organiseren ervan per maand, zoals Rec/jjjjj-mm. |
| **Melding** | Regelt de weergave van een [ritregistratie](#notifications) systeemmelding in het meldingengebied van het apparaat waarmee u ritten kunt starten. |
| **Online volgen** (*Android*) | Maakt real-time volgen van uw locatie mogelijk door opgenomen punten naar een opgegeven URL te sturen. Het volginterval bepaalt hoe vaak punten worden verzonden, en de tijdbuffer slaat punten op wanneer er geen internetverbinding is.<details><summary>*Opmerking*</summary>Als deze optie is ingeschakeld en de trackregistratie bezig is, wordt de Afstand/Start-Stop (REC) widget **groen** in plaats van **rood**, wat aangeeft dat elk opgenomen punt naar een opgegeven URL wordt verzonden. Het veld **Webadres** stelt u in staat de URL in te voeren met de volgende parameterindeling:<ul><li>`lat={0}`: Breedtegraad</li><li>`lon={1}`: Lengtegraad</li><li>`timestamp={2}`: Tijdstempel (Unix-tijd)</li><li>`hdop={3}`: Horizontale verdunning van precisie</li><li>`altitude={4}`: Hoogte</li><li>`speed={5}`: Snelheid</li><li>`bearing={6}`: Koers (bewegingsrichting)</li><li>`eta={7}`: Geschatte aankomsttijd (Unix-tijd)</li><li>`etfa={8}`: Geschatte tijd tot het eerste tussenpunt of eindpunt (Unix-tijd)</li><li>`eda={9}`: Geschatte afstand tot aankomst of een markering (in meters)</li><li>`edfa={10}`: Geschatte afstand tot het eerste tussenpunt of eindpunt (in meters)</li></ul>U kunt het **Volginterval** instellen om te specificeren hoe vaak locatiepunten worden verzonden, met opties variërend van 0 seconden tot 5 minuten. Bovendien bepaalt de parameter **Tijdbuffer** hoe lang locatiepunten worden opgeslagen als er geen internetverbinding is, zodat gegevens worden opgeslagen en verzonden wanneer de verbinding wordt hersteld.</details> |
| **Tracks** | Een snelle verwijzing naar de map waar tracks worden opgeslagen in het tabblad *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Plugininstellingen resetten naar standaard** | Reset alle ritregistratie-instellingen voor het huidige profiel naar hun standaardwaarden. |
| **Kopiëren van een ander profiel** (*Android*) | Kopieert de ritregistratie-instellingen van het ene profiel naar het andere. |


### Batterijoptimalisatie {#battery-optimization}

<InfoAndroidOnly />

![Track op de kaart iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Track op de kaart iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Deze functie stelt u in staat om de batterijoptimalisatie-instellingen voor OsmAnd te beheren om ononderbroken toegang tot uw locatie te garanderen, zelfs wanneer de app op de achtergrond draait tijdens navigatie of trackregistratie.

- **Batterijoptimalisatie-instellingen**. Opent Android-instellingen, waar u batterijbesparende voorkeuren voor OsmAnd kunt wijzigen. [Meer details hier](../troubleshooting/general.md#optimizing-battery-consumption).
- **Niet meer vragen**. Sluit het dialoogvenster permanent, zodat het niet meer verschijnt.
- **Sluiten**. Sluit het dialoogvenster tijdelijk, dat de volgende keer dat batterijoptimalisatie aandacht nodig heeft, opnieuw verschijnt.


### Meldingen {#notifications}

![Ritregistratie melding](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Als [Melding](#recording-settings) is ingeschakeld in de plugininstellingen, worden ritregistratiemeldingen altijd weergegeven in het systeemmeldingengebied wanneer de opname actief is. Deze melding zorgt ervoor dat het opnameproces niet wordt onderbroken door het systeem, en het kan niet worden uitgeschakeld tijdens een actieve opname.

- Het meldingengebied opent wanneer u van bovenaf het scherm naar beneden veegt en sluit wanneer u omhoog veegt. Deze berichten informeren u over acties zoals het starten/stoppen van ritregistratie, vooral wanneer automatische opname is ingeschakeld tijdens navigatie.
- Meldingen blijven zichtbaar, ongeacht of de app op de voorgrond, achtergrond draait of is gesloten. U kunt de oude melding handmatig wissen als deze niet langer nodig is, maar dit stopt de lopende opname niet.

**Belangrijke opmerking**.

Dit gedrag is vereist door Android voor elke voorgrondservice, zoals ritregistratie, om voor u zichtbaar te blijven.

- Als de melding wordt verwijderd, stopt Android automatisch de opname. U kunt de instelling [Standalone loggen voorkomen](#recording-settings) gebruiken.
- De instelling **Melding** in OsmAnd beïnvloedt of de meldingsbalk een snelkoppeling toont om een opname te starten wanneer er geen opname actief is. Het regelt **niet** de zichtbaarheid van de melding tijdens een actieve opname.

**Aanvullende Android-opties**.

![Ritregistratie melding](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Android-instellingen → Meldingen en statusbalk → Vergrendelschermmeldingen*** kunt u OsmAnd uit de app-lijst verwijderen om te voorkomen dat meldingen op het vergrendelscherm verschijnen, waardoor onbedoelde schermactivering wordt voorkomen. Dit heeft geen invloed op de trackregistratie. Meldingen verschijnen nog steeds in het reguliere meldingengebied.
- **OsmAnd** kan ook verschijnen onder ***Privacy → Speciale machtigingen → Scherm inschakelen***. Als u wilt voorkomen dat het scherm aangaat wanneer een melding verschijnt, probeer dan OsmAnd uit deze lijst te verwijderen.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Badge melding**.

![Ritregistratie melding](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

De app-icoonbadge verschijnt naast het OsmAnd-icoon wanneer de trackregistratie actief is.

- Dit icoon verdwijnt wanneer de trackregistratie is voltooid. Om te controleren of een opname actief is, kunt u naar *Menu → Mijn plaatsen → Tracks-tabblad* gaan of op de widget tikken om de opname te beheren.
- Als er geen opname bezig is en de badge nog steeds wordt weergegeven, kan dit betekenen dat er een bericht van OsmAnd is achtergelaten in het meldingenpaneel van het apparaat.
- Om badges in Android-instellingen uit te schakelen, gaat u naar *Instellingen van het apparaat → Apps → OsmAnd → Meldingen* en schakelt u de optie voor badge-weergave voor deze app uit.


## Widgets {#widgets}

Widgets stellen u in staat om belangrijke informatie over trackregistratie direct op het scherm weer te geven, zoals *Afstand*, *Duur*, *Omhoog* en *Omlaag*.

Om *Ritregistratie-widgets* te gebruiken, moet u alle volgende instellingen maken:

1. [Schakel de plugin in](../start-with/first-steps.md#how-to-configure-plugins).
2. Configureer de ritregistratie-instellingen voor het vereiste [profiel](../personal/profiles.md).
3. Voeg de benodigde **Ritregistratie-widgets** toe aan het scherm. Houd er rekening mee dat deze configuratie **specifiek is voor elk profiel**.


### Opnamewidget toevoegen {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_widget_monitoring"/>*

![Afstand/Start-Stop widget toevoegen in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_widget_monitoring"/>*

![Opnamewidgets toevoegen in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

De [Ritregistratie-widget](../widgets/info-widgets.md#trip-recording-widgets) biedt een eenvoudige manier om uw opnamestatus te controleren en snel toegang te krijgen tot opname-instellingen en details. Deze widget wordt automatisch aan uw scherm toegevoegd wanneer de Ritregistratie-plugin is ingeschakeld.

Om uw interface aan te passen, kunt u de Ritregistratie-widget en [andere widgets](../plugins/trip-recording#duration-uphill-downhill) toevoegen of verwijderen via het menu Scherm configureren.


### Afstand (Start-Stop) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ritregistratie widget](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Opname beëindigen in Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ritregistratie widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Ritregistratie widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Wanneer widgets op de kaart worden weergegeven, onthult het tikken op een van deze widgets aanvullende trackdetails en maakt interactie met de opname mogelijk.
De *Afstand*-widget toont de totale afstand van uw huidige opgenomen rit en fungeert als de hoofdinterface voor het beheren van uw opnames. Door erop te tikken, wordt het [Ritregistratie-dialoogvenster](#start-a-dialog) geopend, waar u uw track kunt starten, stoppen en gedetailleerde informatie kunt bekijken.

- De widget wordt automatisch toegevoegd wanneer de *Ritregistratie-plugin* is ingeschakeld, maar kan worden verborgen via het [Scherm configureren menu](../widgets/configure-screen.md#configure-screen-menu).
- Als de optie *Startdialoogvenster weergeven* is uitgeschakeld in de instellingen van de Ritregistratie-plugin, wordt door op de actieve widget te tikken nog steeds het *Ritregistratie-dialoogvenster* geopend, zodat u toegang krijgt tot verdere opties en informatie.

Naast de *Afstand/Start-Stop*-widget bevat de **Ritregistratie-plugin** nog drie andere widgets: *Duur*, *Omhoog* en *Omlaag*. Deze bieden aanvullende informatie over uw reis, zodat u de voortgang in realtime kunt volgen.

| |
|-----------|
| **Afstand/Start-Stop**. Deze widget toont de afstand van uw lopende ritregistratie. Het wordt automatisch toegevoegd wanneer de Ritregistratie-plugin is ingeschakeld, maar u kunt het verbergen via het menu Scherm configureren. De widget heeft drie verschillende statussen: *Opname*, *Gepauzeerd* en *Inactief*, die elk de huidige status van uw ritregistratie aangeven. |
| ![Ritregistratie (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Om het [Ritregistratie-dialoogvenster](#start-a-dialog) te openen wanneer u op een inactieve widget tikt, schakelt u de optie *Startdialoogvenster weergeven* in de instellingen van de Ritregistratie-plugin in. Als de optie is uitgeschakeld, begint de opname onmiddellijk na het tikken op de widget zonder het dialoogvenster te openen.|


### Duur, Omhoog, Omlaag {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Duur**. Toont de totale tijd van de huidige ritregistratie in uren en minuten. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Omhoog**. Toont de cumulatieve hoogtewinst voor de huidige ritregistratie. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Omlaag**. Geeft de totale daling aan die is opgebouwd tijdens de huidige ritregistratie. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Als u meerdere widgets hebt geselecteerd — *Duur*, *Omhoog* of *Omlaag* — kunt u voor elk dezelfde dialoogvenster openen zonder te hoeven schakelen of sluiten. Deze uniforme interface maakt het eenvoudig om alle gerelateerde informatie naadloos te bekijken en te beheren.


## Gerelateerde artikelen {#related-articles}

- [Kaartcontextmenu](../map/map-context-menu.md)
- [Track op kaart weergeven](../map/tracks/index.md)
- [Analyseren op kaart](../map/tracks/index.md#analyze-track-on-map)
- [Trackcontextmenu](../map/tracks/track-context-menu.md)
- [Navigatie per track](../navigation/setup/gpx-navigation.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

- Ritregistratie start niet.
    - Zorg ervoor dat de **Ritregistratie-plugin** is ingeschakeld: *Menu → Plugins → Ritregistratie → Inschakelen*.
    - Controleer of de instellingen correct zijn: *Menu → Profiel configureren → Plugininstellingen → Ritregistratie*.
    - Als de opname nog steeds niet start, start de app dan opnieuw en probeer het opnieuw.

- Ritregistratie stopt onverwacht.
    - Controleer of de *batterijoptimalisatie-instellingen van uw apparaat* de opname stoppen. Sommige apparaten kunnen achtergrondactiviteit pauzeren om energie te besparen. Ga naar *Apparaatinstellingen → Batterij*.

- Opgenomen afstand komt niet overeen met de werkelijke afstand.
    - Controleer of GPS is ingeschakeld en een actief signaal heeft.
    - Verminder de GPS-nauwkeurigheidsdrempel: *Menu → Profiel configureren → Ritregistratie → Minimale nauwkeurigheid*.

- Opgenomen tracks zijn ruisig. [(controleer)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Opgenomen tracks hebben hiaten. [(controleer)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Hoe afgelegde afstand bij te houden. [(controleer)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Voor aanvullende probleemoplossing, bezoek: [Probleemoplossing trackregistratie](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Laatst bijgewerkt: januari 2025*