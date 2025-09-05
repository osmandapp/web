---
source-hash: 1c2dbd1648b5f88680eb1ade2c212d6275bae4f84aadcd626344d490380768e5
sidebar_position: 5
title: Kleurenschema's
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

Kleurenschema's worden gebruikt als onderdeel van betaalde [Kaarten+](../purchases/index.md) en Pro <ProFeature /> functies.

:::

Kleurenschema's worden gebruikt in [routekleuring](#routes), [kaartterrein](#terrain) en [weerkaart](#weather), en worden weergegeven als een afzonderlijk deel van de informatie die kan worden geëxporteerd, geïmporteerd en bewerkt om het kleurenschema van de kaart en de gegevensvisualisatie te wijzigen.

Kleurenpaletgegevens zijn beschikbaar in het menu [*Kaarten & Bronnen*](../personal/maps-resources.md#local).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Menu → Kaarten & Bronnen → Lokaal → Kleuren*

![Paletten](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Menu → Kaarten & Bronnen → Lokaal → Kleuren*

![Kleurenpalet](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Schematypen {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletten](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kleurenpalet](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terrein {#terrain}

Terreinbestanden (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definiëren 3 [terreinvisualisaties](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Heuvelschaduw, Helling* en *Hoogte*. Voor elk type kunt u meerdere paletten hebben, bijvoorbeeld *lawinehelling* is standaard beschikbaar.

### Routes {#routes}

Lijngradiëntvisualisaties gebruiken paletbestanden (`route_<type_name>_<palette_name>.txt`) om GPX-tracks en routes te kleuren:

- Voor [Routes](../navigation/guidance/map-during-navigation.md#color): *Snelheid, Helling* en *Hoogte (Altitude)*.
- Voor [GPX-tracks](../map/tracks/appearance#track-colors-in-gpx-files): *Snelheid, Helling* en *Hoogte (Altitude), of info van externe sensoren*.

### Weer {#weather}

Weerpaletbestanden (`weather_<type_name>.txt`) definiëren visualisatie voor [weerlagen](../plugins/weather.md#weather-layers).

### Kleuren {#colors}

Kleurenpalet (`user_palette_default.txt`) wordt eenvoudigweg gebruikt voor vooraf gedefinieerde kleuren om toe te wijzen aan [Favorieten](./favorites.md), [Tracks](./tracks/).


## Paletlegenda {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="kleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="kleur"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="kleur"/></td>
    </tr>
</table>


De legenda biedt een eenvoudige manier om de verschillende markeringen op de kaart te bekijken en te begrijpen. Nieuwe kleurenpaletten zijn toegevoegd om de [**snelheid** voor tracks](../map/tracks/appearance#track-colors-in-gpx-files), het [**lijntype** voor routes](../navigation/guidance/map-during-navigation.md#color), de [**hoogte en helling** voor terrein](../plugins/topography.md#default-color-scheme) en alle [**weerlaag**](../plugins/weather.md#weather-layers) kleurenpaletten weer te geven.


## Paletbestand bewerken {#edit-palette-file}

U kunt paletten bewerken om het uiterlijk van kaarten en routes te personaliseren. Eigen kleurenpaletbestanden kunnen aan OsmAnd worden toegevoegd met behulp van de [import/export-tool](./import-export.md).

- *Routes*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terrein*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Weer*: `weather_<type_name>.txt`.
- *Kleur*: `user_palette_default.txt`.

Elke regel vertegenwoordigt een numerieke waarde (voor het kleurenpalet is het een index) en RGB-kleur. Bijvoorbeeld:

```xml
# TXT-bestand genaamd *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 graden RGBA {#0---90-degree-rgba}
0,46,185,0,191
# geel {#yellow-}
100,255,222,2,227
# rood {#red}
200,255,1,1,255
# violet {#violet}
220,130,1,255,255

```

Na het verplaatsen van dit TXT-bestand naar *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, verschijnt er een nieuw palet in het menu Kleurenschema.


## Lees meer {#read-more}

### Snelle acties {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Actie toevoegen → Topografie → Terrein kleurenschema wijzigen*

![Kleurenschema](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Actie toevoegen → Topografie → Terrein kleurenschema wijzigen*

![Kleurenpalet](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Snelle actie** om het palet voor Terrein te wijzigen. De mogelijkheid om te schakelen tussen terreinkleurenschema's is toegevoegd, vergelijkbaar met het schakelen tussen lagen. Dit kan worden gedaan met behulp van de tool [Snelle acties](../widgets/quick-action.md#configure-map).


### Kleuren importeren / exporteren {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profielen Acties Exporteren Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Back-up lokaal Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profielen Acties Exporteren iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Profielen Acties Exporteren iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

U kunt alle beschikbare standaard- en aangepaste kleurenpaletten importeren en exporteren met behulp van de herstel- en back-upbestanden van OsmAnd.

- Open het hoofd *Menu*, *Instellingen*, scroll naar beneden naar de sectie **Importeren/exporteren** (*Android*) of **Lokale back-up** (*iOS*), en selecteer de gewenste actie.
- Selecteer een of meer items uit de lijst *Kleur* of de optie *Alles selecteren*.
- Alle geëxporteerde bestanden worden opgeslagen in `.osf`-formaat.
- Als de grootte van uw geselecteerde gegevens aanzienlijk is, duurt het enige tijd voordat de toepassing het `.osf`-bestand heeft voorbereid.
- Bekijk het artikel [*Importeren / Exporteren*](../personal/import-export.md) voor meer gedetailleerde informatie.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: januari 2025*