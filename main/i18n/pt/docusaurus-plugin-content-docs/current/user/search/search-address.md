---
source-hash: e36caad58f36cfd88f8d8bd575e69fdf2d3e8f63a1d4a934dba6e473f1b95388
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


## Visão geral {#overview}

*Pesquisa por Endereço do OsmAnd* é baseada em dados do OpenStreetMap e permite que você encontre a localização e as direções para um endereço específico a partir de uma lista já classificada, bem como pesquise por código postal ou coordenadas. Esta ferramenta permite que você encontre os endereços necessários em poucos toques, o que reduz o tempo de pesquisa e ajuda caso você não se lembre do endereço exato.

A pesquisa por endereço funciona offline usando mapas baixados. Certifique-se de que o mapa da região em que você está pesquisando esteja instalado. Os resultados dependem dos dados de endereço disponíveis no OpenStreetMap.

O OsmAnd ordena os resultados da pesquisa automaticamente, para que resultados próximos e mais relevantes apareçam mais altos na lista. No Android, você pode alterar a ordem com o chip de classificação no topo da lista de resultados. O chip mostra a opção selecionada. Toque nele e escolha uma das seguintes opções no menu *Ordenar por*:
- *Relevância* — Ordena os resultados pela proximidade com que correspondem à sua consulta.
- *Mais próximo* — Ordena os resultados por distância, com os resultados mais próximos exibidos primeiro.

