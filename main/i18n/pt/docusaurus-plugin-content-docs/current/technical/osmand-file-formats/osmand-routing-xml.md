---
source-hash: 9a57e167f8c6266f28b4788f50b92e7a169d7f2af0bccb7d225582142c315b68
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Configuração de Roteamento - .routing.xml {#routing-configuration---routingxml}

<IncompleteArticle/>

Routing.xml é um arquivo de configuração que armazena múltiplos perfis de roteamento. Cada perfil é independente e tem apenas o perfil base do OsmAnd como referência, por isso não é possível criar uma hierarquia de perfis e você precisará copiar todas as seções de regras. Cada um é totalmente configurável via routing.xml, o que significa que não há constantes no código e todas as penalidades são calculadas usando esta configuração.

No aplicativo, você pode usar múltiplos arquivos routing.xml personalizados e perfis que você pode selecionar em Configurações -> Perfil -> Configurações de Navegação -> Configurações de Roteamento.

Por favor, verifique a documentação dentro de routing.xml:

- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Outros exemplos https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


### Penalidades de dados de elevação {#penalties-of-elevation-data}


Dependendo do [modo selecionado (Menos montanhoso, Plano, Montanhoso) de roteamento baseado em bicicleta](../../user/navigation/routing/bicycle-based-routing.md) e da inclinação física (%) da estrada, uma penalidade calculada a partir da diferença de altura é adicionada a cada metro horizontal.

A explicação dada como 3% 1:2 significa que uma rota plana de 2 km será preferida a uma rota de 3% 1 km, embora a rota de 3% 1 km será preferida a uma rota plana de 2,5 km.

**Tabela de penalidades de roteamento de bicicleta:**

|                  **Opção**                 |**Inclinação:**| &lt;1% | &lt;3%  | &lt;7% | &lt;13% | &lt;25% | &gt;=25% |**Declínio:**| &lt;17% | &lt;35% | &lt;60% | &gt;=60%      |
|:--------------------------------------------|:-----------|-----|------|-----|------|------|-------|:-----------|------|------|------|------------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|            |  -  |   -  |  -  |   -  |   -  |   -   |            |   -  |   -  |   -  |     -      |
|**_Menos montanhoso_** (padrão, equilibrado)         |            |     |  1:2 | 1:8 | 1:16 | 1:32 | 1:48  |            | 1:6.4| 1:25 | 1:25 | impossível |
|**_Plano_** (o mais longo, mas fácil)            |            |     |  1:2 | 1:12| 1:30 | 1:50 | 1:74  |            | 1:6.4| 1:25 | 1:25 | impossível |
|**_Montanhoso_** (mais difícil)                 |            | 1:61|1:19.7|1:7.5|  1:3 | 1:0.5| 1:0.3 |            | 1:6.4| 1:25 | 1:25 | impossível |


Dependendo do [modo selecionado (Menos montanhoso, Plano, Montanhoso) de roteamento de pedestres](../../user/navigation/routing/pedestrian-routing.md) e da inclinação física (%) da estrada, uma penalidade calculada a partir da diferença de altura é adicionada a cada metro horizontal.

**Tabela de penalidades de roteamento de pedestres:**

|                  **Opção**                 | **Inclinação:** | &lt;1% | &lt;3% | &lt;7% | &lt;13% | &lt;25% | &gt;=25% | **Declínio:** | &lt;9% | &lt;17% | &lt;35% | &lt;60% | &gt;=60% |
|:--------------------------------------------|:-------------|-----|-----|-----|------|------|-------|:-------------|-----|------|------|------|-------|
|**_Desativado/Qualquer_** (o mais curto, mas o mais difícil)|              |  -  |  -  |  -  |   -  |   -  |   -   |              |  -  |   -  |   -  |   -  |   -   |
|**_Menos montanhoso_** (padrão, equilibrado)         |              |     | 1:1 | 1:4 | 1:8  | 1:10 | 1:15  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Plano_** (o mais longo, mas fácil)            |              |     | 1:2 | 1:12| 1:30 | 1:50 | 1:74  |              | 1:5 | 1:10 | 1:17 | 1:25 | 1:40  |
|**_Montanhoso_** (mais difícil)                 |              | 1:61| 1:20| 1:7 | 1: 3 | 1:0.5| 1:0.3 |              |  1:5| 1:10 | 1:17 | 1:25 | 1:40  |