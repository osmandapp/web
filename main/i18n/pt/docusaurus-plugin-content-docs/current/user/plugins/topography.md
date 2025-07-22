---
source-hash: cc730e8a24496682e893555771005dbb35c6dfe9f5ce92b2e7fd526bcba461b1
sidebar_position: 14
title: Topografia
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
O plugin Topografia é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

Topografia é uma característica importante da cartografia que fornece informações para avaliar visualmente o relevo do terreno.
Informações topográficas como [Curvas de Nível](#contour-lines), [Terreno](#terrain) (*Relevo Sombreado* e *Inclinação*), e [Relevo 3D](#3d-relief) ajudam a fazer uma avaliação visual da disposição do terreno, observando elevação, relevo, extremos, inclinação ou pontos de igual altura.

Cada recurso fornecido por este plugin é uma camada de mapa independente que, quando ativada, pode ser exibida acima ou abaixo da fonte do mapa principal, dependendo das [configurações](../map/raster-maps.md#overlay-layer).

O plugin Topografia oferece acesso aos seguintes tipos de mapa:

- [Curvas de Nível](#contour-lines). Este é um [mapa vetorial](../map/vector-maps.md) representado em [**metros** ou **pés**](#contour-lines-meters-or-feet). As curvas de nível mostram os níveis de elevação e ajudam a visualizar o terreno.
- [Relevo Sombreado](#hillshade-slope-and-altitude-layers). Tipos de mapas com sombreamento de colinas e encostas tornam o relevo mais visível e ajudam a interpretar visualmente o terreno.
- [Inclinação](#hillshade-slope-and-altitude-layers). Camada [Raster](../map/raster-maps.md) que fornece informações sobre a inclinação das encostas, o que pode ser importante para o planejamento de rotas e segurança.
- [Relevo 3D](#3d-relief). É um [mapa vetorial](../map/vector-maps.md) que fornece uma representação tridimensional do terreno, disponível apenas com a [assinatura OsmAnd Pro](../purchases/index.md).


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

| Curvas de Nível | Relevo Sombreado | Inclinação |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Curvas de Nível | Relevo Sombreado | Inclinação |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Licença para dados DEM usados pelo OsmAnd para detecção de terreno {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Os dados de altitude no mapa (entre 70 graus de latitude norte e 70 graus de latitude sul) foram obtidos a partir de medições realizadas como parte da *Shuttle Radar Topography Mission (SRTM)*. Ela utilizou o *Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)*, a principal ferramenta de imagem do *Sistema de Observação da Terra da NASA*.
Para informações completas, consulte a [Licença](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Dados DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Os dados originais utilizados para este produto foram fornecidos pela AW3D da JAXA.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para exibir dados de **Curvas de Nível** e **Terreno (Relevo Sombreado, Inclinação)** no mapa:

1. **Compra**: [Plano de compra OsmAnd+, OsmAnd Maps+ ou OsmAnd Pro](../plugins/index.md#purchase)
2. [Ativar](../plugins/index.md#enable--disable) o plugin Topografia na seção Plugins do *Menu Principal*.
3. [Baixar](#download-maps): Curvas de Nível, Relevo Sombreado, Inclinação ou mapas de Terreno (3D).
4. **Ativar e ajustar**: Curvas de Nível, Relevo Sombreado ou Inclinação para a visualização do mapa.
5. Você também pode assistir ao [tutorial do YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Para exibir [**Relevo 3D**](#3d-relief) você precisa adquirir o plano *OsmAnd Pro*, incluindo acesso ao plugin Topografia.


## Baixar Mapas {#download-maps}

Para começar a trabalhar com a funcionalidade do plugin, você precisa baixar os mapas de seu interesse. Alguns mapas, como Curvas de Nível para regiões montanhosas, podem ser bastante grandes, excedendo 2 GB, e podem não ser suportados em dispositivos desatualizados.

Para um trabalho estável e para economizar recursos, você pode baixar um mapa não do país inteiro, mas de suas regiões específicas, se tais regiões forem oferecidas no aplicativo. As informações sobre o tamanho de cada tipo de mapa são listadas sob seu nome.


### Mapas de Relevo 3D {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Você precisa baixar mapas de **Terreno (3D)** para exibir Relevo Sombreado, Inclinação e Relevo 3D. Após baixar os mapas, você pode exibir **Curvas de Nível** e **Terreno** usando a seção [Configurar mapa](../map/configure-map-menu.md) do *Menu Principal*.

Se o mapa exibido na tela não for baixado, então em *Menu → Configurar mapa → seção Topografia → Terreno* na parte inferior da lista de recursos, a seção *Baixar mapas* com mapas adicionais sugeridos será exibida.


### Curvas de Nível (Metros ou Pés) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Para [**Curvas de Nível**](#contour-lines), você precisa determinar em quais [unidades](../personal/profiles.md#units--formats) (metros ou pés) elas serão exibidas no mapa e baixar a versão apropriada do mapa para o seu dispositivo.

**As opções de unidade não são intercambiáveis**, portanto, se você precisar mudar de metros para pés ou vice-versa, será necessário desinstalar a versão anterior do mapa de Curvas de Nível para baixar a nova versão.


## Curvas de Nível {#contour-lines}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Curvas de Nível*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Curvas de Nível](../map/vector-maps.md#-contour-lines) são uma representação gráfica de elevações em um mapa e estão disponíveis como mapas vetoriais. Elas formam linhas correspondentes a pontos com a mesma altitude, que formam contornos que permitem determinar em que direção e quanto a superfície se inclina.

Ao usar o [Mecanismo de renderização de mapa](../personal/global-settings.md#map-rendering-engine):

- **Versão 2 (OpenGL)**. As curvas de nível são suportadas tanto na visualização 3D quanto no modo de relevo 3D.
- **Versão 1**. As curvas de nível não são suportadas ao usar mapas em mosaico obtidos da Internet.

**Configurações de aparência**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Ativa ou desativa as curvas de nível.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Define os [níveis de zoom](../map/interact-with-map.md#my-location-and-zoom) nos quais as curvas de nível são visíveis.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Escolhe a cor para exibir as curvas de nível.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Ajusta a largura das curvas de nível.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Seleciona a densidade das curvas de nível (Baixa, Média, Alta). Densidades mais altas podem afetar a velocidade de carregamento.
- *<Translate android="true" ids="maps_and_resources"/>*. Visualiza e baixa mapas de curvas de nível para a região atual e áreas próximas.


## Terreno {#terrain}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

A opção **Terreno** ativa e permite personalizar três recursos, como *Relevo Sombreado*, *Inclinação* e *Altitude*.
Recursos específicos:

- Apenas uma opção pode ser ativada por vez: Relevo Sombreado, Inclinação ou Altitude.
- Se você não vir nenhuma alteração após baixar e ativar o mapa correspondente, é recomendável reiniciar o aplicativo.

O menu **Terreno** inclui a seleção de [esquema de cores](#default-color-scheme) com a opção de [modificá-lo](#modify-color-scheme) (para [assinantes Pro](../../user/purchases/index.md)), a capacidade de alterar a transparência da camada no mapa ([visibilidade](#visibility)) e selecionar o [nível de zoom](#zoom-levels) para sua exibição, informações sobre o tamanho dos [dados em cache](#cache-size) e uma lista de [mapas](../../user/personal/maps-resources.md) necessários para exibir a camada.


## Camadas de Relevo Sombreado, Inclinação e Altitude {#hillshade-slope-and-altitude-layers}

| Relevo Sombreado | Inclinação | Altitude |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Relevo Sombreado** baseia-se na simulação da iluminação da superfície usando dados de terreno. Este método envolve a criação de sombras e realces com base no ângulo da superfície em relação à fonte de luz. Como resultado, você vê colinas, vales e outros detalhes naturais do terreno no mapa.

**Inclinação** determina o ângulo de inclinação da superfície com base nos dados de elevação dos pontos no mapa. Os cálculos do ângulo de inclinação são realizados considerando as mudanças na elevação e as distâncias entre os pontos, e representando essa mudança como um ângulo de inclinação.

**Altitude** representa a elevação dos pontos no mapa em relação ao nível do mar. Ajuda a entender como o terreno muda de altura. Este recurso é particularmente útil para atividades como caminhadas ou ciclismo de montanha, onde conhecer a altitude pode auxiliar no planejamento de rotas e no gerenciamento do esforço físico. Os dados de altitude são derivados de modelos de elevação e fornecem uma visão clara dos pontos altos e baixos, tornando mais fácil avaliar a dificuldade de uma rota ou identificar picos e vales ao longo de sua jornada.

Os mapas raster de **Relevo Sombreado**, **Inclinação** e **Altitude** são criados com base em dados de terreno raster, como Modelos Digitais de Elevação (DEM).

**Uso:**

- *Navegação.* Ajuda a identificar encostas íngremes, tanto em descidas quanto em subidas, o que pode ser crucial para uma navegação segura.
- *Planejar rotas.* Ajuda a escolher as rotas mais adequadas, considerando o terreno.
- *Estimativa de terreno.* É conveniente para visualizar a paisagem, especialmente se você estiver caminhando ou andando de bicicleta.


### Esquema de Cores Padrão {#default-color-scheme}

| Relevo Sombreado | Inclinação | Altitude |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Relevo Sombreado* usa tons escuros para mostrar encostas, picos e terras baixas. O Sol Virtual tem um azimute (direção) fixo de 315 graus.

- *Inclinação* usa cores para visualizar a inclinação do terreno. Você pode ler mais sobre isso [aqui](https://en.wikipedia.org/wiki/Grade_(slope)). Cada cor corresponde a um ângulo de desvio da horizontal. Um esquema de cores adicional de *Inclinação*, ***Avalanche***, está disponível no menu **Modificar**.

- *Altitude*. O mapa de altitude colore cada pixel de acordo com a altura do mapa calculada usando o gradiente de um esquema de cores definido. Geralmente, os esquemas de altitude são muito dependentes da localização. Em áreas montanhosas, você preferiria distribuir as cores para uma faixa de altitude mais ampla e em áreas planas, você selecionaria um esquema de cores com uma pequena faixa entre a altitude mínima/máxima.

> *Por favor, leia o artigo [Esquema de Cores](../personal/color-palette-schemes.md) para mais informações.*


### Modificar Esquema de Cores {#modify-color-scheme}

:::info Recurso pago
*Modificar Esquema de Cores* é um recurso pago do **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) e [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

O recurso *Modificar Esquema de Cores* permite selecionar um esquema de cores:

- De uma [lista predefinida](#default-color-scheme).
- De arquivos de paleta de cores que você criou em seu computador. Arquivos personalizados podem ser adicionados ao OsmAnd usando a [ferramenta de importação/exportação](../personal/import-export.md).

Você pode [editar essas paletas](../personal/color-palette-schemes.md#edit-palette-file) para personalizar a aparência de mapas e rotas.


### Visibilidade {#visibility}

| Visibilidade 31% | Visibilidade 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

A função *Visibilidade* é usada para ajustar a transparência das sombras para o Relevo Sombreado e as cores usadas para representar o ângulo no parâmetro Inclinação.

### Níveis de Zoom {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

A função *Níveis de Escala* permite definir os valores mínimo e máximo dos níveis de zoom do mapa, variando de 4 a 19, nos quais as camadas do mapa de Relevo Sombreado ou Inclinação serão exibidas.

### Tamanho do Cache {#cache-size}

**Tamanho do cache** é uma seção informativa que exibe a quantidade de memória em seu dispositivo atualmente usada para dados de *Terreno*. Cada vez que você visualiza informações de *Relevo Sombreado* ou *Inclinação* em um mapa, todos esses dados são temporariamente armazenados no cache para acesso rápido e uso posterior, evitando carga adicional no processador do seu dispositivo.

**Limpar o cache** às vezes é necessário para liberar espaço em seu dispositivo ou para resolver possíveis problemas de desempenho. Para limpar o cache, você precisa ir para as *Configurações do Sistema* do dispositivo, então o caminho pode ser o seguinte: *Aplicativos → OsmAnd → Armazenamento → Limpar cache*.


### Mecanismo de Renderização (Android) {#rendering-engine-android}

**Relevo Sombreado** e **Inclinação** são exibidos e ajustados em qualquer [Mecanismo de renderização de mapa](../personal/global-settings.md#map-rendering-engine) selecionado.

1. Se você usa o **Mecanismo de renderização de mapa Versão 1**, você precisa usar o [download](../start-with/download-maps.md) normal de mapas raster de Relevo Sombreado e Inclinação.

2. Se você usa o **Mecanismo de renderização de mapa Versão 2 (OpenGL)**:
    - Você pode continuar a usar o tipo de download normal de mapas raster de Relevo Sombreado e Inclinação. No entanto, para fazer isso, você precisará ativar o [plugin de desenvolvimento do OsmAnd](../plugins/development.md) e habilitar a configuração [Usar formato SQLite raster para relevo sombreado e inclinação](../plugins/development.md#terrain).

    - Alternativamente, você pode usar o download do [Mapa de Terreno (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Isso economiza espaço de memória em seu dispositivo, e os efeitos de Relevo Sombreado, Inclinação e Relevo 3D serão gerados a partir deles usando seu dispositivo.


### Ações Rápidas {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Você pode usar os botões de *Ação Rápida* na tela do mapa para alternar a visibilidade das camadas de [Curvas de Nível](#contour-lines), [Terreno](#terrain) e [esquema de cores do Terreno](#default-color-scheme). Dependendo da camada selecionada no menu Configurar mapa, atribuir uma ação de *Terreno* ao botão exibirá *Relevo Sombreado*, *Inclinação* ou *Altitude*.

As configurações principais para *Mostrar ou Ocultar tipos de mapa* estão na seção Topografia do menu Configurar Mapa. No artigo [Ação Rápida](../widgets/quick-action.md#configure-map), você pode encontrar uma lista de camadas disponíveis para exibição. Se você precisar de acesso rápido a esta configuração de mapa, use a ferramenta *Botão Personalizado*.

- Vá para [Adicionar ação](../widgets/quick-action.md#custom-buttons): *Menu → Configurar tela → Botões personalizados → Ação rápida → Adicionar ação → Configurar mapa*.
- Adicione um ou mais botões de QA para alterar a visibilidade de uma camada de topografia específica.


## Relevo 3D {#3d-relief}

:::info Recurso Pro
Relevo 3D é um recurso pago do [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

O recurso Relevo 3D produz um relevo elevado e fornece uma representação tridimensional da paisagem. O Relevo 3D funciona offline e pode ser usado com [mapas vetoriais do OsmAnd](../map/vector-maps.md) ou qualquer [mapa raster](../map/raster-maps.md#select-raster-maps) como [Fonte de Mapa](../map/raster-maps.md#main) ou como [Camada de Sobreposição/Subjacência](../map/raster-maps.md#overlay-layer).

***Como exibir o Relevo 3D no mapa.***

- Adquira a assinatura **OsmAnd Pro** para [iOS](../purchases/ios.md#pro-features) ou [Android](../purchases/android.md#pro-features).

- Vá para [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: role até a seção *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: role até a seção *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Baixe o [mapa de Terreno (3D)](#3d-relief-maps) das regiões, se necessário.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

| Camada de mapa vetorial | Camada de mapa raster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Camada de mapa vetorial | Camada de mapa raster |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>


### Exagero Vertical {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Exagero vertical*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Exagero vertical*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Exagero vertical* é um coeficiente especial para *relevo 3D*. Você pode alterar a escala (*Exagero vertical*) de x1 para x3. Este recurso permite visualizar contornos de terreno mais suaves com detalhes aumentados.


### Relevo Sombreado e Relevo 3D {#hillshade-and-3d-relief}

| Relevo Sombreado | Relevo 3D |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Relevo Sombreado** é um tipo de mapa que exibe o terreno usando sombras, criando uma representação visual da inclinação e forma da superfície da terra.
**Relevo 3D** é um recurso que adiciona efeitos tridimensionais ao mapa.

Se você **desativar** *Relevo Sombreado* e **ativar** *Relevo 3D*, as sombras do relevo ainda serão visíveis porque *Relevo Sombreado* e *Relevo 3D* são duas maneiras diferentes de visualizar um mapa. *Relevo Sombreado* cria sombras com base no terreno e as adiciona ao mapa, enquanto *Relevo 3D* modela elementos 3D para mostrar a profundidade e a forma do terreno, e as sombras fazem parte da visualização. Esses recursos podem funcionar em paralelo, e desativar *Relevo Sombreado* não afeta como os efeitos 3D são exibidos.

Quando o **Relevo Sombreado** está **ativado**, uma imagem com sombras de relevo aparece mais detalhada, escura e escalonada do que uma imagem de *Relevo 3D*. A explicação é que o *Relevo Sombreado* enfatiza os gradientes e contrastes do terreno, criando uma imagem mais nítida e detalhada. O recurso *Relevo 3D* confere ao mapa uma aparência mais fluida e suavizada, suavizando o terreno e potencialmente reduzindo a visibilidade de alguns detalhes mais finos.


## Combinar Tipos de Camada {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

O OsmAnd permite combinar vários tipos de camadas de mapa para uma exibição mais visual.

- A combinação de **Curvas de Nível** e **Relevo Sombreado** é ideal para estimar visual e numericamente a inclinação de encostas de montanhas.
- A combinação de camadas de **Curvas de Nível** e **Inclinação** é melhor para estimar a inclinação e encontrar pontos com a mesma altura.
- A combinação de camadas de **Relevo 3D** e **Relevo Sombreado** permite obter uma representação mais realista e visual do terreno, relevo e detalhes da paisagem. Esta combinação é especialmente adequada para terrenos montanhosos e acidentados.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Como restaurar a compra do plugin Topografia (anteriormente Curvas de Nível). [(verificar)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Curvas de Nível, dados de Elevação ou Relevo 3D não são exibidos. [(verificar)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. O mapa muda automaticamente para o modo 3D durante a navegação:
    - Certifique-se de que o botão **Modo 3D** esteja desativado em **Menu → Configurar Tela → Botões → Botões Padrão**.
    - Verifique se algum recurso de Terreno está ativado em **Menu → Configurar Mapa → Topografia** que possa acionar um efeito 3D.

> *Última atualização: janeiro de 2025*