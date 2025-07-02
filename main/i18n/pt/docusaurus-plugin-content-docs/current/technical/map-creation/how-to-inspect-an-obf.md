---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Como inspecionar um arquivo binário obf
versions: '*'
---

**_Este artigo precisa ser revisado_**

Se você quiser inspecionar o conteúdo de um arquivo obf, você precisa baixar o [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Lá você pode encontrar um aplicativo de console Inspector (.sh, .bat). Este aplicativo de console tem parâmetros opcionais [-vmap, -vaddress, -vtransport] e um parâmetro obrigatório (arquivo obf de entrada). Ao especificar parâmetros opcionais, você pode rastrear todas as informações do arquivo obf (atenção: pode ser enorme!).

Exemplo e passo a passo para usuários do Windows:
- ter o Java Runtime Environment instalado
- baixe ou copie qualquer mapa offline do Osmand do seu dispositivo para o seu PC, coloque esse arquivo obf idealmente na pasta com todos os arquivos descompactados do Mapcreator
- Abra a linha de comando do Windows (por exemplo, pressionando a tecla Windows e "r", depois digite cmd e pressione enter
- vá para a pasta onde você descompactou o Osmand-Mapcreator pelo comando cd e nome da pasta
- digite `dir` para ver se você está na pasta correta com o arquivo inspector.bat
- digite `inspector -h` para ver um texto de ajuda
- digite `inspector -vaddress name_of_your_map.obf \>output.csv`
- se você receber um erro de console Java sobre memória insuficiente ou similar, edite o arquivo inspector.bat aumentando o número no parâmetro -Xmx512M (ou similar) passo a passo para um valor maior
- tente carregar esse arquivo de texto CSV (eventualmente muito grande) em qualquer editor ou programa que possa carregar arquivos muito grandes, como o Notepad++... ou tente importar para qualquer programa de planilha como Excel ou LibreOffice calc (escolha TAB como separador de campo)
- use qualquer recurso de pesquisa para encontrar nomes de lugares ou nomes de ruas