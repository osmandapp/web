---
source-hash: fb4dfa3af12638db8d07636ca58d9e23de9542afc7c2cd66d965f36e2bc93826
sidebar_position: 9
title: Edição do OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) é uma comunidade global que visa criar um mapa geográfico detalhado e gratuito do mundo e fornecer dados de código aberto atualizados para cada utilizador. O plugin de edição do OpenStreetMap permite-lhe contribuir para a comunidade.  

Com o OsmAnd e o plugin de edição do OSM, pode facilmente contribuir com as suas próprias informações para o OpenStreetMap.org, como criar ou modificar [POIs](#create--modify-poi), adicionar ou comentar [notas](#create--modify-osm-note) e carregar [trilhas](#upload-gps-track) GPX gravadas.

## Parâmetros de configuração necessários {#required-setup-parameters}

Para usar o plugin *Edição do OpenStreetMap*, deve fazer as seguintes configurações:

1. Ativar [Plugin](../plugins/index.md#enable--disable).  
2. Definir a edição do OpenStreetMap em qualquer [perfil](../personal/profiles.md).
3. Ativar a exibição de *Notas OSM (online)* ou *Edições OSM* no mapa no [menu Configurar mapa](../map/configure-map-menu).


## Configurações {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![Configurações do plugin de edição do OpenStreetMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![Configurações do plugin de edição do OpenStreetMap iOS](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

:::note
As configurações do plugin são globais e aplicam-se a todos os perfis.
:::

- [Login no OpenStreetMap](#authorization). Faça login para carregar alterações novas ou modificadas. Use o método seguro *OAuth 2.0* ou [faça login no site do OSM](https://www.openstreetmap.org/login). Para iOS, o botão para o método OAuth está disponível apenas para utilizadores com uma versão suportada do iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Se esta configuração estiver ativada, as alterações são primeiro guardadas localmente (botão *Guardar*) e carregadas a pedido. Se a configuração estiver desativada, as alterações são carregadas imediatamente (botão *Carregar*).
- **<Translate android="true" ids="use_dev_url"/>** *(apenas Android)*. Permite ativar [dev.openstreetmap.org](https://dev.openstreetmap.org/) em vez de [openstreetmap.org](http://openstreetmap.org/) para testar o carregamento de Notas OSM, POIs ou trilhas GPS. Quando ativado, é automaticamente desconectado do OpenStreetMap.org. Esta configuração está disponível na lista apenas quando o *plugin de desenvolvimento do OsmAnd* está ativado.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Toque para abrir [*Menu → Meus locais → Edições OSM*](../personal/myplaces.md). Esta aba lista as suas notas OSM não editadas. As seguintes ações estão disponíveis com a nota: *Carregar*, *Mostrar no mapa*, *Modificar nota OSM*, *Excluir*. Notas carregadas ou excluídas não são mais exibidas na lista.  

:::note
Se tiver uma subscrição [OsmAnd Pro](../purchases/android.md#pro-features), as alterações feitas no OSM aparecerão no seu mapa OsmAnd dentro de uma hora. Certifique-se de que as [Atualizações em tempo real](../personal/maps-resources.md#live-updates) estão ativadas.
:::  


### Autorização {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Faça login para contribuir com alterações e arquivos GPX.  

- Vá para [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *faça login* ou *registe-se*.
- Toque no campo *Login no OpenStreetMap* na aplicação OsmAnd e, em seguida, toque no botão *Entrar com OpenStreetMap*.  


### Atualizações de mapa gratuitas para mapeadores {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

A configuração <Translate android="true" ids="map_updates_for_mappers"/> permite ativar **[atualizações em tempo real](../personal/maps-resources.md#free-for-osm-mappers)** se for um contribuinte ativo do OpenStreetMap. Desta forma, pode desfrutar de atualizações de mapa gratuitas a cada hora, ao contrário das atualizações mensais padrão. Contribuintes ativos do OpenStreetMap.org podem ter direito a atualizações de mapa ilimitadas a cada hora. Faça login no OpenStreetMap para verificar a sua elegibilidade para atualizações de mapa mensais e horárias ilimitadas.


### Camada de edição OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Camada de edição OSM Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![Camada de edição OSM Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Camada de edição OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Pode ativar ou desativar como uma camada separada a exibição de modificações OSM na seção [Configurar mapa](../map/configure-map-menu.md) do *Menu Principal*. As modificações OSM incluem o seguinte:  
- **Notas OSM (online)**. Exibe notas públicas do OpenStreetMap criadas por utilizadores para destacar problemas de mapeamento ou solicitar atualizações. As notas são mostradas como marcadores interativos que podem ser revistos, abertos e resolvidos por mapeadores.  
![Camada de edição OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_note.png)  
- **Edições OSM**. Mostra as suas próprias edições OSM locais armazenadas no dispositivo antes de as carregar para o servidor do OpenStreetMap. Esta camada ajuda a rever a geometria e os atributos dos objetos que modificou ou adicionou.  
![Camada de edição OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_edits.png)  
- **Tags Fixme**. Destaca objetos etiquetados com fixme=* no OSM. Estes elementos contêm comentários de mapeadores que indicam que a informação está incompleta, incerta ou precisa de verificação no terreno.  
![Camada de edição OSM](@site/static/img/plugins/osm-editing/osm_editing_fixme_tags.png)  
- **Tags de Nota**. Exibe objetos que contêm tags note=* — comentários de mapeadores incorporados diretamente nos dados do OSM. Estas tags geralmente descrevem condições temporárias ou contexto adicional para edições futuras.  
![Camada de edição OSM](@site/static/img/plugins/osm-editing/osm_editing_note_tags.png)  
- **Ícones em Zooms Baixos**. Ativa representações simplificadas semelhantes a ícones de objetos OSM usando abreviações curtas derivadas das suas chaves de tag principais. O seu significado é descrito [aqui](https://osmand.net/docs/user/map-legend/osmand#icons-for-low-zooms-option-simplified-icons-). Esta funcionalidade torna mais objetos visíveis em níveis de zoom baixos sem sobrecarregar o mapa ou causar sobreposição de ícones.  
![Camada de edição OSM](@site/static/img/plugins/osm-editing/osm_editing_icons_zoom.png)  


## Criar / Modificar POI {#create--modify-poi}

O plugin de edição do OpenStreetMap permite criar novos objetos no mapa chamados [pontos de interesse ou POI](../map/point-layers-on-map.md#points-of-interest-pois). Pode mapear uma nova loja, um marco favorito, um banco ou um abrigo para que as pessoas os possam encontrar.  

1. Toque no mapa para colocar um novo POI, ou toque num POI ainda não carregado.2. Toque em [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Escolha [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), e adicione o seu nome e outras informações, como horário de funcionamento, site, etc. Quando seleciona um POI não carregado, *Criar POI* muda para *Modificar POI*.
3. Dependendo da configuração [Edição offline](#settings), pode guardar os dados localmente ou [carregá-los](../map/map-context-menu#-upload-poi--osm-note).


### Adicionar tags {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Adicionar tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Adicionar tag POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Adicionar tag POI iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Pode facilmente adicionar [tags](https://wiki.openstreetmap.org/wiki/Tags) OSM ao POI. Ao inserir vários caracteres na barra de pesquisa, o programa sugere possíveis tags.  

**Modificações offline.**  
Pode visualizar, carregar para o OSM ou excluir POIs em *Meus locais → Edições OSM*. Também pode exportar as suas alterações de POIs OSM para um [arquivo OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importá-lo para o [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).  

### Adicionar tipos de POI não suportados {#add-unsupported-poi-types}

Na aba *Avançado*, pode adicionar tipos de POI não suportados que podem ser úteis para a sua tarefa específica. Esta opção permite inserir dados de POI manualmente, estendendo assim a funcionalidade da aplicação.  

Um exemplo de tipos de POI não suportados que pode adicionar é *amenity=freeshops*. Este tipo pode ser útil se quiser marcar lojas gratuitas ou locais que fornecem produtos gratuitos.

Para adicionar tipos de POI não suportados, siga estes passos:

1. Abra a aba *Avançado*.
2. Toque em *Tipo de POI*.
3. Insira a chave *amenity* e o valor *freeshops* nos campos apropriados.
4. Preencha o restante dos dados necessários para este POI.
5. Toque em *Adicionar Tag* para adicionar o novo POI à sua base de dados.

Lembre-se que, ao adicionar tipos de POI não suportados, é importante garantir que os dados são inseridos corretamente para garantir o funcionamento correto da aplicação e o processamento subsequente das informações.


## Criar / Modificar Nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![Abrir Nota OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Para editar, comentar ou fechar notas OSM, ative a sua exibição no mapa no [menu Configurar mapa](../map/configure-map-menu.md).

- O recurso Notas OSM permite adicionar notas ao mapa. Nestas notas, pode descrever erros ou escrever sobre informações ausentes nos dados do OpenStreetMap. Você e outros utilizadores podem deixar comentários nas suas notas.
- Pode ajudar outros utilizadores verificando as suas perguntas ou problemas, dando comentários e, em seguida, fechando as notas resolvidas.
- Leia mais sobre as Notas do OpenStreetMap [aqui](https://wiki.openstreetmap.org/wiki/Notes).

Para criar uma nota, não precisa fazer login no OpenStreetMap.org, pode enviá-la anonimamente.

- Toque no mapa onde a nova nota OSM deve ser colocada (ou toque numa nota não carregada) e selecione [Ações](../map/map-context-menu.md#actions).
- Se quiser adicionar informações a uma nota existente ou não carregada, editar um comentário ou fechar uma nota, toque na nota OSM no mapa e selecione a [ação necessária](../map/map-context-menu.md#-comment--close-osm-note).
- Pode carregar as alterações assim que estiver online. Também pode desfazer as alterações antes de serem carregadas.

:::info
As Notas OSM carregadas não são visíveis nos mapas OsmAnd no modo offline.
:::


## Trilha GPS {#gps-track}

As trilhas GPS que gravou são úteis para:

- **Mapeadores**. As trilhas podem ser usadas para mapear todos os tipos de caminhos.
- **Navegação**. Com base nos dados do arquivo GPX que carregou, as aplicações de navegação e dispositivos especiais podem calcular trilhas.
- **Para partilhar informações** sobre as trilhas e rotas que gravou em [mapas baseados no OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::info NOTA
As suas trilhas serão adicionadas aos [rastros OSM](https://www.openstreetmap.org/traces) dentro de uma hora, onde estarão disponíveis para você e outros visualizarem, pesquisarem e usarem.
:::  


### Carregar trilha GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin de edição do OpenStreetMap GPX para OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin de edição do OpenStreetMap GPX para OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>

Para [carregar a trilha GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), siga os passos abaixo:  

- Encontre a trilha necessária na aba [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).  
- Toque no *menu de três pontos* ao lado do nome da trilha e selecione *Exportar*.

**Configurações:**

- **<Translate android="true" ids="shared_string_description"/>**. Permite adicionar uma descrição à trilha. A descrição aplica-se a todas as trilhas selecionadas. Se não inserir nada no campo, os nomes das trilhas para cada trilha separada são usados como descrições.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. Este item na seção de configurações permite adicionar tags para identificar a trilha. A tag padrão é "osmand". Se a trilha foi gravada com uma atividade específica com base no perfil selecionado, esta atividade também é automaticamente adicionada como tag durante o carregamento. Para grupos de trilhas carregadas, cada trilha recebe a sua própria tag de atividade. Para alguns perfis (por exemplo, Transporte público), a tag de atividade não é adicionada. Pode inserir tags adicionais manualmente, separadas por vírgulas.  
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilidade da trilha para utilizadores OSM:  
   - *Público* significa que a trilha está publicamente disponível e exibida em formato bruto nas suas trilhas GPS, listas de trilhas GPS e listas de trilhas com carimbo de data/hora. Os dados transmitidos através da API não são referenciados com a sua página de trilha. Os carimbos de data/hora dos pontos de rastro não estão disponíveis através da API GPS pública e os pontos de rastro não são ordenados cronologicamente.
   - *Identificável* significa que a trilha será exibida publicamente nos seus pontos de trilha GPS e listas de trilhas GPS públicas, o que significa que outros utilizadores poderão baixar a trilha bruta e associá-la ao seu nome de utilizador. Os dados de pontos de trilha com carimbo de data/hora públicos da API GPS passados através da API de pontos de trilha serão vinculados à sua página de trilha original.
   - *Rastreável* significa que a trilha não é exibida em listas públicas, mas os pontos de trilha processados com carimbos de data/hora dela (que não podem ser vinculados diretamente a você) são carregados da API GPS pública.
   - *Privado* significa que a trilha não é exibida em listas públicas, mas os pontos de trilha dela em ordem não cronológica estão disponíveis através da API GPS pública sem carimbos de data/hora.
- **<Translate android="true" ids="login_account"/>** - [Conta OSM](https://www.openstreetmap.org/login).

:::info
Pode selecionar mais de uma trilha para carregar para o OSM. Para fazer isso, toque no ícone *Carregar para OpenStreetMap* na parte inferior da tela, selecione as trilhas usando a caixa de seleção, toque em *Carregar* e, em seguida, em *Continuar*.
:::

### Gerar arquivo OBF {#generate-obf-file}

Pode criar um arquivo OBF com [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) se tiver uma grande base de dados de trilhas GPX. Esta é uma coleção de trilhas de osmand.net com a tag 'gpsies', uma coleção de trilhas baixadas do OpenStreetMap ou a sua própria coleção.


## Artigos relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)