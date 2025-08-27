---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Hoe de iOS-versie te compileren {#how-to-compile-the-ios-version}

1. Stel eerst de **[ontwikkelomgeving](setup-the-dev-environment.md)** in.
2. Installeer Xcode vanuit de AppStore (laatst getest 14.2)
3. Installeer Xcode command-line tools
  ```
  $ xcode-select --install
  ```
  Of probeer in geval van fouten het te downloaden en te installeren vanaf: [Apple site](https://developer.apple.com/download/all/?q=xcode>).

4. Log in op het Xcode-account (optioneel)
  Als je geen Apple Developer-account hebt. Open Xcode en ga naar voorkeuren (via het topmenu)
  ```
  Voorkeuren -> Accounts
  ```
  Druk op de `+` knop. Je kunt inloggen met je AppleID (login en wachtwoord van je iOS/macOS-apparaten). Volg de Xcode-instructies.
  Voor OsmAnd-teamleden: stuur je AppleID-login, zodat je wordt toegevoegd aan de ontwikkelaarslijst. Wanneer je een e-mail met een uitnodiging ontvangt, activeer deze dan.
  Sluit Xcode.

5. Installeer command-line tools - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # voor intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # voor m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # getest op 3.25.2, 3.19, 3.11

  # voor intel
  $ sudo gem install cocoapods

  # voor m1
  $ brew install cocoapods
  ```
6. Download en installeer Java jdk 17
  ```
  # voor intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # voor m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Maak een nieuw tekstbestand aan. Of werk het bij als het bestaat.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Plak deze inhoud erin. Sla het bestand op en herstart de computer.

```
## Projectbrede Gradle-instellingen. {#project-wide-gradle-settings}
#
# Voor meer details over het configureren van je buildomgeving, bezoek {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Specificeert de JVM-argumenten die worden gebruikt voor het daemonproces. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# De instelling is bijzonder nuttig voor het aanpassen van geheugeninstellingen. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Standaardwaarde: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Indien geconfigureerd, zal Gradle in incuberende parallelle modus draaien. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Deze optie mag alleen worden gebruikt met ontkoppelde projecten. Meer details, bezoek {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Vrij Apr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Voer `prepare.sh` uit om de Qt-bibliotheek te compileren en externe afhankelijkheden te downloaden
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Fout: `Xcode niet correct ingesteld. Mogelijk moet u de licentie bevestigen...`.
  Oplossing: schakel XcodeCommandLineTools naar de Xcode-app, bevestig de licentie en schakel terug.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Oplossing 2: controleer of xcrun beschikbaar is: ``` /usr/bin/xcrun -find xcrun ```. Als je krijgt: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Open dan Xcode > Voorkeuren > Locaties en selecteer in het veld "Command Line Tools" je command line tools "Xcode XX.X" En voer `$ ./prepare.sh` opnieuw uit.

  Oplossing 3: Fout: `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Oplossing 4: Als je een fout krijgt zoals deze: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Download dan het dmg-installatieprogramma van de CMake-website en voer een handmatige installatie uit. En voer `$ ./prepare.sh` opnieuw uit.
  ```
  https://cmake.org/download/
  ```

  Oplossing 5: Als je een fout krijgt zoals deze: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Ga naar de map ```core/external/qtbase-ios/``` en verwijder alle mappen die beginnen met ```upstream```. En voer `$ ./prepare.sh` opnieuw uit.


9. Open `osmand.xcworkspace` in Xcode

10. Eerste build.
  Stel het builddoel in op `OsmAnd Maps`. (Bij de afspeel-/stopknoppen). Selecteer als doel je apparaat of een van de iOS-simulatoren. Maar gebruik niet de standaard 'Any iOS Device (arm64)'. Bouw het project (afspeelknop).

11. XCode-bestemmingen en Sandbox

 - Gebruik "Mijn Mac (ontworpen voor iPad)" voor dagelijkse ontwikkeling (beste prestaties)
 - Gebruik iPhone/iPad-bestemmingen voor UI/UX-ontwikkeling (langzaam op M-processors)

 - MacOS kan je vragen om in te loggen met Apple ID wanneer OsmAnd actief is
 - Gebruik je Sandbox-account als Apple ID om herhaalde inlogverzoeken te voorkomen
 - Gebruik OsmAnd Cloud met je Promo-abonnement om onbeperkte kaarten te krijgen

 - Vraag je teamleider om Sandbox-accounts en Promo-abonnementen

## Probleemoplossing {#troubleshooting}
### Tijdelijke bestanden opschonen. {#cleaning-temp-files}
  - In geval van buildfouten kun je in Xcode drukken op: ```Product -> Clean build folder```
  - Sluit Xcode.
  - Verwijder de mappen `baked` en `binaries` in de `OsmAnd`-map (indien deze al bestaat).
  - Ga naar de map ```core/external/qtbase-ios/``` en verwijder alle mappen die beginnen met ```upstream```.
  - Verwijder de Xcode DerivedData-map: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Controleer of alle repositories up-to-date zijn en op de juiste branches staan.
  - Herstart je computer. (Ja, het kan helpen).
  - Voer vervolgens `$ ./prepare.sh` uit
  - Open XCode en probeer het project opnieuw te bouwen.

### M1 mac {#m1-mac}
  - In geval van ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Project Navigator -> OsmAnd_projects -> OsmAnd_projects (in Project/Targets lijst) -> Build settings -> All -> Architectures -> Excluded Architectures -> Debug
  - Voeg een stringveld van het type ```Any IOS Simulator SDK``` toe met de waarde ```arm64```. (je moet dit na elke prepare.sh-uitvoering toevoegen)
  - Bouw het project. In geval van fouten, voer alle instructies uit van ```11. Probleemoplossing - tijdelijke bestanden opschonen.``` en ```prepare.sh``` nogmaals uit.

## Kotlin debug-add-on (optioneel) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Raadpleeg de sectie LLDB Init File om de Kotlin debug-setup af te ronden.

## Qt debug-add-on (optioneel). Als je Qt-waarden in debug-modus wilt zien, voer dan dit uit: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## LLDB Init Bestand (optioneel) {#lldb-init-file-optional}
XCode 16+ laadt `~/.lldbinit-Xcode` niet automatisch, dus stel het handmatig in via het menu `Product - Scheme - Edit scheme - Run - LLDB Init File`.

Na het instellen van deze parameters, herstart je computer.