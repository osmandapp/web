---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title: Parkeerpositie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

De plugin **Parkeerpositie** helpt u bij het opslaan en beheren van de locatie waar u uw auto hebt geparkeerd. Hiermee kunt u een markering op de kaart plaatsen, de parkeerduur bijhouden en optioneel een agendaherinnering instellen voor wanneer uw parkeertijd afloopt.

Deze plugin is gratis en werkt offline met gedownloade OsmAnd-kaarten. U kunt snel uw geparkeerde voertuig lokaliseren, de loopafstand ernaartoe inschatten en de parkeerlocatie delen indien nodig.

- U kunt handmatig een parkeerplek toevoegen via het contextmenu.
- Indien tijdgebonden, registreert de plugin zowel de start- als de eindtijd.
- De eindtijd kan een herinnering in de agenda van uw apparaat activeren.
- Parkeerdetails kunnen later worden bekeken of gebruikt voor navigatie.

De markering is tijdelijk en eenvoudig te verwijderen zodra deze niet meer nodig is.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerwidget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeerwidget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Vereiste instellingsparameters {#required-setup-parameters}

Om een parkeerplek op de kaart te gebruiken, moet u de volgende instellingen doen:

1. Schakel de [Parkeerpositie-plugin](../plugins/index.md#enable--disable) in via het *Hoofdmenu → Plugins*.
2. Stel een [parkeerplek](#set-a-spot) in op de kaart via het contextmenu.
3. (Optioneel) Voeg de [Parkeerwidget](#parking-widget) toe aan het scherm voor snellere toegang.


## Parkeerplek op de kaart {#parking-spot-on-the-map}

Wanneer u een parkeerplek markeert, slaat OsmAnd de geografische coördinaten op, samen met een tijdstempel. Indien nodig kunnen ook een tijdslimiet en een agendaherinnering worden toegevoegd.


### Een plek instellen {#set-a-spot}

Om een parkeerplek op de kaart in te stellen, zoomt u in op het gewenste niveau, tikt u lang op de plek op de kaart en stelt u de instellingen in het [Contextmenu](../map/map-context-menu.md) dat verschijnt.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerplek instellen in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Tijdslimieten instellen in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeren selecteren in acties in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Parkeerpunt instellen in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Om een parkeermarkering te plaatsen, zoomt u in op de kaart, tikt u lang op de gewenste locatie en opent u het [contextmenu](../map/map-context-menu.md). Vervolgens:

1. Tik op [Acties](../map/map-context-menu#actions).
2. Selecteer **Markeren als parkeerlocatie** (*Android*) of **Parkeerlocatie toevoegen** (*iOS*).
3. Kies een van de beschikbare opties:
   - **Onbeperkte tijd** – voegt een basismarkering toe zonder aftelling.
   - **Tijdgebonden parkeren** – hiermee kunt u een eindtijd instellen en optioneel een herinnering in de agenda van uw apparaat maken.
4. Bevestig om de markering te plaatsen. De starttijd wordt automatisch opgeslagen.

:::info Starttijd
De starttijd wordt altijd automatisch ingesteld. Als u de eindtijd wilt wijzigen, moet u de parkeerplek verwijderen en opnieuw aanmaken. Herinneringen worden alleen aan uw agenda toegevoegd als u deze optie tijdens de installatie hebt geselecteerd.
:::


### Blijf op de hoogte {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerwidget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Tijd over in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeerwidget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parkeerinformatie in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Zodra een parkeerplek is opgeslagen, helpt OsmAnd u de locatie en timing te bewaken via het contextmenu of de optionele [Parkeerwidget](#parking-widget).

U kunt de parkeermarkering bekijken door uit te zoomen op de kaart of door op de **Parkeerwidget** te tikken, die de kaart centreert op uw opgeslagen plek. De widget toont ook de afstand van uw huidige positie (of kaartcentrum) tot de parkeerlocatie.

Aanvullende details worden weergegeven wanneer u op de parkeermarkering tikt:

- **Starttijd** – het moment dat de markering werd geplaatst.
- **Tijd over** of **Tijd overschreden** – als een tijdslimiet was ingesteld, toont dit hoeveel tijd er nog over is of hoeveel tijd er is verstreken sinds de vervaldatum.
- Als u de agendaherinnering hebt ingeschakeld, verschijnt deze in de agenda-app van uw apparaat.


### Navigeren naar een waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Naar parkeerpunt in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Naar parkeerpunt in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

U kunt de parkeerplek als navigatiedoel gebruiken om gemakkelijk terug te keren naar uw voertuig. OsmAnd biedt twee hoofdwijzen om de navigatie naar de opgeslagen parkeerlocatie te starten:

**Via navigatiemenu**:

1. Tik op de knop **Navigatie**.
2. Kies een profiel.
3. Tik op **Bestemming instellen** en selecteer **Parkeren** uit de lijst met opgeslagen punten.

**Via parkeerwidget**:

1. Tik op de **Parkeerwidget**.
2. Tik op de parkeerplekmarkering.
3. Selecteer **Navigatie** en kies het profiel dat u wilt gebruiken.


### Een plek verwijderen {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Parkeren verwijderen in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Actie Parkeren verwijderen in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Actie Parkeren verwijderen in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Om een parkeermarkering te verwijderen:

1. Zoek de parkeerplek op de kaart of tik op de **Parkeerwidget**.
2. Tik op de markering om het contextmenu te openen.
3. Selecteer **Verwijderen** of **Sluiten**.

Als een agendaherinnering was ingesteld, wordt deze ook automatisch verwijderd.


## Parkeerwidget {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Kies een paneel → Widget toevoegen → <Translate android="true" ids="map_widget_parking"/>*

![Parkeerwidget toevoegen in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Kies een paneel → Widget toevoegen → <Translate ios="true" ids="parking_place"/>*

![Parkeerwidget toevoegen in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

De [Parkeerwidget](../widgets/info-widgets.md#parking-widget) toont de afstand van het midden van het scherm tot de opgeslagen parkeerlocatie en stelt u in staat om de kaart snel op die plek te centreren.

- De widget is alleen zichtbaar nadat een parkeerpositie is ingesteld.
- Indien nog niet op het scherm, kunt u deze toevoegen via het menu [Scherm configureren](../widgets/configure-screen.md).

Voor meer informatie, zie: [Informatiewidgets – Parkeerwidget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Gerelateerde artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: mei 2025*