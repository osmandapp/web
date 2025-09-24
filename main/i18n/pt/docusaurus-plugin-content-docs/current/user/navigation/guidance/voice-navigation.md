---
source-hash: 844b3f804475dddf7574a87aa0ef1e75695668c1b6828dd4e5171fe9e8a7c53d
sidebar_position: 3
title: Prompts de Voz / Notificações
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



## Visão Geral {#overview}

O recurso de navegação por voz do OsmAnd fornece instruções e alertas falados em tempo real que o ajudam a manter-se informado e seguro enquanto se desloca. Você pode adaptar a orientação às suas preferências e necessidades. Para fazer isso, selecione um perfil de voz adequado, seja um [mecanismo de Text-to-Speech (TTS)](#tts-text-to-speech) que pode anunciar dinamicamente nomes de ruas, distâncias e limites de velocidade, ou uma [voz pré-gravada](#recorded-voice-prompts) que oferece instruções concisas.

Além das direções passo a passo, a navegação por voz do OsmAnd pode notificá-lo sobre pontos de interesse próximos, mudanças nas condições do tráfego e quando você excede um limite de velocidade predefinido. Para saber mais sobre como personalizar esses alertas, consulte [Configurações de tempo de anúncio](#announcement-time) e [Avisos de limite de velocidade](#speed-limit).

Com a combinação certa de opções de voz, configurações de alerta e ajustes de som do dispositivo, você receberá informações de navegação claras e oportunas durante todo o seu percurso.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- As notificações de texto refletem totalmente o tempo de acionamento e as mensagens dos prompts de voz.

:::


## Configurando Prompts de Voz {#setting-up-voice-prompts}

O OsmAnd oferece várias opções para controlar os prompts de voz para que você possa seguir sua rota com conveniência. Para configurar essas configurações, comece nas seções apropriadas do aplicativo.

- Ative os prompts de voz na seção [Navegação](../guidance/navigation-settings.md) tocando em **Configurações**. Você também pode ativar e configurar os prompts de voz através de *Configurar Perfil* e *Configurações de Navegação*.
- Ative ou desative os prompts de voz usando *Menu → Navegação →* toque no *botão Som*,
    ou *Menu → Navegação →* botão Configurações *→ Som →* alternar ligar/desligar.

Para obter mais informações sobre como e quando os prompts de voz são acionados, consulte a documentação [Acionamento de Prompt de Voz de Navegação](../../../technical/algorithms/voice-prompt-triggering.md).


### Configurações de Voz {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> botão* *(ou <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Escolher perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Configurações de Navegação por Voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Idioma](#voice-prompt-language)**. Selecione seu idioma e tipo preferidos.

**Anúncio**. Permite configurar os seguintes tipos de prompts:

- *Nomes de ruas (TTS), Números de saída, Avisos de tráfego, Faixas de pedestres* e *Túneis.*
- *[Radares de velocidade](#speed-cameras)*.
- Configure também o **[widget de Alerta](../../widgets/nav-widgets.md#alert-widget)** para usar com os anúncios.

**Pontos do usuário**:

- Ative os prompts de voz para os [Waypoints](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favoritos](../../personal/favorites.md) ou [POIs](../../map/point-layers-on-map.md#points-of-interest-pois) predefinidos e adicionados. Ao dirigir, os pontos selecionados serão anunciados quando você se aproximar ou passar por eles.

| Tipo de Prompt | Tempo de Antecedência [s]:<br/>Distância de Antecedência Correspondente @ Velocidade Padrão [m] | Limite |
| :- | :- | :- |
| Aproximando | **60 s:**<br/>Dirigindo: 750 m<br/>Ciclismo: 167 m<br/>Caminhada: 67 m | Não mais de 1 ponto por vez |
| Passando | **15 s:**<br/>Dirigindo: 188 m<br/>Ciclismo: 42 m<br/>Caminhada: 17 m | Não mais de 3 pontos por vez |

[**Limite de velocidade**](#speed-limit):

- *Anunciar quando excedido*.
- *Tolerância de limite de velocidade*.

**Outros**:

- *Anunciar perda e recuperação de sinal GPS*. O OsmAnd anuncia se o sinal GPS no dispositivo for perdido.
- *Anunciar recálculo de rota*. O OsmAnd relata o recálculo de rota em caso de [desvio ou movimento na direção inversa](./navigation-settings.md#recalculate-route).
- *Anunciar desvio da rota*. Você recebe informações sobre desvios da rota de acordo com os [parâmetros definidos](./navigation-settings.md#recalculate-route).

**Opções**:

- *Repetir instruções de navegação*. Permite repetir as instruções de navegação em intervalos regulares de 1 min a 30 min. Ou manualmente - se você perder um prompt de voz, pode ouvi-lo novamente simplesmente tocando [na seta de próxima curva](../../widgets/nav-widgets.md#next-turn) na tela do aplicativo.
- *[Tempo de anúncio](#announcement-time)*.

**Saída** (*Somente Android*):

- *[Saída de orientação por voz](#voice-guidance-output)*.
- *Pausar música*. Os prompts de voz pausam a reprodução de música por um tempo.


### Radares de Velocidade {#speed-cameras}

![Tempo de anúncio de Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Alertas de radares de velocidade](../../personal/global-settings.md#uninstall-speed-cameras) permitem ativar ou desativar POIs com radares de velocidade. Você precisará reiniciar o aplicativo OsmAnd para aplicar as alterações.

Em alguns países ou regiões, o uso de aplicativos de aviso de radares de velocidade é ilegal. Você deve fazer uma escolha dependendo das leis do seu país. Selecione **Manter ativo**, e você receberá alertas e notificações de radares de velocidade. Selecione **Desinstalar** e todos os dados relacionados a radares de velocidade, como avisos, notificações e POIs, serão excluídos até que você reinstale completamente o OsmAnd.


### Limite de Velocidade {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegação por Voz](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegação por Voz](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

A opção **Limite de velocidade** permite que o OsmAnd o informe quando sua velocidade atual excede um limite especificado. Os dados sobre os limites máximos de velocidade legais são obtidos do OpenStreetMap.

**Anunciar quando excedido**
*Tolerância de limite de velocidade* permite selecionar um desvio permitido (por exemplo, -10 km/h a +20 km/h) do [limite máximo de velocidade legal](https://wiki.openstreetmap.org/wiki/Key:maxspeed) na estrada atual. Quando sua velocidade excede essa tolerância, o OsmAnd emite um prompt de voz.

*Regras para ativar prompts de voz* quando o limite de velocidade é excedido:

- *Aviso inicial*. Ao detectar que você excede o limite de velocidade, o OsmAnd espera 5 segundos antes de emitir o primeiro aviso de voz.
- *Atraso na repetição do anúncio*. Se você continuar acelerando, o próximo aviso é atrasado por 120 segundos para evitar notificações excessivamente frequentes.
- *Reinicialização do temporizador*. O temporizador é reiniciado se você permanecer dentro do limite legal por 30 segundos. Qualquer aceleração adicional aguardará novamente 5 segundos antes que o próximo aviso soe.

Esta configuração de **Tolerância de limite de velocidade** afeta a velocidade exibida na parte de *aviso* do [widget de Velocímetro](../../widgets/info-widgets.md#speedometer) no aplicativo OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) e [CarPlay](../../navigation/car-play.md#speedometer).


### Tempo de Anúncio {#announcement-time}

![Tempo de anúncio de Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

O tempo de anúncio dos diferentes prompts de voz depende do perfil selecionado, do tipo de prompt, da velocidade de navegação atual e da velocidade de navegação padrão. Com esta configuração, você pode alterar a distância antes que os prompts de voz sejam ativados aplicando um multiplicador de distância: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

Na lista suspensa *Intervalos de Tempo e Distância*, você pode visualizar informações detalhadas sobre a ativação dos prompts para os diferentes multiplicadores de distância. Para mais informações, consulte [Acionamento de Prompt de Voz de Navegação](../../../technical/algorithms/voice-prompt-triggering.md).


### Saída de Orientação por Voz {#voice-guidance-output}

<InfoAndroidOnly/>

![Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-1.png)

Para evitar a reprodução de áudio no mesmo fluxo de saída ao mesmo tempo, o foco de áudio é implementado no Android. O OsmAnd usará o alto-falante selecionado na lista nesta configuração para a saída de áudio. Outros aplicativos pausarão a reprodução ou diminuirão o volume para facilitar a audição dos prompts de voz do OsmAnd.

- Áudio de mídia/navegação.
- Áudio de notificação.
- Áudio de chamada telefônica (para interromper [aparelhos de som de carro Bluetooth](../auto-car.md)).


### Teste de Prompts de Voz {#testing-of-voice-prompts}

Você pode testar os prompts de voz com:

- [Simular Navegação](../../navigation//setup/route-navigation.md#simulated-navigation). Defina uma rota e inicie a simulação: *Menu de navegação → Configurações → Simular navegação*.

- [Testar prompts de voz](../../plugins/development.md#application-testing) (*Somente Android*). Use o *plugin de Desenvolvimento* para testar prompts de voz:
    - Vá para *Menu → Plugins → Ativar Desenvolvimento OsmAnd*.
    - Vá para *Configurações → Testar prompts de voz*.
    - Selecione um idioma e verifique se o sistema reproduz os prompts corretamente.


### Solucionando Problemas de Áudio {#solving-audio-issues}

Se você não estiver ouvindo **prompts de voz** ou [avisos de limite de velocidade](#speed-limit):

- Certifique-se de que o volume do seu dispositivo esteja ligado e aumentado.
- Confirme se o som está ativado durante a navegação: *Menu → Navegação → Botão Ligar/Desligar som* ou *Menu → Navegação → Botão Configurações → Som* para configuração detalhada de áudio.
- Selecione quais [alto-falantes](#voice-guidance-output) usar.
- Verifique qual [orientação por voz](#voice-prompt-language) está selecionada e certifique-se de ter um TTS ou voz gravada capaz de anunciar avisos de limite de velocidade.
- Verifique se o áudio não está sendo roteado para um dispositivo de saída não intencional (por exemplo, um fone de ouvido Bluetooth desconectado).

Para etapas adicionais de solução de problemas, consulte o [guia de solução de problemas de navegação](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

O OsmAnd suporta vozes **Text-to-Speech (TTS)**, que fornecem orientação por voz dinâmica e detalhada, incluindo instruções de curva, nomes de ruas e anúncios de POIs. As vozes TTS estão incluídas no aplicativo, mas exigem um [mecanismo de Text-to-speech](https://en.wikipedia.org/wiki/Speech_synthesis) instalado no dispositivo.

A maioria dos dispositivos Android e iOS modernos inclui um mecanismo TTS padrão, mas mecanismos e idiomas adicionais podem ser instalados separadamente.

Para uma lista de **mecanismos TTS disponíveis e idiomas suportados** no Android, consulte:
[Lista de idiomas com mecanismos TTS disponíveis no Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Configurando TTS no seu dispositivo:***

**Android:**

1. Abra as Configurações.
2. Navegue até *Acessibilidade → Saída de Text-to-Speech*.
3. Selecione um **mecanismo TTS** (Google TTS ou outro mecanismo instalado).
4. Escolha um **idioma preferido** (alguns podem exigir downloads adicionais).
5. Ajuste a taxa de fala, o tom e a velocidade de reprodução conforme necessário.
6. Toque em **Ouvir Exemplo** para testar a saída de voz.

Para mais detalhes, consulte:
[Suporte do Google – Configurações de Text-to-Speech do Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Abra as Configurações.
2. Vá para *Acessibilidade → Conteúdo Falado*.
3. Toque em **Vozes** para selecionar uma voz preferida.
4. Ajuste a **Taxa de Fala**, **Pronúncias** e outras configurações.
5. Teste a voz usando **Falar Seleção** ou **Falar Tela**.

Para mais detalhes, consulte:
[Suporte da Apple – Configurações de Fala do iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Testando prompts de voz:***

Para verificar se o TTS está funcionando corretamente no OsmAnd:

- Ative o **Plugin de Desenvolvimento**: *Menu → Configurações → Plugins → Desenvolvimento OsmAnd*.
- Abra [Testar prompts de voz](../../plugins/development.md#application-testing): *Menu → Configurações → Plugins → Desenvolvimento OsmAnd → Testar Prompts de Voz*.

Para solução de problemas, consulte:
[Solução de problemas de navegação por voz](../../troubleshooting/navigation.md#voice-navigation).


### Idioma do Prompt de Voz {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Configurações de Navegação por Voz iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

O OsmAnd oferece dois tipos de prompts de voz:

- **<Translate android="true" ids="tts_title"/>**
    - Usa o mecanismo TTS do dispositivo para gerar prompts de voz dinamicamente.
    - Lê nomes de ruas, instruções de curva, nomes de POIs e outros detalhes.
    - Suporta vários idiomas e configurações de pronúncia.
    - Pode ser personalizado com configurações de taxa de fala, tom e pronúncia.

- **<Translate android="true" ids="shared_string_recorded"/>** (*Somente Android*)
    - Usa prompts de voz pré-gravados para navegação.
    - Soa mais natural do que o TTS, mas tem limitações.
    - Não lê nomes de ruas ou nomes de POIs.
    - Fornece apenas instruções básicas de curva.

> *O TTS é recomendado para orientação de navegação detalhada.*

### Configurações de Prompt de Voz em Nível de Sistema {#system-level-voice-prompt-settings}

O comportamento do prompt de voz, incluindo *velocidade de reprodução, tom e pausas*, pode ser ajustado apenas nas configurações do sistema do dispositivo.

**Android:**

1. Abra as *Configurações do dispositivo → Acessibilidade → Saída de texto para fala*.
2. Escolha seu mecanismo TTS e idioma preferidos.
3. Ajuste a taxa de fala, o tom e a velocidade de reprodução.

**iOS:**

1. Abra as *Configurações do dispositivo → Acessibilidade → Conteúdo Falado*.
2. Ajuste: idioma, vozes, taxa de fala, pronúncias.

> *Para vozes adicionais, baixe pacotes de idiomas nas configurações do sistema.*


### Idiomas TTS Disponíveis {#available-tts-languages}

Atualmente, existem 45 idiomas no total. Nem todos os idiomas listados abaixo podem ser suportados por todos os mecanismos TTS. Veja [aqui](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Árabe |
| **B** | Bielorrusso, Búlgaro |
| **C** | Catalão, Chinês, Chinês (Hong Kong), Chinês (Tradicional), Croata, Tcheco |
| **D** | Dinamarquês, Holandês |
| **E** | Inglês, Inglês (Reino Unido), Estoniano |
| **F** | Finlandês, Francês |
| **G** | Alemão, Alemão (casual), Grego, Guarani |
| **H** | Hindi, Húngaro, Húngaro (formal), Hebraico |
| **I** | Indonésio, Italiano |
| **J** | Japonês |
| **K** | Coreano |
| **L** | Letão |
| **N** | Norueguês Bokmål |
| **P** | Persa, Polonês, Português, Português (Brasil) |
| **R** | Romeno, Russo |
| **S** | Sardo, Sérvio (Cirílico), Eslovaco, Esloveno, Espanhol, Espanhol (Argentina), Suaíli, Sueco |
| **T** | Turco |
| **U** | Ucraniano |
| **V** | Vietnamita |


## Prompts de Voz Gravados {#recorded-voice-prompts}

### Baixar Pacotes de Voz {#download-voice-packages}

<InfoAndroidOnly />

O uso de vozes gravadas no OsmAnd deve ser apenas um recurso de fallback. Elas são bastante limitadas e não podem pronunciar nomes de ruas, nomes de lugares, etc. Você pode baixar prompts de voz de dois conjuntos diferentes da lista.

- O primeiro tipo, estes são os recomendados:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- O segundo tipo são prompts de voz gravados, com um conjunto incompleto de recursos:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Modos de Bip {#beep-modes}

<InfoAndroidOnly />

Você pode configurar um perfil do OsmAnd para emitir bipes em vez de falar, de forma semelhante a um ciclocomputador. Existem três padrões básicos: *mínimo*, *simples* e *complexo*. Os padrões simples e complexo têm variantes *altas*, que serão consideravelmente mais fáceis de ouvir em um ambiente barulhento, mas podem soar desagradavelmente ásperas.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Mínimo**. Adequado para seguir uma rota conhecida a pé com mínimas distrações, este padrão o alertará ao passar por destinos intermediários, favoritos e POIs, e quando você se desviou ou retornou à rota. Ele não fornecerá nenhum aviso de áudio para curvas.
- **Simples**. Além dos alertas para destinos, favoritos, POIs e outros, o padrão simples o alerta com um bipe mais longo quando você precisa virar.
- **Complexo**. Adequado para ciclismo de estrada, o padrão complexo usa bipes de diferentes durações e tons para informá-lo sobre as próximas curvas.
    - Um bipe grave significa virar à esquerda, enquanto um bipe agudo significa virar à direita. Uma série de bipes de tom médio representa a saída a ser tomada em uma rotatória (círculo de tráfego). Todos os três tons em sequência representam um retorno. Em todos esses casos, bipes curtos significam preparar-se para fazer algo, enquanto bipes longos significam fazer algo agora.


## Notificações de Texto {#text-notifications}

Depois de iniciar uma rota, você pode visualizar as informações no menu suspenso do sistema na lista de notificações. As notificações silenciosas do OsmAnd contêm informações como instruções passo a passo, setas de direção de curva, tempo de chegada e tempo restante, velocidade atual e distância até o destino.

![Notificação de rota de navegação Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Botões ativos no menu suspenso do sistema para sua navegação:

- *<Translate android="true" ids="stop_navigation_service"/>*. Permite parar sua navegação.
- *<Translate android="true" ids="shared_string_pause"/>*. Permite pausar sua navegação.
- *<Translate android="true" ids="shared_string_resume"/>*. Permite retomar sua navegação.

### Configurar Notificações {#configure-notifications}

Você pode alterar as configurações de notificação para o aplicativo OsmAnd nas configurações do sistema do seu dispositivo. As notificações podem ser exibidas na tela de bloqueio, na tela inicial, no menu suspenso ou na parte superior do aplicativo.

Leia sobre como o controle de notificações é implementado no Android neste [artigo](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Para iOS - [aqui](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Controle de Tela {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Menu de controle de tela Android](@site/static/img/navigation/route/screen_control_android.png)

Você pode controlar a tela do seu dispositivo para economizar energia. Este modo possui duas configurações gerais: *<Translate android="true" ids="screen_timeout"/>* e *<Translate android="true" ids="turn_screen_on"/>*.

### Tempo Limite da Tela {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. A tela desliga dependendo das configurações do sistema do seu dispositivo. O botão *Alterar Configurações* fornece acesso rápido ao menu do sistema, como *Tela e Brilho*, onde você pode ajustar o tempo limite da tela.

    ![Controle de tela de tempo limite do sistema Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Se *Manter Tela Ligada* estiver ativado, a tela do dispositivo não aplica um tempo limite após acordar. Se estiver desativado, você pode definir o tempo após o qual a tela do dispositivo será desligada se você não interagir com ela, de 5 a 60 segundos.

    ![Tempo limite após despertar Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Tempo limite após despertar Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Ligar Tela {#turn-screen-on}

![ligar tela Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Selecione as opções de ativação da tela e garanta que o OsmAnd permaneça em primeiro plano quando o dispositivo estiver bloqueado.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Artigos Relacionados {#related-articles}

- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Preparação de rota](../setup/route-navigation.md)
- [Navegação por trilha](../setup/gpx-navigation.md)
- [Navegação por marcadores](../setup/markers-navigation.md)
- [Detalhes da rota](../setup/route-details.md)
- [Configurações de navegação](./navigation-settings.md)
- [Tela do mapa durante a navegação](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

1. [Problemas de Áudio.](#solving-audio-issues)
2. [Teste de Prompts de Voz.](#testing-of-voice-prompts)
3. [Por que devo usar uma voz TTS em vez de uma voz gravada?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [O TTS não está funcionando corretamente? Siga estas etapas para corrigi-lo.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)