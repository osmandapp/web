---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title: Marker Widgets
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

Markers zijn tijdelijke punten die op de kaart worden aangegeven in de vorm van vlaggen. De widgets tonen de *Richting*, *Afstand*, *Adres* en *Geschatte aankomsttijd* tot de marker. Ze stellen u in staat om snel markers op de kaart te vinden, en hun positie te wijzigen. U kunt meer lezen over markers in dit [artikel](../personal/markers).


## Widget bovenbalk {#top-bar-widget}

De widget **Kaartmarkersbalk** (Android) / **Afstandsaanduiding - Bovenbalk** (iOS) toont:

- Afstand van uw huidige locatie (of het middelpunt van de kaart / het initiële aanraakpunt van de kaart wanneer Locatie is uitgeschakeld) tot het geselecteerde punt aangegeven door de Marker op de kaart ([Lengte-eenheden](../personal/profiles/#general-settings) kunnen worden gekozen in de Profielinstellingen).
- Een pijl van dezelfde kleur als de marker geeft de richting aan vanaf de huidige locatie (of het middelpunt van de kaart / het initiële aanraakpunt van de kaart wanneer Locatie is uitgeschakeld) en de oriëntatie in de ruimte van uw apparaat (koers) naar de marker.
- Locatieadres.
- Menu-icoon dat leidt naar de [Kaartmarkerlijst](../personal/markers/#map-markers-menu).

U kunt er ook voor kiezen om één of twee markers weer te geven. Lees meer over widgetinstellingen in dit [artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*De afstand tot de marker* is de lengte van de rechte lijn tussen uw positie (of het middelpunt van de kaart / het initiële aanraakpunt van de kaart wanneer Locatie is uitgeschakeld) en de marker.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaartmarkers op de widget bovenbalk](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Inschakelen | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>* |
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de markerlocatie. |
| Lang tikken + verplaatsen | Om de afstand te meten en de richting te zien van een bepaald punt op de kaart naar de gevolgde marker, moet u lang tikken en onmiddellijk de kaartpositie iets verplaatsen (het contextmenu mag niet verschijnen). |
| Marker naderen | Als uw locatie zich binnen een kleine straal van de kaartmarker bevindt (**< 50 m**), ziet u in het widgetveld een vinkje om de kaartmarker snel te verwijderen (markeren als gepasseerd). De aangevinkte marker wordt vervangen door de volgende marker in de lijst met markers. |
| Afstandsformaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Kaartmarkers op de widget bovenbalk](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Inschakelen | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>*|
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de markerlocatie. |
| Door te tikken | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Modus wisselen). |
| Marker naderen | Als uw locatie zich binnen een kleine straal van de kaartmarker bevindt (**< 50 m**), ziet u in het widgetveld een vinkje om de kaartmarker snel te verwijderen (markeren als gepasseerd). De aangevinkte marker wordt vervangen door de volgende marker in de lijst met markers. |
| Afstandsformaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Paneelwidgets {#panel-widgets}

De widget **Kaartmarkers** *(voor Android)* en **Afstandsaanduiding - Widgets** *(voor iOS)* tonen:

- *Afstand van uw huidige locatie* tot het geselecteerde punt aangegeven door de Marker op de kaart ([Lengte-eenheden](../personal/profiles/#general-settings) kunnen worden gekozen in de Profielinstellingen).
- *Geschatte aankomsttijd of ETA*.
Dit is de tijd (uu:mm) waarop het voertuig of de persoon op de bestemming moet aankomen. Het wordt berekend als de afstand tot de marker gedeeld door de gemiddelde snelheid.
De gemiddelde snelheid wordt berekend als het gemiddelde van alle snelheidswaarden die zijn ontvangen van locatiepunten voor het door u geselecteerde tijdsinterval van 15 seconden tot 60 minuten.

U kunt er ook voor kiezen om één of twee markers weer te geven. Lees meer over widgetinstellingen in dit [artikel](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*De afstand tot de marker* is de lengte van de rechte lijn tussen uw positie (of een bepaald punt op de kaart) en de marker.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paneelwidgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Inschakelen | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Door te tikken 1 | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Modus wisselen). |
| Door te tikken 2 | Het zichtbare deel van de kaart verschuift naar de markerlocatie (Ga naar markerlocatiemodus) |
| Lang tikken + verplaatsen | Om de afstand te meten en de richting te zien van een bepaald punt op de kaart naar de gevolgde marker, moet u lang tikken en onmiddellijk de kaartpositie iets verplaatsen (het contextmenu mag niet verschijnen). |
| Afstandsformaat | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Paneelwidgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Inschakelen | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="map_markers_bar"/>* |
| Door te tikken | Het zichtbare deel van de kaart verschuift naar de markerlocatie. |
| Door te tikken | Wisselen tussen "Afstand" / "Geschatte aankomsttijd" (Modus wisselen). |
| Afstandsformaat | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Markerwidgets configureren {#configure-marker-widgets}

Algemene informatie over de instellingen van de kaartmarkerswidget kunt u lezen op deze [pagina](../personal/markers#map-markers-widgets).

**Kaartmarkersbalk**
De bovenbalkwidget toont de afstand en richting tot de volgende kaartmarker vanaf uw huidige locatie. In de instellingen kunt u kiezen of één of twee markers bovenaan het scherm worden weergegeven.

![weergave_op_de_kaart](@site/static/img/widgets/configure-marker-wid-02.png)

**Kaartmarkers**
De widget toont de afstand of geschatte aankomsttijd (ETA) voor de eerste of tweede marker in de lijst met kaartmarkers. U kunt kiezen: één marker, de eerste of tweede, die op het scherm wordt weergegeven of beide.

![weergave_op_de_kaart](@site/static/img/widgets/configure-marker-wid-01.png) ![weergave_op_de_kaart](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Toont | Deze modus stelt u in staat om te kiezen welke informatie de widget zal weergeven: *Afstand* of *Geschatte aankomsttijd*. |
| Interval | Als *Geschatte aankomsttijd* is geselecteerd in 'Toon', verschijnt deze optie met een keuze aan tijden (van 15 seconden tot 60 minuten) voor ETA-berekening. |
| Klik op widget | Deze instelling stelt u in staat om te kiezen welke actie wordt uitgevoerd wanneer u op de widget klikt: *Modus wisselen* of *Ga naar markerlocatie*. |


## Weergave op de kaart {#appearance-on-the-map}

Het configureren van de weergave van kaartmarkers is beschikbaar in zowel de Android- als de iOS-versie van OsmAnd. Het menu "Weergave op de kaart" is een algemene instelling voor kaartmarkers en is van toepassing ongeacht of de widgets zijn ingeschakeld of niet. Gedetailleerde informatie hierover kunt u lezen op deze [pagina](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![weergave_op_de_kaart](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Toont informatie over de eerste één of twee markers in de lijst met kaartmarkers. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Geeft de richting aan naar de gevolgde marker (één of twee) als een pijl op de kaart. Als de marker zich in het zichtbare deel van de kaart bevindt, wordt er geen pijl weergegeven. |
| <Translate android="true" ids="show_guide_line"/> | Toont de richting, als een stippellijn, van een bepaald punt op de kaart naar de gevolgde marker in een rechte lijn. |
| <Translate android="true" ids="one_tap_active"/> | Met één tik op de gewenste marker op de kaart, verplaatst deze marker zich naar de bovenkant van de lijst met actieve kaartmarkers zonder het contextmenu te openen. |
| <Translate android="true" ids="keep_passed_markers"/> | Markers die zijn toegevoegd als een groep Favorieten of GPX-waypoints die als Gepasseerd zijn gemarkeerd, blijven op de kaart staan. Als de groep niet actief is, verdwijnen de markers van de kaart. |

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Kaartmarkers Weergave iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Toont informatie over de eerste één of twee markers in de lijst met kaartmarkers. |
| <Translate android="true" ids="show_direction"/> | Hiermee kunt u kiezen of widgets worden weergegeven en hoe ze worden weergegeven: boven de kaart (<Translate android="true" ids="shared_string_topbar"/>) of aan de rechterkant van het scherm (<Translate android="true" ids="shared_string_widgets"/>). |
| Pijlen op de kaart | Geeft de richting aan naar de gevolgde marker (één of twee) als een pijl op de kaart. Als de marker zich in het zichtbare deel van de kaart bevindt, wordt er geen pijl weergegeven. |
| Richtingslijn | Toont de richting, als een stippellijn, van een bepaald punt op de kaart naar de gevolgde marker in een rechte lijn. |

</TabItem>

</Tabs>


## Gerelateerde artikelen {#related-articles}

- [Scherm configureren](./configure-screen.md)
- [Kaartknoppen](./map-buttons.md)
- [Informatiewidgets](./info-widgets.md)
- [Navigatiewidgets](./nav-widgets.md)
- [Radiusliniaal en Liniaal](./radius-ruler.md)
- [Snelle actie](./quick-action.md)


> *Laatst bijgewerkt: oktober 2023*