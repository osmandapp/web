---
source-hash: e0173be6fa81b710afb1b4b52c4268f63865918a50d504364df4f0d772bf2d39
title: Criando um Polígono de País
versions: '*'
---
**_Este artigo precisa ser revisado_**

Este artigo descreve como criar um polígono para um país ausente em geofabrik.de e como adicionar este polígono ao servidor de geração de mapas do OsmAnd.

## Introdução {#introduction}

O OsmAnd vem com muitos mapas para muitos países. A maioria dos mapas é criada a partir de mapas de "dados brutos" baixados de [geofabrik.de](http://download.geofabrik.de). A Geofabrik fornece esses mapas de dados brutos gratuitamente a todos e eles entregam serviços e produtos (comerciais) baseados nesses mapas.

A Geofabrik.de tem a estratégia de entregar mapas para os países que são solicitados por um grande número de usuários ou por seus clientes. Isso significa que alguns mapas nunca chegam à Geofabrik, pois simplesmente não há solicitações suficientes (ou nenhuma), como alguns países exóticos como as Seychelles ou o Burundi, etc.

## Processo do servidor {#server-process}
Devido a essa decisão estratégica da Geofabrik, o OsmAnd tem uma opção para gerar mapas para esses países e as ferramentas [OsmAndMapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip) e [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) são usadas para isso. Para o OsmAndMapCreator, este é um processo de três etapas:
- O OsmAndMapCreator precisa de um polígono que envolva a fronteira externa do país.
- O OsmAndMapCreator precisa do "mapa de dados brutos" do próximo nível superior que incorpora este país. Para o Burundi, isso significa que o OsmAndMapCreator precisa do mapa da África. Para a Renânia do Norte-Vestfália, isso significa que o OsmAndMapCreator precisa do mapa da Alemanha.
- O [Osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert) criará um mapa de "dados brutos" a partir do polígono, extraindo os dados do mapa do mapa "pai".
- O OsmAndMapCreator criará um mapa obf do OsmAnd com base no mapa de "dados brutos" intermediário gerado pelo osmconvert.

## Ações necessárias {#necessary-actions}
Dependendo da complexidade do polígono (gerado), esta cadeia completa de ações pode levar de 10 minutos a 2 horas no total.

### 1. Obtenha a relação OpenStreetMap do Nominatim {#1-get-the-openstreetmap-relation-from-nominatim}
- Vá para [nominatim.openstreetmap.org](https://nominatim.openstreetmap.org/)
- Preencha o nome do seu país
- Uma vez encontrado, clique no link "(detalhes)"
- Em Detalhes, role para baixo até "OSM: relação" e anote ou copie o número de ID da relação.

### 2. Gerar o polígono {#2-generate-the-polygon}
- Vá para [polygons.openstreetmap.fr](http://polygons.openstreetmap.fr/)
- Preencha (ou cole) o número de ID da "OSM: relação" que você recuperou do Nominatim para o país desejado no campo "Id of relation".
- Isso criará um polígono padrão, consistindo de 250 a 3500 nós (NPoints). O próprio polígono pode ser encontrado na coluna "poly".
- No caso de mais de 350 nós, você precisará simplificar o polígono. Quanto mais simples o polígono, mais rápido o mapa do país pode ser criado (claro, dependendo do conteúdo).

### 3. Simplificar o polígono {#3-simplify-the-polygon}
O número de Pontos de Nó (NPoints) precisa ser o menor possível para a criação mais rápida do mapa pelo OsmAndMapCreator. Como mencionado: No caso de mais de 350 pontos de nó, tente reduzi-los simplificando o polígono.
- No caso de mais de 350 nós, tente reduzi-los "brincando" com a variável X (na minha experiência, as outras não importam muito).
- Às vezes você obtém ótimos resultados (90 NPoints, 200 NPoints, 270 NPoints) e então você termina esta etapa. Às vezes você simplesmente não consegue ficar abaixo de 450 NPoints ou algo assim. Então você precisa aplicar mais etapas manuais.
- Salve seu polígono final em um arquivo. Use o nome padrão correto para ele, como france.poly. Mantenha os caracteres em minúsculas.

### 4. Modificação e simplificação adicionais do polígono {#4-further-modification-and-simplification-of-the-polygon}
- Abra o JOSM (baixe se necessário) e abra o arquivo de polígono que você criou (você fez uma cópia/backup do polígono original que você salvou?).
- Adicione um plano de fundo do menu "Imagens" e selecione o plano de fundo padrão "OpenStreetMap (Mapnik)".
- Remova manualmente os pontos de nó onde for possível. \*Nota:\* Mantenha o polígono o mais próximo possível da fronteira. Você precisa de alguma sobreposição, mas tente mantê-la abaixo de 2-5 quilômetros. A sobreposição em países será gerada duas vezes para cada país. Menos sobreposição significa menos tempo de renderização e erros de renderização. Em linhas costeiras e ao redor de ilhas, tente manter mais distância (20 quilômetros). Isso é amplamente aceito e o mar é "vazio" de qualquer maneira.
- Quando você tiver feito o melhor que pode, você pode salvar o polígono atualizado e corrigido. Como dito: tente obter o mínimo de pontos de nó possível, mas às vezes uma fronteira de país é tão complicada que você simplesmente precisa de mais pontos de nó para descrevê-la e para manter o polígono o mais próximo possível da fronteira: que assim seja.
- **Não carregue o polígono para o OSM**. O JOSM pedirá para você carregar seu trabalho para o OpenStreetMap. Não faça isso para esses polígonos, a menos que você saiba exatamente o que está fazendo. Quase todos os países do mundo já estão perfeitamente cobertos no OpenStreetMap (caso contrário, o nominatim não seria capaz de fornecer os detalhes sobre o país, e polygons.openstreetmap.fr não seria capaz de gerar o polígono com base no id da relação OSM).

### 5. Adicionando o polígono ao servidor OsmAnd {#5-adding-the-polygon-to-the-osmand-server}

Para poder fazer isso, você deve se registrar como usuário.

Para tornar a geração de mapas possível, são necessárias duas etapas:
- Adicionar o polígono à seção de dados do mapa
- Adicionar o país ao arquivo de dados que é usado para gerar os mapas obf do OsmAnd.

Adicionando o polígono à seção de dados do mapa
- Vá para o endereço web do servidor de desenvolvimento do OsmAnd em [https://github.com/osmandapp/](https://github.com/osmandapp/ "https://github.com/osmandapp/")
- Selecione a seção OsmAnd-misc.
- Selecione "fork" para criar seu próprio repositório pessoal.
- Crie um novo arquivo e copie seus dados de polígono para dentro. Salve o arquivo.
- Crie uma solicitação de pull.

Adicionar a criação do mapa à lista de lotes
- Vá para o endereço web do servidor de desenvolvimento do OsmAnd em [github.com/osmandapp](https://github.com/osmandapp/)
- Selecione a seção OsmAnd-tools.
- Selecione "fork" para criar seu próprio repositório pessoal.
- Em seu repositório pessoal, vá para a pasta obf-generation/regions.
- Selecione o arquivo indexes.xml e clique em editar.
- Adicione seu país no local relevante e salve o arquivo.
- Crie uma solicitação de pull.

## Criando seus próprios mapas pessoais a partir de um polígono {#creating-your-own-personal-maps-from-a-poly}

Você pode criar, por exemplo, polígonos de países, condados/províncias/estados, regiões e cidades.

Digamos que sua filha vai para Paris por alguns dias com uma amiga. Ela não está interessada em navegação, caminhada ou ciclismo (a menos que seja absolutamente necessário), mas ela quer saber onde ela está, para onde ir e onde encontrar os lugares interessantes (POIs). Além disso, ela tem um telefone pequeno (CPU de baixo custo, pouca memória) e um cartão SD pequeno (cheio de música). Então o mapa precisa ser o menor possível: tanto para armazenamento quanto para desempenho. Você pode, é claro, baixar o mapa para france\_ile-de-france.obf contendo Paris, mas você também pode gerar um mapa de Paris "personalizado".
- Deixe sua filha baixar o OsmAnd, ou melhor ainda: deixe-a comprar o OsmAnd+
- Obtenha o id da relação OSM para Paris do Nominatim.
- Obtenha o polígono (simplificado) para o id de Paris de polygons.openstreetmap.fr
- baixe ou compile [osmconvert](https://wiki.openstreetmap.org/wiki/Osmconvert)
- baixe o mapa de "dados brutos" de ile-de-france de geofabrik.de
- crie o mapa de dados brutos de Paris a partir do mapa de ile-de-france e do polígono de Paris como:
<pre>
$ osmconvert ile-de-france.osm.pbf -B=paris.poly --out-pbf > Paris.osm.pbf
</pre>
- Baixe o aplicativo OsmAndMapCreator de [download.osmand.net/latest-night-build/](http://download.osmand.net/latest-night-build/ "https://download.osmand.net/latest-night-build/")
- Crie seu mapa obf do OsmAnd a partir do mapa de dados Paris.osm.pbf usando o OsmAndMapCreator.