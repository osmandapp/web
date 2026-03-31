---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
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

O OsmAnd oferece várias maneiras de acessar a *ferramenta de Pesquisa*, onde a seção **Pesquisar Endereço** está localizada.

- O [botão Pesquisar](../widgets/map-buttons.md#search) é sempre exibido no mapa, e tocá-lo o levará para a [tela geral](#full-text-search) da ferramenta, onde você pode encontrar a guia *Endereço*.
- Vá para o *Menu* principal do Android → *Pesquisar* → *guia Endereço*.
- Ao se preparar para iniciar uma rota, toque em *Navegação* → *Definir destino* → *campo Pesquisar*.


## Pesquisa de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

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

**NOTA:** A pesquisa por endereço funciona apenas dentro de mapas baixados. Os resultados de pesquisa são baseados em:
- mapas instalados no seu dispositivo;
- a área visível do mapa;
- sua localização atual. 

Se nada for encontrado, o OsmAnd pode sugerir aumentar o raio de pesquisa.

### Pesquisa de Endereços nos EUA e Dados TIGER {#us-address-search-and-tiger-data}

O OsmAnd suporta pesquisas de endereço usando dados do OpenStreetMap, mas nos Estados Unidos, os resultados da pesquisa de endereço podem estar incompletos devido ao uso de [dados TIGER](https://wiki.openstreetmap.org/wiki/TIGER).

- **Os dados TIGER fornecem intervalos de endereço, não locais exatos**, o que significa que alguns números de casa podem não ser reconhecidos.
- **Se um endereço não for encontrado**, tente pesquisar *pelo nome da rua* em vez de um número de casa específico.
- Use *identificadores de localização alternativos*, como pontos de referência próximos ou códigos postais, para refinar seus resultados de pesquisa.

### Formatos suportados {#supported-formats}

O OsmAnd suporta vários formatos comuns de endereço. Você pode inserir endereços em diferentes ordens dependendo de como você conhece o endereço.

| Formato de endereço | Consultas de exemplo |
|---|---|
| Número da casa + rua | 221B Baker Street<br />10 Downing Street |
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

![Pesquisar Rua Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Rua iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Cidades mais próximas**  
    Isso **exibe uma pequena lista de cidades ao redor da sua localização** ou da localidade que você especificou para *Selecionar rua* ou *Selecionar cidade*. Cada campo contém um ícone correspondente ao tamanho da cidade, o nome da cidade, a distância de você até o centro dela e, para Android, a direção da bússola.

Essa forma de pesquisa facilita a localização de locais específicos dentro de uma localidade selecionada, proporcionando uma maneira conveniente de encontrar endereços com precisão e rapidez. Você pode começar a pesquisar o endereço necessário determinando a localidade.

- Para fazer isso, toque em **Primeiro especificar cidade/município/localidade** (Android) ou **Selecionar cidade** (iOS).
- Na lista que se abre, selecione a localidade desejada. [Aqui](#full-text-search) descreve a ordem em que as consultas de pesquisa são exibidas e quais informações estão disponíveis sobre cada item.
- Na próxima tela, você pode continuar a refinar o endereço ou selecionar o botão *Mostrar no mapa* abaixo do campo de entrada de pesquisa.
- Para especificar sua pesquisa, você pode inserir todo ou apenas parte do nome da cidade, município ou vila onde o endereço que você está procurando está localizado. Isso permite que você restrinja sua pesquisa e obtenha uma lista mais precisa.
- Tocar no último item do endereço, número da casa ou nome do cruzamento, abre o [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) do objeto.  

:::note Chave e Valor
*Pesquisa de Cidade / Município / Vila* por [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
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
- No campo de pesquisa ao lado do nome da cidade, você pode começar a digitar o nome da rua e a lista será refinada, fornecendo os resultados mais apropriados.
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

**Para usar a *Pesquisa por Código Postal*, você só precisa inserir o número**, que pode consistir até mesmo em um único dígito, e o aplicativo oferece uma lista de códigos postais relevantes disponíveis.

- Selecione o código necessário e toque nele.
- Você pode usar o recurso *Mostrar *número do código postal* no mapa*. Isso abre um [menu de contexto do mapa](../map/map-context-menu.md#select-an-object-single-tap) com o código postal selecionado sem nenhuma informação adicional sobre o local.
- Você pode refinar sua pesquisa por este código selecionando primeiro a rua necessária na lista e depois o número.

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
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)