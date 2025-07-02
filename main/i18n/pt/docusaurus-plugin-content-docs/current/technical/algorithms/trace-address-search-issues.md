---
source-hash: 4127321256305d47dce48682c4990b76cec1e4db868aa211746d1c49c5418eb3
sidebar_position: 3
---

# Rastrear Problemas de Pesquisa de Endereços {#trace-address-search-issues}

## Endereço Encontrado na Cidade Errada {#address-found-in-the-wrong-city}

Em alguns casos, uma pesquisa de endereço no OsmAnd pode retornar resultados para uma cidade diferente da esperada. Esses problemas surgem devido à forma como os limites da cidade são definidos e processados no OpenStreetMap (OSM). Se um usuário pesquisar um **nome de rua** ou uma **rua com um número de casa** sem especificar uma cidade, o **algoritmo de pesquisa de texto completo** pode retornar uma correspondência de outra cidade.

### Problemas Relacionados {#related-issues}

Casos de atribuições incorretas de cidades foram relatados nos seguintes problemas do GitHub:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).

## Como o OsmAnd Identifica os Limites da Cidade {#how-osmand-identifies-city-boundaries}

O OsmAnd determina o limite de uma cidade usando sua **relação administrativa** no OpenStreetMap. Para que um limite seja considerado válido, ele deve atender aos seguintes critérios:

- A **relação de limite** deve incluir as tags:
  - **boundary** = *administrative* ou *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- A relação de limite deve conter um **membro de relação**:
  - **label**
  - **admin_centre** ou **admin_center**
  
- O **nome da relação de limite** deve corresponder exatamente ao **nome do nó do local**.

- Se essas condições não forem atendidas, a relação de limite não será reconhecida como um limite de cidade.

- Entre os limites sobrepostos, o OsmAnd seleciona o **maior limite**.

- As **formas de relação** definem o limite. O OsmAnd suporta formas **internas** e **externas**.

## Correspondência Exata de Nomes {#exact-name-matching}

Para um processamento preciso de endereços, os **nomes das ruas devem corresponder exatamente**, incluindo:

- Diferenças em **marcas diacríticas** (por exemplo, *Rue André Chenier* vs. *Rue André Chénier*).
- Variações em **prefixos e abreviações**.

Se ocorrer uma incompatibilidade, um dos seguintes problemas pode surgir:

- A casa é **atribuída à rua errada**.
- A **mesma rua aparece várias vezes** em diferentes limites da cidade.

