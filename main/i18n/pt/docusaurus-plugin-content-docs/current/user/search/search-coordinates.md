---
source-hash: bf99678e5242473057ed7799710f80ba10f57eb3f3795a53a0ac3600858d896c
sidebar_position: 6
title: Pesquisar Coordenadas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão geral {#overview}

A **pesquisa de coordenadas do OsmAnd** permite que você encontre um local específico por latitude e longitude. Esse tipo de pesquisa ajuda a identificar um local com precisão. É especialmente útil para áreas que não têm endereços precisos, ou para tarefas geográficas específicas, como a criação de cercas geográficas ou posicionamento preciso em espaço aberto.

O OsmAnd oferece várias maneiras de acessar a *ferramenta de pesquisa → [Guia de pesquisa de endereço](../search/search-address.md)*, onde a **pesquisa de coordenadas** está localizada.

- O [botão de pesquisa](../widgets/map-buttons.md#search) na tela do aplicativo de mapa.
- Vá para o *Menu* principal do Android *→ Pesquisar → Guia de Endereço → Pesquisar Coordenadas*.
- Ao se preparar para iniciar uma rota, toque em *Navegação → Definir destino → Campo de pesquisa → Guia de endereço → Pesquisar Coordenadas*.


## Como usar {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

As coordenadas podem ser inseridas em qualquer formato disponível, mas o local encontrado é exibido no formato especificado em *Configurar perfil → Configurações gerais → Unidades e formatos*.

- Para usar a pesquisa de coordenadas, você pode digitá-las em cada campo correspondente individualmente, ou colar coordenadas copiadas anteriormente no campo de pesquisa ou inseri-las nele. O aplicativo solicita que você selecione um local adequado.
- A Pesquisa de Coordenadas converte automaticamente um formato de coordenada para outro quando o formato especificado é alterado no campo com sua lista.
- Toque no local sugerido e o [menu de contexto do mapa](../map/map-context-menu.md#select-any-point-long-tap) será aberto.
- Mais informações podem ser encontradas aqui [Coordenadas geográficas](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Escopo da função de pesquisa de coordenadas**:

- *Localização precisa*. A pesquisa de coordenadas fornece uma localização precisa. Você pode inserir coordenadas precisas obtidas, por exemplo, de outras fontes, como um mapa, dispositivo GPS ou serviços online.
- *Locais sem endereço*. As coordenadas são particularmente úteis quando se trata de locais que não têm um endereço exato, ou quando o endereço é desconhecido. Por exemplo, pode ser uma área remota, um ponto no mar ou um pico de montanha. Ao inserir coordenadas, você pode encontrar e navegar para esses locais sem ter que saber o endereço.
- *Compartilhamento de localização*. A pesquisa por coordenadas oferece uma maneira conveniente de inserir informações. Você pode inserir coordenadas manualmente ou copiá-las de outras fontes. Isso pode ser útil ao compartilhar locais com outras pessoas ou usar coordenadas obtidas anteriormente.


## Formato de Coordenadas {#coordinate-format}

Existem várias maneiras de inserir coordenadas para a pesquisa. Para usar cada uma delas, é muito importante seguir as regras de entrada, caso contrário, o aplicativo não conseguirá encontrar o local.

1. **<Translate android="true" ids="navigate_point_format_D"/>**

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_degrees_andr.png)

    **Coordenadas decimais (graus)**. Neste formato, as coordenadas de latitude e longitude são escritas em formato decimal, por exemplo, 52.37022° de latitude e 4.89517° de longitude para Amsterdã. Este método de entrada é fácil de usar e é o mais comum. Você pode ler mais sobre o formato de coordenadas decimais [aqui](https://en.wikipedia.org/wiki/Decimal_degrees).

    - *Regras de entrada*. As coordenadas de latitude e longitude são escritas em formato decimal, onde a latitude varia de -90 a 90 e a longitude varia de -180 a 180.
    - *Mais comumente usado*. As coordenadas decimais são amplamente utilizadas em aplicativos de navegação, dispositivos GPS, mapas da web e outros serviços de geoposicionamento.

2. **<Translate android="true" ids="navigate_point_format_DM"/>**

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_DM_andr.png)

    **Graus e Minutos (DM)**. Neste formato, as coordenadas de latitude e longitude são registradas usando graus e minutos. Por exemplo, 37:46.29 de latitude e -122:25.10 de longitude para São Francisco. Este formato pode ser menos preciso e pode levar mais tempo para ser inserido.
    - *Regras de entrada*. As coordenadas de latitude e longitude são escritas em um formato que usa graus (:) e minutos (:).
    - *Mais comumente usado*. O formato DM é frequentemente encontrado em navegação marítima, aviação, astronomia e sistemas de mapeamento topográfico.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_DMS_andr.png)

    **Graus, Minutos e Segundos (DMS)**. O formato de coordenadas DMS registra coordenadas geográficas onde os valores são dados em graus, minutos e segundos. Graus (DDD) podem assumir valores de 0 a 180 para longitude e 0 a 90 para latitude. Valores positivos indicam longitude leste e latitude norte, e valores negativos indicam longitude oeste e latitude sul. Minutos (MM) podem assumir valores de 0 a 59. Segundos (SS.S) representam a fração decimal de um segundo e também podem variar de 0 a 59.9.
    - *Regras de entrada*. As coordenadas de latitude e longitude são escritas em um formato que usa graus (:), minutos (:) e segundos (.).
    - *Mais comumente usado*. O formato DMS é amplamente utilizado em geodésia, aplicativos de navegação, cartografia, astronomia e outros campos onde é necessária uma expressão mais detalhada das coordenadas de localização.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_UTM_andr.png)

    **UTM (Sistema Universal Transversal de Mercator)**. Neste formato, as coordenadas são especificadas usando a zona UTM, direções Leste e Norte. Por exemplo, para Amsterdã, as coordenadas podem ser aproximadamente as seguintes: zona 31, direção Leste 581000, direção Norte 5809000. A inserção de coordenadas no formato UTM pode exigir alguma familiaridade com o sistema e ser mais complexa do que outros formatos, mas oferece boa precisão e atende aos padrões globais de geoposicionamento. Você pode ler mais sobre o formato UTM [aqui](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Regras de entrada*. As coordenadas são registradas em um formato que usa a zona UTM e os deslocamentos Leste e Norte.
    - *Mais comumente usado*. O formato UTM é frequentemente usado em levantamentos, mapeamento e sistemas de informações geográficas para medição e navegação.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Location Code representa área 9m x 14m))

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_OLC_andr.png)

    **Open Location Code (OLC)**, também conhecido como **Plus Code**, é um sistema global de codificação de localização. É uma combinação de letras e números para indicar a latitude e longitude de qualquer local no planeta. Exemplo de um código OLC para Amsterdã: 9F3WCVWG+FP. Neste exemplo, "9F3WCVWG" indica uma grade grosseira, e "+FP" especifica um local dentro dessa área. Leia mais [aqui](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Regras de entrada*.
        - O código OLC consiste em 4 a 14 caracteres, que podem ser letras de "C" a "Z" (exceto "I" e "O") e números de "2" a "9".
        - O código começa com um prefixo global que indica um continente ou área.
        - É seguido por grupos de caracteres que são separados por pontos. Cada grupo representa uma área mais estreita.
        - Para esclarecer o local, letras e dígitos são complementados por outros caracteres no código OLC.
    - *Mais comumente usado*. OLC é frequentemente usado em áreas onde endereços precisos não estão disponíveis ou são difíceis de determinar, como áreas remotas, desertos ou oceanos. Também é amplamente utilizado em aplicativos e serviços relacionados a geoposicionamento, entrega, serviços de emergência e outras áreas onde é necessária uma localização precisa sem o uso de endereços tradicionais.

6. **<Translate android="true" ids="navigate_point_mgrs"/>**

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_MGRS_andr.png)

    **MGRS (Military Grid Reference System)**. Este é um sistema de coordenadas frequentemente usado em aplicações militares. É baseado no sistema UTM e é complementado com uma grade adicional de quadrados. Um exemplo de coordenadas no formato MGRS para um local na Austrália pode ser o seguinte: 55HBE1234567890. Neste exemplo, "55H" representa a zona MGRS e "BE" representa o quadrado em que o local está localizado. "123456" representa o deslocamento para leste e "7890" representa o deslocamento para norte dentro desse quadrado. As MGRS são amplamente utilizadas em áreas que exigem alta precisão e georreferenciamento. Elas são particularmente úteis em ambientes onde os endereços podem não ser claros ou disponíveis, como operações militares ou expedições em áreas remotas. Você pode ler mais sobre o formato MGRS [aqui](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).
    - *Regras de entrada*. As coordenadas consistem em uma zona MGRS, um quadrado e mais dois dígitos indicando os deslocamentos leste e norte.
    - *Mais comumente usado*. O formato MGRS é amplamente utilizado em navegação e comunicações militares, e também pode ser útil para entusiastas de atividades ao ar livre e caminhantes.

