---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# Як скомпілювати OsmAndMapCreator та інструменти {#how-to-compile-osmandmapcreator-and-tools}


## Скомпілювати OsmAndMapCreator {#compile-osmandmapcreator}
1. Спочатку налаштуйте **[середовище розробки](setup-the-dev-environment.md)**.
2. **Gradle** (командний рядок):
    - Компіляція за допомогою командного рядка
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip буде створено з усіма скриптами всередині
    **Примітка**: для створення інструментів потрібен проект Android (він використовує проект OsmAnd-java).
3. **Eclipse**:
    - Попередньо налаштуйте проекти Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - В Eclipse 'Import' - 'Existing projects in workspace' виберіть папки 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Примітка**: не вибирайте верхню папку java-tools, а замість цього виберіть зазначені вище проекти.
4. **IntelliJ IDEA**
    - 'File' > 'New' > 'Project from existing sources...' та перейдіть до `java-tools`
    - Виберіть 'Import project from existing model' та виберіть 'gradle' зі списку
5. Основні класи для виконання з IDE:
   - net.osmand.MainUtilities - представляє utilities.sh та веде до всіх можливих утиліт.
   - net.osmand.obf.BinaryInspector - утиліта inspector.sh для читання файлів OBF та надання інформації про них.
   - net.osmand.obf.preparation.IndexCreator - ярлик для створення файлу obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Скомпілювати бібліотеку нативного рендерингу для OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
Бібліотека нативного рендерингу може бути використана для тестування офлайн-рендерингу або офлайн-нативної маршрутизації. Вона дуже корисна для налагодження та тестування стилю рендерингу або конфігурації маршрутизації.

1. Спочатку налаштуйте **середовище розробки**, див. [середовище розробки](./setup-the-dev-environment).
2. Завантажте зовнішні залежності
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Вкажіть JAVA_HOME глобально через $PATH або в командному рядку
  ```
  export JAVA_HOME=<>
  ```
4. Виберіть конкретну [ціль](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) для ОС та скомпілюйте конкретну версію 'debug', 'release' або '' (за замовчуванням). Приклад
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - default
  cd ....baked # наприклад intel-darwin-intel-darwin-clang-release.baked або amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Бінарні файли будуть доступні за адресою core-legacy/binaries/.
Приклад:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Вирішення проблем {#troubleshooting}
- Відсутні файли externals/libjpeg-turbo/jconfigint.h.in не існує.
Якщо ви виявили, що libjpeg-turbo не може скомпілюватися
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in does not exist.
```
Ви можете знайти файли тут і помістити їх у вказану папку
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Скомпілювати версію ядра Qt для OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Спочатку налаштуйте **[середовище розробки](setup-the-dev-environment.md)**.
2. Підготуйте збірку (cmake) для конкретної цілі. Приклад clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Скомпілюйте бібліотеку випуску
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```