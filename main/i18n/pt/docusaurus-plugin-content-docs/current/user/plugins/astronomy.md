---
source-hash: 1841e056ea7f5c484b55fab6bf53f5d00a5f31af278e2d2db0020bae898913a7
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

:::info 

**Astronomia** está atualmente em **beta** no **Android**. 

No **iOS**, o plugin está disponível através do programa **iOS beta ([TestFlight](https://testflight.apple.com/join/7poGNCKy))**. 
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
3. Selecione **hora e data** usando os controles na tela do Mapa estelar.
4. Ajuste o que é exibido no Mapa estelar usando [**Configurar Visualização**](#configure-view) — por exemplo, alterne objetos visíveis e auxílios de renderização.
5. Toque no botão **Fechar (X)** no topo da tela do Mapa estelar para sair do Mapa estelar e retornar ao mapa da Terra.

No Android, o plugin funciona com ambos os motores de renderização de mapa, mas tem o melhor desempenho no modo OpenGL.

## Star Map Screen {#star-map-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

**Go to:** *Enabled plugin → <Translate ios="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_ios.webp)

</TabItem>

</Tabs>  

A tela dedicada **Mapa estelar** exibe um domo celeste interativo com estrelas, constelações, planetas, trajetórias do Sol e da Lua. Na parte inferior da tela, você pode acessar os seguintes controles: 
- [**Pesquisa**](#search) — abre a tela de Pesquisa onde você pode pesquisar objetos celestes e navegar por catálogos e categorias do céu. 
- **Hora e data** — permite alterar a data e hora para observar o céu em diferentes momentos no passado ou futuro. Isso é útil para planejar observações, rastrear o movimento de objetos ou aprender como o céu muda ao longo do tempo. Se você definir uma data/hora personalizada, o chip mostra a data e hora completas, e um botão de reset aparece ao lado para retornar ao horário atual do sistema.
- **<Translate android="true" ids="magnitude_filter"/>** — permite limitar quais estrelas são exibidas com base em seu brilho. Use o controle deslizante para definir o valor máximo de magnitude. Valores mais baixos mostram apenas as estrelas mais brilhantes, enquanto valores mais altos revelam estrelas mais fracas e objetos de céu profundo. Isso ajuda a reduzir a desordem visual ou simular o que é visível a olho nu.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — abre as configurações de exibição que controlam como objetos, trajetórias e linhas de referência são exibidos no Mapa estelar.

A tela renderiza o hemisfério completo do céu acima da sua localização, alinhado com a direção da bússola. O Mapa estelar pode ser rotacionado manualmente arrastando a tela. A rotação manual do Mapa estelar não afeta a orientação do mapa da Terra. O mapa da Terra sempre segue o [modo de orientação do mapa](../map/interact-with-map.md#map-orientation-modes) selecionado nas suas configurações. Toque em objetos celestes para detalhes como magnitude, horários de nascer/pôr ou trajetórias.

O Mapa estelar também pode se alinhar com a orientação do seu dispositivo quando o modo bússola está ativado. Nesse modo, o céu rotaciona de acordo com os sensores de acelerômetro e bússola do dispositivo, permitindo que você explore o céu movendo fisicamente o telefone.


## Context Menu {#context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view_ios.webp)

</TabItem>

</Tabs> 

O **Menu de Contexto** fornece informações detalhadas sobre objetos celestes e ferramentas para observá-los. Ele abre quando você toca em um objeto celeste no Mapa estelar.

Quando um objeto é selecionado, ele é destacado no Mapa estelar com um marcador de círculo vermelho. Seu movimento diário também é visualizado por um anel de hora (00–23), mostrando onde o objeto aparecerá no céu a cada hora do dia local e a direção de seu movimento.

O Menu de Contexto aparece na parte inferior da tela e contém informações do objeto, ações rápidas e abas para explorar a visibilidade e o cronograma de observação do objeto.

### Object Information {#object-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Object Information](@site/static/img/plugins/starwatcher/object_view_new.png) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Object Information](@site/static/img/plugins/starwatcher/object_view_ios.webp) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2_ios.webp)

</TabItem>

</Tabs>

A seção superior do Menu de Contexto exibe o nome e a classificação do objeto. Abaixo do nome, o tipo do objeto e sua constelação ou grupo pai são mostrados. Por exemplo:  
- **Beta Ursae Minoris** — Estrela • Ursa Minor
- **<Translate android="true" ids="astro_name_moon"/>** — Satélite • Terra
- **<Translate android="true" ids="astro_name_jupiter"/>** — Planeta • Sistema solar

Blocos de informações rápidas exibem parâmetros observacionais principais:  
- <Translate android="true" ids="astro_rise"/> – o horário em que o objeto nasce acima do horizonte.
- <Translate android="true" ids="astro_set"/> – o horário em que o objeto se põe abaixo do horizonte.
- <Translate android="true" ids="shared_string_azimuth"/> – a direção do objeto em relação ao norte (0°–360°).
- <Translate android="true" ids="altitude"/> – a altura do objeto acima do horizonte.
- <Translate android="true" ids="shared_string_magnitude"/> – o brilho do objeto como visto da Terra. 
- Distância (*somente iOS*) – a distância da Terra até o objeto celeste selecionado.

Esses valores são atualizados dinamicamente com base no horário selecionado e na localização do usuário.

Abaixo dos blocos de informações rápidas, o menu pode incluir informações e recursos adicionais sobre o objeto:
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Permite que você baixe um banco de dados estendido com artigos da Wikipedia e catálogos de céu profundo para uso offline. Após o download, informações detalhadas sobre objetos celestes podem ser visualizadas diretamente no app sem uma conexão com a internet.
- <Translate android="true" ids="read_on_wiki"/> – Abre o artigo da Wikipedia do objeto no navegador.
- <Translate android="true" ids="astro_designations"/> – Mostra nomes alternativos e identificadores de catálogo para o objeto (por exemplo, HD, HIP, NGC). Esta seção está disponível para objetos que têm entradas em catálogos, como estrelas e objetos de céu profundo. Se o objeto não tiver um nome comum, uma dessas designações é usada como o nome principal.
- <Translate android="true" ids="online_photos"/> – Exibe fotos disponíveis relacionadas ao objeto celeste selecionado.

### Actions {#actions}

Abaixo das informações do objeto, o Menu de Contexto fornece várias ações para interagir com o objeto celeste selecionado:
- **<Translate android="true" ids="shared_string_save"/>** – Adiciona o objeto à sua lista de Favoritos para acesso rápido.
- **<Translate android="true" ids="astro_locate"/>** – Centraliza o objeto selecionado no Mapa estelar.
- **<Translate android="true" ids="astro_direction"/>** – Mostra a direção para o objeto no mapa, ajudando você a se orientar enquanto observa o céu.
- **<Translate android="true" ids="astro_path"/>** – Exibe a trajetória diária do objeto pelo céu, permitindo que você veja como ele se move durante o dia.

### Visibility Graph {#visibility-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_ios.webp)

</TabItem>

</Tabs>

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

Um indicador móvel permite explorar a posição do objeto em diferentes horários. Quando o indicador é movido, o horário atual, altitude e azimute são atualizados. O valor de azimute também inclui a direção correspondente da bússola (por exemplo, 354° Az (N)).

Abaixo do gráfico, eventos importantes de observação são exibidos: 
- **<Translate android="true" ids="astro_rise"/>** – quando o objeto nasce acima do horizonte.
- **<Translate android="true" ids="astro_culmination"/>** – quando o objeto atinge sua altitude mais alta.
- **<Translate android="true" ids="astro_set"/>** – quando o objeto se põe abaixo do horizonte. Se o objeto nunca nasce ou nunca se põe, os valores correspondentes são ocultados.

O gráfico abre com o indicador posicionado no horário atual do sistema. A localização usada para os cálculos é mostrada abaixo do gráfico. A localização é exibida como o nome da cidade.

### Observation Schedule {#observation-schedule}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_ios.webp)

</TabItem>

</Tabs>

A aba **Cronograma** exibe a visibilidade do objeto selecionado para a semana atual. Cada linha representa um dia e inclui:  
- o dia da semana
- a data
- horário de nascer
- horário de pôr. Se o horário de pôr ocorrer no dia seguinte, ele é marcado com ⁺¹
- um pequeno gráfico de visibilidade para esse dia

O mini gráfico mostra quando o objeto é visível durante o dia e como sua altitude muda. A seção colorida da barra representa o período em que o objeto está acima do horizonte. O mini gráfico representa o intervalo de tempo de 00:00 a 23:59 para o dia selecionado.

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AR View](@site/static/img/plugins/starwatcher/ar_view_android.webp)

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/> → AR mode* 

</TabItem>

<TabItem value="ios" label="iOS">

![AR View](@site/static/img/plugins/starwatcher/ar_view_ios.webp)

**Go to:** *Enabled plugin → <Translate ios="true" ids="shared_string_menu,star_map"/> → AR mode*

</TabItem>

</Tabs>

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure View](@site/static/img/plugins/starwatcher/half_state_ios.webp) ![Configure View](@site/static/img/plugins/starwatcher/full_state_ios.webp)

</TabItem>

</Tabs>

**<Translate android="true" ids="astro_configure_view"/>** permite que você controle como o Mapa estelar é exibido ativando ou desativando modos visuais, objetos e auxílios de renderização.

Para abrir <Translate android="true" ids="astro_configure_view"/>, toque no botão <Translate android="true" ids="astro_configure_view"/> no canto inferior direito da tela do Mapa estelar. O botão é representado por um ícone no estilo de camada (formas empilhadas), indicando configurações de exibição e camada. <Translate android="true" ids="astro_configure_view"/> abre em um estado *Meio*, mostrando as opções principais de exibição. Deslize o painel para cima para expandi-lo para o estado *Completo* e acessar todas as configurações disponíveis. Para fechar <Translate android="true" ids="astro_configure_view"/>, deslize o painel para baixo uma vez para retornar ao estado Meio, deslize para baixo novamente para fechá-lo completamente, ou toque em qualquer lugar no mapa fora do painel. Você também pode tocar no botão Fechar (X) no canto superior direito do painel.

### Modes and Actions {#modes-and-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_ios.webp) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_ios.webp)

</TabItem>

</Tabs>

Esta seção controla os principais modos de exibição do Mapa estelar.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Alterna entre uma visualização de trajetória celeste (2D), que mostra o céu como um domo projetado com trajetórias de objetos, e uma visualização de céu em estilo globo (3D) representando a esfera celeste.
- **<Translate android="true" ids="shared_string_map"/>**. Habilita uma visualização adicional do mapa da Terra exibida abaixo do Mapa estelar, permitindo que você relacione objetos celestes ao seu entorno geográfico real.
- **<Translate android="true" ids="red_filter"/>**. Aplica um filtro de cor vermelha à tela inteira para reduzir a poluição luminosa e preservar a visão noturna durante observações em céus escuros.

### Visible Objects {#visible-objects}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure View](@site/static/img/plugins/starwatcher/solar_system_ios.webp) ![Configure View](@site/static/img/plugins/starwatcher/constellations_ios.webp)

</TabItem>

</Tabs>

Esta seção permite que você escolha quais tipos de objetos celestes são exibidos no Mapa estelar.

| Objeto | Descrição |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Exibe o Sol, a Lua e os planetas visíveis. |
| <Translate android="true" ids="astro_constellations"/> | Mostra linhas e padrões de constelações formados por estrelas. |
| <Translate android="true" ids="astro_stars"/> | Exibe estrelas individuais visíveis no Mapa estelar. |
| <Translate android="true" ids="astro_nebulas"/> | Mostra objetos de nebulosas onde disponíveis. |
| <Translate android="true" ids="astro_star_clusters"/> | Exibe aglomerados de estrelas como objetos celestes separados. |
| <Translate android="true" ids="astro_deep_sky"/> | Alterna objetos de céu profundo como galáxias, aglomerados de galáxias e buracos negros. |

### Personal Display Options {#personal-display-options}

**Opções de exibição pessoal** controlam auxílios visuais adicionais relacionados ao foco e observação do usuário.

| Opção | Descrição |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Mostra um indicador direcional para ajudar a orientar sua visualização. |
| <Translate android="true" ids="astro_daily_path"/> | Exibe a trajetória diária de objetos celestes selecionados pelo céu. |
| <Translate android="true" ids="shared_string_favorites"/> | Destaca ou exibe objetos marcados como favoritos. |

### Rendering Aids {#rendering-aids}

**Auxílios de renderização** adicionam linhas de referência e grades para ajudar a orientar o Mapa estelar.

| Auxílio | Descrição |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Adiciona uma grade baseada em azimute para orientação horizontal do céu. |
| <Translate android="true" ids="meridian_line"/> | Exibe a linha do meridiano cruzando o céu de norte a sul. |
| <Translate android="true" ids="equatorial_grid"/> | Mostra a grade de coordenadas equatoriais celestes. |
| <Translate android="true" ids="ecliptic_line"/> | Exibe a linha eclíptica representando a trajetória aparente do Sol. |
| <Translate android="true" ids="equator_line"/> | Exibe a projeção equatorial da Terra na esfera celeste, ajudando a visualizar a rotação da Terra em relação ao céu. |
| <Translate android="true" ids="galactic_line"/> | Mostra o plano da galáxia Via Láctea pelo céu, indicando a direção principal do disco galáctico. |

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search](@site/static/img/plugins/starwatcher/explore_screen.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Search](@site/static/img/plugins/starwatcher/explore_screen_ios.webp)

</TabItem>

</Tabs>

O recurso **Pesquisa** (**Explorar** no iOS) no plugin de Astronomia permite que você encontre objetos celestes, explore categorias do céu e acesse dados de observação. Para abrir a Pesquisa, toque no botão Pesquisa no Mapa estelar. Isso abre a tela de Pesquisa, que fornece várias seções para descobrir e organizar objetos celestes. A tela de Pesquisa inclui as seguintes seções:

**1. Observar agora**

A seção Observar agora destaca objetos celestes que são visíveis agora ou esta noite. Esta seção atua como uma ferramenta de recomendação, mostrando objetos que são mais adequados para observação com base na sua localização e horário atuais.

**2. Solar and Lunar eclipses** (*Android only*)

As ferramentas [Eclipse Solar](#solar-eclipse) e [Eclipse Lunar](#lunar-eclipse) permitem que você explore eventos de eclipse em todo o mundo, visualize sua progressão ao longo do tempo e verifique a visibilidade do eclipse no mapa.

**3. Categorias**

A seção Categorias permite que você navegue por objetos por tipo: Sistema solar, Constelações, Estrelas, Nébulas, Aglomerados de estrelas e Céu profundo. Cada categoria abre uma lista de objetos com informações principais: nome do objeto, tipo ou constelação, magnitude (brilho) e horário de nascer ou pôr (se aplicável).

### Solar Eclipse (Android only) {#solar-eclipse}

![Solar Eclipse](@site/static/img/plugins/starwatcher/solar_eclipse_andr.webp) ![Solar Eclipse](@site/static/img/plugins/starwatcher/solar_eclipse_path_andr.webp)

O **Explorador de Eclipse Solar** permite que você explore eclipses solares passados e futuros em todo o mundo. Ele combina o Mapa estelar com uma linha do tempo interativa e visualização de mapa para mostrar como um eclipse se desenvolve em diferentes locais.

O Explorador de Eclipse Solar inclui os seguintes recursos:

- **Navegação de eclipse**. Use os botões Anterior e Próximo para alternar entre eclipses solares disponíveis.
- **Linha do tempo**. A linha do tempo exibe o início, o máximo e o fim do eclipse. Mova o controle deslizante para visualizar o eclipse em qualquer momento durante o evento. Todas as informações do eclipse são atualizadas automaticamente para o horário selecionado.
- **Informações do eclipse**. O painel de informações exibe: tipo de eclipse, data e hora atuais, obscurecimento do eclipse, altitude do Sol e coordenadas do centro do mapa. As informações exibidas são calculadas para o centro atual do mapa.
- **Caminho do eclipse**. Toque em Ajustar caminho do eclipse para centralizar o mapa no caminho do eclipse. Toque em *Mostrar mapa* ou *Ocultar mapa* para exibir ou ocultar o caminho do eclipse no mapa. O caminho do eclipse mostra onde o eclipse é visível e como a sombra da Lua se move pela superfície da Terra.

:::warning

Nunca olhe diretamente para o Sol sem proteção adequada para visualização solar. Os horários dos eclipses são estimativas.

:::

### Lunar Eclipse (Android only) {#lunar-eclipse}

![Lunar Eclipse](@site/static/img/plugins/starwatcher/lunar_eclipse_andr.webp) ![Lunar Eclipse](@site/static/img/plugins/starwatcher/lunar_eclipse_path_andr.webp)

O **Explorador de Eclipse Lunar** permite que você explore eclipses lunares em todo o mundo e observe como a Lua passa pela sombra da Terra.

O Explorador de Eclipse Lunar inclui o seguinte recurso:

- **Navegação de eclipse**. Use os botões Anterior e Próximo para alternar entre eclipses lunares disponíveis.
- **Tipos de eclipse**. O explorador suporta: Eclipses penumbrais, Eclipses parciais e Eclipses totais
- **Linha do tempo**. A linha do tempo exibe o início, o máximo e o fim do eclipse. Marcadores na linha do tempo indicam os diferentes estágios do eclipse. Mova o controle deslizante para observar o eclipse em qualquer ponto durante o evento.
- **Informações do eclipse**. O painel de informações exibe: fase do eclipse, obscurecimento do eclipse, altitude da Lua e coordenadas do centro do mapa. As informações exibidas são calculadas para o centro atual do mapa.
- **Mapa de visibilidade**. Toque em *Ajustar visibilidade* para centralizar o mapa na área de visibilidade do eclipse. Toque em *Mostrar mapa* ou *Ocultar mapa* para exibir ou ocultar a camada de visibilidade. A camada de visibilidade destaca as regiões onde a Lua está acima do horizonte durante o eclipse.

:::warning

As cores e o brilho das sombras são esquemáticos e destinados apenas à visualização.

:::

### Sorting and Filters {#sorting-and-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sorting](@site/static/img/plugins/starwatcher/sorting_ios.webp) ![Filters](@site/static/img/plugins/starwatcher/filters_ios.webp)

</TabItem>

</Tabs>

Toque na barra de pesquisa para abrir a interface completa de pesquisa. Você pode refinar os resultados usando opções de ordenação e filtragem.

Você pode ordenar objetos por:  
- Nome (A–Z ou Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Os filtros ajudam a reduzir os objetos visíveis.

**Visibilidade**  
- <Translate android="true" ids="astro_filter_show_all"/> — exibe todos os objetos
- <Translate android="true" ids="astro_filter_visible_now"/> — objetos atualmente acima do horizonte
- <Translate android="true" ids="astro_filter_visible_tonight"/> — objetos visíveis entre o pôr do sol e o nascer do sol

**Filtros adicionais**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — mostra apenas objetos com magnitude ≤ 6

**Categorias**  
Você pode filtrar resultados por tipo de objeto. Selecionar categorias específicas desativa automaticamente a opção Todos.

### My Data {#my-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My Data](@site/static/img/plugins/starwatcher/my_data_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My Data](@site/static/img/plugins/starwatcher/my_data_ios.webp)

</TabItem>

</Tabs>

A seção Meus Dados contém objetos com os quais o usuário interageu. Esta seção inclui três listas:

- <Translate android="true" ids="shared_string_favorites"/> — objetos salvos do menu de contexto.
- <Translate android="true" ids="astro_daily_path"/> — objetos para os quais a trajetória de movimento diário está ativada.
- <Translate android="true" ids="astro_directions"/> — objetos com um indicador de direção ativo no Mapa estelar.

Selecionar um item abre o menu de contexto do objeto.

### Catalogs {#catalogs}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_ios.webp)

</TabItem>

</Tabs>

A seção Catálogos fornece acesso aos catálogos astronômicos disponíveis no plugin de Astronomia.

Os catálogos contêm grandes coleções de objetos celestes como estrelas, galáxias, nebulosas e aglomerados de estrelas. Abrir um catálogo exibe uma lista de objetos incluídos nesse catálogo.

## Related Articles {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais](../../user/map/vector-maps.md)