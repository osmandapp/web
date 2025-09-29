---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title: Sobre o roteamento OsmAnd
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

O roteamento offline do OsmAnd é baseado em dados do OpenStreetMap e oferece uma variedade de rotas para diferentes propósitos. Esta é uma lista de tipos de roteamento predefinidos que podem ser estendidos. As regras de navegação estão contidas no arquivo [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) e são usadas para roteamento offline. O tipo de rota muda automaticamente quando você altera seu perfil.


## Tipos de roteamento {#routing-types}

Os seguintes perfis com seus tipos de roteamento são predefinidos no OsmAnd: *Carro, Ciclismo, Caminhada, Caminhão, Motocicleta, Ciclomotor, Transporte público, Barco, Aeronave, Esqui, Trem, Equitação*. Além desses, você pode criar seus próprios perfis com regras de roteamento específicas ou [modificar o algoritmo de roteamento do OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Os perfis [**Caminhão, Motocicleta, Ciclomotor, Trem, Aeronave, Barco e Equitação**](./osmand-routing.md) estão desativados por padrão. Para usar esses perfis, você precisa ativá-los em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- O tipo de navegação [**Direto ao ponto**](./direct-to-point-routing.md) não tem seu próprio perfil e pode ser usado com qualquer um ativado.

- O roteamento offline do OsmAnd pode ser **configurado modificando o [.xml file](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Para mais informações, consulte o artigo [*Personalizar roteamento offline*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categoria | Descrição | Nota |
|:------------|:---------------|:---------------|
| *Roteamento offline do OsmAnd* | O mecanismo de roteamento offline do OsmAnd usa mapas pré-baixados como fonte de dados para o cálculo da rota. | Tipos de navegação: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Ciclomotor](./moped-routing.md), [Motocicleta](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Caminhão](car-based-routing#route-parameters---truck), [Trem](./train-routing.md). |
| *Roteamento direto ao ponto* | Também usa mapas offline e fornece um roteamento em linha reta (ou *navegação ponto a ponto*). | Tipos de navegação: *[Linha reta](./straight-line-routing.md)*, *[Direto ao ponto](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Roteamento offline fornecido pelo [aplicativo BRouter](https://brouter.de/). | Disponível **apenas para Android**. A descrição completa pode ser lida [aqui](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | O roteamento online constrói os recursos dos servidores de rota online pela conexão com a Internet. | Disponível **apenas para Android**. Você pode configurar o [roteamento online](./online-routing.md) para construir uma rota a partir de vários mecanismos de roteamento online, como [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX genérico. |

- *[Roteamento de carro (Caminhão, Motocicleta)](./car-based-routing.md)* - O OsmAnd fornece instruções de direção para motoristas de carros, caminhões e motocicletas.
- *[Roteamento de bicicleta (MTB)](./bicycle-based-routing.md)* - O roteamento de bicicleta fornece avisos de navegação especificamente para ciclistas e entusiastas de MTB. Também pode ser usado por motoristas de ciclomotores (scooters).
- *[Roteamento de pedestres](./pedestrian-routing.md)* - pode ser usado não apenas para caminhar pela cidade, mas também durante caminhadas.
- *[Roteamento de ciclomotor](./moped-routing.md)* - é baseado no roteamento de bicicleta, embora tenha suas próprias características.
- *[Roteamento de transporte público](./public-transport-navigation.md)* - pode ajudá-lo a viajar pela cidade.
- *[Roteamento de equitação](./horse-routing.md)* - fornece aos cavaleiros as ferramentas necessárias para planejar e desfrutar de suas atividades de equitação.
- *[Roteamento de esqui](./ski-routing.md)* - permite que os usuários planejem e naveguem em passeios de esqui e outras atividades de esportes de inverno usando o aplicativo móvel OsmAnd.
- *[Roteamento de trem](./train-routing.md)* - oferece a oportunidade de usar as ferrovias para navegação.
- *[Roteamento de barco](./boat-navigation.md)* - pode ser usado para construir uma rota em rios, canais, pequenos lagos e em mar aberto, mas apenas quando as vias navegáveis são marcadas no OpenStreetMap.
- *[Roteamento em linha reta](./straight-line-routing.md)* - fornece um roteamento em linha reta (ou navegação "ponto a ponto") que é recalculado quando sua localização muda.
- *[Roteamento direto ao ponto](./direct-to-point-routing.md)* - fornece um roteamento em linha reta (ou navegação "ponto a ponto") que permanece estável durante toda a navegação, em contraste com o roteamento em **Linha reta** (o recálculo da rota é desativado).


## Personalizar roteamento offline {#customize-offline-routing}

Você também pode criar seu **próprio arquivo routing.xml** ou modificar o **routing.xml** padrão e usá-lo para navegação (apenas para usuários avançados do OsmAnd).

- Copie o arquivo [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) para o seu dispositivo. Leia as [informações de ajuda](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) cuidadosamente. Como exemplo, veja o arquivo [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) do usuário do OsmAnd.
- Após fazer as alterações, o novo arquivo *routing.xml* pode ser adicionado ao OsmAnd tocando nele e selecionando para abri-lo no aplicativo OsmAnd.
- Selecione o [tipo de navegação](../../navigation/guidance/navigation-settings.md#navigation-type) modificado para o seu perfil.

Mais informações sobre este recurso podem ser encontradas na [*documentação técnica*](../../../technical/osmand-file-formats/osmand-routing-xml.md) e na [*página do OsmAnd no GitHub*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Evitar estradas específicas {#avoid-specific-roads}

:::caution
O recurso de evitar estradas é global e afeta todos os **[tipos de roteamento](#routing-types)**, exceto *[roteamento online](../routing/online-routing.md)* e *[BRouter](../routing/brouter.md)*.
:::

Existem duas maneiras possíveis de escolher quais estradas evitar ao calcular uma rota:

- Selecione o tipo de estrada na seção [Parâmetros da rota](../guidance/navigation-settings.md#route-parameters) das [Configurações de navegação](../guidance/navigation-settings.md). A descrição desta configuração é fornecida nos artigos sobre as configurações dos [tipos de roteamento](#routing-types). Como exemplo, veja a descrição do tipo de roteamento [Carro / Caminhão / Motocicleta](../routing/car-based-routing.md#route-parameters---car).
- Você também pode selecionar estradas específicas que não serão usadas para roteamento usando a opção *[Evitar estradas](../../map/map-context-menu.md#avoid-road)* através do *menu de contexto do mapa* ou usando o *[menu Evitar estradas](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- A estrada deve ser marcada no zoom máximo, pois o OsmAnd pode interpretar mal o toque e bloquear, por exemplo, o lado incorreto de estradas de duas vias ou calçadas.
- A função Evitar estradas específicas funciona incorretamente com a opção [Navegação por trilha](../setup/gpx-navigation.md) e não afeta a navegação simplificada de [Marcadores](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Evitar Estradas {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Botão de navegação → Configurações → Evitar estradas...*

![Menu Evitar estradas Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Botão de navegação → Configurações → Evitar estradas*

![Menu Evitar estradas iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

Neste menu, você pode cancelar a seleção anterior da estrada que deve ser evitada. Para fazer isso, toque em um X (Android) ou em um **"-"** vermelho oposto à estrada que você pretende usar para o cálculo da rota.

Usando a opção *Selecionar no mapa*, você pode continuar a marcar estradas como inválidas para roteamento no mapa do OsmAnd.

Quando você seleciona uma estrada para evitar usando o *menu de contexto do mapa* ou o *menu Evitar estradas*, a lista de estradas será mostrada acima da tela do mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de estradas a evitar no mapa Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de estradas a evitar no mapa iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Exportar / Importar {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar estrada no mapa Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Exportar estrada no mapa Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Exportar estrada no mapa iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Exportar estrada no mapa iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Dependendo das configurações do seu dispositivo e dos aplicativos disponíveis, toda a sua lista de estradas a serem evitadas ou apenas uma delas pode ser [exportada](../../personal/import-export.md#export) como um arquivo `.osf` para diferentes locais. Selecione as estradas que deseja exportar na lista sugerida.

Você pode [importar](../../personal/import-export.md#import) estradas para evitar durante o cálculo da rota de outras fontes no formato de arquivo `.osf`. Além disso, isso pode ser feito usando a *opção Importar* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Você pode optar por importar todos os dados ou apenas algumas estradas a serem evitadas (marcando uma estrada com um tique na lista).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Importar estrada no mapa Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Importar estrada no mapa iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
A maneira mais conveniente de sincronizar estradas a serem evitadas entre seus dispositivos é usar o [OsmAnd Cloud](../../personal/osmand-cloud.md) (assinatura Pro necessária).
:::


## Considerar Limitações Temporárias {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

A opção *Considerar limitações temporárias* permite levar em conta restrições temporárias de estradas ao calcular rotas. Elas podem incluir coisas como obras na estrada ou fechamentos de estradas por algum motivo (um acidente, reparos na estrada, desastres naturais). Habilitar esta opção pode ajudá-lo a evitar desvios ou atrasos inesperados. Observe que, às vezes, essas informações podem estar desatualizadas.
No OpenStreetMap, essas informações geralmente são marcadas com a tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Seção de Desenvolvimento {#development-section}

A **Seção de Desenvolvimento** das configurações de *Parâmetros da Rota* (*Menu → Configurações → perfil do aplicativo → Configurações de navegação → Parâmetros da rota → Desenvolvimento*) fica visível apenas quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado. Inclui configurações como *Tipo de roteamento (Android) / Algoritmo de roteamento (iOS), Aproximação GPX (somente Android), Zoom automático e Dados de atualizações ao vivo (somente Android)*. Leia o artigo [Configurações de navegação](../../navigation/guidance/navigation-settings.md#development-settings) para uma descrição detalhada.