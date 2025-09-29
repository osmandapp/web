---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title: Geral
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Problemas gerais relacionados a vários recursos do OsmAnd.

## Consumo de bateria {#battery-consumption}

### O OsmAnd parece consumir muita bateria {#osmand-seems-to-use-up-too-much-battery-power}

Houve relatos de usuários de que o OsmAnd consome bateria excessivamente, com casos em que o OsmAnd foi responsável por até 90% do uso da bateria. No entanto, realizamos muitos testes e não conseguimos reproduzir tais resultados.

Em circunstâncias normais, o OsmAnd consome energia apenas quando necessário para funções ativas, como navegação em tempo real ou gravação de trilhas. Quando esses serviços estão ativos, eles aparecem na área de notificação do Android. Se nenhuma notificação desse tipo estiver visível, o OsmAnd não está consumindo energia em segundo plano.

Vários fatores influenciam o consumo da bateria: a idade do dispositivo, o número de ciclos de carga, a capacidade da bateria, a temperatura e muito mais. Abaixo estão as taxas típicas de consumo de bateria, com base em testes realizados em um dispositivo de nível médio:

| Função do dispositivo | Consumo de bateria por hora |
| :--- | :--- |
| Dispositivo típico em repouso com apenas aplicativos padrão ativos | 0,5 % |
| Tela ligada (tipicamente) | 6 % |
| GPS ativo (tipicamente) | 5 % |
| OsmAnd rodando em segundo plano para gravação de trilhas | 0,5 % |
| OsmAnd não executando nenhum serviço em segundo plano | 0 % |

#### Consumo de bateria da função OsmAnd {#osmand-function-battery-consumption}

| Função do OsmAnd | Consumo de bateria por hora |
| :--- | :--- |
| Gravação de trilhas com a tela desligada | 6 % |
| Navegação com a tela ligada | 12 % |

O consumo total de energia deve resultar da adição desses componentes, conforme aplicável, dependendo de como você usa o OsmAnd. Por favor, relate se você observar desvios significativos desses valores típicos.

### Otimizando o consumo de bateria {#optimizing-battery-consumption}

Ao usar o OsmAnd, vários recursos podem influenciar o consumo da bateria, especialmente durante atividades como navegação ou gravação de trilhas. Aqui estão algumas dicas para ajudar a gerenciar o uso da bateria de forma eficaz:

