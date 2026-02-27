---
source-hash: e740340761094d6b6645a876a3fb4bee04f0d077021e1d3c5e6be972b43094f0
sidebar_position: 3
title:  Astronomy
unlistead: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Astronomia** está atualmente em **beta**.
:::

## Visão Geral {#overview}

O plugin de Astronomia exibe a sobreposição do céu estrelado no mapa com estrelas, constelações, Sol, Lua e planetas. As posições e trajetórias do Sol, Lua, planetas e estrelas principais são exibidas no mapa.


## Parâmetros de Configuração Necessários {#required-setup-parameters}
  
As seguintes configurações são necessárias para exibir a sobreposição de Astronomia:

1. Ative o plugin [**Astronomia**](../plugins/index.md#enable--disable) na seção *Plugins* do *Menu Principal*
2. Use **Menu → Mapa estelar** para abrir a tela dedicada com o céu estrelado, configurações e controles de tempo.
3. Selecione **data e hora** usando os controles na tela do Mapa estelar.
4. Ajuste o que é exibido no Mapa estelar usando [**Configurar Visualização**](#configure-view) — por exemplo, alterne objetos visíveis e auxílios de renderização.
5. Toque no botão **Fechar (X)** no topo da tela do Mapa estelar para sair do Mapa estelar e retornar ao mapa da Terra.

O plugin funciona com ambos os motores de renderização de mapa, mas tem o melhor desempenho no modo OpenGL.

## Tela do Mapa Estelar {#star-map-screen}

**Acesse:** *Plugin ativado → Menu → Mapa estelar* 

![Tela do mapa estelar](@site/static/img/plugins/starwatcher/view_new.png)

A tela dedicada **Mapa estelar** exibe um domo celeste interativo com estrelas, constelações, planetas, trajetórias do Sol e da Lua. Na parte inferior da tela, você pode acessar os seguintes controles: 
- **Pesquisa** — abre um painel de pesquisa com um campo de entrada onde você pode digitar o nome de um objeto. Abaixo do campo, há uma lista de objetos sugeridos em ordem alfabética. Você pode alternar a ordenação entre A–Z e Z–A. 
- **Data e hora** — permite alterar a data e hora para observar o céu em diferentes momentos no passado ou futuro. Isso é útil para planejar observações, rastrear o movimento de objetos ou aprender como o céu muda ao longo do tempo. Se você definir uma data/hora personalizada, o chip mostra a data e hora completas, e um botão de reset aparece ao lado para retornar ao horário atual do sistema.
- [**Configurar Visualização**](#configure-view).

A tela renderiza o hemisfério completo do céu acima da sua localização, alinhado com a direção da bússola. O Mapa estelar pode ser rotacionado manualmente. A rotação manual do Mapa estelar não afeta a orientação do mapa da Terra. O mapa da Terra sempre segue o [modo de orientação do mapa](../map/interact-with-map.md#map-orientation-modes) selecionado nas suas configurações. Toque em objetos celestes para detalhes como magnitude, horários de nascer/pôr ou trajetórias.


## Informações do Objeto Celeste {#celestial-object-info}

![Popup de informações do objeto](@site/static/img/plugins/starwatcher/object-info_new.png)

Toque em qualquer **estrela, planeta, constelação ou Sol/Lua** na tela **Mapa estelar** ou **sobreposição no mapa** para visualizar informações detalhadas. O objeto selecionado é destacado no Mapa estelar por um marcador de círculo vermelho, e seu movimento diário é visualizado por um anel de hora (00–23) mostrando onde o objeto estará a cada hora no horário local e a direção do movimento.

**Dados exibidos:**
- **Azimute**: Direção a partir do Norte (0°-360°) onde o objeto aparece no céu
- **Altitude**: Altura acima do horizonte (0° no horizonte, 90° no zênite)
- **Magnitude**: Escala de brilho (-26 para o Sol até +6 para estrelas fracas; menor = mais brilhante)
- **Horários de nascer/pôr**: Quando o objeto nasce acima/define abaixo do horizonte
- **Distância** (planetas): Distância média da Terra em UA/km

**Integração com Wikipedia**: Toque em **"Wikipedia"** no popup de informações para abrir a página do objeto no seu navegador (ex.: Sirius, Orion, Vênus). Funciona offline para dados em cache, online para artigos completos.

**Pressione longo** em objetos celestes para **fixá-los** como marcadores no mapa com atualizações de posição ao vivo, ou **compartilhar** coordenadas para observação de estrelas em grupo.

Este recurso ajuda a identificar objetos no céu real, planejar observações e aprender fatos de astronomia diretamente do OsmAnd.


## Busca de Estrelas em AR (Modo Câmera) {#ar-star-finding}

**Acesse:** *Plugin ativado → Menu → Mapa estelar → Botão da câmera* 

A camada **Astronomia** funciona com a **câmera do dispositivo** para habilitar **observação de estrelas em Realidade Aumentada (AR)**. Aponte a câmera do telefone para o céu noturno real e veja estrelas, planetas, constelações, Sol/Lua sobrepostos em tempo real.

**Como funciona a Busca de Estrelas em AR:**
- **Visualização da câmera ao vivo** mostra o céu real com sobreposições astronômicas transparentes alinhadas ao horizonte/bússola
- **Mova a câmera** para escanear o céu — objetos são destacados quando aparecem no seu campo de visão
- **Toque em objetos destacados** para ver azimute, altitude, magnitude, horários de nascer/pôr e link da Wikipedia
- **Calibração da bússola** necessária para alinhamento preciso (balance o telefone em forma de 8 se necessário)

**Perfeito para:**
- Identificar estrelas/planetas fracos invisíveis a olho nu
- Localizar constelações movendo o telefone pelo céu
- Navegação no céu em tempo real durante caminhadas ou acampamentos


## Configurar Visualização {#configure-view}

![Configurar Visualização](@site/static/img/plugins/starwatcher/half_state.png) ![Configurar Visualização](@site/static/img/plugins/starwatcher/full_state.png)

**Configurar Visualização** permite que você controle como o Mapa estelar é exibido ativando ou desativando modos visuais, objetos e auxílios de renderização.

Para abrir Configurar Visualização, toque no botão Configurar Visualização no canto inferior direito da tela do Mapa estelar. O botão é representado por um ícone no estilo de camada (formas empilhadas), indicando configurações de exibição e camada. Configurar Visualização abre em um estado *Meio*, mostrando as opções principais de exibição. Deslize o painel para cima para expandi-lo para o estado *Completo* e acessar todas as configurações disponíveis. Para fechar Configurar Visualização, deslize o painel para baixo uma vez para retornar ao estado Meio, deslize para baixo novamente para fechá-lo completamente, ou toque no botão Fechar (X) no canto superior direito do painel.

### Modos e Ações {#modes-and-actions}

![Configurar Visualização](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configurar Visualização](@site/static/img/plugins/starwatcher/red_filter.png)

Esta seção controla os principais modos de exibição do Mapa estelar.

- **2D / 3D**. Alterna o Mapa estelar entre uma visualização plana (2D) e uma visualização como globo (3D).
- **Mapa**. Habilita uma visualização adicional do mapa da Terra exibida abaixo do Mapa estelar, ajudando você a relacionar objetos celestes à sua localização geográfica.
- **Filtro vermelho**. Aplica um filtro de cor vermelha à tela inteira para reduzir a poluição luminosa e preservar a visão noturna durante observações em céus escuros.

### Objetos Visíveis {#visible-objects}

![Configurar Visualização](@site/static/img/plugins/starwatcher/solar_system.png) ![Configurar Visualização](@site/static/img/plugins/starwatcher/constellations.png)

Esta seção permite que você escolha quais tipos de objetos celestes são exibidos no Mapa estelar.

| Objeto | Descrição |
|-------|-------------|
| Sistema solar | Exibe o Sol, a Lua e os planetas visíveis. |
| Constelações | Mostra linhas e padrões de constelações formados por estrelas. |
| Estrelas | Exibe estrelas individuais visíveis no Mapa estelar. |
| Nébulas | Mostra objetos de nebulosas onde disponíveis. |
| Aglomerados de estrelas | Exibe aglomerados de estrelas como objetos celestes separados. |
| Céu profundo | Alterna objetos de céu profundo como galáxias, aglomerados de galáxias e buracos negros. |

### Opções de Exibição Pessoal {#personal-display-options}

**Opções de exibição pessoal** controlam auxílios visuais adicionais relacionados ao foco e observação do usuário.

| Opção | Descrição |
|-------|-------------|
| Direção | Mostra um indicador direcional para ajudar a orientar sua visualização. |
| Trajetória diária | Exibe a trajetória diária de objetos celestes selecionados pelo céu. |
| Favoritos | Destaca ou exibe objetos marcados como favoritos. |

### Auxílios de Renderização {#rendering-aids}

**Auxílios de renderização** adicionam linhas de referência e grades para ajudar a orientar o Mapa estelar.

| Auxílio | Descrição |
|-------|-------------|
| Grade azimutal | Adiciona uma grade baseada em azimute para orientação horizontal do céu. |
| Linha do meridiano | Exibe a linha do meridiano cruzando o céu de norte a sul. |
| Grade equatorial | Mostra a grade de coordenadas equatoriais celestes. |
| Linha eclíptica | Exibe a linha eclíptica representando a trajetória aparente do Sol. |
| Equador galáctico | Mostra o plano equatorial da galáxia Via Láctea. |


<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais](../../user/map/vector-maps.md)