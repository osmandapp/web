---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Acionamento do Aviso de Voz de Navegação {#navigation-voice-prompt-triggering}

                               
**(Compilado por Hardy 2013, retrabalhado 2023-08)**
## Princípio e Configurações Relacionadas {#principle-and-related-settings}
* Os avisos são acionados com base em um limite de **distância de avanço**, derivado da conversão de um tempo de avanço especificado através da **_<Translate android="true" ids="default_speed_setting_title" />_** do perfil. Para avisos próximos, essa distância de avanço pode ser ajustada com base na velocidade real: aumentada para garantir que o anúncio seja acionado cedo o suficiente em altas velocidades, ou diminuída para maior precisão em baixas velocidades.
* A **_<Translate android="true" ids="default_speed_setting_title" />_** do perfil é ajustável pelo usuário, e alterá-la afetará as distâncias de acionamento do aviso de voz.
*Nota*: A _<Translate android="true" ids="default_speed_setting_title" />_ também afeta o tempo de rota calculado.
* O tempo do aviso de voz também pode ser ajustado através da configuração **_<Translate android="true" ids="arrival_distance" />_**. Verifique a coluna 'Configuração de Chegada' abaixo para ver quais avisos de voz serão afetados. A distância de acionamento será multiplicada pelo seguinte fator:

**<Translate android="true" ids="arrival_distance" />** | Multiplicador de distância
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Além disso, há um **_Atraso do aviso de voz_** geral configurável pelo usuário (ajustável no _plugin de desenvolvimento do OsmAnd_, _Avisos de voz de texto_, botão 11.2). Isso é particularmente necessário para o tipo de saída _Áudio de chamada telefônica_, onde emulamos uma chamada para um aparelho de som do carro que induz algum atraso, para evitar que o início dos avisos seja cortado. (Todas as distâncias anunciadas nos avisos anteciparão qualquer _Atraso do aviso de voz_.)
* Silenciamos os avisos imediatamente quando eles se referem a eventos desatualizados, ou se sua direção de viagem não parece estar alinhada com uma rota atual.

## Velocidades Padrão do Perfil Base {#base-profile-default-speeds}
Embora estas possam ser ajustadas pelo usuário, os padrões são:
* Dirigindo: 12,5 m/s (45 km/h)
* Ciclismo: 2,78 m/s (10 km/h)
* Caminhada: 1,11 m/s (4 km/h)
* Barco: 1,39 m/s (5 km/h)
* Esqui: 1,39 m/s (5 km/h)
* Aeronave: 40 m/s (144 km/h)

## Tabela de Acionamento {#trigger-table}

Os acionadores estão [aqui no código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). Os valores correspondentes para as configurações padrão do OsmAnd são:

Tipo de Aviso | Tempo de Avanço [s]:<br/>Distância de Avanço<br/>Correspondente @ Velocidade Padrão [m] | Distância de Avanço Ajustada pela Velocidade Real? | Ajustável pela Configuração de Chegada? | Comentário |
--- | --- | --- | --- | --- |
Virar agora | **6,7 s / 3,2 s / 2 s:**<br/>Dirigindo: 83 m<br/>Ciclismo: 12(8) m<br/>Caminhada: 12(2) m | :heavy_check_mark: (Proporcional à *velocidade real / Velocidade padrão*) | :heavy_check_mark: | Tempo de avanço (heurístico) = _max(8, sqrt(Velocidade padrão * 3,6))_. A distância de avanço correspondente é arredondada para 12 m para permitir imprecisão de posição. |
Virar em X m | **22 s:**<br/>Dirigindo: 275 m<br/>Ciclismo: 61 m<br/>Caminhada: 24 m | :heavy_check_mark: (Aumento apenas) | | Ignorado se < 15 s antes da virada |
Preparar para virar em X m | **115 s:**<br/>Dirigindo: 1438 m<br/>Ciclismo: 319 m<br/>Caminhada: - | | | Ignorado se < 150 m antes de "Virar em", ignorado para _Velocidade padrão_ < 8 km/h |
Preparar para virar em X m (longo) | **300 s:**<br/>Dirigindo: -<br/>Ciclismo: -<br/>Caminhada: - | | | Ignorado para _Velocidade padrão_ < 108 km/h |
Siga em frente | **>300 s:**<br/>Dirigindo: 3750 m<br/>Ciclismo: 833 m<br/>Caminhada: 333 m | | | Toca após o cálculo da rota se nenhum outro aviso for devido, ou após uma virada se a próxima virada estiver a mais de _Preparar longo_ de distância |
Chegar ao destino ou intermediário | **5 s:**<br/>Dirigindo: 63 m<br/>Ciclismo: 14 m<br/>Caminhada: 6(12) m | |:heavy_check_mark: | Mínimo 12 m |
Aproximando-se de ponto de passagem / favorito / POI | **60 s:**<br/>Dirigindo: 750 m<br/>Ciclismo: 167 m<br/>Caminhada: 67 m | :heavy_check_mark: (Aumento apenas) | :heavy_check_mark: | Limitado a no máximo 1 ponto por vez |
Passando ponto de passagem / favorito / POI | **15 s:**<br/>Dirigindo: 188 m<br/>Ciclismo: 42 m<br/>Caminhada: 17 m | :heavy_check_mark: (Aumento apenas) | :heavy_check_mark: | Limitado a no máximo 3 pontos por vez |
Alarme padrão | **12 s:**<br/>Dirigindo: 150 m<br/>Ciclismo: 33 m<br/>Caminhada: 13 m | :heavy_check_mark: (Aumento apenas) | :heavy_check_mark: |
Alarme próximo | **7s:**<br/>Dirigindo: 88 m<br/>Ciclismo: 20 m<br/>Caminhada: 8 m | :heavy_check_mark: (Aumento apenas) | :heavy_check_mark: | _Calma de tráfego_ usa o alarme _Passando_ para o aviso de aproximação e filtra duplicatas dentro deste raio |
Anúncio fora da rota | **20 s:**<br/>Dirigindo: 250m<br/>Ciclismo: 56m<br/>Caminhada: 22m h| | :heavy_check_mark: | Pode ser desativado |
Sinal de GPS perdido | **20 s** | | | É reproduzido depois que o sinal de GPS foi perdido por >= 20 s e isso não foi causado por ação do usuário. |