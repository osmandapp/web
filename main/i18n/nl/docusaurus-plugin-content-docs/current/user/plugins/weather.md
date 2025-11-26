---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
sidebar_position: 17
title:  Weer
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

Met de interactieve weerkaartlagen in de OsmAnd-app kunt u de temperatuur, atmosferische druk, bewolking, windsnelheid en neerslag in uw stad of op een andere locatie op een interactieve wereldkaart volgen. De Weer-plugin biedt uurlijkse weersvoorspellingen voor 7 dagen vooruit, rechtstreeks op de OsmAnd-kaart. Weersinformatie kan ook worden gedownload voor offline gebruik.  

De gegevensbron voor de Weer-plugin is het [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), bediend door de National Weather Service (NWS) van de Verenigde Staten en het Europees Centrum voor Weersvoorspellingen op Middellange Termijn ([ECMWF](https://www.ecmwf.int/)).  


## Vereiste Instelparameters {#required-setup-parameters}

De volgende instellingen zijn *vereist* om het Weer op de OsmAnd-kaart weer te geven:

**1.** [Koop een **OsmAnd Pro-abonnement**](../purchases/).

**2.** [Schakel](../plugins/#enable--disable) de Weer-plugin in in de sectie *Plugins* van het *Hoofdmenu*.

**3.** [Selecteer de **meeteenheden**](#weather-settings) voor de weersverschijnselen.

**4.** [Toon de **Weerlagen**](#customize-weather-layers) op de kaart via het menu-item Weer in het menu Kaart configureren (vergeet niet uit te zoomen).

**5.** [Bekijk de **Weersvoorspelling**](#weather-forecast-screen) voor het geselecteerde gebied (dit menu zorgt ervoor dat het hoofdscherm van de OsmAnd-kaart niet vol staat met weerlagen).

**6.** [Download](#offline-forecast) de weersvoorspelling als u van plan bent deze offline te gebruiken.

**7.** [Schakel **Weer-widgets**](#weather-widgets) in als u dagelijks actuele weersinformatie wilt zien.  

:::caution Vereiste rendering
De Weer-plugin is alleen beschikbaar met Kaart-renderingengine [Versie 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Weer op de Kaart Weergeven {#display-weather-on-the-map}

### Weersvoorspellingsscherm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ga naar: *Ingeschakelde plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Ga naar: *Ingeschakelde plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Het hoofdmenu aan de zijkant heeft een speciaal menu-item **Weer** dat snelle toegang biedt tot alle weertools. Het *Weersvoorspellingsscherm* toont informatie over *temperatuur*, *atmosferische druk*, *windsnelheid*, *bewolking* en *neerslag*.  

Onderaan het scherm bevindt zich de *weer-werkbalk*. U kunt de dagknoppen en de tijdschuifregelaar gebruiken om de exacte tijd in te stellen waarop de weersvoorspelling wordt weergegeven.

### Gegevensbron {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Data Source Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Data Source iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

U kunt kiezen welke weersvoorspellingsprovider OsmAnd gebruikt om gegevens weer te geven op het Weerscherm:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Gegevensbron kiezen*

Twee weersvoorspellingsproviders worden ondersteund:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – de standaardbron, bediend door NOAA/NWS. Biedt volledige weergegevens, inclusief temperatuur-, druk-, vochtigheid-, wind- en bewolkinglagen.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – een alternatieve voorspellingsbron. Biedt hoogwaardige temperatuur-, neerslag- en drukgegevens, maar biedt geen wind- of bewolkinginformatie. Bij gebruik van ECMWF worden niet-beschikbare parameters weergegeven als “–”, en verschijnen de bijbehorende weerlagen als uitgeschakeld.

Hoe de Gegevensbron de Weergave van het Weer beïnvloedt:
- De kaart, grafieken, tijdlijn en weergewaarden op het scherm worden onmiddellijk bijgewerkt na het wisselen van de bron.
- Alleen de parameters die beschikbaar zijn voor de geselecteerde provider worden weergegeven.
- Weer-widgets worden automatisch bijgewerkt om de gekozen bron te gebruiken.
- Als u eerder een weersvoorspelling hebt gedownload, gebruikt OsmAnd de gegevens die overeenkomen met de geselecteerde provider.
- GFS en ECMWF gebruiken afzonderlijke caches. Het wisselen van de bron laadt of werkt de relevante weertiles bij.


### Weerlagen Aanpassen {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ga naar: *Ingeschakelde plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Ga naar: *Ingeschakelde plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Om weerlagen op het OsmAnd-kaartscherm weer te geven, moet u het menu *Kaart configureren* gebruiken. Ga naar het menu, zoek het item *Weer* in de lijst (alleen beschikbaar als de plugin is ingeschakeld) en tik erop.  

In dit menu kunt u de **zichtbaarheid** en [instellingen](#weather-settings) voor elke laag wijzigen, het type contourlijnen selecteren en de [offline 7-daagse weersvoorspelling](#offline-forecast) downloaden (*hier alleen beschikbaar voor Android*).


### Weerinstellingen {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Hoofdmenu → Plugins → Weer → Instellingen*
- *Hoofdmenu → Instellingen → Profiel → Plugin-instellingen → Weer*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Hoofdmenu → Instellingen → Profiel → Plugins → Weer*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Het is belangrijk om te beslissen in welke meeteenheden u de [Weergegevens](#weather-layers) op de kaart en in de sectie [Weer-widgets](#weather-widgets) van het scherm wilt zien. U kunt voor elke parameter de juiste meeteenheden kiezen of standaardwaarden gebruiken (*alleen iOS*). In de iOS-versie van de OsmAnd-app kunt u ook de optie voor offline voorspelling inschakelen om het gebruik van mobiele data tijdens het reizen te vermijden.  

:::note
In de iOS-versie van OsmAnd kunt u de meeteenheden en het transparantieniveau wijzigen in het menu dat wordt geopend na lang tikken op het pictogram van de vereiste kaartlaag.  
:::

### Weerlagen {#weather-layers}

Alle weergegevens worden gepresenteerd als afzonderlijke kaartlagen. Om de weerlagen op de kaart te zien, moet u uitzoomen; ze zijn alleen beschikbaar op zoomschalen 2-12. Weerlagen gebruiken [weerpaletten](../personal/color-palette-schemes.md#weather) om de kaart in te kleuren, deze paletten kunnen indien nodig worden [gewijzigd](../personal/color-palette-schemes.md#edit-palette-file).

| |  
|------------|  
| **Neerslaglaag** toont informatie over weersgebeurtenissen waarbij water in verschillende aggregatietoestanden uit de lucht op de grond valt. Neerslag is regen, sneeuw, ijzel of hagel. De neerslagschaal is ingedeeld in millimeters (of inches) water dat in 24 uur op 1 vierkante meter valt. 1 mm regen komt overeen met 1 liter water per 1 vierkante meter. |  
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|  
| **Temperatuur** drukt de kwantitatieve perceptie van warm en koud uit. Het wordt gemeten in graden. In OsmAnd kunt u kiezen tussen de schaal van Celsius en Fahrenheit. |  
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|  
| **Wind** is de beweging van lucht veroorzaakt door de ongelijkmatige opwarming van de aarde door de zon en haar eigen rotatie. Winden kunnen variëren van lichte briesjes tot natuurrampen zoals orkanen en tornado's. In OsmAnd kan de windsnelheid worden weergegeven in meters per seconde (m/s), kilometers per uur (km/h), mijlen per uur (mph) en knopen (kt). |  
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|  
| **Bewolking** is de gemiddelde fractie van de hemel die bedekt is met wolken wanneer waargenomen vanaf een bepaalde locatie. Het wordt gemeten in %. |  
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|  
| **Atmosferische druk** wordt veroorzaakt door het gewicht van de lucht boven het meetpunt. Het neemt af met toenemende hoogte. Atmosferische druk kan worden weergegeven in hectopascal (hPa), millimeter kwik (mmHg) en inch kwik (inHg). |  
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |  
| **Windanimatie** omvat dynamische weergaven die de windrichting en -snelheid in de regio tonen. |  
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Kaarten Combineren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Om uitgebreide weersinformatie te krijgen, kunt u de kaartlagen afzonderlijk gebruiken of ze eenvoudig combineren. Isoline van één specifiek type kunnen ook aan de Weerlaag worden toegevoegd. Tik gewoon op de knop *Lagen* of *Isolijnen* op het scherm.


### Snelle Acties voor Lagen {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Om de zichtbaarheid van weerlagen te wisselen, kunt u de *Snelle Actie*-knoppen op het kaartscherm gebruiken. De algemene instellingen voor het tonen of verbergen van lagen zijn te vinden in de aparte sectie [Weer](#weather-forecast-screen) van het *Hoofdmenu*. In het artikel [Snelle Actie](../widgets/quick-action.md#configure-map) vindt u een lijst met de lagen die beschikbaar zijn voor weergave. Als u snelle toegang tot deze kaartconfiguratie nodig heeft, gebruik dan de tool *Aangepaste Knop*.

- Ga naar [Actie toevoegen](../widgets/quick-action.md#custom-buttons): *Menu → Scherm configureren → Aangepaste knoppen → Snelle actie → Actie toevoegen → Kaart configureren*.
- Voeg een of meer QA-knoppen toe om de zichtbaarheid van een bepaalde weerlaag te wijzigen.


## Offline Voorspelling {#offline-forecast}

### Cache {#cache}

Wanneer het tabblad Weer geopend is, wordt de vereiste weersinformatie van het netwerk gedownload, tenzij anders aangegeven. U kunt de vooraf geladen [Weersvoorspelling](#download-forecast) op uw apparaten gebruiken. De weersinformatie wordt na het downloaden automatisch in de cache opgeslagen en kan offline worden gebruikt totdat de voorspelling verloopt.  

:::tip
Op Android-apparaten kunt u controleren wanneer weergegevens zijn gedownload door op de *Weer-widget* te tikken. De OsmAnd Development-plugin moet ingeschakeld zijn.  
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Voorspelling Downloaden {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Voor elk land kunt u een **Offline Voorspelling** (tot 7 dagen) downloaden. Hoe dichter bij de huidige datum, hoe nauwkeuriger deze zal zijn. Als u de weersvoorspelling offline wilt gebruiken, moet u de weergegevens van tevoren downloaden.  

In het menu voor het downloaden van voorspellingen kunt u informatie verkrijgen en parameters instellen om de weergegevens up-to-date te houden.  
  
- **Gemaakt** (*Android*) / **Bijgewerkt** (*iOS*). Toont wanneer de laatste update is uitgevoerd.  
- **Volgende update** (*iOS*). Wanneer de volgende update beschikbaar zal zijn.  
- **Grootte** (*Android*) / **Grootte van updates** (*iOS*). Toont de grootte van alle updates.  
- **Update**-knop (*Android*) / **Nu bijwerken** (*iOS*). Indien actief, kunt u de weergegevens handmatig bijwerken zonder te wachten op een automatische update.  
- **Updatefrequentie** (*iOS*). Kan worden ingesteld op 12-uurlijks, 24-uurlijks of wekelijks.  
- *Alleen bijwerken via Wi-Fi* (*iOS*). Schakel deze optie in als u geen mobiele data wilt gebruiken voor downloads.  
- **Verwijder** *prullenbak*-knop (*Android*) / **Verwijder voorspelling** (*iOS*). Hiermee kunt u alle voorspellingsgegevens voor deze regio verwijderen.
- **Bewerk** *potlood*-knop (*Android*). Hiermee kunt u de naam van het weerbestand wijzigen.

**Opmerking:** Sommige landen, zoals de VS en Canada, gebruiken één Offline Voorspelling-bestand voor het hele land. Dit vermindert het aantal downloads en vereenvoudigt het beheer van weergegevens.

:::info  
Weergegevens worden elke 6 uur bijgewerkt (alle 4 updates van [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) en 3 van [ECMWF](https://www.ecmwf.int/)) en worden met een korte vertraging beschikbaar in OsmAnd, aangezien het rekenproces enkele uren duurt voordat het wordt vrijgegeven (meestal rond 07:00 UTC).  
:::


## Weer-widgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Weer-widgets](../widgets/info-widgets.md#weather-widgets) zoals Temperatuur, Luchtdruk, Wind, Bewolking en Neerslag tonen de actuele weergegevens voor het **centrale punt op de kaart**.

- Weer-widgets worden alleen weergegeven wanneer het [Weerscherm](#weather-forecast-screen) is ingeschakeld.
- Om weer-widgets te activeren, selecteert u het menu-item *Scherm configureren*, het paneel waarop u ze wilt plaatsen en de gewenste widgets uit de lijst.


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)