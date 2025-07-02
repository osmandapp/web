---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title: Gravação de Trajetos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Visão Geral {#overview}

Este artigo aborda problemas de gravação de trajetos GPX que foram observados por muito tempo em diferentes versões do Android e iOS. Por **Segundo Plano**, queremos dizer que o aplicativo OsmAnd não aparece em primeiro plano, especialmente quando a tela do dispositivo está desligada (o que é diferente da definição interna de *segundo plano* nos dispositivos).

**Notas**:

- A partir do Android 11 (2020/12), não há mais a opção de permissão do sistema *Permitir sempre* o acesso à localização para ser usado em segundo plano, mas isso **não limita** a gravação em segundo plano de trajetos do OsmAnd. De acordo com a documentação do Google, isso agora é considerado **uso em primeiro plano** porque a permissão para usar o serviço em primeiro plano é usada internamente e a notificação do sistema de que um trajeto está sendo gravado é sempre visível.

- Observe que a nova terminologia do Android pode ser enganosa:

  - **Permitir durante o uso do aplicativo** significa que o aplicativo pode receber continuamente dados de localização enquanto estiver sendo exibido na tela ou tiver uma notificação visível na barra de notificações do *Android*, como o OsmAnd tem durante a navegação ou gravação de viagem. (Tecnicamente, isso é chamado de *modo em primeiro plano*).

  - **Permitir o tempo todo**, por outro lado, significa que o aplicativo pode, em princípio, obter sua localização 'despercebida' sem que nenhuma dessas condições se aplique. Mas o *Android* limita a frequência de acesso à localização neste modo (*segundo plano*) para algo como uma vez por hora, o que certamente não é o modo correto para um aplicativo de navegação.


## Trajetos Gravados Estão Ruidosos {#recorded-tracks-are-noisy}

Existem 2 problemas típicos de precisão que levam a um trajeto gravado *bagunçado*.

- Permanência mais longa no mesmo lugar.
- Sinal GPS ruim e mudança para localização baseada em sinal de rede.

Ações que você pode realizar:

- Você pode evitar esses problemas usando **Pausa** para interromper a gravação nessas condições.
- Também é possível editar um trajeto posteriormente e remover pontos *"ruidosos"*.
- Ou você pode usar as configurações do *Plugin de gravação de viagem* para filtrar pontos *"ruidosos"* já durante a gravação, com base em sua **experiência** e **dispositivo de gravação**. Você pode filtrar pontos por vários critérios:
  - Pontos com velocidade baixa ou zero.
  - Pontos com precisão ruim (GPS 'hdop').
  - Pontos mais próximos do que um limite em metros.

- **Google Services API ou Android API**. Você pode ainda mudar como o OsmAnd recebe dados de localização em dispositivos Android. Em [Configurações do OsmAnd → Fonte de Localização](../personal/global-settings.md#location-source) selecione entre **Google Play Services** e **Android API**, em muitos casos mudar para **Android API** ajuda a melhorar os trajetos gravados e os torna menos ruidosos.


## Trajetos Gravados Têm Lacunas {#recorded-tracks-have-gaps}

A partir do Android 4.4, os recursos de economia de energia podem limitar o uso da CPU, reduzir o brilho da tela e encerrar aplicativos em segundo plano quando a tela está desligada. Isso pode afetar o desempenho do OsmAnd para uso externo, renderização de mapas e gravação de trajetos. Para evitar problemas, considere desabilitar completamente os recursos de economia de energia. Com base na experiência do usuário, isso tem pouco impacto na vida útil da bateria para a maioria dos dispositivos.

### Configurando o OsmAnd para Gravação de Trajetos {#configuring-osmand-for-track-recording}

- **Impedir Registro Autônomo**. Certifique-se de que a configuração *Impedir registro autônomo* em Plugins/Gravação de Viagem esteja desativada para permitir que o OsmAnd grave trajetos com a tela desligada.
- **Atualizar OsmAnd**. As versões do Android usam diferentes estratégias para reduzir o consumo de energia [encerrando aplicativos em segundo plano](https://dontkillmyapp.com/). A versão 3.9 ou superior usa um serviço em primeiro plano, visível na barra de notificações, [para manter o aplicativo em execução em segundo plano](https://dontkillmyapp.com/) na maioria das versões do Android. Isso é particularmente eficaz no Android 8+ ([Problema #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problema #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Otimizando o Android para Gravação de Trajetos {#optimizing-android-for-track-recording}

- **Excluir OsmAnd da Otimização de Energia**. Nas configurações de Energia ou Economia de Energia do seu dispositivo Android, encontre o OsmAnd em *Aplicativos*, *Aplicativos* ou *Gerenciador de Aplicativos*. Localize *Economia de Energia* ou *Consumo de Energia* e exclua o OsmAnd da otimização de energia. ([Problema #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Desativar o Modo de Economia de Energia**. Desativar completamente a Economia de Energia do Android pode ajudar, especialmente em versões mais antigas do Android. Isso pode resolver problemas de desempenho durante a gravação de trajetos ou navegação.

### Controlar o Comportamento de Aplicativos em Segundo Plano do iOS {#control-the-behavior-of-ios-background-apps}

O iOS pode suspender ou parar aplicativos em segundo plano automaticamente quando os recursos do sistema são realocados. O OsmAnd não pode substituir esse comportamento. Se a gravação do trajeto for interrompida quando o dispositivo estiver bloqueado, isso pode deixar lacunas na gravação. Você pode editar essas lacunas usando a ferramenta [Planejar uma Rota](https://docs.osmand.net/docs/user/plan-route/create-route).

Para mais detalhes sobre como o iOS lida com o rastreamento de localização, consulte a documentação da Apple [aqui](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Configurações de Energia Testadas para Android 9, 10 e 11 (Hardy, 25/08/2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

As seguintes configurações de Energia foram testadas com sucesso no Android 9, 10 e posteriormente 11 (em dispositivos Samsung) para fazer o OsmAnd registrar trajetos sem lacunas. Por favor, revise estas **10 configurações** e defina-as de acordo:

- (1) **Economia de energia (modo)** = DESLIGADO (ou *Otimizado* no Android 10)
- (2) **Economia de energia adaptável** = DESLIGADO (Quando LIGADO, o modo de economia de energia médio pode ser ativado às vezes, o que impede o OsmAnd de registrar)
- (3) **Bateria adaptável** = LIGADO (não deve afetar aplicativos isentos de otimização de bateria de qualquer forma, veja (9) abaixo)
- (4) **Colocar aplicativos não utilizados em suspensão** = DESLIGADO (LIGADO provavelmente também ok se o OsmAnd estiver isento de otimização de bateria, veja (9) abaixo)
- (5) **Desativar automaticamente aplicativos não utilizados** = DESLIGADO (parece presente apenas no Android 9)
- (6) **Otimizar configurações** = DESLIGADO (no Android 10 em *Cuidado do dispositivo / Avançado*, no Android 11 parece ter sumido)
- (7) **Otimizar automaticamente (diariamente)** = LIGADO (provavelmente não relevante)
- (8) **Reiniciar automaticamente (em horários definidos)** = DESLIGADO (provavelmente não relevante)
- (9) **Otimizar Uso da Bateria** (em *Aplicativos / OsmAnd / Bateria* ou *Aplicativos / 3 pontos / Acesso especial / Otimizar uso da bateria / Todos / OsmAnd*) = aconselhável isentar o OsmAnd da otimização de bateria (embora não seja necessário em todos os dispositivos)
- (10) **Permitir atividade em segundo plano** = LIGADO para OsmAnd em *Aplicativos / OsmAnd / Bateria* para Android 11

Algumas dessas configurações interagem, então seja preciso. A melhor busca para as configurações acima por nome (com e sem as expressões entre parênteses). Dependendo da sua versão do Android, elas podem estar espalhadas por essas várias *telas de Configurações do Android*:

- *Cuidado do dispositivo*
- *Cuidado do dispositivo / 3 pontos / Automação*
- *Cuidado do dispositivo / Avançado*
- *Cuidado do dispositivo / Bateria*
- *Cuidado do dispositivo / Bateria / Configurações*
- *Cuidado do dispositivo / Bateria / Gerenciamento de Energia do Aplicativo*
- *Cuidado do dispositivo / Bateria / Mais configurações de bateria*


## Como Rastrear a Distância Percorrida {#how-to-track-traveled-distance}

O OsmAnd não possui um widget especial semelhante a um hodômetro, você pode usar o [plugin de Gravação de Viagem](../plugins/trip-recording.md#new-track-recording) para rastrear sua distância percorrida e redefini-la quando necessário.


## OsmAnd 3.9: Problemas de altitude ao usar o Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

O Google Play mudou sua política e, para cumprir, o OsmAnd, a partir da versão 3.9 (excluindo as compilações Nightly, F-Droid e Huawei), é obrigado a usar o Google Play Services para obter correções de localização enquanto executa em segundo plano (ou seja, na terminologia do Android, como um serviço em primeiro plano com uma notificação de sistema visível).

Após essa mudança, parece haver um problema com o registro de altitude: Aparentemente, o Google Play Services interpola a medição de altitude de forma muito agressiva, veja [problema do GitHub #10864](https://github.com/osmandapp/Osmand/issues/10864). Este problema afeta o Android 10, possivelmente não o Android 11. O [problema](https://issuetracker.google.com/issues/180218747) já foi relatado no site do Google e provavelmente será corrigido em 09-03-2021.

Como solução alternativa, em [*Configurações do OsmAnd → Fonte de Localização*](../personal/global-settings.md#location-source) você pode mudar a fonte de localização de **Google Play Services** para **Android API**.


## OsmAnd 3.9: O despertar do GPS agora substituído por serviço contínuo em primeiro plano (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

A partir da versão 3.9, quando a gravação de trajeto ou a navegação é necessária, o OsmAnd suporta continuamente GPX através do serviço em segundo plano do *Android*, e isso é visível como uma notificação do sistema *Android*.

A estratégia anterior de usar um modo de suspensão e o Despertar GPS periódico foi removida do nosso código (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), conforme exigido pelas novas restrições do Google Play sobre o acesso à localização em segundo plano. Como resultado, as seções (A) e (B) a seguir se aplicam apenas às versões do OsmAnd anteriores à 3.9:

**<del> (A) Estratégia de Despertar GPS</del>**

- (A1) Enquanto o OsmAnd é usado, por exemplo, Navegação. Mantemos o módulo GPS do sistema ligado o tempo todo, pois a informação de localização contínua é fundamental aqui. O efeito no uso da bateria (ordem de magnitude) parece ser de cerca de 5% por hora em sistemas mais antigos até o Android 4.4, e 2-3% para sistemas mais novos.
- (A2) Para gravação de trajeto em *segundo plano* sem navegação simultânea. Para gravação com intervalos de até 15 segundos, também mantemos o GPS ligado, outras estratégias não economizarão muita energia da bateria.
- (A3) Para intervalos >=30seg, ligamos o GPS apenas para cada ponto de amostragem. Isso tem um efeito perceptível na precisão dos pontos registrados, mas reduz o uso da bateria para uma ordem de magnitude de 1,2% por hora para gravação de trajeto de 30 segundos.

**<del> (B) Problemas de Despertar GPS</del>**

Para conseguir o despertar do GPS, até agora usamos o Android Alarm Manager para despertar o dispositivo periodicamente (também do modo Doze, que foi introduzido no Android 6). Novas versões do Android introduziram os seguintes problemas:

- **(B1) O setRepeating() do Alarm Manager tornou-se impreciso a partir do Android 4.4:**
Mitigação: Agora usamos *setRepeating()* apenas até o Android 4.2, o novo método *setExact()* a partir do Android 4.4, e *setExactAndAllowWhileIdle()* para Android 8+. ([Problema #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) A partir do Android 4.4, os sistemas limitam o número de vezes que *setExact()* é executado repetidamente** para, por exemplo, uma vez a cada 5 ou mesmo 15 minutos. (O valor real parece variar muito de dispositivo para dispositivo.)
Nenhuma boa solução encontrada por enquanto. A mitigação atual é que não usamos o despertar do Alarm Manager, em vez disso, mantemos o GPS sempre ligado para o registro de trajeto em segundo plano em dispositivos com Android 5+ para todos os intervalos de gravação menores que 5 minutos. Isso produz trajetos confiáveis e precisos ao custo de maior uso da bateria. ([Problema #5632](https://github.com/osmandapp/Osmand/issues/5632))