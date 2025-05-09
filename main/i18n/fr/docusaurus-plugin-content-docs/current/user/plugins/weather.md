---
source-hash: 6a9f181e4b10167a013a063bc63c0cf50dfe10e708669b9f5f85c587622dac53 
sidebar_position: 17
title: Météo
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

:::info Fonctionnalité payante
 <ProFeature/> Le plugin Météo est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

Les couches de carte météo interactives de l'application OsmAnd vous permettent de surveiller la température, la pression atmosphérique, la couverture nuageuse, la vitesse du vent et les précipitations dans votre ville ou tout autre lieu sur une carte mondiale interactive. Le plugin Météo fournit des prévisions météorologiques horaires pour les 7 prochains jours directement sur la carte OsmAnd. Les informations météorologiques peuvent également être téléchargées pour une utilisation hors ligne.

La source de données du plugin Météo est le [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) géré par le National Weather Service (NWS) des États-Unis et le Centre européen pour les prévisions météorologiques à moyen terme ([ECMWF](https://www.ecmwf.int/)).


## Paramètres de configuration requis

Les paramètres suivants sont *requis* pour afficher la météo sur la carte OsmAnd :

**1.** [Achetez un **abonnement OsmAnd Pro**](../purchases/).

**2.** [Activez](../plugins/#enable--disable) le plugin Météo dans la section *Plugins* du *Menu principal*.

**3.** [Sélectionnez les **unités de mesure**](#weather-settings) pour les phénomènes météorologiques.

**4.** [Affichez les **couches Météo**](#customize-weather-layers) sur la carte à l'aide de l'élément de menu Météo dans le menu Configurer la carte (n'oubliez pas de dézoomer).

**5.** [Affichez l'**écran des prévisions météorologiques**](#weather-forecast-screen) pour la zone sélectionnée (ce menu permet de ne pas encombrer l'écran principal de la carte OsmAnd avec les couches météo).

**6.** [Téléchargez](#offline-forecast) les prévisions météorologiques si vous prévoyez de les utiliser hors ligne.

**7.** [Activez les **widgets Météo**](#weather-widgets) si vous souhaitez voir des informations météorologiques à jour quotidiennement.

:::caution Rendu requis
Le plugin Météo n'est disponible qu'avec le moteur de rendu de carte [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Afficher la météo sur la carte

### Écran des prévisions météorologiques

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *Plugin activé → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *Plugin activé → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Le menu latéral principal dispose d'un élément de menu dédié **Météo** qui permet d'accéder rapidement à tous les outils météorologiques. L'*écran des prévisions météorologiques* affiche des informations sur la *température*, la *pression atmosphérique*, la *vitesse du vent*, la *couverture nuageuse* et les *précipitations*.

En bas de l'écran se trouve la *barre d'outils météo*. Vous pouvez utiliser les boutons de jour et le curseur temporel pour définir l'heure exacte à laquelle les prévisions météorologiques seront affichées.

### Personnaliser les couches météo

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *Plugin activé → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *Plugin activé → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Pour afficher les couches météo sur l'écran de la carte OsmAnd, vous devez utiliser le *menu Configurer la carte*. Allez dans le menu, trouvez l'élément *Météo* dans la liste (disponible uniquement lorsque le plugin est activé) et appuyez dessus.

Dans ce menu, vous pouvez modifier la **visibilité** et les [paramètres](#weather-settings) de chaque couche, sélectionner le type de courbes de niveau et télécharger les [prévisions météorologiques hors ligne sur 7 jours](#offline-forecast) (*uniquement disponible pour Android ici*).


### Paramètres météo

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *Menu principal → Plugins → Météo → Paramètres*
- *Menu principal → Paramètres → Profil → Paramètres des plugins → Météo*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu principal → Paramètres → Profil → Plugins → Météo*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Il est important de décider dans quelles unités de mesure il vous convient de voir les [données météorologiques](#weather-layers) sur la carte et dans la section [Widgets météo](#weather-widgets) de l'écran. Vous pouvez choisir les unités de mesure appropriées pour chaque paramètre ou utiliser les valeurs par défaut (*iOS uniquement*). Dans la version iOS de l'application OsmAnd, vous pouvez également activer l'option de prévisions hors ligne pour éviter d'utiliser le trafic mobile pendant vos déplacements.

:::note
Dans la version iOS d'OsmAnd, vous pouvez modifier les unités de mesure et le niveau de transparence dans le menu qui s'ouvre après un appui long sur l'icône de la couche de carte requise.
:::

### Couches météo

Toutes les données météorologiques sont présentées sous forme de couches de carte distinctes. Pour voir les couches météo sur la carte, vous devez dézoomer, elles ne sont disponibles qu'aux échelles de zoom 2-12. Les couches météo utilisent des [palettes météo](../personal/color-palette-schemes.md#weather) pour coloriser la carte, ces palettes peuvent être [modifiées](../personal/color-palette-schemes.md#edit-palette-file) si nécessaire.

| |
|------------|
| **Couche de précipitations** affiche des informations sur les événements météorologiques lorsque l'eau sous différents états agrégés tombe du ciel au sol. Les précipitations sont la pluie, la neige, le grésil ou la grêle. L'échelle des précipitations est graduée en millimètres (ou pouces) d'eau qui tombe sur 1 mètre carré en 24 heures. 1 mm de pluie correspond à 1 litre d'eau par 1 mètre carré. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| La **température** exprime la perception quantitative du chaud et du froid. Elle est mesurée en degrés. Dans OsmAnd, vous pouvez choisir entre l'échelle Celsius et Fahrenheit. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| Le **vent** est le mouvement de l'air causé par le chauffage inégal de la Terre par le soleil et sa propre rotation. Les vents peuvent aller de légères brises à des catastrophes naturelles telles que les ouragans et les tornades. Dans OsmAnd, la vitesse du vent peut être affichée en mètres par seconde (m/s), kilomètres par heure (km/h), miles par heure (mph) et nœuds (kt). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| La **couverture nuageuse** est la fraction moyenne du ciel couverte par les nuages lorsqu'elle est observée depuis un lieu particulier. Elle est mesurée en %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| La **pression atmosphérique** est causée par le poids de l'air au-dessus du point de mesure. Elle diminue avec l'augmentation de l'altitude. La pression atmosphérique peut être affichée en hectopascals (hPa), millimètres de mercure (mmHg) et pouces de mercure (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| L'**animation du vent** comprend des représentations dynamiques montrant la direction et la vitesse du vent dans la région. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Combiner les cartes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Pour obtenir des informations météorologiques complètes, vous pouvez utiliser les couches de carte séparément ou les combiner facilement. Des isolignes d'un type spécifique peuvent également être ajoutées à la couche Météo. Il suffit d'appuyer sur le bouton *Couches* ou *Isolignes* à l'écran.


### Actions rapides pour les couches

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Pour basculer la visibilité des couches météo, vous pouvez utiliser les boutons *Action rapide* sur l'écran de la carte. Les paramètres généraux d'affichage ou de masquage des couches se trouvent dans la [section Météo](#weather-forecast-screen) distincte du *Menu principal*. Dans l'article [Action rapide](../widgets/quick-action.md#configure-map), vous trouverez une liste des couches disponibles pour l'affichage. Si vous avez besoin d'un accès rapide à cette configuration de carte, utilisez l'outil *Bouton personnalisé*.

- Allez à [Ajouter une action](../widgets/quick-action.md#custom-buttons) : *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Configurer la carte*.
- Ajoutez un ou plusieurs boutons QA pour modifier la visibilité d'une couche météo particulière.


## Prévisions hors ligne

### Cache

Lorsque l'onglet Météo est ouvert, sauf indication contraire, les informations météorologiques requises sont téléchargées depuis le réseau. Vous pouvez utiliser les [prévisions météorologiques](#download-forecast) préchargées sur vos appareils. Les informations météorologiques sont automatiquement mises en cache après le téléchargement et peuvent être utilisées hors ligne jusqu'à l'expiration des prévisions.

:::tip
Sur les appareils Android, vous pouvez vérifier quand les données météorologiques ont été téléchargées en appuyant sur le *widget Météo*. Le plugin de développement OsmAnd doit être activé.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Télécharger les prévisions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Pour chaque pays, vous pouvez télécharger les **prévisions hors ligne** (jusqu'à 7 jours). Plus la date est proche de la date actuelle, plus elles seront précises. Si vous souhaitez utiliser les prévisions météorologiques hors ligne, vous devez télécharger les données météorologiques à l'avance.

Dans le menu de téléchargement des prévisions, vous pouvez obtenir des informations et définir des paramètres pour maintenir les données météorologiques à jour.

- **Créé** (*Android*) / **Mis à jour** (*iOS*). Indique la date de la dernière mise à jour.
- **Prochaine mise à jour** (*iOS*). Indique quand la prochaine mise à jour sera disponible.
- **Taille** (*Android*) / **Taille des mises à jour** (*iOS*). Indique la taille de toutes les mises à jour.
- Bouton **Mettre à jour** (*Android*) / **Mettre à jour maintenant** (*iOS*). Lorsqu'il est actif, vous permet de mettre à jour les données météorologiques manuellement sans attendre une mise à jour automatique.
- **Fréquence de mise à jour** (*iOS*). Peut être réglée sur 12 heures, 24 heures ou hebdomadaire.
- *Mettre à jour uniquement via Wi-Fi* (*iOS*). Activez cette option si vous ne souhaitez pas utiliser les données mobiles pour les téléchargements.
- Bouton **Supprimer** *corbeille* (*Android*) / **Supprimer les prévisions** (*iOS*). Vous permet de supprimer toutes les données de prévisions pour cette région.
- Bouton **Modifier** *crayon* (*Android*). Vous permet de renommer le fichier météo.

:::info
OsmAnd génère de nouvelles prévisions toutes les 6 heures.
:::


## Widgets météo

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

Les [widgets météo](../widgets/info-widgets.md#weather-widgets) tels que Température, Pression atmosphérique, Vent, Nuages et Précipitations affichent les données météorologiques actuelles pour le **point central sur la carte**.

- Les widgets météo ne sont affichés que lorsque l'[écran Météo](#weather-forecast-screen) est activé.
- Pour activer les widgets météo, sélectionnez l'élément de menu principal *Configurer l'écran*, le panneau sur lequel les placer et les widgets requis dans la liste.


## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*

