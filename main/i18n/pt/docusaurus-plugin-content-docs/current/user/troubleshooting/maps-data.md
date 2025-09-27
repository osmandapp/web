---
source-hash: 9b16ea12c0c7101ef5114041d96220299980dab0bb8a9a0697c20ff869c09d8b
sidebar_position: 4
title: Mapas e Dados
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Mapas {#maps}

### Por que o OsmAnd não oferece acesso ao Google Maps? {#why-does-osmand-not-offer-access-to-google-maps}

O OsmAnd foi projetado para suportar o OpenStreetMap (OSM) e prioriza esse caminho o máximo possível. Além disso, existem restrições de licenciamento que não permitem que o OsmAnd seja distribuído com dados do Google Maps.

### Mapas carregando lentamente no Android 11, 12 (cartão SD) {#maps-slowly-loading-on-android-11-12-sd-card}

Devido às novas [regras de acesso ao armazenamento introduzidas no Android 11 e 12](https://www.androidauthority.com/android-12-privacy-features-1225859/), os usuários podem experimentar um desempenho mais lento ao acessar mapas armazenados em cartões SD. Essas mudanças também podem causar restrições de visibilidade e acesso para arquivos em pastas do cartão SD. Mais discussões e informações técnicas podem ser encontradas nos seguintes links: [Discussão no Reddit](https://www.reddit.com/r/androiddev/comments/kpn68k/android_11_very_slow_file_access_performance/), [Github #1](https://github.com/osmandapp/OsmAnd/issues/10453), [Github #2](https://github.com/osmandapp/OsmAnd/issues/12046), [Github #3](https://github.com/osmandapp/OsmAnd/issues/13943).

No momento, as seguintes soluções estão disponíveis:

#### 1. Migrar a pasta de armazenamento de dados do OsmAnd para "Memória interna do aplicativo" {#1-migrate-the-osmand-data-storage-folder-to-internal-app-memory}

- Você pode alterar a pasta de armazenamento selecionando a opção ***Memória interna do aplicativo*** em *Menu → Configurações → Configurações do OsmAnd → Pasta de armazenamento de dados*.

- No entanto, esteja ciente de que a memória interna é frequentemente limitada. Como solução alternativa, você pode mover arquivos importantes para a memória interna, mantendo mapas raramente usados no cartão SD. Use um gerenciador de arquivos para transferir manualmente esses arquivos quando necessário.

A equipe de desenvolvimento está procurando ativamente soluções mais eficientes para melhorar o desempenho do cartão SD sob as novas políticas de armazenamento do Android.

#### 2. Usar a pasta "Download" do cartão SD {#2-use-the-sd-cards-download-folder}

Você pode tentar resolver o problema de carregamento lento do mapa especificando a pasta **Download** do cartão SD para armazenamento do OsmAnd em *Menu → Configurações → Configurações do OsmAnd → Pasta de armazenamento de dados → Especificado manualmente*. Os seguintes caminhos são possíveis:

- ***/storage/XXXX-XXXX/Download/osmand***  
   Este caminho pode causar erros ao acessar vários arquivos. Por exemplo, você pode conseguir baixar o mapa World Overview, mas outras regiões podem não aparecer.

- ***/storage/XXXX-XXXX/Download***  
   Este caminho deve funcionar consistentemente para baixar mapas e outros dados. No entanto, observe que o OsmAnd não reconhecerá arquivos gravados nesta pasta por outros aplicativos ou programas (por exemplo, SasPlanet). Para mais detalhes, consulte [este guia](../../technical/map-creation/create-offline-maps-yourself.md).

O "XXXX-XXXX" representa o número de identificação exclusivo do seu cartão SD, que às vezes pode ser encontrado no caminho da pasta em opções de *Armazenamento externo 2* ou localizado usando outros métodos. Mais pesquisas e detalhes sobre esta solução estão disponíveis [aqui](https://github.com/osmandapp/OsmAnd/issues/13254#issuecomment-984467744).

#### 3. Opção de armazenamento "Mídia" {#3-media-storage-option}

Se as soluções anteriores não funcionarem ou parecerem limitadas, você pode tentar usar a opção de armazenamento "Mídia" para resolver o carregamento lento do mapa ou problemas de acesso ao armazenamento. Este método permite selecionar uma pasta que é acessível para o OsmAnd e outros aplicativos, particularmente útil para armazenamento externo ou removível.

### Escolhendo uma pasta de armazenamento de dados do OsmAnd "Geralmente Acessível" usando o Armazenamento "Mídia" {#picking-a-generally-accessible-osmand-data-storage-folder-using-the-media-storage}

O Android tornou-se mais rigoroso com as permissões de armazenamento, muitas vezes limitando o acesso a pastas específicas de aplicativos, especialmente com novas instalações ou atualizações do sistema. O armazenamento de dados padrão do OsmAnd pode ser restrito, tornando-o invisível para outros aplicativos ou até mesmo gerenciadores de arquivos. Muitos usuários desejam armazenar mapas e dados em armazenamento externo acessível para backup, sincronização ou gerenciamento manual de arquivos.

No entanto, o OsmAnd não possui a permissão de *Acesso a todos os arquivos* (devido às restrições do Google), limitando a escolha de pastas. Uma solução alternativa é usar a pasta de armazenamento "Mídia", à qual o Android geralmente concede acesso de leitura/gravação mais amplo. Para fazer isso:

- Vá para *Configurações do OsmAnd → Configurações do OsmAnd → Pasta de armazenamento de dados* e revise as áreas de armazenamento disponíveis. Use o indicador de espaço livre para identificar o armazenamento de destino, muitas vezes rotulado como *Armazenamento externo 2*.
- Anote o caminho da pasta atual, que pode ser parecido com */storage/xxxx-xxxx/Android/data/net.osmand.plus/files*.
- Mude para a opção *Especificado manualmente* e modifique o caminho para uma pasta acessível à mídia. Em muitos sistemas, alterar */Android/data/* para */media/* (por exemplo, ***/storage/xxxx-xxxx/media***) funciona. Alguns sistemas podem exigir diferentes modificações de caminho.

Um caminho correto não solicitará ao OsmAnd nenhum erro de permissão de gravação. Antes de fazer essas alterações, certifique-se de que o OsmAnd tenha as permissões de armazenamento apropriadas, incluindo a permissão de armazenamento "Mídia", nas configurações de **Aplicativos** do Android. Em versões mais recentes do Android, essas permissões podem estar localizadas em menus avançados ou ocultos.

### Excluindo dados do mapa após a atualização do aplicativo (se "Armazenamento multiusuário 1" estiver selecionado) {#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected}

Na versão Android do OsmAnd, selecionar *Armazenamento multiusuário 1* como local de armazenamento pode levar à exclusão de todos os [mapas locais](../personal/maps-resources.md#local-menu) sempre que o aplicativo for atualizado automaticamente, como da versão 4.1.9 para 4.1.10, 4.1.11 ou posterior (**Android 11, 12**). Este problema está documentado no [Github](https://github.com/osmandapp/OsmAnd/issues/13404).

Para evitar a perda de dados do seu mapa durante as atualizações, considere estas soluções:

1. *Faça backup dos seus arquivos*. Antes de atualizar o OsmAnd, faça um [backup](../personal/import-export.md) dos mapas armazenados em *..Android/obb/net.osmand*. Após a atualização, restaure os arquivos antes de iniciar o aplicativo OsmAnd atualizado.

2. *Altere o caminho de armazenamento*. Mova a pasta OsmAnd para um local gravável por todos os aplicativos (por exemplo, servidor FTP Wi-Fi, X-plore ou via cabo USB para um PC). Altere o caminho da pasta de:
   - /storage/emulated/0/Android/**obb**/net.osmand
   para
   - /storage/emulated/0/Android/**media**/net.osmand.


### Nenhum mapa sendo renderizado para dispositivos Google Pixel {#no-maps-rendering-for-google-pixel-devices}

Para as versões Android do OsmAnd 4.2, a [renderização do mapa pode falhar](https://github.com/osmandapp/OsmAnd/issues/15045) em dispositivos Google Pixel, deixando os usuários com uma tela branca em vez de um mapa.

Para resolver este problema, mude para a renderização OpenGL:

- Navegue até *Menu OsmAnd → Configurações → Configurações OsmAnd → Mecanismo de renderização de mapa → Versão 2 (OpenGL)*.
- Reinicie o OsmAnd para aplicar as alterações.


### Resolvendo a renderização lenta do mapa no OsmAnd {#resolving-slow-map-rendering-in-osmand}

<!--
Outras variantes de cabeçalho:

- Otimizando o desempenho do OsmAnd para mapas offline
- Melhorando a velocidade de redesenho do mapa no OsmAnd
-->

Para resolver o problema de renderização lenta do mapa, especialmente ao usar mapas vetoriais offline, as seguintes etapas devem ser tomadas:

1. **Desative recursos de mapa desnecessários.** Desligue o relevo 3D, linhas de contorno, sombreamento de colinas e declives, o que pode aumentar significativamente o poder de processamento necessário para renderizar mapas. Você pode fazer isso em *Menu → Configurar mapa*.

2. **Simplifique os detalhes do mapa.** Oculte elementos menos críticos, como limites, POIs, notas OSM, camadas climáticas, detalhes adicionais (*Menu → Configurar mapa → Renderização do mapa*) para otimizar a exibição do mapa e melhorar a velocidade.

3. **Limite o número de POIs exibidos.** Exiba apenas os POIs principais ou limite as categorias exibidas durante a navegação, o que pode ajudar a acelerar a renderização do mapa. Acesse essas configurações em *Menu → Navegação → Configurações*.

4. **Ajuste o ampliador do mapa.** A configuração do ampliador do mapa pode ser um fator chave para desacelerar o mapa. Defina o ampliador para 100% pressionando e segurando o botão **"+"** ou **"-"** na tela do mapa para otimizar a exibição.

5. **Desative o zoom automático.** O zoom automático pode resultar em redesenho frequente do mapa durante a navegação, causando atrasos. Desative o zoom automático em *Menu → Configurações → Perfil → Configurações de navegação → [Mapa durante a navegação](../navigation/guidance/map-during-navigation.md)*.

6. **Use apenas mapas offline.** Mapas online, especialmente quando não baixados com antecedência, podem atrasar o carregamento do mapa. Mude para usar apenas mapas offline para um desempenho mais suave.

Essas alterações devem reduzir o tempo necessário para renderizar mapas, especialmente durante a navegação. Para opções de configuração mais detalhadas, consulte o [Guia de Configurações do Mapa](https://osmand.net/docs/user/map/interact-with-map.md#settings).


## Linhas de Contorno {#contour-lines}

### Existe uma maneira de exibir linhas de contorno em pés em vez de metros? {#is-there-a-way-to-display-contour-lines-in-feet-instead-of-meters}

Sim, as linhas de contorno podem ser exibidas em pés em vez de metros. Antes de baixar os dados da linha de contorno, escolha entre Pés ou Metros: [leia mais sobre isso aqui](../../user/plugins/topography.md#contour-lines-meters-or-feet).

### Linhas de Contorno, Dados de Elevação ou Relevo 3D não são exibidos {#contour-lines-elevation-data-or-3d-relief-are-not-displayed}

- Verifique se os dados da região correta foram baixados. Vá para ***Menu → Mapas e Recursos → Downloads → Sua Região***. [Como baixar mapas](../start-with/first-steps.md#how-to-download-maps).
- Verifique se o [plugin](../plugins/topography.md#required-setup-parameters) está ativado e visível em ***Menu → Plugins → Topografia***.
- Verifique se os itens na seção Topografia estão ativados em ***Menu → Configurar Mapa → Topografia → Linhas de contorno / Terreno / Relevo 3D***.
- Verifique suas compras: [Android](../purchases/android.md#free-and-paid-features) / [iOS](../purchases/ios.md#free-and-paid-features).
- Atualize o aplicativo para a versão mais recente.
- Exclua e baixe novamente os mapas necessários para garantir que não haja arquivos corrompidos.
- Reinicie o OsmAnd para atualizar as configurações e os dados.


## Pesquisa {#search}

### A pesquisa de endereço estruturada (cidade *→* rua *→* casa) não encontra a casa {#structured-city--street--house-address-search-doesnt-find-the-house}

Se você está tentando pesquisar um local usando a estrutura *Cidade → Rua → Número da Casa* e nenhum resultado é retornado, considere as seguintes dicas e possíveis causas:

> **Dica**: Tente uma pesquisa de texto completo sem especificar a cidade, pois o endereço pode estar listado sob uma cidade diferente.

**Problemas Potenciais:**

- **Casa Ausente**. A casa pode não estar listada no OpenStreetMap, ou pode estar presente, mas sem números atribuídos. Você pode verificar isso com um exemplo [aqui](https://www.openstreetmap.org/#map=19/33.91937/-118.24357).

- **Nome da Rua Incorreto**. O nome da rua associado à casa pode estar incorreto no OpenStreetMap. Verifique a tag `addr:street` para garantir que o nome da rua corresponda exatamente ao da informação de tag da rua.

- **Problema com o Nominatim**. A casa pode estar presente no OpenStreetMap, mas não encontrada via Nominatim (o mecanismo de busca usado pelo OpenStreetMap). Você pode aprender mais sobre como corrigir problemas relacionados a endereços [aqui](https://wiki.openstreetmap.org/wiki/Addresses).

- **Possível Problema no OsmAnd**. Se a casa estiver presente no Nominatim, mas ainda não for encontrada no OsmAnd, o problema pode ser específico do OsmAnd. Você pode contribuir para resolver isso investigando mais a fundo. Mais detalhes podem ser encontrados neste [artigo técnico](../../technical/algorithms/trace-address-search-issues.md).


## Trilhas e Pontos {#tracks-and-points}

### Como marcar diferentes lugares no mapa {#how-to-mark-different-places-on-the-map}

Você pode deixar notas e marcar locais no mapa de várias formas, cada uma servindo a diferentes propósitos:

- *[Favoritos](../personal/favorites.md)*. São pontos permanentes no mapa onde você pode adicionar descrições. Para criar um Favorito, faça um *toque longo → toque em Adicionar*. Favoritos são ótimos para marcar lugares que você visita frequentemente ou deseja salvar para referência futura.

- *[Marcadores](../personal/markers.md)*. Marcadores são pontos temporários, frequentemente usados para navegação ou planejamento. Eles podem mostrar a distância da sua localização atual ou de outro ponto, e podem ser removidos rapidamente quando não forem mais necessários. Para adicionar um Marcador, faça um *toque longo → toque em Marcador*.

- *[Waypoints](../map/tracks/index.md#types-of-tracks)*. Waypoints são colocados ao longo das rotas que você cria, ajudando a marcar paradas ou locais específicos ao longo da sua jornada. Você também pode adicionar descrições a esses pontos. Para adicionar um waypoint, faça um *toque longo no mapa → Direções → adicionar como waypoint intermediário*.

- *[Notas de Áudio/Vídeo](../plugins/audio-video-notes.md)*. Essas notas permitem anexar arquivos de áudio, vídeo ou fotos a locais específicos no mapa. Para ativar, ative o plugin Notas de Áudio/Vídeo no *Menu OsmAnd → Plugins*. Para adicionar uma, faça um *toque longo → Ações → escolha o arquivo necessário para anexar*.

- *[Notas OSM](../plugins/osm-editing.md#create--modify-osm-note)*. São relatórios que você pode criar para destacar erros ou informações ausentes no OpenStreetMap. Ative o plugin de edição OSM no *Menu OsmAnd → Plugins*. Para adicionar uma Nota OSM, faça um *toque longo → Ações → Adicionar nota OSM*.

- *[POIs (Pontos de Interesse)](../map/point-layers-on-map.md#points-of-interest-pois)*. São pontos predefinidos da fonte de dados do OpenStreetMap, como restaurantes, parques ou pontos de referência. Você pode visualizar POIs ativando a sobreposição de POIs no menu *Configurar Mapa* ou selecionando uma categoria.

- *[Pesquisa](../search/index.md)*. Você também pode usar a função de pesquisa para encontrar e marcar lugares no mapa.