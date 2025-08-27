---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title: Nautische Kaartweergave
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
De plug-in Nautische Kaartweergave is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.
:::

Nautische Kaartweergave is een gedetailleerde grafische weergave van oceanen, zeeën, kustgebieden en rivieren die u helpt bij het navigeren op het water en het kennen van populaire routes, obstakels in uw vaarweg, dichtstbijzijnde havens, ankerplaatsen en andere belangrijke oriëntatiepunten.

Een nautische kaart is een zeer gedetailleerde topografische kaart om schippers te helpen een vaartuig op een gekozen koers op het water te navigeren. Het is vergelijkbaar met een wegenkaart voor degenen die met de auto reizen. Vaak een *'Zeekaart'* genoemd om historische redenen, is het een gedetailleerde grafische weergave van de oceanen, zeeën, kustgebieden en rivieren.

Nautische kaarten zijn belangrijk voor professionele zeilers en amateurs die een boot huren om door de grachten van de stad te varen. De kaarten voorzien hen van diverse informatie zoals vaarroutes, navigatielichten, gevarenzones, zones waar het toegestaan of verboden is om te varen of aan te meren, enz.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nautische kaarten](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische kaarten](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Waarom het Nautische Thema Belangrijk Is {#why-the-nautical-theme-matters}

Alle professionele zeilers zijn verplicht om officiële nautische kaarten op hun schepen te hebben. Deze kaarten worden uitgegeven door geautoriseerde instanties en zijn vrij duur. De instanties investeren zwaar in het up-to-date houden van de kaarten. Ze geven regelmatig updates uit voor de kaarten, maar omdat het tijd kost om de informatie te verifiëren en de updates te verwerken, zijn nautische kaarten nooit volledig up-to-date.

Gebaseerd op [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) gegevens, worden OsmAnd Nautische kaarten gemaakt door mensen die ze gebruiken. Elke kaartgebruiker kan bijdragen aan de kaart door informatie toe te voegen die zij belangrijk en nuttig vinden voor zichzelf, waardoor de kaart gedetailleerder en nauwkeuriger wordt, ideaal voor oriëntatie of routeplanning.


## Vereiste Instellingsparameters {#required-setup-parameters}

De volgende instelling zorgt ervoor dat de nautische kaart op het scherm verschijnt:

1. [Koop](../plugins/index.md#purchase) en [Activeer](../plugins/index.md#enable--disable) de plug-in Nautische kaartweergave.
2. [Download](#download-nautical-maps) de nautische kaarten.
3. Stel de [Nautische](#set-nautical-map-style) kaartstijl in voor het vereiste [profiel](../personal/profiles.md).


### Nautische Kaartstijl Instellen {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Nautisch Kaarttype in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Nautisch Kaarttype in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Gebruik de [Kaartlegenda](../../user/map-legend/nautical-map.md) voor elke verwijzing naar wat er op de nautische kaart wordt weergegeven. Het verklaart de symbolische elementen op een nautische kaart en dient als referentie om u te helpen navigeren bij twijfel. Door de nautische kaartstijl in te stellen, krijgt u de beste weergave van de gedownloade en weergegeven nautische gegevens.

Om de huidige kaartstijl te wijzigen naar Nautisch, moet u de volgende instellingen maken:

1. Selecteer het vereiste [profiel](../personal/profiles.md).
2. Open [Kaart configureren](../map/configure-map-menu.md).
3. Scroll naar beneden naar Kaartstijl, open deze en vink **Nautisch** aan.


### Nautische Kaarten Downloaden {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Nautische plug-in kaartenweergave Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Nautische plug-in kaartenweergave iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Voor een optimale presentatie kunnen kaarten worden aangepast aan de huidige behoeften: markeringen en symbolen kunnen worden toegevoegd met dieptepunten en, indien nodig, contouren. Aan de andere kant kunnen standaardkaarten met informatie over binnenlandse, kust- en nabijgelegen wateren voor een bepaalde regio een goede aanvulling zijn op de informatie over waterwegen op een nautische kaart.

Wanneer u een nautische kaart [downloadt](../start-with/download-maps.md), verschijnen er meer details met betrekking tot *Boot* navigatie op de kaart. Sommige typen [Nautische kaarten](../start-with/download-maps.md#type-of-maps) bevatten details zoals:

- **Nautische markeringen en symbolen.**
    Markeringen en symbolen bevatten alle nautische navigatiemarkeringen voor zowel binnenlandse als kustnavigatie. Het kennen van deze markeringen helpt u de locatie van rotsen, obstakels, ankerplaatsen, boeien, stromingen, diep en ondiep water en zijkanten van het kanaal te voorspellen, ongeacht de richting, enz. Markeringen en symbolen worden eenmalig gedownload voor de hele wereld.

- **Dieptepunten.**
    Nautische gegevens van de dieptepuntenpakketten worden weergegeven door nummers die op het water worden weergegeven en die de ondiepste diepte op een bepaalde locatie aangeven. Dieptepunten zijn beschikbaar voor elk halfrond en sommige regio's.

- **Dieptecontouren.**
    Dieptecontourpakketten stellen u in staat gebieden met gelijke diepte te definiëren. Ze zijn bedoeld om veranderingen in het reliëf onder het wateroppervlak te visualiseren. Dieptecontouren kunnen voor bepaalde gebieden worden gedownload en vervolgens worden uitgeschakeld als u ze niet nodig hebt.

:::info Dieptecijfers
Alle dieptecijfers op de nautische kaarten worden in meters aangegeven.
:::


### Nautische Kaartstijl Uitschakelen {#disable-nautical-map-style}

Om Nautisch te verwijderen en een van OsmAnd's conventionele kaarten weer te geven, doet u een van de volgende dingen:

- Schakel de Nautische plug-in uit.
- Wijzig de kaartstijl naar iets anders dan *Nautisch*.

:::info OPMERKING
Het uitschakelen van de Nautische plug-in verwijdert geen geladen nautische gegevens, dus zelfs als u de weergavemethode van nautisch naar een andere methode wijzigt wanneer nautische gegevens zijn gedownload, blijven deze zichtbaar op de kaart.
:::


## Nautisch Profiel {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Nautische dieptecontouren in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Dieptecontouren in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Nautische kaart kan in elk profiel worden opgenomen. Het is echter het meest waardevol in het [Bootprofiel](../personal/profiles.md) en vooral in [Bootnavigatie](../navigation/routing/boat-navigation.md).


## Nautische Kaartstijl {#nautical-map-style}

De Nautische plug-in in OsmAnd breidt de vectorlaag kaartstijlen uit met de Nautische kaartstijl. Hiermee kunt u kaartgegevens weergeven volgens de Nautische kaartregels, bijvoorbeeld: gele gebieden voor land en ondiepten, lichtblauwe gebieden voor ondiep water, enz. Voor meer informatie, zie [Kaartlegenda](../../user/map-legend/nautical-map.md).


### Dieptepunten {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nautische kaarten](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische kaarten](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Dieptepunten [pakketten](../start-with/download-maps.md#type-of-maps) zijn beschikbaar voor Europa, het Noordelijk Halfrond en het Zuidelijk Halfrond en zijn informatief. Dieptepunten geven veranderingen in de topografie onder het wateroppervlak aan, wat de ondiepste diepte aangeeft. Dit is noodzakelijk voor *Boot* navigatie. Na het downloaden moet u [Dieptecontouren](#depth-contours) inschakelen om deze op de kaart weer te geven.


### Dieptecontouren {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Nautische dieptecontouren in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Dieptecontouren in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Wanneer een nautische kaart op het scherm wordt weergegeven, kunt u aanpassen wat u ziet:

- Toon of verberg de *Dieptecontouren*.
- Instellen van het detailniveau van de zeebodem informatie: [*Lijndikte* en *Lijnkleurenschema*](../map/vector-maps.md#-nautical-depth).

:::info OPMERKING
U kunt de OsmAnd-app helpen de database met dieptecontouren te vergroten door uw informatie toe te voegen via [OpenSeaMap](https://map.openseamap.org/)
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

Zeebodemgegevens bevatten informatie over vegetatie en algemeen oppervlaktemateriaal zoals rotsachtige rotsen, schelpen, grind, koraal, slib, enz. Vanwege de internationale classificatie van zeebodemgegevens zijn er opties voor het weergeven van dergelijke details op een kaart: *eenvoudig*, *categorie*, *alles* of *weglaten*. Gebruik de [Zeebodemgebied kaartlegenda](../map-legend/nautical-map.md#seabed-area) voor meer informatie.

- **Eenvoudig** (*voor Android-versie*) - toont de zeemarkeringssymbolen in overeenstemming met INT-1 Ref, die de aard van het zeebodemoppervlak aangeven.
- **Categorie** - toont naast het zeemarkeringssymbool ook de relevante zeemarkeringstag, die het natuurlijke materiaal of de zeewier- en zeegrascategorie aangeeft.
- **Alles** - toont naast het zeemarkeringssymbool, de tag of categorie ook kwalificaties zoals fijn, plakkerig, grof, enz. Voor zeegras en zeewier toont het gegevens gemarkeerd met de *taxon* en *genus* tags.
- **Weglaten** - toont geen details van de zeebodem.

:::info OPMERKING
Voor meer details over de classificatie van de oppervlaktedetails en de weergaveopties, raadpleeg de [OSM's seamark wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Gerelateerde Artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

> *Laatst bijgewerkt: juni 2023*