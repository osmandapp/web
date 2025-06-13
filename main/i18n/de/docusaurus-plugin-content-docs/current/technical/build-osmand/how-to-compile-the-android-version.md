---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Kompilieren der Android-Version {#how-to-compile-the-android-version}


**Android SDK**:
Min. SDK-Version: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Ziel-SDK-Version: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Ziel-SDK-Tools: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Kompilieren der Android-APK {#compile-android-apk}
1. Richten Sie zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** ein.
2. **Gradle** (Befehlszeile):
    - Geben Sie die **Umgebungsvariablen** an. ANDROID_SDK und ANDROID_HOME sind die Orte, an denen Android Studio die Dinge ablegt:
    ```
    export ANDROID_SDK=/[Ihr-Pfad]/Android/sdk
    export ANDROID_NDK=/[Ihr-Pfad]/android-ndk-23
    export ANDROID_HOME=/[Ihr-Pfad]/Android/sdk
    ```
    - Kompilieren Sie mit der Befehlszeile
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. Sie können unseren [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) verwenden, um Builds mit dem Nightly Build kompatibel zu machen.


### Gradle-Aufgaben / Flavors {#gradle-tasks--flavors}

Die Gradle-Aufgabe **assembleNightlyFreeLegacyFatDebug** erstellt eine APK unter *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Der Aufgabenname *assembleNightlyFreeLegacyFatDebug* besteht aus:
- assemble - Standardaufgabe zum Erstellen einer APK
- nightlyFree - unten beschriebener Build-Flavor
- legacy - legacy / opengl / opengldebug - definiert, ob die erzeugte APK native Bibliotheken zur Verwendung des OpenGL Kartenrenderings enthält oder nicht. Weitere Informationen im OsmAnd-Entwicklungs-Plugin.
- fat - fat (alle nativen Ziele) / armv7 / arm64 / x86 / armonly - wählt aus, welche nativen Bibliotheken in der APK enthalten sein werden.
- debug - debug / release - Standardaufgabe

Um ein Bundle zu erstellen, können Sie **`bundle${FLAVOR}LegacyFatRelease`** verwenden.


| Flavor | Paket | Beschreibung
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Nightly Free Build, der neben beiden GPlay-Versionen für Test- und Erkundungszwecke installiert werden kann
| androidFull | net.osmand.plus | Die vollständige OsmAnd~-Version kann für F-Droid-Builds verwendet werden. Verwendet keine GooglePlay-Dienste.
| gplayFree | net.osmand | Google Play OsmAnd-Version - verwendet GooglePlay-Dienste.
| gplayFull | net.osmand.plus | Google Play OsmAnd+-Version - verwendet GooglePlay-Dienste.
| huawei | net.osmand | Spezieller Build für den Huawei-Markt - verwendet Huawei-Dienste, aber nicht Google Play

### Debugging {#debug}

#### NDK-Debugging für die Legacy-Native-Bibliothek (OsmAnd-core-legacy) aktivieren {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

Kommentieren Sie in OsmAnd/OsmAnd/jni/Application.mk die Zeilen aus
```
APP_OPTIM := debug
APP_DEBUG := true
```
Fügen Sie Debug-Symbole in der Android Studio-Projektkonfiguration hinzu. Gehen Sie dazu zu Edit Configuration / wählen Sie im linken Menü Android App "OsmAnd" / wählen Sie auf der rechten Seite den Tab "Debugger". Und fügen Sie OsmAnd/obj/local hinzu, wo Build-Bibliotheken für verschiedene Konfigurationen (arm64-v8a, armeabi-v7a, x86, x86_64) erstellt werden.


## Kompilieren der OpenGL-Bibliothek {#compile-opengl-library}

Die OpenGL-Bibliothek wird für Ziele wie assembleNightlyFree**Opengl**FatDebug benötigt und wird standardmäßig aus dem [OsmAnd Ivy Repository](https://builder.osmand.net/ivy/net.osmand/) heruntergeladen - [Gradle-Aufgabe](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Für die lokale Entwicklung müssen Sie diese Bibliothek möglicherweise kompilieren und in einem lokalen Ivy-Repository veröffentlichen.

1. Richten Sie zuerst die **Entwicklungsumgebung** ein, siehe [Entwicklungsumgebung](./setup-the-dev-environment).
2. Installieren Sie die Tools.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (oder kompatibel).
    - Lokaler C++-Compiler (vorzugsweise clang).
    - Bash-Tools: wget, curl, python ...
3. **Gradle** (Befehlszeile):
    - Geben Sie die **Umgebungsvariablen** an. ANDROID_SDK und ANDROID_HOME sind die Orte, an denen Android Studio die Dinge ablegt:
    ```
    export ANDROID_SDK=/[Ihr-Pfad]/Android/sdk
    export ANDROID_NDK=/[Ihr-Pfad]/android-ndk-23
    export ANDROID_HOME=/[Ihr-Pfad]/Android/sdk
    ```
    - Kompilieren Sie mit der [Gradle-Build-Aufgabe](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Hinweis**: Die Kompilierung kann lange dauern und Sie benötigen wahrscheinlich nicht alle Plattformen. Sie können daher unerwünschte Architekturen im Skript [auskommentieren](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) und nur für 1 Plattform (x86, x86_64, arm, arm64) debuggen oder freigeben.

### Debugging {#debug}

Wird noch vervollständigt: Wie man Android NDK-Debugging einrichtet.

## Kompilieren der API-Beispiele {#compile-api-samples}
<IncompleteArticle/>

Es gibt 2 Arten von Beispiel-Apps, die von OsmAnd bereitgestellt werden. Sie sind alle im [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) Github-Repository enthalten und werden regelmäßig im [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/) kompiliert.

Kompilierungsskript:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [die einfachste Beispielanwendung](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk), die über die AIDL-Schnittstelle und Intents mit dem bereits installierten OsmAnd interagiert.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [eine Beispielanwendung](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk), die OsmAnd als SDK vollständig integriert hat. Ermöglicht die Verwendung aller internen APIs.

**[Mehr lesen](../osmand-api-sdk/index.md)**.