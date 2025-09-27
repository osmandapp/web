---
source-hash: 9ea8dcdea560c84f7300f1fcf64736d6b3483b4296ea97397a60522ba65d2423
sidebar_position: 7
title:  Zeekaartweergave
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Overzicht {#overview}

:::info Betaalde functie
De Zeekaartweergave-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

Zeekaartweergave is een gedetailleerde grafische weergave van oceanen, zeeën, kustgebieden en rivieren die u helpt bij het navigeren op het water en u informeert over populaire routes, obstakels in uw vaarwater, de dichtstbijzijnde havens, ankerplaatsen en andere belangrijke oriëntatiepunten.

Een zeekaart is een zeer gedetailleerde topografische kaart die schippers helpt een vaartuig op een gekozen koers op het water te navigeren. Het is vergelijkbaar met een wegenkaart voor wie met de auto reist. Vaak wordt het om historische redenen een *'Chart'* genoemd, het is een gedetailleerde grafische weergave van de oceanen, zeeën, kustgebieden en rivieren.

Zeekaarten zijn belangrijk voor professionele zeilers en amateurs die een boot huren om door de grachten van de stad te varen. De kaarten voorzien hen van diverse informatie zoals vaarroutes, navigatielichten, gevarenzones, zones waar het is toegestaan of verboden is om te varen of aan te meren, enz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zeekaarten](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zeekaarten](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>

### Waarom het zeekaartthema belangrijk is {#why-the-nautical-theme-matters}

Alle professionele zeilers zijn verplicht om officiële zeekaarten aan boord van hun schepen te hebben. Deze kaarten worden uitgegeven door geautoriseerde instanties en zijn vrij duur. De instanties investeren veel in het up-to-date houden van de kaarten. Ze geven regelmatig updates uit voor de kaarten, maar omdat het tijd kost om de informatie te verifiëren en de updates te verwerken, zijn zeekaarten nooit volledig up-to-date.

Gebaseerd op [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap)-gegevens, worden OsmAnd-zeekaarten gemaakt door de mensen die ze gebruiken. Elke kaartgebruiker kan bijdragen aan de kaart door informatie toe te voegen die hij belangrijk en nuttig voor zichzelf vindt, waardoor de kaart gedetailleerder en nauwkeuriger wordt, ideaal voor oriëntatie of routeplanning.

## Vereiste instellingen {#required-setup-parameters}

De volgende instellingen zorgen ervoor dat de zeekaart op het scherm verschijnt:

1. [Aankopen](../plugins/index.md#purchase) en [Inschakelen](../plugins/index.md#enable--disable) van de Zeekaartweergave-plugin.
2. [Downloaden](#download-nautical-maps) van de zeekaarten.
3. [Stel de Zeekaartstijl in](#set-nautical-map-style) voor het vereiste [profiel](../personal/profiles.md).

### Zeekaartstijl instellen {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Zeekaarttype in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Zeekaarttype in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Gebruik de [Kaartlegenda](../../user/map-legend/nautical-map.md) voor elke verwijzing naar wat er op de zeekaart wordt getoond. Het legt de symbolische elementen op een zeekaart uit en dient als referentie om u te helpen navigeren bij twijfel. Door de zeekaartstijl in te stellen, krijgt u de beste weergave van de gedownloade en weergegeven nautische gegevens.

Om de huidige kaartstijl te wijzigen naar Zeekaart, moet u de volgende instellingen doen:

1. Selecteer het vereiste [profiel](../personal/profiles.md).
2. Open [Kaart configureren](../map/configure-map-menu.md).
3. Scroll naar beneden naar Kaartstijl, open het en vink **Zeekaart** aan.

### Zeekaarten downloaden {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Plugin zeekaarten weergave Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Plugin zeekaarten weergave iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Voor een optimale presentatie kunnen kaarten worden aangepast aan de huidige behoeften: markeringen en symbolen kunnen worden toegevoegd met dieptepunten en, indien nodig, contouren. Aan de andere kant kunnen standaardkaarten met informatie over binnen-, kust- en nabijgelegen wateren voor een bepaalde regio een goede aanvulling zijn op de informatie over waterwegen op een zeekaart.

Wanneer u een zeekaart [downloadt](../start-with/download-maps.md), verschijnen er meer details met betrekking tot *Boot*-navigatie op de kaart. Sommige soorten [Zeekaarten](../plugins/nautical-charts/#nautical-map-style) bevatten details zoals:

- **Nautische markeringen en symbolen.**
    Markeringen en symbolen bevatten alle nautische navigatiemarkeringen voor zowel binnen- als kustnavigatie. Kennis van deze markeringen helpt u de locatie van rotsen, obstakels, ankerplaatsen, boeien, stromingen, diep en ondiep water, en zijkanten van het kanaal te voorspellen, ongeacht de richting, enz. Markeringen en symbolen worden eenmalig voor de hele wereld gedownload.

- **Dieptepunten.**
    Nautische gegevens uit de dieptepuntpakketten worden weergegeven door getallen op het water die de geringste diepte op een bepaalde locatie aangeven. Dieptepunten zijn beschikbaar voor elk halfrond en sommige regio's.

- **Dieptecontouren.**
    Dieptecontourpakketten stellen u in staat om gebieden met gelijke diepte te definiëren. Ze zijn bedoeld om veranderingen in het reliëf onder het wateroppervlak te visualiseren. Dieptecontouren kunnen voor bepaalde gebieden worden gedownload en vervolgens worden uitgeschakeld als u ze niet nodig heeft.

:::info Dieptegetallen
Alle dieptegetallen op de zeekaarten zijn aangegeven in meters.
:::

### Zeekaartstijl uitschakelen {#disable-nautical-map-style}

Om de zeekaart te verwijderen en een van de conventionele kaarten van OsmAnd weer te geven, doet u een van de volgende dingen:

- Schakel de Zeekaart-plugin uit.
- Wijzig de kaartstijl naar iets anders dan *Zeekaart*.

:::info OPMERKING
Het uitschakelen van de Zeekaart-plugin verwijdert geen geladen nautische gegevens, dus zelfs als u de weergavemethode van nautisch naar een andere methode wijzigt wanneer nautische gegevens zijn gedownload, blijven deze zichtbaar op de kaart.
:::

## Zeekaartprofiel {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Dieptecontouren zeekaart in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Dieptecontouren in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

De zeekaart kan in elk profiel worden opgenomen. Het is echter het meest waardevol in het [Bootprofiel](../personal/profiles.md) en vooral bij [Bootnavigatie](../navigation/routing/boat-navigation.md).

## Zeekaartstijl {#nautical-map-style}

De Zeekaart-plugin in OsmAnd breidt de kaartstijlen van de vectorlaag uit met de Zeekaartstijl. Hiermee kunt u kaartgegevens weergeven volgens de regels van de zeekaart, bijvoorbeeld: gele gebieden voor land en ondiepten, lichtblauwe gebieden voor ondiep water, enz. Voor meer informatie, zie [Kaartlegenda](../../user/map-legend/nautical-map.md).

### Dieptepunten {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zeekaarten](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zeekaarten](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Dieptepunt[pakketten](../start-with/download-maps.md#overview) zijn beschikbaar voor Europa, het noordelijk halfrond en het zuidelijk halfrond en zijn informatief. Dieptepunten geven veranderingen in de topografie onder het wateroppervlak aan, en duiden de geringste diepte aan. Dit is noodzakelijk voor *Boot*-navigatie. Na het downloaden moet u [Dieptecontouren](#depth-contours) inschakelen om het op de kaart weer te geven.

### Dieptecontouren {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Dieptecontouren zeekaart in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Dieptecontouren in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Wanneer een zeekaart op het scherm wordt weergegeven, kunt u aanpassen wat u ziet:

- *Dieptecontouren* tonen of verbergen.
- Het detailniveau van de zeebodeminformatie instellen: [*Lijndikte* en *Lijnkleurenschema*](../map/vector-maps.md#-nautical-depth).

:::info OPMERKING
U kunt de OsmAnd-app helpen de database met dieptecontouren uit te breiden door uw informatie toe te voegen via [OpenSeaMap](https://map.openseamap.org/).
:::

### Zeebodemdetails {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Zeebodemdetails](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Zeebodemdetails](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Zeebodemgegevens bevatten informatie over vegetatie en algemeen oppervlaktemateriaal zoals rotsachtige rotsen, schelpen, grind, koraal, slib, enz. Vanwege de internationale classificatie van zeebodemgegevens zijn er opties voor het weergeven van dergelijke details op een kaart: *eenvoudig*, *categorie*, *alles* of *weglaten*. Gebruik de [Kaartlegenda zeebodemgebied](../map-legend/nautical-map.md#seabed-area) voor meer informatie.

- **Eenvoudig** (*voor Android-versie*) - toont de zeekaartsymbolen in overeenstemming met INT-1 Ref, die de aard van het zeebodemoppervlak aangeven.
- **Categorie** - toont naast het zeekaartsymbool ook de relevante zeekaarttag, die het natuurlijke materiaal, of de categorie zeewier en zeegras aangeeft.
- **Alles** - toont naast het zeekaartsymbool, de tag of categorie, ook kwalificaties zoals fijn, kleverig, grof, enz. Voor zeegras en zeewier worden gegevens getoond die gemarkeerd zijn met de tags *taxon* en *genus*.
- **Weglaten** - toont geen details van de zeebodem.

:::info OPMERKING
Voor meer details over de classificatie van de oppervlaktedetails en de weergaveopties, raadpleeg de [OSM's seamark wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

## Gerelateerde artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)