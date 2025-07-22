---
source-hash: 451b8efe0bb4fc8a733a523dde0cd088f5c21c5cb00a83e08ca8410c09e04755
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


## Visão Geral {#overview}

A funcionalidade de [Ponto de Interesse (POI) do OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) no OsmAnd oferece precisão, visibilidade e conveniência na localização de lugares, rotas e serviços interessantes perto da sua localização atual ou de uma área selecionada no mapa.

A barra de pesquisa permite inserir palavras-chave relacionadas aos lugares de seu interesse. A pesquisa de POI também apresenta uma lista conveniente classificada por [categoria](#poi-search-by-categories) para ajudar você a encontrar rapidamente o que procura, e o [filtro](#save-new-custom-filters) permite selecionar características específicas de POI para exibir apenas resultados relevantes.

A [Pesquisa Personalizada](#custom-poi-search) aprimora a funcionalidade de pesquisa, permitindo múltiplas escolhas de categorias e subcategorias. Você pode salvar os filtros criados para uso futuro, facilitando a localização rápida de POIs que atendam a critérios ou preferências específicas. Para mais detalhes, consulte a seção sobre como salvar filtros personalizados [aqui](#save-new-custom-filters).

O OsmAnd oferece várias maneiras de acessar a ferramenta de Pesquisa, onde a seção **Pesquisa por Categorias** está localizada.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo levará você à [tela geral](#how-to-use) da ferramenta, onde você pode encontrar a aba *Categorias*.
- Vá para o *Menu principal → Pesquisar → aba Categorias*.
- Ao se preparar para iniciar uma rota, toque em [*Navegação → Definir destino → Campo de pesquisa → aba Categorias*](../navigation/setup/route-navigation.md#set-target-point).
- Vá para o *Menu principal → Configurar mapa → Sobreposição de POI → Pesquisar*.

## Como Usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Todos os tipos de POI no OsmAnd você pode encontrar aqui:* [link do gitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Pesquisa de Ponto de Interesse (POI):**
    - Permite pesquisar:
       - por categorias de pontos de interesse (POI) próximas ou específicas.
       - por [rotas OSM](../map/routes.md).
       - por [Lugares Populares (Wikipedia)](../map/map-context-menu.md#details).

    - Filtros e classificação de resultados por categoria, distância ou avaliação são possíveis.

    - Os resultados da pesquisa mostram a localização do POI, suas informações de contato, avaliações e comentários.

- **Pesquisar POIs por categoria diretamente no mapa**:
    - Você precisa selecionar as categorias necessárias na [**lista**](../map/point-layers-on-map.md#points-of-interest-pois) em *Configurar mapa → Mostrar sobreposição de POI...* e pesquisar por ícones na localização esperada.

    - *Android*: Você pode começar a pesquisar POIs em *Menu → Pesquisar → Categorias*.

- **Pesquisa de marca:**
    - Ao inserir um local comercial ou nome de marca (como Audi, Starbucks ou Aldi), a lista de resultados da pesquisa é ordenada com prioridade pelo nome do POI e classificada pela distância da localização correspondente.

    - O nome da localidade é exibido ao lado de cada resultado da pesquisa para ajudar você a identificar a localização correta entre outras a uma distância similar de você.

    - Este tipo de pesquisa é conveniente de usar se um ponto de venda se especializa na venda de bens ou serviços de uma marca ou se a própria marca é mais conhecida e reconhecível do que o nome ou categoria do POI.

    - Para realizar uma pesquisa, a tag `brand` e os nomes das marcas devem ser adicionados à descrição do POI.

    - Exemplo de uma loja de carros: *Tipo de POI* - Concessionária de carros, *nome* - Octo Automobile, [***nome da marca***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Pesquisar POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Para realizar algumas dessas tarefas (localizar endereços, POI), você precisará ter o arquivo de mapa vetorial offline. Inicialmente, a pesquisa é baseada em dados localizados no mapa na área visível da tela do dispositivo. Se você não encontrar nada, o OsmAnd propõe aumentar o raio de pesquisa.
:::

## Pesquisa de POI por Categorias {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

A ferramenta **Pesquisar por Categorias** permite que você encontre rapidamente objetos, lugares e rotas classificados em diferentes categorias. Cada categoria possui um conjunto único de características, e esta ferramenta possui filtros que permitem refinar os resultados da pesquisa selecionando diferentes valores para características adicionais.

Como funciona:

- *Seleção de Categoria* - Você seleciona a categoria de seu interesse, como restaurantes, hotéis, lojas, rotas OSM, lugares populares da Wikipedia e outros, de uma lista sugerida de categorias.
- *Filtros de Características* - Após selecionar uma categoria, o aplicativo mostra características adicionais que podem ser usadas para refinar a pesquisa. Por exemplo, para a categoria Restaurantes, você pode selecionar filtros como tipo de cozinha (italiana, chinesa, etc.), faixa de preço, avaliação e disponibilidade de estacionamento.
- *Aplicação de Filtros* - Você seleciona os valores necessários nos filtros, e então o aplicativo aplica esses filtros aos resultados da pesquisa para mostrar apenas as propriedades que correspondem às características especificadas.
- *Exibição de resultados* - Após aplicar os filtros, o OsmAnd exibe uma lista com informações breves que correspondem à categoria e às características definidas.

Benefícios:

- *Personalização do Usuário* - Os filtros de recursos permitem que você personalize as pesquisas para atender às suas necessidades e preferências específicas.
- *Resultados Refinados* - Os filtros ajudam a refinar os resultados da pesquisa, tornando-os mais relevantes e precisos.
- *Múltiplas Categorias* - O banco de dados OpenStreetMap possui um extenso conjunto de categorias de POI, permitindo que você encontre locais de diferentes tipos e categorias.

<!--
A pesquisa de categoria de POI permite que você encontre e selecione rapidamente lugares de interesse com base em suas necessidades. É uma ferramenta útil para viajar, encontrar serviços ou lugares de interesse próximos e planejar rotas com base nas categorias de POI selecionadas.

O OsmAnd começa a encontrar nomes e categorias de POI pelas palavras inseridas. Os primeiros resultados serão categorias, os segundos resultados serão POI com informações adicionais, nome completo, nome da categoria, direção e distância para o POI, horário de funcionamento. Pressionar a categoria necessária abre a lista de POI dessa categoria.

Tocar no POI escolhido na lista abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do POI.
-->

### Tipos de Filtros {#types-of-filters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Com a função **Filtro**, você pode selecionar as características necessárias e, como resultado, obter uma lista contendo apenas objetos relevantes. Para usar o filtro:

- Selecione a categoria de seu interesse na lista de categorias.
- Na tela que se abre, toque no ícone que exibe o filtro. Ele está localizado abaixo do campo de entrada, ao lado de *Mostrar no mapa*.
- No filtro, selecione o tipo de características.

![Pesquisar POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Um filtro pode consistir em um grande número de itens, cuja presença depende da categoria selecionada. Cada categoria possui um número de filtros específicos para ela, organizados em pastas por tipo. Existem um total de *22 categorias padrão*. Algumas delas estão listadas aqui:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Acomodação](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) inclui instalações que fornecem hospedagem temporária, como hotéis, motéis, albergues, pousadas e acampamentos. Esses locais oferecem comodidades e serviços para uma estadia confortável durante a viagem.
        Inclui *9* tipos de filtros: **Geladeira** (tem *2* valores), **Aquecimento** (tem *7* valores), **Tipo de acesso à Internet** (tem *3* valores), **Colchão** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Chuveiro** (tem *1* valor), **Fumo** (tem *6* valores), **Classificação por estrelas** (tem *10* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 2. **Café e restaurante**. [Café](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) e [restaurantes](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) representam locais de serviço de alimentação.
        Inclui *16* tipos de filtros: **Trocador** (tem *3* valores), **Café** (tem *2* valores), **Culinária** (mais de *10* valores), **Entrega** (tem *1* valor), **Dieta** (tem *8* valores), **Prato** (mais de *10* valores), **Recarga de água potável** (tem *1* valor), **Drive-in** (tem *1* valor), **Tipo de acesso à Internet** (tem *3* valores), **Microcervejaria** (tem *1* valor), **Produtos orgânicos** (tem *2* valores), **Assentos ao ar livre** (tem *1* valor), **Tipo de pagamento** (mais de *10* valores), **Fumo** (tem *6* valores), **Para viagem** (tem *1* valor), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 3. **Estação de carregamento**. Uma [estação de carregamento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) é uma instalação de infraestrutura onde proprietários de veículos elétricos podem recarregar seus carros, motocicletas ou outros veículos elétricos. Esses pontos fornecem carregadores e conexões apropriadas para fornecer energia às baterias dos veículos.
        Inclui *35* tipos de filtros: **Acesso para bicicletas** (tem *1* valor), **Acesso para ônibus** (tem *1* valor), **Acesso para veículos pesados** (tem *5* valores), **Acesso para automóveis** (tem *1* valor), **Acesso para scooters** (tem *1* valor), **Autenticação por aplicativo** (tem *1* valor), **Autenticação por cartão chip** (tem *1* valor), **Autenticação sem contato** (tem *1* valor), **Autenticação por chave** (tem *1* valor), **Autenticação por exigência** (tem *1* valor), **Autenticação por chamada telefônica** (tem *1* valor), **Autenticação por mensagem curta** (tem *1* valor), **Taxa** (tem *2* valores), **Tipo de acesso à Internet** (tem *3* valores), **Tipo de acesso à Internet** (tem *3* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7, e outros.

 4. **Loja de conveniência e supermercado**. [Loja de conveniência](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) e [supermercado](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) representam instalações de varejo.
        Inclui *13* tipos de filtros: **Compra a granel** (tem *2* valores), **Saque em dinheiro** (tem *5* valores), **Trocador** (tem *3* valores), **Café** (tem *2* valores), **Entrega** (tem *1* valor), **Dieta** (tem *8* valores), **Sorvete** (tem *1* valor), **Produtos orgânicos** (tem *2* valores), **Tipo de pagamento** (mais de *10* valores), **Filtro de segunda mão** (tem *2* valores), **Autoatendimento** (tem *2* valores), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergência](https://wiki.openstreetmap.org/wiki/Key:emergency) inclui instalações e locais associados a serviços de emergência, como hospitais, delegacias de polícia, bombeiros e centros médicos de primeiros socorros.
        Não contém nenhum filtro.

 6. **Posto de combustível**. Um [posto de combustível](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), também conhecido como posto de gasolina, é a instalação de varejo onde veículos motorizados podem ser reabastecidos.
        Inclui *13* tipos de filtros: **Lava-rápido** (tem *2* valores), **Saque em dinheiro** (tem *5* valores), **Ar comprimido** (tem *1* valor), **Tipo de combustível (aviação)** (tem mais de *20* valores), **Cartões de combustível** (tem *5* valores), **Tipo de pagamento** (tem mais de *20* valores), **Autoatendimento** (tem *2* valores), **Acesso para motos de neve** (tem *3* valores), **Banheiro** (mais de *1* valor), **Aspirador de pó** (tem *1* valor), **Bomba de combustível automática** (tem *1* valor), **Acessibilidade para cadeiras de rodas** (tem *4* valores), Aberto agora / Aberto 24/7.

 7. **Finanças**. [Finanças](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) usado para escritórios de empresas do setor financeiro.
        Inclui *5* tipos de filtros.

 8. **Alimentos**. [Alimentos](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) inclui todos os locais que entregam alimentos e bebidas.
        Inclui *24* tipos de filtros.

 9. **Saúde**. [Saúde](https://wiki.openstreetmap.org/wiki/Healthcare) inclui serviços prestados por diferentes profissionais em diferentes tipos de instalações.
        Inclui *13* tipos de filtros.

 10. **Lazer**. [Lazer](https://wiki.openstreetmap.org/wiki/Category:Leisure) inclui vários tipos de lugares e instalações para entretenimento.
        Inclui *15* tipos de filtros.

 11. **Náutico**. Inclui POIs relacionados a tipos Náuticos.
        Não contém nenhum filtro.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Inclui POIs que estão perto de você.
        Inclui *216* tipos de filtros.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Estacionamento](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) inclui instalações usadas pelo público, clientes ou outros usuários autorizados para estacionar veículos como carros e caminhões, comumente conhecido como estacionamento (inglês britânico) ou estacionamento (inglês americano).
        Inclui *34* tipos de filtros.

 14. **Transporte pessoal**. Todos os [tipos de veículos](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) podem estar em sua posse.
        Inclui *38* tipos de filtros.

 15. **Lugares populares (Wikipedia)**. Para pesquisar nesta categoria, você precisa baixar o [mapa da Wikipedia](../plugins/wikipedia.md#overview) da região de seu interesse.
        Não contém nenhum filtro.

 16. **Acesso privado**.
        Inclui *6* tipos de filtros.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. É um sistema de transporte projetado para transportar pessoas para fins públicos, acessível a todos os residentes e visitantes de uma cidade ou região.
        Inclui *9* tipos de filtros.

 18. **Rotas**. Inclui [rotas OSM](../map/routes.md) para vários tipos de atividades.
        Inclui *14* tipos de filtros: **Ponto de controle**, **Nó de rede de ciclismo**, **Nó de rede de caminhada**, **Rede de rotas (ciclismo)**, **Rede de rotas (caminhada)**, **Categoria de ponto de rota**, **Esportes aéreos**, **Ciclismo**, **Condução**, **A pé**, **Motociclismo**, **Outras rotas**, **Esportes aquáticos**, **Esportes de inverno**.

 19. **Passeios turísticos**. É uma atividade em que as pessoas visitam lugares ou locais interessantes para se familiarizar com eles e desfrutar de sua beleza, história ou significado.
        Inclui *8* tipos de filtros.

 20. **Esporte**. Inclui áreas para atividades esportivas.
        Inclui *11* tipos de filtros.

 21. **Loja**. [Loja](https://wiki.openstreetmap.org/wiki/Key:shop) refere-se a uma variedade de estabelecimentos e empresas que oferecem vários bens ou serviços para venda, como mercearias, lojas de roupas, lojas de eletrônicos e outros.
        Inclui *36* tipos de filtros.

 22. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) inclui lugares e coisas de interesse específico para turistas, incluindo lugares para ver, lugares para ficar e coisas e lugares que fornecem informações e suporte aos turistas.
        Inclui *32* tipos de filtros.

 23. **Água**. Fontes de [água potável](https://wiki.openstreetmap.org/wiki/Key:drinking_water) criadas ou arranjadas pelo homem.
        Não contém nenhum filtro.


### Reorganizar Categorias {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

O recurso Reorganizar Categorias permite listar apenas as categorias que você precisa e organizá-las na ordem em que você se sente mais confortável usando-as.

Descrição e como usar:

- Inicialmente, *a lista é classificada em ordem alfabética.* As categorias criadas também são adicionadas em ordem alfabética.
- As alterações na lista de categorias são feitas para cada perfil separadamente.
- Mova as categorias arrastando e soltando-as para a posição correta na lista.
- *Para ocultar* categorias desnecessárias, toque no ícone de **menos**.
- **Disponível**. As categorias *ocultas* anteriormente podem ser retornadas à lista exibida tocando no ícone de **mais**.
- Use o botão **Redefinir** para o padrão para retornar a lista ao estado predefinido.
- As categorias criadas com [Pesquisa Personalizada](#custom-poi-search) ou [Filtros](#save-new-custom-filters) podem ser excluídas usando o ícone **Excluir**.

![Pesquisar POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Pesquisa Online {#online-search}

<InfoAndroidOnly />

![Pesquisar POI Android](@site/static/img/search/search_online_2_andr.png)

A **Pesquisa Online** permite encontrar locais, endereços e pontos de interesse em tempo real. O OsmAnd usa o [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), um geocodificador online desenvolvido pelo OpenStreetMap que traduz consultas de texto dos usuários em coordenadas geográficas e vice-versa ([*exemplo*](#example-of-online-search-query)).

A Pesquisa Online inclui os seguintes recursos:

1. **Pesquisa por localização** - Você pode inserir o nome de uma cidade, rua, bairro ou outra localização e o OsmAnd fornecerá resultados que correspondem à consulta.
2. **Geocodificação** - A pesquisa online converte suas consultas de texto em coordenadas geográficas, permitindo uma localização precisa.
3. **Geocodificação reversa** - Você pode inserir coordenadas geográficas e a Pesquisa retornará a localização correspondente como um nome de cidade, nome de rua ou lugar no mapa.
4. **Pesquisa por Pontos de Interesse** - Permite pesquisar diferentes pontos por nome ou categoria.

Uso da Pesquisa Online:

- A pesquisa online garante que os dados estejam atualizados e que as atualizações estejam disponíveis, pois o serviço é constantemente atualizado e usa fontes de dados abertas.
- Ela oferece uma ampla cobertura de lugares e objetos, permitindo que você encontre lugares de interesse em diferentes regiões do mundo.
- As pesquisas online são em tempo real, fornecendo acesso rápido aos resultados da pesquisa.
- Útil em cidades e em rodovias com boa cobertura de Internet.
- A pesquisa online é conveniente de usar se não houver mapas da região e se for impossível baixá-los.
- *Requer uma conexão de Internet constante e estável.*

![Pesquisar POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Para melhorar os resultados, antes de usar a ferramenta de Pesquisa, amplie o mapa para se aproximar de onde você precisa encontrar um local específico. E durante a pesquisa, você pode **aumentar o raio de pesquisa** para encontrar lugares que estão mais distantes da sua localização. Ao pesquisar offline, se os resultados necessários não estiverem disponíveis, o OsmAnd sugere usar a pesquisa online.

Você pode encontrar informações sobre Navegação Online no artigo [Roteamento Online](../navigation/routing/online-routing.md).

#### Exemplo de Consulta de Pesquisa Online {#example-of-online-search-query}

O *Nominatim* no OsmAnd é usado como um mecanismo de busca para dados do OpenStreetMap, com o qual você pode pesquisar por nome (a pesquisa por endereço está atualmente desabilitada). Cada resultado tem um link para uma página de detalhes para ver quais dados sobre o objeto estão armazenados no banco de dados.

**Exemplo de arquivo XML.** Este arquivo XML não contém nenhuma informação de estilo associada a ele. A árvore do documento é mostrada no [link](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%96+72+&addressdetails=1&limit=300).


## Pesquisa de POI Personalizada {#custom-poi-search}

A Pesquisa de POI Personalizada é um recurso de pesquisa avançado que permite encontrar POIs de diferentes categorias e combiná-los para uma pesquisa mais precisa e personalizada. Ao contrário da pesquisa de POI padrão, que é limitada a algumas categorias predefinidas, a pesquisa de POI Personalizada oferece a flexibilidade de selecionar e combinar diferentes tipos de POIs.

Por exemplo, você pode pesquisar restaurantes e farmácias simultaneamente para encontrar o local mais próximo para jantar e depois tomar seu remédio. Ou pesquisar o posto de gasolina e o serviço de carro mais próximos quando tiver um problema com seu carro.

Essa funcionalidade é especialmente útil em vários casos:

- *Viagem*. Ao viajar, usando a pesquisa personalizada, você pode encontrar rapidamente diferentes pontos de interesse e combiná-los para criar uma rota ideal.
- *Emergências*. Se você precisar encontrar vários tipos de serviços rapidamente, pode usar uma pesquisa de POI personalizada para obter todas as informações necessárias.
- *Pesquisa de serviços próximos*. A Pesquisa Personalizada permite combinar diferentes categorias de POI para facilitar a pesquisa se você precisar encontrar vários tipos de serviços em um determinado bairro ou em uma determinada seção da rota.

### Filtro de POI Personalizado {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="operating-systems">

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

O *filtro de POI personalizado* inclui conjuntos de categorias de comodidades que consistem em valores relevantes. O OsmAnd permite coletar e combinar os tipos de POI necessários de uma ou mais categorias sugeridas.

Para criar filtros personalizados para encontrar lugares no mapa, selecione categorias e subcategorias de interesse relevantes. Você pode [salvar](#save-new-custom-filters) esses filtros para uso posterior ou [editá-los](#edit-an-existing-filter) se necessário. Alternativamente, você pode visualizar os dados filtrados sem salvar, tocando no botão *Mostrar*. No entanto, observe que, se você não salvar os filtros, todas as seleções serão canceladas assim que você mudar de pesquisa ou sair da ferramenta de pesquisa.

- Cada categoria de comodidade contém uma lista de valores genéricos disponíveis para tipos de POI.
- Você tem a opção de selecioná-los ou desmarcá-los individualmente tocando no campo do tipo de seu interesse.
- *Selecionar tudo* - Para fazer isso, selecione o botão de alternância.
- Refinar a lista excluindo os desnecessários - Comece a digitar o nome sugerido no campo *Pesquisar tipos de POI*.

#### Categorias e seus Filtros {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Inclui 25 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Fazenda, Governo, Aldeia, Ilha, Ilhota, Moradia isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Cidade, Prefeitura, Vila*.

2. **Natal**. Inclui 5 tipos de filtros:
    *Evento de Natal, Mercado de Natal, Pirâmide de Natal, Loja de Natal, Árvore de Natal*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Inclui 16 tipos: *Loteamentos, Atol, Bairro, Cidade, Bloco de cidade, País, Tribunal, Alfândega, Escritório diplomático, Fazenda, Governo, Aldeia, Ilha, Ilhota, Moradia isolada, Localidade, Bairro, Polícia, Prisão, Quarteirão, Área residencial, Subúrbio, Cidade, Prefeitura, Vila*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Inclui 14 tipos de filtros.

5. **Infraestrutura de emergência**. Inclui 12 tipos de filtros.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Inclui 12 tipos de filtros.

7. **Alimentos**. Inclui 12 tipos de filtros.

8. **Perigo**. Inclui 5 tipos: *Perigo de avalanche, Perigo de erosão, Perigo de inundação, Perigo nuclear, Estrada escorregadia*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Inclui 31 tipos de filtros.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Inclui 148 tipos de filtros.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Inclui 121 tipos de filtros.

12. **<Translate android="true" ids="amenity_type_military"/>**. Inclui 7 tipos: *Área de perigo, Bunker militar, Base naval militar, Escritório militar, Campo de tiro militar, Zona militar, Local de explosão nuclear*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Inclui 50 tipos de filtros.

14. **Náutico**. Inclui 41 tipos de filtros.

15. **<Translate android="true" ids="amenity_type_office"/>**. Inclui 39 tipos de filtros.

16. **Lugares populares (Wikipedia)**. Inclui 1 tipo: *Wikipedia*.

17. **Acesso privado**. Não inclui nenhum filtro.

18. **Rotas**. Inclui 15 tipos de filtros.

19. **Serviço**. Inclui 111 tipos de filtros.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Inclui 119 tipos de filtros.

21. **Loja**. Inclui 156 tipos de filtros.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Inclui 103 tipos de filtros.

23. **Transporte**. Inclui 97 tipos de filtros.

24. **Definido pelo usuário**. Inclui 1 tipo: *Outro Código Postal Definido pelo Usuário*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Salvar Novos Filtros Personalizados {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">


![Salvar POI personalizado Android](@site/static/img/search/custom_poi_save_android.png) ![Salvar POI personalizado Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Salvar POI personalizado iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Para **salvar** um filtro personalizado, selecione os tipos de filtro e, em seguida:

- Toque no botão *Mostrar* e selecione o botão *Salvar* para iOS ou o botão com o *ícone indicando a ação de salvar* para Android.
- Digite um nome para a nova categoria.
- Seu filtro aparecerá na lista da *aba Categorias* na ferramenta de Pesquisa.

Outra forma de **salvar**:

- Selecione *[categoria](#poi-search-by-categories) → [ícone de filtro](#types-of-filters) →* selecione *tipos* de características *→ menu de três pontos → Salvar filtro*.


### Editar um Filtro Existente {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="operating-systems">

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
- Selecione uma categoria personalizada salva, e a tela de resultados da pesquisa aparecerá.
- Toque no ícone *Filtro* ao lado de *Mostrar no Mapa* para abrir a tela *Filtros*.
- Toque no *menu de três pontos*.
- No menu suspenso, selecione **Editar filtro**.
- Para salvar uma pesquisa de POI personalizada após a edição:
    - Selecione categorias de POI e tipos de filtro para elas *→* toque em *Mostrar → menu de três pontos → Salvar como →* digite um novo nome de filtro ou *salve* as alterações no atual.


### Excluir Filtro de POI Personalizado {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Excluir POI personalizado Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Excluir POI personalizado iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Você só pode excluir categorias que foram criadas usando filtros ou pesquisa personalizada.

- Vá para a aba [Categorias](#poi-search-by-categories) e selecione a desejada.
- No campo ao lado de *Mostrar no Mapa*, toque no ícone que representa o *filtro*.
- No menu *Filtros*, toque no *menu de três pontos* ( &#8285; ) localizado no canto superior direito da tela.
- Selecione **Excluir Filtro**.
- ***Você não pode desfazer a exclusão.***


#### Excluir Categorias Personalizadas (iOS) {#delete-custom-categories-ios}

![Excluir POI personalizado iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Uma opção adicional apenas para o aplicativo iOS é **Excluir Categorias Personalizadas**.

- Este item está no final da lista da aba *Categorias*.
- Selecione as categorias desnecessárias item por item ou *Selecionar tudo*.
- Toque no botão **Excluir**.


## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar Coordenadas](./search-coordinates.md)


> *Última atualização: maio de 2025*