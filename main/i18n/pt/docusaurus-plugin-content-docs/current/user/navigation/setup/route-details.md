---
source-hash: e31e5212327dba32b41b4f464d67c7ab7f9725a2d4fbd06bb60453040bbfe587
sidebar_position: 4
title: Detalhes da Rota
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

O OsmAnd permite que você encontre a melhor rota e explore seus detalhes. O aplicativo fornece informações detalhadas sobre a rota, como distância, [tempo de viagem](#distance--time--co2), [tipo de superfície](#road-attributes), [diferenças de elevação](#elevation-info), [dados de pegada de CO2](#distance--time--co2) e [informações de curva](#turn-by-turn-information). Você também pode [analisar](#analyze-on-map) a rota no mapa, descobrir informações sobre segmentos de trilha, [imprimir](#print) o plano da rota, [salvar](#share--export-actions) a rota e compartilhá-la com outras pessoas. Com essa funcionalidade, você sempre saberá os detalhes da rota e poderá planejar sua viagem com mais eficiência.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes da rota Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Detalhes da rota iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Como Acessar {#how-to-access}

Após calcular uma rota no [menu de Navegação](./route-navigation.md#start--stop-navigation), você tem acesso aos "Detalhes" sobre essa rota. Essas informações são úteis para usar antes de iniciar uma viagem para melhorar o planejamento da rota ou para verificar informações sobre a estrada à frente enquanto dirige.
Existem três maneiras de acessar o *menu Detalhes da Rota*.

1. Vá para o *Menu principal → Navegação*, defina a rota e toque no botão *Detalhes*.
2. Toque no ícone *Navegação* na tela do mapa, defina a rota e toque no botão *Detalhes*.
3. Vá para o menu *Meus Locais*, toque em qualquer trilha disponível na lista *Menu → Meus Locais → Trilhas*, selecione o ícone *Navegação* no menu de contexto da trilha em *Visão Geral* e toque em *Detalhes*.

Dependendo das [configurações de perfil](../../personal/profiles.md) selecionadas e do [tipo de roteamento](../../navigation/routing/osmand-routing.md#routing-types) selecionado, alguns detalhes da rota podem não ser exibidos. Além disso, os detalhes da rota dependem muito da *cobertura de dados do OpenStreetMap*.


## Distância / Tempo / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes da rota](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Distância total*** é calculada entre todos os segmentos da rota, incluindo pontos intermediários nas [unidades](../../personal/profiles.md#units--formats) selecionadas.

- ***Tempo de viagem estimado*** é calculado como o total de tempos em cada segmento e penalidades de tempo em pontos específicos. Cada perfil de navegação tem regras diferentes para calcular a velocidade em um segmento e quais penalidades devem ser incluídas (configuradas em [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Por exemplo, perfis de carro e bicicleta levam a velocidade média por segmento dos dados do OpenStreetMap, mas perfis de pedestres, barco e aeronave usam a velocidade *padrão* das [Configurações de Navegação](../guidance/vehicle-parameters.md#default-speed).

- ***Tempo estimado de chegada*** é calculado como um tempo a partir de agora no horário local da origem usando o *Tempo de viagem estimado*.

- ***Dados de pegada de CO2*** estimam aproximadamente quanto CO2 será produzido ao seguir a rota. Você precisa configurar o [tipo de motor de combustível](../guidance/vehicle-parameters.md#fuel-used-by-motor) nos parâmetros do veículo para obter uma aproximação mais precisa.


## Informações de Elevação {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes da rota](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Informações de elevação** são fornecidas em todos os perfis de rota offline do OsmAnd, exceto para perfis que usam [navegação em linha reta](../routing/straight-line-routing.md). Os dados de elevação fazem parte dos Mapas Offline do OsmAnd e são calculados com base em [fontes públicas SRTM](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Faixa de altitude*. Exibe a elevação mínima / máxima na rota.
- *Altitude média*. Exibe a elevação média ponderada na rota.
- *Subida / descida*. Exibe a razão do caminho para o horizontal, onde zero indica horizontalidade e o número de graus indica um grau de inclinação maior ou mais íngreme. A inclinação mostra a inclinação máxima da estrada em porcentagem do seu ponto de localização até o final do gráfico visível, ou para a seção selecionada da rota sem o ponto de localização visível na tela.


***Uma licença para dados DEM usados pelo OsmAnd para detecção de terreno***
Os dados de altitude no mapa (entre 70 graus de latitude norte e 70 graus de latitude sul) foram obtidos a partir de medições feitas como parte da *Shuttle Radar Topography Mission (SRTM)*. Ela utilizou o *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, a principal ferramenta de imagem no *Earth Observation System da NASA*. Para informações completas, consulte a [Licença](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dados DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Os dados originais usados para este produto foram fornecidos pela AW3D da JAXA.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Modelos Digitais de Terreno LiDAR da Europa (DTM) de Sonny</a>.

</details>


### Gráfico de Elevação {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes da rota](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

Os [gráficos](../../map/tracks/track-context-menu.md#altitude--speed-graphs) exibem visualmente informações sobre a altitude e a inclinação da sua rota de navegação e sua posição atual neste gráfico com a altitude e a inclinação atuais. O gráfico é plotado em dois eixos. O eixo X é a distância em sua rota. O primeiro eixo Y é a altitude acima do nível do mar, cujo valor depende do terreno, e o segundo eixo Y é a [inclinação](https://en.wikipedia.org/wiki/Grade_(slope)) aproximada. Você pode visualizar o gráfico de elevação para toda a rota ou apenas para um intervalo selecionado, dimensionando o gráfico.

- ***Zoom in/out***. Por padrão, o gráfico mostra a rota da localização atual até o ponto de destino. Você pode usar [movimentos de dois dedos](../../map/interact-with-map.md#gestures) para aumentar e diminuir o zoom para uma visualização mais detalhada. Você também pode mover o gráfico para a direita, para frente na rota e para trás para a localização atual. *Tais manipulações também se referem ao bloco visual de informações no bloco [Atributos da Estrada](#road-attributes).*

- ***Pino de Localização***. Se você quiser ver as informações em um ponto específico à frente em sua rota, você pode tocar em qualquer lugar do gráfico e um ponteiro com altitude e porcentagem de inclinação aparecerá.


## Analisar no Mapa {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes da rota Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Detalhes da rota iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

A ferramenta **Analisar no mapa** é semelhante à ferramenta para visualizar [detalhes da trilha](../../map/tracks/index.md#analyze-track-on-map) no mapa. Ela permite que você visualize e interaja visualmente com vários gráficos e veja o ponto selecionado no mapa.

Se os dados estiverem presentes, você pode selecionar um dos seguintes tipos:

- *Eixo Y*:
   - [*Altitude*](../../map/tracks/track-context-menu.md#altitude). Este é o [processo](https://wiki.openstreetmap.org/wiki/Altitude) de obtenção de altura acima de um nível fixo.
   - [*Inclinação*](https://wiki.openstreetmap.org/wiki/Key:incline). A [inclinação da forma do terreno](https://en.wikipedia.org/wiki/Grade_(slope)) significa a tangente do ângulo de inclinação da superfície em relação à horizontal.
   - [*Velocidade*](../../map/tracks/track-context-menu.md#speed). Valores de velocidade ao dirigir em uma trilha.
   - Gráficos com dois tipos de dados: &nbsp;*Altitude/Inclinação*, &nbsp;*Altitude/Velocidade*, &nbsp;*Inclinação/Velocidade*, &nbsp;*Zoom animado/Velocidade*.
- *Eixo X*:
   - *Distância*. Você pode visualizar dados de rota que se relacionam com o comprimento da rota.
   - *Tempo*. Você pode visualizar dados de rota que se relacionam com o tempo calculado para essa rota
   - *Hora do dia*. Você pode visualizar dados de rota em determinados horários do dia.


### Tipo de Interações {#type-of-interactions}

- *Tocar e Deslizar*. Toque no gráfico para exibir informações sobre o ponto da trilha e o movimento ao longo dela. O gráfico destaca a localização do ponto no mapa e exibe informações sobre ele na régua.
- *Escala*. Escale o gráfico com [gesto de dois dedos](../../map/interact-with-map.md#gestures).
- *Seguir Minha localização* (*somente Android*). Você pode tocar em [Minha Localização](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar a visualização do mapa e o gráfico com sua localização. Conforme você se move, o gráfico se deslocará da esquerda para a direita, exibindo informações à frente do seu caminho.


## Atributos da Estrada {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Rota de navegação Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Rota de navegação iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Os atributos da estrada são acessíveis nos [Detalhes da Rota](#how-to-access) e exibem informações relacionadas ao segmento do OpenStreetMap e dados de Elevação. A indicação de cor está relacionada à forma como atributos específicos são renderizados no mapa (consulte [Legenda do mapa](../../map-legend/osmand.md#surface-smoothness)). Os gráficos de barras também são interativos, e é possível ver informações em um local específico tocando no gráfico.

- [**Tipo de estrada**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). O tipo de estrada é determinado com base em sua finalidade funcional e características, como o número de faixas, limites de velocidade, capacidade de carga, presença de caminhos para pedestres e bicicletas, acostamentos e outros parâmetros. Diferentes tipos de estradas podem ter diferentes restrições e regras de trânsito.

   Por exemplo, as principais [rodovias](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) geralmente têm um limite de alta velocidade e podem ser divididas em faixas, e as [estradas locais](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) podem ter um limite de baixa velocidade e uma faixa em cada direção.

- [**Superfície**](https://wiki.openstreetmap.org/wiki/Key:surface). As superfícies das estradas são a camada superior do pavimento que entra em contato com as rodas dos veículos. Elas podem ser de diferentes tipos, dependendo de suas propriedades e finalidade funcional.

   Por exemplo, o pavimento de [asfalto](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) oferece boa tração e isolamento acústico, e o pavimento de [concreto](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) é mais durável e tem maior capacidade de carga. Outros materiais, como cascalho, pedra britada, tábuas de madeira e outros, também podem ser utilizados para criar uma superfície de estrada.

- [**Inclinação**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Esta é uma medida do ângulo de inclinação da estrada, expressa em porcentagem. Indica o quão íngreme a estrada está inclinada para cima ou para baixo em relação ao horizonte, e é calculada medindo a mudança vertical na elevação da estrada pela distância horizontal e multiplicando o valor resultante por 100%.

   Por exemplo, se a inclinação da estrada for de 10%, isso significa que para cada 100 metros de distância horizontal ao longo da estrada, você está subindo ou descendo 10 metros. A inclinação da estrada pode afetar a velocidade do seu veículo, a frenagem, o consumo de combustível e a segurança ao dirigir, especialmente em estradas escorregadias no inverno.

- [**Firmeza da superfície**](https://wiki.openstreetmap.org/wiki/Key:tracktype). A superfície da estrada pode se recuperar da deformação ou carga. Quanto maior a firmeza da superfície, menor a chance de danos ao veículo e mais confortável será a estrada. A firmeza da superfície também pode afetar a velocidade do veículo e o consumo de combustível.

- [**Declive**](https://wiki.openstreetmap.org/wiki/Key:incline). Indica qual porcentagem de declives existem em sua rota.

- [**Suavidade**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Aplicável a todos os tipos de caminhos e áreas, como rodovias, estacionamentos, praias e trilhas, e indica a usabilidade da rota. Fornece informações que você pode dirigir sem risco significativo de danos, como na parte inferior do veículo, ou lesões, como uma queda.

- [**Estradas de inverno e gelo**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Mostra o esquema de cores da rota de acordo com a classificação das [estradas de inverno](../../map/vector-maps.md#winter-and-ski).

- [**Dificuldade das trilhas para cavalos**](https://wiki.openstreetmap.org/wiki/Riding). Este atributo da estrada indica a dificuldade da rota ao andar a cavalo. Adequado para [roteamento a cavalo](../../navigation/routing/horse-routing.md).


## Informações de Curva a Curva {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

As informações de curva a curva fornecem [instruções](#instructions) detalhadas sobre como navegar em uma rota. Além do menu *Detalhes*, elas também são exibidas nos widgets [*Manobras da rota*](../../widgets/nav-widgets.md#route-guidance) e [*Faixas*](../../widgets/nav-widgets.md#lanes). Essas informações ajudam você a navegar melhor em sua rota e permitem que você planeje com antecedência.

Toque em uma seção específica da rota na lista para visualizar informações detalhadas ou fazer alterações conforme necessário. O mapa aumenta e um [menu de contexto](../../map/map-context-menu.md) é aberto.


### Instruções {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

As instruções incluem informações sobre o movimento ao longo da rota, como:

- A [*seta da próxima curva*](../../widgets/nav-widgets.md#next-turn) e *sua direção*.
- *Distância para a manobra*.
- Uma descrição do *que fazer*, que inclui o *nome da rua ou trilha*.
- *Distância total* e *tempo da rota*.
- *[Layout das faixas](../../widgets/nav-widgets.md#lanes)* para a estrada atual.
- [*Indicador de acostamento*](#roadside-indicator) (*somente iOS*).


### Indicador de Acostamento {#roadside-indicator}

:::caution Somente iOS
Este tipo de instrução atualmente *não está disponível para a versão Android* do aplicativo OsmAnd.
:::

![Indicação lateral](@site/static/img/navigation/route/side_indication.png)

Na lista de instruções, o **indicador de acostamento** mostra qual direção da sua localização atual e direção de movimento para o seu ponto final é o seu destino, isso pode ser esquerda, direita e em frente.

O ângulo entre o seu destino (*[Rumo](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) do último ponto*) e o último segmento (*Rumo para os últimos 2 pontos da rota*) é medido, dividido em 3 setores de 120 graus, e o resultado é que você pode ver em qual direção o seu destino está.

- `-60 °`&nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - marcado como **em frente**.
- `-180 °`&nbsp; &nbsp; a &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - marcado como lado **esquerdo**.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; a &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - marcado como lado **direito**.


### Imprimir {#print}

<InfoAndroidOnly/>

![detalhes da rota](@site/static/img/navigation/route/route_details_print-2.png)

O recurso **Imprimir** de uma descrição de rota curva a curva pode ser útil se você preferir ter uma cópia física da sua descrição de rota em vez de usar dispositivos eletrônicos, ou se você não tiver acesso a aplicativos de navegação ou navegadores GPS, sem acesso à Internet, ou se precisar de informações para outras pessoas que viajam com você.

Uma descrição de rota impressa fornece *instruções detalhadas curva a curva* sobre como navegar em sua rota, incluindo a distância até a próxima curva, direção de condução e nomes de ruas ou trilhas, bem como informações de distância e tempo de viagem.

Essas informações podem ser úteis ao planejar uma viagem e querer estimar o tempo e a distância entre diferentes pontos da rota e determinar o tempo estimado de chegada.

A capacidade **de imprimir** ou **salvar** informações curva a curva **em formato PDF** é especialmente útil ao viajar longas distâncias ou em locais desconhecidos, quando você precisa ter uma ideia mais detalhada da rota e do tempo que leva para chegar lá.


## Compartilhar / Exportar (Ações) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

A seção de navegação Detalhes da Rota possui opções que permitem realizar certas ações com as informações da rota.

- [**Imprimir**](#print). Permite imprimir ou salvar informações de rota curva a curva.
- **Exportar/Salvar**. Permite salvar as informações da rota **como uma nova trilha** para uso offline posterior. A trilha exportada contém todas as informações sobre atributos da estrada e instruções de curva. Assim, a [navegação por esta trilha](./gpx-navigation.md) deve fornecer todos os recursos como a navegação pela rota.
- **Compartilhar**. Compartilha uma trilha exportada ou um link para a rota que pode ser aberta em outro dispositivo com OsmAnd.


## Artigos Relacionados {#related-articles}

- [Parâmetros da rota](../routing/osmand-routing.md#routing-types)
- [Preparação da rota](./route-navigation.md)
- [Navegação por trilha](./gpx-navigation.md)
- [Navegação por marcadores](./markers-navigation.md)
- [Configurações de navegação](../guidance/navigation-settings.md)
- [Tela do mapa durante a navegação](../guidance/map-during-navigation.md)
- [Comandos de voz / Notificações](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)