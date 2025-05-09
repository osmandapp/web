---
sidebar_position: 2
title: Général
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

Problèmes généraux liés aux diverses fonctionnalités d'OsmAnd.

## Consommation de la batterie

### OsmAnd semble consommer trop de batterie

Des utilisateurs ont signalé qu'OsmAnd consommait une quantité excessive de batterie, avec des cas où OsmAnd était responsable de jusqu'à 90 % de l'utilisation de la batterie. Cependant, nous avons effectué de nombreux tests et n'avons pas pu reproduire de tels résultats.

Dans des circonstances normales, OsmAnd ne consomme de l'énergie que lorsque cela est nécessaire pour des fonctions actives comme la navigation en direct ou l'enregistrement de traces. Lorsque ces services sont actifs, ils apparaissent dans la zone de notification Android. Si aucune notification de ce type n'est visible, OsmAnd ne consomme pas d'énergie en arrière-plan.

Plusieurs facteurs influencent la consommation de la batterie : l'âge de l'appareil, le nombre de cycles de charge, la capacité de la batterie, la température, etc. Voici les taux de consommation de batterie typiques, basés sur des tests effectués sur un appareil de milieu de gamme :

| Fonction de l'appareil | Consommation de la batterie par heure |
| :--- | :--- |
| Appareil typique en veille avec uniquement des applications standard actives | 0,5 % |
| Écran allumé (typiquement) | 6 % |
| GPS actif (typiquement) | 5 % |
| OsmAnd fonctionnant en arrière-plan pour l'enregistrement de traces | 0,5 % |
| OsmAnd ne fonctionnant avec aucun service en arrière-plan | 0 % |

#### Consommation de la batterie par fonction OsmAnd

| Fonction OsmAnd | Consommation de la batterie par heure |
| :--- | :--- |
| Enregistrement de traces avec l'écran éteint | 6 % |
| Navigation avec l'écran allumé | 12 % |

La consommation d'énergie globale devrait résulter de l'addition de ces composants, selon la façon dont vous utilisez OsmAnd. Veuillez signaler si vous constatez des écarts significatifs par rapport à ces valeurs typiques.


### Optimisation de la consommation de la batterie

Lorsque vous utilisez OsmAnd, plusieurs fonctionnalités peuvent influencer la consommation de la batterie, en particulier lors d'activités comme la navigation ou l'enregistrement de traces. Voici quelques conseils pour vous aider à gérer efficacement l'utilisation de la batterie :

- **Contrôle de l'écran pendant la navigation** (*Android*). Pour économiser de l'énergie, vous pouvez configurer OsmAnd pour que l'écran reste éteint pendant la navigation, sauf en cas de virage ou d'événement important. Cela est particulièrement utile pendant la navigation vocale. Pour plus de détails, consultez *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Paramètres de navigation économes en énergie**. Vous pouvez réduire la consommation de la batterie en minimisant la fréquence de redessin de la carte et en limitant la précision du GPS. Pour ajuster ces paramètres, allez dans *Navigation → Paramètres → Navigation d'itinéraire*. Pour plus d'informations, consultez la section [Économiser de l'énergie pendant la navigation](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Gestion des couches de carte et des détails**. Désactivez les fonctionnalités de carte inutiles comme le relief 3D, les courbes de niveau ou les ombres portées. Vous pouvez également réduire le nombre d'objets affichés (étiquettes de POI, limites, numéros de maison, etc.) via le menu *Configurer la carte*. La désactivation de ces couches permet de réduire la fréquence de redessin de la carte, ce qui diminue la consommation d'énergie.

- **Désactivation du zoom automatique**. Le zoom automatique pendant la navigation peut entraîner des redessins fréquents de la carte, ce qui augmente l'utilisation de la batterie. La désactivation de cette fonctionnalité peut aider à réduire la consommation d'énergie. Naviguez vers *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* pour désactiver le zoom automatique. Pour plus de détails, consultez [Carte pendant la navigation](../navigation/guidance/map-during-navigation.md).

- **Optimisation des paramètres d'enregistrement de traces**. Assurez-vous d'ajuster la précision du GPS et l'utilisation de l'écran pendant l'enregistrement de traces pour économiser la batterie. Consultez la section [Dépannage de l'enregistrement de traces](../troubleshooting/track-recording-issues.md) pour plus de conseils.


## Confidentialité

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Comment supprimer l'historique de recherche

Pour supprimer l'historique de recherche dans OsmAnd :

1. Ouvrez le menu *Recherche*.
2. Appuyez longuement sur n'importe quel résultat de recherche.
3. Sélectionnez les résultats que vous souhaitez supprimer, ou utilisez l'option *Tout sélectionner* dans le coin supérieur gauche pour supprimer tous les résultats.
4. Appuyez sur l'icône *Corbeille* dans le coin supérieur droit pour confirmer la suppression.

