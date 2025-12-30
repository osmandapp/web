---
source-hash: 75f7c0d57899f1fdc282afb4724e5f3f76160e359fd1c402d5453ff85ce761c8
sidebar_position: 4
title:  Rotas de ciclomotor
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

*Rotas de ciclomotor* permite que os condutores construam uma rota ótima (mais rápida), levando em consideração as especificidades da condução de um veículo como um ciclomotor ou scooter. O processo de roteamento considera vários fatores para um movimento seguro, confortável e legal em estradas ou ciclovias. O Perfil de Ciclomotor evita estradas de alta velocidade: em particular, não utiliza autoestradas e estradas onde o limite de velocidade é superior a 80 km/h ao calcular uma rota.

:::note
Por padrão, *Perfil de Ciclomotor* está desativado. Para usar este perfil para roteamento, você precisa ativá-lo em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Parâmetros de Rota - Ciclomotor {#route-parameters---moped}

*Rotas de ciclomotor* pode ser configurado de acordo com suas necessidades na [seção Parâmetros de Rota](../guidance/navigation-settings.md#route-parameters) das configurações de Navegação.  

As configurações de roteamento do ciclomotor são muito simples e consistem em apenas algumas opções.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configurações de roteamento de ciclomotor Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de roteamento de ciclomotor iOS](@site/static/img/navigation/routing/moped_routing_new_ios.png)  

</TabItem>

</Tabs>

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecione as estradas que você deseja evitar durante a navegação.  </summary>![Evitar estradas Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Você pode [selecionar uma estrada no mapa](../../map/map-context-menu/#avoid-road) ou escolher o(s) tipo(s) de estrada na lista:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (um tipo de transporte aquático, que transporta veículos através de corpos d'água)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Restrições de acesso privado serão ignoradas ao calcular a rota.  | A tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* é usada no OSM para descrever restrições no uso de rodovias e outras rotas de transporte, bem como edifícios, entradas, comodidades e entidades de lazer.   |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Leva em consideração restrições temporárias do OpenStreetMap ao calcular a rota (por exemplo, fechamentos sazonais ou obras de construção).  | Os dados do OSM podem estar desatualizados, então algumas restrições temporárias podem não ser mais válidas no momento da navegação.   |