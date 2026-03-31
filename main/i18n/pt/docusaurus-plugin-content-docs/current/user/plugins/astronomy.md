---
source-hash: 586e89c491ebdc9f9d39017e43dfe0ba1044c71a6eddcfcdc4d71787f3703bae
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

## Overview {#overview}

:::tip Purchase
O plugin de Astronomia é um [recurso pago](../purchases/index.md).  
:::

O plugin de Astronomia exibe uma sobreposição do céu com estrelas, constelações, o Sol, a Lua e planetas diretamente no mapa. Ele usa um catálogo celeste offline para calcular e exibir as posições atuais e futuras de objetos celestes. O plugin também permite que os usuários explorem o céu noturno, identifiquem objetos e planejem observações visualizando seus caminhos pelo céu.

O plugin funciona completamente offline usando catálogos de estrelas integrados, permitindo a exploração do céu mesmo sem uma conexão com a internet.


## Required Setup Parameters {#required-setup-parameters}
  
As seguintes configurações são necessárias para exibir a sobreposição de Astronomia:

1. Ative o plugin [**Astronomia**](../plugins/index.md#enable--disable) na seção *Plugins* do *Menu Principal*
2. Use **Menu → Mapa estelar** para abrir a tela dedicada com o céu estrelado, configurações e controles de tempo.
3. Selecione **data e hora** usando os controles na tela do Mapa estelar.
4. Ajuste o que é exibido no Mapa estelar usando [**Configurar Visualização**](#configure-view) — por exemplo, alterne objetos visíveis e auxílios de renderização.
5. Toque no botão **Fechar (X)** no topo da tela do Mapa estelar para sair do Mapa estelar e retornar ao mapa da Terra.

O plugin funciona com ambos os motores de renderização de mapa, mas tem o melhor desempenho no modo OpenGL.

## Star Map Screen {#star-map-screen}

**Go to:** *Enabled plugin → Menu → Star map* 

![Tela do mapa estelar](@site/static/img/plugins/starwatcher/view_new_1.png)

A tela dedicada **Mapa estelar** exibe um domo celeste interativo com estrelas, constelações, planetas, trajetórias do Sol e da Lua. Na parte inferior da tela, você pode acessar os seguintes controles: 
- [**Pesquisa**](#search) — abre a tela de Pesquisa onde você pode pesquisar objetos celestes e navegar por catálogos e categorias do céu. 
- **Data e hora** — permite alterar a data e hora para observar o céu em diferentes momentos no passado ou futuro. Isso é útil para planejar observações, rastrear o movimento de objetos ou aprender como o céu muda ao longo do tempo. Se você definir uma data/hora personalizada, o chip mostra a data e hora completas, e um botão de reset aparece ao lado para retornar ao horário atual do sistema.
- **Filtro de magnitude** — permite limitar quais estrelas são exibidas com base em seu brilho. Use o controle deslizante para definir o valor máximo de magnitude. Valores mais baixos mostram apenas as estrelas mais brilhantes, enquanto valores mais altos revelam estrelas mais fracas e objetos de céu profundo. Isso ajuda a reduzir a desordem visual ou simular o que é visível a olho nu.
- [**Configurar Visualização**](#configure-view) — abre as configurações de exibição que controlam como objetos, trajetórias e linhas de referência são exibidos no Mapa estelar.

A tela renderiza o hemisfério completo do céu acima da sua localização, alinhado com a direção da bússola. O Mapa estelar pode ser rotacionado manualmente arrastando a tela. A rotação manual do Mapa estelar não afeta a orientação do mapa da Terra. O mapa da Terra sempre segue o [modo de orientação do mapa](../map/interact-with-map.md#map-orientation-modes) selecionado nas suas configurações. Toque em objetos celestes para detalhes como magnitude, horários de nascer/pôr ou trajetórias.

O Mapa estelar também pode se alinhar com a orientação do seu dispositivo quando o modo bússola está ativado. Nesse modo, o céu rotaciona de acordo com os sensores de acelerômetro e bússola do dispositivo, permitindo que você explore o céu movendo fisicamente o telefone.


## Context Menu {#context-menu}

![Menu de Contexto](@site/static/img/plugins/starwatcher/context_menu_view.png)

O **Menu de Contexto** fornece informações detalhadas sobre objetos celestes e ferramentas para observá-los. Ele abre quando você toca em um objeto celeste no Mapa estelar.

Quando um objeto é selecionado, ele é destacado no Mapa estelar com um marcador de círculo vermelho. Seu movimento diário também é visualizado por um anel de hora (00–23), mostrando onde o objeto aparecerá no céu a cada hora do dia local e a direção de seu movimento.

O Menu de Contexto aparece na parte inferior da tela e contém informações do objeto, ações rápidas e abas para explorar a visibilidade e o cronograma de observação do objeto.

### Object Information {#object-information}

![Informações do Objeto](@site/static/img/plugins/starwatcher/object_view.png)

A seção superior do Menu de Contexto exibe o nome e a classificação do objeto. Abaixo do nome, o tipo do objeto e sua constelação ou grupo pai são mostrados. Por exemplo:  
- **Beta Ursae Minoris** — Estrela • Ursa Minor
- **Júpiter** — Planeta • Sistema solar
- **Andrómeda** — Galáxia • Céu profundo

Blocos de informações rápidas exibem parâmetros observacionais principais:  
- Nascer – o horário em que o objeto nasce acima do horizonte.
- Pôr – o horário em que o objeto se põe abaixo do horizonte.
- Azimute – a direção do objeto em relação ao norte (0°–360°).
- Altitude – a altura do objeto acima do horizonte.
- Magnitude – o brilho do objeto como visto da Terra. 

Esses valores são atualizados dinamicamente com base no horário selecionado e na localização do usuário.

Abaixo dos blocos de informações rápidas, o menu pode incluir informações e recursos adicionais sobre o objeto:  
- Ler na Wikipedia – Abre o artigo da Wikipedia do objeto. Se dados da Wikipedia offline estiverem disponíveis, o artigo pode ser aberto sem uma conexão com a internet; caso contrário, a página abre no navegador.
- Fotos online – Exibe fotos disponíveis relacionadas ao objeto celeste selecionado.

### Actions {#actions}

Abaixo das informações do objeto, o Menu de Contexto fornece várias ações para interagir com o objeto celeste selecionado:
- **Salvar** – Adiciona o objeto à sua lista de Favoritos para acesso rápido.
- **Localizar** – Centraliza o objeto selecionado no Mapa estelar.
- **Direção** – Mostra a direção para o objeto no mapa, ajudando você a se orientar enquanto observa o céu.
- **Trajetória** – Exibe a trajetória diária do objeto pelo céu, permitindo que você veja como ele se move durante o dia.

### Visibility Graph {#actions}

![Gráfico de Visibilidade](@site/static/img/plugins/starwatcher/visibility.png)

A aba **Visibilidade** mostra como o objeto selecionado se move pelo céu durante um período de 24 horas.

O gráfico exibe a altitude do objeto acima do horizonte ao longo do tempo.

- O eixo horizontal representa o tempo de 12:00 a 12:00 do dia seguinte.
- O eixo vertical representa a altitude de −30° a +90°.

A curva colorida mostra a altitude do objeto ao longo do dia.

O fundo do gráfico representa o estado do céu e muda dependendo da posição do Sol. Isso ajuda a identificar quando as observações são possíveis.

As cores representam diferentes condições do céu:  
- azul claro — dia
- azul mais escuro — crepúsculo
- azul escuro / preto — noite

A cor da trajetória do objeto também reflete sua altitude:  
- amarelo – alto no céu (melhor visibilidade)
- laranja – altitude média
- vermelho – próximo ao horizonte
- roxo – abaixo do horizonte (não visível)

Um indicador móvel permite explorar a posição do objeto em diferentes horários. Quando o indicador é movido, o horário atual, altitude e azimute são atualizados.

Abaixo do gráfico, eventos importantes de observação são exibidos: 
- **Nascer** – quando o objeto nasce acima do horizonte.
- **Culminação** – quando o objeto atinge sua altitude mais alta.
- **Pôr** – quando o objeto se põe abaixo do horizonte.

O gráfico abre com o indicador posicionado no horário atual do sistema. A localização usada para os cálculos é mostrada abaixo do gráfico.

### Observation Schedule {#actions}

![Cronograma de Observação](@site/static/img/plugins/starwatcher/schedule.png)

A aba **Cronograma** exibe a visibilidade do objeto selecionado para a semana atual. Cada linha representa um dia e inclui:  
- o dia da semana
- a data
- horário de nascer
- horário de pôr
- um pequeno gráfico de visibilidade para esse dia

O mini gráfico mostra quando o objeto é visível durante o dia e como sua altitude muda. A seção colorida da barra representa o período em que o objeto está acima do horizonte.

Você pode navegar entre semanas usando os botões de seta no cabeçalho do Cronograma. O botão de calendário permite retornar à semana atual.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR Star Finding (Camera Mode) {#ar-star-finding}

**Go to:** *Enabled plugin → Menu → Star map → Camera button* 

A camada **Astronomia** funciona com a **câmera do dispositivo** para habilitar **observação de estrelas em Realidade Aumentada (AR)**. Aponte a câmera do telefone para o céu noturno real e veja estrelas, planetas, constelações, Sol/Lua sobrepostos em tempo real.

**How AR Star Finding works:**
- **Visualização da câmera ao vivo** mostra o céu real com sobreposições astronômicas transparentes alinhadas ao horizonte/bússola.
- **Mova a câmera** para escanear o céu — objetos são destacados quando aparecem no seu campo de visão.
- **Toque em objetos destacados** para ver azimute, altitude, magnitude, horários de nascer/pôr e link da Wikipedia.
- **Calibração da bússola** necessária para alinhamento preciso (balance o telefone em forma de 8 se necessário).

O modo AR usa sensores do dispositivo (giroscópio, acelerômetro e bússola) para alinhar objetos celestes com o céu real.

**Perfeito para:**
- Identificar estrelas/planetas fracos invisíveis a olho nu.
- Localizar constelações movendo o telefone pelo céu.
- Navegação no céu em tempo real durante caminhadas ou acampamentos.


## Configure View {#configure-view}

![Configurar Visualização](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configurar Visualização](@site/static/img/plugins/starwatcher/full_state.png)

**Configurar Visualização** permite que você controle como o Mapa estelar é exibido ativando ou desativando modos visuais, objetos e auxílios de renderização.

Para abrir Configurar Visualização, toque no botão Configurar Visualização no canto inferior direito da tela do Mapa estelar. O botão é representado por um ícone no estilo de camada (formas empilhadas), indicando configurações de exibição e camada. Configurar Visualização abre em um estado *Meio*, mostrando as opções principais de exibição. Deslize o painel para cima para expandi-lo para o estado *Completo* e acessar todas as configurações disponíveis. Para fechar Configurar Visualização, deslize o painel para baixo uma vez para retornar ao estado Meio, deslize para baixo novamente para fechá-lo completamente, ou toque em qualquer lugar no mapa fora do painel. Você também pode tocar no botão Fechar (X) no canto superior direito do painel.

### Modes and Actions {#modes-and-actions}

![Configurar Visualização](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configurar Visualização](@site/static/img/plugins/starwatcher/red_filter_new.png)

Esta seção controla os principais modos de exibição do Mapa estelar.

- **2D / 3D**. Alterna entre uma visualização de trajetória celeste (2D), que mostra o céu como um domo projetado com trajetórias de objetos, e uma visualização de céu em estilo globo (3D) representando a esfera celeste.
- **Mapa**. Habilita uma visualização adicional do mapa da Terra exibida abaixo do Mapa estelar, permitindo que você relacione objetos celestes ao seu entorno geográfico real.
- **Filtro vermelho**. Aplica um filtro de cor vermelha à tela inteira para reduzir a poluição luminosa e preservar a visão noturna durante observações em céus escuros.

### Visible Objects {#visible-objects}

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

### Personal Display Options {#personal-display-options}

**Opções de exibição pessoal** controlam auxílios visuais adicionais relacionados ao foco e observação do usuário.

| Opção | Descrição |
|-------|-------------|
| Direção | Mostra um indicador direcional para ajudar a orientar sua visualização. |
| Trajetória diária | Exibe a trajetória diária de objetos celestes selecionados pelo céu. |
| Favoritos | Destaca ou exibe objetos marcados como favoritos. |

### Rendering Aids {#rendering-aids}

**Auxílios de renderização** adicionam linhas de referência e grades para ajudar a orientar o Mapa estelar.

| Auxílio | Descrição |
|-------|-------------|
| Grade azimutal | Adiciona uma grade baseada em azimute para orientação horizontal do céu. |
| Linha do meridiano | Exibe a linha do meridiano cruzando o céu de norte a sul. |
| Grade equatorial | Mostra a grade de coordenadas equatoriais celestes. |
| Linha eclíptica | Exibe a linha eclíptica representando a trajetória aparente do Sol. |
| Linha do equador | Exibe a projeção equatorial da Terra na esfera celeste, ajudando a visualizar a rotação da Terra em relação ao céu. |
| Linha galáctica | Mostra o plano da galáxia Via Láctea pelo céu, indicando a direção principal do disco galáctico. |

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

## Search {#search}

![Pesquisa](@site/static/img/plugins/starwatcher/explore_screen.png)

O recurso **Pesquisa** no plugin de Astronomia permite que você encontre objetos celestes, explore categorias do céu e acesse dados de observação. Para abrir a Pesquisa, toque no botão Pesquisa no Mapa estelar. Isso abre a tela de Pesquisa, que fornece várias seções para descobrir e organizar objetos celestes. A tela de Pesquisa inclui as seguintes seções:

**1. Observar agora**

A seção Observar agora destaca objetos celestes que são visíveis agora ou esta noite. Esta seção atua como uma ferramenta de recomendação, mostrando objetos que são mais adequados para observação com base na sua localização e horário atuais.

**2. Categorias**

A seção Categorias permite que você navegue por objetos por tipo: Sistema solar, Constelações, Estrelas, Nébulas, Aglomerados de estrelas e Céu profundo. Cada categoria abre uma lista de objetos com informações principais: nome do objeto, tipo ou constelação, magnitude (brilho) e horário de nascer ou pôr (se aplicável).

### Sorting and Filters {#sorting-and-filters}

![Ordenação](@site/static/img/plugins/starwatcher/sorting.png) ![Filtros](@site/static/img/plugins/starwatcher/filters.png)

Toque na barra de pesquisa para abrir a interface completa de pesquisa. Você pode refinar os resultados usando opções de ordenação e filtragem.

Você pode ordenar objetos por:  
- Nome (A–Z ou Z–A)
- Mais brilhantes primeiro
- Mais fracos primeiro
- Nasce mais cedo
- Põe mais cedo

Os filtros ajudam a reduzir os objetos visíveis.

**Visibilidade**  
- Mostrar todos — exibe todos os objetos
- Visível agora — objetos atualmente acima do horizonte
- Visível esta noite — objetos visíveis entre o pôr do sol e o nascer do sol

**Filtros adicionais**  
- Visível a olho nu — mostra apenas objetos com magnitude ≤ 6

**Categorias**  
Você pode filtrar resultados por tipo de objeto. Selecionar categorias específicas desativa automaticamente a opção Todos.

### My Data {#my-data}

![Meus Dados](@site/static/img/plugins/starwatcher/my_data.png)

A seção Meus Dados contém objetos com os quais o usuário interageu. Esta seção inclui três listas:

- Favoritos — objetos salvos do menu de contexto.
- Trajetória Diária — objetos para os quais a trajetória de movimento diário está ativada.
- Direções — objetos com um indicador de direção ativo no Mapa estelar.

Selecionar um item abre o menu de contexto do objeto.

### Catalogs {#catalogs}

![Catálogos](@site/static/img/plugins/starwatcher/catalogs.png)

A seção Catálogos fornece acesso aos catálogos astronômicos disponíveis no plugin de Astronomia.

Os catálogos contêm grandes coleções de objetos celestes como estrelas, galáxias, nebulosas e aglomerados de estrelas. Abrir um catálogo exibe uma lista de objetos incluídos nesse catálogo.

## Related Articles {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais](../../user/map/vector-maps.md)