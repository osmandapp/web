---
source-hash: e6db06382099198dca959a1d44e5b73b6a4d3aff9194b746d7c80413c2fa0267
sidebar_position: 1
title: Accessibilité
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

:::caution Note
Le plugin Accessibilité est disponible uniquement sur la **version Android** d'OsmAnd. La [version iOS](#how-to-use-ios) s'appuie sur les paramètres d'accessibilité par défaut du système.
:::

## Aperçu {#overview}

L'accessibilité améliore la convivialité pour les utilisateurs aveugles et malvoyants en s'intégrant aux outils [Android Accessibility](https://www.android.com/accessibility/). Le plugin offre la **synthèse vocale, le contrôle gestuel, les annonces automatiques** et le **retour haptique** pour rendre la navigation plus accessible. Sur iOS, OsmAnd utilise les fonctionnalités d'accessibilité intégrées d'Apple telles que VoiceOver.


### Comment utiliser (Android) {#how-to-use-android}

![Accessibilité](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Activer le plugin Accessibilité :***

1. **Activer le plugin** : *Menu → Plugins → Accessibilité → Activer*.

2. **Activer le mode accessibilité** :
   - Accédez à *Paramètres système → Accessibilité* sur votre appareil Android.
   - Activez TalkBack ou un autre lecteur d'écran.

3. **Ajuster les paramètres du plugin** :
   - Ouvrez les [paramètres d'accessibilité](#plugin-settings) dans l'application OsmAnd.
   - Configurez des fonctionnalités telles que le débit vocal, l'annonce automatique et le retour haptique.

<br/>

***Fonctionnalités et fonctions :***

- **Contrôles gestuels** :
   - Prend en charge tous les [gestes OsmAnd](../map/interact-with-map#gestures) standard.
   - Ajuste les gestes pour s'aligner sur les instructions **TalkBack** d'Android.

- **Intégration TalkBack** :
   - Le lecteur d'écran TalkBack offre des conseils audio pour la navigation et les interactions avec les menus.
   - En savoir plus sur les gestes TalkBack [ici](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Opérations en arrière-plan**. Le retour audio et haptique continue même lorsque l'écran est éteint ou verrouillé.

- **Actions du bouton boussole** :

| Geste | Action | Équivalent TalkBack |
|-----|-----|-----|
| **Appui simple** | Fait pivoter la carte vers le **Nord** | **Double appui** |
| **Appui long** | Ouvre la liste des [orientations de carte](../map/interact-with-map.md#map-orientation-modes) | **Double appui et maintien** |
| **Double appui** | *Non disponible en mode Accessibilité* | *Non pris en charge* |


### Comment utiliser (iOS) {#how-to-use-ios}

La version iOS d'OsmAnd utilise les **outils d'accessibilité intégrés** du système.

1. **Activer VoiceOver** :
   - Allez dans *Réglages → Accessibilité → VoiceOver*.
   - Configurez les **gestes VoiceOver** pour une utilisation avec OsmAnd.

2. **Fonctionnalités prises en charge** :
   - **Prise en charge du lecteur d'écran** pour les interactions avec la carte.
   - **Gestes personnalisables** via les paramètres iOS.
   - Tous les [gestes OsmAnd](../map/interact-with-map#gestures) standard sont disponibles.

3. **En savoir plus** :
   - Lisez les fonctionnalités d'accessibilité visuelle d'iOS [ici](https://www.apple.com/accessibility/vision/).
   - Explorez les gestes VoiceOver pour iPhone [ici](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Paramètres de configuration requis {#required-setup-parameters}

Pour activer les fonctionnalités d'accessibilité de l'appareil dans OsmAnd, vous devez effectuer les réglages suivants :

1. **Activer le** [plugin Accessibilité](../plugins/index.md#enable--disable) : *Menu → Plugins → Accessibilité → Activer*.
2. **Activer le mode accessibilité** sur votre appareil.
3. Configurer les [paramètres](#plugin-settings) du plugin Accessibilité.


## Paramètres du plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibilité](@site/static/img/plugins/Accessibility/access_.png)

Le plugin Accessibilité offre divers paramètres pour personnaliser la navigation et l'interaction pour les utilisateurs handicapés. Ces paramètres sont appliqués par [profil](../personal/profiles.md) dans OsmAnd.

| Paramètre                   | Description |
|---------------------------|-------------|
| **Mode Accessibilité**    | Active les *fonctionnalités OsmAnd intégrées* ou utilise les **paramètres système**. |
| **Débit vocal**           | Contrôle la *vitesse de la synthèse vocale*, allant de **50 % à 200 %**. |
| [Annonce automatique intelligente](#smart-autoannounce-and-clockwise-directions)    | Fournit des *conseils vocaux* en cas de déviation de l'itinéraire. |
| **Période d'annonce automatique**   | Définit le temps minimum entre les annonces, de **5 secondes à 5 minutes**. |
| **Style de direction**       | Choisissez entre *Latéral (8 directions)* ou [Horaire](#smart-autoannounce-and-clockwise-directions) (12 directions)*. |
| **Directions audio**      | Diffuse des *conseils audio* indiquant la direction. |
| **Directions haptiques**     | Fournit un *retour par vibration* pour les virages et les déviations. |

<!--
- **Mode Accessibilité**. Active des outils spéciaux qui aident les personnes handicapées à interagir avec l'application OsmAnd. Il existe trois modes : *Activé* - active les fonctionnalités OsmAnd intégrées, *Désactivé* - désactive toutes les fonctionnalités du plugin, et *Selon les paramètres système Android* - active les paramètres système Android.

- **Débit vocal**. Ajuste le débit vocal de la synthèse vocale, allant de 50 % à 200 %.

- **Annonce automatique intelligente**. Si activé, vous recevrez des annonces vocales lorsque vous vous écartez de la trace définie.

- **Période d'annonce automatique**. Il s'agit d'une annonce automatique de la direction et de la distance jusqu'à votre destination. Vous pouvez sélectionner un temps minimal entre les annonces, allant de 5 secondes à 5 minutes.

- **Style de direction**. Choisissez comment l'application OsmAnd vous notifiera des directions. *Latéral* - indique la direction vers les côtés du monde (8 directions), *Horaire* - indique les directions orientées vers le cadran de l'horloge (12 directions).

- **Directions audio**. Fournit un retour lors de la navigation en indiquant la direction vers le point cible avec du son.

- **Directions haptiques**. Ce paramètre fournit un retour haptique lors de la navigation. La vibration indique la direction vers le point cible et les déviations du chemin.
-->

<br/>

***Conseils pour une accessibilité optimisée :***

- **Lecteur d'écran** - Utilisez TalkBack (*Android*) ou VoiceOver (*iOS*) pour une interaction améliorée avec la carte.
- **Navigation audio** - Activez l'annonce automatique pour recevoir des directions vocales lorsque l'écran est éteint.
- **Retour haptique** - Idéal pour les environnements à faible visibilité ou lorsque les conseils audio ne sont pas pratiques.


#### Annonce automatique intelligente et directions horaires {#smart-autoannounce-and-clockwise-directions}

La fonctionnalité **Annonce automatique intelligente** fournit des *notifications audio* lorsque vous vous écartez de l'itinéraire prévu, tandis que le **Style de direction horaire** offre des *conseils de navigation basés sur le cadran de l'horloge*. Ces fonctionnalités sont conçues pour aider les utilisateurs malvoyants qui dépendent des *conseils vocaux*.

- Si **TalkBack n'est pas activé**, l'*Annonce automatique intelligente* et les *Directions horaires* n'afficheront que des *notifications textuelles* à l'écran.

- Les **notifications vocales** ne sont activées que lorsque *TalkBack* est activé dans les **paramètres système de l'appareil**.

- Définissez la **Période d'annonce automatique** (par exemple, *10 secondes*) pour contrôler la fréquence des annonces.


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

> *Cet article a été mis à jour pour la dernière fois en février 2025*