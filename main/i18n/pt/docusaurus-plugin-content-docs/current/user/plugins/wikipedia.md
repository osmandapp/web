---
source-hash: 7d67934d45ebb7643ba52ee95d1baff1f7670e11a70a93f7bacdd0b795953fd8
sidebar_position: 18
title:  Wikipedia
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



## Visão geral {#overview}

:::info Recurso pago
O plugin da Wikipedia é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.  
:::

Ter a Wikipedia em sua viagem ajuda você a aprender mais sobre os lugares que visita. Está disponível offline e mostra Lugares Populares (Android) / artigos da Wikipedia (iOS) relacionados aos pontos de interesse diretamente no mapa.  

O plugin da Wikipedia é um recurso separado que pode ser ativado/desativado conforme necessário. Uma vez ativado, ele permite que você carregue dados da Wikipedia [baixados](../personal/maps-resources#downloads-menu) para cada região geográfica. O mapa possui dois tipos de conhecimento carregado da Wikipedia: informações breves e um artigo completo.  


Informações breves são fornecidas por POIs da Wikipedia (uma abreviação para "[ponto de interesse](../map/point-layers-on-map.md)"). Se a opção Wikipedia estiver ativada no menu, um POI da Wikipedia aparecerá no mapa. Ao tocar em um ponto de interesse, ele se expande para fornecer informações breves da Wikipedia, bem como a capacidade de abrir um artigo completo. O POI da Wikipedia, bem como os artigos relacionados, estão disponíveis offline. Você pode lê-los conforme necessário, mudar de idioma e pesquisar outras informações na Wikipedia.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) é uma enciclopédia online gratuita, multilíngue e de colaboração aberta, criada e mantida por uma comunidade de editores voluntários usando um sistema de edição baseado em wiki.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Parâmetros de configuração necessários {#required-setup-parameters}

Para exibir dados da Wikipedia no mapa, você precisa fazer as seguintes configurações:

1. [Compre](../plugins/index.md#purchase) e [Ative](../plugins/index.md#enable--disable) o plugin da Wikipedia na seção Plugins do *Menu Principal*.
2. Baixe os [pacotes da Wikipedia](#download-wikipedia-packages) para as regiões necessárias.  
3. Exiba os [POIs da Wikipedia](#display-wikipedia-on-the-map) no mapa para o perfil necessário.  
4. Configure os [idiomas](#set-preferred-language) preferidos para ler artigos.


## Baixar pacotes da Wikipedia {#download-wikipedia-packages}

Os dados da Wikipedia estão disponíveis para cada região geográfica. Se forem carregados para uma região e não para outra, no primeiro caso você pode trabalhar com informações da Wikipedia ao visualizar a região em um mapa, e no outro caso, a região não terá nenhuma informação da Wikipedia. Uma vez carregados, os dados da Wikipedia ficam disponíveis em geral, bem como offline.

Para baixar os dados da Wikipedia para uma região, vá para os [pacotes disponíveis para download no *Menu Principal*](../start-with/download-maps.md#downloading-maps), encontre a região necessária e abra-a. Os dados da Wikipedia estarão entre outros pacotes.

Você pode abrir os dados da Wikipedia para baixar por região da seguinte forma:

1. **Android**. Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selecione a região necessária. Uma vez que a região é aberta, os dados da Wikipedia estarão entre outros pacotes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Para ver quais dados já foram carregados, vá para *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Baixar Wikipedia no Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Para ver quais dados já foram carregados, vá para *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Baixar Wikipedia no iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Exibir Wikipedia no mapa {#display-wikipedia-on-the-map}

Ao carregar dados da Wikipedia para as regiões necessárias, você pode controlar a visibilidade desses dados no mapa. A visibilidade é controlada por [Lugares Populares (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **para Android** / [POIs da Wikipedia](../map/point-layers-on-map.md#-wikipedia) **para iOS**, que podem ser mostrados ou ocultados para todas as regiões carregadas por um determinado [perfil](../personal/profiles.md), por exemplo, um perfil para dirigir, um perfil para andar de bicicleta, outro perfil para mostrar transporte público e outros.  

Para mostrar ou ocultar POIs da Wikipedia, primeiro selecione um perfil e depois ative/desative a opção **Wikipedia**.

Para mostrar/ocultar POIs da Wikipedia, faça o seguinte:

1. Vá para: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selecione um Perfil e procure a seção *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* das configurações no menu.  
3. Ative  *<Translate android="true" ids="poi_osmwiki"/>* **para Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **para iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POIs da Wikipedia no Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI da Wikipedia no iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Pesquisar Wikipedia {#search-wikipedia}

Com os dados da Wikipedia carregados, independentemente do modo de visibilidade dos [POIs da Wikipedia](../map/point-layers-on-map.md#-wikipedia) no mapa, é possível [pesquisar](../search/search-poi.md) qualquer informação da Wikipedia.

Ao tocar no botão Pesquisar, um painel adicional aparece permitindo que você [pesquise](../search/index.md) o texto inteiro e/ou uma categoria específica. No primeiro caso, os resultados da pesquisa mostrarão POIs da Wikipedia com artigos correspondentes da Wikipedia entre outros tipos de informação. No caso de uma [pesquisa por categoria da Wikipedia](../search/search-poi.md#poi-search-by-categories), os resultados da pesquisa mostrarão apenas informações da Wikipedia, classificadas pela localização mais próxima da área do mapa que está atualmente exibida na tela.  

- Na versão **Android**, você pode abrir a [Pesquisa](../search/index.md) tocando no *ícone de Pesquisa* no canto superior esquerdo da tela e/ou tocando na *opção Pesquisar* no menu.
- Na versão **iOS**, para abrir a [Pesquisa](../search/index.md), o ícone de Pesquisa está no canto superior esquerdo da tela.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa da Wikipedia no Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa da Wikipedia no iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Para pesquisar pela [categoria](../search/search-poi.md#poi-search-by-categories) da Wikipedia, selecione: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Categoria da Wikipedia no Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Categoria da Wikipedia no iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Se necessário, toque na opção **Mostrar Wikipedia no mapa** na parte superior do painel de pesquisa e os resultados da pesquisa da categoria Wikipedia aparecerão no mapa.  


## Artigo da Wikipedia {#wikipedia-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Para abrir o artigo da Wikipedia:

1. Ative a [camada de POI da Wikipedia](../map/point-layers-on-map.md#-wikipedia) para um perfil especificado.
2. Toque no POI no mapa.
3. No [menu de contexto](../map/map-context-menu.md) de um POI, toque em [Detalhes](../map/map-context-menu.md#details) (ou simplesmente puxe o *menu de contexto* para cima) para visualizar um resumo do [artigo da Wikipedia](../map/map-context-menu.md#article-description) escolhido.
4. Use o botão *Ler artigo completo* para abrir a versão completa do artigo da Wikipedia.
5. Se os dados da Wikipedia não estiverem baixados, o botão *Ler na Wikipedia* aparece.
6. Ao tocar nesse botão, um diálogo é aberto com as seguintes opções: 
- Baixar Wikipedia e Abrir no Navegador (versão paga).
- Ler Wikipedia offline e Abrir no Navegador (versão gratuita).

![POI da Wikipedia em francês em inglês](@site/static/img/plugins/wikipedia/wikipedia_article_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Para abrir o artigo da Wikipedia:

1. Ative a [camada de POI da Wikipedia](../map/point-layers-on-map.md#-wikipedia) para um perfil especificado.
2. Toque no POI no mapa.
3. No [menu de contexto](../map/map-context-menu.md) de um POI, toque em [Detalhes](../map/map-context-menu.md#details) (ou simplesmente puxe o *menu de contexto* para cima) para visualizar um resumo do [artigo da Wikipedia](../map/map-context-menu.md#article-description) escolhido.
4. Se você tocar nesse texto, será redirecionado para o artigo offline da Wikipedia.
5. Use o botão *Ler artigo* para abrir a versão completa do artigo da Wikipedia.

![POI da Wikipedia em francês em inglês no iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Configurações da Wikipedia {#wikipedia-settings}

Você pode [definir o(s) idioma(s)](#set-preferred-language) em que prefere ler [artigos](#wikipedia-article) e também configurar [opções de download de imagens](#download-images) para cada [perfil](../personal/profiles.md).

### Definir idioma preferido {#set-preferred-language}

Nas versões **Android** e **iOS** do aplicativo OsmAnd, você pode definir seu idioma (ou idiomas) preferido para exibir artigos da Wikipedia usando o *menu Configurar mapa*. Se você selecionar mais de um idioma, os artigos da *Wikipedia* no mapa serão mostrados em qualquer um deles. Vá para:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selecione o perfil necessário e na seção *<Translate android="true" ids="shared_string_show"/>* escolha *<Translate android="true" ids="poi_osmwiki"/>* para Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* para iOS.  
3. Desative a opção *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Selecione o(s) idioma(s) específico(s) na lista aberta.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Definindo um idioma preferido no Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Definindo um idioma preferido no iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Na versão **iOS**, você também pode definir o idioma preferido para artigos da Wikipedia usando:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Mudar de idioma dentro do artigo {#switch-languages-inside-the-article}

Caso o *artigo da Wikipedia* esteja disponível em diferentes idiomas, você pode mudar o idioma durante a leitura. Depois de tocar no ícone correspondente no canto superior direito da tela, você terá opções para escolher.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mudando de idioma para um artigo específico](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Mudando de idioma para um artigo específico](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Baixar imagens {#download-images}

Você pode escolher se deseja baixar imagens da Wikipedia para o seu dispositivo ou não dentro do *artigo da Wikipedia*:

- **Android**. Abra *[Artigo da Wikipedia](#display-wikipedia-on-the-map) → &#8942; → Opções*
- **iOS**. Abra *[Artigo da Wikipedia](#display-wikipedia-on-the-map) → Ícone de imagem*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternando imagens](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Alternando imagens](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Na versão **iOS** do aplicativo, você também pode acessar as opções de download de imagens usando as *configurações do plugin da Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Alternando imagens](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Artigos relacionados {#related-articles}

- [Interagir com o mapa](../../user/map/interact-with-map.md)
- [Configurações globais](../../user/personal/global-settings.md)
- [Mapas vetoriais (Estilos de mapa)](../../user/map/vector-maps.md)