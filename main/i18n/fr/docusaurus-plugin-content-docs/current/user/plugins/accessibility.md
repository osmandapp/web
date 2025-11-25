---
source-hash: fb6d615d3272ebc54d4244753eb6fc369c05162044837973b9f3031ced24140a
sidebar_position: 1
title:  Accessibilité
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

:::caution Remarque
Le plugin Accessibilité est disponible uniquement sur la **version Android** d'OsmAnd. La [version iOS](#how-to-use-ios) s'appuie sur les paramètres d'accessibilité par défaut du système.
:::

## Aperçu {#overview}

L'accessibilité améliore l'ergonomie pour les utilisateurs aveugles et malvoyants en s'intégrant aux outils d'[Accessibilité Android](https://www.android.com/accessibility/). Le plugin propose la **synthèse vocale, le contrôle gestuel, les annonces automatiques** et le **retour haptique** pour rendre la navigation plus accessible. Sur iOS, OsmAnd utilise les fonctionnalités d'accessibilité intégrées d'Apple telles que VoiceOver.


### Comment utiliser (Android) {#how-to-use-android}

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Activer le plugin Accessibilité :***  

1. **Activer le plugin** : *Menu → Plugins → Accessibilité → Activer*.

2. **Activer le mode accessibilité** :  
   - Accédez à *Paramètres système → Accessibilité* sur votre appareil Android.
   - Activez TalkBack ou un autre lecteur d'écran.

3. **Ajuster les paramètres du plugin** :  
   - Ouvrez les [paramètres d'accessibilité](#plugin-settings) dans l'application OsmAnd.
   - Configurez des fonctionnalités telles que le débit de la parole, l'annonce automatique et le retour haptique.

<br/>

***Caractéristiques et fonctionnalités :***

- **Contrôles gestuels** :
   - Prend en charge tous les [gestes OsmAnd](../map/interact-with-map.md#gestures) standards.
   - Ajuste les gestes pour s'aligner sur les instructions **TalkBack** d'Android.

- **Intégration de TalkBack** :
   - Le lecteur d'écran TalkBack offre un guidage audio pour la navigation et les interactions avec les menus.
   - En savoir plus sur les gestes TalkBack [ici](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Opérations en arrière-plan**. Le retour audio et haptique continue même lorsque l'écran est éteint ou verrouillé.

- **Actions du bouton boussole** :

| Geste | Action | Équivalent TalkBack |
|-----|-----|-----|
| **Appui simple** | Fait pivoter la carte vers le **Nord** | **Double appui** |
| **Appui long** | Ouvre la liste des [orientations de la carte](../map/interact-with-map.md#map-orientation-modes) | **Double appui et maintien** |
| **Double appui** | *Non disponible en mode Accessibilité* | *Non pris en charge* |


### Comment utiliser (iOS) {#how-to-use-ios}

La version iOS d'OsmAnd utilise les **outils d'accessibilité intégrés** du système.

1. **Activer VoiceOver** :
   - Allez dans *Réglages → Accessibilité → VoiceOver*.
   - Configurez les **gestes VoiceOver** à utiliser avec OsmAnd.

2. **Fonctionnalités prises en charge** :
   - **Prise en charge du lecteur d'écran** pour les interactions avec la carte.
   - **Gestes personnalisables** via les réglages iOS.
   - Tous les [gestes OsmAnd](../map/interact-with-map.md#gestures) standards sont disponibles.

3. **En savoir plus** :
   - Lisez à propos des fonctionnalités d'accessibilité visuelle d'iOS [ici](https://www.apple.com/accessibility/vision/).
   - Explorez les gestes VoiceOver pour iPhone [ici](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Paramètres de configuration requis {#required-setup-parameters}

Pour activer les fonctionnalités d'accessibilité de l'appareil dans OsmAnd, vous devez effectuer les réglages suivants :

1. **Activer le** [plugin Accessibilité](../plugins/index.md#enable--disable) : *Menu → Plugins → Accessibilité → Activer*.  
2. **Activer le mode accessibilité** sur votre appareil.
3. Configurer les [paramètres](#plugin-settings) du plugin Accessibilité.


## Paramètres du plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/accessibility/access_new.png)  

Le plugin Accessibilité offre divers paramètres pour personnaliser la navigation et l'interaction pour les utilisateurs en situation de handicap. Ces paramètres sont appliqués par [profil](../personal/profiles.md) dans OsmAnd.

| Paramètre                   | Description |  
|---------------------------|-------------|  
| **Mode Accessibilité**    | Active les *fonctionnalités intégrées d'OsmAnd* ou utilise les **paramètres système**. |  
| **Débit de la parole**           | Contrôle la *vitesse de la synthèse vocale*, allant de **50 % à 200 %**. |  
| **Grossissement au zoom par pincement**    | Agrandit temporairement la carte pendant que vous effectuez un zoom par pincement et maintenez vos doigts sur l'écran, en agrandissant le texte et les icônes sans changer le niveau de zoom réel. |  
| [Annonce automatique intelligente](#smart-autoannounce)    | Fournit un *guidage vocal* en cas d'écart par rapport à l'itinéraire. |  
| **Période d'annonce automatique**   | Définit le temps minimum entre les annonces, de **5 secondes à 5 minutes**. |  
| [Style de direction](#direction-style)       | Choisissez entre *Latéral (8 directions)* ou *Horaire (12 directions)*. |  
| **Directions audio**      | Joue des *guidages audio* indiquant la direction. |  
| **Directions haptiques**     | Fournit un *retour par vibration* pour les virages et les écarts.|  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Conseils pour une accessibilité optimisée :***

- **Lecteur d'écran** - Utilisez TalkBack (*Android*) ou VoiceOver (*iOS*) pour une interaction améliorée avec la carte.
- **Navigation audio** - Activez l'annonce automatique pour recevoir des instructions vocales lorsque l'écran est éteint.
- **Retour haptique** - Idéal pour les environnements à faible visibilité ou lorsque les guidages audio ne sont pas pratiques.


### Annonce automatique intelligente {#smart-autoannounce}

La fonction **Annonce automatique intelligente** fournit des *notifications audio* lorsque vous vous écartez de l'itinéraire prévu. Elle est conçue pour aider les utilisateurs malvoyants qui dépendent du *guidage vocal*.  

- Si **TalkBack n'est pas activé**, l'*Annonce automatique intelligente* n'affichera que des *notifications textuelles* à l'écran.  

- Les **notifications vocales** ne sont activées que lorsque *TalkBack* est activé dans les **paramètres système de l'appareil**.  

- Réglez la **Période d'annonce automatique** (par exemple, *10 secondes*) pour contrôler la fréquence des annonces.

- Un appui long sur **Ma position** ouvre un menu avec les options ***Afficher votre position*** et ***Afficher les détails***. Sélectionner Afficher les détails affiche des informations supplémentaires sur l'itinéraire et fournit le bouton ***Démarrer/Arrêter l'annonce automatique***.


### Style de direction {#direction-style}

Le paramètre **Style de direction** définit la façon dont les instructions de navigation sont présentées :

- Latéral (8 directions) – utilise les directions classiques gauche/droite ou les directions cardinales/intercardinales.
- Horaire (12 directions) – utilise un guidage basé sur le cadran d'une horloge, comme « à 3 heures » ou « à 10 heures ».

Cette fonctionnalité est conçue pour améliorer la conscience spatiale, en particulier pour les utilisateurs malvoyants qui préfèrent l'orientation basée sur l'horloge.

Pour activer :
*Menu* → *Plugins* → *Accessibilité* → *Paramètres* → *Style de direction* → choisissez **Latéral** ou **Horaire**.

:::info note
Le Style de direction est une option indépendante. Il n'est pas lié à l'Annonce automatique intelligente et fonctionne indépendamment de son activation.
:::

## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres généraux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)