---
source-hash: 42ff05646c95b3b895f63bb0b08b6e96cad7f2f20ea27a354e9c56ca6c77cb65
sidebar_position: 3
title: Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Cálculo de rota {#route-calculation}

### O cálculo da rota é lento {#route-calculation-is-slow}

*Android*. O OsmAnd usa dois **mecanismos de roteamento offline** diferentes: um *mecanismo baseado em Java* e um *mecanismo Nativo (C++)*.

- O *mecanismo baseado em Java* é usado no [Modo de Segurança](../plugins/development.md#overview), mas é aproximadamente 10 vezes mais lento que o mecanismo nativo. Ele também tem limitações de memória rigorosas, o que pode levar a erros como *Memória insuficiente para calcular*. Se você encontrar esse problema, navegue até *Plugins → OsmAnd development → Settings →* [*Safe Mode*](../plugins/development.md#overview) e certifique-se de que esta opção esteja desativada.
- O *mecanismo Nativo (C++)* oferece melhor desempenho, mas sua eficiência depende da memória e da capacidade do processador do seu dispositivo. Geralmente, o roteamento nativo funciona bem para rotas com menos de 300 km, com tempos de cálculo de rota variando de 15 segundos a 4 minutos. Se o processo demorar mais de 4 minutos, é aconselhável parar, pois o aplicativo pode travar.

### Rotas incorretas ou quebradas {#incorrect-or-broken-routes}

Às vezes, o OsmAnd pode exibir resultados de navegação inesperados. Em vez de seguir a rede de estradas, a rota pode aparecer como uma linha pontilhada reta para um ponto não relacionado, ou a navegação pode falhar completamente. Isso geralmente indica que o roteamento para o local selecionado não é possível com a configuração atual. Problemas semelhantes foram relatados por usuários no [Reddit](https://www.reddit.com/r/OsmAnd/comments/1lu45u2/navigation_problems/) e [mais](https://www.reddit.com/r/OsmAnd/comments/1l9233e/navigation_bug_in_certain_countries/).

**Causas:**

- Mapas desatualizados ou duplicados. Mapas com datas de atualização diferentes ou duplicatas podem quebrar a conectividade (especialmente entre regiões/fronteiras).
- Configurações de perfil danificadas. Perfis personalizados/modificados (por exemplo, Bicicleta) podem causar comportamento inconsistente.
- Incompatibilidade de mecanismo de roteamento: Diferentes mecanismos (HH × Java vs HH × C++) podem lidar com os mesmos mapas de forma diferente.

**Soluções:**

1. Redefina seu perfil.
- Abra *Menu* → *Settings* → *App profile (Navigation Profile)*.
- Selecione *Reset to default*.

2. Remova e reinstale os mapas.
- Abra *Menu* → *Maps & Resources* → *Local* e exclua todos os mapas para a(s) região(ões) afetada(s).
- Em seguida, vá para *Menu* → *Maps & Resources* → *Downloads* e baixe os mapas novamente.
- Opcionalmente, verifique *Menu* → *Maps & Resources* → *Updates* para garantir que todas as regiões compartilhem a mesma data de atualização.

3. Altere o mecanismo de roteamento.
- Ative o plugin: *Menu* → *Plugins* → *OsmAnd development*.
- Em seguida, abra *Menu* → *Settings* → *App profile* → *Navigation settings* → *Route parameters* → *Development* → *Routing type* e alterne *HH × C++* ↔ *HH × Java* (você também pode tentar A* clássico ou A* em duas fases).

4. Como último recurso.
- Reinstale o aplicativo e baixe os mapas novamente (ajuda quando conflitos ocultos persistem).

### Como calcular rotas com mais de 250 km? {#how-to-calculate-routes-longer-than-250km}

1. Se o aplicativo não mostrar uma rota após 7-8 minutos de tempo de cálculo, considere [colocar pontos de passagem](../navigation/setup/route-navigation.md#route-recalculation) (escolha, por exemplo, locais em autoestradas). 3-4 pontos de passagem serão suficientes para calcular rotas de até 1000 km.

2. Para dispositivos de ponta, você pode aumentar a memória para 512 MB ou 1024 MB - [Dispositivos com memória alocada](../plugins/development.md#memory-settings).

3. Para a versão Android, você pode criar um Perfil de Navegação com roteamento Online ou de terceiros (BRouter). Leia mais sobre isso [aqui](../navigation/routing/brouter.md).

### Cálculo de rotas de 50 km para pedestres {#calculation-of-50-km-routes-for-pedestrians}

Se você estiver usando o perfil **Caminhada** no OsmAnd, o aplicativo pode travar ao calcular rotas com mais de 50 km. Esse problema ocorre especificamente quando o [**Roteamento Padrão A***](../navigation/guidance/navigation-settings.md#development-settings) é selecionado nas configurações de navegação. Vários fatores podem contribuir para esse problema:

- O comprimento da rota excede 50 km.
- O número de pontos diretos na rota é superior a 1 milhão.
- Você está usando um dispositivo móvel para calcular a rota, o que não é recomendado para rotas desse comprimento. Considere usar a versão web para melhor desempenho.

Para evitar travamentos com rotas de distâncias semelhantes, você pode querer mudar para outros tipos de perfil, como **Bicicleta**.

## A rota calculada não parece correta {#the-calculated-route-does-not-seem-correct}

Para rastrear problemas com rotas erradas ou subótimas, abra uma nova postagem em [discussões do Github](https://github.com/osmandapp/OsmAnd/discussions) ou [problema do Github](https://github.com/osmandapp/Osmand/issues) e especifique o mais detalhadamente possível as seguintes informações:

- Qual versão do OsmAnd você está usando, em qual dispositivo?
- Você usa os mapas offline oferecidos no aplicativo OsmAnd para download ou mapas online (em mosaico / raster)?
- Se você usa mapas offline, diga-nos o nome exato do arquivo do mapa onde ocorre o problema de roteamento e sua data de edição.
- Diga-nos se você usou o roteamento offline no aplicativo do OsmAnd ou qualquer provedor de roteamento online como YOURS, OpenRouteService ou OSRM.
- Qual perfil de roteamento é escolhido no aplicativo OsmAnd (carro, bicicleta ou pedestre)?
- Por favor, especifique o mais exatamente possível o ponto de partida e o ponto final da sua rota. Se possível, diga-nos o nome da cidade e o nome da rua para cada um. Um [Permalink](https://wiki.openstreetmap.org/wiki/Permalink) de openstreetmap.org também pode ser útil.
- Diga-nos o seu roteamento esperado e como o OsmAnd roteia.

## Informações da estrada {#road-information}

### Por que alguns avisos de radar de velocidade podem não ser acionados {#why-some-speed-camera-warnings-may-not-be-triggered}

Devido aos geodados retirados do projeto OpenStreetMap, existem atualmente dois métodos de integração de radares de velocidade nos dados brutos do OSM:

- Um ponto (chamado "nó" na terminologia OSM) de uma via é marcado com `highway=speed_camera`, veja a wiki OSM em [highway=speed_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
- Um grupo de elementos de dados OSM é unido em uma chamada "relação" que contém mais elementos do que um único nó para descrever a direção coberta pelo radar de velocidade. Veja [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement).

O OsmAnd suporta ambos os métodos. Avisos de radar de velocidade podem ser acionados para câmeras mapeadas com `highway=speed_camera`, bem como para câmeras definidas por meio de uma relação `enforcement`.

Se um nó de radar de velocidade for colocado diretamente na estrada, a tag `highway=speed_camera` é suficiente para o OsmAnd detectá-lo e exibir avisos.

Se a câmera for mapeada ao lado da estrada em vez de sobre ela, ela deve ser conectada à estrada usando uma relação `enforcement`. Caso contrário, o OsmAnd pode não associar a câmera à estrada e o aviso não será acionado.

## Navegação por voz {#voice-navigation}

### Por que devo usar uma voz TTS em vez de uma voz gravada? {#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice}

As vozes **Text-to-Speech (TTS)** geram avisos falados dinamicamente, permitindo que pronunciem nomes de ruas, nomes de lugares e números de rodovias. Em contraste, as **vozes gravadas** são limitadas a frases pré-gravadas e não podem pronunciar nomes ou números específicos.

*Vantagens do TTS sobre vozes gravadas:*

- Pronuncia nomes de ruas e informações dinâmicas.
- Regularmente atualizado com novos recursos.
- Oferece melhor flexibilidade para navegação.

Para usar o TTS no OsmAnd, seu dispositivo deve ter um **mecanismo TTS** instalado. Muitos dispositivos vêm com um mecanismo TTS pré-instalado, mas outros podem ser instalados manualmente, se necessário. [Lista de mecanismos e idiomas TTS suportados para Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

Para instruções detalhadas sobre como configurar e ajustar os Avisos de Voz, consulte: [Guia de configuração de navegação por voz](../navigation/guidance/voice-navigation.md).

### O TTS não funciona corretamente? Siga estas etapas para corrigi-lo {#tts-does-not-function-properly-follow-these-steps-to-fix-it}

Problemas com **Text-to-Speech (TTS)** geralmente estão relacionados às **configurações do sistema Android**, e não ao próprio aplicativo OsmAnd.  

1. Certifique-se de que um mecanismo TTS esteja instalado.

    - Abra *Device Settings → Language & Input → Text-to-Speech Options*.
    - Verifique se um **mecanismo TTS** está instalado (por exemplo, Google TTS, Samsung TTS, Pico).
    - Se nenhum mecanismo estiver instalado, selecione *“Install more…”* e baixe um compatível.
    - [Lista de mecanismos e idiomas TTS suportados.](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/)

2. Verifique as configurações de idioma do TTS.

    - Selecione o idioma que deseja usar em *Android Settings → Text-to-Speech Options*.
    - Toque em *“Listen to an example”* para testar se o mecanismo TTS está funcionando.
    - Se você não ouvir nada, atualize ou reinstale o mecanismo TTS.

3. Ajuste as configurações de navegação por voz do OsmAnd.

    - Abra *OsmAnd → Menu → Configure Profile → Navigation Settings → Voice Prompts*.
    - Selecione um *Language → TTS* compatível.
    - Teste os avisos de voz navegando até *Menu → Plugins → Enable OsmAnd Development → Settings → Test Voice Prompts*.

#### Etapas adicionais {#additional-steps}

- *Atualizar Google TTS*. Abra a Google Play Store, procure por **Google Text-to-Speech** e atualize-o.  
- *Simular Navegação*. Toque no *Navigation button → Settings → Simulate Navigation* para verificar se a orientação por voz é reproduzida.  
- *Reinstalar OsmAnd*:  
   - **Fazer backup das configurações:** *Menu → Settings → Export to File*.  
   - Desinstale o OsmAnd e reinstale-o da loja de aplicativos.  
   - Restaurar configurações: *Menu → Settings → Import File*.

Para solução de problemas adicionais, visite:

- [Guia de navegação por voz](../navigation/guidance/voice-navigation.md)  
- [Importar/Exportar configurações](../personal/import-export.md)  


## Outros {#other}

### A navegação para quando a tela está desligada {#navigation-stops-while-screen-is-off}

- [O mesmo problema](../troubleshooting/track-recording-issues.md#overview) com a gravação de trilhas em segundo plano.