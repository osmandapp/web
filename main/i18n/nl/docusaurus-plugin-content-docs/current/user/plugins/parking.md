---
source-hash: c5522cf3c673aa4af3738c22a0afc948910a5af511d7468ae41a34b1784474ea
sidebar_position: 12
title:  Parkeerpositie
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

De **Parkeerpositie**-plugin helpt u bij het opslaan en beheren van de locatie waar u uw auto hebt geparkeerd. Hiermee kunt u een markering op de kaart plaatsen, de parkeerduur bijhouden en optioneel een agendaherinnering instellen voor wanneer uw parkeertijd eindigt.

Deze plugin is gratis en werkt offline met gedownloade OsmAnd-kaarten. U kunt snel uw geparkeerde voertuig lokaliseren, de loopafstand ernaartoe schatten en de parkeerlocatie indien nodig delen.

- U kunt handmatig een parkeerplek toevoegen via het contextmenu.
- Indien de parkeertijd beperkt is, registreert de plugin zowel de begin- als de eindtijd.
- De eindtijd kan een herinnering activeren in de agenda van uw apparaat.
- Parkeerdetails kunnen later worden bekeken of voor navigatie worden gebruikt.

De markering is tijdelijk en gemakkelijk te verwijderen wanneer deze niet langer nodig is.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerwidget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeerwidget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Vereiste Instellingen {#required-setup-parameters}

Om een parkeerplek op de kaart te gebruiken, moet u de volgende instellingen doen:

1. Schakel de [Parkeerpositie-plugin](../plugins/index.md#enable--disable) in via *Hoofdmenu → Plugins*.
2. Stel een [parkeerplek](#set-a-spot) in op de kaart via het contextmenu.
3. (Optioneel) Voeg de [Parkeerwidget](#parking-widget) toe aan het scherm voor snellere toegang.


## Parkeerplek op de Kaart {#parking-spot-on-the-map}

Wanneer u een parkeerplek markeert, slaat OsmAnd de geografische coördinaten op samen met een tijdstempel. Indien nodig kunnen ook een tijdslimiet en een agendaherinnering worden toegevoegd.


### Een Plek Instellen {#set-a-spot}

Om een parkeerplek op de kaart in te stellen, zoomt u in tot het vereiste niveau, tikt u lang op de plaats op de kaart en doet u de instellingen in het [Contextmenu](../map/map-context-menu.md) dat wordt geopend.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerplek instellen in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Tijdslimieten instellen in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeren selecteren in Acties in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Parkeerpunt instellen in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Om een parkeermarkering te plaatsen, zoomt u in op de kaart, tikt u lang op de gewenste locatie en opent u het [contextmenu](../map/map-context-menu.md). Vervolgens:

1. Tik op [Acties](../map/map-context-menu#actions).
2. Selecteer **Markeer als parkeerlocatie** (*Android*) of **Parkeerlocatie toevoegen** (*iOS*).
3. Kies een van de beschikbare opties:
   - **Onbeperkte tijd** – voegt een eenvoudige markering toe zonder aftelling.
   - **Tijdgebonden parkeren** – hiermee kunt u een eindtijd instellen en optioneel een herinnering aanmaken in de agenda van uw apparaat.
4. Bevestig om de markering te plaatsen. De starttijd wordt automatisch opgeslagen.

:::info Starttijd
De starttijd wordt altijd automatisch ingesteld. Als u de eindtijd wilt wijzigen, moet u de parkeerplek verwijderen en opnieuw aanmaken. Herinneringen worden alleen aan uw agenda toegevoegd als u deze optie tijdens het instellen hebt geselecteerd.
:::


### Blijf Geïnformeerd {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parkeerwidget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Resterende tijd in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parkeerwidget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parkeerinfo in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Zodra een parkeerplek is opgeslagen, helpt OsmAnd u de locatie en timing te controleren via het contextmenu of de optionele [Parkeerwidget](#parking-widget).

U kunt de parkeermarkering bekijken door uit te zoomen op de kaart of door op de **Parkeerwidget** te tikken, die de kaart centreert op uw opgeslagen plek. De widget toont ook de afstand van uw huidige positie (of kaartcentrum) tot de parkeerlocatie.

Extra details worden getoond wanneer u op de parkeermarkering tikt:

- **Starttijd** – het moment waarop de markering werd geplaatst.
- **Resterende tijd** of **Tijd overschreden** – als er een tijdslimiet was ingesteld, toont dit hoeveel tijd er nog rest of is verstreken sinds het einde.
- Als u de agendaherinnering hebt ingeschakeld, verschijnt deze in de agenda-app van uw apparaat.


### Navigeren naar een Waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigeren naar parkeerpunt in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigeren naar parkeerpunt in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

U kunt de parkeerplek als navigatiedoel gebruiken om gemakkelijk terug te keren naar uw voertuig. OsmAnd biedt twee manieren om de navigatie naar de opgeslagen parkeerlocatie te starten:

**Via het Navigatiemenu**:

  1. Tik op de **Navigatie**-knop.
  2. Kies een profiel.
  3. Tik op **Bestemming instellen** en selecteer **Parkeren** uit de lijst met opgeslagen punten.

**Via de Parkeerwidget**:

  1. Tik op de **Parkeerwidget**.
  2. Tik op de markering van de parkeerplek.
  3. Selecteer **Navigatie** en kies het profiel dat u wilt gebruiken.


### Een Plek Verwijderen {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Actie Parkeren Verwijderen in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Actie Parkeren Verwijderen in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Om een parkeermarkering te verwijderen:

1. Zoek de parkeerplek op de kaart of tik op de **Parkeerwidget**.
2. Tik op de markering om het contextmenu te openen.
3. Selecteer **Verwijderen** of **Sluiten**.

Als er een agendaherinnering was ingesteld, wordt deze ook automatisch verwijderd.


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
- Als deze nog niet op het scherm staat, kunt u hem toevoegen via het menu [Scherm configureren](../widgets/configure-screen.md).

Voor meer informatie, zie: [Informatieve Widgets – Parkeerwidget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)