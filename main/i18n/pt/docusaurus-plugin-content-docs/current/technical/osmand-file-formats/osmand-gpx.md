---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# GPX do OsmAnd {#osmand-gpx}

## Introdução {#introduction}

GPX (GPS Exchange Format) é um padrão baseado em XML amplamente utilizado para armazenar dados de GPS, incluindo trilhas, rotas e pontos de passagem. O OsmAnd suporta o formato GPX para importar, exportar e personalizar dados de GPS para navegação, permitindo que usuários iniciantes e avançados otimizem sua experiência.

#### O que torna o GPX do OsmAnd único? {#what-makes-osmand-gpx-unique}

O OsmAnd estende o formato GPX 1.1 padrão introduzindo seu próprio namespace XML `osmand:`. Este namespace permite armazenar dados adicionais, como:

- Configurações visuais da trilha (cor, largura, setas).
- Agrupamento e ícones de pontos de passagem.
- Atributos detalhados da rota, incluindo rotas calculadas e tipos de atividade.

#### O que você aprenderá neste guia? {#what-will-you-learn-in-this-guide}

Este artigo fornece uma visão geral abrangente da estrutura e dos recursos do arquivo GPX no OsmAnd. Você aprenderá:

1. Como personalizar trilhas e pontos de passagem usando tags GPX.
2. Recursos avançados, como descrições HTML, dados de sensores e tipos de atividade.
3. Como exportar rotas calculadas e preservar sua funcionalidade completa.
4. Convertendo arquivos GPX para o formato OBF para armazenamento otimizado e recursos de pesquisa avançados.

#### Visão geral da estrutura GPX {#gpx-structure-overview}

Os arquivos GPX no OsmAnd organizam os dados hierarquicamente nos seguintes elementos:

- `<gpx>` - o elemento raiz do arquivo.
- `<trk>` - representa trilhas, que contêm:
  - `<trkseg>` - segmentos da trilha, que são ainda divididos em `<trkpt>` (pontos da trilha).
- `<rte>` - representa rotas, incluindo pontos de passagem e pontos-chave.
- `<wpt>` - representa pontos de passagem individuais.


## Personalização de trilhas {#track-customization}

### Parâmetros de aparência da trilha {#track-appearance-parameters}

Esta seção descreve como o OsmAnd exibe trilhas no mapa e as opções de personalização disponíveis para ajustar sua aparência. Os parâmetros descritos abaixo são aplicados dentro da tag `<gpx>` e afetam todas as trilhas incluídas em um arquivo GPX.

| Nome da tag | Descrição / Valores |
|:----------------------------------------|:---------|
| `<color>` | - Define a cor da linha da trilha no mapa. <br/> - *String:* Código de cor HEX `#RRGGBB` ou `#AARRGGBB` |
| `<width>` | - Especifica a largura da linha da trilha. <br/> - *String:* `“thin”`, `“medium"`, `“bold”` (definido pelo atributo `“currentTrackWidth”`), ou inteiro (1-24) |
| `<show_arrows>` | - Habilita ou desabilita setas de direção ao longo da trilha. <br/> - *Booleano:* `"true"` / `"false"` |
| `<show_start_finish>` | - Mostra ou oculta marcadores para o início e o fim da trilha. <br/> - *Booleano:* `"true"` / `"false"` |
| `<split_type>` | - Especifica o tipo de segmentação para a trilha. <br/> - *String:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Define o intervalo para a segmentação da trilha com base no tipo selecionado. <br/> - *Duplo:* Inteiro (metros para `"distance"`, segundos para `"time"`) |
| `<line_3d_visualization_by_type>` | - Especifica o tipo de visualização 3D para a trilha. <br/> - *String:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Define o tipo de cor da parede para visualização 3D. <br/> - *String:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - Define a posição da visualização 3D em relação à trilha. <br/> - *String:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - Multiplicador para escalar o valor do atributo `line_3d_visualization_by_type`. <br/> - *Float:* Padrão: 1.0 |
| `<elevation_meters>` | - Especifica uma elevação fixa em metros para `"fixed_height"` em `<line_3d_visualization_by_type>`. <br/> - *Float:* Padrão: `1000` |
| `<coloring_type>` | - Determina o método de coloração para a trilha. <br/> - *String:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - Especifica o esquema de cores para a trilha. <br/> - *String:* `"default"` / [esquemas definidos pelo usuário](/docs/user/personal/color-palette-schemes) |

