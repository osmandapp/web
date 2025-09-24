---
source-hash: 02488ffc13aed2fc0d33253f071c8dbb2d3bc8a182a496a94f4a68885929b5dd
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




## Visão Geral {#overview}

Carregar mapas para a aplicação OsmAnd é um passo fundamental para garantir o bom funcionamento e a utilização da navegação offline. Sem mapas offline, a aplicação não consegue funcionar plenamente. O download de mapas dá-lhe acesso a mapas de diferentes regiões, permitindo-lhe navegar sem ligação à Internet.

Tem duas formas *principais* de descarregar mapas: **1)** começar a partir do [ecrã de configuração inicial](#initial-setup-screen) ou [ver a lista de regiões no *Menu Principal*](#maps-and-resources), ou **2)** [selecionar a região necessária diretamente no mapa](#select-on-the-map). Isto dá-lhe a flexibilidade de selecionar as regiões que pretende e garante que os mapas se adequarão aos seus planos.

Embora o OsmAnd suporte tanto [Vetorial](../map/vector-maps.md) como [Raster](../map/raster-maps.md), é recomendado começar a trabalhar com mapas vetoriais offline. Este tipo de mapa (leia mais sobre [tipos de Mapa OsmAnd](../personal/maps-resources.md#map-types) aqui) garante o funcionamento fiável de todas as funções chave da aplicação, incluindo [Pesquisa](../search/index.md), [Navegação](../navigation/index.md) e [Menu de Contexto](../map/map-context-menu.md). Isto é especialmente importante se as suas viagens incluírem deslocações para locais remotos ou locais com acesso limitado à internet.


## Ecrã de Configuração Inicial {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Ao iniciar a aplicação pela primeira vez, é-lhe pedido que descarregue um mapa adaptado à sua localização atual, determinado pela sua ligação à Internet. Este passo é opcional, permitindo-lhe ignorar o download e prosseguir diretamente para a interface de mapas locais da sua região.

Se estiver a utilizar uma VPN, o OsmAnd pode sugerir um mapa com base na localização virtual da VPN. Nesses casos, pode selecionar manualmente um mapa que se alinhe melhor com a sua região geográfica real.


### Menu de três pontos {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Baixar mapa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Baixar mapa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu de localização:**

- *Selecionar uma região diferente.* Abre o menu [Baixar Mapas](#maps-and-resources).
- *Permitir-nos determinar a sua localização.* [Pede permissão](../start-with/first-steps.md#permission-to-access-the-location) para aceder à localização e encontrar o mapa necessário utilizando esses dados.

**Outro menu:**

- *Restaurar do OsmAnd Cloud.* Abre o ecrã principal do [OsmAnd Cloud](../personal/osmand-cloud.md) ou o ecrã de login. Isto é útil se reinstalou a aplicação ou quer restaurar a experiência de utilizador anterior sem voltar a selecionar regiões e definições.
- *Restaurar de ficheiro.* Abre o gestor de ficheiros do dispositivo para selecionar e importar um ficheiro `.osf`.


## Mapas e Recursos {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu de download de mapas geral Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir para: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu de download de mapas geral iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

O ecrã [Mapas e Recursos](../personal/maps-resources.md) dá acesso às seguintes secções:

- [Downloads](../personal/maps-resources.md#downloads-menu). Oferece uma seleção abrangente de [tipos de mapa OsmAnd](../personal/maps-resources.md#map-types).
- [Local](../personal/maps-resources.md#local-menu). Exibe todos os dados do mapa atualmente armazenados no seu dispositivo, incluindo recursos personalizados e importados.
- [Atualizações](../personal/maps-resources.md#updates-menu). Permite-lhe atualizar os mapas mensalmente para manter os seus dados atualizados.

### Baixar Mapas {#downloading-maps}

Para descarregar um tipo de mapa específico para um país ou região:

- Navegue para a pasta da região necessária, como África, Europa ou outro continente.
- Selecione o seu país ou região preferido na lista.
- No ecrã seguinte, reveja e escolha entre os tipos de mapa disponíveis para essa área.

Pode encontrar informações sobre outros tipos de mapas na secção [Downloads](../personal/maps-resources.md#downloads-menu) do artigo **Mapas**.

## Opções do Mapa Mundial {#world-map-options}

O OsmAnd inclui duas opções de mapa mundial:

1. **Mini Mapa Mundial** (pré-instalado). Um mapa leve que permite navegação básica e fornece uma visão geral do mundo.
2. **Mapa Mundial Detalhado** (descarregável). Um mapa global com as principais cidades, estradas, rios e outras características geográficas.

***Notas importantes:***

- O **Mapa Mundial Detalhado não substitui mapas de países ou regiões individuais.** É útil para uma visão geral, mas não contém o mesmo nível de detalhe que os mapas regionais.
- Se precisar de navegação detalhada, **descarregue mapas de países ou regiões específicos manualmente** através de *Menu → Mapas e Recursos → Baixar Mapas.*
- Utilizadores com **OsmAnd Pro ou Maps+** podem descarregar um **número ilimitado de mapas**, mas ainda assim devem descarregar cada região separadamente.
- **Não existe uma única opção para descarregar todos os mapas mundiais de uma só vez.**


## Selecionar no Mapa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Um toque curto no mapa mundial permite descarregar o mapa da região](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Um toque curto no mapa mundial permite descarregar o mapa da região](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Uma forma de descarregar um mapa é fazer zoom out no mapa mundial e tocar brevemente para selecionar uma região para descarregar. Esta área será destacada a amarelo, e um painel aparecerá na parte inferior com o nome da região e uma sugestão para a descarregar ou selecionar outros mapas.

:::tip Cor do mapa
No ecrã pequeno, o mapa selecionado para download será destacado a amarelo, os mapas que já foram descarregados serão destacados a verde, e os mapas desativados serão destacados a laranja. Os mapas **desativados** são ignorados para acelerar o programa caso tenha muitos mapas carregados.
:::

## Pesquisar {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Função de pesquisa para descarregar mapa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Função de pesquisa para descarregar mapa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Função de pesquisa para descarregar mapa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Função de pesquisa para descarregar mapa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

A pesquisa facilita a localização de um mapa ou região específica, proporcionando uma forma conveniente e rápida de descarregar os dados de que necessita. Pode encontrar e descarregar o mapa utilizando a [função de pesquisa](../search/index.md).

- Inicie uma pesquisa introduzindo o nome de um país ou região no campo de pesquisa. Em seguida, selecione o mapa necessário na lista que aparece.
- Os mapas disponíveis para download são exibidos a cinzento com um ícone de download, os mapas descarregados têm uma cor verde e um botão de menu.
- Toque no nome do resultado necessário e a lista de mapas regionais será aberta.
- Selecione [tipos de mapa](../personal/maps-resources.md#map-types): *Mapa padrão, Mapa apenas de estradas, Curvas de nível, Wikipedia*.