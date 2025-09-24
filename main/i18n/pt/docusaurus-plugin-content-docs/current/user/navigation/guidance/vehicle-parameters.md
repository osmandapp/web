---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title: Parâmetros do veículo
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



## Visão geral

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

Para um cálculo de rota ideal no OsmAnd, você deve considerar os seguintes parâmetros do veículo:

1. Defina a [*Velocidade Padrão* ou *Velocidades da Estrada*](#road-speeds), como a [velocidade mínima e máxima](#road-speeds) do veículo. Isso ajudará o aplicativo a determinar o tempo necessário para completar a rota e permitirá que ele escolha a melhor rota, considerando os limites de velocidade em diferentes segmentos da estrada.
2. Especifique o [*tipo*](#fuel-used-by-motor) de combustível usado pelo motor. Isso permitirá que o aplicativo estime as emissões de CO2.
3. Insira a [*capacidade do seu tanque*](#fuel-tank-capacity) para rastrear com precisão o seu nível de combustível e consumo.
4. Defina os [*parâmetros de tamanho e peso*](#size-parameters) do seu veículo, o que pode ajudar o aplicativo a calcular a rota ideal e evitar obstáculos na estrada devido a restrições.

Definir corretamente os parâmetros no aplicativo OsmAnd o ajudará a evitar problemas ao navegar por uma rota, escolher a mais adequada de acordo com o tipo de veículo e as restrições da estrada, e calcular o tempo para sua viagem.


## Parâmetros de Tamanho {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Os parâmetros do veículo afetam a navegação e a construção da rota porque determinam a disponibilidade de estradas, pontes, balsas, barragens e outras infraestruturas. Se a altura, largura, comprimento ou peso de um veículo exceder os valores permitidos para certas seções da estrada, o sistema de navegação OsmAnd encontrará uma rota alternativa para evitar obstáculos ao longo do caminho.  

- As unidades de medida corresponderão às configurações selecionadas em *Configurações gerais → [Unidades e formatos](../../personal/profiles.md#units--formats)*.
- Os parâmetros do veículo podem ser definidos manualmente.
- Se você selecionar manualmente o parâmetro de medição do veículo, o aplicativo oferecerá o valor mais próximo da lista pronta. Isso é necessário para evitar erros e construir a rota de forma mais correta.
- Você pode escolher os parâmetros do veículo em uma lista pronta de tamanhos.
- Não defina o tamanho, *Nenhum*, o que significa que nenhuma restrição no parâmetro selecionado será aplicada.  

### Limites {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> O parâmetro Peso está disponível apenas em tipos de navegação como [*Carro, Caminhão* e *Motocicleta*](../../navigation/routing/car-based-routing.md).  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> O parâmetro Altura está disponível apenas em tipos de navegação como *[Carro, Caminhão, Motocicleta](../../navigation/routing/car-based-routing.md)* e *[Barco](../../navigation/routing/boat-navigation.md)*.  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> O parâmetro Comprimento está disponível apenas em tipos de navegação como [*Carro, Caminhão* e *Motocicleta*](../../navigation/routing/car-based-routing.md).  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> O parâmetro Largura está disponível apenas em tipos de navegação como *[Carro, Caminhão, Motocicleta](../../navigation/routing/car-based-routing.md)* e *[Barco](../../navigation/routing/boat-navigation.md)*.  

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Os limites nos parâmetros do veículo podem ser importantes para a navegação e a segurança rodoviária. Algumas dessas restrições podem incluir:  

1. Restrições a veículos que se deslocam em certas áreas urbanas.  
2. Restrições ao movimento de veículos em seções específicas da estrada, como onde há pontes, túneis com espaço limitado, viadutos de baixa elevação, curvas complexas ou outras estruturas.  
3. Limites de peso por eixo do veículo podem ser especialmente importantes para caminhões.
4. Restrições para veículos que se deslocam em certas condições, como altas temperaturas, estradas molhadas ou com neve, à noite ou em condições climáticas com visibilidade limitada.


## Parâmetros de combustível {#fuel-parameters}

### Combustível Usado pelo Motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rota de navegação Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rota de navegação iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Se você selecionar o tipo de motor nos parâmetros do veículo, os [***dados de pegada de CO2***](../../navigation/setup/route-details.md#elevation-info) serão exibidos acima do gráfico em [Detalhes da Rota](../setup/route-details.md).
Estão disponíveis seis tipos de combustível: ***Gasolina, Diesel, GLP, GNV, Elétrico*** e ***Híbrido***.  

**Aplicabilidade:**

A configuração **Combustível usado pelo motor** está disponível apenas em navegação baseada em veículo, como *[Carro, Motocicleta e Caminhão](../../navigation/routing/car-based-routing.md)*.


### Capacidade do tanque de combustível {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


O parâmetro **Capacidade do tanque de combustível** permite que você rastreie o [nível de combustível](../../widgets/info-widgets.md#vehicle-metrics-widgets) e o [consumo](../../widgets/info-widgets.md#vehicle-metrics-widgets) do seu veículo com mais precisão, fornecendo o volume total do seu tanque. O valor padrão é ~50 ***litros***. A unidade de medida para a capacidade de combustível é determinada pelo [Perfil (Configurações)](../..//personal/profiles.md#units--formats) configurado em *Menu → Configurar perfil → Configurações gerais → Unidades e Formatos → Unidade de volume*.

**Aplicabilidade:**

A configuração **Capacidade do tanque de combustível** está disponível apenas em navegação baseada em veículo. Para tipos de navegação como *Bicicleta*, *Equitação*, *A pé* e *Esqui*, este parâmetro não é exibido nos Parâmetros do Veículo.

## Parâmetros de velocidade

### Velocidade Padrão {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

A **Velocidade padrão** é a velocidade de movimento padrão para este modo de transporte ([Limites de velocidade padrão](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Para os perfis *Caminhada*, *Equitação* e *Ciclismo*, em pequenos incrementos equivalentes a 0,1 km/h (mph) ([Unidades e formatos](https://osmand.net/docs/user/personal/profiles#units--formats)), e para os outros perfis, em incrementos equivalentes a 1 km/h (1 mph). É usado:
- Para estimar o [tempo da rota](../../widgets/nav-widgets.md#time-to-intermediate) quando a velocidade não pode ser determinada a partir das estradas, como [Navegação GPX](../setup/gpx-navigation.md), [Rotas de Esqui](../routing/ski-routing.md), [Rotas de Barco](../routing/boat-navigation.md), [Pedestre](../routing/pedestrian-routing.md) e outros perfis semelhantes.
- Para determinar quando os [anúncios de voz](../guidance/voice-navigation.md) são ativados.
- Para determinar o ETA para marcadores de mapa por navegação em linha reta se a velocidade média ainda não foi calculada.



 É usado para calcular o tempo de chegada e determinar a rota ideal com base na velocidade de movimento que o aplicativo considera típica. Por exemplo, carro, transporte público, pedestre ou a velocidade que você definiu manualmente.


### Velocidades da Estrada {#road-speeds}


![Configurações de Navegação](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Para alguns tipos de navegação, a velocidade mínima e máxima permitida pode ser definida. Se for definida, o motor de roteamento assume que o veículo ou modo de transporte não se moverá mais rápido que o limite e não se moverá mais lento que a velocidade mínima. 
Por exemplo, permite criar uma rota **eficiente em termos de combustível** onde o consumo de combustível é ideal na **velocidade máxima** definida e o motor encontrará uma rota mais curta, evitando estradas mais longas, mas mais rápidas.

- **Velocidade mínima**  
    A configuração define a velocidade mínima de condução para todos os tipos de estrada na rota. Aumenta a prioridade para estradas com uma velocidade recomendada inferior à velocidade mínima.  
- **Velocidade máxima**  
    A configuração define a velocidade máxima de condução e diminui a prioridade para estradas com uma velocidade possível superior à máxima.




## Artigos Relacionados {#related-articles}

- [Parâmetros de rota](../routing/osmand-routing.md#routing-types)
- [Configurações de navegação](./navigation-settings.md)
- [Comandos de voz / Notificações](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)