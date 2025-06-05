---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Як скомпілювати версію для iOS {#how-to-compile-the-ios-version}

1. Спочатку налаштуйте **[середовище розробки](setup-the-dev-environment.md)**.
2. Встановіть Xcode з AppStore (остання протестована версія 14.2)
3. Встановіть інструменти командного рядка Xcode
  ```
  $ xcode-select --install
  ```
  Або у випадку помилок спробуйте завантажити та встановити з: [сайту Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Увійдіть в обліковий запис Xcode (необов'язково)
  Якщо у вас немає облікового запису Apple Developer. Відкрийте Xcode та перейдіть до налаштувань (через верхнє меню)
  ```
  Preferences -> Accounts
  ```
  Натисніть кнопку `+`. Ви можете увійти за допомогою свого AppleID (логін та пароль від ваших пристроїв iOS/macOS). Дотримуйтесь інструкцій Xcode.
  Для членів команди OsmAnd: надішліть свій логін AppleID, щоб вас додали до списку розробників. Коли ви отримаєте електронний лист із запрошенням, активуйте його.
  Закрийте Xcode.

5. Встановіть інструменти командного рядка — cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # для intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # для m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # протестовано на 3.25.2, 3.19, 3.11

  # для intel
  $ sudo gem install cocoapods

  # для m1
  $ brew install cocoapods
  ```
6. Завантажте та встановіть Java jdk 17
  ```
  # для intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # для m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Створіть новий текстовий файл. Або оновіть, якщо він існує.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Вставте цей вміст у нього. Збережіть файл та перезавантажте комп'ютер.

```
## Project-wide Gradle settings. {#project-wide-gradle-settings}
#
# For more details on how to configure your build environment visit {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Specifies the JVM arguments used for the daemon process. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# The setting is particularly useful for tweaking memory settings. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Default value: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# When configured, Gradle will run in incubating parallel mode. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# This option should only be used with decoupled projects. More details, visit {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Fri Apr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Запустіть `prepare.sh` для компіляції бібліотеки Qt та завантаження зовнішніх залежностей
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Помилка: `Xcode not set up properly. You may need to confirm the license...`.
  Рішення: переключіть XcodeCommandLineTools на додаток Xcode, підтвердьте ліцензію та переключіть назад.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Рішення 2: перевірте, чи доступний xcrun: ``` /usr/bin/xcrun -find xcrun ```. Якщо ви отримали: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Тоді відкрийте Xcode > Preferences > Locations і в полі "Command Line Tools" виберіть свої інструменти командного рядка "Xcode XX.X" та знову запустіть `$ ./prepare.sh`.

  Рішення 3: Помилка: `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Рішення 4: Якщо ви отримали помилку на кшталт: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Тоді завантажте інсталятор dmg з веб-сайту CMake та виконайте ручну інсталяцію. І знову запустіть `$ ./prepare.sh`.
  ```
  https://cmake.org/download/
  ```

  Рішення 5: Якщо ви отримали помилку на кшталт: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Перейдіть до папки ```core/external/qtbase-ios/``` та видаліть усі папки, що починаються з ```upstream```. І знову запустіть `$ ./prepare.sh`.


9. Відкрийте `osmand.xcworkspace` в Xcode

10. Перша збірка.
  Встановіть ціль збірки на `OsmAnd Maps`. (Біля кнопок відтворення/зупинки). Виберіть як ціль свій пристрій або один із симуляторів iOS. Але не використовуйте стандартний 'Any iOS Device (arm64)'. Зберіть проєкт (кнопка відтворення).

11. Призначення Xcode та Sandbox

 - Використовуйте "My Mac (Designed for iPad)" для повсякденної розробки (найкраща продуктивність)
 - Використовуйте призначення iPhone/iPad для розробки UI/UX (повільно на процесорах M)

 - MacOS може попросити вас увійти за допомогою Apple ID, коли OsmAnd працює
 - Використовуйте свій обліковий запис Sandbox як Apple ID, щоб уникнути повторних запитів на вхід
 - Використовуйте OsmAnd Cloud зі своєю промо-підпискою, щоб отримати необмежену кількість карт

 - Зверніться до свого керівника команди за обліковими записами Sandbox та промо-підписками

## Вирішення проблем {#troubleshooting}
### Очищення тимчасових файлів. {#cleaning-temp-files}
  - У випадку помилок збірки ви можете натиснути в Xcode: ```Product -> Clean build folder```
  - Закрийте Xcode.
  - Видаліть папки `baked` та `binaries` у каталозі `OsmAnd` (якщо вони вже існують).
  - Перейдіть до папки ```core/external/qtbase-ios/``` та видаліть усі папки, що починаються з ```upstream```.
  - Видаліть папку Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Перевірте, чи всі репозиторії оновлені та на правильних гілках.
  - Перезавантажте комп'ютер. (Так, це може допомогти).
  - Потім запустіть `$ ./prepare.sh`
  - Відкрийте XCode та спробуйте знову зібрати проєкт.

### Mac M1 {#m1-mac}
  - У випадку ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Project Navigator -> OsmAnd_projects -> OsmAnd_projects (у списку Project/Targets) -> Build settings -> All -> Architectures -> Excluded Architectures -> Debug
  - Додайте строкове поле типу ```Any IOS Simulator SDK``` зі значенням ```arm64```. (вам потрібно буде додавати його після кожного запуску prepare.sh)
  - Зберіть проєкт. У випадку помилок, виконайте всі інструкції з ```11. Вирішення проблем - очищення тимчасових файлів.``` та ```prepare.sh``` ще раз.

## Додаток для налагодження Kotlin (необов'язково) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Зверніться до розділу LLDB Init File, щоб завершити налаштування налагодження Kotlin.

## Додаток для налагодження Qt (необов'язково). Якщо ви хочете бачити значення Qt у режимі налагодження, запустіть це: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## Файл ініціалізації LLDB (необов'язково) {#lldb-init-file-optional}
XCode 16+ не завантажує `~/.lldbinit-Xcode` автоматично, тому налаштуйте його вручну за допомогою меню `Product - Scheme - Edit scheme - Run - LLDB Init File`.

Після встановлення цих параметрів перезавантажте комп'ютер.