---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Jak skompilować wersję iOS {#how-to-compile-the-ios-version}

1. Najpierw skonfiguruj **[środowisko programistyczne](setup-the-dev-environment.md)**.
2. Zainstaluj Xcode z AppStore (ostatnio testowane 14.2)
3. Zainstaluj narzędzia wiersza poleceń Xcode
  ```
  $ xcode-select --install
  ```
  Lub w przypadku błędów spróbuj pobrać i zainstalować z: [strony Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Zaloguj się na konto Xcode (opcjonalnie)
  Jeśli nie masz konta Apple Developer. Otwórz Xcode i przejdź do preferencji (przez górne menu)
  ```
  Preferencje -> Konta
  ```
  Naciśnij przycisk `+`. Możesz zalogować się za pomocą swojego AppleID (login i hasło z urządzeń iOS/macOS). Postępuj zgodnie z instrukcjami Xcode.
  Dla członków zespołu OsmAnd: wyślij swój login AppleID, aby zostać dodanym do listy deweloperów. Gdy otrzymasz e-mail z zaproszeniem, aktywuj je.
  Zamknij Xcode.

5. Zainstaluj narzędzia wiersza poleceń - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # dla intela
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # dla m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # testowane na 3.25.2, 3.19, 3.11

  # dla intela
  $ sudo gem install cocoapods

  # dla m1
  $ brew install cocoapods
  ```
6. Pobierz i zainstaluj Java jdk 17
  ```
  # dla intela
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # dla m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Utwórz nowy plik tekstowy. Lub zaktualizuj, jeśli istnieje.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Wklej tę zawartość. Zapisz plik i uruchom ponownie komputer.

```
## Ustawienia Gradle dla całego projektu. {#project-wide-gradle-settings}
#
# Aby uzyskać więcej informacji na temat konfiguracji środowiska kompilacji, odwiedź {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Określa argumenty JVM używane dla procesu demona. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# Ustawienie jest szczególnie przydatne do dostosowywania ustawień pamięci. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Wartość domyślna: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Po skonfigurowaniu Gradle będzie działać w trybie równoległym (inkubacyjnym). {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Ta opcja powinna być używana tylko z odseparowanymi projektami. Więcej szczegółów, odwiedź {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Pt Kwi 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Uruchom `prepare.sh`, aby skompilować bibliotekę Qt i pobrać zewnętrzne zależności
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Błąd: `Xcode nie jest poprawnie skonfigurowany. Może być konieczne potwierdzenie licencji...`.
  Rozwiązanie: przełącz XcodeCommandLineTools na aplikację Xcode, potwierdź licencję i przełącz z powrotem.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Rozwiązanie 2: sprawdź, czy xcrun jest dostępny: ``` /usr/bin/xcrun -find xcrun ```. Jeśli otrzymasz: ``` xcrun: błąd: nie można znaleźć narzędzia "xcrun", nie jest to narzędzie deweloperskie ani nie znajduje się w PATH ```. Następnie otwórz Xcode > Preferencje > Lokalizacje i w polu "Narzędzia wiersza poleceń" wybierz swoje narzędzia wiersza poleceń "Xcode XX.X" I uruchom `$ ./prepare.sh` ponownie.

  Rozwiązanie 3: Błąd: `CMake Error ... iphoneos nie jest pakietem SDK iOS`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Rozwiązanie 4: Jeśli otrzymasz błąd taki jak ten: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): Wymagana jest wersja CMake 3.21.2 lub nowsza. Używasz wersji 3.11.2 ```. Następnie pobierz instalator dmg ze strony CMake i wykonaj ręczną instalację. I uruchom `$ ./prepare.sh` ponownie.
  ```
  https://cmake.org/download/
  ```

  Rozwiązanie 5: Jeśli otrzymasz błąd taki jak ten: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Przejdź do folderu ```core/external/qtbase-ios/``` i usuń wszystkie foldery zaczynające się od ```upstream```. I uruchom `$ ./prepare.sh` ponownie.


9. Otwórz `osmand.xcworkspace` w Xcode

10. Pierwsza kompilacja.
  Ustaw cel kompilacji na `OsmAnd Maps`. (Obok przycisków odtwarzania/zatrzymywania). Wybierz jako cel swoje urządzenie lub jeden z symulatorów iOS. Ale nie używaj domyślnego 'Dowolne urządzenie iOS (arm64)'. Zbuduj projekt (przycisk odtwarzania).

11. Miejsca docelowe Xcode i piaskownica

 - Używaj "Mój Mac (zaprojektowany dla iPada)" do codziennego rozwoju (najlepsza wydajność)
 - Używaj miejsc docelowych iPhone/iPad do rozwoju UI/UX (wolno na procesorach M)

 - macOS może poprosić o zalogowanie się za pomocą Apple ID, gdy OsmAnd jest uruchomiony
 - Używaj swojego konta piaskownicy jako Apple ID, aby uniknąć powtarzających się żądań logowania
 - Używaj OsmAnd Cloud z subskrypcją promocyjną, aby uzyskać nieograniczone mapy

 - Poproś swojego lidera zespołu o konta piaskownicy i subskrypcje promocyjne

## Rozwiązywanie problemów {#troubleshooting}
### Czyszczenie plików tymczasowych. {#cleaning-temp-files}
  - W przypadku błędów kompilacji możesz nacisnąć w Xcode: ```Produkt -> Wyczyść folder kompilacji```
  - Zamknij Xcode.
  - Usuń foldery `baked` i `binaries` w katalogu `OsmAnd` (jeśli już istnieją).
  - Przejdź do folderu ```core/external/qtbase-ios/``` i usuń wszystkie foldery zaczynające się od ```upstream```.
  - Usuń folder Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Sprawdź, czy wszystkie repozytoria są aktualne i na właściwych gałęziach.
  - Uruchom ponownie komputer. (Tak, to może pomóc).
  - Następnie uruchom `$ ./prepare.sh`
  - Otwórz XCode i spróbuj ponownie zbudować projekt.

### Mac M1 {#m1-mac}
  - W przypadku ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Nawigator projektu -> OsmAnd_projects -> OsmAnd_projects (na liście Projekt/Cele) -> Ustawienia kompilacji -> Wszystkie -> Architektury -> Wykluczone architektury -> Debug
  - Dodaj pole tekstowe typu ```Any IOS Simulator SDK``` z wartością ```arm64```. (będziesz musiał je dodać po każdym uruchomieniu prepare.sh)
  - Zbuduj projekt. W przypadku błędów, wykonaj ponownie wszystkie instrukcje z ```11. Rozwiązywanie problemów - czyszczenie plików tymczasowych.``` i ```prepare.sh```.

## Dodatek debugowania Kotlin (opcjonalnie) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Zapoznaj się z sekcją Plik inicjalizacyjny LLDB, aby zakończyć konfigurację debugowania Kotlin.

## Dodatek debugowania Qt (opcjonalnie). Jeśli chcesz zobaczyć wartości Qt w trybie debugowania, uruchom to: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## Plik inicjalizacyjny LLDB (opcjonalnie) {#lldb-init-file-optional}
XCode 16+ nie ładuje automatycznie `~/.lldbinit-Xcode`, więc skonfiguruj go ręcznie za pomocą menu `Produkt - Schemat - Edytuj schemat - Uruchom - Plik inicjalizacyjny LLDB`.

Po ustawieniu tych parametrów uruchom ponownie komputer.