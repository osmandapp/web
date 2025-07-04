---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
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

A acessibilidade melhora a usabilidade para usuários cegos e com deficiência visual, integrando-se com as ferramentas de [Acessibilidade do Android](https://www.android.com/accessibility/). O plugin oferece **texto para fala, controle por gestos, anúncios automáticos** e **feedback tátil** para tornar a navegação mais acessível. No iOS, o OsmAnd utiliza os recursos de acessibilidade integrados da Apple, como o VoiceOver.


### Como Usar (Android) {#how-to-use-android}

![Acessibilidade](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Habilitar o plugin de Acessibilidade:***

1. **Ativar o plugin**: *Menu → Plugins → Acessibilidade → Habilitar*.

2. **Ativar o modo de acessibilidade**:
   - Navegue até *Configurações do Sistema → Acessibilidade* no seu dispositivo Android.
   - Habilite o TalkBack ou outro leitor de tela.

3. **Ajustar as configurações do plugin**:
   - Abra as [configurações de Acessibilidade](#plugin-settings) dentro do aplicativo OsmAnd.
   - Configure recursos como taxa de fala, anúncio automático e feedback tátil.

<br/>

***Recursos e funcionalidades:***

- **Controles por gestos**:
   - Suporta todos os [gestos padrão do OsmAnd](../map/interact-with-map#gestures).
   - Ajusta os gestos para se alinharem com as instruções do **TalkBack** do Android.

- **Integração com TalkBack**:
   - O leitor de tela TalkBack oferece orientação de áudio para navegação e interações de menu.
   - Saiba mais sobre os gestos do TalkBack [aqui](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Operações em segundo plano**. O áudio e o feedback tátil continuam mesmo quando a tela está desligada ou bloqueada.

- **Ações do botão da bússola**:

| Gesto | Ação | Equivalente no TalkBack |
|-----|-----|-----|
| **Toque único** | Gira o mapa para o **Norte** | **Toque duplo** |
| **Toque longo** | Abre a lista de [orientações do mapa](../map/interact-with-map.md#map-orientation-modes) | **Toque duplo e segurar** |
| **Toque duplo** | *Não disponível no modo Acessibilidade* | *Não suportado* |


### Como Usar (iOS) {#how-to-use-ios}

A versão iOS do OsmAnd usa as **ferramentas de acessibilidade integradas** do sistema.

1. **Habilitar o VoiceOver**:
   - Vá para *Ajustes → Acessibilidade → VoiceOver*.
   - Configure os **gestos do VoiceOver** para usar com o OsmAnd.

2. **Recursos suportados**:
   - **Suporte a leitor de tela** para interações com o mapa.
   - **Gestos personalizáveis** através das configurações do iOS.
   - Todos os [gestos padrão do OsmAnd](../map/interact-with-map#gestures) estão disponíveis.

3. **Saiba mais**:
   - Leia sobre os recursos de Acessibilidade Visual do iOS [aqui](https://www.apple.com/accessibility/vision/).
   - Explore os gestos do VoiceOver para iPhone [aqui](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para ativar os recursos de acessibilidade do dispositivo no OsmAnd, você precisa fazer as seguintes configurações:

1. **Habilitar o** [plugin de Acessibilidade](../plugins/index.md#enable--disable): *Menu → Plugins → Acessibilidade → Habilitar*.
2. **Habilitar o modo de acessibilidade** no seu dispositivo.
3. Configurar as [definições](#plugin-settings) do plugin de Acessibilidade.


## Configurações do Plugin {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Acessibilidade](@site/static/img/plugins/Accessibility/access_.png)

O plugin de Acessibilidade oferece várias configurações para personalizar a navegação e a interação para usuários com deficiência. Essas configurações são aplicadas por [perfil](../personal/profiles.md) no OsmAnd.

| Configuração | Descrição |
|---------------------------|-------------|
| **Modo de Acessibilidade** | Habilita *recursos integrados do OsmAnd* ou usa **configurações do sistema**. |
| **Taxa de Fala** | Controla a *velocidade do texto para fala*, variando de **50% a 200%**. |
| [Anúncio Automático Inteligente](#smart-autoannounce-and-clockwise-directions) | Fornece *orientação por voz* ao desviar da rota. |
| **Período de Anúncio Automático** | Define o tempo mínimo entre anúncios, de **5 segundos a 5 minutos**. |
| **Estilo de Direção** | Escolha entre *Lateral (8 direções)* ou [Sentido Horário](#smart-autoannounce-and-clockwise-directions) (12 direções)*. |
| **Direções de Áudio** | Reproduz *orientações de áudio* indicando a direção. |
| **Direções Táteis** | Fornece *feedback de vibração* para curvas e desvios. |

<!--
- **Modo de Acessibilidade**. Habilita ferramentas especiais que ajudam pessoas com deficiência a interagir com o aplicativo OsmAnd. Existem três modos: *Ativado* - ativa os recursos integrados do OsmAnd, *Desativado* - desativa todos os recursos do plugin, e *De acordo com as configurações do sistema Android* - ativa as configurações do sistema Android.

- **Taxa de fala**. Ajusta a taxa de fala do texto para fala, variando de 50% a 200%.

- **Anúncio automático inteligente**. Se ativado, você receberá anúncios de voz quando desviar da rota definida.

- **Período de anúncio automático**. Este é um anúncio automático da direção e distância até o seu destino. Você pode selecionar um tempo mínimo entre os anúncios, variando de 5 segundos a 5 minutos.

- **Estilo de direção**. Escolha como o aplicativo OsmAnd irá notificá-lo sobre as direções. *Lateral* - indica a direção para os lados do mundo (8 direções), *Sentido horário* - indica direções orientadas para o mostrador do relógio (12 direções).

- **Direções de áudio**. Fornece feedback ao navegar, indicando a direção para o ponto de destino com som.

- **Direções táteis**. Esta configuração fornece feedback tátil ao navegar. A vibração indica a direção para o ponto de destino e desvios do caminho.
-->

<br/>

***Dicas para acessibilidade otimizada:***

- **Leitor de tela** - Use TalkBack (*Android*) ou VoiceOver (*iOS*) para uma interação aprimorada com o mapa.
- **Navegação por áudio** - Habilite o anúncio automático para receber direções por voz enquanto a tela estiver desligada.
- **Feedback tátil** - Ideal para ambientes de baixa visibilidade ou quando as orientações de áudio são impraticáveis.


#### Anúncio Automático Inteligente e Direções no Sentido Horário {#smart-autoannounce-and-clockwise-directions}

O recurso **Anúncio Automático Inteligente** fornece *notificações de áudio* quando você desvia da rota planejada, enquanto o **Estilo de Direção no Sentido Horário** oferece *orientações de navegação baseadas no mostrador do relógio*. Esses recursos são projetados para apoiar usuários com deficiência visual que dependem de *orientação por voz*.

- Se o **TalkBack não estiver habilitado**, tanto o *Anúncio Automático Inteligente* quanto as *Direções no Sentido Horário* exibirão apenas *notificações de texto* na tela.

- As **notificações de voz** são ativadas apenas quando o *TalkBack* está habilitado nas **configurações do sistema do dispositivo**.

- Defina o **Período de Anúncio Automático** (por exemplo, *10 segundos*) para controlar a frequência dos anúncios.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: Fevereiro de 2025*