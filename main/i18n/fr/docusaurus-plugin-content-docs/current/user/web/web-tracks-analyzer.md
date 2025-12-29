---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
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

**Analyseur de traces** est un outil web qui aide à analyser les segments de traces répétitifs entre des points sélectionnés sur la carte. Il analyse vos traces et trouve tous les segments qui passent par le(s) emplacement(s) choisi(s), vous permettant de comparer la vitesse, l'altitude, la distance et le temps à travers plusieurs activités.

## Comment utiliser {#how-to-use}

Après avoir ouvert l'Analyseur de traces (représenté par une clé à molette), l'outil s'ouvre avec une vue carte et un état vide. À partir de là, vous pouvez choisir quelles traces seront incluses dans l'analyse en utilisant le panneau **Sélectionner les traces**. L'analyseur permet de travailler avec toutes les traces disponibles ou de limiter l'analyse à des dossiers spécifiques.

Pour démarrer l'analyse, définissez un ou deux points directement sur la carte. Faites un clic droit à l'emplacement souhaité et sélectionnez **Point A / Point B** dans le menu contextuel. L'analyseur recherche ensuite les segments de traces qui passent par le point sélectionné ou entre les deux points.

![Analyseur de traces](@site/static/img/web/web_analyzer_select.png) ![Analyseur de traces](@site/static/img/web/web_analyzer_points.png)


## Tri et paramètres visibles {#sorting-and-visible-parameters}
Après que l'analyseur a trouvé les segments correspondants, les résultats sont affichés sous forme de liste. La liste peut être réorganisée en utilisant l'option **Trier**, qui modifie la façon dont les segments sont listés. De plus, le bouton **Champs** ouvre le panneau des paramètres visibles, où vous pouvez contrôler quels paramètres d'analyse sont affichés pour chaque segment. Vous pouvez afficher tous les paramètres disponibles ou sélectionner uniquement ceux qui sont pertinents pour votre analyse.

Les paramètres disponibles sont regroupés par type :

**Vitesse**
- Vitesse max.
- Vitesse moyenne
- Vitesse min.

**Altitude**
- Altitude max.
- Altitude moyenne
- Altitude min.

**Montée / Descente**

**Date et heure**
- Date
- Heure de début
- Heure de fin
- Étendue temporelle
- Durée
- Temps en mouvement

**Longueur**

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