---
source-hash: 05cf80a4a56378d1f141f794a5c5bdb4fba55253038028ce75807fb27b47f6a4 
sidebar_position: 6
title: Enregistrement de trace
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Vue d'ensemble

Cet article traite des problèmes d'enregistrement de trace GPX qui ont été observés depuis longtemps dans différentes versions d'Android et d'iOS. Par **Arrière-plan**, nous entendons que l'application OsmAnd n'apparaît pas au premier plan, en particulier lorsque l'écran de l'appareil est éteint (ce qui est différent de la définition interne de *l'arrière-plan* dans les appareils).

**Notes**:

- Depuis Android 11 (2020/12), l'option de permission système *Toujours autoriser* l'accès à la localisation en arrière-plan n'existe plus, mais cela **ne limite pas** l'enregistrement en arrière-plan des traces OsmAnd. Selon la documentation de Google, cela est maintenant considéré comme une **utilisation au premier plan** car la permission d'utiliser le service au premier plan est utilisée en interne et la notification système indiquant qu'une trace est en cours d'enregistrement est toujours visible.

- Notez que la nouvelle formulation d'Android peut être trompeuse :

  - **Autoriser pendant l'utilisation de l'application** signifie que l'application peut recevoir en continu des données de localisation tant qu'elle est affichée à l'écran ou qu'elle a une notification visible dans la barre de notification *Android*, comme c'est le cas pour OsmAnd pendant la navigation ou l'enregistrement de trajet. (Techniquement, cela s'appelle le *mode premier plan*).

  - **Autoriser tout le temps**, en revanche, signifie que l'application peut en principe obtenir votre localisation 'sans être remarquée' sans que l'une ou l'autre de ces conditions ne s'applique. Mais *Android* limite la fréquence d'accès à la localisation dans ce mode (*arrière-plan*) à quelque chose comme une fois par heure, ce qui n'est certainement pas le mode correct pour une application de navigation.


## Les traces enregistrées sont bruyantes

Il existe 2 problèmes de précision typiques conduisant à une trace enregistrée *désordonnée*.

- Rester plus longtemps au même endroit.
- Mauvais signal GPS et passage à la localisation basée sur le signal réseau.

Actions que vous pouvez effectuer :

- Vous pouvez éviter de tels problèmes en utilisant **Pause** pour interrompre l'enregistrement dans de telles conditions.
- Il est également possible de modifier une trace ultérieurement et de supprimer les points *"bruyants"*.
- Ou vous pouvez utiliser les paramètres du *Plugin d'enregistrement de trajet* pour filtrer les points *"bruyants"* déjà pendant l'enregistrement, en fonction de votre **expérience** et de votre **appareil d'enregistrement**. Vous pouvez filtrer les points selon divers critères :
  - Points avec une vitesse faible ou nulle.
  - Points avec une mauvaise précision (GPS 'hdop').
  - Points plus proches qu'un seuil en mètres.

- **API Google Services ou API Android**. Vous pouvez également modifier la façon dont OsmAnd reçoit les données de localisation sur les appareils Android. Dans [Paramètres OsmAnd → Source de localisation](../personal/global-settings.md#location-source), sélectionnez entre **Google Play Services** et **API Android**. Dans de nombreux cas, le passage à **API Android** permet d'améliorer les traces enregistrées et de les rendre moins bruyantes.


## Les traces enregistrées présentent des lacunes

À partir d'Android 4.4, les fonctionnalités d'économie d'énergie peuvent limiter l'utilisation du processeur, réduire la luminosité de l'écran et tuer les applications en arrière-plan lorsque l'écran est éteint. Cela peut affecter les performances d'OsmAnd pour une utilisation en extérieur, le rendu de la carte et l'enregistrement de trace. Pour éviter les problèmes, envisagez de désactiver entièrement les fonctionnalités d'économie d'énergie. Selon l'expérience utilisateur, cela a peu d'impact sur l'autonomie de la batterie pour la plupart des appareils.

### Configuration d'OsmAnd pour l'enregistrement de trace

- **Empêcher la journalisation autonome**. Assurez-vous que le paramètre *Empêcher la journalisation autonome* sous Plugins/Enregistrement de trajet est désactivé pour permettre à OsmAnd d'enregistrer des traces avec l'écran éteint.
- **Mettre à jour OsmAnd**. Les versions d'Android utilisent différentes stratégies pour réduire la consommation d'énergie en [tuant les applications exécutées en arrière-plan](https://dontkillmyapp.com/). La version 3.9 ou supérieure utilise un service de premier plan, visible dans la barre de notification, [pour maintenir l'application en cours d'exécution en arrière-plan](https://dontkillmyapp.com/) sur la plupart des versions d'Android. Cela est particulièrement efficace sur Android 8+ ([Problème #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problème #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Optimisation d'Android pour l'enregistrement de trace

- **Exclure OsmAnd de l'optimisation de l'énergie**. Dans les paramètres d'alimentation ou d'économie d'énergie de votre appareil Android, recherchez OsmAnd sous *Applications*, *Applications* ou *Gestionnaire d'applications*. Localisez *Économie d'énergie* ou *Consommation d'énergie*, et excluez OsmAnd de l'optimisation de l'énergie. ([Problème #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Désactiver le mode d'économie d'énergie**. La désactivation complète de l'économie d'énergie d'Android peut aider, en particulier sur les anciennes versions d'Android. Cela peut résoudre les problèmes de performances pendant l'enregistrement de trace ou la navigation.

### Contrôler le comportement des applications iOS en arrière-plan

iOS peut suspendre ou arrêter automatiquement les applications en arrière-plan lorsque les ressources système sont réallouées. OsmAnd ne peut pas outrepasser ce comportement. Si l'enregistrement de trace est interrompu lorsque l'appareil est verrouillé, cela peut laisser des lacunes dans l'enregistrement. Vous pouvez modifier ces lacunes à l'aide de l'outil [Planifier un itinéraire](https://docs.osmand.net/docs/user/plan-route/create-route).

Pour plus de détails sur la façon dont iOS gère le suivi de localisation, consultez la documentation d'Apple [ici](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Paramètres d'alimentation testés pour Android 9, 10 et 11 (Hardy, 2020-08-25)

Les paramètres d'alimentation suivants ont été testés avec succès sous Android 9, 10 et plus tard 11 (sur les appareils Samsung) pour qu'OsmAnd enregistre les traces sans lacunes. Veuillez examiner ces **10 paramètres** et les définir en conséquence :

- (1) **Économie d'énergie (mode)** = OFF (ou *Optimisé* dans Android 10)
- (2) **Économie d'énergie adaptative** = OFF (Lorsque ON, le mode d'économie d'énergie moyen peut parfois être activé, ce qui empêche OsmAnd de se connecter)
- (3) **Batterie adaptative** = ON (ne devrait pas affecter les applications exemptées de l'optimisation de la batterie de toute façon, voir (9) ci-dessous)
- (4) **Mettre les applications inutilisées en veille** = OFF (ON probablement aussi ok si OsmAnd est exempté de l'optimisation de la batterie, voir (9) ci-dessous)
- (5) **Désactiver automatiquement les applications inutilisées** = OFF (semble uniquement présent dans Android 9)
- (6) **Optimiser les paramètres** = OFF (dans Android 10 sous *Maintenance de l'appareil / Avancé*, dans Android 11 semble disparu)
- (7) **Optimisation automatique (quotidienne)** = ON (probablement pas pertinent)
- (8) **Redémarrage automatique (à des heures définies)** = OFF (probablement pas pertinent)
- (9) **Optimiser l'utilisation de la batterie** (sous *Applications / OsmAnd / Batterie* ou *Applications / 3 points / Accès spécial / Optimiser l'utilisation de la batterie / Tout / OsmAnd*) = il est conseillé d'exempter OsmAnd de l'optimisation de la batterie (bien que cela ne soit pas nécessaire sur tous les appareils)
- (10) **Autoriser l'activité en arrière-plan** = ON pour OsmAnd sous *Applications / OsmAnd / Batterie* pour Android 11

Certains de ces paramètres interagissent, soyez donc précis. La meilleure façon de rechercher les paramètres ci-dessus est par leur nom (avec et sans les expressions entre parenthèses). Selon votre version d'Android, ils peuvent être dispersés sur ces différents *écrans de paramètres Android* :

- *Maintenance de l'appareil*
- *Maintenance de l'appareil / 3 points / Automatisation*
- *Maintenance de l'appareil / Avancé*
- *Maintenance de l'appareil / Batterie*
- *Maintenance de l'appareil / Batterie / Paramètres*
- *Maintenance de l'appareil / Batterie / Gestion de l'alimentation des applications*
- *Maintenance de l'appareil / Batterie / Plus de paramètres de batterie*


## Comment suivre la distance parcourue

OsmAnd ne dispose pas de widget spécial similaire à un odomètre, vous pouvez utiliser le [plugin d'enregistrement de trajet](../plugins/trip-recording.md#new-track-recording) pour suivre votre distance parcourue et la réinitialiser si nécessaire.


## OsmAnd 3.9 : Problèmes d'altitude lors de l'utilisation de Google Play Services

Google Play a modifié sa politique, et pour s'y conformer, OsmAnd, à partir de la version 3.9 (à l'exclusion des versions Nightly, F-Droid, Huawei et Amazon) est tenu d'utiliser Google Play Services pour obtenir des corrections de localisation lorsqu'il s'exécute en arrière-plan (c'est-à-dire, dans la terminologie Android, en tant que service de premier plan avec une notification système visible).

Après ce changement, il semble y avoir un problème avec l'enregistrement de l'altitude : apparemment, Google Play Services interpole la mesure de l'altitude de manière très agressive, voir [problème GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ce problème affecte Android 10, peut-être pas Android 11. Le [problème](https://issuetracker.google.com/issues/180218747) a déjà été signalé sur le site Web de Google, et sera probablement corrigé le 09-03-2021.

En guise de solution de contournement, dans [*Paramètres OsmAnd → Source de localisation*](../personal/global-settings.md#location-source), vous pouvez changer la source de localisation de **Google Play Services** à **API Android**.


## OsmAnd 3.9 : Le réveil GPS est maintenant remplacé par un service de premier plan continu (2020/12)

À partir de la version 3.9, lorsque l'enregistrement de trace ou la navigation est requis, OsmAnd prend en charge en continu le GPX via le service d'arrière-plan *Android*, et cela est visible sous forme de notification système *Android*.

La stratégie antérieure consistant à utiliser un mode Doze et un réveil GPS périodique a été supprimée de notre code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), comme l'exigent les nouvelles restrictions de Google Play sur l'accès à la localisation en arrière-plan. Par conséquent, les sections (A) et (B) suivantes ne s'appliquent qu'aux versions d'OsmAnd antérieures à la version 3.9 :

**<del> (A) Stratégie de réveil GPS</del>**

- (A1) Pendant l'utilisation d'OsmAnd, par exemple la navigation. Nous maintenons le module GPS du système allumé en permanence, car les informations de localisation continues sont essentielles ici. L'effet sur l'utilisation de la batterie (ordre de grandeur) semble être d'environ 5 % par heure sur les anciens systèmes jusqu'à Android 4.4, et de 2 à 3 % pour les systèmes plus récents.
- (A2) Pour l'enregistrement de trace en *arrière-plan* sans navigation simultanée. Pour l'enregistrement avec des intervalles allant jusqu'à 15 secondes, nous maintenons également le GPS allumé, d'autres stratégies ne permettront pas d'économiser beaucoup d'énergie de la batterie.
- (A3) Pour les intervalles >= 30 secondes, nous n'activons le GPS que pour chaque point d'échantillonnage. Cela a un effet notable sur la précision des points enregistrés, mais réduit l'utilisation de la batterie à un ordre de grandeur de 1,2 % par heure pour un enregistrement de trace de 30 secondes.

**<del> (B) Problèmes de réveil GPS</del>**

Pour réaliser le réveil GPS, nous utilisons jusqu'à présent l'Android Alarm Manager pour réveiller l'appareil périodiquement (également à partir du mode Doze, qui a été introduit dans Android 6). Les nouvelles versions d'Android ont introduit les problèmes suivants :

- **(B1) setRepeating() de l'Alarm Manager est devenu inexact à partir d'Android 4.4 :**
Atténuation : Nous n'utilisons maintenant *setRepeating()* que jusqu'à Android 4.2, la nouvelle méthode *setExact()* à partir d'Android 4.4, et *setExactAndAllowWhileIdle()* pour Android 8+. ([Problème #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) À partir d'Android 4.4, les systèmes limitent le nombre de fois où *setExact()* est exécuté de manière répétée** à, par exemple, une fois toutes les 5 ou même 15 minutes. (La valeur réelle semble très spécifique à l'appareil.)
Aucune bonne solution trouvée pour l'instant. L'atténuation actuelle est que nous n'utilisons pas le réveil de l'Alarm Manager, mais maintenons le GPS toujours allumé pour l'enregistrement de trace en arrière-plan sur les appareils avec Android 5+ pour tous les intervalles d'enregistrement inférieurs à 5 minutes. Cela produit des traces fiables et précises au prix d'une utilisation plus élevée de la batterie. ([Problème #5632](https://github.com/osmandapp/Osmand/issues/5632))

