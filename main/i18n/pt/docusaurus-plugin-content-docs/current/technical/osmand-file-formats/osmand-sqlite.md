---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Formato SQLite de Blocos - .sqlite {#tiles-sqlite-format---sqlite}

O formato SQLite usado no OsmAnd é baseado no SQLite "BigPlanet", conforme suportado pelo MOBAC. No OsmAnd, adicionamos várias tabelas que estendem o formato:

|Tabela|Coluna|Especificação e Finalidade|
|:----|:-----|:---------------|
|"info"|"url"|String. Modelo de URL para baixar blocos com zoom ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, nome do servidor ≣ `{rnd}`|
||"randoms"|String. Os nomes dos espelhos do servidor. Separados por vírgulas. Um desses valores substituirá aleatoriamente o espaço reservado `{rdn}` no campo "url".|
||"referer"|String. HTTP Referer. Conforme usado para download.|
||"rule"|String. Modelo suportado: 1 (igual a vazio), wms_tile, yandex_traffic. Adiciona algoritmos específicos de como os blocos serão baixados. wms_tile usa um servidor proxy como whoots.mapwarper.net para lidar com fontes WMS.|
||"useragent"|String. HTTP User Agent. Conforme usado para download.|
||"minzoom"|Inteiro. Nível de zoom mínimo. Inteiro respectivo. (Também invertido no caso de BigPlanet).|
||"maxzoom"|Inteiro. Nível de zoom máximo. Inteiro respectivo. (Também invertido no caso de BigPlanet).|
||"ellipsoid"|Inteiro 0 ou 1. 1 para Mercator Elíptico (blocos Yandex). 0 para Mercator Web Esférico regular (OSM, Google Maps).|
||"inverted\_y"|Inteiro 0 ou 1. 1 para número de bloco Y invertido (blocos Nakarte.me).|
||"timecolumn"|String "yes" ou "no". Uma tabela de blocos com uma coluna "time" indica quando cada bloco foi recuperado.|
||"expireminutes"|Inteiro. Especifica se os blocos devem expirar após o número de minutos fornecido. Eles ainda seriam exibidos, mas também seriam baixados novamente.|
||"tilenumbering"|String "" ou "BigPlanet". Se "BigPlanet", o zoom será invertido e calculado como z = 17 - zoom.|
||"tilesize"| Inteiro. Vazio ou 256 ou 512, opcional, é usado para descrever o tamanho do bloco|
|"tiles"|"x", "y", "z"|Inteiro. Indica as coordenadas Mercator do bloco. Observe que o zoom pode ser invertido para o caso BigPlanet.|
||"image"|Blob de bytes de imagem.|
||"time"|Inteiro. Carimbo de data/hora quando a imagem foi baixada.|

Este formato também é usado pelos arquivos Hillshade e Slope distribuídos pelo aplicativo OsmAnd.

A classe que suporta isso é SQLiteTileSource em ou perto de [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).