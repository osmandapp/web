---
source-hash: ed4b1b02f7f55c370674eabb71f00501510288e583e3135341a0905ed0b8ad69
sidebar_position: 11
title:  OsmAnd Tracker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoAndroidOnly />

## Visão geral {#overview}

O OsmAnd Tracker é um cliente Telegram modificado, criado para monitoramento flexível e envio de mensagens com localizações GPS em tempo real.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) ajuda você a ver seus contatos em um mapa no OsmAnd. Ele tem um aspecto social, o que significa que, para usá-lo, você precisa fornecer acesso aos seus contatos para a plataforma que o OsmAnd escolher.

Escolhemos o [Telegram](https://telegram.org/) como a plataforma social mais aberta porque ele possui uma [API aberta](https://core.telegram.org/api), SDK aberto e, além disso, eventualmente terá uma implementação de servidor aberto (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Como funciona {#how-it-works}

É importante ressaltar que há um alto nível de compatibilidade entre os aplicativos. Você pode facilmente compartilhar sua localização com seus contatos sem ter o aplicativo móvel Telegram (o OsmAnd Online GPS Tracker é um cliente Telegram independente) e, inversamente, seus contatos não precisam ter o [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para ver sua localização.

Projetamos o [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) para que você possa continuar a usar o aplicativo Telegram e o aplicativo OsmAnd da maneira que está acostumado, sem restrições adicionais.

O aplicativo envia mensagens de Localização ao Vivo para os chats selecionados pelo tempo que você definir, exibe uma lista de seus contatos e grupos e verifica os chats em busca de mensagens com sua localização, que são então exibidas no mapa no OsmAnd.
O aplicativo não envia nem visualiza suas mensagens de texto.

Faça login usando seu número de telefone registrado no Telegram para ativar o seguinte:

- Gerenciar a lista de contatos e grupos que enviam sua localização.
- Visualizar a localização de contatos e grupos em tempo real em um mapa no OsmAnd.
- Definir o tempo para compartilhar a localização separadamente para cada chat.
- Definir a frequência de atualização da sua localização.
- Monitorar a cronologia de seus movimentos e de seus contatos.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Parâmetros de configuração necessários {#required-setup-parameters}

Você pode instalar o OsmAnd Online GPS Tracker:

- da [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- ou do [servidor OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk) (arquivo APK)


## Configurações do plugin {#plugin-settings}

Existem várias configurações para gerenciar a frequência de compartilhamento de localizações e controlar a exibição das localizações enviadas a você.

Para abrir o menu *Configurações*:

*[Tela Minha localização](#my-location-screen) → mover a tela para baixo (lista de contatos) → ⋮ → Configurações*  
ou  
*[Tela Ao vivo agora](#live-now-screen) → ⋮ → Configurações*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Posição {#position}

**Enviar minha localização** — permite definir o intervalo para enviar sua posição de uma vez por segundo (para aumentar a precisão) a uma vez a cada 5 minutos (para reduzir o consumo de energia).

**Não se movendo** — permite definir o tempo (de 1 minuto a 1 hora) após o qual a localização de um contato é considerada desatualizada. Se uma localização se tornar obsoleta, ela fica cinza.

**Histórico de localização** — permite definir o tempo (de 5 minutos a 24 horas) após o qual o contato com a localização excluída será ocultado da lista e do mapa do OsmAnd.

**Enviar localização como** - permite escolher uma categoria para enviar mensagens sobre sua localização no Telegram (3 tipos de envio): texto, mapa, texto e mapa.

**Tempo de expiração do buffer** - permite escolher o tempo de salvamento de pontos no buffer.

**Trabalho em segundo plano** - permite alterar as configurações de otimização da bateria para estabilizar o compartilhamento de localização.

**Fonte de localização** - permite escolher *Google Play Services* (por padrão) ou *Android API* para determinar a localização.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Unidades e formatos {#units--formats}

Permite adicionar configurações para unidades e formatos. Agora você pode escolher seus valores confortáveis para mensagens do Telegram ao compartilhar dados de localização.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Aparência {#appearance}

Permite mostrar o número de pontos GPS recebidos de outros contatos, bem como os enviados por você.


### Privacidade {#privacy}

Usando proxy dentro do OsmAnd Tracker. Vá para Configurações e escreva seus dados de proxy: *Configurações → Privacidade → Configurações de Proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Configurações de GPS {#gps-settings}

Configurações do ponto de localização. Por exemplo, se você permanecer em um local por algum tempo sem se mover, seus dados de ponto de localização não serão enviados e sua trilha GPX exibirá dados mais precisos e exatos.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Compartilhar localização como {#share-location-as}

Se você deseja conectar vários dispositivos a uma conta do Telegram, precisa clicar em "Adicionar dispositivo" e nomear o dispositivo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### Conexão OsmAnd {#osmand-connect}

Esta configuração permite selecionar a versão do OsmAnd na qual seus contatos com sua localização aparecerão no mapa.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Conta {#account}

Use esta configuração para verificar qual conta do Telegram você está usando atualmente. Também neste menu você pode sair do aplicativo OsmAnd Telegram simplesmente tocando no botão *Sair*.


### Buffer de Logcat {#logcat-buffer}

Aqui você pode verificar e compartilhar logs detalhados do aplicativo.


## Tela Minha Localização {#my-location-screen}

Nesta tela, você pode ver seus contatos do Telegram. Você pode escolher um ou mais deles, definir opções de compartilhamento e começar a compartilhar sua localização.

Após o primeiro lançamento, você verá uma lista de Contatos Sugeridos. Estes são os cinco contatos mais recentes com os quais você compartilhou sua localização. Você pode clicar apenas uma vez para continuar compartilhando sua localização com esses contatos.

Tempo de Compartilhamento é o último tempo de compartilhamento que você selecionou para o contato.

Ao iniciar o compartilhamento, você verá uma lista de Contatos Sugeridos e um botão *Voltar para OsmAnd* na tela *Minha localização*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Tela Ao Vivo Agora {#live-now-screen}

Neste menu, você pode ver todos os contatos que estão compartilhando uma localização com você. Toque no contato e veja-o no **mapa do OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Marcador ativo no mapa do OsmAnd {#active-marker-on-the-osmand-map}

Permite rastrear a distância, velocidade e ângulo de movimento de seus contatos no mapa do OsmAnd e no texto do Telegram. Você pode entender onde e como seu contato está se movendo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Tela Linha do Tempo {#timeline-screen}

Esta é a terceira aba do aplicativo. Esta é a terceira aba do aplicativo. Aqui você pode selecionar um dia para visualizar o histórico de localizações compartilhadas com você. A seleção de um dia exibe os contatos que mostraram sua localização naquele dia.

O monitoramento permite coletar informações em segundo plano quando seus contatos as compartilham. Para fazer isso, você deve ativá-lo.

Para visualizar todas as informações sobre a localização de um contato, toque em seu ícone ou abra uma trilha GPX no OsmAnd e explore a trilha com mais detalhes ([leia mais aqui](./trip-recording.md)). Você também pode compartilhar a trilha GPX por um período selecionado: enviando-a para um e-mail ou qualquer mensageiro instantâneo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Você pode ver o movimento online de seus contatos no mapa do OsmAnd usando a trilha GPS online. Para fazer isso, você precisa ativar *Ao vivo* no contato na *Linha do tempo*. Se houver muitos contatos em comum no momento, o aplicativo OsmAnd seleciona a cor das trilhas aleatoriamente.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Ao tocar em "Mostrar no OsmAnd" ou no mini-mapa, você pode selecionar configurações especiais para o rastreamento GPX do seu contato no aplicativo OsmAnd e ver seu movimento em tempo real no mapa do OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Se não houver dados coletados na data selecionada, uma notificação especial aparecerá na tela. Você pode mover para a data mais próxima tocando na seta para frente ou para trás.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Widget do Rastreador {#tracker-widget}

Para visualizar o [widget](../widgets/info-widgets.md#trip-recording-widgets), você precisa primeiro ativar o plugin OsmAnd Tracker. Depois disso, um widget com a palavra *Iniciar* aparecerá no canto superior direito da tela do OsmAnd.

Para desativá-lo, você pode ir para *Menu Principal → Configurar tela*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

O widget tem várias visualizações.

1. A primeira é *Iniciar*.  
   Ao tocar em *Iniciar*, você vai para o [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), onde você pode selecionar quaisquer contatos ou tocar em Contatos Sugeridos.
2. Em segundo lugar, quando você começa a compartilhar sua localização, o widget muda sua aparência.  

   - O ícone de emoji verde *OK* significa que sua localização está sendo compartilhada. Tudo normal, o compartilhamento está funcionando sem erros.  
   - Um ícone de emoji laranja *OK* significa que sua localização não pode ser enviada. Há um problema com a conexão de Internet ou GPS.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Se você não tiver uma conexão com a Internet por um longo tempo, seus pontos de localização serão salvos no buffer do OsmAnd Tracker. O widget no OsmAnd muda sua aparência para um ícone de emoji cinza. Ele mostra o tempo de preenchimento do buffer, quanto tempo o buffer já salva seus pontos de localização.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Assim que a conexão com a Internet for restaurada, ele começará a carregar os pontos de localização do buffer. O widget do OsmAnd mudará sua aparência e o número de minutos nele começará a diminuir. Quando todos os pontos de localização do buffer forem carregados para o Telegram, o ícone de emoji *OK* aparecerá no widget.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Se você vir o widget como um ícone de emoji *OK*, significa que tudo está bem. O processo de troca está ocorrendo sem problemas.


## Assistente OsmAnd {#osmand-assistant}

O aplicativo OsmAnd tem seu próprio bot do Telegram chamado "OsmAnd Assistant", que ajuda você a integrar o OsmAnd Telegram com rastreadores ou APIs de terceiros. Você poderá compartilhar não apenas sua localização, mas também a localização de sua bicicleta ou de um grupo de pessoas correndo disponível através da API. O OsmAnd Telegram fornecerá uma boa apresentação de suas localizações no mapa no próprio OsmAnd.

Por favor, compartilhe conosco o que você pensa sobre este novo aplicativo no [Twitter](https://x.com/osmandapp) e em outros canais sociais.

Para visualizar as posições GPS dos contatos no mapa, você precisa da versão mais recente do [OsmAnd ou OsmAnd+](./../purchases/android.md). A versão mínima suportada do OsmAnd ou OsmAnd+ é 3.0.4.