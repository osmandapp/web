---
source-hash: c714e52890d474392987e42babe6eed754ad1dbbaa5e4c8fe091171e272426fe
sidebar_position: 5
title:  Aparência da Trilha
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

O recurso **Aparência da Trilha** permite aos usuários personalizar como as trilhas são exibidas no mapa. Isso inclui ajustar cor, largura, indicadores de direção e outros elementos visuais. Personalizar a aparência da trilha ajuda a diferenciar múltiplas trilhas, destacar rotas específicas e melhorar a legibilidade do mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Visão geral da Aparência da Trilha Android](@site/static/img/map/track-appear-and-1.png)  ![Menu Aparência da Trilha Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Aparência da Trilha iOS](@site/static/img/map/track_appearence_1_ios.png) ![Menu Aparência da Trilha iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Acesso ao menu {#access-to-the-menu}

Você pode modificar a aparência da trilha usando um dos seguintes métodos:

- **De Meus Lugares**. Abra *Menu → Meus Lugares → Trilhas*, selecione uma trilha, toque no *ícone Aparência* no [menu de contexto da trilha](../../map/tracks/track-context-menu.md#overview).
- **Do mapa**. Toque em uma trilha diretamente no mapa, depois toque no *ícone Aparência* na seção *Visão Geral*.
- **Da gravação de trilha**. Modifique a aparência da trilha atualmente gravada através do [menu de contexto de gravação de trilha](../../plugins/trip-recording.md#сurrent-track-recording).  
- **Do menu Configurar Mapa**. Vá para *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* para as trilhas exibidas.


## Configurações de Aparência da Trilha {#track-appearance-settings}

### Cor {#color}

:::tip purchases
Algumas configurações você pode usar apenas com *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> e <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Recursos Gratuitos e Pagos.
:::

![Aparência](@site/static/img/map/appearance_color_andr.png)

Você pode definir a cor da trilha manualmente ou usar a **visualização de dados baseada em cores** (por exemplo, velocidade, altitude, inclinação). Se uma trilha não tiver certos dados, o OsmAnd exibe as seções ausentes em cinza.

**Opções de Cor Disponíveis:**

- **Configurações gratuitas**: *<Translate android="true" ids="track_coloring_solid"/> cor*, *<Translate android="true" ids="shared_string_speed"/>* (se gravado) e *<Translate android="true" ids="altitude"/>* (se gravado).

    ![Menu Aparência da Trilha Cor da Trilha Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Aparência Cor da Trilha Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Recurso Pro](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Para mais detalhes sobre a personalização da aparência da linha de rota, consulte [Tela do mapa durante a navegação](../../navigation/guidance/map-during-navigation.md#color) e sobre a seleção e criação de uma cor personalizada, consulte [Esquemas de cores](../../personal/color-palette-schemes.md#routes).


### Largura {#width}

![Menu Aparência da Trilha Espessura da Trilha Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Aparência da Trilha](@site/static/img/map/track_appearance_width_andr.png)  

Você pode personalizar a aparência da trilha em vários menus do aplicativo:

- [*Trilha → Aparência*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Configurações de Navegação → Personalizar linha de rota*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Meus Lugares → Aba Trilhas → qualquer pasta → Aparência padrão*](../../personal/tracks/manage-tracks.md#track-folder).

Ajuste a largura da trilha para melhorar a visibilidade no mapa.

- **Opções predefinidas**: **Fina, Média** e **Negrito**.

- **Largura personalizada**: Ajustável de 1 a 24 px usando um controle deslizante.

- **Largura baseada em perfil**: Pode ser definida via *Configurações de Navegação → [Personalizar Linha de Rota](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Intervalo de Divisão {#split-interval}

![Menu Aparência da Trilha Intervalo de divisão](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Intervalo de divisão](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Selecione se deseja dividir o intervalo na trilha **por distância ou por tempo**.

### Setas de Direção {#direction-arrows}

![Menu Aparência da Trilha setas de direção Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Adiciona **marcadores de seta** ao longo da trilha para indicar a direção do movimento.

### Ícones de Início e Fim {#start-and-finish-icons}

![Menu Aparência da Trilha ícones de início e fim Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Permite selecionar se deseja mostrar os **ícones de início e fim** para segmentos de trilha.

### Juntar Lacunas {#join-gaps}

Conecta **segmentos de trilha** que foram interrompidos devido à perda de GPS ou uma pausa na gravação. O recurso **<Translate android="true" ids="join_segments"/>** (*Android*) ou **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) permite conectar essas lacunas na trilha GPX selecionada usando linhas retas.

### Redefinir para Original {#reset-to-original}

Restaura todas as **configurações de aparência da trilha** para seus valores padrão.


## Trilha 3D {#3d-track}

:::info Recurso Pago
**Trilha 3D** é um recurso pago do **OsmAnd Pro** para [iOS](../../purchases/ios.md#pro-features) e [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu Aparência da Trilha Visualização 3D](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Aparência da Trilha Visualização 3D](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

O recurso **Trilha 3D** gera uma visualização tridimensional integrando dados de elevação em trilhas 2D padrão. Essa funcionalidade cria uma representação com profundidade aprimorada, permitindo uma análise precisa da trilha em relação ao terreno. Ao incorporar detalhes de elevação, a trilha 3D oferece uma visão mais abrangente da topografia e do contexto geográfico da rota.

### Configurações da Trilha 3D {#3d-track-settings}

**Altura da Parede**  
Você pode visualizar uma trilha 3D por altitude e outros dados disponíveis dentro da trilha, ou por altitude fixa.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Altitude*, &nbsp;*Velocidade*, &nbsp;*Altura Fixa*. Dados do Sensor 3D: &nbsp;*Frequência Cardíaca*, &nbsp;*Cadência da Bicicleta*, &nbsp;*Potência da Bicicleta*, &nbsp;*Temperatura*, &nbsp;*Velocidade da Bicicleta*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Se visualizado por *Altitude* ou *Velocidade*, você pode escalar os dados 3D para obter uma visualização mais proeminente para a trilha 3D no intervalo de *Nenhum* a *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Se visualizado por *Altura Fixa*, defina a altura fixa para a trilha 3D, definindo sua elevação no mapa no intervalo de *Nenhum* a *2000 m*.

- Você pode combiná-lo com [Relevo 3D](../../plugins/topography.md#3d-relief). Se a fonte dos dados 3D não for altitude, a representação 3D será uma combinação da altitude do relevo e dos dados selecionados, como velocidade ou frequência cardíaca.

**<Translate android="true" ids="wall_color"/>**  
Personaliza a **cor da trilha 3D** usando gradientes ou visualização baseada em dados.  
As opções incluem: *Nenhum*, &nbsp;*Sólido*, &nbsp;*Gradiente para Baixo*, &nbsp;*Gradiente para Cima*, &nbsp;*Altitude*, &nbsp;*Inclinação*, &nbsp;*Velocidade*.

**<Translate android="true" ids="track_line"/>**  
Adiciona uma [linha destacada](#color) na parte superior ou inferior da trilha 3D.  
As opções incluem: *Superior*, &nbsp;*Inferior*, &nbsp;*Superior e inferior*.

> **NOTA**: *A **versão Android** do aplicativo requer que o motor de renderização de mapa [Versão 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) esteja habilitado para usar a visualização de trilha 3D.*


### Casos de Uso {#use-cases}

O recurso de trilha 3D é altamente benéfico para atividades como parapente, onde a visualização do seu caminho de voo pode oferecer insights mais profundos. Ao renderizar a trilha em 3D, você pode aproveitar recursos como **Altura da Parede** e **Cor da Parede** para extrair informações visuais valiosas para análise.

1. **Visualizar por Velocidade com 3D**.  
    Um caso de uso comum é a utilização de trilhas 3D para visualizar variações de velocidade. Isso permite que você identifique seções específicas da trilha onde você diminuiu ou aumentou a velocidade.  

    Com a Cor da Parede baseada na Inclinação, você pode observar como o terreno, particularmente colinas e inclinações, impactou sua velocidade. Essa combinação de visualização de velocidade e inclinação fornece uma compreensão detalhada do desempenho ao longo da atividade.

2. **Visualizar por Sensor Cardíaco com Relevo 3D**.  
    Outra aplicação perspicaz é combinar dados do sensor de frequência cardíaca com mapas de relevo 3D. Isso permite mapear flutuações da frequência cardíaca diretamente no terreno, dando a você uma visão abrangente de como as mudanças de altitude podem ter influenciado seu esforço físico.  

    O recurso de relevo 3D, que exagera a altitude, funciona independentemente da visualização da trilha 3D. Dois parâmetros de exagero vertical podem ser ajustados para melhor entender a correlação entre a frequência cardíaca e a elevação do terreno.

3. **Visualizar altura da trilha e linha de cor da inclinação em uma vista de terra plana.**  
    Ao visualizar dados de altitude, é recomendado usar uma vista de terra plana para evitar problemas como erros de GPS, que podem fazer com que seções da trilha apareçam subterrâneas.  

    Nesse cenário, as mudanças de inclinação podem ser visualizadas separadamente ao longo da linha da trilha, enquanto a Cor da Parede é utilizada para representar a altitude. Esse método garante que, mesmo com possíveis imprecisões de dados, você ainda receba uma visualização clara e precisa da inclinação e elevação.

## Alterar Aparência para Múltiplas Trilhas {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aparência Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Aparência Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alterar Aparência](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Alterar Aparência](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

A aba [Trilhas](../../personal/tracks/manage-tracks.md) exibe automaticamente todas as trilhas já gravadas, criadas ou importadas. Elas são organizadas por pasta ou exibidas como uma lista abaixo delas.  

Modifique a aparência de múltiplas trilhas em *Meus Lugares → Trilhas*:

- **Alterar aparência padrão** - Aplica configurações a todas as trilhas em uma [pasta](../../personal/tracks/manage-tracks.md#track-folder).
- **Redefinir para original** - Restaura as configurações de trilha individuais.

- [Modo de seleção](../../personal/tracks/manage-tracks.md#selection-mode) - Altera a aparência de trilhas específicas na pasta selecionada ou na lista inteira na aba Trilhas.
    - Selecione o *menu de três pontos* no canto superior direito da aba Trilhas e toque em *Selecionar*.
    - Em seguida, toque no *menu de três pontos* na parte superior da tela e selecione *Alterar Aparência*.  

Opções de personalização de aparência em massa:

- **Setas de direção** - Adiciona [indicadores de movimento](#direction-arrows).  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Ligado*, &nbsp;*Desligado*.

- **Mostrar ícones de início e fim** - [Exibe marcadores](#start-and-finish-icons) para os pontos de início e fim da trilha.  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Ligado*, &nbsp;*Desligado*.

- **Cor** – Aplica [coloração](#color) manual ou baseada em dados.

- **Largura** – Ajusta a [largura da linha da trilha](#width) usando predefinições ou manualmente.

- **Intervalo de divisão** – [Define o intervalo](#split-interval) para marcadores de distância / tempo.  
    Estados: *Inalterado*, &nbsp;*Original*, &nbsp;*Selecionar*: *Tempo* ou *Distância*.

Original e inalterado:

- **Original** - Restaura os parâmetros originais do arquivo da trilha.

- **Inalterado** - Mantém as configurações atuais durante a sessão de edição.


## Cores da Trilha em Arquivos GPX {#track-colors-in-gpx-files}

O OsmAnd suporta **cores de trilha personalizadas** em arquivos GPX usando a tag `<osmand:color>` dentro da seção `<extensions>` de um elemento `<trk>`. Isso permite que os usuários definam cores para trilhas individuais, aprimorando a diferenciação visual quando múltiplas trilhas são exibidas no mapa.

Para especificar uma cor para uma trilha, use o seguinte formato:  

```xml
<trk>
  <name>Exemplo de Trilha</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- A tag `<osmand:color>` aceita **códigos de cores hexadecimais** (por exemplo, `#FF0000` para vermelho).
- Se existirem múltiplas trilhas em um arquivo GPX, cada trilha pode ter sua própria tag `<osmand:color>`.


**Comportamento no OsmAnd:**

1. **Atribuição de cor padrão**:  

    - Quando uma **trilha GPX é importada como uma única trilha** (opção ***Importar como uma trilha***), a trilha inteira recebe a **cor GPX padrão** (vermelho).  
    - No OsmAnd **4.9.10 e posterior**, esse problema foi resolvido — as cores individuais das trilhas agora são preservadas na importação.

2. **Exibição de cor única para trilhas mescladas:**  

    - Se as trilhas forem **mescladas** usando ***Juntar Segmentos***, a trilha resultante é tratada como **uma trilha contínua com um único segmento**.
    - A representação multicolorida **não é suportada** para trilhas mescladas.
    - A trilha mesclada será exibida usando a **cor principal do GPX** (padrão: vermelho), mesmo que os segmentos de trilha individuais tivessem originalmente cores diferentes.

3. **Prioridade das configurações de aparência:**  

    - O OsmAnd atualmente suporta **configurações de cor e largura apenas para a trilha inteira**.
    - Essas configurações de aparência são armazenadas nas **extensões GPX de nível superior**.
    - Se uma cor ou largura for **definida no nível superior** (seja no arquivo GPX ou manualmente no OsmAnd), essa configuração terá precedência sobre as cores atribuídas a segmentos de trilha individuais.

**Solução para Trilhas Multicoloridas:**

- Para preservar **cores individuais para múltiplas trilhas**, **importe as trilhas separadamente** em vez de mesclá-las.

- Ajuste as cores da trilha manualmente em **Configurações de Aparência da Trilha**:

  - Abra a trilha no OsmAnd.
  - Toque na trilha para abrir o **Menu de Contexto**.
  - Selecione **Aparência**.
  - Escolha a cor preferida.

- Isso garante que cada trilha mantenha sua **representação de cor pretendida**, mesmo que o arquivo GPX contivesse originalmente múltiplos segmentos com cores diferentes.


## Artigos Relacionados {#related-articles}

- [Menu de Contexto do Mapa](../map-context-menu.md)
- [Configurar Mapa](../configure-map-menu.md)
- [Pontos no mapa](../point-layers-on-map.md)
- [Trilhas](../tracks/index.md)
- [Menu de Contexto das Trilhas](../tracks/track-context-menu.md)
- [Gravação de Viagem](../../plugins/trip-recording.md)

> *Última atualização: Fevereiro de 2025*