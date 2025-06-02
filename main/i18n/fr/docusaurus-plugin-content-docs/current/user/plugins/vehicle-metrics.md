---
source-hash: 819f6897928963a96db39b792e9d9cceb71bb66df91ed645efd5deb1116c4348
sidebar_position: 16
title:  Métriques du véhicule
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

<InfoIncompleteArticle/>

## Aperçu {#overview}

:::info Fonctionnalité payante
Le plugin Métriques du véhicule est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

<InfoAndroidOnly/>

Le **plugin Métriques du véhicule** permet la surveillance en temps réel des données du véhicule via le protocole OBD-II. Les utilisateurs peuvent suivre les métriques essentielles telles que les performances du moteur, l'efficacité énergétique et la vitesse, ce qui permet une maintenance et un dépannage proactifs du véhicule.

Les scanners OBD-II font partie intégrante des diagnostics automobiles modernes. Grâce à la diffusion de données en temps réel, les utilisateurs obtiennent des informations instantanées sur les systèmes du véhicule, ce qui facilite la maintenance préventive et réduit les coûts de réparation. Ces outils sont essentiels pour un usage personnel et les services automobiles professionnels.

![Paramètres OBD](@site/static/img/plugins/obd/obd_overview_2.png)


## Paramètres de configuration requis {#required-setup-parameters}

Pour utiliser les données d'un scanner OBD-II :

1. [Achetez](../purchases/) un **abonnement OsmAnd Pro**. (*Vitesse du véhicule* et *Régime moteur* sont gratuits.)
2. [Activez](../plugins/index.md#enable--disable) le plugin Métriques du véhicule dans la section Plugins du *Menu principal*.
3. **Activez** le Bluetooth sur votre appareil.
4. [Connectez](#pair-odb-ii-scanner) le scanner OBD-II au port de votre véhicule.
5. [Configurez](#scanner-settings) les **paramètres du scanner**.
6. [Ajoutez](#widgets) des **widgets Métriques du véhicule** pour afficher les données à l'écran (facultatif).
7. [Utilisez](#trip-recording) le **plugin Enregistrement de trajet** pour enregistrer les données du véhicule.


### Coupler le scanner ODB-II {#pair-odb-ii-scanner}

|  |  |
|--|--|
|![Connexion OBD](@site/static/img/plugins/obd/obd_connect.png)|![Connexion OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

Connectez le scanner au port de votre véhicule et couplez-le via l'application :

- Accédez à *Menu → Plugins → Métriques du véhicule → Paramètres → Connecter* ou **+**.
- Si Métriques du véhicule se trouve dans le *Menu principal* : *Menu → Métriques du véhicule → Paramètres → Connecter* ou **+**.

Choisissez votre appareil OBD-II dans la liste et établissez la connexion.


## Paramètres du scanner {#scanner-settings}

*Menu → Plugins → Métriques du véhicule → OBD → menu à trois points*

|  |  |
|--|--|
|![Paramètres OBD](@site/static/img/plugins/obd/obd_settings.png)|![Paramètres OBD](@site/static/img/plugins/obd/obd_settings_1.png)|

- **Connecter / Déconnecter**. Établit ou met fin à la connexion avec le capteur OBD-II.
- **Paramètres**. Ouvre l'écran des paramètres OBD-II, permettant la gestion de la connexion et l'accès aux paramètres disponibles du véhicule.
- **Renommer**. Vous permet d'attribuer un nom personnalisé au capteur pour une identification plus facile.
- **Oublier**. Supprime le capteur OBD-II précédemment couplé de la liste, nécessitant un nouveau couplage si nécessaire ultérieurement.


## Liste des métriques {#metrics-list}

Les métriques sont classées pour plus de clarté. Les outils de diagnostic avancés permettent une maintenance préventive en interprétant ces paramètres :

*Température :*

- **Température d'admission**. Affiche la température de l'air entrant dans le collecteur d'admission.
- **Température ambiante**. Surveille les conditions externes.
- **Température du liquide de refroidissement**. Suit l'efficacité du refroidissement du moteur.
- **Température de l'huile moteur**. Affiche l'état de l'huile pendant le fonctionnement.

*Moteur :*

- **Régime moteur**. Surveille les tours par minute (tr/min) du moteur.
- **Durée de fonctionnement du moteur**. Suit la durée de fonctionnement du moteur.
- **Charge moteur calculée**. Indique le pourcentage de charge de travail du moteur.

*Carburant :*

- **Pression de carburant**. Indique la pression du système de carburant.
- **Consommation de carburant**. Calcule la consommation de carburant du véhicule.
- **Carburant restant**. Indique le niveau de carburant dans le véhicule.

*Autre :*

- **Niveau de batterie**. Indique le niveau de tension de la batterie du véhicule.
- **Vitesse du véhicule**. Affiche les données du capteur de vitesse du véhicule (VSS).
- **Position du papillon**. Détermine l'admission d'air du moteur via l'angle de la plaque du papillon.
  **VIN**. Affiche le numéro d'identification à 17 caractères du véhicule.


## Enregistrement de trajet {#trip-recording}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Enregistrement OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Enregistrement OBD](@site/static/img/plugins/obd/obd_recording_1.png)|

Pour inclure les données OBD-II dans un fichier GPX, vous devez sélectionner les paramètres souhaités pour l'enregistrement à l'aide du [plugin Enregistrement de trajet](../plugins/trip-recording.md#recording-settings). Cela vous permet d'analyser les métriques du véhicule parallèlement aux données de votre trajet.

#### Balises {#tags}

OsmAnd applique des noms de balises personnalisés pour les métriques du véhicule dans le [fichier GPX](../plugins/trip-recording.md#recorded-gpx-file). Par exemple :

- `vm_eotemp` : Température de l'huile moteur.
- `vm_fpress` : Pression de carburant.
- `vm_espeed` : Régime moteur.

Ces balises facilitent l'identification et l'utilisation de données spécifiques du véhicule lors de l'examen du fichier GPX enregistré.


## Widgets {#widgets}

*Menu → Configurer l'écran → Widgets → Choisir un panneau → Métriques du véhicule*

| | |
|--|--|
|![Paramètres OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Paramètres OBD](@site/static/img/plugins/obd/obd_widget.png)|

Les [widgets Métriques du véhicule](../widgets/info-widgets.md#vehicle-metrics-widgets) sont automatiquement inclus lorsque vous activez le plugin. S'ils ne sont pas visibles, vous pouvez les ajouter manuellement via le menu [Configurer l'écran](../widgets/configure-screen.md).

### Paramètres du widget {#widget-settings}

Les widgets affichent les données clés de votre appareil OBD-II connecté en temps réel, telles que la vitesse, les métriques du moteur et la consommation de carburant. Assurez-vous qu'ils sont visibles avant de commencer votre trajet pour suivre les métriques en toute transparence.

Certains widgets offrent des options de mode d'affichage :

- **Instantané**. Affiche les données en temps réel pour la métrique sélectionnée.
- **Moyenne**. Affiche les valeurs moyennes sur un intervalle de temps configurable (15 secondes à 60 minutes).


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en décembre 2024*