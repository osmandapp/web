---
source-hash: 8cfaeb188adf8c1a24d710a5caef6a5cc4eb8a7611ebe74b7f246a1173d8bdbb
sidebar_position: 6
---

# Como Compilar a Versão iOS {#how-to-compile-the-ios-version}

1. Primeiro, configure o **[ambiente de desenvolvimento](setup-the-dev-environment.md)**.
2. Instale o Xcode da AppStore (Última versão testada: 14.2)
3. Instale as ferramentas de linha de comando do Xcode
  ```
  $ xcode-select --install
  ```
  Ou, em caso de erros, tente baixar e instalar em: [site da Apple](https://developer.apple.com/download/all/?q=xcode>).

4. Faça login na conta do Xcode (opcional)
  Caso você não tenha uma conta de Desenvolvedor Apple. Abra o Xcode e vá para as preferências (pelo menu superior)
  ```
  Preferências -> Contas
  ```
  Pressione o botão `+`. Você pode fazer login com seu AppleID (login e senha dos seus dispositivos iOS/macOS). Siga as instruções do Xcode.
  Para membros da equipe OsmAnd: envie seu login AppleID para ser adicionado à lista de desenvolvedores. Quando receber o e-mail com a mensagem de convite, ative-o.
  Feche o Xcode.

5. Instale as ferramentas de linha de comando - cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # para intel
  $ echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/usr/local/bin/brew shellenv)"

  # para m1
  $ echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  $ eval "$(/opt/homebrew/bin/brew shellenv)"

  $ brew install svn
  $ brew install cmake # testado em 3.25.2, 3.19, 3.11

  # para intel
  $ sudo gem install cocoapods

  # para m1
  $ brew install cocoapods
  ```
6. Baixe e instale o Java jdk 17
  ```
  # para intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # para m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Crie um novo arquivo de texto. Ou atualize se ele existir.
  ```
  $ mkdir ~/.gradle
  $ nano ~/.gradle/gradle.properties
  ```

  Cole este conteúdo nele. Salve o arquivo e reinicie o computador.

```
## Configurações do Gradle para todo o projeto. {#project-wide-gradle-settings}
#
# Para mais detalhes sobre como configurar seu ambiente de compilação, visite {#for-more-details-on-how-to-configure-your-build-environment-visit}
# http://www.gradle.org/docs/current/userguide/build_environment.html {#httpwwwgradleorgdocscurrentuserguidebuildenvironmenthtml}
#
# Especifica os argumentos JVM usados para o processo daemon. {#specifies-the-jvm-arguments-used-for-the-daemon-process}
# A configuração é particularmente útil para ajustar as configurações de memória. {#the-setting-is-particularly-useful-for-tweaking-memory-settings}
# Valor padrão: -Xmx10248m -XX:MaxMetaspaceSize=256m {#default-value--xmx10248m--xxmaxmetaspacesize256m}
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8 {#orggradlejvmargs-xmx2048m--xxmaxmetaspacesize512m--xxheapdumponoutofmemoryerror--dfileencodingutf-8}

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# Quando configurado, o Gradle será executado no modo paralelo incubador. {#when-configured-gradle-will-run-in-incubating-parallel-mode}
# Esta opção só deve ser usada com projetos desacoplados. Mais detalhes, visite {#this-option-should-only-be-used-with-decoupled-projects-more-details-visit}
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects {#httpwwwgradleorgdocscurrentuserguidemultiprojectbuildshtmlsecdecoupledprojects}

org.gradle.parallel=true
org.gradle.caching=true

#Sex Abr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true {#androidusedeprecatedndktrue}
```

