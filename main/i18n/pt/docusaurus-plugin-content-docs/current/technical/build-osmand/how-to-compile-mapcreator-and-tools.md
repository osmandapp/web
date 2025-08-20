---
source-hash: 327829f314cc4f1e24fffee0913b64a5c6b746a367f055b12c2e71f3b9beed22
sidebar_position: 7
---

# Como compilar o OsmAndMapCreator e ferramentas {#how-to-compile-osmandmapcreator-and-tools}


## Compilar o OsmAndMapCreator {#compile-osmandmapcreator}
1. Primeiro, configure o **[ambiente de desenvolvimento](setup-the-dev-environment.md)**.
2. **Gradle** (linha de comando):
    - Compile com a linha de comando
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - O OsmAndMapCreator.zip será produzido com todos os scripts dentro
    **Nota**: o projeto Android é necessário para construir ferramentas (ele usa o projeto OsmAnd-java).
3. **Eclipse**:
    - Pré-configure os projetos do Eclipse
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - No Eclipse, em 'Importar' - 'Projetos existentes no espaço de trabalho', selecione as pastas 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Nota**: não selecione a pasta superior java-tools e, em vez disso, selecione os projetos especificados acima.
4. **IntelliJ IDEA**
    - 'Arquivo' > 'Novo' > 'Projeto a partir de fontes existentes...' e navegue até `java-tools`
    - Selecione 'Importar projeto a partir de modelo existente' e escolha 'gradle' na lista
5. Classes principais para executar a partir do IDE:
   - net.osmand.MainUtilities - representa utilities.sh e leva a todas as utilidades possíveis.
   - net.osmand.obf.BinaryInspector - utilitário inspector.sh para ler arquivos OBF e fornecer informações sobre eles.
   - net.osmand.obf.preparation.IndexCreator - atalho para gerar arquivo obf.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator
   
## Compilar biblioteca de renderização nativa para OsmAndMapCreator {#compile-native-rendering-library-for-osmandmapcreator}
A biblioteca de renderização nativa pode ser usada para testar a renderização offline ou o roteamento nativo offline. É muito útil para depurar e testar um estilo de renderização ou uma configuração de roteamento.

1. Primeiro, configure o **ambiente de desenvolvimento**, veja [ambiente de desenvolvimento](./setup-the-dev-environment).
2. Baixe as dependências externas
 ```
 cd core-legacy/externals
 ./configure.sh
 ```
3. Especifique JAVA_HOME globalmente via $PATH ou na linha de comando
  ```
  export JAVA_HOME=<>
  ```
4. Escolha um [destino](https://github.com/osmandapp/OsmAnd-core/tree/legacy_core/targets) específico para o SO e compile uma versão específica 'debug', 'release' ou '' (padrão). Exemplo
  ```
  cd core-legacy/targets
  ./intel-darwin.sh release # macOs release
  ./amd64-linux-clang.sh debug # linux debug - padrão
  cd ....baked # como intel-darwin-intel-darwin-clang-release.baked ou amd64-linux-amd64-clang-release.baked
  make -j4
  ```
5. Os binários estarão disponíveis em core-legacy/binaries/.
Exemplo:
  ```
    core-legacy/binaries/darwin/intel/Debug/libosmand.dylib
  ```

### Solução de problemas {#troubleshooting}
- Arquivos ausentes externals/libjpeg-turbo/jconfigint.h.in não existe.
Se você experimentar que o libjpeg-turbo não pôde compilar
```
targets/.cmake/../../externals/skia/upstream.patched/third_party/externals/libjpeg-turbo/jconfigint.h.in não existe.
```
Você pode encontrar os arquivos aqui e colocá-los na pasta especificada
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfig.h
https://github.com/osmandapp/OsmAnd-core/blob/legacy_core/externals/jpeg/jconfigint.h

## Compilar a versão do core qt para OsmAndMapCreator {#compile-qt-core-version-for-osmandmapcreator}
1. Primeiro, configure o **[ambiente de desenvolvimento](setup-the-dev-environment.md)**.
2. Prepare a compilação (cmake) para um destino específico. Exemplo clang / linux:
```
   alias clang='clang -std=c++11'
   build/amd64-linux-clang.sh release
```
3. Compile a versão da biblioteca
```
    (cd "baked/amd64-linux-clang-release.make" && make -j4)
```