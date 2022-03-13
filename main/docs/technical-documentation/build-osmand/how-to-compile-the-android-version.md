---
title: How to Compile the Android Version
versions: '*'
---

**Android SDK**:
Min sdk version: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Target sdk version: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Target sdk tools: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Compile Android apk
1. First setup the **development environment**, see {% link /setup-the-dev-environment %}.
2. **Gradle** (command line):
    -  Specify  **environment variables**.   ANDROID_SDK and ANDROID_HOME are where Android studio places things:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - Compile with command line 
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. You may use our [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) to make builds compatible with the nightly build.


### Gradle tasks / flavors

Gradle task **assembleNightlyFreeLegacyFatDebug** will produce apk at *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Task name *assembleNightlyFreeLegacyFatDebug* consists of :
- assemble - standard task to build apk
- nightlyFree - build flavor described below
- legacy - legacy / opengl / opengldebug - defines whether produced apk will have native libraries to use opengl map rendering or not. More information in Development plugin.
- fat - fat (all native targets) / armv7 / arm64 / x86 / armonly - select which native libraries will be inside apk.
- debug - debug / release - standard task

To build bundle you could use **bundle${FLAVOR}LegacyFatRelease**.


| Flavor |  Package | Description
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Nightly free build that could be installed next to both of GPlay versions for testing and exploring needs
| androidFull | net.osmand.plus | Full OsmAnd~ version could be used for F-Droid builds. Doesn't use GooglePlay services.
| amazonFree | net.osmand | Amazon OsmAnd - doesn't use GooglePlay services 
| amazonFull | net.osmand.plus | Amazon OsmAnd+ - doesn't use GooglePlay services
| gplayFree | net.osmand | Google Play OsmAnd version - uses GooglePlay services.
| gplayFull | net.osmand.plus | Google Play OsmAnd+ version - uses GooglePlay services.
| huawei | net.osmand | Special build for Huawei market - uses Huawei services but not Google Play

### Debug

#### Enable NDK debug for legacy native library (OsmAnd-core-legacy)

In  OsmAnd/OsmAnd/jni/Application.mk uncomment lines
```
APP_OPTIM := debug
APP_DEBUG := true
```
Add debug symbols in the Android Studio project configuration. For this go to Edit Configuration / in the left menu select Android App "OsmAnd" / in right side select tab "Debugger". And add OsmAnd/obj/local where build libraries for different configuration (arm64-v8a, armeabi-v7a, x86, x86_64).


## Compile OpenGL library

Opengl library is needed for targtes like assembleNightlyFree**Opengl**FatDebug and by default downloaded from [OsmAnd ivy repository](https://builder.osmand.net/ivy/net.osmand/) - [gradle task](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). For local development you might need to compile those library and publish to local ivy repo.

1. First setup the **development environment**, see {% link /setup-the-dev-environment %}.
2. Install tools.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 3.0.*
    - Local c++ compiler (preferrable clang).
    - Bash tools: wget, curl, python ...
3. **Gradle** (command line):
    -  Specify  **environment variables**.   ANDROID_SDK and ANDROID_HOME are where Android studio places things:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - Compile with [gradle build task](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Hint**: Compilation might take a long time and you will likely don't need all platforms, so you can [comment out](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) unwanted arch in the script and build only for 1 platform (x86, x86_64, arm, arm64) debug or relelease.

### Debug

To be completed: how to set up android ndk debug.

## Compile API samples
{% data reusables.general.article-not-complete %}

There are 3 types of samples apps provided by OsmAnd, they are all represented in [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) Github repo and compiled regularly at [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Compile script:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-qt-core-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [the simplest sample application](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) that interacts with with already installed OsmAnd via AIDL interface and Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [a sample application](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) has fully integrated OsmAnd inside it as SDK. Allows to use all internall APIs.
- [OsmAnd-opengl-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-qt-core-sample) - [a sample application](https://download.osmand.net/latest-night-build/OsmAnd-qt-core-sample.apk) that has only core element such as Map  & routing integrated inside. Maps needs to be installed separately into Shared OsmAnd storage (OsmAnd itself is not used).

**[Read more](/development/build-osmand/osmand-api)**.