8. Execute `prepare.sh` para compilar a biblioteca Qt e baixar as dependências externas
  ```
  $ cd ios
  $ ./prepare.sh
  ```

  Erro: `Xcode not set up properly. You may need to confirm the license...`.
  Solução: mude o XcodeCommandLineTools para o aplicativo Xcode, confirme a licença e mude de volta.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Solução 2: verifique se o xcrun está disponível: ``` /usr/bin/xcrun -find xcrun ```. Se você receber: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Então abra o Xcode > Preferências > Locais e no campo "Command Line Tools" selecione suas ferramentas de linha de comando "Xcode XX.X" E execute `$ ./prepare.sh` novamente.

  Solução 3: Erro: `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Solução 4: Se você receber um erro como este: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Então baixe o instalador dmg do site do CMake e faça a instalação manual. E execute `$ ./prepare.sh` novamente.
  ```
  https://cmake.org/download/
  ```

  Solução 5: Se você receber um erro como este: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Vá para a pasta ```core/external/qtbase-ios/``` e exclua todas as pastas que começam com ```upstream```. E execute `$ ./prepare.sh` novamente.


9. Abra `osmand.xcworkspace` no Xcode

10. Primeira compilação.
  Defina o destino da compilação para `OsmAnd Maps`. (Perto dos botões de reprodução/parada). Selecione seu dispositivo ou um dos simuladores iOS como destino. Mas não use o padrão 'Any iOS Device (arm64)'. Compile o projeto (botão de reprodução).

11. Destinos do XCode e Sandbox

 - Use "My Mac (Designed for iPad)" para o desenvolvimento diário (melhor desempenho)
 - Use destinos de iPhone/iPad para desenvolvimento de UI/UX (lento em processadores M)

 - O MacOS pode pedir para você fazer login usando o Apple ID quando o OsmAnd estiver funcionando
 - Use sua conta Sandbox como Apple ID para evitar solicitações de login repetidas
 - Use o OsmAnd Cloud com sua assinatura Promo para obter mapas ilimitados

 - Peça ao seu Líder de Equipe as contas Sandbox e as assinaturas Promo

## Solução de problemas {#troubleshooting}
### Limpando arquivos temporários. {#cleaning-temp-files}
  - Em caso de erros de compilação, você pode pressionar no Xcode: ```Product -> Clean build folder```
  - Feche o Xcode.
  - Exclua as pastas `baked` e `binaries` no diretório `OsmAnd` (se já existirem).
  - Vá para a pasta ```core/external/qtbase-ios/``` e exclua todas as pastas que começam com ```upstream```.
  - Exclua a pasta Xcode DerivedData: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Verifique se todos os repositórios estão atualizados e nas branches corretas.
  - Reinicie o computador. (Sim, isso pode ajudar).
  - Em seguida, execute `$ ./prepare.sh`
  - Abra o XCode e tente compilar o projeto novamente.

### Mac M1 {#m1-mac}
  - Em caso de ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Project Navigator -> OsmAnd_projects -> OsmAnd_projects (na lista Project/Targets) -> Build settings -> All -> Architectures -> Excluded Architectures -> Debug
  - Adicione um campo de string do tipo ```Any IOS Simulator SDK``` com o valor ```arm64```. (você precisará adicioná-lo após cada execução do prepare.sh)
  - Compile o projeto. Em caso de erros, siga todas as instruções de ```11. Solução de problemas - limpando arquivos temporários.``` e ```prepare.sh``` novamente.

## Addon de depuração Kotlin (opcional) {#kotlin-debug-addon-optional}
```
$ brew install xcode-kotlin
$ xcode-kotlin install
$ xcode-kotlin sync
```

Consulte a seção Arquivo Init do LLDB para finalizar a configuração de depuração do Kotlin.

## Addon de depuração Qt (opcional). Se você quiser ver os valores Qt no modo de depuração, execute isto: {#qt-debug-addon-optional-if-you-want-to-see-qt-values-in-debug-mode-run-this}
```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit-Xcode
$ echo "" >> ~/.lldbinit-Xcode
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit-Xcode
```

## Arquivo Init do LLDB (opcional) {#lldb-init-file-optional}
O XCode 16+ não carrega `~/.lldbinit-Xcode` automaticamente, então configure-o manualmente usando o menu `Product - Scheme - Edit scheme - Run - LLDB Init File`.

Após definir esses parâmetros, reinicie o computador.