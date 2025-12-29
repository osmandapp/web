---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Utilisez **Navigation sur le Web** pour créer un itinéraire sur la carte et prévisualiser les instructions au virage par virage. Elle calcule un itinéraire pour le mode de déplacement sélectionné, affiche la distance et le temps prévus, et vous permet de vérifier les changements d'altitude et les virages à venir. Vous pouvez affiner l'itinéraire dans les paramètres de Navigation (par exemple, en autorisant ou en évitant certains types de routes ou en utilisant des paramètres de véhicule) et utiliser plusieurs points d'itinéraire si nécessaire.


## Démarrer un itinéraire {#start-a-route}

Dans l'état vide, Navigation vous invite à ajouter des points d'itinéraire : *Cliquez sur la carte pour définir les points de Départ et de Destination*.

Les points d'itinéraire peuvent être fournis depuis le panneau Itinéraire. Lorsque vous sélectionnez **Définir le point de départ** ou **Définir la destination**, le champ affiche des suggestions telles que *Emplacement actuel* et les points précédemment utilisés de l'historique. Vous pouvez supprimer les suggestions enregistrées en utilisant *Effacer l'historique*.

Navigation suit un flux simple : le premier point devient le Départ, et le point suivant devient la Destination. Dès que les deux points sont définis, l'itinéraire est calculé et affiché sur la carte.

![Navigation Web](@site/static/img/web/navigation_start.png)

### Gérer les points d'itinéraire {#manage-route-points}

Vous pouvez étendre un itinéraire au-delà de Départ → Destination en ajoutant des points intermédiaires. Utilisez le bouton plus (+) à côté de la liste des points pour ajouter un point intermédiaire (un nouveau point est inséré au-dessus de la Destination). Les points intermédiaires peuvent être supprimés en utilisant le bouton moins (–).

Échanger Départ et Destination — échange le Départ et la Destination tout en conservant les points intermédiaires inchangés. L'action est marquée par une icône montrant deux flèches dans des directions opposées.

![Navigation Web](@site/static/img/web/navigation_points.png)


## Profil d'itinéraire {#routing-profile}

En haut du panneau Itinéraire, vous pouvez choisir un profil d'itinéraire pour votre itinéraire. Un ensemble de profils couramment utilisés est affiché sous forme de quatre icônes. Pour accéder à plus d'options, ouvrez le menu à trois points à côté des icônes de profil. Il étend la liste complète des profils disponibles.

Lorsque vous changez de profil, Navigation met à jour l'itinéraire pour correspondre au mode de déplacement sélectionné.

![Navigation Web](@site/static/img/web/navigation_profile.png)


## Paramètres de navigation {#navigation-settings}

Pour ajuster la façon dont les itinéraires sont calculés, ouvrez les Paramètres en utilisant l'icône d'engrenage dans le panneau Itinéraire. Les paramètres sont regroupés en sections que vous pouvez développer/reduire. L'ensemble des sections et des options dépend du profil d'itinéraire sélectionné, vous verrez donc différents paramètres pour différents modes de déplacement.

Les sections typiques incluent :

- **Général** — options spécifiques au profil (par exemple, dans le profil voiture, vous pouvez voir des interrupteurs comme *Itinéraire économe en carburant* et *Livraison de marchandises*).
- **Autoriser** — options qui permettent des types de routes ou de chemins spécifiques lors du calcul d'itinéraire.
- **Éviter** — options qui excluent certains types de routes ou situations de l'itinéraire (par exemple, éviter les péages, les ferries, les autoroutes, les tunnels, etc.).
- **[Paramètres du véhicule](../navigation/guidance/vehicle-parameters.md)** — disponibles pour les profils basés sur les véhicules. Vous permet de spécifier les contraintes du véhicule (telles que les dimensions/poids), qui peuvent influencer le routage sur les routes restreintes.

![Navigation Web](@site/static/img/web/navigation_settings.png) ![Navigation Web](@site/static/img/web/navigation_settings_2.png)


## Attacher une piste {#attaching-track}

Le bloc **Attacher aux routes** vous permet d'utiliser une piste GPX existante comme base pour la navigation. OsmAnd Web fait correspondre la piste aux routes proches pour fournir des instructions au virage par virage.

