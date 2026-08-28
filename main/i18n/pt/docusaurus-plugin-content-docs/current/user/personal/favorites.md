---
source-hash: 0000cb42245d9871184d8009b30a97fd6f15555a6510bbbd8d52edde2e10f458
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

![Descrição de adição de favorito Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Grupo de favoritos Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descrição de adição de favorito iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Grupo de favoritos iOS](@site/static/img/personal/favorite_group_ios.png)

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
- **Grupo** — Selecione em um [Grupo de Favoritos](#manage-favorites) existente ou crie um novo. No Android, você também pode selecionar uma subpasta dentro de um grupo ou criar uma nova. Pastas aninhadas são exibidas usando o caminho completo (por exemplo, *Viagem* / *Itália* / *Roma*).
- **Personalização visual** — Ícone, cor, forma podem corresponder à [aparência padrão do grupo](#change-group-appearance) ou ser personalizados individualmente.
- **Mídia** (*somente Android*) — Anexe fotos, vídeos, gravações de áudio ou imagens da Galeria ou dos Arquivos.

**NOTA:** Se a camada de Favoritos estiver desativada em [Configurar mapa](../map/configure-map-menu), adicionar um novo ponto favorito ativa automaticamente a camada para tornar o favorito recém-adicionado visível no mapa.


### Editar / Substituir / Excluir {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Editar favorito Android](@site/static/img/personal/favorite_edit_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Editar favorito iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Para modificar um ponto favorito:

1. [Toque](../map/map-context-menu.md#select-an-object-single-tap) no favorito no mapa ou vá para [Meus Favoritos](#manage-favorites).
2. Escolha **Editar favorito** no [*menu de contexto do mapa*](../map/map-context-menu.md#add--edit-favorite).

***Opções disponíveis:***

- **Editar detalhes** — Nome, ícone, grupo, endereço, descrição e mídia anexada.
- **Substituir localização** — Substituir outro ponto por este. Útil para atualizar um ponto específico (por exemplo, *Meu carro estacionado*) ou criar um novo.
- **Excluir** — Remover o favorito usando a opção de exclusão, acessível através do menu Editar ou através do botão de exclusão no Android.


### Ícones de Favoritos {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Meus lugares favoritos Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![meus_lugares_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Uma ampla gama de ícones para POIs e waypoints está disponível no OsmAnd. Você pode:

- Selecionar um ícone da lista de [categorias de POI](../search/search-poi.md#categories-and-their-filters).
- Encontrar um ícone adequado usando a [opção de pesquisa](../search/search-all.md#how-to-use).


### Favoritos Especiais (Pessoais) {#special-favorites-personal}

A *pasta Pessoal* contém pontos especiais como **<Translate android="true" ids="favorite_home_category"/>** e **<Translate android="true" ids="work_button"/>**, frequentemente usados na [navegação](../navigation/setup/route-navigation.md#select-start-point). Esta pasta não possui um *menu de três pontos*, e seus parâmetros não podem ser alterados.


### Mídia (somente Android) {#media}

![Mídia](@site/static/img/personal/media_actions.webp) ![Mídia](@site/static/img/personal/media_menu.webp)

A seção Mídia permite anexar fotos, vídeos, gravações de áudio e imagens a um ponto favorito. A mídia pode ser adicionada ao criar um favorito ou posteriormente na tela Editar favorito. Para anexar mídia, toque em *Adicionar* na seção Mídia e escolha uma das opções disponíveis:
- **Tirar foto** — Capture uma nova foto com a câmera do dispositivo.
- **Gravar nota de vídeo** — Grave um novo vídeo.
- **Gravar nota de áudio** — Grave uma nota de áudio.
- **Escolher da Galeria** — Selecione uma imagem existente do seu dispositivo.
- **Escolher dos Arquivos** — Selecione uma imagem do sistema de arquivos.

Após anexar a mídia, ela aparece no cartão Mídia no menu de contexto do favorito. O mesmo cartão Mídia também está disponível para [Waypoints](../map/tracks/track-context-menu.md#points--waypoints).

O cartão Mídia exibe visualizações dos itens anexados. Os itens exibidos seguem a ordem de classificação selecionada. Toque em *Mostrar tudo* para abrir a galeria completa. A galeria exibe toda a mídia anexada ao favorito selecionado.

Toque em qualquer item para abri-lo em visualização em tela cheia. Fotos e vídeos podem ser visualizados diretamente, enquanto as gravações de áudio incluem controles de reprodução.


## Gerenciar Favoritos {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Meus lugares favoritos Android](@site/static/img/personal/my_places_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![meus_lugares_ios](@site/static/img/personal/my_places_ios_new.png)

</TabItem>

</Tabs>

A seção **Favoritos** permite:

- [Pesquisar](#order--sorting--search) por favoritos ou grupos específicos. No iOS, os grupos de favoritos (pastas) são organizados em três seções: **Fixadas**, **Visíveis** e **Ocultas**. Seções vazias não são exibidas.
- [Operações em massa](#bulk-edit--delete) — Compartilhar, mover ou excluir vários favoritos de uma vez.

### Ordem / Classificação / Pesquisa {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoritos Android](@site/static/img/personal/favorites_points_sorting.webp) ![Favoritos Android](@site/static/img/personal/favorites_folders_sorting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoritos iOS](@site/static/img/personal/favorites_points_sorting_ios.webp) ![Favoritos iOS](@site/static/img/personal/favorites_folders_sorting.webp)
</TabItem>

</Tabs>

- **Classificação** — Pastas e pontos favoritos podem ser classificados usando as opções de classificação disponíveis no menu da lista. Para pontos favoritos, as seguintes opções estão disponíveis: *Nome A – Z*, *Nome Z – A*, *Última modificação*, *Mais próximo da localização atual*, *Mais próximo do centro do mapa*, *Data mais recente primeiro* e *Data mais antiga primeiro*. Para pastas de favoritos, as seguintes opções estão disponíveis: *Nome A – Z*, *Nome Z – A*, *Última modificação*, *Data mais recente primeiro* e *Data mais antiga primeiro*. Por padrão, os itens são classificados por Nome A – Z. Pastas fixadas são sempre exibidas no topo da lista. Elas são visualmente separadas do restante das pastas por um divisor. 
- **Pesquisa** — Use a [Pesquisa Global](../search/search-all.md) para encontrar favoritos por nome. Os favoritos são classificados por distância do centro do mapa. Para pesquisar pontos favoritos na lista de Favoritos na aba Meus Lugares, toque no ícone *Pesquisar* (lupa).

### Edição / Exclusão em Massa {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ações de favoritos Android](@site/static/img/personal/favorites_group_actions.png) ![Ação de exclusão de favoritos Android](@site/static/img/personal/favorites_actions.png)

Para gerenciar vários favoritos ou pastas, entre no *Modo de Seleção*. Você pode abrir o Modo de Seleção de duas maneiras:
- Toque no *menu de três pontos* no canto superior direito e escolha *Selecionar*.
- Toque longo em um ponto favorito ou pasta.

Quando o Modo de Seleção está ativado, caixas de seleção aparecem ao lado dos itens na lista. Selecione os favoritos ou pastas necessários tocando nas caixas de seleção. Para selecionar todos os itens na lista, toque no ícone Selecionar tudo no canto superior direito.

As ações disponíveis dependem do tipo de item selecionado. Quando pastas são selecionadas, as seguintes ações estão disponíveis:
- **Compartilhar** — Exportar pastas selecionadas como um arquivo GPX de Favoritos.
- **Excluir** — Remover as pastas selecionadas.

Quando pontos favoritos são selecionados, as seguintes ações estão disponíveis:
- **Mover** — Mover favoritos selecionados para outra pasta.
- **Adicionar aos marcadores do mapa** — Adicionar pontos selecionados à lista de Marcadores do Mapa.
- **Adicionar à trilha** — Adicionar pontos selecionados a uma trilha.
- **Adicionar à navegação** — Iniciar navegação para o ponto selecionado.
- **Excluir** — Remover os favoritos selecionados.

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorites_actions_folders.webp) ![Ações de favoritos iOS](@site/static/img/personal/favorites_actions_points.webp)

Para gerenciar vários pontos favoritos ou pastas, entre no *Modo de Seleção* tocando no *menu de três pontos* no canto superior direito e escolhendo *Selecionar*. Quando o Modo de Seleção está ativado, caixas de seleção aparecem ao lado dos itens na lista. Selecione os pontos favoritos ou pastas necessários tocando nas caixas de seleção. Para selecionar todos os itens na lista, toque no ícone Selecionar tudo no canto superior direito.

As ações disponíveis para os pontos favoritos selecionados são as seguintes:

- **Compartilhar** — Exportar pontos selecionados como um arquivo Favorites.gpx.
- **Mover** — Mover pontos favoritos selecionados para outra pasta.
- **Alterar aparência** — Alterar a aparência dos pontos favoritos selecionados.
- **Adicionar aos marcadores do mapa** — Adicionar pontos selecionados à lista de Marcadores do Mapa.
- **Adicionar à trilha** — Adicionar pontos selecionados a uma trilha.
- **Adicionar à navegação** — Adicionar pontos selecionados à navegação.
- **Excluir** — Remover os pontos favoritos selecionados.

Para as pastas selecionadas, as mesmas ações estão disponíveis, com as seguintes opções adicionais:

- **Mostrar no mapa** / **Ocultar no mapa** — Mostrar ou ocultar os pontos favoritos das pastas selecionadas no mapa.
- **Fixar** / **Desfixar pasta** — Fixar ou desfixar as pastas selecionadas.

</TabItem>

</Tabs>

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

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_folder_functions.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorite_add_new_group_2_ios.webp)

</TabItem>

</Tabs>

No Android, use o ***Menu de três pontos*** ao lado de cada pasta para gerenciar grupos de favoritos. No iOS, use o ***toque longo*** na pasta para gerenciar grupos de favoritos: 

- **<Translate android="true" ids="shared_string_show_on_map"/>** / **Ocultar no mapa** — Alterne esta opção para exibir ou ocultar os pontos favoritos da pasta no mapa.
- **<Translate android="true" ids="pin_folder"/>** — Fixe a pasta selecionada para mantê-la no topo da lista de favoritos para acesso mais rápido.
- **<Translate android="true" ids="shared_string_rename"/>** — Use esta opção para alterar o nome da pasta selecionada.
- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Personalize como os pontos favoritos na pasta aparecem no mapa, alterando seus ícones, cores ou rótulos.
- **<Translate android="true" ids="shared_string_share"/>** — Compartilhe os pontos favoritos na pasta exportando-os como um arquivo *Favorites.gpx*, facilitando a transferência ou o backup de seus dados.
- **<Translate android="true" ids="shared_string_move"/>** — Mova a pasta selecionada, incluindo todos os pontos favoritos e subpastas aninhadas, para outra pasta. A pasta atual e suas subpastas não podem ser selecionadas como destino.
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** / **Remover dos marcadores do mapa** — Adicione todos os pontos favoritos da pasta à *lista de marcadores do mapa* ou remova-os conforme necessário para fácil referência.
- **<Translate android="true" ids="add_to_a_track"/>** — Adicione todos os pontos favoritos da pasta selecionada a uma trilha. Isso abre a tela de seleção de trilhas onde você pode escolher ou criar uma trilha.
- **Adicionar à navegação** (*somente iOS*) — Adicione todos os pontos favoritos da pasta selecionada à navegação.
- **<Translate android="true" ids="shared_string_delete"/>** — Exclua permanentemente a pasta de favoritos selecionada e todos os pontos dentro dela.

### Alterar Aparência do Grupo {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Menu de três pontos → Alterar aparência padrão*

![Funções da pasta de favoritos Android](@site/static/img/personal/favorite_change_appearance_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Toque longo na pasta → Aparência padrão*

![Ações de favoritos iOS](@site/static/img/personal/favorite_add_new_group_3_ios.webp)

</TabItem>

</Tabs>

A opção **Alterar Aparência do Grupo** permite definir um estilo padrão para todos os favoritos em uma pasta. Você pode ajustar os seguintes parâmetros:

- **Ícone** — Escolha um ícone das categorias disponíveis.
- **Cor** — Selecione uma cor sólida para destacar os favoritos.
- **Forma** — Escolha uma forma de marcador (círculo, quadrado, octógono).

Se os favoritos em uma pasta já tiverem ícones, cores ou formas diferentes, o estado *Original* é exibido. Isso significa que cada favorito mantém seu estilo atual, a menos que você selecione um novo. Ao salvar, você também será solicitado a escolher como as alterações devem ser aplicadas:

- **Aplicar apenas a novos pontos** — Os favoritos existentes permanecem inalterados; os novos favoritos herdarão a aparência padrão.
- **Aplicar a pontos existentes** — Atualize apenas os favoritos já na pasta.
- **Aplicar a todos os pontos** — Aplique o novo estilo tanto a favoritos existentes quanto futuros.

Essa flexibilidade permite padronizar a aparência de uma pasta ou manter personalizações únicas enquanto ainda define padrões para novos pontos.


## Exportar / Importar {#export--import}

O OsmAnd oferece vários métodos para [fazer backup](./import-export.md) e [restaurar](./import-export.md#import) favoritos:

- **Locais de backup** — Armazenamento local, [OsmAnd Cloud](../personal/osmand-cloud.md) (somente com [assinatura OsmAnd Pro ou OsmAnd Start](../purchases/index.md)), ou aplicativos de mensagens instantâneas.

- **Formato de arquivo** — Os favoritos são salvos como arquivos `.gpx` (favorites.gpx). Use o formato `.osf` para fazer backup de favoritos com sua mídia anexada. A importação do backup restaura tanto os pontos favoritos quanto a mídia associada.


### Backup Gratuito na Nuvem {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Ações de favoritos iOS](@site/static/img/personal/favorites_free_backup_2_ios.webp)

</TabItem>

</Tabs>

O [Backup Gratuito de Favoritos](../personal/osmand-cloud.md#osmand-start) é um plano de compra especial que permite fazer backup de seus pontos favoritos (locais) para as versões **Android, iOS** ou **Web** no aplicativo OsmAnd e restaurá-los do OsmAnd Cloud. Este plano está disponível para usuários do [OsmAnd Gratuito ou Maps+](../purchases/index.md).  

*Backup Gratuito de Favoritos* oferece estes benefícios:

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

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Ações de favoritos iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Você precisa de uma conta OsmAnd Cloud para usar o recurso *Backup Gratuito de Configurações*. Se você tiver uma conta no *OsmAnd Pro* ou uma conta ativa no *OsmAnd Cloud acount*, você não verá o banner de promoção.  

- *Banner de Backup Gratuito de Favoritos*. Toque neste banner para iniciar o processo de backup.
- *Conclua a etapa de registro* se você não tiver uma conta OsmAnd Cloud, seguindo as instruções no [guia de registro](../personal/osmand-cloud.md#login).
- *Navegue até o menu Compras do OsmAnd* (*Menu → Configurações → Compras*).
- *[Pacote OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Selecione esta opção para acessar o recurso Backup Gratuito de Configurações.
- *Crie um backup* de suas configurações.

<!--
### All Favorites {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.
-->

### Grupo de Favoritos {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funções da pasta de favoritos Android](@site/static/img/personal/favorites_folder_functions_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Ações de favoritos iOS](@site/static/img/personal/favorites_actions_1_ios.webp) 
</TabItem>

</Tabs>

- Para compartilhar várias pastas de favoritos, entre no [Modo de Seleção](#bulk-edit--delete), selecione as pastas necessárias e toque em *Compartilhar*.
- Para compartilhar uma única pasta de favoritos, toque no Menu de três pontos (*Android*) ou toque longo na pasta (*iOS*), selecione *Compartilhar* para enviar o arquivo Favorites.gpx para a memória do seu dispositivo ou compartilhá-lo via aplicativos de mensagens. No Android, se a pasta contiver mídia anexada, aparece uma folha inferior de Compartilhamento. Você pode escolher:
    - *Apenas pontos* — Compartilhe os pontos favoritos da pasta como um arquivo GPX.
    - *Pontos e mídia* — Compartilhe os pontos favoritos e a mídia anexada como um arquivo OSF.


### Backup Automático de Favoritos {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Android → data → net.osmand → files → backup*

![Exportar backup de favoritos Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Backup automático de favoritos Android](@site/static/img/personal/favorites_autobackup_andr.png)  

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

Os favoritos também podem conter referências à mídia anexada usando elementos `<link>` GPX padrão. 


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