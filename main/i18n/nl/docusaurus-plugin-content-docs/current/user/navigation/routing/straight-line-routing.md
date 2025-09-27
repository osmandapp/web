---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title:  Rechtlijnige route (Vliegtuig)
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

In tegenstelling tot traditionele route-algoritmes die wegen, paden of vooraf gedefinieerde routes gebruiken, berekent rechtlijnige routebepaling de kortste afstand tussen twee punten op de kaart als een rechte lijn. Deze functie kan handig zijn voor actieve wandelaars die van de paden af willen wijken of afgelegen gebieden willen verkennen waar traditionele routes mogelijk niet beschikbaar zijn. Voor piloten van lichte vliegtuigen en schippers kan het gebruik van het *Rechtlijnige routetype* zeer nuttig zijn bij de navigatie.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- De *Rechtlijnige* route houdt geen rekening met obstakels of barrières die in het terrein aanwezig kunnen zijn, zoals bergen, rivieren of dichte bossen.
- Het geeft geen informatie over de kwaliteit van het terrein, de moeilijkheidsgraad van de route of andere relevante factoren die de veiligheid of haalbaarheid van de route kunnen beïnvloeden (de sectie [Routedetails](../setup/route-details.md) is leeg).

![Rechtlijnig navigatietype Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Routeparameters - Rechte lijn {#route-parameters---straight-line}

:::note
Rechtlijnige routebepaling is gekoppeld aan het *Vliegtuigprofiel*. Standaard is dit profiel gedeactiveerd. Om dit profiel te gebruiken voor routebepaling, moet u het inschakelen in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Rechtlijnige* routebepaling kan naar uw behoeften worden geconfigureerd in de sectie [Routeparameters](../guidance/navigation-settings.md#route-parameters) van de Navigatie-instellingen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Instellingen rechtlijnige route Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Instellingen rechtlijnige route iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Herberekening rechte lijn Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Wanneer de hoek tussen de berekende route en de werkelijke geolocatie groter is dan de door u ingestelde hoek, wordt het kortste pad van uw huidige positie naar de berekende route aangelegd. Met andere woorden, OsmAnd berekent een extra routesegment naar de eerder berekende route. |