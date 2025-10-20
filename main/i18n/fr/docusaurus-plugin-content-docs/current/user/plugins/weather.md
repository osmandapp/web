---
source-hash: 603f9c004e8355faaafe53288dad7c9600c768ad0d6a044e948235c10e23cd75
sidebar_position: 17
title:  Météo
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

:::info Fonctionnalité payante
 <ProFeature/> Le plugin Météo est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.  
:::

Les couches de carte météo interactives de l'application OsmAnd vous permettent de suivre la température, la pression atmosphérique, la couverture nuageuse, la vitesse du vent et les précipitations dans votre ville ou tout autre lieu sur une carte mondiale interactive. Le plugin Météo fournit des prévisions météorologiques horaires pour les 7 jours à venir directement sur la carte OsmAnd. Les informations météorologiques peuvent également être téléchargées pour une utilisation hors ligne.  

La source de données pour le plugin Météo est le [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) géré par le National Weather Service (NWS) des États-Unis et le Centre européen pour les prévisions météorologiques à moyen terme ([ECMWF](https://www.ecmwf.int/)).  


## Paramètres de configuration requis {#required-setup-parameters}

Les paramètres suivants sont *requis* pour afficher la météo sur la carte OsmAnd :

**1.** [Acheter l'abonnement **OsmAnd Pro**](../purchases/).

**2.** [Activer](../plugins/#enable--disable) le plugin Météo dans la section *Plugins* du *Menu principal*.

**3.** [Sélectionner les **unités de mesure**](#weather-settings) pour les phénomènes météorologiques.

**4.** [Afficher les **couches Météo**](#customize-weather-layers) sur la carte en utilisant l'élément de menu Météo dans le menu Configurer la carte (n'oubliez pas de dézoomer).

**5.** [Consulter les **prévisions météo**](#weather-forecast-screen) pour la zone sélectionnée (ce menu permet de ne pas encombrer l'écran principal de la carte OsmAnd avec les couches météo).

**6.** [Télécharger](#offline-forecast) les prévisions météo si vous prévoyez de les utiliser hors ligne.

**7.** [Activer les **widgets Météo**](#weather-widgets) si vous souhaitez voir les informations météorologiques à jour quotidiennement.  

:::caution Rendu requis
Le plugin Météo n'est disponible qu'avec le moteur de rendu de carte [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Afficher la météo sur la carte {#display-weather-on-the-map}

### Écran des prévisions météo {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Aller à : *Plugin activé → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Tableau de bord Météo Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Aller à : *Plugin activé → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Tableau de bord Météo sur iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>  

</Tabs>

Le menu latéral principal dispose d'un élément de menu **Météo** dédié qui offre un accès rapide à tous les outils météorologiques. L'écran *Prévisions météo* affiche des informations sur la *température*, la *pression atmosphérique*, la *vitesse du vent*, la *couverture nuageuse* et les *précipitations*.  

En bas de l'écran se trouve la *barre d'outils météo*. Vous pouvez utiliser les boutons de jour et le curseur de temps pour définir l'heure exacte à laquelle les prévisions météorologiques seront affichées.

### Personnaliser les couches météo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Aller à : *Plugin activé → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Tableau de bord Météo Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Aller à : *Plugin activé → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Tableau de bord Météo sur iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Pour afficher les couches météo sur l'écran de la carte OsmAnd, vous devez utiliser le menu *Configurer la carte*. Allez dans le menu, trouvez l'élément *Météo* dans la liste (disponible uniquement lorsque le plugin est activé), et appuyez dessus.  

Dans ce menu, vous pouvez modifier la **visibilité** et les [paramètres](#weather-settings) de chaque couche, sélectionner le type de lignes de contour, et télécharger les [prévisions météo hors ligne sur 7 jours](#offline-forecast) (*disponible uniquement pour Android ici*).


### Paramètres météo {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Menu principal → Plugins → Météo → Paramètres*
- *Menu principal → Paramètres → Profil → Paramètres des plugins → Météo*

![Paramètres Météo Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Paramètres Météo 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu principal → Paramètres → Profil → Plugins → Météo*

![Paramètres Météo iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Paramètres Météo iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Il est important de décider dans quelles unités de mesure il vous est pratique de voir les [données météo](#weather-layers) sur la carte et dans la section [Widgets météo](#weather-widgets) de l'écran. Vous pouvez choisir les unités de mesure appropriées pour chaque paramètre ou utiliser les valeurs par défaut (*iOS uniquement*). Dans la version iOS de l'application OsmAnd, vous pouvez également activer l'option de prévisions hors ligne pour éviter d'utiliser le trafic mobile lors de vos déplacements.  

:::note
Dans la version iOS d'OsmAnd, vous pouvez modifier les unités de mesure et le niveau de transparence dans le menu qui s'ouvre après un appui long sur l'icône de la couche de carte requise.  
:::

### Couches météo {#weather-layers}

Toutes les données météorologiques sont présentées sous forme de couches de carte distinctes. Pour voir les couches météo sur la carte, vous devez dézoomer, elles ne sont disponibles qu'aux échelles de zoom 2-12. Les couches météo utilisent des [palettes météo](../personal/color-palette-schemes.md#weather) pour coloriser la carte, ces palettes peuvent être [modifiées](../personal/color-palette-schemes.md#edit-palette-file) si nécessaire.

| |  
|------------|  
| La **couche Précipitations** affiche des informations sur les événements météorologiques lorsque l'eau sous différents états tombe du ciel sur le sol. Les précipitations sont la pluie, la neige, le grésil ou la grêle. L'échelle des précipitations est graduée en millimètres (ou pouces) d'eau qui tombe sur 1 mètre carré en 24 heures. 1 mm de pluie correspond à 1 litre d'eau par mètre carré. |  
|![Schéma des précipitations](@site/static/img/plugins/weather/precipitation.png)|  
| La **Température** exprime la perception quantitative du chaud et du froid. Elle se mesure en degrés. Dans OsmAnd, vous pouvez choisir entre l'échelle Celsius et Fahrenheit. |  
|![Schéma de la température](@site/static/img/plugins/weather/temperature.png)|  
| Le **Vent** est le mouvement de l'air causé par le réchauffement inégal de la Terre par le soleil et sa propre rotation. Les vents peuvent aller d'une légère brise à des catastrophes naturelles telles que les ouragans et les tornades. Dans OsmAnd, la vitesse du vent peut être affichée en mètres par seconde (m/s), kilomètres par heure (km/h), miles par heure (mph) et nœuds (kt). |  
|![Schéma du vent](@site/static/img/plugins/weather/wind.png)|  
| La **Couverture nuageuse** est la fraction moyenne du ciel couverte par les nuages lorsqu'on l'observe depuis un endroit particulier. Elle se mesure en %. |  
|![Schéma des nuages](@site/static/img/plugins/weather/clouds.png)|  
| La **Pression atmosphérique** est causée par le poids de l'air au-dessus du point de mesure. Elle diminue avec l'augmentation de l'altitude. La pression atmosphérique peut être affichée en hectopascals (hPa), millimètres de mercure (mmHg) et pouces de mercure (inHg). |  
| ![Schéma de la pression](@site/static/img/plugins/weather/pressure.png) |  
| L'**Animation du vent** inclut des représentations dynamiques montrant la direction et la vitesse du vent dans la région. |  
| ![Animation du vent](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Combiner les cartes {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combiner les couches Météo sur Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combiner les couches Météo sur Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combiner les couches Météo sur iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combiner les couches Météo sur iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Pour obtenir des informations météorologiques complètes, vous pouvez utiliser les couches de la carte séparément ou les combiner facilement. Des isolignes d'un type spécifique peuvent également être ajoutées à la couche Météo. Il suffit d'appuyer sur le bouton *Couches* ou *Isolignes* à l'écran.


### Actions rapides pour les couches {#quick-actions-for-layers}

![Actions rapides couches Météo](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Pour basculer la visibilité des couches météo, vous pouvez utiliser les boutons *Action rapide* sur l'écran de la carte. Les paramètres généraux pour afficher ou masquer les couches se trouvent dans la section [Météo](#weather-forecast-screen) dédiée du *Menu principal*. Dans l'article [Action rapide](../widgets/quick-action.md#configure-map), vous trouverez une liste des couches disponibles à l'affichage. Si vous avez besoin d'un accès rapide à cette configuration de carte, utilisez l'outil *Bouton personnalisé*.

- Aller à [Ajouter une action](../widgets/quick-action.md#custom-buttons) : *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Configurer la carte*.
- Ajoutez un ou plusieurs boutons d'action rapide pour modifier la visibilité d'une couche météo particulière.


## Prévisions hors ligne {#offline-forecast}

### Cache {#cache}

Lorsque l'onglet Météo est ouvert, sauf indication contraire, les informations météorologiques requises sont téléchargées depuis le réseau. Vous pouvez utiliser les [prévisions météo](#download-forecast) préchargées sur vos appareils. Les informations météorologiques sont automatiquement mises en cache après le téléchargement et peuvent être utilisées hors ligne jusqu'à l'expiration des prévisions.  

:::tip
Sur les appareils Android, vous pouvez vérifier quand les données météo ont été téléchargées en appuyant sur le *widget Météo*. Le plugin de développement OsmAnd doit être activé.  
![Date du cache météo sur Android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Télécharger les prévisions {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Plugin Météo sur Android](@site/static/img/plugins/weather/download_weather_android.png) ![Plugin Météo sur Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Plugin Météo sur iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Plugin Météo sur iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Pour chaque pays, vous pouvez télécharger des **prévisions hors ligne** (jusqu'à 7 jours). Plus la date est proche de la date actuelle, plus les prévisions seront précises. Si vous souhaitez utiliser les prévisions météo hors ligne, vous devez télécharger les données météo à l'avance.  

Dans le menu de téléchargement des prévisions, vous pouvez obtenir des informations et définir des paramètres pour maintenir les données météo à jour.  
  
- **Créé** (*Android*) / **Mis à jour** (*iOS*). Indique quand la dernière mise à jour a été effectuée.  
- **Prochaine mise à jour** (*iOS*). Quand la prochaine mise à jour sera disponible.  
- **Taille** (*Android*) / **Taille des mises à jour** (*iOS*). Affiche la taille de toutes les mises à jour.  
- Bouton **Mettre à jour** (*Android*) / **Mettre à jour maintenant** (*iOS*). Lorsqu'il est actif, permet de mettre à jour manuellement les données météo sans attendre une mise à jour automatique.  
- **Fréquence de mise à jour** (*iOS*). Peut être réglée sur 12 heures, 24 heures ou hebdomadaire.  
- *Mettre à jour uniquement via Wi-Fi* (*iOS*). Activez cette option si vous ne souhaitez pas utiliser les données mobiles pour les téléchargements.  
- Bouton **Supprimer** *corbeille* (*Android*) / **Supprimer les prévisions** (*iOS*). Permet de supprimer toutes les données de prévisions pour cette région.
- Bouton **Modifier** *crayon* (*Android*). Permet de renommer le fichier météo.

:::info  
Les données météorologiques sont mises à jour toutes les 6 heures (les 4 mises à jour de [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) et 3 de [ECMWF](https://www.ecmwf.int/)) et deviennent disponibles dans OsmAnd avec un court délai, car le processus de calcul prend plusieurs heures avant la publication (généralement vers 07:00 UTC).  
:::


## Widgets Météo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Aller à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="shared_string_weather"/>*

![Widgets Météo sur Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Widgets Météo sur Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate ios="true" ids="shared_string_weather"/>*

![Widgets Météo sur iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

Les [widgets Météo](../widgets/info-widgets.md#weather-widgets) tels que Température, Pression atmosphérique, Vent, Nuages et Précipitations affichent les données météorologiques actuelles pour le **point central de la carte**.

- Les widgets Météo ne s'affichent que lorsque l'[écran Météo](#weather-forecast-screen) est activé.
- Pour activer les widgets météo, sélectionnez l'élément du menu principal *Configurer l'écran*, le panneau sur lequel les placer, et les widgets requis dans la liste.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)