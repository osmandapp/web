---
source-hash: aedd55d826014d3cfaaa5918963baf22bd911b20a8772409d2eb09fa220d9c67
sidebar_position: 6
title: Mapillary
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

Om sneller te navigeren, kunt u in OsmAnd straatbeelden van uw routes of interessante plaatsen gebruiken die worden aangeboden door [Mapillary](https://www.mapillary.com/) (een internetverbinding is vereist).

De [Mapillary-laag](https://www.mapillary.com/) brengt straatbeelden rechtstreeks naar de OsmAnd-app, zodat u eenvoudig de omgeving van elke interessante plaats of langs de geplande route kunt overzien. Als er beelden ontbreken, kunt u deze zelf toevoegen, en anderen kunnen ze gebruiken. Deze functie is ontstaan uit onze samenwerking met [het Mapillary-team](https://www.mapillary.com/about), waarbij de voordelen van beide apps worden verenigd.

## Vereiste instellingsparameters {#required-setup-parameters}

Om straatbeelden op de OsmAnd-kaart weer te geven, moet u de volgende instellingen maken:

1. Schakel de [Mapillary-plug-in](../plugins/#enable--disable) in het gedeelte *Plug-ins* van het *Hoofdmenu* in.
2. Geef de [straatbeelden](#enable-layer) op de kaart weer voor het vereiste profiel in het menu Kaart configureren.

## Kaartlaag {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin punten op de kaart Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin punten op de kaart iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

De kaartlaag met straatbeelden wordt op de OsmAnd-kaart weergegeven als rijen van verbonden groene stippen.

- Foto's van Mapillary-gebruikers zijn aan deze groene stippen gekoppeld.
- Tik op een groene stip op de kaart om een straatbeeld te openen. Foto's kunnen ook worden geselecteerd uit een lijst in het [kaartcontextmenu](#map-context-menu), indien beschikbaar.
- Na selectie wordt het toepassingsscherm verdeeld in de OsmAnd-kaart en Mapillary-straatbeelden.
- U kunt [filters](#data-filtering) toepassen om de foto's te selecteren die u op de kaart wilt weergeven.

### Laag inschakelen {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary plugin afbeeldingen Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin afbeeldingen iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Om Mapillary-straatbeelden op de kaart weer te geven, moet u deze laag inschakelen in het menu [Kaart configureren](../map/configure-map-menu.md) in het gedeelte *Weergeven*.

*Toegang: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Mapillary Fotoviewer

- Tik op de *drie-stippen-knop* (&#8285;) om de geselecteerde afbeelding te openen in de [**Mapillary**](https://www.mapillary.com/mobile-apps) applicatie.
- Tik op de pijl om van afbeelding naar afbeelding te gaan.
:::

### Gegevens filteren {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

U kunt een filter maken en selecteren welke foto's op de kaart moeten worden weergegeven. Kies bijvoorbeeld om alleen recente afbeeldingen of alleen 360-graden afbeeldingen te bekijken.

*Toegang: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Tegelcache
Als de geselecteerde afbeeldingen niet worden weergegeven, gebruik dan **Herladen** voor de **Tegelcache**.
:::

## Kaartcontextmenu {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Kaartcontextmenu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Kaartcontextmenu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Als de Mapillary-plug-in is ingeschakeld, kunt u foto's van straten bekijken die beschikbaar zijn binnen een straal van 40 meter van het geselecteerde punt op de kaart. De foto's worden geopend in het [kaartcontextmenu](../map/map-context-menu.md#online-photos).

## Foto's toevoegen {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary plugin Kaartcontextmenu Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Kaartcontextmenu iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Om foto's toe te voegen, moet u zich registreren in de [Mapillary-app](https://www.mapillary.com/mobile-apps). U kunt ook foto's toevoegen aan het kaartcontextmenu door op de knop *Foto's toevoegen* te tikken in het gedeelte [Online foto's](../map/map-context-menu.md#online-photos) van het kaartcontextmenu. Vervolgens wordt de Mapillary-applicatie geopend.

## Mapillary Widget {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Kies een paneel → <Translate android="true" ids="mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Mapillary plugin Kaartcontextmenu Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Kies een paneel → <Translate ios="true" ids="mapillary"/>*

![Mapillary plugin Kaartcontextmenu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

De [Mapillary-widget](../widgets/info-widgets.md#mapillary-widget) wordt gebruikt om snel toegang te krijgen tot de Mapillary-applicatie. De widget wordt automatisch aan het hoofdscherm toegevoegd wanneer de Mapillary-plug-in is ingeschakeld. U kunt de Mapillary-widget en andere widgets in het menu [Scherm configureren](../widgets/configure-screen.md) in- of uitschakelen.

## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: oktober 2024*