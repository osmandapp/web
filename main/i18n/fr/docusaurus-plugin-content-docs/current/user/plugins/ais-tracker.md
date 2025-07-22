---
source-hash: 56e675ee7bba3e19ed4b22cb159f2939d58b0959b64b16aa30eb1a5eaeb05b9d
sidebar_position: 2
title:  Suivi des navires AIS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Aperçu {#overview}

Le plugin **Suivi des navires AIS** affiche les positions du [Système d'Identification Automatique (AIS)](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_automatique) et des informations détaillées sur les navires à proximité. Les données AIS sont reçues via une connexion réseau à partir d'un récepteur AIS externe.

:::caution AVIS DE NON-RESPONSABILITÉ
**Ce plugin est un projet amateur et n'est pas conçu pour la fiabilité ou la précision. NE VOUS FIEZ PAS à ce logiciel pour la navigation ou la sécurité des personnes.**
:::


## Paramètres de configuration requis {#required-setup-parameters}

La possibilité d'utiliser les cartes en ligne est automatiquement activée dans la version iOS d'OsmAnd. Pour afficher les cartes en ligne dans Android, vous devez effectuer les réglages suivants :

1. [Activer](../plugins/index.md#enable--disable) le plugin **Suivi des navires AIS** dans le *Menu principal → Plugins → Suivi des navires AIS*.
2. Configurer les [paramètres AIS](../map/raster-maps.md#select-raster-maps)
3. Configurer une **connexion au serveur AIS** ou connecter un **récepteur AIS externe**.
4. Vérifier que les navires sont affichés sur la carte OsmAnd.

## Navires sur la carte {#vessels-on-the-map}

L'AIS fonctionne sur les *fréquences VHF* (161,975 MHz et 162,025 MHz) et a une portée de signal limitée en raison de la propagation en ligne de vue.

***Portée de réception AIS typique :***

- 15–20 milles nautiques (28–37 km)
- Dépend de la hauteur de l'antenne, des conditions environnementales et des obstacles

***Affichage AIS sur la carte :***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suivi des navires AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Lorsqu'il est correctement configuré, les positions des navires apparaissent sur la carte. Principales caractéristiques :

- Les navires se déplacent en fonction de la vitesse et du cap en temps réel.
- De nouveaux navires entrent et sortent de la zone visible de manière dynamique.
- Taper sur un navire ouvre des informations détaillées.


### Informations sur les navires AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Suivi des navires AIS](@site/static/img/plugins/ais/ais_menu.png)  
![Suivi des navires AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

Les navires AIS transmettent trois types de données :

1. Informations statiques (données inchangées).  
    *Envoyées toutes les **6 minutes** ou sur demande.*

    - **Nom du navire** (*si défini*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Identifiant unique à 9 chiffres du navire*)
    - **Numéro OMI** (*si disponible*)  
    - **Indicatif d'appel**  
    - **Type de navire** (*par exemple, Cargo, Passager, Navire de pêche*)  
    - **Dimensions du navire** (*Longueur et largeur*)  
    - **Position de l'antenne AIS** (*Relative à la coque du navire*)  

2. Informations dynamiques (données en temps réel).  
    *Envoyées à différents intervalles selon la vitesse et les manœuvres.*

    - **Coordonnées du navire (Latitude et Longitude)**  
    - **Cap sur le fond (COG)**  
    - **Vitesse sur le fond (SOG)**  
    - **Cap** (*Direction vers laquelle pointe la proue*)
    - **Statut du navire** (*En route, Ancré, Manœuvrant, etc.*)  
    - **Taux de giration (ROT)** (*Vitesse de changement de cap*)  
    - **Heure de la dernière mise à jour**  

3. Informations sur le voyage (définies manuellement par l'équipage).  
    *Envoyées toutes les **6 minutes**, définies manuellement par l'équipage*

    - **Port de destination**
    - **Heure d'arrivée estimée (ETA)**  
    - **Tirant d'eau** (*Profondeur du navire sous la surface de l'eau*)  
    - **Type de cargaison** (*si transmis*)
    - **Nombre de personnes à bord** (*facultatif*)  

### Symboles et légendes AIS {#ais-symbols-and-legends}

[Directives pour la présentation des symboles AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symboles             | Description   |
|---------------------|---------------|
| | |
| **Symboles des types de navires** |    |
| *Triangle vert*    | Navire cargo    |
| *Triangle bleu*     | Navire à passagers |
| *Triangle noir*    | Navire de pêche |
| *Triangle jaune*   | Remorqueur       |
| *Triangle rouge*      | Pétrolier        |
| *Triangle blanc*    | Navire militaire |
| *Triangle rouge clignotant* | Navire en détresse |
| | |
| **Symboles des aides à la navigation** |    |
| *Bouée verte*              | Marqueur tribord (côté droit du chenal) |
| *Bouée rouge*                | Marqueur bâbord (côté gauche du chenal) |
| *Symbole d'ancre*           | Zone de mouillage |
| *Symbole de navire (SS)*        | Ferry ou terminal passagers |
| *Symbole de grue portuaire*       | Port de marchandises |
| *Cercle noir*            | Plateforme offshore |
| | |
| **Indicateurs de statut** |    |
| *Triangle plein*  | Navire en mouvement |
| *Triangle creux* | Ancré ou amarré |
| *Flèche rotative*  | En cours de manœuvre |
| *Icône rouge clignotante* | Alerte d'urgence |
| *Point d'exclamation orange* | Message de sécurité AIS |
| | |
| **Indicateurs de route et de vitesse** |    |
| *Ligne bleue fine*  | Route prévue |
| *Ligne pointillée*     | Trace passée |
| *Icône d'horloge*      | Heure d'arrivée estimée (ETA) |
| *Icône de vague*       | Vitesse sur l'eau |

## Paramètres du plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Paramètres AIS](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

Le plugin *Suivi des navires AIS* offre divers paramètres pour personnaliser la navigation et l'interaction pour les utilisateurs handicapés. Ces paramètres sont appliqués à tous les [profils](../personal/profiles.md) dans OsmAnd.

| Paramètre |  Description  | Exemple  |
|---------|---------------|----------|
| | | |
| **Paramètres d'adresse IP** | | |
| Protocole   | Choisir le protocole pour recevoir les données AIS | `UDP/TCP` |
| Adresse IP | Définir l'IP de la source de données AIS (si TCP est utilisé) | `192.168.200.16` |
| Port TCP   | Définir le numéro de port TCP pour les données AIS | `4001` |
| Port UDP   | Définir le port UDP pour la réception AIS d'OsmAnd  | `10110` |
| | | |
| **Délai d'attente de réception du signal AIS** | |  |
| Délai d'attente pour les objets AIS perdus     | Les navires disparaissent si aucun signal n'est reçu pendant un temps défini | `3 - 20 min` |
| Délai d'attente pour la visibilité des navires      | Les icônes des navires changeront d'état si aucun signal n'est reçu | `2 - 15 min / Désactivé` |
| | | |
| **Alertes de point de rapprochement le plus proche (CPA)** | | |
| Temps d'avertissement CPA | Le navire est marqué en rouge si le temps jusqu'au CPA est inférieur à cette limite | `1 - 60 min / Désactivé` |
| Distance d'avertissement CPA | Le navire est marqué en rouge si la distance jusqu'au CPA est inférieure à cette limite | `0.02 - 2 milles nautiques` |


### Mode simulation AIS {#ais-simulation-mode}

> *Vous pouvez simuler les positions des navires AIS à l'aide du [plugin de développement OsmAnd](../plugins/development.md).*

1. **Télécharger les fichiers texte de données AIS** :

    - [Test AIS 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [Test AIS 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Unique 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Charger les données AIS dans OsmAnd**  
Ouvrez *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* et sélectionnez l'un des fichiers téléchargés.

3. **Afficher les navires AIS sur la carte**  
Les icônes des navires apparaîtront en fonction des données simulées. Appuyez sur l'icône du navire pour afficher des informations détaillées.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)
- [Plugin nautique](../../user/plugins/nautical-charts.md)

> *Dernière mise à jour : mars 2025*