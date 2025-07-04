---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
sidebar_position: 18
title: Wikipedia
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
O plugin da Wikipédia é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

Ter a Wikipédia na sua viagem ajuda você a aprender mais sobre os lugares que visita. Ela está disponível offline e mostra Lugares Populares (Android) / artigos da Wikipédia (iOS) relacionados aos pontos de interesse diretamente no mapa.

O plugin da Wikipédia é um recurso separado que pode ser ativado/desativado conforme a necessidade. Uma vez ativado, ele permite que você carregue dados da Wikipédia [baixados](../personal/maps-resources.md#download-maps-maps) para cada região geográfica. O mapa possui dois tipos de conhecimento carregado da Wikipédia: informações breves e um artigo completo.

Informações breves são fornecidas por POIs da Wikipédia (abreviação de "[ponto de interesse](../map/point-layers-on-map.md)"). Se a opção Wikipédia estiver ativada no menu, um POI da Wikipédia aparece no mapa. Ao tocar em um ponto de interesse, ele se expande para fornecer informações breves da Wikipédia, bem como a capacidade de abrir um artigo completo. O POI da Wikipédia, bem como os artigos relacionados, estão disponíveis offline. Você pode lê-los conforme a necessidade, trocar de idioma e pesquisar outras informações na Wikipédia.

[Wikipédia](https://en.wikipedia.org/wiki/Wikipedia) é uma enciclopédia online colaborativa, multilíngue e gratuita, criada e mantida por uma comunidade de editores voluntários usando um sistema de edição baseado em wiki.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Parâmetros de configuração necessários {#required-setup-parameters}

Para exibir dados da Wikipédia no mapa, você precisa fazer as seguintes configurações:

1. [Compre](../plugins/index.md#purchase) e [Ative](../plugins/index.md#enable--disable) o plugin da Wikipédia na seção Plugins do *Menu Principal*.
2. Baixe os [pacotes da Wikipédia](#download-wikipedia-packages) para as regiões necessárias.
3. Exiba os [POIs da Wikipédia](#display-wikipedia-on-the-map) no mapa para o perfil necessário.
4. Configure os [idiomas](#set-preferred-language) preferidos para ler artigos.


## Baixar pacotes da Wikipédia {#download-wikipedia-packages}

Os dados da Wikipédia estão disponíveis para cada região geográfica. Se forem carregados para uma região e não para outra, no primeiro caso você pode trabalhar com informações da Wikipédia ao visualizar a região em um mapa, e no outro caso, a região não terá nenhuma informação da Wikipédia. Uma vez carregados, os dados da Wikipédia ficam disponíveis em geral, bem como offline.

Para baixar os dados da Wikipédia para uma região, vá para os [pacotes disponíveis para download no *Menu Principal*](../start-with/download-maps.md#download---main-menu), encontre a região necessária e abra-a. Os dados da Wikipédia estarão entre outros pacotes.

Você pode abrir os dados da Wikipédia para download por região da seguinte forma:

1. **Android**. Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selecione a região necessária. Uma vez que a região é aberta, os dados da Wikipédia estarão entre outros pacotes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Para ver quais dados já foram carregados, vá para *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Para ver quais dados já foram carregados, vá para *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Exibir Wikipédia no mapa {#display-wikipedia-on-the-map}

Ao carregar dados da Wikipédia para as regiões necessárias, você pode controlar a visibilidade desses dados no mapa. A visibilidade é controlada por [Lugares Populares (Wikipédia)](../map/point-layers-on-map.md#-wikipedia) **para Android** / [POIs da Wikipédia](../map/point-layers-on-map.md#-wikipedia) **para iOS**, que podem ser mostrados ou ocultados para todas as regiões carregadas por um determinado [perfil](../personal/profiles.md), por exemplo, um perfil para dirigir, um perfil para andar de bicicleta, outro perfil para mostrar transporte público e outros.

Para mostrar ou ocultar POIs da Wikipédia, primeiro selecione um perfil e depois ative/desative a opção **Wikipédia**.

Para mostrar/ocultar POIs da Wikipédia, faça o seguinte:

1. Vá para:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selecione um Perfil e procure a seção *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* de configurações no menu.
3. Ative *<Translate android="true" ids="poi_osmwiki"/>* **para Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **para iOS**.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Pesquisar Wikipédia {#search-wikipedia}

Com os dados da Wikipédia carregados, independentemente do modo de visibilidade dos [POIs da Wikipédia](../map/point-layers-on-map.md#-wikipedia) no mapa, é possível [pesquisar](../search/search-poi.md) qualquer informação da Wikipédia.

Ao tocar no botão Pesquisar, um painel adicional aparece, permitindo que você [pesquise](../search/index.md) o texto inteiro e/ou uma categoria específica. No primeiro caso, os resultados da pesquisa mostrarão POIs da Wikipédia com os artigos correspondentes da Wikipédia entre outros tipos de informação. No caso de uma [pesquisa por categoria da Wikipédia](../search/search-poi.md#poi-search), os resultados da pesquisa mostrarão apenas informações da Wikipédia, classificadas pela localização mais próxima da área do mapa que está sendo exibida na tela.

- Na versão **Android**, você pode abrir a [Pesquisa](../search/index.md) tocando no *ícone de Pesquisa* no canto superior esquerdo da tela e/ou tocando na *opção Pesquisar* no menu.
- Na versão **iOS**, para abrir a [Pesquisa](../search/index.md), o ícone de Pesquisa está no canto superior esquerdo da tela.

<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Para pesquisar pela [categoria](../search/search-poi.md#poi-search) da Wikipédia, selecione: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Se necessário, toque na opção **Mostrar Wikipédia no mapa** na parte superior do painel de pesquisa e os resultados da pesquisa da categoria Wikipédia aparecerão no mapa.


## Artigo da Wikipédia {#wikipedia-article}

Para abrir o artigo da Wikipédia:

1. Ative a [camada de POI da Wikipédia](../map/point-layers-on-map.md#-wikipedia) para um perfil especificado.
2. Toque no POI no mapa.
3. No [menu de contexto](../map/map-context-menu.md) de um POI, toque em *Detalhes* (ou simplesmente puxe o *menu de contexto* para cima) para ver um resumo do artigo da Wikipédia escolhido.
4. Se você tocar nesse texto (para a versão iOS), será redirecionado para o artigo offline da Wikipédia.
5. Use o botão *Ler artigo* ou *Ler artigo completo* para abrir a versão completa do artigo da Wikipédia.



<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Configurações da Wikipédia {#wikipedia-settings}

Você pode [definir o(s) idioma(s)](#set-preferred-language) em que prefere ler [artigos](#wikipedia-article) e também configurar as [opções de download de imagens](#download-images) para cada [perfil](../personal/profiles.md).

### Definir idioma preferido {#set-preferred-language}

Nas versões **Android** e **iOS** do aplicativo OsmAnd, você pode definir seu idioma preferido (ou idiomas) para exibir artigos da Wikipédia usando o *menu Configurar mapa*. Se você selecionar mais de um idioma, os artigos da *Wikipédia* no mapa serão mostrados em qualquer um deles. Vá para:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selecione o perfil necessário e na seção *<Translate android="true" ids="shared_string_show"/>* escolha *<Translate android="true" ids="poi_osmwiki"/>* para Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* para iOS.
3. Desative a opção *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Selecione o(s) idioma(s) específico(s) na lista aberta.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Na versão **iOS**, você também pode definir o idioma preferido para artigos da Wikipédia usando:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Trocar idiomas dentro do artigo {#switch-languages-inside-the-article}

Caso o *artigo da Wikipédia* esteja disponível em diferentes idiomas, você pode trocar o idioma durante a leitura. Após tocar no ícone correspondente no canto superior direito da tela, você terá opções para escolher.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Baixar imagens {#download-images}

Você pode escolher se deseja baixar imagens da Wikipédia em seu dispositivo ou não dentro do *artigo da Wikipédia*:

- **Android**. Abra *[artigo da Wikipédia](#display-wikipedia-on-the-map) → &#8942; → Opções*
- **iOS**. Abra *[artigo da Wikipédia](#display-wikipedia-on-the-map) → Ícone de imagem*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Switching images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Na versão **iOS** do aplicativo, você também pode acessar as opções de download de imagens usando as *configurações do plugin da Wikipédia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Artigos relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

> *Última atualização: maio de 2025*