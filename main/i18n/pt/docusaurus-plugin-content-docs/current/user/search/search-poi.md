---
source-hash: 97f2c33a4074c4cc756ff122bf583a92e9a6275e2f47dd97dda9ca19c19cf16f
sidebar_position: 4
title: Pesquisar POI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->


## Visão geral {#overview}

A funcionalidade [Ponto de Interesse (POI) do OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) no OsmAnd oferece precisão, visibilidade e conveniência na localização de locais, rotas e serviços interessantes perto da sua localização atual ou de uma área selecionada no mapa.  

A barra de pesquisa permite a você inserir palavras-chave relacionadas com os locais em que você está interessado. A pesquisa de POI também exibe uma lista conveniente ordenada por [categoria](#poi-search-by-categories) para ajudar você a encontrar rapidamente o que procura, e o [filtro](#save-new-custom-filters) permite a você selecionar características específicas de POI para exibir apenas resultados relevantes.  

A [Pesquisa Personalizada](#customize-poi-search) melhora a funcionalidade de pesquisa, permitindo múltiplas escolhas de categorias e subcategorias. Você pode salvar os filtros criados para uso futuro, facilitando a localização rápida de POIs que satisfaçam critérios ou preferências específicas. Para mais detalhes, consulte a seção sobre como salvar filtros personalizados [aqui](#save-new-custom-filters).  

O OsmAnd oferece várias formas de acessar a ferramenta de Pesquisa, onde se encontra a seção **Pesquisa de Categorias**.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocar nele levará você para a [tela geral](#how-to-use) da ferramenta, onde você pode encontrar a aba *Categorias*.
- Vá ao *Menu principal → Pesquisar → aba Categorias*.
- Ao se preparar para iniciar uma rota, toque em [*Navegação → Definir destino → Campo de pesquisa → aba Categorias*](../navigation/setup/route-navigation.md#set-target-point).  
- Vá ao [*Menu principal → Configurar mapa → Sobreposição de POI → Pesquisar*](../map/point-layers-on-map.md#points-of-interest-pois).


## Como usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/poi_overlay_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Pesquisar POI iOS](@site/static/img/search/poi_overlay_ios_new.png)

</TabItem>

</Tabs>

*Todos os tipos de POI no OsmAnd podem ser encontrados aqui:* [link do github](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Pesquisa de Pontos de Interesse (POI) por tipo e nome**:
    - Permite pesquisar:
       - Para pontos de interesse (POI) próximos ou categorias específicas de POI.
       - Para [rotas OSM](../map/routes/types-of-routes.md) por nome, número de referência ou ID de relação usando o formato `O+relation_id` (por exemplo: [Les Portes de Paris](https://hiking.waymarkedtrails.org/#route?id=13363916&map=12.0/48.8671/2.3788), GR 75, O13363916).
       - Para objetos associados a identificadores Wikidata (por exemplo: [Q3406840](https://www.wikidata.org/wiki/Q3406840)).
       - Para [Locais populares (Wikipedia)](../map/popular_places.md).
       - Para locais combinando um nome de cidade com um nome ou tipo de POI (por exemplo: aeroporto de Berlim, Billa de Bratislava).
    - É possível filtrar e ordenar os resultados por categoria, distância ou classificação.

O ícone exibido nos resultados de pesquisa corresponde ao ícone usado no mapa e no menu de contexto do objeto.

Os resultados de pesquisa podem incluir informações adicionais de localização, como a cidade onde o POI está localizado. Isto ajuda a distinguir entre locais com o mesmo nome ao pesquisar por marcas ou locais populares.
    
- **Pesquisar POIs no mapa** - Mostrar no mapa:
    - Você pode selecionar as categorias necessárias da [**lista**](../map/point-layers-on-map.md#points-of-interest-pois) em *Configurar mapa → Mostrar sobreposição de POI...* e pesquisar por ícones na localização esperada.
    - Você pode inserir uma consulta de pesquisa primeiro ou pode começar a pesquisar POIs em *Menu → Pesquisar → Categorias* e depois clicar em **Mostrar no mapa**.

- **Pesquisa de marca**:
    - Pesquisar um estabelecimento comercial por nome de marca (como Audi, Starbucks ou Aldi) é muito semelhante a pesquisar diferentes POIs por tipo, a principal diferença é que a lista de marcas é fornecida dentro do mapa e está sujeita a alterações durante cada atualização. 
    - A marca é definida pela etiqueta OSM [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) e o OsmAnd coleta tipos limitados de marcas por mapa, com um máximo de 1000 marcas por mapa, no entanto, garante que a lista de marcas está alinhada entre os mapas vizinhos.
    - A pesquisa de marca não é sensível a maiúsculas e minúsculas. Por exemplo, inserir `starbucks`, `Starbucks` ou `STARBUCKS` devolverá os mesmos resultados.
    - Apenas as marcas incluídas no índice de dados do mapa aparecerão nos resultados de pesquisa.

![Pesquisar POI Android](@site/static/img/search/brand_search_andr.png) ![Pesquisar POI Android](@site/static/img/search/brand_search_2_andr.png)


:::note
Para realizar algumas destas tarefas (localizar endereços, POI) precisará ter o arquivo de mapa vetorial offline. Inicialmente, a pesquisa se baseia nos dados localizados no mapa na [área visível da tela do dispositivo](./search-all.md#how-to-use).
:::  

### Dicas de Pesquisa {#search-tips}

A pesquisa de POI no OsmAnd suporta diferentes formatos de entrada e combinações de nomes de locais, marcas e localizações. Se você não conseguir encontrar o resultado esperado, experimente as seguintes abordagens.

**1. Pesquisar dentro de uma cidade selecionada**

Se muitos locais tiverem o mesmo nome, pode ser mais fácil pesquisar primeiro a cidade e abri-la no mapa, e depois pesquisar o local dentro dessa área.

Fluxo de trabalho de exemplo:  
- Pesquisar **Viena**.
- Abrir a cidade no mapa.
- Pesquisar **McDonald's**.

Isto limita os resultados à área selecionada e aos objetos próximos.

**2. Usar consultas de pesquisa mais específicas**

Consultas muito curtas ou abreviaturas podem devolver muitos resultados porque correspondem a múltiplos nomes de objetos.

Exemplo:  
`St.`  
→ muitos resultados

`St. Volodymyr's Cathedral`  
→ objeto específico

**3. Pesquisar por nomes alternativos**

Alguns locais no OpenStreetMap têm etiquetas de nome adicionais, como:  
- `alt_name`
- `short_name`

A pesquisa do OsmAnd considera estes nomes, pelo que pesquisar por variantes diferentes de um nome pode devolver o mesmo objeto.

**4. Um local pode aparecer em múltiplos resultados de pesquisa**

Alguns POIs têm múltiplos atributos ou categorias.

Exemplo:  
`Sport = soccer; beachvolleyball`

Este local pode aparecer ao pesquisar por:  
- futebol
- voleibol de praia
- centro esportivo


## Pesquisa de POI por Categorias {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

A ferramenta **Pesquisar por Categorias** permite a você encontrar rapidamente objetos, locais e rotas classificadas em diferentes categorias. 

As categorias de POI no OsmAnd se baseiam em etiquetas do OpenStreetMap. Alguns locais podem aparecer numa categoria mais geral se um tipo mais específico não estiver disponível nos dados do mapa (por exemplo, uma igreja pode aparecer sob `Place of worship`).

Cada categoria tem um conjunto único de características, e esta ferramenta tem filtros que permitem a você refinar os resultados da pesquisa selecionando diferentes valores para características adicionais.

Como funciona:

- *Seleção de Categoria* - Você seleciona a categoria em que você está interessado, como restaurantes, hotéis, lojas, rotas OSM, locais populares da Wikipedia e outros, a partir de uma lista sugerida de categorias.
- *Filtros de Características* - Depois de selecionar uma categoria, o aplicativo mostra características adicionais que podem ser usadas para refinar a pesquisa. Por exemplo, para a categoria Restaurantes, você pode selecionar filtros como tipo de cozinha (italiana, chinesa, etc.), faixa de preço, classificação e disponibilidade de estacionamento.
- *Aplicação de Filtros* - Você seleciona os valores necessários nos filtros e, em seguida, o aplicativo aplica esses filtros aos resultados da pesquisa para mostrar apenas as propriedades que correspondem às características especificadas.
- *Exibição de resultados* - Após aplicar os filtros, o OsmAnd exibe uma lista com informações breves que correspondem à categoria e às características definidas.

<!--
Benefits:

- *User Customization* - Feature filters allow you to customize searches to meet their specific needs and preferences.
- *Refined results* - Filters help refine search results, making them more relevant and accurate.
- *Multiple Categories* - The OpenStreetMap database has an extensive set of POI categories, allowing you to find sites of different types and categories.

POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-single-tap) of POI.   
-->

### Tipos de Filtros {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Com a função **Filtro**, você pode selecionar as características necessárias e, como resultado, obter uma lista contendo apenas objetos relevantes. Para usar o filtro:

- Selecione a categoria em que você está interessado na lista de categorias.
- Na tela que se abre, toque no ícone que exibe o filtro. Ele está localizado abaixo do campo de entrada, ao lado do chip *Ordenar por* no Android e ao lado de *Mostrar no mapa* no iOS.
- No filtro, selecione o tipo de características.

![Pesquisar POI Android](@site/static/img/search/search_poi_filter_icon_andr.webp)  

Um filtro pode consistir em um número considerável de itens, cuja presença depende da categoria selecionada. Cada categoria tem um número de filtros específicos para ela, organizados em pastas por tipo. Existem um total de *21 categorias padrão*. Elas estão listadas aqui:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Hospedagem](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) inclui instalações que fornecem hospedagem temporária, como hotéis, motéis, hostels, pensões e parques de camping. Estes locais oferecem comodidades e serviços para uma estadia confortável durante a viagem.  
        Inclui *10* tipos de filtros: **Geladeira** (tem *2* valores), **Aquecimento** (tem *7* valores), **Taxa de acesso à Internet** (tem *3* valores), **Tipo de acesso à Internet** (tem *3* valores), **Colchão** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Chuveiro** (tem *1* valor), **Fumar** (tem *6* valores), **Classificação por estrelas** (tem *10* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 2. **Café e restaurante**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) e [restaurantes](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) representam locais de serviço de alimentação.  
        Inclui *23* tipos de filtros: **Ar condicionado** (tem *2* valores), **Café** (tem *1* valor), **Mesa de troca** (tem *3* valores), **Café** (tem *2* valores), **Culinária** (mais de *10* valores), **Entrega** (tem *1* valor), **Dieta** (tem *7* valores), **Prato** (mais de *10* valores), **Recarga de água potável** (tem *1* valor), **Drive-in** (tem *1* valor), **Taxa de acesso à Internet** (tem *3* valores), **Tipo de acesso à Internet** (tem *3* valores), **Música ao vivo** (tem *1* valor), **Microcervejaria** (tem *1* valor), **Produtos orgânicos** (tem *2* valores), **Lugares ao ar livre** (tem *1* valor), **Tipo de pagamento** (mais de *10* valores), **Reserva** (tem *5* valores), **Fumar** (tem *6* valores), **Takeaway** (tem *1* valor), **Tema** (mais de *20* valores), **Tipo** (tem *3* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 3. **Estação de recarga**. Uma [estação de recarga](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) é uma infraestrutura onde os proprietários de veículos elétricos podem recarregar seus carros, motos ou outros veículos elétricos. Estes pontos fornecem carregadores e conexões apropriadas para fornecer energia às baterias dos veículos.
        Inclui *36* tipos de filtros: **Autenticação por aplicativo** (tem *1* valor), **Autenticação por cartão com chip** (tem *1* valor), **Autenticação por chave** (tem *1* valor), **Autenticação por chamada telefônica** (tem *1* valor), **Autenticação por mensagem curta** (tem *1* valor), **Autenticação não necessária** (tem *1* valor), **Acesso para bicicletas** (tem *1* valor), **Acesso para ônibuss** (tem *2* valores), **Autenticação sem contato** (tem *1* valor), **Taxa** (tem *2* valores), **Acesso para veículos pesados** (tem *5* valores), **Taxa de acesso à Internet** (tem *3* valores), **Tipo de acesso à Internet** (tem *3* valores), **Acesso para automóveis** (tem *1* valor), **Taxa de estacionamento** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Acesso para scooters** (tem *1* valor), **Tomada** (mais de *20* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), **filtros de potência e tensão do conector para tipos individuais de conectores** (*17* filtros, cada um com *3* valores), Aberto agora / Aberto 24/7.  

 4. **Loja de conveniência e supermercado**. [Loja de conveniência](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) e [supermercado](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) representam instalações de varejo.
        Inclui *17* tipos de filtros: **Compra a granel** (tem *2* valores), **Café** (tem *1* valor), **Saque de dinheiro** (tem *4* valores), **Mesa de troca** (tem *3* valores), **Café** (tem *2* valores), **Entrega** (tem *1* valor), **Dieta** (tem *7* valores), **Drive-through** (tem *1* valor), **Sorvete** (tem *1* valor), **Taxa de acesso à Internet** (tem *3* valores), **Adesão obrigatória** (tem *2* valores), **Produtos orgânicos** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Artigos em segunda mão** (tem *2* valores), **Auto-checkout** (tem *2* valores), **Tipo** (tem *3* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergência](https://wiki.openstreetmap.org/wiki/Key:emergency) inclui instalações e locais associados a serviços de emergência, como hospitais, delegacias de polícia, quartéis de bombeiros e centros médicos de primeiros socorros.  
        Não contém filtros.

 6. **Posto de abastecimento**. Um [posto de combustível](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), também conhecido como posto de abastecimento, posto de gasolina e garagem de gasolina. É a instalação de tipo varejista onde os veículos motorizados podem ser reabastecidos.  
        Inclui *17* tipos de filtros: **Dispensadores automáticos de combustível** (tem *1* valor), **Café** (tem *1* valor), **Lavagem de carros** (tem *2* valores), **Saque de dinheiro** (tem *4* valores), **Ar comprimido** (tem *1* valor), **Cartões de combustível** (tem *6* valores), **Tipo de combustível** (mais de *20* valores), **Tipo de combustível (avia)** (tem *4* valores), **Taxa de acesso à Internet** (tem *3* valores), **Tipo de pagamento** (tem mais de *20* valores), **Banheiro** (tem *1* valor), **Auto-checkout** (tem *2* valores), **Autosserviço** (tem *2* valores), **Acesso para motos de neve** (tem *3* valores), **Tipo** (tem *3* valores), **Aspirador de pó** (tem *1* valor), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.  

 7. **Finanças**. [Finanças](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) usadas para escritórios de empresas do setor financeiro.  
        Inclui *5* tipos de filtros.  

 8. **Comida**. [Comida](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) inclui todos os locais que entregam comida e bebidas.  
        Inclui *24* tipos de filtros.

 9. **Saúde**. [Saúde](https://wiki.openstreetmap.org/wiki/Healthcare)  inclui serviços prestados por diferentes profissionais em diferentes tipos de instalações.  
        Inclui *13* tipos de filtros.

 10. **Lazer**. [Lazer](https://wiki.openstreetmap.org/wiki/Category:Leisure) inclui vários tipos de locais e instalações para entretenimento.  
        Inclui *15* tipos de filtros.

 11. **Náutico**. Inclui POIs relacionados com tipos Náuticos.  
        Não contém filtros.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Inclui POIs que estão perto de você.  
        Inclui *216* tipos de filtros.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Estacionamento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) inclui instalações utilizadas pelo público, clientes ou outros usuários autorizados para estacionar veículos como carros e caminhões, comumente conhecido como parque de estacionamento (inglês britânico) ou estacionamento (inglês americano).  
        Inclui *34* tipos de filtros.

 14. **Transporte pessoal**. Todos os [tipos de veículos](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) podem estar na sua posse.  
        Inclui *38* tipos de filtros.

 15. **Locais populares (Wikipedia)**. Para pesquisar nesta categoria, precisa de baixar o [mapa da Wikipedia](../plugins/wikipedia.md#overview) da região em que você está interessado.  
        Não contém filtros.

 16. **<Translate android="true" ids="poi_filter_public_transport"/>**. É um sistema de transporte projetado para transportar pessoas para fins públicos, acessível a todos os residentes e visitantes de uma cidade ou região.  
        Inclui *9* tipos de filtros.

 17. **Rotas**. Inclui [rotas OSM](../map/routes/types-of-routes.md) para vários tipos de atividades.  
        Inclui *14* tipos de filtros: **Ponto de controle**, **Nó de rede de ciclismo**, **Nó de rede de caminhada**, **Rede de rotas (ciclismo)**, **Rede de rotas (caminhada)**, **Categoria de ponto de rota**, **Esportes aéreos**, **Ciclismo**, **Condução**, **A pé**, **Motociclismo**, **Outras rotas**, **Esportes aquáticos**, **Esportes de inverno**.

 18. **Visitas turísticas**. É uma atividade em que as pessoas visitam locais ou sítios interessantes para se familiarizarem com eles e desfrutarem da sua beleza, história ou significado.  
        Inclui *8* tipos de filtros.

 19. **Esporte**. Inclui áreas para atividades esportivas.  
        Inclui *11* tipos de filtros.

 20. **Loja**. [Loja](https://wiki.openstreetmap.org/wiki/Key:shop) se refere a uma variedade de estabelecimentos e negócios que oferecem vários bens ou serviços para venda, como mercearias, lojas de roupa, lojas de eletrônica e outros.  
        Inclui *36* tipos de filtros.

 21. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) inclui locais e coisas de interesse específico para turistas, incluindo locais para ver, locais para ficar e coisas e locais que fornecem informações e apoio aos turistas.  
        Inclui *32* tipos de filtros.


### Reorganizar Categorias {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

A funcionalidade Reorganizar Categorias permite a você listar apenas as categorias de que você precisa e organizá-las na ordem em que se sente mais confortável em usá-las.

Descrição e como usar:

- Inicialmente, *a lista é ordenada alfabeticamente.* As categorias criadas também são adicionadas por ordem alfabética.
- As alterações na lista de categorias são feitas para cada perfil separadamente.
- Mova as categorias arrastando-as e soltando-as na posição correta na lista.
- *Para ocultar* categorias desnecessárias, toque no ícone de **menos**.
- **Disponível**. As categorias anteriormente *Ocultas* podem ser devolvidas à lista exibida tocando no ícone de **mais**.
- Use o botão **Redefinir** para o padrão para devolver a lista ao estado padrão.
- As categorias criadas com [Pesquisa Personalizada](#customize-poi-search) ou [Filtros](#save-new-custom-filters) podem ser excluídas usando o ícone **Excluir**.  

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Pesquisa Online {#online-search}

<InfoAndroidOnly />

![Pesquisar POI Android](@site/static/img/search/search_online_2_andr_new.png)  

A **Pesquisa Online** permite encontrar locais, endereços e pontos de interesse em tempo real. O OsmAnd usa o [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), um geocodificador online desenvolvido pelo OpenStreetMap que traduz as consultas de texto dos usuários em coordenadas geográficas e vice-versa.  

A Pesquisa Online inclui as seguintes funcionalidades:

1. **Pesquisa por localização** - Você pode inserir o nome de uma cidade, rua, bairro ou outra localização e o OsmAnd fornecerá resultados que correspondem à consulta.
2. **Geocodificação** - A pesquisa online converte suas consultas de texto em coordenadas geográficas, permitindo uma localização precisa.
3. **Geocodificação inversa** - Você pode inserir coordenadas geográficas e a Pesquisa devolverá a localização correspondente como um nome de cidade, nome de rua ou local no mapa.
4. **Pesquisa por Pontos de Interesse** - Permite pesquisar diferentes pontos por nome ou categoria.

Uso da Pesquisa Online:

- A pesquisa online garante que os dados estão atualizados e que as atualizações estão disponíveis, uma vez que o serviço é constantemente atualizado e usa fontes de dados abertas.
- Oferece uma ampla cobertura de locais e objetos, permitindo a você encontrar locais de interesse em diferentes regiões do mundo.
- As pesquisas online são em tempo real, proporcionando acesso rápido aos resultados da pesquisa.
- Útil em cidades e em autoestradas com boa cobertura de Internet.
- A pesquisa online é conveniente de usar se não houver mapas da região e se for impossível baixá-los.
- *Requer uma conexão à Internet constante e estável.*  

Para melhorar os resultados, antes de usar a ferramenta de Pesquisa, amplie o mapa para se aproximar do local onde precisa encontrar uma localização específica. Se não for encontrado nada nas proximidades, você pode [aumentar o raio de pesquisa](./search-all.md#how-to-use). Ao pesquisar offline, se os resultados necessários não estiverem disponíveis, o OsmAnd sugere usar a pesquisa online.  

Você pode encontrar informações sobre Rotas Online no artigo [Rotas Online](../navigation/routing/online-routing.md).



## Personalizar Pesquisa de POI {#customize-poi-search}

A Personalização da Pesquisa de POI é uma funcionalidade de pesquisa avançada que permite encontrar POIs de diferentes categorias e combiná-los para uma pesquisa mais precisa e personalizada. Ao contrário da pesquisa de POI padrão, que se limita a algumas categorias predefinidas, a pesquisa de POI Personalizada oferece a flexibilidade de selecionar e combinar diferentes tipos de POIs.  

Por exemplo, você pode pesquisar restaurantes e farmácias simultaneamente para encontrar o local mais próximo para jantar e depois tomar seu medicamento. Ou pesquisar o posto de gasolina e o serviço de carro mais próximos quando você tiver um problema com seu carro.  

Esta funcionalidade é especialmente útil em vários casos:  

- *Viagens*. Ao viajar, usando a pesquisa personalizada, você pode encontrar rapidamente diferentes locais de interesse e combiná-los para criar uma rota ideal.
- *Emergências*. Se você precisar encontrar vários tipos de serviços rapidamente, você pode usar uma pesquisa de POI personalizada para obter todas as informações de que você precisa.
- *Pesquisa de serviços próximos*. A Pesquisa Personalizada permite combinar diferentes categorias de POI para uma pesquisa fácil se você precisar encontrar vários tipos de serviços num determinado bairro ou numa determinada seção da rota.

### Filtro de POI Personalizado {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa personalizada Android](@site/static/img/search/search_custom_filter_andr.png)   ![Pesquisa personalizada Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![POI personalizado iOS](@site/static/img/search/custom_poi_ios.png)   ![Tipos de POI personalizados iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![POI personalizado iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Tipos de POI personalizados iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

*O filtro de POI personalizado* inclui conjuntos de categorias de amenidades que consistem em valores relevantes. O OsmAnd permite a você recolher e combinar os tipos de POI necessários de uma ou mais categorias sugeridas.  

Para criar filtros personalizados para encontrar locais no mapa, selecione categorias e subcategorias de interesse relevantes. Você pode [salvar](#save-new-custom-filters) estes filtros para uso posterior ou [editá-los](#edit-an-existing-filter) se necessário. Alternativamente, você pode visualizar os dados filtrados sem salvar, tocando no botão *Mostrar*. No entanto, note que se você não salvar os filtros, todas as seleções serão canceladas assim que você mudar de pesquisa ou sair da ferramenta de pesquisa.

- Cada categoria de amenidade contém uma lista de valores genéricos disponíveis para tipos de POI.
- Você tem a opção de selecioná-los ou desmarcá-los individualmente, tocando no campo do tipo em que você está interessado.
- *Selecionar tudo* - Para fazer isso, selecione o botão de alternância.
- Refine a lista excluindo os desnecessários - Comece a digitar o nome sugerido no campo *Pesquisar tipos de POI*.  

### Categorias e seus Filtros {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Inclui 25 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Quinta, Governo, Aldeia, Ilha, Ilhéu, Habitação isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Vila, Câmara Municipal, Aldeia*.  

2. **Natal**. Inclui 5 tipos de filtros:  
    *Evento de Natal, Mercado de Natal, Pirâmida de Natal, Loja de Natal, Árvore de Natal*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Inclui 16 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Quinta, Governo, Aldeia, Ilha, Ilhéu, Habitação isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Vila, Câmara Municipal, Aldeia*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Inclui 26 tipos de filtros.  

<!--
5. **Infraestrutura de emergência**. Inclui 12 tipos de filtros.  
-->

5. **<Translate android="true" ids="amenity_type_finance"/>**. Inclui 12 tipos de filtros.

6. **Comida**. Inclui 12 tipos de filtros.  

7. **Perigo**. Inclui 5 tipos: *Perigo de avalanche, Perigo de erosão, Perigo de inundação, Perigo nuclear, Estrada escorregadia*. A categoria Perigo inclui tanto POIs com etiquetas hazard=* em nós como segmentos de estrada ou caminho (ways) marcados com a mesma etiqueta, se forem exportados como objetos pesquisáveis. Para uma visão geral visual de todos os ícones de perigo usados no mapa, consulte a seção [Perigo](https://osmand.net/docs/user/map-legend/osmand/#hazard1).

8. **<Translate android="true" ids="amenity_type_healthcare"/>**. Inclui 31 tipos de filtros.

9. **<Translate android="true" ids="amenity_type_leisure"/>**. Inclui 148 tipos de filtros.  

10. **<Translate android="true" ids="amenity_type_man_made"/>**. Inclui 121 tipos de filtros.  

11. **<Translate android="true" ids="amenity_type_military"/>**. Inclui 7 tipos: *Área de perigo, Búnquer militar, Base naval militar, Escritório militar, Campo de tiro militar, Zona militar, Local de explosão nuclear*.  

12. **<Translate android="true" ids="amenity_type_natural"/>**. Inclui 50 tipos de filtros.  

13. **Náutico**. Inclui 41 tipos de filtros.  

14. **<Translate android="true" ids="amenity_type_office"/>**. Inclui 39 tipos de filtros.

15. **Locais populares (Wikipedia)**. Inclui 1 tipo: *Wikipedia*.

<!--
17. **Acesso privado**. Não inclui filtros.
-->

16. **Rotas**. Inclui 15 tipos de filtros.  

17. **Serviço**. Inclui 111 tipos de filtros.

18. **<Translate android="true" ids="amenity_type_sport"/>**. Inclui 119 tipos de filtros.  

19. **Loja**. Inclui 156 tipos de filtros.  

20. **<Translate android="true" ids="amenity_type_tourism"/>**. Inclui 103 tipos de filtros.

21. **Transporte**. Inclui 97 tipos de filtros. 

22. **Viagem**. Inclui 2 tipos de filtros.

23. **Definido pelo usuário**. Inclui 1 tipo: *Código postal definido pelo usuário*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Salvar Novos Filtros Personalizados {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Salvar POI personalizado Android](@site/static/img/search/custom_poi_save_android.png) ![Salvar POI personalizado Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Salvar POI personalizado iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Para **salvar** um filtro personalizado, selecione os tipos de filtro e, em seguida:

- Toque no botão *Mostrar* e selecione o botão *Salvar* para iOS ou o botão com o *ícone que indica a ação de salvar* para Android.
- Insira um nome para a nova categoria.
- Seu filtro aparecerá na lista da *aba Categorias* na ferramenta de Pesquisa.  

Outra forma de **salvar**:

- Selecione *[categoria](#poi-search-by-categories) → [ícone de filtro](#types-of-filters) →* selecione *tipos* de características *→ menu de três pontos → Salvar filtro*.


### Editar um Filtro Existente {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Excluir POI personalizado Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Excluir POI personalizado iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Na tela principal:

- Toque no botão *Lupa* no canto superior esquerdo da tela do dispositivo para abrir o menu *Pesquisar*.
- Selecione a aba *Categorias*.
- Selecione uma categoria personalizada salva e a tela de resultados da pesquisa aparece.
- Toque no ícone *Filtro* ao lado de *Mostrar no Mapa* para abrir a tela *Filtros*.
- Toque no *menu de três pontos*.
- No menu suspenso, selecione **Editar filtro**.
- Para salvar uma pesquisa de POI personalizada após a edição:  
    - Selecione as categorias de POI e os tipos de filtro para elas *→* toque em *Mostrar → menu de três pontos → Salvar como →* insira um novo nome de filtro ou *salve* as alterações no atual.


### Excluir Filtro de POI Personalizado {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Excluir POI personalizado Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Excluir POI personalizado iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Você só pode excluir categorias que foram criadas usando filtros ou pesquisa personalizada.

- Vá para a aba [Categorias](#poi-search-by-categories) e selecione a necessária.
- No campo ao lado de *Mostrar no Mapa*, toque no ícone que representa o *filtro*.
- No menu *Filtros*, toque no *menu de três pontos* ( &#8285; ) localizado no canto superior direito da tela.
- Selecione **Excluir Filtro**.
- ***Você não pode desfazer a exclusão.***


### Excluir Categorias Personalizadas (iOS) {#delete-custom-categories-ios}

![Excluir POI personalizado iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

Uma opção adicional apenas para o aplicativo iOS é **Excluir Categorias Personalizadas**.

- Este item está no final da lista da aba *Categorias*.
- Selecione as categorias desnecessárias item a item ou *Selecionar tudo*.
- Toque no botão **Excluir**.  


## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar Coordenadas](./search-coordinates.md)