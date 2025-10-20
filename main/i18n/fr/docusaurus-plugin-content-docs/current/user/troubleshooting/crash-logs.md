---
source-hash: 1a33a1b4a2dedfaff07a0bf3e3e748f9060a255db1a4b2b9c0fb3d363a38cdf0
sidebar_position: 5
title:  Journaux de plantage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Aperçu {#overview}

Les journaux de plantage sont des outils de diagnostic précieux qui aident les développeurs à identifier et à corriger les problèmes et les bogues qui provoquent le plantage ou le comportement inattendu de l'application. Il est possible de partager les journaux de votre appareil Android avec l'équipe de développement d'OsmAnd. Actuellement, les utilisateurs d'iOS n'ont qu'une seule option de journal de plantage à envoyer.


## Journaux de plantage et Logcat {#crash-and-logcat-logs}

OsmAnd vous permet d'envoyer deux types de données aux développeurs :

- **Journaux de plantage**. Générés lorsque l'application OsmAnd rencontre une erreur critique ou une exception qui la fait planter. Ces journaux fournissent des informations détaillées sur l'état de l'application pendant l'échec, y compris les données de build, les traces de pile, les messages d'erreur et d'autres détails pertinents.
- **Journaux Logcat**. Un enregistrement du flux de journaux OsmAnd capturant divers événements et messages. Ces journaux aident les développeurs à surveiller le comportement de l'application, à suivre le flux d'exécution, à tracer des actions spécifiques et à enquêter sur les problèmes non liés aux plantages. Les journaux Logcat contiennent généralement des enregistrements d'activité depuis le dernier démarrage de l'application.

:::caution Vos informations privées
Soyez prudent lorsque vous envoyez des journaux Logcat, car ils peuvent contenir des informations privées telles que la localisation de l'appareil, les requêtes de recherche, les résultats de construction d'itinéraire et les données de navigation.
:::


### Envoyer des journaux depuis l'application OsmAnd (Android) {#send-logs-from-osmand-app-android}

1. Allez dans *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Selon votre situation, sélectionnez le type de journal approprié. Vous pouvez vous référer à la section [Journaux de plantage et Logcat](#crash-and-logcat-logs) pour plus de détails sur les différences entre les types de journaux.
2. Dans le menu contextuel, choisissez Gmail ou votre application de messagerie préférée. L'e-mail sera généré automatiquement.
3. Appuyez sur le bouton *Envoyer*.

![Envoyer les journaux de plantage depuis Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Envoyer les journaux de plantage depuis Android 2](@site/static/img/troubleshooting/send_logs_andr_2.png)


### Envoyer des journaux depuis les appareils iOS {#send-logs-from-ios-devices}

1. Les journaux des appareils iOS peuvent être envoyés :

    - Automatiquement.
        - Naviguez dans l'application OsmAnd *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Ensuite, en utilisant votre application de messagerie, nous vous recommandons d'envoyer les journaux à `crash@osmand.net`.

    - Manuellement.
        - Naviguez dans l'application système iOS *Fichiers → Sur mon iPhone (ou Sur mon iPad) → OsmAnd Maps → Journaux*.

    ![Envoyer les journaux de plantage iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Envoyer les journaux de plantage iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Envoyez les journaux et les données d'autorisation au [format IPS](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) :
    - Allez dans *Réglages iOS → Analyse → Données d'analyse → Fichier au format ips OsmAnd Maps* (jusqu'à iOS 17).
    - *Réglages iOS → Confidentialité et sécurité → Analyse et améliorations → Données d'analyse → Fichier au format ips OsmAnd Maps* (à partir d'iOS 18).
    - Ensuite, en utilisant votre application de messagerie, nous vous recommandons d'envoyer les journaux à `crash@osmand.net`.

    ![Envoyer les journaux de plantage iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Envoyer les journaux de plantage iOS 2](@site/static/img/troubleshooting/log_1_ios.png)


## Envoyer des fichiers Tombstone (Android) {#send-tombstone-files-android}

:::caution Crucial
Pour les utilisateurs avancés uniquement !
:::

Dans certains cas complexes ou inhabituels, des *[fichiers Tombstone](https://source.android.com/docs/core/tests/debug)* peuvent être nécessaires. Ces fichiers fournissent des traces de pile détaillées pour tous les threads d'un processus en cours de plantage (pas seulement celui qui a causé l'erreur), une carte mémoire complète et une liste de tous les descripteurs de fichiers ouverts. Les fichiers Tombstone sont essentiels pour le débogage et le diagnostic des problèmes liés au code natif sur la plateforme Android.


### Utilisation de votre appareil {#using-your-device}

Pour exporter les fichiers tombstone, vous devez générer un rapport de bogue à l'aide des paramètres système Android :

1. Activez les *Options pour les développeurs* (cet écran est masqué par défaut).
    - Allez dans *Paramètres → À propos du téléphone → Informations sur le logiciel* (ce chemin est valable pour les appareils Samsung).
    - Appuyez sept fois sur *Numéro de build* jusqu'à ce qu'une fenêtre contextuelle confirme que le mode développeur est actif.

2. Allez dans *Options pour les développeurs*, généralement situées en bas de la liste des paramètres. Vous pouvez également utiliser la fonction de recherche.
    - Appuyez sur l'option *Prendre un rapport de bogue*.
    - Sélectionnez le type de rapport de bogue et appuyez sur *Rapport*.
  
Une fois le rapport de bogue prêt, vous recevrez une notification. Appuyez sur la zone de notification pour télécharger le rapport sur votre appareil. Décompressez le fichier et envoyez les fichiers tombstone à l'équipe de développeurs OsmAnd (e-mail : `crash@osmand.net`).

![Envoyer les journaux de plantage depuis Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Envoyer les journaux de plantage depuis Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Veuillez noter que les rapports de bogue peuvent contenir des données privées, y compris l'utilisation de l'application ou la localisation.
:::

### Utilisation d'ADB {#using-adb}

L'Android Debugging Bridge (ADB) est un outil en ligne de commande qui permet aux développeurs de déboguer leurs applications. Pour utiliser ADB pour exporter les fichiers tombstone, vous devrez d'abord le télécharger et l'installer. Suivez les instructions fournies sur le [site officiel des développeurs Android](https://developer.android.com/tools/releases/platform-tools).

#### Préparer votre appareil {#prepare-your-device}

Assurez-vous que les *Options pour les développeurs* sont activées (cet écran est masqué par défaut) et que le *Débogage USB* est activé :

- Naviguez vers *Paramètres → À propos du téléphone → Informations sur le logiciel*.
- Appuyez sept fois sur *Numéro de build* jusqu'à ce qu'une fenêtre contextuelle confirme que le mode développeur est actif.
- Dans les *Options pour les développeurs*, activez le *Débogage USB*.

Ensuite, connectez votre appareil à votre poste de travail via USB. S'il s'agit de la première connexion, une fenêtre contextuelle apparaîtra demandant l'autorisation d'autoriser le débogage.

#### Générer un rapport de bogue {#generate-bug-report}

1. Ouvrez un terminal en ligne de commande. Sur Mac ou Linux, utilisez l'application *Terminal*, et sur Windows, utilisez l'*Invite de commandes*.
2. Naviguez vers le dossier platform-tools où se trouve ADB à l'aide de la commande *cd* (par exemple, « cd /Users/NomUtilisateur/Téléchargements/Outils »).
3. Générez le rapport de bogue :
   - Sur Mac : ```adb bugreport```
   - Sur Windows : ```adb.exe bugreport```
4. Attendez quelques minutes que le rapport soit généré. Le fichier résultant sera enregistré dans le dossier platform-tools.
5. Décompressez le fichier.
6. Trouvez le dossier *tombstones* avec des fichiers comme *tombstone_00*, *tombstone_01*, et similaires.
7. Envoyez les fichiers tombstone à `crash@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Utilisation d'appareils rootés ou de l'émulateur Android Studio {#using-rooted-devices-or-android-studio-emulator}

- Avec un accès root à votre appareil, vous pouvez ouvrir directement le dossier */data/tombstones*.  

- Dans Android Studio, utilisez l'émulateur pour naviguer vers *Explorateur de fichiers de l'appareil* et trouver le dossier /data/tombstones. À l'intérieur, vous trouverez des fichiers nommés comme *tombstone_00*, *tombstone_01*, et d'autres. Téléchargez ces fichiers et envoyez-les à `crash@osmand.net`.

Pour plus de détails sur les rapports de bogue, consultez la [documentation Android](https://developer.android.com/studio/debug/bug-report).