Consulte o problema do GitHub [10036](https://github.com/osmandapp/OsmAnd/issues/10036) para um exemplo.

## Possíveis Causas de Atribuições Incorretas de Cidades {#possible-causes-of-incorrect-city-assignments}

### Problemas no OpenStreetMap {#issues-in-openstreetmap}

1. **Limites de cidade quebrados ou ausentes.**

   - Se os limites da cidade estiverem incompletos, incorretos ou ausentes, as atribuições de endereço podem ser não confiáveis.
   - **Solução:** Siga o [guia de correção de limites do OSM](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
   - Exemplo: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **Os limites da cidade não se sobrepõem corretamente.**

   - Se uma rua pertence a duas cidades, mas é mapeada incorretamente, o OsmAnd pode não reconhecer a sobreposição.
   - **Solução:** Ajuste os limites da cidade no OpenStreetMap para garantir que eles englobem corretamente as ruas compartilhadas.

3. **Tags obrigatórias ausentes na relação de limite.**

   - Se uma relação não tiver tags essenciais, como **boundary=administrative** ou **place=city**, ela não será usada.
   - Exemplos:
     - Problema [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (tags ausentes).
     - Problema [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (problema de limite de *Erfstadt*).

### Problemas no OsmAnd {#issues-in-osmand}

**Endereços atribuídos a cidades vizinhas.**

- Cidades, vilas, aldeias ou subúrbios próximos podem **herdar endereços incorretamente** devido a sobreposições de limites ou limites ausentes.
- Isso é comum quando as cidades são divididas em áreas administrativas, mas não possuem relações OSM claramente definidas.
- Consulte relatórios relacionados: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).

## Métodos de Verificação {#verification-methods}

Para verificar e solucionar problemas de limites da cidade, compare os resultados de diferentes ferramentas de mapa.

### Usando o OpenStreetMap {#using-openstreetmap}

**Exemplo:** Endereço pesquisado: *Wolności 223, Zabrze*

1. Abra o OpenStreetMap (OSM).
2. Pesquise por **Zabrze** e selecione o resultado associado a um **limite administrativo**.
3. Visualize o limite da cidade para confirmar se o endereço está atribuído corretamente.

### Usando o Nominatim {#using-nominatim}

**Exemplo:** Endereço pesquisado: *Wolności 223, Zabrze*

1. Pesquise a **rua e o número da casa** sem especificar a cidade.
2. Se o resultado da pesquisa colocar o endereço em outra cidade, anote o nome da cidade sugerida.
3. Digite o **nome da cidade encontrada** no Nominatim.
4. Verifique o valor do **Rank do Endereço**:
   - Exemplo: *Wolności, Maciejów*
   - Se Maciejów estiver listado como *subúrbio/aldeia (rank 20)*, é uma divisão administrativa menor de outra cidade.

**Importante:** Tenha cuidado ao selecionar os resultados da pesquisa, pois cidades com nomes semelhantes podem existir em diferentes regiões ou países.

## Pesquisa de Endereços nos EUA e Dados TIGER {#us-address-search-and-tiger-data}

O OsmAnd usa dados do OpenStreetMap para pesquisas de endereço, com fontes de dados adicionais, como o **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** do U.S. Census Bureau. Este conjunto de dados é baseado em intervalos e não contém números de casa precisos. Alguns endereços podem estar ausentes ou imprecisos.

Solução de problemas com endereços nos EUA:

1. O endereço inserido é **dividido em componentes**: `[Número da Casa] [Nome da Rua]`, `[Cidade]`, `[Estado]`, `[CEP]`

2. O sistema **primeiro verifica o OSM** para uma correspondência exata com números de casa e ruas.

3. Se **nenhuma correspondência for encontrada** no OSM, o sistema pesquisa os dados TIGER, que incluem:
    - Nomes de ruas e classificações.
    - Intervalos de números de casa interpolados.
    - Limites administrativos.

4. Se um **número de casa estiver faltando**, o OsmAnd estima sua localização com base em dados próximos.

5. **Retornando resultados**:
    - Se o endereço existir no OSM, uma correspondência exata é exibida.
    - Se apenas dados TIGER estiverem disponíveis, um resultado aproximado é fornecido.
    - Se nenhuma das fontes contiver o endereço, a pesquisa falha.

#### Tipos de Dados de Endereço no TIGER {#types-of-address-data-in-tiger}

| Tipo de Dados TIGER            | Uso no OsmAnd    |
|----------------------------|--------------------|
| **Nomes de ruas**           | Usado para pesquisas baseadas em nomes. |
| **Intervalos de números de casa**    | Fornece locais de endereço aproximados. |
| **Códigos postais**              | Ajuda a associar endereços a áreas postais corretas. |
| **Limites administrativos** | Determina locais de cidade e estado. |

<br/>

#### Quando um Endereço é Encontrado vs. Não Encontrado {#when-an-address-is-found-vs-not-found}

| Cenário de Pesquisa     | Resultado no OsmAnd     |
|---------------------|----------------------|
| Endereço existe no OSM com número de casa e rua | ✅ Correspondência exata |
| Endereço existe no TIGER, mas não tem números de casa | ⚠️ Correspondência aproximada usando interpolação |
| Endereço existe no TIGER, mas contém dados incorretos | ⚠️ Correspondência parcial com erros |
| Endereço está ausente do OSM e do TIGER | ❌ Nenhum resultado |

#### Limitações dos Dados TIGER no OsmAnd {#limitations-of-tiger-data-in-osmand}

Vários fatores afetam a precisão das pesquisas de endereço no sistema baseado em TIGER:

- **Números de casa ausentes**. Muitos endereços no TIGER dependem de **interpolação**, levando a locais aproximados.
  
- **Nomes de ruas desatualizados**. Os nomes de ruas no TIGER podem não refletir as convenções de nomenclatura atuais no OSM.

- **Incompatibilidades de CEP**. Os limites no TIGER podem estar incorretos, causando atribuições de CEP incorretas.