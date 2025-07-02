---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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



## Visão Geral {#overview}

Dirigir um veículo e usar o telefone ou tablet ao mesmo tempo é geralmente proibido por lei por razões de segurança. O [***CarPlay***](https://www.apple.com/ios/carplay/) é um software que fornece uma versão adaptada e otimizada do aplicativo OsmAnd para uso seguro durante a condução, tornando mais fácil e seguro o acesso às funções de navegação do aplicativo.

Para usar o *CarPlay* na tela do seu veículo, siga estes passos:

1. O *CarPlay* não está disponível em todos os países. Certifique-se de que é suportado no seu [país ou região](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) e que o *CarPlay* é suportado no seu [modelo de veículo](https://www.apple.com/ios/carplay/available-models/).
2. [Conecte o seu dispositivo](https://support.apple.com/en-gb/HT203412) ao sistema multimédia do seu veículo usando uma porta USB ou sem fios com Wi-Fi ou Bluetooth. Ao conectar pela primeira vez, pode ser necessária permissão para usar o *CarPlay* no seu dispositivo.
3. Uma vez conectado, a *interface do CarPlay* aparecerá automaticamente na tela do seu veículo com todos os aplicativos disponíveis. Se a *tela inicial do CarPlay* não aparecer, selecione o *logotipo do CarPlay* no display do veículo.

#### Interface do CarPlay {#carplay-interface}

O *CarPlay* **não é uma replicação direta** do aplicativo móvel OsmAnd. Ele possui uma interface simplificada, focando nas funções essenciais de navegação para garantir uma condução segura. Alguns recursos avançados não são suportados devido a limitações da plataforma.

### Tela de Conexão {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Enquanto o seu dispositivo estiver conectado ao *CarPlay*, o mapa na tela do aplicativo estará bloqueado. Esta é uma funcionalidade de segurança intencional para garantir que a navegação seja controlada exclusivamente a partir do display do carro, minimizando distrações durante a condução. Verifique as [perguntas comuns](#common-issues-and-solutions) sobre a tela de conexão.

### Posição de Localização no CarPlay {#location-position-in-carplay}

O aplicativo OsmAnd para *CarPlay* permite ajustar a posição do indicador de localização atual na tela para evitar sobrepor a rota e outros detalhes importantes do mapa.

**Como alterar a posição do indicador:**

- Vá para *Menu → Configurar tela → Outros → [Posição da localização na tela](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Selecione a sua preferência de posicionamento:
    - **Automático (padrão)**. O aplicativo desloca automaticamente a posição do indicador para o modo de navegação ou movimento livre.
    - **Centro**. O indicador é colocado no centro da tela, adequado para navegação padrão.
    - **Inferior**. O indicador é posicionado mais próximo da parte inferior da tela, facilitando a observação de objetos circundantes e interseções complexas.

### Interação com o Mapa {#interaction-with-the-map}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

O *CarPlay* exibe a interface do OsmAnd adaptada à tela do sistema multimédia do veículo. A interação com o mapa é limitada a:

- [Minha Localização](../widgets/map-buttons.md#my-location-and-zoom). Move a parte visível do mapa para que a sua localização atual fique no centro da tela.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Permite ampliar e reduzir a parte visível do mapa.

## Parâmetros de Configuração Necessários {#required-setup-parameters}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Primeiro, você precisa selecionar e configurar o perfil a ser usado ao conectar ao *CarPlay*. Você pode ler como configurar um perfil no artigo [Perfis (Configurações)](../personal/profiles).
    - Um perfil conveniente para usar o *CarPlay* pode ser *Dirigir*, e o tipo de roteamento pode ser [Roteamento de Carro](../navigation/routing/car-based-routing.md).
    - O OsmAnd possui um item separado [Perfil do CarPlay](#carplay-profile) para acesso rápido à lista de perfis disponíveis para conexão ao *CarPlay*.
- Para o OsmAnd funcionar, [conecte o seu dispositivo iOS](#overview) ao sistema multimédia do veículo. Para saber mais sobre como conectar e configurar o seu dispositivo, você pode visitar o site do [**CarPlay**](https://support.apple.com/en-us/HT205634).
- Você precisa ter uma das [versões pagas ou de assinatura do OsmAnd](../purchases/ios#free-and-paid-features). Verifique aqui *Menu → Configurações → Compras*.
- Uma vez conectado, você pode definir um destino e iniciar a navegação do OsmAnd no *CarPlay*.

:::note
Você pode precisar de uma conexão com a Internet para usar o OsmAnd no *CarPlay*. Se o seu dispositivo tiver acesso limitado à Internet, você pode [*pré-carregar ou criar rotas*](../personal/tracks/manage-tracks.md) e usá-las sem a Internet.
:::

### Iniciar Navegação {#start-navigation}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-start(1).png)

Para usar a versão iOS do aplicativo OsmAnd no *CarPlay*, você precisa comprar uma [versão paga do aplicativo ou assinar](../purchases/ios#free-and-paid-features).

1. Para criar uma rota, você precisa escolher o [ponto final da rota](#select-a-route-endpoint) na *tela do CarPlay* ou no [aplicativo OsmAnd](../navigation/setup/route-navigation.md).
2. Você pode usar [avisos de voz](#voice-prompts) para ouvir direções ou mensagens sobre problemas na estrada.
3. Depois de selecionar um local, pressione **Iniciar** para seguir a rota.
4. Enquanto você dirige, a tela do veículo exibirá informações do OsmAnd sobre sua localização atual no mapa, direções de condução, distância até a próxima curva, linhas, tempo de chegada e distância até o seu destino.
    ![CarPlay screen](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Se você quiser mudar sua rota ou selecionar um local diferente, você pode pressionar o botão apropriado na tela.
6. Depois de concluir sua rota, você pode desativar o *CarPlay* desconectando o dispositivo do sistema multimídia do seu veículo.

:::note
Todas as categorias para seleção do **ponto final da rota**, *[Histórico](#history), [POIs](#poi-categories), [Marcadores](#map-markers), [Pesquisa](#search), [Favoritos](#favorites) e [Rotas](#tracks)* podem conter não mais itens de lista do que o seu sistema multimídia do veículo oferece. Tipicamente, na maioria dos veículos, as listas são dinamicamente limitadas a 12 ou 24 itens. Isso significa que a lista no *CarPlay* pode não estar completa. O número total de itens e o número real de itens exibidos é indicado sob o nome da pasta.
:::

### Perfil do CarPlay {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**Perfil do CarPlay** é um perfil específico no aplicativo OsmAnd para uso conveniente do sistema de áudio e vídeo do seu carro para posterior exibição desses dados no seu telefone.

Este perfil é usado enquanto o seu dispositivo estiver conectado ao *CarPlay*. Toque no campo *Perfil do CarPlay* no menu *Configurações do OsmAnd* e, na lista de [perfis habilitados para uso](../personal/profiles.md), selecione o perfil com o qual o *CarPlay* será ativado.

Você não pode selecionar um perfil diretamente no *CarPlay* na tela do veículo. Primeiro, selecione o perfil necessário no seu dispositivo e anexe o *Perfil do CarPlay* a ele. Você deve selecionar um perfil que corresponda ao tipo de veículo, como *Dirigir*, *Caminhão*, *Carro*, *Motocicleta* ou *Moped*. **O aplicativo ativará automaticamente** o *Perfil do CarPlay* quando conectado a um veículo.

**Por que é importante selecionar o perfil apropriado para o seu tipo de veículo.**

- **Segurança na condução.** Diferentes tipos de transporte exigem informações e configurações diferentes ao dirigir. Por exemplo, os motoristas de caminhão podem ter restrições de altura, peso e largura de seus veículos, então o perfil *Caminhão* fornece a eles as restrições e diretrizes apropriadas. Enquanto ciclistas e motociclistas precisam de informações sobre ciclovias e rotas, sem dados para caminhões.
- **Utilidade e Eficiência.** A navegação deve ser personalizada para atender às necessidades de um determinado modo de transporte. Isso permite que os usuários reduzam o tempo necessário para encontrar rotas ótimas e evitem restrições de tráfego desnecessárias.

## Selecionar um Ponto Final de Rota {#select-a-route-endpoint}

Você pode selecionar [POIs](../map/point-layers-on-map.md#points-of-interest-pois) ou [Favoritos](../personal/favorites.md) ou [Marcadores](../personal/markers.md) predefinidos e adicionados anteriormente como ponto de destino. Também é possível selecionar uma [Rota](../personal/tracks/index.md) gravada ou baixada para a rota, usar a [Pesquisa](../search/index.md) ou selecionar um destino do [Histórico](../search/search-history.md) da rota.

1. Se você deseja um local específico no mapa como ponto final, selecione a categoria apropriada de pontos na lista, [POIs](#poi-categories), [Favoritos](#favorites) ou [Marcadores de Mapa](#map-markers).

    - Todas as categorias podem conter não mais itens de lista do que os fornecidos pelo sistema multimídia do seu veículo. Isso significa que a lista no *CarPlay* pode estar incompleta, e todas as outras pastas estão disponíveis apenas no aplicativo OsmAnd no seu dispositivo.
    - A pasta [Última modificação](#folder-last-modified) contém uma lista de destinos recentes, classificados por data de adição ou alteração.
    - A lista de todas as outras pastas é classificada pela atualização mais recente, as novas pastas estão no topo da lista. Não é possível alterar a ordem manualmente.
    - A lista de pontos dentro das pastas é classificada pela distância até eles, começando pelo mais próximo. Cada ponto tem um nome ou coordenadas, um ícone em forma (cor e ícone definidos por padrão ou escolhidos por você no aplicativo OsmAnd), e a distância do ponto da localização atual até ele.
2. Selecione a categoria [Histórico](#history) para encontrar um dos destinos recentes que estão armazenados na memória do dispositivo.
3. Selecione [Pesquisar](#search) para inserir um destino a partir das categorias de pesquisa disponíveis.

:::note
Durante a condução, os pontos selecionados podem ser [anunciados](#voice-prompts) quando você se aproxima ou passa por eles. Consulte as configurações de [Avisos de voz](../navigation/guidance/voice-navigation.md) no artigo apropriado para configurar as notificações de voz.
:::

### Histórico {#history}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_history.png)

Na **categoria Histórico**, você pode selecionar um destino de uma lista de pontos finais.

- Eles são classificados pelo uso mais recente, começando pelos mais novos.
- Isso pode ser conveniente para acesso rápido a rotas frequentemente usadas.
- Para saber como usar ou excluir um destino, leia o artigo [Histórico de Pesquisa](../search/search-history.md).

### Categorias de POI {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*POIs (Pontos de Interesse)* são um tipo de pontos que identificam lugares ou objetos no mapa que são importantes ou de interesse para os usuários. Eles são destacados por ícones especiais fornecidos nas [configurações do OsmAnd](../map/point-layers-on-map.md#poi-types) e classificados em grupos.

Para construir uma rota para um *POI* no *CarPlay*, siga estes passos:

1. Selecione o *POI* necessário na lista de categorias disponíveis, ou insira o nome do POI usando [Pesquisar](#search).
2. O OsmAnd calcula a rota e a exibe na *tela do CarPlay*. Toque no botão **Iniciar** para começar a navegar para esse local.
3. Dependendo das configurações do seu aplicativo OsmAnd e do seu veículo, você pode receber [avisos de voz](#voice-prompts) para guiá-lo até o seu destino.
4. Ao chegar ao local, o aplicativo o notificará de que você chegou ao *POI*.

### Favoritos {#favorites}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favoritos** é uma das funcionalidades do OsmAnd que permite fazer uma espécie de anotações no mapa.

- Ao usar o **CarPlay**, você não pode adicionar ou modificar *Favoritos*, apenas usar os existentes.
- A lista de [Favoritos](../personal/favorites.md#manage-favorites) pode ser encontrada no aplicativo OsmAnd em *Menu → Meus Lugares → Favoritos*.
- Se você quiser usá-los para navegação, configure tudo o que precisa antes de conectar o dispositivo ao sistema multimídia do seu veículo.

### Marcadores de Mapa {#map-markers}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Para definir o seu destino final como um *Marcador de Mapa*, você precisa primeiro criar o número necessário de marcadores no aplicativo OsmAnd no seu dispositivo antes de conectá-lo ao sistema multimídia do veículo.
- Os *Marcadores* precisam estar disponíveis na lista *Menu → Marcador de Mapa*.
- Isso é descrito em mais detalhes no artigo [Marcadores](../personal/markers.md).

### Rotas {#tracks}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Para construir uma rota para um destino, você pode selecionar uma rota existente disponível no aplicativo OsmAnd. A rota pode ser [baixada](../personal/tracks/manage-tracks.md#import) com antecedência, usada como [gravada](../plugins/trip-recording.md) ou criada em [Planejar uma rota](../plan-route/create-route.md).

Na lista de rotas em *Menu → Meus Lugares → [Rotas](../personal/tracks/manage-tracks.md)*, selecione a necessária antes de conectar ao sistema multimídia do veículo, e a rota será construída até o início da rota ou exibirá a direção atual ao longo da rota.

As rotas também podem ser selecionadas diretamente na tela do veículo no *CarPlay*. Elas são organizadas em pastas que você criou, e para acesso fácil e rápido às rotas abertas recentemente, há uma pasta especial [Última modificação](#folder-last-modified).

### Pesquisa {#search}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-search(1).png)

Ir para **Pesquisar** dá acesso rápido a uma lista de [histórico de destinos](#history) recentes. Da mesma forma com o [menu de Navegação](../navigation/setup/route-navigation.md#navigation-menu), onde todos os métodos de destino do OsmAnd, como endereço, POIs ou coordenadas, são coletados.

Você pode usar a *ferramenta de Pesquisa* para encontrar o local desejado no mapa para planejamento de rota a partir de qualquer categoria de pesquisa disponível.

- [Endereço](../search/search-address.md). Comece a digitar o endereço no campo de pesquisa.
- [POI](../search/search-poi.md) e [POI Personalizado](../search/search-poi.md). A lista de nomes semelhantes próximos também exibirá POIs ou suas categorias.
- [Pesquisa de Coordenadas](../search/search-address#coordinates-search). Insira as coordenadas para encontrar o ponto no mapa.

#### Prioridades de Pesquisa de Endereços {#address-search-priorities}

O recurso de pesquisa do CarPlay prioriza ruas e números de edifícios ao **pesquisar endereços**.

- Ruas e números de edifícios são exibidos primeiro ao pesquisar um endereço. Isso garante que informações de endereço relevantes sejam exibidas antes de outros locais, como estradas ou estações.
- Ao pesquisar uma cidade, as ruas dentro da cidade são exibidas primeiro, seguidas pelos números dos edifícios nessas ruas.

### Pasta Última Modificação {#folder-last-modified}

![CarPlay screen](@site/static/img/navigation/auto-car/car_play_last_modified.png)

As categorias *Favoritos* e *Rotas* possuem uma pasta especial **Última Modificação**. Como a lista nessas categorias pode ser muito grande, pois contém todos os seus favoritos ou rotas existentes, esta pasta é necessária para acesso fácil e rápido aos seus destinos mais recentes.

## Recursos Adicionais {#additional-features}

Além dos recursos básicos do aplicativo OsmAnd no *CarPlay* que proporcionam uma navegação conveniente em seu veículo, há uma série de recursos adicionais que aprimoram sua experiência e tornam a navegação mais personalizada, confortável e eficiente.

### Avisos de Voz {#voice-prompts}

A orientação por voz para o *CarPlay* é uma das funcionalidades de navegação mais úteis do OsmAnd, fornecendo orientação em tempo real e permitindo que o motorista permaneça focado na estrada. Os avisos de voz indicam claramente curvas, direções e outras instruções de navegação, garantindo um uso mais seguro e confortável do sistema de navegação.

Para configurar os avisos de voz de acordo com o perfil selecionado, você deve fazer isso antes de iniciar uma rota no aplicativo OsmAnd no seu dispositivo. Para ver as configurações recomendadas para o *CarPlay*, vá para o artigo [Avisos de voz / Notificações](../navigation/guidance/voice-navigation.md).

### Anunciar Mensagens de Texto Recebidas {#announce-incoming-text-messages}

Você pode alterar as configurações de notificação para o aplicativo OsmAnd nas configurações do sistema do seu dispositivo. Toque em *CarPlay*, então selecione um dos seguintes itens:

- *Anunciar Novas Mensagens*
- *Silenciar Novas Mensagens*
- *Lembrar Configuração Anterior*

Você também pode ativar ou desativar o Anúncio de mensagens diretamente no *CarPlay*. Leia sobre como o gerenciamento de notificações é implementado no [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) e no [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Widget de Alerta na Tela {#screen-alert-widget}

![CarPlay screen](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Este widget de informação combina tipos de alerta como **Faixas de pedestres** e **Limite de velocidade**.

- Os tipos de alertas têm aparência diferente, que depende da **<Translate android="true" ids="driving_region"/>** e podem ser configurados em *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- No *CarPlay*, não é possível definir a exibição de alertas, você precisa configurar o widget no aplicativo antes de iniciar a navegação e conectar seu dispositivo ao veículo.
- Para uma descrição detalhada dos tipos de alerta, consulte [este artigo](../widgets/nav-widgets.md#alert-types).
- Para configurar alertas de tela para perfis disponíveis, consulte o artigo [Configurações de navegação](../navigation/guidance/navigation-settings.md#screen-alerts).

### Velocímetro {#speedometer}

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

O widget **Velocímetro** é um elemento de interface integrado que exibe a *velocidade atual* usando dados de GPS e o *limite de velocidade* do [banco de dados OSM](https://wiki.openstreetmap.org/wiki/Key:maxspeed) e das [configurações do OsmAnd](../navigation/guidance/voice-navigation.md#speed-limit) na tela do sistema multimídia do veículo.

- O **widget Velocímetro** é [*dependente do perfil*](../personal/profiles.md), então se você alterar as configurações para um perfil, elas não serão aplicadas a outro.
- Não há opção para definir a exibição do *Velocímetro* diretamente no *CarPlay*. Você precisa configurá-lo para o [perfil de navegação](#carplay-profile) selecionado no aplicativo OsmAnd antes de iniciar a navegação e conectar seu dispositivo ao veículo.
- Para mais informações sobre como adicionar e configurar o widget *Velocímetro* ao display, por favor, leia o artigo [Widgets informativos](../widgets/info-widgets.md#speedometer).

### Aparência do Mapa (3D) {#map-appearance-3d}

![Car Play](@site/static/img/navigation/auto-car/car_play_3.png)

O aplicativo OsmAnd permite usar a visualização de mapa 3D na *tela do CarPlay* para exibir sua rota e navegação.

- O **botão 3D / 2D** é exibido na *tela do CarPlay*.
- Você pode alternar entre os modos de mapa 3D / 2D tocando neste botão.

### Painel Multifuncional {#multifunction-dashboard}

![Car Play](@site/static/img/navigation/auto-car/car_play_4.png)

O aplicativo OsmAnd pode ser aberto e usado para navegar no *CarPlay* na tela do sistema multimídia do veículo simultaneamente com aplicativos de música, mensagens ou outras notificações.

- Configurando o painel multifuncional em um telefone conectado ao *CarPlay* ou na tela do sistema do seu veículo.
- Encontre o botão Multi janela e ative-o.

## Problema de Controle de Volume {#volume-control-issue}

Às vezes, o *CarPlay* não conecta, ou você simplesmente não consegue ouvir nada, mesmo que esteja conectado. Outras vezes, o aplicativo OsmAnd não abre corretamente no *CarPlay*. Possíveis soluções:

1. Na maioria dos casos, todos os **sinais** permanecem em volume máximo constante, separados das configurações de reprodução de áudio ao mesmo tempo. Para alterar o volume dos avisos de navegação do OsmAnd ao usar o *CarPlay*, vá para *Configuração → Voz → Volume da voz* na tela do sistema multimídia do veículo.
2. Reinicie o dispositivo.
3. Certifique-se de que o *CarPlay* está ativado no seu iPhone. Para fazer isso:
   - Vá para as configurações do seu telefone e depois para *Geral*.
   - Vá para *CarPlay* em Configurações Gerais e selecione *Meus Carros*. Aqui você pode personalizar seu carro esquecendo-o ou reconectando-o.
4. Certifique-se de que o seu Bluetooth está conectado.
5. Verifique o cabo USB.
6. Atualize seu sistema operacional regularmente.
7. Verifique se o *CarPlay* é suportado na sua [região](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Se você usa uma VPN no seu iPhone, ela pode impedir que o *CarPlay* funcione. Tente desativar a VPN e veja se isso ajudará o *CarPlay* a funcionar.

## Artigos Relacionados {#related-articles}

- [Perfis (Configurações)](../personal/profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

1. Perguntas comuns sobre a tela de conexão:
    - *Por que não consigo controlar o aplicativo do meu telefone quando conectado ao CarPlay?*
        Por razões de segurança, a tela do aplicativo OsmAnd no seu telefone é bloqueada enquanto conectado ao CarPlay. Você pode interagir com o aplicativo apenas através do display do carro.
    - *Posso desativar a tela bloqueada e usar o aplicativo no meu telefone?*
        Não, o CarPlay impõe essa restrição para evitar distrações durante a condução.
    - *O que devo fazer se meu telefone e o display do carro parecerem desconectados?*
        Certifique-se de que seu dispositivo está conectado corretamente via USB ou Bluetooth.
        Reinicie o sistema de infoentretenimento do seu carro e o aplicativo OsmAnd se a conexão estiver instável.

> *Última atualização: Janeiro de 2025*