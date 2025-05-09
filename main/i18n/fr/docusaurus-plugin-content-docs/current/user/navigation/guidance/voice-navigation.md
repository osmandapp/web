---
source-hash: a286ca70a2bc99586c266a72c20921e2e0ca9bc8dd54748021c8ad6ca5897d8d 
sidebar_position: 6
title:  Invites vocales / Notifications
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

## Aperçu

La fonction de navigation vocale d'OsmAnd fournit des instructions et des alertes vocales en temps réel qui vous aident à rester informé et en sécurité pendant vos déplacements. Vous pouvez adapter les instructions à vos préférences et à vos besoins. Pour ce faire, sélectionnez un profil vocal approprié, soit un [moteur de synthèse vocale (TTS)](#tts-text-to-speech) qui peut annoncer dynamiquement les noms de rues, les distances et les limites de vitesse, soit une [voix préenregistrée](#recorded-voice-prompts) offrant des instructions concises.

En plus des indications virage par virage, la navigation vocale d'OsmAnd peut vous avertir des points d'intérêt à venir, des changements de conditions de circulation et lorsque vous dépassez une limite de vitesse prédéfinie. Pour en savoir plus sur la personnalisation de ces alertes, consultez [Paramètres de temps d'annonce](#announcement-time) et [Avertissements de limite de vitesse](#speed-limit).

Avec la bonne combinaison d'options vocales, de paramètres d'alerte et de réglages sonores de l'appareil, vous recevrez des informations de navigation claires et opportunes tout au long de votre itinéraire.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Les notifications textuelles reflètent entièrement l'heure de déclenchement et les messages des invites vocales.

:::

## Configuration des invites vocales

OsmAnd offre diverses options pour contrôler les invites vocales afin que vous puissiez suivre votre itinéraire en toute commodité. Pour configurer ces paramètres, commencez dans les sections appropriées de l'application.

- Activez les invites vocales depuis la section [Navigation](../guidance/navigation-settings.md) en appuyant sur **Paramètres**. Vous pouvez également activer et configurer les invites vocales via *Configurer le profil*, et *Paramètres de navigation*.
- Activez ou désactivez les invites vocales à l'aide de *Menu → Navigation →* appuyez sur le *bouton Son*,
    ou *Menu → Navigation →* bouton Paramètres *→ Son →* activer/désactiver.

Pour plus d'informations sur la manière et le moment où les invites vocales sont déclenchées, consultez la documentation [Déclenchement des invites vocales de navigation](../../../technical/algorithms/voice-prompt-triggering.md).

### Paramètres vocaux

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Paramètres de navigation vocale Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Paramètres de navigation vocale iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Langue](#voice-prompt-language)**. Sélectionnez votre langue et votre type préférés.

**Annonce**. Vous permet de configurer les types d'invites suivants :

- *Noms de rues (TTS), numéros de sortie, avertissements de circulation, passages piétons* et *tunnels*.
- *[Radars](#speed-cameras)*.
- Configurez également le **[widget d'alerte](../../widgets/nav-widgets.md#alert-widget)** à utiliser avec les annonces.

**Points utilisateur** :

- Activez les invites vocales pour les [points de passage](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), les [favoris](../../personal/favorites.md) ou les [POI](../../map/point-layers-on-map.md#points-of-interest-poi) prédéfinis et ajoutés. Pendant la conduite, les points sélectionnés seront annoncés lorsque vous les approchez ou les dépassez.

| Type d'invite | Délai [s] :<br/>Distance correspondante @ Vitesse par défaut [m] | Limite |
| :- | :- | :- |
| Approche | **60 s :**<br/>Conduite : 750 m<br/>Cyclisme : 167 m<br/>Marche : 67 m | Pas plus de 1 point à la fois |
| Passage | **15 s :**<br/>Conduite : 188 m<br/>Cyclisme : 42 m<br/>Marche : 17 m | Pas plus de 3 points à la fois |

[**Limite de vitesse**](#speed-limit) :

- *Annoncer en cas de dépassement*.
- *Tolérance de limite de vitesse*.

**Autres** :

- *Annoncer la perte et la récupération du signal GPS*. OsmAnd annonce si le signal GPS sur l'appareil est perdu.
- *Annoncer le recalcul de l'itinéraire*. OsmAnd signale le recalcul de l'itinéraire en cas de [déviation ou de mouvement en sens inverse](./navigation-settings.md#recalculate-route).
- *Annoncer la déviation de l'itinéraire*. Vous recevez des informations sur les déviations de l'itinéraire selon les [paramètres définis](./navigation-settings.md#recalculate-route).

**Options** :

- *Répéter les instructions de navigation*. Vous permet de répéter les instructions de navigation à intervalles réguliers de 1 min à 30 min. Ou manuellement - si vous manquez une invite vocale, vous pouvez l'écouter à nouveau en appuyant simplement sur [la flèche de virage actuelle](../../widgets/nav-widgets.md#next-turns) sur l'écran de l'application.
- *[Temps d'annonce](#announcement-time)*.

**Sortie** (*Android uniquement*) :

- *[Sortie des instructions vocales](#voice-guidance-output)*.
- *Mettre la musique en pause*. Les invites vocales arrêtent la lecture de la musique pendant un certain temps.

### Radars

![Temps d'annonce de navigation vocale Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

Les [alertes de radars](../../personal/global-settings.md#uninstall-speed-camera) vous permettent d'activer ou de désactiver les POI avec des radars. Vous devrez redémarrer l'application OsmAnd pour appliquer les modifications.

Dans certains pays ou régions, l'utilisation d'applications d'avertissement de radars est illégale. Vous devez faire un choix en fonction des lois de votre pays. Sélectionnez **Garder actif**, et vous recevrez des alertes et des notifications de radars. Sélectionnez **Désinstaller** et toutes les données relatives aux radars, telles que les avertissements, les notifications et les POI, seront supprimées jusqu'à ce que vous réinstalliez complètement OsmAnd.

### Limite de vitesse

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation vocale](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation vocale](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

L'option **Limite de vitesse** permet à OsmAnd de vous informer lorsque votre vitesse actuelle dépasse un seuil spécifié. Les données sur les limites de vitesse légales maximales proviennent d'OpenStreetMap.

**Annoncer en cas de dépassement**
*Tolérance de limite de vitesse* vous permet de sélectionner une déviation admissible (par exemple, -10 km/h à +20 km/h) par rapport à la [limite de vitesse légale maximale](https://wiki.openstreetmap.org/wiki/Key:maxspeed) sur la route actuelle. Lorsque votre vitesse dépasse cette tolérance, OsmAnd émet une invite vocale.

*Règles d'activation des invites vocales* lorsque la limite de vitesse est dépassée :

- *Avertissement initial*. Détectant que vous dépassez la limite de vitesse, OsmAnd attend 5 secondes avant d'émettre le premier avertissement vocal.
- *Délai de répétition de l'annonce*. Si vous continuez à rouler trop vite, l'avertissement suivant est retardé de 120 secondes pour éviter des notifications trop fréquentes.
- *Réinitialisation du minuteur*. Le minuteur se réinitialise si vous restez dans la limite légale pendant 30 secondes. Tout excès de vitesse ultérieur attendra à nouveau 5 secondes avant que l'avertissement suivant ne retentisse.

Ce paramètre de **tolérance de limite de vitesse** affecte la vitesse affichée dans la partie *avertissement* du [widget Compteur de vitesse](../../widgets/info-widgets.md#speedometer) dans l'application OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) et [CarPlay](../../navigation/car-play.md#speedometer).

### Temps d'annonce

![Temps d'annonce de navigation vocale Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

Le temps d'annonce des différentes invites vocales dépend du profil sélectionné, du type d'invite, de la vitesse de navigation actuelle et de la vitesse de navigation par défaut. Avec ce paramètre, vous pouvez modifier la distance avant que les invites vocales ne soient activées en appliquant un multiplicateur de distance : *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

Dans la liste déroulante *Intervalles de temps et de distance*, vous pouvez afficher des informations détaillées sur l'activation des invites pour les différents multiplicateurs de distance. Pour plus d'informations, consultez le [Déclenchement des invites vocales de navigation](../../../technical/algorithms/voice-prompt-triggering.md).

### Sortie des instructions vocales

<InfoAndroidOnly/>

![Navigation vocale Android](@site/static/img/navigation/voice/voice_promt-1.png)

Pour éviter de lire de l'audio dans le même flux de sortie en même temps, la mise au point audio est implémentée dans Android. OsmAnd utilisera le haut-parleur sélectionné dans la liste de ce paramètre pour la sortie audio. D'autres applications mettront la lecture en pause ou baisseront le volume pour vous permettre d'entendre plus facilement les invites vocales d'OsmAnd.

- Audio multimédia/navigation.
- Audio de notification.
- Audio d'appel téléphonique (pour interrompre les [autoradios](../auto-car.md) Bluetooth).

### Test des invites vocales

Vous pouvez tester les invites vocales avec :

- [Simuler la navigation](../../navigation//setup/route-navigation.md#simulated-navigation). Définissez un itinéraire et lancez la simulation : *Menu Navigation → Paramètres → Simuler la navigation*.
- [Tester les invites vocales](../../plugins/development.md#application-testing) (*Android uniquement*). Utilisez le *plugin Développement* pour tester les invites vocales :
    - Allez dans *Menu → Plugins → Activer le développement OsmAnd*.
    - Allez dans *Paramètres → Tester les invites vocales*.
    - Sélectionnez une langue et vérifiez si le système lit correctement les invites.

### Résolution des problèmes audio

Si vous n'entendez pas les **invites vocales** ou les [avertissements de limite de vitesse](#speed-limit) :

- Assurez-vous que le volume de votre appareil est activé et augmenté.
- Confirmez que le son est activé pendant la navigation : *Menu → Navigation → Bouton Son On/Off* ou *Menu → Navigation → Bouton Paramètres → Son* pour une configuration audio détaillée.
- Sélectionnez les [haut-parleurs](#voice-guidance-output) à utiliser.
- Vérifiez quelle [instruction vocale](#voice-prompt-language) est sélectionnée et assurez-vous que vous disposez d'une voix TTS ou enregistrée capable d'annoncer les avertissements de limite de vitesse.
- Vérifiez que l'audio n'est pas acheminé vers un périphérique de sortie involontaire (par exemple, un casque Bluetooth déconnecté).

Pour des étapes de dépannage supplémentaires, consultez le [guide de dépannage de la navigation](../../troubleshooting/navigation.md#voice-navigation).

## TTS (Text-to-Speech)

OsmAnd prend en charge les voix **Text-to-Speech (TTS)**, qui fournissent des instructions vocales dynamiques et détaillées, y compris les instructions de virage, les noms de rues et les annonces de POI. Les voix TTS sont incluses dans l'application mais nécessitent un [moteur de synthèse vocale](https://en.wikipedia.org/wiki/Speech_synthesis) installé sur l'appareil.

La plupart des appareils Android et iOS modernes incluent un moteur TTS par défaut, mais des moteurs et des langues supplémentaires peuvent être installés séparément.

Pour une liste des **moteurs TTS disponibles et des langues prises en charge** sur Android, consultez :
[Liste des langues avec les moteurs TTS disponibles sur Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configuration du TTS sur votre appareil :***

**Android :**

1. Ouvrez les paramètres.
2. Accédez à *Accessibilité → Sortie Text-to-Speech*.
3. Sélectionnez un **moteur TTS** (Google TTS ou un autre moteur installé).
4. Choisissez une **langue préférée** (certaines peuvent nécessiter des téléchargements supplémentaires).
5. Ajustez le débit vocal, la hauteur et la vitesse de lecture si nécessaire.
6. Appuyez sur **Écouter un exemple** pour tester la sortie vocale.

Pour plus de détails, consultez :
[Assistance Google – Paramètres Text-to-Speech Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS :**

1. Ouvrez les paramètres.
2. Allez dans *Accessibilité → Contenu parlé*.
3. Appuyez sur **Voix** pour sélectionner une voix préférée.
4. Ajustez le **Débit vocal**, les **Prononciations** et d'autres paramètres.
5. Testez la voix à l'aide de **Parler la sélection** ou **Parler l'écran**.

Pour plus de détails, consultez :
[Assistance Apple – Paramètres vocaux de l'iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Test des invites vocales :***

Pour vérifier si le TTS fonctionne correctement dans OsmAnd :

- Activez le **Plugin Développement** : *Menu → Paramètres → Plugins → Développement OsmAnd*.
- Ouvrez [Tester les invites vocales](../../plugins/development.md#application-testing) : *Menu → Paramètres → Plugins → Développement OsmAnd → Tester les invites vocales*.

Pour le dépannage, consultez :
[Dépannage de la navigation vocale](../../troubleshooting/navigation.md#voice-navigation).

### Langue des invites vocales

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Allez dans : *Android* *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Navigation vocale Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Navigation vocale Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Allez dans : *iOS* *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Paramètres de navigation vocale iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd propose deux types d'invites vocales :

- **<Translate android="true" ids="tts_title"/>**
    - Utilise le moteur TTS de l'appareil pour générer dynamiquement des invites vocales.
    - Lit les noms de rues, les instructions de virage, les noms de POI et d'autres détails.
    - Prend en charge plusieurs langues et paramètres de prononciation.
    - Peut être personnalisé avec les paramètres de débit vocal, de hauteur et de prononciation.

- **<Translate android="true" ids="shared_string_recorded"/>** (*Android uniquement*)
    - Utilise des invites vocales préenregistrées pour la navigation.
    - Semble plus naturel que le TTS mais présente des limitations.
    - Ne lit pas les noms de rues ni les noms de POI.
    - Fournit uniquement des instructions de virage de base.

> *Le TTS est recommandé pour des instructions de navigation détaillées.*

#### Paramètres des invites vocales au niveau du système

Le comportement des invites vocales, y compris la *vitesse de lecture, la hauteur et les pauses*, ne peut être ajusté que dans les paramètres système de l'appareil.

**Android :**

1. Ouvrez les *Paramètres* de l'appareil *→ Accessibilité → Sortie Text-to-speech*.
2. Choisissez votre moteur TTS et votre langue préférés.
3. Ajustez le débit vocal, la hauteur et la vitesse de lecture.

**iOS :**

1. Ouvrez les *Paramètres* de l'appareil *→ Accessibilité → Contenu parlé*.
2. Ajustez : langue, voix, débit vocal, prononciations.

> *Pour des voix supplémentaires, téléchargez des packs de langues à partir des paramètres système.*

#### Langues TTS disponibles

Il y a actuellement un total de 45 langues. Toutes les langues listées ci-dessous ne sont pas nécessairement prises en charge par tous les moteurs TTS. Voir [ici](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Arabe |
| **B** | Biélorusse, Bulgare |
| **C** | Catalan, Chinois, Chinois (Hong Kong), Chinois (Traditionnel), Croate, Tchèque |
| **D** | Danois, Néerlandais |
| **E** | Anglais, Anglais (Royaume-Uni), Estonien |
| **F** | Finnois, Français |
| **G** | Allemand, Allemand (décontracté), Grec, Guarani |
| **H** | Hindi, Hongrois, Hongrois (formel), Hébreu |
| **I** | Indonésien, Italien |
| **J** | Japonais |
| **K** | Coréen |
| **L** | Letton |
| **N** | Norvégien Bokmål |
| **P** | Persan, Polonais, Portugais, Portugais (Brésil) |
| **R** | Roumain, Russe |
| **S** | Sarde, Serbe (cyrillique), Slovaque, Slovène, Espagnol, Espagnol (Argentine), Swahili, Suédois |
| **T** | Turc |
| **U** | Ukrainien |
| **V** | Vietnamien |

## Invites vocales enregistrées

### Télécharger des packs vocaux

<InfoAndroidOnly />

L'utilisation de voix enregistrées dans OsmAnd ne devrait être qu'un recours. Elles sont assez limitées et ne peuvent pas prononcer les noms de rues, les noms de lieux, etc. Vous pouvez télécharger des invites vocales à partir de deux ensembles différents de la liste.

- Le premier type, ce sont les plus recommandés :

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Paramètres de navigation vocale Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Paramètres de navigation vocale Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Le deuxième type sont des invites vocales enregistrées, avec un ensemble de fonctionnalités incomplet :

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Paramètres de navigation vocale Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Modes Bip

<InfoAndroidOnly />

Vous pouvez configurer un profil OsmAnd pour émettre des bips au lieu de parler, de manière similaire à un compteur de vélo. Il existe trois modèles de base : *minimal*, *simple* et *complexe*. Les modèles simple et complexe ont des variantes *fortes*, qui seront considérablement plus faciles à entendre dans un environnement bruyant mais peuvent sembler désagréablement dures.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimal**. Adapté pour suivre un itinéraire connu à pied avec un minimum de distractions, ce modèle vous alertera lorsque vous passerez des destinations intermédiaires, des favoris et des POI, et lorsque vous vous serez dévié ou que vous serez revenu sur l'itinéraire. Il ne fournira aucun avertissement audio pour les virages.
- **Simple**. En plus des alertes pour les destinations, les favoris, les POI et autres, le modèle simple vous alerte par un bip plus long lorsque vous devez tourner.
- **Complexe**. Adapté au cyclisme sur route, le modèle complexe utilise des bips de différentes longueurs et hauteurs pour vous informer des virages à venir.
    - Un bip grave signifie un virage à gauche, tandis qu'un bip aigu signifie un virage à droite. Une série de bips de hauteur moyenne représente la sortie à prendre sur un rond-point. Dans tous ces cas, les bips courts signifient qu'il faut se préparer à faire quelque chose, tandis que les bips longs signifient qu'il faut faire quelque chose maintenant.

## Notifications textuelles

Une fois que vous avez démarré un itinéraire, vous pouvez afficher les informations dans le menu déroulant du système dans la liste des notifications. Les notifications silencieuses d'OsmAnd contiennent des informations telles que les instructions virage par virage, les flèches de direction de virage, l'heure d'arrivée et le temps restant, la vitesse actuelle et la distance jusqu'à la destination.

![Notification d'itinéraire de navigation Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Boutons actifs dans le menu déroulant du système pour votre navigation :

- *<Translate android="true" ids="stop_navigation_service"/>*. Permet d'arrêter votre navigation.
- *<Translate android="true" ids="shared_string_pause"/>*. Permet de mettre en pause votre navigation.
- *<Translate android="true" ids="shared_string_resume"/>*. Permet de reprendre votre navigation.

### Configurer les notifications

Vous pouvez modifier les paramètres de notification de l'application OsmAnd dans les paramètres système de votre appareil. Les notifications peuvent être affichées sur l'écran de verrouillage, l'écran d'accueil, dans le menu déroulant ou en haut de l'application.

Lisez comment le contrôle des notifications est implémenté sur Android dans cet [article](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Pour iOS - [ici](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).

## Contrôle de l'écran

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Menu de contrôle de l'écran Android](@site/static/img/navigation/route/screen_control_android.png)

Vous pouvez contrôler l'écran de votre appareil pour économiser de l'énergie. Ce mode dispose de deux paramètres généraux : *<Translate android="true" ids="screen_timeout"/>* et *<Translate android="true" ids="turn_screen_on"/>*.

### Délai d'expiration de l'écran

1. **<Translate android="true" ids="system_screen_timeout"/>**. L'écran s'éteint en fonction des paramètres système de votre appareil. Le bouton *Modifier les paramètres* permet d'accéder rapidement au menu système tel que *Affichage et luminosité* où vous pouvez régler le délai d'expiration de l'écran.

    ![Contrôle de l'écran du délai d'expiration du système Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Si *Garder l'écran allumé* est activé, l'écran de l'appareil n'applique pas de délai d'expiration après le réveil. S'il est désactivé, vous pouvez définir le temps après lequel l'écran de l'appareil s'éteindra si vous n'interagissez pas avec lui, de 5 à 60 secondes.

    ![Délai d'expiration après le réveil Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Délai d'expiration après le réveil Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Allumer l'écran

![allumer l'écran Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Sélectionnez les options de réveil de l'écran et assurez-vous qu'OsmAnd reste au premier plan lorsque l'appareil est verrouillé.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>

## Articles connexes

- [Paramètres d'itinéraire](../routing/osmand-routing.md#routing-types)
- [Préparation de l'itinéraire](../setup/route-navigation.md)
- [Navigation par trace](../setup/gpx-navigation.md)
- [Navigation par marqueurs](../setup/markers-navigation.md)
- [Détails de l'itinéraire](../setup/route-details.md)
- [Paramètres de navigation](./navigation-settings.md)
- [Écran de carte pendant la navigation](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problèmes courants et solutions

1. Problèmes audio. [(vérifier)](#solving-audio-issues)
2. Test des invites vocales. [(vérifier)](#testing-of-voice-prompts)
3. Pourquoi devrais-je utiliser une voix TTS au lieu d'une voix enregistrée ? [(vérifier)](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. Le TTS ne fonctionne pas correctement ? Suivez ces étapes pour le réparer. [(vérifier)](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Cet article a été mis à jour pour la dernière fois en mars 2025*

