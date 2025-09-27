---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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




## Aperçu {#overview}

:::caution ANDROID UNIQUEMENT
L'algorithme de routage tiers BRouter n'est disponible que pour la version Android de l'application OsmAnd.
:::

*BRouter* est un algorithme de routage tiers qui peut être utilisé dans l'application OsmAnd pour le [mode de navigation hors ligne](../guidance/navigation-settings.md#navigation-type). Il est conçu pour optimiser un itinéraire en fonction de différents paramètres, tels que le temps, la distance ou le type de véhicule.

[BRouter](http://brouter.de/) utilise les données d'OpenStreetMap pour créer un itinéraire, puis l'ajuste en fonction des paramètres spécifiés. Il utilise des itinéraires pré-calculés pour construire rapidement un itinéraire hors ligne. Il vous permet également de personnaliser les profils de routage, qui sont définis par un ensemble de paramètres pour tenir compte de divers facteurs dans la sélection de l'itinéraire. Le fichier [readme.txt de BRouter](http://brouter.de/brouter/readme.txt) explique plus en détail comment installer et utiliser le programme.

OsmAnd vous offre la possibilité de sélectionner des itinéraires avec BRouter et de configurer des profils de routage pour mieux définir l'itinéraire en fonction de vos besoins.

Pour plus d'informations, vous pouvez visiter le [site web officiel de Brouter](http://www.brouter.de/brouter/algorithm.html).

L'intégration de BRouter dans OsmAnd a beaucoup changé durant l'été 2019. Ce guide suppose que vous utilisez l'application BRouter pour Android en version 1.5.0 ou supérieure ainsi qu'OsmAnd en version 3.4 ou supérieure.

:::note
L'algorithme de routage tiers BRouter n'est disponible que pour la version Android de l'application OsmAnd.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Comment configurer {#how-to-configure}

Suivez ce guide pour installer et configurer l'application tierce *BRouter Offline Navigation* pour une utilisation dans OsmAnd.

**1.** Pour commencer, vous devez installer l'application BRouter sur votre appareil Android depuis [F-Droid](https://f-droid.org/packages/btools.routingapp) ou le [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) sur votre appareil.
**2.** Ensuite, pour naviguer en utilisant l'application OsmAnd le long d'itinéraires pré-calculés avec BRouter, vous devez :


  - Ouvrir l'application BRouter et appuyer sur *Gestionnaire de téléchargement*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Zoomez et sélectionnez les zones dans lesquelles vous souhaitez effectuer le routage. Cliquez ensuite sur "Démarrer le téléchargement" et BRouter commencera à télécharger les fichiers de [segments](http://brouter.de/brouter/segments4/) pour les zones sélectionnées.

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

**Notez** que vous devrez répéter cette étape périodiquement, chaque fois que vous voudrez disposer d'une version mise à jour des données OSM utilisées pour le routage.

**3.** Une fois cela fait, redémarrez l'application BRouter et choisissez l'entrée "Application BRouter" dans le *Menu principal*. Choisissez un profil de routage en fonction de votre mode de déplacement. Il peut s'agir de vélo, de cyclomoteur, de randonnée ou de trekking. Une liste des profils disponibles au téléchargement au format *brf* se trouve [ici](http://brouter.de/brouter/profiles2/). Ou vous pouvez essayer d'utiliser le profil de routage dans [BRouter-online](http://brouter.de/brouter-web/).
Cliquez sur "Mode Service". Ensuite, cochez les cases des modes de routage pour lesquels vous souhaitez utiliser ce profil. Vous pouvez utiliser deux profils différents par mode de transport, qui seront associés aux préréglages "le plus court" et "le plus rapide" (ce ne sont que des étiquettes) dans OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Si vous avez déjà chargé des segments précédemment, ils seront affichés sur la carte BRouter. Les segments ont quatre états :

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
Utilisez le type de routage *BRouter (hors ligne)* avec n'importe quel [profil](../../personal/profiles.md) dans l'application OsmAnd. Pour ce faire, allez dans le menu principal *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* et créez un nouveau profil basé sur le profil de base de votre choix (ici, cyclisme, pour le routage à vélo), avec un nom personnalisé de votre choix ("BRouter" sur la capture d'écran ci-dessous) et en utilisant "BRouter (hors ligne)" pour la navigation.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

L'application BRouter doit être lancée avant OsmAnd pour que cette entrée spécifique apparaisse dans OsmAnd. Par conséquent, si vous ne trouvez pas l'option de navigation "BRouter (hors ligne)", vous devez forcer la fermeture d'OsmAnd et le redémarrer.

## Version 4.7.1 d'OsmAnd {#osmand-version-471}

À partir de la version 4.7.1, OsmAnd prend en charge le paramètre de profil pour le mappage : Depuis la version 3 d'OsmAnd, de nombreux profils peuvent être définis dans OsmAnd et vous pouvez facilement basculer entre ces profils. Un nouveau profil doit être créé, par exemple en copiant le profil *Cyclisme* existant et en lui donnant un nouveau nom au format Brouter[fastbike]. Vous pouvez utiliser n'importe lequel des profils BRouter existants dans le nom qui sont installés sur votre appareil. Tous les fichiers de profil ont un format de nommage 'xxxxxxx.brf'. Ou vous pourriez créer un nouveau profil personnel, comme 'monprofil.brf'.

La convention de nommage dans le profil OsmAnd est importante car le profil BRouter inclus dans ce profil établit le pont réel entre OsmAnd et BRouter.

- Si dans OsmAnd un profil a *BRouter* défini comme service de navigation
- ET que le nom du profil ressemble à "Brouter[machaine]"

Alors le profil "machaine" sera utilisé dans l'application Brouter. Ce nouveau mappage remplace dans ce cas le mappage de base défini ci-dessus et basé sur le fichier "serviceconfig.dat".

### Exemples : nom de profil OsmAnd et application Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] le profil "trekking" sera utilisé fichier : trekking.brf
Brouter[fastbike] le profil "fastbike" sera utilisé fichier : fastbike.brf
....
```

Remarque :
Actuellement, OsmAnd ne vérifie pas le nom défini (sensible à la casse) pour le profil Brouter (machaine).
Si aucun profil n'est trouvé, le routage échouera avec "Impossible de calculer l'itinéraire...".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Comment l'utiliser {#how-to-use}

Cette section décrit une comparaison de BRouter avec le routage interne de l'application OsmAnd.

Lorsque BRouter est configuré, nous pouvons comparer la vitesse de pré-calcul des données de routage de BRouter avec le routage interne d'OsmAnd. Choisissons deux points au hasard aux Pays-Bas et commençons à calculer le trajet. Pour cela, nous définissons un style de conduite équilibré sans utiliser de données d'altitude pour le profil de base. Le temps de calcul pour ce trajet est de 14,5 secondes pour notre itinéraire interne OsmAnd. Le temps de calcul de l'itinéraire lors de l'utilisation du routage BRouter est inférieur à 1 seconde.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Paramètres d'itinéraire {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | Dans la plupart des cas, l'itinéraire le plus court sera suggéré. Souvent, cet itinéraire peut prendre plus de temps que si le paramètre était désactivé. |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Lisez à propos de l'option Tenir compte des limitations temporaires dans cet [article](../routing/osmand-routing.md#consider-temporary-limitations).   | L'algorithme de routage tient compte des contraintes de temps spécifiées dans OpenStreetMap. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.   |


### Autres paramètres d'itinéraire {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigation → Paramètres*, [image](../routing/online-routing.md#online-routing-setting)). Si cette option est activée, OsmAnd ajoute deux segments au tracé Brouter calculé : un de *[Ma position](../../map/interact-with-map.md#my-location-and-zoom)* au point de départ du tracé et un autre de la fin du tracé au point d'arrivée de votre itinéraire. Cette option est active si la distance vers ou depuis le tracé dépasse 60 mètres.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.