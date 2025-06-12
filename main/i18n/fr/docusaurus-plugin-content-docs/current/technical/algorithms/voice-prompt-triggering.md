---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Déclenchement des invites vocales de navigation {#navigation-voice-prompt-triggering}

                               
**(Compilé par Hardy 2013, retravaillé 2023-08)**
## Principe et paramètres associés {#principle-and-related-settings}
* Les invites sont déclenchées en fonction d'un seuil de **distance d'avance**, dérivé en convertissant un temps d'avance spécifié via la **_<Translate android="true" ids="default_speed_setting_title" />_** du profil. Pour les invites rapprochées, cette distance d'avance peut ensuite être ajustée en fonction de la vitesse réelle : augmentée pour garantir que l'annonce est déclenchée suffisamment tôt à grande vitesse, ou diminuée pour plus de précision à basse vitesse.
* La **_<Translate android="true" ids="default_speed_setting_title" />_** du profil est réglable par l'utilisateur, et sa modification affectera donc les distances de déclenchement des invites vocales.
*Note* : La _<Translate android="true" ids="default_speed_setting_title" />_ affecte également le temps de parcours calculé.
* Le timing des invites vocales peut également être ajusté via le paramètre **_<Translate android="true" ids="arrival_distance" />_**. Consultez la colonne 'Paramètre d'arrivée' ci-dessous pour voir quelles invites vocales seront affectées. La distance de déclenchement sera multipliée par le facteur suivant :

**<Translate android="true" ids="arrival_distance" />** | Multiplicateur de distance
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* De plus, il existe un **_Délai d'invite vocale_** global configurable par l'utilisateur (réglable dans le _plugin de développement OsmAnd_, _Invites vocales textuelles_, bouton 11.2). Ceci est particulièrement nécessaire pour le type de sortie _Audio d'appel téléphonique_, où nous émulons un appel vers un autoradio qui induit un certain délai, afin d'éviter que le début des invites ne soit coupé. (Toutes les distances annoncées dans les invites anticiperont tout _Délai d'invite vocale_.)
* Nous désactivons immédiatement les invites dès qu'elles font référence à des événements obsolètes, ou si votre direction de déplacement ne semble pas conforme à un itinéraire actuel.

## Vitesses par défaut du profil de base {#base-profile-default-speeds}
Bien que celles-ci puissent être ajustées par l'utilisateur, les valeurs par défaut sont :
* Conduite : 12,5 m/s (45 km/h)
* Cyclisme : 2,78 m/s (10 km/h)
* Marche : 1,11 m/s (4 km/h)
* Bateau : 1,39 m/s (5 km/h)
* Ski : 1,39 m/s (5 km/h)
* Avion : 40 m/s (144 km/h)

## Tableau de déclenchement {#trigger-table}

Les déclencheurs se trouvent [ici dans le code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Les valeurs correspondantes pour les paramètres par défaut d'OsmAnd sont :

Type d'invite | Temps d'avance [s] :<br/>Distance d'avance correspondante @ Vitesse par défaut [m] | Distance d'avance ajustée par la vitesse réelle ? | Réglable par le paramètre d'arrivée ? | Commentaire |
--- | --- | --- | --- | --- |
Tourner maintenant | **6,7 s / 3,2 s / 2 s :**<br/>Conduite : 83 m<br/>Cyclisme : 12(8) m<br/>Marche : 12(2) m | :heavy_check_mark: (Proportionnel à *vitesse réelle / Vitesse par défaut*) | :heavy_check_mark: | Temps d'avance (heuristique) = _max(8, sqrt(Vitesse par défaut * 3,6))_. La distance d'avance correspondante est arrondie à 12 m pour tenir compte de l'imprécision de la position. |
Tourner dans X m | **22 s :**<br/>Conduite : 275 m<br/>Cyclisme : 61 m<br/>Marche : 24 m | :heavy_check_mark: (Augmentation uniquement) |  | Ignoré si < 15 s avant le virage |
Préparez-vous à tourner dans X m | **115 s :**<br/>Conduite : 1438 m<br/>Cyclisme : 319 m<br/>Marche : - |  |  | Ignoré si < 150 m avant "Tourner dans", ignoré pour _Vitesse par défaut_ < 8 km/h |
Longue préparation pour tourner dans X m | **300 s :**<br/>Conduite : -<br/>Cyclisme : -<br/>Marche : - |  |  | Ignoré pour _Vitesse par défaut_ < 108 km/h |
Aller tout droit | **>300 s :**<br/>Conduite : 3750 m<br/>Cyclisme : 833 m<br/>Marche : 333 m | | | Joue après le calcul de l'itinéraire si aucune autre invite n'est due, ou après un virage si le prochain virage est à plus de _Longue préparation_ |
Arriver à destination ou intermédiaire | **5 s :**<br/>Conduite : 63 m<br/>Cyclisme : 14 m<br/>Marche : 6(12) m | |:heavy_check_mark: | Minimum 12 m |
Approche d'un point de passage / favori / POI | **60 s :**<br/>Conduite : 750 m<br/>Cyclisme : 167 m<br/>Marche : 67 m | :heavy_check_mark: (Augmentation uniquement) | :heavy_check_mark: | Limité à 1 point maximum à la fois |
Passage d'un point de passage / favori / POI | **15 s :**<br/>Conduite : 188 m<br/>Cyclisme : 42 m<br/>Marche : 17 m | :heavy_check_mark: (Augmentation uniquement) | :heavy_check_mark: | Limité à 3 points maximum à la fois |
Alarme standard | **12 s :**<br/>Conduite : 150 m<br/>Cyclisme : 33 m<br/>Marche : 13 m | :heavy_check_mark: (Augmentation uniquement) | :heavy_check_mark: |
Alarme rapprochée | **7 s :**<br/>Conduite : 88 m<br/>Cyclisme : 20 m<br/>Marche : 8 m | :heavy_check_mark: (Augmentation uniquement) | :heavy_check_mark: | Le _ralentissement du trafic_ utilise l'alarme _Passage_ pour l'invite d'approche, et filtre les doublons dans ce rayon |
Annonce hors itinéraire | **20 s :**<br/>Conduite : 250 m<br/>Cyclisme : 56 m<br/>Marche : 22 m | | :heavy_check_mark: | Peut être désactivé |
Signal GPS perdu | **20 s** | | | Est joué après que le signal GPS a été perdu pendant >= 20 s et que cela n'a pas été causé par une action de l'utilisateur. |