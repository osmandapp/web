---
sidebar_position: 7
---

# How to Compile OsmAndMapCreator and tools {#how-to-compile-osmandmapcreator-and-tools}


## Compile OsmAndMapCreator {#compile-osmandmapcreator}
1. First setup the **[development environment](setup-the-dev-environment.md)**.
2. **Gradle** (command line):
    - Compile with command line 
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip will be produced with all scripts inside
    **Note**: android project is required to build tools (it uses OsmAnd-java project).
3. **Eclipse**:
    - Preconfigure eclipse projects
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - In Eclipse 'Import' - 'Existing projects in workspace' select folders 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Note**: don't select top folder java-tools and instead select specified above projects.    
4. Android Studio / Idea
    Feel free to make pull request to this documentation and describe how it could be done.
5. Main classes to execute from IDE:
   - net.osmand.MainUtilities - represents utilities.sh and leads to all possible utilties.
   - net.osmand.obf.BinaryInspector - inspector.sh utility to read OBF files and gives information about it.
   - net.osmand.obf.preparation.IndexCreator - shortcut to generate obf file.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator
   
## Compile Native rendering library for OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
Native rendering library could be used to test Offline Rendering or Offline Native Routing. It's very useful to debug and test a rendering style or a routing configuration.

1. First setup the **development environment**, see [development environment](./setup-the-dev-environment).
2. Download external dependencies
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Specify JAVA_HOME globally via $PATH or in command line 
  ```
  export JAVA_HOME=<>
  ```
4. Choose a specific [target](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) for OS and compile a specific version 'debug', 'release' or '' (default). Example
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - default
  cd ....baked # like intel-darwin-intel-darwin-clang-release.baked or amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Binaries will be available at core-legacy/binaries/.
Example:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Troubleshooting {#troubleshooting}
- Missing files externals/libjpeg-turbo/jconfigint.h.in does not exist.
If you experience that libjpeg-turbo couldn't compile
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in does not exist.
```
You can find the files here and put them in the specified folder
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compile qt core version for OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. First setup the **[development environment](setup-the-dev-environment.md)**.
2. Prepare build (cmake) for specific target. Example clang / linux :
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compile library release
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```
