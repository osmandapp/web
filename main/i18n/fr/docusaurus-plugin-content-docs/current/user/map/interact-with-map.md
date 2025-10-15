---
source-hash: 21283db3b00701562a96fe4d5d41814c5e611b4278089388e11aae43e71649e9
sidebar_position: 2
title:  Interagir avec la carte
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

Cet article explique comment personnaliser et interagir avec la carte à l'aide de divers boutons et gestes. Il couvre comment faire pivoter, zoomer, ajuster l'angle de vue, et changer l'angle de vue de la carte, la faire pivoter manuellement ou automatiquement à l'aide de la boussole, ou selon le relèvement.


## Gestes {#gestures}

Les gestes sont essentiels pour naviguer sur la carte facilement et intuitivement.

| Action sur la carte  | Geste  |
|:------------|:-------------|
| **Déplacer**    | Appuyez et maintenez la carte avec **un** doigt, puis faites glisser pour vous déplacer. |
| **Glisser**   | Balayez la carte avec **un** doigt. |
| **Zoom avant** | Appuyez deux fois sur la carte avec **un** doigt. <br/> Appuyez deux fois avec **un** doigt et balayez vers le bas. <br/> Pincez avec **deux** doigts pour zoomer en avant. |
| **Zoom arrière**| Appuyez deux fois avec **deux** doigts. <br/> Appuyez deux fois avec **un** doigt et balayez vers le haut. <br/> Pincez avec **deux** doigts pour zoomer en arrière. |
| **Pivoter**  | Appuyez sur la carte avec **deux** doigts, puis faites pivoter vos doigts dans un mouvement circulaire. |
| **Inclinaison (3D)** | Appuyez avec **deux** doigts et déplacez-les vers le haut ou vers le bas. <br/> Disponible uniquement avec la version 2 (OpenGL) du [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine). |

