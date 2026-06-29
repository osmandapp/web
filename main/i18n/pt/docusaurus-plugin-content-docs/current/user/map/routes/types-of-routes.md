---
source-hash: 935cab06de14f7d40135dc91b1f1ba4ea6e4f6419796e6398db2850a17971af3
sidebar_position: 12
title:  Tipos de Rotas
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

Rotas representam diferentes atividades ao ar livre usando dados do [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tocar no **ícone de escudo com um número de rota ou bandeira de rota** no mapa abrirá um menu de contexto que fornece informações adicionais sobre a rota e permite usá-la como parte da navegação.

Você pode configurar a filtragem de alguns tipos de rotas no menu [Configurar Mapa](../../map/configure-map-menu.md).

## Ciclismo {#cycle}

[Rotas de ciclismo](https://wiki.openstreetmap.org/wiki/Cycle_routes) estão presentes em três tipos: *local* (`lcn`), *regional* (`rcn`), *nacional* (`ncn`), *internacional* (`icn`). Além disso, as rotas de ciclismo podem fazer parte de [Redes de nós](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Você pode escolher como atribuir cor aos segmentos da rota:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Você pode encontrar mais informações no artigo [Legenda do Mapa](../../map-legend/osmand.md#cycling).


## Mountain bike {#mountain-bike}

As rotas de MTB têm um mapeamento específico no [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e podem ser selecionadas separadamente das rotas de ciclismo.

- ***<Translate android="true" ids="mtb_scale"/>***.  Mostra trilhas de acordo com a escala MTB. Mais informações estão no artigo [Legenda do Mapa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Mostra trilhas de MTB de acordo com a International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Mais informações estão no artigo [Legenda do mapa](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Caminhada / Trilha {#hiking--walking}

[Rotas de caminhada](https://wiki.openstreetmap.org/wiki/Walking_Routes) estão presentes em três tipos: *local* (`lwn`), *regional* (`rwn`), *nacional* (`nwn`), *internacional* (`iwn`). Além disso, as rotas de caminhada podem fazer parte de [Redes de nós](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). O OsmAnd não separa rotas de caminhada e trilhas e as combina em 1 grupo. Você pode escolher como atribuir cor aos segmentos da rota:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colore as rotas de acordo com sua [cor local](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individual (se disponível no OpenStreetMap) e o símbolo do escudo turístico.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colore por [afiliação de rede](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colore as rotas de acordo com o tipo de [rede de nós](https://wiki.openstreetmap.org/wiki/Node_Networks) (internacional, regional ou local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## Trilhas de Dirt Bike {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

O recurso **Trilhas de Dirt Bike** permite exibir rotas específicas para dirt bike no mapa com base na tag `dirtbike:scale`. Esta escala destaca trilhas adequadas para dirt bike, com uma sobreposição colorida mostrando níveis de dificuldade ([Legenda do Mapa](../../map-legend/osmand.md#dirtbike-scale)).  

Você pode ativar este recurso em *Menu → Configurar mapa → Rotas → Rotas de dirt bike*. O sistema funciona de forma semelhante à escala MTB, oferecendo uma representação visual de rotas adaptadas ao dirt bike — mais sobre a [tag `dirtbike` pode ser encontrada aqui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Rotas de Escalada {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

O OsmAnd suporta *áreas de escalada* (`climbing=area`) e *paredões de escalada* (`climbing=crag`), permitindo que você encontre locais de [escalada em rocha](https://wiki.openstreetmap.org/wiki/Climbing) diretamente no mapa.

- **Áreas de escalada** representam **zonas maiores** onde existem múltiplas rotas de escalada.

- **Paredões de escalada** referem-se a **formações rochosas específicas** ou paredes adequadas para escalada.

- Estes locais incluem **atributos detalhados** como:

    - *Grau de escalada* (ex.: UIAA, Francês, YDS).
    - *Tipo de rocha* (ex.: calcário, granito).
    - *Comprimento da rota* (em metros).
    - *Qualidade da escalada* (sólida, solta, mista).
    - *Disponibilidade de caderno de cume*.

Para ativar locais de escalada no mapa, vá para: *Menu → Configurar Mapa → Rotas → Rotas de Escalada*.


## Grau de Dificuldade de Trilhas de Caminhada {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Alguns segmentos de estrada podem fazer parte de muitas rotas, mas podem ser coloridos individualmente para representar a dificuldade do segmento em áreas montanhosas. Atualmente, o OsmAnd suporta classificações italiana e suíça, e cada uma tem uma lista específica de requisitos de equipamento para acessar este segmento.  

1. [Escala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Escala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Pistas e rotas de esqui {#ski-slopes-and-routes}

- _Pistas e rotas de esqui_ no estilo de mapa _Inverno e Esqui_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Pistas e rotas de esqui_ no estilo de mapa _OsmAnd padrão_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Pistas e rotas de esqui são um grupo específico de [rotas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) no OpenStreetMap. Normalmente, essas rotas podem ser usadas com o estilo de mapa [Inverno e Esqui](../../map/map-styles.md#winter-and-ski) com todas as [Pistas](https://wiki.openstreetmap.org/wiki/Pistes) visíveis. Se outro estilo de mapa estiver ativo, um banner é exibido sugerindo a troca para [Inverno e Esqui](../../map/map-styles.md#winter-and-ski) (*somente Android*) e apenas as Pistas são mostradas. Toque em ***Alternar*** para alterar o estilo do mapa sem sair da tela atual, ou ***Mais tarde*** para ocultar o banner.


## Trilhas de snowmobile {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

Trilhas de snowmobile são mapeadas no [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) como `route=snowmobile`. Elas são usadas para recreação de inverno e para conectar áreas remotas durante a temporada de neve. No OsmAnd, as trilhas de snowmobile são clicáveis, consulte a seção [Ações com Rotas](./index.md#actions-with-routes).


## Rotas de cavalo {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Rotas de cavalo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) são exibidas como rotas indicadas por cores com símbolos para equitação.  


## Esportes de águas brancas {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Rotas de águas brancas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) são mostradas junto com ícones de acesso, áreas de perigo e corredeiras próximas para [turismo de águas brancas](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Consulte [Recursos de águas brancas](../../map-legend/osmand.md#whitewater-features) na Legenda do Mapa para graus de corredeiras, graus de seção do rio e símbolos relacionados.


## Corrida {#running}

![Rotas de fitness](@site/static/img/map/fitness_1.png)

[Rotas de corrida](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) no OpenStreetMap são usadas para rotas de corrida nomeadas, numeradas ou marcadas de outra forma, principalmente para atletismo.


## Trilhas de fitness {#fitness-trails}

![Rotas de fitness](@site/static/img/map/fitness_route.png)

Uma [trilha de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) é uma trilha ou caminho equipado com obstáculos ou estações ao longo de seu comprimento para exercitar o corpo humano e melhorar a saúde.  


## Viagem {#travel}

<InfoAndroidOnly />

![Rotas de viagem](@site/static/img/map/travel_route_2.png)  ![Rotas de viagem](@site/static/img/map/travel_routes.png)

Rotas de viagem fazem parte de arquivos personalizados de [Livro de viagem](../../plan-route/travel-guides.md) (`travel.obf`), que podem ser gerados a partir das [rotas do usuário](https://osmand.net/blog/routes#generated-travel-routes) ou fazer parte de [plugins](../../plugins/index.md) adicionais.  

Você pode personalizar a exibição de certos ***Livros de viagem*** e tipos de ***trilhas***, exibir trilhas como pontos ou ***Grupos de pontos*** (por exemplo, para livros de viagem Wikivoyage). Saiba mais sobre [Guias de viagem aqui](../../plan-route/travel-guides.md).


## Artigos Relacionados {#related-articles}

- [Configurar Mapa](../../map/configure-map-menu.md)
- [Legenda do Mapa](../../map-legend/osmand.md)
- [Rotas](./index.md)