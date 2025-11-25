---
source-hash: 4e8a3309a2bf429582c639f9c175de6db52d66c53f5483573c9c43e9ddf5a4ad
sidebar_position: 4
title:  Paramètres du véhicule
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Pour un calcul d'itinéraire optimal dans OsmAnd, vous devez prendre en compte les paramètres suivants du véhicule :

1. Définissez la [*Vitesse par défaut* ou les *Vitesses sur route*](#road-speeds), comme la [vitesse minimale et maximale](#road-speeds) du véhicule. Cela aidera l'application à déterminer le temps nécessaire pour parcourir l'itinéraire et lui permettra de choisir le meilleur trajet, en tenant compte des limitations de vitesse sur les différents tronçons de route.
2. Spécifiez le [*type*](#fuel-used-by-motor) de carburant utilisé par le moteur. Cela permettra à l'application d'estimer les émissions de CO2.
3. Saisissez la [*capacité de votre réservoir*](#fuel-tank-capacity) pour suivre avec précision votre niveau de carburant et votre consommation.
4. Définissez les [*paramètres de taille et de poids*](#size-parameters) de votre véhicule, ce qui peut aider l'application à calculer l'itinéraire optimal et à éviter les obstacles sur la route en raison des restrictions.

Le réglage correct des paramètres dans l'application OsmAnd vous aidera à éviter les problèmes lors de la navigation sur un itinéraire, à choisir le plus adapté en fonction du type de véhicule et des restrictions routières, et à calculer la durée de votre trajet.


## Paramètres de taille {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Les paramètres du véhicule affectent la navigation et la construction de l'itinéraire car ils déterminent la disponibilité des routes, ponts, ferries, barrages et autres infrastructures. Si la hauteur, la largeur, la longueur ou le poids d'un véhicule dépassent les valeurs autorisées pour certains tronçons de route, le système de navigation OsmAnd trouvera un itinéraire alternatif pour éviter les obstacles en chemin.  

- Les unités de mesure correspondront aux paramètres sélectionnés dans *Paramètres généraux → [Unités et formats](../../personal/profiles.md#units--formats)*.
- Les paramètres du véhicule peuvent être définis manuellement.
- Si vous sélectionnez manuellement le paramètre de mesure du véhicule, l'application vous proposera la valeur la plus proche dans la liste prédéfinie. Ceci est nécessaire pour éviter les erreurs et construire l'itinéraire plus correctement.
- Vous pouvez choisir les paramètres du véhicule à partir d'une liste de tailles prédéfinie.
- Ne définissez pas la taille sur *Aucun*, ce qui signifie qu'aucune restriction ne sera appliquée au paramètre sélectionné.  

### Limites {#limits}

**1.** [**Limite de <Translate android="true" ids="routing_attr_weight_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Le paramètre Poids n'est disponible que pour les types de navigation tels que [*Voiture, Camion* et *Moto*](../../navigation/routing/car-based-routing.md).  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**Limite de <Translate android="true" ids="routing_attr_height_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Le paramètre Hauteur n'est disponible que pour les types de navigation tels que *[Voiture, Camion, Moto](../../navigation/routing/car-based-routing.md)* et *[Bateau](../../navigation/routing/boat-navigation.md)*.  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**Limite de <Translate android="true" ids="routing_attr_length_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Le paramètre Longueur n'est disponible que pour les types de navigation tels que [*Voiture, Camion* et *Moto*](../../navigation/routing/car-based-routing.md).  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**Limite de <Translate android="true" ids="routing_attr_width_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Le paramètre Largeur n'est disponible que pour les types de navigation tels que *[Voiture, Camion, Moto](../../navigation/routing/car-based-routing.md)* et *[Bateau](../../navigation/routing/boat-navigation.md)*.  

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

**5.** [**Limite de charge maximale par essieu**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Indiquez la charge maximale par essieu de votre véhicule pour éviter les routes et les ponts avec des restrictions de poids par essieu. Ce paramètre n'est disponible que pour les types de navigation tels que [*Camion*](../../navigation/routing/car-based-routing.md).  

![Paramètres de navigation Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Poids maximal à pleine charge**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Indiquez le poids total maximal de votre véhicule lorsqu'il est complètement chargé pour éviter les routes et les ponts avec des restrictions de poids global. Ce paramètre n'est disponible que pour les types de navigation tels que [*Camion*](../../navigation/routing/car-based-routing.md).  

![Paramètres de navigation Android](@site/static/img/navigation/max_weight_at_full_load.png)

Les limites sur les paramètres du véhicule peuvent être importantes pour la navigation et la sécurité routière. Certaines de ces restrictions peuvent inclure :  

1. Restrictions sur les véhicules circulant dans certaines zones urbaines.  
2. Restrictions sur la circulation des véhicules sur des tronçons de route spécifiques, comme là où il y a des ponts, des tunnels à espace limité, des passages supérieurs bas, des virages complexes ou d'autres structures.  
3. Les limites de poids par essieu du véhicule peuvent être particulièrement importantes pour les camions.
4. Restrictions pour les véhicules circulant dans certaines conditions, telles que des températures élevées, des routes mouillées ou enneigées, la nuit, ou dans des conditions météorologiques avec une visibilité limitée.


## Paramètres de carburant {#fuel-parameters}

### Carburant utilisé par le moteur {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Si vous sélectionnez le type de moteur dans les paramètres du véhicule, les [***données sur l'empreinte CO2***](../../navigation/setup/route-details.md#elevation-info) seront affichées au-dessus du graphique dans les [Détails de l'itinéraire](../setup/route-details.md).
Six types de carburant sont disponibles : ***Essence, Diesel, GPL, GNC, Électrique,*** et ***Hybride***.  

**Applicabilité :**

Le paramètre **Carburant utilisé par le moteur** n'est disponible que pour la navigation basée sur un véhicule, comme *[Voiture, Moto et Camion](../../navigation/routing/car-based-routing.md)*.


### Capacité du réservoir de carburant {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Le paramètre **Capacité du réservoir de carburant** vous permet de suivre plus précisément le [niveau de carburant](../../widgets/info-widgets.md#vehicle-metrics-widgets) et la [consommation](../../widgets/info-widgets.md#vehicle-metrics-widgets) de votre véhicule en fournissant le volume total de votre réservoir. La valeur par défaut est d'environ 50 ***litres***. L'unité de mesure de la capacité de carburant est déterminée par le [Profil (Paramètres)](../..//personal/profiles.md#units--formats) configuré dans *Menu → Configurer le profil → Paramètres généraux → Unités et formats → Unité de volume*.

**Applicabilité :**

Le paramètre **Capacité du réservoir de carburant** n'est disponible que pour la navigation basée sur un véhicule. Pour les types de navigation tels que *Vélo*, *Équitation*, *À pied* et *Ski*, ce paramètre n'est pas affiché dans les Paramètres du véhicule.

## Paramètres de vitesse

### Vitesse par défaut {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres de navigation](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

La **Vitesse par défaut** est la vitesse de déplacement par défaut pour ce mode de transport ([Limites de vitesse par défaut](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Pour les profils *Marche*, *Équitation* et *Cyclisme*, par petits incréments équivalents à 0,1 km/h (mph) ([Unités et formats](https://osmand.net/docs/user/personal/profiles#units--formats)), et pour les autres profils, par incréments équivalents à 1 km/h (1 mph). Elle est utilisée :
- Pour estimer le [temps de parcours](../../widgets/nav-widgets.md#time-to-intermediate) lorsque la vitesse ne peut être déterminée à partir des routes, comme pour la [Navigation GPX](../setup/gpx-navigation.md), les [itinéraires de ski](../routing/ski-routing.md), les [itinéraires en bateau](../routing/boat-navigation.md), les [itinéraires piétons](../routing/pedestrian-routing.md) et autres profils similaires.
- Pour déterminer quand les [annonces vocales](../guidance/voice-navigation.md) sont activées.
- Pour déterminer l'heure d'arrivée estimée (ETA) pour les marqueurs de carte par une navigation en ligne droite si la vitesse moyenne n'est pas encore calculée.



Elle est utilisée pour calculer l'heure d'arrivée et déterminer l'itinéraire optimal en fonction de la vitesse de déplacement que l'application considère comme typique. Par exemple, voiture, transport en commun, piéton, ou la vitesse que vous définissez manuellement.


### Vitesses sur route {#road-speeds}


![Paramètres de navigation](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Pour certains types de navigation, la vitesse minimale et maximale autorisée peut être définie. Si elle est définie, le moteur de routage suppose que le véhicule ou le mode de transport ne se déplacera pas plus vite que la limite et pas plus lentement que la vitesse minimale.
Par exemple, cela permet de créer un itinéraire **économe en carburant** où la consommation de carburant est optimale à la **vitesse maximale** définie et le moteur trouvera un itinéraire plus court en évitant les routes plus longues mais plus rapides.

- **Vitesse minimale**  
    Ce paramètre définit la vitesse de conduite minimale pour tous les types de routes sur l'itinéraire. Il augmente la priorité pour les routes avec une vitesse recommandée inférieure à la vitesse minimale.  
- **Vitesse maximale**  
    Ce paramètre définit la vitesse de conduite maximale et diminue la priorité pour les routes avec une vitesse possible supérieure à la vitesse maximale.




## Articles connexes {#related-articles}

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Paramètres de navigation](./navigation-settings.md)
- [Instructions vocales / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)