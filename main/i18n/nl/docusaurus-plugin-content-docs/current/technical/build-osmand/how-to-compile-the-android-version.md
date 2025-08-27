---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Hoe de Android-versie te compileren {#how-to-compile-the-android-version}


**Android SDK**:
Min sdk-versie: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Doel sdk-versie: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Doel sdk-tools: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Android apk compileren {#compile-android-apk}
1. Stel eerst de **[ontwikkelomgeving](setup-the-dev-environment.md)** in.
2. **Gradle** (opdrachtregel):
    - Specificeer **omgevingsvariabelen**. ANDROID_SDK en ANDROID_HOME zijn waar Android Studio dingen plaatst:
    ```
    export ANDROID_SDK=/[uw-pad]/Android/sdk
    export ANDROID_NDK=/[uw-pad]/android-ndk-23
    export ANDROID_HOME=/[uw-pad]/Android/sdk
    ```
    - Compileer met opdrachtregel
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. U kunt onze [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) gebruiken om builds compatibel te maken met de nightly build.


### Gradle-taken / -smaken {#gradle-tasks--flavors}

Gradle-taak **assembleNightlyFreeLegacyFatDebug** produceert apk op *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Taaknaam *assembleNightlyFreeLegacyFatDebug* bestaat uit:
- assemble - standaardtaak om apk te bouwen
- nightlyFree - build-smaak hieronder beschreven
- legacy - legacy / opengl / opengldebug - definieert of de geproduceerde apk native bibliotheken zal hebben om opengl-kaartweergave te gebruiken of niet. Meer informatie in de OsmAnd-ontwikkelingsplug-in.
- fat - fat (alle native targets) / armv7 / arm64 / x86 / armonly - selecteer welke native bibliotheken in apk zullen zitten.
- debug - debug / release - standaardtaak

Om een bundel te bouwen, kunt u **`bundle${FLAVOR}LegacyFatRelease`** gebruiken.


| Smaak | Pakket | Beschrijving
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Nightly free build die naast beide GPlay-versies kan worden geïnstalleerd voor test- en verkenningsdoeleinden
| androidFull | net.osmand.plus | Volledige OsmAnd~-versie kan worden gebruikt voor F-Droid-builds. Gebruikt geen GooglePlay-services.
| gplayFree | net.osmand | Google Play OsmAnd-versie - gebruikt GooglePlay-services.
| gplayFull | net.osmand.plus | Google Play OsmAnd+-versie - gebruikt GooglePlay-services.
| huawei | net.osmand | Speciale build voor Huawei-markt - gebruikt Huawei-services maar geen Google Play

### Debuggen {#debug}

#### NDK-debuggen inschakelen voor legacy native bibliotheek (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

In OsmAnd/OsmAnd/jni/Application.mk de regels uncommenten
```
APP_OPTIM := debug
APP_DEBUG := true
```
Voeg debug-symbolen toe in de Android Studio-projectconfiguratie. Ga hiervoor naar Edit Configuration / selecteer in het linkermenu Android App "OsmAnd" / selecteer aan de rechterkant het tabblad "Debugger". En voeg OsmAnd/obj/local toe waar bibliotheken voor verschillende configuraties (arm64-v8a, armeabi-v7a, x86, x86_64) worden gebouwd.


## OpenGL-bibliotheek compileren {#compile-opengl-library}

De OpenGL-bibliotheek is nodig voor doelen zoals assembleNightlyFree**Opengl**FatDebug en wordt standaard gedownload van [OsmAnd ivy repository](https://builder.osmand.net/ivy/net.osmand/) - [gradle task](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Voor lokale ontwikkeling moet u mogelijk die bibliotheek compileren en publiceren naar de lokale ivy-repo.

1. Stel eerst de **ontwikkelomgeving** in, zie [ontwikkelomgeving](./setup-the-dev-environment).
2. Installeer tools.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (of compatibel).
    - Lokale c++ compiler (bij voorkeur clang).
    - Bash-tools: wget, curl, python ...
3. **Gradle** (opdrachtregel):
    - Specificeer **omgevingsvariabelen**. ANDROID_SDK en ANDROID_HOME zijn waar Android Studio dingen plaatst:
    ```
    export ANDROID_SDK=/[uw-pad]/Android/sdk
    export ANDROID_NDK=/[uw-pad]/android-ndk-23
    export ANDROID_HOME=/[uw-pad]/Android/sdk
    ```
    - Compileer met [gradle build task](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Hint**: Compilatie kan lang duren en u hebt waarschijnlijk niet alle platforms nodig, dus u kunt ongewenste architecturen in het script [uitcommentariëren](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) en alleen bouwen voor 1 platform (x86, x86_64, arm, arm64) debug of release.

### Debuggen {#debug}

Nog te voltooien: hoe Android NDK-debuggen in te stellen.

## API-voorbeelden compileren {#compile-api-samples}
<IncompleteArticle/>

Er zijn 2 soorten voorbeeld-apps die door OsmAnd worden geleverd, ze zijn allemaal vertegenwoordigd in de [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) Github-repo en worden regelmatig gecompileerd op [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Compileerscript:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [de eenvoudigste voorbeeldtoepassing](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) die communiceert met reeds geïnstalleerde OsmAnd via AIDL-interface en Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [een voorbeeldtoepassing](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) heeft OsmAnd volledig geïntegreerd als SDK. Maakt het mogelijk om alle interne API's te gebruiken.

**[Lees meer](../osmand-api-sdk/index.md)**.