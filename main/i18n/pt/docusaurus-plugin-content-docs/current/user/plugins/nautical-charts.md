---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title: Vista de Mapa Náutico
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Visão Geral {#overview}

:::info Recurso pago
O plugin Vista de Mapa Náutico é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

A Vista de Mapa Náutico é uma representação gráfica detalhada de oceanos, mares, áreas costeiras e rios que ajuda você a navegar na água e a conhecer rotas populares, obstáculos em sua via navegável, portos mais próximos, ancoradouros e outros marcos importantes.  

Um mapa náutico é um mapa topográfico altamente detalhado para ajudar os capitães a navegar uma embarcação em um curso selecionado na água. É semelhante a um mapa rodoviário para quem viaja de carro. Frequentemente chamado de *'Carta'* por razões históricas, é uma representação gráfica detalhada dos oceanos, mares, áreas costeiras e rios.  

Os mapas náuticos são importantes para marinheiros profissionais e amadores que alugam um barco para navegar pelos canais da cidade. Os mapas fornecem várias informações, como rotas de navegação, luzes de navegação, zonas de perigo, zonas onde é permitido ou proibido navegar ou atracar, etc.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Por que o Tema Náutico Importa {#why-the-nautical-theme-matters}

Todos os marinheiros profissionais são obrigados a ter mapas náuticos oficiais em seus navios. Esses mapas são publicados por agências autorizadas e são bastante caros. As agências investem pesadamente para manter os mapas atualizados. Elas emitem atualizações regulares para os mapas, mas como leva tempo para verificar as informações e processar as atualizações, os mapas náuticos nunca estão completamente atualizados.

Com base nos dados do [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), os mapas náuticos do OsmAnd são criados por pessoas que os utilizam. Cada usuário do mapa pode contribuir para o mapa adicionando informações que consideram importantes e úteis para si, tornando assim o mapa mais detalhado e preciso, ideal para orientação ou planejamento de rotas.  


## Parâmetros de Configuração Necessários {#required-setup-parameters}

A seguinte configuração faz com que o mapa náutico apareça na tela:

1. [Compre](../plugins/index.md#purchase) e [Ative](../plugins/index.md#enable--disable) o plugin de visualização de mapa náutico.  
2. [Baixe](#download-nautical-maps) os mapas náuticos.  
3. Defina o estilo de mapa [Náutico](#set-nautical-map-style) para o [perfil](../personal/profiles.md) necessário.


### Definir Estilo de Mapa Náutico {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Tipo de Mapa Náutico no Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Tipo de Mapa Náutico no iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Use a [Legenda do mapa](../../user/map-legend/nautical-map.md) para qualquer referência ao que é mostrado no mapa náutico. Ela explica os elementos simbólicos em um mapa náutico e serve como referência para ajudar você a navegar em caso de dúvida. Ao definir o estilo de mapa Náutico, você pode obter a melhor visualização dos dados náuticos baixados e exibidos.  

Para alterar o estilo do mapa atual para Náutico, você precisa fazer as seguintes configurações:  

1. Selecione o [perfil](../personal/profiles.md) necessário.  
2. Abra [Configurar mapa](../map/configure-map-menu.md).  
3. Role para baixo até Estilo do mapa, abra-o e marque **Náutico**.


### Baixar Mapas Náuticos {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Visualização de mapas do plugin Náutico Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Visualização de mapas do plugin Náutico iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Para uma apresentação ótima, os mapas podem ser adaptados às necessidades atuais: marcas e símbolos podem ser adicionados com pontos de profundidade e, conforme necessário, contornos. Por outro lado, mapas padrão com informações sobre águas interiores, costeiras e próximas à costa para uma determinada região podem ser um bom complemento às informações sobre vias navegáveis em um mapa náutico.  

Ao [baixar](../start-with/download-maps.md) um mapa náutico, mais detalhes relacionados à navegação de *Barco* aparecem no mapa. Alguns tipos de [mapas náuticos](../plugins/nautical-charts/#nautical-map-style) contêm detalhes como:  

- **Marcas e símbolos náuticos.**  
    Marcas e símbolos contêm todas as marcas de navegação náutica para navegação interior e costeira. Conhecer essas marcas o ajudará a prever a localização de rochas, obstruções, ancoradouros, boias, correntes, águas profundas e rasas e lados do canal, independentemente da direção, etc. Marcas e símbolos são baixados uma vez para o mundo inteiro.

- **Pontos de profundidade.**  
    Os dados náuticos dos pacotes de pontos de profundidade são representados por números exibidos na água que indicam a profundidade mais rasa em um local específico. Os pontos de profundidade estão disponíveis para cada hemisfério e algumas regiões.

- **Contornos de profundidade.**  
    Os pacotes de contornos de profundidade permitem definir áreas de igual profundidade.  Eles são destinados a visualizar mudanças no relevo abaixo da superfície da água. Os contornos de profundidade podem ser baixados para certas áreas e depois desativados se você não precisar deles.

:::info Números de Profundidade
Todos os números de profundidade nos Mapas Náuticos são indicados em metros.
:::


### Desativar Estilo de Mapa Náutico {#disable-nautical-map-style}

Para remover o Náutico e exibir um dos mapas convencionais do OsmAnd, faça qualquer uma das seguintes opções:

- Desative o plugin Náutico.
- Altere o estilo do mapa para qualquer outro que não seja *Náutico*.

:::info NOTA
Desativar o plugin Náutico não remove os dados náuticos carregados, então mesmo que você altere o método de renderização de náutico para qualquer outro método quando os dados náuticos forem baixados, eles permanecerão visíveis no mapa.  
:::


## Perfil Náutico {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Contornos de profundidade náuticos no Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contornos de profundidade no iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

O mapa náutico pode ser incluído em qualquer perfil. No entanto, é mais valioso no [perfil de Barco](../personal/profiles.md) e especialmente na [navegação de Barco](../navigation/routing/boat-navigation.md).  


## Estilo de Mapa Náutico {#nautical-map-style}

O plugin Náutico no OsmAnd estende os estilos de mapa da camada vetorial com o estilo de mapa Náutico. Ele permite exibir dados do mapa de acordo com as regras do mapa Náutico, por exemplo: áreas amarelas para terra e baixios, áreas azuis claras para águas rasas, etc. Para mais informações, consulte a [Legenda do mapa](../../user/map-legend/nautical-map.md).  


### Detalhe do Fundo do Mar {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Detalhes do fundo do mar](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *Menu → Configurar mapa → Estilo do mapa → Detalhes → Detalhe do fundo do mar*

![Detalhes do fundo do mar](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Os dados do fundo do mar contêm informações sobre a vegetação e o material geral da superfície, como rochas, conchas, cascalho, coral, lodo, etc. Devido à classificação internacional dos dados do fundo do mar, existem opções para exibir esses detalhes em um mapa: *simples*, *categoria*, *todos* ou *omitir*. Use a [legenda do mapa da área do fundo do mar](../map-legend/nautical-map.md#seabed-area) para mais informações.

- **Simples** (*para a versão Android*)- mostra os símbolos de marcação marítima de acordo com a Referência INT-1, indicando a natureza da superfície do fundo do mar.  
- **Categoria** - além do símbolo de marcação marítima, também mostra a tag de marcação marítima relevante, indicando o material natural, ou a categoria de algas e ervas marinhas.
- **Todos** - além do símbolo, tag ou categoria de marcação marítima, também mostra qualificações como fina, pegajosa, grossa, etc. Para ervas marinhas e algas, mostra dados marcados com as tags *taxon* e *genus*.  
- **Omitir** - não mostra detalhes do fundo do mar.  

:::info NOTA
Para mais detalhes sobre a classificação dos detalhes da superfície e as opções de renderização, consulte a [wiki de marcações marítimas do OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

### Detalhe de Luz {#light-detail}

Android Vá para: *Menu → Configurar mapa → Estilo do mapa Náutico → Outros atributos do mapa → Detalhe de luz*

iOS Vá para: *Menu → Configurar mapa → Tipo de mapa Náutico → Detalhes → Detalhe de luz*

Esta opção exibe o nível de informação para luzes de navegação. Você pode escolher o quão detalhadas as características de luz aparecem perto de cada farol ou sinal.

- **Simples** – mostra o nome padrão de marcação marítima e a característica de luz .
- **Setores** – exibe arcos de setor completos e detalhes para todos os setores de luz visíveis.
- **Setor 1–5** – mostra detalhes apenas para um número de setor específico.
- **Pequeno** – usa um formato de rótulo compacto para características de luz.
- **Apenas nome** – mostra apenas o nome da marcação marítima sem dados de luz.
- **Omitir** – oculta todas as informações de luz.


## Estilo de Mapa Marítimo {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marítimo Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Vá para: *Menu* → *Configurar mapa* → *Estilo do mapa* → *Marítimo*

</TabItem>

<TabItem value="ios" label="iOS">

![Marítimo iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Vá para: *Menu* → *Configurar mapa* → *Tipo de mapa* → *Marítimo*

</TabItem>

</Tabs>

Este estilo adiciona elementos visuais para navegação marítima, incluindo luzes de navegação com características de luz INT-1, que descrevem o tipo, cor e ritmo de um sinal de luz (por exemplo, se ele pisca, sua cor e o intervalo entre os flashes), e luzes de setor coloridas que indicam a direção e a cor da luz visível do mar.

No estilo Marítimo, os setores de luz são exibidos ao redor de faróis e sinais: branco (mostrado em amarelo no mapa) indica a direção segura para navegação, vermelho marca áreas perigosas ou restritas, e verde mostra direções auxiliares ou laterais.

:::info
Para exibir esta informação, o plugin Náutico deve estar ativado, e o mapa World Seamarks (ou World_seamarks_2.obf) deve ser baixado. As informações não são para uso oficial de navegação.
:::


### Atributos do Mapa {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Atributos Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Vá para: *Menu* → *Configurar mapa* → *Estilo do mapa Marítimo* → *Outros atributos do mapa*

</TabItem>

<TabItem value="ios" label="iOS">

![Atributos iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Vá para: *Menu* → *Configurar mapa* → *Tipo de mapa Marítimo* → *Detalhes* → *Detalhe de luz/Detalhe do fundo do mar*

Vá para: *Menu* → *Configurar mapa* → *Tipo de mapa Marítimo* → Escolha outras opções

</TabItem>

</Tabs>

Após ativar o estilo de mapa Marítimo, você pode ajustar elementos visuais adicionais. Essas opções permitem que você controle como os auxílios à navegação, contornos de profundidade, detalhes do fundo do mar e cores aparecem no mapa.

- **[Detalhe de luz](../plugins/nautical-charts/#light-detail)**. Define como as informações de luz de marcação marítima são exibidas. Opções: **Padrão** (nome completo com características de luz), *Pequeno* (formato compacto), *Apenas nome* (apenas o nome da luz), ou *Omitir* (ocultar rótulos).
- **[Detalhe do fundo do mar](../plugins/nautical-charts/#seabed-detail)**. Controla o nível de informação textual sobre o fundo do mar. Opções: Simples (informações básicas), Categoria (tipo de superfície), Todos (dados completos), ou Omitir (sem texto).
- **Cor da água**. Define a cor base para áreas de água. Opções: *Padrão, Azul, Branco*, ou *Cinza* — útil para ajustar a visibilidade e o contraste em diferentes modos de iluminação.
- **Cor de fairway**. Altera a cor de fairways e canais de navegação. Opções: *Branco, Mais branco, Cinza, Verde*, ou *Amarelo* para melhorar a legibilidade dependendo do fundo do mapa.
- **Estilo de maré baixa**. Ajusta a cor e a textura usadas para áreas de maré baixa. Opções: *Verde claro, Verde escuro, Pântano*, ou *Maré* — cada uma destaca zonas intertidais rasas de forma diferente.
- **Marcadores ENC**. Alterna *Ligado/Desligado*. Quando ativado, mostra marcadores de Carta de Navegação Eletrônica (ENC), como boias, sinais e outros auxílios à navegação.
- **Estilo de conchas**. Define como conchas ou características da superfície do fundo aparecem no fundo do mar. Opções: *Cinza, Rochas, Pedras*, ou *Vermelho*, dependendo do estilo visual preferido.
- **Contornos de profundidade tracejados**. Alterna *Ligado/Desligado*. Quando ativado, exibe linhas de contorno de profundidade como tracejadas, melhorando a legibilidade em áreas densas.
- **Esquema de cores de profundidade**. Seleciona o esquema de cores para zonas de profundidade. Opções: *PAPER* (cores tradicionais de cartas de papel) ou *ECDIS* (paleta padrão de sistema de navegação eletrônico).
- **Tamanho de sondagem pontual**. Define o tamanho da fonte para números de sondagem pontual (valores de profundidade). Opções: *Padrão, 10, 12, 14*, ou *16* — valores maiores melhoram a visibilidade em telas de alta resolução.
- **Distância de sondagem pontual**. Controla com que frequência as sondagens de profundidade aparecem no mapa. Opções: *Padrão, 0, 5, 10, 15, 30, 60*, ou *120*, determinando o espaçamento entre os pontos de profundidade exibidos.
- **Contorno de profundidade de segurança**. Destaca a linha de contorno que marca o limite de profundidade de segurança. Opções: *Desligado, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m*, ou *10 m*. Útil para distinguir áreas de navegação seguras de zonas rasas.


## Dados Náuticos Adicionais {#additional-nautical-data}

### Pontos de Profundidade {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapas náuticos](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Os [pacotes](../start-with/download-maps.md#overview) de pontos de profundidade estão disponíveis para a Europa, Hemisfério Norte e Hemisfério Sul e são informativos. Os pontos de profundidade indicam mudanças na topografia abaixo da superfície da água, indicando a profundidade mais rasa. Isso é necessário para a navegação de *Barco*. Após o download, você precisa ativar os [Contornos de profundidade](#depth-contours) para exibi-los no mapa.


### Contornos de Profundidade {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Contornos de profundidade náuticos no Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Contornos de profundidade no iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Quando um mapa náutico é exibido na tela, você pode ajustar o que vê:

- Mostrar ou ocultar os *Contornos de profundidade*.
- Definir o nível de detalhe das informações do fundo do mar: [*Largura da linha* e *Esquema de cores da linha*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Você pode ajudar o aplicativo OsmAnd a aumentar o banco de dados de contornos de profundidade adicionando suas informações usando [OpenSeaMap](https://map.openseamap.org/)
:::


## Artigos Relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)