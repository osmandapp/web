---
source-hash: 5f3cf642f46def8b297602c9bfd712fe505ad1b49873449f53c2a266a969471b
sidebar_position: 5
title: Logs de Falhas
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Visão Geral {#overview}

Os logs de falhas são ferramentas de diagnóstico valiosas que ajudam os desenvolvedores a identificar e corrigir problemas e bugs que causam o aplicativo a falhar ou se comportar de forma inesperada. É possível compartilhar logs do seu dispositivo Android com a equipe de desenvolvimento do OsmAnd. Atualmente, os usuários de iOS têm apenas um tipo de opção de log de falha para enviar.


## Logs de Falhas e Logs do Logcat {#crash-and-logcat-logs}

O OsmAnd permite que você envie dois tipos de dados para os desenvolvedores:

- **Logs de falhas**. Gerados quando o aplicativo OsmAnd encontra um erro crítico ou exceção que o faz falhar. Esses logs fornecem informações detalhadas sobre o estado do aplicativo durante a falha, incluindo dados de compilação, rastreamentos de pilha, mensagens de erro e outros detalhes relevantes.
- **Logs do Logcat**. Um registro do fluxo de log do OsmAnd que captura vários eventos e mensagens. Esses logs ajudam os desenvolvedores a monitorar o comportamento do aplicativo, rastrear o fluxo de execução, rastrear ações específicas e investigar problemas não relacionados a falhas. Os logs do Logcat geralmente contêm registros de atividade desde a última vez que o aplicativo foi iniciado.

:::caution Suas informações privadas
Tenha cuidado ao enviar logs do Logcat, pois eles podem conter informações privadas, como localização do dispositivo, consultas de pesquisa, resultados de construção de rotas e dados de navegação.
:::


### Enviar Logs do Aplicativo OsmAnd (Android) {#send-logs-from-osmand-app-android}

1. Vá para *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Dependendo da sua situação, selecione o tipo de log apropriado. Você pode consultar a seção [Logs de Falhas e Logs do Logcat](#crash-and-logcat-logs) para obter detalhes sobre as diferenças entre os tipos de log.
2. No menu pop-up, escolha o Gmail ou seu aplicativo de e-mail preferido. O e-mail será gerado automaticamente.
3. Toque no botão *Enviar*.

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)


### Enviar Logs de Dispositivos iOS {#send-logs-from-ios-devices}

1. Os logs de dispositivos iOS podem ser enviados:

    - Automaticamente.
        - Navegue até o aplicativo OsmAnd *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Em seguida, usando seu aplicativo de e-mail, recomendamos enviar os logs para `support@osmand.net`.

    - Manualmente.
        - Navegue até o aplicativo do sistema iOS *Arquivos → No meu iPhone (ou No meu iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Envie [formato IPS](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) de logs e dados de autorização:
    - Em iOS 15 ou anterior: *Configurações → Análise → Dados de Análise → Arquivo OsmAnd Maps em formato ips*.
    - Em iOS 16 ou posterior:  *Configurações → Privacidade e Segurança → Análise e Melhorias → Dados de Análise → Arquivo OsmAnd Maps em formato ips*.
    - Em seguida, usando seu aplicativo de e-mail, recomendamos enviar os logs para `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)


## Enviar Arquivos Tombstone (Android) {#send-tombstone-files-android}

:::caution Crucial
Apenas para usuários avançados!
:::

Em certos casos complexos ou incomuns, *[arquivos Tombstone](https://source.android.com/docs/core/tests/debug)* podem ser necessários. Esses arquivos fornecem rastreamentos de pilha detalhados para todos os threads em um processo com falha (não apenas aquele que causou o erro), um mapa de memória completo e uma lista de todos os descritores de arquivo abertos. Os arquivos Tombstone são vitais para depurar e diagnosticar problemas relacionados ao código nativo na plataforma Android.


### Usando Seu Dispositivo {#using-your-device}

Para exportar arquivos tombstone, você precisa gerar um relatório de bug usando as configurações do sistema Android:

1. Ative as *Opções do desenvolvedor* (esta tela está oculta por padrão).
    - Vá para *Configurações → Sobre o telefone → Informações do software* (este caminho é válido para dispositivos Samsung).
    - Toque em *Número da compilação* sete vezes até que um pop-up confirme que o modo de desenvolvedor está ativo.

2. Vá para *Opções do desenvolvedor*, geralmente localizadas na parte inferior da lista de configurações. Você também pode usar a função de pesquisa.
    - Toque na opção *Fazer relatório de bug*.
    - Selecione o tipo de relatório de bug e toque em *Relatar*.
  
Depois que o relatório de bug estiver pronto, você receberá uma notificação. Toque na caixa de notificação para baixar o relatório para o seu dispositivo. Descompacte o arquivo e envie os arquivos tombstone para a equipe de desenvolvedores do OsmAnd (e-mail: `support@osmand.net`).

![Send crash logs from Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Send crash logs from Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Observe que os relatórios de bug podem conter dados privados, incluindo uso de aplicativos ou localização.
:::

### Usando ADB {#using-adb}

O Android Debugging Bridge (ADB) é uma ferramenta de linha de comando que permite aos desenvolvedores depurar seus aplicativos. Para usar o ADB para exportar arquivos tombstone, você precisará baixá-lo e instalá-lo primeiro. Siga as instruções fornecidas no [site oficial do desenvolvedor Android](https://developer.android.com/tools/releases/platform-tools).

#### Preparar Seu Dispositivo {#prepare-your-device}

Certifique-se de que as *Opções do desenvolvedor* estejam ativadas (esta tela está oculta por padrão) e a *Depuração USB* esteja ligada:

- Navegue até *Configurações → Sobre o telefone → Informações do software*.
- Toque em *Número da compilação* sete vezes até que um pop-up confirme que o modo de desenvolvedor está ativo.
- Nas *Opções do desenvolvedor*, ative *Depuração USB*.

Em seguida, conecte seu dispositivo à sua estação de trabalho via USB. Se for a primeira vez que você se conecta, um pop-up aparecerá pedindo permissão para permitir a depuração.

#### Gerar Relatório de Bug {#generate-bug-report}

1. Abra um terminal de linha de comando. No Mac ou Linux, use o aplicativo *Terminal*, e no Windows, use o *Prompt de Comando*.
2. Navegue até a pasta platform-tools onde o ADB está localizado usando o comando *cd* (por exemplo, ‘cd /Users/Username/Downloads/Tools’).
3. Gere o relatório de bug:
   - No Mac: ```adb bugreport```
   - No Windows: ```adb.exe bugreport```
4. Aguarde alguns minutos para que o relatório seja gerado. O arquivo resultante será salvo na pasta platform-tools.
5. Descompacte o arquivo.
6. Encontre a pasta *tombstones* com arquivos como *tombstone_00*, *tombstone_01* e semelhantes.
7. Envie os arquivos tombstone para `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Usando Dispositivos Rooteados ou Emulador Android Studio {#using-rooted-devices-or-android-studio-emulator}

- Com acesso root ao seu dispositivo, você pode abrir diretamente a pasta */data/tombstones*.  

- No Android Studio, use o emulador para navegar até o *Device File Explorer* e encontrar a pasta /data/tombstones. Dentro, você encontrará arquivos nomeados como *tombstone_00*, *tombstone_01* e outros. Baixe esses arquivos e envie-os para `support@osmand.net`.

Para mais detalhes sobre relatórios de bug, consulte a [documentação do Android](https://developer.android.com/studio/debug/bug-report).