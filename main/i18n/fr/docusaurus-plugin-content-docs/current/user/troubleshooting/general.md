---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  Généralités
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

## Consommation de la batterie {#battery-consumption}

### OsmAnd semble consommer trop de batterie {#osmand-seems-to-use-up-too-much-battery-power}

Des utilisateurs ont signalé qu'OsmAnd consommait une quantité excessive de batterie, avec des cas où OsmAnd était responsable de jusqu'à 90 % de l'utilisation de la batterie. Cependant, nous avons effectué de nombreux tests et n'avons pas pu reproduire de tels résultats.  

Dans des circonstances normales, OsmAnd ne consomme de l'énergie que lorsque cela est nécessaire pour des fonctions actives comme la navigation en direct ou l'enregistrement de traces. Lorsque ces services sont actifs, ils apparaissent dans la zone de notification d'Android. Si aucune notification de ce type n'est visible, OsmAnd ne consomme pas d'énergie en arrière-plan.  

Plusieurs facteurs influencent la consommation de la batterie : l'âge de l'appareil, le nombre de cycles de charge, la capacité de la batterie, la température, et plus encore. Vous trouverez ci-dessous les taux de consommation de batterie typiques, basés sur des tests effectués sur un appareil de milieu de gamme :

| Fonction de l'appareil | Consommation de batterie par heure |
| :--- | :--- |
| Appareil en veille avec uniquement les applications standard actives | 0.5 % |
| Écran allumé (typiquement) | 6 % |
| GPS actif (typiquement) | 5 % |
| OsmAnd en arrière-plan pour l'enregistrement de trace | 0.5 % |
| OsmAnd n'exécutant aucun service en arrière-plan | 0 % |

#### Consommation de batterie des fonctions d'OsmAnd {#osmand-function-battery-consumption}

| Fonction d'OsmAnd | Consommation de batterie par heure |
| :--- | :--- |
| Enregistrement de trace avec écran éteint | 6 % |
| Navigation avec écran allumé | 12 % |

La consommation d'énergie globale devrait résulter de l'addition de ces composants selon votre utilisation d'OsmAnd. Veuillez nous signaler si vous observez des écarts significatifs par rapport à ces valeurs typiques.


### Optimisation de la consommation de la batterie {#optimizing-battery-consumption}

Lors de l'utilisation d'OsmAnd, plusieurs fonctionnalités peuvent influencer la consommation de la batterie, en particulier lors d'activités comme la navigation ou l'enregistrement de traces. Voici quelques conseils pour vous aider à gérer efficacement l'utilisation de la batterie :

- **Contrôle de l'écran pendant la navigation** (*Android*). Pour économiser de l'énergie, vous pouvez configurer OsmAnd pour garder l'écran éteint pendant la navigation, sauf en cas de virage ou d'événement important. C'est particulièrement utile lors de la navigation vocale. Pour plus de détails, consultez *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Paramètres de navigation pour économiser l'énergie**. Vous pouvez réduire la consommation de la batterie en minimisant la fréquence de rafraîchissement de la carte et en limitant la précision du GPS. Pour ajuster ces paramètres, allez dans *Navigation → Paramètres → Navigation d'itinéraire*. Pour plus d'informations, consultez la section [conseils pour économiser l'énergie pendant la navigation](../navigation/setup/route-navigation.md#power-saving-tips).

- **Gestion des couches et des détails de la carte**. Désactivez les fonctionnalités de carte inutiles comme le relief 3D, les courbes de niveau ou les ombrages de relief. Vous pouvez également réduire le nombre d'objets affichés (étiquettes de POI, frontières, numéros de maison, etc.) via le menu *Configurer la carte*. La désactivation de ces couches aide à réduire la fréquence de rafraîchissement de la carte, ce qui diminue la consommation d'énergie.

- **Désactivation du zoom automatique**. Le zoom automatique pendant la navigation peut provoquer des rafraîchissements fréquents de la carte, ce qui augmente l'utilisation de la batterie. La désactivation de cette fonctionnalité peut aider à réduire la consommation d'énergie. Naviguez vers *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* pour désactiver le zoom automatique. Pour plus de détails, visitez [Carte pendant la navigation](../navigation/guidance/map-during-navigation.md).

- **Optimisation des paramètres d'enregistrement de trace**. Assurez-vous d'ajuster la précision du GPS et l'utilisation de l'écran pendant l'enregistrement de trace pour économiser la batterie. Visitez la section [Dépannage de l'enregistrement de trace](../troubleshooting/track-recording-issues.md) pour plus de conseils.


## Confidentialité {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Comment supprimer l'historique de recherche {#how-to-delete-search-history}

Pour supprimer l'historique de recherche dans OsmAnd :

