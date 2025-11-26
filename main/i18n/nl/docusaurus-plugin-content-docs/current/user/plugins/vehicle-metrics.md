---
source-hash: 76bfae8b6346115687fd1268df49ae83691792da2e5ef2e1b6a05d4692239228
sidebar_position: 16
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

:::info Betaalde functie
De Voertuigstatistieken-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app. Informatie over voertuigsnelheid en motortoerental is gratis beschikbaar in OsmAnd.
:::

De **Voertuigstatistieken-plugin** maakt real-time monitoring van voertuiggegevens mogelijk via het [OBD-II-protocol](https://en.wikipedia.org/wiki/OBD-II_PIDs). Gebruikers kunnen essentiële statistieken bijhouden, zoals motorprestaties, brandstofefficiëntie en snelheid, wat proactief voertuigonderhoud en probleemoplossing mogelijk maakt.  

[OBD-II-scanners](https://en.wikipedia.org/wiki/ELM327) zijn een integraal onderdeel van de moderne autodiagnostiek. Met real-time datastreaming krijgen gebruikers direct inzicht in voertuigsystemen, wat preventief onderhoud vergemakkelijkt en reparatiekosten verlaagt. Deze tools zijn essentieel voor zowel persoonlijk gebruik als professionele autodiensten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD-instellingen](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD-instellingen](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Vereiste installatieparameters {#required-setup-parameters}

Om gegevens van een OBD-II-scanner te gebruiken:

1. [Koop](../purchases/) een **OsmAnd Pro-abonnement**. (*Voertuigsnelheid* en *Motortoerental* zijn gratis.)  
2. [Activeer](../plugins/index.md#enable--disable) de Voertuigstatistieken-plugin in de sectie Plugins van het *Hoofdmenu*.
3. **Schakel** Bluetooth **in** op uw apparaat.
4. [Verbind](#pair-odb-ii-scanner) de OBD-II-scanner met de poort van uw voertuig.
5. [Configureer](#scanner-settings) de **scannerinstellingen**.
6. [Voeg](#widgets) **Voertuigstatistieken-widgets** toe voor gegevens op het scherm (optioneel).
7. [Gebruik](#trip-recording) de **Ritregistratie-plugin** om voertuiggegevens op te nemen.


### ODB-II-scanner koppelen {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD-verbinding](@site/static/img/plugins/obd/obd_connect.png)|![OBD-verbinding](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD-verbinding](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD-verbinding](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Sluit de scanner aan op de poort van uw voertuig en koppel deze via de app:

- Navigeer naar *Menu → Plugins → Voertuigstatistieken → Instellingen → Verbinden* of **+**.
- Als Voertuigstatistieken in het *Hoofdmenu* staat:  *Menu → Voertuigstatistieken → Instellingen → Verbinden* of **+**.

Kies uw OBD-II-apparaat uit de lijst en breng de verbinding tot stand.


## Scannerinstellingen {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *Menu → Plugins → Voertuigstatistieken → OBD → menu met drie stippen*

|  |  |
|--|--|
|![OBD-instellingen](@site/static/img/plugins/obd/obd_settings.png)|![OBD-instellingen](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *Menu → Plugins → Voertuigstatistieken → OBD → menu met drie stippen*

|  |  |
|--|--|
|![OBD-instellingen](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD-instellingen](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Verbinden / Verbinding verbreken**. Brengt de verbinding met de OBD-II-sensor tot stand of verbreekt deze.
- **Instellingen**. Opent het instellingenscherm van de OBD-II, waar u de verbinding kunt beheren en toegang hebt tot beschikbare voertuigparameters.
- **Hernoemen**. Hiermee kunt u een aangepaste naam aan de sensor toewijzen voor eenvoudigere identificatie.
- **Vergeten**. Verwijdert de eerder gekoppelde OBD-II-sensor uit de lijst, waardoor opnieuw koppelen later nodig is.

**Herconnectiegedrag** *(Alleen Android)***:** OsmAnd probeert automatisch opnieuw verbinding te maken met de OBD-II-adapter wanneer de applicatie wordt gestart, wanneer navigatie wordt gestart, of wanneer Android Auto wordt gelanceerd. Als een verbinding niet beschikbaar is, tonen Voertuigstatistieken-widgets “–”. Een enkele tik op een willekeurige Voertuigstatistieken-widget zal proberen opnieuw verbinding te maken met de sensor. Als de sensor al verbonden is, schakelt de tik de weergavemodi van de widget zoals gewoonlijk.


## Lijst met statistieken {#metrics-list}

Statistieken zijn gecategoriseerd voor de duidelijkheid. Geavanceerde diagnostische tools maken preventief onderhoud mogelijk door deze parameters te interpreteren:

*Temperatuur:*

- **Inlaattemperatuur**. Toont de temperatuur van de lucht die het inlaatspruitstuk binnenkomt.
- **Omgevingstemperatuur**. Bewaakt externe omstandigheden.
- **Koelvloeistoftemperatuur**. Volgt de efficiëntie van de motorkoeling.
- **Motorolietemperatuur**. Toont de toestand van de olie tijdens bedrijf.

*Motor:*

- **Motortoerental**. Bewaakt het aantal omwentelingen per minuut (RPM) van de motor.
- **Motorlooptijd**. Volgt de bedrijfstijd van de motor.
- **Berekende motorbelasting**. Geeft het werkbelastingspercentage van de motor aan.

*Brandstof:*

- **Brandstofdruk**. Geeft de druk van het brandstofsysteem aan.
- **Brandstofverbruik**. Berekent het brandstofverbruik van het voertuig.
- **Resterende brandstof**. Geeft het brandstofniveau in het voertuig aan.

*Overig:*

- **Accuniveau**. Geeft het spanningsniveau van de accu van het voertuig aan.
- **Adapterspanning**. Toont de spanning die aan de OBD-II-adapter wordt geleverd (AT RV-opdracht).
- **Voertuigsnelheid**. Toont gegevens van de voertuigsnelheidssensor (VSS).
- **Gaskleppositie**. Bepaalt de luchtinlaat van de motor via de hoek van de gasklepplaat.  
  **VIN**. Toont het 17-karakterige identificatienummer van het voertuig.


## Ritregistratie {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Ga naar: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD-opname](@site/static/img/plugins/obd/obd_recording.png)| ![OBD-opname](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Ga naar: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD-opname](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD-opname](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Om OBD-II-gegevens in een GPX-bestand op te nemen, moet u de gewenste parameters voor opname selecteren met behulp van de [Ritregistratie-plugin](../plugins/trip-recording.md#recording-settings). Hiermee kunt u voertuigstatistieken samen met uw ritgegevens analyseren.

### Tags {#tags}

OsmAnd past aangepaste tagnamen toe voor voertuigstatistieken in het [GPX-bestand](../plugins/trip-recording.md#recorded-gpx-file). Bijvoorbeeld:

- `vm_eotemp`: Motorolietemperatuur.
- `vm_fpress`: Brandstofdruk.
- `vm_espeed`: Motortoerental.

Deze tags maken het gemakkelijker om specifieke voertuiggegevens te identificeren en te gebruiken bij het bekijken van het opgenomen GPX-bestand.


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Ga naar: *Menu → Scherm configureren → Widgets → Kies een paneel → Voertuigstatistieken*

| | |
|--|--|
|![OBD-instellingen](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD-instellingen](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Ga naar: *Menu → Scherm configureren → Widgets → Kies een paneel → Voertuigstatistieken*

| | |
|--|--|
|![OBD-instellingen](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD-instellingen](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



De [Voertuigstatistieken-widgets](../widgets/info-widgets.md#vehicle-metrics-widgets) worden automatisch opgenomen wanneer u de plugin inschakelt. Als ze niet zichtbaar zijn, kunt u ze handmatig toevoegen via het menu [Scherm configureren](../widgets/configure-screen.md).

### Widgetinstellingen {#widget-settings}

De widgets tonen belangrijke gegevens van uw verbonden OBD-II-apparaat in realtime, zoals snelheid, motorstatistieken en brandstofverbruik. Zorg ervoor dat ze zichtbaar zijn voordat u uw rit begint om de statistieken naadloos te volgen.

Sommige widgets bieden weergavemodusopties:

- **Direct**. Toont realtime gegevens voor de geselecteerde statistiek.
- **Gemiddeld**. Toont gemiddelde waarden over een configureerbaar tijdsinterval (15 seconden tot 60 minuten).

Verschillende widgets, inclusief *Brandstofverbruik*, passen hun weergegeven eenheden en regionale metrische formaten aan op basis van de [Profielinstellingen](https://osmand.net/docs/user/personal/profiles#units--formats). Bij gebruik van volume-eenheden anders dan liters ondersteunt Brandstofverbruik het tonen van waarden als Miles per Gallon (MPG). Het exacte MPG-type hangt af van de geselecteerde volume-eenheid:

- US gallons → MPG (US)
- Imperial gallons → MPG (UK)

De widget selecteert automatisch het juiste formaat op basis van de gekozen <Translate android="true" ids="routing_attr_length_name"/> en <Translate android="true" ids="shared_string_volume"/> eenheden in het actieve profiel, en uw gekozen weergavemodus wordt behouden bij het exporteren en importeren van profielen.


## Gerelateerde artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)