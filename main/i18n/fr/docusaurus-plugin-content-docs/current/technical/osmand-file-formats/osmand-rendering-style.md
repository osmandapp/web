---
source-hash: 4641e5340e3bce8596fbd9395ae773fc70448323bb664a6c260ca04505614ad5 
sidebar_position: 6
---

# Style de rendu de carte - .render.xml

Si vous souhaitez modifier le style de rendu par défaut, vous devez consulter la [définition sur GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Vous trouverez toutes sortes de styles à ce [lien](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles). Si vous souhaitez créer votre propre style, vous pouvez trouver l'exemple le plus simple.

Si vous décidez de créer votre propre style de rendu personnalisé, vous devrez peut-être créer [vos propres cartes](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) pour ajouter l'affichage de fonctionnalités personnalisées.

## Sections de style de carte

Le fichier de style de carte se compose de plusieurs sections.

| Section | Description |
|---------|-------------|
| **En-tête** | Se compose de `name` (nom du style), `defaultColor` (couleur de carte par défaut pouvant être remplacée par l'attribut defaultColor) et `depends` (hérite de toutes les propriétés du style parent). |
| **Paramètres** | Définis comme `<renderingProperty>` ont `attr` qui sera utilisé dans le style comme nom de paramètre et `name`, `description` seront affichés à l'utilisateur. |
| **Attributs** et **constantes** | Définis comme `<renderingAttribute>` et comme `<renderingConstant>` permettent de réutiliser les mêmes blocs de styles de rendu pour différents objets cartographiques. |
| Section **Order** | Définie comme un bloc [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Chaque objet cartographique est recherché dans la section order pour savoir s'il sera rendu comme point, ligne ou polygone (`objectType`) et dans quel `order` il doit être affiché. **Paramètres de recherche** (entrée) : `tag`, `value`, `zoom`, `point` (vrai ou faux), `area` (type osm), `cycle` (le point de départ et d'arrivée sont les mêmes). **Résultat de la recherche** (sortie) : `objectType` (point = 1, ligne = 2, polygone = 3), `order` (0-255). L'ordre de rendu est défini comme suit : polygones, ombres de ligne, lignes, points. Si l'`order` est le même pour les polygones, les polygones sont affichés du plus grand au plus petit. Remarque : les polygones ne doivent pas se chevaucher partiellement, sinon le comportement n'est pas défini. |
| Section **Text** | Définie comme un bloc [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Chaque objet cartographique affiché est recherché pour savoir s'il doit afficher le texte et comment il doit être affiché. **Paramètres de recherche** (entrée) : `tag`, `value`, `zoom`, `nameTag` (chaque balise de texte est vérifiée). **Résultat de la recherche** (sortie) : `textOnPath`, `textMinDistance` (marge entre les mêmes textes, c'est-à-dire les noms de rues, les références), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (nom supplémentaire entre parenthèses si présent), `textShield` (arrière-plan autour du texte), `icon` (icône au lieu du texte), `textItalic`, `textWrapWidth`, `intersectionMargin` (marge supplémentaire pour ne pas chevaucher le texte). |
| Section **Point** | Définie comme un bloc [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Chaque objet cartographique ponctuel affiché (défini dans la section `order`) est recherché dans cette section pour déterminer comment il doit être affiché. **Paramètres de recherche** (entrée) : `tag`, `value`, `zoom`, `e`. **Résultat de la recherche** (sortie) : `shield` (bouclier d'icône), `icon`, `iconVisibleSize` (espace supplémentaire pour ne pas encombrer les icônes), `iconOrder`, `intersectionSizeFactor`. |
| Section **Polygon** | Définie comme un bloc [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Chaque objet cartographique polygonal affiché (défini dans la section `order`) est recherché dans cette section pour déterminer comment il doit être affiché. **Paramètres de recherche** (entrée) : `tag`, `value`, `zoom`. **Résultat de la recherche** (sortie) : `color` (couleur pour remplir le polygone), `shader` (remplir le polygone avec la même icône), `color_2, color_N` (couleur du contour autour du polygone), `strokeWidth_2` (largeur du contour), `pathEffect_2`, `cap_2`. |
| Section **Line** | Définie comme un bloc [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Chaque objet cartographique linéaire affiché (défini dans la section `order`) est recherché dans cette section pour déterminer comment il doit être affiché. 1 objet linéaire peut être rendu comme plusieurs lignes combinées jusqu'à -2 couches en dessous et jusqu'à 7 couches au-dessus. **Paramètres de recherche** (entrée) : `tag`, `value`, `zoom`, `nameTag` (chaque balise de texte est vérifiée). **Résultat de la recherche** (sortie) : `color, color_*` (couleur du contour autour du polygone), `strokeWidth, strokeWidth_*` (largeur du contour), `pathEffect, pathEffect_*` (effet de chemin), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (ombre autour de la ligne). |

## Sélecteurs de fonctionnalités de carte
Pour déterminer quels attributs doivent être récupérés du style de rendu, la procédure de recherche suivante est effectuée :
- Trouver le `<case>` le plus interne qui correspond aux paramètres d'entrée de recherche `tag/value/zoom`, c'est-à-dire pour `highway=primary` - `<case tag="highway" value="primary">` sera trouvé.
- Tous les éléments internes de `<case>` sont appliqués séquentiellement en profondeur et les paramètres de sortie sont collectés.
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - la sortie sera 2 si `zoom=15` et la sortie sera 1 sinon.
- Vérifier si `<case>` fait partie d'un `<switch>` et si c'est le cas, tous les `apply` et `apply_if` de ce switch seront également évalués.

Règles d'évaluation :
- Dans chaque 'case', `apply_if`, `switch`, `apply`, les attributs d'entrée sont vérifiés pour correspondre (évaluer à vrai), sinon la section est ignorée et les attributs de sortie ne sont pas collectés.
- Toutes les règles sont évaluées séquentiellement et les paramètres de sortie peuvent être remplacés par les règles suivantes.
- `additional=?` est un attribut d'entrée spécial qui vérifie les balises supplémentaires de l'objet.
- Les paramètres de style de carte sont également des paramètres de recherche d'entrée, en plus de `tag/value/zoom`.
    - Exemple : `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Paramètres d'entrée : nightMode, streetLightingNight ; paramètres de sortie - shield.

## Attributs (spéciaux) et constantes
Les constantes de rendu et les attributs de rendu sont interchangeables et peuvent être utilisés pour simplifier le style de rendu et éviter de copier/coller des valeurs ou des blocs de code. Si un attribut comme `color` est une valeur unique, il est **préférable** d'utiliser une **constante de rendu** car cela accélère considérablement les performances du style de rendu.

Les constantes de rendu ne peuvent être utilisées qu'avec une seule valeur donnée : `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` et plus tard dans les sélecteurs de fonctionnalités comme `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Les attributs de rendu peuvent avoir une structure intégrée avec des sélecteurs supplémentaires et produire l'un des attributs suivants (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Exemple :
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```

### Attributs spéciaux

Les attributs spéciaux sont `<renderingAttribute >` qui ne sont pas utilisés par les sélecteurs mais utilisés directement par le code pour interroger une fonctionnalité spécifique qui est dessinée dans l'application comme un itinéraire de navigation, une règle, une trace gpx, etc.

| Attribut spécial | Description |
|-------------------|-------------|
| `measureDistanceLine` | Rendu de ligne pour la fonctionnalité Planifier l'itinéraire |
| `markerGuideline`, `markerPlanRouteline` | Rendu des lignes vers les marqueurs |
| `route` | Rendu d'un itinéraire de navigation |
| `gpx` | Rendu d'une trace GPX |
| `publicTransportLine` | Rendu d'un itinéraire de navigation de transport en commun |
| `walkingRouteLine` | Rendu d'un itinéraire de navigation de transport en commun : itinéraire piéton entre les arrêts |
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Comment rendre le widget Règle de rayon et mesurer la distance par appui |
|||
| `defaultColor` | Couleur par défaut pour remplir la carte (bascule le mode nuit/jour) |
| `shadowRendering` | Interne comment rendre l'ombre avec Skia |
|||
| `routeInfo_*` | Exemple : `routeInfo_surface`, `routeInfo_roadClass` produisent des classes de routes à afficher dans la légende de l'itinéraire. |
|||
| `polygonMinSizeToDisplay` | Internes comment rendre les petites lignes et les petits polygones |
| `roadDensityZoomTile` | Internes comment rendre les petites lignes et les petits polygones |
| `roadsDensityLimitPerTile` | Internes comment rendre les petites lignes et les petits polygones |
| `defaultSymbolPathSpacing` | Internes comment rendre les petites lignes et les petits polygones |
| `defaultBlockPathSpacing` | Internes comment rendre les petites lignes et les petits polygones |
| `globalPathPadding` | Internes comment rendre les petites lignes et les petits polygones |
|||
| `debugTextDisplayBBox` | Attributs pour déboguer le rendu et le positionnement du texte |
| `debugTextDisplayShieldBBox` | Attributs pour déboguer le rendu et le positionnement du texte |
| `debugTextDoNotFindIntersections` | Attributs pour déboguer le rendu et le positionnement du texte |
| `debugTextDoNotFindIntersectionsSameName` | Attributs pour déboguer le rendu et le positionnement du texte |
| `debugTextDisplayShortRoadNames` | Attributs pour déboguer le rendu et le positionnement du texte |

## Paramètres de style de carte

Les paramètres de style de carte permettent de combiner plusieurs styles de rendu dans une seule définition de fichier, c'est-à-dire qu'il n'est pas nécessaire d'avoir un fichier 'my_custom_style_night_mode.render.xml' séparé. Il est possible de définir un paramètre comme `night_mode` (activé par défaut) et de personnaliser certaines règles (comme les couleurs) à l'aide de ce paramètre. Plus tard dans l'interface utilisateur, il est possible de basculer facilement ce paramètre et d'avoir un style de carte différent dans OsmAnd.

Voici une définition du paramètre `baseAppMode`. `possibleValues` sont les valeurs qui seront affichées dans l'interface utilisateur d'OsmAnd, `category` aide à déterminer à quelle catégorie d'interface utilisateur cette propriété appartient.
```
<renderingProperty attr="baseAppMode" name="Mode de rendu par défaut" description="Optimisation de la carte pour le profil utilisateur respectif basé sur le profil de base (parent)"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Plus tard dans le style de sélection, vous pouvez spécifier quand ce sélecteur peut être appliqué, c'est-à-dire pour quel mode d'application spécifié par l'utilisateur.
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Nombre de routes à afficher par tuile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Donc, si l'utilisateur sélectionne `moreDetailed=true`, la valeur de sortie pour la densité sera `55`, et si `baseAppMode=pedestrian` (un autre paramètre), elle sera `40`, sinon 60.

