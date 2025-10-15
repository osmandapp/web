---
source-hash: 2df261c9180b4551af320e1c543ad9f218568286c2606e5a64d23089fbff8bdd
sidebar_position: 1
title:  Paramètres de navigation
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


## Aperçu {#overview}

Pour une navigation réussie, il est important de configurer correctement les paramètres appropriés en fonction de vos besoins et de votre mode de déplacement - en voiture, à pied, à cheval ou à ski. Cet article décrit les paramètres de base de l'itinéraire, les [invites vocales](#voice-prompts), les [alertes à l'écran](#screen-alerts), le [comportement de la carte pendant la navigation](#map-during-navigation) et l'[apparence des lignes de l'itinéraire](#customize-route-line). Il détaille également les [paramètres du véhicule](#vehicle-parameters) tels que la vitesse par défaut, le type de moteur pour le calcul du CO2, la capacité du réservoir de carburant et les limitations de taille/poids. L'ajustement de ces paramètres vous aidera à tirer le meilleur parti de l'utilisation d'OsmAnd et à atteindre votre objectif sans retard inutile.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Comment ouvrir {#how-to-open}

Cette section présente les paramètres de navigation nécessaires au calcul et au traçage d'un itinéraire, que vous pouvez définir pour le profil sélectionné. Ce menu comprend les paramètres pour la [préparation de l'itinéraire](../setup/route-navigation.md), l'[écran de la carte pendant la navigation](../guidance/map-during-navigation.md), et ce que vous définissez dans les *Paramètres de navigation* affecte directement l'affichage des données dans les [Détails de l'itinéraire](../setup/route-details.md).

Il y a trois façons d'accéder au menu des paramètres de navigation.

- Allez dans le *Menu → Paramètres*, sélectionnez le *Profil* requis, et appuyez sur *Paramètres de navigation*.

- Appuyez sur l'icône *Navigation* sur l'écran de la carte, puis sélectionnez l'*icône Paramètres → Paramètres de navigation*.

- Allez dans le menu principal *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Le profil par défaut *Parcourir la carte* n'a pas de paramètres de navigation.  
:::


## Type de navigation {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

La navigation est une partie importante d'un voyage, et choisir *le bon type* de navigation peut rendre votre trajet beaucoup plus facile. Le type de navigation que vous choisissez peut dépendre de votre mode de déplacement et de la disponibilité d'une connexion Internet.  

- **Navigation en ligne**
    Elle utilise principalement un système de routage spécial ou un site web qui permet à l'application OsmAnd de tracer un itinéraire en fonction des informations actuelles et d'autres facteurs. Vous pouvez en savoir plus sur le choix du meilleur itinéraire en ligne dans l'article [Routage en ligne](../routing/online-routing.md). Ce type de navigation n'est disponible que pour la version *Android* de l'application.  

- **Navigation hors ligne**
Elle ne nécessite pas d'accès à Internet et offre une plus grande sélection de [types de navigation](../routing/osmand-routing.md#routing-types) qui peuvent être utilisés pour calculer un itinéraire. Parmi eux, on trouve *vélo, bateau, voiture, à pied, ski* et *ligne droite*. Il existe actuellement 13 types de routage de base, ainsi qu'un type de routage externe [BRouter](../routing/brouter.md) qui offre des possibilités de routage supplémentaires.  

Le type de navigation détermine les règles utilisées pour calculer les itinéraires. Si vous avez besoin d'un type de navigation spécifique, vous pouvez **importer votre propre fichier de routage *XML* modifié**. Pour en savoir plus sur les règles de routage, consultez notre [page GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Il existe également un article distinct sur le format XML et son utilisation, [Style de rendu de carte](../../../technical/osmand-file-formats/osmand-rendering-style.md), qui peut vous aider à créer un fichier d'itinéraire.  


## Paramètres de l'itinéraire {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

Les **<Translate android="true" ids="route_parameters"/>** sont des paramètres qui déterminent comment l'application calculera un itinéraire pour atteindre une destination, en tenant compte de facteurs tels que le type de transport, les priorités de routage, les conditions de l'itinéraire, la complexité de l'itinéraire et les préférences de l'utilisateur.  

Pour chaque [profil](../../personal/global-settings.md#default-profile), à l'exception de *Parcourir la carte*, OsmAnd sélectionne par défaut le [type de navigation](#navigation-type) optimal et les [paramètres d'itinéraire](../routing/osmand-routing.md#routing-types) pertinents. Cependant, vous pouvez choisir le type que vous souhaitez et modifier les paramètres en fonction de vos préférences et des conditions extérieures du voyage à venir.  

Tous les paramètres d'itinéraire sont décrits en détail dans les sections correspondantes de la documentation :  
*[Routage voiture (Camion, Moto)](../routing/car-based-routing.md), [Routage vélo (VTT)](../routing/bicycle-based-routing.md), [Routage cyclomoteur](../routing/moped-routing.md), [Routage piéton](../routing/pedestrian-routing.md), [Routage transports en commun](../routing/public-transport-navigation.md), [Routage équestre](../routing/horse-routing.md), [Routage ski](../routing/ski-routing.md), [Routage train](../routing/train-routing.md), [Routage bateau](../routing/boat-navigation.md), [Routage direct vers un point](../routing/direct-to-point-routing.md), [Routage en ligne droite](../routing/straight-line-routing.md), [Routage en ligne](../routing/online-routing.md), [Routage BRouter](../routing/brouter.md)*.  


### Recalculer l'itinéraire {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

Le paramètre **Calcul de l'itinéraire** modifie automatiquement l'itinéraire calculé lorsque vous vous en écartez ou que vous roulez dans la direction opposée. Dans les deux cas, ce paramètre vous aide à maintenir votre direction de déplacement et à atteindre votre destination sans perdre de temps à chercher manuellement un nouvel itinéraire.  

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> en cas d'écart*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Si les [invites vocales](../guidance/voice-navigation.md#voice-settings) sont activées, OsmAnd annonce que l'itinéraire est en cours de recalcul. |
|  *Recalculer l'itinéraire en cas de direction inverse*  | Votre itinéraire sera recalculé si vous vous déplacez vers le point de départ.  |  Avec ce paramètre désactivé, le déplacement vers le point de départ n'est pas considéré comme un écart par rapport au trajet (tant qu'il suit l'itinéraire calculé).  |


### Paramètres de développement {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *Menu → Paramètres → profil de l'application → Paramètres de navigation → Paramètres de l'itinéraire → Développement*

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *Menu → Paramètres → profil de l'application → Paramètres de navigation → Paramètres de l'itinéraire → Développement*

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Les paramètres de la section **Développement** sont principalement destinés aux utilisateurs avancés et ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.  

| Paramètre | Description |
|:------------|:---------------|
| *Type de routage* (*Android*) / *Algorithme de routage* (*iOS*) | <ul><li>**A*** 2-phase (*Android*) / **A*** (*iOS*) ajoute une phase supplémentaire à l'algorithme par défaut pour améliorer la qualité de l'itinéraire calculé. Cette option peut être utile pour trouver des itinéraires dans des réseaux routiers vastes et complexes, mais le calcul de l'itinéraire peut prendre plus de temps.</li><li>**A* classique** (*Android*) / **Hiérarchies d'autoroutes** (*iOS*) optimise la planification d'itinéraire en privilégiant les routes principales et les autoroutes, minimisant le nombre de virages et de jonctions sur le parcours. Particulièrement efficace sur de longues distances.</li><li>**HH (Highway Hierarchies) x Java** (*Android uniquement*) est basé sur l'implémentation de structures de données hiérarchiques pour optimiser la recherche de chemin sur une carte, en tenant compte des contraintes de temps d'exécution et de la consommation des ressources de l'appareil, et est réalisé sur la plateforme Java.</li><li>**HH (Highway Hierarchies) x C++** (*Android uniquement*) est un algorithme qui utilise le langage de programmation C++ pour traiter efficacement les données du réseau routier et construire des itinéraires optimaux en utilisant des structures de données hiérarchiques. Il est optimisé pour le traitement rapide de grandes quantités de données et est particulièrement efficace pour la navigation sur des cartes avec de nombreux réseaux routiers.</li></ul> |  
| *Approximation GPX* (*Android uniquement*)  | <ul><li>L'approximation GPX **basée sur le routage** en **C++ et Java** utilise les données d'itinéraire pour approximer les traces GPS avec les routes existantes, ce qui améliore la précision de la trace et réduit sa taille.</li><li>Les approximations GPX **basées sur la géométrie** en **C++ et Java** fonctionnent sur la base de principes géométriques pour approximer rapidement et précisément les traces GPS, permettant un traitement efficace de grandes quantités de données.</li></ul> |
| *Zoom automatique* | <ul><li>**Discret** vous permet de zoomer sur la carte à un niveau de détail spécifique mesuré en quelques étapes discrètes.</li><li>**Fluide** offre un changement progressif de l'échelle de la carte avec des effets d'animation fluides, sans saccades ni sauts.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Android uniquement*)  | Utilise les [mises à jour en direct](../../personal/maps-resources.md#live-updates) pendant le routage. Notez que nous recommandons d'utiliser cette option uniquement à des fins de test.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Invites vocales {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Paramètres de navigation vocale Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Bouton <Translate ios="true" ids="routing_settings"/>* *(ou <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choisir le profil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Paramètres de navigation vocale iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

La première partie de l'article *[Invites vocales / Notifications](./voice-navigation.md)* décrit en détail comment configurer les invites vocales.  

Les instructions audio pendant la navigation vous aident, en tant que conducteur ou piéton, à atteindre votre destination tout en [suivant un itinéraire sélectionné](../setup/route-navigation.md). Elles contiennent des informations sur les virages, les directions à suivre, les panneaux de signalisation, les distances jusqu'à votre destination et d'autres facteurs qui peuvent affecter votre navigation.  

Si vous sélectionnez une trace comme point de destination, vous devez utiliser l'option [Attacher aux routes](../setup/gpx-navigation.md#attach-to-the-roads) pour que les invites vocales fonctionnent correctement.

Les *invites vocales* vous permettent de vous concentrer sur la route et de ne pas être distrait par la carte ou l'appareil de navigation. Elles améliorent également la sécurité de la conduite, réduisent le temps nécessaire pour naviguer en terrain inconnu et peuvent être utiles pour différents [types d'itinéraires](../routing/osmand-routing.md#routing-types).

Dans la section **Annoncer**, vous pouvez choisir quels types de notifications doivent être joués ou affichés pendant la navigation :

- **Directions virage par virage** (Android uniquement) – permet d'activer ou de désactiver les instructions de navigation standard telles que *« Tournez à gauche »*, *« Tournez à droite »* ou *« Dans 200 mètres… »*. Lorsque l'option est désactivée, les annonces de virages et de noms de rues ne sont pas fournies, tandis que les notifications pour les points de passage, les points utilisateur et les événements d'itinéraire restent actives. Ce mode est destiné aux activités comme le rafting, la randonnée ou le cyclisme le long de traces préenregistrées, lorsque seules les alertes pour les points de passage ajoutés manuellement sont requises.
- **Noms de rues (TTS)** – annonce les noms des rues le long de votre itinéraire.
- **Numéro de sortie** – annonce le numéro de sortie lors de la conduite sur les autoroutes.
- **Avertissements de circulation** – fournit des alertes sur les événements routiers importants tels que les embouteillages ou les restrictions.
- **Passages piétons** – vous avertit lorsque vous approchez des passages piétons.
- **[Radars](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – alerte sur les emplacements des radars (là où cela est légalement permis).
- **Tunnels** – vous informe lorsque vous entrez dans un tunnel.


## Alertes à l'écran {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Le paramètre de navigation **Alerte à l'écran** active le [**Widget Alertes**](../../widgets/nav-widgets.md#alert-widget). *Détails :*

- Lorsque vous approchez de l'un des obstacles pris en charge sur la route, des notifications apparaissent dans le coin inférieur gauche de la carte.
- Si vous configurez les [*invites vocales et textuelles*](../../navigation/guidance/voice-navigation.md) disponibles dans l'application OsmAnd, votre voyage sera plus confortable et plus sûr.
- L'apparence et le moment des invites dépendent de vos paramètres de vitesse. Vous pouvez les trouver [dans l'article](../../../technical/algorithms/voice-prompt-triggering.md).  
- Le comportement des *Alertes à l'écran* est également affecté par le paramètre [Afficher les points le long de l'itinéraire](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Vous pouvez ***sélectionner les alertes*** que vous souhaitez voir sur l'écran de l'application pendant la navigation :

- **Limitation de vitesse** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). Dans le paramètre Alertes à l'écran, la *limitation de vitesse* n'est affichée à l'écran qu'avec les *Avertissements de circulation* activés. Si vous souhaitez voir les limitations de vitesse pendant la navigation sans autres avertissements, utilisez le [widget](../../widgets/nav-widgets.md#speed-limit).
- **Avertissements de circulation** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Des informations supplémentaires peuvent être trouvées dans l'article [Écran de la carte pendant la navigation](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Passages piétons** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radars** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Pour plus d'informations sur le paramètre Radars dans OsmAnd, lisez [Types d'alertes](../../widgets/nav-widgets.md#alert-types) et l'article *Paramètres généraux*, section [Légal](../../personal/global-settings.md#legal).
- **Tunnels** ([info OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Les types d'avertissements ont une apparence visuelle différente, qui dépend de la région de voyage. OsmAnd ne vise pas à présenter des panneaux de signalisation 100% identiques mais souligne certaines similitudes.  
:::


## Carte pendant la navigation {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

La **carte est utilisée pendant la navigation** pour déterminer votre position, planifier votre itinéraire et vous orienter. Pendant la navigation, vous pouvez afficher la carte avec le *centrage automatique*, la déplacer et *zoomer en avant et en arrière* pour voir la zone requise. La carte peut également afficher des marqueurs indiquant des points d'intérêt, des itinéraires, les conditions météorologiques, des panneaux de signalisation et d'autres objets pour vous aider à naviguer. La carte peut être mise à jour en *temps réel* et affiche des *informations à jour* qui peuvent affecter la planification de l'itinéraire.

Vous pouvez apprendre comment le comportement de la carte change pendant la navigation dans l'article [Écran de la carte pendant la navigation](../guidance/map-during-navigation.md).  

## Personnaliser la ligne de l'itinéraire {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Avec le paramètre **Personnaliser la ligne de l'itinéraire**, vous pouvez choisir l'apparence de la ligne de l'itinéraire qui sera visible sur la carte pendant la navigation. Vous pouvez sélectionner la *couleur*, la *largeur de la ligne* et l'affichage des *flèches de virage* sur celle-ci. Pour chaque profil, vous pouvez choisir une vue de ligne différente. Tous ces paramètres sont décrits en détail dans l'article *Écran de la carte pendant la navigation* dans la section [Apparence de la ligne de l'itinéraire](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Paramètres du véhicule {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Paramètres de navigation iOS](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Pour garantir qu'OsmAnd calcule l'itinéraire le plus optimal, il est crucial de configurer les paramètres de votre véhicule — y compris sa vitesse, ses dimensions, son poids et son type de carburant — ce qui permet à l'application d'estimer avec précision la durée du trajet, d'éviter les restrictions routières et de suivre la consommation de carburant, comme expliqué dans notre guide complet sur les [Paramètres du véhicule](./vehicle-parameters.md).


## Guidage détaillé de la trace {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attacher aux routes 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Paramètres de navigation Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Guidage détaillé de la trace*

![Paramètres de navigation](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Paramètres de navigation](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

La fonction **Guidage détaillé de la trace** améliore la précision de la navigation d'itinéraire lors de l'utilisation d'**itinéraires basés sur des traces**. Lorsque vous sélectionnez une trace comme destination, vous pouvez activer le paramètre [Attacher aux routes](../setup/gpx-navigation.md#attach-to-the-roads) depuis le menu [Suivre la trace](../setup/gpx-navigation.md#follow-track-options). Cela garantit que la trace est alignée sur les routes existantes, de sorte que la navigation fournira des instructions précises sur les ronds-points, les virages, les limitations de vitesse, les voies de circulation et les noms de rue pour les routes.

Il existe deux options pour utiliser le *Guidage détaillé de la trace* :

- **<Translate android="true" ids="ask_every_time"/>** (*paramètres par défaut*) – L'option *Attacher aux routes* apparaîtra dans la section [Détails de l'itinéraire](../setup/route-details.md) chaque fois qu'un itinéraire basé sur une trace est calculé. Cela vous permet de décider si vous souhaitez appliquer l'attachement à la route pour chaque session de navigation.

- **<Translate android="true" ids="shared_string_always"/>** – Le processus d'attachement à la route sera appliqué automatiquement pour chaque itinéraire de *navigation par trace* sans nécessiter de confirmation manuelle.

Pour plus d'informations sur l'utilisation de la navigation basée sur une trace, visitez [Navigation par trace](../setup/gpx-navigation.md).


## Articles connexes {#related-articles}

- [Paramètres de l'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](../setup/route-navigation.md)
- [Navigation par trace](../setup/gpx-navigation.md)
- [Navigation par marqueurs](../setup/markers-navigation.md)
- [Détails de l'itinéraire](../setup/route-details.md)
- [Écran de la carte pendant la navigation](./map-during-navigation.md)
- [Invites vocales / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)