---
source-hash: 0d53a22616cf8e2e6cbef10c62b91267fdc834a708913b0ff57e3e2d168a7e90
sidebar_position: 4
title: Perfis (Configurações)
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

O OsmAnd oferece uma variedade de perfis padrão adaptados para diferentes atividades, incluindo condução, ciclismo, caminhada e atividades mais especializadas, como esqui e navegação. Esses perfis são projetados para aprimorar sua experiência de navegação de acordo com a atividade em que você está envolvido. Cada perfil inclui opções configuráveis, permitindo ajustar as configurações e incorporar plug-ins adicionais para atender às suas preferências.

- Certos perfis, como *Esqui* e *Barco*, possuem **recursos adicionais** que se tornam disponíveis apenas quando os plug-ins correspondentes são ativados.

     - Os plug-ins podem ser ativados navegando em *Menu → Plug-ins → Visualização do mapa de esqui* ou *Visualização do mapa náutico*.
     - A ativação dos plug-ins fornece aos perfis os recursos essenciais para atender aos requisitos específicos dessas atividades.

- É importante notar que alguns perfis, como **Caminhão**, **Motocicleta**, **Ciclomotor**, **Trem**, **Aeronave**, **Barco** e **Equitação**, não são ativados por padrão.

     - Para acessar e usar esses perfis, você precisa ativá-los manualmente em *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - Esse método ajuda a manter uma lista organizada e relevante de perfis, ativando apenas aqueles necessários para atividades específicas.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Navegar no mapa ou qualquer outro perfil)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Configuração de Perfil {#profile-configuration}

:::caution Aplicando configurações apenas a um perfil específico
Todas as configurações se aplicam exclusivamente ao perfil de aplicativo atualmente selecionado.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

Esta seção contém todas as configurações relacionadas à aparência, opções de navegação, exibição do mapa, menu de configurações e tela de perfil.


### Backup Gratuito na Nuvem {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

O OsmAnd permite [fazer backup](../personal/osmand-cloud.md#osmand-start) das configurações do seu perfil de aplicativo para o OsmAnd Cloud, garantindo que suas configurações sejam armazenadas com segurança e facilmente restauradas nas versões Android, iOS e Web. Esse recurso de backup protege suas configurações em caso de falha do dispositivo ou reinstalação do aplicativo. Você pode se beneficiar desse plano especial usando o [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).

Você deve ter uma conta [OsmAnd Cloud](../personal/osmand-cloud.md#login) para usar o *Backup Gratuito de Configurações*. Se você tiver uma assinatura *OsmAnd Pro* ou uma conta *OsmAnd Cloud* ativa, o banner de promoção não será exibido.


## Configurações Gerais {#general-settings}

Esta seção contém configurações para o tema do aplicativo e botão da bússola, unidades e formatos de dados do mapa e do perfil, dispositivos de entrada externos e muitas outras configurações para criar a configuração ideal para o perfil escolhido.

### Aparência {#appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Permite definir um tema diurno e noturno para o aplicativo, que pode ser aplicado a um perfil ou a todos de uma vez. Esta opção não altera as configurações do [modo de mapa](../map/vector-maps.md#map-mode).
  - *<Translate android="true" ids="dark_theme"/> tema*
  - *<Translate android="true" ids="light_theme"/> tema*
  - *<Translate android="true" ids="system_default_theme"/>*
      Aplica o tema do sistema. Por padrão, e para todos os novos usuários, o estilo do mapa corresponde ao tema claro ou escuro selecionado nas configurações do sistema do seu dispositivo.
- **<Translate android="true" ids="rotate_map_to"/>**. Permite escolher o [modo de orientação do mapa](../map/interact-with-map.md#map-orientation-modes) para o perfil selecionado.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Define e bloqueia a posição da tela no aplicativo OsmAnd. Este recurso não é suportado no iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Somente Android*). Abre o menu de controle da tela, onde você pode selecionar opções para a tela do dispositivo durante a navegação para economizar o consumo da bateria do dispositivo.


### Unidades e Formatos {#units--formats}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profiles_units_formats_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

Na seção **Unidades e Formatos**, você pode ajustar as unidades de medida e os formatos para se alinhar às suas preferências pessoais e padrões regionais, garantindo que todos os dados sejam exibidos de forma conveniente e familiar.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>De acordo com a localização do dispositivo</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 pés (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 yd / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 pés / 1000 m |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Exemplo: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Exemplo: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Exemplo: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zona Norte Leste) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Exemplo: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Exemplo:  9F2X4WFJ+7W ([Código de Localização Aberta](https://en.wikipedia.org/wiki/Open_Location_Code) representa área 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Somente versão Android) | Exemplo: 2 215 227.87, 830 915.9 ([Sistema de coordenadas suíço](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Somente versão Android) | Exemplo: 4 215 227.87, 1 830 915.9 ([Sistema de coordenadas suíço](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Graus 180° | Todos os valores angulares têm leituras de 0° a 180° e de 0° a -180°.  |
|          | Graus 360° | Todos os valores angulares têm leituras de 0° a 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | Todos os valores angulares têm [valor em milirradianos](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 nós |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europa, Ásia, América Latina, Canadá, Japão, Índia, Austrália |
|  | <Translate android="true" ids="imperial_gallons"/> | Reino Unido e similares |
|  | <Translate android="true" ids="us_gallons"/> | Estados Unidos |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>** (*Somente Android*)| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *Para medições precisas*, escolha como as informações de distância são exibidas nos widgets de navegação, como a distância até um ponto, a próxima curva ou uma faixa específica. |
|          | <Translate android="true" ids="round_up"/> | *Para melhor legibilidade*, os números exibidos nos widgets de navegação (distância até um ponto, próxima curva ou faixa) serão arredondados para ter menos dígitos. <br/> Por exemplo: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Outros {#other}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

A seção **Outros** fornece configurações de perfil adicionais para personalizar a interface e os controles de entrada do OsmAnd. Essas configurações permitem configurar dispositivos externos, ajustar preferências de animação e alternar o modo de tela cheia.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Conecte controladores externos como *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>* ou *<Translate android="true" ids="sett_parrot_ext_input"/>* para operar o OsmAnd usando botões físicos.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Somente Android*) – Ativa ou desativa a capacidade de usar os botões de volume do seu dispositivo para [ampliar e reduzir](../map/interact-with-map.md#my-location-and-zoom) o mapa.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Somente Android*) – Suaviza a rotação do mapa com [movimento gradual](https://en.wikipedia.org/wiki/Kalman_filter), reduzindo mudanças repentinas de posição. Isso introduz um pequeno atraso (*menos de 1 segundo*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Somente Android*) – Usa o [sensor magnético](https://en.wikipedia.org/wiki/Kalman_filter) do seu dispositivo para estabilizar a rotação do mapa, reduzindo mudanças abruptas. Isso também introduz um ligeiro atraso.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Somente Android*) – Toque em um espaço vazio no mapa para ocultar botões de controle e widgets, maximizando a visibilidade do mapa.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Somente Android*) – Desativa as animações no modo de navegação para transições de tela mais rápidas.

- **<Translate android="true" ids="position_animation"/>** (*Somente Android*) – O ícone de [posição](../map/interact-with-map.md#my-location-and-zoom) anima com cada ponto GPS recebido (uma vez por segundo). Um ligeiro atraso em seu movimento pode ser perceptível, especialmente durante movimentos rápidos ou flutuações do sinal GPS. Você pode ajustar esse efeito usando a configuração *Tempo de Previsão*: valores mais altos aumentam a suavidade, mas adicionam atraso, valores mais baixos reduzem o atraso, mas podem tornar o movimento menos suave.


## Configurações de Navegação {#navigation-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

Para uma visão detalhada das opções de navegação, consulte o artigo [Configurações de Navegação](../navigation/guidance/navigation-settings.md), que explica como configurar o OsmAnd para uma experiência de navegação ideal.

- [Tipo de navegação](../navigation/guidance/navigation-settings.md#navigation-type) - Escolha o modo de navegação apropriado com base no seu método de viagem e disponibilidade de internet.

- [Parâmetros de rota](../navigation/guidance/navigation-settings.md#route-parameters) - Defina como o OsmAnd calcula as rotas, incluindo preferências para evitar certas estradas ou selecionar tipos de rota.

- [Alertas de tela](../navigation/guidance/navigation-settings.md#screen-alerts) - Ative o *Widget de Alertas* para exibir notificações em tempo real para limites de velocidade, curvas e outras condições importantes da estrada.

- [Comandos de voz](../navigation/guidance/navigation-settings.md#voice-prompts) - Ative a orientação de áudio para receber instruções de navegação faladas enquanto dirige ou caminha ao longo de uma rota selecionada.

- [Parâmetros do veículo](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configure as configurações específicas do veículo, como velocidade máxima e altura do veículo, para garantir um roteamento preciso e evitar estradas restritas.

- [Personalizar linha de rota](../navigation/guidance/navigation-settings.md#customize-route-line) – Ajuste a cor, largura e estilo da linha de rota exibida no mapa para melhor visibilidade durante a navegação.

- [Mapa durante a navegação](../navigation/guidance/navigation-settings.md#map-during-navigation) – Visualize o posicionamento em tempo real no mapa, acompanhe o progresso ao longo da rota e melhore a orientação usando pontos de referência.

- [Orientação detalhada da trilha](../navigation/guidance/navigation-settings.md) – Melhore a navegação curva a curva alinhando sua rota com as estradas mapeadas. Configurações disponíveis: *Perguntar sempre* ou *Sempre*.

:::info
Não há configurações de navegação no perfil *Navegar no mapa*.  
:::


## Configurar Mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configurar mapa*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

O menu [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) permite personalizar as configurações de exibição do mapa para o perfil selecionado, possibilitando uma melhor visualização dos elementos-chave do mapa.  

Com este menu, você pode:

- **Destacar elementos importantes do mapa**, incluindo [Pontos Favoritos](../personal/favorites.md), [Marcadores de Navegação](../personal/markers.md) ou [Pontos de Interesse (POIs)](../map/point-layers-on-map.md#points-of-interest-pois) especiais no mapa.

- **Exibir rotas e arquivos GPX específicos**, incluindo trilhas de terceiros para navegação ou análise.

- **Sobrepor camadas de mapa adicionais**, como [informações de terreno](../plugins/topography.md), **imagens de satélite** ou outros [mapas raster](../map/raster-maps.md) disponíveis.

- **Ativar a visualização de transporte público**, mostrando [rotas e paradas](../map/public-transport.md) para um melhor planejamento de viagens.

- **Ajustar a aparência do mapa** selecionando um [estilo de mapa](../map/vector-maps.md#default-map-styles) diferente para atender às suas necessidades.


## Configurar Tela {#configure-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

- Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Vá para: *Menu → Configurações → Perfil do aplicativo → Configurar tela*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

O [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) é um menu que permite configurar os widgets para o perfil selecionado a serem exibidos no mapa. Nesta tela, você pode ativar e configurar widgets [Informativos](../widgets/info-widgets.md) e [Navegacionais](../widgets/nav-widgets.md), bem como outros itens.


## Aparência do Perfil {#profile-appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

As configurações de **Aparência do perfil** permitem personalizar o nome e a representação visual do seu perfil. Você também pode modificar a aparência de [Minha Localização](#my-location-appearance) aqui. Embora o *nome do perfil* deva ser único, *ícones* e *cores* podem ser os mesmos em diferentes perfis. Essas alterações serão aplicadas em várias partes do aplicativo, como o menu de [Preparação de rota](../navigation/setup/route-navigation.md).


### Aparência da Minha Localização {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

As configurações de **Aparência da Minha Localização** permitem personalizar como sua localização é exibida no mapa, tanto quando estacionário quanto em movimento. O movimento é detectado pelo sistema operacional quando a velocidade do dispositivo é **maior que zero**.

#### 1. Ângulo de Visão e Raio de Localização {#1-view-angle-and-location-radius}

Você pode personalizar os elementos visuais relacionados à sua localização e aplicá-los separadamente ou juntos para as posições de **Repouso** e **Navegação**. Para os modos 2D e 3D, o *Ângulo de Visão* e o *Raio de Localização* são exibidos na mesma cor selecionada para o [perfil de navegação](#profile-appearance), diretamente abaixo do ícone [Minha Localização](../map/interact-with-map.md#my-location-and-zoom).

- **<Translate android="true" ids="view_angle"/>** – Exibe uma área em **forma de cone** indicando a direção em que você está atualmente virado.  
- **<Translate android="true" ids="location_radius"/>** – Mostra uma **área circular** ao redor do seu ícone, representando a precisão da sua localização atual.


#### 2. Ícones 3D Personalizados {#2-custom-3d-icons}

Para uma experiência mais personalizada, você pode criar e adicionar **ícones 3D personalizados** ao OsmAnd.  

***Como adicionar um ícone de localização 3D personalizado:***

1. **Crie um modelo 3D**. Desenhe seu ícone nos [formatos MTL e OBJ](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integre o modelo ao OsmAnd:**  
   - Desenvolva um [plug-in personalizado](../plugins/custom.md) usando o [exemplo de plug-in](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) fornecido.  
   - Coloque seus arquivos de ícone 3D nos seguintes caminhos:  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternativamente, copie os **arquivos MTL e OBJ** diretamente para a pasta OsmAnd usando a mesma estrutura de diretórios.  

#### 3. Modos de Orientação do Mapa {#3-map-orientation-modes}

Você pode controlar o comportamento do ícone **Minha Localização** usando diferentes [modos de orientação do mapa](../widgets/map-buttons.md#compass).  

- Se o ícone de localização **oscilar ou girar** enquanto estacionário, mude do **Modo de Direção de Movimento** ([Rotacionar Mapa por Rumo](../map/interact-with-map.md#rotate-map-by-bearing)) para outro modo.  
- Ajuste as configurações adicionais em *Menu → Configurações → Perfis do aplicativo → Aparência do perfil → Opções*.
- Saiba mais sobre o rastreamento de rumo e direção na seção [Widget de Rumo](../widgets/nav-widgets#bearing-widget).  


## Personalização da Interface do Usuário {#ui-customization}

<InfoAndroidOnly />

:::note Para plug-ins não utilizados
Para ocultar todos os parâmetros de controle de [plug-ins](../plugins/index.md#configure-plugin) não utilizados, desative-os.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

Com o recurso de personalização da interface do usuário, você pode ajustar o número de itens em ações como [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) e [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Informações sobre o número de itens adicionados de todos os itens possíveis podem ser encontradas sob o título de cada recurso.


### Gaveta {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Principais itens visíveis** - Na seção *Personalizar UI*, você pode *reordenar, ocultar e restaurar* itens da [Gaveta](../start-with/main-menu.md#customize-advanced-use-of-android) para corresponder às suas preferências.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura a *lista original de itens* na gaveta, desfazendo instantaneamente quaisquer personalizações.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Permite copiar o *layout da gaveta* de outro perfil OsmAnd para manter uma configuração consistente entre os perfis.

### Configurando o Mapa {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Menu Configurar mapa** - Na seção *Personalizar UI*, você pode *reordenar ou ocultar itens* do [Configurar mapa](../map/configure-map-menu.md), permitindo acesso rápido às configurações usadas com frequência.

- **<Translate android="true" ids="reset_to_default"/>** - Restaura a *lista de itens original* no menu Configurar mapa, removendo quaisquer alterações.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copia o *layout do menu Configurar mapa* de outro perfil OsmAnd.


### Ações do Menu de Contexto {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Menu de contexto do mapa** - Na seção Personalizar UI, você pode reordenar ou ocultar itens no [menu de contexto do mapa](../map/map-context-menu.md) para otimizar o acesso a recursos usados com frequência.

- **<Translate android="true" ids="reset_to_default"/>** – Restaura a *lista de itens padrão* no menu de contexto do mapa, revertendo instantaneamente quaisquer modificações.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copia o *arranjo do menu de contexto* de outro perfil OsmAnd para manter a consistência entre diferentes perfis.


## Configurações de Plug-in {#plugin-settings}

:::caution Acesso às configurações do plug-in
Para acessar as configurações do plug-in, você deve primeiro [**ativar o plug-in**](../plugins/index.md#enable--disable) na *seção Plug-in do menu principal*.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Os plug-ins desbloqueiam recursos adicionais do aplicativo e podem ser [pagos ou gratuitos](../plugins/index.md#purchase). Alguns plug-ins têm suas próprias [configurações](../plugins/index.md#plugin-settings), outros não. O OsmAnd oferece a possibilidade de configurar plug-ins para cada perfil separadamente.


- **Gravação de Viagem**. Este item abre as [configurações de gravação de viagem](../plugins/trip-recording.md#recording-settings) para o perfil selecionado, onde você pode escolher quaisquer parâmetros para gravar suas viagens.

- **Clima**. As camadas interativas do mapa [Clima](../plugins/weather.md#weather-settings) permitem monitorar a temperatura, pressão do ar, cobertura de nuvens, velocidade do vento e precipitação em sua cidade ou em qualquer outro local em um mapa global.

- **Notas de Áudio / Vídeo** (*Somente Android*). Este item abre as [configurações do plug-in de áudio-vídeo](../plugins/audio-video-notes.md#plugin-settings) para o perfil selecionado. O plug-in *Notas de Áudio/Vídeo* estende a funcionalidade do OsmAnd, permitindo que você crie suas notas em vários formatos, como foto, vídeo ou áudio, e as associe a uma localização geográfica ou localização atual.

- **Edição OpenStreetMap**. Este item abre as [configurações do plug-in de edição OpenStreetMap](../plugins/osm-editing.md#settings) para o perfil selecionado. Com o OsmAnd e o plug-in de edição OSM, você pode contribuir para o OpenStreetMap.org criando ou modificando POIs, adicionando ou comentando notas e enviando trilhas GPX gravadas.

- **Sensores Externos**. Ao tocar em um item na seção *Configurações do Plug-in*, as [configurações de sensores externos](../plugins/external-sensors.md#sensors-settings) para o perfil selecionado são abertas. O plug-in Sensores Externos permite ler e gravar dados de sensores externos sem fio e exibi-los usando widgets no aplicativo OsmAnd.

- **Acessibilidade** (*Somente Android*). Este item abre as [configurações do plug-in de Acessibilidade](../plugins/accessibility.md#plugin-settings) para o perfil selecionado. As configurações do plug-in de Acessibilidade permitem personalizar o aplicativo de acordo com suas necessidades. Todas as configurações se relacionam com o processo de navegação e são definidas individualmente para cada perfil.

- **Desenvolvimento OsmAnd**. Este menu abre as [configurações do plug-in de desenvolvimento OsmAnd](../plugins/development.md#plugin-settings), onde você pode configurar o aplicativo OsmAnd para fins de teste ou explorar recursos futuros. Essas configurações são destinadas a desenvolvedores e não são necessárias para o uso normal do aplicativo.

  > ***Alterar as configurações do plug-in de desenvolvimento OsmAnd afeta todos os perfis.***

- **Wikipedia**. Este menu abre as *[configurações do plug-in Wikipedia](../plugins/wikipedia.md#wikipedia-settings)*. Você pode selecionar o idioma em que os artigos serão exibidos e escolher se deseja baixar imagens da Wikipedia. Ter a Wikipedia em sua viagem aprimora sua experiência, fornecendo informações sobre os locais que você visita. Funciona offline e exibe artigos relevantes da Wikipedia diretamente no mapa relacionados a pontos de interesse.


## Ações {#actions}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Ações com o perfil selecionado:  

- [Exportar perfil](https://osmand.net/docs/user/personal/import-export#export) - Exporta todas as configurações do perfil selecionado no formato OSF.

- **Copiar de outro perfil** - Copia todas as configurações de outro perfil existente em seu aplicativo OsmAnd.

- **Redefinir para o padrão** - Retorna todas as configurações ao estado inicial.

- **Excluir perfil**:
    - Esta ação está disponível apenas para *Android* e apenas para um *perfil personalizado*.
    - Perfis padrão não podem ser excluídos.
    - Para adicionar um perfil, vá para *Menu → Configurações → Perfis do aplicativo → + Novo perfil*.


## Artigos Relacionados {#related-articles}

- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md#import--export-track)
- [Histórico de Pesquisa](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)

> *Última atualização: fevereiro de 2025*