- **Controle da tela durante a navegação** (*Android*). Para economizar energia, você pode configurar o OsmAnd para manter a tela desligada durante a navegação, a menos que ocorra uma curva ou um evento importante. Isso é particularmente útil durante a navegação por voz. Para mais detalhes, consulte *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Configurações de navegação para economia de energia**. Você pode reduzir o consumo da bateria minimizando a frequência de redesenho do mapa e limitando a precisão do GPS. Para ajustar essas configurações, vá para *Navegação → Configurações → Navegação de rota*. Para obter mais informações, consulte [economia de energia durante a navegação](../navigation/setup/route-navigation.md#power-saving-tips).

- **Gerenciamento de camadas e detalhes do mapa**. Desative recursos desnecessários do mapa, como relevo 3D, curvas de nível ou sombreamento de colinas. Você também pode reduzir o número de objetos exibidos (rótulos de POI, limites, números de casas, etc.) através do menu *Configurar Mapa*. Desativar essas camadas ajuda a reduzir a frequência de redesenho do mapa, o que diminui o consumo de energia.

- **Desativando o zoom automático**. O zoom automático durante a navegação pode causar redesenhos frequentes do mapa, o que aumenta o uso da bateria. Desativar esse recurso pode ajudar a reduzir o consumo de energia. Navegue até *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* para desativar o zoom automático. Para mais detalhes, visite [Mapa Durante a Navegação](../navigation/guidance/map-during-navigation).

- **Otimizando as configurações de gravação de trilhas**. Certifique-se de ajustar a precisão do GPS e o uso da tela durante a gravação de trilhas para economizar bateria. Visite a seção [Solução de problemas de gravação de trilhas](../troubleshooting/track-recording-issues.md) para obter mais orientações.

## Privacidade {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Como excluir o histórico de pesquisa {#how-to-delete-search-history}

Para remover o histórico de pesquisa no OsmAnd:

1. Abra o menu *Pesquisar*.
2. Toque e segure em qualquer resultado de pesquisa.
3. Selecione os resultados que deseja excluir ou use a opção *Selecionar Tudo* no canto superior esquerdo para excluir todos os resultados.
4. Toque no ícone da *Lixeira* no canto superior direito para confirmar a exclusão.

Para instruções mais detalhadas sobre a funcionalidade de pesquisa, você pode consultar [este guia](../search/search-history.md).

## Outros {#other}

### Problema com a conexão GPS (Android) {#problem-with-the-gps-connection-android}

O OsmAnd depende dos dados de localização fornecidos pelo seu dispositivo Android através da API do Android.

Para resolver problemas de conexão GPS, siga estas etapas:

1. **Alterar a fonte de localização**. Experimente diferentes opções, como Google Play Services ou Android API em *Configurações do OsmAnd → Fonte de localização*.
2. **Atualizar a API do Google Service**. Certifique-se de ter a versão mais recente do [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Verificar as configurações de localização do Android**. Vá para as Configurações do Sistema Android e certifique-se de que o Acesso à Localização esteja ativado e definido como Alta Precisão. Você também pode tentar limpar o cache e reiniciar o dispositivo. Problemas de GPS podem ocorrer se edifícios ou objetos grandes interferirem no sinal. Teste o desempenho do GPS e, se o sinal estiver fraco, defina a precisão mínima de gravação para mais de 15 metros.
4. **Ativar o widget GPS**. Use o widget de informações do GPS para verificar as conexões de satélite. Se não houver conexões de satélite, seu dispositivo não determinará a localização e o número de satélites será 0. Mais detalhes podem ser encontrados no [guia do widget GPS](../widgets/info-widgets.md#gps-info).
5. **Usar apenas sinal GPS**. Configure seu dispositivo para usar apenas GPS (desative a localização baseada em Wi-Fi ou Bluetooth). As instruções estão disponíveis no [Suporte do Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Reinstalar o OsmAnd**. Se as etapas acima não funcionarem, tente reinstalar o aplicativo OsmAnd para limpar dados ruins e resolver problemas de GPS. Antes de fazer isso, exporte todos os seus dados salvos.
7. **Verificar a RAM do dispositivo**. Se o problema persistir, pode ser devido a memória insuficiente, então certifique-se de que seu dispositivo tenha RAM suficiente disponível.

### Problema de incompatibilidade de e-mail durante a compra do OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Se você encontrar um problema em que o e-mail associado à sua compra do OsmAnd Pro não corresponde ao e-mail do aplicativo OsmAnd, siga estas etapas para resolver o problema:

1. **Verifique as contas do Google Play e Pay**. Certifique-se de que o e-mail correto esteja vinculado às suas contas da Google Play Store e Pay. O processo de pagamento é tratado por esses serviços, e a incompatibilidade de e-mail pode ocorrer devido a um e-mail antigo ainda associado ao seu perfil de pagamento.

2. **Verifique o e-mail do aplicativo OsmAnd**. Verifique novamente o endereço de e-mail em seu aplicativo OsmAnd para garantir que ele corresponda ao seu e-mail atual do Google Play. Isso pode ser feito abrindo o aplicativo e navegando até as configurações da conta.

3. **Restaurar compras**. Verifique a disponibilidade e a adequação da sua compra. Para fazer isso, vá para *Menu do OsmAnd → Configurações → Compras*. Se os dados exibidos não corresponderem às suas expectativas, tente [Restaurar compras](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Limpar cache e dados do aplicativo**. Limpe o cache e os dados do aplicativo OsmAnd indo para *Configurações do seu dispositivo → Aplicativos → OsmAnd → Armazenamento → Limpar Cache e Limpar Dados*. Isso atualizará o aplicativo e removerá quaisquer problemas residuais da conta antiga.

5. **Reinstalar o OsmAnd**. Se a limpeza do cache não resolver o problema, tente desinstalar e reinstalar o aplicativo. Antes de fazer isso, certifique-se de fazer backup de quaisquer dados importantes (trilhas, favoritos) indo para *Menu → Configurações → Exportar para arquivo*. A reinstalação do aplicativo garantirá que todos os detalhes da conta sejam atualizados corretamente.

6. **Desativar proxy**. Verifique as configurações de proxy do aplicativo e certifique-se de que o proxy esteja desativado, indo para *Menu → Configurações → Configurações do OsmAnd → Proxy*. Um proxy ou VPN pode interferir na sincronização da conta.

7. **Fazer login novamente ou usar a Web para gerenciamento de contas**. Se você ainda estiver enfrentando problemas, tente sair e fazer login novamente para atualizar a conexão do aplicativo com sua conta atual. Se você encontrar algum problema ao excluir a conta antiga no aplicativo, considere gerenciar sua conta através da versão web do OsmAnd.