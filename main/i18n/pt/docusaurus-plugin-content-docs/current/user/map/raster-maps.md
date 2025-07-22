---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
sidebar_position: 6
title: Mapas Raster (Online / Offline)
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


<InfoIncompleteArticle/>

## Visão Geral {#overview}

Os mapas raster são adições significativas e úteis aos mapas vetoriais do OsmAnd. Eles permitem combinar várias fontes de mapa com mapas vetoriais. Por exemplo, informações sobre colinas e encostas são exibidas como uma camada raster. Você pode exibir uma sobreposição de trilhas de caminhada, mapas de chuva, dados de tráfego em tempo real e uma sobreposição de imagens de satélite em um mapa vetorial base translúcido. Você também pode alternar os mapas padrão para blocos raster na web.


## Casos de Uso {#use-cases}

Os mapas raster têm uma ampla gama de usos. Aqui estão alguns dos mais populares:

- Imagens de satélite como base.
- Informações de tráfego em tempo real.
- Previsão de chuva como sobreposição.
- Mapas topográficos com sombreamento de colinas e encostas.
- Rotas ativas de ciclismo e corrida como sobreposição.
- Informações de embarcações em tempo real.
- Blocos OpenStreetMap online para edição OSM.

![Visão geral de mapas online](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Você também pode alterar a fonte principal dos mapas de mapas vetoriais para blocos online.
:::


## Mapas Raster {#raster-maps}

Os mapas online no OsmAnd são compostos por dados raster, que consistem em pixels (também conhecidos como células de grade) - essencialmente um conjunto de pequenas imagens conhecidas como blocos. Ao contrário dos mapas vetoriais, que representam dados como estradas, pontos e polígonos usando informações binárias, os blocos de mapas raster são organizados em uma grade e podem parecer pixelizados em altos níveis de zoom porque cada pixel tem um valor ou classe fixa.

#### Comparação com mapas vetoriais padrão {#comparison-to-default-vector-maps}

**Vantagens:**

- Como os mapas raster são pré-renderizados, eles carregam mais rápido, eliminando a necessidade de o dispositivo processar e renderizar dados em tempo real.
- Os mapas raster podem ser carregados dinamicamente durante a navegação.
- Você pode criar um cache offline e baixar apenas os blocos ausentes conforme necessário.
- Você pode usar um número ilimitado de fontes web externas para mapas raster, tornando-o flexível para diferentes tipos de mapa, como vistas de satélite ou mapas especializados.
- Dados raster, como informações de tráfego, podem ser atualizados regularmente após a expiração (por exemplo, a cada 20-30 minutos, dependendo da configuração).

**Desvantagens:**

- Os mapas raster ocupam significativamente mais espaço do que os mapas vetoriais. Por exemplo, um mapa de cidade pode ter 15 MB como mapa vetorial, mas aumentar para 50 MB no nível de zoom 15, 200 MB no nível de zoom 16 e até 800 MB no nível de zoom 17.
- Você não pode tocar em locais ou objetos específicos em mapas raster para obter mais informações.
- Os mapas raster não podem ser estilizados ou modificados para excluir objetos específicos.
- Aumentar o zoom excessivamente pode fazer com que a imagem pareça pixelizada, especialmente se blocos de alta resolução não estiverem disponíveis.
- Não é possível girar o mapa sem girar o texto, o que pode dificultar a leitura dos rótulos.


## Como Usar Mapas Raster {#how-to-use-raster-maps}

**Habilitar plugin**.

- **iOS**. Para *iOS*, este recurso funciona por padrão.
- **Android**. Para *Android*, para usar mapas raster no OsmAnd, você precisa habilitar o [plugin de mapas online](../plugins/online-map.md). Siga estes passos: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Alterar parâmetros da camada**. Para melhorar a visibilidade e a mistura das camadas do mapa raster, você pode ajustar a transparência da camada usando o controle deslizante na tela. Além disso, você pode modificar o estilo do mapa vetorial ocultando polígonos, tornando as camadas subjacentes mais visíveis. Isso é especialmente útil ao visualizar imagens de satélite.


## Selecionar Mapas Raster {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Mostrar mapas](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Mostrar mapas](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

No OsmAnd, os mapas raster podem servir como uma fonte de mapa adicional ao lado dos mapas vetoriais padrão, que são otimizados para uso offline.  

Você tem a flexibilidade de adicionar uma ou duas camadas de blocos online para complementar seu mapa base. Isso permite que você visualize até três camadas de mapa simultaneamente em sua tela. Por exemplo, você pode ter o mapa vetorial offline do OsmAnd como base, sobrepô-lo com uma vista de satélite e colocar um mapa de ciclovias como camada inferior para detalhes adicionais.  

Você também pode ajustar a transparência do mapa base para misturá-lo com suas camadas. Se necessário, você pode habilitar um controle deslizante de transparência na tela principal para ajustes rápidos.


### Principal {#main}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Mostrar mapas](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Mostrar mapas](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Você pode escolher um estilo de mapa da lista ou [adicionar](#add-new-online-raster-map-source) o seu próprio.


### Camada de Sobreposição {#overlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configurar camada inferior / superior Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configurar camada inferior / superior iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Ligar/desligar* o mapa de sobreposição.
2. *Transparência da sobreposição* (*Android*)/ *Transparência* do mapa de sobreposição (*iOS*).
3. *Mostrar controle deslizante de transparência* (*Android*) / *Mostrar controle deslizante no mapa* (*iOS*). Acesso rápido à configuração de transparência.
4. *Fonte do mapa de sobreposição* (*Android*) / *Camadas disponíveis* (*iOS*). Você pode escolher um mapa de blocos para instalar ou atualizar.
5. *Mostrar símbolos do mapa* - como texto, sinais de trânsito e outros.  
6. *Adicionar fonte online* (*iOS*).
7. *Importar de documentos* (*iOS*).


### Camada Inferior {#underlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configurar camada inferior / superior Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configurar camada inferior / superior iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Ligar/desligar* o mapa de camada inferior.
2. *Transparência do mapa base*.
3. *Mostrar controle deslizante de transparência* (*Android*) / *Mostrar controle deslizante no mapa* (*iOS*). Acesso rápido à configuração de transparência.
4. *Fonte do mapa de camada inferior* (*Android*) / *Camadas disponíveis* (*iOS*). Você pode escolher um mapa de blocos para instalar ou atualizar.
5. *Mostrar/Ocultar polígonos*.
6. *Adicionar fonte online* (*iOS*).
7. *Importar de documentos* (*iOS*).


## Sombreamento / Inclinação {#hillshade--slope}

![Camadas de terreno](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Sombreamento** e **Inclinação** são mapas raster offline que mostram o relevo do terreno. Eles são exibidos como uma camada de mapa especial, uma segunda sobreposição no mapa base. Os mapas contêm informações adicionais de elevação para ajudar você a entender com mais precisão a inclinação e as sombras da paisagem. As informações de *Sombreamento* e *Inclinação* são baseadas em dados de uma única fonte, o *arquivo Global planet*, e são divididas em regiões.  

Você não precisa alternar entre as camadas de Sombreamento e Inclinação, pois elas são mescladas automaticamente. Você pode selecionar apenas uma dessas camadas para exibir no mapa, mas também tem a opção de combiná-las [como camada inferior ou superior](#select-raster-maps) em outras camadas para uma representação mais visual do terreno.

Para começar a usar Sombreamento e Inclinação, você precisa:

1. Adquirir o plugin Topografia:
    - [Compras Android](../purchases/android.md)
    - [Compras iOS](../purchases/ios.md)
2. Habilitar o [plugin Topografia](../plugins/topography.md):  
    *Menu → Plugins → ︙ → Habilitar*
3. Selecionar a região desejada e baixar o **Mapa de Terreno (3D)**.
4. O processo de download pode levar algum tempo, dependendo do tamanho da região selecionada e da velocidade da sua conexão com a Internet.


### Sombreamento e Relevo 3D {#hillshade-and-3d-relief}

| Sombreamento | Relevo 3D |
|--------|---------|
| ![Camadas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Camadas de terreno](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

A diferença da exibição do relevo no mapa ao aplicar essas configurações é descrita no artigo **Topografia** na seção correspondente [Sombreamento e Relevo 3D](../plugins/topography.md#hillshade-and-3d-relief).


### Configurar Opções de Exibição {#configure-display-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Camadas de terreno](@site/static/img/plugins/online-maps/terrain_layers.png)

Você pode personalizar o nível de zoom para exibir e a transparência para Sombreamento e Inclinação. Você pode ler mais no artigo [Topografia](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## Relevo 3D {#3d-relief}

:::note
[Relevo 3D](../plugins/topography.md#3d-relief) é um recurso pago do [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Camadas de terreno](@site/static/img/plugins/online-maps/raster_maps_3d.png)

O recurso [**Relevo 3D**](../plugins/topography.md#3d-relief) é uma tecnologia de mapeamento que permite a visualização do terreno em um mapa usando modelos tridimensionais. Este recurso adiciona informações de elevação a um mapa bidimensional normal, o que cria um efeito 3D e de profundidade e permite visualizar melhor o terreno.  

*Para começar a usar o Relevo 3D*:  
Você precisa adquirir o [plano de compra OsmAnd Pro](../plugins/index.md#purchase), habilitar o [plugin Topografia](../plugins/topography.md) e ativar o item [Relevo 3D](../plugins/topography.md#3d-relief) em *Menu → Configurar mapa*.


*Como funciona o recurso Relevo 3D*:  
*1.* Para criar um relevo 3D, o OsmAnd recebe informações sobre a elevação do terreno.  
*2.* Com base nos dados de elevação, um modelo 3D é criado para exibir montanhas, colinas, vales e outros elementos do terreno no mapa.  
*3.* O OsmAnd então exibe esses modelos tridimensionais em um mapa plano. O mapa pode ser ampliado, reduzido e girado para visualizar o terreno de diferentes ângulos e perspectivas.  
*4.* A exibição das linhas de contorno no mapa não depende se a fonte do mapa é online ou offline.


## Preparar/Copiar Mapas Raster para o Dispositivo {#preparecopy-raster-maps-to-device}

Existem várias maneiras de adicionar um novo mapa raster, copiá-lo de outro dispositivo, prepará-lo em um PC e pré-baixar blocos para serem usados offline. Por exemplo, você pode criar seu pacote de mapas em um PC usando software especial como [MOBAC, OsmAndMapCreator, etc](../../technical/map-creation/index.md). Tipicamente, os mapas raster são distribuídos como arquivos com extensão `.sqlitedb`.

Aqui estão os principais métodos para adicionar uma nova fonte de mapa raster que ainda não está definida no OsmAnd:

- Abrir o arquivo `.sqlitedb` pronto para uso com o OsmAnd.
- Importar pacote com mapas online preparados de outro aplicativo OsmAnd como um **pacote** `.osf` especial via [funcionalidade de Importar/Exportar](../personal/import-export.md).
- Criar uma nova fonte de mapa online no próprio dispositivo móvel.
- Preparar uma URL mágica com parâmetros de fonte de mapa online e abri-la com o OsmAnd.


### Adicionar Nova Fonte de Mapa Raster Online {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Adicionar fonte online](@site/static/img/plugins/online-maps/add-online-source-2.png)

Para criar uma fonte de mapa raster, você precisa saber a **URL de um bloco**, que é uma URL específica que distribui blocos de mapa na Projeção de Mercator. Por exemplo, uma URL de bloco pode ser assim: `https://tile.osmand.net/hd/6/55/25.png`, onde `tile.osmand.net/hd/` é a URL base.

Aqui estão os principais parâmetros a serem configurados ao configurar uma nova fonte de mapa online:

| Parâmetro | Descrição |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Forneça um nome para a nova fonte de mapa online. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Insira ou cole a URL para a fonte de blocos online. Certifique-se de que ela siga o formato de URL de bloco. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Este parâmetro afeta como o mapa é exibido. <br/><ul><li>Como *tipo de mapa*, o mapa será limitado aos níveis de zoom selecionados.</li><li>Como *sobreposição/camada inferior*, o mapa aparecerá nos níveis de zoom selecionados, com ampliação ou redução aplicadas fora desses níveis.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Defina a duração (em minutos) após a qual os blocos em cache serão atualizados. Você pode deixar este campo em branco se não quiser que os blocos recarreguem automaticamente. <br/><ul><li>1 dia = 1440 minutos</li><li>1 semana = 10.080 minutos</li><li>30 dias = 43.200 minutos</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Escolha entre *Projeção Pseudo-Mercator* e *Projeção Mercator Elíptica*, dependendo da fonte. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Selecione como os blocos devem ser armazenados: em um *arquivo SQLiteDB* ou como *uma imagem por bloco*. |


### URL Mágica para Instalar Fonte de Mapa {#magic-url-to-install-map-source}

Mapas online podem ser adicionados com um link especial à lista de mapas Raster do OsmAnd. Clique neste link e escolha OsmAnd para abrir:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parâmetro do link|Exemplo|
|:--------|:---------------|
| [Parte constante]| `http://osmand.net/add-tile-source` |
|[Separadores]| ?   & |
|[Nome]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Níveis de zoom]|min_zoom=9 / max_zoom=15|

Você encontrará um mapa online adicionado na lista do menu [Camada Principal / Inferior / Superior](#select-raster-maps).


## Gerenciar Mapas Raster {#manage-raster-maps}

Mapas raster podem ocupar uma quantidade significativa de espaço em disco, então você pode precisar verificar isso regularmente. Para grandes conjuntos de dados, é recomendado usar a *fonte raster SQLite* porque ela armazenará todos os blocos em 1 arquivo grande (banco de dados SQLite).

- [**Formato SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Formato Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Para alterar o formato do bloco, você pode escolher <Translate android="true" ids="storage_format"/> no menu de edição de mapas online:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → escolher mapas online →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Limpar Cache de Mapas Raster {#clear-raster-map-cache}

![Lista de fontes online](@site/static/img/plugins/online-maps/online-sources-list.png)

Os blocos são armazenados em cache ao usar mapas raster online como camada Principal / Sobreposição / Inferior. Você pode ver o tamanho do seu arquivo SQ Lite sob o nome do seu mapa online na lista. Às vezes, a limpeza regular é necessária para acelerar a exibição dos blocos ou para atualizar os dados.  

Para limpar o cache de blocos do mapa, você precisa fazer o seguinte:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → escolher mapas online →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Baixar / Atualizar Blocos {#download--update-tiles}

Se você deseja acessar mapas raster offline, pode ser necessário pré-carregar os blocos. Isso pode ser feito em seu dispositivo móvel, mas esteja ciente de que alguns serviços podem bloquear downloads de pacotes grandes. Você também pode usar o mesmo recurso para atualizar blocos já baixados para áreas selecionadas, caso contrário, o OsmAnd continuará a exibir os blocos que já estão armazenados em cache.  

Para que os mapas atualizem automaticamente os blocos após um tempo, você pode definir um [Tempo de Expiração](#add-new-online-raster-map-source), então o OsmAnd recarregará os blocos assim que forem exibidos.  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Baixar blocos Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Baixar blocos Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Baixar blocos Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Baixar blocos Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Baixar blocos iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Para baixar ou atualizar blocos raster, você precisa selecionar a fonte do mapa online como a [fonte do mapa Principal](#select-raster-maps). Você também pode selecionar blocos online separadamente para o mapa de [Sobreposição](#overlay-layer) ou para a [Camada Inferior](#underlay-layer).

- Para a versão **Android** do aplicativo OsmAnd, você precisa selecionar uma área de acordo com o tamanho da tela do seu dispositivo e fazer um toque longo no mapa. Em seguida, selecione [Ações](../map/map-context-menu.md#customize) no menu de contexto do mapa e a opção *Baixar mapa* ou *Atualizar mapa*. Na tela Baixar Mapa, faça as alterações nas configurações necessárias e toque em Baixar.  

- Na versão iOS do aplicativo OsmAnd, você precisa tocar e segurar o mapa, depois selecionar *Ações* e a opção *Baixar mapa* ou *Atualizar mapa* no menu de contexto do mapa. Na tela Baixar Mapa, você pode selecionar a área desejada e modificar as configurações necessárias. Depois de definir todos os parâmetros, você pode ver o número de blocos e o tamanho do download.


### Alterar Parâmetros do Mapa Raster {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → escolher mapas online →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Os mapas raster podem ser usados como já existem se os blocos já estiverem mapeados. Se os mapas raster forem fornecidos online, sempre há uma URL base que precisa ser configurada. Existem alguns outros parâmetros básicos que podem ser alterados para mapas raster, você pode ler sobre isso [nesta seção](#add-new-online-raster-map-source) do artigo. Parâmetros mais complexos são codificados nos componentes internos do [formato SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Artigos Relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

> *Última atualização: Outubro de 2024*