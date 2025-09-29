---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Markering Widgets
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overzicht {#overview}

Markeringen zijn tijdelijke punten die op de kaart worden aangeduid in de vorm van vlaggen. De widgets tonen de *Richting*, *Afstand*, *Adres* en *Geschatte aankomsttijd* tot de markering. Ze stellen u in staat om snel markeringen op de kaart te vinden en hun positie te wijzigen. U kunt meer lezen over markeringen in dit [artikel](../personal/markers).

## Widget Bovenbalk {#top-bar-widget}

De widget **Kaartmarkeringenbalk** (Android) / **Afstandsindicatie - Bovenbalk** (iOS) toont:

- Afstand vanaf uw huidige locatie (of het middelpunt van de kaart / het initiële aanraakpunt op de kaart wanneer Locatie is uitgeschakeld) tot het geselecteerde punt dat door de Markering op de kaart wordt aangegeven ([Lengte-eenheden](../personal/profiles/#general-settings) kunnen worden gekozen in de Profielinstellingen).
- Een pijl in dezelfde kleur als de markering geeft de richting aan vanaf de huidige locatie (of het middelpunt van de kaart / het initiële aanraakpunt op de kaart wanneer Locatie is uitgeschakeld) en de oriëntatie in de ruimte van uw apparaat (koers) naar de markering.
- Locatieadres.
- Menupictogram dat leidt naar de [Lijst met kaartmarkeringen](../navigation/setup/markers-navigation.md#itinerary-list).

U kunt ook kiezen om één of twee markeringen weer te geven. Lees meer over widgetinstellingen in dit [artikel](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*De afstand tot de markering* is de lengte van de rechte lijn tussen uw positie (of het middelpunt van de kaart / het initiële aanraakpunt op de kaart wanneer Locatie is uitgeschakeld) en de markering.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaartmarkeringen op de widget Bovenbalk](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)

| | |
|------------|------------|
| Inschakelen | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>* |
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de locatie van de markering. |
| Lang tikken + verplaatsen | Om de afstand te meten en de richting te zien vanaf een bepaald punt op de kaart naar de gevolgde markering, moet u lang tikken en onmiddellijk de kaartpositie iets verplaatsen (het contextmenu mag niet verschijnen). |
| Markering naderen | Als uw locatie zich binnen een kleine straal van de kaartmarkering bevindt (**< 50 m**), ziet u in het widgetveld een vinkje om de kaartmarkering snel te verwijderen (markeren als gepasseerd). De aangevinkte markering wordt vervangen door de volgende markering in de lijst met markeringen. |
| Afstandsformaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

<TabItem value="ios" label="iOS">

![Kaartmarkeringen op de widget Bovenbalk](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Inschakelen | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>*|
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de locatie van de markering. |
| Door te tikken | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Wisselmodus). |
| Markering naderen | Als uw locatie zich binnen een kleine straal van de kaartmarkering bevindt (**< 50 m**), ziet u in het widgetveld een vinkje om de kaartmarkering snel te verwijderen (markeren als gepasseerd). De aangevinkte markering wordt vervangen door de volgende markering in de lijst met markeringen. |
| Afstandsformaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>

## Paneelwidgets {#panel-widgets}

De widget **Kaartmarkeringen** *(voor Android)* en **Afstandsindicatie - Widgets** *(voor iOS)* toont:

- *Afstand vanaf uw huidige locatie* tot het geselecteerde punt dat door de Markering op de kaart wordt aangegeven ([Lengte-eenheden](../personal/profiles/#general-settings) kunnen worden gekozen in de Profielinstellingen).
- *Geschatte aankomsttijd of ETA*.
Dit is de tijd (uu:mm) waarop het voertuig of de persoon op de bestemming zou moeten aankomen. Het wordt berekend als de afstand tot de markering gedeeld door de gemiddelde snelheid.
De gemiddelde snelheid wordt berekend als het gemiddelde van alle snelheidswaarden die zijn ontvangen van locatiepunten voor het door u geselecteerde tijdsinterval van 15 seconden tot 60 minuten.

U kunt ook kiezen om één of twee markeringen weer te geven. Lees meer over widgetinstellingen in dit [artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*De afstand tot de markering* is de lengte van de rechte lijn tussen uw positie (of een bepaald punt op de kaart) en de markering.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paneelwidgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Inschakelen | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Door te tikken 1 | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Wisselmodus). |
| Door te tikken 2 | Het zichtbare deel van de kaart verschuift naar de locatie van de markering (Ga naar markeringslocatiemodus) |
| Lang tikken + verplaatsen | Om de afstand te meten en de richting te zien vanaf een bepaald punt op de kaart naar de gevolgde markering, moet u lang tikken en onmiddellijk de kaartpositie iets verplaatsen (het contextmenu mag niet verschijnen). |
| Afstandsformaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

<TabItem value="ios" label="iOS">

![Paneelwidgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Inschakelen | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>* |
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de locatie van de markering. |
| Door te tikken | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Wisselmodus). |
| Afstandsformaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>

## Markering Widgets Configureren {#configure-marker-widgets}

U kunt algemene informatie over de instellingen van de Kaartmarkering-widget lezen op deze [pagina](../personal/markers#appearance-on-the-map).

### Kaartmarkeringenbalk {#map-markers-bar}
De widget in de bovenbalk toont de afstand en richting naar de volgende Kaartmarkering vanaf uw huidige locatie. In de instellingen kunt u kiezen of één of twee markeringen bovenaan het scherm worden weergegeven.

![weergave_op_de_kaart](@site/static/img/widgets/configure-marker-wid-02.png)

### Kaartmarkeringen {#map-markers}
De widget toont de afstand of geschatte aankomsttijd (ETA) voor de eerste of tweede markering in de lijst met Kaartmarkeringen. U kunt kiezen: één markering, de eerste of de tweede, die op het scherm wordt weergegeven, of beide.

![weergave_op_de_kaart](@site/static/img/widgets/configure-marker-wid-01.png) ![weergave_op_de_kaart](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Toont | Deze modus stelt u in staat te kiezen welke informatie de widget zal weergeven: *Afstand* of *Geschatte aankomsttijd*. |
| Interval | Als *Geschatte aankomsttijd* is geselecteerd in 'Toont', verschijnt deze optie met een keuze aan tijden (van 15 seconden tot 60 minuten) voor de ETA-berekening. |
| Klik op widget | Met deze instelling kunt u kiezen welke actie wordt uitgevoerd wanneer u op de widget klikt: *Wisselmodus* of *Ga naar markeringslocatie*. |

## Weergave op de Kaart {#appearance-on-the-map}

Het configureren van de weergave van kaartmarkeringen is beschikbaar in zowel de Android- als de iOS-versie van OsmAnd. Het menu "Weergave op de Kaart" is een algemene instelling voor Kaartmarkeringen en is van toepassing ongeacht of de widgets zijn ingeschakeld of niet. U kunt de gedetailleerde informatie lezen op deze [pagina](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![weergave_op_de_kaart](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Toont informatie over de eerste één of twee markeringen in de lijst met Kaartmarkeringen. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Geeft de richting naar de gevolgde markering (één of twee) aan als een pijl op de kaart. Als de markering zich in het zichtbare deel van de kaart bevindt, wordt er geen pijl weergegeven. |
| <Translate android="true" ids="show_guide_line"/> | Toont de richting, als een stippellijn, van een bepaald punt op de kaart naar de gevolgde markering in een rechte lijn. |
| <Translate android="true" ids="one_tap_active"/> | Met een enkele tik op de vereiste markering op de kaart, verplaatst deze markering naar de bovenkant van de lijst met actieve Kaartmarkeringen zonder het Contextmenu te openen. |
| <Translate android="true" ids="keep_passed_markers"/> | Markeringen die zijn toegevoegd als een groep Favorieten of GPX-waypoints die als Gepasseerd zijn gemarkeerd, blijven op de kaart staan. Als de groep niet actief is, verdwijnen de markeringen van de kaart. |

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Kaartmarkeringen Weergave iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Toont informatie over de eerste één of twee markeringen in de lijst met Kaartmarkeringen. |
| <Translate android="true" ids="show_direction"/> | Hiermee kunt u kiezen of u widgets wilt weergeven en hoe ze zullen verschijnen: boven de kaart (<Translate android="true" ids="shared_string_topbar"/>) of aan de rechterkant van het scherm (<Translate android="true" ids="shared_string_widgets"/>). |
| Pijlen op de kaart | Geeft de richting naar de gevolgde markering (één of twee) aan als een pijl op de kaart. Als de markering zich in het zichtbare deel van de kaart bevindt, wordt er geen pijl weergegeven. |
| Richtingslijn | Toont de richting, als een stippellijn, van een bepaald punt op de kaart naar de gevolgde markering in een rechte lijn. |

</TabItem>

</Tabs>

## Gerelateerde Artikelen {#related-articles}

- [Scherm Configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatieve widgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Snelle Actie](./quick-action.md)