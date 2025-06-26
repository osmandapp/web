---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Jak skompilować wersję Androida {#how-to-compile-the-android-version}


**Android SDK**:
Minimalna wersja SDK: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Docelowa wersja SDK: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Docelowe narzędzia SDK: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Kompilacja pliku Android apk {#compile-android-apk}
1. Najpierw skonfiguruj **[środowisko programistyczne](setup-the-dev-environment.md)**.
2. **Gradle** (wiersz poleceń):
    - Określ **zmienne środowiskowe**. ANDROID_SDK i ANDROID_HOME to miejsca, w których Android Studio umieszcza pliki:
    ```
    export ANDROID_SDK=/[twoja-ścieżka]/Android/sdk
    export ANDROID_NDK=/[twoja-ścieżka]/android-ndk-23
    export ANDROID_HOME=/[twoja-ścieżka]/Android/sdk
    ```
    - Kompiluj za pomocą wiersza poleceń
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 importuj projekt Androida i uruchom moduł `android.OsmAnd`
 ```
4. Możesz użyć naszego [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores), aby kompilacje były kompatybilne z kompilacją nocną.


### Zadania/warianty Gradle {#gradle-tasks--flavors}

Zadanie Gradle **assembleNightlyFreeLegacyFatDebug** wygeneruje plik apk w *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Nazwa zadania *assembleNightlyFreeLegacyFatDebug* składa się z:
- assemble - standardowe zadanie do budowania apk
- nightlyFree - wariant kompilacji opisany poniżej
- legacy - legacy / opengl / opengldebug - określa, czy wygenerowany plik apk będzie zawierał natywne biblioteki do renderowania mapy opengl, czy nie. Więcej informacji w wtyczce programistycznej OsmAnd.
- fat - fat (wszystkie natywne cele) / armv7 / arm64 / x86 / armonly - wybierz, które natywne biblioteki znajdą się w pliku apk.
- debug - debug / release - standardowe zadanie

Aby zbudować pakiet, możesz użyć **`bundle${FLAVOR}LegacyFatRelease`**.


| Wariant | Pakiet | Opis
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Nocna darmowa kompilacja, którą można zainstalować obok obu wersji GPlay do celów testowych i eksploracyjnych
| androidFull | net.osmand.plus | Pełna wersja OsmAnd~ może być używana do kompilacji F-Droid. Nie korzysta z usług GooglePlay.
| gplayFree | net.osmand | Wersja OsmAnd z Google Play - korzysta z usług GooglePlay.
| gplayFull | net.osmand.plus | Wersja OsmAnd+ z Google Play - korzysta z usług GooglePlay.
| huawei | net.osmand | Specjalna kompilacja dla rynku Huawei - korzysta z usług Huawei, ale nie z Google Play

### Debugowanie {#debug}

#### Włącz debugowanie NDK dla starszej biblioteki natywnej (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

W OsmAnd/OsmAnd/jni/Application.mk odkomentuj wiersze
```
APP_OPTIM := debug
APP_DEBUG := true
```
Dodaj symbole debugowania w konfiguracji projektu Android Studio. W tym celu przejdź do Edytuj konfigurację / w lewym menu wybierz Aplikacja Android "OsmAnd" / po prawej stronie wybierz zakładkę "Debugger". I dodaj OsmAnd/obj/local, gdzie buduj biblioteki dla różnych konfiguracji (arm64-v8a, armeabi-v7a, x86, x86_64).


## Kompilacja biblioteki OpenGL {#compile-opengl-library}

Biblioteka Opengl jest potrzebna dla celów takich jak assembleNightlyFree**Opengl**FatDebug i domyślnie pobierana z [repozytorium OsmAnd ivy](https://builder.osmand.net/ivy/net.osmand/) - [zadanie gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Do lokalnego rozwoju może być konieczne skompilowanie tych bibliotek i opublikowanie ich w lokalnym repozytorium ivy.

1. Najpierw skonfiguruj **środowisko programistyczne**, zobacz [środowisko programistyczne](./setup-the-dev-environment).
2. Zainstaluj narzędzia.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (lub kompatybilny).
    - Lokalny kompilator c++ (preferowany clang).
    - Narzędzia Bash: wget, curl, python ...
3. **Gradle** (wiersz poleceń):
    - Określ **zmienne środowiskowe**. ANDROID_SDK i ANDROID_HOME to miejsca, w których Android Studio umieszcza pliki:
    ```
    export ANDROID_SDK=/[twoja-ścieżka]/Android/sdk
    export ANDROID_NDK=/[twoja-ścieżka]/android-ndk-23
    export ANDROID_HOME=/[twoja-ścieżka]/Android/sdk
    ```
    - Kompiluj za pomocą [zadania kompilacji gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Wskazówka**: Kompilacja może zająć dużo czasu i prawdopodobnie nie będziesz potrzebować wszystkich platform, więc możesz [zakomentować](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) niechciane architektury w skrypcie i kompilować tylko dla 1 platformy (x86, x86_64, arm, arm64) w trybie debugowania lub wydania.

### Debugowanie {#debug}

Do uzupełnienia: jak skonfigurować debugowanie Android NDK.

## Kompilacja przykładów API {#compile-api-samples}
<IncompleteArticle/>

OsmAnd udostępnia 2 typy przykładowych aplikacji, wszystkie są reprezentowane w repozytorium GitHub [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) i regularnie kompilowane w [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Skrypt kompilacji:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [najprostsza przykładowa aplikacja](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk), która współdziała z już zainstalowanym OsmAnd za pośrednictwem interfejsu AIDL i Intentów.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [przykładowa aplikacja](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) ma w pełni zintegrowany OsmAnd jako SDK. Pozwala na korzystanie ze wszystkich wewnętrznych interfejsów API.

**[Czytaj więcej](../osmand-api-sdk/index.md)**.