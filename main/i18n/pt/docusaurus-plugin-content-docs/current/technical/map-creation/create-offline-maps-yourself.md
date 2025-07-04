---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Criar Mapas Raster e Vetoriais Offline
versions: '*'
intro: Com o OsmAndMapCreator, há muitas maneiras de criar e personalizar mapas Raster e Vetoriais para suas necessidades.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) pode ser usado para criar qualquer mapa suportado pelo OsmAnd. Você pode baixar a versão mais recente no [site](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). O OsmAndMapCreator possui recursos de interface do usuário para criar mapas raster e vetoriais. *Para criar um mapa vetorial, você precisará de um arquivo OSM (`*.pbf, *.osm.gz, *.osm.bz2`)* e *para criar um arquivo de mapa sqlite online, você precisará de uma `URL de bloco base`*.

### Mapas Raster (simples) {#raster-maps-simple}

Depois de selecionar os blocos dos quais você deseja criar um mapa no menu **Fonte de blocos** e eles terem sido carregados com sucesso no OsmAndMapCreator, você pode clicar com o botão direito do mouse na área que deseja pré-carregar. Depois disso, você pode criar o arquivo `.sqlitedb` em **Fonte de blocos** → **Criar banco de dados sqlite**.

Para criar um mapa vetorial, você precisará de um arquivo OSM (*.pbf, *.osm.gz, *.osm.bz2) e para criar um mapa sqlite online, você precisará da URL do bloco base.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Baixar mapas raster" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Criar mapas sqlitedb" />

### Mapas Vetoriais (simples) {#vector-maps-simple}

Etapas para criar um mapa vetorial via interface do usuário do OsmAndMapCreator:

