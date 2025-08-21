---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title:  Voertuiggegevens
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


<InfoIncompleteArticle/>


## Overzicht {#overview}

:::info Betaalde functie
De plugin Voertuiggegevens is een [betaalde functie](../purchases/index.md) van de OsmAnd-app. Informatie over voertuigsnelheid en motortoerental is gratis beschikbaar voor OsmAnd.
:::

De **plugin Voertuiggegevens** maakt real-time monitoring van voertuiggegevens mogelijk via het [OBD-II-protocol](https://en.wikipedia.org/wiki/OBD-II_PIDs). Gebruikers kunnen essentiële gegevens bijhouden, zoals motorprestaties, brandstofefficiëntie en snelheid, wat proactief voertuigonderhoud en probleemoplossing mogelijk maakt.

[OBD-II-scanners](https://en.wikipedia.org/wiki/ELM327) zijn essentieel voor moderne autodiagnostiek. Met real-time gegevensstromen krijgen gebruikers onmiddellijk inzicht in voertuigsystemen, wat preventief onderhoud vergemakkelijkt en reparatiekosten verlaagt. Deze tools zijn van vitaal belang voor zowel persoonlijk gebruik als professionele autoservices.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD settings](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Vereiste installatieparameters {#required-setup-parameters}

Om gegevens van een OBD-II-scanner te gebruiken:

1. [Koop](../purchases/) een **OsmAnd Pro-abonnement**. (*Voertuigsnelheid* en *Motortoerental* zijn gratis.)
2. [Schakel](../plugins/index.md#enable--disable) de plugin Voertuiggegevens in het gedeelte Plugins van het *Hoofdmenu* in.
3. **Schakel** Bluetooth in op uw apparaat.
4. [Sluit](#pair-odb-ii-scanner) de OBD-II-scanner aan op de poort van uw voertuig.
5. [Configureer](#scanner-settings) de **scannerinstellingen**.
6. [Voeg](#widgets) **Voertuiggegevens-widgets** toe voor gegevens op het scherm (optioneel).
7. [Gebruik](#trip-recording) de **plugin Ritregistratie** om voertuiggegevens op te nemen.


### OBD-II-scanner koppelen {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Sluit de scanner aan op de poort van uw voertuig en koppel deze via de app:

- Navigeer naar *Menu → Plugins → Voertuiggegevens → Instellingen → Verbinden* of **+**.
- Als Voertuiggegevens in het *Hoofdmenu* staat: *Menu → Voertuiggegevens → Instellingen → Verbinden* of **+**.

Kies uw OBD-II-apparaat uit de lijst en maak de verbinding tot stand.


## Scannerinstellingen {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *Menu → Plugins → Voertuiggegevens → OBD → menu met drie puntjes*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *Menu → Plugins → Voertuiggegevens → OBD → menu met drie puntjes*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Verbinden / Verbinding verbreken**. Brengt de verbinding met de OBD-II-sensor tot stand of verbreekt deze.
- **Instellingen**. Opent het OBD-II-instellingenscherm, waardoor verbindingsbeheer en toegang tot beschikbare voertuigparameters mogelijk is.
- **Naam wijzigen**. Hiermee kunt u een aangepaste naam toewijzen aan de sensor voor eenvoudigere identificatie.
- **Vergeten**. Verwijdert de eerder gekoppelde OBD-II-sensor uit de lijst, waardoor opnieuw koppelen nodig is als deze later weer nodig is.


## Lijst met gegevens {#metrics-list}

Gegevens zijn gecategoriseerd voor duidelijkheid. Geavanceerde diagnostische hulpmiddelen maken preventief onderhoud mogelijk door deze parameters te interpreteren:

*Temperatuur:*

- **Inlaattemperatuur**. Geeft de temperatuur weer van de lucht die het inlaatspruitstuk binnenkomt.
- **Omgevingstemperatuur**. Bewaakt externe omstandigheden.
- **Koelvloeistoftemperatuur**. Houdt de efficiëntie van de motorkoeling bij.
- **Motorolietemperatuur**. Geeft de olietoestand tijdens bedrijf weer.

*Motor:*

- **Motortoerental**. Bewaakt het motortoerental per minuut (RPM).
- **Motorlooptijd**. Houdt de bedrijfstijd van de motor bij.
- **Berekende motorbelasting**. Geeft het percentage motorbelasting aan.

*Brandstof:*

- **Brandstofdruk**. Geeft de druk van het brandstofsysteem aan.
- **Brandstofverbruik**. Berekent het brandstofverbruik van het voertuig.
- **Resterende brandstof**. Geeft het brandstofpeil in het voertuig aan.

*Overig:*

- **Batterijniveau**. Geeft het spanningsniveau van de voertuigbatterij aan.
- **Voertuigsnelheid**. Geeft VSS-gegevens (Vehicle Speed Sensor) weer.
- **Gasklepstand**. Bepaalt de luchtinlaat van de motor via de gasklephoek.
- **VIN**. Geeft het 17-cijferige identificatienummer van het voertuig weer.


## Ritregistratie {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Ga naar: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Om OBD-II-gegevens in een GPX-bestand op te nemen, moet u de gewenste parameters voor opname selecteren met behulp van de [plugin Ritregistratie](../plugins/trip-recording.md#recording-settings). Hierdoor kunt u voertuiggegevens analyseren naast uw ritgegevens.

#### Tags {#tags}

OsmAnd past aangepaste tagnamen toe voor voertuiggegevens in het [GPX-bestand](../plugins/trip-recording.md#recorded-gpx-file). Bijvoorbeeld:

- `vm_eotemp`: Motorolietemperatuur.
- `vm_fpress`: Brandstofdruk.
- `vm_espeed`: Motortoerental.

Deze tags maken het gemakkelijker om specifieke voertuiggegevens te identificeren en te gebruiken bij het bekijken van het opgenomen GPX-bestand.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *Menu → Scherm configureren → Widgets → Kies een paneel → Voertuiggegevens*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *Menu → Scherm configureren → Widgets → Kies een paneel → Voertuiggegevens*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



De [Voertuiggegevens-widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) worden automatisch opgenomen wanneer u de plugin inschakelt. Als ze niet zichtbaar zijn, kunt u ze handmatig toevoegen via het menu [Scherm configureren](../widgets/configure-screen.md).

### Widgetinstellingen {#widget-settings}

De widgets geven belangrijke gegevens van uw verbonden OBD-II-apparaat in real-time weer, zoals snelheid, motorgegevens en brandstofverbruik. Zorg ervoor dat ze zichtbaar zijn voordat u uw reis begint om gegevens naadloos bij te houden.

Sommige widgets bieden weergavemodusopties:

- **Direct**. Geeft real-time gegevens weer voor de geselecteerde meting.
- **Gemiddeld**. Geeft gemiddelde waarden weer over een configureerbaar tijdsinterval (15 seconden tot 60 minuten).


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: augustus 2025*