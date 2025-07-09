---
source-hash: cbb0cf4d59d01946eeabdc12f73feec5aec68b5a7434c67e7ceb082189d83310
sidebar_position: 15
title: Enregistrement de trajet
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

Le **plugin d'enregistrement de trajet** est un outil essentiel pour capturer vos itinéraires, vos mouvements et vos entraînements. Cette fonctionnalité vous permet non seulement d'enregistrer vos trajets, mais aussi de réutiliser, modifier, mettre à jour et partager facilement vos tracés avec d'autres.

Avec le *plugin d'enregistrement de trajet*, vous pouvez créer de nouveaux tracés, afficher directement les tracés enregistrés sur la carte et gérer les enregistrements existants. Il offre des informations précieuses sur vos trajets, telles que la vitesse, les changements d'altitude, les détails du terrain et les données des capteurs externes. Le plugin enregistre votre itinéraire, ce qui permet une analyse détaillée et un partage après votre trajet.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trajet enregistré dans Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trajet enregistré dans iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Pour commencer à enregistrer des tracés, vous devez effectuer les réglages suivants :

1. [Activer](../plugins/index.md#enable--disable) le **plugin d'enregistrement de trajet**.
2. [Configurer](#recording-settings) les **paramètres d'enregistrement** pour le [profil](../personal/profiles.md) requis.
3. [Ajouter](#widgets) les **widgets d'enregistrement de trajet** à l'écran (facultatif).
4. [Gérer](../map/tracks/appearance.md) les tracés sur la carte (facultatif).


## Nouvel enregistrement de tracé {#new-track-recording}

![Widget Distance/Démarrer-Arrêter dans iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget Distance/Démarrer-Arrêter dans Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Avec le plugin d'enregistrement de trajet dans OsmAnd, vous pouvez facilement commencer à enregistrer votre tracé en utilisant une variété d'options pratiques. Voici comment vous pouvez commencer votre voyage :

- [Widget Distance/Démarrer-Arrêter](#distance-start-stop) — Utilisez-le pour activer l'enregistrement.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Appuyez sur le bouton dans l'onglet *Menu principal <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Boutons [Action rapide](../widgets/quick-action.md#add-and-delete-actions) — Pour commencer à enregistrer un trajet, allez dans *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → Mes lieux* et choisissez [Démarrer / Pause : Enregistrement de trajet](../widgets/quick-action.md#my-places).

- *Android uniquement* :
    - Allez dans *Menu principal <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Notification système](#notifications) — Utilisez-la dans la zone de notification de votre appareil.

    - [Lanceur d'applications](#launcher-android) — Utilisez-le pour démarrer l'enregistrement.

**Recommandations :**

- [Localisation précise](../start-with/first-steps.md#permission-to-access-the-location) — Pour un enregistrement précis des tracés, assurez-vous qu'OsmAnd dispose de cette autorisation.

- [Dépannage](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — Les **appareils iOS** peuvent parfois **suspendre ou arrêter temporairement les applications** en arrière-plan, ce qui pourrait interrompre l'enregistrement des tracés.

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

- **Intervalle de journalisation** (*Android/iOS*). Ce paramètre contrôle la fréquence à laquelle l'application demande des données au capteur GPS pour marquer de nouveaux points sur votre tracé. L'ajustement de l'intervalle vous permet d'équilibrer le détail du tracé et l'utilisation de la batterie. Un intervalle plus court entraînera des tracés plus détaillés mais une consommation de batterie plus élevée, tandis qu'un intervalle plus long économisera la batterie mais réduira la précision du tracé.

- **Icône de ligne** (*Android*). Appuyez sur cette icône pour accéder aux [options d'apparence du tracé](../map/tracks/appearance.md). Ici, vous pouvez personnaliser l'apparence de votre tracé sur la carte, y compris la couleur, l'épaisseur et le style de la ligne. Une fois que vous avez enregistré un tracé avec une apparence personnalisée, ces paramètres seront conservés pour les enregistrements futurs, garantissant une cohérence chaque fois que vous visualisez ou réactivez le tracé.

- **Menu des paramètres** (*Android*). Accédez à ce menu pour affiner vos préférences d'enregistrement. Pour un aperçu détaillé, consultez la section [Paramètres d'enregistrement de trajet](#recording-settings).

- **Mémoriser mon choix** (*iOS*). Lorsque cette option est activée, l'enregistrement du tracé démarre automatiquement, sans demander de paramètres supplémentaires ni de confirmation. Si vous souhaitez modifier les paramètres d'enregistrement avant de démarrer un nouveau tracé, redémarrez le plugin d'enregistrement de trajet pour que le menu des paramètres réapparaisse.


### Lanceur (Android) {#launcher-android}

![Menu contextuel de l'icône](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icône Démarrer l'enregistrement](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Vous pouvez rapidement démarrer un nouvel enregistrement de tracé directement depuis l'écran de votre appareil Android en utilisant le menu contextuel de l'icône de l'application OsmAnd.

- **Appuyez longuement** sur l'icône de l'application OsmAnd pour ouvrir le menu contextuel, où vous trouverez l'option **Démarrer l'enregistrement**.

- Appuyez sur l'option **Démarrer l'enregistrement** pour lancer l'application OsmAnd avec les [paramètres d'enregistrement de tracé](#overview-screen) affichés à l'écran.

- **Appuyez longuement** sur l'option **Démarrer l'enregistrement** dans le menu contextuel de l'icône de l'application, pour ajouter un raccourci pour un accès plus rapide.

Pendant que l'enregistrement du tracé est actif, un badge de notification apparaîtra dans le coin de l'icône de l'application OsmAnd, indiquant que l'enregistrement est en cours. Pour plus de détails sur la gestion de cette notification, consultez la section [Notification](#notifications).


## Enregistrement de tracé actuel {#current-track-recording}

Pour *Arrêter / Enregistrer / Mettre en pause* :

- Pour **arrêter** l'enregistrement, appuyez sur le bouton correspondant dans la boîte de dialogue du [widget Distance/Démarrer-Arrêter](#distance-start-stop).

- (*Android uniquement*) Pour **arrêter** l'enregistrement, appuyez sur l'élément de menu principal *Enregistrement de trajet*.

- Pour **arrêter** ou **enregistrer** un tracé en cours d'enregistrement, allez dans *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*onglet <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) et appuyez sur le bouton approprié dans le champ *Tracé en cours d'enregistrement*.

- Pour **enregistrer, mettre en pause, démarrer** un nouveau segment ou **terminer** l'enregistrement, utilisez les boutons [Action rapide](../widgets/quick-action.md#add-and-delete-actions). Allez dans *Menu → Configurer l'écran → Boutons personnalisés → Action rapide → Ajouter une action → [Mes lieux](../widgets/quick-action.md#my-places)* et ajoutez un ou plusieurs boutons d'action rapide.

- (*Android uniquement*) Pour **mettre en pause** ou **enregistrer** un tracé en cours d'enregistrement, utilisez la [notification](#notifications) système dans la zone de notification de votre appareil.<br/><br/> ![arrêter-enregistrer-mettre en pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Écran d'aperçu {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![aperçu](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![aperçu](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Terminer l'enregistrement dans iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Terminer l'enregistrement dans iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

Dans OsmAnd, les versions **Android** et **iOS** gèrent l'interface d'enregistrement de tracé légèrement différemment. Sur Android, vous trouverez un menu dédié au contexte *Enregistrement de tracé*, tandis que sur iOS, cela est simplifié dans le menu contextuel *Tracé en cours d'enregistrement*.

Au fur et à mesure que vous enregistrez un tracé, des graphiques dynamiques sont générés, fournissant des données visuelles en temps réel sur votre parcours. Ces graphiques peuvent refléter des informations pour l'ensemble de l'itinéraire ou seulement pour un segment sélectionné, en fonction de votre niveau de zoom.
Voici ce que vous pouvez y trouver :

- **Valeurs des données**. Sur le côté droit du graphique se trouvent les valeurs ***les plus élevées***, ***les plus basses*** et ***moyennes*** pour la section visible du tracé.

- **Graphique pour les informations clés** :
    - ***Android***. Pour l'***axe Y*** du graphique, vous pouvez sélectionner *jusqu'à deux paramètres* parmi toutes les données disponibles telles que l'*Altitude*, la *Pente*, la *Vitesse* et les [informations des capteurs externes](../plugins/external-sensors.md#trip-recording). Pour l'***axe X***, sélectionnez l'affichage de la *Distance*, du *Temps* ou de l'*Heure du jour*.
    - ***iOS***. Les paramètres sont organisés en onglets *Aperçu*, *Altitude* et *Vitesse* avec les valeurs appropriées pour l'axe Y et la *Distance* pour l'axe X.

- **Statistiques**. Pour Android, affiche un ensemble constant de données statistiques indépendantes des paramètres du graphique : *Distance*, *Durée*, *Montée*, *Descente*, *Vitesse moyenne*. Pour iOS, chaque onglet, Aperçu, Altitude et Vitesse, a un ensemble de données différent.

Pour une vue plus détaillée, vous pouvez **mettre à l'échelle le graphique** :

- Utilisez le [geste à deux doigts](../map/interact-with-map.md#gestures) pour zoomer ou dézoomer et vous concentrer sur des intervalles spécifiques.
- Appuyez sur n'importe quel point du graphique pour afficher un marqueur qui indique les valeurs exactes pour cet emplacement.

| |
| ------------- |
|**Onglet Aperçu** iOS (pour Android, les paramètres de l'axe Y sont *Altitude*, *Vitesse* et le paramètre de l'axe X est *Distance*). Cet onglet affiche un graphique montrant les changements de vitesse et d'altitude le long du tracé, ainsi que les détails clés du tracé. Données de tracé pour iOS : *Distance*, *Durée*, *Heure de début* et *Heure de fin*. Vous pouvez voir comment cela est affiché dans les versions Android et iOS ci-dessous. |
| ![données](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Onglet Altitude** iOS (pour Android, les paramètres de l'axe Y sont *Altitude*, *Pente* et le paramètre de l'axe X est *Distance*). Cet onglet se concentre sur le profil d'élévation de votre tracé enregistré, fournissant des informations sur les changements d'altitude et les pentes du terrain. Les métriques clés pour iOS incluent : *Altitude moyenne*, *Plage d'altitude*, *Montée* et *Descente*. Les graphiques ci-dessous illustrent les différences entre les interfaces Android et iOS. |
| ![données](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Onglet Vitesse** iOS (pour Android, le paramètre de l'axe Y est *Vitesse* et le paramètre de l'axe X est *Distance*). L'onglet Vitesse met en évidence les données liées à la vitesse tout au long du tracé. Pour iOS, il inclut des informations telles que *Vitesse moyenne*, *Vitesse maximale*, *Temps en mouvement* et *Distance corrigée*. Les captures d'écran ci-dessous montrent comment ces données sont affichées sur les deux plateformes. |
| ![données](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![données](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Pour **Android**, vous pouvez créer plus de combinaisons de données d'axe Y disponibles et de valeurs d'axe X. |
| ![données](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Pour plus de détails, vous pouvez explorer le [**Menu contextuel des tracés**](../map/tracks/track-context-menu.md#options), où vous pouvez gérer diverses options liées aux tracés comme le renommage, la suppression ou l'ajout de points de cheminement. Pour ajuster l'apparence des tracés sur la carte, visitez la section [**Apparence**](../map/tracks/appearance.md). Si vous souhaitez ajouter des points de cheminement spécifiques à votre tracé actuel, consultez le guide [**Points de tracé**](../map/tracks/track-context-menu.md#points--waypoints). Pour toute modification, comme le renommage d'un tracé, utilisez l'onglet [**Options**](https://osmand.net/docs/user/map/track-context-menu#options) dans le menu contextuel des tracés.
:::


### Afficher sur la carte {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![afficher_tr_sur_carte_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurer les tracés de carte Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![afficher_tr_sur_carte_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurer les tracés de carte iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gérez les tracés visibles sur votre carte en utilisant l'une des deux options. Allez dans *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*onglet <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) et activez l'option *Afficher sur la carte* pour tout tracé que vous souhaitez afficher ou masquer. Alternativement, vous pouvez aller dans *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) pour ajuster rapidement la visibilité de tous vos tracés en un seul endroit.


### Fichier GPX enregistré {#recorded-gpx-file}

OsmAnd capture votre parcours dans un [fichier GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) structuré, en utilisant une hiérarchie de *fichier > tracé > segments > points*. Voici comment cela fonctionne :

- Les **points** représentent des moments individuels de votre chemin enregistré, chacun marqué avec des attributs comme les coordonnées, la vitesse, l'altitude et le cap.
- Ces points sont regroupés pour former des **tracés**, qui représentent votre itinéraire complet.
- S'il y a un écart dans l'enregistrement (par exemple, si le suivi a été mis en pause), le point suivant après la pause démarre un nouveau **segment**, marquant la séparation dans votre parcours.
- Les **segments** et les **tracés** sont représentés visuellement avec des icônes *Départ* et *Arrivée* sur la carte.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Fichier GPX d'un tracé enregistré](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Fichier GPX d'un tracé enregistré](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png) -->


| Paramètre | Description |
|-----------------|----------------|
| `trkpt` | **Point de tracé** représente un emplacement géographique spécifique détecté pendant votre activité. Chaque point de tracé comprend des coordonnées de latitude et de longitude, formant la base de votre chemin enregistré. |
| `trkseg` | **Segment de tracé** regroupe des points de tracé consécutifs, séparés par des pauses dans l'activité, telles que des pauses ou des arrêts. Cela permet de distinguer le mouvement continu des périodes d'inactivité au sein d'un même enregistrement. |
| `lat` | La **latitude** indique la position nord-sud d'un point à la surface de la Terre. C'est la moitié de la paire de coordonnées utilisée pour localiser précisément votre position. |
| `lon` | La **longitude** spécifie la position est-ouest, complétant la latitude, pour localiser précisément un point sur le globe. Ensemble, la latitude et la longitude définissent votre position géographique précise. |
| `ele` | L'**élévation** mesure la hauteur d'un point de tracé au-dessus du niveau de la mer, enregistrée en mètres. Cela peut être utile pour suivre les changements d'altitude pendant vos activités, telles que les randonnées ou les balades à vélo. |
| `time` | L'**horodatage** enregistre la date et l'heure exactes auxquelles un point de tracé est enregistré. Cela vous permet de suivre la durée et le moment de votre activité avec précision. |
| `hdop` | La **Dilution horizontale de la précision (HDOP)** est une mesure de la précision GPS, reflétant l'erreur potentielle de localisation due aux positions des satellites. Contrairement à la HDOP standard, les tracés GPX d'OsmAnd utilisent cette valeur pour représenter la précision horizontale en mètres. Veuillez noter que cette implémentation diffère des normes HDOP typiques. [En savoir plus](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | La **vitesse** enregistre votre vitesse de déplacement en mètres par seconde. Elle fournit des informations sur votre rythme pendant les différents segments de votre activité. |
| `heading` | Le **cap** indique la direction dans laquelle votre véhicule ou l'avant de votre appareil est orienté, mesuré en degrés. Il est distinct du parcours, qui est le chemin réel du mouvement. Des différences peuvent survenir en raison de facteurs externes tels que le vent, les courants ou les conditions routières. [Plus d'informations sur le cap](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | La **vitesse** des [capteurs externes](../plugins/external-sensors.md) capture les données des capteurs connectés, fournissant des informations de vitesse plus précises, particulièrement utiles lors du cyclisme. Pour plus de détails, consultez la [documentation du format de fichier GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | La **cadence** mesure le nombre de révolutions de pédale par minute, enregistrée à l'aide de [capteurs externes](../plugins/external-sensors.md). C'est particulièrement utile pour les cyclistes qui souhaitent surveiller et optimiser leur efficacité de pédalage. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | La **puissance du vélo** quantifie la puissance générée en pédalant, capturée à partir de [capteurs externes](../plugins/external-sensors.md). C'est une métrique essentielle pour les cyclistes sérieux qui veulent évaluer leurs performances. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | La **température de l'air** enregistre la température ambiante pendant votre activité, mesurée à l'aide de [capteurs externes](../plugins/external-sensors.md). Notez que la température de l'eau n'est pas prise en charge. [Détails ici](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | La **fréquence cardiaque** surveille vos battements cardiaques par minute, en utilisant les données des [capteurs](../plugins/external-sensors.md) connectés. Cette information peut être vitale pour suivre vos performances cardiovasculaires pendant les entraînements. [En savoir plus](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Paramètres d'enregistrement {#recording-settings}

Avant de commencer à suivre vos trajets, vous devez configurer correctement le **plugin d'enregistrement de trajet** pour des performances optimales.

- **Paramètres spécifiques au profil**. Chaque profil de l'application peut avoir ses propres paramètres d'enregistrement de trajet. Cela vous permet de personnaliser précisément le comportement d'enregistrement en fonction de votre activité, comme la conduite, le cyclisme ou même la marche nordique, qui pourraient nécessiter des configurations différentes.

- **Personnaliser les paramètres d'enregistrement**. Les paramètres d'enregistrement peuvent varier en fonction de votre mode de déplacement. Par exemple, la conduite sur de longues distances peut nécessiter une fréquence d'enregistrement plus faible, tandis que la randonnée ou la marche pourrait bénéficier de mises à jour plus fréquentes.

- **Données de localisation précises**. Pour garantir que vos enregistrements sont fluides et utilisables pour une utilisation future, vous pouvez personnaliser la façon dont vous capturez les points de localisation. Cela pourrait inclure l'ajustement de la fréquence d'enregistrement, le format de vos données (comme le nombre de points par unité de distance) ou l'espacement entre les points enregistrés.

- **Paramètres globaux**. Les paramètres d'enregistrement de trajet sont configurés par profil, que vous pouvez gérer dans les [paramètres](../personal/global-settings.md) globaux de l'application. Avant de personnaliser le plugin d'enregistrement de trajet, sélectionnez le profil que vous souhaitez configurer dans la section [profils](../personal/profiles.md). De là, naviguez vers les paramètres du profil pour accéder aux options d'enregistrement de trajet.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configuration de l'enregistrement de trajet dans Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configuration de l'enregistrement de trajet dans Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuration de l'enregistrement de trajet dans iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configuration de l'enregistrement de trajet dans iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description |
|---|---|
| **Dialogue d'optimisation de la batterie** (*Android*) | Ouvre les [paramètres d'optimisation de la batterie d'Android](#battery-optimization). Appuyez sur *Ne plus demander* si vous ne souhaitez plus être invité. |
| **Afficher la boîte de dialogue de démarrage** (*Android*) | Active une boîte de dialogue où vous pouvez configurer les paramètres avant de commencer l'enregistrement. Si désactivé, l'enregistrement démarre automatiquement. |
| **Enregistrer automatiquement le tracé pendant la navigation** | Enregistre automatiquement le tracé pendant la navigation et le sauvegarde dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Remarque* : L'enregistrement du tracé consomme de la batterie et continue de fonctionner en arrière-plan, même si l'écran est éteint. |
| **Intervalle de journalisation général** | Définit la fréquence d'enregistrement des points de localisation. La valeur par défaut est de 5 secondes. Il est activé avec le *widget d'enregistrement de trajet*. |
| **Déplacement minimum** | Un filtre pour éviter d'enregistrer des points lorsqu'il y a peu ou pas de mouvement. Il aide à réduire le bruit des données.<ul><li>*Effets secondaires* : Les périodes de repos peuvent ne pas être enregistrées, et les petits mouvements peuvent être ignorés. Cela peut réduire les données de post-traitement mais peut également empêcher l'enregistrement d'erreurs GPS.</li><li>*Recommandation* : Réglez le déplacement à 5 mètres si vous souhaitez moins de détails mineurs dans vos enregistrements.</li></ul> |
| **Précision minimale** | Filtre les points de localisation en dessous d'un seuil d'indication de précision minimale, tel que rapporté par l'appareil.<ul><li>*Effets secondaires* : Les points dans les zones à faible signal (sous les ponts, les arbres, entre les bâtiments ou dans certaines conditions météorologiques) peuvent être manquants.</li><li>*Recommandation* : En cas de doute, il peut être préférable de désactiver ce filtre pour éviter de manquer des données.</li></ul><details><summary>*Remarque*</summary>Supposons que le GPS ait été éteint juste avant l'enregistrement. Dans ce cas, le premier point mesuré peut avoir une précision réduite, il est donc préférable d'attendre un peu avant d'enregistrer le point ou d'enregistrer le meilleur des 3 points consécutifs.</details> |
| **Vitesse minimale** | Définit un seuil pour ignorer les points enregistrés en dessous d'une certaine vitesse.<ul><li>*Effets secondaires* : Les sections où la vitesse tombe en dessous d'un seuil spécifié ne seront pas enregistrées.</li><li>*Recommandation* : Utilisez plutôt le filtre *Déplacement minimum*, car il peut donner de meilleurs résultats sans perdre de données importantes.</li></ul><details><summary>*Remarque*</summary>Essayez d'abord d'utiliser la détection de mouvement via le filtre de déplacement minimum de journalisation (B), cela peut produire de meilleurs résultats, et vous perdrez moins de données. Si vos tracés restent bruyants à basse vitesse, essayez des valeurs non nulles ici. Veuillez noter que certaines mesures peuvent ne rapporter aucune valeur de vitesse (certaines méthodes basées sur le réseau), auquel cas vous n'enregistreriez rien.<br/><br/>Vérification Vitesse > 0 : La plupart des chipsets GPS ne signalent une valeur de vitesse que si l'algorithme détermine que vous êtes en mouvement, et aucune si vous ne l'êtes pas. Par conséquent, l'utilisation du réglage > 0 dans ce filtre utilise en quelque sorte la détection de mouvement du chipset GPS. Mais même si elle n'est pas filtrée ici au moment de l'enregistrement, nous utilisons toujours cette fonctionnalité dans notre analyse GPX pour déterminer la distance corrigée, c'est-à-dire que la valeur affichée dans ce champ est la distance enregistrée en mouvement.</details> |
| **Diviser automatiquement les enregistrements après un écart** | Divise automatiquement les tracés en fonction des écarts de temps entre les points enregistrés. <ul><li>Un nouveau segment commence après un écart de 6 minutes.</li><li>Un nouveau tracé commence après un écart de 2 heures.</li><li>Un nouveau fichier commence lorsque la date change.</li><li>Les écarts peuvent résulter d'une perte de signal GPS, d'une faible vitesse ou de paramètres de configuration.</li></ul><details><summary>*Remarque*</summary>Un écart est identifié lorsqu'aucun point n'est enregistré. Cela peut se produire soit parce que l'emplacement n'est pas détecté, soit parce qu'il est détecté mais non enregistré. Plusieurs facteurs peuvent en être la cause, notamment des signaux GPS faibles en raison de mauvaises conditions météorologiques, ou la vitesse de déplacement tombant en dessous du seuil configuré. Dans de tels cas, même si l'appareil peut détecter l'emplacement, il ne l'enregistre pas.<br/><br/>Ces lacunes dans les données enregistrées peuvent déclencher la création d'un nouveau segment au sein du même tracé, d'un nouveau tracé dans le même fichier, ou d'un nouveau fichier GPX au sein d'un même enregistrement. Cela est géré au sein d'une seule session d'enregistrement de démarrage/arrêt.</details> |
| **Empêcher la journalisation autonome** (*Android*) | Met en pause l'enregistrement du tracé lorsque l'application OsmAnd est fermée (via *applications récentes*). L'indication d'arrière-plan n'est pas affichée dans le panneau de notification Android. |
| **Inclure le cap** | Enregistre le cap (direction du mouvement) pour chaque point dans le fichier GPX. Le cap est la direction vers laquelle l'appareil est orienté, ce qui peut différer de la direction du mouvement en raison de facteurs externes comme le vent ou le dérapage. |
| **Activité** | L'option vous permet de présélectionner un [type d'activité](../map/tracks/track-context-menu.md#track-information-activity) pour un profil, qui est ensuite automatiquement appliqué à tous les tracés enregistrés. |
| **Capteurs externes** <br/> *Nécessite l'activation du plugin* | Les données des [capteurs externes](../plugins/external-sensors.md#trip-recording) tels que *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, ou *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* sont enregistrées dans le fichier GPX. Les données de *distance* ne sont pas enregistrées sur Android ou iOS. Affiché uniquement lorsque le [plugin Capteurs externes](../plugins/external-sensors.md) est activé. |
| **Métriques du véhicule** (*Android*) <br/> *Nécessite l'activation du plugin* | Les données du [scanner OBD-II](../plugins/vehicle-metrics.md#trip-recording) sont enregistrées dans le fichier GPX. Affiché uniquement lorsque le [plugin Métriques du véhicule](../plugins/vehicle-metrics.md) est activé.<br />*Remarque* : Vous pouvez ajouter les métriques à enregistrer dans le fichier GPX à partir de la liste : *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Dossier de stockage des tracés** (*Android*) | Définit où les tracés enregistrés sont stockés dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. Les options incluent le stockage de tous les tracés dans le dossier Rec ou leur organisation par mois, comme Rec/aaaa-mm. |
| **Notification** | Contrôle l'affichage d'une [notification système d'enregistrement de trajet](#notifications) dans la zone de notification de l'appareil qui vous permet de démarrer l'enregistrement de trajets. |
| **Suivi en ligne** (*Android*) | Permet le suivi en temps réel de votre position en envoyant les points enregistrés à une URL spécifiée. L'intervalle de suivi détermine la fréquence d'envoi des points, et le tampon temporel stocke les points lorsqu'il n'y a pas de connexion Internet.<details><summary>*Remarque*</summary>Si cette option est activée et que l'enregistrement du tracé est en cours, le widget Distance/Démarrer-Arrêter (REC) devient **vert** au lieu de **rouge**, indiquant que chaque point enregistré est transmis à une URL spécifiée. Le champ **Adresse Web** vous permet de saisir l'URL en utilisant le format de paramètre suivant :<ul><li>`lat={0}` : Latitude</li><li>`lon={1}` : Longitude</li><li>`timestamp={2}` : Horodatage (heure Unix)</li><li>`hdop={3}` : Dilution horizontale de la précision</li><li>`altitude={4}` : Altitude</li><li>`speed={5}` : Vitesse</li><li>`bearing={6}` : Cap (direction du mouvement)</li><li>`eta={7}` : Heure d'arrivée estimée (heure Unix)</li><li>`etfa={8}` : Temps estimé jusqu'au premier point intermédiaire ou point d'arrivée (heure Unix)</li><li>`eda={9}` : Distance estimée jusqu'à l'arrivée ou un marqueur (en mètres)</li><li>`edfa={10}` : Distance estimée jusqu'au premier point intermédiaire ou point d'arrivée (en mètres)</li></ul>Vous pouvez définir l'**Intervalle de suivi** pour spécifier la fréquence d'envoi des points de localisation, avec des options allant de 0 seconde à 5 minutes. De plus, le paramètre **Tampon temporel** détermine la durée de stockage des points de localisation s'il n'y a pas de connexion Internet, garantissant que les données sont sauvegardées et transmises lorsque la connexion est rétablie.</details> |
| **Tracès** | Une référence rapide au dossier où les tracés sont enregistrés dans l'onglet *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Réinitialiser les paramètres du plugin par défaut** | Réinitialise tous les paramètres d'enregistrement de trajet pour le profil actuel à leurs valeurs par défaut. |
| **Copier depuis un autre profil** (*Android*) | Copie les paramètres d'enregistrement de trajet d'un profil à un autre. |


### Optimisation de la batterie {#battery-optimization}

<InfoAndroidOnly />

![Tracé sur la carte iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Tracé sur la carte iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Cette fonctionnalité vous permet de gérer les paramètres d'optimisation de la batterie pour OsmAnd afin d'assurer un accès ininterrompu à votre position, même lorsque l'application fonctionne en arrière-plan pendant la navigation ou l'enregistrement de tracé.

- **Paramètres d'optimisation de la batterie**. Ouvre les paramètres Android, où vous pouvez modifier les préférences d'économie de batterie pour OsmAnd. [Plus de détails ici](../troubleshooting/general.md#optimizing-battery-consumption).
- **Ne plus demander**. Ferme la boîte de dialogue de manière permanente, de sorte qu'elle n'apparaîtra plus.
- **Fermer**. Ferme temporairement la boîte de dialogue, qui réapparaîtra la prochaine fois que l'optimisation de la batterie nécessitera une attention.


### Notifications {#notifications}

![Notification d'enregistrement de trajet](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Si la [Notification](#recording-settings) est activée dans les paramètres du plugin, les notifications d'enregistrement de trajet seront toujours affichées dans la zone de notification du système lorsque l'enregistrement est actif. Cette notification garantit que le processus d'enregistrement n'est pas interrompu par le système, et elle ne peut pas être désactivée pendant un enregistrement actif.

- La zone de notification s'ouvre lorsque vous balayez vers le bas depuis le haut de l'écran et se ferme lorsque vous balayez vers le haut. Ces messages vous informent des actions telles que le démarrage/l'arrêt de l'enregistrement de trajet, en particulier lorsque l'enregistrement automatique est activé pendant la navigation.
- Les notifications restent visibles que l'application soit en cours d'exécution au premier plan, en arrière-plan ou fermée. Vous pouvez effacer manuellement l'ancienne notification si elle n'est plus nécessaire, mais cela n'arrêtera pas l'enregistrement en cours.

**Note importante**.

Ce comportement est requis par Android pour que tout service de premier plan, comme l'enregistrement de trajet, reste visible pour vous.

- Si la notification est supprimée, Android arrêtera automatiquement l'enregistrement. Vous pouvez utiliser le paramètre [Empêcher la journalisation autonome](#recording-settings).
- Le paramètre **Notification** dans OsmAnd affecte si la barre de notification affiche un raccourci pour démarrer un enregistrement lorsqu'aucun enregistrement n'est actif. Il ne contrôle **pas** la visibilité de la notification pendant un enregistrement actif.

**Options Android supplémentaires**.

![Notification d'enregistrement de trajet](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- Dans ***Paramètres Android → Notifications et barre d'état → Notifications de l'écran de verrouillage***, vous pouvez supprimer OsmAnd de la liste des applications pour empêcher les notifications d'apparaître sur l'écran de verrouillage, évitant ainsi l'activation accidentelle de l'écran. Cela n'affectera pas l'enregistrement du tracé. Les notifications apparaîtront toujours dans la zone de notification normale.
- **OsmAnd** peut également apparaître sous ***Confidentialité → Autorisations spéciales → Activer l'écran***. Si vous souhaitez empêcher l'écran de s'allumer lorsqu'une notification apparaît, essayez de supprimer OsmAnd de cette liste.

<!--
- OsmAnd n'est pas listé sous **Confidentialité** *→* **Autorisations spéciales** → **Alarmes et rappels**.
-->

**Badge de notification**.

![Notification d'enregistrement de trajet](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Le badge de l'icône de l'application apparaît à côté de l'icône OsmAnd lorsque l'enregistrement du tracé est actif.

- Cette icône disparaît lorsque l'enregistrement du tracé est terminé. Pour vérifier si un enregistrement est actif, vous pouvez aller dans *Menu → Mes lieux → Onglet Tracés* ou appuyer sur le widget pour gérer l'enregistrement.
- S'il n'y a pas d'enregistrement en cours et que le badge est toujours affiché, cela peut signifier qu'un message d'OsmAnd a été laissé dans le panneau de notification de l'appareil.
- Pour désactiver les badges dans les paramètres Android, allez dans *Paramètres de l'appareil → Applications → OsmAnd → Notifications* et désactivez l'option d'affichage du badge pour cette application.


## Widgets {#widgets}

Les widgets vous permettent d'afficher des informations clés sur l'enregistrement de tracé directement à l'écran, telles que la *Distance*, la *Durée*, la *Montée* et la *Descente*.

Pour commencer à utiliser les *widgets d'enregistrement de trajet*, vous devez effectuer tous les réglages suivants :

1. [Activer le plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurer les paramètres d'enregistrement de trajet pour le [profil](../personal/profiles.md) requis.
3. Ajouter les **widgets d'enregistrement de trajet** nécessaires à l'écran. Notez que cette configuration est **spécifique à chaque profil**.


### Ajouter un widget d'enregistrement {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez dans : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_widget_monitoring"/>*

![Ajout du widget Distance/Démarrer-Arrêter dans Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choisir un panneau → <Translate android="true" ids="map_widget_monitoring"/>*

![Ajout du widget Distance/Démarrer-Arrêter dans iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Le [widget d'enregistrement de trajet](../widgets/info-widgets.md#trip-recording-widgets) offre un moyen facile de surveiller l'état de votre enregistrement et d'accéder rapidement aux paramètres et aux détails de l'enregistrement. Ce widget est automatiquement ajouté à votre écran lorsque le plugin d'enregistrement de trajet est activé.

Pour personnaliser votre interface, vous pouvez ajouter ou supprimer le widget d'enregistrement de trajet et [d'autres widgets](../plugins/trip-recording#duration-uphill-downhill) via le menu Configurer l'écran.


### Distance (Démarrer-Arrêter) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget d'enregistrement de trajet](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Terminer l'enregistrement dans Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget d'enregistrement de trajet](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget d'enregistrement de trajet](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Lorsque les widgets sont affichés sur la carte, appuyer sur l'un d'eux révèle des détails supplémentaires sur le tracé et permet d'interagir avec l'enregistrement.
Le widget *Distance* affiche la distance totale de votre trajet enregistré actuel et sert d'interface principale pour gérer vos enregistrements. En appuyant dessus, la [boîte de dialogue d'enregistrement de trajet](#start-a-dialog) s'affiche, où vous pouvez démarrer, arrêter et afficher des informations détaillées sur votre tracé.

- Le widget est ajouté automatiquement lorsque le *plugin d'enregistrement de trajet* est activé, mais il peut être masqué via le [menu Configurer l'écran](../widgets/configure-screen.md#configure-screen-menu).
- Si l'option *Afficher la boîte de dialogue de démarrage* est désactivée dans les paramètres du plugin d'enregistrement de trajet, appuyer sur le widget actif ouvrira toujours la boîte de dialogue *Enregistrement de trajet*, vous permettant d'accéder à d'autres options et informations.

En plus du widget *Distance/Démarrer-Arrêter*, le **plugin d'enregistrement de trajet** comprend trois autres widgets : *Durée*, *Montée* et *Descente*. Ceux-ci fournissent des informations supplémentaires sur votre trajet, vous aidant à suivre la progression en temps réel.

| |
|-----------|
| **Distance/Démarrer-Arrêter**. Ce widget affiche la distance de votre enregistrement de trajet en cours. Il est automatiquement ajouté lorsque le plugin d'enregistrement de trajet est activé, mais vous pouvez le masquer via le menu Configurer l'écran. Le widget présente trois états distincts : *Enregistrement*, *En pause* et *Inactif*, chacun indiquant l'état actuel de l'enregistrement de votre trajet. |
| ![Widget d'enregistrement de trajet (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Pour ouvrir la [boîte de dialogue d'enregistrement de trajet](#start-a-dialog) en appuyant sur un widget inactif, activez l'option *Afficher la boîte de dialogue de démarrage* dans les paramètres du plugin d'enregistrement de trajet. Si l'option est désactivée, l'enregistrement commencera immédiatement après avoir appuyé sur le widget sans ouvrir la boîte de dialogue. |


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
- [Afficher le tracé sur la carte](../map/tracks/index.md)
- [Analyser sur la carte](../map/tracks/index.md#analyze-track-on-map)
- [Menu contextuel du tracé](../map/tracks/track-context-menu.md)
- [Navigation par tracé](../navigation/setup/gpx-navigation.md)

### Problèmes courants et solutions {#common-issues-and-solutions}

- L'enregistrement de trajet ne démarre pas.
    - Assurez-vous que le **plugin d'enregistrement de trajet** est activé : *Menu → Plugins → Enregistrement de trajet → Activer*.
    - Vérifiez que les paramètres sont corrects : *Menu → Configurer le profil → Paramètres du plugin → Enregistrement de trajet*.
    - Si l'enregistrement ne démarre toujours pas, redémarrez l'application et réessayez.

- L'enregistrement de trajet s'arrête de manière inattendue.
    - Vérifiez si les *paramètres d'optimisation de la batterie* de votre appareil arrêtent l'enregistrement. Certains appareils peuvent mettre en pause l'activité en arrière-plan pour économiser de l'énergie. Allez dans *Paramètres de l'appareil → Batterie*.

- La distance enregistrée ne correspond pas à la distance réelle.
    - Vérifiez que le GPS est activé et qu'il a un signal actif.
    - Réduisez le seuil de précision GPS : *Menu → Configurer le profil → Enregistrement de trajet → Précision minimale*.

- Les tracés enregistrés sont bruyants. [(vérifier)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Les tracés enregistrés ont des lacunes. [(vérifier)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Comment suivre la distance parcourue. [(vérifier)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Pour un dépannage supplémentaire, visitez : [Dépannage de l'enregistrement de tracé](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Dernière mise à jour : janvier 2025*