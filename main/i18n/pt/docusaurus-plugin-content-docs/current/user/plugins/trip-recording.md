---
source-hash: cbb0cf4d59d01946eeabdc12f73feec5aec68b5a7434c67e7ceb082189d83310
sidebar_position: 15
title: Gravação de Viagem
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

O **plugin de Gravação de Viagem** é uma ferramenta essencial para capturar suas rotas, movimentos e exercícios. Este recurso não só permite gravar suas viagens, mas também possibilita a fácil reutilização, modificação, atualização e compartilhamento de suas trilhas com outras pessoas.

Com o *plugin de Gravação de Viagem*, você pode criar novas trilhas, exibir as gravadas diretamente no mapa e gerenciar registros existentes. Ele oferece informações valiosas sobre suas viagens, como velocidade, mudanças de elevação, detalhes do terreno e dados de sensores externos. O plugin registra sua rota, permitindo uma análise detalhada e compartilhamento após sua viagem.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Viagem gravada no Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Viagem gravada no iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parâmetros de Configuração Necessários {#required-setup-parameters}

Para começar a gravar trilhas, você precisa fazer as seguintes configurações:

1. [Ativar](../plugins/index.md#enable--disable) o **plugin de Gravação de Viagem**.
2. [Configurar](#recording-settings) as **configurações de gravação** para o [perfil](../personal/profiles.md) necessário.
3. [Adicionar](#widgets) **widgets de Gravação de Viagem** à tela (opcional).
4. [Gerenciar](../map/tracks/appearance.md) trilhas no mapa (opcional).


## Gravação de Nova Trilha {#new-track-recording}

![Widget de Distância/Iniciar-Parar no iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget de Distância/Iniciar-Parar no Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Com o plugin de Gravação de Viagem no OsmAnd, você pode facilmente iniciar a gravação de sua trilha usando uma variedade de opções convenientes. Veja como você pode começar sua jornada:

- [Widget de Distância/Iniciar-Parar](#distance-start-stop) — Use para ativar a gravação.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Toque no botão na guia *Principal <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- Botões de [Ação Rápida](../widgets/quick-action.md#add-and-delete-actions) — Para iniciar a gravação de uma viagem, vá para *Menu → Configurar tela → Botões personalizados → Ação rápida → Adicionar ação → Meus Lugares* e escolha [Iniciar / Pausar: Gravação de Viagem](../widgets/quick-action.md#my-places).

- *Somente Android*:
    - Vá para *Principal <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [Notificação do sistema](#notifications) — Use na área de notificação do seu dispositivo.

    - [Iniciador de aplicativos](#launcher-android) — Use para iniciar a gravação.

**Recomendações:**

- [Localização precisa](../start-with/first-steps.md#permission-to-access-the-location) — Para uma gravação de trilha precisa, certifique-se de que o OsmAnd tenha essa permissão.

- [Solução de problemas](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — **Dispositivos iOS** podem, às vezes, **suspender ou parar temporariamente aplicativos** em execução em segundo plano, o que pode interromper a gravação da trilha.

- **Fonte de Localização** (*somente Android*) — Ajuste as configurações no OsmAnd para escolher o provedor de GPS mais adequado para gravações precisas. [Saiba mais aqui](../personal/global-settings.md#location-source).


### Iniciar um Diálogo {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

O diálogo de início é aberto se a opção **<Translate android="true" ids="show_start_dialog"/>** estiver ativada na seção de configurações da caixa de diálogo de início.

![Iniciar gravação no Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

O diálogo de início é aberto se a opção **<Translate ios="true" ids="track_interval_remember"/>** não estiver ativada.

![Iniciar gravação no iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervalo de registro** (*Android/iOS*). Esta configuração controla a frequência com que o aplicativo solicita dados do sensor GPS para marcar novos pontos em sua trilha. Ajustar o intervalo permite equilibrar o detalhe da trilha e o uso da bateria. Um intervalo mais curto resultará em trilhas mais detalhadas, mas maior consumo de bateria, enquanto um intervalo mais longo economiza bateria, mas reduz a precisão da trilha.

- **Ícone de linha** (*Android*). Toque neste ícone para acessar as [opções de Aparência da Trilha](../map/tracks/appearance.md). Aqui, você pode personalizar como sua trilha aparece no mapa, incluindo cor da linha, espessura e estilo. Depois de salvar uma trilha com uma aparência personalizada, essas configurações serão mantidas para futuras gravações, garantindo consistência toda vez que você visualizar ou reativar a trilha.

- **Menu de configurações** (*Android*). Acesse este menu para ajustar suas preferências de gravação. Para uma visão detalhada, consulte a seção [Configurações de Gravação de Viagem](#recording-settings).

- **Lembrar minha escolha** (*iOS*). Quando ativado, a gravação da trilha começa automaticamente, sem solicitar configurações ou confirmação adicionais. Se você quiser alterar as configurações de gravação antes de iniciar uma nova trilha, reinicie o plugin de Gravação de Viagem para que o menu de configurações reapareça.


### Iniciador (Android) {#launcher-android}

![Menu de contexto do ícone](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Ícone de Iniciar Gravação](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

Você pode iniciar rapidamente uma nova gravação de trilha diretamente da tela do seu dispositivo Android usando o menu de contexto do ícone do aplicativo OsmAnd.

- **Toque longo** no ícone do aplicativo OsmAnd para abrir o menu de contexto, onde você pode encontrar a opção **Iniciar Gravação**.

- Toque na opção **Iniciar Gravação** para iniciar o aplicativo OsmAnd com as [configurações de gravação de trilha](#overview-screen) exibidas na tela.

- **Toque longo** na opção **Iniciar Gravação** no menu de contexto do ícone do aplicativo, para adicionar um atalho para acesso mais rápido.

Enquanto a gravação da trilha estiver ativa, um distintivo de notificação aparecerá no canto do ícone do aplicativo OsmAnd, indicando que a gravação está em andamento. Para mais detalhes sobre como gerenciar essa notificação, consulte a seção [Notificação](#notifications).


## Gravação de Trilha Atual {#current-track-recording}

Para *Parar / Salvar / Pausar*:

- Para **Parar** a gravação, toque no botão correspondente na caixa de diálogo do [widget de Distância/Iniciar-Parar](#distance-start-stop).

- (*Somente Android*) Para **Parar** a gravação, toque no item do Menu Principal *Gravação de Viagem*.

- Para **Parar** ou **Salvar** uma trilha em gravação, vá para *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/> guia*](../personal/myplaces.md#tracks) e toque no botão apropriado no campo *Trilha atualmente em gravação*.

- Para **Salvar, Pausar, Iniciar** um novo segmento ou **Finalizar** a gravação, use os botões de [Ação Rápida](../widgets/quick-action.md#add-and-delete-actions). Vá para *Menu → Configurar tela → Botões personalizados → Ação rápida → Adicionar ação → [Meus Lugares](../widgets/quick-action.md#my-places)* e adicione um ou mais botões de ação rápida.

- (*Somente Android*) Para **Pausar** ou **Salvar** uma trilha em gravação, use a [notificação](#notifications) do sistema na área de notificação do seu dispositivo.<br/><br/> ![parar-salvar-pausar](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Tela de Visão Geral {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![visão geral](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![visão geral](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finalizar gravação no iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Finalizar gravação no iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

No OsmAnd, as versões **Android** e **iOS** lidam com a interface de gravação de trilhas de forma ligeiramente diferente. No Android, você encontrará um menu dedicado para o contexto de *gravação de trilhas*, enquanto no iOS, isso é simplificado no menu de contexto de *trilha atualmente em gravação*.

À medida que você grava uma trilha, gráficos dinâmicos são gerados, fornecendo dados visuais em tempo real sobre sua jornada. Esses gráficos podem refletir informações para toda a rota ou apenas para um segmento selecionado, dependendo do seu nível de zoom.
Aqui está o que você pode encontrar neles:

- **Valores de dados**. No lado direito do gráfico estão os valores ***mais altos***, ***mais baixos*** e ***médios*** para a seção visível da trilha.

- **Gráfico para informações chave**:
    - ***Android***. Para o ***eixo Y*** no gráfico, você pode selecionar *até dois parâmetros* de todos os dados disponíveis, como *Altitude*, *Inclinação*, *Velocidade* e [informações de sensores externos](../plugins/external-sensors.md#trip-recording). Para o ***eixo X***, selecione para exibir *Distância*, *Tempo* ou *Hora do Dia*.
    - ***iOS***. Os parâmetros são organizados em abas *Visão Geral*, *Altitude* e *Velocidade* com os valores apropriados para o eixo Y e *Distância* para o eixo X.

- **Estatística**. Para Android, exibe um conjunto constante de dados estatísticos independentemente das configurações do gráfico: *Distância*, *Período de tempo*, *Subida*, *Descida*, *Velocidade média*. Para iOS, cada aba, Visão Geral, Atitude e Velocidade, possui um conjunto de dados diferente.

Para uma visualização mais detalhada, você pode **escalar o gráfico**:

- Use o [gesto de dois dedos](../map/interact-with-map.md#gestures) para aumentar ou diminuir o zoom e focar em intervalos específicos.
- Toque em qualquer ponto do gráfico para exibir um marcador que mostra os valores exatos para aquele local.

| |
| ------------- |
|**Visão Geral** guia iOS (para Android, os parâmetros do eixo Y são *Altitude*, *Velocidade* e o parâmetro do eixo X é *Distância*). Esta guia exibe um gráfico mostrando as mudanças de velocidade e altitude ao longo da trilha, e detalhes chave da trilha. Dados da trilha para iOS: *Distância*, *Período de Tempo*, *Hora de Início* e *Hora de Término*. Você pode ver como isso é exibido nas versões Android e iOS abaixo. |
| ![dados](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![dados](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| Guia **Altitude** iOS (para Android, os parâmetros do eixo Y são *Altitude*, *Inclinação* e o parâmetro do eixo X é *Distância*). Esta guia foca no perfil de elevação da sua trilha gravada, fornecendo insights sobre mudanças de altitude e inclinações do terreno. As métricas chave para iOS incluem: *Altitude Média*, *Faixa de Altitude*, *Subida* e *Descida*. Os gráficos abaixo ilustram as diferenças entre as interfaces Android e iOS. |
| ![dados](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![dados](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| Guia **Velocidade** iOS (para Android, o parâmetro do eixo Y é *Velocidade* e o parâmetro do eixo X é *Distância*). A guia Velocidade destaca dados relacionados à velocidade ao longo da trilha. Para iOS, inclui informações como *Velocidade Média*, *Velocidade Máxima*, *Tempo em Movimento* e *Distância Corrigida*. As capturas de tela abaixo mostram como esses dados são exibidos em ambas as plataformas. |
| ![dados](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![dados](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Para **Android**, você pode criar mais combinações de dados disponíveis no eixo Y e valores no eixo X. |
| ![dados](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Para mais detalhes, você pode explorar o [**Menu de Contexto de Trilhas**](../map/tracks/track-context-menu.md#options), onde você pode gerenciar várias opções relacionadas a trilhas, como renomear, excluir ou adicionar pontos de passagem. Para ajustar como as trilhas aparecem no mapa, visite a seção [**Aparência**](../map/tracks/appearance.md). Se você quiser adicionar pontos de passagem específicos à sua trilha atual, consulte o guia [**Pontos de Trilhas**](../map/tracks/track-context-menu.md#points--waypoints). Para quaisquer modificações, como renomear uma trilha, use a guia [**Opções**](https://osmand.net/docs/user/map/track-context-menu#options) dentro do Menu de Contexto de Trilhas.
:::


### Mostrar no Mapa {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configurar trilhas do mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configurar trilhas do mapa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gerencie quais trilhas estão visíveis em seu mapa usando uma das duas opções. Vá para *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*<Translate ios="true" ids="shared_string_gpx_tracks"/> guia*](../map/tracks/index.md#my-places) e ative a opção *Mostrar no mapa* para qualquer trilha que você deseja exibir ou ocultar. Alternativamente, você pode ir para *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) para ajustar rapidamente a visibilidade de todas as suas trilhas em um só lugar.


### Arquivo GPX Gravado {#recorded-gpx-file}

O OsmAnd captura sua jornada em um [arquivo GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) estruturado, usando uma hierarquia de *arquivo > trilha > segmentos > pontos*. Veja como funciona:

- **Pontos** representam momentos individuais de seu caminho gravado, cada um marcado com atributos como coordenadas, velocidade, altitude e rumo.
- Esses pontos são agrupados para formar **trilhas**, que representam sua rota completa.
- Se houver uma lacuna na gravação (por exemplo, se o rastreamento foi pausado), o próximo ponto após a interrupção inicia um novo **segmento**, marcando a separação em sua jornada.
- Tanto **segmentos** quanto **trilhas** são representados visualmente com ícones de *Início* e *Fim* no mapa.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![Arquivo GPX de uma trilha gravada](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![Arquivo GPX de uma trilha gravada](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parâmetro | Descrição |
|---|---|
| `trkpt` | **Ponto de Trilha** representa uma localização geográfica específica detectada durante sua atividade. Cada ponto de trilha inclui coordenadas de latitude e longitude, formando a base do seu caminho gravado. |
| `trkseg` | **Segmento de Trilha** agrupa pontos de trilha consecutivos, separados por interrupções na atividade, como pausas ou paradas. Isso ajuda a distinguir o movimento contínuo de períodos de inatividade dentro de uma única gravação. |
| `lat` | **Latitude** indica a posição norte-sul de um ponto na superfície da Terra. É uma das metades do par de coordenadas usado para localizar sua posição exata. |
| `lon` | **Longitude** especifica a posição leste-oeste, complementando a latitude, para localizar com precisão um ponto no globo. Juntas, latitude e longitude definem sua posição geográfica precisa. |
| `ele` | **Elevação** mede a altura de um ponto de trilha acima do nível do mar, registrada em metros. Isso pode ser útil para rastrear mudanças de altitude durante suas atividades, como caminhadas ou passeios de bicicleta. |
| `time` | **Carimbo de Data/Hora** registra a data e hora exatas em que um ponto de trilha é registrado. Isso permite que você rastreie a duração e o tempo de sua atividade com precisão. |
| `hdop` | **Diluição Horizontal de Precisão (HDOP)** é uma medida da precisão do GPS, refletindo o erro potencial na localização devido às posições dos satélites. Ao contrário do HDOP padrão, as trilhas GPX do OsmAnd usam este valor para representar a precisão horizontal em metros. Observe que esta implementação difere dos padrões típicos de HDOP. [Saiba mais](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Velocidade** registra sua taxa de movimento em metros por segundo. Fornece informações sobre seu ritmo durante vários segmentos de sua atividade. |
| `heading` | **Rumo** indica a direção em que seu veículo ou a frente do dispositivo está apontada, medida em graus. É distinto do curso, que é o caminho real do movimento. Diferenças podem ocorrer devido a fatores externos como vento, correntes ou condições da estrada. [Mais sobre rumo](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Velocidade** de [sensores externos](../plugins/external-sensors.md) captura dados de sensores conectados, fornecendo informações de velocidade mais precisas, especialmente útil ao andar de bicicleta. Para mais detalhes, consulte a [documentação do formato de arquivo GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Cadência** mede o número de rotações do pedal por minuto, registrada usando [sensores externos](../plugins/external-sensors.md). Isso é particularmente útil para ciclistas que desejam monitorar e otimizar sua eficiência de pedalada. [Leia mais](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Potência da Bicicleta** quantifica a potência gerada ao pedalar, capturada de [sensores externos](../plugins/external-sensors.md). É uma métrica essencial para ciclistas sérios que desejam avaliar seu desempenho. [Saiba mais](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Temperatura do Ar** registra a temperatura ambiente do ar durante sua atividade, medida usando [sensores externos](../plugins/external-sensors.md). Observe que a temperatura da água não é suportada. [Detalhes aqui](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Frequência Cardíaca** monitora seus batimentos cardíacos por minuto, usando dados de [sensores](../plugins/external-sensors.md) conectados. Esta informação pode ser vital para rastrear seu desempenho cardiovascular durante os treinos. [Saiba mais](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Configurações de Gravação {#recording-settings}

Antes de começar a rastrear suas viagens, você precisa configurar corretamente o **plugin de Gravação de Viagem** para um desempenho ideal.

- **Configurações específicas do perfil**. Cada perfil no aplicativo pode ter suas próprias configurações exclusivas de Gravação de Viagem. Isso permite que você personalize precisamente o comportamento de gravação com base em sua atividade, como dirigir, andar de bicicleta ou até mesmo caminhada nórdica, que podem exigir configurações diferentes.

- **Personalizar parâmetros de gravação**. As configurações de gravação podem variar dependendo de como você se move. Por exemplo, dirigir longas distâncias pode exigir uma frequência de gravação menor, enquanto caminhar ou andar pode se beneficiar de atualizações mais frequentes.

- **Dados de localização precisos**. Para garantir que suas gravações sejam suaves e utilizáveis para uso futuro, você pode personalizar a forma como captura os pontos de localização. Isso pode incluir ajustar a frequência de gravação, o formato de seus dados (como o número de pontos por unidade de distância) ou o espaçamento entre os pontos gravados.

- **Configurações globais**. As configurações de Gravação de Viagem são configuradas por perfil, que você pode gerenciar nas [configurações](../personal/global-settings.md) globais do aplicativo. Antes de personalizar o plugin de Gravação de Viagem, selecione o perfil que deseja configurar na seção [perfis](../personal/profiles.md). A partir daí, navegue até as configurações do perfil para acessar as opções de Gravação de Viagem.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurando a Gravação de Viagem no Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configurando a Gravação de Viagem no Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurando a Gravação de Viagem no iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configurando a Gravação de Viagem no iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parâmetro | Descrição |
|---|---|
| **Diálogo de otimização de bateria** (*Android*) | Abre as [configurações de otimização de bateria do Android](#battery-optimization). Toque em *Não perguntar mais* se você não quiser ser solicitado novamente. |
| **Mostrar diálogo de início** (*Android*) | Ativa um diálogo onde você pode configurar as configurações antes de iniciar a gravação. Se desativado, a gravação inicia automaticamente. |
| **Gravar trilha automaticamente durante a navegação** | Grava automaticamente a trilha durante a navegação e a salva na guia *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Nota*: A gravação de trilhas consome bateria e continua em execução em segundo plano, mesmo com a tela desligada. |
| **Intervalo de registro geral** | Define a frequência com que os pontos de localização são registrados. O padrão é 5 segundos. É ativado com o *widget de gravação de viagem*. |
| **Deslocamento mínimo** | Um filtro para evitar a gravação de pontos quando há pouco ou nenhum movimento. Ajuda a reduzir o ruído dos dados.<ul><li>*Efeitos colaterais*: Períodos de descanso podem não ser registrados, e pequenos movimentos podem ser ignorados. Isso pode reduzir os dados de pós-processamento, mas também pode impedir que erros de GPS sejam registrados.</li><li>*Recomendação*: Defina o deslocamento para 5 metros se você quiser menos detalhes menores em suas gravações.</li></ul> |
| **Precisão mínima** | Filtra pontos de localização abaixo de um limite mínimo de indicação de precisão, conforme relatado pelo dispositivo.<ul><li>*Efeitos colaterais*: Pontos em áreas com sinal fraco (sob pontes, árvores, entre edifícios ou em algumas condições climáticas) podem estar ausentes.</li><li>*Recomendação*: Se não tiver certeza, pode ser melhor desativar este filtro para evitar a perda de dados.</li></ul><details><summary>*Observação*</summary>Suponha que o GPS foi desligado pouco antes da gravação. Nesse caso, o primeiro ponto medido pode ter precisão reduzida, então é melhor esperar um pouco antes de gravar o ponto ou gravar o melhor de 3 pontos consecutivos.</details> |
| **Velocidade mínima** | Define um limite para ignorar pontos registrados abaixo de uma certa velocidade.<ul><li>*Efeitos colaterais*: Seções onde a velocidade cai abaixo de um limite especificado não serão gravadas.</li><li>*Recomendação*: Use o filtro *Deslocamento mínimo* em vez disso, pois ele pode dar melhores resultados sem perder dados importantes.</li></ul><details><summary>*Observação*</summary>Tente usar a detecção de movimento via filtro de deslocamento mínimo de registro (B) primeiro, ele pode produzir melhores resultados e você perderá menos dados. Se suas trilhas permanecerem ruidosas em baixas velocidades, tente valores não nulos aqui. Observe que algumas medições podem não relatar nenhum valor de velocidade (alguns métodos baseados em rede), caso em que você não gravaria nada.<br/><br/>Verificação de velocidade > 0: A maioria dos chipsets GPS relata um valor de velocidade apenas se o algoritmo determinar que você está em movimento, e nenhum se você não estiver. Portanto, usar a configuração > 0 neste filtro, de certa forma, usa a detecção de movimento do chipset GPS. Mas mesmo que não seja filtrado aqui no momento da gravação, ainda usamos esse recurso em nossa análise GPX para determinar a Distância corrigida, ou seja, o valor exibido nesse campo é a distância registrada enquanto em movimento.</details> |
| **Gravações de divisão automática após lacuna** | Divide automaticamente as trilhas com base em lacunas de tempo entre os pontos gravados. <ul><li>Um novo segmento começa após uma lacuna de 6 minutos.</li><li>Uma nova trilha começa após uma lacuna de 2 horas.</li><li>Um novo arquivo começa quando a data muda.</li><li>Lacunas podem resultar de perda de sinal GPS, baixa velocidade ou configurações de configuração.</li></ul><details><summary>*Observação*</summary>Uma lacuna é identificada quando nenhum ponto é registrado. Isso pode acontecer porque a localização não é detectada ou porque é detectada, mas não registrada. Vários fatores podem causar isso, incluindo sinais GPS fracos devido a condições climáticas adversas, ou a velocidade do movimento caindo abaixo do limite configurado. Nesses casos, mesmo que o dispositivo possa detectar a localização, ele não a registra.<br/><br/>Essas lacunas nos dados registrados podem acionar a criação de um novo segmento dentro da mesma trilha, uma nova trilha no mesmo arquivo ou um novo arquivo GPX dentro de uma gravação. Isso é gerenciado dentro de uma única sessão de gravação de início/parada.</details> |
| **Impedir registro autônomo** (*Android*) | Pausa a gravação da trilha quando o aplicativo OsmAnd é encerrado (via *aplicativos recentes*). A indicação em segundo plano não é exibida no painel de notificações do Android. |
| **Incluir rumo** | Registra o rumo (direção do movimento) para cada ponto no arquivo GPX. O rumo é a direção para a qual o dispositivo está virado, o que pode diferir da direção do movimento devido a fatores externos como vento ou derrapagem. |
| **Atividade** | A opção permite pré-selecionar um [tipo de atividade](../map/tracks/track-context-menu.md#track-information-activity) para um perfil, que é então automaticamente aplicado a todas as trilhas gravadas. |
| **Sensores externos** <br/> *Precisa de plugin ativado* | Dados de [sensores externos](../plugins/external-sensors.md#trip-recording) como *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, ou *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* são registrados no arquivo GPX. Dados de *Distância* não são gravados no Android ou iOS. Exibido apenas quando o [plugin de Sensores Externos](../plugins/external-sensors.md) está ativado. |
| **Métricas do Veículo** (*Android*) <br/> *Precisa de plugin ativado* | Dados do [scanner OBD-II](../plugins/vehicle-metrics.md#trip-recording) são registrados no arquivo GPX. Exibido apenas quando o [plugin de Métricas do Veículo](../plugins/vehicle-metrics.md) está ativado.<br />*Nota*: Você pode adicionar quais métricas gravar no arquivo GPX da lista: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Pasta de armazenamento de trilhas** (*Android*) | Define onde, na guia *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*, as trilhas gravadas são armazenadas. As opções incluem armazenar todas as trilhas na pasta Rec ou organizá-las por mês, como Rec/aaaa-mm. |
| **Notificação** | Controla a exibição de uma [notificação de gravação de viagem](#notifications) do sistema na área de notificação do dispositivo que permite iniciar a gravação de viagens. |
| **Rastreamento online** (*Android*) | Permite o rastreamento em tempo real de sua localização, enviando pontos gravados para uma URL especificada. O intervalo de rastreamento determina a frequência com que os pontos são enviados, e o buffer de tempo armazena pontos quando não há conexão com a Internet.<details><summary>*Observação*</summary>Se esta opção estiver ativada e a gravação da trilha estiver em andamento, o widget Distância/Iniciar-Parar (REC) ficará **verde** em vez de **vermelho**, indicando que cada ponto gravado está sendo transmitido para uma URL especificada. O campo **Endereço Web** permite que você insira a URL usando o seguinte formato de parâmetro:<ul><li>`lat={0}`: Latitude</li><li>`lon={1}`: Longitude</li><li>`timestamp={2}`: Carimbo de data/hora (tempo Unix)</li><li>`hdop={3}`: Diluição horizontal de precisão</li><li>`altitude={4}`: Altitude</li><li>`speed={5}`: Velocidade</li><li>`bearing={6}`: Rumo (direção do movimento)</li><li>`eta={7}`: Tempo estimado de chegada (tempo Unix)</li><li>`etfa={8}`: Tempo estimado para o primeiro ponto intermediário ou ponto final (tempo Unix)</li><li>`eda={9}`: Distância estimada para chegada ou um marcador (em metros)</li><li>`edfa={10}`: Distância estimada para o primeiro ponto intermediário ou ponto final (em metros)</li></ul>Você pode definir o **Intervalo de Rastreamento** para especificar a frequência com que os pontos de localização são enviados, com opções que variam de 0 segundos a 5 minutos. Além disso, o parâmetro **Buffer de Tempo** determina por quanto tempo os pontos de localização são armazenados se não houver conexão com a Internet, garantindo que os dados sejam salvos e transmitidos quando a conexão for restaurada.</details> |
| **Trilhas** | Uma referência rápida para a pasta onde as trilhas são salvas na guia *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Redefinir configurações do plugin para o padrão** | Redefine todas as configurações de gravação de viagem para o perfil atual para seus padrões. |
| **Copiar de outro perfil** (*Android*) | Copia as configurações de gravação de viagem de um perfil para outro. |


### Otimização de Bateria {#battery-optimization}

<InfoAndroidOnly />

![Trilha no mapa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Trilha no mapa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Este recurso permite gerenciar as configurações de otimização de bateria para o OsmAnd, a fim de garantir acesso ininterrupto à sua localização, mesmo quando o aplicativo é executado em segundo plano durante a navegação ou gravação de trilhas.

- **Configurações de otimização de bateria**. Abre as configurações do Android, onde você pode modificar as preferências de economia de bateria para o OsmAnd. [Mais detalhes aqui](../troubleshooting/general.md#optimizing-battery-consumption).
- **Não perguntar novamente**. Descarta a caixa de diálogo permanentemente, para que não apareça novamente.
- **Fechar**. Fecha temporariamente a caixa de diálogo, que aparecerá novamente na próxima vez que a otimização de bateria precisar de atenção.


### Notificações {#notifications}

![Notificação de Gravação de Viagem](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Se a [Notificação](#recording-settings) estiver ativada nas configurações do plugin, as notificações de gravação de viagem serão sempre exibidas na área de notificação do sistema quando a gravação estiver ativa. Esta notificação garante que o processo de gravação não seja interrompido pelo sistema e não pode ser desativada durante uma gravação ativa.

- A área de notificação é aberta quando você desliza para baixo a partir da parte superior da tela e fecha quando desliza para cima. Essas mensagens o notificam sobre ações como iniciar/parar a gravação de viagem, especialmente quando a gravação automática está ativada durante a navegação.
- As notificações permanecem visíveis independentemente de o aplicativo estar em primeiro plano, em segundo plano ou fechado. Você pode limpar manualmente a notificação antiga se ela não for mais necessária, mas isso não interromperá a gravação em andamento.

**Nota importante**.

Este comportamento é exigido pelo Android para que qualquer serviço em primeiro plano, como a gravação de viagem, permaneça visível para você.

- Se a notificação for removida, o Android interromperá automaticamente a gravação. Você pode usar a configuração [Impedir registro autônomo](#recording-settings).
- A configuração **Notificação** no OsmAnd afeta se a barra de notificação mostra um atalho para iniciar uma gravação quando nenhuma gravação está ativa. Ela **não** controla a visibilidade da notificação durante uma gravação ativa.

**Opções adicionais do Android**.

![Notificação de Gravação de Viagem](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- Em ***Configurações do Android → Notificações e barra de status → Notificações da tela de bloqueio***, você pode remover o OsmAnd da lista de aplicativos para evitar que as notificações apareçam na tela de bloqueio, evitando a ativação acidental da tela. Isso não afetará a gravação da trilha. As notificações ainda aparecerão na área de notificação regular.
- O **OsmAnd** também pode aparecer em ***Privacidade → Permissões Especiais → Ligar tela***. Se você quiser impedir que a tela ligue quando uma notificação aparecer, tente remover o OsmAnd desta lista.

<!--
- OsmAnd não está listado em **Privacidade** *→* **Permissões Especiais** → **Alarmes e lembretes**.
-->

**Notificação de distintivo**.

![Notificação de Gravação de Viagem](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

O distintivo do ícone do aplicativo aparece ao lado do ícone do OsmAnd quando a gravação da trilha está ativa.

- Este ícone desaparece quando a gravação da trilha é concluída. Para verificar se uma gravação está ativa, você pode ir para *Menu → Meus Lugares → Guia Trilhas* ou tocar no widget para gerenciar a gravação.
- Se não houver gravação em andamento e o distintivo ainda for exibido, isso pode significar que uma mensagem do OsmAnd foi deixada no painel de notificações do dispositivo.
- Para desativar os distintivos nas configurações do Android, vá para *Configurações do dispositivo → Aplicativos → OsmAnd → Notificações* e desative a opção de exibição de distintivo para este aplicativo.


## Widgets {#widgets}

Os widgets permitem exibir informações chave sobre a gravação da trilha diretamente na tela, como *Distância*, *Duração*, *Subida* e *Descida*.

Para começar a usar os *widgets de Gravação de Viagem*, você precisa fazer todas as seguintes configurações:

1. [Ativar o plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurar as configurações de gravação de viagem para o [perfil](../personal/profiles.md) necessário.
3. Adicionar os **widgets de Gravação de Viagem** necessários à tela. Observe que esta configuração é **específica para cada perfil**.


### Adicionar Widget de Gravação {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="map_widget_monitoring"/>*

![Adicionando widget de Distância/Iniciar-Parar no Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Escolha um painel → <Translate android="true" ids="map_widget_monitoring"/>*

![Adicionando widget de Distância/Iniciar-Parar no iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

O [widget de Gravação de Viagem](../widgets/info-widgets.md#trip-recording-widgets) oferece uma maneira fácil de monitorar o status da sua gravação e acessar rapidamente as configurações e detalhes da gravação. Este widget é adicionado automaticamente à sua tela quando o plugin de Gravação de Viagem é ativado.

Para personalizar sua interface, você pode adicionar ou remover o widget de Gravação de Viagem e [outros widgets](../plugins/trip-recording#duration-uphill-downhill) através do menu Configurar Tela.


### Distância (Iniciar-Parar) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget de gravação de viagem](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Finalizar gravação no Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de gravação de viagem](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget de gravação de viagem](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Quando os widgets são exibidos no mapa, tocar em qualquer um deles revela detalhes adicionais da trilha e permite a interação com a gravação.
O widget *Distância* exibe a distância total da sua viagem atual gravada e atua como a interface principal para gerenciar suas gravações. Tocar nele revela o [diálogo de Gravação de Viagem](#start-a-dialog), onde você pode iniciar, parar e visualizar informações detalhadas sobre sua trilha.

- O widget é adicionado automaticamente quando o *plugin de gravação de viagem* é ativado, mas pode ser ocultado através do [menu Configurar tela](../widgets/configure-screen.md#configure-screen-menu).
- Se a opção *Mostrar diálogo de início* estiver desativada nas configurações do plugin de Gravação de Viagem, tocar no widget ativo ainda abrirá a caixa de diálogo *Gravação de Viagem*, permitindo que você acesse outras opções e informações.

Além do widget *Distância/Iniciar-Parar*, o **plugin de Gravação de Viagem** inclui outros três widgets: *Duração*, *Subida* e *Descida*. Estes fornecem informações adicionais sobre sua viagem, ajudando você a acompanhar o progresso em tempo real.

| |
|-----------|
| **Distância/Iniciar-Parar**. Este widget exibe a distância da sua gravação de viagem em andamento. Ele é adicionado automaticamente quando o plugin de Gravação de Viagem é ativado, mas você pode ocultá-lo através do menu Configurar Tela. O widget possui três estados distintos: *Gravando*, *Pausado* e *Inativo*, cada um indicando o status atual da sua gravação de viagem. |
| ![Widget de gravação de viagem (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Para abrir o [diálogo de Gravação de Viagem](#start-a-dialog) ao tocar em um widget inativo, ative a opção *Mostrar Diálogo de Inicialização* nas configurações do plugin de Gravação de Viagem. Se a opção estiver desativada, a gravação começará imediatamente após tocar no widget, sem abrir o diálogo.|


### Duração, Subida, Descida {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Duração**. Exibe o tempo total da gravação da viagem atual em horas e minutos. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Subida**. Mostra o ganho de elevação cumulativo para a gravação da viagem atual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Descida**. Indica a descida total acumulada durante a gravação da viagem atual. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

Se você tiver vários widgets selecionados — *Duração*, *Subida* ou *Descida* — você pode acessar a mesma caixa de diálogo para cada um sem precisar alternar ou fechá-la. Esta interface unificada facilita a visualização e o gerenciamento de todas as informações relacionadas de forma contínua.


## Artigos Relacionados {#related-articles}

- [Menu de contexto do mapa](../map/map-context-menu.md)
- [Mostrar trilha no mapa](../map/tracks/index.md)
- [Analisar no mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menu de contexto da trilha](../map/tracks/track-context-menu.md)
- [Navegação por trilha](../navigation/setup/gpx-navigation.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

- A Gravação de Viagem não inicia.
    - Certifique-se de que o **plugin de Gravação de Viagem** esteja ativado: *Menu → Plugins → Gravação de Viagem → Ativar*.
    - Verifique se as configurações estão corretas: *Menu → Configurar Perfil → Configurações do Plugin → Gravação de Viagem*.
    - Se a gravação ainda não iniciar, reinicie o aplicativo e tente novamente.

- A Gravação de Viagem para inesperadamente.
    - Verifique se as *configurações de otimização de bateria* do seu dispositivo estão interrompendo a gravação. Alguns dispositivos podem pausar a atividade em segundo plano para economizar energia. Vá para *Configurações do Dispositivo → Bateria*.

- A distância gravada não corresponde à distância real.
    - Verifique se o GPS está ativado e tem um sinal ativo.
    - Reduza o limite de precisão do GPS: *Menu → Configurar Perfil → Gravação de Viagem → Precisão Mínima*.

- Trilhas Gravadas estão Ruidosas. [(verificar)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Trilhas Gravadas Têm Lacunas. [(verificar)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Como Rastrear a Distância Percorrida. [(verificar)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Para solução de problemas adicionais, visite: [Solução de Problemas de Gravação de Trilhas](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Última atualização: Janeiro de 2025*