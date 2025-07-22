---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
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

Le plugin **Position de stationnement** vous aide à enregistrer et à gérer l'emplacement où vous avez garé votre voiture. Il vous permet de placer un marqueur sur la carte, de suivre la durée du stationnement et, éventuellement, de définir un rappel dans le calendrier pour la fin de votre temps de stationnement.

Ce plugin est gratuit et fonctionne hors ligne avec les cartes OsmAnd téléchargées. Vous pouvez localiser rapidement votre véhicule garé, estimer la distance de marche pour y retourner et partager l'emplacement de stationnement si nécessaire.

- Vous pouvez ajouter un emplacement de stationnement manuellement via le menu contextuel.
- Si le temps est limité, le plugin enregistre l'heure de début et l'heure de fin.
- L'heure de fin peut déclencher un rappel dans le calendrier de votre appareil.
- Les détails du stationnement peuvent être consultés ultérieurement ou utilisés pour la navigation.

Le marqueur est temporaire et facile à supprimer une fois qu'il n'est plus nécessaire.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Paramètres de configuration requis {#required-setup-parameters}

Pour utiliser un emplacement de stationnement sur la carte, vous devez effectuer les réglages suivants :

1. Activez le [plugin Position de stationnement](../plugins/index.md#enable--disable) à partir du *Menu principal → Plugins*.  
2. Définissez un [emplacement de stationnement](#set-a-spot) sur la carte via le menu contextuel.
3. (Facultatif) Ajoutez le [widget Stationnement](#parking-widget) à l'écran pour un accès plus rapide.  


## Emplacement de stationnement sur la carte {#parking-spot-on-the-map}

Lorsque vous marquez un emplacement de stationnement, OsmAnd enregistre ses coordonnées géographiques ainsi qu'un horodatage. Si nécessaire, une limite de temps et un rappel dans le calendrier peuvent également être ajoutés.


### Définir un emplacement {#set-a-spot}

Pour définir un emplacement de stationnement sur la carte, zoomez au niveau requis, puis appuyez longuement sur l'emplacement sur la carte et dans le [menu contextuel](../map/map-context-menu.md) qui s'ouvre, effectuez les réglages.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Pour placer un marqueur de stationnement, zoomez sur la carte, appuyez longuement sur l'emplacement requis et ouvrez le [menu contextuel](../map/map-context-menu.md). Ensuite :

1. Appuyez sur [Actions](../map/map-context-menu#actions).
2. Sélectionnez **Marquer comme emplacement de stationnement** (*Android*) ou **Ajouter un emplacement de stationnement** (*iOS*).
3. Choisissez l'une des options disponibles :
   - **Temps illimité** – ajoute un marqueur de base sans compte à rebours.
   - **Stationnement à durée limitée** – vous permet de définir une heure de fin et éventuellement de créer un rappel dans le calendrier de votre appareil.
4. Confirmez pour placer le marqueur. L'heure de début est enregistrée automatiquement.

:::info Heure de début
L'heure de début est toujours définie automatiquement. Si vous devez modifier l'heure de fin, vous devez supprimer et recréer l'emplacement de stationnement. Les rappels ne sont ajoutés à votre calendrier que si vous avez sélectionné cette option lors de la configuration.
:::


### Restez informé {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Une fois qu'un emplacement de stationnement est enregistré, OsmAnd vous aide à surveiller son emplacement et son heure via le menu contextuel ou le [widget Stationnement](#parking-widget) facultatif.

Vous pouvez afficher le marqueur de stationnement en dézoomant sur la carte ou en appuyant sur le **widget Stationnement**, qui centre la carte sur votre emplacement enregistré. Le widget affiche également la distance entre votre position actuelle (ou le centre de la carte) et l'emplacement de stationnement.

Des détails supplémentaires sont affichés lorsque vous appuyez sur le marqueur de stationnement :

- **Heure de début** – le moment où le marqueur a été placé.
- **Temps restant** ou **Temps dépassé** – si une limite de temps a été définie, cela indique le temps restant ou le temps écoulé depuis l'expiration.
- Si vous avez activé le rappel dans le calendrier, il apparaîtra dans l'application calendrier de votre appareil.


### Navigation vers un point de cheminement {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Vous pouvez utiliser l'emplacement de stationnement comme cible de navigation pour retourner facilement à votre véhicule. OsmAnd propose deux façons principales de démarrer la navigation vers l'emplacement de stationnement enregistré :

**Via le menu Navigation** :

  1. Appuyez sur le bouton **Navigation**.  
  2. Choisissez un profil.  
  3. Appuyez sur **Définir la destination** et sélectionnez **Stationnement** dans la liste des points enregistrés.

**Via le widget Stationnement** :

  1. Appuyez sur le **widget Stationnement**.  
  2. Appuyez sur le marqueur de l'emplacement de stationnement.  
  3. Sélectionnez **Navigation** et choisissez le profil que vous souhaitez utiliser.


### Supprimer un emplacement {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Pour supprimer un marqueur de stationnement :

1. Localisez l'emplacement de stationnement sur la carte ou appuyez sur le **widget Stationnement**.
2. Appuyez sur le marqueur pour ouvrir le menu contextuel.
3. Sélectionnez **Supprimer** ou **Ignorer**.

Si un rappel dans le calendrier a été défini, il sera également supprimé automatiquement.


## Widget Stationnement {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choisir un panneau → Ajouter un widget → <Translate android="true" ids="map_widget_parking"/>*  

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choisir un panneau → Ajouter un widget → <Translate ios="true" ids="parking_place"/>*  

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Le [widget Stationnement](../widgets/info-widgets.md#parking-widget) affiche la distance entre le centre de l'écran et l'emplacement de stationnement enregistré et vous permet de centrer rapidement la carte sur cet emplacement.

- Le widget n'est visible qu'après qu'une position de stationnement a été définie.
- S'il n'est pas déjà à l'écran, vous pouvez l'ajouter via le menu [Configurer l'écran](../widgets/configure-screen.md).

Pour en savoir plus, consultez : [Widgets d'information – Widget Stationnement](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Dernière mise à jour : mai 2025*