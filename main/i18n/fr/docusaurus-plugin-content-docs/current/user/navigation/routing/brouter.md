---
sidebar_position: 12
title: BRouter
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



## Aperçu

:::caution ANDROID SEULEMENT
L'algorithme de routage tiers BRouter est uniquement disponible pour la version Android de l'application OsmAnd.
:::

*BRouter* est un algorithme de routage tiers qui peut être utilisé dans l'application OsmAnd pour le [mode de navigation hors ligne](../guidance/navigation-settings.md#navigation-type). Il est conçu pour optimiser un itinéraire en fonction de différents paramètres, tels que le temps, la distance ou le type de véhicule.

[BRouter](http://brouter.de/) utilise les données OpenStreetMap pour créer un itinéraire, puis l'ajuste en fonction des paramètres spécifiés. Il utilise des itinéraires pré-calculés pour construire rapidement un itinéraire hors ligne. Il vous permet également de personnaliser les profils de routage, qui sont définis par un ensemble de paramètres pour tenir compte de divers facteurs dans la sélection de l'itinéraire. Le fichier [BRouter readme.txt](http://brouter.de/brouter/readme.txt) explique plus en détail comment installer et utiliser le programme.

OsmAnd vous offre la possibilité de sélectionner des itinéraires avec BRouter et de configurer des profils de routage pour mieux définir l'itinéraire selon vos besoins.

Pour plus d'informations, vous pouvez visiter le [site officiel de Brouter](http://www.brouter.de/brouter/algorithm.html).

L'intégration de BRouter dans OsmAnd a beaucoup changé au cours de l'été 2019. Ce guide suppose que vous utilisez l'application Android BRouter en version 1.5.0 ou supérieure ainsi qu'OsmAnd en version 3.4 ou supérieure.

:::note
L'algorithme de routage tiers BRouter est uniquement disponible pour la version Android de l'application OsmAnd.
:::


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Comment configurer

Suivez ce guide pour installer et configurer l'application tierce *BRouter Offline Navigation* pour une utilisation dans OsmAnd.

**1.** Pour commencer, vous devez installer l'application BRouter sur votre appareil Android depuis [F-Droid](https://f-droid.org/packages/btools.routingapp) ou [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) sur votre appareil.
**2.** Ensuite, pour naviguer à l'aide de l'application OsmAnd le long d'itinéraires pré-calculés avec BRouter, vous devez :


  - Ouvrez l'application BRouter et appuyez sur *Gestionnaire de téléchargement*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Zoomez et sélectionnez les zones dans lesquelles vous souhaitez naviguer. Cliquez ensuite sur "Démarrer le téléchargement" et BRouter commencera à télécharger les fichiers [segments](http://brouter.de/brouter/segments4/) pour les zones sélectionnées.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Notez** que vous devrez répéter cette étape périodiquement, chaque fois que vous souhaitez avoir une version mise à jour des données OSM utilisées pour le routage.

**3.** Une fois cela fait, redémarrez l'application BRouter et choisissez l'entrée "BRouter App" dans le *Menu principal*. Choisissez un profil de routage en fonction de votre mode de déplacement. Il peut s'agir de vélo, de cyclomoteur, de randonnée ou de trekking. Une liste des profils disponibles en téléchargement au format *brf* peut être trouvée [ici](http://brouter.de/brouter/profiles2/). Ou vous pouvez essayer d'utiliser le profil de routage dans [BRouter-online](http://brouter.de/brouter-web/).
Cliquez sur "Mode Service". Cochez ensuite les cases correspondant aux modes de routage pour lesquels vous souhaitez utiliser ce profil. Vous pouvez utiliser deux profils différents par mode de transport, qui seront mappés aux préréglages "le plus court" et "le plus rapide" (ce ne sont que des étiquettes) dans OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Si vous avez déjà chargé des segments auparavant, ils seront affichés sur la carte BRouter. Les segments ont quatre états :

- Carré *"Vert"* - Nouveau segment sélectionné à télécharger.
- Carré *"Bleu"* - Le segment avec des données mises à jour.
- Carré *"Gris"* - Le segment est déjà téléchargé mais nécessite une mise à jour.
- Carré *"Jaune"* - Le segment est en cours de mise à jour.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Lorsque vous avez chargé les segments de carte requis avec BRouter et sélectionné un profil de routage, tous les paramètres suivants de ce type de navigation sont effectués dans l'application OsmAnd.

**6.** Vous pouvez créer un "Profil d'application" dans OsmAnd qui utilisera BRouter pour le routage hors ligne.
Utilisez le type de routage *BRouter (hors ligne)* avec n'importe quel [profil](../../personal/profiles.md) dans l'application OsmAnd. Pour ce faire, allez dans le *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* principal et créez un nouveau profil basé sur le profil de base de votre choix (cyclisme ici, pour le routage à vélo), avec un nom personnalisé de votre choix ("BRouter" sur la capture d'écran ci-dessous) et utilisant "BRouter (hors ligne)" pour la navigation.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

L'application BRouter doit être lancée avant OsmAnd pour que cette entrée spécifique apparaisse dans OsmAnd. Par conséquent, si vous ne trouvez pas l'option de navigation "BRouter (hors ligne)", vous devez forcer la fermeture d'OsmAnd et le redémarrer.

## OsmAnd Version 4.7.1

À partir de la version 4.7.1, Osmand prend en charge le paramètre de profil pour le mappage : Depuis la version 3 d'Osmand, de nombreux profils peuvent être définis dans Osmand et vous pouvez facilement basculer entre ces profils. Un nouveau profil doit être créé, par exemple en copiant le profil *Cyclisme* existant et en lui donnant un nouveau nom au format Brouter[fastbike]. Vous pouvez utiliser n'importe lequel des profils BRouter existants installés sur votre appareil. Tous les fichiers de profil ont un format de nommage 'xxxxxxx.brf'. Ou vous pouvez créer votre propre nouveau profil, comme 'myprofile.brf'.

La convention de nommage dans le profil OsmAnd est importante car le profil BRouter inclus dans ce profil établit le pont réel entre OsmAnd et BRouter.

- Si dans Osmand un profil a *BRouter* défini comme service de navigation
- ET le nom du profil ressemble à "Brouter[mystring]"

Alors le profil "mystring" sera utilisé dans l'application Brouter. Ce nouveau mappage remplace dans ce cas le mappage de base défini ci-dessus et basé sur le fichier "serviceconfig.dat".

### Exemples : Nom du profil Osmand - application Brouter

```xml
Brouter[trekking] le profil "trekking" sera utilisé fichier : trekking.brf
Brouter[fastbike] le profil "fastbike" sera utilisé fichier : fastbike.brf
....
```

Remarque :
Actuellement, Osmand ne vérifie pas le nom défini (sensible à la casse) pour le profil Brouter (mystring).
Si aucun profil n'est trouvé, le routage échouera avec "Impossible de calculer l'itinéraire..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Comment utiliser

Cette section décrit une comparaison de BRouter avec le routage interne de l'application OsmAnd.

Lorsque BRouter est configuré, nous pouvons comparer la vitesse de pré-calcul des données de routage BRouter avec le routage interne d'OsmAnd. Choisissons deux points aléatoires aux Pays-Bas et commençons à calculer le trajet. Pour cela, nous définissons un style de conduite équilibré sans utiliser de données d'altitude pour le profil de base. Le temps de calcul pour ce trajet est de 14,5 secondes pour notre itinéraire interne OsmAnd. Le temps de calcul de l'itinéraire lors de l'utilisation du routage BRouter est inférieur à 1 seconde.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Paramètres d'itinéraire

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | Dans la plupart des cas, l'itinéraire le plus court sera suggéré. Souvent, cet itinéraire peut prendre plus de temps que si le paramètre était désactivé |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Lisez l'option Considérer les limitations temporaires dans cet [article](../routing/osmand-routing.md#consider-temporary-limitations). | L'algorithme de routage prend en compte les contraintes de temps spécifiées dans OpenStreetMap. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes. |


### Autres paramètres de routage

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigation → Paramètres*, [image](../routing/online-routing.md#online-routing-setting)). Si cette option est activée, OsmAnd ajoute deux segments à la trace Brouter calculée : un de *[Ma position](../../map/interact-with-map.md#my-location-and-zoom)* au point de départ de la trace et un autre de la fin de la trace au point d'arrivée de votre itinéraire. Cette option est active si la distance vers ou depuis la trace dépasse 60 mètres.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

> *Cet article a été mis à jour pour la dernière fois en juin 2024*

-- source-hash: blake2s: 59d9a11d1fa0e8ee29659a85a1b8a197fa0d2e27c9582be7bcb51b1c4d44e029 --
