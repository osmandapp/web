---
source-hash: b83a46b082181d9f4c5b16b74c868c131e880e2aad3256067a77098bd5c9ae01
sidebar_position: 3
---

# KML Tracks - .kml, .km {#kml-tracks---kml-km}

No GoogleEarth (GE), você pode adicionar seus próprios Marcadores no mapa e agrupá-los em uma pasta. No GE, você pode salvar a pasta no formato KML. Se você tiver um formato diferente, pode usar o QGIS ou outro software de código aberto para converter para o formato KML. Talvez você possa convertê-lo diretamente para OSM. Você pode usar qualquer formato contendo seus POIs, se conseguir convertê-lo para o formato OSM. Você pode formatar KML para GPX [aqui](https://kml2gpx.com/).

## Suporte nativo {#native-support}
O OsmAnd não suporta KML nativamente, mas o OsmAnd pode importar alguns deles. Durante o processo de importação, o arquivo será transformado em GPX e posteriormente será tratado como [OsmAnd GPX](osmand-gpx).

## Convertendo KML (ou Outros Formatos) para o Formato OSM {#converting-kml-or-other-formats-into-the-osm-format}

Para realizar esta tarefa, precisamos usar o gpsbabel. É muito útil para converter waypoints, trilhas e rotas entre receptores GPS populares e programas de mapeamento. A sintaxe é muito simples, e o GPS Babel tem uma interface para criar a sintaxe para você:

```
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
```

O arquivo gerado se parece com isto:

```
<?xml version='1.0' encoding='UTF-8'?>
<osm version='0.5' generator='GPSBabel-1.4.0'>
  <node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    <tag k='name' v='place01'/>
    <tag k='note' v='place01'/>
    <tag k='tourism' v='museum'/>
  </node>
  <node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    <tag k='name' v='place02'/>
    <tag k='note' v='place02'/>
    <tag k='tourism' v='museum'/>
  </node>
</osm>
```

Todos os pontos dentro do arquivo KML são convertidos em pontos OSM, atribuindo-lhes algumas propriedades como categoria de turismo e tipo de museu. A opção `created_by=` com valor ausente significa que as propriedades serão ignoradas. Se o seu POI pertencer a diferentes categorias, sugiro que você crie vários arquivos OSM e crie arquivos OBF do OsmAnd e os mescle posteriormente com o OsmAndMapCreator, ou crie vários arquivos OBF.

## Convertendo o Formato OSM para o Formato OBF {#converting-osm-format-into-obf-format}

Agora você está pronto para realizar o passo final. A conversão será feita usando o OsmAndMapCreator. Baixe, descompacte e execute este programa.
- Desmarque todas as opções, exceto Build POI Index, conforme mostrado:
- Selecione o diretório de trabalho (File/Specify working directory…)
- Carregue my_places.osm (File/Select osm file…)

Se tudo estiver correto, você encontrará My\_places.obf na sua pasta de trabalho. Basta carregar este arquivo na pasta de trilhas do OsmAnd do seu dispositivo.