***Exemplo:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### Tag 'coloring_type' {#tag-coloringtype}

A tag `<coloring_type>` no OsmAnd permite aos usuários personalizar a coloração da trilha com base em atributos de dados específicos, fornecendo uma maneira visual de interpretar informações-chave ao longo da trilha.

| Tipo | Descrição | Caso de uso |
|:-----------------------|:--------|:--------|
| `<solid>` | A trilha inteira é exibida com uma única cor sólida especificada pela tag `color`. | Use quando uma cor uniforme for necessária para visibilidade clara. |
| `<speed>` | A trilha é colorida em um gradiente com base nos valores de velocidade em cada ponto da trilha (`<trkpt>`). Velocidades mais altas são representadas por cores distintas. | Ideal para atividades como ciclismo ou direção para visualizar mudanças na velocidade. |
| `<altitude>` | A trilha é colorida de acordo com os dados de elevação em cada `<trkpt>`. Um gradiente é aplicado, indicando diferentes faixas de altitude. | Útil para caminhadas ou rotas de montanha para destacar mudanças de altitude. |
| `<slope>` | A trilha é colorida com base na inclinação/declínio entre pontos de trilha consecutivos. Gradientes positivos indicam subidas, enquanto gradientes negativos indicam descidas. | Adequado para ciclistas ou caminhantes que analisam a dificuldade da trilha. |
| `<routeInfo_roadClass>` | Colore os segmentos da trilha com base na classificação de estradas do OpenStreetMap (OSM) (por exemplo, rodovia, rua residencial). | Ajuda a distinguir entre diferentes tipos de estradas ao seguir uma rota. |
| `<routeInfo_surface>` | Colore os segmentos da trilha com base no tipo de superfície do OSM (por exemplo, pavimentado, cascalho, terra). | Útil para determinar as condições da trilha durante atividades como off-road. |
| `<routeInfo_smoothness>` | Colore a trilha de acordo com as classificações de suavidade do OSM, indicando a rugosidade ou suavidade do caminho (por exemplo, excelente, ruim). | Útil para avaliar a navegabilidade da trilha para veículos específicos. |

### Tags GPX na UI {#gpx-tags-in-ui}

As tags de extensão GPX são exibidas na parte inferior do menu de contexto da trilha.
Ambas as `<metadata>` e `<gpx>` `<extensions>` são listadas.
As tags de aparência são excluídas da listagem.
Suportado desde o OsmAnd Android 5.0.

## Personalização de pontos de passagem {#waypoints-customization}

Esta seção explica como o OsmAnd permite a personalização de pontos de passagem em arquivos GPX usando ícones, cores e agrupamento.

### Ícones de pontos de passagem {#waypoint-icons}

As seguintes tags controlam a aparência dos ícones de pontos de passagem no OsmAnd:

| Tag GPX | Padrão | Finalidade |
|:-------------|:----------|:-----------|
| `<icon>` | *(nenhum)* | Especifica o ícone para o ponto de passagem (por exemplo, `historic_castle`). |
| `<color>` | `"red"` | Define a cor do ícone usando um código HEX (por exemplo, `#FF0000`) ou nome da cor (por exemplo, `"blue"`). |
| `<background>` | `"circle"` | Define a forma do plano de fundo do ícone. Valores possíveis: `"circle"`, `"square"`, `"octagon"`. |

***Exemplo:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### Grupos de pontos de passagem {#waypoint-groups}

Os pontos de passagem no OsmAnd podem ser classificados em grupos com base em seu tipo. Esse agrupamento permite ao usuário organizar vários pontos de passagem em categorias específicas, melhorando a clareza e a legibilidade do mapa.

- **Definição do grupo de pontos.** A tag `<type>` dentro do elemento `<wpt>` especifica o grupo do ponto (por exemplo, `"castle"`, `"aqueduct"`).
- **Configuração do grupo.** A extensão `<osmand:points_groups>` no elemento `<gpx>` define as configurações para cada grupo, incluindo o `name`, `color`, `icon` e `background` para todos os pontos de passagem nesse grupo.