1. Ouvrez le menu *Recherche*.
2. Appuyez longuement sur n'importe quel résultat de recherche.
3. Sélectionnez les résultats que vous souhaitez supprimer, ou utilisez l'option *Tout sélectionner* dans le coin supérieur gauche pour supprimer tous les résultats.
4. Appuyez sur l'icône *Corbeille* dans le coin supérieur droit pour confirmer la suppression.

Pour des instructions plus détaillées sur la fonctionnalité de recherche, vous pouvez consulter [ce guide](../search/search-history.md).


## Autres {#other}

### Problème de connexion GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd s'appuie sur les données de localisation fournies par votre appareil Android via l'API Android.  

Pour résoudre les problèmes de connexion GPS, suivez ces étapes :

1. **Changer la source de localisation**. Essayez différentes options comme les services Google Play ou l'API Android dans *Paramètres OsmAnd → Source de localisation*.
2. **Mettre à jour l'API des services Google**. Assurez-vous d'avoir la dernière version depuis [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Vérifier les paramètres de localisation d'Android**. Allez dans les Paramètres système d'Android et assurez-vous que l'Accès à la localisation est activé et réglé sur Haute précision. Vous pouvez également essayer de vider le cache et de redémarrer votre appareil. Des problèmes de GPS peuvent survenir si des bâtiments ou de grands objets interfèrent avec le signal. Testez les performances du GPS, et si le signal est faible, réglez la précision d'enregistrement minimale à plus de 15 mètres.
4. **Activer le widget GPS**. Utilisez le widget d'informations GPS pour vérifier les connexions satellite. S'il n'y a pas de connexions satellite, votre appareil ne déterminera pas la localisation, et le nombre de satellites sera de 0. Plus de détails peuvent être trouvés dans le [guide du widget GPS](../widgets/info-widgets.md#gps-info).
5. **Utiliser uniquement le signal GPS**. Réglez votre appareil pour n'utiliser que le GPS (désactivez la localisation basée sur le Wi-Fi ou le Bluetooth). Des instructions sont disponibles sur le [Support Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Réinstaller OsmAnd**. Si les étapes ci-dessus ne fonctionnent pas, essayez de réinstaller l'application OsmAnd pour effacer les données corrompues et résoudre les problèmes de GPS. Avant de le faire, exportez toutes vos données sauvegardées.
7. **Vérifier la RAM de l'appareil**. Si le problème persiste, il peut être dû à une mémoire insuffisante, alors assurez-vous que votre appareil dispose de suffisamment de RAM.


### Problème de non-concordance d'e-mail lors de l'achat d'OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Si vous rencontrez un problème où l'e-mail associé à votre achat d'OsmAnd Pro ne correspond pas à l'e-mail de l'application OsmAnd, suivez ces étapes pour résoudre le problème :

1. **Vérifier les comptes Google Play et Pay**. Assurez-vous que le bon e-mail est lié à vos comptes Google Play Store et Pay. Le processus de paiement est géré par ces services, et la non-concordance d'e-mail peut se produire en raison d'un ancien e-mail toujours associé à votre profil de paiement.

2. **Vérifier l'e-mail de l'application OsmAnd**. Revérifiez l'adresse e-mail dans votre application OsmAnd pour vous assurer qu'elle correspond à votre e-mail Google Play actuel. Cela peut être fait en ouvrant l'application et en naviguant vers les paramètres du compte.

3. **Restaurer les achats**. Vérifiez la disponibilité et la pertinence de votre achat. Pour ce faire, allez dans *Menu OsmAnd → Paramètres → Achats*. Si les données affichées ne correspondent pas à vos attentes, essayez de [Restaurer les achats](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Vider le cache et les données de l'application**. Videz le cache et les données de l'application OsmAnd en allant dans les *Paramètres → Applications → OsmAnd → Stockage → Vider le cache et Effacer les données* de votre appareil. Cela rafraîchira l'application et supprimera tout problème résiduel de l'ancien compte.

5. **Réinstaller OsmAnd**. Si vider le cache ne résout pas le problème, essayez de désinstaller et de réinstaller l'application. Avant de le faire, assurez-vous de sauvegarder toutes les données importantes (traces, favoris) en allant dans *Menu → Paramètres → Exporter vers un fichier*. La réinstallation de l'application garantira que tous les détails du compte sont correctement actualisés.

6. **Désactiver le proxy**. Vérifiez les paramètres de proxy de l'application et assurez-vous que le proxy est désactivé en allant dans *Menu → Paramètres → Paramètres OsmAnd → Proxy*. Un proxy ou un VPN pourrait interférer avec la synchronisation du compte.

7. **Se reconnecter ou utiliser le Web pour la gestion du compte**. Si vous rencontrez toujours des problèmes, essayez de vous déconnecter et de vous reconnecter pour rafraîchir la connexion de l'application à votre compte actuel. Si vous rencontrez des problèmes pour supprimer l'ancien compte dans l'application, envisagez de gérer votre compte via la version web d'OsmAnd.