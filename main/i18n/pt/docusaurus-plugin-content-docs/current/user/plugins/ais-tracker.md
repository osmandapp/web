---
source-hash: 04bb8eb2b1c8b30b97b5016c68f2b0de688c38c44449e4ebb8b695d258cad44b
sidebar_position: 2
title: Rastreador de Embarcações AIS
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

## Visão Geral {#overview}

O plugin **Rastreador de Embarcações AIS** exibe posições do [Sistema de Identificação Automática (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) e informações detalhadas sobre embarcações próximas. Os dados AIS são recebidos via conexão de rede de um receptor AIS externo.

O plugin pode receber dados NMEA por meio de uma conexão de rede usando TCP ou UDP. As posições GPS recebidas de mensagens NMEA RMC/GGA também podem ser usadas como Minha localização no OsmAnd.

:::caution AVISO LEGAL
**Este plugin é um projeto de hobby e não foi projetado para confiabilidade ou precisão. NÃO confie neste software para navegação ou segurança da vida.**
:::


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para usar o plugin Rastreador de Embarcações AIS, você precisa ativar o plugin e configurar uma conexão de rede com uma fonte de dados AIS/NMEA externa:

1. [Ative](../plugins/index.md#enable--disable) o plugin **Rastreador de embarcações AIS** em *Menu Principal → Plugins → Rastreador de embarcações AIS*.
2. Configure as [configurações AIS](../map/raster-maps.md#layers)
3. Configure a conexão com sua **fonte de dados AIS/NMEA** usando **TCP** ou **UDP**.
4. Verifique se as embarcações são exibidas no mapa do OsmAnd.

No iOS, você pode ativar adicionalmente *Usar NMEA como fonte de localização* para usar posições GPS de mensagens NMEA RMC/GGA como sua localização atual no OsmAnd.

## Embarcações no Mapa {#vessels-on-the-map}

O AIS opera em *frequências VHF* (161,975 MHz e 162,025 MHz) e tem um alcance de sinal limitado devido à propagação em linha de visão.

***Alcance típico de recepção AIS:***

- 15–20 milhas náuticas (28–37 km)
- Depende da altura da antena, condições ambientais e obstáculos

***Exibição AIS no mapa:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais.webp)

</TabItem>

</Tabs>

Quando configurado corretamente, as posições das embarcações aparecerão no mapa. Principais características:

- As embarcações se movem com base na velocidade e curso em tempo real.
- Novos navios entram e saem da área visível dinamicamente.
- Tocar em uma embarcação abre informações detalhadas.


### Informações da Embarcação AIS {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais_menu.png) ![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais_menu.webp)

</TabItem>

</Tabs>

As embarcações AIS transmitem três tipos de dados:

1. Informações Estáticas (dados inalteráveis).  
    *Enviadas a cada **6 minutos** ou mediante solicitação.*

    - **Nome da Embarcação** (*se definido*)  
    - **MMSI (Identidade de Serviço Móvel Marítimo)** (*Identificador único de 9 dígitos da embarcação*)
    - **Número IMO** (*se disponível*)  
    - **Sinal de Chamada**  
    - **Tipo de Embarcação** (*por exemplo, Carga, Passageiro, Embarcação de Pesca*)  
    - **Dimensões da Embarcação** (*Comprimento e Largura*)  
    - **Posição da Antena AIS** (*Em relação ao casco da embarcação*)  

2. Informações Dinâmicas (dados em tempo real).  
    *Enviadas em intervalos diferentes, dependendo da velocidade e manobra.*

    - **Coordenadas da Embarcação (Latitude e Longitude)**  
    - **Curso Sobre o Fundo (COG)**  
    - **Velocidade Sobre o Fundo (SOG)**  
    - **Rumo** (*Direção para onde a proa está apontando*)
    - **Status da Embarcação** (*Em movimento, Ancorada, Manobrando, etc.*)  
    - **Taxa de Curva (ROT)** (*Velocidade de mudança de curso*)  
    - **Hora da Última Atualização**  

3. Informações da Viagem (definidas manualmente pela tripagem).  
    *Enviadas a cada **6 minutos**, definidas manualmente pela tripagem*

    - **Porto de Destino**
    - **Tempo Estimado de Chegada (ETA)**  
    - **Calado** (*Profundidade da embarcação abaixo da superfície da água*)  
    - **Tipo de Carga** (*se transmitido*)
    - **Número de Pessoas a Bordo** (*opcional*)  

### Símbolos e Legendas AIS {#ais-symbols-and-legends}

[Diretrizes para Apresentação de Símbolos AIS](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Símbolos             | Descrição   |
|---------------------|---------------|
| | |
| **Símbolos de Tipos de Embarcações** |    |
| *Triângulo verde*    | Navio de carga    |
| *Triângulo azul*     | Navio de passageiros |
| *Triângulo preto*    | Embarcação de pesca |
| *Triângulo amarelo*   | Rebocador       |
| *Triângulo vermelho*      | Petroleiro        |
| *Triângulo branco*    | Embarcação militar |
| *Triângulo laranja*   | Embarcação especial (por exemplo, piloto, quebra-gelo) |
| *Triângulo vermelho piscando* | Embarcação em perigo |
| | |
| **Símbolos de Auxílios à Navegação** |    |
| *Bóia verde*              | Marcador de estibordo (lado direito do canal) |
| *Bóia vermelha*                | Marcador de bombordo (lado esquerdo do canal) |
| *Símbolo de âncora*           | Área de ancoragem |
| *Símbolo de navio (SS)*        | Terminal de ferry ou passageiros |
| *Símbolo de guindaste de porto*       | Porto de carga |
| *Círculo preto*            | Plataforma offshore |
| | |
| **Indicadores de Status** |    |
| *Triângulo sólido*  | Embarcação em movimento |
| *Triângulo oco* | Ancorada ou Atracada |
| *Seta giratória*  | Em manobra |
| *Ícone vermelho piscando* | Alerta de emergência |
| *Ponto de exclamação laranja* | Mensagem de segurança AIS |
| | |
| **Indicadores de Rota e Velocidade** |    |
| *Linha azul fina*  | Rota planejada |
| *Linha pontilhada*     | Rastro anterior |
| *Ícone de relógio*      | Tempo estimado de chegada (ETA) |
| *Ícone de onda*       | Velocidade sobre a água |

## Configurações do Plugin {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![Configurações AIS](@site/static/img/plugins/ais/ais_settings_2.webp)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/>* → *Rastreador de embarcações AIS* → *<Translate ios="true" ids="shared_string_settings"/>* 

![Rastreador de embarcações AIS](@site/static/img/plugins/ais/ais_settings_ios.webp)

</TabItem>

</Tabs>

O plugin *Rastreador de embarcações AIS* oferece várias configurações para personalizar a navegação e a interação para usuários com deficiência. Essas configurações são aplicadas a todos os [perfis](../personal/profiles.md) no OsmAnd.

| Configuração |  Descrição  | Exemplo  |
|---------|---------------|----------|
| | | |
| **Configurações de endereço IP** | | |
| Protocolo   | Escolha o protocolo para receber dados AIS | `UDP/TCP` |
| Endereço IP | Defina o IP da fonte de dados AIS (se TCP for usado) | `192.168.200.16` |
| Porta TCP   | Defina o número da porta TCP para dados AIS | `4001` |
| Porta UDP   | Defina a porta UDP para recepção AIS do OsmAnd  | `10110` |
| Receber dados AIS mesmo se o OsmAnd estiver pausado (*somente Android*)   | Mantenha o ouvinte de mensagens AIS em execução se o OsmAnd estiver pausado ou em segundo plano. Se desativado, nenhuma mensagem AIS é recebida quando o OsmAnd está em segundo plano  | `Sim/Não` |
| Usar NMEA como fonte de localização (*somente iOS*)   | Use posições GPS de mensagens NMEA RMC/GGA como Minha localização  | `Ligado/Desligado` |
| | | |
| **Tempo limite de recepção de sinal AIS** | |  |
| Tempo limite de embarcação desatualizada      | Defina o tempo limite para visibilidade desatualizada da embarcação: após esse tempo sem recepção de sinal, o símbolo da embarcação será riscado | `2 - 15 min / Desativado` |
| Tempo limite para visibilidade quando a embarcação é perdida     | Defina um tempo limite para visibilidade de objetos AIS: se nenhum sinal for recebido dentro da duração especificada, o objeto será removido automaticamente da exibição | `3 - 20 min` |
| | | |
| **Alertas de Ponto de Aproximação Mais Próximo (CPA)** | | |
| Tempo de Aviso de CPA | A embarcação é marcada em vermelho se o tempo para o CPA estiver abaixo deste limite | `1 - 60 min / Desativado` |
| Distância de Aviso de CPA | A embarcação é marcada em vermelho se a distância para o CPA estiver abaixo deste limite | `0.02 - 2 milhas náuticas` |


### Modo de Simulação AIS {#ais-simulation-mode}

> *Você pode simular posições de embarcações AIS usando o [plugin de Desenvolvimento do OsmAnd](../plugins/development.md).*

1. **Baixe os arquivos de texto de dados AIS**:

    - [AIS Teste 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Teste 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Único 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Carregue os dados AIS no OsmAnd**  
Abra *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* e selecione um dos arquivos baixados.

3. **Visualize as embarcações AIS no mapa**  
Os ícones das embarcações aparecerão com base nos dados simulados. Toque no ícone da embarcação para ver informações detalhadas.


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)
- [Plugin Náutico](../../user/plugins/nautical-charts.md)