---
source-hash: ae9731211ef7c961e05f3400b8bf789863b06304c7891096d6b4075e34fcf55a
sidebar_position: 5
---

# Rendu des couches de carte {#map-layers-rendering}

La carte OsmAnd est rendue par couches, de bas en haut. Certaines couches couvrent tout l'écran de la carte, tandis que d'autres sont rendues avec transparence. L'ordre des couches est toujours le même, il est donc important de savoir ce qui est affiché et dans quel ordre.

## Ordre des couches {#order-of-layers}

OsmAnd utilise trois types de couches : raster, symboles et contrôles. Tout d'abord, les [couches raster sont rendues](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L162) en OpenGL, suivies des [couches de symboles](https://github.com/osmandapp/OsmAnd-core/blob/b124dc5cccee2c9d562e7929fe13c712f7bc883d/src/Map/OpenGL/AtlasMapRenderer_OpenGL.cpp#L200). Les couches de contrôle sont rendues indépendamment d'OpenGL dans l'interface utilisateur des appareils Android ou iOS, par-dessus la carte.

**Android :**  
La plupart des couches sur Android sont instanciées dans la méthode [`createLayers`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/MapLayers.java#L121) de la classe `MapLayers`.

L'ordre de chaque couche dépend de sa propriété `zOrder` lors de l'instanciation et est défini dans la méthode [`getBaseOrder`](https://github.com/osmandapp/OsmAnd/blob/c87a2e70df7759c5116b1f133ad38065d0dc4dfa/OsmAnd/src/net/osmand/plus/views/layers/base/OsmandMapLayer.java#L95) de la classe `OsmAndMapLayer`.  
D'autres couches peuvent être instanciées dans des plugins.

**iOS :**  
La plupart des couches sur iOS sont instanciées dans la méthode [`createLayers`](https://github.com/osmandapp/OsmAnd-iOS/blob/c03cc60d4301c743573ac50dfc0026522c08a66c/Sources/Controllers/Map/Layers/OAMapLayers.mm#L36) de `OAMapLayers`.

L'ordre de chaque couche est défini directement par la propriété `baseOrder` dans `createLayers`.  
D'autres couches peuvent être instanciées dans des plugins.


## Tables d'ordre Android {#android-order-tables}

### Android. Couches raster {#android-raster-layers}

| Couche                            | Ordre/Plage    | Type | Description                           |
| --------------------------------- | -------------: | ---- | ------------------------------------- |
| MapTileLayer (sous-couche)        | -50 000        | Carte | Sous-couche de tuiles raster          |
| MapTileLayer (couche principale)  | 5 000          | Carte | Tuiles raster de la carte             |
| ContourLinesLayer                 | 6 000          | Carte | N'a pas sa propre classe de couche ; gérée par la couche principale MapTileLayer |
| TerrainLayer                      | 60 000         | Carte | [Ombrage et pente](/docs/user/plugins/topography)           |
| MapTileLayer (superposition)      | 70 000         | Carte | Superposition de tuiles raster        |

### Android. Couches de symboles {#android-symbols-layers}

| Couche / symboles                 | Ordre/Plage  | Type     | Description                                                        |
| --------------------------------- | -----------: | -------- | ------------------------------------------------------------------ |
| DownloadedRegionsLayer            | -1 100 000   | Polygons | Affiche les régions téléchargées          |
| Icônes (MapVectorLayer)           | -1 000 000   | Points   | Carte vectorielle, iconOrder dans le style avec [ajout de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| GPXLayer (lignes)                 | -500 000     | Lignes   | Lignes de trace             |
| RouteLayer (point de surbrillance du graphique)| -197 900 | Point    | Analyse de l'itinéraire de navigation sur la carte  |
| RouteLayer (points de l'axe des x du graphique) | -198 000 | Points   | Analyse de l'itinéraire de navigation sur la carte  |
| RouteLayer (flèches de virage)    | -199 000     | Lignes   | Itinéraire de navigation                  |
| RouteLayer                        | -200 000     | Lignes   | Itinéraire de navigation                  |
| Texte (MapVectorLayer)            | 1 - 255      | Texte    | Carte vectorielle, textOrder dans le [style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml), 100 par défaut                 |
| Boucliers (MapVectorLayer)        | 1 - 255      | Boucliers | Carte vectorielle, textOrder dans le style pour les boucliers, 100 par défaut |
| Début, fin de trace GPX           | 90 101       | Points   | GPXLayer                          |
| Point de cheminement GPX          | 90 300       | Points   | GPXLayer                          |
| GPXLayer (nom du point de cheminement) | 90 300   | Texte    | Nom des points de cheminement                    |
| Icône du graphique de trace GPX   | 90 500       | Points   | GPXLayer                          |
| Icône sélectionnée de trace GPX   | 90 600       | Points   | GPXLayer                          |
| Notes OSM (OsmBugsLayer)          | 200 000      | Points   | Notes OSM                         |
| Icône Fixme (OsmBugsLayer)        | 200 000      | Points   | Icônes Fixme OSM                   |
| Texte Fixme (OsmBugsLayer)        | 200 000      | Texte    | Texte Fixme OSM                    |
| POIMapLayer (icône)               | 300 000      | Points   | Superposition de POI                       |
| POIMapLayer (nom)                 | 300 000      | Texte    | Nom de la superposition de POI                  |
| AudioNotesLayer                   | 350 000      | Points   | Plugin de notes audio/vidéo          |
| OsmEditsLayer                     | 350 000      | Points   | Plugin d'édition OSM                   |
| FavoritesLayer                    | 400 000      | Points   | Superposition de favoris                 |
| TransportStopsLayer               | 500 000      | Lignes   | Lignes de transport public            |
| TransportStopsLayer               | 500 001      | Points   | Arrêts de transport public            |
| MapTextLayer                      | 595 000      | Texte    | Texte pour différentes couches, rendu sur canevas |
| PointLocationLayer                | 600 000      | Points   | Ma position                       |
| PointNavigationLayer              | 700 000      | Points   | Points de départ/arrivée en navigation |
| PointNavigationLayer              | 700 600      | Points   | Point sélectionné en navigation      |
| MapMarkersLayer (ligne)           | 729 999      | Lignes   | Ligne pointillée vers les marqueurs de carte        |
| MapMarkersLayer (texte)           | 730 000      | Texte    | Texte sur la ligne. Rendu sur canevas    |
| MapMarkersLayer (marqueurs)       | 730 000      | Points   | Marqueurs de carte                       |
| ImpassableRoadsLayer              | 750 000      | Points   | Éviter les routes                       |
| ContextMenuLayer                  | 800 000      | Points   | Épingle du menu contextuel               |
| MapillaryVectorLayer (lignes)     | 1 000 000    | Lignes   | Lignes Mapillary entre les points    |
| MapillaryVectorLayer (points)     | 1 000 000    | Points   | Points Mapillary                  |

### Android. Couches de contrôles {#android-controls-layers}

| Couche de contrôle        | Ordre/Plage | Description           |
| ------------------------- | ----------: | --------------------- |
| PreviewRouteLineLayer     | 150 000     | Options d'itinéraire de prévisualisation |
| MeasurementToolLayer      | 460 000     |                       |
| RadiusRulerControlLayer   | 780 000     | Règle de rayon          |
| DistanceRulerControlLayer | 790 000     | Règle de distance        |
| MapInfoLayer              | 900 000     | Widgets               |
| MapControlsLayer          | 1 100 000   |                       |
| MapQuickActionLayer       | 1 200 000   |                       |


## Tables d'ordre iOS {#ios-order-tables}

### iOS. Couches raster {#ios-raster-layers}

| Couche                          | Index de couche | Description                           |
| ------------------------------- | ----------: | ------------------------------------- |
| OAUnderlayMapLayer              | -5          | Sous-couche de tuiles raster                 |
| Couche raster (MapRasterLayerProvider) | 0     | Tuiles raster de la carte                      |
| OATerrainMapLayer                | 4          | [Lignes de contour, ombrage et pente](/docs/user/plugins/topography) |
| OAOverlayMapLayer                | 5          | Superposition de tuiles raster                  |
| OAMapillaryLayer                 | 10         | Couche Mapillary                       |
| OAWeatherRasterLayer             | 20         | Météo                               |
| OAWeatherRasterLayer             | 25         | Météo                               |
| OAWeatherContourLayer            | 30         | Météo                               |

### iOS. Couches de symboles {#ios-symbols-layers}

| Couche / symboles              | Ordre/Plage  | Type     | Description                                                                                |
| ---------------------------- | -----------: | -------- | ------------------------------------------------------------------------------------------ |
| Icônes                       | -1 000 000   | Points   | Carte vectorielle, iconOrder dans le style avec [ajout de 1 000 000](https://github.com/osmandapp/OsmAnd-core/blob/f2cd0a5d98d6fb1a7bed90c7e9deb2b5c3cd9fd7/src/Map/MapPrimitiviser_P.cpp#L2828) |
| Texte                        | 1 - 255      | Texte    | Carte vectorielle, textOrder dans le style, 100 par défaut             |
| Boucliers                     | 1 - 255      | Boucliers | Carte vectorielle, textOrder dans le style pour les boucliers, 100 par défaut |
| OADownloadedRegionsLayer     | 10 000       | Polygons | Affiche les régions vertes téléchargées |
| Icône POI (OAPOILayer)       | 90 000       | Points   | Superposition de POI                 |
| Nom POI (OAPOILayer)         | 90 000       | Texte    | Nom de la superposition de POI            |
| Lignes de trace GPX (OAGPXLayer) | 100 000    | Lignes   | Lignes de trace                 |
| Nom du point de cheminement GPX | 100 000   | Texte    | Nom des points de cheminement GPX          |
| Icône du point de cheminement GPX | 100 003  | Points   | Points de cheminement GPX               |
| Début, fin de trace GPX      | 120 000      | Points   | OAGPXLayer                  |
| Notes OSM (OAOsmBugsLayer)   | 120 000      | Texte    | Notes OSM                   |
| Texte Fixme (OAOsmBugsLayer) | 120 000      | Texte    | Texte Fixme OSM              |
| Icône Fixme (OAOsmBugsLayer) | 120 000      | Points   | Icône Fixme OSM              |
| OAOsmEditsLayer              | 120 000      | Points   | Plugin d'édition OSM             |
| OAPreviewRouteLineLayer      | 120 000      | Lignes   | Options d'itinéraire de prévisualisation       |
| OATransportStopsLayer (lignes)| 120 000     | Lignes   | Lignes de transport public       |
| OATransportStopsLayer (icônes)| 121 000     | Points   | Arrêts de transport public      |
| OARouteLayer                 | 150 000      | Lignes   | Itinéraire de navigation            |
| OAFavoritesLayer             | 160 000      | Points   | Superposition de favoris           |
| Éviter les routes (OAImpassableRoadsLayer) | 205 998 | Points | Éviter les routes                |
| Ma position (OAMyPositionLayer)      | 206 001 | Points | Ma position                |
| Marqueurs de carte (OADestinationsLayer)    | 207 000 | Points | Marqueurs de carte                |
| Marqueurs de carte (texte sur la ligne)   | 207 000 | Texte    | Texte sur la ligne vers les marqueurs de carte |
| Navigation (points)          | 207 015      | Points   | OARouteLayer                |
| Navigation (ma position)     | 207 025      | Points   | OARouteLayer                |
| Navigation (flèches sur l'itinéraire) | 208 000 | Points   | OARouteLayer                |
| OARoutePointsLayer           | 209 000      | Points   | Points de navigation           |

### iOS. Couches de contrôles {#ios-controls-layers}

| Couche de contrôle            | Ordre/Plage | Description    |
| ------------------------ | ----------: | -------------  |
| OAGPXRecLayer            | 110 000     | Édition GPX    |
| OAMeasurementToolLayer   | 160 000     |                |
| OARulerByTapControlLayer | 170 000     | Règle de distance |
| OAContextMenuLayer       | 210 000     |                |