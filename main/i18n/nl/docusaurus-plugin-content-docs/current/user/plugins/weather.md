---
source-hash: e5fd3ea3059108d94fc75d50becf312a8c006b80209c72a142b97f415bb426ca
sidebar_position: 17
title: Weer
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
 <ProFeature/> De Weer-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

Met de interactieve weerkaartlagen in de OsmAnd-app kunt u temperatuur, atmosferische druk, bewolking, windsnelheid en neerslag in uw stad of elke andere locatie op een interactieve wereldkaart volgen. De Weer-plugin biedt weersvoorspellingen per uur voor 7 dagen vooruit, direct op de OsmAnd-kaart. Weerinformatie kan ook worden gedownload voor offline gebruik.

De gegevensbron voor de Weer-plugin is het [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) beheerd door de United States National Weather Service (NWS) en het European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).


## Vereiste instellingsparameters {#required-setup-parameters}

De volgende instellingen zijn *vereist* om het weer op de OsmAnd-kaart weer te geven:

**1.** [Koop **OsmAnd Pro-abonnement**](../purchases/).

**2.** [Schakel](../plugins/#enable--disable) de Weer-plugin in het *Plugins*-gedeelte van het *Hoofdmenu* in.

**3.** [Selecteer de **meeteenheden**](#weather-settings) voor de weersverschijnselen.

**4.** [Toon de **Weerlagen**](#customize-weather-layers) op de kaart met behulp van het menu-item Weer in het menu Kaart configureren (vergeet niet uit te zoomen).

**5.** [Bekijk de **Weersvoorspelling**](#weather-forecast-screen) voor het geselecteerde gebied (dit menu zorgt ervoor dat het hoofdscherm van de OsmAnd-kaart niet wordt overladen met weerlagen).

**6.** [Download](#offline-forecast) de weersvoorspelling als u deze offline wilt gebruiken.

**7.** [Schakel **Weerwidgets**](#weather-widgets) in als u dagelijks actuele weersinformatie wilt zien.

:::caution Vereiste rendering
De Weer-plugin is alleen beschikbaar met de kaartrendering-engine [Versie 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Weer weergeven op de kaart {#display-weather-on-the-map}

### Weersvoorspellingsscherm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Ingeschakelde plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weerdashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Ingeschakelde plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weerdashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Het hoofdmenu aan de zijkant heeft een speciaal menu-item **Weer** dat snelle toegang biedt tot alle weerhulpmiddelen. Het *Weersvoorspellingsscherm* toont informatie over *temperatuur*, *atmosferische druk*, *windsnelheid*, *bewolking* en *neerslag*.

Onderaan het scherm bevindt zich de *weerwerkbalk*. U kunt de dagknoppen en de tijdschuifregelaar gebruiken om de exacte tijd in te stellen waarop de weersvoorspelling wordt weergegeven.

### Weerlagen aanpassen {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Ingeschakelde plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weerdashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Ingeschakelde plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weerdashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Om weerlagen op het OsmAnd-kaartscherm weer te geven, moet u het menu *Kaart configureren* gebruiken. Ga naar het menu, zoek het item *Weer* in de lijst (alleen beschikbaar als de plugin is ingeschakeld) en tik erop.

In dit menu kunt u de **zichtbaarheid** en [instellingen](#weather-settings) voor elke laag wijzigen, het type hoogtelijnen selecteren en de [offline 7-daagse weersvoorspelling](#offline-forecast) downloaden (*alleen hier beschikbaar voor Android*).


### Weerinstellingen {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Hoofdmenu → Plugins → Weer → Instellingen*
- *Hoofdmenu → Instellingen → Profiel → Plugin-instellingen → Weer*

![Weerinstellingen Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weerinstellingen 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Hoofdmenu → Instellingen → Profiel → Plugins → Weer*

![Weerinstellingen iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weerinstellingen iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Het is belangrijk om te beslissen in welke meeteenheden het voor u handig is om de [Weergegevens](#weather-layers) op de kaart en in het gedeelte [Weerwidgets](#weather-widgets) van het scherm te zien. U kunt geschikte meeteenheden voor elke parameter kiezen of standaardwaarden gebruiken (*alleen iOS*). In de iOS-versie van de OsmAnd-app kunt u ook de offline voorspellingsoptie inschakelen om mobiel verkeer tijdens het reizen te voorkomen.

:::note
In de iOS-versie van OsmAnd kunt u meeteenheden en transparantieniveau wijzigen in het menu dat wordt geopend na een lange tik op het pictogram van de gewenste kaartlaag.
:::

### Weerlagen {#weather-layers}

Alle weergegevens worden gepresenteerd als afzonderlijke kaartlagen. Om de weerlagen op de kaart te zien, moet u uitzoomen, ze zijn alleen beschikbaar op zoomniveaus 2-12. Weerlagen gebruiken [weerpaletten](../personal/color-palette-schemes.md#weather) om de kaart te kleuren, deze paletten kunnen indien nodig [gewijzigd](../personal/color-palette-schemes.md#edit-palette-file) worden.

| |
|------------|
| **Neerslaglaag** toont informatie over weersverschijnselen wanneer water in verschillende aggregatietoestanden uit de lucht op de grond valt. Neerslag is regen, sneeuw, ijzel of hagel. De neerslagschaal is gegradueerd in millimeters (of inches) water dat in 24 uur op 1 vierkante meter valt. 1 mm regen komt overeen met 1 liter water per 1 vierkante meter. |
|![Neerslagschema](@site/static/img/plugins/weather/precipitation.png)|
| **Temperatuur** drukt de kwantitatieve waarneming van warm en koud uit. Het wordt gemeten in graden. In OsmAnd kunt u kiezen tussen Celsius en Fahrenheit. |
|![Temperatuurschema](@site/static/img/plugins/weather/temperature.png)|
| **Wind** is de beweging van lucht veroorzaakt door de ongelijke verwarming van de aarde door de zon en zijn eigen rotatie. Wind kan variëren van een lichte bries tot natuurrampen zoals orkanen en tornado's. In OsmAnd kan de windsnelheid worden weergegeven in meters per seconde (m/s), kilometers per uur (km/u), mijlen per uur (mph) en knopen (kt). |
|![Windschema](@site/static/img/plugins/weather/wind.png)|
| **Bewolking** is het gemiddelde deel van de lucht dat bedekt is met wolken, waargenomen vanaf een bepaalde locatie. Het wordt gemeten in %. |
|![Bewolkingsschema](@site/static/img/plugins/weather/clouds.png)|
| **Atmosferische druk** wordt veroorzaakt door het gewicht van de lucht boven het meetpunt. Het neemt af met toenemende hoogte. Atmosferische druk kan worden weergegeven in hectopascal (hPa), millimeters kwik (mmHg) en inches kwik (inHg). |
| ![Drukschema](@site/static/img/plugins/weather/pressure.png) |
| **Windanimatie** omvat dynamische weergaven die windrichting en -snelheid in de regio tonen. |
| ![Windanimatie](@site/static/img/plugins/weather/wind_annimation.gif) |


### Kaarten combineren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weerlagen combineren op Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Weerlagen combineren op Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weerlagen combineren op iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Weerlagen combineren op iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Om uitgebreide weersinformatie te krijgen, kunt u de kaartlagen afzonderlijk gebruiken of eenvoudig combineren. Isolinies van één specifiek type kunnen ook aan de Weerlaag worden toegevoegd. Tik gewoon op de knop *Lagen* of *Isolinies* op het scherm.


### Snelle acties voor lagen {#quick-actions-for-layers}

![QA Weerlagen](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Om de zichtbaarheid van weerlagen te schakelen, kunt u de knoppen *Snelle actie* op het kaartscherm gebruiken. De algemene instellingen voor het tonen of verbergen van lagen vindt u in het aparte [Weergedeelte](#weather-forecast-screen) van het *Hoofdmenu*. In het artikel [Snelle actie](../widgets/quick-action.md#configure-map) vindt u een lijst met de lagen die beschikbaar zijn voor weergave. Als u snel toegang nodig heeft tot deze kaartconfiguratie, gebruikt u het hulpmiddel *Aangepaste knop*.

- Ga naar [Actie toevoegen](../widgets/quick-action.md#custom-buttons): *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → Actie toevoegen → Kaart configureren*.
- Voeg een of meer QA-knoppen toe om de zichtbaarheid van een specifieke weerlaag te wijzigen.


## Offline voorspelling {#offline-forecast}

### Cache {#cache}

Wanneer het tabblad Weer is geopend, wordt, tenzij anders aangegeven, de vereiste weersinformatie van het netwerk gedownload. U kunt de vooraf geladen [Weersvoorspelling](#download-forecast) op uw apparaten gebruiken. De weersinformatie wordt na het downloaden automatisch in de cache opgeslagen en kan offline worden gebruikt totdat de voorspelling verloopt.

:::tip
Op Android-apparaten kunt u controleren wanneer weergegevens zijn gedownload door op de *Weerwidget* te tikken. De OsmAnd Development-plugin moet zijn ingeschakeld.
![Datum van weer-cache Android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Voorspelling downloaden {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weerplugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weerplugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weerplugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weerplugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Voor elk land kunt u **Offline Voorspelling** downloaden (tot 7 dagen). Hoe dichter het bij de huidige datum is, hoe nauwkeuriger het zal zijn. Als u de weersvoorspelling offline wilt gebruiken, moet u de weergegevens van tevoren downloaden.

In het menu voor het downloaden van de voorspelling kunt u informatie verkrijgen en parameters instellen om de weergegevens up-to-date te houden.

- **Gemaakt** (*Android*) / **Bijgewerkt** (*iOS*). Toont wanneer de laatste update is uitgevoerd.
- **Volgende update** (*iOS*). Wanneer de volgende update beschikbaar zal zijn.
- **Grootte** (*Android*) / **Updategrootte** (*iOS*). Toont de grootte van alle updates.
- **Update**-knop (*Android*) / **Nu bijwerken** (*iOS*). Indien actief, kunt u weergegevens handmatig bijwerken zonder te wachten op een automatische update.
- **Updatefrequentie** (*iOS*). Kan worden ingesteld op 12 uur, 24 uur of wekelijks.
- *Alleen bijwerken via Wi-Fi* (*iOS*). Schakel deze optie in als u geen mobiele gegevens wilt gebruiken voor downloads.
- **Verwijderen** *prullenbak*-knop (*Android*) / **Voorspelling verwijderen** (*iOS*). Hiermee kunt u alle voorspellingsgegevens voor deze regio verwijderen.
- **Bewerken** *potlood*-knop (*Android*). Hiermee kunt u de naam van het weerbestand wijzigen.

:::info
OsmAnd genereert elke 6 uur een nieuwe voorspelling.
:::


## Weerwidgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="shared_string_weather"/>*

![Weerwidgets op Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weerwidgets op Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate ios="true" ids="shared_string_weather"/>*

![Weerwidgets op iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

[Weerwidgets](../widgets/info-widgets.md#weather-widgets) zoals Temperatuur, Luchtdruk, Wind, Wolken en Neerslag tonen de huidige weergegevens voor het **centrale punt op de kaart**.

- Weerwidgets worden alleen weergegeven wanneer het [Weerscherm](#weather-forecast-screen) is ingeschakeld.
- Om weerwidgets te activeren, selecteert u het menu-item *Scherm configureren* in het hoofdmenu, het paneel waarop u ze wilt plaatsen en de gewenste widgets uit de lijst.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: november 2024*