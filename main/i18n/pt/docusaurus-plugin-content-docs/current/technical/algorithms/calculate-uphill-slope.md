---
source-hash: 6f725a1fadd0a2c5cd2626f8424f87e2e54b060d0b683fd33a90f9426413a826
sidebar_position: 5
---

# Cálculo de subida / descida / inclinação {#calculation-of-uphill--downhill--slope}

O OsmAnd usa diferentes algoritmos para calcular a **inclinação** e a **subida** com base em dados de satélite SRTM incorporados em mapas offline e em trilhas GPX gravadas.

O objetivo principal de calcular a **subida** é fornecer informações relevantes sobre quanta **energia extra** é gasta ao subir, obviamente isso depende de múltiplos fatores como veículo ou meio de transporte, superfície, peso da pessoa e outros.
Assim, no final, a **subida** deve ser um parâmetro levado em consideração pelo roteamento baseado em elevação, para produzir um roteamento energeticamente eficiente.

O objetivo principal de calcular a **inclinação** é ter uma indicação visual de quais estradas íngremes precisam ser evitadas.

## Subida / Descida {#uphill--downhill}

Existem muitos problemas para calcular a **subida** porque não há um padrão e, como depende do meio de transporte e de muitos outros parâmetros, é difícil fornecer um controle razoável ao usuário para que não seja muito complicado. Geralmente, a subida é comparada a outros programas, mas não há um programa que tenha um padrão ouro.

O OsmAnd usa um algoritmo de 3 etapas:

- Filtrar dados ruidosos.
- Encontrar extremos locais (mínimos e máximos).
- Calcular a soma das diferenças entre mínimo e máximo.

Algumas trilhas contêm muitos dados ruidosos que precisam ser filtrados primeiro. Por enquanto, aplicamos a filtragem a todas as trilhas, mas trilhas preparadas, como as construídas pela ferramenta Planejar Rota, ferramenta de Navegação ou após a correção SRTM, a filtragem não deve ter nenhum efeito.

### Filtrar inclinação de 70% {#filter-70-slope}

A filtragem é baseada na localização de **pontos extremos** que são significativamente mais altos ou mais baixos do que 1 ponto vizinho à esquerda e 1 ponto vizinho à direita no gráfico.
Esses **pontos extremos** são excluídos de cálculos posteriores. O ```limiar``` é [inclinação de 70%](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L11) - [código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L72).

**Exemplo 1**. (todos os pontos distribuídos por 10m), elevação - [5, 3, 10, 3, 5]. 10 é um ponto extremo: porque é 10 > 3 (inclinação de 70%).

**Exemplo 2**. (todos os pontos distribuídos por 10m), elevação - [5, 3, 10, 13, 15]. 10 não é um ponto extremo: porque 10 > 3 mas 10 < 13, então é um pico local.

### Filtrar pontos saltitantes {#filter-jumping-points}

Pontos que representam colinas locais ```/\``` são filtrados, isso leva a um problema de que o ponto mais alto e o mais baixo serão sempre filtrados, mas permite lidar com trilhas ruidosas onde a gravação não era frequente, então a primeira verificação com inclinação extrema não funciona. Referência ao [código](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationApproximator.java#L49).

**Exemplo 1**. Elevação - [5, 3, 10, 3, 5] -> [5, 5].

**Exemplo 2**. Elevação - [5, 6, 10, 7, 5] -> [5, 6, 7, 5].

**Exemplo 3**. Elevação - [5, 2, 3, 4, 5] -> [5, 3, 4, 5].

### Encontrando extremos {#finding-extremums}

Para encontrar extremos, o algoritmo [Rames-Dougals-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) é usado. Não é absolutamente bom para encontrar exatamente extremos em um gráfico aleatório, mas no cálculo de altitude, evita muitos pequenos picos aleatórios que podem acontecer durante uma longa subida e algumas descidas curtas imperceptíveis entre elas.

O principal objetivo do algoritmo é encontrar o número mínimo de linhas retas que poderiam representar o gráfico de altitude. O ```limiar``` é **[7 metros](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd-java/src/main/java/net/osmand/gpx/ElevationDiffsCalculator.java#L13)**. Assim, todos os picos com mais de 7 metros de diferença serão detectados em superfícies planas e não serão detectados se forem menores.

Os extremos são exibidos no gráfico como pontos azuis com o plugin de desenvolvimento OsmAnd ativado.

**Exemplo 1**. Elevação - [0, 0, 10, 0, 0]. **Extremo** é 10.

**Exemplo 2**. Elevação - [0, 1, 5, 4, -3, -2, -1, 0]. **Nenhum extremo** - todos com menos de 7 metros de diferença.

### Calcular subida / descida entre extremos {#calculate-uphill--downhill-between-extremums}

Por exemplo, se você tem uma trilha simples que sobe e desce, você tem apenas 1 máximo em seu caminho, então a
```
Diferença de elevação inicial = <elevação inicial> - <elevação extrema> :
Diferença de elevação final = <elevação extrema> - <elevação final> : se positivo - **subida**, se negativo - **descida**
```

1. Se *Diferença de elevação inicial* > 0
  - **subida** = *diferença de elevação inicial*
  - **descida** = *diferença de elevação final*

2. Se *Diferença de elevação final* > 0
  - **subida** = *diferença de elevação final*
  - **descida** = *diferença de elevação inicial*

Mais exemplos serão adicionados.

## Correção de altitude SRTM {#altitude-srtm-correction}

Existem 2 alternativas que podem ser usadas no OsmAnd para obter correção de altitude.

1. Abra a trilha no OsmAnd Android e encontre, *Editar Trilha → Opções → Correção de Altitude*
1.1 **Online** processará a trilha via servidor e dados do OsmAnd.
1.2 **Offline** processará a trilha no dispositivo se os arquivos geotifs 3D forem baixados.
2. Abra o site https://osmand.net/map e carregue a trilha e veja a elevação SRTM.

## Inclinação {#slope}

O gráfico verde é calculado de forma diferente da subida / descida e pode ter pequenas variações. Em teoria, em todos os **extremos**, o gráfico verde deve **cruzar a linha 0**, embora todos os pontos de inclinação 0 sejam extremos.

Para calcular a inclinação, todos os dados são divididos em etapas iguais de 20 metros. Para cada ponto dessa grade, a altitude média ao redor do ponto (raio de 10 metros) é calculada. Em seguida, a derivada discreta é calculada usando [Diferença central finita](https://en.wikipedia.org/wiki/Finite_difference).