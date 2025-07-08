---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title: Entrada de Coordenadas
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



<InfoAndroidOnly />

## Visão Geral {#overview}

*Entrada de Coordenadas* é uma ferramenta simples e fácil de usar para criar pontos de passagem especificando sua localização geográfica. Este recurso pode ser útil para navegar para determinados locais, que você conhece apenas por suas coordenadas: os pontos adicionados podem ser [salvos](#save-as-track) como uma trilha GPX e usados posteriormente para [navegação GPX](../navigation/setup/gpx-navigation.md) ou [navegação por marcadores](../navigation/setup/markers-navigation.md#add-gpx).

![Visão geral da entrada de coordenadas](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Como usar {#how-to-use}

Você pode criar pontos de passagem a partir do menu *[Marcadores de mapa](../personal/markers.md#actions)* ou de [Meus locais](../personal/myplaces.md) (veja as capturas de tela). Siga estes caminhos para acessar a opção de entrada de coordenadas:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Botão Terra na parte inferior da tela*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Entrada de coordenadas como encontrar](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Entrada de coordenadas como encontrar](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Depois de abrir a tela de entrada de coordenadas:

- &nbsp;Certifique-se de que as [unidades de medida](#coordinates-format) corretas sejam usadas. Caso contrário, altere o formato das coordenadas no menu [Opções](#options).
- &nbsp;Insira as coordenadas do ponto usando o [modelo](#add-a-point). Depois de pressionar o botão *[Adicionar](#add-a-point)*, seu ponto será adicionado à *[lista de pontos](#points-list)*. Se necessário, você pode inserir pontos adicionais.
- &nbsp;Salve seu(s) ponto(s) como uma *[Trilha](../personal/tracks/manage-tracks.md)* usando o *[menu Opções](#options)* ou &#8592; (Voltar) botão.

:::note
Os resultados da criação de pontos por coordenadas - uma *[trilha GPX](../personal/tracks/manage-tracks.md)* com pontos de passagem - podem ser encontrados no menu [Meus locais](../personal/myplaces.md) (*pasta <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opções {#options}

Usando o menu de opções, você pode [salvar](#save-as-track) o(s) ponto(s) adicionado(s) como uma trilha, ativar opções avançadas de entrada (teclado do sistema e longitude de dois dígitos) ou alterar o formato das coordenadas.

![Menu de opções de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - abre uma caixa de diálogo que permite salvar o ponto (ou pontos) criado como uma trilha GPX. Você pode alterar o nome da trilha ou deixá-lo como padrão.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - permite usar o teclado do sistema Android para inserir coordenadas.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - permite inserir dados de longitude com apenas dois dígitos. Isso pode ser útil para longitudes de 0° a 99° (por exemplo, na Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - permite alterar o formato das coordenadas para entrada.

### Formato de coordenadas {#coordinates-format}

Ao inserir coordenadas, é importante garantir que as unidades de medida apropriadas sejam usadas. Suportamos graus decimais (DD), graus e minutos, ou graus, minutos e segundos (DMS).

|Formato de coordenadas| Exemplo |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Adicionar um ponto {#add-a-point}

Depois de selecionar as unidades corretas, você está pronto para inserir as coordenadas dos futuros pontos de passagem.
A tela de entrada de coordenadas consiste nos seguintes elementos:

![Menu de entrada de coordenadas Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Abre o menu *[Opções](#options)* (descrito acima).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. É usado para inserir dados no formato selecionado (D - graus, M - minutos, S - segundos). Você pode alterar o formato das coordenadas no menu *[<Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Botões semiglobo *<Translate android="true" ids="navigate_point_latitude"/> e <Translate android="true" ids="navigate_point_longitude"/>*. Permitem alterar os lados do horizonte: *Sul - Norte* e *Oeste - Leste*.
- &nbsp;Campo *Nome do ponto*. Você pode deixar o nome padrão ou criar o seu próprio.
- &nbsp;Botão *X*. Limpa o campo de entrada da linha correspondente.

### Teclado curto {#short-keyboard}

Para inserir dados, você pode usar o teclado curto (padrão) ou o teclado do sistema (Android). Para alterar o método de entrada, vá para o menu *[Opções](#options)*. Após inserir a latitude e a longitude, você pode adicionar o ponto à *[lista](#points-list)* usando o botão *+Adicionar*.

![Entrada de coordenadas Adicionar ponto Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- O botão *<Translate android="true" ids="shared_string_add"/>* permite salvar um ponto dentro da *[Lista de pontos](#points-list)*.
- O botão *<Translate android="true" ids="shared_string_clear"/>* redefine todos os dados inseridos.
- &#9032; permite pular para o próximo valor.
- Os *botões do teclado* permitem inserir dados, excluí-los, pular para o próximo valor de coordenada, ocultar o teclado.

### Lista de pontos {#points-list}

Mostra os pontos já criados: nome, distância e direção para este ponto.

![Entrada de coordenadas salvar ponto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Entrada de coordenadas salvar ponto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

O botão **⁝** abre um menu de ações para editar ou excluir o ponto selecionado.
Ao tocar em um ponto, torna-se possível alterar suas coordenadas. Toque no botão *Aplicar* para salvar as alterações.

## Salvar como trilha {#save-as-track}

Para salvar seus pontos como uma trilha, toque no botão *Voltar* ( &#8592; ) ou use o menu *[Opções](#options)*.

![Entrada de coordenadas salvar ponto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Entrada de coordenadas salvar ponto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

No menu pop-up, você pode inserir seu próprio nome de trilha ou salvá-lo por padrão. Toque em <Translate android="true" ids="shared_string_save"/> para salvar os pontos adicionados como uma nova trilha.
Você encontrará sua trilha no menu [Meus locais](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).