Pour des instructions plus détaillées sur la fonctionnalité de recherche, vous pouvez vous référer à [ce guide](../search/search-history.md).


## Autres

### Problème de connexion GPS (Android)

OsmAnd s'appuie sur les données de localisation fournies par votre appareil Android via l'API Android.

Pour résoudre les problèmes de connexion GPS, suivez ces étapes :

1. **Modifier la source de localisation**. Essayez différentes options comme Google Play Services ou Android API dans *Paramètres OsmAnd → Source de localisation*.
2. **Mettre à jour l'API Google Service**. Assurez-vous d'avoir la dernière version de [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Vérifier les paramètres de localisation Android**. Allez dans les paramètres système Android et assurez-vous que l'accès à la localisation est activé et réglé sur Haute précision. Vous pouvez également essayer de vider le cache et de redémarrer votre appareil. Des problèmes de GPS peuvent survenir si des bâtiments ou de grands objets interfèrent avec le signal. Testez les performances du GPS, et si le signal est faible, réglez la précision d'enregistrement minimale à plus de 15 mètres.
4. **Activer le widget GPS**. Utilisez le widget d'informations GPS pour vérifier les connexions satellites. S'il n'y a pas de connexions satellites, votre appareil ne déterminera pas la localisation, et le nombre de satellites sera de 0. Plus de détails peuvent être trouvés dans le [guide du widget GPS](../widgets/info-widgets.md#gps-info-android).
5. **Utiliser uniquement le signal GPS**. Réglez votre appareil pour utiliser uniquement le GPS (désactivez la localisation basée sur le Wi-Fi ou le Bluetooth). Des instructions sont disponibles sur [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **Réinstaller OsmAnd**. Si les étapes ci-dessus ne fonctionnent pas, essayez de réinstaller l'application OsmAnd pour effacer les données corrompues et résoudre les problèmes de GPS. Avant de le faire, exportez toutes vos données enregistrées.
7. **Vérifier la RAM de l'appareil**. Si le problème persiste, cela peut être dû à une mémoire insuffisante, alors assurez-vous que votre appareil dispose de suffisamment de RAM disponible.


### Problème de non-concordance d'e-mail lors de l'achat d'OsmAnd Pro

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd
-->

Si vous rencontrez un problème où l'e-mail associé à votre achat OsmAnd Pro ne correspond pas à l'e-mail de l'application OsmAnd, suivez ces étapes pour résoudre le problème :

1. **Vérifier les comptes Google Play et Pay**. Assurez-vous que le bon e-mail est lié à vos comptes Google Play Store et Pay. Le processus de paiement est géré par ces services, et la non-concordance d'e-mail peut survenir en raison d'un ancien e-mail toujours associé à votre profil de paiement.

2. **Vérifier l'e-mail de l'application OsmAnd**. Vérifiez à nouveau l'adresse e-mail dans votre application OsmAnd pour vous assurer qu'elle correspond à votre e-mail Google Play actuel. Cela peut être fait en ouvrant l'application et en naviguant vers les paramètres du compte.

3. **Restaurer les achats**. Vérifiez la disponibilité et la pertinence de votre achat. Pour ce faire, allez dans *Menu OsmAnd → Paramètres → Achats*. Si les données affichées ne correspondent pas à vos attentes, essayez de [Restaurer les achats](./purchases_payments.md#how-to-restore-purchases).

4. **Vider le cache et les données de l'application**. Videz le cache et les données de l'application OsmAnd en allant dans les *Paramètres* de votre appareil *→ Applications → OsmAnd → Stockage → Vider le cache et Vider les données*. Cela actualisera l'application et supprimera tout problème résiduel de l'ancien compte.

5. **Réinstaller OsmAnd**. Si vider le cache ne résout pas le problème, essayez de désinstaller et de réinstaller l'application. Avant de le faire, assurez-vous de sauvegarder toutes les données importantes (traces, favoris) en allant dans *Menu → Paramètres → Exporter vers un fichier*. La réinstallation de l'application garantira que tous les détails du compte sont correctement actualisés.

6. **Désactiver le proxy**. Vérifiez les paramètres de proxy de l'application et assurez-vous que le proxy est désactivé en allant dans *Menu → Paramètres → Paramètres OsmAnd → Proxy*. Un proxy ou un VPN pourrait interférer avec la synchronisation du compte.

7. **Se reconnecter ou utiliser le Web pour la gestion du compte**. Si vous rencontrez toujours des problèmes, essayez de vous déconnecter et de vous reconnecter pour actualiser la connexion de l'application à votre compte actuel. Si vous rencontrez des problèmes pour supprimer l'ancien compte dans l'application, envisagez de gérer votre compte via la version Web d'OsmAnd.

-- source-hash: blake2s: 13bde081753c0698efa132f289c9911bd66fbde0e5c5d99e1a03154d2c2283c8 --
