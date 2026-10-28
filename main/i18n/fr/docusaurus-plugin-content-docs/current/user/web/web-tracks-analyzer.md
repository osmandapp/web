---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Analyseur de traces** est un outil web qui aide à analyser les segments de traces répétitifs entre des points sélectionnés sur la carte. Par exemple, vous pouvez l'utiliser pour comparer vos sorties sur une même montée ou vos trajets quotidiens. Pour utiliser cette fonctionnalité avec vos propres données, vous avez besoin d'un compte OsmAnd Pro avec des traces synchronisées vers OsmAnd Cloud — sinon, vos traces ne seront pas disponibles dans le Planificateur Web. Il analyse vos traces et trouve tous les segments qui passent par le(s) emplacement(s) choisi(s), vous permettant de comparer la vitesse, l'altitude, la distance et le temps à travers plusieurs activités.

## Comment utiliser {#how-to-use}

1. [Connectez-vous](./web-cloud.md#login) à votre compte OsmAnd Pro sur le portail de la carte Web. Vos traces doivent être synchronisées avec [OsmAnd Cloud](./web-cloud.md#cloud-sync).
2. Ouvrez *Menu → Analyseur de traces* (l'icône clé à molette).
3. Dans le panneau **Sélectionner les traces**, choisissez **Toutes les traces** ou uniquement les dossiers dont vous avez besoin.
4. Faites un clic droit sur la carte et sélectionnez **Point A**. Pour analyser un segment entre deux points, définissez également **Point B**.
5. Consultez la liste des segments trouvés, [triez-la et choisissez les paramètres à afficher](#sorting-and-visible-parameters).

Avec un seul point, l'analyseur trouve les segments de traces qui passent par l'emplacement sélectionné. Avec deux points, il trouve et analyse les segments entre le Point A et le Point B.

![Analyseur de traces](@site/static/img/web/web_analyzer_select.png) ![Analyseur de traces](@site/static/img/web/web_analyzer_points_new.png)


## Tri et paramètres visibles {#sorting-and-visible-parameters}
Après que l'analyseur a trouvé les segments correspondants, les résultats sont affichés sous forme de liste. La liste peut être réorganisée en utilisant l'option **Trier**, qui modifie la façon dont les segments sont listés. De plus, le bouton **Champs** ouvre le panneau des paramètres visibles, où vous pouvez contrôler quels paramètres d'analyse sont affichés pour chaque segment. Vous pouvez afficher tous les paramètres disponibles ou sélectionner uniquement ceux qui sont pertinents pour votre analyse.

Les paramètres disponibles comprennent :

- Vitesse max., Vitesse moy. et Vitesse min.
- Altitude max., Altitude moy. et Altitude min.
- Montée et Descente.
- Date.
- Étendue temporelle, Heure de début, Heure de fin, Durée et Temps en mouvement.
- Longueur.

![Analyseur de traces](@site/static/img/web/web_analyzer_sort.png) ![Analyseur de traces](@site/static/img/web/web_analyzer_fields.png)

## Analyse des données {#data-analysis}

Chaque segment correspondant est affiché dans la liste des résultats à gauche. Pour chaque segment, un ensemble de paramètres calculés est affiché, en fonction des paramètres visibles activés.

Chaque segment dispose également d'un menu à trois points (⋮) avec les actions suivantes :
- Ouvrir la trace — ouvre la trace complète liée au segment sélectionné.
- Masquer la trace / Rendre la trace visible — contrôle si la trace est affichée sur la carte.
- Exclure — supprime le segment des résultats d'analyse actuels.

![Analyseur de traces](@site/static/img/web/web_analyzer_menu.png)

### Graphiques {#graphs}

Sous la carte, l'analyseur affiche un graphique qui visualise les segments sélectionnés. Le graphique représente les données uniquement pour les segments trouvés entre les points sélectionnés, et non pour l'ensemble des traces.

Le graphique prend en charge le passage entre différents types de données :
- Altitude.
- Pente.
- Vitesse.
Un seul type de données est affiché à la fois, et le changement met à jour le graphique immédiatement.

Lorsque plusieurs segments sont présents, le graphique affiche les données pour plusieurs segments simultanément. Un sélecteur au-dessus du graphique vous permet de choisir combien de graphiques de segments sont affichés à la fois et de passer entre eux.

![Analyseur de traces](@site/static/img/web/web_analyzer_altitude.png) ![Analyseur de traces](@site/static/img/web/web_analyzer_tracks.png)

## Articles connexes {#related-articles}

- [Traces](../web/web-tracks.md)
- [Gérer les traces](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)