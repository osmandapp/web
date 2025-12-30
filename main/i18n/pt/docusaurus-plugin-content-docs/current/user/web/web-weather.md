---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Clima
title: Clima na Web
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

O recurso de Clima no Mapa Web do OsmAnd exibe condições climáticas atuais e dados de previsão diretamente no mapa. Ele fornece acesso a informações climáticas de múltiplas fontes de previsão, suporta ajuste de tempo e permite visualizar camadas climáticas como temperatura, vento, pressão, cobertura de nuvens e precipitação.

Os dados climáticos estão disponíveis sem necessidade de login. A visualização de Clima pode ser aberta diretamente da interface do mapa, seja clicando no ícone de guarda-chuva no painel de menu ou clicando com o botão direito no mapa e selecionando Abrir clima no menu de contexto.


## Fonte de Dados {#data-source}

O OsmAnd Web fornece informações climáticas de duas fontes de previsão:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – a fonte padrão operada pela NOAA/NWS. Fornece dados climáticos completos, incluindo camadas de temperatura, pressão, umidade, vento e nuvens.  
- [**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – uma fonte de previsão alternativa. Oferece dados de alta qualidade de temperatura, precipitação e pressão, mas não fornece informações de vento ou nuvens.  

Para alternar entre elas, clique no **botão guarda-chuva** no menu de Clima.

![Clima no OsmAnd Web](@site/static/img/web/weather_source.png)


## Menu de Clima {#weather-menu}

O **menu de Clima** exibe condições climáticas atuais e dados de previsão para o local selecionado no mapa. Ele combina uma visualização resumida, controles de tempo e camadas climáticas em um único painel.

No topo do menu, são exibidos o nome do local atual, data, hora e temperatura do ar. Abaixo disso, um seletor de dia permite alternar entre os dias de previsão dentro do intervalo disponível.

Uma barra deslizante de tempo é fornecida para ajustar o horário da previsão dentro do dia selecionado. Mover a barra deslizante atualiza todos os valores climáticos exibidos e as camadas do mapa para refletir o momento escolhido.

O menu mostra os seguintes parâmetros climáticos para o local selecionado:
- *Temperatura*.
- *Precipitação*.
- *Vento*.
- *Pressão atmosférica*.
- *Nuvens*.  

Cada valor é atualizado dinamicamente ao alterar o horário ou a data da previsão.

Na parte inferior do painel, são exibidas informações sobre o horário de geração dos dados climáticos, indicando quando os dados de previsão foram atualizados pela última vez.

![Clima no OsmAnd Web](@site/static/img/web/weather_menu.png)


## Camadas de Clima {#weather-layers}

As camadas de clima permitem visualizar os dados de previsão diretamente no mapa como uma sobreposição. Elas ajudam a avaliar rapidamente as condições climáticas em uma área mais ampla, em vez de visualizar valores apenas para um único ponto.

Para abrir o painel de Camadas de Clima, clique no ícone de camadas no menu de Clima. Isso abre uma lista de sobreposições climáticas disponíveis que podem ser ativadas ou desativadas independentemente.

As seguintes camadas de clima estão disponíveis:
- *Temperatura* — exibe a distribuição de temperatura do ar no mapa usando um gradiente de cores.
- *Precipitação* — mostra a intensidade de precipitação na área selecionada.
- *Vento* — visualiza a velocidade e a direção do vento.
- *Pressão atmosférica* — exibe os padrões de pressão atmosférica.
- *Nuvens* — mostra a cobertura de nuvens.

Todas as camadas de clima estão sincronizadas com a data e hora selecionadas no menu de Clima. Alterar o dia da previsão ou ajustar a barra deslizante de tempo atualiza imediatamente as sobreposições do mapa para refletir o momento escolhido.

![Clima no OsmAnd Web](@site/static/img/web/weather_layers.png)


## Visualização de Previsão {#forecast-view}

As previsões climáticas estão disponíveis para até 7 dias à frente. Os valores de previsão são calculados em intervalos de 3 horas, permitindo examinar mudanças de curto prazo ao longo de cada dia.

A previsão de 7 dias é exibida usando dois formatos complementares:
- **Visualização em gráfico**. Mostra as tendências de previsão ao longo do tempo para o parâmetro climático selecionado. 
- **Visualização em lista**. Exibe os valores de previsão diários em um formato de lista estruturado. 

Você pode alternar entre diferentes parâmetros climáticos usando os ícones no topo do painel de previsão. 

![Clima no OsmAnd Web](@site/static/img/web/weather_forecast.png)


## Artigo Relacionado {#related-article}

- [Clima](../plugins/weather.md)
- [Introdução](../web/web-overview.md)
- [Mapa](../web/web-map.md)