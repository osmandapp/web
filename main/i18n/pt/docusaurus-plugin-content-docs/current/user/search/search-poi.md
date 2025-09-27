---
source-hash: db2ded33609f0ef8017b5258a1878156ee95899ee472c17da54d70d37f1b5789
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


<InfoIncompleteArticle/>


## Visão geral {#overview}

A funcionalidade [Ponto de Interesse (POI) do OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) no OsmAnd oferece precisão, visibilidade e conveniência na localização de locais, rotas e serviços interessantes perto da sua localização atual ou de uma área selecionada no mapa.

A barra de pesquisa permite-lhe introduzir palavras-chave relacionadas com os locais em que está interessado. A pesquisa de POI também apresenta uma lista conveniente ordenada por [categoria](#poi-search-by-categories) para o ajudar a encontrar rapidamente o que procura, e o [filtro](#save-new-custom-filters) permite-lhe selecionar características específicas de POI para apresentar apenas resultados relevantes.

A [Pesquisa Personalizada](#customize-poi-search) melhora a funcionalidade de pesquisa, permitindo múltiplas escolhas de categorias e subcategorias. Pode guardar os filtros criados para utilização futura, facilitando a localização rápida de POIs que satisfaçam critérios ou preferências específicas. Para mais detalhes, consulte a secção sobre como guardar filtros personalizados [aqui](#save-new-custom-filters).

O OsmAnd oferece várias formas de aceder à ferramenta de Pesquisa, onde se encontra a secção **Pesquisa de Categorias**.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre apresentado no mapa, e tocar nele irá levá-lo para o [ecrã geral](#how-to-use) da ferramenta, onde pode encontrar o separador *Categorias*.
- Vá ao *Menu principal → Pesquisar → separador Categorias*.
- Ao preparar-se para iniciar uma rota, toque em [*Navegação → Definir destino → Campo de pesquisa → separador Categorias*](../navigation/setup/route-navigation.md#set-target-point).
- Vá ao *Menu principal → Configurar mapa → Sobreposição de POI → Pesquisar*.

## Como usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Todos os tipos de POI no OsmAnd podem ser encontrados aqui:* [link do github](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Pesquisa de Pontos de Interesse (POI) por tipo e nome**:
    - Permite pesquisar:
       - Pontos de interesse (POI) próximos ou categorias específicas de POI.
       - [Rotas OSM](../map/routes.md) por nome e por número de referência.
       - [Locais populares (Wikipedia)](../map/map-context-menu.md#details).
    - É possível filtrar e ordenar os resultados por categoria, distância ou classificação.

- **Pesquisar POIs no mapa** - Mostrar no mapa:
    1. Pode selecionar as categorias necessárias da [**lista**](../map/point-layers-on-map.md#points-of-interest-pois) em *Configurar mapa → Mostrar sobreposição de POI...* e pesquisar por ícones na localização esperada.
    2. Pode introduzir uma consulta de pesquisa primeiro ou pode começar a pesquisar POIs em *Menu → Pesquisar → Categorias* e depois clicar em **Mostrar no mapa**.

- **Pesquisa de marca**:
    - Pesquisar um estabelecimento comercial por nome de marca (como Audi, Starbucks ou Aldi) é muito semelhante a pesquisar diferentes POIs por tipo, a principal diferença é que a lista de marcas é fornecida dentro do mapa e está sujeita a alterações durante cada atualização.
    - A marca é definida pela etiqueta OSM [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) e o OsmAnd recolhe tipos limitados de marcas por mapa, com um máximo de 1000 marcas por mapa, no entanto, garante que a lista de marcas está alinhada entre os mapas vizinhos.

![Pesquisar POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Para realizar algumas destas tarefas (localizar endereços, POI) precisará de ter o ficheiro de mapa vetorial offline. Inicialmente, a pesquisa baseia-se nos dados localizados no mapa na área visível do ecrã do dispositivo. Se não encontrar nada, o OsmAnd propõe aumentar o raio de pesquisa.
:::

## Pesquisa de POI por Categorias {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

A ferramenta **Pesquisar por Categorias** permite-lhe encontrar rapidamente objetos, locais e rotas classificadas em diferentes categorias. Cada categoria tem um conjunto único de características, e esta ferramenta tem filtros que lhe permitem refinar os resultados da pesquisa selecionando diferentes valores para características adicionais.

Como funciona:

- *Seleção de Categoria* - Seleciona a categoria em que está interessado, como restaurantes, hotéis, lojas, rotas OSM, locais populares da Wikipedia e outros, a partir de uma lista sugerida de categorias.
- *Filtros de Características* - Depois de selecionar uma categoria, a aplicação mostra características adicionais que podem ser usadas para refinar a pesquisa. Por exemplo, para a categoria Restaurantes, pode selecionar filtros como tipo de cozinha (italiana, chinesa, etc.), faixa de preço, classificação e disponibilidade de estacionamento.
- *Aplicação de Filtros* - Seleciona os valores necessários nos filtros e, em seguida, a aplicação aplica esses filtros aos resultados da pesquisa para mostrar apenas as propriedades que correspondem às características especificadas.
- *Exibição de resultados* - Após aplicar os filtros, o OsmAnd exibe uma lista com informações breves que correspondem à categoria e às características definidas.

Benefícios:

- *Personalização do Utilizador* - Os filtros de características permitem-lhe personalizar as pesquisas para satisfazer as suas necessidades e preferências específicas.
- *Resultados Refinados* - Os filtros ajudam a refinar os resultados da pesquisa, tornando-os mais relevantes e precisos.
- *Múltiplas Categorias* - A base de dados OpenStreetMap tem um extenso conjunto de categorias de POI, permitindo-lhe encontrar locais de diferentes tipos e categorias.

<!--
A pesquisa de categorias de POI permite-lhe encontrar e selecionar rapidamente locais de interesse com base nas suas necessidades. É uma ferramenta útil para viajar, encontrar serviços ou locais de interesse próximos e planear rotas com base nas categorias de POI selecionadas.

O OsmAnd começa a encontrar nomes e categorias de POI pelas palavras introduzidas. Os primeiros resultados serão categorias, os segundos resultados serão POI com informações adicionais, nome completo, nome da categoria, direção e distância para o POI, horário de funcionamento. Pressionar a categoria necessária abre a lista de POI dessa categoria.

Tocar no POI escolhido na lista abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do POI.
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

Com a função **Filtro**, pode selecionar as características necessárias e, como resultado, obter uma lista contendo apenas objetos relevantes. Para usar o filtro:

- Selecione a categoria em que está interessado na lista de categorias.
- No ecrã que se abre, toque no ícone que exibe o filtro. Ele está localizado abaixo do campo de entrada, ao lado de *Mostrar no mapa*.
- No filtro, selecione o tipo de características.

![Pesquisar POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Um filtro pode consistir em um número considerável de itens, cuja presença depende da categoria selecionada. Cada categoria tem um número de filtros específicos para ela, organizados em pastas por tipo. Existem um total de *22 categorias padrão*. Algumas delas estão listadas aqui:

1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Alojamento](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) inclui instalações que fornecem alojamento temporário, como hotéis, motéis, hostels, pensões e parques de campismo. Estes locais oferecem comodidades e serviços para uma estadia confortável durante a viagem.
        Inclui *9* tipos de filtros: **Frigorífico** (tem *2* valores), **Aquecimento** (tem *7* valores), **Tipo de acesso à Internet** (tem *3* valores), **Colchão** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Chuveiro** (tem *1* valor), **Fumar** (tem *6* valores), **Classificação por estrelas** (tem *10* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

2. **Café e restaurante**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) e [restaurantes](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) representam locais de serviço de alimentação.
        Inclui *16* tipos de filtros: **Mesa de troca** (tem *3* valores), **Café** (tem *2* valores), **Culinária** (mais de *10* valores), **Entrega** (tem *1* valor), **Dieta** (tem *8* valores), **Prato** (mais de *10* valores), **Recarga de água potável** (tem *1* valor), **Drive-in** (tem *1* valor), **Tipo de acesso à Internet** (tem *3* valores), **Microcervejaria** (tem *1* valor), **Produtos orgânicos** (tem *2* valores), **Lugares ao ar livre** (tem *1* valor), **Tipo de pagamento** (mais de *10* valores), **Fumar** (tem *6* valores), **Takeaway** (tem *1* valor), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

3. **Estação de carregamento**. Uma [estação de carregamento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) é uma infraestrutura onde os proprietários de veículos elétricos podem recarregar os seus carros, motos ou outros veículos elétricos. Estes pontos fornecem carregadores e ligações apropriadas para fornecer energia às baterias dos veículos.
        Inclui *35* tipos de filtros: **Acesso para bicicletas** (tem *1* valor), **Acesso para autocarros** (tem *1* valor), **Acesso para veículos pesados** (tem *5* valores), **Acesso para automóveis** (tem *1* valor), **Acesso para scooters** (tem *1* valor), **Autenticação por aplicação** (tem *1* valor), **Autenticação por cartão com chip** (tem *1* valor), **Autenticação sem contacto** (tem *1* valor), **Autenticação por chave** (tem *1* valor), **Autenticação obrigatória** (tem *1* valor), **Autenticação por chamada telefónica** (tem *1* valor) **Autenticação por mensagem curta** (tem *1* valor), **Taxa** (tem *2* valores), **Tipo de acesso à Internet** (tem *3* valores), **Tipo de acesso à Internet** (tem *3* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7, e outros.

4. **Loja de conveniência e supermercado**. [Loja de conveniência](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) e [supermercado](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) representam instalações de retalho.
        Inclui *13* tipos de filtros: **Compra a granel** (tem *2* valores), **Levantamento de dinheiro** (tem *5* valores), **Mesa de troca** (tem *3* valores), **Café** (tem *2* valores), **Entrega** (tem *1* valor), **Dieta** (tem *8* valores), **Gelado** (tem *1* valor), **Produtos orgânicos** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Filtro de segunda mão** (tem *2* valores), **Auto-checkout** (tem *2* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergência](https://wiki.openstreetmap.org/wiki/Key:emergency) inclui instalações e locais associados a serviços de emergência, como hospitais, esquadras de polícia, quartéis de bombeiros e centros médicos de primeiros socorros.
        Não contém filtros.

6. **Posto de abastecimento**. Um [posto de combustível](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), também conhecido como posto de abastecimento, posto de gasolina e garagem de gasolina. É a instalação de tipo retalhista onde os veículos motorizados podem ser reabastecidos.
        Inclui *13* tipos de filtros: **Lavagem de carros** (tem *2* valores), **Levantamento de dinheiro** (tem *5* valores), **Ar comprimido** (tem *1* valor), **Tipo de combustível (avia)** (tem mais de *20* valores), **Cartões de combustível** (tem *5* valores), **Tipo de pagamento** (tem mais de *20* valores), **Auto-checkout** (tem *2* valores), **Acesso para motos de neve** (tem *3* valores), **Casa de banho** (mais de *1* valor), **Aspirador de pó** (tem *1* valor), **Dispensador automático de combustível** (tem *1* valor), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

7. **Finanças**. [Finanças](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) usadas para escritórios de empresas do setor financeiro.
        Inclui *5* tipos de filtros.

8. **Comida**. [Comida](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) inclui todos os locais que entregam comida e bebidas.
        Inclui *24* tipos de filtros.

9. **Saúde**. [Saúde](https://wiki.openstreetmap.org/wiki/Healthcare) inclui serviços prestados por diferentes profissionais em diferentes tipos de instalações.
        Inclui *13* tipos de filtros.

10. **Lazer**. [Lazer](https://wiki.openstreetmap.org/wiki/Category:Leisure) inclui vários tipos de locais e instalações para entretenimento.
        Inclui *15* tipos de filtros.

11. **Náutico**. Inclui POIs relacionados com tipos Náuticos.
        Não contém filtros.

12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Inclui POIs que estão perto de si.
        Inclui *216* tipos de filtros.

13. **<Translate android="true" ids="poi_filter_parking"/>**. [Estacionamento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) inclui instalações utilizadas pelo público, clientes ou outros utilizadores autorizados para estacionar veículos como carros e camiões, comummente conhecido como parque de estacionamento (inglês britânico) ou estacionamento (inglês americano).
        Inclui *34* tipos de filtros.

14. **Transporte pessoal**. Todos os [tipos de veículos](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) podem estar na sua posse.
        Inclui *38* tipos de filtros.

15. **Locais populares (Wikipedia)**. Para pesquisar nesta categoria, precisa de descarregar o [mapa da Wikipedia](../plugins/wikipedia.md#overview) da região em que está interessado.
        Não contém filtros.

16. **Acesso privado**.
        Inclui *6* tipos de filtros.

17. **<Translate android="true" ids="poi_filter_public_transport"/>**. É um sistema de transporte concebido para transportar pessoas para fins públicos, acessível a todos os residentes e visitantes de uma cidade ou região.
        Inclui *9* tipos de filtros.

18. **Rotas**. Inclui [rotas OSM](../map/routes.md) para vários tipos de atividades.
        Inclui *14* tipos de filtros: **Ponto de controlo**, **Nó de rede de ciclismo**, **Nó de rede de caminhada**, **Rede de rotas (ciclismo)**, **Rede de rotas (caminhada)**, **Categoria de ponto de rota**, **Desportos aéreos**, **Ciclismo**, **Condução**, **A pé**, **Motociclismo**, **Outras rotas**, **Desportos aquáticos**, **Desportos de inverno**.

19. **Turismo**. É uma atividade em que as pessoas visitam locais ou sítios interessantes para se familiarizarem com eles e desfrutarem da sua beleza, história ou significado.
        Inclui *8* tipos de filtros.

20. **Desporto**. Inclui áreas para atividades desportivas.
        Inclui *11* tipos de filtros.

21. **Loja**. [Loja](https://wiki.openstreetmap.org/wiki/Key:shop) refere-se a uma variedade de estabelecimentos e negócios que oferecem vários bens ou serviços para venda, como mercearias, lojas de roupa, lojas de eletrónica e outros.
        Inclui *36* tipos de filtros.

22. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) inclui locais e coisas de interesse específico para turistas, incluindo locais para ver, locais para ficar e coisas e locais que fornecem informações e apoio aos turistas.
        Inclui *32* tipos de filtros.

23. **Água**. Fontes de [água potável](https://wiki.openstreetmap.org/wiki/Key:drinking_water) criadas ou arranjadas pelo homem.
        Não contém filtros.


### Reorganizar Categorias {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

A funcionalidade Reorganizar Categorias permite-lhe listar apenas as categorias de que necessita e organizá-las na ordem em que se sente mais confortável a utilizá-las.

Descrição e como usar:

- Inicialmente, *a lista é ordenada alfabeticamente.* As categorias criadas também são adicionadas por ordem alfabética.
- As alterações na lista de categorias são feitas para cada perfil separadamente.
- Mova as categorias arrastando-as e largando-as na posição correta na lista.
- *Para ocultar* categorias desnecessárias, toque no ícone de **menos**.
- **Disponível**. As categorias anteriormente *Ocultas* podem ser devolvidas à lista exibida tocando no ícone de **mais**.
- Use o botão **Repor** para o padrão para devolver a lista ao estado predefinido.
- As categorias criadas com [Pesquisa Personalizada](#customize-poi-search) ou [Filtros](#save-new-custom-filters) podem ser eliminadas usando o ícone **Eliminar**.

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)

### Pesquisa Online {#online-search}

<InfoAndroidOnly />

![Pesquisar POI Android](@site/static/img/search/search_online_2_andr.png)

A **Pesquisa Online** permite encontrar locais, endereços e pontos de interesse em tempo real. O OsmAnd utiliza o [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), um geocodificador online desenvolvido pelo OpenStreetMap que traduz as consultas de texto dos utilizadores em coordenadas geográficas e vice-versa.

A Pesquisa Online inclui as seguintes funcionalidades:

1. **Pesquisa por localização** - Pode introduzir o nome de uma cidade, rua, bairro ou outra localização e o OsmAnd fornecerá resultados que correspondem à consulta.
2. **Geocodificação** - A pesquisa online converte as suas consultas de texto em coordenadas geográficas, permitindo uma localização precisa.
3. **Geocodificação inversa** - Pode introduzir coordenadas geográficas e a Pesquisa devolverá a localização correspondente como um nome de cidade, nome de rua ou local no mapa.
4. **Pesquisa por Pontos de Interesse** - Permite pesquisar diferentes pontos por nome ou categoria.

Utilização da Pesquisa Online:

- A pesquisa online garante que os dados estão atualizados e que as atualizações estão disponíveis, uma vez que o serviço é constantemente atualizado e utiliza fontes de dados abertas.
- Oferece uma ampla cobertura de locais e objetos, permitindo-lhe encontrar locais de interesse em diferentes regiões do mundo.
- As pesquisas online são em tempo real, proporcionando acesso rápido aos resultados da pesquisa.
- Útil em cidades e em autoestradas com boa cobertura de Internet.
- A pesquisa online é conveniente de usar se não houver mapas da região e se for impossível descarregá-los.
- *Requer uma ligação à Internet constante e estável.*

![Pesquisar POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Para melhorar os resultados, antes de usar a ferramenta de Pesquisa, amplie o mapa para se aproximar do local onde precisa de encontrar uma localização específica. E durante a pesquisa, pode **aumentar o raio de pesquisa** para encontrar locais que estão mais longe da sua localização. Ao pesquisar offline, se os resultados necessários não estiverem disponíveis, o OsmAnd sugere usar a pesquisa online.

Pode encontrar informações sobre Navegação Online no artigo [Rotas Online](../navigation/routing/online-routing.md).

## Personalizar Pesquisa de POI {#customize-poi-search}

A Personalização da Pesquisa de POI é uma funcionalidade de pesquisa avançada que permite encontrar POIs de diferentes categorias e combiná-los para uma pesquisa mais precisa e personalizada. Ao contrário da pesquisa de POI padrão, que se limita a algumas categorias predefinidas, a pesquisa de POI Personalizada oferece a flexibilidade de selecionar e combinar diferentes tipos de POIs.

Por exemplo, pode pesquisar restaurantes e farmácias simultaneamente para encontrar o local mais próximo para jantar e depois tomar o seu medicamento. Ou pesquisar o posto de gasolina e o serviço de carro mais próximos quando tiver um problema com o seu carro.

Esta funcionalidade é especialmente útil em vários casos:

- *Viagens*. Ao viajar, usando a pesquisa personalizada, pode encontrar rapidamente diferentes locais de interesse e combiná-los para criar uma rota ideal.
- *Emergências*. Se precisar de encontrar vários tipos de serviços rapidamente, pode usar uma pesquisa de POI personalizada para obter todas as informações de que necessita.
- *Pesquisa de serviços próximos*. A Pesquisa Personalizada permite combinar diferentes categorias de POI para uma pesquisa fácil se precisar de encontrar vários tipos de serviços num determinado bairro ou numa determinada secção da rota.

### Filtro de POI Personalizado {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa personalizada Android](@site/static/img/search/search_custom_filter_andr.png) ![Pesquisa personalizada Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![POI personalizado iOS](@site/static/img/search/custom_poi_ios.png) ![Tipos de POI personalizados iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![POI personalizado iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Tipos de POI personalizados iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

*O filtro de POI personalizado* inclui conjuntos de categorias de amenidades que consistem em valores relevantes. O OsmAnd permite-lhe recolher e combinar os tipos de POI necessários de uma ou mais categorias sugeridas.

Para criar filtros personalizados para encontrar locais no mapa, selecione categorias e subcategorias de interesse relevantes. Pode [guardar](#save-new-custom-filters) estes filtros para uso posterior ou [editá-los](#edit-an-existing-filter) se necessário. Alternativamente, pode visualizar os dados filtrados sem guardar, tocando no botão *Mostrar*. No entanto, note que se não guardar os filtros, todas as seleções serão canceladas assim que mudar de pesquisa ou sair da ferramenta de pesquisa.

- Cada categoria de amenidade contém uma lista de valores genéricos disponíveis para tipos de POI.
- Tem a opção de selecioná-los ou desmarcá-los individualmente, tocando no campo do tipo em que está interessado.
- *Selecionar tudo* - Para fazer isso, selecione o botão de alternância.
- Refine a lista excluindo os desnecessários - Comece a digitar o nome sugerido no campo *Pesquisar tipos de POI*.

### Categorias e seus Filtros {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Inclui 25 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Quinta, Governo, Aldeia, Ilha, Ilhéu, Habitação isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Vila, Câmara Municipal, Aldeia*.

2. **Natal**. Inclui 5 tipos de filtros:
    *Evento de Natal, Mercado de Natal, Pirâmide de Natal, Loja de Natal, Árvore de Natal*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Inclui 16 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Quinta, Governo, Aldeia, Ilha, Ilhéu, Habitação isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Vila, Câmara Municipal, Aldeia*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Inclui 14 tipos de filtros.

5. **Infraestrutura de emergência**. Inclui 12 tipos de filtros.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Inclui 12 tipos de filtros.

7. **Comida**. Inclui 12 tipos de filtros.

8. **Perigo**. Inclui 5 tipos: *Perigo de avalanche, Perigo de erosão, Perigo de inundação, Perigo nuclear, Estrada escorregadia*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Inclui 31 tipos de filtros.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Inclui 148 tipos de filtros.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Inclui 121 tipos de filtros.

12. **<Translate android="true" ids="amenity_type_military"/>**. Inclui 7 tipos: *Área de perigo, Búnquer militar, Base naval militar, Escritório militar, Campo de tiro militar, Zona militar, Local de explosão nuclear*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Inclui 50 tipos de filtros.

14. **Náutico**. Inclui 41 tipos de filtros.

15. **<Translate android="true" ids="amenity_type_office"/>**. Inclui 39 tipos de filtros.

16. **Locais populares (Wikipedia)**. Inclui 1 tipo: *Wikipedia*.

17. **Acesso privado**. Não inclui filtros.

18. **Rotas**. Inclui 15 tipos de filtros.

19. **Serviço**. Inclui 111 tipos de filtros.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Inclui 119 tipos de filtros.

21. **Loja**. Inclui 156 tipos de filtros.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Inclui 103 tipos de filtros.

23. **Transporte**. Inclui 97 tipos de filtros.

24. **Definido pelo utilizador**. Inclui 1 tipo: *Código postal definido pelo utilizador*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Guardar Novos Filtros Personalizados {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Guardar POI personalizado Android](@site/static/img/search/custom_poi_save_android.png) ![Guardar POI personalizado Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Guardar POI personalizado iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Para **guardar** um filtro personalizado, selecione os tipos de filtro e, em seguida:

- Toque no botão *Mostrar* e selecione o botão *Guardar* para iOS ou o botão com o *ícone que indica a ação de guardar* para Android.
- Introduza um nome para a nova categoria.
- O seu filtro aparecerá na lista do *separador Categorias* na ferramenta de Pesquisa.

Outra forma de **guardar**:

- Selecione *[categoria](#poi-search-by-categories) → [ícone de filtro](#types-of-filters) →* selecione *tipos* de características *→ menu de três pontos → Guardar filtro*.

### Editar um Filtro Existente {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminar POI personalizado Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar POI personalizado iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

No ecrã principal:

- Toque no botão *Lupa* no canto superior esquerdo do ecrã do dispositivo para abrir o menu *Pesquisar*.
- Selecione o separador *Categorias*.
- Selecione uma categoria personalizada guardada e o ecrã de resultados da pesquisa aparece.
- Toque no ícone *Filtro* ao lado de *Mostrar no Mapa* para abrir o ecrã *Filtros*.
- Toque no *menu de três pontos*.
- No menu pendente, selecione **Editar filtro**.
- Para guardar uma pesquisa de POI personalizada após a edição:
    - Selecione as categorias de POI e os tipos de filtro para elas *→* toque em *Mostrar → menu de três pontos → Guardar como →* introduza um novo nome de filtro ou *guarde* as alterações no atual.

### Eliminar Filtro de POI Personalizado {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminar POI personalizado Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminar POI personalizado iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Só pode eliminar categorias que foram criadas usando filtros ou pesquisa personalizada.

- Vá para o separador [Categorias](#poi-search-by-categories) e selecione a necessária.
- No campo ao lado de *Mostrar no Mapa*, toque no ícone que representa o *filtro*.
- No menu *Filtros*, toque no *menu de três pontos* ( &#8285; ) localizado no canto superior direito do ecrã.
- Selecione **Eliminar Filtro**.
- ***Não pode anular a eliminação.***

### Eliminar Categorias Personalizadas (iOS) {#delete-custom-categories-ios}

![Eliminar POI personalizado iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Uma opção adicional apenas para a aplicação iOS é **Eliminar Categorias Personalizadas**.

- Este item está no final da lista do separador *Categorias*.
- Selecione as categorias desnecessárias item a item ou *Selecionar tudo*.
- Toque no botão **Eliminar**.

## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar Coordenadas](./search-coordinates.md)