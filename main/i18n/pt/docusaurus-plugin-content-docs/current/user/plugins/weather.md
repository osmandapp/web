---
source-hash: 603f9c004e8355faaafe53288dad7c9600c768ad0d6a044e948235c10e23cd75
sidebar_position: 17
title: Tempo
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



## Visão geral {#overview}

:::info Recurso pago
 <ProFeature/> O plugin Tempo é um [recurso pago](../purchases/index.md) do aplicativo OsmAnd.
:::

As camadas interativas do mapa meteorológico no aplicativo OsmAnd permitem monitorar a temperatura, a pressão atmosférica, a cobertura de nuvens, a velocidade do vento e a precipitação em sua cidade ou em qualquer outro local em um mapa global interativo. O plugin Tempo fornece previsões meteorológicas de hora em hora para 7 dias à frente diretamente no mapa do OsmAnd. As informações meteorológicas também podem ser baixadas para uso offline.

A fonte de dados para o plugin Tempo é o [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) operado pelo Serviço Nacional de Meteorologia dos Estados Unidos (NWS) e o Centro Europeu de Previsões Meteorológicas de Médio Prazo ([ECMWF](https://www.ecmwf.int/)).


## Parâmetros de configuração necessários {#required-setup-parameters}

As seguintes configurações são *necessárias* para exibir o Tempo no mapa do OsmAnd:

**1.** [Compre a **assinatura OsmAnd Pro**](../purchases/).

**2.** [Ative](../plugins/#enable--disable) o plugin Tempo na seção *Plugins* do *Menu Principal*.

**3.** [Selecione as **unidades de medida**](#weather-settings) para as ocorrências meteorológicas.

**4.** [Exiba as **camadas de Tempo**](#customize-weather-layers) no mapa usando o item de menu Tempo no menu Configurar mapa (lembre-se de diminuir o zoom).

**5.** [Visualize a **previsão do tempo**](#weather-forecast-screen) para a área selecionada (este menu permite que a tela principal do mapa do OsmAnd não seja sobrecarregada com camadas meteorológicas).

**6.** [Baixe](#offline-forecast) a previsão do tempo se você planeja usá-la offline.

**7.** [Ative os **widgets de Tempo**](#weather-widgets) se você quiser ver informações meteorológicas atualizadas diariamente.

:::caution Renderização necessária
O plugin Tempo está disponível apenas com o motor de renderização de mapa [Versão 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::


## Exibir Tempo no Mapa {#display-weather-on-the-map}

### Tela de Previsão do Tempo {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Plugin ativado → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Plugin ativado → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

O menu lateral principal tem um item de menu dedicado **Tempo** que fornece acesso rápido a todas as ferramentas meteorológicas. A *tela de previsão do tempo* exibe informações sobre *temperatura*, *pressão atmosférica*, *velocidade do vento*, *cobertura de nuvens* e *precipitação*.

Na parte inferior da tela está a *barra de ferramentas do tempo*. Você pode usar os botões de dia e o controle deslizante de tempo para definir a hora exata em que a previsão do tempo será exibida.

### Personalizar Camadas de Tempo {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *Plugin ativado → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *Plugin ativado → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Para exibir camadas meteorológicas na tela do mapa do OsmAnd, você precisa usar o *menu Configurar Mapa*. Vá para o menu, encontre o item *Tempo* na lista (disponível apenas quando o plugin está ativado) e toque nele.

Neste menu, você pode alterar a **visibilidade** e as [configurações](#weather-settings) para cada camada, selecionar o tipo de linhas de contorno e baixar a [previsão do tempo offline de 7 dias](#offline-forecast) (*disponível apenas para Android aqui*).


### Configurações de Tempo {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Menu Principal → Plugins → Tempo → Configurações*
- *Menu Principal → Configurações → Perfil → Configurações do plugin → Tempo*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Menu Principal → Configurações → Perfil → Plugins → Tempo*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

É importante decidir em quais unidades de medida é conveniente para você ver os [dados meteorológicos](#weather-layers) no mapa e na seção [Widgets de Tempo](#weather-widgets) da tela. Você pode escolher as unidades de medida apropriadas para cada parâmetro ou usar os valores padrão (*somente iOS*). Na versão iOS do aplicativo OsmAnd, você também pode ativar a opção de previsão offline para evitar o uso de dados móveis durante a viagem.

:::note
Na versão iOS do OsmAnd, você pode alterar as unidades de medida e o nível de transparência no menu que se abre após um toque longo no ícone da camada de mapa desejada.
:::

### Camadas de Tempo {#weather-layers}

Todos os dados meteorológicos são apresentados como camadas de mapa separadas. Para ver as camadas meteorológicas no mapa, você precisa diminuir o zoom, elas estão disponíveis apenas em escalas de zoom de 2 a 12. As camadas meteorológicas usam [paletas de tempo](../personal/color-palette-schemes.md#weather) para colorir o mapa, essas paletas podem ser [alteradas](../personal/color-palette-schemes.md#edit-palette-file) se necessário.

| |
|------------|
| **Camada de precipitação** exibe informações sobre eventos meteorológicos quando a água em diferentes estados agregados cai do céu para o solo. Precipitação é chuva, neve, granizo ou saraiva. A escala de precipitação é graduada em milímetros (ou polegadas) de água que cai em 1 metro quadrado em 24 horas. 1 mm de chuva corresponde a 1 litro de água por 1 metro quadrado. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| A **Temperatura** expressa a percepção quantitativa de quente e frio. É medida em graus. No OsmAnd, você pode escolher entre a escala Celsius e Fahrenheit. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| O **Vento** é o movimento do ar causado pelo aquecimento desigual da Terra pelo sol e sua própria rotação. Os ventos podem variar de brisas leves a desastres naturais como furacões e tornados. No OsmAnd, a velocidade do vento pode ser exibida em metros por segundo (m/s), quilômetros por hora (km/h), milhas por hora (mph) e nós (kt). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| A **Cobertura de nuvens** é a fração média do céu coberta por nuvens quando observada de um local específico. É medida em %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| A **Pressão atmosférica** é causada pelo peso do ar acima do ponto de medição. Diminui com o aumento da elevação. A pressão atmosférica pode ser exibida em hectopascais (hPa), milímetros de mercúrio (mmHg) e polegadas de mercúrio (inHg). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| A **Animação do vento** inclui representações dinâmicas mostrando a direção e a velocidade do vento na região. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Combinar Mapas {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Para obter informações meteorológicas abrangentes, você pode usar as camadas do mapa separadamente ou combiná-las facilmente. Isolíneas de um tipo específico também podem ser adicionadas à camada de Tempo. Basta tocar no botão *Camadas* ou *Isolíneas* na tela.


### Ações Rápidas para Camadas {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Para alternar a visibilidade das camadas meteorológicas, você pode usar os botões de *Ação Rápida* na tela do mapa. As configurações gerais para mostrar ou ocultar camadas podem ser encontradas na [seção Tempo](#weather-forecast-screen) separada do *Menu Principal*. No artigo [Ação Rápida](../widgets/quick-action.md#configure-map), você encontrará uma lista das camadas disponíveis para exibição. Se você precisar de acesso rápido a esta configuração de mapa, use a ferramenta *Botão Personalizado*.

- Vá para [Adicionar ação](../widgets/quick-action.md#custom-buttons): *Menu → Configurar tela → Botões personalizados → Ação rápida → Adicionar ação → Configurar mapa*.
- Adicione um ou mais botões de QA para alterar a visibilidade de uma camada meteorológica específica.


## Previsão Offline {#offline-forecast}

### Cache {#cache}

Quando a aba Tempo está aberta, a menos que especificado de outra forma, as informações meteorológicas necessárias são baixadas da rede. Você pode usar a [previsão do tempo](#download-forecast) pré-carregada em seus dispositivos. As informações meteorológicas são automaticamente armazenadas em cache após o download e podem ser usadas offline até que a previsão expire.

:::tip
Em dispositivos Android, você pode verificar quando os dados meteorológicos foram baixados tocando no *widget Tempo*. O plugin de Desenvolvimento do OsmAnd deve estar ativado.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Baixar Previsão {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Para cada país, você pode baixar a **Previsão Offline** (até 7 dias). Quanto mais próximo da data atual, mais precisa será. Se você quiser usar a previsão do tempo offline, deve baixar os dados meteorológicos com antecedência.

No menu de previsão de download, você pode obter informações e definir parâmetros para manter os dados meteorológicos atualizados.

- **Criado** (*Android*) / **Atualizado** (*iOS*). Mostra quando a última atualização foi feita.
- **Próxima atualização** (*iOS*). Quando a próxima atualização estará disponível.
- **Tamanho** (*Android*) / **Tamanho das atualizações** (*iOS*). Mostra o tamanho de todas as atualizações.
- Botão **Atualizar** (*Android*) / **Atualizar agora** (*iOS*). Quando ativo, permite atualizar os dados meteorológicos manualmente sem esperar por uma atualização automática.
- **Frequência de atualização** (*iOS*). Pode ser definida para 12 horas, 24 horas ou semanalmente.
- *Atualizar apenas via Wi-Fi* (*iOS*). Ative esta opção se não quiser usar dados móveis para downloads.
- Botão **Remover** *lixeira* (*Android*) / **Remover previsão** (*iOS*). Permite excluir todos os dados de previsão para esta região.
- Botão **Editar** *lápis* (*Android*). Permite renomear o arquivo meteorológico.

:::info
Os dados meteorológicos são atualizados a cada 6 horas (todas as 4 atualizações do [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) e 3 do [ECMWF](https://www.ecmwf.int/)) e ficam disponíveis no OsmAnd com um pequeno atraso, pois o processo de cálculo leva várias horas antes do lançamento (geralmente por volta das 07:00 UTC).
:::


## Widgets de Tempo {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

Os [widgets de Tempo](../widgets/info-widgets.md#weather-widgets), como Temperatura, Pressão do Ar, Vento, Nuvens e Precipitação, mostram os dados meteorológicos atuais para o **ponto central no mapa**.

- Os widgets de tempo são exibidos apenas quando a [tela de Tempo](#weather-forecast-screen) está ligada.
- Para ativar os widgets de tempo, selecione o item do Menu Principal *Configurar tela*, o painel no qual colocá-los e os widgets necessários da lista.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)