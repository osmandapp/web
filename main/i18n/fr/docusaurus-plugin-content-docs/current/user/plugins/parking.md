---
source-hash: c5522cf3c673aa4af3738c22a0afc948910a5af511d7468ae41a34b1784474ea
sidebar_position: 12
title:  Position de stationnement
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Aperçu {#overview}

Le plugin **Position de stationnement** vous aide à enregistrer et à gérer l'emplacement où vous avez garé votre voiture. Il vous permet de placer un marqueur sur la carte, de suivre la durée du stationnement et, en option, de définir un rappel dans le calendrier pour la fin de votre temps de stationnement.

Ce plugin est gratuit et fonctionne hors ligne avec les cartes OsmAnd téléchargées. Vous pouvez rapidement localiser votre véhicule garé, estimer la distance de marche pour y retourner et partager l'emplacement du stationnement si nécessaire.

- Vous pouvez ajouter une place de stationnement manuellement via le menu contextuel.
- Si le stationnement est à durée limitée, le plugin enregistre l'heure de début et de fin.
- L'heure de fin peut déclencher un rappel dans le calendrier de votre appareil.
- Les détails du stationnement peuvent être consultés ultérieurement ou utilisés pour la navigation.

Le marqueur est temporaire et facile à supprimer une fois qu'il n'est plus nécessaire.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de stationnement Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de stationnement iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Pour utiliser une place de stationnement sur la carte, vous devez effectuer les réglages suivants :

1. Activez le [plugin Position de stationnement](../plugins/index.md#enable--disable) depuis le *Menu principal → Plugins*.  
2. Définissez une [place de stationnement](#set-a-spot) sur la carte via le menu contextuel.
3. (Facultatif) Ajoutez le [widget de stationnement](#parking-widget) à l'écran pour un accès plus rapide.  


## Place de stationnement sur la carte {#parking-spot-on-the-map}

Lorsque vous marquez une place de stationnement, OsmAnd enregistre ses coordonnées géographiques ainsi qu'un horodatage. Si nécessaire, une limite de temps et un rappel de calendrier peuvent également être ajoutés.


### Définir une place {#set-a-spot}

Pour définir une place de stationnement sur la carte, zoomez au niveau requis, puis appuyez longuement sur l'endroit sur la carte et dans le [menu contextuel](../map/map-context-menu.md) qui s'ouvre, effectuez les réglages.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Définir une place de stationnement sur Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Définir les limites de temps sur Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sélectionner Stationnement dans Actions sur iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Définir un point de stationnement sur iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Pour placer un marqueur de stationnement, zoomez sur la carte, appuyez longuement sur l'emplacement requis et ouvrez le [menu contextuel](../map/map-context-menu.md). Ensuite :

1. Appuyez sur [Actions](../map/map-context-menu#actions).
2. Sélectionnez **Marquer comme emplacement de stationnement** (*Android*) ou **Ajouter un emplacement de stationnement** (*iOS*).
3. Choisissez l'une des options disponibles :
   - **Durée illimitée** – ajoute un marqueur de base sans compte à rebours.
   - **Stationnement à durée limitée** – vous permet de définir une heure de fin et, en option, de créer un rappel dans le calendrier de votre appareil.
4. Confirmez pour placer le marqueur. L'heure de début est enregistrée automatiquement.

:::info Heure de début
L'heure de début est toujours définie automatiquement. Si vous devez modifier l'heure de fin, vous devez supprimer et recréer la place de stationnement. Les rappels ne sont ajoutés à votre calendrier que si vous avez sélectionné cette option lors de la configuration.
:::


### Rester informé {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de stationnement Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Temps restant sur Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de stationnement iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Informations sur le stationnement sur iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Une fois qu'une place de stationnement est enregistrée, OsmAnd vous aide à surveiller son emplacement et sa durée via le menu contextuel ou le [widget de stationnement](#parking-widget) optionnel.

Vous pouvez afficher le marqueur de stationnement en dézoomant sur la carte ou en appuyant sur le **widget de stationnement**, ce qui centre la carte sur votre place enregistrée. Le widget affiche également la distance entre votre position actuelle (ou le centre de la carte) et l'emplacement du stationnement.

Des détails supplémentaires sont affichés lorsque vous appuyez sur le marqueur de stationnement :

- **Heure de début** – le moment où le marqueur a été placé.
- **Temps restant** ou **Temps dépassé** – si une limite de temps a été définie, cela indique combien de temps il reste ou s'est écoulé depuis l'expiration.
- Si vous avez activé le rappel de calendrier, il apparaîtra dans l'application de calendrier de votre appareil.


### Naviguer vers un point de passage {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Se diriger vers le point de stationnement sur Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Se diriger vers le point de stationnement sur iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Vous pouvez utiliser la place de stationnement comme cible de navigation pour retourner facilement à votre véhicule. OsmAnd offre deux manières principales de démarrer la navigation vers l'emplacement de stationnement enregistré :

**Via le menu Navigation** :

  1. Appuyez sur le bouton **Navigation**.  
  2. Choisissez un profil.  
  3. Appuyez sur **Définir la destination** et sélectionnez **Stationnement** dans la liste des points enregistrés.

**Via le widget de stationnement** :

  1. Appuyez sur le **widget de stationnement**.  
  2. Appuyez sur le marqueur de la place de stationnement.  
  3. Sélectionnez **Navigation** et choisissez le profil que vous souhaitez utiliser.


### Supprimer une place {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Action Supprimer le stationnement sur Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Action Supprimer le stationnement sur iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Pour supprimer un marqueur de stationnement :

1. Localisez la place de stationnement sur la carte ou appuyez sur le **widget de stationnement**.
2. Appuyez sur le marqueur pour ouvrir le menu contextuel.
3. Sélectionnez **Supprimer** ou **Rejeter**.

Si un rappel de calendrier a été défini, il sera également supprimé automatiquement.


## Widget de stationnement {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_parking"/>*  

![Ajout du widget de stationnement sur Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="parking_place"/>*  

![Ajout du widget de stationnement sur iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Le [widget de stationnement](../widgets/info-widgets.md#parking-widget) affiche la distance entre le centre de l'écran et l'emplacement de stationnement enregistré et vous permet de centrer rapidement la carte sur cet endroit.

- Le widget n'est visible qu'après qu'une position de stationnement a été définie.
- S'il n'est pas déjà à l'écran, vous pouvez l'ajouter via le menu [Configurer l'écran](../widgets/configure-screen.md).

Pour en savoir plus, consultez : [Widgets d'information – Widget de stationnement](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)