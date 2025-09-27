---
source-hash: 3e1eba0c128d1ad05a1bdb817c7e495e0e8772c3818a05fe0583ef8e6277b1c5
sidebar_position: 5
title: Esquemas de Cores
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

:::info Recurso pago

Os esquemas de cores são usados como parte dos recursos pagos [Maps+](../purchases/index.md) e Pro <ProFeature />.

:::

Os esquemas de cores são usados na [colorização de rotas](#routes), [terreno do mapa](#terrain) e [mapa meteorológico](#weather), e são representados como uma parte separada das informações que podem ser exportadas, importadas e editadas para alterar o esquema de cores do mapa e a visualização de dados.

Os dados da paleta de cores estão disponíveis no menu [*Mapas e Recursos*](../personal/maps-resources.md#local-menu).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Menu → Mapas e Recursos → Local → Cores*

![Paletas](@site/static/img/personal/color-schemes/colors.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Menu → Mapas e Recursos → Local → Cores*

![Paleta de cores](@site/static/img/personal/color-schemes/color_palette_ios.png)

</TabItem>

</Tabs>


## Tipos de Esquema {#scheme-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paletas](@site/static/img/personal/color-schemes/palette.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paleta de cores](@site/static/img/personal/color-schemes/color_altitude.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

Os arquivos de terreno (`height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`) definem 3 [visualizações de terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers): *Relevo Sombreado, Inclinação* e *Altitude*. Para cada tipo, você pode ter várias paletas, por exemplo, *inclinação de avalanche* é fornecida por padrão.

### Rotas {#routes}

As visualizações de gradiente de linha usam arquivos de paleta (`route_<type_name>_<palette_name>.txt`) para colorir trilhas GPX e Rotas:

- Para [Rotas](../navigation/guidance/map-during-navigation.md#color): *Velocidade, Inclinação* e *Elevação (Altitude)*.
- Para [Trilhas GPX](../map/tracks/appearance#track-colors-in-gpx-files): *Velocidade, Inclinação* e *Elevação (Altitude), ou informações de sensores externos*.

### Clima {#weather}

Os arquivos de paleta de clima (`weather_<type_name>.txt`) definem a visualização para [camadas de clima](../plugins/weather.md#weather-layers).

### Cores {#colors}

A paleta de cores (`user_palette_default.txt`) é simplesmente usada para cores predefinidas para atribuir a [Favoritos](./favorites.md), [Trilhas](./tracks/).


## Legenda da Paleta {#palette-legend}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/personal/color-schemes/legend.png').default} alt="cor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_1.png').default} alt="cor"/></td>
        <td><img src={require('@site/static/img/personal/color-schemes/legend_2.png').default} alt="cor"/></td>
    </tr>
</table>


A legenda oferece uma maneira fácil de visualizar e entender as diferentes marcações no mapa. Novas paletas de cores foram adicionadas para exibir a [**velocidade** para trilhas](../map/tracks/appearance#track-colors-in-gpx-files), o [**tipo de linha** para rotas](../navigation/guidance/map-during-navigation.md#color), a [**altitude e inclinação** para terreno](../plugins/topography.md#default-color-scheme) e todas as paletas de cores da [**camada de clima**](../plugins/weather.md#weather-layers).


## Editar arquivo de Paleta {#edit-palette-file}

Você pode editar paletas para personalizar a aparência de mapas e rotas. Seus próprios arquivos de paleta de cores podem ser adicionados ao OsmAnd usando a [ferramenta de importação/exportação](./import-export.md).

- *Rotas*: `route_speed_<type_name>.txt`, `route_slope_<type_name>.txt`, `route_elevation_<type_name>.txt`.
- *Terreno*: `height_altitude_<type_name>.txt`, `hillshade_color_<type_name>.txt`, `slope_<type_name>.txt`.
- *Clima*: `weather_<type_name>.txt`.
- *Cor*: `user_palette_default.txt`.

Cada linha representa um valor numérico (para a paleta de cores, é um índice) e a cor RGB. Por exemplo:

```xml
# Arquivo TXT nomeado *height_altitude_0-200.txt* {#txt-file-named-heightaltitude0-200txt}
# 0 - 90 graus RGBA {#0---90-degree-rgba}
0,46,185,0,191
# amarelo  {#yellow-}
100,255,222,2,227
# vermelho {#red}
200,255,1,1,255
# violeta {#violet}
220,130,1,255,255

```

Após mover este arquivo TXT para *..Android/data/net.osmand/files/color-palete/height_altitude_0-200.txt*, uma nova paleta aparecerá no menu Esquema de Cores.


## Leia mais {#read-more}

### Ações rápidas {#quick-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Adicionar ação → Topografia → Alterar esquema de cores do terreno*

![Esquema de Cores](@site/static/img/widgets/color_scheme.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  *→ Adicionar ação → Topografia → Alterar esquema de cores do terreno*

![Paleta de cores](@site/static/img/personal/color-schemes/color_scheme_qa_ios.png)

</TabItem>

</Tabs>

**Ação Rápida** para alterar a paleta do Terreno. Adicionada a capacidade de alternar entre esquemas de cores de terreno, semelhante a alternar entre camadas. Isso pode ser feito usando a ferramenta [Ações Rápidas](../widgets/quick-action.md#configure-map).


### Importar / Exportar Cores {#import--export-colors}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Ações de Perfis Exportar Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png)   ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Ações de Perfis Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)    ![Ações de Perfis Exportar iOS](@site/static/img/personal/profiles/profile_actions_export_3_ios.png)

</TabItem>

</Tabs>

Você pode importar e exportar todas as paletas de cores padrão e personalizadas disponíveis usando a ferramenta de restauração e backup de arquivos do OsmAnd.

- Abra o *Menu* principal, *Configurações*, role para baixo até a seção **Importar/exportar** (*Android*) ou **Backup Local** (*iOS*) e selecione a ação necessária.
- Selecione um ou mais itens da lista *Cor* ou a opção *Selecionar Tudo*.
- Todos os arquivos exportados são salvos no formato `.osf`.
- Se o tamanho dos dados selecionados for significativo, levará algum tempo para o aplicativo preparar o arquivo `.osf`.
- Consulte o artigo [*Importar / Exportar*](../personal/import-export.md) para obter informações mais detalhadas.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)