---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title: Menu Principal
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Visão Geral {#overview}

O **Menu Principal** é uma lista primária de opções disponíveis para uso no aplicativo. Ele fornece acesso rápido à configuração do perfil, configurações globais, pesquisa, dados pessoais, navegação e outros recursos.

O ícone do [Menu Principal](../widgets/map-buttons.md#main-menu) '&#8801;' está localizado no canto inferior esquerdo da tela do Mapa. No modo de navegação, este botão não é visível por padrão. Ele aparece após um toque curto no mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu principal Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu principal iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Menu Principal (Menu Lateral) {#main-menu-side-menu}

### Recursos {#features}

- [Marcadores de mapa](../personal/markers.md) é uma ferramenta que permite marcar um local no mapa.
- [Meus locais](../personal/myplaces.md) é um menu que inclui por padrão Favoritos e trilhas e, adicionalmente, pode incluir [Notas A/V](../plugins/audio-video-notes.md) e [Edições OSM](../plugins/osm-editing.md) (se esses plugins estiverem ativados).
- [Pesquisar](../search/index.md) (Android) é uma ferramenta que permite encontrar o local ou objeto que existe no mapa.
- O botão [Direções](../widgets/map-buttons.md#directions) permite criar uma rota e iniciar a navegação.
- [Configurar mapa](../map/configure-map-menu.md) é um menu que permite configurar a visualização do mapa.
- [Baixar mapas](../start-with/download-maps.md) é um menu que contém todos os arquivos que podem ser baixados.
- [Guias de viagem (Beta)](../plan-route/travel-guides.md) (*Android*) é uma ferramenta que permite usar o guia Wikivoyage para sua viagem.
- [Planejar rota](../plan-route/create-route.md) é uma ferramenta que permite medir distâncias no mapa, criar trilhas GPX ou adicionar novos segmentos aos existentes.
- [* Gravação de viagem](../plugins/trip-recording.md) (*Android*) é uma ferramenta que permite gravar todos os movimentos em uma trilha usando o GPS do telefone.

### Configurações {#settings}

- [Configurar tela](../widgets/configure-screen.md) é um menu que permite configurar a exibição de widgets no Mapa.
- [Plugins](../plugins/index.md#configure-plugin) é uma lista de funcionalidades adicionais e configurações avançadas.
- [Configurações](../personal/global-settings.md) é um menu que permite configurar os principais parâmetros do aplicativo.
- [Ajuda](./first-steps.md#offline-help) fornece acesso rápido ao seu guia, informações sobre a versão do aplicativo e permite entrar em contato rapidamente com a equipe de desenvolvimento.

### Perfil Ativo (Android) {#active-profile-android}

O *Menu Principal* fornece acesso rápido para alternar e [personalizar o perfil](../personal/profiles.md). O principal objetivo dos perfis é ter uma aparência e preenchimento de aplicativo diferentes para navegação. Embora você possa usá-lo para personalizar a tela e os widgets e alternar perfis para diferentes propósitos de visualização. Todas as [configurações](../personal/profiles.md) são configuradas separadamente para cada perfil.

![profile_menu](@site/static/img/menu/profile_menu.png)

Neste menu, você pode **alternar** o perfil ativo, **configurar** (alterar configurações) para o perfil ativo ou **gerenciar** todos os perfis do aplicativo.


### Personalizar (Uso Avançado do Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Ativar*.  

![Itens do menu da gaveta ](@site/static/img/settings/drawer_menu_correct.png)  

- Este menu permite alterar a ordem, ocultar ou mostrar itens da [Gaveta](../personal/profiles.md#drawer), copiar uma lista de itens de outro perfil e redefinir as configurações padrão.  

- O botão *Menos* exclui um item do *Menu Principal* na gaveta e o move para a seção *Ocultos*. O botão *Mover* altera a posição do item selecionado na lista.  

- Os itens movidos para a seção *Ocultos* não são exibidos no menu da Gaveta, mas todas as opções, configurações ou plugins desta lista continuam funcionando. Você pode restaurar os itens tocando no botão verde à esquerda de seus nomes.  
    ![Itens ocultos do menu da gaveta ](@site/static/img/settings/drawer_menu_hidden_items.png)