---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# Comment compiler OsmAndMapCreator et les outils {#how-to-compile-osmandmapcreator-and-tools}

## Compiler OsmAndMapCreator {#compile-osmandmapcreator}
1. Tout d'abord, configurez l'**[environnement de développement](setup-the-dev-environment.md)**.
2. **Gradle** (ligne de commande) :
    - Compilez avec la ligne de commande
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip sera produit avec tous les scripts à l'intérieur.
    **Note** : le projet Android est nécessaire pour construire les outils (il utilise le projet OsmAnd-java).
3. **Eclipse** :
    - Pré-configurez les projets Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - Dans Eclipse, 'Importer' - 'Projets existants dans l'espace de travail', sélectionnez les dossiers 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Note** : ne sélectionnez pas le dossier supérieur java-tools, mais plutôt les projets spécifiés ci-dessus.
4. **IntelliJ IDEA**
    - 'Fichier' > 'Nouveau' > 'Projet à partir de sources existantes...' et naviguez jusqu'à `java-tools`
    - Sélectionnez 'Importer le projet à partir du modèle existant' et choisissez 'gradle' dans la liste.
5. Classes principales à exécuter depuis l'IDE :
   - net.osmand.MainUtilities - représente utilities.sh et mène à toutes les utilités possibles.
   - net.osmand.obf.BinaryInspector - utilitaire inspector.sh pour lire les fichiers OBF et donner des informations à leur sujet.
   - net.osmand.obf.preparation.IndexCreator - raccourci pour générer un fichier obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator

## Compiler la bibliothèque de rendu native pour OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
La bibliothèque de rendu native peut être utilisée pour tester le rendu hors ligne ou le routage natif hors ligne. Elle est très utile pour déboguer et tester un style de rendu ou une configuration de routage.

1. Tout d'abord, configurez l'**environnement de développement**, voir [environnement de développement](./setup-the-dev-environment).
2. Téléchargez les dépendances externes
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Spécifiez JAVA_HOME globalement via $PATH ou en ligne de commande
  ```
  export JAVA_HOME=<>
  ```
4. Choisissez une [cible](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) spécifique pour l'OS et compilez une version spécifique 'debug', 'release' ou '' (par défaut). Exemple :
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - default
  cd ....baked # comme intel-darwin-intel-darwin-clang-release.baked ou amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Les binaires seront disponibles dans core-legacy/binaries/.
Exemple :
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Dépannage {#troubleshooting}
- Fichiers manquants externals/libjpeg-turbo/jconfigint.h.in n'existe pas.
Si vous rencontrez que libjpeg-turbo n'a pas pu compiler
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in n'existe pas.
```
Vous pouvez trouver les fichiers ici et les placer dans le dossier spécifié
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compiler la version Qt core pour OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Tout d'abord, configurez l'**[environnement de développement](setup-the-dev-environment.md)**.
2. Préparez la construction (cmake) pour une cible spécifique. Exemple clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compilez la version de la bibliothèque
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```