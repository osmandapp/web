---
source-hash: a8559f43cff19c4a14831feb61c4c3facdea6dab64c9c232c37b5ba47e810958
sidebar_position: 1
title:  Configurações de Navegação
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

Para uma navegação bem-sucedida, é importante configurar corretamente as configurações apropriadas de acordo com as suas necessidades e a forma como viaja – de carro, a pé, a cavalo ou de esqui. Este artigo descreve os parâmetros básicos da rota, [Instruções de voz](#voice-prompts), [Alertas na tela](#screen-alerts), [Comportamento do mapa durante a navegação](#map-during-navigation) e a [Aparência das linhas de rota](#customize-route-line). Também detalha as [Configurações do veículo](#vehicle-parameters), como a velocidade padrão, o tipo de motor para o cálculo de CO2, a capacidade do tanque de combustível e as limitações de tamanho/peso. Ajustar estas configurações irá ajudar você a tirar o máximo partido do OsmAnd e a chegar ao seu destino sem atrasos desnecessários.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Como Abrir {#how-to-open}

Esta seção apresenta as configurações de navegação necessárias para calcular e traçar uma rota, que você pode definir para o perfil selecionado. Este menu inclui configurações para [Preparação da rota](../setup/route-navigation.md), a [Tela do mapa durante a navegação](../guidance/map-during-navigation.md), e o que você define nas *Configurações de navegação* afeta diretamente a exibição de dados nos [Detalhes da rota](../setup/route-details.md).

Existem três formas de acessar o menu de Configurações de Navegação.

- Vá para *Menu principal → Configurações*, selecione o *Perfil* necessário e toque em *Configurações de navegação*.

- Toque no ícone *Navegação* na tela do mapa, depois selecione o *ícone Configurações → Configurações de navegação*.

- Vá para *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>* principal.  

:::info
O perfil padrão *Navegar no mapa* não tem configurações de navegação.  
:::


## Tipo de Navegação {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

A navegação é uma parte importante de uma viagem, e escolher *o tipo certo* de navegação pode tornar a sua viagem muito mais fácil. O tipo de navegação que escolher pode depender de como você viaja e se tem uma conexão com a internet.  

- **Navegação online**
Utiliza principalmente um sistema de rotas especial ou um website que permite à aplicação OsmAnd traçar uma rota com base em informações atuais e outros fatores. Você pode ler sobre como escolher a melhor rota online no artigo [Rotas online](../routing/online-routing.md). Este tipo de navegação está disponível apenas para a *versão Android* da aplicação.  

- **Navegação offline**
Não requer acesso à internet e oferece uma seleção mais ampla de [tipos de navegação](../routing/osmand-routing.md#routing-types) que podem ser usados para calcular uma rota. Entre eles estão *bicicleta, barco, carro, a pé, esqui* e *linha reta*. Atualmente, existem 13 tipos básicos de rotas, bem como um tipo de rota externa [BRouter](../routing/brouter.md) que oferece oportunidades adicionais de rotas.  

O tipo de navegação determina quais as regras usadas para calcular rotas. Se você precisar de um tipo específico de navegação, pode **importar o seu próprio arquivo de rotas *XML* modificado**. Leia mais sobre as regras de rotas na nossa [página do GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). E existe um artigo separado sobre o formato XML e como usá-lo, [Estilo de Renderização de Mapa](../../../technical/osmand-file-formats/osmand-rendering-style.md), que pode ajudar você a criar um arquivo de rota.  


## Parâmetros da Rota {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** são configurações que determinam como a aplicação irá calcular uma rota para chegar a um destino, considerando fatores como o tipo de transporte, prioridades de rota, condições da rota, complexidade da rota e preferências do usuário.  

Para cada [perfil](../../personal/global-settings.md#default-profile), exceto para *Navegar no Mapa*, o OsmAnd seleciona por padrão o [tipo de navegação](#navigation-type) ideal e os [parâmetros de rota](../routing/osmand-routing.md#routing-types) relevantes. No entanto, você pode escolher qualquer tipo que deseje e alterar os parâmetros dependendo das suas preferências e das condições externas da próxima viagem.  

Todos os parâmetros de rota são descritos em detalhe nas seções correspondentes da documentação:  
*[Rotas de carro (Caminhão, Motocicleta)](../routing/car-based-routing.md), [Rotas de bicicleta (MTB)](../routing/bicycle-based-routing.md), [Rotas de ciclomotor](../routing/moped-routing.md), [Rotas para pedestres](../routing/pedestrian-routing.md), [Rotas de transportes públicos](../routing/public-transport-navigation.md), [Rotas a cavalo](../routing/horse-routing.md), [Rotas de esqui](../routing/ski-routing.md), [Rotas de trem](../routing/train-routing.md), [Rotas de barco](../routing/boat-navigation.md), [Rotas diretas para um ponto](../routing/direct-to-point-routing.md), [Rotas em linha reta](../routing/straight-line-routing.md), [Rotas online](../routing/online-routing.md), [Rotas BRouter](../routing/brouter.md)*.  


### Recalcular Rota {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

O parâmetro **Recálculo de Rota** altera automaticamente a rota calculada quando você se desvia dela ou dirige na direção oposta. Em ambos os casos, esta configuração ajuda você a manter a sua direção de viagem e a chegar ao seu destino sem perder tempo procurando manualmente uma nova rota.  

| Parâmetro | Descrição | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> em caso de desvio*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Se as [Instruções de voz](../guidance/voice-navigation.md#voice-settings) estiverem ativadas, o OsmAnd anuncia que a rota está sendo recalculada. |
|  *Recalcular rota em caso de direção inversa*  | A sua rota será recalculada se você se mover para o ponto de partida.  |  Com esta configuração desativada, o movimento para o ponto de partida não é considerado um desvio do caminho (desde que você siga a rota calculada).  |


### Configurações de Desenvolvimento {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Menu → Configurações → perfil da aplicação → Configurações de navegação → Parâmetros da rota → Desenvolvimento*

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Menu → Configurações → perfil da aplicação → Configurações de navegação → Parâmetros da rota → Desenvolvimento*

![Configurações de Navegação iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Os parâmetros na seção **Desenvolvimento** são principalmente para usuários avançados e só estão disponíveis quando o [plugin de desenvolvimento OsmAnd](../../plugins/development.md) está ativado.  

| Parâmetro | Descrição |
|:------------|:---------------|
| *Tipo de rota* (*Android*) / *Algoritmo de rota* (*iOS*) | <ul><li>**A*** 2 fases (*Android*) / **A*** (*iOS*) adiciona uma fase extra ao algoritmo padrão para melhorar a qualidade da rota calculada. Esta opção pode ser útil para encontrar rotas em redes rodoviárias grandes e complexas, mas o cálculo da rota pode demorar mais tempo.</li><li>**A* clássico** (*Android*) / **Hierarquias de autoestradas** (*iOS*) otimiza o planejamento de rotas, favorecendo as estradas principais e autoestradas, minimizando o número de curvas e cruzamentos na rota. Particularmente eficaz em longas distâncias.</li><li>**HH (Hierarquias de Autoestradas) x Java** (*apenas Android*) baseia-se na implementação de estruturas de dados hierárquicas para otimizar a busca de caminhos em um mapa, levando em conta as restrições de tempo de execução e o consumo de recursos do dispositivo, e é realizada na plataforma Java.</li><li>**HH (Hierarquias de Autoestradas) x C++** (*apenas Android*) é um algoritmo que utiliza a linguagem de programação C++ para processar eficientemente os dados da rede rodoviária e construir rotas ótimas usando estruturas de dados hierárquicas. É otimizado para o processamento rápido de grandes quantidades de dados e é particularmente eficaz para navegar em mapas com muitas redes rodoviárias.</li></ul> |  
| *Aproximação GPX* (*apenas Android*)  | <ul><li>As aproximações GPX **baseadas em rotas** em **C++ e Java** utilizam dados de rota para aproximar trilhas GPS com rotas rodoviárias existentes, o que melhora a precisão da trilha e reduz o tamanho da trilha.</li><li>As aproximações GPX **baseadas em geometria** em **C++ e Java** funcionam com base em princípios geométricos para aproximar trilhas GPS de forma rápida e precisa, permitindo o processamento eficiente de grandes quantidades de dados.</li></ul> |
| *Zoom automático* | <ul><li>**Discreto** permite ampliar o mapa para um nível de detalhe específico medido em alguns passos discretos.</li><li>**Suave** proporciona uma mudança gradual na escala do mapa com efeitos de animação suaves, sem solavancos ou saltos.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*apenas Android*)  | Utilize [Atualizações em tempo real](../../personal/maps-resources.md#live-updates) durante o percurso. Note que recomendamos usar esta opção apenas para fins de teste.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Instruções de Voz {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Configurações de Navegação por Voz Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Botão <Translate ios="true" ids="routing_settings"/>* *(ou <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Escolher perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Configurações de Navegação por Voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

A primeira parte do artigo *[Instruções de Voz / Notificações](./voice-navigation.md)* descreve em detalhe como configurar as instruções de voz.  

As instruções de áudio durante a navegação ajudam você, como condutor ou pedestre, a chegar ao seu destino enquanto [navega em uma rota selecionada](../setup/route-navigation.md). Contêm informações sobre curvas, direções de condução, sinais de trânsito, distâncias até ao seu destino e outros fatores que podem afetar a sua navegação.  

Se você selecionar uma trilha como ponto de destino, precisa usar a opção [Anexar às estradas](../setup/gpx-navigation.md#attach-to-the-roads) para que as instruções de voz funcionem corretamente.

As *instruções de voz* permitem que você se concentre na estrada e não se distraia com o mapa ou o dispositivo de navegação. Também melhoram a segurança na direção, reduzem o tempo necessário para navegar em terrenos desconhecidos e podem ser úteis para diferentes [tipos de rotas](../routing/osmand-routing.md#routing-types).

Na seção **Anunciar**, você pode escolher quais tipos de notificações devem ser reproduzidas ou mostradas durante a navegação:

- **Direções curva a curva** (apenas Android) – permite ativar ou desativar instruções de navegação padrão como *“Vire à esquerda”*, *“Vire à direita”* ou *“Em 200 metros…”*. Quando a opção está desativada, os anúncios de curvas e nomes de ruas não são fornecidos, enquanto as notificações para pontos de passagem, pontos do usuário e eventos de rota permanecem ativas. Este modo destina-se a atividades como rafting, caminhadas ou ciclismo ao longo de trilhas pré-gravadas, quando apenas são necessários alertas para pontos de passagem adicionados manualmente.
- **Nomes de ruas (TTS)** – anuncia os nomes das ruas ao longo da sua rota.
- **Número de saída** – anuncia o número da saída ao dirigir em autoestradas.
- **Avisos de trânsito** – fornece alertas sobre eventos rodoviários importantes, como congestionamentos ou restrições.
- **Faixas de pedestres** – avisa você quando se aproxima de faixas de pedestres.
- **[Radares de velocidade](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – alerta sobre localizações de radares de velocidade (onde legalmente permitido).
- **Túneis** – informa você quando entra em um túnel.


## Alertas na Tela {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

A configuração de navegação **Alerta na tela** ativa o [**Widget de Alertas**](../../widgets/nav-widgets.md#alert-widget). *Detalhes:*

- Ao se aproximar de um dos obstáculos suportados na estrada, as notificações aparecem no canto inferior esquerdo do mapa.
- Se você configurar as [*instruções de voz e texto*](../../navigation/guidance/voice-navigation.md) disponíveis na aplicação OsmAnd, terá uma viagem mais confortável e segura.
- A aparência e o tempo das instruções dependem das suas configurações de velocidade. Você pode encontrá-las [no artigo](../../../technical/algorithms/voice-prompt-triggering.md).  
- O comportamento dos *Alertas na Tela* também é afetado pela configuração [Mostrar pontos ao longo da rota](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Você pode ***selecionar quais alertas*** deseja ver na tela da aplicação durante a navegação:

- **Limite de velocidade** ([informação da Wiki OSM](https://wiki.openstreetmap.org/wiki/Speed_limits)). Na configuração de alertas na tela, o *Limite de velocidade* é exibido apenas na tela com *Avisos de trânsito* ativados. Se quiser ver os limites de velocidade durante a navegação sem outros avisos, utilize o [widget](../../widgets/nav-widgets.md#speed-limit).
- **Avisos de trânsito** ([informação da Wiki OSM](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Informações adicionais podem ser encontradas no artigo [Tela do mapa durante a navegação](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Faixas de pedestres** ([informação da Wiki OSM](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radares de velocidade** ([informação da Wiki OSM](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Para mais informações sobre a configuração de radares de velocidade no OsmAnd, leia [Tipos de Alerta](../../widgets/nav-widgets.md#alert-types) e o artigo *Configurações globais*, seção [Legal](../../personal/global-settings.md#legal).
- **Túneis** ([informação da Wiki OSM](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Os tipos de avisos têm uma aparência visual diferente, que depende da região de viagem. O OsmAnd não pretende apresentar sinais de trânsito 100% idênticos, mas aponta algumas semelhanças.  
:::


## Mapa Durante a Navegação {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

O **mapa é usado durante a navegação** para determinar a sua localização, planejar a sua rota e orientação do terreno. Durante a navegação, você pode visualizar o mapa com *centralização automática*, movê-lo e *ampliar e reduzir* para ver a área necessária. O mapa também pode exibir marcadores indicando pontos de interesse, rotas, condições meteorológicas, sinais de trânsito e outros objetos para ajudar você a navegar. O mapa pode ser atualizado em *tempo real* e exibe *informações atualizadas* que podem afetar o planejamento da rota.

Você pode aprender como o comportamento do mapa muda durante a navegação no artigo [Tela do mapa durante a navegação](../guidance/map-during-navigation.md).  

## Personalizar Linha de Rota {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Com a configuração **Personalizar Linha de Rota**, você pode escolher a aparência da linha de rota que será visível no mapa durante a navegação. Você pode selecionar a *cor*, a *largura da linha* e a exibição das *setas de conversão* nela. Para cada perfil, você pode escolher uma vista de linha diferente. Todos estes parâmetros são descritos em detalhe no artigo *Tela do mapa durante a navegação* na seção [Aparência da linha de rota](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parâmetros do Veículo {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Para garantir que o OsmAnd calcula a rota mais otimizada, é crucial configurar os parâmetros do seu veículo — incluindo a sua velocidade, dimensões, peso e tipo de combustível — o que permite à aplicação estimar com precisão o tempo de viagem, evitar restrições rodoviárias e monitorar o consumo de combustível, conforme explicado no nosso guia completo sobre [Parâmetros do Veículo](./vehicle-parameters.md).


## Orientação Detalhada da Trilha {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Anexar às estradas 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Configurações de Navegação Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Orientação detalhada da trilha*

![Configurações de Navegação](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Configurações de Navegação](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

A funcionalidade **Orientação detalhada da trilha** melhora a precisão da navegação de rota ao utilizar **rotas baseadas em trilhas**. Ao selecionar uma trilha como destino, você pode ativar a configuração [Anexar às estradas](../setup/gpx-navigation.md#attach-to-the-roads) no menu [Seguir trilha](../setup/gpx-navigation.md#follow-track-options). Isto garante que a trilha está alinhado com as estradas existentes, para que a navegação forneça instruções precisas sobre rotatórias, curvas, limites de velocidade, faixas de conversão e nomes de ruas para as estradas.

Existem duas opções para utilizar a *Orientação detalhada da trilha*:

- **<Translate android="true" ids="ask_every_time"/>** (*configurações padrão*) – A opção *Anexar às estradas* aparecerá na seção [Detalhes da Rota](../setup/route-details.md) sempre que uma rota baseada em trilha for calculada. Isto permite que você decida se deseja aplicar o anexo à estrada para cada sessão de navegação.

- **<Translate android="true" ids="shared_string_always"/>** – O processo de anexo à estrada será aplicado automaticamente para cada *navegação por trilha* sem exigir confirmação manual.

Para mais informações sobre como utilizar a navegação baseada em trilhas, visite [Navegação por Trilha](../setup/gpx-navigation.md).


## Artigos Relacionados {#related-articles}

- [Parâmetros da rota](../routing/osmand-routing.md#routing-types)
- [Preparação da rota](../setup/route-navigation.md)
- [Navegação por trilha](../setup/gpx-navigation.md)
- [Navegação por marcadores](../setup/markers-navigation.md)
- [Detalhes da rota](../setup/route-details.md)
- [Tela do mapa durante a navegação](./map-during-navigation.md)
- [Instruções de voz / Notificações](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)