---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Cómo compilar la versión de Android {#how-to-compile-the-android-version}

**Android SDK**:
Versión mínima del SDK: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Versión del SDK de destino: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Herramientas del SDK de destino: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.

## Compilar el APK de Android {#compile-android-apk}
1. Primero, configure el **[entorno de desarrollo](setup-the-dev-environment.md)**.
2. **Gradle** (línea de comandos):
    - Especifique las **variables de entorno**. ANDROID_SDK y ANDROID_HOME son donde Android Studio coloca las cosas:
    ```
    export ANDROID_SDK=/[su-ruta]/Android/sdk
    export ANDROID_NDK=/[su-ruta]/android-ndk-23
    export ANDROID_HOME=/[su-ruta]/Android/sdk
    ```
    - Compile con la línea de comandos
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 importe el proyecto de Android y ejecute el sabor del módulo `android.OsmAnd`
 ```
4. Puede usar nuestro [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) para que las compilaciones sean compatibles con la compilación nocturna.

### Tareas/sabores de Gradle {#gradle-tasks--flavors}

La tarea de Gradle **assembleNightlyFreeLegacyFatDebug** producirá el apk en *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. El nombre de la tarea *assembleNightlyFreeLegacyFatDebug* consiste en:
- assemble - tarea estándar para construir apk
- nightlyFree - sabor de compilación descrito a continuación
- legacy - legacy / opengl / opengldebug - define si el apk producido tendrá bibliotecas nativas para usar la renderización de mapas opengl o no. Más información en el complemento de desarrollo de OsmAnd.
- fat - fat (todos los objetivos nativos) / armv7 / arm64 / x86 / armonly - selecciona qué bibliotecas nativas estarán dentro del apk.
- debug - debug / release - tarea estándar

Para construir el paquete, puede usar **`bundle${FLAVOR}LegacyFatRelease`**.

| Sabor | Paquete | Descripción
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Compilación gratuita nocturna que se puede instalar junto a ambas versiones de GPlay para pruebas y exploración
| androidFull | net.osmand.plus | La versión completa de OsmAnd~ se puede usar para compilaciones de F-Droid. No usa los servicios de Google Play.
| gplayFree | net.osmand | Versión de OsmAnd de Google Play - usa los servicios de Google Play.
| gplayFull | net.osmand.plus | Versión de OsmAnd+ de Google Play - usa los servicios de Google Play.
| huawei | net.osmand | Compilación especial para el mercado de Huawei - usa los servicios de Huawei pero no Google Play

### Depuración {#debug}

#### Habilitar la depuración de NDK para la biblioteca nativa heredada (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

En OsmAnd/OsmAnd/jni/Application.mk, descomente las líneas
```
APP_OPTIM := debug
APP_DEBUG := true
```
Agregue símbolos de depuración en la configuración del proyecto de Android Studio. Para esto, vaya a Editar configuración / en el menú de la izquierda, seleccione la aplicación de Android "OsmAnd" / en el lado derecho, seleccione la pestaña "Depurador". Y agregue OsmAnd/obj/local donde se construyen las bibliotecas para diferentes configuraciones (arm64-v8a, armeabi-v7a, x86, x86_64).

## Compilar la biblioteca OpenGL {#compile-opengl-library}

La biblioteca Opengl es necesaria para objetivos como assembleNightlyFree**Opengl**FatDebug y, por defecto, se descarga del [repositorio ivy de OsmAnd](https://builder.osmand.net/ivy/net.osmand/) - [tarea de gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Para el desarrollo local, es posible que deba compilar esas bibliotecas y publicarlas en el repositorio ivy local.

1. Primero, configure el **entorno de desarrollo**, consulte [entorno de desarrollo](./setup-the-dev-environment).
2. Instale las herramientas.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (o compatible).
    - Compilador c++ local (preferiblemente clang).
    - Herramientas Bash: wget, curl, python ...
3. **Gradle** (línea de comandos):
    - Especifique las **variables de entorno**. ANDROID_SDK y ANDROID_HOME son donde Android Studio coloca las cosas:
    ```
    export ANDROID_SDK=/[su-ruta]/Android/sdk
    export ANDROID_NDK=/[su-ruta]/android-ndk-23
    export ANDROID_HOME=/[su-ruta]/Android/sdk
    ```
    - Compile con la [tarea de compilación de gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```

**Sugerencia**: La compilación puede llevar mucho tiempo y es probable que no necesite todas las plataformas, por lo que puede [comentar](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) la arquitectura no deseada en el script y compilar solo para 1 plataforma (x86, x86_64, arm, arm64) depuración o lanzamiento.

### Depuración {#debug}

Por completar: cómo configurar la depuración de Android NDK.

## Compilar ejemplos de API {#compile-api-samples}
<IncompleteArticle/>

OsmAnd proporciona 2 tipos de aplicaciones de ejemplo, todas representadas en el repositorio de Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) y compiladas regularmente en [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Script de compilación:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [la aplicación de ejemplo más simple](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) que interactúa con OsmAnd ya instalado a través de la interfaz AIDL e Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [una aplicación de ejemplo](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) tiene OsmAnd completamente integrado en ella como SDK. Permite usar todas las API internas.

**[Leer más](../osmand-api-sdk/index.md)**.