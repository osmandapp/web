---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title: Roteamento online
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



## Visão geral {#overview}

<InfoAndroidOnly />

O roteamento online é uma ferramenta poderosa que pode ajudar os usuários a economizar tempo e navegar com mais eficiência. No entanto, é importante notar que o roteamento online depende da conectividade com a internet e pode não estar disponível em áreas com pouca cobertura de rede. Além disso, os usuários devem sempre ter cautela e usar seu julgamento ao seguir qualquer rota sugerida por um serviço de roteamento online.

![Roteamento online Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Parâmetros de rota - Roteamento online {#route-parameters---online-routing}

O *roteamento online* pode ser ativado na seção [Tipo de navegação](../guidance/navigation-settings.md#overview) das configurações de navegação do *Perfil* selecionado. No OsmAnd, existem dois *mecanismos de roteamento online* predefinidos ([ZLZK](https://zlzk.biz/) e [OSM DE](https://routing.openstreetmap.de)), que fornecem três tipos de *roteamento online*: *Bicicleta, Carro e A pé*.

:::note
Os tipos de roteamento online são projetados para perfis de *Condução, Ciclismo e Caminhada*, embora também possam ser usados com outros perfis do OsmAnd (Caminhão, Motocicleta, Esqui, Equitação). Eles são fornecidos "como estão", então você não pode personalizá-los de acordo com suas necessidades usando diferentes opções de navegação.
:::

### Roteamento online personalizado {#custom-online-routing}

Além dos tipos de roteamento online predefinidos, você pode configurar outros mecanismos de roteamento online.
Toque no botão **+ Adicionar mecanismo de roteamento online** e escolha um dos tipos de roteamento online propostos ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Selecione o veículo apropriado e toque em *testar roteamento* antes de salvar suas alterações.

![Roteamento online personalizado Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Roteamento online personalizado Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Você pode ler sobre as diferenças entre os mecanismos de roteamento online na [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Roteamento GPX online personalizado {#custom-online-gpx-routing}

O servidor online constrói uma rota usando seu ponto de partida e destino. Após receber a trilha do servidor, o OsmAnd cria uma rota usando o recurso *[Anexar às estradas](../setup/gpx-navigation.md#attach-to-the-roads)*. Assim, todas as informações de roteamento necessárias serão retiradas de nossos mapas offline, e uma orientação mais precisa ao longo da rota será fornecida.

![Roteamento GPX personalizado Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Roteamento GPX personalizado Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Configuração de roteamento online {#online-routing-setting}

Quando o roteamento online é selecionado para navegação, uma opção adicional aparece nas configurações.

![Configurações de roteamento online Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Permite usar o roteamento offline do OsmAnd, quando o roteamento online é selecionado nas configurações de navegação. Esta opção pode ajudar se uma rota já foi construída online, mas depois houve um desvio da rota e, ao mesmo tempo, a conexão com a internet foi perdida. Neste caso, o roteamento offline será usado para retornar à rota, previamente calculada online.