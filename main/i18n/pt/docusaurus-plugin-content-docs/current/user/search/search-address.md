---
source-hash: 7aa187a96947b5ca65aab12d710ed0867ffb5db9a42f53d9dfb15a99a9107f74
sidebar_position: 2
title: Pesquisar Endereço
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>

## Visão geral {#overview}

*A Pesquisa por Endereço do OsmAnd* é baseada em dados do OpenStreetMap e permite que você encontre a localização e as direções para um endereço específico a partir de uma lista já classificada, bem como pesquisar por código postal ou coordenadas. Essa ferramenta permite que você encontre os endereços necessários em poucos toques, o que reduz o tempo de pesquisa e ajuda caso você não se lembre do endereço exato.

O OsmAnd oferece várias maneiras de acessar a *ferramenta de Pesquisa* onde a seção **Pesquisar Endereço** está localizada.

- O [botão de Pesquisa](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo o levará para a [tela geral](#full-text-search) da ferramenta, onde você pode encontrar a guia *Endereço*.
- Vá para o *Menu* principal do Android *→ Pesquisar → guia Endereço*.
- Ao se preparar para iniciar uma rota, toque em *Navegação → Definir destino → Campo de pesquisa*.

## Pesquisa de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

A Pesquisa por Endereço simplifica o processo de pesquisa e navegação, garante precisão e usabilidade, e reduz o tempo necessário para encontrar o endereço certo.

- **Para usar a função Pesquisar Endereço,** você precisa [baixar um mapa](../start-with/download-maps.md) da área necessária primeiro.
- **A pesquisa é baseada nos dados localizados na área visível do mapa** na tela do dispositivo. Se você não encontrar nada, o OsmAnd oferece para aumentar o raio de pesquisa.
- As informações de endereço no OsmAnd contêm todas as [chaves de tag OSM](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).

Lista de consultas de pesquisa:

**1.** A **ordem** dos itens na lista:

- **Ordenado por nome**. Selecionar *Primeiro especificar cidade/localidade* (Android) ou *Selecionar cidade* (iOS) exibirá uma lista que começa com itens sem nome, se houver, depois nomes numéricos seguidos pelos nomes por letras.
- **Ordem numérica crescente**. Na próxima lista de pesquisa, os números das casas são exibidos em ordem crescente, após inserir a cidade e a rua.

**2.** Cada campo na lista de Pesquisa de Endereço contém **informações** como:

- Um ícone que identifica o tipo de localidade.
- Parte de um endereço, número postal ou área de coordenadas.
- Distância da sua localização atual ou do centro da cidade.
- Informações adicionais, como o distrito da cidade.

#### Pesquisa de Endereço nos EUA e Dados TIGER {#us-address-search-and-tiger-data}

O OsmAnd suporta pesquisas de endereço usando dados do OpenStreetMap, mas nos Estados Unidos, os resultados da pesquisa de endereço podem ser incompletos devido ao uso de [dados TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Os dados TIGER fornecem intervalos de endereço, não localizações exatas**, o que significa que alguns números de casa podem não ser reconhecidos.
- **Se um endereço não for encontrado**, tente pesquisar *pelo nome da rua* em vez de um número de casa específico.
- Use *identificadores de localização alternativos*, como pontos de referência próximos ou códigos postais, para refinar seus resultados de pesquisa.

### Formatos suportados {#supported-formats}

Consulte o artigo [Pesquisar Tudo](./search-all.md#basic-queries) para obter uma lista de consultas disponíveis e formatos de pesquisa suportados.

## Selecionar Cidade {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Rua Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Rua iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Cidades mais próximas**
Isso **exibe uma pequena lista de cidades ao redor da sua localização** ou da localidade que você especificou para *Selecionar rua* ou *Selecionar cidade*. Cada campo contém um ícone correspondente ao tamanho da cidade, o nome da cidade, a distância de você até o centro dela, e para Android a direção da bússola.

Essa forma de pesquisa facilita a localização de locais específicos dentro de uma localidade selecionada, proporcionando uma maneira conveniente de encontrar endereços com precisão e rapidez. Você pode começar a pesquisar o endereço necessário determinando a localidade.

- Para fazer isso, toque em **Primeiro especificar cidade/localidade** (Android) ou **Selecionar cidade** (iOS).
- Na lista que se abre, selecione a localidade desejada. [Aqui](#full-text-search) descreve a ordem em que as consultas de pesquisa são exibidas e quais informações estão disponíveis sobre cada item.
- Na próxima tela, você pode continuar a refinar o endereço ou selecionar o botão *Mostrar no mapa* abaixo do campo de entrada de pesquisa.
- Para especificar sua pesquisa, você pode inserir todo ou apenas parte do nome da cidade, vila ou aldeia onde o endereço que você está procurando está localizado. Isso permite que você restrinja sua pesquisa e obtenha uma lista mais precisa.
- Tocar no último item do endereço, número da casa ou nome da interseção, abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do objeto.

**A pesquisa por cidade oferece os seguintes benefícios:**

- *Conveniência*. Permite que você selecione rapidamente a cidade desejada na lista e especifique uma determinada rua, casa ou interseção na cidade selecionada sem ter que inserir o endereço completo. Isso economiza tempo e simplifica o processo de encontrar o lugar certo.
- *Precisão.* Você pode selecionar uma cidade e rua entre as opções disponíveis, evitando erros ao inserir um endereço manualmente.
- *Filtragem.* A capacidade de selecionar uma casa específica na lista facilita a navegação precisa para o local desejado, especialmente quando o endereço exato é desconhecido.

:::note Chave e Valor
*Pesquisa de Cidade / Vila / Aldeia* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultado*: exibindo todos os objetos com este nome.
:::

## Selecionar Rua {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Rua Android](@site/static/img/search/street_search.png) ![Pesquisar Rua Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Rua iOS](@site/static/img/search/address_street_search_3_ios.png) ![Pesquisar Rua Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

A pesquisa de rua é realizada na localidade onde você está, ou onde você pesquisou antes, ou que está no centro do mapa visível na tela do aplicativo.

- Para usar este tipo de pesquisa, toque em **Pesquisar Rua** (*Android*) ou **Selecionar Rua** (*iOS*).
- No campo de pesquisa ao lado do nome da cidade, você pode começar a digitar o nome da rua e a lista será refinada, dando os resultados mais apropriados.
- Em outros itens, a pesquisa de rua é a mesma que em [Selecionar Cidade](#select-city).

:::note Chave e Valor
*Pesquisar ruas* por [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)
*Resultado*: todas as ruas com este nome são mostradas.
:::

## Pesquisa por Código Postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Código Postal Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Código Postal iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Para usar a *pesquisa por Código Postal*, você só precisa inserir o número**, que pode consistir até mesmo em um único dígito, e o aplicativo oferece uma lista de códigos postais relevantes disponíveis.

- Selecione o código necessário e toque nele.
- Você pode usar o recurso *Mostrar *número do código postal* no mapa*. Isso abre um [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) com o código postal selecionado sem nenhuma informação adicional sobre a localização.
- Você pode refinar sua pesquisa por este código selecionando primeiro a rua necessária na lista e depois o número.

**A pesquisa por código postal pode ser útil nos seguintes casos:**

- *Encontrar endereços*. Ao inserir um código postal, o OsmAnd identifica a área correspondente e sugere endereços nessa área. Isso é especialmente útil se você souber o código postal, mas não souber o endereço exato.
- *Precisão da navegação*. Em casos onde o endereço não é certo, ou onde o nome da rua pode ser repetido em diferentes áreas, usar um código postal pode fornecer a melhor rota para um determinado endereço.
- *Conveniência e velocidade*. A pesquisa por código postal permite que você encontre informações rapidamente, especialmente se você souber o código postal, mas não tiver certeza do endereço. Em vez de inserir o endereço completo, você pode inserir apenas o código e obter resultados relevantes.

:::note
Para mais informações, leia os **[dados de Código Postal do Reino Unido](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::

## Pesquisa por Coordenadas {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

A [**Pesquisa por Coordenadas**](../search/search-coordinates.md) permite que você especifique coordenadas geográficas, como latitude e longitude, para encontrar um local específico. Ela fornece localizações precisas em um mapa em diferentes [formatos de coordenadas](../search/search-coordinates.md#coordinates-search) e permite que você obtenha informações relacionadas. Esse recurso pode ser útil quando você não tem um endereço ou nome exato de um local, e pode facilitar o planejamento de viagens e a navegação em lugares desconhecidos.

## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)

> *Última atualização: Julho de 2024*