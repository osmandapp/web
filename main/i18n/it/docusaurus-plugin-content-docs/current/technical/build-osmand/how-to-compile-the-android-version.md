---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Come compilare la versione Android {#how-to-compile-the-android-version}


**Android SDK**:
Versione minima sdk: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Versione target sdk: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Strumenti target sdk: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Compilare apk Android {#compile-android-apk}
1. Per prima cosa configura l'**[ambiente di sviluppo](setup-the-dev-environment.md)**.
2. **Gradle** (riga di comando):
    - Specifica le **variabili d'ambiente**. ANDROID_SDK e ANDROID_HOME sono dove Android Studio posiziona le cose:
    ```
    export ANDROID_SDK=/[il-tuo-percorso]/Android/sdk
    export ANDROID_NDK=/[il-tuo-percorso]/android-ndk-23
    export ANDROID_HOME=/[il-tuo-percorso]/Android/sdk
    ```
    - Compila con la riga di comando
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 importa il progetto Android ed esegui il flavor del modulo `android.OsmAnd`
 ```
4. Puoi usare il nostro [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) per rendere le build compatibili con la build nightly.


### Attività/flavor di Gradle {#gradle-tasks--flavors}

L'attività Gradle **assembleNightlyFreeLegacyFatDebug** produrrà l'apk in *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Il nome dell'attività *assembleNightlyFreeLegacyFatDebug* è composto da:
- assemble - attività standard per costruire apk
- nightlyFree - build flavor descritto di seguito
- legacy - legacy / opengl / opengldebug - definisce se l'apk prodotto avrà librerie native per utilizzare il rendering della mappa opengl o meno. Maggiori informazioni nel plugin di sviluppo OsmAnd.
- fat - fat (tutti i target nativi) / armv7 / arm64 / x86 / armonly - seleziona quali librerie native saranno all'interno dell'apk.
- debug - debug / release - attività standard

Per costruire il bundle puoi usare **`bundle${FLAVOR}LegacyFatRelease`**.


| Flavor | Pacchetto | Descrizione
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Build nightly gratuita che può essere installata accanto a entrambe le versioni GPlay per esigenze di test ed esplorazione
| androidFull | net.osmand.plus | La versione completa di OsmAnd~ può essere utilizzata per le build F-Droid. Non utilizza i servizi GooglePlay.
| gplayFree | net.osmand | Versione Google Play OsmAnd - utilizza i servizi GooglePlay.
| gplayFull | net.osmand.plus | Versione Google Play OsmAnd+ - utilizza i servizi GooglePlay.
| huawei | net.osmand | Build speciale per il mercato Huawei - utilizza i servizi Huawei ma non Google Play

### Debug {#debug}

#### Abilita il debug NDK per la libreria nativa legacy (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

In OsmAnd/OsmAnd/jni/Application.mk decommenta le righe
```
APP_OPTIM := debug
APP_DEBUG := true
```
Aggiungi i simboli di debug nella configurazione del progetto Android Studio. Per fare ciò vai su Modifica configurazione / nel menu a sinistra seleziona App Android "OsmAnd" / nel lato destro seleziona la scheda "Debugger". E aggiungi OsmAnd/obj/local dove sono costruite le librerie per diverse configurazioni (arm64-v8a, armeabi-v7a, x86, x86_64).


## Compila la libreria OpenGL {#compile-opengl-library}

La libreria Opengl è necessaria per target come assembleNightlyFree**Opengl**FatDebug e per impostazione predefinita viene scaricata dal [repository ivy di OsmAnd](https://builder.osmand.net/ivy/net.osmand/) - [attività gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Per lo sviluppo locale potresti dover compilare quelle librerie e pubblicarle nel repository ivy locale.

1. Per prima cosa configura l'**ambiente di sviluppo**, vedi [ambiente di sviluppo](./setup-the-dev-environment).
2. Installa gli strumenti.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (o compatibile).
    - Compilatore c++ locale (preferibilmente clang).
    - Strumenti Bash: wget, curl, python ...
3. **Gradle** (riga di comando):
    - Specifica le **variabili d'ambiente**. ANDROID_SDK e ANDROID_HOME sono dove Android Studio posiziona le cose:
    ```
    export ANDROID_SDK=/[il-tuo-percorso]/Android/sdk
    export ANDROID_NDK=/[il-tuo-percorso]/android-ndk-23
    export ANDROID_HOME=/[il-tuo-percorso]/Android/sdk
    ```
    - Compila con l'[attività di build gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```

**Suggerimento**: la compilazione potrebbe richiedere molto tempo e probabilmente non avrai bisogno di tutte le piattaforme, quindi puoi [commentare](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) le architetture indesiderate nello script e costruire solo per 1 piattaforma (x86, x86_64, arm, arm64) debug o release.

### Debug {#debug}

Da completare: come configurare il debug Android ndk.

## Compila gli esempi API {#compile-api-samples}
<IncompleteArticle/>

Ci sono 2 tipi di app di esempio fornite da OsmAnd, sono tutte rappresentate nel repository Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) e compilate regolarmente su [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Script di compilazione:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [l'applicazione di esempio più semplice](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) che interagisce con OsmAnd già installato tramite interfaccia AIDL e Intent.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [un'applicazione di esempio](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) che ha OsmAnd completamente integrato al suo interno come SDK. Consente di utilizzare tutte le API interne.

**[Leggi di più](../osmand-api-sdk/index.md)**.