Les animations de glissement peuvent être désactivées dans les paramètres avec une [option spéciale](#no-animations).


## Ma position et Zoom {#my-location-and-zoom}

![Menu de configuration de l'écran](@site/static/img/widgets/location_zoom_buttons.png)

**Ma position**.  
Le bouton *Ma position* est une icône circulaire qui indique si le centre de la carte est synchronisé avec la géolocalisation actuelle de votre appareil. Souvent appelé le bouton "Où suis-je ?", il vous aide à trouver rapidement votre position sur la carte. Pendant la navigation, la carte reste généralement synchronisée avec la position de l'appareil, donc le bouton reste caché. Cependant, il devient visible si la carte et votre position se désynchronisent en raison d'une interaction de l'utilisateur. Appuyer sur le bouton recentrera la carte sur votre position actuelle, et un double appui passera en mode 3D.

- Le bouton *Ma position* a les états suivants :
  - *Icône entièrement bleue*. La position est trouvée mais non synchronisée avec la carte.
  - *Icône blanche*. La position est trouvée et synchronisée avec la carte.
  - *Icône grise*. La position n'a pas encore été trouvée.
  - *Icône de flèche*. Le mode 3D est activé.

- Un **appui long** (*Android*) sur le bouton *Ma position* ouvre le [menu contextuel de la carte](../map/map-context-menu.md), vous permettant de partager votre position.

<br/>

**Boutons de zoom**.  
Les *boutons de zoom* sont toujours visibles à côté de *Ma position* et vous permettent de contrôler le niveau de zoom de la carte.

- Changer le niveau de zoom n'affecte pas la synchronisation de la carte avec votre position.
- Un **appui long** sur les *boutons de zoom* ouvre la boîte de dialogue *Loupe de carte*, vous permettant d'ajuster les niveaux de détail de la carte.
- Gardez à l'esprit que pendant la navigation, le zoom peut être contrôlé automatiquement par le paramètre **Zoom automatique** :
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Apparence de Ma position {#my-location-appearance}

Vous pouvez personnaliser les icônes du bouton **Ma position** en utilisant les paramètres d'apparence du profil. Pour en savoir plus sur la manière de le faire, cliquez [ici](../personal/profiles.md#profile-appearance).


## Loupe de carte {#map-magnifier}

La *Loupe de carte* est un outil qui améliore la visibilité de la carte, similaire à une loupe utilisée avec des cartes papier. Elle vous permet de zoomer sur la carte pour voir le texte et les détails plus clairement ou d'ajuster le niveau de détail tout en conservant la même échelle. Pour plus d'informations, consultez l'article [Cartes vectorielles](../map/vector-maps.md#map-magnifier).


## Modes d'orientation de la carte {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget Boussole](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget Boussole](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

Les *modes d'orientation de la carte* vous permettent de choisir comment la carte est affichée sur l'écran de l'appareil. OsmAnd propose des modes tels que **Rotation manuelle**, **Direction du mouvement**, **Direction de la boussole** et **Le nord est en haut**. L'activation de chaque mode modifie la manière dont la carte est orientée selon l'option sélectionnée. Pour plus de détails, consultez l'article [Boutons de la carte](../widgets/map-buttons.md#compass).


## Boussole {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Boussole](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Boussole](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Le bouton de la boussole indique comment la [carte est orientée](#map-orientation-modes). La *flèche rouge* sur les icônes, ou la direction de la flèche en mode *Direction du mouvement*, indique le Nord. [L'icône sur le bouton de la boussole](../widgets/map-buttons.md#compass) indique le mode d'orientation actuel de la carte. Le widget du bouton de la boussole offre trois [options d'interaction](../widgets/map-buttons.md#compass-tapping-behavior) : un *appui simple* fait pivoter la carte vers le Nord, un *double appui* alterne entre tous les modes d'orientation de la carte, et un *appui long* ouvre la liste des modes.


## Rotation de la carte par relèvement {#rotate-map-by-bearing}

En mode **rotation de la carte par relèvement** ([Direction du mouvement](../widgets/map-buttons.md#compass)), la carte s'aligne automatiquement sur votre direction de mouvement, de sorte que la zone devant vous est affichée en haut de l'écran. Ce mode améliore la navigation en déplaçant légèrement le centre de la carte vers le bas, montrant ainsi une plus grande partie de l'itinéraire à venir. Si vous êtes à l'arrêt, la carte reste fixe.  

Vous pouvez activer cette fonctionnalité via *Menu → Paramètres → Profils → Paramètres généraux → Apparence → Orientation de la carte* ou en appuyant deux fois sur le [bouton Boussole](../widgets/map-buttons.md#compass-tapping-behavior). Pour plus de détails sur le relèvement, voir [ici](../widgets/nav-widgets.md#bearing-widget).


## Inclinaison de la carte et horizon {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inclinaison Android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Inclinaison Android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Inclinaison iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Inclinaison iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Avec le nouveau [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine), vous pouvez changer l'[inclinaison de la caméra](../plugins/development.md#camera-tilt) de 90 (pas d'inclinaison) à 10 degrés. Approximativement à une inclinaison de carte inférieure à 20-22 degrés (ce paramètre dépend du niveau de zoom), la ligne d'horizon imaginaire devient visible. Contrairement à la réalité, l'horizon du programme est toujours droit.  

Sous l'horizon, vous pouvez voir ce qu'on appelle de la *brume* ou du *brouillard*. Cette zone de la carte est remplie de couleur grise, seuls quelques détails de la carte peuvent être observés.  
L'utilisation du brouillard est nécessaire car l'affichage d'objets éloignés sur la carte nécessite des ressources de calcul importantes et n'est pas toujours justifié en raison des [distorsions](../plugins/development.md#comparison-with-a-satellite-imagery) de la carte à de faibles angles de vue. Ainsi, la distance visible sur la carte OsmAnd est actuellement limitée à 35 tuiles.  

:::info
L'inclinaison de la carte peut être modifiée par un appui long sur l'écran avec deux doigts et en les déplaçant vers le haut/bas. Vous pouvez également changer l'inclinaison en appuyant sur l'icône [Ma position](#my-location-and-zoom) dans le coin inférieur droit de l'écran (seules les positions à 45 et 90 degrés sont disponibles).  
Vous ne pouvez pas changer l'inclinaison de la caméra lorsque l'ancien [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine) (version 1) est activé.
:::


## Verrouillage de l'écran tactile {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bouton d'action rapide Verrouillage de l'écran tactile Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bouton d'action rapide Verrouillage de l'écran tactile iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Utilisez la fonction **Verrouillage de l'écran tactile** pour éviter les appuis accidentels pendant la navigation. Ceci est particulièrement utile pour des activités comme le vélo ou la randonnée, où des contacts involontaires pourraient perturber votre itinéraire.

**Déverrouillage**.  
Appuyez sur le bouton à l'écran, ou, si le verrouillage est activé via un bouton externe (par exemple, Volume Bas), appuyez sur le bouton externe puis sur le bouton à l'écran.  

**Configuration**.

- Naviguez vers *Menu → Configurer l'écran → Boutons personnalisés*.
- Sélectionnez *+ → Ajouter une action → Interface → Verrouillage de l'écran tactile*.

Des messages clairs à l'écran vous guideront lors du verrouillage ou du déverrouillage de l'écran.


## Paramètres {#settings}

### Paramètres supplémentaires de la boussole {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Lisse la rotation de la carte avec une animation de rotation plus lente, bien que cela introduise un léger retard, pas plus d'une seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Lisse la rotation de la carte avec une animation de rotation plus lente, bien que cela introduise un léger retard, pas plus d'une seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Pas d'animations {#no-animations}

<InfoAndroidOnly/>  

Vous pouvez désactiver toutes les animations de la carte lors des interactions avec la carte, y compris les gestes et les boutons.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animer ma position {#animate-own-position}

**Android** : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS** : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Crée un effet de panoramique fluide de la carte par rapport à l'icône *[Ma Position](../personal/profiles/#profile-appearance)* lorsqu'elle est en mouvement. L'effet introduit un léger retard par rapport à la position réelle d'environ 1 seconde. Il a été signalé que l'activation de cette option peut créer des problèmes de latence prononcés dans certaines circonstances, désactivez-la si de tels problèmes surviennent.


## Périphériques d'entrée externes {#external-input-devices}

Les boutons des périphériques d'entrée externes offrent un moyen pratique et efficace d'interagir avec la carte et l'interface de l'application OsmAnd.  Ils sont situés sur des appareils externes, tels que des **claviers Bluetooth ou d'autres types de claviers**, des **boutons spécialisés sur les appareils de navigation de véhicule**, ou les contrôleurs [WunderLINQ](https://blackboxembedded.com/) et [Parrot](https://www.parrot.com/en).  

L'une des principales fonctions des boutons sur les périphériques d'entrée externes est de zoomer en avant et en arrière sur la carte. Ils permettent également de naviguer sur la carte et de changer son orientation sans avoir à toucher l'écran. Les boutons sur les périphériques d'entrée externes prennent en charge de nombreuses autres fonctions, comme l'ouverture du *Menu principal*.

:::note
Le clavier reste fonctionnel même lorsque l'option *Périphériques d'entrée externes* est désactivée et que *Aucun* est sélectionné.
:::

### Périphérique d'entrée préconfiguré {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Allez à : *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Périphériques externes](@site/static/img/map/external_menu_android.png) ![Périphériques externes](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez à : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Périphériques externes](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Pour accéder aux paramètres d'un périphérique d'entrée externe, vous devez activer cette fonctionnalité.

- Allez dans le *Menu principal → Paramètres →* sélectionnez le *Profil → Paramètres généraux → Autre → Périphériques d'entrée externes*, et passez à *Activé*.

- Sélectionnez un appareil parmi ceux pris en charge par OsmAnd en appuyant sur l'élément *Type* dans la liste :  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*Android uniquement*), ou créez [**votre propre type**](#custom-input-device-type) (*Android uniquement*).

- Il existe une assignation **d'ensemble action-touche défini** différente pour chaque type de périphérique d'entrée externe. Appuyez sur *<Translate android="true" ids="key_assignments"/>* pour voir une liste d'actions et de touches. Le tableau des touches est présenté ci-dessous.

- Vous pouvez en savoir plus sur les actions des périphériques d'entrée externes sur GitHub dans le paquet [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Touche | Appareil | Action |
|:---------|:---------------|:---------------|
|**C**| *Clavier*   | Déplacer - [Vers Ma position](#my-location-and-zoom) |
|**D**| *Clavier*   | Changer - [Orientation de la carte](#map-orientation-modes) |
|**N**| *Clavier*   | Afficher / Masquer - Vue de navigation |
|**S**| *Clavier*   | Afficher / Masquer - [Vue de recherche](../search/index.md) |
|**P**| *Clavier*   | Changer - Profil d'application au suivant |
|**O**| *Clavier*   | Changer - Profil d'application au précédent |
|**&#8593;**| *Clavier*   | Déplacer - Carte vers le haut  |
|**&#8595;**| *Clavier*   | Déplacer - Carte vers le bas  |
|**&#8592;**| *Clavier*   | Déplacer - Carte vers la gauche  |
|**&#8594;**| *Clavier*   | Déplacer - Carte vers la droite  |
|**&#43;** **=**| *Clavier*  | Carte - [Zoom avant](#my-location-and-zoom) |
|**&#8722;**| *Clavier*  | Carte - [Zoom arrière](#my-location-and-zoom) |
|**Appui sur Retour**| *Clavier*   | Naviguer – Écran précédent  |
|**&#8595;**| *Wunderlinq*  | Carte - [Zoom arrière](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Carte - [Zoom avant](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Ouvrir la grille de données WunderLINQ |
| **M** <br/> (*Android hérité*) | *Clavier*  | Afficher / Masquer - [Menu latéral](../start-with/main-menu.md#main-menu-side-menu) |
| **Appui sur le joystick** <br/> (*Android hérité*) | *Clavier*  | Déplacer - [Vers Ma position](#my-location-and-zoom) |
| **Bouton Média** <br/> (*Android uniquement*)| *Clavier*  | Afficher / Masquer - [Notes AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*Android uniquement*)| *Parrot*  | Carte - [Zoom arrière](#my-location-and-zoom) |
| **&#8594;** <br/> (*Android uniquement*) | *Parrot*  | Carte - [Zoom avant](#my-location-and-zoom) |


### Type de périphérique d'entrée personnalisé {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Périphériques externes](@site/static/img/map/external_mypilot_android.png)  ![Périphériques externes](@site/static/img/map/external_mypilot2_android.png)

Si vous souhaitez assigner des touches pour un périphérique d'entrée externe (tel qu'un clavier, un joystick ou un contrôleur), vous devez créer un type de périphérique : allez dans le paramètre [Périphérique d'entrée externe](#external-input-devices), sélectionnez **Type** dans la liste, appuyez sur le&nbsp; "**＋**" &nbsp; et entrez un nom. Chaque type a un menu avec les options suivantes : ***Renommer, Dupliquer*** et ***Supprimer***.

### Ajouter une action et des assignations de touches {#add-action--key-asssigments}

![Périphériques externes](@site/static/img/map/external_custom_4_andr.png)  ![Périphériques externes](@site/static/img/map/external_custom_3_andr.png)

Après avoir créé un type d'entrée personnalisé, vous pouvez assigner les actions requises aux touches. Une large gamme de [types d'actions](../widgets/quick-action.md#action-types) du widget Action rapide est disponible.

- Sélectionnez un type de périphérique, puis appuyez sur l'élément **Assignations de touches**.
- Appuyez sur le bouton ***Ajouter*** (&nbsp;"**＋**"&nbsp;) dans le coin inférieur droit de l'écran.
- Sélectionnez l'action requise, puis appuyez sur le champ ***Ajouter une touche*** et appuyez sur le bouton de votre appareil pour l'assigner à l'action.  

:::note

- Si le bouton que vous assignez est déjà utilisé pour une autre action, vous recevrez une notification avec l'option de réassigner le bouton ou d'annuler l'assignation.
- Plus tard, vous pourrez changer les actions et les assignations de touches ou en ajouter d'autres pour des actions déjà créées, il suffit de sélectionner un élément dans la liste des assignations de touches.

:::

### Supprimer l'assignation de touche {#delete-key-assignment}

![Périphériques externes](@site/static/img/map/external_custom_1_andr.png)

Vous pouvez supprimer plusieurs actions inutiles en utilisant le **bouton Éditer** (*en forme de crayon*) dans le coin supérieur droit de l'écran en une seule fois :

- ***Supprimer une action*** par action, avec le bouton&nbsp; "**−**" &nbsp;dans le champ de l'élément.
- ***Supprimer toutes les assignations de touches*** pour le type sélectionné en appuyant sur le bouton dans le coin supérieur droit de l'écran à côté du nom *Éditer*.


## Articles connexes {#related-articles}

- [Menu contextuel de la carte](./map-context-menu.md)
- [Configurer la carte](./configure-map-menu.md)
- [Cartes vectorielles (Styles de carte)](./vector-maps.md)
- [Cartes raster (En ligne / Hors ligne)](./raster-maps.md)
- [Points sur la carte](./point-layers-on-map.md)
- [Traces et Itinéraires](./tracks/index.md)
- [Menu contextuel des traces](./tracks/track-context-menu.md)
- [Transports en commun](./public-transport.md)