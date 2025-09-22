---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Enregistrement de traces
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Aperçu {#overview}

Cet article traite des problèmes d'enregistrement de traces GPX observés depuis longtemps dans différentes versions d'Android et d'iOS. Par **arrière-plan**, nous entendons que l'application OsmAnd n'apparaît pas au premier plan, en particulier lorsque l'écran de l'appareil est éteint (ce qui est différent de la définition interne d'*arrière-plan* dans les appareils).

**Remarques** :

- Depuis Android 11 (12/2020), l'option d'autorisation système *Toujours autoriser* l'accès à la localisation en arrière-plan n'existe plus, mais cela **ne limite pas** l'enregistrement en arrière-plan des traces OsmAnd. Selon la documentation de Google, cela est désormais considéré comme une **utilisation au premier plan**, car l'autorisation d'utiliser le service au premier plan est utilisée en interne et la notification système indiquant qu'une trace est en cours d'enregistrement est toujours visible.

- Notez que la nouvelle formulation d'Android peut être trompeuse :

  - **Autoriser uniquement si l'application est en cours d'utilisation** signifie que l'application peut recevoir en continu des données de localisation tant qu'elle est affichée à l'écran ou qu'elle a une notification visible dans la barre de notification *Android*, comme c'est le cas pour OsmAnd pendant la navigation ou l'enregistrement d'un trajet. (Techniquement, cela s'appelle le *mode premier plan*).

  - **Autoriser tout le temps**, en revanche, signifie que l'application peut en principe obtenir votre position "sans que vous le sachiez" sans qu'aucune de ces conditions ne s'applique. Mais *Android* limite la fréquence d'accès à la localisation dans ce mode (*arrière-plan*) à environ une fois par heure, ce qui n'est certainement pas le mode approprié pour une application de navigation.


## Les traces enregistrées sont bruitées {#recorded-tracks-are-noisy}

Il existe 2 problèmes de précision typiques qui conduisent à une trace enregistrée *désordonnée*.

- Une station prolongée au même endroit, ou un enregistrement de points trop fréquent (le zigzag correspondant exagère les valeurs réelles)
- Un signal GPS faible ou le passage à une localisation basée sur le signal du réseau.

Actions d'atténuation :

- Mettez vos enregistrements en pause lorsque vous êtes à l'arrêt, ou utilisez le filtre *Déplacement minimum* du plugin Enregistrement de trajet.
- Sélectionnez l'espacement temporel ou de déplacement de vos points enregistrés de manière appropriée pour capturer la sinuosité de votre trajet, mais sans créer beaucoup de points supplémentaires (dont la dispersion créera du bruit et exagérera la distance et les fluctuations d'altitude).
- Il est également possible de modifier une trace ultérieurement et de supprimer les points *"bruités"*.
- Ou vous pouvez utiliser les paramètres du *plugin Enregistrement de trajet* pour filtrer les points *"bruités"* dès l'enregistrement, en fonction de votre **expérience** et de votre **appareil d'enregistrement**. Vous pouvez filtrer les points selon divers critères :
  - Points à vitesse faible ou nulle.
  - Points avec une mauvaise précision (GPS 'hdop').
  - Points plus proches qu'un seuil en mètres.

