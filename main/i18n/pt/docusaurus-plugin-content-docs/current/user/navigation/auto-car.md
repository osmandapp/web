---
source-hash: 3be3e0b1234aafa204632357b26d98724820bfbfafe67f7237cda7aae4d48299
sidebar_position: 9
title: Android Auto
ios: false
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

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_overview.png)

[**Android Auto**](https://www.android.com/auto) é um software desenvolvido pelo Google que permite aos usuários conectar seus dispositivos Android a sistemas multimídia veiculares compatíveis. O *Android Auto* oferece uma versão adaptada e otimizada do aplicativo OsmAnd para uso seguro durante a condução, tornando mais fácil e seguro acessar as funções de navegação do aplicativo.

A função **Android Auto** é suportada apenas ao usar o aplicativo OsmAnd disponível na [Google Play Store](https://play.google.com/store/apps/dev?id=8483587772816822023).

> **NOTA**: *O Android Auto não é uma replicação direta do aplicativo móvel OsmAnd. Ele possui uma interface simplificada, focando nas funções essenciais de navegação para garantir uma condução segura. Alguns recursos avançados não são suportados devido a limitações da plataforma.*

### Tela de Conexão {#connection-screen}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_connect_screen.png)

Enquanto seu dispositivo estiver conectado ao *Android Auto*, o mapa na tela do aplicativo estará bloqueado. Este é um recurso de segurança intencional para garantir que a navegação seja controlada exclusivamente a partir da tela do carro, minimizando distrações durante a condução. Verifique as [perguntas comuns](#common-issues-and-solutions) sobre a tela de conexão.

### Tela Inicial {#landing-screen}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_landing_screen_2.png').default} alt="AA"/></td>
    </tr>
</table>

Ao abrir o aplicativo, uma lista de categorias é exibida. Para facilitar a navegação, você pode ocultá-la tocando no botão no canto superior direito da tela.

- Toque no botão de menu para ocultar a lista de categorias.
- No canto superior direito da tela, toque no botão ao lado dos botões de função se quiser retornar à lista.

### Interação Com o Mapa {#interaction-with-the-map}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_interaction_2.png)

O *Android Auto* exibe a interface do OsmAnd adaptada à tela do sistema multimídia do veículo. A interação com o mapa é limitada a botões como:

- [Menu OsmAnd](#destination-points). Contém uma lista de opções disponíveis para atribuir um ponto final de rota ou um passeio livre.
- [Configurações](#voice-prompts). Este botão é responsável por: 1. acesso para ligar/desligar *comandos de voz* ao navegar pela rota selecionada; 2. mostrar detalhes da rota (tempo e distância) para a próxima parada.
- [Pesquisar](#search). Tocar no botão abre uma tela com acesso às funções de pesquisa.
- [Minha Localização](../widgets/map-buttons.md#my-location-and-zoom). Move a parte visível do mapa para que sua localização atual esteja no centro da tela.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Permite aumentar e diminuir o zoom da parte visível do mapa.
- [Bússola](../widgets/map-buttons.md#compass). Mostra qual dos quatro modos de orientação de mapa disponíveis na tela do seu dispositivo está selecionado.

## Parâmetros de Configuração Necessários {#required-setup-parameters}

### Iniciar Navegação {#start-navigation}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_start_navigation.png)

Para que o OsmAnd funcione no *Android Auto*, você deve [conectar](#connection-screen) seu dispositivo Android ao sistema multimídia do seu veículo. O sistema operacional Android deve ser atualizado para a versão 6.0 ou superior.

- Para saber como conectar e configurar seu dispositivo, visite os sites do [**Android Auto**](https://support.google.com/androidauto/answer/6348029?hl=en).

- Nem todos os veículos suportam a capacidade de conexão de dispositivos. Verifique a [lista para *Android Auto*](https://www.android.com/auto/compatibility/#compatibility-vehicles).

- Você precisa adquirir uma **versão paga** do aplicativo ou fazer uma [assinatura](../purchases/android.md#free-and-paid-features). Verifique sua assinatura atual aqui *Menu → Configurações → Compras*.

- O *Android Auto* usa o primeiro [perfil de Condução do OsmAnd](#profile-first) na lista de Perfis para navegação. Defina o perfil preferido como o primeiro, exceto para o perfil *Navegar no mapa*, ele não é lido pelo *Android Auto*. Para fazer isso, vá para OsmAnd *Menu → Configurações → Perfis de aplicativo → Editar lista de perfis* → mova seu perfil de [**Condução**](#profile-first) para o primeiro lugar ou após o perfil *Navegar no mapa*.

- É importante lembrar que o *Android Auto* é um aplicativo que consome muitos dados, incluindo dados móveis, e a qualidade do sistema pode depender da qualidade da sua conexão e da velocidade do seu acesso à Internet.

### Perfil Primeiro {#profile-first}

Você não pode selecionar um perfil diretamente no *Android Auto* na tela do veículo.
Se você já tiver um perfil selecionado em seu dispositivo que corresponda ao tipo de veículo, como *Condução*, *Caminhão*, *Carro*, *Motocicleta*, *Moped*, **o aplicativo ativará automaticamente** o perfil apropriado ao conectar-se ao Android Auto. Por exemplo, se você tiver um perfil de *Caminhão* selecionado e seu dispositivo se conectar ao **Android Auto**, o aplicativo ativará esse perfil.

Se você não tiver nenhum perfil de *Condução* selecionado em seu dispositivo que corresponda ao seu tipo de veículo, o OsmAnd mudará automaticamente para o perfil de *Condução*. Isso é feito para fornecer navegação básica e para evitar possíveis problemas causados pelo uso do perfil errado para um tipo de veículo específico.

**Por que é importante:**

1. **Segurança na condução.** Diferentes tipos de transporte exigem informações e configurações diferentes ao dirigir. Por exemplo, motoristas de caminhão podem ter restrições de altura, peso e largura de seus veículos, então o perfil *Caminhão* fornece a eles restrições e diretrizes apropriadas. Enquanto ciclistas e motociclistas precisam de informações sobre ciclovias e rotas, sem dados para caminhões.

2. **Utilidade e Eficiência.** A navegação deve ser personalizada para atender às necessidades de um modo de transporte específico. Isso permite que os usuários reduzam o tempo necessário para encontrar rotas ideais e evitem restrições de tráfego desnecessárias.

3. **Evitar erros.** A mudança para o perfil de *Condução* quando não há um perfil específico para o modo de transporte selecionado fornece acesso constante às configurações e informações mínimas necessárias, evitando assim possíveis erros e mal-entendidos durante a condução.

## Pontos de Destino {#destination-points}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_landing_screen_1.png)

Você pode selecionar POIs [previamente definidos e adicionados](../map/point-layers-on-map.md#points-of-interest-pois), ou [Favoritos](../personal/favorites.md), ou [Marcadores](../personal/markers.md) como ponto de destino. Também é possível selecionar uma [Trilha](../personal/tracks/manage-tracks.md) gravada ou baixada para a rota, usar a [Pesquisa](../search/index.md), ou selecionar um destino do [Histórico](../search/search-history.md) da rota ou fazer um *Passeio livre*.

1. Se você deseja um local específico no mapa como ponto final, selecione a categoria apropriada de pontos na lista, [POIs](#poi-categories), [Favoritos](#favorites), ou [Marcadores de Mapa](#map-markers).

    - Todas as categorias podem conter não mais itens de lista do que os fornecidos pelo sistema multimídia do seu veículo. Isso significa que a lista no *Android Auto* pode estar incompleta, e todas as outras pastas estão disponíveis apenas no aplicativo OsmAnd em seu dispositivo.
    - A pasta [Última modificação](#folder-last-modified) contém uma lista de destinos recentes, classificados por data de adição ou alteração.
    - A lista de todas as outras pastas é classificada pela atualização mais recente, as novas pastas estão no topo da lista. Não é possível alterar sua ordem manualmente.
    - A lista de pontos dentro das pastas é classificada pela distância até eles, começando pelo mais próximo. Cada ponto tem um nome ou coordenadas, um ícone em forma (cor e ícone definidos por padrão ou escolhidos por você no aplicativo OsmAnd), e a distância do ponto da localização atual até ele.

2. Selecione a categoria [Histórico](#history) para encontrar um dos destinos recentes que estão armazenados na memória do dispositivo.

3. Selecione [Pesquisar](#search) para inserir um destino das categorias de pesquisa disponíveis.

4. Escolha **Passeio livre** para fazer uma viagem sem um ponto final especificado.

:::note
Durante a condução, os pontos selecionados podem ser [anunciados](#voice-prompts) ao se aproximar ou passar por eles. Consulte as configurações de [Comandos de voz](../navigation/guidance/voice-navigation.md) no artigo apropriado para configurar as notificações de voz.
:::

### Histórico {#history}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_history.png)

Na categoria Histórico, você pode selecionar um destino de uma lista de pontos finais. Eles são classificados pelo uso mais recente, começando pelo mais novo. Isso pode ser conveniente para acesso rápido a rotas frequentemente usadas. Para saber como usar ou excluir um destino, leia o artigo [Histórico de Pesquisa](../search/search-history.md).

### Categorias de POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_poi_2.png').default} alt="AA"/></td>
    </tr>
</table>

POIs (Pontos de Interesse) são um tipo de pontos que identificam lugares ou objetos no mapa que são importantes ou de interesse para os usuários. Eles são destacados por ícones especiais fornecidos nas [configurações do OsmAnd](../map/point-layers-on-map.md#poi-types) e classificados em grupos.

Para construir uma rota para um POI no *Android Auto*, siga estes passos:

1. Selecione o POI necessário na lista de categorias disponíveis, ou insira o nome do POI usando [Pesquisar](#search).
2. Tocar em uma categoria abre a tela seguinte com uma lista de POIs.
3. Tocar em um item na lista abre a navegação.
4. O OsmAnd calcula a rota e a exibe na tela do *Android Auto*. Toque no botão **Iniciar** para começar a navegar para esse local.
5. Dependendo das [configurações](../navigation/guidance/navigation-settings.md) do seu aplicativo OsmAnd e do seu veículo, você pode receber [comandos de voz](#voice-prompts) para guiá-lo até um destino.

### Favoritos {#favorites}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_3.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_favorites_4.png').default} alt="AA"/></td>
    </tr>
</table>

*Favoritos* é uma das funções do OsmAnd que permite fazer uma espécie de marcadores (notas) no mapa. Ao usar o *Android Auto*, você não pode adicionar ou modificar Favoritos, apenas usar os existentes. A lista de [Favoritos](../personal/favorites.md#manage-favorites) pode ser encontrada no aplicativo OsmAnd *Menu → Meus Locais → Favoritos*. Se você quiser usá-los para navegação, adicione os locais necessários aos favoritos antes de conectar o dispositivo ao sistema multimídia do seu veículo.

Para criar uma rota para um ponto favorito no *Android Auto*, siga os passos abaixo:

1. Tocar em uma pasta abre a próxima tela com uma lista de pastas favoritas.
2. Tocar em um item na lista abre a navegação.

### Marcadores de Mapa {#map-markers}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_markers_2.png)

Para definir seu destino final como um Marcador de Mapa, você precisa primeiro criar o número necessário de marcadores no aplicativo OsmAnd em seu dispositivo antes de conectá-lo ao sistema. Os marcadores precisam estar disponíveis na lista *Menu → Marcador de mapa*. Isso é descrito em mais detalhes no artigo [Marcadores](../personal/markers.md).

### Trilhas {#tracks}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_tracks.png)

Para construir uma rota para um destino, você pode selecionar uma trilha existente disponível no aplicativo OsmAnd. A trilha pode ser [baixada](../personal/tracks/manage-tracks.md#import) com antecedência, usada como [gravada](../plugins/trip-recording.md) ou criada em [Planejar uma rota](../plan-route/create-route.md).

Na lista de trilhas em *Menu → Meus Locais → [Trilhas](../personal/tracks/manage-tracks.md)*, selecione a necessária antes de conectar ao sistema multimídia do veículo, e a rota será construída até o início da trilha ou exibirá a direção atual ao longo da trilha.

As trilhas também podem ser selecionadas diretamente na tela do veículo no *Android Auto*. Elas são organizadas em pastas que você criou, e para acesso fácil e rápido às trilhas abertas recentemente, há uma pasta especial [Última modificação](#folder-last-modified).

### Pesquisar {#search}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_search.png)

Ir para Pesquisar oferece acesso rápido a uma lista do [histórico de destinos](#history) recentes. Da mesma forma com o [menu de Navegação](../navigation/setup/route-navigation.md#navigation-menu), onde todos os métodos de destino do OsmAnd, como endereço, POIs ou coordenadas, são coletados.

Você pode usar a ferramenta de Pesquisa para encontrar o local desejado no mapa para planejamento de rota a partir de qualquer categoria de pesquisa disponível.

- [Endereço](../search/search-address.md) - comece a digitar o endereço no campo de pesquisa.
- [POI](../search/search-poi.md) e [POI Personalizado](../search/search-poi.md) - a lista de nomes semelhantes próximos também exibirá POIs ou suas categorias.
- [Pesquisa de coordenadas](../search/search-address#coordinates-search) - insira as coordenadas para encontrar o ponto no mapa.

### Pasta Última Modificação {#folder-last-modified}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_last_modified.png)

As categorias Favoritos e Trilhas possuem uma pasta especial *Última Modificação*. Como a lista nessas categorias pode ser muito grande, pois contém todos os seus favoritos ou trilhas existentes, esta pasta é necessária para acesso fácil e rápido aos seus destinos mais recentes.

## Recursos de Navegação {#navigation-features}

Além dos recursos básicos do aplicativo OsmAnd no *Android Auto* que fornecem navegação conveniente em seu veículo, há uma série de recursos adicionais que aprimoram sua experiência e tornam a navegação mais personalizada, confortável e eficiente.

### Próxima Curva e Informações da Rota {#next-turn--route-info}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_alert_widget.png)

O widget **Próxima curva** exibe a distância e o tipo da [próxima manobra de curva](../widgets/nav-widgets.md#next-turn) e o [nome da rua](../widgets/nav-widgets.md#street-name).

As informações da rota consistem em:

- [tempo estimado de viagem](../widgets/nav-widgets.md#time-to-destination),
- [hora estimada de chegada](../widgets/nav-widgets.md#time-to-destination),
- [distância percorrida](../widgets/nav-widgets.md#distance-to-destination).

Quando ativado, [a configuração do widget](#eta-next-stop) (Informações da rota) mostrará os detalhes da rota para a próxima parada ([o ponto intermediário](../navigation/setup/route-navigation.md#intermediate-destinations)).

### Widget de Alerta na Tela {#screen-alert-widget}

Este widget de informação combina tipos de alerta como **Faixas de pedestres** e **Limite de velocidade**.

- Os tipos de alertas têm aparências diferentes, que dependem da **<Translate android="true" ids="driving_region"/>** e podem ser configurados em *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- No *Android Auto* não é possível definir a exibição de alertas, você precisa configurar o widget no aplicativo antes de iniciar a navegação e conectar seu dispositivo ao veículo.
- Para uma descrição detalhada dos tipos de alerta, consulte [este artigo](../widgets/nav-widgets.md#alert-types).
- Para configurar alertas de tela para perfis disponíveis, consulte o artigo [Configurações de navegação](../navigation/guidance/navigation-settings.md#screen-alerts).

### Velocímetro {#speedometer}

![Android Auto](@site/static/img/navigation/auto-car/speedometer_3_android.png)

O widget **Velocímetro** é um elemento de interface integrado que exibe a *velocidade atual* usando dados de GPS e o *limite de velocidade* do [banco de dados OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e das [configurações do OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na tela do sistema multimídia do veículo.

- O **widget Velocímetro** é [*dependente do perfil*](../personal/profiles.md), portanto, se você alterar as configurações para um perfil, elas não serão aplicadas a outro.
- Não há opção para personalizar a exibição do **widget Velocímetro** diretamente no *Android Auto*, você precisa configurá-lo no aplicativo OsmAnd antes de iniciar a navegação e conectar seu dispositivo ao veículo.
- Para obter mais informações sobre como adicionar e configurar o widget *Velocímetro* na tela, leia o artigo [Widgets informativos](../widgets/info-widgets.md#speedometer).

### Aparência do Mapa (3D) {#map-appearance-3d}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_appearance_3d_2.png)

O aplicativo OsmAnd permite que você use a visualização de mapa 3D na tela do *Android Auto* para exibir sua rota e navegação.

- Para ativar este recurso, você precisa selecionar [Renderização de Mapa Versão 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- Abra o *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/>* principal diretamente no aplicativo OsmAnd.
- Após configurar as configurações, o **botão 3D** será exibido na tela do *Android Auto* quando a lista de categorias para destinos estiver fechada.
- Você pode alternar entre os modos de mapa 3D / 2D tocando neste botão.

### Comandos de Voz {#voice-prompts}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

Os comandos de voz são um dos recursos mais úteis do OsmAnd durante a navegação para *Android Auto*, fornecendo orientação em tempo real e permitindo que o motorista permaneça focado na estrada. Os comandos de voz fornecem instruções claras sobre curvas, direções e outras instruções de navegação, proporcionando um uso mais seguro e confortável do sistema de navegação.

Para configurar [comandos de voz](../navigation/guidance/voice-navigation.md) de acordo com o perfil selecionado, você deve fazer isso antes de iniciar uma rota no aplicativo OsmAnd em seu dispositivo. No *Android Auto*, apenas a configuração para ligar ou desligar todos os comandos de voz selecionados ao mesmo tempo está disponível (*Botão de configuração → Comandos de voz (ligar/desligar)*).

### ETA Próxima Parada {#eta-next-stop}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_voice_prompt.png)

No aplicativo OsmAnd, você pode selecionar um ou mais [pontos intermediários](../navigation/setup/route-navigation.md#intermediate-destinations) para a rota de navegação.

Para ativar ou desativar as [**Informações da rota** para um ponto intermediário (próxima parada)](#next-turn--route-info), vá para *Android Auto (OsmAnd)→ Botão de configuração → Mostrar detalhes da rota para a próxima parada → Ligar/Desligar*. Esta opção exibe o tempo e a distância até a próxima parada no widget [*Informações da rota*](#next-turn--route-info).

### Modo de Mapa {#map-mode}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode.png').default} alt="AA"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/android_auto_map_mode_2.png').default} alt="AA"/></td>
    </tr>
</table>

O *Android Auto* e o OsmAnd oferecem a capacidade de ajustar o mapa para corresponder às condições de iluminação. No *modo de mapa Diurno*, o esquema de cores permanece brilhante e contrastante, facilitando a leitura mesmo sob luz solar intensa. No *modo Noturno*, os mapas ficam mais escuros, o que ajuda o motorista a navegar melhor no escuro.

O OsmAnd possui opções de [modo de mapa](../map/vector-maps.md#map-mode), mas quando você usa o aplicativo no *Android Auto*, essas opções são ignoradas. Em vez disso, o modo selecionado nas configurações do sistema *Android Auto* para mapas é usado.

- Selecione o modo Diurno ou Noturno para manter a exibição do mapa inalterada.
- Se você quiser que o modo de exibição do mapa mude dependendo da hora do dia, selecione o modo Automático.

<!-- ![Android Auto](@site/static/img/navigation/auto-car/android_auto_map_mode.png) -->

### Tela Dividida {#split-screen}

![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_map_split_screen.png)

O aplicativo OsmAnd pode ser aberto e usado para navegar no *Android Auto* na tela do sistema multimídia do veículo simultaneamente com aplicativos de música, mensagens ou outras notificações. Configurando a exibição em tela dividida em um telefone conectado ao *Android Auto* ou na tela do sistema do seu veículo.

1. Na tela inicial, toque em Aplicativos.
2. Toque em Configurações.
3. Encontre Multi janela e escolha a chave.
4. Retorne à tela inicial.

<!--
![Android Auto screen](@site/static/img/navigation/auto-car/android_auto_taskbar.png)-->

Nas configurações do Android Auto, você pode alterar a posição da barra de tarefas e o layout da tela inicial:

- **Posição da barra de tarefas:**
  Vá para *Configurações do Android Auto → Mostrar controles rápidos para aplicativos* e desative a chave. Isso moverá a barra de tarefas da parte inferior para a lateral da tela.

- **Layout da tela inicial:**
  Vá para *Configurações do Android Auto → Alterar layout → Alterar localização do banco do motorista* para ajustar o layout com base na posição do banco do motorista.

## Problemas Comuns e Soluções {#common-issues-and-solutions}

1. [Problema de orientação do mapa.](../troubleshooting/android_auto.md#map-orientation-issue)
2. [Problema de controle de volume.](../troubleshooting/android_auto.md#volume-control-issue)
3. [Atrasos de localização (falhas ANR).](../troubleshooting/android_auto.md#location-delays-anr-crashes)
4. Perguntas comuns sobre a tela de conexão:
    - *Por que não consigo controlar o aplicativo do meu telefone quando conectado ao Android Auto?*
        Por motivos de segurança, a tela do aplicativo OsmAnd em seu telefone é bloqueada enquanto conectado ao Android Auto. Você pode interagir com o aplicativo apenas através da tela do carro.
    - *Posso desativar a tela bloqueada e usar o aplicativo no meu telefone?*
        Não, o Android Auto impõe essa restrição para evitar distrações durante a condução.
    - *O que devo fazer se meu telefone e a tela do carro parecerem desconectados?*
        Certifique-se de que seu dispositivo esteja conectado corretamente via USB ou Bluetooth.
        Reinicie o sistema de infoentretenimento do seu carro e o aplicativo OsmAnd se a conexão estiver instável.

> *Última atualização: Março de 2025*