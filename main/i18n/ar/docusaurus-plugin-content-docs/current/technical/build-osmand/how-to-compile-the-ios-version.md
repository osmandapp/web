---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# كيفية تجميع إصدار iOS {#how-to-compile-the-ios-version}

1. أولاً، قم بإعداد **[بيئة التطوير](setup-the-dev-environment.md)**.
2. قم بتثبيت Xcode من AppStore (آخر إصدار تم اختباره 14.2)
3. قم بتثبيت أدوات سطر الأوامر لـ Xcode
  ```
  $ xcode-select --install
  ```
  أو في حالة وجود أخطاء، حاول تنزيله وتثبيته من: [موقع Apple](https://developer.apple.com/download/all/?q=xcode>).

4. تسجيل الدخول إلى حساب Xcode (اختياري)
  في حال لم يكن لديك حساب مطور Apple. افتح Xcode وانتقل إلى التفضيلات (عبر القائمة العلوية)
  ```
  Preferences -> Accounts
  ```
  اضغط على الزر `+`. يمكنك تسجيل الدخول باستخدام AppleID الخاص بك (اسم المستخدم وكلمة المرور من أجهزة iOS/macOS الخاصة بك). اتبع تعليمات Xcode.
  لأعضاء فريق OsmAnd: أرسل اسم مستخدم AppleID الخاص بك، حتى يتم إضافتك إلى قائمة المطورين. عندما تتلقى رسالة بريد إلكتروني مع دعوة، قم بتنشيطها.
  أغلق Xcode.

5. تثبيت أدوات سطر الأوامر - cmake، svn، cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # لمعالجات Intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # لمعالجات M1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # تم اختباره على 3.25.2, 3.19, 3.11

  # لمعالجات Intel
  $ sudo gem install cocoapods

  # لمعالجات M1
  $ brew install cocoapods
  ```
6. تنزيل وتثبيت Java jdk 17
  ```
  # لمعالجات Intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # لمعالجات M1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. إنشاء ملف نصي جديد. أو تحديثه إذا كان موجودًا.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  الصق هذا المحتوى فيه. احفظ الملف وأعد تشغيل الكمبيوتر.

```
## إعدادات Gradle على مستوى المشروع. {#project-wide-gradle-settings}
#
# لمزيد من التفاصيل حول كيفية تهيئة بيئة البناء الخاصة بك، قم بزيارة {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# يحدد وسيطات JVM المستخدمة لعملية daemon. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# الإعداد مفيد بشكل خاص لتعديل إعدادات الذاكرة. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# القيمة الافتراضية: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# عند التهيئة، سيعمل Gradle في وضع متوازي تجريبي. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# يجب استخدام هذا الخيار فقط مع المشاريع المفككة. لمزيد من التفاصيل، قم بزيارة {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#الجمعة 08 أبريل 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. قم بتشغيل `prepare.sh` لتجميع مكتبة Qt وتنزيل التبعيات الخارجية
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  خطأ: `Xcode not set up properly. You may need to confirm the license...`.
  الحل: قم بتبديل XcodeCommandLineTools إلى تطبيق Xcode، قم بتأكيد الترخيص ثم أعده إلى حالته الأصلية.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  الحل 2: تحقق مما إذا كان xcrun متاحًا: ``` /usr/bin/xcrun -find xcrun ```. إذا حصلت على: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. ثم افتح Xcode > Preferences > Locations وفي حقل "Command Line Tools" اختر أدوات سطر الأوامر الخاصة بك "Xcode XX.X" ثم قم بتشغيل `$ ./prepare.sh` مرة أخرى.

  الحل 3: خطأ: `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  الحل 4: إذا حصلت على خطأ مثل هذا: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required. You are running version 3.11.2 ```. ثم قم بتنزيل مثبت dmg من موقع CMake وقم بتثبيت يدوي. ثم قم بتشغيل `$ ./prepare.sh` مرة أخرى.
  ```
  https://cmake.org/download/
  ```

  الحل 5: إذا حصلت على خطأ مثل هذا: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. اذهب إلى المجلد ```core/external/qtbase-ios/``` واحذف جميع المجلدات التي تبدأ بـ ```upstream```. ثم قم بتشغيل `$ ./prepare.sh` مرة أخرى.


9. افتح `osmand.xcworkspace` في Xcode

10. البناء الأول.
  قم بتعيين هدف البناء إلى `OsmAnd Maps`. (بالقرب من أزرار التشغيل/الإيقاف). اختر جهازك أو أحد محاكيات iOS كهدف. ولكن لا تستخدم "أي جهاز iOS (arm64)" الافتراضي. قم ببناء المشروع (زر التشغيل).

11. وجهات XCode و Sandbox

 - استخدم "جهازي Mac (مصمم للآيباد)" للتطوير اليومي (أفضل أداء)
 - استخدم وجهات iPhone/iPad لتطوير واجهة المستخدم/تجربة المستخدم (بطيء على معالجات M)

 - قد يطلب منك MacOS تسجيل الدخول باستخدام Apple ID عندما يكون OsmAnd قيد التشغيل
 - استخدم حساب Sandbox الخاص بك كـ Apple ID لتجنب طلبات تسجيل الدخول المتكررة
 - استخدم OsmAnd Cloud مع اشتراكك الترويجي للحصول على خرائط غير محدودة

 - اطلب من قائد فريقك حسابات Sandbox واشتراكات ترويجية

## استكشاف الأخطاء وإصلاحها {#troubleshooting}
### تنظيف الملفات المؤقتة. {#cleaning-temp-files}
  - في حالة وجود أخطاء في البناء، يمكنك الضغط في Xcode على: ```Product -> Clean build folder```
  - أغلق Xcode.
  - احذف مجلدات `baked` و `binaries` في دليل `OsmAnd` (إذا كانت موجودة بالفعل).
  - انتقل إلى المجلد ```core/external/qtbase-ios/``` واحذف جميع المجلدات التي تبدأ بـ ```upstream```.
  - احذف مجلد Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - تأكد من أن جميع المستودعات محدثة وعلى الفروع الصحيحة.
  - أعد تشغيل جهاز الكمبيوتر الخاص بك. (نعم، يمكن أن يساعد ذلك).
  - ثم قم بتشغيل `$ ./prepare.sh`
  - افتح XCode وحاول بناء المشروع مرة أخرى.

### جهاز Mac بمعالج M1 {#m1-mac}
  - في حالة ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Project Navigator -> OsmAnd_projects -> OsmAnd_projects (في قائمة Project/Targets) -> Build settings -> All -> Architectures -> Excluded Architectures -> Debug
  - أضف حقل سلسلة من نوع ```Any IOS Simulator SDK``` بقيمة ```arm64```. (ستحتاج إلى إضافته بعد كل تشغيل لـ prepare.sh)
  - قم ببناء المشروع. في حالة وجود أخطاء، اتبع جميع التعليمات من ```11. استكشاف الأخطاء وإصلاحها - تنظيف الملفات المؤقتة.``` و ```prepare.sh``` مرة أخرى.

## إضافة تصحيح أخطاء Kotlin (اختياري) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

ارجع إلى قسم ملف تهيئة LLDB لإنهاء إعداد تصحيح أخطاء Kotlin.

## إضافة تصحيح أخطاء Qt (اختياري). إذا كنت ترغب في رؤية قيم Qt في وضع التصحيح، قم بتشغيل هذا: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## ملف تهيئة LLDB (اختياري) {#lldb-init-file-optional}
لا يقوم XCode 16+ بتحميل `~/.lldbinit-Xcode` تلقائيًا، لذا قم بإعداده يدويًا باستخدام قائمة `Product - Scheme - Edit scheme - Run - LLDB Init File`.

بعد تعيين هذه المعلمات، أعد تشغيل جهاز الكمبيوتر الخاص بك.