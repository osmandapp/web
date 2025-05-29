---
source-hash: 5304abca3ba7c1e12ed171d07bbaf4e3c805697c3ee2214977a927d3a7f755cc
sidebar_position: 3
title: Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Calcul d'itinéraire {#route-calculation}

### Le calcul d'itinéraire est lent {#route-calculation-is-slow}

*Android*. OsmAnd utilise deux **moteurs de routage hors ligne** différents : un *moteur basé sur Java* et un *moteur natif (C++)*.

- Le *moteur basé sur Java* est utilisé en [Mode sécurisé](../plugins/development.md#safe), mais il est environ 10 fois plus lent que le moteur natif. Il a également des limitations de mémoire strictes, ce qui peut entraîner des erreurs telles que *Pas assez de mémoire pour calculer*. Si vous rencontrez ce problème, accédez à *Plugins → Développement OsmAnd → Paramètres →* [*Mode sécurisé*](../plugins/development.md#safe) et assurez-vous que cette option est désactivée.
- Le *moteur natif (C++)* offre de meilleures performances, mais son efficacité dépend de la mémoire et des capacités du processeur de votre appareil. Généralement, le routage natif fonctionne bien pour les itinéraires de moins de 300 km, avec des temps de calcul d'itinéraire allant de 15 secondes à 4 minutes. Si le processus prend plus de 4 minutes, il est conseillé de l'arrêter, car l'application pourrait planter.


### Comment calculer des itinéraires de plus de 250 km ? {#how-to-calculate-routes-longer-than-250km}

1. Si l'application n'affiche pas d'itinéraire après 7 à 8 minutes de calcul, envisagez de [placer des points de passage](../navigation/setup/route-navigation.md#route-recalculation) (choisissez par exemple des endroits sur les autoroutes). 3 à 4 points de passage suffiront pour calculer même des itinéraires de 1000 km.

2. Pour les appareils haut de gamme, vous pouvez augmenter la mémoire jusqu'à 512 Mo ou 1024 Mo - [Mémoire allouée aux appareils](../plugins/development.md#memory-allocated-for-routing).

3. Pour la version Android, vous pouvez créer un profil de navigation avec routage en ligne ou tiers (BRouter). En savoir plus [ici](../navigation/routing/brouter.md).

### Calcul d'itinéraires de 50 km pour les piétons {#calculation-of-50-km-routes-for-pedestrians}

Si vous utilisez le profil **Marche** dans OsmAnd, l'application peut planter lors du calcul d'itinéraires de plus de 50 km. Ce problème se produit spécifiquement lorsque le [**Routage standard A***](../navigation/guidance/navigation-settings.md#development-settings) est sélectionné dans les paramètres de navigation. Plusieurs facteurs peuvent contribuer à ce problème :

- La longueur de l'itinéraire dépasse 50 km.
- Le nombre de points directs sur l'itinéraire est supérieur à 1 million.
- Vous utilisez un appareil mobile pour calculer l'itinéraire, ce qui n'est pas recommandé pour des itinéraires de cette longueur. Envisagez d'utiliser la version web pour de meilleures performances.

Pour éviter les plantages avec des itinéraires de distances similaires, vous pouvez passer à d'autres types de profils comme **Vélo**.


## L'itinéraire calculé ne semble pas correct {#the-calculated-route-does-not-seem-correct}

Pour identifier les problèmes d'itinéraires incorrects ou sous-optimaux, veuillez ouvrir une nouvelle publication dans [Discussions Github](https://github.com/osmandapp/OsmAnd/discussions) ou [Problème Github](https://github.com/osmandapp/Osmand/issues) et spécifier le plus précisément possible les informations suivantes :

- Quelle version d'OsmAnd utilisez-vous, sur quel appareil ?
- Utilisez-vous les cartes hors ligne proposées dans l'application OsmAnd pour le téléchargement, ou des cartes en ligne (tuiles / raster) ?
- Si vous utilisez des cartes hors ligne, indiquez-nous le nom exact du fichier de carte où le problème de routage se produit, et sa date d'édition.
- Dites-nous si vous avez utilisé le routage hors ligne intégré d'OsmAnd, ou un fournisseur de routage en ligne comme YOURS, OpenRouteService ou OSRM.
- Quel profil de routage est choisi dans l'application OsmAnd (voiture, vélo ou piéton) ?
- Veuillez spécifier aussi précisément que possible le point de départ et le point d'arrivée de votre itinéraire. Si possible, indiquez le nom de la ville et le nom de la rue pour chacun. Un [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) de openstreetmap.org peut également être utile.
- Dites-nous votre routage attendu, et comment OsmAnd route.

## Informations routières {#road-information}

### OsmAnd n'affiche que certains radars {#osmand-only-shows-some-speed-cams}

En raison des géodonnées provenant du projet OpenStreetMap, il existe actuellement deux méthodes d'intégration des radars dans les données brutes d'OSM :

- Un point (appelé "nœud" dans la terminologie OSM) d'une voie est étiqueté avec "highway=speed_camera", voir le wiki OSM à [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Un groupe d'éléments de données OSM sont réunis dans une "relation" qui contient plus d'éléments qu'un seul nœud pour décrire la direction couverte par le radar. Voir [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

Actuellement, OsmAnd ne peut utiliser que les éléments constitués d'un seul nœud. L'analyse des relations est prévue dans une future version.


## Navigation vocale {#voice-navigation}

### Pourquoi devrais-je utiliser une voix TTS au lieu d'une voix enregistrée ? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

Les voix de **synthèse vocale (TTS)** génèrent des invites vocales de manière dynamique, ce qui leur permet de prononcer les noms de rues, les noms de lieux et les numéros d'autoroute. En revanche, les **voix enregistrées** sont limitées à des phrases pré-enregistrées et ne peuvent pas prononcer de noms ou de numéros spécifiques.

*Avantages de la TTS par rapport aux voix enregistrées :*

- Prononce les noms de rues et les informations dynamiques.
- Régulièrement mise à jour avec de nouvelles fonctionnalités.
- Offre une meilleure flexibilité pour la navigation.

Pour utiliser la TTS dans OsmAnd, votre appareil doit avoir un **moteur TTS** installé. De nombreux appareils sont livrés avec un moteur TTS préinstallé, mais d'autres peuvent être installés manuellement si nécessaire. [Liste des moteurs et langues TTS pris en charge pour Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Pour des instructions détaillées sur la configuration et l'ajustement des invites vocales, consultez : [Guide de configuration de la navigation vocale](../navigation/guidance/voice-navigation.md).

### La TTS ne fonctionne pas correctement ? Suivez ces étapes pour y remédier {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Les problèmes de **synthèse vocale (TTS)** sont généralement liés aux **paramètres système Android**, et non à l'application OsmAnd elle-même.

1. Assurez-vous qu'un moteur TTS est installé.

    - Ouvrez *Paramètres de l'appareil → Langue et saisie → Options de synthèse vocale*.
    - Vérifiez si un **moteur TTS** est installé (par exemple, Google TTS, Samsung TTS, Pico).
    - Si aucun moteur n'est installé, sélectionnez *« Installer plus… »* et téléchargez-en un compatible.
    - [Liste des moteurs et langues TTS pris en charge.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Vérifiez les paramètres de langue TTS.

    - Sélectionnez la langue que vous souhaitez utiliser dans *Paramètres Android → Options de synthèse vocale*.
    - Appuyez sur *« Écouter un exemple »* pour tester si le moteur TTS fonctionne.
    - Si vous n'entendez rien, mettez à jour ou réinstallez le moteur TTS.

3. Ajustez les paramètres de navigation vocale d'OsmAnd.

    - Ouvrez *OsmAnd → Menu → Configurer le profil → Paramètres de navigation → Invites vocales*.
    - Sélectionnez une *Langue → TTS* compatible.
    - Testez les invites vocales en naviguant vers *Menu → Plugins → Activer le développement OsmAnd → Paramètres → Tester les invites vocales*.

#### Étapes supplémentaires {#additional-steps}

- *Mettre à jour Google TTS*. Ouvrez le Google Play Store, recherchez **Google Text-to-Speech** et mettez-le à jour.
- *Simuler la navigation*. Appuyez sur *Bouton de navigation → Paramètres → Simuler la navigation* pour vérifier si le guidage vocal est lu.
- *Réinstaller OsmAnd* :
   - **Sauvegarder les paramètres :** *Menu → Paramètres → Exporter vers un fichier*.
   - Désinstallez OsmAnd, puis réinstallez-le depuis le magasin d'applications.
   - Restaurer les paramètres : *Menu → Paramètres → Importer un fichier*.

Pour un dépannage supplémentaire, visitez :

- [Guide de navigation vocale](../navigation/guidance/voice-navigation.md)
- [Importer/Exporter les paramètres](../personal/import-export.md)


## Autre {#other}

### La navigation s'arrête lorsque l'écran est éteint {#navigation-stops-while-screen-is-off}

- [Le même problème](../troubleshooting/track-recording-issues.md#the-system-may-kill-background-apps-to-save-power) avec l'enregistrement de traces en arrière-plan.