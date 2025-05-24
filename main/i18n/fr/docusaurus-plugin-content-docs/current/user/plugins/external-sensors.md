---
source-hash: e2062ab5afd4af6d729a2cfca37742ecad03ffd670f06c2c5c4655d5c2277911 
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


## Aperçu

:::info Fonctionnalité payante
Le plugin Capteurs externes est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.  
:::

Le **plugin Capteurs externes** vous permet de lire et d'enregistrer des données provenant de [capteurs externes sans fil](https://en.wikipedia.org/wiki/Wireless_sensor_network) fonctionnant sur les technologies [**ANT+**](https://en.wikipedia.org/wiki/ANT_(network)) et [**BLE (Bluetooth Low Energy)**](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) et d'afficher ces données à l'aide de [widgets](#widgets) dans l'application OsmAnd. Ce réseau géré est capable de collecter, transmettre et stocker des données de capteurs. Les *iPhones et iPads* ne disposent pas du matériel nécessaire pour recevoir les signaux ANT+.

Le plugin Capteurs externes d'OsmAnd accède aux capteurs externes et peut lire des données telles que la *fréquence cardiaque*, la *puissance du vélo*, la *cadence du vélo*, la *vitesse du vélo*, la *distance du vélo* et la *température*. Pour que le plugin fonctionne correctement, assurez-vous que votre appareil [est connecté](#pair-new-sensor) aux capteurs appropriés.


## Paramètres de configuration requis

Pour commencer à utiliser les données des capteurs externes, vous devez effectuer les réglages suivants :  

