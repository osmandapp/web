---
source-hash: c674aa26de62610f1442ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
sidebar_position: 7
title: Favoritos
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

O recurso **Favoritos** do OsmAnd permite criar marcadores (notas) no mapa. Esses pontos favoritos são exibidos como estrelas amarelas por padrão, mas você pode personalizá-los totalmente com diferentes cores, formas e ícones. Os favoritos são agrupados em uma camada de mapa dedicada, que se torna visível a partir do *6º nível de zoom*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introdução aos Favoritos Android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Introdução aos Favoritos iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Ponto Favorito {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camada de Favoritos Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camada de Favoritos iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Os favoritos fazem parte de uma camada de mapa especial, e você pode [mostrar ou ocultar](../map/point-layers-on-map.md#favorites) eles junto com seus [nomes](../map/point-layers-on-map.md#favorite-and-poi-names) no mapa. Tocar em um ponto favorito abre o [Menu de Contexto](../map/map-context-menu.md#favorites--track-points-from-the-group), permitindo visualizar detalhes e [editar ou excluir](../map/map-context-menu.md#add--edit-favorite) o ponto.


### Criar {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descrição de adição de favorito Android](@site/static/img/personal/favorite_add_descr_android.png) ![Grupo de favoritos Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrição de adição de favorito iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Grupo de favoritos iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Para adicionar um ponto favorito:

1. Selecione um [POI](../map/point-layers-on-map.md#points-of-interest-pois) ou uma estrutura no mapa.
    Toque curto para um POI ou toque longo para um ponto geral do mapa.
2. Selecione [Adicionar (☆)](../map/map-context-menu.md#add--edit-favorite) no menu de contexto do mapa.

Ao adicionar um ponto a partir de dados OSM, as informações relevantes do POI são incluídas automaticamente. Você também pode criar um favorito [tocando e segurando](../map/map-context-menu.md#select-any-point-long-tap) em qualquer local do mapa.

***Campos para um ponto Favorito:***

- **Nome** — Um nome exclusivo dentro do grupo (*Obrigatório*).
- **Endereço** e **Descrição** (*Opcional*).
- **Grupo** — Selecione em um [Grupo de Favoritos](#manage-favorites) existente ou crie um novo.
- **Personalização visual** — Ícone, cor, forma podem corresponder à [aparência padrão do grupo](#change-group-appearance) ou ser personalizados individualmente.


### Editar / Substituir / Excluir {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Editar favorito Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Editar favorito iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Para modificar um ponto favorito:

1. [Toque](../map/map-context-menu.md#select-an-object-single-tap) no favorito no mapa ou vá para [Meus Favoritos](#manage-favorites).
2. Escolha **Editar favorito** no [*menu de contexto do mapa*](../map/map-context-menu.md#add--edit-favorite).

***Opções disponíveis:***

- **Editar detalhes** — Nome, ícone, grupo, endereço e descrição.
- **Substituir localização** — Substituir outro ponto por este. Útil para atualizar um ponto específico (por exemplo, *Meu carro estacionado*) ou criar um novo.
- **Excluir** — Remover o favorito usando a opção de exclusão, acessível através do menu Editar ou através do botão de exclusão no Android.


### Ícones de Favoritos {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Ícone de favorito Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![meus_lugares_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Uma ampla gama de ícones para POIs e waypoints está disponível no OsmAnd. Você pode:

- Selecionar um ícone da lista de [categorias de POI](../search/search-poi.md#categories-and-their-filters).
- Encontrar um ícone adequado usando a [opção de pesquisa](../search/search-all.md#how-to-use).


### Favoritos Especiais (Pessoais) {#special-favorites-personal}

A *pasta Pessoal* contém pontos especiais como **<Translate android="true" ids="favorite_home_category"/>** e **<Translate android="true" ids="work_button"/>**, frequentemente usados na [navegação](../navigation/setup/route-navigation.md#select-starting-point). Esta pasta não possui um *menu de três pontos*, e seus parâmetros não podem ser alterados.


## Gerenciar Favoritos {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Meus lugares favoritos Android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![meus_lugares_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

A seção **Meus Favoritos** permite:

- [Pesquisar](#order--sorting--search) por favoritos ou grupos específicos.
- [Operações em massa](#bulk-edit--delete) — Renomear, mover ou excluir vários favoritos de uma vez.

### Ordem / Classificação / Pesquisa {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pastas de favoritos Android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Pastas de favoritos iOS](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Classificação** — Pastas e pontos favoritos são classificados em ordem alfabética, com a [pasta pessoal](../personal/favorites.md#special-favorites-personal) no topo.
- **Pesquisa** — Use a [Pesquisa Global](../search/search-all.md) para encontrar favoritos por nome. Os favoritos são classificados por distância do centro do mapa.


### Edição / Exclusão em Massa {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ações de favoritos Android](@site/static/img/personal/favorites_actions_android.png) ![Excluir ação de favoritos Android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Para gerenciar vários favoritos, toque no ícone **Excluir** (*ícone de lixeira no Android*) ou no botão **Editar** (*ícone de lápis no iOS*).
2. Selecione favoritos individuais ou pastas inteiras para operações em massa.
3. **Opções disponíveis** — *Excluir* para Android e iOS, *Mover para um Grupo de Favoritos*, *Compartilhar* e *Alterar Cor* para iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Ações do Grupo de Favoritos {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Menu de três pontos → Alterar aparência padrão*

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Toque longo na pasta → Aparência padrão*

![Ações de favoritos iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Use o ***Menu de três pontos*** (*Android*) ao lado de cada pasta e ***toque longo*** (*iOS*) na pasta para gerenciar grupos de favoritos:

- **<Translate android="true" ids="shared_string_rename"/>** — Use esta opção para alterar o nome da pasta selecionada.

- **<Translate android="true" ids="change_default_appearance"/>** — Personalize como os pontos favoritos na pasta aparecem no mapa, alterando seus ícones, cores ou rótulos.

- **<Translate android="true" ids="shared_string_show_on_map"/>** ou **Ocultar no mapa** — Alterne esta opção para exibir ou ocultar os pontos favoritos da pasta no mapa.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** ou **Remover dos marcadores do mapa** (*somente Android*) — Adicione todos os pontos favoritos da pasta à *lista de marcadores do mapa* ou remova-os conforme necessário para fácil referência.

- **<Translate android="true" ids="shared_string_share"/>** — Compartilhe os pontos favoritos na pasta exportando-os como um arquivo *Favorites.gpx*, facilitando a transferência ou o backup de seus dados.

- **<Translate android="true" ids="shared_string_delete"/>** — Exclua permanentemente a pasta de favoritos selecionada e todos os pontos dentro dela.

Mais detalhes no artigo [Meus Lugares](../personal/myplaces.md#favorites).



### Alterar Aparência do Grupo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funções da pasta de favoritos Android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Configurações de *Alterar Aparência do Grupo*:

- **Ícone, cor, forma** — Defina um estilo padrão para todos os favoritos em um grupo.
- **Consistência** — Novos favoritos adicionados ao grupo herdam a aparência padrão automaticamente.
- **Personalização** — Substitua as configurações padrão para pontos existentes na pasta, apenas novos favoritos ou aplique a todos.


## Exportar / Importar {#export--import}

O OsmAnd oferece vários métodos para [fazer backup](./import-export.md) e [restaurar](./import-export.md#import) favoritos:

- **Locais de backup** — Armazenamento local, [OsmAnd Cloud](../personal/osmand-cloud.md) (somente com [assinatura OsmAnd Pro ou OsmAnd Start](../purchases/index.md)), ou aplicativos de mensagens instantâneas.

- **Formato de arquivo** — Os favoritos são salvos como arquivos `.gpx` (favorites.gpx).


### Backup Gratuito na Nuvem {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Ações de favoritos iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

O [Backup Gratuito de Favoritos](../personal/osmand-cloud.md#osmand-start) é um plano de compra especial que permite fazer backup de seus pontos favoritos (locais) para as versões **Android, iOS** ou **Web** no aplicativo OsmAnd e restaurá-los do OsmAnd Cloud. Este plano está disponível para usuários do [OsmAnd Gratuito ou Maps+](../purchases/index.md).

O *Backup Gratuito de Favoritos* oferece estes benefícios:

- **Nenhum pagamento é necessário**. Use o recurso de backup sem adquirir assinaturas pagas.
- **Salvar pontos favoritos**. Salve regularmente seus pontos favoritos no OsmAnd para evitar perdê-los se seu dispositivo travar ou o aplicativo for excluído.
- **Transferir pontos favoritos**. Importe seus pontos favoritos para um novo dispositivo com o recurso *Backup Gratuito de Favoritos* se você usar o OsmAnd em vários dispositivos.


### Como Criar um Backup {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Ações de favoritos iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Você precisa de uma conta OsmAnd Cloud para usar o recurso *Backup Gratuito de Configurações*. Se você tiver uma conta no *OsmAnd Pro* ou uma conta ativa no *OsmAnd Cloud*, você não verá o banner de promoção.

- *Banner de Backup Gratuito de Favoritos*. Toque neste banner para iniciar o processo de backup.
- *Conclua a etapa de registro* se você não tiver uma conta OsmAnd Cloud, seguindo as instruções no [guia de registro](../personal/osmand-cloud.md#login).
- *Navegue até o menu Compras do OsmAnd* (*Menu → Configurações → Compras*).
- *[Pacote OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Selecione esta opção para acessar o recurso Backup Gratuito de Configurações.
- *Crie um backup* de suas configurações.


### Todos os Favoritos {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ações de favoritos Android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Exportar importar favoritos iOS](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Você pode exportar e importar seus favoritos usando os botões especiais na parte inferior da tela de Favoritos. Um [arquivo .gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) pode ser enviado para Dropbox, e-mail, mensageiros e outros aplicativos instalados em seu dispositivo que suportam esse recurso.

- Botão **Importar** (*Android*) / **Importar favorito** (*iOS*). Permite importar pontos favoritos (*favorites.gpx*) como waypoints de um arquivo *GPX* (um formato comum de dados GPS) do armazenamento do seu dispositivo.
- Botão **Compartilhar** (*Android*) / **Exportar favorito** (*iOS*). Permite exportar (compartilhar) todos os seus favoritos como um arquivo *favorites.gpx*.


### Grupo de Favoritos {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorites_actions_1_ios.png) ![Ações de favoritos iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Toque no **Menu de três pontos** (*Android*) ou no botão **Editar** (*ícone de lápis no iOS*) ou **toque longo** na pasta (*iOS*) da pasta de favoritos selecionada.
- Escolha o botão **Compartilhar** para enviar o arquivo *Favorites.gpx* para a memória do seu dispositivo ou compartilhá-lo via aplicativos de mensagens.


### Backup Automático de Favoritos {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Android → data → net.osmand → files → backup*

![Exportar backup de favoritos Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Backup automático de favoritos Android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Arquivos → No meu iPhone → OsmAnd Maps → favourites_backup*

![Backup automático de favoritos iOS](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

O OsmAnd cria um **arquivo de backup** cada vez que os favoritos são editados.

- **Android**: Os backups são armazenados em *Android → data → net.osmand → files → backup*. Use um gerenciador de arquivos de terceiros para acessá-los.

- **iOS**: Os arquivos estão localizados em *Arquivos → No meu iPhone → OsmAnd Maps → favourites_backup*.

**Exportação manual de backup**

- Vá para *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exporte o arquivo `.osf` para armazenamento local, serviços em nuvem ou compartilhe-o diretamente.

:::caution
Nas últimas versões do ***Android***, o acesso a diretórios do sistema é limitado. No entanto, após extrair o arquivo de favoritos do arquivo, ainda é possível encaminhá-lo para mensageiros ou serviços em nuvem, etc.
:::


### Favoritos em Arquivo GPX {#favorites-in-gpx-file}

Todas as informações sobre um Favorito são armazenadas e descritas usando tags. Ao criar um ponto Favorito, você pode escrever sua própria [descrição](#favorite-point) ou usar informações dos dados de [ponto de interesse (POI)](../map/point-layers-on-map.md#points-of-interest-pois) do OSM a partir dos quais seu ponto foi criado. Pontos favoritos, POIs e Waypoints usam as mesmas **tags** para armazenar informações e são salvos no **formato de arquivo GPX**.


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```


## Artigos Relacionados {#related-articles}

- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md#import--export-track)
- [Histórico de Pesquisa](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)