Lorsque vous cliquez sur Sélectionner une piste, le navigateur ouvre un sélecteur de fichiers où vous pouvez choisir un fichier .gpx depuis votre ordinateur. Après avoir sélectionné une piste :
- La piste est affichée sur la carte et utilisée pour calculer l'itinéraire.
- Le résumé de l'itinéraire (distance et temps) est affiché dans le panneau Itinéraire.
- Le fichier sélectionné apparaît sous Piste sélectionnée (avec le nom de fichier de la piste).
- Vous pouvez supprimer la piste attachée en utilisant le bouton moins (–) à côté de Piste sélectionnée.


## Détails de l'itinéraire {#route-details}

![Navigation Web](@site/static/img/web/navigation_info.png) ![Navigation Web](@site/static/img/web/navigation_turns.png)

Lorsque un itinéraire est calculé, le panneau affiche un résumé de base (distance, temps, montée/descente) et un bouton **Détails**. Utilisez Détails pour ouvrir la vue de l'itinéraire avec deux onglets : Info et Virages.

Info résume l'itinéraire et les données d'altitude :
- **Points** — le nombre de points d'itinéraire utilisés pour construire l'itinéraire.
- **Itinéraire** — distance et temps.
- **Montée/Descente** — ascension et descente totales.
- **Altitude (min/moy/max)** — statistiques d'altitude pour l'itinéraire.
- **Altitude (Satellite)** — Recalculer pour reconstruire l'altitude en utilisant les données satellite (si disponibles).

Sous le résumé, le graphique d'altitude vous aide à inspecter le profil de l'itinéraire. Vous pouvez basculer Altitude et Pente, et utiliser le curseur sous le graphique pour vous concentrer sur une partie spécifique de l'itinéraire.

Utilisez Virages pour les instructions au virage par virage. L'itinéraire est également marqué par des cercles orange le long de la ligne. Cliquez sur un cercle pour ouvrir une fenêtre contextuelle avec l'instruction de navigation correspondante. La fenêtre contextuelle peut également inclure :
- Éviter — évite ce segment spécifique.
- ID de voie — un lien vers la voie OSM sous-jacente pour cette partie de l'itinéraire.

Vous pouvez affiner l'itinéraire directement sur la carte en glissant les marqueurs d'itinéraire vers un autre endroit. Lorsque vous cliquez et glissez un marqueur vers une autre route (ou vers un emplacement proche) puis le relâchez :
- OsmAnd Web recalcule l'itinéraire pour passer par la nouvelle position.
- Le marqueur déplacé est converti en un nouveau point intermédiaire.
- Le nouveau point intermédiaire apparaît dans le panneau Itinéraire comme un point supplémentaire inséré au-dessus de la Destination, et le résumé de l'itinéraire se met à jour en conséquence.
- Vous pouvez gérer le point via ajouté de la même manière que les autres [points intermédiaires](#manage-route-points).

![Navigation Web](@site/static/img/web/navigation_on_map.png)

### Télécharger et enregistrer {#download-and-save}

Utilisez *Télécharger* pour exporter l'itinéraire sous forme de piste. La boîte de dialogue de téléchargement propose deux options :
Données complètes de la piste — inclut toutes les données, y compris les instructions de navigation.
Piste simplifiée — une version plus légère plus adaptée à l'utilisation avec d'autres applications.

Vous pouvez enregistrer l'itinéraire sous forme de piste en utilisant *Enregistrer dans le Cloud / Téléverser vers OsmAnd Cloud*. Cela ouvre une boîte de dialogue où vous pouvez confirmer l'enregistrement dans les pistes cloud, modifier le Nom, choisir optionnellement un Dossier, puis Enregistrer ou Annuler.

### Partager un itinéraire {#share-a-route}

Pour partager l'itinéraire, copiez l'URL. Exemple : [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Articles connexes {#related-articles}

- [Préparation d'itinéraire](../navigation/setup/route-navigation.md)
- [Paramètres de navigation](../navigation/guidance/navigation-settings.md)
- [Paramètres du véhicule](../navigation/guidance/vehicle-parameters.md)
- [Planifier un itinéraire](../web/planner.md)