---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Android Sürümü Nasıl Derlenir? {#how-to-compile-the-android-version}


**Android SDK**:
Minimum SDK sürümü: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Hedef SDK sürümü: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Hedef SDK araçları: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Android apk'yi Derle {#compile-android-apk}
1. İlk olarak **[geliştirme ortamını](setup-the-dev-environment.md)** kurun.
2. **Gradle** (komut satırı):
    - **Ortam değişkenlerini** belirtin. ANDROID_SDK ve ANDROID_HOME, Android Studio'nun dosyaları yerleştirdiği yerlerdir:
    ```
    export ANDROID_SDK=/[sizin-yolunuz]/Android/sdk
    export ANDROID_NDK=/[sizin-yolunuz]/android-ndk-23
    export ANDROID_HOME=/[sizin-yolunuz]/Android/sdk
    ```
    - Komut satırıyla derleyin
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 android projesini içe aktarın ve `android.OsmAnd` modülünü çalıştırın
 ```
4. Derlemeleri gece derlemesiyle uyumlu hale getirmek için [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) dosyamızı kullanabilirsiniz.


### Gradle görevleri / çeşitleri {#gradle-tasks--flavors}

Gradle görevi **assembleNightlyFreeLegacyFatDebug**, *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk* adresinde apk üretecektir. Görev adı *assembleNightlyFreeLegacyFatDebug* şunlardan oluşur:
- assemble - apk oluşturmak için standart görev
- nightlyFree - aşağıda açıklanan derleme çeşidi
- legacy - legacy / opengl / opengldebug - üretilen apk'nın opengl harita oluşturmayı kullanmak için yerel kütüphanelere sahip olup olmayacağını tanımlar. Daha fazla bilgi için OsmAnd geliştirme eklentisine bakın.
- fat - fat (tüm yerel hedefler) / armv7 / arm64 / x86 / armonly - apk içinde hangi yerel kütüphanelerin olacağını seçer.
- debug - debug / release - standart görev

Paket oluşturmak için **`bundle${FLAVOR}LegacyFatRelease`** kullanabilirsiniz.


| Çeşit | Paket | Açıklama
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Hem GPlay sürümleriyle birlikte test ve keşif ihtiyaçları için kurulabilen gece ücretsiz derlemesi
| androidFull | net.osmand.plus | Tam OsmAnd~ sürümü F-Droid derlemeleri için kullanılabilir. GooglePlay hizmetlerini kullanmaz.
| gplayFree | net.osmand | Google Play OsmAnd sürümü - GooglePlay hizmetlerini kullanır.
| gplayFull | net.osmand.plus | Google Play OsmAnd+ sürümü - GooglePlay hizmetlerini kullanır.
| huawei | net.osmand | Huawei pazarı için özel derleme - Google Play değil, Huawei hizmetlerini kullanır

### Hata Ayıklama {#debug}

#### Eski yerel kütüphane için NDK hata ayıklamasını etkinleştir (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

OsmAnd/OsmAnd/jni/Application.mk dosyasındaki satırların yorumunu kaldırın
```
APP_OPTIM := debug
APP_DEBUG := true
```
Android Studio proje yapılandırmasına hata ayıklama sembolleri ekleyin. Bunun için Yapılandırmayı Düzenle / sol menüde Android Uygulaması "OsmAnd" öğesini seçin / sağ tarafta "Hata Ayıklayıcı" sekmesini seçin. Ve farklı yapılandırmalar (arm64-v8a, armeabi-v7a, x86, x86_64) için kütüphanelerin oluşturulduğu OsmAnd/obj/local adresini ekleyin.


## OpenGL kütüphanesini derle {#compile-opengl-library}

Opengl kütüphanesi assembleNightlyFree**Opengl**FatDebug gibi hedefler için gereklidir ve varsayılan olarak [OsmAnd ivy deposundan](https://builder.osmand.net/ivy/net.osmand/) indirilir - [gradle görevi](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Yerel geliştirme için bu kütüphaneleri derlemeniz ve yerel ivy deposuna yayınlamanız gerekebilir.

1. İlk olarak **geliştirme ortamını** kurun, bkz. [geliştirme ortamı](./setup-the-dev-environment).
2. Araçları yükleyin.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (veya uyumlu).
    - Yerel c++ derleyici (tercihen clang).
    - Bash araçları: wget, curl, python ...
3. **Gradle** (komut satırı):
    - **Ortam değişkenlerini** belirtin. ANDROID_SDK ve ANDROID_HOME, Android Studio'nun dosyaları yerleştirdiği yerlerdir:
    ```
    export ANDROID_SDK=/[sizin-yolunuz]/Android/sdk
    export ANDROID_NDK=/[sizin-yolunuz]/android-ndk-23
    export ANDROID_HOME=/[sizin-yolunuz]/Android/sdk
    ```
    - [gradle build görevi](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle) ile derleyin
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**İpucu**: Derleme uzun sürebilir ve muhtemelen tüm platformlara ihtiyacınız olmayacaktır, bu nedenle betikteki istenmeyen mimariyi [yorum satırı yapabilir](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) ve yalnızca 1 platform (x86, x86_64, arm, arm64) için hata ayıklama veya sürüm derlemesi yapabilirsiniz.

### Hata Ayıklama {#debug}

Tamamlanacak: Android ndk hata ayıklaması nasıl kurulur.

## API örneklerini derle {#compile-api-samples}
<IncompleteArticle/>

OsmAnd tarafından sağlanan 2 tür örnek uygulama vardır, hepsi [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) Github deposunda temsil edilir ve düzenli olarak [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/) adresinde derlenir.

Derleme betiği:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - AIDL arayüzü ve Intent'ler aracılığıyla zaten yüklü OsmAnd ile etkileşime giren [en basit örnek uygulama](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - OsmAnd'ı SDK olarak tamamen entegre etmiş [bir örnek uygulama](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk). Tüm dahili API'leri kullanmaya izin verir.

**[Daha fazla oku](../osmand-api-sdk/index.md)**.