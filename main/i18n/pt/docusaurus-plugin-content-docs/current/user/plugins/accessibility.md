---
source-hash: 178483f40e3d28fd59c81c2964fa46455a3df586182e7a09aef9e32023d7bd72
sidebar_position: 1
title: Acessibilidade
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

:::caution Nota
O plugin de Acessibilidade está disponível apenas na **versão Android** do OsmAnd. A [versão iOS](#how-to-use-ios) depende das configurações de acessibilidade padrão do sistema.
:::

## Visão Geral {#overview}

A acessibilidade melhora a usabilidade para usuários cegos e com deficiência visual, integrando-se com as ferramentas de [Acessibilidade do Android](https://www.android.com/accessibility/). O plugin oferece **conversão de texto em fala, controle por gestos, anúncios automáticos** e **feedback tátil** para tornar a navegação mais acessível. No iOS, o OsmAnd utiliza os recursos de acessibilidade integrados da Apple, como o VoiceOver.


### Como Usar (Android) {#how-to-use-android}

![Acessibilidade](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Ativar o plugin de Acessibilidade:***  

1. **Ativar o plugin**: *Menu → Plugins → Acessibilidade → Ativar*.

2. **Ativar o modo de acessibilidade**:  
   - Navegue até *Configurações do Sistema → Acessibilidade* no seu dispositivo Android.
   - Ative o TalkBack ou outro leitor de tela.

3. **Ajustar as configurações do plugin**:  
   - Abra as [configurações de Acessibilidade](#plugin-settings) dentro do aplicativo OsmAnd.
   - Configure recursos como taxa de fala, anúncio automático e feedback tátil.

<br/>

***Recursos e funcionalidades:***

- **Controles por gestos**:
   - Suporta todos os [gestos padrão do OsmAnd](../map/interact-with-map.md#gestures).
   - Ajusta os gestos para se alinharem com as instruções do **TalkBack** do Android.

- **Integração com o TalkBack**:
   - O leitor de tela TalkBack oferece orientação em áudio para navegação e interações com o menu.
   - Saiba mais sobre os gestos do TalkBack [aqui](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operações em segundo plano**. O feedback de áudio e tátil continua mesmo quando a tela está desligada ou bloqueada.

- **Ações do botão da bússola**:

| Gesto | Ação | Equivalente no TalkBack |
|-----|-----|-----|
| **Toque único** | Gira o mapa para o **Norte** | **Toque duplo** |
| **Toque longo** | Abre a lista de [orientações do mapa](../map/interact-with-map.md#map-orientation-modes) | **Toque duplo e segure** |
| **Toque duplo** | *Não disponível no modo Acessibilidade* | *Não suportado* |


### Como Usar (iOS) {#how-to-use-ios}

A versão iOS do OsmAnd usa as **ferramentas de acessibilidade integradas** do sistema.

1. **Ativar o VoiceOver**:
   - Vá para *Ajustes → Acessibilidade → VoiceOver*.
   - Configure os **gestos do VoiceOver** para usar com o OsmAnd.

2. **Recursos suportados**:
   - **Suporte a leitor de tela** para interações com o mapa.
   - **Gestos personalizáveis** através das configurações do iOS.
   - Todos os [gestos padrão do OsmAnd](../map/interact-with-map.md#gestos) estão disponíveis.

3. **Saiba mais**:
   - Leia sobre os recursos de Acessibilidade Visual do iOS [aqui](https://www.apple.com/accessibility/vision/).
   - Explore os gestos do VoiceOver para iPhone [aqui](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para ativar os recursos de acessibilidade do dispositivo no OsmAnd, você precisa fazer as seguintes configurações:

1. **Ativar o** [plugin de Acessibilidade](../plugins/index.md#enable--disable):  *Menu → Plugins → Acessibilidade → Ativar*.  
2. **Ativar o modo de acessibilidade** no seu dispositivo.
3. Configurar as [configurações](#plugin-settings) do plugin de Acessibilidade.


## Configurações do Plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Acessibilidade](@site/static/img/plugins/Accessibility/access_.png)  

O plugin de Acessibilidade oferece várias configurações para personalizar a navegação e a interação para usuários com deficiência. Essas configurações são aplicadas por [perfil](../personal/profiles.md) no OsmAnd.

| Configuração              | Descrição |  
|---------------------------|-------------|  
| **Modo de Acessibilidade**    | Ativa *recursos integrados do OsmAnd* ou usa **configurações do sistema**. |  
| **Taxa de Fala**           | Controla a *velocidade da conversão de texto em fala*, variando de **50% a 200%**. |  
| [Anúncio Automático Inteligente](#smart-autoannounce)    | Fornece *orientação por voz* ao desviar da rota. |  
| **Período de Anúncio Automático**   | Define o tempo mínimo entre os anúncios, de **5 segundos a 5 minutos**. |  
| [Estilo de Direção](#direction-style)       | Escolha entre *Lateral (8 direções)* ou *Sentido Horário (12 direções)*. |  
| **Direções em Áudio**      | Reproduz *orientações em áudio* indicando a direção. |  
| **Direções Táteis**     | Fornece *feedback de vibração* para curvas e desvios.|  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Dicas para acessibilidade otimizada:***

- **Leitor de tela** - Use TalkBack (*Android*) ou VoiceOver (*iOS*) para uma interação aprimorada com o mapa.
- **Navegação por áudio** - Ative o anúncio automático para receber direções por voz enquanto a tela estiver desligada.
- **Feedback tátil** - Ideal para ambientes com pouca visibilidade ou quando as orientações em áudio são impraticáveis.


### Anúncio Automático Inteligente {#smart-autoannounce}

O recurso **Anúncio Automático Inteligente** fornece *notificações em áudio* quando você desvia da rota planejada. Ele é projetado para apoiar usuários com deficiência visual que dependem de *orientação por voz*.  

- Se o **TalkBack não estiver ativado**, o *Anúncio Automático Inteligente* exibirá apenas *notificações de texto* na tela.  

- As **notificações por voz** são ativadas apenas quando o *TalkBack* está ativado nas **configurações do sistema do dispositivo**.  

- Defina o **Período de Anúncio Automático** (por exemplo, *10 segundos*) para controlar a frequência dos anúncios.

- Um toque longo no **Minha localização** abre um menu com as opções ***Mostrar sua posição*** e ***Mostrar detalhes***. Selecionar Mostrar detalhes exibe informações adicionais da rota e fornece o botão ***Iniciar/Parar anúncio automático***.


### Estilo de Direção {#direction-style}

A configuração **Estilo de Direção** define como as instruções de navegação são apresentadas:

- Lateral (8 direções) – usa direções clássicas esquerda/direita ou cardeais/intercardeais.
- Sentido Horário (12 direções) – usa orientação baseada no mostrador do relógio, como “às 3 horas” ou “às 10 horas”.

Este recurso é projetado para melhorar a consciência espacial, especialmente para usuários com deficiência visual que preferem orientação baseada no relógio.

Para ativar:
*Menu* → *Plugins* → *Acessibilidade* → *Configurações* → *Estilo de Direção* → escolha **Lateral** ou **Sentido Horário**.

:::info nota
O Estilo de Direção é uma opção independente. Ele não está vinculado ao Anúncio Automático Inteligente e funciona independentemente de o Anúncio Automático Inteligente estar ativado.
:::

## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)