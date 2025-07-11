---
source-hash: d4fdeaa3f3d1430002a0e679e72ccee20fec335cb9d13974b60c5cadd82a094e
sidebar_position: 7
---

# كيفية تجميع OsmAndMapCreator والأدوات {#how-to-compile-osmandmapcreator-and-tools}


## تجميع OsmAndMapCreator {#compile-osmandmapcreator}
1. أولاً، قم بإعداد **[بيئة التطوير](setup-the-dev-environment.md)**.
2. **Gradle** (سطر الأوامر):
    - التجميع باستخدام سطر الأوامر
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - سيتم إنتاج OsmAndMapCreator.zip مع جميع البرامج النصية بالداخل
    **ملاحظة**: يتطلب مشروع أندرويد بناء الأدوات (يستخدم مشروع OsmAnd-java).
3. **Eclipse**:
    - تهيئة مشاريع Eclipse مسبقًا
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - في Eclipse، "استيراد" - "المشاريع الموجودة في مساحة العمل" حدد المجلدات 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **ملاحظة**: لا تحدد المجلد العلوي java-tools وبدلاً من ذلك حدد المشاريع المحددة أعلاه.
4. Android Studio / Idea
    لا تتردد في تقديم طلب سحب لهذا التوثيق ووصف كيفية القيام بذلك.
5. الفئات الرئيسية للتنفيذ من IDE:
   - net.osmand.MainUtilities - يمثل utilities.sh ويؤدي إلى جميع الأدوات الممكنة.
   - net.osmand.obf.BinaryInspector - أداة inspector.sh لقراءة ملفات OBF وتقديم معلومات عنها.
   - net.osmand.obf.preparation.IndexCreator - اختصار لإنشاء ملف obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## تجميع مكتبة العرض الأصلية لـ OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
يمكن استخدام مكتبة العرض الأصلية لاختبار العرض دون اتصال أو التوجيه الأصلي دون اتصال. إنها مفيدة جدًا لتصحيح الأخطاء واختبار نمط العرض أو تكوين التوجيه.

1. أولاً، قم بإعداد **بيئة التطوير**، انظر [بيئة التطوير](./setup-the-dev-environment).
2. تنزيل التبعيات الخارجية
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. حدد JAVA_HOME عالميًا عبر $PATH أو في سطر الأوامر
  ```
  export JAVA_HOME=<>
  ```
4. اختر [هدفًا](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) محددًا لنظام التشغيل وقم بتجميع إصدار محدد 'debug', 'release' أو '' (افتراضي). مثال
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # إصدار macOS
  ./amd64-linux-clang.sh debug # تصحيح أخطاء Linux - افتراضي
  cd ....baked # مثل intel-darwin-intel-darwin-clang-release.baked أو amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. ستكون الملفات الثنائية متاحة في core-legacy/binaries/.
مثال:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### استكشاف الأخطاء وإصلاحها {#troubleshooting}
- ملفات مفقودة externals/libjpeg-turbo/jconfigint.h.in غير موجودة.
إذا واجهت أن libjpeg-turbo لا يمكن تجميعه
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in غير موجود.
```
يمكنك العثور على الملفات هنا ووضعها في المجلد المحدد
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## تجميع إصدار Qt الأساسي لـ OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. أولاً، قم بإعداد **[بيئة التطوير](setup-the-dev-environment.md)**.
2. قم بإعداد البناء (cmake) لهدف محدد. مثال clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. تجميع إصدار المكتبة
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```