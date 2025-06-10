---
source-hash: f4b2b293ad51358460be21f120eea4ead0ba855b2536fc69c26f9eb724fe95d1
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Introduction {#introduction}

GPX (GPS Exchange Format) est un standard basé sur XML largement utilisé pour stocker des données GPS, y compris des traces, des routes et des points de passage. OsmAnd prend en charge le format GPX pour l'importation, l'exportation et la personnalisation des données GPS pour la navigation, permettant aux utilisateurs débutants et avancés d'optimiser leur expérience.

#### Qu'est-ce qui rend OsmAnd GPX unique ? {#what-makes-osmand-gpx-unique}

OsmAnd étend le format standard GPX 1.1 en introduisant son propre espace de noms XML personnalisé `osmand:`. Cet espace de noms permet de stocker des données supplémentaires telles que :

- Paramètres visuels de la trace (couleur, largeur, flèches).
- Groupement et icônes des points de passage.
- Attributs détaillés de la route, y compris les routes calculées et les types d'activité.

#### Que découvrirez-vous dans ce guide ? {#what-will-you-learn-in-this-guide}

Cet article fournit un aperçu complet de la structure et des fonctionnalités des fichiers GPX dans OsmAnd. Vous apprendrez :

1. Comment personnaliser les traces et les points de passage à l'aide de balises GPX.
2. Des fonctionnalités avancées telles que les descriptions HTML, les données de capteurs et les types d'activité.
3. Comment exporter des routes calculées et préserver toutes leurs fonctionnalités.
4. Convertir des fichiers GPX au format OBF pour un stockage optimisé et des capacités de recherche avancées.

#### Aperçu de la structure GPX {#gpx-structure-overview}

Les fichiers GPX dans OsmAnd organisent les données hiérarchiquement dans les éléments suivants :

- `<gpx>` - l'élément racine du fichier.
- `<trk>` - représente les traces, qui contiennent :
  - `<trkseg>` - segments de la trace, qui sont ensuite divisés en `<trkpt>` (points de trace).
- `<rte>` - représente les routes, y compris les points de passage et les points clés.
- `<wpt>` - représente les points de passage individuels.


## Personnalisation de la trace {#track-customization}

### Paramètres d'apparence de la trace {#track-appearance-parameters}

Cette section décrit comment OsmAnd affiche les traces sur la carte et les options de personnalisation disponibles pour ajuster leur apparence. Les paramètres décrits ci-dessous sont appliqués dans la balise `<gpx>` et affectent toutes les traces incluses dans un fichier GPX.

| Nom de la balise  | Description / Valeurs |
|:----------------------------------------|:---------|
| `<color>`                                 | - Définit la couleur de la ligne de trace sur la carte.  <br/>  - *Chaîne :* Code couleur HEX `#RRGGBB` ou `#AARRGGBB` |
| `<width>`                                 | - Spécifie la largeur de la ligne de trace. <br/>  - *Chaîne :* `“thin”`, `“medium"`, `“bold”` (défini par l'attribut `“currentTrackWidth”`), ou entier (1-24) |
| `<show_arrows>`                           | - Active ou désactive les flèches de direction le long de la trace. <br/> - *Booléen :* `"true"` / `"false"` |
| `<show_start_finish>`                     | - Affiche ou masque les marqueurs de début et de fin de la trace. <br/> - *Booléen :* `"true"` / `"false"` |
| `<split_type>`                            | - Spécifie le type de segmentation de la trace. <br/> - *Chaîne :* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>`                        | - Définit l'intervalle de segmentation de la trace en fonction du type sélectionné. <br/> - *Double :* Entier (mètres pour `"distance"`, secondes pour `"time"`) |
| `<line_3d_visualization_by_type>`         | - Spécifie le type de visualisation 3D pour la trace. <br/> - *Chaîne :* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Définit le type de couleur du mur pour la visualisation 3D. <br/> - *Chaîne :* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>`   | - Définit la position de la visualisation 3D par rapport à la trace. <br/> - *Chaîne :* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>`           | - Multiplicateur pour mettre à l'échelle la valeur de l'attribut `line_3d_visualization_by_type`. <br/> - *Flottant :* Par défaut : 1.0 |
| `<elevation_meters>`                      | - Spécifie une élévation fixe en mètres pour `"fixed_height"` dans `<line_3d_visualization_by_type>`. <br/> - *Flottant :* Par défaut : `1000` |
| `<coloring_type>`                         | - Détermine la méthode de coloration de la trace. <br/> - *Chaîne :* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>`                         | - Spécifie le schéma de couleurs pour la trace. <br/> - *Chaîne :* `"default"` / [schémas définis par l'utilisateur](/docs/user/personal/color-palette-schemes) |

***Exemple :***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Balise 'coloring_type' {#tag-coloringtype}

La balise `<coloring_type>` dans OsmAnd permet aux utilisateurs de personnaliser la coloration des traces en fonction d'attributs de données spécifiques, offrant ainsi un moyen visuel d'interpréter les informations clés le long de la trace.

| Type | Description | Cas d'utilisation |
|:-----------------------|:--------|:--------|
| `<solid>`                | La trace entière est affichée avec une seule couleur unie spécifiée par la balise `color`. | À utiliser lorsqu'une couleur uniforme est nécessaire pour une visibilité claire. |
| `<speed>`                | La trace est colorée en dégradé en fonction des valeurs de vitesse à chaque point de trace (`<trkpt>`). Les vitesses plus élevées sont représentées par des couleurs distinctes. | Idéal pour des activités telles que le cyclisme ou la conduite pour visualiser les changements de vitesse. |
| `<altitude>`             | La trace est colorée en fonction des données d'élévation à chaque `<trkpt>`. Un dégradé est appliqué, indiquant différentes plages d'altitude. | Utile pour les randonnées ou les itinéraires de montagne afin de mettre en évidence les changements d'altitude. |
| `<slope>`                | La trace est colorée en fonction de l'inclinaison/déclinaison entre les points de trace consécutifs. Les gradients positifs indiquent des pentes ascendantes, tandis que les gradients négatifs indiquent des pentes descendantes. | Convient aux cyclistes ou aux randonneurs analysant la difficulté de la trace. |
| `<routeInfo_roadClass>`  | Colore les segments de trace en fonction de la classification routière OpenStreetMap (OSM) (par exemple, autoroute, rue résidentielle). | Aide à distinguer les différents types de routes lors du suivi d'un itinéraire. |
| `<routeInfo_surface>`    | Colore les segments de trace en fonction du type de surface OSM (par exemple, pavé, gravier, terre). | Utile pour déterminer les conditions de la trace lors d'activités tout-terrain. |
| `<routeInfo_smoothness>` | Colore la trace en fonction des évaluations de fluidité OSM, indiquant la rugosité ou la fluidité du chemin (par exemple, excellent, mauvais). | Utile pour évaluer la navigabilité de la trace pour des véhicules spécifiques. |

### Balises GPX dans l'interface utilisateur {#gpx-tags-in-ui}

Les balises d'extension GPX sont affichées en bas du menu contextuel de la trace.
Les extensions `<metadata>` et `<gpx>` `<extensions>` sont listées.
Les balises d'apparence sont exclues de la liste.
Pris en charge depuis OsmAnd Android 5.0.

## Personnalisation des points de passage {#waypoints-customization}

Cette section explique comment OsmAnd permet la personnalisation des points de passage dans les fichiers GPX en utilisant des icônes, des couleurs et des regroupements.

### Icônes de points de passage {#waypoint-icons}

Les balises suivantes contrôlent l'apparence des icônes de points de passage dans OsmAnd :

| Balise GPX   | Par défaut | Objectif   |
|:-------------|:----------|:-----------|
| `<icon>`       | *(aucun)*   | Spécifie l'icône du point de passage (par exemple, `historic_castle`). |
| `<color>`      | `"red"`     | Définit la couleur de l'icône à l'aide d'un code HEX (par exemple, `#FF0000`) ou d'un nom de couleur (par exemple, `"blue"`). |
| `<background>` | `"circle"`  | Définit la forme de l'arrière-plan de l'icône. Valeurs possibles : `"circle"`, `"square"`, `"octagon"`. |

***Exemple :***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Groupes de points de passage {#waypoint-groups}

Les points de passage dans OsmAnd peuvent être triés en groupes en fonction de leur type. Ce regroupement permet à l'utilisateur d'organiser plusieurs points de passage sous des catégories spécifiques, améliorant ainsi la clarté et la lisibilité de la carte.

- **Définition du groupe de points.** La balise `<type>` à l'intérieur de l'élément `<wpt>` spécifie le groupe du point (par exemple, `"castle"`, `"aqueduct"`).
- **Configuration du groupe.** L'extension `<osmand:points_groups>` dans l'élément `<gpx>` définit les paramètres de chaque groupe, y compris le `name`, `color`, `icon` et `background` pour tous les points de passage de ce groupe.

***Exemple :***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Fonctionnalités GPX avancées {#advanced-gpx-features}

### Type d'activité {#activity-type}

À partir de la [version 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) d'OsmAnd, vous pouvez classer vos traces par type d'activité pour une analyse et une organisation plus poussées dans des dossiers.

La liste des types d'activité pris en charge est disponible dans le fichier [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Chaque activité est identifiée par son `ID` unique et stockée dans les extensions `<metadata>` du fichier GPX.


***Exemple :***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML dans les descriptions {#html-in-descriptions}

Les balises HTML peuvent être utilisées dans les balises `<desc>` des éléments `<metadata>` ou `<wpt>` pour fournir des descriptions formatées pour les traces ou les points de passage.

Pour éviter les conflits avec la syntaxe XML, remplacez les caractères spéciaux comme suit :

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Exemple :***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        Le premier paragraphe sera affiché comme une description &lt;b&gt;brève&lt;/b&gt;.
        Les balises HTML sont supprimées dans les descriptions brèves.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Deuxième paragraphe&lt;/h3&gt;
        &lt;b&gt;Bonjour, le monde !&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Notes importantes :***

- OsmAnd supprime toutes les balises HTML lors de la génération de descriptions brèves, laissant du texte brut.
- Vous pouvez utiliser des balises comme `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>`, et plus encore pour la personnalisation.


### Balise Link {#link-tag}

Utilisez la balise `<link>` pour associer des URL à des métadonnées, des informations d'auteur ou des points de passage dans les fichiers GPX OsmAnd. Cette balise peut également afficher une image lorsque l'URL pointe vers un fichier image.

***Exemples (Lien de métadonnées avec image) :***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>Logo OsmAnd</text>
  </link>
</metadata>
```

***Exemples (Lien de point de passage avec image) :***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Balises de données de capteurs {#sensor-data-tags}

Vous pouvez enrichir vos traces avec des données provenant de capteurs de fitness, tels que des moniteurs de fréquence cardiaque ou des capteurs de température. OsmAnd utilise le schéma [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) de Garmin pour stocker ces données, ce qui les rend compatibles avec des plateformes comme **Strava** et **Garmin Basecamp**.

*Balises de données de capteurs prises en charge :*

- **hr** - fréquence cardiaque (en battements par minute).
- **cad** - cadence de vélo (en révolutions par minute).
- **atemp** - température ambiante (en degrés Celsius).
- **power** - puissance de sortie du vélo (en watts).

***Exemple :***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Détails des points de trace {#track-point-details}

Chaque `<trkpt>` (point de trace) dans le fichier GPX peut inclure des attributs supplémentaires pour capturer des données telles que la vitesse, le cap et l'élévation.

*Attributs pris en charge :*

- **speed** - vitesse au point de trace (en mètres par seconde).
- **heading** - direction du mouvement (0-359 degrés).
- **ele** - élévation au-dessus du niveau de la mer (en mètres).
- **time** - horodatage du point de trace.

***Exemple :***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Route(s) calculée(s) {#calculated-routes}

Dans **OsmAnd**, vous pouvez calculer un itinéraire et enregistrer toutes les données au format GPX, de sorte que toutes les fonctionnalités de navigation seront disponibles ultérieurement comme une navigation GPX en cours d'exécution. Ainsi, le fichier GPX d'OsmAnd contiendra les segments d'itinéraire, les virages, les noms de rues, les types de routes, les restrictions, etc. L'itinéraire peut être entièrement restauré comme s'il venait d'être construit, même en l'absence des cartes hors ligne correspondantes.

Un fichier gpx peut contenir plusieurs itinéraires. Chacun d'eux est contenu dans un segment spécifique sous **trkseg** / **extensions**. Un fichier gpx est enregistré sous cette forme lors de l'exportation d'un itinéraire construit ou lors de l'enregistrement d'une trace composée de plusieurs segments séparés via la fonctionnalité [**Planifier un itinéraire**](../../user/plan-route/create-route.md).

[**Planifier un itinéraire**](../../user/plan-route/create-route.md) ajoute également un (ou plusieurs, en fonction du nombre de segments / traces séparés contenus) blocs **rte** au fichier gpx, contenant les points clés de l'itinéraire (**rtept**).

#### Structure Gpx : {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Liste des points de segment. L'ordre des points correspond à l'ordre et à la longueur des segments d'itinéraire (<route><segment length="x" ... />).
    // La valeur de l'attribut "length" correspond au nombre de points dans ce segment de l'itinéraire.
    <trkpt ... ></trkpt>
    <extensions>
      // Liste des segments d'itinéraire
      <route>
        <segment ... />
      </route>
      // Propriétés des segments inclus dans l'itinéraire.
      // Ces données sont extraites des cartes hors ligne lors de la construction initiale d'un itinéraire.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Liste des points d'itinéraire intermédiaires. S'il y a plusieurs itinéraires, l'ordre de la liste rte correspond à l'ordre des segments d'itinéraire.
<rte>
  <rtept ... />
    // Pour les itinéraires construits avec "Planifier un itinéraire", les paramètres des points clés sont enregistrés.
    // Si rtept n'est pas le premier et le dernier, avant lui (avec le même idx) trkpt sera avec les mêmes données.
    <extensions>
      // Type de profil d'itinéraire pour le segment suivant (voiture, vélo, piéton, etc.).
      <profile>...</profile>
      // L'index du point dans le segment gpx qui correspond au premier point de l'itinéraire calculé pour ce segment.
      // Si rtept n'est pas le premier et le dernier, avant lui (avec le même idx) trkpt sera avec les mêmes données.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Propriétés importantes : {#important-properties}

* **trkpt_idx** du premier **rtept** dans **trkseg** est 0. Donc, s'il y a deux **trkseg**s, il y aura deux **rtept**s avec **trkpt_idx** = 0
* **trkpt_idx** du dernier **rtept** dans **trkseg** est égal au nombre de **trkpt**s dans **trkseg** moins 1. Par exemple, si **trkseg** a 12 **trkpt**s, **trkpt_idx** du dernier **rtept** devrait être 11
* Les **segments** d'itinéraire voisins se chevauchent : la fin du **segment** précédent et le début du **segment** suivant sont le même **trkpt**.
* Il y a une exception lorsque les **segments** d'itinéraire voisins ne se chevauchent pas (ne partagent pas le même **trkpt**). Cela se produit lorsqu'il y a un **rtept** "entre" les **segments** d'itinéraire. La fin du **segment** d'itinéraire précédent est un **trkpt**, et le début du **segment** d'itinéraire suivant est un autre **rtept**. Mais ces deux **trkpt**s sont totalement égaux en lat, lon et autres paramètres.
* Le chevauchement des **segments** d'itinéraire peut être détecté via **length** et **startTrkptIdx** (ce dernier n'est utilisé que pour la commodité de la lecture humaine) :
  - Si la somme de **startTrkptIdx** et **length** du **segment** d'itinéraire précédent est égale à **startTrkptIdx** du **segment** d'itinéraire suivant, les **segments** d'itinéraire ne se chevauchent pas
  - Si la somme est inférieure d'un, alors les **segments** d'itinéraire se chevauchent
* Il peut y avoir des **segments** d'itinéraire droits. Ils sont marqués avec **id="-1"**. Ils peuvent apparaître dans deux cas :
  - C'est un itinéraire multiprofil, et l'utilisateur a sélectionné une ligne droite
  - L'utilisateur a placé **rtept** trop loin de la route la plus proche, donc osmand a tracé une ligne droite entre **rtept** et la route
* trkpts = length - (segments - 1) + (rtepts - 2), où :
  - trkpts - nombre de **trkpt**s à l'intérieur de **trkseg**
  - length - somme de toutes les **length**s des **segments** d'itinéraire à l'intérieur de **trkseg**
  - segments - nombre de **segments** d'itinéraire à l'intérieur de **trkseg**
  - rtepts - nombre de **rtept**s appartenant à **trkseg**

#### Exemple : {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## Collections GPX en OBF {#gpx-collections-in-obf}

OsmAnd vous permet de convertir plusieurs fichiers GPX en un seul fichier OBF. Cela permet de stocker des milliers de traces GPX dans un format compact et optimisé tout en conservant des fonctionnalités telles que les icônes de carte spéciales, la personnalisation de l'apparence des traces et la fonctionnalité de recherche. Cela évite la limite des fichiers GPX locaux volumineux qui ne peuvent généralement pas gérer plus de 500 000 points au total, bien que certaines fonctionnalités des traces GPX puissent être manquantes par rapport à l'affichage d'un fichier OBF.

Étapes pour convertir GPX en OBF :

- Connectez-vous à [OsmAnd Web Map](https://osmand.net/map) *→ Traces → Sélectionnez un dossier → *Menu* (⋮) *→ Télécharger en tant que collection OBF*

- Le fichier `<.obf>` résultant peut être importé dans OsmAnd (nécessite OsmAnd Android 5.0+).


### Style de ligne de trace {#track-line-style}

Personnalisez les lignes de trace avec les balises suivantes :

| Balise GPX                | Par défaut | Objectif |
|:--------------------------|:--------|:---------|
| `<name>`                  | *(aucun)* | Nom affiché au-dessus de la ligne de trace. |
| `color`                   | `red`   | Couleur principale (HEX ou texte). |
| `colour`, `displaycolor`  | *(aucun)* | Autres moyens de remplacer `color`. |
| `shield_waycolor`         | *(aucun)* | Remplacement pour la `color` de la ligne de trace du bouclier. |
| `translucent_line_colors` | `no`    | Définir sur `yes` pour les couleurs semi-transparentes. |
| `width`                   | `thin`  | Largeur de ligne : `"thin"`, `"medium"`, `"bold"`, `"1-24"`, ou `"roadstyle"` |

**Couleurs prises en charge :** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Exemple :***

```xml
<gpx>
  <metadata>
    <name>
      Nom de la trace situé dans les métadonnées
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Boucliers de ligne de trace {#track-line-shields}

Les boucliers sont des icônes ou des symboles affichés le long de la ligne de trace. OsmAnd prend en charge les boucliers [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), qui peuvent inclure :

- Icône d'arrière-plan - la forme principale (par exemple, cercle ou carré).
- Icônes de premier plan - jusqu'à deux symboles plus petits superposés à l'arrière-plan.
- Texte - courtes descriptions ou identifiants, dérivés des balises `shield_text` ou `ref`.

Si aucune propriété de bouclier n'est définie, OsmAnd utilise un bouclier jaune de taille automatique pour la trace.

***Balises pour les boucliers :***

| Balise GPX         | Objectif                                                                |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg`        | Définit l'icône d'arrière-plan pour le bouclier.                            |
| `shield_fg`        | Spécifie la première icône de premier plan (par exemple, une flèche ou un point).           |
| `shield_fg_2`      | Spécifie la deuxième icône de premier plan (facultatif).                       |
| `shield_text`      | Définit le texte court à afficher au-dessus du bouclier (par exemple, référence d'itinéraire). |
| `shield_textcolor` | Détermine la couleur du texte du bouclier (facultatif).                    |
| `shield_waycolor`  | Remplace la couleur de trace standard pour la ligne du bouclier (facultatif).   |
| `ref`              | Utilisé comme texte de secours si `shield_text` n'est pas fourni.                |

***Exemple :***

```xml
<gpx>
  <trk>
    <name>Exemple d'itinéraire</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Affichage des points de passage {#waypoints-display}

Les icônes de points de passage peuvent être personnalisées avec les balises suivantes :

| Balise GPX   | Par défaut | Objectif                                   |
|:-------------|:---------|:---------------------------------------------------|
| `icon`       | *(aucun)*  | Spécifie l'icône du point de passage (utilise les icônes standard de l'éditeur de points de passage OsmAnd). |
| `color`      | `red`    | Définit la couleur de l'icône à l'aide d'un code HEX (par exemple, `#ffaa00`) ou d'un nom de couleur pris en charge (options limitées). |
| `background` | `circle` | Définit la forme de l'icône. Valeurs prises en charge : `circle`, `square`, `octagon`. |

***Comportement des formes de `background` :***

- `circle` - affiche l'icône avec un arrière-plan circulaire.
- `square` - affiche l'icône avec un arrière-plan carré, par défaut rouge si aucune couleur n'est spécifiée.
- `octagon` - traité comme un arrière-plan circulaire dans OsmAnd.

**Couleurs prises en charge pour** `background=circle` : blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Améliorations avec des éléments supplémentaires :***

- Vous pouvez ajouter des descriptions formatées aux points de passage à l'aide de [code HTML](#html-in-descriptions). Cela vous permet d'inclure du texte stylisé, des liens ou même des images.
- Les points de passage peuvent afficher des images liées à l'aide de [Lien en tant qu'image](#link-tag).

***Exemple :***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Recherche par nom et références {#search-by-name-and-refs}

Les traces et les points de passage peuvent être localisés à l'aide d'une variété de balises GPX.

| Balise GPX    | Emplacement            | Objectif                                                                     |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>`      | `<metadata>`           | Le nom principal de la trace GPX.                                          |
| `ref`         | GPX `<extensions>`     | Un identifiant court, souvent dérivé de la balise OSM `ref`.                   |
| `shield_text` | GPX `<extensions>`     | Texte affiché sur les boucliers (peut également être utilisé avec `ref`).                    |
| `name_-_lang` | GPX/WPT `<extensions>` | `name:lang` localisé (par exemple, `name_-_en` pour l'anglais, remplacer `:` -> `_-_`) |
| `<name>`      | `<wpt>`                | Le nom du point de passage.                                                   |

***Exemple :***

```xml
<gpx>
  <metadata>
    <name>Sentier du patrimoine de Xemxija</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Recherche par type d'activité {#search-by-activity-type}

OsmAnd organise les traces dans les fichiers OBF en **Groupes d'activités** et **Types d'activités**. Ces classifications vous aident à filtrer les traces en tant que POI ou à créer des filtres de recherche basés sur les activités.

Comment fonctionnent les types d'activités :

- Les types et groupes d'activités sont déterminés à l'aide des `"id"` et `"tags"` du fichier [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd utilise les balises `osmand:activity` ou `osmand:route` pour classer les activités dans les fichiers GPX.


| Balise GPX        | Emplacement | Objectif                                          |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Balise OsmAnd principale pour stocker le type d'activité (ID). |
| `osmand:route`    | GPX `<extensions>` | Autre façon OSM de définir le type d'activité. |


***Exemples d'organisation des traces par type d'activité :***

1. Cela classera la trace dans le groupe **Motocyclisme** avec le type **Motocyclisme tout-terrain (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Cela organisera la trace dans le groupe **Cyclisme** avec le type **VTT**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Balises d'informations de recherche {#search-information-tags}

Les fichiers OBF génèrent et stockent automatiquement des statistiques et des analyses de trace critiques.

| Balise OBF                            | Objectif                                                               |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance`                            | Distance totale couverte par tous les segments de trace.                         |
| `start_ele`, `ele_graph`              | Données d'élévation du GPX, encapsulées dans un tableau binaire compact.           |
| `min_ele`, `avg_ele`, `max_ele`       | Analyses d'élévation minimale, moyenne et maximale.                    |
| `diff_ele_up`, `diff_ele_down`        | Gain et perte d'élévation totaux sur la trace.                       |
| `max_speed`, `avg_speed`, `min_speed` | Analyses de vitesse de trace, y compris la vitesse maximale, moyenne et minimale. |
| `time_span`, `time_span_no_gaps`      | Temps total de la trace, avec et sans prise en compte des écarts.       |
| `time_moving`, `time_moving_no_gaps`  | Temps de déplacement total, avec et sans prise en compte des écarts.              |

### Balises internes {#internal-tags}

Certaines balises GPX sont utilisées ou stockées indirectement dans les fichiers OBF. Reportez-vous à [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) pour plus de détails sur l'implémentation.

| Balise OBF                   | Objectif                                                                                                    |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id`                   | Un identifiant unique pour le fichier GPX, reliant les données de carte et de POI (format : `/[A-Z]+[0-9]+/` par exemple `OSM12345`). |
| `route_type`                 | Identifiant du groupe d'activités (`id`) dérivé de `poi/activities.json`                                        |
| `route_activity_type`        | Identifiant du type d'activité (au sein du groupe) (`id`) dérivé de `poi/activities.json`                      |
| `name`, `ref`, `description` | Attributs localisables et recherchables (`lang="true"` dans les types de POI)                                         |
| `filename`                   | Le nom du fichier GPX original utilisé pour générer cette trace.                                             |
| `track_color`                | Couleur de trace de la section de carte dérivée de `shield_waycolor`, `color`, `colour`, ou `displaycolor`               |
| `extensions_extra_tags`      | Balises supplémentaires arbitraires pour `<gpx><extensions>` au format JSON.                                               |
| `metadata_extra_tags`        | Balises supplémentaires arbitraires pour `<metadata><extensions>` au format JSON.                                               |
| `wpt_extra_tags`             | Balises supplémentaires arbitraires pour les points de passage `<wpt><extensions>` au format JSON.                                     |
| `route_track_point`          | Les points de passage du fichier GPX utilisent ce type dans les données POI.                                                         |
| `route_bbox_radius`          | Spécifie le rayon par défaut pour la recherche de parties de la trace dans la section POI                       |
| `route_shortlink_tiles`      | Spécifie une liste de tuiles OSM Shortlink séparées par des virgules pour accélérer la lecture des données de géométrie (facultatif)       |
| `route_segment_index`        | Spécifie un numéro ordinal du segment de géométrie qui est lié à ce point (facultatif)               |
| `route_name`                 | Le nom de l'itinéraire, utilisé par la fonction interne `searchPoiByName` (obsolète)                                            |

> *Dernière mise à jour : mars 2025*