Também no Android, chips com tipos de objetos, como *Município*, *Cidade*, *Rua* ou *Código postal*, aparecem acima dos resultados. Toque em um chip para mostrar apenas resultados desse tipo. Leia mais em [Ordenar resultados da pesquisa](./search-all.md#sorting-search-results).

No Android, quando o centro do mapa está a mais de 50 m da sua localização e o mapa não segue a sua posição, a pesquisa é executada ao redor do centro do mapa, e o campo de pesquisa mostra *Pesquisar a N km de distância*. Quando o centro do mapa está a mais de 70 km da sua localização, um chip com a área de pesquisa, *Centro do mapa* ou *Minha localização*, aparece ao lado do chip de classificação. Toque nele para escolher onde pesquisar. Leia mais em [Pesquisar ao redor](./search-all.md#search-around).

O OsmAnd oferece várias maneiras de acessar a *ferramenta de Pesquisa*, onde a seção **Pesquisar Endereço** está localizada.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo o levará para a [tela geral](#full-text-search) da ferramenta, onde você pode encontrar a guia *Endereço*.
- Vá para o *Menu* principal do Android → *Pesquisar* → *guia Endereço*.
- Ao se preparar para iniciar uma rota, toque em *Navegação* → *Definir destino* → *campo Pesquisar*.


## Guia Endereço {#address-tab}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.webp)  

</TabItem>

</Tabs>

A guia *Endereço* contém botões para diferentes formas de pesquisar por endereço. Cada botão abre uma lista de opções sugeridas para escolher:

- [**Pesquisar rua em &lt;cidade&gt;**](#select-street) (*Android*) / **Selecionar rua em &lt;cidade&gt;** (*iOS*) — Aparece se você já pesquisou uma cidade antes. A última cidade pesquisada já está definida, então você só precisa digitar o nome da rua e escolhê-la entre as ruas sugeridas.
- [**Primeiro especificar cidade/município/localidade**](#select-city) (*Android*) / **Selecionar cidade** (*iOS*) — Sempre disponível. Abre imediatamente uma lista de cidades, municípios e vilas, ordenada por nome. A lista é refinada conforme você digita.
- [**Pesquisa por código postal**](#postcode-search) — Sempre disponível. Muda o campo de pesquisa para a entrada de código postal. A lista permanece vazia até você digitar pelo menos um caractere, e então os resultados correspondentes aparecem.
- [**Pesquisa por coordenadas**](#coordinates-search) — Sempre disponível. Abre a tela de entrada de coordenadas.

A lista **Cidades mais próximas** é exibida abaixo dos botões e mostra até 15 cidades e municípios ao redor do local de pesquisa, da sua posição ou do centro do mapa. Cada item mostra o nome, seu tipo, *Cidade* ou *Município*, e a distância e a direção a partir do local de pesquisa. No Android, a região também é exibida.

## Pesquisa de texto completo {#full-text-search}

O OsmAnd suporta pesquisa de endereço por texto completo. Isso significa que você pode digitar um endereço diretamente no campo de pesquisa em vez de selecionar cidade → rua → número da casa passo a passo. O mecanismo de pesquisa tenta reconhecer componentes de endereço como:
- cidade;
- rua;
- número da casa;
- código postal;
- nome do local.

Você não precisa inseri-los em uma ordem estrita. **Consultas de exemplo**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Se o endereço completo não for encontrado, o OsmAnd tenta automaticamente consultas simplificadas (por exemplo, removendo palavras extras) para melhorar as chances de encontrar a localização.

Quando uma consulta pode se referir tanto a um endereço quanto a um POI, o OsmAnd prioriza automaticamente a interpretação mais relevante com base no contexto, distância e importância do objeto.

**NOTA:** A pesquisa por endereço funciona apenas dentro de mapas baixados. Os resultados de pesquisa são baseados em:
- mapas instalados no seu dispositivo;
- [a área visível do mapa](./search-all.md#how-to-use);
- sua localização atual. 

### Pesquisa de Endereços nos EUA e Dados TIGER {#us-address-search-and-tiger-data}

O OsmAnd suporta pesquisas de endereço usando dados do OpenStreetMap, mas nos Estados Unidos, os resultados da pesquisa de endereço podem estar incompletos devido ao uso de [dados TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Os dados TIGER fornecem intervalos de endereço, não locais exatos**, o que significa que alguns números de casa podem não ser reconhecidos.
- **Se um endereço não for encontrado**, tente pesquisar *pelo nome da rua* em vez de um número de casa específico.
- Use *identificadores de localização alternativos*, como pontos de referência próximos ou códigos ZIP, para refinar seus resultados de pesquisa.  

### Formatos suportados {#supported-formats}

O OsmAnd suporta vários formatos comuns de endereço. Você pode inserir endereços em diferentes ordens dependendo de como você conhece o endereço.

| Formato de endereço | Consultas de exemplo |
|---|---|
| Número da casa + rua | 221B Baker Street<br />10 Downing Street |
| Número da casa duplo + rua | 243/11 Husova |
| Rua + número da casa | Baker Street 221B<br />Main Street 101 |
| Cidade + rua + número da casa | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Interseções de ruas | Broadway & Wall Street<br />Main Street and High Street |
| Nome da cidade | Berlin<br />Vienna<br />San Francisco |
| Código postal + endereço | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Dicas de Pesquisa {#search-tips}

A pesquisa por endereço no OsmAnd é tolerante a diferentes formatos de entrada. Você pode tentar:
- alterando a ordem das palavras;
- removendo informações extras;
- pesquisando apenas pelo nome da rua.

No entanto, consultas muito curtas ou gerais (por exemplo, “Apple”) podem retornar uma mistura de endereços e POIs, incluindo uma marca, nome de rua ou localidade com o mesmo nome. Para melhorar a precisão, tente adicionar mais detalhes, como nome da cidade, rua ou nome do POI.

O mecanismo de pesquisa também tolera variações comuns no formato de endereço, como ordem diferente de palavras, diferenças de grafia, abreviações ou formatos de número da casa. A tabela abaixo mostra variações típicas de pesquisa que ainda podem retornar o mesmo endereço.

| Variação de pesquisa | Consultas de exemplo | Discussão relacionada |
|---|---|---|
| Variações no nome da rua | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Discussão](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ignorando espaços nos nomes | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Discussão](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Números de casa com sufixos de letra | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Discussão](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Abreviações de rua | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Discussão](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Endereço completo vs endereço simplificado | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Discussão](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Formato de endereço dos EUA | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Discussão](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Abreviações de estado dos EUA | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Discussão](https://github.com/osmandapp/OsmAnd/issues/6824) |


## Selecionar Cidade {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Cidade Android](@site/static/img/search/town_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Cidade iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

Essa forma de pesquisa facilita a localização de locais específicos dentro de uma localidade selecionada, proporcionando uma maneira conveniente de encontrar endereços com precisão e rapidez. Você pode começar a pesquisar o endereço necessário determinando a localidade.

- Para fazer isso, toque em **Primeiro especificar cidade/município/localidade** (Android) ou **Selecionar cidade** (iOS).
- Na lista que se abre, selecione a localidade desejada. [Aqui](#full-text-search) descreve a ordem em que as consultas de pesquisa são exibidas e quais informações estão disponíveis sobre cada item.
- No Android, toque no chip de classificação para escolher *Relevância* ou *Mais próximo*. Quando o centro do mapa está a mais de 70 km da sua localização, use o chip de área de pesquisa para escolher entre *Centro do mapa* e *Minha localização*. Chips com os tipos de localidade encontrados nos resultados, como *Cidade*, *Município* ou *Vila*, aparecem acima da lista. Toque em um chip para mostrar apenas resultados desse tipo.
- Na próxima tela, você pode continuar a refinar o endereço ou mostrar a localidade no mapa. No iOS, toque em *Mostrar no mapa* abaixo do campo de pesquisa. No Android, toque no botão *Mostrar no mapa*, o botão flutuante no canto inferior direito.
- Para especificar sua pesquisa, você pode inserir todo ou apenas parte do nome da cidade, município ou vila onde o endereço que você está procurando está localizado. Isso permite que você restrinja sua pesquisa e obtenha uma lista mais precisa.
- Tocar no último item do endereço, número da casa ou nome do cruzamento, abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do objeto.  

:::note Chave e Valor
*Pesquisa de Cidade / Município / Vila* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: exibindo todos os objetos com este nome.
:::


## Selecionar Rua {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Rua Android](@site/static/img/search/street_search.webp) ![Pesquisar Rua Android](@site/static/img/search/street_search_1.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Rua iOS](@site/static/img/search/address_street_search_3_ios.png) ![Pesquisar Rua Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

A pesquisa de rua é realizada na última cidade que você pesquisou. O nome dela é exibido no botão, então você pode começar pela rua imediatamente.

- Para usar este tipo de pesquisa, toque em **Pesquisar rua em &lt;cidade&gt;** (*Android*) ou **Selecionar rua em &lt;cidade&gt;** (*iOS*).
- O nome da cidade já está inserido no campo de pesquisa, e a lista de suas ruas abre imediatamente. No campo de pesquisa ao lado do nome da cidade, você pode começar a digitar o nome da rua e a lista será refinada, fornecendo os resultados mais apropriados.
- No Android, toque no chip de classificação para escolher *Relevância* ou *Mais próximo*. Quando o centro do mapa está a mais de 70 km da sua localização, use o chip de área de pesquisa para escolher entre *Centro do mapa* e *Minha localização*. Chips com os tipos de objeto encontrados nos resultados, como *Rua* ou *Edifício*, aparecem acima da lista. Toque em um chip para mostrar apenas resultados desse tipo.
- Selecione uma rua para abrir a lista de seus edifícios. Selecione o número da casa desejado para abrir o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do endereço.
- Em outros itens, a pesquisa de rua é a mesma que em [Selecionar Cidade](#select-city).

:::note Chave e Valor
*Pesquisar ruas* por [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Resultado*: todas as ruas com este nome são mostradas.
:::


## Pesquisa por Código Postal {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Código Postal Android](@site/static/img/search/postcode_android.webp)

Toque em **Pesquisa por código postal** na guia *Endereço*. A lista permanece vazia até você começar a digitar. Insira o código postal, até mesmo um único dígito, e o aplicativo oferece uma lista de códigos postais correspondentes.

- Toque no chip de classificação para escolher *Relevância* ou *Mais próximo*. Quando o centro do mapa está a mais de 70 km da sua localização, use o chip de área de pesquisa para escolher entre *Centro do mapa* e *Minha localização*. Toque no chip *Código postal* para mostrar apenas códigos postais na lista.
- Selecione o código postal desejado. A lista de ruas com esse código postal abre, e o código postal permanece no campo de pesquisa.
- Para refinar o endereço, selecione uma rua e depois o número da casa. Isso abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do endereço.
- Para ver o próprio código postal no mapa, toque no botão *Mostrar no mapa*, o botão flutuante no canto inferior direito. O mapa abre com o [menu de contexto](../map/map-context-menu.md#select-an-object-single-tap) do código postal.

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Código Postal iOS](@site/static/img/search/postcode_ios.png)

**Para usar a *Pesquisa por Código Postal*, você só precisa inserir o número**, que pode consistir até mesmo em um único dígito, e o aplicativo oferece uma lista de códigos postais relevantes disponíveis.

- Selecione o código necessário e toque nele.
- Você pode usar o recurso *Mostrar &lt;código postal&gt; no mapa*. Isso abre um [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) com o código postal selecionado sem nenhuma informação adicional sobre o local.
- Você pode refinar sua pesquisa por este código selecionando primeiro a rua necessária na lista e depois o número.

</TabItem>

</Tabs>

**A pesquisa por código postal pode ser útil quando:**

- O nome da rua existe em várias cidades.
- Você sabe o código postal, mas não o endereço exato.

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

[**Pesquisa por Coordenadas**](../search/search-coordinates.md) permite que você especifique coordenadas geográficas, como latitude e longitude, para encontrar um local específico. Ela fornece locais precisos em um mapa em diferentes [formatos de coordenadas](../search/search-coordinates.md#coordinate-format) e permite que você obtenha informações relacionadas. Este recurso pode ser útil quando você não tem um endereço ou nome exato de um local, e pode facilitar o planejamento de viagens e a navegação em locais desconhecidos.


## Artigos Relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Explorar na Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)