7. **Swiss Grid** (CH1903) e **Swiss Grid** (CH1903+)

    ![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_Swiss_andr.png)

    **Sistema de coordenadas suíço**. Swiss Grid (CH1903) e Swiss Grid (CH1903+) são sistemas de coordenadas amplamente utilizados na Suíça para posicionamento. Ambos os formatos são baseados no sistema CH1903, que foi introduzido em 1903 e é baseado na projeção da Grade Internacional Suíça. Exemplo de coordenadas no formato Swiss Grid (CH1903) — Leste: 600000; Norte: 200000. No formato Swiss Grid (CH1903+) — Leste: 600300; Norte: 200400. Você pode ler mais sobre o sistema de coordenadas geográficas Swiss Grid [aqui](https://en.wikipedia.org/wiki/Swiss_coordinate_system).
    - *Regras de entrada*.
        - As coordenadas no formato CH1903 consistem em dois componentes: Leste e Norte.
        - Leste está em metros a partir de um ponto chamado Eixo de Lucerna (zero Leste).
        - Norte é dado em metros a partir do equador.
        - O formato CH1903+ usa as mesmas regras de entrada que o CH1903, mas com valores mais precisos.
        - CH1903+ inclui correções para contabilizar desvios nas coordenadas causados por mudanças nos movimentos tectônicos na Suíça.
    - *Mais comumente usado*. Os formatos Swiss Grid (CH1903) e Swiss Grid (CH1903+) são usados na Suíça para medições geodésicas, cartografia, sistemas de informações geográficas e construção e engenharia. Esses formatos fornecem um sistema de coordenadas local específico para a Suíça.


> Para cada perfil separadamente, você pode definir um formato de coordenada diferente. Para fazer isso, vá para *Configurações gerais → [Formato de coordenada](../personal/profiles.md#units--formats)*.


<!--

## Solução de problemas {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081

https://github.com/osmandapp/OsmAnd/issues/16114

https://github.com/osmandapp/OsmAnd/issues/14081

-->


## Artigos relacionados {#related-articles}

- [Pesquisar Tudo](./search-all.md)
- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)


> *Última atualização: julho de 2024*