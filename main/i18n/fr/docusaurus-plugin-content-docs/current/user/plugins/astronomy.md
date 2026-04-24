---
source-hash: 37ed6a71b4e99bf1a605fa8103c14f11df87444fb843f17ab31a7d5ea498a31e
sidebar_position: 3
title:  Astronomy
unlistead: true
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

<InfoAndroidOnly/>

:::info
**Astronomie** est actuellement en **bêta**.
:::

## Aperçu {#overview}

:::tip Purchase
Le plugin Astronomie est une [fonctionnalité payante](../purchases/index.md).  
:::

Le plugin Astronomie affiche une superposition céleste avec des étoiles, des constellations, le Soleil, la Lune et les planètes directement sur la carte. Il utilise un catalogue céleste hors ligne pour calculer et afficher les positions actuelles et futures des objets célestes. Le plugin permet également aux utilisateurs d'explorer le ciel nocturne, d'identifier les objets et de planifier des observations en visualisant leurs trajectoires à travers le ciel.

Le plugin fonctionne entièrement hors ligne en utilisant des catalogues d'étoiles intégrés, permettant l'exploration du ciel même sans connexion Internet.


## Paramètres de configuration requis {#required-setup-parameters}
  
Les paramètres suivants sont requis pour afficher la superposition Astronomie :

