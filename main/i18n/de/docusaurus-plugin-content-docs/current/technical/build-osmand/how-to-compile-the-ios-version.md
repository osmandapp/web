---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Kompilieren der iOS-Version {#how-to-compile-the-ios-version}

1. Richten Sie zuerst die **[Entwicklungsumgebung](setup-the-dev-environment.md)** ein.
2. Installieren Sie Xcode aus dem AppStore (zuletzt getestet 14.2)
3. Installieren Sie die Xcode-Befehlszeilentools
  ```
  $ xcode-select --install
  ```
  Oder versuchen Sie im Fehlerfall, es von der folgenden Adresse herunterzuladen und zu installieren: [Apple-Website](https://developer.apple.com/download/all/?q=xcode>).

4. Melden Sie sich bei Ihrem Xcode-Konto an (optional)
  Falls Sie kein Apple Developer-Konto haben. Öffnen Sie Xcode und gehen Sie zu den Einstellungen (über das obere Menü)
  ```
  Einstellungen -> Konten
  ```
  Drücken Sie die Taste `+`. Sie können sich mit Ihrer AppleID anmelden (Login und Passwort von Ihren iOS/macOS-Geräten). Folgen Sie den Anweisungen von Xcode.
  Für OsmAnd-Teammitglieder: Senden Sie Ihr AppleID-Login, damit Sie zur Entwicklerliste hinzugefügt werden. Wenn Sie eine E-Mail mit einer Einladungsnachricht erhalten, aktivieren Sie diese.
  Schließen Sie Xcode.

5. Installieren Sie die Befehlszeilentools - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # für intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # für m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # getestet auf 3.25.2, 3.19, 3.11

  # für intel
  $ sudo gem install cocoapods

  # für m1
  $ brew install cocoapods
  ```
6. Laden Sie Java jdk 17 herunter und installieren Sie es
  ```
  # für intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # für m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Erstellen Sie eine neue Textdatei. Oder aktualisieren Sie sie, falls sie existiert.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Fügen Sie diesen Inhalt ein. Speichern Sie die Datei und starten Sie den Computer neu.

```
## Projektweite Gradle-Einstellungen. {#project-wide-gradle-settings}
#
# Weitere Details zur Konfiguration Ihrer Build-Umgebung finden Sie unter {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Gibt die JVM-Argumente an, die für den Daemon-Prozess verwendet werden. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# Die Einstellung ist besonders nützlich zum Anpassen der Speichereinstellungen. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Standardwert: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Bei Konfiguration wird Gradle im inkubierenden Parallelmodus ausgeführt. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Diese Option sollte nur bei entkoppelten Projekten verwendet werden. Weitere Details finden Sie unter {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Fri Apr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Führen Sie `prepare.sh` aus, um die Qt-Bibliothek zu kompilieren und externe Abhängigkeiten herunterzuladen
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Fehler: `Xcode nicht richtig eingerichtet. Möglicherweise müssen Sie die Lizenz bestätigen...`.
  Lösung: Wechseln Sie die XcodeCommandLineTools zur Xcode-App, bestätigen Sie die Lizenz und wechseln Sie zurück.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Lösung 2: Überprüfen Sie, ob xcrun verfügbar ist: ``` /usr/bin/xcrun -find xcrun ```. Wenn Sie erhalten: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Öffnen Sie dann Xcode > Einstellungen > Speicherorte und wählen Sie im Feld "Befehlszeilentools" Ihre Befehlszeilentools "Xcode XX.X" aus. Führen Sie dann `$ ./prepare.sh` erneut aus.

  Lösung 3: Fehler: `CMake Error ... iphoneos ist kein iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Lösung 4: Wenn Sie einen Fehler wie diesen erhalten: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 oder höher ist erforderlich. Sie verwenden Version 3.11.2 ```. Laden Sie dann das dmg-Installationsprogramm von der CMake-Website herunter und führen Sie eine manuelle Installation durch. Führen Sie dann `$ ./prepare.sh` erneut aus.
  ```
  https://cmake.org/download/
  ```

  Lösung 5: Wenn Sie einen Fehler wie diesen erhalten: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Gehen Sie zum Ordner ```core/external/qtbase-ios/``` und löschen Sie alle Ordner, die mit ```upstream``` beginnen. Führen Sie dann `$ ./prepare.sh` erneut aus.


9. Öffnen Sie `osmand.xcworkspace` in Xcode

10. Erster Build.
  Setzen Sie das Build-Ziel auf `OsmAnd Maps`. (In der Nähe der Wiedergabe-/Stopp-Schaltflächen). Wählen Sie als Ziel Ihr Gerät oder einen der iOS-Simulatoren aus. Verwenden Sie jedoch nicht das Standardziel "Any iOS Device (arm64)". Erstellen Sie das Projekt (Wiedergabe-Schaltfläche).

11. XCode-Ziele und Sandbox

 - Verwenden Sie "My Mac (Designed for iPad)" für die tägliche Entwicklung (beste Leistung)
 - Verwenden Sie iPhone/iPad-Ziele für die UI/UX-Entwicklung (langsam auf M-Prozessoren)

 - MacOS fordert Sie möglicherweise auf, sich mit Ihrer Apple ID anzumelden, wenn OsmAnd läuft
 - Verwenden Sie Ihr Sandbox-Konto als Apple ID, um wiederholte Anmeldeanfragen zu vermeiden
 - Verwenden Sie OsmAnd Cloud mit Ihrem Promo-Abonnement, um unbegrenzte Karten zu erhalten

 - Fragen Sie Ihren Teamleiter nach Sandbox-Konten und Promo-Abonnements

## Fehlerbehebung {#troubleshooting}
### Bereinigen temporärer Dateien. {#cleaning-temp-files}
  - Im Falle von Build-Fehlern können Sie in Xcode drücken: ```Produkt -> Build-Ordner bereinigen```
  - Schließen Sie Xcode.
  - Löschen Sie die Ordner `baked` und `binaries` im Verzeichnis `OsmAnd` (falls vorhanden).
  - Gehen Sie zum Ordner ```core/external/qtbase-ios/``` und löschen Sie alle Ordner, die mit ```upstream``` beginnen.
  - Löschen Sie den Xcode DerivedData-Ordner: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Überprüfen Sie, ob alle Repositories auf dem neuesten Stand und auf den richtigen Branches sind.
  - Starten Sie Ihren Computer neu. (Ja, das kann helfen).
  - Führen Sie dann `$ ./prepare.sh` aus
  - Öffnen Sie XCode und versuchen Sie erneut, das Projekt zu erstellen.

### M1 Mac {#m1-mac}
  - Im Falle von ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Projektnavigator -> OsmAnd_projects -> OsmAnd_projects (in der Projekt-/Ziel-Liste) -> Build-Einstellungen -> Alle -> Architekturen -> Ausgeschlossene Architekturen -> Debug
  - Fügen Sie ein Zeichenkettenfeld vom Typ ```Any IOS Simulator SDK``` mit dem Wert ```arm64``` hinzu. (Sie müssen dies nach jedem prepare.sh-Lauf hinzufügen)
  - Projekt erstellen. Im Falle von Fehlern führen Sie alle Anweisungen aus ```11. Fehlerbehebung - Bereinigen temporärer Dateien.``` und ```prepare.sh``` erneut aus.

## Kotlin Debug-Addon (optional) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Siehe Abschnitt LLDB Init File, um die Kotlin-Debug-Einrichtung abzuschließen.

## Qt Debug-Addon (optional). Wenn Sie Qt-Werte im Debug-Modus sehen möchten, führen Sie Folgendes aus: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## LLDB Init File (optional) {#lldb-init-file-optional}
XCode 16+ lädt `~/.lldbinit-Xcode` nicht automatisch, daher richten Sie es manuell über das Menü `Produkt - Schema - Schema bearbeiten - Ausführen - LLDB Init File` ein.

Nachdem Sie diese Parameter eingestellt haben, starten Sie Ihren Computer neu.