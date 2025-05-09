---
source-hash: d7401847f14d989dc3a557980e53f56e4bcfbfcb41a23e936fd0ab0829f72726 
sidebar_position: 4
title:  Détails de l'itinéraire
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


## Aperçu

OsmAnd vous permet de trouver le meilleur itinéraire et d'en explorer les détails. L'application fournit des informations détaillées sur l'itinéraire, telles que la distance, le [temps de trajet](#distance--time--co2), le [type de surface](#road-attributes), les [différences d'altitude](#elevation-info), les [données d'empreinte carbone](#distance--time--co2) et les [informations de virage](#turn-by-turn-information). Vous pouvez également [analyser](#analyze-on-map) l'itinéraire sur la carte, obtenir des informations sur les segments de piste, [imprimer](#print) le plan d'itinéraire, [enregistrer](#share--export-actions) l'itinéraire et le partager avec d'autres. Grâce à cette fonctionnalité, vous connaîtrez toujours les détails de l'itinéraire et pourrez planifier votre voyage plus efficacement.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Détails de l'itinéraire Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Détails de l'itinéraire iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Comment y accéder

Après avoir calculé un itinéraire dans le [menu Navigation](./route-navigation.md#start--stop-navigation), vous avez accès aux "Détails" de cet itinéraire. Ces informations sont utiles avant de commencer un voyage pour améliorer la planification de l'itinéraire ou pour vérifier les informations sur la route à venir pendant la conduite.
Il existe trois façons d'accéder au *menu Détails de l'itinéraire*.

1. Allez dans le *Menu principal → Navigation*, définissez l'itinéraire et appuyez sur le bouton *Détails*.
2. Appuyez sur l'icône *Navigation* sur l'écran de la carte, définissez l'itinéraire et appuyez sur le bouton *Détails*.
3. Allez dans le menu *Mes lieux*, appuyez sur n'importe quelle piste disponible dans la liste *Menu → Mes lieux → Pistes*, sélectionnez l'icône *Navigation* dans le menu contextuel de la piste dans l'*Aperçu* et appuyez sur *Détails*.

Selon les [paramètres de profil](../../personal/profiles.md) sélectionnés et le [type de routage](../../navigation/routing/osmand-routing.md#routing-types) sélectionné, certains détails de l'itinéraire peuvent ne pas être affichés. De plus, les détails de l'itinéraire dépendent fortement de la *couverture des données OpenStreetMap*.


## Distance / Temps / CO2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Détails de l'itinéraire](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- La ***distance totale*** est calculée entre tous les segments de l'itinéraire, y compris les points intermédiaires dans les [unités](../../personal/profiles.md#units--formats) sélectionnées.

- Le ***temps de trajet estimé*** est calculé comme la somme des temps sur chaque segment et des pénalités de temps sur des points spécifiques. Chaque profil de navigation a des règles différentes pour calculer la vitesse sur un segment et les pénalités à inclure (configurées dans [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Par exemple, les profils de voiture et de vélo prennent la vitesse moyenne par segment à partir des données OpenStreetMap, mais les profils de piéton, de bateau et d'avion utilisent la vitesse *par défaut* des [Paramètres de navigation](../guidance/navigation-settings.md#default-speed--road-speeds).

- L'***heure d'arrivée estimée*** est calculée à partir de maintenant en heure locale de l'origine en utilisant le *temps de trajet estimé*.

- Les ***données d'empreinte carbone*** estiment approximativement la quantité de CO2 qui sera produite en suivant l'itinéraire. Vous devez configurer le [type de moteur de carburant](../guidance/navigation-settings.md#fuel-used-by-motor) dans les paramètres du véhicule pour obtenir une approximation plus précise.


## Informations d'altitude

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Détails de l'itinéraire](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

Les **informations d'altitude** sont fournies dans tous les profils d'itinéraire hors ligne d'OsmAnd, à l'exception des profils qui utilisent la [navigation en ligne droite](../routing/straight-line-routing.md). Les données d'altitude font partie des cartes hors ligne d'OsmAnd et sont calculées sur la base de [sources SRTM publiques](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Plage d'altitude*. Affiche l'altitude minimale / maximale sur l'itinéraire.
- *Altitude moyenne*. Affiche l'altitude moyenne pondérée sur l'itinéraire.
- *Montée / descente*. Affiche le rapport du chemin à l'horizontale, où zéro indique l'horizontalité et le nombre de degrés indique un degré de pente plus élevé ou plus raide. La pente indique la pente maximale de la route en pourcentage de votre point de localisation à la fin du graphique visible, ou pour la section sélectionnée de l'itinéraire sans le point de localisation visible à l'écran.


***Une licence pour les données DEM utilisées par OsmAnd pour la détection du terrain***
Les données d'altitude sur la carte (entre 70 degrés de latitude nord et 70 degrés de latitude sud) ont été obtenues à partir de mesures effectuées dans le cadre de la *Shuttle Radar Topography Mission (SRTM)*. Elle a utilisé l'*Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, le principal outil d'imagerie du *Earth Observation System de la NASA*. Pour des informations complètes, voir la [Licence](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details><summary>Données DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Les données originales utilisées pour ce produit ont été fournies par AW3D de la JAXA.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Modèles numériques de terrain LiDAR de Sonny en Europe</a> (DTM).</details>


### Graphique d'altitude

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Détails de l'itinéraire](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Les [graphiques](../../map/tracks/track-context-menu.md#altitude--speed-graphs) affichent visuellement des informations sur l'altitude et la pente de votre itinéraire de navigation et votre position actuelle sur ce graphique avec l'altitude et la pente actuelles. Le graphique est tracé sur deux axes. L'axe des X est la distance sur votre itinéraire. Le premier axe des Y est l'altitude au-dessus du niveau de la mer, dont la valeur dépend du terrain, et le second axe des Y est la [pente](https://en.wikipedia.org/wiki/Grade_(slope)) approximative. Vous pouvez afficher le graphique d'altitude pour l'ensemble de l'itinéraire ou seulement pour un intervalle sélectionné en mettant à l'échelle le graphique.

- ***Zoom avant/arrière***. Par défaut, le graphique affiche l'itinéraire de la position actuelle à votre point de destination. Vous pouvez utiliser les [mouvements à deux doigts](../../map/interact-with-map.md#gestures) pour zoomer et dézoomer afin d'obtenir une vue plus détaillée. Vous pouvez également déplacer le graphique vers la droite, vers l'avant sur l'itinéraire et vers l'arrière jusqu'à la position actuelle. *Ces manipulations se réfèrent également au bloc visuel d'informations dans le bloc [Attributs de la route](#road-attributes).*

- ***Épingle de localisation***. Si vous souhaitez voir les informations à un point particulier de votre itinéraire, vous pouvez appuyer n'importe où sur le graphique et un pointeur avec l'altitude et le pourcentage de pente apparaîtra.


## Analyser sur la carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Détails de l'itinéraire Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Détails de l'itinéraire iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

L'outil **Analyser sur la carte** est similaire à l'outil de visualisation des [détails de la piste](../../map/tracks/index.md#analyze-track-on-map) sur la carte. Il vous permet de visualiser et d'interagir visuellement avec divers graphiques et de voir le point sélectionné sur la carte.

Si des données sont présentes, vous pouvez sélectionner l'un des types suivants :

- *Axe Y* :
   - [*Altitude*](../../map/tracks/track-context-menu.md#altitude). Il s'agit du [processus](https://wiki.openstreetmap.org/wiki/Altitude) d'obtention de la hauteur au-dessus d'un niveau fixe.
   - [*Pente*](https://wiki.openstreetmap.org/wiki/Key:incline). La [pente du relief](https://en.wikipedia.org/wiki/Grade_(slope)) signifie la tangente de l'angle d'inclinaison de la surface par rapport à l'horizontale.
   - [*Vitesse*](../../map/tracks/track-context-menu.md#speed). Valeurs de vitesse lors de la conduite sur une piste.
   - Graphiques avec deux types de données : &nbsp;*Altitude/Pente*, &nbsp;*Altitude/Vitesse*, &nbsp;*Pente/Vitesse*, &nbsp;*Zoom animé/Vitesse*.
- *Axe X* :
   - *Distance*. Vous pouvez afficher les données d'itinéraire qui se rapportent à la longueur de l'itinéraire.
   - *Temps*. Vous pouvez afficher les données d'itinéraire qui se rapportent au temps calculé pour cet itinéraire.
   - *Heure de la journée*. Vous pouvez afficher les données d'itinéraire à certaines heures de la journée.


### Type d'interactions

- *Appuyer et glisser*. Appuyez sur le graphique pour afficher des informations sur le point de la piste et le mouvement le long de celle-ci. Le graphique met en évidence l'emplacement du point sur la carte et affiche des informations à son sujet sur la règle.
- *Échelle*. Mettez à l'échelle le graphique par [geste à deux doigts](../../map/interact-with-map.md#gestures).
- *Suivre ma position* (*Android uniquement*). Vous pouvez appuyer sur [Ma position](../../map/interact-with-map.md#my-location-and-zoom) pour synchroniser la vue de la carte et le graphique avec votre position. Au fur et à mesure que vous vous déplacez, le graphique se déplacera de gauche à droite, affichant des informations devant votre chemin.


## Attributs de la route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Itinéraire de navigation Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> onglet*

![Itinéraire de navigation iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Les attributs de la route sont accessibles dans les [Détails de l'itinéraire](#how-to-access) et affichent des informations relatives aux segments provenant d'OpenStreetMap et des données d'altitude. L'indication de couleur est liée à la façon dont les attributs spécifiques sont rendus sur la carte (voir [Légende de la carte](../../map-legend/osmand.md#surface-smoothness)). Les graphiques à barres sont également interactifs, et il est possible de voir des informations à un endroit spécifique en appuyant sur le graphique.

- [**Type de route**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Le type de route est déterminé en fonction de sa fonction et de ses caractéristiques, telles que le nombre de voies, les limitations de vitesse, la capacité de charge, la présence de pistes piétonnes et cyclables, les accotements et d'autres paramètres. Différents types de routes peuvent avoir des restrictions et des règles de circulation différentes.

   Par exemple, les principales [autoroutes](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) ont généralement une limitation de vitesse élevée et peuvent être divisées en voies, et les [routes locales](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) peuvent avoir une limitation de vitesse basse et une voie dans chaque direction.

- [**Surface**](https://wiki.openstreetmap.org/wiki/Key:surface). Les surfaces routières sont la couche supérieure de chaussée qui entre en contact avec les roues des véhicules. Elles peuvent être de différents types selon leurs propriétés et leur fonction.

   Par exemple, la chaussée en [asphalte](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) offre une bonne adhérence et une bonne isolation phonique, et la chaussée en [béton](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) est plus durable et a une plus grande capacité de charge. D'autres matériaux tels que le gravier, la pierre concassée, les planches de bois et autres peuvent également être utilisés pour créer une surface routière.

- [**Pente**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Il s'agit d'une mesure de l'angle de la pente de la route, exprimée en pourcentage. Elle indique à quel point la route est inclinée vers le haut ou vers le bas par rapport à l'horizon, et elle est calculée en mesurant le changement vertical de l'altitude de la route par la distance horizontale et en multipliant la valeur résultante par 100 %.

   Par exemple, si la pente de la route est de 10 %, cela signifie que pour chaque 100 mètres de distance horizontale le long de la route, vous montez ou descendez de 10 mètres. La pente de la route peut affecter la vitesse de votre véhicule, le freinage, la consommation de carburant et la sécurité de conduite, en particulier sur les routes glissantes en hiver.

- [**Fermeté de la surface**](https://wiki.openstreetmap.org/wiki/Key:tracktype). La surface de la route peut se remettre de la déformation ou de la charge. Plus la fermeté de la surface est élevée, moins il y a de risques de dommages au véhicule et plus la route sera confortable. La fermeté de la surface peut également affecter la vitesse du véhicule et la consommation de carburant.

- [**Inclinaison**](https://wiki.openstreetmap.org/wiki/Key:incline). Indique le pourcentage de pentes sur votre itinéraire.

- [**Lissé**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Applicable à tous les types de chemins et de zones, tels que les autoroutes, les parkings, les plages et les sentiers, et indique la praticabilité de l'itinéraire. Il vous donne des informations indiquant que vous pouvez conduire sans risque significatif de dommages, tels que le dessous du véhicule, ou de blessures, telles qu'une chute.

- [**Routes d'hiver et de glace**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Affiche la palette de couleurs de l'itinéraire selon la classification des [routes d'hiver](../../map/vector-maps.md#winter-and-ski).

- [**Difficulté des sentiers équestres**](https://wiki.openstreetmap.org/wiki/Riding). Cet attribut de route indique la difficulté de l'itinéraire lors d'une randonnée à cheval. Convient pour le [routage équestre](../../navigation/routing/horse-routing.md).


## Informations virage par virage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Itinéraire de navigation Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Les informations virage par virage fournissent des [instructions](#instructions) détaillées sur la façon de naviguer sur un itinéraire. En plus du menu *Détails*, elles sont également affichées dans les widgets [*Manœuvres d'itinéraire*](../../widgets/nav-widgets.md#route-maneuvers) et [*Voies*](../../widgets/nav-widgets.md#lanes). Ces informations vous aident à mieux naviguer sur votre itinéraire et vous permettent de planifier à l'avance.

Appuyez sur une section spécifique de l'itinéraire dans la liste pour afficher des informations détaillées ou apporter les modifications nécessaires. La carte s'agrandit et un [menu contextuel](../../map/map-context-menu.md) s'ouvre.


### Instructions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Itinéraire de navigation Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Les instructions comprennent des informations sur le déplacement le long de l'itinéraire, telles que :

- La [*flèche du prochain virage*](../../widgets/nav-widgets.md#next-turn) et *sa direction*.
- *Distance jusqu'à la manœuvre*.
- Une description de *ce qu'il faut faire*, qui comprend le *nom de la rue ou du sentier*.
- *Distance totale* et *temps de l'itinéraire*.
- Disposition des [*voies*](../../widgets/nav-widgets.md#lanes) pour la route actuelle.
- [*Indicateur de côté de route*](#roadside-indicator) (*iOS uniquement*).


### Indicateur de côté de route

:::caution iOS uniquement
Ce type d'instruction n'est actuellement *pas disponible pour la version Android* de l'application OsmAnd.
:::

![Indication latérale](@site/static/img/navigation/route/side_indication.png)

Dans la liste d'instructions, l'**indicateur de côté de route** indique la direction par rapport à votre position actuelle et à votre direction de déplacement vers votre point final, cela peut être à gauche, à droite et tout droit.

L'angle entre votre destination (*[Cap](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) depuis le dernier point*) et le dernier segment (*Cap vers les 2 derniers points de l'itinéraire*) est mesuré, divisé en 3 secteurs de 120 degrés, et le résultat est que vous pouvez voir dans quelle direction se trouve votre destination.

- `-60 °`&nbsp; &nbsp; &nbsp; à &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - marqué comme **tout droit**.
- `-180 °`&nbsp; &nbsp; à &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - marqué comme côté **gauche**.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; à &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - marqué comme côté **droit**.


### Imprimer

<InfoAndroidOnly/>

![détails de l'itinéraire](@site/static/img/navigation/route/route_details_print-2.png)

La fonction **Imprimer** d'une description d'itinéraire virage par virage peut être utile si vous préférez avoir une copie physique de votre description d'itinéraire au lieu d'utiliser des appareils électroniques, ou si vous n'avez pas accès aux applications de navigation ou aux navigateurs GPS, pas d'accès à Internet, ou si vous avez besoin d'informations pour d'autres personnes voyageant avec vous.

Une description d'itinéraire imprimée fournit des *instructions détaillées virage par virage* sur la façon de naviguer sur votre itinéraire, y compris la distance jusqu'au prochain virage, la direction de conduite et les noms de rues ou de sentiers, ainsi que des informations sur la distance et le temps de trajet.

Ces informations peuvent être utiles lorsque vous planifiez un voyage et que vous souhaitez estimer le temps et la distance entre différents points de l'itinéraire et déterminer l'heure d'arrivée prévue.

La possibilité **d'imprimer** ou **d'enregistrer** les informations virage par virage **au format PDF** est particulièrement utile lors de longs trajets ou dans des endroits inconnus lorsque vous avez besoin d'avoir une idée plus détaillée de l'itinéraire et du temps qu'il faut pour y arriver.


## Partager / Exporter (Actions)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Itinéraire de navigation Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Itinéraire de navigation iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

La section de navigation Détails de l'itinéraire propose des options qui vous permettent d'effectuer certaines actions avec les informations de l'itinéraire.

- [**Imprimer**](#print). Vous permet d'imprimer ou d'enregistrer les informations d'itinéraire virage par virage.
- **Exporter/Enregistrer**. Vous permet d'enregistrer les informations de l'itinéraire **en tant que nouvelle piste** pour une utilisation hors ligne ultérieure. La piste exportée contient toutes les informations sur les attributs de la route et les instructions de virage. Ainsi, la [navigation par cette piste](./gpx-navigation.md) devrait fournir toutes les fonctionnalités de la navigation par l'itinéraire.
- **Partager**. Partage une piste exportée ou un lien vers l'itinéraire qui pourrait être ouvert sur un autre appareil avec OsmAnd.


## Articles connexes

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](./route-navigation.md)
- [Navigation par piste](./gpx-navigation.md)
- [Navigation par marqueurs](./markers-navigation.md)
- [Paramètres de navigation](../guidance/navigation-settings.md)
- [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md)
- [Invites vocales / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*

