---
source-hash: e5fd3ea3059108d94fc75d50becf312a8c006b80209c72a142b97f415bb426ca
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



## Aperçu {#overview}

:::info Fonctionnalité payante
 <ProFeature/> Le plugin Météo est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

Les calques interactifs de la carte météo dans l'application OsmAnd vous permettent de surveiller la température, la pression atmosphérique, la couverture nuageuse, la vitesse du vent et les précipitations dans votre ville ou tout autre endroit sur une carte mondiale interactive. Le plugin Météo fournit des prévisions météorologiques horaires pour 7 jours directement sur la carte OsmAnd. Les informations météorologiques peuvent également être téléchargées pour une utilisation hors ligne.

La source de données pour le plugin Météo est le [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) exploité par le National Weather Service (NWS) des États-Unis et le Centre européen pour les prévisions météorologiques à moyen terme ([ECMWF](https://www.ecmwf.int/)).


## Paramètres de configuration requis {#required-setup-parameters}

Les paramètres suivants sont *requis* pour afficher la météo sur la carte OsmAnd :

**1.** [Achetez l'**abonnement OsmAnd Pro**](../purchases/).

**2.** [Activez](../plugins/#enable--disable) le plugin Météo dans la section *Plugins* du *Menu principal*.

**3.** [Sélectionnez les **unités de mesure**](#weather-settings) pour les événements météorologiques.

**4.** [Affichez les **calques Météo**](#customize-weather-layers) sur la carte à l'aide de l'élément de menu Météo dans le menu Configurer la carte (n'oubliez pas de dézoomer).

**5.** [Consultez les **prévisions météorologiques**](#weather-forecast-screen) pour la zone sélectionnée (ce menu permet de ne pas encombrer l'écran principal de la carte OsmAnd avec les calques météorologiques).

**6.** [Téléchargez](#offline-forecast) les prévisions météorologiques si vous prévoyez de les utiliser hors ligne.

**7.** [Activez les **widgets Météo**](#weather-widgets) si vous souhaitez voir des informations météorologiques à jour quotidiennement.

:::caution Rendu requis
Le plugin Météo n'est disponible qu'avec le moteur de rendu de carte [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Afficher la météo sur la carte {#display-weather-on-the-map}

### Écran des prévisions météorologiques {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *Plugin activé → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *Plugin activé → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Le menu latéral principal dispose d'un élément de menu dédié **Météo** qui donne un accès rapide à tous les outils météorologiques. L'*écran des prévisions météorologiques* affiche des informations sur la *température*, la *pression atmosphérique*, la *vitesse du vent*, la *couverture nuageuse* et les *précipitations*.

En bas de l'écran se trouve la *barre d'outils météo*. Vous pouvez utiliser les boutons de jour et le curseur de temps pour définir l'heure exacte à laquelle les prévisions météorologiques seront affichées.

### Personnaliser les calques météo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *Plugin activé → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *Plugin activé → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Pour afficher les calques météo sur l'écran de la carte OsmAnd, vous devez utiliser le *menu Configurer la carte*. Allez dans le menu, trouvez l'élément *Météo* dans la liste (disponible uniquement lorsque le plugin est activé), et appuyez dessus.

Dans ce menu, vous pouvez modifier la **visibilité** et les [paramètres](#weather-settings) de chaque calque, sélectionner le type de courbes de niveau et télécharger les [prévisions météorologiques hors ligne sur 7 jours](#offline-forecast) (*uniquement disponible pour Android ici*).


### Paramètres météo {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Menu principal → Plugins → Météo → Paramètres*
- *Menu principal → Paramètres → Profil → Paramètres du plugin → Météo*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu principal → Paramètres → Profil → Plugins → Météo*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Il est important de décider dans quelles unités de mesure il vous est pratique de voir les [données météorologiques](#weather-layers) sur la carte et dans la section [Widgets météo](#weather-widgets) de l'écran. Vous pouvez choisir les unités de mesure appropriées pour chaque paramètre ou utiliser les valeurs par défaut (*iOS uniquement*). Dans la version iOS de l'application OsmAnd, vous pouvez également activer l'option de prévisions hors ligne pour éviter d'utiliser le trafic mobile pendant vos déplacements.

:::note
Dans la version iOS d'OsmAnd, vous pouvez modifier les unités de mesure et le niveau de transparence dans le menu qui s'ouvre après un appui long sur l'icône du calque de carte requis.
:::

### Calques météo {#weather-layers}

Toutes les données météorologiques sont présentées sous forme de calques de carte distincts. Pour voir les calques météorologiques sur la carte, vous devez dézoomer, ils ne sont disponibles qu'aux échelles de zoom 2-12. Les calques météorologiques utilisent des [palettes météorologiques](../personal/color-palette-schemes.md#weather) pour coloriser la carte, ces palettes peuvent être [modifiées](../personal/color-palette-schemes.md#edit-palette-file) si nécessaire.

| |
|------------|
| **Le calque de précipitations** affiche des informations sur les événements météorologiques lorsque l'eau sous différents états agrégés tombe du ciel au sol. Les précipitations sont la pluie, la neige, le grésil ou la grêle. L'échelle des précipitations est graduée en millimètres (ou pouces) d'eau qui tombe sur 1 mètre carré en 24 heures. 1 mm de pluie correspond à 1 litre d'eau par 1 mètre carré. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| La **température** exprime la perception quantitative du chaud et du froid. Elle est mesurée en degrés. Dans OsmAnd, vous pouvez choisir entre l'échelle Celsius et Fahrenheit. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| Le **vent** est le mouvement de l'air causé par le chauffage inégal de la Terre par le soleil et sa propre rotation. Les vents peuvent aller d'une légère brise à des catastrophes naturelles telles que les ouragans et les tornades. Dans OsmAnd, la vitesse du vent peut être affichée en mètres par seconde (m/s), kilomètres par heure (km/h), miles par heure (mph) et nœuds (kt). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| La **couverture nuageuse** est la fraction moyenne du ciel couverte par les nuages lorsqu'elle est observée depuis un endroit particulier. Elle est mesurée en %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| La **pression atmosphérique** est causée par le poids de l'air au-dessus du point de mesure. Elle diminue avec l'augmentation de l'altitude. La pression atmosphérique peut être affichée en hectopascals (hPa), millimètres de mercure (mmHg) et pouces de mercure (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| L'**animation du vent** comprend des représentations dynamiques montrant la direction et la vitesse du vent dans la région. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Combiner les cartes {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Pour obtenir des informations météorologiques complètes, vous pouvez utiliser les calques de carte séparément ou les combiner facilement. Des isolignes d'un type spécifique peuvent également être ajoutées au calque Météo. Il suffit d'appuyer sur le bouton *Calques* ou *Isolignes* à l'écran.


### Actions rapides pour les calques {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Pour basculer la visibilité des calques météorologiques, vous pouvez utiliser les boutons *Action rapide* sur l'écran de la carte. Les paramètres généraux d'affichage ou de masquage des calques se trouvent dans la [section Météo](#weather-forecast-screen) distincte du *Menu principal*. Dans l'article [Action rapide](../widgets/quick-action.md#configure-map), vous trouverez une liste des calques disponibles pour l'affichage. Si vous avez besoin d'un accès rapide à cette configuration de carte, utilisez l'outil *Bouton personnalisé*.

- Allez dans [Ajouter une action](../widgets/quick-action.md#custom-buttons) : *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Configurer la carte*.
- Ajoutez un ou plusieurs boutons QA pour modifier la visibilité d'un calque météorologique particulier.


## Prévisions hors ligne {#offline-forecast}

### Cache {#cache}

Lorsque l'onglet Météo est ouvert, sauf indication contraire, les informations météorologiques requises sont téléchargées depuis le réseau. Vous pouvez utiliser les [prévisions météorologiques](#download-forecast) préchargées sur vos appareils. Les informations météorologiques sont automatiquement mises en cache après le téléchargement et peuvent être utilisées hors ligne jusqu'à l'expiration des prévisions.

:::tip
Sur les appareils Android, vous pouvez vérifier quand les données météorologiques ont été téléchargées en appuyant sur le *widget Météo*. Le plugin de développement OsmAnd doit être activé.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Télécharger les prévisions {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Pour chaque pays, vous pouvez télécharger des **prévisions hors ligne** (jusqu'à 7 jours). Plus la date est proche de la date actuelle, plus elles seront précises. Si vous souhaitez utiliser les prévisions météorologiques hors ligne, vous devez télécharger les données météorologiques à l'avance.

Dans le menu de téléchargement des prévisions, vous pouvez obtenir des informations et définir des paramètres pour maintenir les données météorologiques à jour.

- **Créé** (*Android*) / **Mis à jour** (*iOS*). Indique la date de la dernière mise à jour.
- **Prochaine mise à jour** (*iOS*). Quand la prochaine mise à jour sera disponible.
- **Taille** (*Android*) / **Taille des mises à jour** (*iOS*). Indique la taille de toutes les mises à jour.
- Bouton **Mettre à jour** (*Android*) / **Mettre à jour maintenant** (*iOS*). Lorsqu'il est actif, permet de mettre à jour manuellement les données météorologiques sans attendre une mise à jour automatique.
- **Fréquence de mise à jour** (*iOS*). Peut être réglée sur 12 heures, 24 heures ou hebdomadaire.
- *Mettre à jour uniquement via Wi-Fi* (*iOS*). Activez cette option si vous ne souhaitez pas utiliser les données mobiles pour les téléchargements.
- Bouton **Supprimer** *corbeille* (*Android*) / **Supprimer les prévisions** (*iOS*). Permet de supprimer toutes les données de prévisions pour cette région.
- Bouton **Modifier** *crayon* (*Android*). Permet de renommer le fichier météo.

:::info
OsmAnd génère une nouvelle prévision toutes les 6 heures.
:::


## Widgets météo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

Les [widgets météo](../widgets/info-widgets.md#weather-widgets) tels que Température, Pression atmosphérique, Vent, Nuages et Précipitations affichent les données météorologiques actuelles pour le **point central sur la carte**.

- Les widgets météo ne sont affichés que lorsque l'[écran Météo](#weather-forecast-screen) est activé.
- Pour activer les widgets météo, sélectionnez l'élément de menu principal *Configurer l'écran*, le panneau sur lequel les placer et les widgets requis dans la liste.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : novembre 2024*