---
source-hash: 49c536aaf8d6f4f285889d13e50c872cab450c0dc30630d0930692ab61fb581c
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

Les journaux de plantage sont des outils de diagnostic précieux qui aident les développeurs à identifier et à corriger les problèmes et les bogues qui provoquent le plantage ou le comportement inattendu de l'application. Il est possible de partager les journaux de votre appareil Android avec l'équipe de développement d'OsmAnd. Actuellement, les utilisateurs iOS n'ont qu'un seul type de journal de plantage à envoyer.


## Journaux de plantage et journaux d'application {#crash-and-app-logs}

OsmAnd vous permet d'envoyer deux types de données aux développeurs :

- **Journaux de plantage**. Générés lorsque l'application OsmAnd rencontre une erreur critique ou une exception qui la fait planter. Ces journaux fournissent des informations détaillées sur l'état de l'application pendant l'échec, y compris les données de build, les traces de pile, les messages d'erreur et d'autres détails pertinents.
- **Journaux de session/application en cours**. Un enregistrement du flux de journaux OsmAnd capturant divers événements et messages. Ces journaux aident les développeurs à surveiller le comportement de l'application, à suivre le flux d'exécution, à tracer des actions spécifiques et à enquêter sur les problèmes non liés aux plantages. Les journaux Logcat contiennent généralement des enregistrements d'activité depuis le dernier démarrage de l'application.

:::caution Vos informations privées
Soyez prudent lorsque vous envoyez des journaux d'application, car ils peuvent contenir des informations privées telles que la localisation de l'appareil, les requêtes de recherche, les résultats de construction d'itinéraire et les données de navigation.
:::


### Envoyer des journaux depuis l'application OsmAnd {#send-logs-from-osmand-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Envoyer les journaux de plantage depuis Android 1](@site/static/img/troubleshooting/send_logs_andr_5.webp)  ![Envoyer les journaux de plantage depuis Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Envoyer les journaux de plantage depuis iOS](@site/static/img/troubleshooting/send_logs_ios.webp)

</TabItem>

</Tabs>

