---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Como Compilar a Versão Android {#how-to-compile-the-android-version}


**Android SDK**:
Versão mínima do SDK: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Versão do SDK de destino: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Ferramentas do SDK de destino: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Compilar apk Android {#compile-android-apk}
1. Primeiro, configure o **[ambiente de desenvolvimento](setup-the-dev-environment.md)**.
2. **Gradle** (linha de comando):
    - Especifique as **variáveis de ambiente**. ANDROID_SDK e ANDROID_HOME são onde o Android Studio armazena as coisas:
    ```
    export ANDROID_SDK=/[seu-caminho]/Android/sdk
    export ANDROID_NDK=/[seu-caminho]/android-ndk-23
    export ANDROID_HOME=/[seu-caminho]/Android/sdk
    ```
    - Compile com a linha de comando
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. Você pode usar nosso [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) para tornar as compilações compatíveis com a compilação noturna.


### Tarefas / sabores do Gradle {#gradle-tasks--flavors}

A tarefa Gradle **assembleNightlyFreeLegacyFatDebug** produzirá o apk em *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. O nome da tarefa *assembleNightlyFreeLegacyFatDebug* consiste em:
- assemble - tarefa padrão para construir apk
- nightlyFree - sabor de compilação descrito abaixo
- legacy - legacy / opengl / opengldebug - define se o apk produzido terá bibliotecas nativas para usar a renderização de mapa opengl ou não. Mais informações no plugin de desenvolvimento do OsmAnd.
- fat - fat (todos os destinos nativos) / armv7 / arm64 / x86 / armonly - selecione quais bibliotecas nativas estarão dentro do apk.
- debug - debug / release - tarefa padrão

Para construir o pacote, você pode usar **`bundle${FLAVOR}LegacyFatRelease`**.


| Sabor | Pacote | Descrição
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Compilação noturna gratuita que pode ser instalada ao lado de ambas as versões do GPlay para testes e exploração
| androidFull | net.osmand.plus | A versão completa do OsmAnd~ pode ser usada para compilações F-Droid. Não usa os serviços do Google Play.
| gplayFree | net.osmand | Versão do Google Play OsmAnd - usa os serviços do Google Play.
| gplayFull | net.osmand.plus | Versão do Google Play OsmAnd+ - usa os serviços do Google Play.
| huawei | net.osmand | Compilação especial para o mercado Huawei - usa os serviços Huawei, mas não o Google Play

### Depuração {#debug}

#### Habilitar depuração NDK para biblioteca nativa legada (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

Em OsmAnd/OsmAnd/jni/Application.mk, descomente as linhas
```
APP_OPTIM := debug
APP_DEBUG := true
```
Adicione símbolos de depuração na configuração do projeto do Android Studio. Para isso, vá em Editar Configuração / no menu esquerdo selecione Android App "OsmAnd" / no lado direito selecione a aba "Debugger". E adicione OsmAnd/obj/local onde as bibliotecas são construídas para diferentes configurações (arm64-v8a, armeabi-v7a, x86, x86_64).


## Compilar biblioteca OpenGL {#compile-opengl-library}

A biblioteca Opengl é necessária para destinos como assembleNightlyFree**Opengl**FatDebug e, por padrão, é baixada do [repositório OsmAnd ivy](https://builder.osmand.net/ivy/net.osmand/) - [tarefa gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Para desenvolvimento local, você pode precisar compilar essas bibliotecas e publicá-las no repositório ivy local.

1. Primeiro, configure o **ambiente de desenvolvimento**, veja [ambiente de desenvolvimento](./setup-the-dev-environment).
2. Instale as ferramentas.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (ou compatível).
    - Compilador C++ local (preferencialmente clang).
    - Ferramentas Bash: wget, curl, python ...
3. **Gradle** (linha de comando):
    - Especifique as **variáveis de ambiente**. ANDROID_SDK e ANDROID_HOME são onde o Android Studio armazena as coisas:
    ```
    export ANDROID_SDK=/[seu-caminho]/Android/sdk
    export ANDROID_NDK=/[seu-caminho]/android-ndk-23
    export ANDROID_HOME=/[seu-caminho]/Android/sdk
    ```
    - Compile com [tarefa de compilação gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Dica**: A compilação pode levar muito tempo e você provavelmente não precisará de todas as plataformas, então você pode [comentar](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) as arquiteturas indesejadas no script e compilar apenas para 1 plataforma (x86, x86_64, arm, arm64) debug ou release.

### Depuração {#debug}

A ser completado: como configurar a depuração ndk do Android.

## Compilar exemplos de API {#compile-api-samples}
<IncompleteArticle/>

Existem 2 tipos de aplicativos de exemplo fornecidos pelo OsmAnd, todos representados no repositório Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) e compilados regularmente no [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Script de compilação:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [o aplicativo de exemplo mais simples](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) que interage com o OsmAnd já instalado via interface AIDL e Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [um aplicativo de exemplo](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) tem o OsmAnd totalmente integrado a ele como SDK. Permite usar todas as APIs internas.

**[Leia mais](../osmand-api-sdk/index.md)**.