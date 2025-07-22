---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
sidebar_position: 9
title: Edição OpenStreetMap
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão geral {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) é uma comunidade global que visa criar um mapa geográfico detalhado e gratuito do mundo e fornecer dados de código aberto atualizados para cada usuário. O plugin de edição do OpenStreetMap permite que você contribua para a comunidade.

Com o OsmAnd e o plugin de edição do OSM, você pode facilmente contribuir com suas próprias informações para o OpenStreetMap.org, como criar ou modificar [POIs](#create--modify-poi), adicionar ou comentar [notas](#create--modify-osm-note) e fazer upload de [trilhas](#upload-gps-track) GPX gravadas.

## Parâmetros de configuração necessários {#required-setup-parameters}

Para usar o plugin *Edição OpenStreetMap*, você deve fazer as seguintes configurações:

1. Habilitar [Plugin](../plugins/index.md#enable--disable).
2. Definir a edição do OpenStreetMap em qualquer [perfil](../personal/profiles.md).
3. Habilitar a exibição de *Notas OSM (online)* ou *Edições OSM* no mapa no [menu Configurar mapa](../map/configure-map-menu).


## Configurações {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![Configurações do plugin de edição OpenStretMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![Configurações do plugin de edição OpenStretMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
As configurações do plugin são globais e se aplicam a todos os perfis.
:::

- [Login no OpenStreetMap](#authorization). Faça login para fazer upload de alterações novas ou modificadas. Use o método seguro *OAuth 2.0* ou [faça login no site do OSM](https://www.openstreetmap.org/login). Para iOS, o botão para o método OAuth está disponível apenas para usuários com uma versão suportada do iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Se esta configuração estiver habilitada, as alterações são primeiro salvas localmente (botão *Salvar*) e carregadas mediante solicitação. Se a configuração estiver desabilitada, as alterações são carregadas imediatamente (botão *Carregar*).
- **<Translate android="true" ids="use_dev_url"/>** *(somente Android)*. Permite habilitar [dev.openstreetmap.org](https://dev.openstreetmap.org/) em vez de [openstreetmap.org](http://openstreetmap.org/) para testar o upload de Notas OSM, POI ou trilhas GPS. Quando habilitado, você é automaticamente desconectado do OpenStreetMap.org. Esta configuração está disponível na lista apenas quando o *plugin de desenvolvimento do OsmAnd* está habilitado.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Toque para abrir [*Menu → Meus locais → Edições OSM*](../personal/myplaces.md). Esta aba lista suas notas OSM não editadas. As seguintes ações estão disponíveis com a nota: *Carregar*, *Mostrar no mapa*, *Modificar nota OSM*, *Excluir*. Notas carregadas ou excluídas não são mais exibidas na lista.

:::note
Se você tiver uma assinatura [OsmAnd Pro](../purchases/android.md#pro-features), as alterações feitas no OSM aparecerão no seu mapa OsmAnd em uma hora. Certifique-se de que as [Atualizações ao vivo](../personal/maps-resources.md#osmand-live) estejam habilitadas.
:::


### Autorização {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Faça login para contribuir com alterações e arquivos GPX.

- Vá para [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *faça login* ou *registre-se*.
- Toque no campo *Login no OpenStreetMap* no aplicativo OsmAnd e, em seguida, toque no botão *Entrar com OpenStreetMap*.


### Atualizações gratuitas de mapas para mapeadores {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

A configuração <Translate android="true" ids="map_updates_for_mappers"/> permite que você habilite o **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** se você for um colaborador ativo do OpenStreetMap. Dessa forma, você pode desfrutar de atualizações gratuitas de mapas a cada hora, ao contrário das atualizações mensais padrão. Colaboradores ativos do OpenStreetMap.org podem ter direito a atualizações ilimitadas de mapas a cada hora. Faça login no OpenStreetMap para verificar sua elegibilidade para atualizações ilimitadas de mapas mensais e a cada hora.


### Camada de edição OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![Camada de edição OSM Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![Camada de edição OSM Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![Camada de edição OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Você pode habilitar ou desabilitar como uma camada separada a exibição de modificações do OSM, como *Notas OSM* (online), *Edições OSM*, *Tags Fixme*, *Tags de nota*, *Ícones em zooms baixos*, na seção [Configurar mapa](../map/configure-map-menu.md) do *Menu Principal*.


## Criar / Modificar POI {#create--modify-poi}

O plugin de edição do OpenStreetMap permite criar novos objetos no mapa chamados [pontos de interesse ou POI](../map/point-layers-on-map.md#points-of-interest-pois). Você pode mapear uma nova loja, um ponto de referência favorito, um banco ou um abrigo para que as pessoas possam encontrá-los.

1. Toque no mapa para colocar um novo POI, ou toque em um POI ainda não carregado.2. Toque em [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Escolha [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), e adicione seu nome e outras informações, como horário de funcionamento, site, etc. Ao selecionar um POI não carregado, *Criar POI* muda para *Modificar POI*.
3. Dependendo da configuração de [Edição offline](#settings), você pode salvar os dados localmente ou [carregá-los](../map/map-context-menu#-upload-poi--osm-note).


### Adicionar tags {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adicionar tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Adicionar tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adicionar tag POI ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Você pode facilmente adicionar [tags](https://wiki.openstreetmap.org/wiki/Tags) OSM ao POI. Ao digitar vários caracteres na barra de pesquisa, o programa sugere tags possíveis.

**Modificações offline.**
Você pode visualizar, carregar para o OSM ou excluir POIs em *Meus locais → Edições OSM*. Você também pode exportar suas alterações de POIs do OSM para um [arquivo OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importá-lo para o [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Adicionar tipos de POI não suportados {#add-unsupported-poi-types}

Na aba *Avançado*, você pode adicionar tipos de POI não suportados que podem ser úteis para sua tarefa específica. Esta opção permite que você insira dados de POI manualmente, estendendo assim a funcionalidade do aplicativo.

Um exemplo de tipos de POI não suportados que você pode adicionar é *amenity=freeshops*. Este tipo pode ser útil se você quiser marcar lojas gratuitas ou locais que fornecem produtos gratuitos.

Para adicionar tipos de POI não suportados, siga estas etapas:

1. Abra a aba *Avançado*.
2. Toque em *Tipo de POI*.
3. Digite a chave *amenity* e o valor *freeshops* nos campos apropriados.
4. Preencha o restante dos dados necessários para este POI.
5. Toque em *Adicionar Tag* para adicionar o novo POI ao seu banco de dados.

Lembre-se de que, ao adicionar tipos de POI não suportados, é importante garantir que os dados sejam inseridos corretamente para garantir o funcionamento correto do aplicativo e o processamento subsequente das informações.


## Criar / Modificar Nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Abrir Nota OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Para editar, comentar ou fechar notas OSM, habilite sua exibição no mapa no [menu Configurar mapa](../map/configure-map-menu.md).

- O recurso Notas OSM permite adicionar notas ao mapa. Nessas notas, você pode descrever erros ou escrever sobre informações ausentes nos dados do OpenStreetMap. Você e outros usuários podem deixar comentários em suas notas.
- Você pode ajudar outros usuários verificando suas perguntas ou problemas, dando comentários e, em seguida, fechando as notas resolvidas.
- Leia mais sobre as Notas do OpenStreetMap [aqui](https://wiki.openstreetmap.org/wiki/Notes).

Para criar uma nota, você não precisa fazer login no OpenStreetMap.org, você pode enviá-la anonimamente.

- Toque no mapa onde a nova nota OSM deve ser colocada (ou toque em uma nota não carregada) e selecione [Ações](../map/map-context-menu.md#actions).
- Se você quiser adicionar informações a uma nota existente ou nota não carregada, editar um comentário ou fechar uma nota, toque na nota OSM no mapa e selecione a [ação necessária](../map/map-context-menu.md#-comment--close-osm-note).
- Você pode carregar as alterações assim que estiver online. Você também pode desfazer as alterações antes que sejam carregadas.

:::info
As Notas OSM carregadas não são visíveis nos mapas OsmAnd no modo offline.
:::


## Trilha GPS {#gps-track}

As trilhas GPS que você gravou são úteis para:

- **Mapeadores**. As trilhas podem ser usadas para mapear todos os tipos de caminhos.
- **Navegação**. Com base nos dados do arquivo GPX que você carregou, aplicativos de navegação e dispositivos especiais podem calcular trilhas.
- **Para compartilhar informações** sobre as trilhas e rotas que você gravou em [mapas baseados no OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTA
Suas trilhas serão adicionadas aos [rastros do OSM](https://www.openstreetmap.org/traces) em uma hora, onde estarão disponíveis para você e outros visualizarem, pesquisarem e usarem.
:::


### Carregar trilha GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin de edição OpenStretMap GPX para OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin de edição OpenStretMap GPX para OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Para [carregar a trilha GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), siga os passos abaixo:

- Encontre a trilha necessária na aba [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Toque no *menu de três pontos* ao lado do nome da trilha e selecione *Exportar*.

**Configurações:**

- **<Translate android="true" ids="shared_string_description"/>**. Permite adicionar uma descrição à trilha. A descrição se aplica a todas as trilhas selecionadas. Se você não digitar nada no campo, os nomes das trilhas para cada trilha separada serão usados como descrições.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Este item na seção de configurações permite adicionar tags para identificar a trilha. A tag padrão é "osmand", você pode inserir tags adicionais separadas por vírgulas.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilidade da trilha para usuários OSM:
   - *Público* significa que a trilha está publicamente disponível e exibida em formato bruto em suas trilhas GPS, listas de trilhas GPS e listas de trilhas com carimbo de data/hora. Os dados transmitidos pela API não são referenciados com sua página de trilha. Os carimbos de data/hora dos pontos de rastreamento não estão disponíveis através da API GPS pública e os pontos de rastreamento não são ordenados cronologicamente.
   - *Identificável* significa que a trilha será exibida publicamente em seus pontos de trilha GPS e listas de trilhas GPS públicas, o que significa que outros usuários poderão baixar a trilha bruta e associá-la ao seu nome de usuário. Os dados de pontos de trilha com carimbo de data/hora públicos da API GPS passados pela API de pontos de trilha serão vinculados à sua página de trilha original.
   - *Rastreável* significa que a trilha não é exibida em listas públicas, mas os pontos de trilha processados com carimbos de data/hora dela (que não podem ser vinculados a você diretamente) são carregados da API GPS pública.
   - *Privado* significa que a trilha não é exibida em listas públicas, mas os pontos de trilha dela em ordem não cronológica estão disponíveis através da API GPS pública sem carimbos de data/hora.
- **<Translate android="true" ids="login_account"/>** - [Conta OSM](https://www.openstreetmap.org/login).

:::info
Você pode selecionar mais de uma trilha para carregar no OSM. Para fazer isso, toque no ícone *Carregar para OpenStreetMap* na parte inferior da tela, selecione as trilhas usando a caixa de seleção, toque em *Carregar* e, em seguida, em *Continuar*.
:::

### Gerar arquivo OBF {#generate-obf-file}

Você pode criar um arquivo OBF com [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) se tiver um grande banco de dados de trilhas GPX. Esta é uma coleção de trilhas do osmand.net com a tag 'gpsies', uma coleção de trilhas baixadas do OpenStreetMap ou sua própria coleção.


## Artigos relacionados {#related-articles}

- [Interagir com o mapa](../../user/map/interact-with-map.md)
- [Configurações globais](../../user/personal/global-settings.md)
- [Mapas vetoriais (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última atualização: maio de 2024*