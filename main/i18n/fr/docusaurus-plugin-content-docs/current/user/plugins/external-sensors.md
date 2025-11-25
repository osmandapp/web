---
source-hash: 98ef3def7d982e4b280e3c2f1201d4c80b83ec88f33f9ec1799e20750ea2d497
sidebar_position: 5
title:  Capteurs externes
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
Le plugin Capteurs externes est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.  
:::

Le **plugin Capteurs externes** vous permet de lire et d'enregistrer des données provenant de [capteurs externes sans fil](https://en.wikipedia.org/wiki/Wireless_sensor_network) fonctionnant avec les technologies [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) et [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) et d'afficher ces données à l'aide de [widgets](#widgets) dans l'application OsmAnd. Ce réseau géré est capable de collecter, transmettre et stocker les données des capteurs.

> *NOTE : Les iPhones et iPads ne prennent pas en charge ANT+ en raison de limitations matérielles.*

Le **plugin Capteurs externes** accède aux capteurs externes et peut lire des données telles que :

- *Fréquence cardiaque*
- *Puissance du vélo*
- *Cadence du vélo*
- *Vitesse du vélo*
- *Distance du vélo*
- *Température*

Pour utiliser le plugin, assurez-vous que votre appareil est [compatible](#pair-new-sensor), que le plugin est [activé](../plugins/#enable--disable) et que vos capteurs externes sont connectés via Bluetooth (BLE).


## Paramètres de configuration requis {#required-setup-parameters}

Pour commencer à utiliser les données des capteurs externes, suivez ces étapes :

1. [Achetez](../purchases/) un **abonnement OsmAnd Pro** pour débloquer le plugin Capteurs externes.
2. [Activez](../plugins/#enable--disable) le plugin dans *Menu → Plugins*.
3. **Activez le Bluetooth** sur votre appareil pour permettre la connexion avec les **capteurs BLE**.
4. [Jumelez et configurez](#pair-new-sensor) les capteurs externes via le menu du plugin.
5. (Facultatif) [Ajoutez](#widgets) des **widgets de capteurs externes** à votre écran de carte pour afficher des données en temps réel telles que la fréquence cardiaque, la cadence ou le niveau de batterie.
6. (Facultatif) Utilisez le [plugin Enregistrement de trajet](../plugins/trip-recording.md) pour enregistrer les données des capteurs dans les traces GPX.
7. (Facultatif, Android uniquement) Suivez [ces conseils](https://www.thisisant.com/consumer/ant-101/ant-in-phones) pour connecter des capteurs ANT+ si votre appareil les prend en charge.


### Jumeler un nouveau capteur {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Pour jumeler un nouveau capteur, suivez ces étapes :

1. Assurez-vous que le **Bluetooth est activé** sur votre appareil.  
2. Allez dans *Menu → Plugins → Capteurs externes → Paramètres*.  
3. Appuyez sur **Jumeler un nouveau capteur**.
4. OsmAnd recherchera les capteurs **Bluetooth LE** ou **ANT+** disponibles (selon votre plateforme).
5. Appuyez sur le bouton **+** à côté du capteur que vous souhaitez jumeler.
6. Une fois connecté, le capteur apparaîtra dans la liste des **Appareils connectés**.

***Remarques :***

- Sur **iOS**, seuls les capteurs **Bluetooth Low Energy (BLE)** sont pris en charge en raison de limitations matérielles. Les capteurs ANT+ ne sont pas disponibles.
- Sur **Android**, les capteurs BLE et ANT+ peuvent être pris en charge en fonction de votre appareil. Consultez le [guide de compatibilité ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) pour plus de détails.
- Une **notification contextuelle** apparaîtra chaque fois qu'un capteur se connecte ou se déconnecte.
- Les **capteurs de puissance pour vélo** sont disponibles uniquement sur Android via ANT+.


## Paramètres du capteur {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Utilisez l'un des chemins suivants pour ouvrir les paramètres du capteur :

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Appareil disponible → Paramètres*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Appareil disponible → Paramètres*

![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Utilisez l'un des chemins suivants pour ouvrir les paramètres du capteur :

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Chaque capteur externe jumelé listé dans OsmAnd a son propre écran de configuration avec les options suivantes :

- **Connecter / Déconnecter** – basculer l'état de la connexion.
- **Renommer** – attribuer un nom personnalisé au capteur.
- **Oublier le capteur** – supprimer le capteur de la liste (peut être re-jumelé plus tard).
- **Paramètres** – ouvrir l'écran des détails du capteur (type de capteur, valeurs, niveau de batterie, réglage de la circonférence de la roue).

***Remarques :***

- Sur **iOS**, vous pouvez afficher le **niveau de batterie** des capteurs BLE connectés directement dans un [widget](#widgets) de carte. Pour l'activer, allez dans : *Menu → Configurer l'écran → Choisir le panneau → Ajouter un widget → Capteur externe → Paramètres → Afficher → Niveau de batterie*
- Une notification contextuelle apparaît lorsque le **niveau de batterie d'un capteur jumelé tombe en dessous de 15 %**.


## Enregistrement de trajet {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![Plugin Capteurs externes](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Pour enregistrer les données des capteurs à l'aide du [plugin Enregistrement de trajet](../plugins/trip-recording.md#recording-settings) pendant votre voyage :

1. Assurez-vous que le **plugin Capteurs externes** est activé.
2. Allez dans *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Sélectionnez les types de capteurs que vous souhaitez enregistrer (par ex. cadence, fréquence cardiaque, vitesse).
4. Commencez à enregistrer votre trajet. OsmAnd sauvegardera les données des capteurs sélectionnés dans la trace GPX.

***Remarques :***

- La liste des types de capteurs disponibles est affichée même si aucun capteur n'est connecté.
- Si aucun capteur n'est encore jumelé, utilisez le bouton [Jumeler un nouveau capteur](#pair-new-sensor) dans les paramètres des plugins.
- Les données de niveau de batterie ne sont **pas** enregistrées dans les fichiers GPX et ne sont pas disponibles pour l'analyse sur la carte.

:::note Compatibilité des formats
OsmAnd utilise l'[enregistrement de trace](../plugins/trip-recording.md#recorded-gpx-file) pour intégrer les données des capteurs dans les fichiers GPX. Ce format est compatible avec de nombreuses applications de sport et d'entraînement (par ex. Strava, Runkeeper).
:::


### Analyse des données {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![Capteurs externes](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Après avoir enregistré votre trajet à l'aide du [plugin Enregistrement de trajet](../plugins/trip-recording.md#recording-settings), vous pouvez examiner les données des capteurs dans l'interface d'analyse de trace.

Pour analyser les données :

1. Terminez l'enregistrement de votre trajet.
2. Ouvrez la trace enregistrée depuis *Mes lieux → Traces* ou appuyez sur la trace sur la carte.
3. Sélectionnez *Options → Analyser sur la carte* dans le menu contextuel de la trace.

Cela affichera des graphiques pour vos données enregistrées : *Fréquence cardiaque*, *Vitesse*, *Cadence*, *Puissance du vélo* et *Température*

> *Le niveau de batterie et la distance ne sont pas disponibles dans la fonctionnalité [Analyser sur la carte](../map/tracks/index.md#analyze-track-on-map).*


## Widgets {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="external_sensor_widgets"/>*

![Widgets Capteurs externes Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![Widgets Capteurs externes Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![Widgets Capteurs externes iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![Widgets Capteurs externes iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)  

</TabItem>

</Tabs>

Le [widget Capteurs externes](../widgets/info-widgets.md#external-sensors-widgets) vous permet d'afficher les données en direct de vos capteurs connectés directement sur l'écran de la carte.

Avant de commencer votre trajet :

- Assurez-vous que le plugin Capteurs externes est activé.
- Ouvrez *Configurer l'écran* et ajoutez les widgets nécessaires au panneau approprié.

Types de widgets pris en charge :

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – affiche la fréquence cardiaque en temps réel d'un moniteur jumelé.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android uniquement*) – affiche la puissance de pédalage actuelle en watts.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – affiche le nombre de tours de pédale par minute.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – vitesse de cyclisme actuelle.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – distance totale mesurée par le capteur.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – température ambiante actuelle.
7. **Niveau de batterie** – pourcentage de batterie restante dans un capteur BLE connecté, activez-le dans les **Paramètres du capteur**.

**Remarque :** Si un capteur se déconnecte temporairement, appuyez sur son widget sur la carte pour tenter immédiatement une reconnexion — pas besoin d'ouvrir le menu Capteurs externes.


### Paramètres du widget {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="external_sensor_widgets"/> → Choisir un widget → <Translate android="true" ids="shared_string_settings"/>*

![Paramètres des widgets Capteurs externes Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → Capteur externe → Choisir un widget → Paramètres*

![Paramètres des widgets Capteurs externes iOS](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Par défaut, le widget affiche le premier capteur de ce type actuellement connecté. Si vous souhaitez utiliser un capteur spécifique, appuyez sur **Source des données** et choisissez dans la liste des capteurs connectés.

Sur **iOS**, vous pouvez choisir la valeur à afficher dans le widget :  

- **Données du capteur** (par ex. cadence, vitesse).
- **Niveau de batterie** – pourcentage de batterie en temps réel du capteur sélectionné.

> *Ceci est utile lorsque vous souhaitez surveiller la charge de la batterie lors de longs trajets pour éviter les déconnexions.*


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)