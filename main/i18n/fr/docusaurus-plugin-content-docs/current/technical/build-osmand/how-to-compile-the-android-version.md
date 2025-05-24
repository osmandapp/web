---
source-hash: 89e499909bbc779cd67dcba77868af8c03fa06282c37ac39b7cccd35351071df 
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Comment compiler la version Android


**Android SDK** :
Version SDK minimale : [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Version SDK cible : [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Outils SDK cibles : [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK** : 23.


## Compiler l'apk Android
1. Configurez d'abord l'**[environnement de développement](setup-the-dev-environment.md)**.
2. **Gradle** (ligne de commande) :
    - Spécifiez les **variables d'environnement**. ANDROID_SDK et ANDROID_HOME sont les emplacements où Android Studio place les éléments :
    ```
    export ANDROID_SDK=/[votre-chemin]/Android/sdk
    export ANDROID_NDK=/[votre-chemin]/android-ndk-23
    export ANDROID_HOME=/[votre-chemin]/Android/sdk
    ```
    - Compilez avec la ligne de commande
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio** :
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. Vous pouvez utiliser notre [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) pour rendre les builds compatibles avec la nightly build.


### Tâches / saveurs Gradle

La tâche Gradle **assembleNightlyFreeLegacyFatDebug** produira l'apk dans *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Le nom de la tâche *assembleNightlyFreeLegacyFatDebug* se compose de :
- assemble - tâche standard pour construire l'apk
- nightlyFree - saveur de build décrite ci-dessous
- legacy - legacy / opengl / opengldebug - définit si l'apk produit aura des bibliothèques natives pour utiliser le rendu de carte opengl ou non. Plus d'informations dans le plugin de développement OsmAnd.
- fat - fat (toutes les cibles natives) / armv7 / arm64 / x86 / armonly - sélectionne les bibliothèques natives qui seront dans l'apk.
- debug - debug / release - tâche standard

Pour construire un bundle, vous pouvez utiliser **bundle${FLAVOR}LegacyFatRelease**.


| Saveur | Paquet | Description
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Build gratuite nocturne qui peut être installée à côté des deux versions GPlay pour les tests et l'exploration
| androidFull | net.osmand.plus | La version complète d'OsmAnd~ peut être utilisée pour les builds F-Droid. N'utilise pas les services GooglePlay.
| amazonFree | net.osmand | Amazon OsmAnd - n'utilise pas les services GooglePlay
| amazonFull | net.osmand.plus | Amazon OsmAnd+ - n'utilise pas les services GooglePlay
| gplayFree | net.osmand | Version Google Play OsmAnd - utilise les services GooglePlay.
| gplayFull | net.osmand.plus | Version Google Play OsmAnd+ - utilise les services GooglePlay.
| huawei | net.osmand | Build spéciale pour le marché Huawei - utilise les services Huawei mais pas Google Play

### Débogage

#### Activer le débogage NDK pour la bibliothèque native héritée (OsmAnd-core-legacy)

Dans OsmAnd/OsmAnd/jni/Application.mk, décommentez les lignes
```
APP_OPTIM := debug
APP_DEBUG := true
```
Ajoutez des symboles de débogage dans la configuration du projet Android Studio. Pour cela, allez dans Edit Configuration / dans le menu de gauche, sélectionnez Android App "OsmAnd" / sur le côté droit, sélectionnez l'onglet "Debugger". Et ajoutez OsmAnd/obj/local où les bibliothèques de build pour différentes configurations (arm64-v8a, armeabi-v7a, x86, x86_64).


## Compiler la bibliothèque OpenGL

La bibliothèque Opengl est nécessaire pour des cibles comme assembleNightlyFree**Opengl**FatDebug et est par défaut téléchargée depuis le [dépôt ivy OsmAnd](https://builder.osmand.net/ivy/net.osmand/) - [tâche gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Pour le développement local, vous pourriez avoir besoin de compiler ces bibliothèques et de les publier dans un dépôt ivy local.

1. Configurez d'abord l'**environnement de développement**, voir {% link /setup-the-dev-environment %}.
2. Installez les outils.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (ou compatible).
    - Compilateur c++ local (de préférence clang).
    - Outils Bash : wget, curl, python ...
3. **Gradle** (ligne de commande) :
    - Spécifiez les **variables d'environnement**. ANDROID_SDK et ANDROID_HOME sont les emplacements où Android Studio place les éléments :
    ```
    export ANDROID_SDK=/[votre-chemin]/Android/sdk
    export ANDROID_NDK=/[votre-chemin]/android-ndk-23
    export ANDROID_HOME=/[votre-chemin]/Android/sdk
    ```
    - Compilez avec la [tâche de build gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```

**Astuce** : La compilation peut prendre beaucoup de temps et vous n'aurez probablement pas besoin de toutes les plateformes, vous pouvez donc [commenter](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) les architectures indésirables dans le script et ne construire que pour 1 plateforme (x86, x86_64, arm, arm64) en mode debug ou release.

### Débogage

À compléter : comment configurer le débogage Android ndk.

## Compiler les exemples d'API
<IncompleteArticle/>

Il existe 2 types d'applications d'exemple fournies par OsmAnd, elles sont toutes représentées dans le dépôt Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) et compilées régulièrement sur [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Script de compilation :
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [l'application d'exemple la plus simple](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) qui interagit avec OsmAnd déjà installé via l'interface AIDL et les Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [une application d'exemple](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) qui a OsmAnd entièrement intégré en tant que SDK. Permet d'utiliser toutes les API internes.

**[En savoir plus](../osmand-api-sdk/index.md)**.