1. Allez dans *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>* ou *<Translate android="true" ids="send_logcat_log"/>* (*Envoyer le journal d'application en cours* sur iOS). Selon votre situation, sélectionnez le type de journal approprié. Vous pouvez vous référer à la section [Journaux de plantage et journaux d'application](#crash-and-app-logs) pour plus de détails sur les différences entre les types de journaux.
2. Dans le menu contextuel, choisissez Gmail ou votre application de messagerie préférée. Nous vous recommandons d'envoyer les journaux à `support@osmand.net`.
3. Appuyez sur le bouton *Envoyer*.

<!--
### Send Logs from iOS Devices {#send-logs-from-ios-devices}

1. Logs from iOS devices can be sent:

    - Automatically.
        - Navigate to OsmAnd app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    - Manually.
        - Navigate to the iOS system app *Files → On my iPhone (or On my iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Send [IPS-format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) of logs and authorization data:
    - On iOS 15 or older: *Settings → Analytics → Analytics Data → OsmAnd Maps ips-format file*.
    - On iOS 16 or newer:  *Settings → Privacy & Security → Analytics & Improvements → Analytics Data → OsmAnd Maps ips-format file*.
    - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)
-->

## Histogramme de tas pour les problèmes de mémoire (Android) {#heap-histogram-for-memory-problems-android}

:::caution Android uniquement
:::

Un *histogramme de tas* est un tableau de ce qui remplit la mémoire Java de l'application : noms de classes avec le nombre d'objets et leurs tailles. Il aide les développeurs à trouver ce qui consomme la mémoire lorsque l'application devient lente, se fige ou se ferme après un certain temps. Il ne contient pas vos positions, les noms de vos traces ni vos requêtes de recherche. OsmAnd effectue un vidage complet de la mémoire sur l'appareil, le transforme en histogramme, puis supprime immédiatement le vidage.

La réalisation du vidage **fige l'application pendant 5 à 10 secondes**. Si vous touchez l'écran pendant ce temps, Android peut afficher *OsmAnd ne répond pas*. C'est pourquoi la collecte automatique est **désactivée par défaut**.

**Quand l'activer :**

- OsmAnd se ferme tout seul ou affiche *ne répond pas* de façon répétée, surtout après un certain temps d'utilisation ou lorsque vous ouvrez la recherche, la carte avec beaucoup de POI, ou *Mes lieux* avec beaucoup de traces.
- L'application devient plus lente au fil du temps et un redémarrage aide.
- Le rapport de plantage indique que l'application a manqué de mémoire (`OutOfMemoryError`).
- Le support d'OsmAnd vous a demandé de collecter un histogramme de tas.

**Quand le laisser désactivé :**

- L'utilisation quotidienne et la navigation, lorsque l'application fonctionne bien.
- Les plantages qui se produisent immédiatement à chaque démarrage, ou avec une action précise comme l'ouverture d'un fichier. Un [journal de plantage](#send-logs-from-osmand-app) ordinaire suffit dans ce cas.

**Comment le collecter et l'envoyer :**

1. Activez le [plugin de développement OsmAnd](../plugins/development.md) et allez à *Menu principal → Plugins → Développement OsmAnd → Paramètres → Mémoire → Mémoire Java*.
2. Dans le panneau *Vidage du tas*, choisissez l'une des options suivantes :
    - **Collecter en cas d'utilisation élevée**. L'histogramme est collecté automatiquement lorsque la mémoire Java est presque pleine, au maximum une fois toutes les 30 minutes, et il est joint au prochain rapport de plantage. Continuez à utiliser l'application normalement jusqu'à ce que le problème se reproduise.
    - **Collecter et analyser maintenant**. Collecte l'histogramme immédiatement et affiche le résultat. Utilisez-le lorsque l'application est déjà lente et que *Mémoire Java* indique une utilisation élevée.
3. Appuyez sur **Partager le rapport** pour envoyer le dernier rapport aux développeurs, ou envoyez-le depuis la boîte de dialogue de plantage au prochain démarrage de l'application.
4. Désactivez *Collecter en cas d'utilisation élevée* une fois le rapport envoyé.

![Mémoire Java Android](@site/static/img/troubleshooting/heap_histogram_andr_1.webp)  ![Panneau de vidage du tas Android](@site/static/img/troubleshooting/heap_histogram_andr_2.webp)


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
  
Une fois le rapport de bogue prêt, vous recevrez une notification. Appuyez sur la zone de notification pour télécharger le rapport sur votre appareil. Décompressez le fichier et envoyez les fichiers tombstone à l'équipe de développeurs OsmAnd (e-mail : `support@osmand.net`).

![Envoyer les journaux de plantage depuis Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Envoyer les journaux de plantage depuis Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Veuillez noter que les rapports de bogue peuvent contenir des données privées, y compris l'utilisation de l'application ou la localisation.
:::

### Utilisation d'ADB {#using-adb}

L'Android Debugging Bridge (ADB) est un outil en ligne de commande qui permet aux développeurs de déboguer leurs applications. Pour utiliser ADB pour exporter les fichiers tombstone, vous devez d'abord le télécharger et l'installer. Suivez les instructions fournies sur le [site officiel des développeurs Android](https://developer.android.com/tools/releases/platform-tools).

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
7. Envoyez les fichiers tombstone à `support@osmand.net`.

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

- Dans Android Studio, utilisez l'émulateur pour naviguer vers *Explorateur de fichiers de l'appareil* et trouver le dossier /data/tombstones. À l'intérieur, vous trouverez des fichiers nommés comme *tombstone_00*, *tombstone_01*, et d'autres. Téléchargez ces fichiers et envoyez-les à `support@osmand.net`.

Pour plus de détails sur les rapports de bogue, consultez la [documentation Android](https://developer.android.com/studio/debug/bug-report).