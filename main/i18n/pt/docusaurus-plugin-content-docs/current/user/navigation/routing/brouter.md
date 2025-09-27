---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title: BRouter
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

## Visão geral {#overview}

:::caution SOMENTE ANDROID
O algoritmo de roteamento de terceiros BRouter está disponível apenas para a versão Android do aplicativo OsmAnd.
:::

*BRouter* é um algoritmo de roteamento de terceiros que pode ser usado no aplicativo OsmAnd para [modo de navegação offline](../guidance/navigation-settings.md#navigation-type). Ele foi projetado para otimizar uma rota com base em diferentes parâmetros, como tempo, distância ou tipo de veículo.

[BRouter](http://brouter.de/) usa dados do OpenStreetMap para criar uma rota e, em seguida, a ajusta com base nos parâmetros especificados. Ele usa rotas pré-calculadas para construir rapidamente uma rota offline. Ele também permite personalizar perfis de roteamento, que são definidos por um conjunto de parâmetros para considerar vários fatores na seleção da rota. O arquivo [BRouter readme.txt](http://brouter.de/brouter/readme.txt) explica em mais detalhes como instalar e usar o programa.

O OsmAnd oferece a capacidade de selecionar rotas com o BRouter e configurar perfis de roteamento para definir melhor a rota de acordo com suas necessidades.

Para mais informações, você pode visitar o [site oficial do Brouter](http://www.brouter.de/brouter/algorithm.html).

A integração do BRouter no OsmAnd mudou muito durante o verão de 2019. Este guia pressupõe que você esteja usando o aplicativo BRouter para Android na versão 1.5.0 ou superior, bem como o OsmAnd na versão 3.4 ou superior.

:::note
O algoritmo de roteamento de terceiros BRouter está disponível apenas para a versão Android do aplicativo OsmAnd.
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>

## Como configurar {#how-to-configure}

Siga este guia para instalar e configurar o aplicativo de terceiros *BRouter Offline Navigation* para uso no OsmAnd.

**1.** Para começar, você precisa instalar o aplicativo BRouter em seu dispositivo Android a partir do [F-Droid](https://f-droid.org/packages/btools.routingapp) ou da [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) em seu dispositivo.
**2.** Em seguida, para navegar usando o aplicativo OsmAnd ao longo de rotas pré-calculadas com o BRouter, você precisa:

- Abra o aplicativo BRouter e toque em *Gerenciador de Downloads*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

- Aumente o zoom e selecione as áreas em que deseja rotear. Em seguida, clique em "Iniciar Download" e o BRouter começará a baixar os arquivos de [segmentos](http://brouter.de/brouter/segments4/) para as áreas selecionadas.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Observação** que você terá que repetir esta etapa periodicamente, sempre que quiser ter uma versão atualizada dos dados OSM usados para o roteamento.

**3.** Feito isso, inicie novamente o aplicativo BRouter e escolha a entrada "BRouter App" no *Menu Principal*. Escolha um perfil de roteamento dependendo do seu modo de viagem. Pode ser ciclismo, ciclomotor, caminhada ou trekking. Uma lista de perfis disponíveis para download no formato *brf* pode ser encontrada [aqui](http://brouter.de/brouter/profiles2/). Ou você pode tentar usar o perfil de roteamento em [BRouter-online](http://brouter.de/brouter-web/).
Clique em "Modo de Serviço". Em seguida, marque as caixas para os modos de roteamento para os quais você deseja usar este perfil. Você pode usar dois perfis diferentes por modo de transporte, que serão mapeados para as predefinições "mais curto" e "mais rápido" (estas são apenas rotulagens) no OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Se você já carregou algum segmento anteriormente, ele será exibido no mapa do BRouter. Os segmentos têm quatro estados:

- Quadrado *"Verde"* - Novo segmento selecionado para download.
- Quadrado *"Azul"* - O segmento com dados atualizados.
- Quadrado *"Cinza"* - O segmento já foi baixado, mas requer atualização.
- Quadrado *"Amarelo"* - O segmento está sendo atualizado.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Quando você carregou os segmentos de mapa necessários com o BRouter e selecionou um perfil de roteamento nele, todas as próximas configurações desse tipo de navegação são feitas no aplicativo OsmAnd.

**6.** Você pode criar um "Perfil de aplicativo" no OsmAnd que usará o BRouter para roteamento offline.
Use o tipo de roteamento *BRouter (offline)* com qualquer [perfil](../../personal/profiles.md) no aplicativo OsmAnd. Para fazer isso, vá para o *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* principal e crie um novo perfil baseado no perfil base de sua escolha (ciclismo aqui, para roteamento de bicicleta), com um nome personalizado de sua escolha ("BRouter" na captura de tela abaixo) e usando "BRouter (offline)" para navegação.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

O aplicativo BRouter deve ser iniciado antes do OsmAnd para que esta entrada específica apareça no OsmAnd. Portanto, se você não conseguir encontrar a opção de navegação "BRouter (offline)", você deve forçar o fechamento do OsmAnd e reiniciá-lo.

## OsmAnd Versão 4.7.1 {#osmand-version-471}

A partir da versão 4.7.1, o Osmand suporta o parâmetro de perfil para mapeamento: Desde a versão 3 do Osmand, muitos perfis podem ser definidos no Osmand e você pode alternar facilmente entre esses perfis. Um novo perfil deve ser criado, por exemplo, copiando o perfil *Ciclismo* existente e dando-lhe um novo nome no formato Brouter[fastbike]. Você pode usar qualquer um dos perfis BRouter existentes no nome que estão instalados em seu dispositivo. Todos os arquivos de perfil têm um formato de nome 'xxxxxxx.brf'. Ou você pode criar um novo perfil próprio, como 'meuperfil.brf'.

A convenção de nomenclatura no perfil do OsmAnd é importante, pois o perfil do BRouter incluído nesse perfil estabelece a ponte real entre o OsmAnd e o BRouter.

- Se no Osmand um perfil tiver *BRouter* definido como serviço de navegação
- E o nome do perfil se parecer com "Brouter[minhastring]"

Então o perfil "minhastring" será usado no aplicativo Brouter. Este novo mapeamento substitui, nesse caso, o mapeamento básico definido acima e baseado no arquivo "serviceconfig.dat".

### Exemplos: Nome do perfil Osmand-app Brouter-app {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] o perfil "trekking" será usado arquivo: trekking.brf
Brouter[fastbike] o perfil "fastbike" será usado arquivo: fastbike.brf
....
```

Observação:
Atualmente, o Osmand não verifica o nome definido (sensível a maiúsculas e minúsculas) para o perfil do Brouter (minhastring).
Se nenhum perfil for encontrado, o roteamento falhará com "Não foi possível calcular a rota..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Como usar {#how-to-use}

Esta seção descreve uma comparação do BRouter com o roteamento interno do aplicativo OsmAnd.

Quando o BRouter está configurado, podemos comparar a velocidade de pré-cálculo dos dados de roteamento do BRouter com o roteamento interno do OsmAnd. Vamos escolher dois pontos aleatórios na Holanda e começar a calcular a viagem. Para isso, definimos um estilo de condução equilibrado sem usar dados de altitude para o perfil base. O tempo de cálculo para esta viagem é de 14,5 segundos para nossa rota interna do OsmAnd. O tempo de cálculo da rota ao usar o roteamento do BRouter é inferior a 1 segundo.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>

## Parâmetros de rota {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parâmetro | Descrição | Observação |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | Na maioria dos casos, a rota mais curta será sugerida. Muitas vezes, essa rota pode levar mais tempo do que se a configuração estivesse desativada |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Leia sobre a opção Considerar limitações temporárias neste [artigo](../routing/osmand-routing.md#consider-temporary-limitations). | O algoritmo de roteamento considera as restrições de tempo especificadas no OpenStreetMap. Observe que, em alguns casos, as informações do OSM podem estar desatualizadas. |

### Outras configurações de roteamento {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navegação → Configurações*, [imagem](../routing/online-routing.md#online-routing-setting)). Se esta opção estiver ativada, o OsmAnd adiciona dois segmentos à trilha Brouter calculada: um de *[Minha localização](../../map/interact-with-map.md#my-location-and-zoom)* ao ponto de partida da trilha e outro do final da trilha ao ponto final da sua rota. Esta opção está ativa se a distância de ou para a trilha exceder 60 metros.

- Na seção [*Recalcular rota*](../../navigation/guidance/navigation-settings.md#recalculate-route) dos *Parâmetros de rota*, você pode ativar e ajustar as opções de recálculo de rota.

- Na seção [*Desenvolvimento*](../guidance/navigation-settings.md#development-settings) dos *Parâmetros de rota*, você pode experimentar novos recursos de roteamento que estão atualmente em fase de teste. Observe que essas configurações estão disponíveis apenas quando o [plugin de desenvolvimento do OsmAnd](../../plugins/development.md) está ativado.