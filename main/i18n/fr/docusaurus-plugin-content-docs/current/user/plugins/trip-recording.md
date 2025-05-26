---
source-hash: 9ab91ad78daebf0432815fc28ce7f00b4962767d3efd83be0c96467bee228211
sidebar_position: 15
title: Enregistrement de trajets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Aperçu {#overview}

Le **plugin d'enregistrement de trajets** est un outil essentiel pour capturer vos itinéraires, vos déplacements et vos entraînements. Cette fonctionnalité vous permet non seulement d'enregistrer vos trajets, mais aussi de réutiliser, modifier, mettre à jour et partager facilement vos traces avec d'autres.

Avec le *plugin d'enregistrement de trajets*, vous pouvez créer de nouvelles traces, afficher les traces enregistrées directement sur la carte et gérer les enregistrements existants. Il offre des informations précieuses sur vos trajets, telles que la vitesse, les changements d'altitude, les détails du terrain et les données provenant de capteurs externes. Le plugin enregistre votre itinéraire, permettant une analyse détaillée et un partage après votre trajet.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trajet enregistré dans Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trajet enregistré dans iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Pour commencer à enregistrer des traces, vous devez effectuer les réglages suivants :

1. [Activer](../plugins/index.md#enable--disable) le **plugin d'enregistrement de trajets**.
2. [Configurer](#recording-settings) les **paramètres d'enregistrement** pour le [profil](../personal/profiles.md) requis.
3. [Ajouter](#widgets) des **widgets d'enregistrement de trajets** à l'écran (facultatif).
4. [Gérer](../map/tracks/appearance.md) les traces sur la carte (facultatif).


## Enregistrement d'une nouvelle trace {#new-track-recording}

![Widget Distance/Démarrer-Arrêter dans iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget Distance/Démarrer-Arrêter dans Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Avec le plugin d'enregistrement de trajets dans OsmAnd, vous pouvez facilement commencer à enregistrer votre trace en utilisant une variété d'options pratiques. Voici comment vous pouvez commencer votre voyage :

- [Widget Distance/Démarrer-Arrêter](#distance-start-stop) — Utiliser pour activer l'enregistrement.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Appuyez sur le bouton dans l'onglet *Menu principal <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Boutons [Action rapide](../widgets/quick-action.md#add-and-delete-actions) — Pour commencer à enregistrer un trajet, allez dans *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Mes lieux* et choisissez [Démarrer / Pause : Enregistrement de trajets](../widgets/quick-action.md#my-places).

- *Android uniquement* :
    - Allez dans *Menu principal <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Notification système](#notifications) — Utiliser dans la zone de notification de votre appareil.

    - [Lanceur d'application](#launcher-android) — Utiliser pour démarrer l'enregistrement.

**Recommandations :**

- [Localisation précise](../start-with/first-steps.md#permission-to-access-the-location) — Pour un enregistrement précis des traces, assurez-vous qu'OsmAnd dispose de cette autorisation.

- [Dépannage](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — Les **appareils iOS** peuvent parfois **suspendre ou arrêter temporairement les applications** en arrière-plan, ce qui pourrait interrompre l'enregistrement des traces.

- **Source de localisation** (*Android uniquement*) — Ajustez les paramètres dans OsmAnd pour choisir le fournisseur GPS le plus adapté pour des enregistrements précis. [En savoir plus ici](../personal/global-settings.md#location-source).


### Démarrer une boîte de dialogue {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

La boîte de dialogue de démarrage s'ouvre si l'option **<Translate android="true" ids="show_start_dialog"/>** est activée dans la section des paramètres de la boîte de dialogue de démarrage.

![Démarrer l'enregistrement dans Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

La boîte de dialogue de démarrage s'ouvre si l'option **<Translate ios="true" ids="track_interval_remember"/>** n'est pas activée.

![Démarrer l'enregistrement dans iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervalle d'enregistrement** (*Android/iOS*). Ce paramètre contrôle la fréquence à laquelle l'application demande des données au capteur GPS pour marquer de nouveaux points sur votre trace. L'ajustement de l'intervalle vous permet d'équilibrer entre le détail de la trace et l'utilisation de la batterie. Un intervalle plus court entraînera des traces plus détaillées mais une consommation de batterie plus élevée, tandis qu'un intervalle plus long économisera la batterie mais réduira la précision de la trace.

- **Icône de ligne** (*Android*). Appuyez sur cette icône pour accéder aux [options d'apparence de la trace](../map/tracks/appearance.md). Ici, vous pouvez personnaliser l'apparence de votre trace sur la carte, y compris la couleur, l'épaisseur et le style de la ligne. Une fois que vous avez enregistré une trace avec une apparence personnalisée, ces paramètres seront conservés pour les enregistrements futurs, garantissant une cohérence chaque fois que vous visualisez ou réactivez la trace.

- **Menu Paramètres** (*Android*). Accédez à ce menu pour affiner vos préférences d'enregistrement. Pour un aperçu détaillé, consultez la section [Paramètres d'enregistrement de trajets](#recording-settings).

- **Se souvenir de mon choix** (*iOS*). Lorsque cette option est activée, l'enregistrement de la trace démarre automatiquement, sans demander de paramètres supplémentaires ni de confirmation. Si vous souhaitez modifier les paramètres d'enregistrement avant de démarrer une nouvelle trace, redémarrez le plugin d'enregistrement de trajets pour que le menu des paramètres réapparaisse.


### Lanceur (Android) {#launcher-android}

![Menu contextuel de l'icône](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icône Démarrer l'enregistrement](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Vous pouvez rapidement démarrer un nouvel enregistrement de trace directement depuis l'écran de votre appareil Android en utilisant le menu contextuel de l'icône de l'application OsmAnd.

- **Appuyez longuement** sur l'icône de l'application OsmAnd pour ouvrir le menu contextuel, où vous trouverez l'option **Démarrer l'enregistrement**.

- Appuyez sur l'option **Démarrer l'enregistrement** pour lancer l'application OsmAnd avec les [paramètres d'enregistrement de trace](#overview-screen) affichés à l'écran.

- **Appuyez longuement** sur l'option **Démarrer l'enregistrement** dans le menu contextuel de l'icône de l'application, pour ajouter un raccourci pour un accès plus rapide.

Pendant que l'enregistrement de trace est actif, un badge de notification apparaîtra dans le coin de l'icône de l'application OsmAnd, indiquant que l'enregistrement est en cours. Pour plus de détails sur la gestion de cette notification, consultez la section [Notification](#notifications).


## Enregistrement de la trace actuelle {#current-track-recording}

Pour *Arrêter / Enregistrer / Pause* :

- Pour **arrêter** l'enregistrement, appuyez sur le bouton correspondant dans la boîte de dialogue du [widget Distance/Démarrer-Arrêter](#distance-start-stop).

- (*Android uniquement*) Pour **arrêter** l'enregistrement, appuyez sur l'élément de menu principal *Enregistrement de trajets*.

- Pour **arrêter** ou **enregistrer** une trace en cours d'enregistrement, allez dans *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*onglet <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) et appuyez sur le bouton approprié dans le champ *Trace en cours d'enregistrement*.

- Pour **enregistrer, mettre en pause, démarrer** un nouveau segment ou **terminer** l'enregistrement, utilisez les boutons [Action rapide](../widgets/quick-action.md#add-and-delete-actions). Allez dans *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → [Mes lieux](../widgets/quick-action.md#my-places)* et ajoutez un ou plusieurs boutons d'action rapide.

- (*Android uniquement*) Pour **mettre en pause** ou **enregistrer** une trace en cours d'enregistrement, utilisez la [notification](#notifications) système dans la zone de notification de votre appareil.<br/><br/> ![arrêter-enregistrer-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Écran d'aperçu {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![aperçu](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![aperçu](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Terminer l'enregistrement dans iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Terminer l'enregistrement dans iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

Dans OsmAnd, les versions **Android** et **iOS** gèrent l'interface d'enregistrement de trace légèrement différemment. Sur Android, vous trouverez un menu dédié au contexte *Enregistrement de trace*, tandis que sur iOS, cela est simplifié dans le menu contextuel *Trace en cours d'enregistrement*.

Lorsque vous enregistrez une trace, des graphiques dynamiques sont générés, fournissant des données visuelles en temps réel sur votre trajet. Ces graphiques peuvent refléter des informations pour l'ensemble de l'itinéraire ou seulement pour un segment sélectionné, en fonction de votre niveau de zoom.
Voici ce que vous pouvez y trouver :

- **Valeurs des données**. Sur le côté droit du graphique se trouvent les valeurs ***les plus élevées***, ***les plus basses*** et ***moyennes*** pour la section visible de la trace.

- **Graphique pour les informations clés** :
    - ***Android***. Pour l'***axe Y*** du graphique, vous pouvez sélectionner *jusqu'à deux paramètres* parmi toutes les données disponibles telles que *Altitude*, *Pente*, *Vitesse* et [informations des capteurs externes](../plugins/external-sensors.md#trip-recording). Pour l'***axe X***, sélectionnez d'afficher soit *Distance*, *Temps*, soit *Heure du jour*.
    - ***iOS***. Les paramètres sont organisés en onglets *Aperçu*, *Altitude* et *Vitesse* avec les valeurs appropriées pour l'axe Y et *Distance* pour l'axe X.

- **Statistiques**. Pour Android, affiche un ensemble constant de données statistiques indépendantes des paramètres du graphique : *Distance*, *Durée*, *Montée*, *Descente*, *Vitesse moyenne*. Pour iOS, chaque onglet, Aperçu, Altitude et Vitesse, a un ensemble de données différent.

Pour une vue plus détaillée, vous pouvez **mettre à l'échelle le graphique** :

- Utilisez le [geste à deux doigts](../map/interact-with-map.md#gestures) pour zoomer ou dézoomer et vous concentrer sur des intervalles spécifiques.
- Appuyez sur n'importe quel point du graphique pour afficher un marqueur qui indique les valeurs exactes pour cet emplacement.

| |
| ------------- |
|**Onglet Aperçu** iOS (pour Android, les paramètres de l'axe Y sont *Altitude*, *Vitesse*, et le paramètre de l'axe X est *Distance*). Cet onglet affiche un graphique présentant les changements de vitesse et d'altitude le long de la trace, ainsi que les détails clés de la trace. Données de trace pour iOS : *Distance*, *Durée*, *Heure de début* et *Heure de fin*. Vous pouvez voir comment cela est affiché dans les versions Android et iOS ci-dessous. |
| ![données](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Onglet Altitude** iOS (pour Android, les paramètres de l'axe Y sont *Altitude*, *Pente*, et le paramètre de l'axe X est *Distance*). Cet onglet se concentre sur le profil d'élévation de votre trace enregistrée, fournissant des informations sur les changements d'altitude et les pentes du terrain. Les métriques clés pour iOS incluent : *Altitude moyenne*, *Plage d'altitude*, *Montée* et *Descente*. Les graphiques ci-dessous illustrent les différences entre les interfaces Android et iOS. |
| ![données](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Onglet Vitesse** iOS (pour Android, le paramètre de l'axe Y est *Vitesse* et le paramètre de l'axe X est *Distance*). L'onglet Vitesse met en évidence les données liées à la vitesse tout au long de la trace. Pour iOS, il inclut des informations telles que *Vitesse moyenne*, *Vitesse maximale*, *Temps en mouvement* et *Distance corrigée*. Les captures d'écran ci-dessous montrent comment ces données sont affichées sur les deux plateformes. |
| ![données](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Pour **Android**, vous pouvez créer plus de combinaisons de données disponibles sur l'axe Y et de valeurs sur l'axe X. |
| ![données](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Pour plus de détails, vous pouvez explorer le [**Menu contextuel des traces**](../map/tracks/track-context-menu.md#options), où vous pouvez gérer diverses options liées aux traces comme renommer, supprimer ou ajouter des points de passage. Pour ajuster l'apparence des traces sur la carte, visitez la section [**Apparence**](../map/tracks/appearance.md). Si vous souhaitez ajouter des points de passage spécifiques à votre trace actuelle, consultez le guide [**Points de trace**](../map/tracks/track-context-menu.md#waypoints-folder). Pour toute modification, comme renommer une trace, utilisez l'onglet [**Options**](https://osmand.net/docs/user/map/track-context-menu#options) dans le menu contextuel des traces.
:::


### Afficher sur la carte {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![afficher_tr_surcarte_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurer les traces de carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![afficher_tr_surcarte_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurer les traces de carte iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gérez les traces visibles sur votre carte en utilisant l'une des deux options. Allez dans *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*onglet <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) et activez l'option *Afficher sur la carte* pour toute trace que vous souhaitez afficher ou masquer. Alternativement, vous pouvez aller dans *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) pour ajuster rapidement la visibilité de toutes vos traces en un seul endroit.


### Fichier GPX enregistré {#recorded-gpx-file}

OsmAnd capture votre trajet dans un [fichier GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) structuré, en utilisant une hiérarchie de *fichier > trace > segments > points*. Voici comment cela fonctionne :

- Les **points** représentent des moments individuels de votre chemin enregistré, chacun marqué avec des attributs tels que les coordonnées, la vitesse, l'altitude et le cap.
- Ces points sont regroupés pour former des **traces**, qui représentent votre itinéraire complet.
- S'il y a une interruption dans l'enregistrement (par exemple, si le suivi a été mis en pause), le point suivant après l'interruption démarre un nouveau **segment**, marquant la séparation dans votre trajet.
- Les **segments** et les **traces** sont représentés visuellement par des icônes *Début* et *Fin* sur la carte.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Fichier GPX d'une trace enregistrée](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Fichier GPX d'une trace enregistrée](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Paramètre  | Description |
|-----------------|----------------|
| `trkpt` | **Point de trace** représente un emplacement géographique spécifique détecté pendant votre activité. Chaque point de trace comprend des coordonnées de latitude et de longitude, formant la base de votre chemin enregistré. |
| `trkseg`  | **Segment de trace** regroupe des points de trace consécutifs, séparés par des interruptions d'activité, telles que des pauses ou des arrêts. Cela permet de distinguer les mouvements continus des périodes d'inactivité au sein d'un même enregistrement.  |
| `lat` | **Latitude** indique la position nord-sud d'un point à la surface de la Terre. C'est la moitié de la paire de coordonnées utilisée pour localiser précisément votre position.   |
| `lon` | **Longitude** spécifie la position est-ouest, complétant la latitude, pour localiser avec précision un point sur le globe. Ensemble, la latitude et la longitude définissent votre position géographique précise.    |
| `ele` | **Altitude** mesure la hauteur d'un point de trace au-dessus du niveau de la mer, enregistrée en mètres. Cela peut être utile pour suivre les changements d'altitude pendant vos activités, telles que les randonnées ou les balades à vélo.    |
| `time` | **Horodatage** enregistre la date et l'heure exactes auxquelles un point de trace est enregistré. Cela vous permet de suivre la durée et le timing de votre activité avec précision.    |
| `hdop` | **Dilution horizontale de la précision (HDOP)** est une mesure de la précision GPS, reflétant l'erreur potentielle de localisation due aux positions des satellites. Contrairement au HDOP standard, les traces GPX d'OsmAnd utilisent cette valeur pour représenter la précision horizontale en mètres. Veuillez noter que cette implémentation diffère des normes HDOP typiques. [En savoir plus](https://github.com/osmandapp/Osmand/issues/3445).   |
| `speed` | **Vitesse** enregistre votre vitesse de déplacement en mètres par seconde. Elle fournit des informations sur votre rythme pendant les différents segments de votre activité.  |
| `heading`  | **Cap** indique la direction dans laquelle l'avant de votre véhicule ou appareil est pointé, mesurée en degrés. Il est distinct du parcours, qui est le chemin de déplacement réel. Des différences peuvent survenir en raison de facteurs externes tels que le vent, les courants ou les conditions routières. [Plus sur le cap](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| `speed_sensor` | **Vitesse** provenant de [capteurs externes](../plugins/external-sensors.md) capture les données des capteurs connectés, fournissant des informations de vitesse plus précises, particulièrement utiles lors du cyclisme. Pour plus de détails, consultez la [documentation du format de fichier GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `cadence` | **Cadence** mesure le nombre de révolutions de pédale par minute, enregistrée à l'aide de [capteurs externes](../plugins/external-sensors.md). C'est particulièrement utile pour les cyclistes souhaitant surveiller et optimiser leur efficacité de pédalage. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| `power` | **Puissance de vélo** quantifie la puissance générée lors du pédalage, capturée à partir de [capteurs externes](../plugins/external-sensors.md). C'est une métrique essentielle pour les cyclistes sérieux qui veulent évaluer leurs performances. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `atemp` | **Température de l'air** enregistre la température ambiante pendant votre activité, mesurée à l'aide de [capteurs externes](../plugins/external-sensors.md). Notez que la température de l'eau n'est pas prise en charge. [Détails ici](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| `hr` | **Fréquence cardiaque** surveille vos battements cardiaques par minute, en utilisant les données des [capteurs](../plugins/external-sensors.md) connectés. Ces informations peuvent être vitales pour suivre vos performances cardiovasculaires pendant les entraînements. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Paramètres d'enregistrement {#recording-settings}

Avant de commencer à suivre vos trajets, vous devez configurer correctement le **plugin d'enregistrement de trajets** pour des performances optimales.

- **Paramètres spécifiques au profil**. Chaque profil dans l'application peut avoir ses propres paramètres d'enregistrement de trajets uniques. Cela vous permet de personnaliser précisément le comportement d'enregistrement en fonction de votre activité, comme la conduite, le cyclisme ou même la marche nordique, qui pourraient nécessiter des configurations différentes.

- **Personnaliser les paramètres d'enregistrement**. Les paramètres d'enregistrement peuvent varier en fonction de votre mode de déplacement. Par exemple, la conduite sur de longues distances peut nécessiter une fréquence d'enregistrement plus faible, tandis que la randonnée ou la marche pourraient bénéficier de mises à jour plus fréquentes.

- **Données de localisation précises**. Pour garantir que vos enregistrements sont fluides et utilisables pour une utilisation future, vous pouvez personnaliser la manière dont vous capturez les points de localisation. Cela pourrait inclure l'ajustement de la fréquence d'enregistrement, du format de vos données (comme le nombre de points par unité de distance) ou de l'espacement entre les points enregistrés.

- **Paramètres globaux**. Les paramètres d'enregistrement de trajets sont configurés par profil, que vous pouvez gérer dans les [paramètres](../personal/global-settings.md) globaux de l'application. Avant de personnaliser le plugin d'enregistrement de trajets, sélectionnez le profil que vous souhaitez configurer dans la section [profils](../personal/profiles.md). De là, naviguez vers les paramètres du profil pour accéder aux options d'enregistrement de trajets.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configuration de l'enregistrement de trajets dans Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configuration de l'enregistrement de trajets dans Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuration de l'enregistrement de trajets dans iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configuration de l'enregistrement de trajets dans iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description |
|---|---|
| **Dialogue d'optimisation de la batterie** (*Android*) | Ouvre les [paramètres d'optimisation de la batterie d'Android](#battery-optimization). Appuyez sur *Ne plus demander* si vous ne souhaitez plus être invité. |
| **Afficher la boîte de dialogue de démarrage** (*Android*) | Active une boîte de dialogue où vous pouvez configurer les paramètres avant de commencer l'enregistrement. Si désactivé, l'enregistrement démarre automatiquement. |
| **Enregistrer automatiquement la trace pendant la navigation** | Enregistre automatiquement la trace pendant la navigation et l'enregistre dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Note* : L'enregistrement de trace consomme de la batterie et continue de fonctionner en arrière-plan, même si l'écran est éteint. |
| **Intervalle d'enregistrement général** | Définit la fréquence à laquelle les points de localisation sont enregistrés. La valeur par défaut est de 5 secondes. Il est activé avec le *widget d'enregistrement de trajets*. |
| **Déplacement minimum** | Un filtre pour éviter d'enregistrer des points lorsqu'il y a peu ou pas de mouvement. Il aide à réduire le bruit des données.<ul><li>*Effets secondaires* : Les périodes de repos peuvent ne pas être enregistrées, et les petits mouvements peuvent être ignorés. Cela peut réduire les données de post-traitement mais peut également empêcher l'enregistrement des erreurs GPS.</li><li>*Recommandation* : Réglez le déplacement à 5 mètres si vous souhaitez moins de détails mineurs dans vos enregistrements.</li></ul> |
| **Précision minimale** | Filtre les points de localisation en dessous d'un seuil d'indication de précision minimale, tel que rapporté par l'appareil.<ul><li>*Effets secondaires* : Les points dans les zones avec un signal faible (sous les ponts, les arbres, entre les bâtiments ou dans certaines conditions météorologiques) peuvent être manquants.</li><li>*Recommandation* : En cas de doute, il peut être préférable de désactiver ce filtre pour éviter de perdre des données.</li></ul><details><summary>*Remarque*</summary>Supposons que le GPS ait été éteint juste avant l'enregistrement. Dans ce cas, le premier point mesuré peut avoir une précision réduite, il est donc préférable d'attendre un peu avant d'enregistrer le point ou d'enregistrer le meilleur de 3 points consécutifs.</details> |
| **Vitesse minimale** | Définit un seuil pour ignorer les points enregistrés en dessous d'une certaine vitesse.<ul><li>*Effets secondaires* : Les sections où la vitesse tombe en dessous d'un seuil spécifié ne seront pas enregistrées.</li><li>*Recommandation* : Utilisez plutôt le filtre *Déplacement minimum*, car il peut donner de meilleurs résultats sans perdre de données importantes.</li></ul><details><summary>*Remarque*</summary>Essayez d'abord d'utiliser la détection de mouvement via le filtre de déplacement minimum d'enregistrement (B), cela peut produire de meilleurs résultats et vous perdrez moins de données. Si vos traces restent bruyantes à basse vitesse, essayez des valeurs non nulles ici. Veuillez noter que certaines mesures peuvent ne pas rapporter de valeur de vitesse du tout (certaines méthodes basées sur le réseau), auquel cas vous n'enregistrerez rien.<br/><br/>Vérification Vitesse > 0 : La plupart des chipsets GPS rapportent une valeur de vitesse uniquement si l'algorithme détermine que vous êtes en mouvement, et aucune si vous ne l'êtes pas. Par conséquent, l'utilisation du paramètre > 0 dans ce filtre utilise en quelque sorte la détection de mouvement du chipset GPS. Mais même si elle n'est pas filtrée ici au moment de l'enregistrement, nous utilisons toujours cette fonctionnalité dans notre analyse GPX pour déterminer la Distance corrigée, c'est-à-dire que la valeur affichée dans ce champ est la distance enregistrée en mouvement.</details> |
| **Diviser automatiquement les enregistrements après une interruption** | Divise automatiquement les traces en fonction des intervalles de temps entre les points enregistrés. <ul><li>Un nouveau segment commence après une interruption de 6 minutes.</li><li>Une nouvelle trace commence après une interruption de 2 heures.</li><li>Un nouveau fichier commence lorsque la date change.</li><li>Les interruptions peuvent résulter d'une perte de signal GPS, d'une faible vitesse ou de paramètres de configuration.</li></ul><details><summary>*Remarque*</summary>Une interruption est identifiée lorsqu'aucun point n'est enregistré. Cela peut se produire soit parce que la localisation n'est pas détectée, soit parce qu'elle est détectée mais non enregistrée. Plusieurs facteurs peuvent en être la cause, notamment des signaux GPS faibles dus à de mauvaises conditions météorologiques, ou la vitesse de déplacement tombant en dessous du seuil configuré. Dans de tels cas, même si l'appareil peut détecter la localisation, il ne l'enregistre pas.<br/><br/>Ces interruptions dans les données enregistrées peuvent déclencher la création d'un nouveau segment au sein de la même trace, d'une nouvelle trace dans le même fichier, ou d'un nouveau fichier GPX au cours d'un même enregistrement. Cela est géré au sein d'une seule session d'enregistrement de démarrage/arrêt.</details> |
| **Empêcher l'enregistrement autonome** (*Android*) | Met en pause l'enregistrement de trace lorsque l'application OsmAnd est fermée (via *applications récentes*). L'indication en arrière-plan n'est pas affichée dans le panneau de notification Android. |
| **Inclure le cap** | Enregistre le cap (direction du mouvement) pour chaque point dans le fichier GPX. Le cap est la direction dans laquelle l'appareil est orienté, ce qui peut différer de la direction du mouvement en raison de facteurs externes comme le vent ou le dérapage. |
| **Activité** (*Android*) | L'option vous permet de présélectionner un [type d'activité](../map/tracks/track-context-menu.md#track-information-activity) pour un profil, qui est ensuite automatiquement appliqué à toutes les traces enregistrées. |
| **Capteurs externes** <br/> *Nécessite l'activation du plugin* | Les données des [capteurs externes](../plugins/external-sensors.md#trip-recording) tels que *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, ou *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* sont enregistrées dans le fichier GPX. Les données de *Distance* ne sont pas enregistrées sur Android ou iOS. Affiché uniquement lorsque le [plugin Capteurs externes](../plugins/external-sensors.md) est activé. |
| **Métriques du véhicule** (*Android*) <br/> *Nécessite l'activation du plugin* | Les données du [scanner OBD-II](../plugins/vehicle-metrics.md#trip-recording) sont enregistrées dans le fichier GPX. Affiché uniquement lorsque le [plugin Métriques du véhicule](../plugins/vehicle-metrics.md) est activé.<br />*Note* : Vous pouvez ajouter les métriques à enregistrer dans le fichier GPX à partir de la liste : *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Dossier de stockage des traces** (*Android*) | Définit où dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* les traces enregistrées sont stockées. Les options incluent le stockage de toutes les traces dans le dossier Rec ou leur organisation par mois, comme Rec/aaaa-mm. |
| **Notification** | Contrôle l'affichage d'une [notification système d'enregistrement de trajets](#notifications) dans la zone de notification de l'appareil qui vous permet de démarrer l'enregistrement de trajets. |
| **Suivi en ligne** (*Android*) | Permet le suivi en temps réel de votre position en envoyant les points enregistrés à une URL spécifiée. L'intervalle de suivi détermine la fréquence d'envoi des points, et le tampon temporel stocke les points lorsqu'il n'y a pas de connexion Internet.<details><summary>*Remarque*</summary>Si cette option est activée et que l'enregistrement de trace est en cours, le widget Distance/Démarrer-Arrêter (REC) devient **vert** au lieu de **rouge**, indiquant que chaque point enregistré est transmis à une URL spécifiée. Le champ **Adresse Web** vous permet de saisir l'URL en utilisant le format de paramètre suivant :<ul><li>`lat={0}` : Latitude</li><li>`lon={1}` : Longitude</li><li>`timestamp={2}` : Horodatage (heure Unix)</li><li>`hdop={3}` : Dilution horizontale de la précision</li><li>`altitude={4}` : Altitude</li><li>`speed={5}` : Vitesse</li><li>`bearing={6}` : Cap (direction du mouvement)</li><li>`eta={7}` : Heure d'arrivée estimée (heure Unix)</li><li>`etfa={8}` : Temps estimé jusqu'au premier point intermédiaire ou point d'arrivée (heure Unix)</li><li>`eda={9}` : Distance estimée jusqu'à l'arrivée ou un marqueur (en mètres)</li><li>`edfa={10}` : Distance estimée jusqu'au premier point intermédiaire ou point d'arrivée (en mètres)</li></ul>Vous pouvez définir l'**Intervalle de suivi** pour spécifier la fréquence d'envoi des points de localisation, avec des options allant de 0 seconde à 5 minutes. De plus, le paramètre **Tampon temporel** détermine la durée de stockage des points de localisation s'il n'y a pas de connexion Internet, garantissant que les données sont enregistrées et transmises lorsque la connexion est rétablie.</details> |
| **Traces** | Une référence rapide au dossier où les traces sont enregistrées dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Réinitialiser les paramètres du plugin par défaut** | Réinitialise tous les paramètres d'enregistrement de trajets pour le profil actuel à leurs valeurs par défaut. |
| **Copier depuis un autre profil** (*Android*) | Copie les paramètres d'enregistrement de trajets d'un profil à un autre. |


### Optimisation de la batterie {#battery-optimization}

<InfoAndroidOnly />

![Trace sur la carte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Trace sur la carte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Cette fonctionnalité vous permet de gérer les paramètres d'optimisation de la batterie pour OsmAnd afin de garantir un accès ininterrompu à votre position, même lorsque l'application fonctionne en arrière-plan pendant la navigation ou l'enregistrement de trace.

- **Paramètres d'optimisation de la batterie**. Ouvre les paramètres Android, où vous pouvez modifier les préférences d'économie de batterie pour OsmAnd. [Plus de détails ici](../troubleshooting/general.md#optimizing-battery-consumption).
- **Ne plus demander**. Ferme définitivement la boîte de dialogue, de sorte qu'elle n'apparaîtra plus.
- **Fermer**. Ferme temporairement la boîte de dialogue, qui réapparaîtra la prochaine fois que l'optimisation de la batterie nécessitera une attention.


### Notifications {#notifications}

![Notification d'enregistrement de trajets](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Si [Notification](#recording-settings) est activé dans les paramètres du plugin, les notifications d'enregistrement de trajets seront toujours affichées dans la zone de notification système lorsque l'enregistrement est actif. Cette notification garantit que le processus d'enregistrement n'est pas interrompu par le système, et elle ne peut pas être désactivée pendant un enregistrement actif.

- La zone de notification s'ouvre lorsque vous balayez vers le bas depuis le haut de l'écran et se ferme lorsque vous balayez vers le haut. Ces messages vous informent des actions telles que le démarrage/l'arrêt de l'enregistrement de trajets, en particulier lorsque l'enregistrement automatique est activé pendant la navigation.
- Les notifications restent visibles, que l'application soit en cours d'exécution au premier plan, en arrière-plan ou fermée. Vous pouvez effacer manuellement l'ancienne notification si elle n'est plus nécessaire, mais cela n'arrêtera pas l'enregistrement en cours.

**Note importante**.

Ce comportement est requis par Android pour que tout service de premier plan, comme l'enregistrement de trajets, reste visible pour vous.

- Si la notification est supprimée, Android arrêtera automatiquement l'enregistrement. Vous pouvez utiliser le paramètre [Empêcher l'enregistrement autonome](#recording-settings).
- Le paramètre **Notification** dans OsmAnd affecte si la barre de notification affiche un raccourci pour démarrer un enregistrement lorsqu'aucun enregistrement n'est actif. Il ne contrôle **pas** la visibilité de la notification pendant un enregistrement actif.

**Options Android supplémentaires**.

![Notification d'enregistrement de trajets](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- Dans ***Paramètres Android → Notifications et barre d'état → Notifications sur l'écran de verrouillage***, vous pouvez supprimer OsmAnd de la liste des applications pour empêcher les notifications d'apparaître sur l'écran de verrouillage, évitant ainsi l'activation accidentelle de l'écran. Cela n'affectera pas l'enregistrement de trace. Les notifications apparaîtront toujours dans la zone de notification normale.
- **OsmAnd** peut également apparaître sous ***Confidentialité → Autorisations spéciales → Activer l'écran***. Si vous souhaitez empêcher l'écran de s'allumer lorsqu'une notification apparaît, essayez de supprimer OsmAnd de cette liste.

<!--
- OsmAnd n'est pas listé sous **Confidentialité** *→* **Autorisations spéciales** → **Alarmes et rappels**.
-->

**Notification par badge**.

![Notification d'enregistrement de trajets](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Le badge de l'icône de l'application apparaît à côté de l'icône OsmAnd lorsque l'enregistrement de trace est actif.

- Cette icône disparaît lorsque l'enregistrement de trace est terminé. Pour vérifier si un enregistrement est actif, vous pouvez aller dans *Menu → Mes lieux → Onglet Traces* ou appuyer sur le widget pour gérer l'enregistrement.
- S'il n'y a pas d'enregistrement en cours et que le badge est toujours affiché, cela peut signifier qu'un message d'OsmAnd a été laissé dans le panneau de notification de l'appareil.
- Pour désactiver les badges dans les paramètres Android, allez dans *Paramètres de l'appareil → Applications → OsmAnd → Notifications* et désactivez l'option d'affichage des badges pour cette application.


## Widgets {#widgets}

Les widgets vous permettent d'afficher des informations clés sur l'enregistrement de trace directement à l'écran, telles que *Distance*, *Durée*, *Montée* et *Descente*.

Pour commencer à utiliser les *widgets d'enregistrement de trajets*, vous devez effectuer tous les réglages suivants :

1. [Activer le plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurer les paramètres d'enregistrement de trajets pour le [profil](../personal/profiles.md) requis.
3. Ajouter les **widgets d'enregistrement de trajets** nécessaires à l'écran. Notez que cette configuration est **spécifique à chaque profil**.


### Ajouter un widget d'enregistrement {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_widget_monitoring"/>*

![Ajout du widget Distance/Démarrer-Arrêter dans Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_widget_monitoring"/>*

![Ajout du widget d'enregistrement dans iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Le [widget d'enregistrement de trajets](../widgets/info-widgets.md#trip-recording-widgets) offre un moyen simple de surveiller l'état de votre enregistrement et d'accéder rapidement aux paramètres et détails d'enregistrement. Ce widget est automatiquement ajouté à votre écran lorsque le plugin d'enregistrement de trajets est activé.

Pour personnaliser votre interface, vous pouvez ajouter ou supprimer le widget d'enregistrement de trajets et [d'autres widgets](../plugins/trip-recording#duration-uphill-downhill) via le menu Configurer l'écran.


### Distance (Démarrer-Arrêter) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget d'enregistrement de trajets](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Terminer l'enregistrement dans Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'enregistrement de trajets](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget d'enregistrement de trajets](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Lorsque les widgets sont affichés sur la carte, appuyer sur l'un d'eux révèle des détails supplémentaires sur la trace et permet d'interagir avec l'enregistrement.
Le widget *Distance* affiche la distance totale de votre trajet enregistré actuel et sert d'interface principale pour gérer vos enregistrements. Appuyer dessus révèle la [boîte de dialogue d'enregistrement de trajets](#start-a-dialog), où vous pouvez démarrer, arrêter et afficher des informations détaillées sur votre trace.

- Le widget est ajouté automatiquement lorsque le *plugin d'enregistrement de trajets* est activé, mais il peut être masqué via le [menu Configurer l'écran](../widgets/configure-screen.md#configure-screen-menu).
- Si l'option *Afficher la boîte de dialogue de démarrage* est désactivée dans les paramètres du plugin d'enregistrement de trajets, appuyer sur le widget actif ouvrira toujours la boîte de dialogue *Enregistrement de trajets*, vous permettant d'accéder à d'autres options et informations.

En plus du widget *Distance/Démarrer-Arrêter*, le **plugin d'enregistrement de trajets** comprend trois autres widgets : *Durée*, *Montée* et *Descente*. Ceux-ci fournissent des informations supplémentaires sur votre trajet, vous aidant à suivre la progression en temps réel.

| |
|-----------|
| **Distance/Démarrer-Arrêter**. Ce widget affiche la distance de votre enregistrement de trajet en cours. Il est automatiquement ajouté lorsque le plugin d'enregistrement de trajets est activé, mais vous pouvez le masquer via le menu Configurer l'écran. Le widget présente trois états distincts : *Enregistrement*, *En pause* et *Inactif*, chacun indiquant l'état actuel de votre enregistrement de trajet. |
| ![Widget d'enregistrement de trajets (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Pour ouvrir la [boîte de dialogue d'enregistrement de trajets](#start-a-dialog) lorsque vous appuyez sur un widget inactif, activez l'option *Afficher la boîte de dialogue de démarrage* dans les paramètres du plugin d'enregistrement de trajets. Si l'option est désactivée, l'enregistrement démarrera immédiatement après avoir appuyé sur le widget sans ouvrir la boîte de dialogue.|


### Durée, Montée, Descente {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Durée**. Affiche la durée totale de l'enregistrement de trajet actuel en heures et minutes. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Montée**. Affiche le gain d'altitude cumulé pour l'enregistrement de trajet actuel. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Descente**. Indique la descente totale accumulée pendant l'enregistrement de trajet actuel. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Si vous avez plusieurs widgets sélectionnés — *Durée*, *Montée* ou *Descente* — vous pouvez accéder à la même boîte de dialogue pour chacun sans avoir besoin de changer ou de la fermer. Cette interface unifiée facilite la visualisation et la gestion de toutes les informations connexes de manière transparente.


## Articles connexes {#related-articles}

- [Menu contextuel de la carte](../map/map-context-menu.md)
- [Afficher la trace sur la carte](../map/tracks/index.md)
- [Analyser sur la carte](../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel de la trace](../map/tracks/track-context-menu.md)
- [Navigation par trace](../navigation/setup/gpx-navigation.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

- L'enregistrement de trajets ne démarre pas.
    - Assurez-vous que le **plugin d'enregistrement de trajets** est activé : *Menu → Plugins → Enregistrement de trajets → Activer*.
    - Vérifiez que les paramètres sont corrects : *Menu → Configurer le profil → Paramètres du plugin → Enregistrement de trajets*.
    - Si l'enregistrement ne démarre toujours pas, redémarrez l'application et réessayez.

- L'enregistrement de trajets s'arrête de manière inattendue.
    - Vérifiez si les *paramètres d'optimisation de la batterie* de votre appareil n'arrêtent pas l'enregistrement. Certains appareils peuvent mettre en pause l'activité en arrière-plan pour économiser de l'énergie. Allez dans *Paramètres de l'appareil → Batterie*.

- La distance enregistrée ne correspond pas à la distance réelle.
    - Vérifiez que le GPS est activé et qu'il a un signal actif.
    - Réduisez le seuil de précision GPS : *Menu → Configurer le profil → Enregistrement de trajets → Précision minimale*.

- Les traces enregistrées sont bruyantes. [(vérifier)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Les traces enregistrées ont des lacunes. [(vérifier)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Comment suivre la distance parcourue. [(vérifier)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Pour un dépannage supplémentaire, visitez : [Dépannage de l'enregistrement de trace](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Cet article a été mis à jour pour la dernière fois en janvier 2025*