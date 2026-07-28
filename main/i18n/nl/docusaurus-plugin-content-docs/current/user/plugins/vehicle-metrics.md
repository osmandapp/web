---
source-hash: 3d0f21335c9451dab0d40239638af909241f74d4761e840d189cf0a2cddd2361
sidebar_position: 18
title:  Voertuigstatistieken
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

:::info Pro-functie
De Voertuigstatistieken-plugin is een [**OsmAnd Pro**](../purchases/index.md) betaalde functie <ProFeature />. Informatie over voertuigsnelheid en motortoerental is gratis beschikbaar in OsmAnd.
:::

De **Vehicle Metrics plugin** maakt real-time monitoring van voertuiggegevens mogelijk via het [OBD-II-protocol](https://en.wikipedia.org/wiki/OBD-II_PIDs). Gebruikers kunnen essentiële metrieken bijhouden, zoals motorprestaties, brandstofefficiëntie en snelheid, wat proactief voertuigonderhoud en probleemoplossing mogelijk maakt.  

[OBD-II-scanners](https://en.wikipedia.org/wiki/ELM327) zijn een integraal onderdeel van de moderne autodiagnostiek. Met real-time datastreaming krijgen gebruikers direct inzicht in voertuigsystemen, wat preventief onderhoud vergemakkelijkt en reparatiekosten verlaagt. Deze tools zijn essentieel voor zowel persoonlijk gebruik als professionele autodiensten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD settings](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Required Setup Parameters {#required-setup-parameters}

Om gegevens van een OBD-II-scanner te gebruiken:

1. [Koop](../purchases/) een **OsmAnd Pro-abonnement**. (*Vehicle speed* en *Engine speed* zijn gratis.)  
2. [Activeer](../plugins/index.md#enable--disable) de Vehicle Metrics plugin in de sectie Plugins van het *Hoofdmenu*.
3. **Schakel** Bluetooth **in** op uw apparaat.
4. [Verbind](#pair-odb-ii-scanner) de OBD-II-scanner met de poort van uw voertuig.
5. [Configureer](#scanner-settings) de **scannerinstellingen**.
6. [Voeg](#widgets) **Vehicle Metrics widgets** toe voor weergave op het scherm (optioneel).
7. [Gebruik](#trip-recording) de **Ritregistratie-plugin** om voertuiggegevens op te nemen.


### Pair ODB-II Scanner {#pair-odb-ii-scanner}


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

- Navigeer naar *Menu → Plugins → Vehicle Metrics → Instellingen → Verbinden* of **+**.
- Als Vehicle Metrics in het *Hoofdmenu* staat:  *Menu → Vehicle Metrics → Instellingen → Verbinden* of **+**.

Kies uw OBD-II-apparaat uit de lijst en breng de verbinding tot stand.


## Scanner Settings {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *Menu → Plugins → Vehicle Metrics → OBD → menu met drie stippen*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *Menu → Plugins → Vehicle Metrics → OBD → menu met drie stippen*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Verbinden / Verbinding verbreken**. Brengt de verbinding met de OBD-II-sensor tot stand of verbreekt deze.
- **Settings**. Opent het instellingenscherm van de OBD-II, waar u de verbinding kunt beheren en toegang hebt tot beschikbare voertuigparameters.
- **Hernoemen**. Hiermee kunt u een aangepaste naam aan de sensor toewijzen voor eenvoudigere identificatie.
- **Vergeten**. Verwijdert de eerder gekoppelde OBD-II-sensor uit de lijst, waardoor opnieuw koppelen later nodig is.

**Reconnect behavior:** OsmAnd probeert automatisch opnieuw verbinding te maken met de OBD-II-adapter wanneer de applicatie wordt gestart, wanneer navigatie wordt gestart, of wanneer Android Auto / Car Play wordt gelanceerd. Als een verbinding niet beschikbaar is, tonen Vehicle Metrics widgets “–”. Een enkele tik op een willekeurige Vehicle Metrics widget zal proberen opnieuw verbinding te maken met de sensor. Als de sensor al verbonden is, schakelt de tik de weergavemodi van de widget zoals gewoonlijk.


## Metrics List {#metrics-list}

Metrieken zijn gecategoriseerd voor de duidelijkheid. Geavanceerde diagnostische tools maken preventief onderhoud mogelijk door deze parameters te interpreteren:

*Temperature:*

- **Intake Temperature**. Toont de temperatuur van de lucht die het inlaatspruitstuk binnenkomt.
- **Ambient Temperature**. Bewaakt externe omstandigheden.
- **Coolant Temperature**. Volgt de efficiëntie van de motorkoeling.
- **Engine Oil Temperature**. Toont de toestand van de olie tijdens bedrijf.

*Engine:*

- **Engine Speed**. Bewaakt het aantal omwentelingen per minuut (RPM) van de motor.
- **Engine Runtime**. Volgt de bedrijfstijd van de motor.
- **Calculated Engine Load**. Geeft het werkbelastingspercentage van de motor aan.

*Fuel:*

- **Fuel Pressure**. Geeft de druk van het brandstofsysteem aan.
- **Fuel Consumption**. Berekent het brandstofverbruik van het voertuig.
- **Remaining Fuel**. Geeft het brandstofniveau in het voertuig aan.

*Other:*

- **Battery Level**. Geeft het spanningsniveau van de accu van het voertuig aan.
- **Adapter Voltage**. Toont de spanning die aan de OBD-II-adapter wordt geleverd (AT RV-opdracht).
- **Vehicle Speed**. Toont gegevens van de voertuigsnelheidssensor (VSS).
- **Throttle Position**. Bepaalt de luchtinlaat van de motor via de hoek van de gasklepplaat.  
  **VIN**. Toont het 17-karakterige identificatienummer van het voertuig.


## Trip Recording {#trip-recording}


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



Om OBD-II-gegevens in een GPX-bestand op te nemen, moet u de gewenste parameters voor opname selecteren met behulp van de [Ritregistratie-plugin](../plugins/trip-recording.md#recording-settings). Hiermee kunt u voertuigmetrieken samen met uw ritgegevens analyseren.

### Tags {#tags}

OsmAnd past aangepaste tagnamen toe voor voertuigmetrieken in het [GPX-bestand](../plugins/trip-recording.md#recorded-gpx-file). Bijvoorbeeld:

- `vm_eotemp`: Engine Oil Temperature.
- `vm_fpress`: Fuel Pressure.
- `vm_espeed`: Engine Speed.

Deze tags maken het gemakkelijker om specifieke voertuiggegevens te identificeren en te gebruiken bij het bekijken van het opgenomen GPX-bestand.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="obd_widget_group"/>*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1_new.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate ios="true" ids="obd_plugin_name"/>*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_ios_1_neww.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



De [Vehicle Metrics widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) worden automatisch opgenomen wanneer u de plugin inschakelt. Als ze niet zichtbaar zijn, kunt u ze handmatig toevoegen via het menu [Scherm configureren](../widgets/configure-screen.md).

### Widget Settings {#widget-settings}

De widgets tonen belangrijke gegevens van uw verbonden OBD-II-apparaat in realtime, zoals snelheid, motorstatistieken en brandstofverbruik. Zorg ervoor dat ze zichtbaar zijn voordat u uw rit begint om de metrieken naadloos te volgen.

Sommige widgets bieden weergavemodusopties:

- **Instant**. Toont realtime gegevens voor de geselecteerde metriek.
- **Average**. Toont gemiddelde waarden over een configureerbaar tijdsinterval (15 seconden tot 60 minuten).

Verschillende widgets, inclusief *Fuel consumption*, passen hun weergegeven eenheden en regionale metrische formaten aan op basis van de [Profielinstellingen](https://osmand.net/docs/user/personal/profiles#units--formats). Bij gebruik van volume-eenheden anders dan liters ondersteunt Fuel consumption het tonen van waarden als Miles per Gallon (MPG). Het exacte MPG-type hangt af van de geselecteerde volume-eenheid:

- US gallons → MPG (US)
- Imperial gallons → MPG (UK)

De widget selecteert automatisch het juiste formaat op basis van de gekozen <Translate android="true" ids="routing_attr_length_name"/> en <Translate android="true" ids="shared_string_volume"/> eenheden in het actieve profiel, en uw gekozen weergavemodus wordt behouden bij het exporteren en importeren van profielen.


## Related articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)