1. Activez le plugin [**Astronomie**](../plugins/index.md#enable--disable) dans la section *Plugins* du *Menu principal*
2. Utilisez **Menu → Carte des étoiles** pour ouvrir l'écran dédié avec le ciel étoilé, les paramètres et les contrôles de temps.
3. Sélectionnez **l'heure et la date** à l'aide des contrôles sur l'écran de la Carte des étoiles.
4. Ajustez ce qui est affiché sur la Carte des étoiles en utilisant [**Configurer la vue**](#configure-view) — par exemple, activez/désactivez les objets visibles et les aides à la visualisation.
5. Appuyez sur le bouton **Fermer (X)** en haut de l'écran de la Carte des étoiles pour quitter la Carte des étoiles et revenir à la carte de la Terre.

Le plugin fonctionne avec les deux moteurs de rendu de carte, mais offre les meilleures performances en mode OpenGL.

## Écran Carte des étoiles {#star-map-screen}

**Accéder à :** *Plugin activé → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Écran Carte des étoiles](@site/static/img/plugins/starwatcher/view_new_1.png)

L'écran dédié **Carte des étoiles** affiche un dôme céleste interactif avec des étoiles, des constellations, des planètes, des trajectoires du Soleil et de la Lune. En bas de l'écran, vous pouvez accéder aux contrôles suivants : 
- [**Recherche**](#search) — ouvre l'écran de Recherche où vous pouvez rechercher des objets célestes et parcourir les catalogues et catégories du ciel. 
- **Heure et date** — vous permet de changer la date et l'heure pour observer le ciel à différents moments dans le passé ou le futur. Cela est utile pour planifier des observations, suivre le mouvement des objets ou apprendre comment le ciel change au fil du temps. Si vous définissez une date/heure personnalisée, la puce affiche la date et l'heure complètes, et un bouton de réinitialisation apparaît à côté pour revenir à l'heure système actuelle.
- **<Translate android="true" ids="magnitude_filter"/>** — vous permet de limiter quelles étoiles sont affichées en fonction de leur luminosité. Utilisez le curseur pour définir la valeur maximale de magnitude. Des valeurs plus basses n'affichent que les étoiles les plus brillantes, tandis que des valeurs plus élevées révèlent des étoiles plus faibles et des objets du ciel profond. Cela aide à réduire l'encombrement visuel ou à simuler ce qui est visible à l'œil nu.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — ouvre les paramètres d'affichage qui contrôlent comment les objets, les trajectoires et les lignes de référence sont affichés sur la Carte des étoiles.

L'écran rend l'hémisphère céleste complet au-dessus de votre emplacement, aligné sur la direction de la boussole. La Carte des étoiles peut être rotée manuellement en faisant glisser l'écran. La rotation manuelle de la Carte des étoiles n'affecte pas l'orientation de la carte de la Terre. La carte de la Terre suit toujours le [mode d'orientation de la carte](../map/interact-with-map.md#map-orientation-modes) sélectionné dans vos paramètres. Appuyez sur les objets célestes pour obtenir des détails comme la magnitude, les heures de lever/coucher ou les trajectoires.

La Carte des étoiles peut également s'aligner sur l'orientation de votre appareil lorsque le mode boussole est activé. Dans ce mode, le ciel tourne en fonction des capteurs accéléromètre et boussole de l'appareil, vous permettant d'explorer le ciel en déplaçant physiquement votre téléphone.


## Menu contextuel {#context-menu}

![Menu contextuel](@site/static/img/plugins/starwatcher/context_menu_view.png)

Le **Menu contextuel** fournit des informations détaillées sur les objets célestes et des outils pour les observer. Il s'ouvre lorsque vous appuyez sur un objet céleste sur la Carte des étoiles.

Lorsqu'un objet est sélectionné, il est mis en évidence sur la Carte des étoiles par un marqueur circulaire rouge. Son mouvement quotidien est également visualisé par un anneau horaire (00–23), indiquant où l'objet apparaîtra dans le ciel à chaque heure de la journée locale et la direction de son mouvement.

Le Menu contextuel apparaît en bas de l'écran et contient des informations sur l'objet, des actions rapides et des onglets pour explorer la visibilité de l'objet et son calendrier d'observation.

### Informations sur l'objet {#object-information}

![Informations sur l'objet](@site/static/img/plugins/starwatcher/object_view_new.png) ![Informations sur l'objet](@site/static/img/plugins/starwatcher/object_view_2.png)

La section supérieure du Menu contextuel affiche le nom et la classification de l'objet. Sous le nom, le type d'objet et sa constellation ou son groupe parent sont indiqués. Par exemple :
- **Beta Ursae Minoris** — Étoile • Ursa Minor
- **<Translate android="true" ids="astro_name_moon"/>** — Satellite • Terre
- **<Translate android="true" ids="astro_name_jupiter"/>** — Planète • Système solaire

Des blocs d'informations rapides affichent les paramètres d'observation clés :  
- <Translate android="true" ids="astro_rise"/> – l'heure à laquelle l'objet se lève au-dessus de l'horizon.
- <Translate android="true" ids="astro_set"/> – l'heure à laquelle l'objet se couche sous l'horizon.
- <Translate android="true" ids="shared_string_azimuth"/> – la direction de l'objet par rapport au nord (0°–360°).
- <Translate android="true" ids="altitude"/> – la hauteur de l'objet au-dessus de l'horizon.
- <Translate android="true" ids="shared_string_magnitude"/> – la luminosité de l'objet telle que vue depuis la Terre. 

Ces valeurs se mettent à jour dynamiquement en fonction de l'heure sélectionnée et de l'emplacement de l'utilisateur.

Sous les blocs d'informations rapides, le menu peut également inclure des informations et ressources supplémentaires sur l'objet :
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Vous permet de télécharger une base de données étendue avec des articles Wikipédia et des catalogues du ciel profond pour une utilisation hors ligne. Après le téléchargement, des informations détaillées sur les objets célestes peuvent être consultées directement dans l'application sans connexion Internet.
- <Translate android="true" ids="read_on_wiki"/> – Ouvre l'article Wikipédia de l'objet dans le navigateur.
- <Translate android="true" ids="astro_designations"/> – Affiche les noms alternatifs et les identifiants de catalogue pour l'objet (par exemple, HD, HIP, NGC). Cette section est disponible pour les objets qui ont des entrées de catalogue, tels que les étoiles et les objets du ciel profond. Si l'objet n'a pas de nom commun, l'un de ces désignations est utilisé comme nom principal.
- <Translate android="true" ids="online_photos"/> – Affiche les photos disponibles liées à l'objet céleste sélectionné.

### Actions {#actions}

Sous les informations sur l'objet, le Menu contextuel fournit plusieurs actions pour interagir avec l'objet céleste sélectionné :
- **<Translate android="true" ids="shared_string_save"/>** – Ajoute l'objet à votre liste de Favoris pour un accès rapide.
- **<Translate android="true" ids="astro_locate"/>** – Centre l'objet sélectionné sur la Carte des étoiles.
- **<Translate android="true" ids="astro_direction"/>** – Affiche la direction vers l'objet sur la carte, vous aidant à vous orienter lors de l'observation du ciel.
- **<Translate android="true" ids="astro_path"/>** – Affiche la trajectoire quotidienne de l'objet à travers le ciel, vous permettant de voir comment il se déplace pendant la journée.

### Graphique de visibilité {#visibility-graph}

![Graphique de visibilité](@site/static/img/plugins/starwatcher/visibility_new.png)

L'onglet **Visibilité** montre comment l'objet sélectionné se déplace à travers le ciel pendant une période de 24 heures.

Le graphique affiche l'altitude de l'objet au-dessus de l'horizon en fonction du temps.

- L'axe horizontal représente le temps de 12:00 à 12:00 le lendemain.
- L'axe vertical représente l'altitude de −30° à +90°.

La courbe colorée montre l'altitude de l'objet tout au long de la journée.

L'arrière-plan du graphique représente l'état du ciel et change en fonction de la position du Soleil. Cela aide à identifier quand les observations sont possibles.

Les couleurs représentent différentes conditions du ciel :  
- bleu clair — jour
- bleu plus foncé — crépuscule
- bleu foncé / noir — nuit

La couleur de la trajectoire de l'objet reflète également son altitude :  
- jaune – haut dans le ciel (meilleure visibilité)
- orange – altitude moyenne
- rouge – proche de l'horizon
- violet – sous l'horizon (non visible)

Un indicateur mobile vous permet d'explorer la position de l'objet à différents moments. Lorsque l'indicateur est déplacé, l'heure actuelle, l'altitude et les valeurs d'azimut sont mises à jour. La valeur d'azimut inclut également la direction de la boussole correspondante (par exemple, 354° Az (N)).

Sous le graphique, les événements d'observation importants sont affichés : 
- **<Translate android="true" ids="astro_rise"/>** – quand l'objet se lève au-dessus de l'horizon.
- **<Translate android="true" ids="astro_culmination"/>** – quand l'objet atteint son altitude la plus élevée.
- **<Translate android="true" ids="astro_set"/>** – quand l'objet se couche sous l'horizon. Si l'objet ne se lève jamais ou ne se couche jamais, les valeurs correspondantes sont masquées.

Le graphique s'ouvre avec l'indicateur positionné à l'heure système actuelle. L'emplacement utilisé pour les calculs est indiqué sous le graphique. L'emplacement est affiché sous forme de nom de ville.

### Calendrier d'observation {#actions}

![Calendrier d'observation](@site/static/img/plugins/starwatcher/schedule_new.png)

L'onglet **Calendrier** affiche la visibilité de l'objet sélectionné pour la semaine en cours. Chaque ligne représente un jour et inclut :  
- le jour de la semaine
- la date
- l'heure de lever
- l'heure de coucher. Si l'heure de coucher se produit le lendemain, elle est marquée avec ⁺¹
- un petit graphique de visibilité pour ce jour

Le mini graphique montre quand l'objet est visible pendant la journée et comment son altitude change. La section colorée de la barre représente la période où l'objet est au-dessus de l'horizon. Le mini graphique représente la plage horaire de 00:00 à 23:59 pour le jour sélectionné.

Vous pouvez naviguer entre les semaines en utilisant les boutons fléchés dans l'en-tête du Calendrier. Le bouton calendrier vous permet de revenir à la semaine actuelle.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## Recherche d'étoiles en RA (Mode Caméra) {#ar-star-finding}

**Accéder à :** *Plugin activé → <Translate android="true" ids="shared_string_menu,star_map"/> → Bouton Caméra* 

La couche **Astronomie** fonctionne avec la **caméra de votre appareil** pour activer la **réalité augmentée (RA) pour l'observation des étoiles**. Pointez la caméra de votre téléphone vers le vrai ciel nocturne et voyez des étoiles, des planètes, des constellations, le Soleil/Lune superposés en temps réel.

**Comment fonctionne la Recherche d'étoiles en RA :**
- **Vue caméra en direct** affiche le vrai ciel avec des superpositions astronomiques transparentes alignées sur l'horizon/boussole.
- **Déplacez la caméra** pour scanner le ciel — les objets se mettent en évidence lorsqu'ils apparaissent dans votre champ de vision.
- **Appuyez sur les objets mis en évidence** pour voir l'azimut, l'altitude, la magnitude, les heures de lever/coucher et le lien Wikipédia.
- **Calibration de la boussole** requise pour un alignement précis (agitez le téléphone en forme de 8 si nécessaire).

Le mode RA utilise les capteurs de l'appareil (gyroscope, accéléromètre et boussole) pour aligner les objets célestes avec le vrai ciel.

**Parfait pour :**
- Identifier des étoiles/planètes faibles invisibles à l'œil nu.
- Localiser des constellations en déplaçant le téléphone à travers le ciel.
- Navigation céleste en temps réel pendant les randonnées ou le camping.


## Configurer la vue {#configure-view}

![Configurer la vue](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>** vous permet de contrôler l'affichage de la Carte des étoiles en activant ou désactivant les modes visuels, les objets et les aides à la visualisation.

Pour ouvrir Configurer la vue, appuyez sur le bouton Configurer la vue dans le coin inférieur droit de l'écran de la Carte des étoiles. Le bouton est représenté par une icône de style couche (formes empilées), indiquant les paramètres d'affichage et de couche. Configurer la vue s'ouvre en *État moitié*, affichant les options d'affichage principales. Faites glisser le panneau vers le haut pour l'étendre en *État complet* et accéder à tous les paramètres disponibles. Pour fermer Configurer la vue, faites glisser le panneau vers le bas une fois pour revenir à l'État moitié, faites glisser vers le bas à nouveau pour le fermer complètement, ou appuyez n'importe où sur la carte en dehors du panneau. Vous pouvez également appuyer sur le bouton Fermer (X) dans le coin supérieur droit du panneau.

### Modes et actions {#modes-and-actions}

![Configurer la vue](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/red_filter_new.png)

Cette section contrôle les modes d'affichage principaux de la Carte des étoiles.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Bascule entre une vue de trajectoire céleste (2D), qui affiche le ciel comme un dôme projeté avec des trajectoires d'objets, et une vue de ciel style globe (3D) représentant la sphère céleste.
- **<Translate android="true" ids="shared_string_map"/>**. Active une vue de carte de la Terre supplémentaire affichée sous la Carte des étoiles, vous permettant de relier les objets célestes à vos environs géographiques réels.
- **<Translate android="true" ids="red_filter"/>**. Applique un filtre de couleur rouge à l'ensemble de l'écran pour réduire la pollution lumineuse et préserver la vision nocturne pendant les observations en ciel sombre.

### Objets visibles {#visible-objects}

![Configurer la vue](@site/static/img/plugins/starwatcher/solar_system.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/constellations.png)

Cette section vous permet de choisir quels types d'objets célestes sont affichés sur la Carte des étoiles.

| Objet | Description |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Affiche le Soleil, la Lune et les planètes visibles. |
| <Translate android="true" ids="astro_constellations"/> | Affiche les lignes et motifs des constellations formés par les étoiles. |
| <Translate android="true" ids="astro_stars"/> | Affiche les étoiles individuelles visibles sur la Carte des étoiles. |
| <Translate android="true" ids="astro_nebulas"/> | Affiche les objets nébuleux là où ils sont disponibles. |
| <Translate android="true" ids="astro_star_clusters"/> | Affiche les amas d'étoiles en tant qu'objets célestes distincts. |
| <Translate android="true" ids="astro_deep_sky"/> | Active/désactive les objets du ciel profond tels que les galaxies, les amas de galaxies et les trous noirs. |

### Options d'affichage personnelles {#personal-display-options}

Les **options d'affichage personnelles** contrôlent les aides visuelles supplémentaires liées à l'attention de l'utilisateur et à l'observation.

| Option | Description |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Affiche un indicateur directionnel pour aider à orienter votre vue. |
| <Translate android="true" ids="astro_daily_path"/> | Affiche la trajectoire quotidienne des objets célestes sélectionnés à travers le ciel. |
| <Translate android="true" ids="shared_string_favorites"/> | Met en évidence ou affiche les objets marqués comme favoris. |

### Aides à la visualisation {#rendering-aids}

Les **aides à la visualisation** ajoutent des lignes de référence et des grilles pour aider à orienter la Carte des étoiles.

| Aide | Description |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Ajoute une grille basée sur l'azimut pour l'orientation horizontale du ciel. |
| <Translate android="true" ids="meridian_line"/> | Affiche la ligne de méridien traversant le ciel du nord au sud. |
| <Translate android="true" ids="equatorial_grid"/> | Affiche la grille de coordonnées équatoriales célestes. |
| <Translate android="true" ids="ecliptic_line"/> | Affiche la ligne d'écliptique représentant la trajectoire apparente du Soleil. |
| <Translate android="true" ids="equator_line"/> | Affiche la projection équatoriale de la Terre sur la sphère céleste, aidant à visualiser la rotation de la Terre par rapport au ciel. |
| <Translate android="true" ids="galactic_line"/> | Affiche le plan de la galaxie Voie lactée à travers le ciel, indiquant la direction principale du disque galactique. |

<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->

## Recherche {#search}

![Recherche](@site/static/img/plugins/starwatcher/explore_screen.png)

La fonctionnalité **Recherche** dans le plugin Astronomie vous permet de trouver des objets célestes, d'explorer les catégories du ciel et d'accéder aux données d'observation. Pour ouvrir la Recherche, appuyez sur le bouton Recherche sur la Carte des étoiles. Cela ouvre l'écran de Recherche, qui fournit plusieurs sections pour découvrir et organiser les objets célestes. L'écran de Recherche inclut les sections suivantes :

**1. Observer maintenant**

La section Observer maintenant met en évidence les objets célestes qui sont visibles en ce moment ou ce soir. Cette section agit comme un outil de recommandation, affichant les objets les mieux adaptés à l'observation en fonction de votre emplacement et de votre heure actuels.

**2. Catégories**

La section Catégories vous permet de parcourir les objets par type : Système solaire, Constellations, Étoiles, Nébuleuses, Amas d'étoiles et Ciel profond. Chaque catégorie ouvre une liste d'objets avec des informations clés : nom de l'objet, type ou constellation, magnitude (luminosité) et heure de lever ou de coucher (si applicable).

### Tri et filtres {#sorting-and-filters}

![Tri](@site/static/img/plugins/starwatcher/sorting.png) ![Filtres](@site/static/img/plugins/starwatcher/filters.png)

Appuyez sur la barre de recherche pour ouvrir l'interface de recherche complète. Vous pouvez affiner les résultats en utilisant les options de tri et de filtrage.

Vous pouvez trier les objets par :  
- Nom (A–Z ou Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Les filtres aident à réduire les objets visibles.

**Visibilité**  
- <Translate android="true" ids="astro_filter_show_all"/> — affiche tous les objets
- <Translate android="true" ids="astro_filter_visible_now"/> — objets actuellement au-dessus de l'horizon
- <Translate android="true" ids="astro_filter_visible_tonight"/> — objets visibles entre le coucher et le lever du soleil

**Filtres supplémentaires**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — n'affiche que les objets avec une magnitude ≤ 6

**Catégories**  
Vous pouvez filtrer les résultats par type d'objet. Sélectionner des catégories spécifiques désactive automatiquement l'option Tout.

### Mes données {#my-data}

![Mes données](@site/static/img/plugins/starwatcher/my_data_new.png)

La section Mes données contient les objets avec lesquels l'utilisateur a interagi. Cette section inclut trois listes :

- <Translate android="true" ids="shared_string_favorites"/> — objets enregistrés depuis le menu contextuel.
- <Translate android="true" ids="astro_daily_path"/> — objets pour lesquels la trajectoire de mouvement quotidienne est activée.
- <Translate android="true" ids="astro_directions"/> — objets avec un indicateur de direction actif sur la Carte des étoiles.

Sélectionner un élément ouvre le menu contextuel de l'objet.

### Catalogues {#catalogs}

![Catalogues](@site/static/img/plugins/starwatcher/catalogs_new.png)

La section Catalogues fournit un accès aux catalogues astronomiques disponibles dans le plugin Astronomie.

Les catalogues contiennent de grandes collections d'objets célestes tels que des étoiles, des galaxies, des nébuleuses et des amas d'étoiles. Ouvrir un catalogue affiche une liste des objets inclus dans ce catalogue.

## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles](../../user/map/vector-maps.md)