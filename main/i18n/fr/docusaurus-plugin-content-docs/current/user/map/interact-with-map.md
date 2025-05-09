---
source-hash: 334d213f4d679a5cf35fd6764834e4d7aac116a97756e62b991c6212416a93e3 
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


## Vue d'ensemble

Cet article explique comment personnaliser et interagir avec la carte à l'aide de divers boutons et gestes. Il couvre comment faire pivoter, zoomer, ajuster l'angle de vue et modifier l'angle de vue de la carte, la faire pivoter manuellement ou automatiquement à l'aide de la boussole, ou en fonction du relèvement.


## Gestes

Les gestes sont essentiels pour naviguer sur la carte facilement et intuitivement.

| Action sur la carte | Geste |
|:------------|:-------------|
| **Déplacer** | Appuyez et maintenez la carte avec **un** doigt, puis faites glisser pour vous déplacer. |
| **Glisser** | Balayez la carte avec **un** doigt. |
| **Zoom avant** | Appuyez deux fois sur la carte avec **un** doigt. <br/> Appuyez deux fois avec **un** doigt et balayez vers le bas. <br/> Pincez avec **deux** doigts pour zoomer. |
| **Zoom arrière** | Appuyez deux fois avec **deux** doigts. <br/> Appuyez deux fois avec **un** doigt et balayez vers le haut. <br/> Pincez avec **deux** doigts pour dézoomer. |
| **Rotation** | Appuyez sur la carte avec **deux** doigts, puis faites pivoter vos doigts en cercle. |
| **Inclinaison (3D)** | Appuyez avec **deux** doigts et déplacez-les vers le haut ou vers le bas. <br/> Disponible uniquement avec le [Moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine) version 2 (OpenGL). |