***Exemplo:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## Recursos avançados do GPX {#advanced-gpx-features}

### Tipo de atividade {#activity-type}

A partir da [versão 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) do OsmAnd, você pode classificar suas trilhas por tipo de atividade para análise e organização em pastas.

A lista de tipos de atividade suportados está disponível no arquivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Cada atividade é identificada por seu `ID` exclusivo e armazenada nas extensões `<metadata>` do arquivo GPX.


***Exemplo:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML em descrições {#html-in-descriptions}

Tags HTML podem ser usadas dentro das tags `<desc>` nos elementos `<metadata>` ou `<wpt>` para fornecer descrições formatadas para trilhas ou pontos de passagem.

Para evitar conflitos com a sintaxe XML, substitua os caracteres especiais da seguinte forma:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Exemplo:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        O primeiro parágrafo será exibido como descrição &lt;b&gt;breve&lt;/b&gt;.
        As tags HTML são removidas em descrições breves.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Segundo parágrafo&lt;/h3&gt;
        &lt;b&gt;Olá, mundo!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***Notas importantes:***

- O OsmAnd remove todas as tags HTML ao gerar descrições breves, deixando texto simples.
- Você pode usar tags como `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` e outras para personalização.


### Tag de link {#link-tag}

Use a tag `<link>` para associar URLs a metadados, informações do autor ou pontos de passagem em arquivos GPX do OsmAnd. Esta tag também pode exibir uma imagem quando a URL aponta para um arquivo de imagem.

***Exemplos (Link de metadados com imagem):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>Logotipo do OsmAnd</text>
  </link>
</metadata>
```

***Exemplos (Link de ponto de passagem com imagem):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Tags de dados do sensor {#sensor-data-tags}

Você pode enriquecer suas trilhas com dados de sensores de fitness, como monitores de frequência cardíaca ou sensores de temperatura. O OsmAnd usa o esquema [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) da Garmin para armazenar esses dados, tornando-o compatível com plataformas como **Strava** e **Garmin Basecamp**.

*Tags de dados do sensor suportadas:*

- **hr** - frequência cardíaca (em batimentos por minuto).
- **cad** - cadência da bicicleta (em rotações por minuto).
- **atemp** - temperatura ambiente (em graus Celsius).
- **power** - potência de saída da bicicleta (em watts).

***Exemplo:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### Detalhes do ponto da trilha {#track-point-details}

Cada `<trkpt>` (ponto da trilha) no arquivo GPX pode incluir atributos adicionais para capturar dados como velocidade, rumo e elevação.

*Atributos suportados:*

- **speed** - velocidade no ponto da trilha (em metros por segundo).
- **heading** - direção do movimento (0-359 graus).
- **ele** - elevação acima do nível do mar (em metros).
- **time** - carimbo de data/hora para o ponto da trilha.

***Exemplo:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## Rotas calculadas {#calculated-routes}

No **OsmAnd**, você pode calcular rotas e salvar todos os dados em GPX, para que posteriormente todos os recursos de navegação estejam disponíveis como navegação GPX em execução, de modo que o GPX do **OsmAnd** conterá segmentos de rota, curvas, nomes de ruas, tipos de ruas, restrições, etc. A rota pode ser completamente restaurada como se tivesse acabado de ser construída, mesmo na ausência dos respectivos mapas offline.

Um arquivo gpx pode conter várias rotas. Cada uma delas está contida em um segmento específico em **trkseg** / **extensions**. Um arquivo gpx é salvo neste formato ao exportar uma rota construída ou ao salvar uma trilha que consiste em vários segmentos separados através da funcionalidade [**Planejar uma rota**](../../user/plan-route/create-route.md).

[**Planejar uma rota**](../../user/plan-route/create-route.md) também adiciona um (ou vários, de acordo com o número de segmentos/trilhas separadas contidas) blocos **rte** ao arquivo gpx, contendo pontos-chave da rota (**rtept**).

#### Estrutura Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Lista de pontos de segmento. A ordem dos pontos corresponde à ordem e comprimento dos segmentos da rota (<route><segment length="x" ... />).
    // O valor do atributo "length" corresponde ao número de pontos neste segmento da rota.
    <trkpt ... ></trkpt>
    <extensions>
      // Lista de segmentos de rota
      <route>
        <segment ... />
      </route>
      // Propriedades dos segmentos incluídos na rota.
      // Esses dados são retirados de mapas offline durante a construção inicial de uma rota.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Lista de pontos de rota intermediários. Se houver várias rotas, a ordem da lista rte corresponde à ordem dos segmentos da rota.
<rte>
  <rtept ... />
    // Para rotas construídas com o "Planejar rota", os parâmetros dos pontos-chave são salvos.
    // Se rtept não for o primeiro e o último, antes dele (com o mesmo idx) trkpt estará com os mesmos dados.
    <extensions>
      // Tipo de perfil de rota para o próximo segmento (carro, bicicleta, pedestre, etc.).
      <profile>...</profile>
      // O índice do ponto no segmento gpx que corresponde ao primeiro ponto da rota calculada para este segmento.
      // Se rtept não for o primeiro e o último, antes dele (com o mesmo idx) trkpt estará com os mesmos dados.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Propriedades importantes: {#important-properties}

* **trkpt_idx** do primeiro **rtept** em **trkseg** é 0. Assim, se houver dois **trkseg**s, haverá dois **rtept**s com **trkpt_idx** = 0
* **trkpt_idx** do último **rtept** em **trkseg** é igual ao número de **trkpt**s em **trkseg** menos 1. Por exemplo, se **trkseg** tiver 12 **trkpt**s, **trkpt_idx** do último **rtept** deve ser 11
* Os **segmentos** de rota vizinhos se sobrepõem: o final do **segmento** anterior e o início do próximo **segmento** são o mesmo **trkpt**.
* Há uma exceção quando os **segmentos** de rota vizinhos não se sobrepõem (não compartilham o mesmo **trkpt**). Isso acontece quando há um **rtept** "entre" os **segmentos** de rota. O final do **segmento** de rota anterior é um **trkpt**, e o início do próximo **segmento** de rota é outro **rtept**. Mas esses dois **trkpt**s são totalmente iguais por lat, lon e outros parâmetros.
* A sobreposição de **segmentos** de rota pode ser detectada via **length** e **startTrkptIdx** (o último é usado apenas para conveniência de leitura humana):
  - Se a soma de **startTrkptIdx** e **length** do **segmento** de rota anterior for igual a **startTrkptIdx** do próximo **segmento** de rota, os **segmentos** de rota não estão se sobrepondo
  - Se a soma for menor em um, então os **segmentos** de rota estão se sobrepondo
* Pode haver **segmentos** de rota retos. Eles são marcados com **id="-1"**. Eles podem aparecer em dois casos:
  - É uma rota multiprofilada, e o usuário selecionou uma linha reta
  - O usuário colocou **rtept** muito longe da estrada mais próxima, então o osmand fez uma linha reta entre **rtept** e a estrada
* trkpts = length - (segments - 1) + (rtepts - 2), onde:
  - trkpts - quantidade de **trkpt**s dentro de **trkseg**
  - length - soma de todos os **length**s dos **segmentos** de rota dentro de **trkseg**
  - segments - quantidade de **segmentos** de rota dentro de **trkseg**
  - rtepts - quantidade de **rtept**s pertencentes a **trkseg**

#### Exemplo: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Sex 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Sex 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## Coleções GPX em OBF {#gpx-collections-in-obf}

O OsmAnd permite converter vários arquivos GPX em um único arquivo OBF. Isso permite o armazenamento de milhares de trilhas GPX em um formato compacto e otimizado, mantendo recursos como ícones de mapa especiais, personalização da aparência da trilha e funcionalidade de pesquisa. Isso evita um limite de arquivos GPX locais grandes que normalmente não conseguem lidar com mais de 500 mil pontos no total, no entanto, alguns recursos de trilhas GPX podem estar ausentes em comparação com a exibição do arquivo OBF.

Etapas para converter GPX para OBF:

- Faça login no [Mapa Web do OsmAnd](https://osmand.net/map) *→ Trilhas → Selecione uma pasta → *Menu* (⋮) *→ Baixar como coleção OBF*

- O arquivo `<.obf>` resultante pode ser importado para o OsmAnd (requer OsmAnd Android 5.0+).


### Estilo da linha da trilha {#track-line-style}

Personalize as linhas da trilha com as seguintes tags:

| Tag GPX | Padrão | Finalidade |
|:--------------------------|:--------|:---------|
| `<name>` | *(nenhum)* | Nome exibido sobre a linha da trilha. |
| `color` | `red` | Cor primária (HEX ou texto). |
| `colour`, `displaycolor` | *(nenhum)* | Maneiras alternativas de substituir `color`. |
| `shield_waycolor` | *(nenhum)* | Substituição para a `color` da linha da trilha do escudo. |
| `translucent_line_colors` | `no` | Defina como `yes` para cores semi-transparentes. |
| `width` | `thin` | Largura da linha: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, ou `"roadstyle"` |

**Cores suportadas:** preto, azul, marrom, amarelo escuro, cinza, verde, azul claro, verde claro, laranja, roxo, vermelho, branco, amarelo.

***Exemplo:***

```xml
<gpx>
  <metadata>
    <name>
      Nome da trilha localizado em Metadados
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### Escudos da linha da trilha {#track-line-shields}

Escudos são ícones ou símbolos exibidos ao longo da linha da trilha. O OsmAnd suporta escudos [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), que podem incluir:

- Ícone de fundo - a forma principal (por exemplo, círculo ou quadrado).
- Ícones de primeiro plano - até dois símbolos menores sobrepostos ao fundo.
- Texto - descrições curtas ou identificadores, derivados das tags `shield_text` ou `ref`.

Se nenhuma propriedade de escudo for definida, o OsmAnd usa um escudo amarelo de tamanho automático para a trilha.

***Tags para escudos:***

| Tag GPX | Finalidade |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Define o ícone de fundo para o escudo. |
| `shield_fg` | Especifica o primeiro ícone de primeiro plano (por exemplo, uma seta ou ponto). |
| `shield_fg_2` | Especifica o segundo ícone de primeiro plano (opcional). |
| `shield_text` | Define o texto curto a ser exibido sobre o escudo (por exemplo, referência de rota). |
| `shield_textcolor` | Determina a cor do texto do escudo (opcional). |
| `shield_waycolor` | Substitui a cor padrão da trilha para a linha do escudo (opcional). |
| `ref` | Usado como texto de fallback se `shield_text` não for fornecido. |

***Exemplo:***

```xml
<gpx>
  <trk>
    <name>Exemplo de Rota</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### Exibição de pontos de passagem {#waypoints-display}

Os ícones de pontos de passagem podem ser personalizados com as seguintes tags:

| Tag GPX | Padrão | Finalidade |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(nenhum)* | Especifica o ícone para o ponto de passagem (usa ícones padrão do editor de pontos de passagem do OsmAnd). |
| `color` | `red` | Define a cor do ícone usando um código HEX (por exemplo, `#ffaa00`) ou um nome de cor suportado (opções limitadas). |
| `background` | `circle` | Define a forma do ícone. Valores suportados: `circle`, `square`, `octagon`. |

***Comportamento das formas de `background`:***

- `circle` - exibe o ícone com um fundo circular.
- `square` - exibe o ícone com um fundo quadrado, padronizando para vermelho se nenhuma cor for especificada.
- `octagon` - tratado como um fundo circular no OsmAnd.

**Cores suportadas para** `background=circle`: azul, cinza, verde, azul claro, verde claro, laranja, roxo, amarelo.

***Aprimoramentos com elementos adicionais:***

- Você pode adicionar descrições formatadas a pontos de passagem usando [código HTML](#html-in-descriptions). Isso permite incluir texto estilizado, links ou até mesmo imagens.
- Os pontos de passagem podem exibir imagens vinculadas usando [Link-as-Image](#link-tag).

***Exemplo:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### Pesquisar por nome e referências {#search-by-name-and-refs}

Trilhas e pontos de passagem podem ser localizados usando uma variedade de tags GPX.

| Tag GPX | Localização | Finalidade |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | O nome principal da trilha GPX. |
| `ref` | `<extensions>` GPX | Um identificador curto, frequentemente derivado da tag `ref` do OSM. |
| `shield_text` | `<extensions>` GPX | Texto exibido em escudos (também pode ser usado com `ref`). |
| `name_-_lang` | `<extensions>` GPX/WPT | `name:lang` localizado (por exemplo, `name_-_en` para inglês, substituir `:` -> `_-_`) |
| `<name>` | `<wpt>` | O nome do ponto de passagem. |

***Exemplo:***

```xml
<gpx>
  <metadata>
    <name>Trilha do Patrimônio de Xemxija</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>O Apiário Romano</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### Pesquisar por tipo de atividade {#search-by-activity-type}

O OsmAnd organiza as trilhas em arquivos OBF em **Grupos de Atividades** e **Tipos de Atividades**. Essas classificações ajudam você a filtrar trilhas como POIs ou criar filtros de pesquisa baseados em atividades.

Como os tipos de atividade funcionam:

- Os tipos e grupos de atividade são determinados usando o `"id"` e as `"tags"` do arquivo [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- O OsmAnd usa as tags `osmand:activity` ou `osmand:route` para classificar atividades em arquivos GPX.


| Tag GPX | Localização | Finalidade |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Tag principal do OsmAnd para armazenar o tipo de atividade (ID). |
| `osmand:route` | `<extensions>` GPX | Maneira alternativa do OSM de definir o tipo de atividade. |


***Exemplos de organização de trilhas por tipo de atividade:***

1. Isso classificará a trilha no grupo **Motociclismo** com o tipo **Motociclismo Off-Road (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Isso organizará a trilha no grupo **Ciclismo** com o tipo **Mountain Biking**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Tags de informações de pesquisa {#search-information-tags}

Os arquivos OBF geram e armazenam automaticamente estatísticas e análises críticas de trilhas.

| Tag OBF | Finalidade |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Distância total percorrida por todos os segmentos da trilha. |
| `start_ele`, `ele_graph` | Dados de elevação do GPX, encapsulados em um array binário compacto. |
| `min_ele`, `avg_ele`, `max_ele` | Análise de elevação mínima, média e máxima. |
| `diff_ele_up`, `diff_ele_down` | Ganho e perda total de elevação ao longo da trilha. |
| `max_speed`, `avg_speed`, `min_speed` | Análise de velocidade da trilha, incluindo velocidade máxima, média e mínima. |
| `time_span`, `time_span_no_gaps` | Tempo total da trilha, com e sem contabilizar lacunas. |
| `time_moving`, `time_moving_no_gaps` | Tempo total em movimento, com e sem contabilizar lacunas. |

### Tags internas {#internal-tags}

Algumas tags GPX são usadas ou armazenadas indiretamente em arquivos OBF. Consulte [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) para obter detalhes sobre a implementação.

| Tag OBF | Finalidade |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | Um identificador exclusivo para o arquivo GPX, vinculando dados de Mapa e POI (formato: `/[A-Z]+[0-9]+/` por exemplo, `OSM12345`). |
| `route_type` | Identificador do grupo de atividades (`id`) derivado de `poi/activities.json` |
| `route_activity_type` | Identificador do tipo de atividade (dentro do grupo) (`id`) derivado de `poi/activities.json` |
| `name`, `ref`, `description` | Atributos localizáveis e pesquisáveis (`lang="true"` em tipos de POI) |
| `filename` | O nome do arquivo GPX original usado para gerar esta trilha. |
| `track_color` | Cor da trilha da seção do mapa derivada de `shield_waycolor`, `color`, `colour` ou `displaycolor` |
| `extensions_extra_tags` | Tags extras arbitrárias para `<gpx><extensions>` no formato JSON. |
| `metadata_extra_tags` | Tags extras arbitrárias para `<metadata><extensions>` no formato JSON. |
| `wpt_extra_tags` | Tags extras arbitrárias para pontos de passagem `<wpt><extensions>` no formato JSON. |
| `route_track_point` | Pontos de passagem do arquivo GPX usam este tipo em dados de POI. |
| `route_bbox_radius` | Especifica o raio padrão para pesquisar partes da trilha dentro da seção POI |
| `route_shortlink_tiles` | Especifica uma lista separada por vírgulas de blocos de link curto do OSM para acelerar a leitura de dados de geometria (opcional) |
| `route_segment_index` | Especifica um número ordinal do segmento de geometria que está vinculado a este ponto (opcional) |
| `route_name` | O nome da rota, usado por `searchPoiByName` interno (obsoleto) |