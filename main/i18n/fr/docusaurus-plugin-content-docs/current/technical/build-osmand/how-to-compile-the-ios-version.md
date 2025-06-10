---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Comment compiler la version iOS {#how-to-compile-the-ios-version}

1. Configurez d'abord l'**[environnement de développement](setup-the-dev-environment.md)**.
2. Installez Xcode depuis l'AppStore (dernière version testée 14.2)
3. Installez les outils de ligne de commande Xcode
  ```
  $ xcode-select --install
  ```
  Ou en cas d'erreurs, essayez de le télécharger et de l'installer depuis : [site Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Connectez-vous au compte Xcode (facultatif)
  Au cas où vous n'auriez pas de compte Apple Developer. Ouvrez Xcode et allez dans les préférences (via le menu supérieur)
  ```
  Préférences -> Comptes
  ```
  Appuyez sur le bouton `+`. Vous pouvez vous connecter avec votre AppleID (identifiant et mot de passe de vos appareils iOS/macOS). Suivez les instructions de Xcode.
  Pour les membres de l'équipe OsmAnd : envoyez votre identifiant AppleID, afin d'être ajouté à la liste des développeurs. Lorsque vous recevrez un e-mail avec un message d'invitation, activez-le.
  Fermez Xcode.

5. Installez les outils de ligne de commande - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # pour intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # pour m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # testé sur 3.25.2, 3.19, 3.11

  # pour intel
  $ sudo gem install cocoapods

  # pour m1
  $ brew install cocoapods
  ```
6. Téléchargez et installez Java jdk 17
  ```
  # pour intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # pour m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Créez un nouveau fichier texte. Ou mettez-le à jour s'il existe.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Collez ce contenu dedans. Enregistrez le fichier et redémarrez l'ordinateur.

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

8. Exécutez `prepare.sh` pour compiler la bibliothèque Qt et télécharger les dépendances externes
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Erreur : `Xcode not set up properly. You may need to confirm the license...`.
  Solution : basculez XcodeCommandLineTools vers l'application Xcode, confirmez la licence et rebasculez.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Solution 2 : vérifiez si xcrun est disponible : ``` /usr/bin/xcrun -find xcrun ```. Si vous obtenez : ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Alors ouvrez Xcode > Préférences > Emplacements et dans le champ "Outils de ligne de commande" sélectionnez vos outils de ligne de commande "Xcode XX.X" et exécutez à nouveau `$ ./prepare.sh`.

  Solution 3 : Erreur : `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Solution 4 : Si vous obtenez une erreur comme celle-ci : ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Alors téléchargez l'installateur dmg depuis le site web de CMake et effectuez une installation manuelle. Et exécutez à nouveau `$ ./prepare.sh`.
  ```
  https://cmake.org/download/
  ```

  Solution 5 : Si vous obtenez une erreur comme celle-ci : ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Allez dans le dossier ```core/external/qtbase-ios/``` et supprimez tous les dossiers commençant par ```upstream```. Et exécutez à nouveau `$ ./prepare.sh`.


9. Ouvrez `osmand.xcworkspace` dans Xcode

10. Première compilation.
  Définissez la cible de compilation sur `OsmAnd Maps`. (Près des boutons lecture/arrêt). Sélectionnez comme cible votre appareil ou l'un des simulateurs iOS. Mais n'utilisez pas la valeur par défaut 'Any iOS Device (arm64)'. Compilez le projet (bouton lecture).

11. Destinations Xcode et Sandbox

 - Utilisez "My Mac (Designed for iPad)" pour le développement quotidien (meilleures performances)
 - Utilisez les destinations iPhone/iPad pour le développement UI/UX (lent sur les processeurs M)

 - MacOS pourrait vous demander de vous connecter en utilisant votre Apple ID lorsque OsmAnd est opérationnel
 - Utilisez votre compte Sandbox comme Apple ID pour éviter les demandes de connexion répétées
 - Utilisez OsmAnd Cloud avec votre abonnement Promo pour obtenir des cartes illimitées

 - Demandez à votre chef d'équipe les comptes Sandbox et les abonnements Promo

## Dépannage {#troubleshooting}
### Nettoyage des fichiers temporaires. {#cleaning-temp-files}
  - En cas d'erreurs de compilation, vous pouvez appuyer dans Xcode sur : ```Produit -> Nettoyer le dossier de compilation```
  - Fermez Xcode.
  - Supprimez les dossiers `baked` et `binaries` dans le répertoire `OsmAnd` (s'il existe déjà).
  - Allez dans le dossier ```core/external/qtbase-ios/``` et supprimez tous les dossiers commençant par ```upstream```.
  - Supprimez le dossier Xcode DerivedData : ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Vérifiez que tous les dépôts sont à jour et sur les bonnes branches.
  - Redémarrez votre ordinateur. (Oui, cela peut aider).
  - Ensuite, exécutez `$ ./prepare.sh`
  - Ouvrez XCode et essayez de compiler le projet à nouveau.

### Mac M1 {#m1-mac}
  - En cas de ```ld: library not found for -lOsmAndCore_static_standalone``` :
  - Navigateur de projet -> OsmAnd_projects -> OsmAnd_projects (dans la liste Projet/Cibles) -> Paramètres de compilation -> Tout -> Architectures -> Architectures exclues -> Débogage
  - Ajoutez un champ de chaîne de type ```Any IOS Simulator SDK``` avec la valeur ```arm64```. (vous devrez l'ajouter après chaque exécution de prepare.sh)
  - Compilez le projet. En cas d'erreurs, suivez à nouveau toutes les instructions de ```11. Dépannage - nettoyage des fichiers temporaires.``` et ```prepare.sh```.

## Addon de débogage Kotlin (facultatif) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Reportez-vous à la section Fichier d'initialisation LLDB pour terminer la configuration du débogage Kotlin.

## Addon de débogage Qt (facultatif). Si vous souhaitez voir les valeurs Qt en mode débogage, exécutez ceci : {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## Fichier d'initialisation LLDB (facultatif) {#lldb-init-file-optional}
XCode 16+ ne charge pas automatiquement `~/.lldbinit-Xcode`, alors configurez-le manuellement en utilisant le menu `Produit - Schéma - Modifier le schéma - Exécuter - Fichier d'initialisation LLDB`.

Après avoir défini ces paramètres, redémarrez votre ordinateur.