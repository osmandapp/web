---
source-hash: c95e1035173b21e1b1b5458c275dbed73d3f2f0447aa7b379c4057ef2e86720b
sidebar_position: 5
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
---

# Як скомпілювати версію для Android {#how-to-compile-the-android-version}


**Android SDK**:
Мінімальна версія SDK: [21](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L38)
Цільова версія SDK: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)
Інструменти цільового SDK: [29](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build-common.gradle#L6)

**Android NDK**: 23.


## Скомпілювати Android apk {#compile-android-apk}
1. Спочатку налаштуйте **[середовище розробки](setup-the-dev-environment.md)**.
2. **Gradle** (командний рядок):
    - Вкажіть **змінні середовища**. ANDROID_SDK та ANDROID_HOME – це місця, де Android Studio розміщує файли:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - Скомпілюйте за допомогою командного рядка
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. Ви можете використовувати наш [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores), щоб зробити збірки сумісними з нічною збіркою.


### Завдання / варіанти Gradle {#gradle-tasks--flavors}

Завдання Gradle **assembleNightlyFreeLegacyFatDebug** створить apk у *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Назва завдання *assembleNightlyFreeLegacyFatDebug* складається з:
- assemble - стандартне завдання для створення apk
- nightlyFree - варіант збірки, описаний нижче
- legacy - legacy / opengl / opengldebug - визначає, чи буде створений apk мати нативні бібліотеки для використання рендерингу карти opengl чи ні. Більше інформації в плагіні розробки OsmAnd.
- fat - fat (усі нативні цілі) / armv7 / arm64 / x86 / armonly - виберіть, які нативні бібліотеки будуть всередині apk.
- debug - debug / release - стандартне завдання

Щоб створити пакет, ви можете використовувати **`bundle${FLAVOR}LegacyFatRelease`**.


| Варіант | Пакет | Опис
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Нічна безкоштовна збірка, яку можна встановити поруч з обома версіями GPlay для тестування та дослідження
| androidFull | net.osmand.plus | Повна версія OsmAnd~ може використовуватися для збірок F-Droid. Не використовує сервіси GooglePlay.
| gplayFree | net.osmand | Версія OsmAnd для Google Play - використовує сервіси GooglePlay.
| gplayFull | net.osmand.plus | Версія OsmAnd+ для Google Play - використовує сервіси GooglePlay.
| huawei | net.osmand | Спеціальна збірка для ринку Huawei - використовує сервіси Huawei, але не Google Play

### Налагодження {#debug}

#### Увімкнути налагодження NDK для застарілої нативної бібліотеки (OsmAnd-core-legacy) {#enable-ndk-debug-for-legacy-native-library-osmand-core-legacy}

У OsmAnd/OsmAnd/jni/Application.mk розкоментуйте рядки
```
APP_OPTIM := debug
APP_DEBUG := true
```
Додайте символи налагодження в конфігурацію проекту Android Studio. Для цього перейдіть до Edit Configuration / у лівому меню виберіть Android App "OsmAnd" / у правій частині виберіть вкладку "Debugger". І додайте OsmAnd/obj/local, де створюються бібліотеки для різних конфігурацій (arm64-v8a, armeabi-v7a, x86, x86_64).


## Скомпілювати бібліотеку OpenGL {#compile-opengl-library}

Бібліотека Opengl потрібна для таких цілей, як assembleNightlyFree**Opengl**FatDebug, і за замовчуванням завантажується з [репозиторію OsmAnd ivy](https://builder.osmand.net/ivy/net.osmand/) - [завдання gradle](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/build.gradle#L187). Для локальної розробки вам може знадобитися скомпілювати ці бібліотеки та опублікувати їх у локальному репозиторії ivy.

1. Спочатку налаштуйте **середовище розробки**, див. [середовище розробки](./setup-the-dev-environment).
2. Встановіть інструменти.
    - Android SDK - 29.
    - Android NDK - 23.
    - CMake > 3.6 (cmake -version).
    - SWIG - 4.1.1 (або сумісний).
    - Локальний компілятор c++ (бажано clang).
    - Інструменти Bash: wget, curl, python ...
3. **Gradle** (командний рядок):
    - Вкажіть **змінні середовища**. ANDROID_SDK та ANDROID_HOME – це місця, де Android Studio розміщує файли:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-23
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - Скомпілюйте за допомогою [завдання збірки gradle](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.gradle)
    ```
    cd core/wrappers/android && ../gradlew build
    ```
    
**Підказка**: Компіляція може зайняти багато часу, і вам, ймовірно, не потрібні всі платформи, тому ви можете [закоментувати](https://github.com/osmandapp/OsmAnd-core/blob/master/wrappers/android/build.sh#L64) небажані архітектури в скрипті та зібрати лише для 1 платформи (x86, x86_64, arm, arm64) налагодження або випуску.

### Налагодження {#debug}

Буде доповнено: як налаштувати налагодження Android ndk.

## Скомпілювати приклади API {#compile-api-samples}
<IncompleteArticle/>

OsmAnd надає 2 типи прикладів додатків, усі вони представлені в репозиторії Github [osmand-api-demo](https://github.com/osmandapp/osmand-api-demo) та регулярно компілюються на [OsmAnd Builder](https://builder.osmand.net:8080/view/OsmAnd%20Builds/job/OsmAnd-API-demo/).

Скрипт компіляції:
```
(cd OsmAnd-api-sample && ./gradlew clean assembleRelease)
(cd OsmAnd-map-sample && ./gradlew clean assembleRelease)
```

- [OsmAnd-api-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample) - [найпростіший приклад додатка](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk), який взаємодіє з уже встановленим OsmAnd через інтерфейс AIDL та інтенти.
- [OsmAnd-map-sample](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample) - [приклад додатка](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk), який повністю інтегрував OsmAnd всередину себе як SDK. Дозволяє використовувати всі внутрішні API.

**[Докладніше](../osmand-api-sdk/index.md)**.