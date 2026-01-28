---
source-hash: 369df83f8be5a3b6691d0197bb0f13c18822041d0ff5344d4ae6bb2462efa39d
sidebar_position: 5
---

import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuração de Roteamento - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml é um arquivo de configuração que armazena múltiplos perfis de roteamento. Cada perfil é independente e tem apenas o perfil base do OsmAnd como referência, por isso não é possível criar uma hierarquia de perfis e você precisará copiar todas as seções de regras. Cada um é totalmente configurável via routing.xml, o que significa que não há constantes no código e todas as penalidades são calculadas usando esta configuração.

No aplicativo, você pode usar múltiplos arquivos routing.xml personalizados e perfis que você pode selecionar em Configurações -> Perfil -> Configurações de Navegação -> Configurações de Roteamento.

Por favor, verifique a documentação dentro de routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalidades de dados de elevação {#penalties-of-elevation-data}


Dependendo do [modo selecionado (Menos montanhoso, Plano, Montanhoso) de roteamento baseado em bicicleta](../../user/navigation/routing/bicycle-based-routing.md) e da inclinação física (%) da estrada, uma penalidade calculada a partir da diferença de altura é adicionada a cada metro horizontal.

A penalidade 1:2 atribui um fator de custo de 2.0 a uma inclinação de 3%. Consequentemente, um segmento de subida de 1 km (custo 2.0) é equiparado a um segmento plano de 2 km, mas é preferido a qualquer desvio plano que exceda 2 km.

**Tabelas e gráficos de penalidades de roteamento de bicicleta:**

|                  **Opção**                 |**Inclinação:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|            |  -  |   -  |  -  |   -  |   -  |   -   |
|**_Plano_** (o mais longo, mas fácil)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            
|**_Menos montanhoso_** (padrão, equilibrado)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |     
|**_Montanhoso_** (mais difícil)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 | 

<img src={require('@site/static/img/technical/bicycle_incline.png').default} alt="Gráfico de Inclinação de Bicicleta" />


|                  **Opção**                 |**Declínio:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|------|------|------|------------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|            |   -  |   -  |   -  |     -      |
|**_Plano_** (o mais longo, mas fácil)            |            | 1:6.4| 1:25 | 1:25 | impossível |
|**_Menos montanhoso_** (padrão, equilibrado)         |            | 1:6.4| 1:25 | 1:25 | impossível |
|**_Montanhoso_** (mais difícil)                 |            | 1:6.4| 1:25 | 1:25 | impossível |

<img src={require('@site/static/img/technical/bicycle_decline.png').default} alt="Gráfico de Declínio de Bicicleta" />

<!--
|                  **Option**                 |**Incline:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Decline:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Disabled/Any_** (the shortest but hardest)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Less hilly_** (default, balanced)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Flat_** (the longest but easy)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossible |
|**_Hilly_** (more difficult)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossible |
-->


Dependendo do [modo selecionado (Menos montanhoso, Plano, Montanhoso) de roteamento de pedestres](../../user/navigation/routing/pedestrian-routing.md) e da inclinação física (%) da estrada, uma penalidade calculada a partir da diferença de altura é adicionada a cada metro horizontal.

**Tabelas e gráficos de penalidades de roteamento de pedestres:**

|                  **Opção**                 | **Inclinação:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | 
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|              |  -  |  -  |  -  |   -  |   -  |   -   |
|**_Plano_** (o mais longo, mas fácil)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |      
|**_Menos montanhoso_** (padrão, equilibrado)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |  
|**_Montanhoso_** (mais difícil)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |

<img src={require('@site/static/img/technical/pedestrian_incline.png').default} alt="Gráfico de Inclinação de Pedestre" />

|                  **Opção**                 | **Declínio:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|------|------|------|-------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|              |  -  |   -  |   -  |   -  |   -   |
|**_Plano_** (o mais longo, mas fácil)            |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Menos montanhoso_** (padrão, equilibrado)         |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Montanhoso_** (mais difícil)                 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |

<img src={require('@site/static/img/technical/pedestrian_decline.png').default} alt="Gráfico de Declínio de Pedestre" />

<!--
|                  **Option**                 | **Incline:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Decline:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Disabled/Any_** (the shortest but hardest)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Less hilly_** (default, balanced)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Flat_** (the longest but easy)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Hilly_** (more difficult)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |
-->