---
source-hash: 100d908b7334f94fa58c6e50f580170815bc0544acdf8e49f048fef77daafbc2
sidebar_position: 10
title: Rechte lijn routering (Vliegtuig)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Overzicht {#overview}

In tegenstelling tot traditionele routeringsalgoritmen die wegen, paden of vooraf gedefinieerde routes gebruiken, berekent rechte lijn routering de kortste afstand tussen twee punten op de kaart als een rechte lijn. Deze functie kan nuttig zijn voor actieve wandelaars die buiten de paden willen routeren of afgelegen gebieden willen verkennen waar traditionele routes mogelijk niet beschikbaar zijn. Voor piloten van lichte vliegtuigen en schippers kan het gebruik van het *Rechte lijn routeringstype* zeer nuttig zijn bij navigatie.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- De *Rechte lijn* routering houdt geen rekening met obstakels of barrières die in het terrein aanwezig kunnen zijn, zoals bergen, rivieren of dichte bossen.
- Het geeft geen informatie over de kwaliteit van het terrein, de moeilijkheidsgraad van de route, of andere relevante factoren die de veiligheid of haalbaarheid van de route kunnen beïnvloeden ([Route Details](../setup/route-details.md) sectie is leeg).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Routeparameters - Rechte lijn {#route-parameters---straight-line}

:::note
Rechte lijn routering is gekoppeld aan het *Vliegtuigprofiel*. Standaard is dit profiel gedeactiveerd. Om dit profiel te gebruiken voor routering, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Rechte lijn* routering kan worden geconfigureerd volgens uw behoeften in de [Routeparameters sectie](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Wanneer de hoek tussen de berekende route en de werkelijke geolocatie groter is dan de door u ingestelde hoek, wordt het kortste pad van uw huidige positie naar de berekende route gebouwd. Met andere woorden, OsmAnd berekent een extra routesegment naar de eerder berekende route. |


## Overige routeringsinstellingen {#other-routing-settings}

- In de [*Route herberekenen sectie*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* is de afstand waarop de route opnieuw wordt berekend voor *Rechte lijn routering* standaard ingesteld op 500 meter.

- In de [*Ontwikkelingssectie*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

- De instelling *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* in de *iOS*-versie van OsmAnd bevindt zich in *Navigatie-instellingen → Routeparameters* (voor *Android*, in *Voertuigparameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Deze instellingen kunnen ook worden ingesteld voor *Direct-naar-punt* routering. Het wordt gebruikt om de geschatte aankomsttijd te berekenen.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Het correct configureren van de instellingen helpt u problemen te voorkomen bij het maken van een route. U kunt de meest geschikte route selecteren, afhankelijk van het type voertuig en wegbeperkingen, en de reistijd berekenen.

> *Laatst bijgewerkt: juni 2024*