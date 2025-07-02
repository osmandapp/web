---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Estilo de Renderização de Mapa - .render.xml {#map-rendering-style---renderxml}


Caso você queira modificar o estilo de renderização padrão, você precisa verificar a [definição no GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml). Você encontrará todos os tipos de estilos neste [link](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), então se você for criar seu próprio estilo, poderá encontrar o exemplo mais fácil.

Caso você decida criar seu estilo de renderização personalizado, talvez precise criar [seus próprios mapas](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) para adicionar a exibição de recursos personalizados.

## Seções de estilo de mapa {#map-style-sections}

O arquivo de estilo de mapa consiste em várias seções.

| Seção | Descrição |
|---------|-------------|
| **Cabeçalho** | Consiste em `name` (nome do estilo), `defaultColor` (a cor padrão do mapa pode ser substituída pelo atributo defaultColor) e `depends` (herda todas as propriedades do estilo pai). |
| **Parâmetros** | Definido como `<renderingProperty>` tem `attr` que será usado no estilo como um nome de parâmetro e `name`, `description` serão exibidos para o usuário. |
| **Atributos** e **constantes** | Definidos como `<renderingAttribute>` e como `<renderingConstant>` permite reutilizar os mesmos blocos de estilos de renderização para diferentes objetos de mapa | 
| Seção de **ordem** | Definido como um bloco [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Cada objeto de mapa é pesquisado na seção de ordem para saber se será renderizado como ponto, linha ou polígono (`objectType`) e em qual `order` deve ser exibido. **Parâmetros de pesquisa** (entrada): `tag`, `value`, `zoom`, `point` (verdadeiro ou falso), `area` (tipo osm), `cycle` (ponto inicial e final são os mesmos). **Resultado da pesquisa** (saída): `objectType` (ponto = 1, linha = 2, polígono = 3), `order` (0-255). A ordem de renderização é definida como: polígonos, sombras de linha, linhas, pontos. Se a `order` for a mesma para polígonos, os polígonos são exibidos do maior para o menor. Nota: os polígonos não devem se sobrepor parcialmente, caso contrário o comportamento não é definido. |
| Seção de **texto** | Definido como um bloco [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Cada objeto de mapa exibido é pesquisado para saber se deve exibir o texto e como deve ser exibido. **Parâmetros de pesquisa** (entrada): `tag`, `value`, `zoom`, `nameTag` (cada tag de texto é verificada). **Resultado da pesquisa** (saída): `textOnPath`, `textMinDistance` (margem entre os mesmos textos, ou seja, nomes de ruas, referências), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (nome extra entre parênteses, se presente), `textShield` (fundo ao redor do texto), `icon` (ícone em vez de texto), `textItalic`, `textWrapWidth`, `intersectionMargin` (margem extra para não sobrepor o texto). |
| Seção de **ponto** | Definido como um bloco [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Cada objeto de mapa de ponto exibido (definido na seção `order`) é pesquisado nesta seção para determinar como deve ser exibido. **Parâmetros de pesquisa** (entrada): `tag`, `value`, `zoom`, `e`. **Resultado da pesquisa** (saída): `shield` (escudo de ícone), `icon`, `iconVisibleSize` (espaço extra para não aglomerar ícones), `iconOrder`, `intersectionSizeFactor`. |
| Seção de **polígono** | Definido como um bloco [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Cada objeto de mapa de polígono exibido (definido na seção `order`) é pesquisado nesta seção para determinar como deve ser exibido. **Parâmetros de pesquisa** (entrada): `tag`, `value`, `zoom`. **Resultado da pesquisa** (saída): `color` (cor para preencher o polígono), `shader` (preencher polígono com o mesmo ícone), `color_2, color_N` (cor do traço ao redor do polígono), `strokeWidth_2` (largura do traço), `pathEffect_2`, `cap_2`. |
| Seção de **linha** | Definido como um bloco [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Cada objeto de mapa de linha exibido (definido na seção `order`) é pesquisado nesta seção para determinar como deve ser exibido. 1 objeto de linha pode ser renderizado como várias linhas combinadas até -2 camadas abaixo e até 7 camadas acima. **Parâmetros de pesquisa** (entrada): `tag`, `value`, `zoom`, `nameTag` (cada tag de texto é verificada). **Resultado da pesquisa** (saída): `color, color_*` (cor do traço ao redor do polígono), `strokeWidth, strokeWidth_*` (largura do traço), `pathEffect, pathEffect_*` (efeito de caminho), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (sombra ao redor da linha). |


## Seletores de recursos do mapa {#map-feature-selectors}
Para determinar quais atributos devem ser recuperados do estilo de renderização, o seguinte procedimento de pesquisa é concluído:
- Encontre o `<case>` mais interno que corresponde aos parâmetros de entrada de pesquisa `tag/value/zoom`, ou seja, para `highway=primary` - `<case tag="highway" value="primary">` será encontrado.
- Todos os internos de `<case>` são aplicados sequencialmente em profundidade e os parâmetros de saída são coletados
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - a saída será 2 caso `zoom=15` e a saída será 1 caso contrário.    
- Verificado se `<case>` faz parte de qualquer `<switch>` e, se sim, todos os `apply` e `apply_if` desse switch também serão avaliados

Regras de avaliação:
- Em cada 'case', `apply_if`, `switch`, `apply` os atributos de entrada são verificados para corresponder (avaliar como verdadeiro), caso contrário a seção é ignorada e os atributos de saída não são coletados.
- Todas as regras são avaliadas sequencialmente e os parâmetros de saída podem ser substituídos pelas regras seguintes
- `additional=?` é um atributo de entrada especial que verifica tags adicionais do objeto
- Os parâmetros de estilo do mapa são parâmetros de pesquisa de entrada, bem como `tag/value/zoom`
    - Exemplo: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Parâmetros de entrada: nightMode, streetLightingNight; parâmetros de saída - shield.


## Atributos (especiais) e Constantes {#attributes-special--constants}
Constantes de renderização e atributos de renderização são intercambiáveis e podem ser usados para simplificar o estilo de renderização e evitar copiar/colar valores ou blocos de código. Caso um atributo como `color` seja um único valor, é **preferível** usar uma **constante de renderização** porque isso acelera muito o desempenho do estilo de renderização.

As constantes de renderização podem ser usadas apenas com um determinado valor: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` e, posteriormente, nos seletores de recursos como `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Os atributos de renderização podem ter uma estrutura incorporada com seletores extras e gerar um dos seguintes atributos (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Exemplo:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Atributos especiais {#special-attributes}

Atributos especiais são `<renderingAttribute >` que não são usados por seletores, mas usados diretamente pelo código para consultar um recurso específico que é desenhado no aplicativo, como uma rota de navegação, régua, trilha gpx, etc.


| Atributo especial | Descrição |
|-------------------|-------------|
| `measureDistanceLine` | Renderização de linha para o recurso Planejar Rota | 
| `markerGuideline`, `markerPlanRouteline` | Renderizando linhas para os marcadores |
| `route` | Renderizando uma rota de navegação | 
| `gpx` | Renderizando uma trilha GPX |
| `publicTransportLine` | Renderizando uma rota de navegação de transporte público | 
| `walkingRouteLine` | Renderizando uma navegação de transporte público: rota de pedestres entre paradas | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Como renderizar o widget Régua de Raio e medir a distância por toque | 
|||
| `defaultColor` | Cor padrão para preencher o mapa (alterna modo noturno/diurno) |
| `shadowRendering` | Interno como renderizar sombra com Skia |
||| 
| `routeInfo_*` | Exemplo: `routeInfo_surface`, `routeInfo_roadClass` produzem classes de estradas a serem exibidas na legenda da rota. | 
|||
| `polygonMinSizeToDisplay` | Internos como renderizar linhas pequenas e polígonos pequenos | 
| `roadDensityZoomTile` | Internos como renderizar linhas pequenas e polígonos pequenos |
| `roadsDensityLimitPerTile` | Internos como renderizar linhas pequenas e polígonos pequenos |
| `defaultSymbolPathSpacing` | Internos como renderizar linhas pequenas e polígonos pequenos |
| `defaultBlockPathSpacing` | Internos como renderizar linhas pequenas e polígonos pequenos |
| `globalPathPadding` | Internos como renderizar linhas pequenas e polígonos pequenos |
|||
| `debugTextDisplayBBox` | Atributos para depurar renderização e posicionamento de texto | 
| `debugTextDisplayShieldBBox` | Atributos para depurar renderização e posicionamento de texto |
| `debugTextDoNotFindIntersections` | Atributos para depurar renderização e posicionamento de texto |
| `debugTextDoNotFindIntersectionsSameName` | Atributos para depurar renderização e posicionamento de texto |
| `debugTextDisplayShortRoadNames` | Atributos para depurar renderização e posicionamento de texto |

## Parâmetros de estilo de mapa {#map-style-parameters}

Os parâmetros de estilo de mapa permitem combinar vários estilos de renderização dentro de uma definição de arquivo, ou seja, não há necessidade de ter um 'my_custom_style_night_mode.render.xml' separado, é possível definir um parâmetro como `night_mode` (habilitado por padrão) e personalizar certas regras (como cores) usando este parâmetro. Mais tarde, na interface do usuário, é possível alternar facilmente esse parâmetro e ter um estilo de mapa diferente no OsmAnd.

Aqui está uma definição do parâmetro `baseAppMode`. `possibleValues` são os valores que serão exibidos na interface do usuário do OsmAnd, `category` auxilia na categoria da interface do usuário à qual esta propriedade pertence.
```
<renderingProperty attr="baseAppMode" name="Default Rendering mode" description="Map optimization for respective User Profile based on base (parent) profile"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Mais tarde, no estilo de seleção, você pode especificar quando este seletor pode ser aplicado, ou seja, para qual modo de aplicativo especificado pelo usuário
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Number of roads to display per tile -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Então, se o usuário selecionar `moreDetailed=true`, o valor de saída para densidade será `55` e se `baseAppMode=pedestrian` (outro parâmetro) será `40`, caso contrário 60.