---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Mapa
title: Mapa Global no Website
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


<InfoIncompleteArticle/>

:::info
O site *[osmand.net/map](https://osmand.net/map/)* está atualmente em desenvolvimento e testes.
**Portanto, o layout e o funcionamento de algumas funções no site podem ser diferentes dos descritos neste artigo.**

Criamos o [tópico de Discussão](https://github.com/osmandapp/OsmAnd/discussions/16567) no nosso GitHub para que possa deixar feedback lá.
:::


## Visão Geral {#overview}

O mapa web do OsmAnd é um mapa global baseado em dados do [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Ele permite que os utilizadores visualizem os seus próprios dados, como trilhas e favoritos, criem rotas de navegação para qualquer perfil e acedam a recursos adicionais como clima, trilhas GPX públicas, POIs e imagens do Wikimedia. Explore e personalize a sua experiência de dados diretamente no seu navegador.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Menu de Contexto do Mapa {#map-context-menu}

Para abri-lo, clique com o botão direito do rato em qualquer lugar do mapa. Este menu inclui as seguintes ações:

- **Onde estou** – Encontre rapidamente a sua localização atual no mapa. Este recurso exibe os endereços mais próximos ao ponto selecionado no mapa.
- **Abrir clima** – Aceda ao [menu Clima](#weather-on-the-web) para ver detalhes do clima.
- **Criar nova rota** – Abre a ferramenta [*Planear uma rota*](../web/planner.md#create-track-and-local) com a localização selecionada como ponto de partida ou destino.
- **Adicionar Favorito** – Permite criar e guardar um [favorito](../web/web-userdata.mdx#add--edit-favorite) em qualquer ponto do mapa para fácil acesso.
- **Direções de** – Define o ponto selecionado como o [local de partida](../web/planner.md#navigation-route) para navegação.
- **Direções para** – Define o ponto selecionado como o [destino para navegação](../web/planner.md#navigation-route).
- **Copiar coordenadas** – Copia as coordenadas do ponto selecionado para uso externo.
- **Adicionar pino** – Coloca um pino para marcar uma localização no mapa. ([Exemplo](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Mostrar regiões** – Exibe as regiões associadas à localização selecionada.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Clima na Web {#weather-on-the-web}

O OsmAnd Web fornece informações meteorológicas de duas fontes de previsão:

- **GFS (padrão)**
- **ECMWF**

Para alternar entre estas fontes de previsão, clique no **botão do guarda-chuva** no menu Clima.

***Recursos do menu de clima:***

- **Dados Meteorológicos Atuais**: Exibe as suas coordenadas juntamente com os seguintes dados:

  - Temperatura.
  - Precipitação.
  - Vento.
  - Pressão do Ar.
  - Cobertura de Nuvens.

- **Ajuste de Hora**: Modifique a data e a hora usando a **ferramenta de tempo** no menu Clima para visualizar o clima para um momento específico.

***Camadas de clima no mapa:***

- Use o **botão de camadas** para selecionar e ativar camadas de clima, como:

  - Temperatura.
  - Pressão.
  - Vento.
  - Cobertura de Nuvens.
  - Precipitação.

***Visualização de previsões:***

- As previsões meteorológicas estão disponíveis para a previsão de **7 dias**.
- As atualizações de previsão são fornecidas em **passos de 3 horas** para informações detalhadas.

Para aceder ou personalizar estes recursos, use os menus no lado esquerdo ou direito da interface.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***Previsão de 7 Dias***:

Clique nos dados de previsão no menu para visualizar a **previsão de 7 dias** para a sua localização. A previsão está disponível em:

- **Formato de gráfico**
- **Formato de lista**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Menu Configurar Mapa {#configure-map-menu}

O menu Configurar Mapa permite gerir as configurações de exibição para dados do mapa, como camadas de POI, Favoritos, trilhas e terreno. Faça login na sua conta OsmAnd para usar esta seção do menu.

Para abrir este menu, clique no botão no **canto superior esquerdo** ou aceda a ele através do **Menu**.

- [Sobreposição de POI...](#poi-overlay-section). Permite escolher e mostrar as categorias de POI necessárias no mapa.
- [Favoritos](#favorites-section). Alterna a exibição de favoritos no mapa.
- [Trilhas](#tracks-section). Contém trilhas GPX visíveis no mapa.
- [Terreno](#terrain-section). Ativa ou desativa o esquema de cores do terreno no mapa.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Seção de sobreposição de POI {#poi-overlay-section}

Para mostrar POIs no mapa:

*Menu Configurar mapa → Sobreposição de POI...*. Aqui, pode escolher as categorias a exibir no mapa.

Alternativamente, pode usar a [**seção de Pesquisa**](web-search.md) para encontrar o local desejado.

![POIs menu](@site/static/img/web/poi_menu.png)


### Seção de Favoritos {#favorites-section}

Com um clique, pode ativar ou desativar os favoritos no mapa. No entanto, apenas os favoritos com [**Mostrar no mapa ativado**](../web/web-userdata.mdx##favorites-on-the-web) serão exibidos.


### Seção de trilhas {#tracks-section}

Esta seção contém uma lista das suas [**trilhas GPX visíveis no mapa**](../web/web-userdata.mdx#visible-on-the-map) e trilhas **Recentemente Visíveis**.

- Pode ativar ou desativar as trilhas diretamente.
- Ativar ou desativar as trilhas da lista **Recentemente Visíveis**.

Cada trilha tem um **Menu de Contexto** (acessível através do botão ⋮) com os seguintes comandos:

- **Ocultar trilha**: Oculta a trilha atualmente visível do mapa.
- **Tornar trilha visível**: Exibe uma trilha da lista Recentemente Visíveis no mapa.
- **Renomear**: Permite renomear a trilha para facilitar a identificação.
- **Duplicar**: Cria uma cópia da trilha.
- **Descarregar**: Guarda a trilha no seu dispositivo local.
- **Eliminar**: Remove a trilha permanentemente da lista.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Seção de terreno {#terrain-section}

A seção **Terreno** é um recurso pago <ProFeature/>. Para usar este recurso, deve primeiro fazer login na sua conta OsmAnd Pro.

Nesta seção, pode:

- Escolher um **esquema de cores** para o terreno:
  - **Relevo**
  - **Inclinação**
  - **Altura**
- Ajustar a visibilidade da camada de terreno selecionada de **0% a 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## Esquemas de URL {#url-schemes}

Para facilitar o uso do serviço web (e aplicação) do OsmAnd, pode aproveitar os links diretos. São URLs especiais que permitem transferir dados de localização e incluir detalhes sobre pins, trilhas, clima e muito mais.

Estes URLs podem ser copiados e partilhados usando qualquer meio suportado pelo seu dispositivo e são compatíveis com as versões Android e iOS do OsmAnd.

1. **URL com um pin no mapa:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL sem um pin no mapa:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL com navegação:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Dependendo dos parâmetros especificados, as strings de URL podem conter:

- **latitude**: valor da latitude como um número.
- **longitude**: valor da longitude como um número.
- **start-finish**: coordenadas para navegação.
- **profile**: perfil de navegação (por exemplo, carro, bicicleta).
- **zoom**: nível de zoom.

4. **Clima**&nbsp; – &nbsp;`osmand.net/map/weather`

***Por exemplo***, pode aceder diretamente à página do clima com coordenadas especificadas:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Conta**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Configurar Mapa**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Trilhas**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Favoritos**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Configurações**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Planear uma Rota**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Link direto para a [**página Explorar**](https://osmand.net/docs/user/web/web-search#explore) atual&nbsp; - &nbsp;`osmand.net/map/search`


> *Última atualização: janeiro de 2025*