1. [Achetez](../purchases/) un **abonnement OsmAnd Pro**.  
2. [Activez](../plugins/#enable--disable) le plugin Capteurs externes dans la section Plugins du *Menu principal*.
3. **Activez** le Bluetooth sur votre appareil pour connecter les **capteurs BLE** externes.
4. [Configurez](#sensor-settings) les **paramètres des capteurs**.
5. [Ajoutez](#widgets) les **widgets Capteurs externes** à l'écran (facultatif).
6. [Utilisez les conseils](https://www.thisisant.com/consumer/ant-101/ant-in-phones) pour la **connexion ANT+** afin de configurer ces types de capteurs.
7. [Utilisez](#trip-recording) le **plugin Enregistrement de trajet** pour enregistrer les données des capteurs.


### Associer un nouveau capteur

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Utilisez le bouton *Associer un nouveau capteur* pour connecter de nouveaux capteurs.  

- Vous devez activer le Bluetooth pour rechercher des capteurs. Si votre Bluetooth est désactivé, l'application vous invitera à *Ouvrir les paramètres* sur votre appareil.

- Pour ajouter de nouveaux capteurs, appuyez sur + pour celui requis dans la liste des capteurs trouvés.

- Une notification contextuelle s'affiche lorsqu'un capteur associé est connecté ou déconnecté.  
- Tous les appareils ne prennent pas en charge ANT+ (Android uniquement). Vous pouvez vérifier si votre appareil fonctionne avec ANT+ en allant [ici](https://www.thisisant.com/consumer/ant-101/ant-in-phones).

- La puissance du vélo sous Android est uniquement Ant+.

- **Il n'y a pas de puissance de vélo sous iOS** car les capteurs Ant+ ne sont pas pris en charge.


## Paramètres des capteurs

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Utilisez l'un des chemins suivants pour ouvrir les paramètres des capteurs :

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Appareil disponible → Paramètres*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Appareil disponible → Paramètres*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Utilisez l'un des chemins suivants pour ouvrir les paramètres des capteurs :

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

Avec le plugin pour chaque capteur externe disponible pour l'application OsmAnd, vous pouvez utiliser ces paramètres :  

1. Tous les capteurs précédemment ajoutés sont divisés en deux listes : **Connecté** et **Déconnecté**.
2. Chaque capteur de la liste dispose d'un menu avec des paramètres :
    - **Déconnecter** ou **Connecter** le capteur, en fonction de son état actuel.
    - **Paramètres**. Ouvre un écran de capteur séparé avec des informations supplémentaires sur le type de capteur, le niveau de batterie, les données reçues et les paramètres pour renommer, *oublier le capteur* et spécifier la circonférence de la roue. L'écran du capteur peut être ouvert simplement en appuyant sur le champ avec le nom du capteur dans la liste.
    - **Renommer**. Vous permet de définir votre nom pour le capteur.
    - **Oublier**. Le capteur sera supprimé de la liste mais pourra être à nouveau associé.

- Lorsque le niveau de batterie du capteur associé devient inférieur à 15 %, une notification contextuelle apparaît à l'écran.


## Enregistrement de trajet

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)  

</TabItem>

</Tabs>

Les données des capteurs externes connectés peuvent être ajoutées au fichier GPX à l'aide du [plugin Enregistrement de trajet](../plugins/trip-recording.md#recording-settings).  

- Les paramètres des capteurs ne sont disponibles que si le plugin Capteurs externes est activé.
- Pour utiliser les données des capteurs externes, allez à *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
- Une liste des capteurs disponibles pour chaque type de données est toujours disponible, qu'un capteur soit connecté ou non.
- Si aucun type de capteur n'est associé, utilisez le bouton [Associer un nouveau capteur](#pair-new-sensor) dans le menu *Paramètres* du plugin Enregistrement de trajet.
- OsmAnd enregistre les données des capteurs sélectionnés dans la [trace](../plugins/trip-recording.md#recorded-gpx-file) pendant l'enregistrement d'un trajet.

:::note
OsmAnd utilise l'[**enregistrement de trace**](../plugins/trip-recording.md#recorded-gpx-file) avec de tels *noms de balises* pour les capteurs externes, avec lesquels votre fichier peut être facilement lu par les applications sportives que vous utilisez. Par exemple, Strava ou Runkeeper.
:::


### Analyse des données

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Les données des capteurs externes peuvent être transmises à l'appareil et affichées dans OsmAnd pendant le trajet comme informations supplémentaires. Si vous souhaitez analyser ces informations, vous devez enregistrer le trajet, et seulement après l'avoir enregistré, dans le *Menu contextuel de la trace → Analyser sur la carte*, des éléments supplémentaires pour les données enregistrées apparaissent.  

OsmAnd vous permet de sélectionner un 2ème axe pour l'analyse des données : *Fréquence cardiaque*, *Vitesse*, *Cadence*, *Puissance du vélo* et *Température*. La *Distance* et la *Batterie* ne sont pas utilisées dans [Analyser la trace sur la carte](../map/tracks/index.md#analyze-track-on-map).


## Widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external_sens_widg_2_ios.png)  

</TabItem>

</Tabs>

Le [widget Capteurs externes](../widgets/info-widgets.md#external-sensors-widgets) est automatiquement ajouté à la liste des widgets lorsque vous activez le plugin Capteurs externes. Avant de commencer votre trajet, assurez-vous que les widgets sont à l'écran, et si ce n'est pas le cas, ajoutez-les à l'aide du menu [Configurer l'écran](../widgets/configure-screen.md). Les widgets Capteurs externes vous aident à suivre les données de vos capteurs externes en temps réel.  

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>**. Le capteur de fréquence cardiaque peut transmettre votre fréquence cardiaque en temps réel. C'est utile pour l'entraînement cycliste lorsque vous souhaitez suivre votre fréquence cardiaque pour optimiser vos efforts d'entraînement.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android uniquement*). Les capteurs de puissance de votre vélo mesurent la puissance que vous exercez lorsque vous pédalez. Cela vous permet d'analyser et d'optimiser vos entraînements pour améliorer l'efficacité et les performances.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>**. La cadence est le nombre de tours de pédale par minute. Les capteurs de cadence vous aident à maintenir une vitesse de pédalage optimale pour un cyclisme efficace.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>**. Les capteurs de vitesse fournissent des informations sur votre vitesse actuelle pendant que vous faites du vélo.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>**. Les capteurs de distance mesurent la distance que vous parcourez lorsque vous conduisez.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>**. Le widget affiche la température ambiante, ce qui peut être très utile si vous ne voulez pas surchauffer ou geler sur votre vélo ou votre moto.

### Paramètres du widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="external_sensor_widgets"/> → ⚙️ ou <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → Capteur externe → Paramètres*

 ![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

Par défaut, le widget affiche le premier capteur de ce type actuellement connecté. Si vous souhaitez en choisir un autre, vous devez le sélectionner manuellement dans la liste des capteurs connectés.


## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en novembre 2024*

