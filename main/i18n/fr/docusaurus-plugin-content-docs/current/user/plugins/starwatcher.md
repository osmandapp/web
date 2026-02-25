---
source-hash: 58426179267520e49fd40594a65a229ede4b84aecbc82387219ff0e5c619428f
sidebar_position: 14
title:  Star Watcher
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** est actuellement en **bêta**.
:::

## Aperçu {#overview}

Le plugin Star Watcher affiche une superposition du ciel étoilé sur la carte avec des étoiles, des constellations, le Soleil, la Lune et les planètes. Les positions et les trajectoires du Soleil, de la Lune, des planètes et des principales étoiles sont affichées sur la carte.

## Paramètres de configuration requis {#required-setup-parameters}
  
Les paramètres de configuration suivants sont requis pour afficher la superposition Star Watcher :

1. Activez le plugin [**Star Watcher**](../plugins/index.md#enable--disable) dans la section *Plugins* du *Menu principal*
2. Utilisez **Menu → Carte des étoiles** pour ouvrir l'écran dédié avec le ciel étoilé, les paramètres et les contrôles de temps.
3. Sélectionnez **l'heure et la date** à l'aide des contrôles sur l'écran Carte des étoiles.
4. Ajustez ce qui est affiché sur la Carte des étoiles en utilisant [**Configurer la vue**](#configure-view) — par exemple, activez ou désactivez les objets visibles et les aides au rendu.
5. Appuyez sur le bouton **Fermer (X)** en haut de l'écran Carte des étoiles pour quitter la Carte des étoiles et revenir à la carte terrestre.

Le plugin fonctionne avec les deux moteurs de rendu de carte mais performe le mieux en mode OpenGL.

## Écran Carte des étoiles {#star-map-screen}

**Aller à :** *Plugin activé → Menu → Carte des étoiles* 

![Écran Carte des étoiles](@site/static/img/plugins/starwatcher/view_new.png)

L'écran dédié **Carte des étoiles** affiche un dôme céleste interactif avec des étoiles, des constellations, des planètes, des trajectoires du Soleil et de la Lune. En bas de l'écran, vous pouvez accéder aux contrôles suivants : 
- **Recherche** — ouvre un panneau de recherche avec un champ de saisie où vous pouvez taper le nom d'un objet. Sous le champ, il y a une liste d'objets suggérés par ordre alphabétique. Vous pouvez basculer le tri entre A–Z et Z–A. 
- **Heure et date** — vous permet de changer la date et l'heure pour observer le ciel à différents moments dans le passé ou le futur. Cela est utile pour planifier des observations, suivre le mouvement des objets ou apprendre comment le ciel change au fil du temps. Si vous définissez une date/heure personnalisée, la puce affiche la date et l'heure complètes, et un bouton de réinitialisation apparaît à côté pour revenir à l'heure système actuelle.
- [**Configurer la vue**](#configure-view).

L'écran rend l'hémisphère céleste complet au-dessus de votre emplacement, aligné avec la direction de la boussole. La Carte des étoiles peut être tournée manuellement. La rotation manuelle de la Carte des étoiles n'affecte pas l'orientation de la carte terrestre. La carte terrestre suit toujours le [mode d'orientation de la carte](../map/interact-with-map.md#map-orientation-modes) sélectionné dans vos paramètres. Appuyez sur les objets célestes pour des détails comme la magnitude, les heures de lever/coucher ou les trajectoires.

## Informations sur l'objet céleste {#celestial-object-info}

![Pop-up d'informations sur l'objet](@site/static/img/plugins/starwatcher/object-info_new.png)

Appuyez sur n'importe quelle **étoile, planète, constellation, ou Soleil/Lune** sur l'**écran Carte des étoiles** ou la **superposition sur la carte** pour voir des informations détaillées. L'objet sélectionné est mis en surbrillance sur la Carte des étoiles par un marqueur circulaire rouge, et son mouvement quotidien est visualisé par un anneau horaire (00–23) indiquant où l'objet se trouvera à chaque heure locale et la direction du mouvement.

**Données affichées :**
- **Azimut** : Direction par rapport au Nord (0°-360°) où l'objet apparaît dans le ciel
- **Altitude** : Hauteur au-dessus de l'horizon (0° à l'horizon, 90° au zénith)
- **Magnitude** : Échelle de luminosité (-26 pour le Soleil à +6 pour les étoiles faibles ; plus bas = plus lumineux)
- **Heures de lever/coucher** : Quand l'objet se lève au-dessus/se couche sous l'horizon
- **Distance** (planètes) : Distance moyenne de la Terre en UA/km

**Intégration Wikipedia** : Appuyez sur **« Wikipedia »** dans la pop-up d'informations pour ouvrir la page de l'objet dans votre navigateur (par ex. Sirius, Orion, Vénus). Fonctionne hors ligne pour les données mises en cache, en ligne pour les articles complets.

**Appui long** sur les objets célestes pour les **épingler** en tant que marqueurs sur la carte avec des mises à jour de position en direct, ou **partager** les coordonnées pour l'observation d'étoiles en groupe.

Cette fonctionnalité aide à identifier les objets dans le vrai ciel, à planifier des observations et à apprendre des faits d'astronomie directement depuis OsmAnd.

## Recherche d'étoiles AR (Mode Caméra) {#ar-star-finding}

**Aller à :** *Plugin activé → Menu → Carte des étoiles → Bouton Caméra* 

La couche **Star Watcher** fonctionne avec la **caméra de votre appareil** pour activer l'**observation des étoiles en réalité augmentée (AR)**. Pointez la caméra de votre téléphone vers le vrai ciel nocturne et voyez des étoiles, des planètes, des constellations, Soleil/Lune superposés en temps réel.

**Comment fonctionne la recherche d'étoiles AR :**
- **Vue caméra en direct** montre le vrai ciel avec des superpositions astronomiques transparentes alignées sur l'horizon/boussole
- **Déplacez la caméra** pour scanner le ciel — les objets se mettent en surbrillance quand ils apparaissent dans votre champ de vision
- **Appuyez sur les objets surlignés** pour voir l'azimut, l'altitude, la magnitude, les heures de lever/coucher et le lien Wikipedia
- **Calibration de la boussole** requise pour un alignement précis (agitez le téléphone en figure de 8 si nécessaire)

**Parfait pour :**
- Identifier des étoiles/planètes faibles invisibles à l'œil nu
- Localiser des constellations en déplaçant le téléphone à travers le ciel
- Navigation céleste en temps réel pendant les randonnées ou le camping

## Configurer la vue {#configure-view}

![Configurer la vue](@site/static/img/plugins/starwatcher/half_state.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/full_state.png)

**Configurer la vue** vous permet de contrôler l'affichage de la Carte des étoiles en activant ou désactivant les modes visuels, les objets et les aides au rendu.

Pour ouvrir Configurer la vue, appuyez sur le bouton Configurer la vue dans le coin inférieur droit de l'écran Carte des étoiles. Le bouton est représenté par une icône de style couche (formes empilées), indiquant les paramètres d'affichage et de couche. Configurer la vue s'ouvre en *État demi*, affichant les options d'affichage principales. Faites glisser le panneau vers le haut pour l'étendre en *État complet* et accéder à tous les paramètres disponibles. Pour fermer Configurer la vue, faites glisser le panneau vers le bas une fois pour revenir à l'État demi, faites glisser vers le bas à nouveau pour le fermer complètement, ou appuyez sur le bouton Fermer (X) dans le coin supérieur droit du panneau.

### Modes et actions {#modes-and-actions}

![Configurer la vue](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/red_filter.png)

Cette section contrôle les modes d'affichage principaux de la Carte des étoiles.

- **2D / 3D**. Bascule la Carte des étoiles entre une vue plate (2D) et une vue en forme de globe (3D).
- **Carte**. Active une vue supplémentaire de la carte terrestre affichée sous la Carte des étoiles, vous aidant à relier les objets célestes à votre emplacement géographique.
- **Filtre rouge**. Applique un filtre de couleur rouge à l'ensemble de l'écran pour réduire la pollution lumineuse et préserver la vision nocturne pendant les observations en ciel sombre.

### Objets visibles {#visible-objects}

![Configurer la vue](@site/static/img/plugins/starwatcher/solar_system.png) ![Configurer la vue](@site/static/img/plugins/starwatcher/constellations.png)

Cette section vous permet de choisir quels types d'objets célestes sont affichés sur la Carte des étoiles.

| Objet | Description |
|-------|-------------|
| Système solaire | Affiche le Soleil, la Lune et les planètes visibles. |
| Constellations | Affiche les lignes et motifs de constellations formés par les étoiles. |
| Étoiles | Affiche les étoiles individuelles visibles sur la Carte des étoiles. |
| Nébuleuses | Affiche les objets nébuleux là où ils sont disponibles. |
| Amas d'étoiles | Affiche les amas d'étoiles en tant qu'objets célestes distincts. |
| Ciel profond | Active les objets du ciel profond tels que les galaxies, les amas de galaxies et les trous noirs. |

### Options d'affichage personnelles {#personal-display-options}

Les **options d'affichage personnelles** contrôlent les aides visuelles supplémentaires liées à l'attention de l'utilisateur et à l'observation.

| Option | Description |
|-------|-------------|
| Direction | Affiche un indicateur directionnel pour vous aider à orienter votre vue. |
| Trajectoire quotidienne | Affiche la trajectoire quotidienne des objets célestes sélectionnés à travers le ciel. |
| Favoris | Met en surbrillance ou affiche les objets marqués comme favoris. |

### Aides au rendu {#rendering-aids}

Les **aides au rendu** ajoutent des lignes de référence et des grilles pour aider à orienter la Carte des étoiles.

| Aide | Description |
|-------|-------------|
| Grille azimutale | Ajoute une grille basée sur l'azimut pour l'orientation horizontale du ciel. |
| Ligne de méridien | Affiche la ligne de méridien traversant le ciel du nord au sud. |
| Grille équatoriale | Affiche la grille de coordonnées équatoriales célestes. |
| Ligne d'écliptique | Affiche la ligne d'écliptique représentant la trajectoire apparente du Soleil. |
| Équateur galactique | Affiche le plan équatorial de la galaxie de la Voie lactée. |


<!-- 
## Star Watcher Settings

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


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles](../../user/map/vector-maps.md)