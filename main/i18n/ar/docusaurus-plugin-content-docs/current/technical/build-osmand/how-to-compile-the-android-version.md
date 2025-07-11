---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# كيفية تجميع إصدار Android {#how-to-compile-the-android-version}


**مجموعة تطوير برامج أندرويد (Android SDK)**:
الحد الأدنى لإصدار SDK: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
الإصدار المستهدف من SDK: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
أدوات SDK المستهدفة: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**مجموعة تطوير برامج أندرويد الأصلية (Android NDK)**: 23.


## تجميع ملف APK لنظام Android {#compile-android-apk}
1. أولاً، قم بإعداد **[بيئة التطوير](setup-the-dev-environment.md)**.
2. **Gradle** (سطر الأوامر):
    -  حدد  **متغيرات البيئة**.   ANDROID_SDK و ANDROID_HOME هما المكانان اللذان يضع فيهما Android Studio الأشياء:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - التجميع باستخدام سطر الأوامر
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. يمكنك استخدام [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) الخاص بنا لجعل الإصدارات متوافقة مع الإصدار الليلي.


### مهام / نكهات Gradle {#gradle-tasks--flavors}

ستنتج مهمة Gradle **assembleNightlyFreeLegacyFatDebug** ملف APK في *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. يتكون اسم المهمة *assembleNightlyFreeLegacyFatDebug* من:
- assemble - مهمة قياسية لبناء ملف APK
- nightlyFree - نكهة البناء الموضحة أدناه
- legacy - legacy / opengl / opengldebug - يحدد ما إذا كان ملف APK المنتج سيحتوي على مكتبات أصلية لاستخدام عرض خريطة opengl أم لا. مزيد من المعلومات في مكون OsmAnd الإضافي للتطوير.
- fat - fat (جميع الأهداف الأصلية) / armv7 / arm64 / x86 / armonly - حدد المكتبات الأصلية التي ستكون داخل ملف APK.
- debug - debug / release - مهمة قياسية

لبناء الحزمة، يمكنك استخدام **`bundle${FLAVOR}LegacyFatRelease`**.


| النكهة | الحزمة | الوصف
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | بناء ليلي مجاني يمكن تثبيته بجانب إصدارات GPlay للاختبار والاستكشاف
| androidFull | net.osmand.plus | يمكن استخدام إصدار OsmAnd~ الكامل لبناءات F-Droid. لا يستخدم خدمات Google Play.
| gplayFree | net.osmand | إصدار OsmAnd من Google Play - يستخدم خدمات Google Play.
| gplayFull | net.osmand.plus | إصدار OsmAnd+ من Google Play - يستخدم خدمات Google Play.
| huawei | net.osmand | بناء خاص لسوق Huawei - يستخدم خدمات Huawei ولكن ليس Google Play

### تصحيح الأخطاء {#debug}

#### تمكين تصحيح أخطاء NDK لمكتبة native القديمة (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

في OsmAnd/OsmAnd/jni/Application.mk قم بإلغاء التعليق على الأسطر
```
APP_OPTIM := debug
APP_DEBUG := true
```
أضف رموز تصحيح الأخطاء في إعدادات مشروع Android Studio. للقيام بذلك، انتقل إلى Edit Configuration / في القائمة اليسرى حدد Android App "OsmAnd" / في الجانب الأيمن حدد علامة التبويب "Debugger". وأضف OsmAnd/obj/local حيث يتم بناء المكتبات لتكوينات مختلفة (arm64-v8a, armeabi-v7a, x86, x86_64).


## تجميع مكتبة OpenGL {#compile-opengl-library}

مكتبة Opengl مطلوبة لأهداف مثل assembleNightlyFree**Opengl**FatDebug ويتم تنزيلها افتراضيًا من [مستودع OsmAnd ivy](https://builder.osmand.net/ivy/net.osmand/) - [مهمة gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). للتطوير المحلي، قد تحتاج إلى تجميع هذه المكتبة ونشرها في مستودع ivy المحلي.

1. أولاً، قم بإعداد **بيئة التطوير**، انظر [بيئة التطوير](./setup-the-dev-environment).
2. تثبيت الأدوات.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (أو متوافق).
    - مترجم C++ محلي (يفضل clang).
    - أدوات Bash: wget, curl, python ...
3. **Gradle** (سطر الأوامر):
    -  حدد  **متغيرات البيئة**.   ANDROID_SDK و ANDROID_HOME هما المكانان اللذان يضع فيهما Android Studio الأشياء:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - التجميع باستخدام [مهمة بناء gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**تلميح**: قد يستغرق التجميع وقتًا طويلاً ومن المحتمل أنك لا تحتاج إلى جميع المنصات، لذا يمكنك [التعليق](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) على البنية غير المرغوبة في السكريبت وبناء منصة واحدة فقط (x86, x86_64, arm, arm64) debug أو release.

### تصحيح الأخطاء {#debug}

سيتم الانتهاء: كيفية إعداد تصحيح أخطاء Android ndk.

## تجميع عينات API {#compile-api-samples}
<IncompleteArticle/>

هناك نوعان من تطبيقات العينات التي يوفرها OsmAnd، وكلها ممثلة في مستودع Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) ويتم تجميعها بانتظام في [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

سكريبت التجميع:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [أبسط تطبيق نموذجي](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk) يتفاعل مع OsmAnd المثبت بالفعل عبر واجهة AIDL و Intents.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [تطبيق نموذجي](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk) يحتوي على OsmAnd مدمج بالكامل بداخله كـ SDK. يسمح باستخدام جميع واجهات برمجة التطبيقات الداخلية.

**[اقرأ المزيد](../osmand-api-sdk/index.md)**.