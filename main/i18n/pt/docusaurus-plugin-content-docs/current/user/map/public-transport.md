---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Transporte Público
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Visão Geral {#overview}

O transporte público é uma camada adicional que permite exibir rotas e paradas de transporte no mapa, verificar informações detalhadas sobre elas e navegar.

## Paradas de Transporte (Camada) {#transport-stops-layer}

Ativar/Desativar a camada de transporte público:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Camada de transporte público Android](@site/static/img/map/pt_layer_android.png) ![Camada de transporte público iOS](@site/static/img/map/pt_layer_ios.png)

Escolha entre 1 ou mais categorias de transporte para exibição:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Leia mais](../map/vector-maps.md#transport) sobre como o transporte é exibido no mapa.


## Rotas de Transporte (Menu de Contexto) {#transport-routes-context-menu}

![Menu de rota de transporte público Android](@site/static/img/map/pt_routemenu_android.png) ![Menu de rota de transporte público iOS](@site/static/img/map/pt_routemenu_ios.png)

Para abrir o menu de Transporte, você pode tocar no ícone de transporte. Ele exibe:

- Escudos coloridos de transporte público (**clicáveis**)
- [Lista das rotas](#routes) que param nessa parada ou nas proximidades (dentro de 150 m)
- Nome da parada e outros [detalhes](#transport-stop-details)

### Detalhes da Parada de Transporte {#transport-stop-details}

![Detalhes do menu de rota de transporte público Android](@site/static/img/map/pt_routemenu_details_android.png) ![Detalhes do menu de rota de transporte público iOS](@site/static/img/map/pt_routemenu_details_ios.png)

A parada de transporte público oferece detalhes extras em comparação com o menu de objeto padrão do OpenStreetMap [menu](../map/map-context-menu.md#details):

- Presença de banco
- Presença de cobertura
- Acessibilidade para cadeira de rodas
- Nome do operador

**Nota**: você pode filtrar as paradas por certos critérios. Por exemplo, expanda e toque em "Banco" / "Sim" e você poderá ver a lista de paradas com bancos. Elas também podem ser [mostradas no mapa](../map/point-layers-on-map.md#points-of-interest-pois).


### Rotas {#routes}

![Rotas de transporte público Android](@site/static/img/map/pt_routes_android.png) ![Rotas de transporte público iOS](@site/static/img/map/pt_routes_ios.png)

As Rotas de Transporte são todas as rotas de transporte público que se aproximam da parada selecionada e rotas próximas (dentro de 150m). As informações das rotas são retiradas dos [dados do OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport), como referência, nome, cor e tipo.

**Cor do escudo**:

- Metrô - cor da própria linha
- Ferrovia - marrom
- Ônibus e outros - vermelho
- Bonde - azul
- Trólebus - roxo

### Navegar Rota {#browse-route}

![Lista de rotas de transporte público Android](@site/static/img/map/pt_route_list_android.png) ![Lista de rotas de transporte público Android](@site/static/img/map/pt_route_list_ios.png)

Você pode entrar no menu Navegar Rota **clicando em um escudo** ou **selecionando uma rota** na lista de rotas. Depois disso, você pode navegar entre as paradas clicando em '<Translate android="true" ids="shared_string_previous"/>' e '<Translate android="true" ids="shared_string_next"/>'. As informações da parada serão atualizadas no menu e a parada será localizada no mapa.

Você pode ver a lista completa de paradas clicando em <Translate android="true" ids="rendering_category_details"/>. A parada atualmente selecionada é marcada com o ícone de 'localização' na lista de Rotas.

> **NOTA**: *Se você tocar no botão <Translate android="true" ids="get_directions"/>, você obterá uma rota da sua localização atual para a Estação de Transporte Público selecionada.*


## Artigos Relacionados {#related-articles}

- [Mapas vetoriais](../map/vector-maps.md)
- [Navegação de transporte público](../navigation/routing/public-transport-navigation.md)