- **API Google Services ou API Android**. Vous pouvez également modifier la manière dont OsmAnd reçoit les données de localisation sur les appareils Android. Dans [Paramètres OsmAnd → Source de localisation](../personal/global-settings.md#location-source), choisissez entre **Google Play Services** et **API Android**. Dans de nombreux cas, passer à l'**API Android** aide à améliorer les traces enregistrées et à les rendre moins bruitées.


## Les traces enregistrées présentent des interruptions {#recorded-tracks-have-gaps}

### Configuration d'OsmAnd pour l'enregistrement de traces {#configuring-osmand-for-track-recording}

- **Empêcher l'enregistrement autonome**. Assurez-vous que le paramètre *Empêcher l'enregistrement autonome* sous Plugins/Enregistrement de trajet est désactivé pour permettre à OsmAnd d'enregistrer des traces avec l'écran éteint.
- **Mettre à jour OsmAnd**. Les versions d'Android utilisent différentes stratégies pour réduire la consommation d'énergie en [tuant les applications fonctionnant en arrière-plan](https://dontkillmyapp.com/). La version 3.9 ou supérieure utilise un service de premier plan, visible dans la barre de notification, [pour maintenir l'application en cours d'exécution en arrière-plan](https://dontkillmyapp.com/) sur la plupart des versions d'Android. Ceci est particulièrement efficace sur Android 8+ ([Problème #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problème #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Optimisation d'Android pour l'enregistrement de traces {#optimizing-android-for-track-recording}

À partir d'Android 4.4, les fonctionnalités d'économie d'énergie peuvent limiter l'utilisation du processeur, réduire la luminosité de l'écran et tuer les applications en arrière-plan lorsque l'écran est éteint. Cela peut affecter les performances d'OsmAnd pour une utilisation en extérieur, le rendu de la carte et l'enregistrement de traces. Les versions ultérieures d'Android ont ajouté des comportements d'économie d'énergie basés sur l'IA comme la **Batterie automatique** et l'**Économie d'énergie automatique**, introduisant un comportement dynamique et encore moins prévisible. Pour éviter les problèmes d'enregistrement, au moins au début ou pour le débogage, **envisagez de désactiver complètement les fonctionnalités d'économie d'énergie**. Les utilisateurs signalent que l'impact sur la durée de vie de la batterie pour la plupart des appareils est tolérable.

- **Exclure OsmAnd de l'*Optimisation de la batterie*.** Dans les *Paramètres* de votre appareil Android, trouvez OsmAnd sous *Applis*, *Applications* ou *Gestionnaire d'applications*. Localisez la section *Batterie*, *Économies d'énergie* ou *Consommation d'énergie*, et excluez OsmAnd de l'optimisation de la batterie. ([Problème #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Désactiver le mode *Économie d'énergie*.** Ce mode a de fortes chances d'impacter/tuer même les services de premier plan, comme l'enregistrement de trajet d'OsmAnd.

- **Désactiver l'*Économie d'énergie adaptative*.** Si cette option est activée, des politiques basées sur les habitudes d'utilisation seront appliquées à l'échelle du système pour désactiver/activer le mode "économie d'énergie" ci-dessus.

- **Désactiver la *Batterie adaptative* sauf si vous utilisez régulièrement l'application OsmAnd.** La *Batterie adaptative* fonctionne par application, également en fonction des habitudes d'utilisation. Son effet sur une application spécifique peut être réduit en exemptant cette application de l'*Optimisation de la batterie* (par exemple en la réglant sur *Non optimisée*). Cependant, la *Batterie adaptative* peut toujours tuer les services de premier plan tels que l'enregistrement de trajet d'OsmAnd, si l'appareil juge qu'OsmAnd fait partie de votre groupe d'applications "rarement utilisées".

### Contrôler le comportement des applications en arrière-plan sur iOS {#control-the-behavior-of-ios-background-apps}

iOS peut suspendre ou arrêter automatiquement les applications en arrière-plan lorsque les ressources système sont réallouées. OsmAnd ne peut pas outrepasser ce comportement. Si l'enregistrement de la trace est interrompu lorsque l'appareil est verrouillé, cela peut laisser des interruptions dans l'enregistrement. Vous pouvez modifier ces interruptions à l'aide de l'outil [Planifier un itinéraire](https://docs.osmand.net/docs/user/plan-route/create-route).

Pour plus de détails sur la manière dont iOS gère le suivi de la localisation, consultez la documentation d'Apple [ici](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Paramètres d'alimentation testés pour Android 9, 10 et 11 (Hardy, 25/08/2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Les paramètres d'alimentation suivants ont été testés avec succès sous Android 9, 10, et plus tard 11 (sur des appareils Samsung) pour que OsmAnd enregistre des traces sans interruptions. Veuillez examiner ces **10 paramètres** et les régler en conséquence :

- (1) **Économie d'énergie (mode)** = DÉSACTIVÉ (ou *Optimisé* sous Android 10)
- (2) **Économie d'énergie adaptative** = DÉSACTIVÉ (Lorsqu'elle est activée, le mode d'économie d'énergie peut parfois être activé, ce qui empêche OsmAnd d'enregistrer.)
- (3) **Batterie adaptative** = ACTIVÉ (N'affecte de toute façon pas les applications exemptées de l'optimisation de la batterie, voir (9) ci-dessous, **sauf si l'application est rarement utilisée**. Pour plus de sécurité, réglez sur DÉSACTIVÉ.)
- (4) **Mettre en veille les applis inutilisées** = ACTIVÉ (Mais OsmAnd est exempté de l'optimisation de la batterie, voir (9) ci-dessous !)
- (5) **Désactivation auto applis inutilisées** = DÉSACTIVÉ (Semble n'être présent que dans Android 9.)
- (6) **Optimiser les paramètres** = DÉSACTIVÉ (Sous Android 10 dans *Maintenance de l'appareil / Avancé*, semble avoir disparu dans Android 11.)
- (7) **Optimisation auto (quotidienne)** = ACTIVÉ (N'a aucun effet ici.)
- (8) **Redémarrage auto (heures déf.)** = DÉSACTIVÉ (N'a aucun effet ici.)
- (9) **Optimiser l'utilisation de la batterie** (Sous *Paramètres Android / Applis / OsmAnd / Batterie* ou *Paramètres / Applis / 3 points / Accès spécial / Optimiser l'utilisation de la batterie / Toutes / OsmAnd*) = Exempter OsmAnd de l'optimisation de la batterie (très conseillé, bien que non nécessaire si l'application est démarrée fréquemment par l'utilisateur).
- (10) **Autoriser l'activité en arrière-plan** = ACTIVÉ pour OsmAnd sous *Applis / OsmAnd / Batterie* pour Android 11

Certains de ces paramètres interagissent, alors soyez précis. Le mieux est de rechercher les paramètres ci-dessus par leur nom (avec et sans les expressions entre parenthèses). Selon votre version d'Android, ils peuvent être dispersés sur ces différents *écrans de paramètres Android* :

- *Maintenance de l'appareil*
- *Maintenance de l'appareil / 3 points / Automatisation*
- *Maintenance de l'appareil / Avancé*
- *Maintenance de l'appareil / Batterie*
- *Maintenance de l'appareil / Batterie / Paramètres*
- *Maintenance de l'appareil / Batterie / Gestion de l'alimentation des applications*
- *Maintenance de l'appareil / Batterie / Plus de paramètres de batterie*


## Comment suivre la distance parcourue {#how-to-track-traveled-distance}

OsmAnd n'a pas de widget spécial similaire à un odomètre, vous pouvez utiliser le [plugin Enregistrement de trajet](../plugins/trip-recording.md#new-track-recording) pour suivre votre distance parcourue et la réinitialiser si nécessaire.


## OsmAnd 3.9 : Problèmes d'altitude avec les services Google Play {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play a modifié sa politique et, pour s'y conformer, OsmAnd, à partir de la version 3.9 (à l'exclusion des versions Nightly, F-Droid et Huawei), est tenu d'utiliser les services Google Play pour obtenir des corrections de localisation lors de son exécution en arrière-plan (c'est-à-dire, dans la terminologie Android, en tant que service de premier plan avec une notification système visible).

Après ce changement, il semble y avoir un problème avec l'enregistrement de l'altitude : apparemment, les services Google Play interpolent la mesure de l'altitude de manière très agressive, voir le [problème GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ce problème affecte Android 10, et peut-être pas Android 11. Le [problème](https://issuetracker.google.com/issues/180218747) a déjà été signalé sur le site web de Google, et sera probablement corrigé le 09-03-2021.

Comme solution de contournement, dans [*Paramètres OsmAnd → Source de localisation*](../personal/global-settings.md#location-source), vous pouvez changer la source de localisation de **Google Play Services** à **API Android**.


## OsmAnd 3.9 : Le réveil du GPS est remplacé par un service continu au premier plan (12/2020) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

À partir de la version 3.9, lorsque l'enregistrement de trace ou la navigation est requis, OsmAnd prend en charge en continu le GPX via le service d'arrière-plan *Android*, et cela est visible sous la forme d'une notification système *Android*.

La stratégie antérieure consistant à utiliser un mode de veille et un réveil périodique du GPS a été supprimée de notre code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), comme l'exigent les nouvelles restrictions de Google Play sur l'accès à la localisation en arrière-plan. Par conséquent, les sections suivantes (A) et (B) ne s'appliquent qu'aux versions d'OsmAnd antérieures à la 3.9 :

**<del> (A) Stratégie de réveil du GPS</del>**

- (A1) Pendant l'utilisation d'OsmAnd, par exemple pour la navigation. Nous maintenons le module GPS du système allumé en permanence, car une information de localisation continue est essentielle ici. L'effet sur l'utilisation de la batterie (ordre de grandeur) semble être d'environ 5% par heure sur les anciens systèmes jusqu'à Android 4.4, et de 2-3% pour les systèmes plus récents.
- (A2) Pour l'enregistrement de traces en *arrière-plan* sans navigation simultanée. Pour un enregistrement avec des intervalles allant jusqu'à 15 secondes, nous maintenons également le GPS allumé, d'autres stratégies n'économiseront pas beaucoup d'énergie.
- (A3) Pour des intervalles \>=30sec, nous n'allumons le GPS que pour chaque point d'échantillonnage. Cela a un effet notable sur la précision des points enregistrés mais réduit l'utilisation de la batterie à un ordre de grandeur de 1,2% par heure pour un enregistrement de trace de 30 secondes.

**<del> (B) Problèmes de réveil du GPS</del>**

Pour réaliser le réveil du GPS, nous utilisons jusqu'à présent l'Alarm Manager d'Android pour réveiller périodiquement l'appareil (également depuis le mode Doze, qui a été introduit dans Android 6). Les nouvelles versions d'Android ont introduit les problèmes suivants :

- **(B1) setRepeating() de l'Alarm Manager est devenu inexact à partir d'Android 4.4 :**  
Atténuation : Nous n'utilisons maintenant *setRepeating()* que jusqu'à Android 4.2, la nouvelle méthode *setExact()* à partir d'Android 4.4, et *setExactAndAllowWhileIdle()* pour Android 8+. ([Problème #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) À partir d'Android 4.4, les systèmes limitent le nombre de fois où *setExact()* est exécuté de manière répétée** à, par exemple, une fois toutes les 5 ou même 15 minutes. (La valeur réelle semble très spécifique à l'appareil.)  
Aucune bonne solution n'a été trouvée pour l'instant. L'atténuation actuelle consiste à ne pas utiliser le réveil de l'Alarm Manager, mais à maintenir le GPS toujours allumé pour l'enregistrement de traces en arrière-plan sur les appareils avec Android 5+ pour tous les intervalles d'enregistrement inférieurs à 5 minutes. Cela produit des traces fiables et précises au prix d'une consommation de batterie plus élevée. ([Problème #5632](https://github.com/osmandapp/Osmand/issues/5632))