Les animations de glissement peuvent être désactivées dans les paramètres avec une [option spéciale](#no-animations).


## Ma position et zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Ma position**.  
Le bouton *Ma position* est une icône circulaire qui indique si le centre de la carte est synchronisé avec la géolocalisation actuelle de votre appareil. Souvent appelé bouton "Où suis-je ?", il vous aide à trouver rapidement votre position sur la carte. Pendant la navigation, la carte reste généralement synchronisée avec la position de l'appareil, de sorte que le bouton reste masqué. Cependant, il devient visible si la carte et votre position se désynchronisent en raison d'une interaction de l'utilisateur. Appuyer sur le bouton recentrera la carte sur votre position actuelle, et un double appui basculera la vue en mode 3D.

- Le bouton *Ma position* a les états suivants :
  - *Icône bleue pleine*. La position est trouvée mais pas synchronisée avec la carte.
  - *Icône blanche*. La position est trouvée et synchronisée avec la carte.
  - *Icône grise*. La position n'a pas encore été trouvée.
  - *Icône flèche*. Le mode 3D est activé.

- Un **appui long** (*Android*) sur le bouton *Ma position* ouvre le [menu contextuel de la carte](../map/map-context-menu.md), vous permettant de partager votre position.

<br/>

**Boutons de zoom**.  
Les *boutons de zoom* sont toujours visibles à côté de *Ma position* et vous permettent de contrôler le niveau de zoom de la carte.

- Modifier le niveau de zoom n'affecte pas la synchronisation de la carte avec votre position.
- Un **appui long** sur les *boutons de zoom* ouvre la boîte de dialogue *Loupe de carte*, vous permettant d'ajuster les niveaux de détail de la carte.
- Gardez à l'esprit que pendant la navigation, le zoom peut être contrôlé automatiquement par le paramètre **Zoom automatique** :
   - *<Translate android="true" ids="android_button_seq"/> :*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/> :*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Apparence de Ma position

Vous pouvez personnaliser les icônes du bouton **Ma position** à l'aide des paramètres d'apparence du profil. Pour en savoir plus, consultez [ici](../personal/profiles.md#profile-appearance).


## Loupe de carte

La *Loupe de carte* est un outil qui améliore la visibilité de la carte, similaire à une loupe utilisée avec des cartes papier. Elle vous permet de zoomer sur la carte pour afficher le texte et les détails plus clairement ou pour ajuster le niveau de détail tout en conservant la même échelle. Pour plus d'informations, consultez l'article [Cartes vectorielles](../map/vector-maps.md#map-magnifier).


## Modes d'orientation de la carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

Les *modes d'orientation de la carte* vous permettent de choisir comment la carte est affichée sur l'écran de l'appareil. OsmAnd propose des modes tels que **Rotation manuelle**, **Direction du mouvement**, **Direction de la boussole** et **Le Nord est en haut**. L'activation de chaque mode modifie la façon dont la carte est orientée en fonction de l'option sélectionnée. Pour tous les détails, consultez l'article [Boutons de la carte](../widgets/map-buttons.md#compass).


## Boussole

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Le bouton boussole indique comment la [carte est orientée](#map-orientation-modes). La *flèche rouge* sur les icônes, ou la direction de la flèche en mode *Direction du mouvement*, indique le Nord. [L'icône sur le bouton boussole](../widgets/map-buttons.md#compass) indique le mode d'orientation de la carte actuel. Le widget du bouton boussole offre trois [options d'interaction](../widgets/map-buttons.md#compass-tapping-behavior) : un *simple appui* fait pivoter la carte vers le Nord, un *double appui* alterne entre tous les modes d'orientation de la carte, et un *appui long* ouvre la liste des modes.


## Faire pivoter la carte par relèvement

En mode **faire pivoter la carte par relèvement** ([Direction du mouvement](../widgets/map-buttons.md#compass)), la carte s'aligne automatiquement avec votre direction de déplacement, de sorte que la zone devant vous est affichée en haut de l'écran. Ce mode améliore la navigation en décalant légèrement le centre de la carte vers le bas, affichant ainsi une plus grande partie de l'itinéraire à venir. Si vous êtes immobile, la carte reste fixe.  

Vous pouvez activer cette fonction via *Menu → Paramètres → Profils → Paramètres généraux → Apparence → Orientation de la carte* ou en appuyant deux fois sur le [bouton Boussole](../widgets/map-buttons.md#compass-tapping-behavior). Pour plus de détails sur le relèvement, consultez [ici](../widgets/nav-widgets.md#bearing-widget).


## Inclinaison et horizon de la carte

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Avec le nouveau [moteur de rendu](../personal/global-settings.md#map-rendering-engine) de carte, vous pouvez modifier l'[inclinaison de la caméra](../plugins/development.md#camera-tilt) de 90 (pas d'inclinaison) à 10 degrés. À une inclinaison de carte inférieure à environ 20-22 degrés (ce paramètre dépend du niveau de zoom), la ligne d'horizon imaginaire devient visible. Contrairement à la vraie, l'horizon du programme est toujours droit.  

Sous l'horizon, vous pouvez voir ce qu'on appelle la *brume* ou le *brouillard*. Cette zone de la carte est remplie de couleur grise, seuls quelques détails de la carte peuvent être observés.  
L'utilisation du brouillard est nécessaire car l'affichage d'objets éloignés sur la carte nécessite des ressources informatiques importantes et n'est pas toujours justifié en raison des [distorsions](../plugins/development.md#comparison-with-a-satellite-imagery) de la carte à de petits angles de vue. La distance visible sur la carte OsmAnd est donc actuellement limitée à 35 tuiles.  

:::info
L'inclinaison de la carte peut être modifiée par un appui long sur l'écran avec deux doigts et en les déplaçant vers le haut/bas. Vous pouvez également modifier l'inclinaison en appuyant sur l'icône [Ma position](#my-location-and-zoom) dans le coin inférieur droit de l'écran (seules les positions à 45 et 90 degrés sont disponibles).  
Vous ne pouvez pas modifier l'inclinaison de la caméra lorsque l'ancien [moteur de rendu de carte](../personal/global-settings.md#map-rendering-engine) (version 1) est activé.
:::


## Verrouillage de l'écran tactile

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Utilisez la fonction **Verrouillage de l'écran tactile** pour éviter les appuis accidentels pendant la navigation. Cela est particulièrement utile pour des activités comme le cyclisme ou la randonnée, où des touches involontaires pourraient perturber votre itinéraire.

**Déverrouillage**.  
Appuyez sur le bouton à l'écran, ou, si le verrouillage est activé, via un bouton externe (par exemple, Volume bas), appuyez sur le bouton externe et appuyez sur le bouton à l'écran.  

**Configuration**.

- Naviguez vers *Menu → Configurer l'écran → Boutons personnalisés*.
- Sélectionnez *+ → Ajouter une action → Interface → Verrouillage de l'écran tactile*.

Des messages clairs à l'écran vous guideront lors du verrouillage ou du déverrouillage de l'écran.


## Paramètres

### Paramètres supplémentaires de la boussole  

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Lisse la rotation de la carte avec une animation de rotation plus lente, bien que cela introduise un léger délai, pas plus de 1 seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Lisse la rotation de la carte avec une animation de rotation plus lente, bien que cela introduise un léger délai, pas plus de 1 seconde.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Pas d'animations

<InfoAndroidOnly/>  

Vous pouvez désactiver toutes les animations de carte lors des interactions avec la carte, y compris les gestes et les boutons.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animer ma position

**Android** : *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS** : *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Crée un effet de panoramique de carte fluide par rapport à l'icône *[Ma position](../personal/profiles/#profile-appearance)* lorsque vous êtes en mouvement. L'effet introduit un léger délai par rapport à la réalité d'environ 1 seconde. L'activation de cette option a été signalée comme créant des problèmes de décalage prononcés dans certaines circonstances, désactivez-la si de tels problèmes surviennent.


## Périphériques d'entrée externes

Les boutons des périphériques d'entrée externes offrent un moyen pratique et efficace d'interagir avec la carte et l'interface de l'application OsmAnd. Ils sont situés sur des périphériques externes, tels que des **claviers Bluetooth ou d'autres types**, des **boutons spécialisés sur les appareils de navigation de véhicules**, ou des contrôleurs [WunderLINQ](https://blackboxembedded.com/) et [Parrot](https://www.parrot.com/en).  

L'une des fonctions principales des boutons des périphériques d'entrée externes est de zoomer et dézoomer sur la carte. Ils vous permettent également de naviguer sur la carte et de modifier son orientation sans avoir à appuyer et à faire des gestes sur l'écran. Les boutons des périphériques d'entrée externes prennent en charge de nombreuses autres fonctions, telles que l'ouverture du *Menu principal*.

:::note
Le clavier reste fonctionnel même lorsque l'option *Périphériques d'entrée externes* est désactivée et que *Aucun* est sélectionné.
:::

### Périphérique d'entrée préconfiguré

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Aller à : *Android* *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Aller à : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Pour accéder aux paramètres d'un périphérique d'entrée externe, vous devez activer cette fonction.

- Allez dans le *Menu principal → Paramètres →* sélectionnez le *Profil → Paramètres généraux → Autre → Périphériques d'entrée externes*, et passez à *Activé*.

- Sélectionnez un appareil parmi ceux pris en charge par OsmAnd en appuyant sur l'élément *Type* dans la liste :  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*Android uniquement*), ou créez [**votre propre type**](#custom-input-device-type) (*Android uniquement*).

- Il existe une **affectation différente de l'ensemble action-clé** définie pour chaque type de périphérique d'entrée externe. Appuyez sur les *<Translate android="true" ids="key_assignments"/>* pour voir une liste d'actions et de clés. Le tableau des clés est présenté ci-dessous.

- Vous pouvez en savoir plus sur les actions des périphériques d'entrée externes sur GitHub dans le package [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Clé | Appareil | Action |
|:---------|:---------------|:---------------|
|**C**| *Clavier*   | Déplacer - [Vers ma position](#my-location-and-zoom) |
|**D**| *Clavier*   | Changer - [Orientation de la carte](#map-orientation-modes) |
|**N**| *Clavier*   | Afficher / Masquer - Vue de navigation |
|**S**| *Clavier*   | Afficher / Masquer - [Vue de recherche](../search/index.md) |
|**P**| *Clavier*   | Changer - Profil d'application vers le suivant |
|**O**| *Clavier*   | Changer - Profil d'application vers le précédent |
|**&#8593;**| *Clavier*   | Déplacer - Carte vers le haut  |
|**&#8595;**| *Clavier*   | Déplacer - Carte vers le bas  |
|**&#8592;**| *Clavier*   | Déplacer - Carte vers la gauche  |
|**&#8594;**| *Clavier*   | Déplacer - Carte vers la droite  |
|**&#43;** **=**| *Clavier*  | Carte - [Zoom avant](#my-location-and-zoom) |
|**&#8722;**| *Clavier*  | Carte - [Zoom arrière](#my-location-and-zoom) |
|**Appuyer sur retour**| *Clavier*   | Naviguer – Écran précédent  |
|**&#8595;**| *Wunderlinq*  | Carte - [Zoom arrière](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Carte - [Zoom avant](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Ouvrir la grille de données WunderLINQ |
| **M** <br/> (*Android hérité*) | *Clavier*  | Afficher / Masquer - [Menu latéral](../start-with/main-menu.md#main-menu-drawer) |
| **Appui sur joystick** <br/> (*Android hérité*) | *Clavier*  | Déplacer - [Vers ma position](#my-location-and-zoom) |
| **Bouton média** <br/> (*Android uniquement*)| *Clavier*  | Afficher / Masquer - [Notes AV](../plugins/audio-video-notes.md#add-note-on-the-map) |
| **&#8592;** <br/> (*Android uniquement*)| *Parrot*  | Carte - [Zoom arrière](#my-location-and-zoom) |
| **&#8594;** <br/> (*Android uniquement*) | *Parrot*  | Carte - [Zoom avant](#my-location-and-zoom) |


### Type de périphérique d'entrée personnalisé

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

Si vous souhaitez attribuer des touches à un périphérique d'entrée externe (tel qu'un clavier, un joystick ou un contrôleur), vous devez créer un type de périphérique : accédez au paramètre [Périphérique d'entrée externe](#external-input-devices), sélectionnez **Type** dans la liste, appuyez sur le &nbsp;"**＋**"&nbsp; et entrez un nom. Chaque type dispose d'un menu avec les options suivantes : ***Renommer, Dupliquer*** et ***Supprimer***.

### Ajouter une action et des attributions de touches

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

Après avoir créé un type d'entrée personnalisé, vous pouvez attribuer les actions requises aux touches. Une large gamme de [types d'actions](../widgets/quick-action.md#action-types) du widget Action rapide est disponible.

- Sélectionnez un type de périphérique, puis appuyez sur l'élément **Attributions de touches**.
- Appuyez sur le bouton ***Ajouter*** (&nbsp;"**＋**"&nbsp;) dans le coin inférieur droit de l'écran.
- Sélectionnez l'action requise, puis appuyez sur le champ ***Ajouter une touche*** et appuyez sur le bouton de votre appareil pour l'attribuer à l'action.  

:::note

- Si le bouton que vous attribuez est déjà utilisé pour une autre action, vous recevrez une notification avec l'option de réattribuer le bouton ou d'annuler l'attribution.
- Plus tard, vous pourrez modifier les actions et les attributions de touches ou en ajouter d'autres pour les actions déjà créées, il suffit de sélectionner un élément dans la liste des attributions de touches.

:::

### Supprimer une attribution de touche

![External devices](@site/static/img/map/external_custom_1_andr.png)

Vous pouvez supprimer plusieurs actions inutiles à l'aide du **bouton Modifier** (*en forme de crayon*) dans le coin supérieur droit de l'écran à côté de *Modifier le nom* :

- ***Supprimer une action*** par action, avec le bouton &nbsp;"**−**"&nbsp; dans le champ de l'élément.
- ***Supprimer toutes les attributions de touches*** pour le type sélectionné en appuyant sur le bouton dans le coin supérieur droit de l'écran à côté de *Modifier le nom*.


## Articles connexes

- [Menu contextuel de la carte](./map-context-menu.md)
- [Configurer la carte](./configure-map-menu.md)
- [Cartes vectorielles (Styles de carte)](./vector-maps.md)
- [Cartes raster (En ligne / Hors ligne)](./raster-maps.md)
- [Points sur la carte](./point-layers-on-map.md)
- [Traces et itinéraires](./tracks/index.md)
- [Menu contextuel des traces](./tracks/track-context-menu.md)
- [Transports en commun](./public-transport.md)


> *Cet article a été mis à jour pour la dernière fois en décembre 2024*

