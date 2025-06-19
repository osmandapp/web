---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Come compilare la versione iOS {#how-to-compile-the-ios-version}

1. Per prima cosa, configura l'**[ambiente di sviluppo](setup-the-dev-environment.md)**.
2. Installa Xcode dall'AppStore (ultima versione testata 14.2)
3. Installa gli strumenti da riga di comando di Xcode
  ```
  $ xcode-select --install
  ```
  Oppure, in caso di errori, prova a scaricarlo e installarlo da: [sito Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Accedi all'account Xcode (opzionale)
  Nel caso in cui non disponessi di un account sviluppatore Apple. Apri Xcode e vai alle preferenze (tramite il menu in alto)
  ```
  Preferenze -> Account
  ```
  Premi il pulsante `+`. Puoi accedere con il tuo AppleID (login e password dei tuoi dispositivi iOS/macOS). Segui le istruzioni di Xcode.
  Per i membri del team OsmAnd: invia il tuo login AppleID, in modo da essere aggiunto all'elenco degli sviluppatori. Quando riceverai l'email con il messaggio di invito, attivalo.
  Chiudi Xcode.

5. Installa gli strumenti da riga di comando - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # per intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # per m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # testato su 3.25.2, 3.19, 3.11

  # per intel
  $ sudo gem install cocoapods

  # per m1
  $ brew install cocoapods
  ```
6. Scarica e installa Java jdk 17
  ```
  # per intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # per m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Crea un nuovo file di testo. Oppure aggiornalo se esiste.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Incolla questo contenuto al suo interno. Salva il file e riavvia il computer.

```
## Impostazioni Gradle a livello di progetto. {#project-wide-gradle-settings}
#
# Per maggiori dettagli su come configurare il tuo ambiente di build, visita {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Specifica gli argomenti JVM utilizzati per il processo daemon. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# L'impostazione è particolarmente utile per ottimizzare le impostazioni di memoria. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Valore predefinito: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Quando configurato, Gradle verrà eseguito in modalità parallela incubante. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Questa opzione dovrebbe essere utilizzata solo con progetti disaccoppiati. Maggiori dettagli, visita {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Ven 08 Aprile 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Esegui `prepare.sh` per compilare la libreria Qt e scaricare le dipendenze esterne
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Errore: `Xcode non configurato correttamente. Potrebbe essere necessario confermare la licenza...`.
  Soluzione: cambia XcodeCommandLineTools con l'app Xcode, conferma la licenza e cambialo di nuovo.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Soluzione 2: verifica se xcrun è disponibile: ``` /usr/bin/xcrun -find xcrun ```. Se ottieni: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Quindi apri Xcode > Preferenze > Posizioni e nel campo "Strumenti da riga di comando" seleziona i tuoi strumenti da riga di comando "Xcode XX.X" ed esegui di nuovo `$ ./prepare.sh`.

  Soluzione 3: Errore: `Errore CMake ... iphoneos non è un SDK iOS`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Soluzione 4: Se ottieni un errore come questo: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 o superiore è richiesto. Stai eseguendo la versione 3.11.2 ```. Quindi scarica l'installer dmg dal sito web di CMake ed esegui l'installazione manuale. Ed esegui di nuovo `$ ./prepare.sh`.
  ```
  https://cmake.org/download/
  ```

  Soluzione 5: Se ottieni un errore come questo: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Vai alla cartella ```core/external/qtbase-ios/``` ed elimina tutte le cartelle che iniziano con ```upstream```. Ed esegui di nuovo `$ ./prepare.sh`.


9. Apri `osmand.xcworkspace` in Xcode

10. Prima build.
  Imposta il target di build su `OsmAnd Maps`. (Vicino ai pulsanti play/stop). Seleziona come target il tuo dispositivo o uno dei simulatori iOS. Ma non utilizzare il valore predefinito 'Any iOS Device (arm64)'. Compila il progetto (pulsante play).

11. Destinazioni Xcode e Sandbox

 - Usa "My Mac (Designed for iPad)" per lo sviluppo quotidiano (migliori prestazioni)
 - Usa le destinazioni iPhone/iPad per lo sviluppo UI/UX (lento sui processori M)

 - MacOS potrebbe chiederti di accedere utilizzando l'ID Apple quando OsmAnd è attivo e funzionante
 - Usa il tuo account Sandbox come ID Apple per evitare richieste di accesso ripetute
 - Usa OsmAnd Cloud con il tuo abbonamento promozionale per ottenere mappe illimitate

 - Chiedi al tuo Team Leader gli account Sandbox e gli abbonamenti promozionali

## Risoluzione dei problemi {#troubleshooting}
### Pulizia dei file temporanei. {#cleaning-temp-files}
  - In caso di errori di build, puoi premere in Xcode: ```Prodotto -> Pulisci cartella build```
  - Chiudi Xcode.
  - Elimina le cartelle `baked` e `binaries` nella directory `OsmAnd` (se esiste già).
  - Vai alla cartella ```core/external/qtbase-ios/``` ed elimina tutte le cartelle che iniziano con ```upstream```.
  - Elimina la cartella Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Verifica che tutti i repository siano aggiornati e sui branch corretti.
  - Riavvia il computer. (Sì, può aiutare).
  - Quindi esegui `$ ./prepare.sh`
  - Apri XCode e prova a compilare di nuovo il progetto.

### Mac M1 {#m1-mac}
  - In caso di ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Navigatore progetto -> OsmAnd_projects -> OsmAnd_projects (nell'elenco Progetto/Target) -> Impostazioni build -> Tutto -> Architetture -> Architetture escluse -> Debug
  - Aggiungi un campo stringa di tipo ```Any IOS Simulator SDK``` con valore ```arm64```. (dovrai aggiungerlo dopo ogni esecuzione di prepare.sh)
  - Compila il progetto. In caso di errori, esegui di nuovo tutte le istruzioni da ```11. Risoluzione dei problemi - pulizia dei file temporanei.``` e ```prepare.sh```.

## Addon di debug Kotlin (opzionale) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Fai riferimento alla sezione File di inizializzazione LLDB per completare la configurazione del debug Kotlin.

## Addon di debug Qt (opzionale). Se vuoi vedere i valori Qt in modalità debug, esegui questo: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## File di inizializzazione LLDB (opzionale) {#lldb-init-file-optional}
XCode 16+ non carica automaticamente `~/.lldbinit-Xcode`, quindi configuralo manualmente utilizzando il menu `Prodotto - Schema - Modifica schema - Esegui - File di inizializzazione LLDB`.

Dopo aver impostato questi parametri, riavvia il computer.