1. Arquivo OSM
    - Baixe-o do [Geofabrik](https://www.geofabrik.de/data/download.html) ou uma pequena exportação do [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Converta [Shapefile para OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Gere [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) você mesmo usando quaisquer utilitários de programação, você pode prosseguir convertendo-o para [Formato OBF](../osmand-file-formats/osmand-obf.md) que o OsmAnd pode entender
2. Selecione as caixas de seleção se deseja produzir Mapas incluindo Endereço / Roteamento / Transporte / Dados do mapa
3. Selecione em **Arquivo** → **Criar .obf a partir do arquivo**.
4. Assim que o processo for concluído, você terá o arquivo `.obf` no diretório de trabalho.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Criar mapas vetoriais" />

Mais parâmetros sobre como gerar mapas vetoriais podem ser especificados no shell `utilities.sh`.

## Mapas vetoriais (script shell) {#vector-maps-shell-script}

A maneira mais típica e poderosa de criar mapas usada por desenvolvedores é por meio do script shell `utilities.sh` empacotado no OsmAndMapCreator. Ele também possui muitos outros métodos de utilitários para criar alguns mapas personalizados, como mapa base ou mapa com nomes e limites de região (regions.ocbf).

Exemplo de script:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

O script de geração leva apenas 1 arquivo OSM para processar por vez (.pbf, .osm.gz, osm.bz2, .osm) e muitos parâmetros opcionais especificados como `--xxxxxx`.

| Comando principal | Descrição |
|---|---|
| `generate-obf` | Gera obf completo com informações de mapa, endereço, POI, transporte, roteamento |
| `generate-obf-no-address` | Gera obf completo, mas sem informações de endereço |
| `generate-address` | Gera mapa com apenas informações de endereço |
| `generate-poi` | Gera mapa com apenas informações de POI |
| `generate-map` | Gera mapa com apenas informações de renderização de mapa |
| `generate-roads` | Gera mapa com apenas informações de roteamento |

Todos os parâmetros extras podem ser encontrados no código, caso não estejam documentados corretamente [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Todos os parâmetros são opcionais!

| Parâmetros | Descrição |
|---|---|
| `--add-region-tags` | Diminui o processo de criação do mapa adicionando a cada caminho uma tag de nome de região onde foi processado. É necessário apenas para mapa base mundial ou quando você processa regiões multinacionais, em todos os outros casos é mais fácil ter um nome adequado para seu arquivo, ou seja, germany_..., us_.... Se você não tiver este parâmetro e não especificar para adicioná-lo, é provável que você veja distintivos de rota de transporte público/rodoviário não localizados no OsmAnd. |
| `--keep-only-sea-objects` | Remove objetos que não fazem parte do oceano/mar, é usado para produzir mapa náutico |
| `--ram-process` | Especifica que a criação usará o DB SQlite RAM em vez do disco - [mais informações](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Especifica a pasta com imagens TIF-DEM, para que as informações sobre altura e inclinação sejam codificadas nas estradas |
| `--rendering-types=<FILE>` | Localização de rendering_types.xml com regras e tags OSM que precisam ser codificadas em OBF - [mais informações](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Localização de poi_types.xml com regras e tags OSM que precisam ser codificadas em OBF para POI - [mais informações](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | Arquivo OSM com polígonos como Zonas de Baixa Emissão cujas tags devem ser propagadas para os caminhos. |

**Nota**: A criação de mapas com batch.xml está obsoleta, use os métodos de shell mencionados acima e combine com downloads/ciclos usando recursos de script de shell padrão.

### RAM para processar mapas {#ram-to-process-maps}

A criação de mapas consome muita memória e é intensiva em E/S. Em outras palavras: leva muito tempo e pode ficar sem memória! Verifique a geração em mapas pequenos primeiro.
Para dar mais memória à JVM, você pode declarar a variável de ambiente JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

O que você pode fazer para melhorar o desempenho:

- Use discos SSD.
- Use vários discos.
- Use processamento "em memória".
Se você deseja evitar o uso de espaço em disco e usar apenas a RAM para acelerar o processo - especifique o parâmetro `--ram-process`. Este processamento "em memória" acelerará a geração do mapa em 10-50%, mas requer muita memória. 10% a 50% dependem do tamanho do mapa. Mapas menores se beneficiam menos do processamento em memória do que mapas maiores, pois o acesso ao disco para leitura inicial e gravação final do mapa desempenha um papel maior, enquanto mapas maiores exigem mais "cálculo".

No processamento normal "em disco", um arquivo *nodes.tmp.odb* é criado a partir do seu arquivo *.osm* ou *.osm.pbf*. Este arquivo *nodes.tmp.odb* é um arquivo de banco de dados sqlite e é cerca de 15 a 25 vezes maior que o arquivo *.osm.pbf* original que você baixou do [geofabrik.de](http://download.geofabrik.de/). Então, se o seu arquivo *.osm.pbf* original for de 300 MB, seu arquivo *nodes.tmp.odb* será de 5 GB a 6 GB! Observe que mapas menores terão um fator de cerca de 15x, enquanto mapas grandes (>350 MB) resultarão em um aumento de espaço de 20x a 25x.

Com o processamento "em memória", este arquivo *nodes.tmp.odb* será criado em sua memória de trabalho. Você precisará de "o tamanho do nodes.tmp.odb" + 20-25%. Observe que você não precisa aumentar o parâmetro `-Xmx` porque o SQLite em memória não ocupará a memória da JVM e usará apenas a memória operacional nativa.

Exemplo: para um *.osm.pbf* de 250 MB, um arquivo *nodes.tmp.odb* de ~4,5 GB será gerado.

### Mapa vetorial personalizado (tags) {#custom-vector-map-tags}

A renderização e a pesquisa de POI do OsmAnd dependem das informações gravadas no [OBF](../osmand-file-formats/osmand-obf.md). Ele tem uma estrutura diferente de outros formatos OSM e é otimizado para uso móvel. Você pode inspecionar o conteúdo usando o [Inspetor Binário](../map-creation/how-to-inspect-an-obf.md). As 3 partes mais importantes do arquivo OBF são

- **Seção de mapa** usada para Renderização de mapa definida por [Tipos de renderização](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **Seção de POI** usada para pesquisa de POI e informações de objeto definidas por [Tipos de POI](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Seção de roteamento** usada para Roteamento definida por [Tipos de roteamento](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - mesmo arquivo que os tipos de renderização, mas tem sua própria seção `<category name="routing"> - routing_type`.

`rendering_types.xml` e `poi_types.xml` podem ser substituídos durante o processo de criação do mapa nas configurações da interface do usuário do OsmAndMapCreator ou como parâmetros de linha de comando `--rendering-types=<path>`, `--poi-types==<path>` para `utilities.sh generate-obf` (empacotado com OsmAndMapCreator).

- O tipo de objeto de mapa principal (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) é registrado por entidade OSM (nó ou via ou multipolígono). Pode haver muitos tipos principais registrados por 1 entidade (ou seja, estrada + bonde + rota de ônibus), a tag `order` classificará os tipos dentro da entidade.
- O tipo de objeto de mapa adicional (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) é uma informação adicional anexada para a entidade OSM, portanto, caso a entidade OSM não esteja registrada com o tipo principal, ela não será armazenada dentro do OBF. Geralmente, armazena informações para exibir recursos extras, como cor, suavidade.
- O tipo de objeto de mapa de texto (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), armazena informações de texto sobre o objeto para que possam ser exibidas posteriormente no mapa.
- `entity_convert` representa scripts simples de transformação de tags (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). É frequentemente usado para combinar tags em tipos específicos, tornando mais fácil a exibição com um estilo de renderização personalizado. Também permite ter transformação de tags específica da região e permite ter diferentes recursos de renderização por país.
- Propagação de tags de relação. O OsmAnd não indexa objetos de relação (exceto multipolígonos - armazenados como objetos de área), mas permite propagar, empurrar tags de relação para membros. Obviamente, 1 membro pode ter várias relações pai e conflitos de tags são possíveis. O OsmAnd suporta 3 maneiras de lidar com conflitos:
  - combinar todas as tags como uma longa linha separada por vírgulas (bom para renderizar nomes de rotas de ônibus como uma longa string no caminho - `nameTags`, `namePrefix`).
  - classificar valores e manter o valor mais alto (bom para renderizar rotas locais vs internacionais - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - gera tags exclusivas para cada relação (não usada por enquanto, mas armazena informações sem perda - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Mais informações** você pode encontrar em [Tipos de renderização](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Leia mais**: geralmente, mapas vetoriais personalizados combinados com [estilo de renderização personalizado](../osmand-file-formats/osmand-rendering-style.md).

## Mapas Raster (avançado) {#raster-maps-advanced}

OSM é um grande banco de dados para mapas, mas nem sempre possui as informações de que você precisa (por exemplo, sobre desertos). Às vezes, você pode obter as informações de que precisa de outras fontes, como mapas em papel ou imagens de satélite.

Existem programas especiais para preparação, conversão, calibração de quaisquer mapas de origem (mapas em formato de imagem, formato pdf, mapas raster online) em mapas online do OsmAnd.

Sobre alguns deles abaixo.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) é um programa de código aberto (GPL) para criar atlas offline. O Mobile Atlas Creator pode usar um grande número de diferentes mapas online, como OpenStreetMap e outros provedores de mapas, como fonte para criar um atlas offline.

Basta [baixar](https://mobac.sourceforge.io/) o programa e executá-lo.

No diálogo de escolha de formato, selecione *OsmAnd SQLite* ou *OsmAnd tile storage*. SQLite é um único arquivo com a área selecionada, enquanto os blocos são partes separadas do mapa reunidas em seu dispositivo. SQLite geralmente é mais conveniente, pois é armazenado em um só lugar e ocupa menos espaço de armazenamento.

Escolha a fonte do mapa, os níveis de zoom e outros recursos. Selecione uma área e, em seguida, escolha o menu *Seleção* -> *Adicionar seleção*.

Depois disso, você pode criar seu arquivo SQLite: 'Atlas' -> 'Criar Atlas'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org/mapping/) é um programa para Windows para manipular mapas digitais e convertê-los entre diferentes plataformas e softwares.

Por exemplo, você pode converter e calibrar qualquer formato de imagem e mapas PDF para o mapa online do OsmAnd.

[Tutorial em vídeo](https://www.youtube.com/watch?v=Y_fekLfcUOc) de como usar o programa.

### SASPlanet {#sasplanet}

SASPlanet é um software de navegação freeware e de código aberto com a capacidade de visualizar e baixar mapas e imagens de satélite da Terra de vários serviços online para o mapa online do OsmAnd.

[Baixe](http://www.sasgis.org/download/) o programa, [guia em inglês](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### PDF ou TIFF Georreferenciado {#geolocated-pdf-or-tiff}

Como converter arquivos pdf/tif/tiff georreferenciados para [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) no Windows.
O georreferenciamento de arquivos tif/tiff e pdf pode ser feito de forma bastante simples no QGIS.

1. **Instalar e executar OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) é uma distribuição binária de um amplo conjunto de software geoespacial de código aberto para Windows. Inclui QGIS, GDAL/OGR, GRASS, bem como muitos outros pacotes (mais de 150). Baixe e execute o instalador de rede [OSGeo4W](https://trac.osgeo.org/osgeo4w/).

Agora, no menu Iniciar, execute o OSGeo4W Shell. Ele deve iniciar no diretório padrão _C:\OSGeo4W_. Navegue até sua pasta de trabalho (ou você pode simplesmente usar _C:\OSGeo4W_ para este fim).

2. **Converter tif/pdf para mbtiles**

Para converter _tif/pdf_ para _mbtiles_ execute (substituindo os nomes dos arquivos _tif/pdf_ e _mbtiles_ onde necessário):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

O primeiro comando permite que o _GDAL_ descubra o zoom máximo que pode gerar com base na resolução da imagem. E converte o arquivo _tif/pdf_ para _mbtiles_ com DPI especificado. Sinta-se à vontade para brincar com essa configuração, mas tenha cuidado, pois valores altos de DPI tornarão o processo de conversão muito longo e o tamanho do arquivo resultante muito grande.

O segundo comando permite que o _GDAL_ descubra e gere os níveis de zoom menores com base no nível de zoom máximo que já existe. Não é incomum que esses dois comandos levem um tempo para serem concluídos.

3. **Instalar Python da Microsoft Store**

Provavelmente a maneira mais fácil é ir para a [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p).

Se, ao tentar executar o script Python na próxima etapa, ocorrer este erro:

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

Então, no PowerShell, execute o seguinte comando:

_pip install Pillow_

4. **Converter formato mbtiles para sqlitedb (adequado para OsmAnd e RMaps)**

Você encontrará o script Python _mbtiles2osmand.py_ no [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Baixe-o para sua pasta de trabalho e execute o Prompt de Comando ou PowerShell.

**Uso:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Argumentos posicionais:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; arquivo de entrada

**output**&nbsp;&nbsp;&nbsp;&nbsp; arquivo de saída

&nbsp;<u>Argumentos opcionais:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostra esta mensagem de ajuda e sai

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;substitui o arquivo de saída se existir

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;converte blocos para JPEG com qualidade especificada

**Exemplos:**

Simples:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Convertendo blocos para jpeg com compressão:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Copiar o arquivo .sqlitedb para o OsmAnd**

Agora você deve ter um arquivo .sqlitedb pronto em sua pasta de trabalho. Copie-o para a pasta apropriada do OsmAnd e use-o como principal, subjacente ou sobreposto. Consulte o [Guia do usuário](../../user/map/raster-maps.md) para obter mais detalhes. Pronto!

6. **(OPCIONAL) Unir vários arquivos osmand em um único arquivo**

Se precisar, você pode encontrar o arquivo de script unite_osmand.py no [GitHub](https://github.com/tarwirdur/mbtiles2osmand). Novamente - baixe-o para sua pasta de trabalho e execute o Prompt de Comando ou PowerShell.

**Uso:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Argumentos posicionais:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; arquivos de entrada. Se vários arquivos contiverem um bloco com as mesmas coordenadas, o bloco do primeiro arquivo (da lista de argumentos) será usado

**output** &nbsp;&nbsp;&nbsp;&nbsp;arquivo de saída

<u>Argumentos opcionais:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;mostra esta mensagem de ajuda e sai

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;substitui o arquivo de saída se existir

7. **EXTRA: Converter um único GeoPDF para GeoTIFF**

Se, por algum motivo, você desejar converter um único _geopdf_ para _geotiff_, use o comando _gdal_translate_ e insira seus próprios parâmetros onde indicado por < >. Você pode usar _gdal_translate_ com ou sem parâmetros opcionais. Pode levar muito tempo para processar e o tiff resultante pode ser realmente grande, especialmente ao incluir a ortoimagem e o terreno sombreado. Portanto, pode ser uma boa ideia excluir algumas das camadas PDF (veja o segundo exemplo).

**Uso:**

&nbsp;<i>gdal_translate ```<Nome do arquivo GeoPDF> <Nome do arquivo Geotiff de saída>``` -of gtiff --config
gdal_pdf_layers_off “```<nome da camada pdf 1>,<nome da camada pdf 2>,<nome da camada pdf 3>```” --config gdal_pdf_dpi ```<dpi de saída>``` </i>&nbsp;

**Exemplos:**

Convertendo pdf com todas as suas camadas para um geotiff no DPI padrão:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Excluindo várias camadas da conversão pelo parâmetro _gdal_pdf_layers_off_ seguido por uma lista de nomes de camadas separados por vírgulas. O arquivo de saída é um geotiff, com 600 DPI especificados:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Fontes:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (apenas para referência),
- [Como converter geopdf para geotiff usando GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Veja também [Criando Mapas de Sobreposição para OsmAnd no Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Problemas Comuns {#common-issues}

### Problema OutOfMemoryError {#outofmemoryerror-issue}

**Problema**: OsmAndMapCreator falha com a mensagem - OutOfMemoryError.

O arquivo que você tenta processar com o OsmAndMapCreator é muito grande. Tente processar um arquivo menor ou aumente a memória para o OsmAndMapCreator no arquivo .sh ou .bat. O parâmetro `-Xmx` especifica quanta memória o programa pode consumir. As configurações podem ser diferentes para máquinas de 64 bits (mais de 1,5 GB) e 32 bits (máximo de cerca de 1,5 GB).

### Problema de arquivo vazio {#empty-file-issue}

**Problema**: Depois de converter um .osm para .obf com apenas um índice POI, o .obf está vazio, embora o arquivo .osm original contivesse POIs.

Pode ser que uma tag crucial estivesse faltando para o OsmAndMapCreator reconhecer um POI quando você converteu o osm de outra fonte, como o Garmin. Se um ponto no arquivo OSM se parece com isto:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
altere-o para conter uma tag 'amenity' adicional, como:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Em seguida, converta o arquivo usando o OsmAndMapCreator. Você pode verificar no site do OSM quais tags são boas para usar e também pode verificar quais tags são suportadas pelo [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).