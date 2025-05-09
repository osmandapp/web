---
sidebar_position: 14
title: Topographie
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


## Vue d'ensemble

:::info Fonctionnalité payante
Le plugin Topographie est une [fonctionnalité payante](../purchases/index.md) de l'application OsmAnd.
:::

La topographie est une caractéristique importante de la cartographie qui fournit des informations pour évaluer visuellement le relief du terrain.
Les informations topographiques telles que les [courbes de niveau](#courbes-de-niveau), le [terrain](#terrain) (*ombrage* et *pente*) et le [relief 3D](#relief-3d) aident à évaluer visuellement la configuration du terrain en visualisant l'altitude, le relief, les extrêmes, la pente ou les points de même hauteur.

Chaque fonctionnalité fournie par ce plugin est une couche de carte indépendante qui, lorsqu'elle est activée, peut être affichée au-dessus ou en dessous de la source de carte principale en fonction des [paramètres](../map/raster-maps.md#overlay-layer).

Le plugin Topographie donne accès aux types de cartes suivants :

- [Courbes de niveau](#courbes-de-niveau). Il s'agit d'une [carte vectorielle](../map/vector-maps.md) représentée en [**mètres** ou **pieds**](#courbes-de-niveau-mètres-ou-pieds). Les courbes de niveau montrent les niveaux d'altitude et aident à visualiser le terrain.
- [Ombrage](#couches-dombrage-pente-et-altitude). Les types de cartes avec ombrage des collines et des pentes rendent le relief plus visible et aident à interpréter visuellement le terrain.
- [Pente](#couches-dombrage-pente-et-altitude). Couche [raster](../map/raster-maps.md) qui fournit des informations sur la raideur des pentes, ce qui peut être important pour la planification d'itinéraires et la sécurité.
- [Relief 3D](#relief-3d). Il s'agit d'une [carte vectorielle](../map/vector-maps.md) qui fournit une représentation tridimensionnelle du terrain, disponible uniquement avec l'[abonnement OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Courbes de niveau | Ombrage | Pente |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Courbes de niveau | Ombrage | Pente |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licence pour les données DEM utilisées par OsmAnd pour la détection du terrain

Les données d'altitude sur la carte (entre 70 degrés de latitude nord et 70 degrés de latitude sud) ont été obtenues à partir de mesures effectuées dans le cadre de la *Shuttle Radar Topography Mission (SRTM)*. Elle a utilisé l'*Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, le principal outil d'imagerie du *Earth Observation System de la NASA*.
Pour des informations complètes, voir la [Licence](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details><summary>Données DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Les données originales utilisées pour ce produit ont été fournies par AW3D de la JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Modèles numériques de terrain LiDAR de l'Europe de Sonny</a> (MNT).</details>


## Paramètres de configuration requis

Pour afficher les données de **courbes de niveau** et de **terrain (ombrage, pente)** sur la carte :

1. **Achat** : [Plan d'achat OsmAnd+, OsmAnd Maps+ ou OsmAnd Pro](../plugins/index.md#purchase)
2. [Activer](../plugins/index.md#enable--disable) le plugin Topographie dans la section Plugins du *Menu principal*.
3. [Télécharger](#télécharger-des-cartes) : cartes de courbes de niveau, d'ombrage, de pente ou de terrain (3D).
4. **Activer et ajuster** : Courbes de niveau, Ombrage ou Pente pour l'affichage de la carte.
5. Vous pouvez également regarder le [tutoriel YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Pour afficher le [**relief 3D**](#relief-3d), vous devez acheter le plan *OsmAnd Pro*, qui inclut l'accès au plugin Topographie.


## Télécharger des cartes

Pour commencer à utiliser les fonctionnalités du plugin, vous devez télécharger les cartes qui vous intéressent. Certaines cartes, comme les courbes de niveau pour les régions montagneuses, peuvent être assez volumineuses, dépassant 2 Go, et peuvent ne pas être prises en charge sur les appareils obsolètes.

Pour un fonctionnement stable et pour économiser des ressources, vous pouvez télécharger une carte non pas de tout le pays, mais de ses régions spécifiques, si de telles régions sont proposées dans l'application. Les informations sur la taille de chaque type de carte sont indiquées sous leur nom.


### Cartes de relief 3D

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png)  ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Vous devez télécharger les cartes **Terrain map (3D)** pour afficher l'ombrage, la pente et le relief 3D. Après avoir téléchargé les cartes, vous pouvez afficher les **courbes de niveau** et le **terrain** à l'aide de la section [Configurer la carte](../map/configure-map-menu.md) du *Menu principal*.

Si la carte affichée à l'écran n'est pas téléchargée, alors dans *Menu → Configurer la carte → Section Topographie → Terrain*, en bas de la liste des fonctionnalités, la section *Télécharger des cartes* avec des cartes supplémentaires suggérées s'affichera.


### Courbes de niveau (mètres ou pieds)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Pour les [**courbes de niveau**](#courbes-de-niveau), vous devez déterminer dans quelles [unités](../personal/profiles.md#units--formats) (mètres ou pieds) elles seront affichées sur la carte et télécharger la version appropriée de la carte sur votre appareil.

**Les options d'unité ne sont pas interchangeables**, donc si vous devez passer des mètres aux pieds ou inversement, vous devez désinstaller la version précédente de la carte des courbes de niveau pour télécharger la nouvelle version.


## Courbes de niveau

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Courbes de niveau*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

Les [courbes de niveau](../map/vector-maps.md#-contour-lines) sont une représentation graphique des altitudes sur une carte et sont disponibles sous forme de cartes vectorielles. Elles forment des lignes correspondant à des points de même altitude, qui forment des contours permettant de déterminer dans quelle direction et de combien la surface s'incline.

Lors de l'utilisation du [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine) :

- **Version 2 (OpenGL)**. Les courbes de niveau sont prises en charge en mode vue 3D et en mode relief 3D.
- **Version 1**. Les courbes de niveau ne sont pas prises en charge lors de l'utilisation de cartes tuilées provenant d'Internet.

**Paramètres d'apparence** :

- *<Translate android="true" ids="download_srtm_maps"/>*. Activer ou désactiver les courbes de niveau.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Définir les [niveaux de zoom](../map/interact-with-map.md#my-location-and-zoom) auxquels les courbes de niveau sont visibles.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Choisir la couleur d'affichage des courbes de niveau.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Ajuster la largeur des courbes de niveau.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Sélectionner la densité des courbes de niveau (Faible, Moyenne, Élevée). Des densités plus élevées peuvent affecter la vitesse de chargement.
- *<Translate android="true" ids="maps_and_resources"/>*. Afficher et télécharger les cartes de courbes de niveau pour la région actuelle et les zones voisines.


## Terrain

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

L'option **Terrain** active et vous permet de personnaliser trois fonctionnalités telles que l'*Ombrage*, la *Pente* et l'*Altitude*.
Fonctionnalités spécifiques :

- Une seule option peut être activée à la fois, soit Ombrage, soit Pente, soit Altitude.
- Si vous ne voyez aucun changement après avoir téléchargé et activé la carte correspondante, il est recommandé de redémarrer l'application.

Le menu **Terrain** comprend la sélection d'un [schéma de couleurs](#schéma-de-couleurs-par-défaut) avec la possibilité de le [modifier](#modifier-le-schéma-de-couleurs) (pour les [abonnés Pro](../../user/purchases/index.md)), la possibilité de modifier la transparence de la couche sur la carte ([visibilité](#visibilité)), et de sélectionner le [niveau de zoom](#niveaux-de-zoom) pour son affichage, des informations sur la taille des [données mises en cache](#taille-du-cache), et une liste des [cartes](../../user/personal/maps-resources.md) nécessaires pour afficher la couche.


## Couches d'ombrage, de pente et d'altitude

| Ombrage | Pente | Altitude |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

L'**ombrage** est basé sur la simulation de l'éclairage de surface à l'aide de données de terrain. Cette méthode implique la création d'ombres et de reflets en fonction de l'angle de la surface par rapport à la source lumineuse. En conséquence, vous voyez des collines, des vallées et d'autres détails naturels du terrain sur la carte.

La **pente** détermine l'angle d'inclinaison de la surface en fonction des données d'altitude des points sur la carte. Les calculs d'angle de pente sont effectués en tenant compte des changements d'altitude et des distances entre les points, et en représentant ce changement sous forme d'angle de pente.

L'**altitude** représente l'élévation des points sur la carte par rapport au niveau de la mer. Elle vous aide à comprendre comment le terrain change en hauteur. Cette fonctionnalité est particulièrement utile pour des activités telles que la randonnée ou le VTT, où connaître l'altitude peut aider à planifier des itinéraires et à gérer l'effort physique. Les données d'altitude sont dérivées de modèles d'élévation et offrent une vue claire des points hauts et bas, ce qui facilite l'évaluation de la difficulté d'un itinéraire ou l'identification des sommets et des vallées le long de votre parcours.

Les cartes raster d'**ombrage**, de **pente** et d'**altitude** sont créées à partir de données de terrain raster telles que les modèles numériques d'élévation (MNE).

**Utilisation :**

- *Navigation.* Aide à identifier les pentes raides, à la fois en descente et en montée, ce qui peut être crucial pour une navigation sûre.
- *Planifier des itinéraires.* Aide à choisir les itinéraires les plus appropriés, en tenant compte du terrain.
- *Estimation du terrain.* Il est pratique de visualiser le paysage, surtout si vous marchez ou faites du vélo.


### Schéma de couleurs par défaut

| Ombrage | Pente | Altitude |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- L'*ombrage* utilise des nuances sombres pour montrer les pentes, les sommets et les basses terres. Le soleil virtuel a un azimut (direction) fixe de 315 degrés.

- La *pente* utilise la couleur pour visualiser la raideur du terrain. Vous pouvez en savoir plus [ici](https://en.wikipedia.org/wiki/Grade_(slope)). Chaque couleur correspond à un angle de déviation par rapport à l'horizontale. Un schéma de couleurs *Pente* supplémentaire, ***Avalanche***, est disponible dans le menu **Modifier**.

- L'*altitude*. La carte d'altitude colore chaque pixel en fonction de la hauteur de carte calculée à l'aide du dégradé d'un schéma de couleurs défini. Habituellement, les schémas d'altitude dépendent beaucoup de l'emplacement. Dans les zones montagneuses, vous préférerez distribuer les couleurs sur une plage d'altitude plus large et dans les zones plates, vous sélectionnerez un schéma de couleurs avec une petite plage entre l'altitude min/max.

> *Veuillez lire l'article [Schéma de couleurs](../personal/color-palette-schemes.md) pour plus d'informations.*


### Modifier le schéma de couleurs

:::info Fonctionnalité payante
*Modifier le schéma de couleurs* est une fonctionnalité payante **OsmAnd Pro** pour [iOS](../purchases/ios.md#pro-features) et [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png)   ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png)   ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

La fonctionnalité *Modifier le schéma de couleurs* vous permet de sélectionner un schéma de couleurs :

- À partir d'une [liste prédéfinie](#schéma-de-couleurs-par-défaut).
- À partir de fichiers de palette de couleurs que vous avez créés sur votre ordinateur. Des fichiers personnalisés peuvent être ajoutés à OsmAnd à l'aide de l'[outil d'importation/exportation](../personal/import-export.md).

Vous pouvez [modifier ces palettes](../personal/color-palette-schemes.md#edit-palette-file) pour personnaliser l'apparence des cartes et des itinéraires.


### Visibilité

| Visibilité 31 % | Visibilité 74 % |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

La fonction *Visibilité* est utilisée pour ajuster la transparence des ombres pour l'ombrage et les couleurs utilisées pour représenter l'angle dans le paramètre Pente.

### Niveaux de zoom

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

La fonction *Niveaux d'échelle* vous permet de définir les valeurs minimale et maximale des niveaux de zoom de la carte, allant de 4 à 19, auxquels les couches de carte Ombrage ou Pente seront affichées.

### Taille du cache

La **taille du cache** est une section informative qui affiche la quantité de mémoire sur votre appareil actuellement utilisée pour les données de *terrain*. Chaque fois que vous visualisez des informations d'*ombrage* ou de *pente* sur une carte, toutes ces données sont temporairement stockées dans le cache pour un accès rapide et une utilisation ultérieure, évitant ainsi une charge supplémentaire sur le processeur de votre appareil.

La **vidange du cache** est parfois nécessaire pour libérer de l'espace sur votre appareil ou pour résoudre d'éventuels problèmes de performances. Pour vider le cache, vous devez accéder aux *Paramètres système* de l'appareil, puis le chemin peut être le suivant : *Applications → OsmAnd → Stockage → Vider le cache*.


### Moteur de rendu (Android)

L'**ombrage** et la **pente** sont affichés et ajustés dans n'importe quel [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine) sélectionné.

1. Si vous utilisez le **moteur de rendu de carte Version 1**, vous devez utiliser le [téléchargement](../start-with/download-maps.md) normal des cartes raster d'ombrage et de pente.

2. Si vous utilisez le **moteur de rendu de carte Version 2 (OpenGL)** :
    - Vous pouvez continuer à utiliser le type de téléchargement normal des cartes raster d'ombrage et de pente. Cependant, pour ce faire, vous devrez activer le [plugin de développement OsmAnd](../plugins/development.md) et activer le paramètre [Utiliser le format raster SQLite pour l'ombrage et la pente](../plugins/development.md#terrain).

    - Alternativement, vous pouvez utiliser le téléchargement de [carte de terrain (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Cela économise de l'espace mémoire sur votre appareil, et les effets d'ombrage, de pente et de relief 3D seront générés à partir de ceux-ci à l'aide de votre appareil.


### Actions rapides

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Vous pouvez utiliser les boutons *Action rapide* sur l'écran de la carte pour basculer la visibilité des [courbes de niveau](#courbes-de-niveau), des couches de [terrain](#terrain) et du [schéma de couleurs du terrain](#schéma-de-couleurs-par-défaut). En fonction de la couche sélectionnée dans le menu Configurer la carte, l'attribution d'une action *Terrain* au bouton affichera l'*ombrage*, la *pente* ou l'*altitude*.

Les principaux paramètres pour *Afficher ou masquer les types de carte* se trouvent dans la section Topographie du menu Configurer la carte. Dans l'article [Action rapide](../widgets/quick-action.md#configure-map), vous trouverez une liste des couches disponibles pour l'affichage. Si vous avez besoin d'un accès rapide à cette configuration de carte, utilisez l'outil *Bouton personnalisé*.

- Aller à [Ajouter une action](../widgets/quick-action.md#custom-buttons) : *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Configurer la carte*.
- Ajoutez un ou plusieurs boutons QA pour modifier la visibilité d'une couche topographique particulière.


## Relief 3D

:::info Fonctionnalité Pro
Le relief 3D est une fonctionnalité payante [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

La fonctionnalité Relief 3D produit un relief surélevé et fournit une représentation tridimensionnelle du paysage. Le relief 3D fonctionne hors ligne et peut être utilisé avec les [cartes vectorielles OsmAnd](../map/vector-maps.md) ou toute [carte raster](../map/raster-maps.md#select-raster-maps) comme [source de carte](../map/raster-maps.md#main) ou comme [sous-couche/superposition](../map/raster-maps.md#overlay-layer).

***Comment afficher le relief 3D sur la carte.***

- Achetez un abonnement **OsmAnd Pro** pour [iOS](../purchases/ios.md#pro-features) ou [Android](../purchases/android.md#pro-features).

- Aller à [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md) :
    - **Android** : faites défiler jusqu'à la section *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS** : faites défiler jusqu'à la section *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Téléchargez la [carte de terrain (3D)](#cartes-de-relief-3d) des régions, si nécessaire.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Couche de carte vectorielle | Couche de carte raster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Couche de carte vectorielle | Couche de carte raster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png)  | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Exagération verticale

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Exagération verticale*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Exagération verticale*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

L'*exagération verticale* est un coefficient spécial pour le *relief 3D*. Vous pouvez modifier l'échelle (*Exagération verticale*) de x1 à x3. Cette fonctionnalité vous permet de visualiser des contours de terrain plus lisses avec des détails accrus.


### Ombrage et relief 3D

| Ombrage | Relief 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

L'**ombrage** est un type de carte qui affiche le terrain à l'aide d'ombres, créant une représentation visuelle de la pente et de la forme de la surface terrestre.
Le **relief 3D** est une fonctionnalité qui ajoute des effets tridimensionnels à la carte.

Si vous **désactivez** l'*ombrage* et **activez** le *relief 3D*, les ombres du relief seront toujours visibles car l'*ombrage* et le *relief 3D* sont deux façons différentes de visualiser une carte. L'*ombrage* crée des ombres basées sur le terrain et les ajoute à la carte, tandis que le *relief 3D* modélise des éléments 3D pour montrer la profondeur et la forme du terrain, et les ombres font partie de la visualisation. Ces fonctionnalités peuvent fonctionner en parallèle, et la désactivation de l'*ombrage* n'affecte pas la façon dont les effets 3D sont affichés.

Lorsque l'**ombrage** est **activé**, une image avec des ombres de relief apparaît plus détaillée, plus sombre et plus étagée qu'une image de *relief 3D*. L'explication est que l'*ombrage* accentue les dégradés et les contrastes du terrain, créant une image plus nette et plus détaillée. La fonctionnalité *relief 3D* donne à la carte une apparence plus fluide et plus lissée, adoucissant le terrain et réduisant potentiellement la visibilité de certains détails plus fins.


## Combiner les types de couches

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd vous permet de combiner plusieurs types de couches de carte pour un affichage plus visuel.

- La combinaison des **courbes de niveau** et de l'**ombrage** est optimale pour estimer visuellement et numériquement la raideur des pentes de montagne.
- La combinaison des **courbes de niveau** et des couches de **pente** est la meilleure pour estimer la raideur des pentes et trouver des points de même hauteur.
- La combinaison des couches de **relief 3D** et d'**ombrage** vous permet d'obtenir une représentation plus réaliste et visuelle du terrain, du relief et des détails du paysage. Cette combinaison est particulièrement adaptée aux terrains montagneux et vallonnés.


## Articles connexes

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (styles de carte)](../../user/map/vector-maps.md)

### Problèmes courants et solutions

<!-- Troubleshooting Steps-->

1. Comment restaurer l'achat du plugin Topographie (anciennement Courbes de niveau). [(vérifier)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Les courbes de niveau, les données d'altitude ou le relief 3D ne sont pas affichés. [(vérifier)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. La carte passe automatiquement en mode 3D pendant la navigation :
    - Assurez-vous que le bouton **Mode 3D** est désactivé dans le **Menu → Configurer l'écran → Boutons → Boutons par défaut**.
    - Vérifiez si des fonctionnalités de terrain sont activées dans **Menu → Configurer la carte → Topographie** qui pourraient déclencher un effet 3D.

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*

-- source-hash: blake2s: 933f553f35b03d554789bdbb294dabc7fc0fb98edd6422aa7d931c9bb06a034d --
