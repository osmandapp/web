---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title: Baixar Mapas
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

## Visão geral {#overview}

Carregar mapas para o aplicativo OsmAnd é uma etapa fundamental para garantir o bom funcionamento e o uso da navegação offline. Sem mapas offline, o aplicativo não pode funcionar totalmente. O download de mapas dá acesso a mapas de diferentes regiões, permitindo que você navegue sem uma conexão com a Internet.

Você tem duas maneiras *principais* de baixar mapas: **1)** [visualizar a lista de regiões no *Menu Principal*](#maps-and-resources), ou **2)** [selecionar a região necessária diretamente no mapa](#select-on-the-map). Isso oferece flexibilidade para selecionar as regiões desejadas e garante que os mapas se adequem aos seus planos.

Embora o OsmAnd suporte [Vetorial](../map/vector-maps.md) e [Raster](../map/raster-maps.md), é recomendável começar a trabalhar com mapas vetoriais offline. Este tipo de mapa (leia mais sobre os [tipos de mapa OsmAnd](../personal/maps-resources.md#map-types) aqui) garante o funcionamento confiável de todas as funções principais do aplicativo, incluindo [Pesquisa](../search/index.md), [Navegação](../navigation/index.md) e [Menu de contexto](../map/map-context-menu.md). Isso é especialmente importante se suas viagens incluírem viagens para locais remotos ou lugares com acesso limitado à internet.

## Baixar {#download}

Comece a carregar mapas na [tela de configuração inicial](#initial-setup-screen), ou vá para o *menu lateral* principal *→* [Mapas e Recursos](#maps-and-resources) e selecione os mapas necessários na lista geral, ou [selecione uma região](#select-on-the-map) diretamente no mapa tocando na região que você precisa.

### Tela de Configuração Inicial {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Ao iniciar o aplicativo pela primeira vez, você é solicitado a baixar um mapa adaptado à sua localização atual, determinado pela sua conexão com a Internet. Esta etapa é opcional, permitindo que você pule o download e prossiga diretamente para a interface de mapas locais para sua região.

Se você estiver usando uma VPN, o OsmAnd pode sugerir um mapa com base na localização virtual da VPN. Nesses casos, você pode selecionar manualmente um mapa que se alinhe melhor com sua região geográfica real.

#### Menu de três pontos {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu de localização:**

- *Selecionar uma região diferente.* Abre o menu [Baixar Mapas](#maps-and-resources).
- *Permitir que determinemos sua localização.* [Solicita permissão](../start-with/first-steps.md#permission-to-access-the-location) para acessar a localização e encontrar o mapa necessário usando esses dados.

**Outro menu:**

- *Restaurar do OsmAnd Cloud.* Abre a tela principal do [OsmAnd Cloud](../personal/osmand-cloud.md) ou a tela de login. Isso é útil se você reinstalou o aplicativo ou deseja restaurar a experiência do usuário anterior sem selecionar novamente regiões e configurações.
- *Restaurar do arquivo.* Abre o gerenciador de arquivos do dispositivo para selecionar e importar um arquivo `.osf`.

### Mapas e Recursos {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de download de mapa geral Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de download de mapa geral iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

A tela [Mapas e Recursos](../personal/maps-resources.md) oferece acesso às seguintes seções:

- [Downloads](../personal/maps-resources.md#downloads). Oferece uma seleção abrangente de [tipos de mapa OsmAnd](../personal/maps-resources.md#map-types).
- [Local](../personal/maps-resources.md#local). Exibe todos os dados de mapa atualmente armazenados em seu dispositivo, incluindo recursos personalizados e importados.
- [Atualizações](../personal/maps-resources.md#updates). Permite que você atualize os mapas mensalmente para manter seus dados atualizados.

#### Baixando Mapas {#downloading-maps}

Para baixar um tipo de mapa específico para um país ou região:

- Navegue até a pasta da região necessária, como África, Europa ou outro continente.
- Selecione seu país ou região preferido na lista.
- Na próxima tela, revise e escolha entre os tipos de mapa disponíveis para essa área.

Você pode encontrar informações sobre outros tipos de mapas na seção [Downloads](../personal/maps-resources.md#downloads) do artigo **Mapas**.

### Opções do Mapa Mundi {#world-map-options}

O OsmAnd inclui duas opções de mapa mundi:

1. **Mini Mapa Mundi** (pré-instalado). Um mapa leve que permite navegação básica e fornece uma visão geral do mundo.
2. **Mapa Mundi Detalhado** (baixável). Um mapa global com as principais cidades, estradas, rios e outras características geográficas.

***Notas importantes:***

- O **Mapa Mundi Detalhado não substitui mapas de países ou regiões individuais.** É útil para uma visão geral, mas não contém o mesmo nível de detalhe que os mapas regionais.
- Se você precisar de navegação detalhada, **baixe mapas de países ou regiões específicos manualmente** via *Menu → Mapas e Recursos → Baixar Mapas.*
- Usuários com **OsmAnd Pro ou Maps+** podem baixar um **número ilimitado de mapas**, mas ainda devem baixar cada região separadamente.
- **Não há uma única opção para baixar todos os mapas mundiais de uma vez.**

### Selecionar no mapa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Um toque curto no mapa mundi permite baixar o mapa da região](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Um toque curto no mapa mundi permite baixar o mapa da região](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Uma maneira de baixar um mapa é diminuir o zoom no mapa mundi e tocar brevemente para selecionar uma região para baixar. Esta área será destacada em amarelo, e um painel aparecerá na parte inferior com o nome da região e uma sugestão para baixá-la ou selecionar outros mapas.

:::tip Cor do mapa
Na tela pequena, o mapa selecionado para download será destacado em amarelo, os mapas que já foram baixados serão destacados em verde e os mapas desativados serão destacados em laranja. Os mapas **desativados** são ignorados para acelerar o programa caso você tenha muitos mapas carregados.
:::

### Pesquisar {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Função de pesquisa para baixar mapa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Função de pesquisa para baixar mapa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Função de pesquisa para baixar mapa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Função de pesquisa para baixar mapa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

A pesquisa facilita a localização de um mapa ou região específica, fornecendo uma maneira conveniente e rápida de baixar os dados de que você precisa. Você pode encontrar e baixar o mapa usando a [função de pesquisa](../search/index.md).

- Inicie uma pesquisa digitando o nome de um país ou região no campo de pesquisa. Em seguida, selecione o mapa necessário na lista que aparece.
- Os mapas disponíveis para download são exibidos em cinza com um ícone de download, os mapas baixados têm uma cor verde e um botão de menu.
- Toque no nome do resultado necessário e a lista de mapas regionais será aberta.
- Selecione [tipos de mapa](../personal/maps-resources.md#map-types): *Mapa padrão, Mapa somente de estradas, Curvas de nível, Wikipedia*.

> *Última atualização: janeiro de 2025*