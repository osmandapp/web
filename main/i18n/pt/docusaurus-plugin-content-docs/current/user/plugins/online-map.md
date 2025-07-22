---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
sidebar_position: 8
title: Mapas Online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão Geral {#overview}

Os mapas online do OsmAnd são uma adição extensa ao banco de dados OpenStreetMap já presente no aplicativo. Com este plugin, você pode adicionar camadas ao seu mapa com informações de uma fonte diferente, começando com a visualização de satélite ou rotas de caminhada e terminando com dados muito específicos, como a localização de hidrantes. Você também pode alterar a fonte principal do mapa de mapas vetoriais para blocos online.


## Parâmetros de Configuração Necessários {#required-setup-parameters}

A capacidade de usar mapas online é ativada automaticamente na versão iOS do OsmAnd. Para exibir mapas online no Android, você precisa fazer as seguintes configurações:

1. [Ative](../plugins/index.md#enable--disable) o plugin **Mapas Online** em *Menu Principal → Plugins → Mapas Online*.
2. Faça as configurações necessárias na seção [Fonte do mapa](../map/raster-maps.md#select-raster-maps) do menu Configurar mapa.
3. Defina a *Fonte do Mapa*, *Sobreposição* e *Camada Inferior* do mapa. Selecione seu provedor de mapa de satélite preferido.
4. Baixe o [Mapa Online](#how-to-prepare-raster-maps) selecionado, se necessário.


## Usar Mapas Raster no Dispositivo {#use-raster-maps-on-device}

Você pode encontrar informações detalhadas sobre a visualização e personalização de mapas raster no artigo [Mapas Raster](../map/raster-maps.md). Como usar:

1. [Selecione](../map/raster-maps.md#select-raster-maps) o mapa raster como camada *Principal*, *Camada Inferior* ou *Sobreposição*.
    - [Altere](../map/raster-maps.md#how-to-use-raster-maps) os parâmetros da camada (transparência).

2. [Prepare / copie](../map/raster-maps.md#prepare--copy-raster-maps-to-device) mapas raster para o dispositivo.
    - [Adicione uma nova fonte de mapa raster online](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Adicione URL Mágica](../map/raster-maps.md#magic-url-to-install-map-source) para instalar a fonte do mapa.

3. [Gerencie](../map/raster-maps.md#manage-raster-maps) mapas raster.
    - [Baixe / atualize blocos](../map/raster-maps.md#download--update-tiles).
    - [Altere](../map/raster-maps.md#change-raster-map-parameters) os parâmetros do mapa raster.


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configurar camada inferior / sobreposição Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configurar camada inferior / sobreposição iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Como Preparar Mapas Raster {#how-to-prepare-raster-maps}

:::info
Artigo principal para preparar mapas [leia aqui](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Apesar do plugin ser chamado *Mapas Online*, você também pode usar os mapas sem conexão com a internet. Você só precisa salvar as partes dos mapas (muitas vezes chamadas de blocos) para usá-las mais tarde. Para fazer isso, baixe uma [ferramenta específica de Criação de Mapas](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) desenvolvida pela equipe OsmAnd.

Selecione a área que você precisa baixar, clique em Pré-carregar área, então defina os níveis de zoom menor e maior que você deseja exibir e baixe os blocos.
Para a <b>versão Android</b> você pode copiá-los para a pasta <i>osmand/tiles/*tipo de bloco*</i> do seu telefone. Você também precisará abrir o <i>Configurar mapa-. Mapa de sobreposição</i> e escolher os blocos online do OsmAnd.

Para a <b>versão iOS</b> você pode escolher o arquivo SQ Lite em seu telefone (qualquer mensageiro ou dropbox), o OsmAnd sugerirá adicioná-lo. Você também precisará abrir <i>Mapa → Sobreposição / Camada Inferior ou Tipo de Mapa</i> e escolher a nova fonte do mapa.

Como adicionar um arquivo SQ Lite nas versões Android e iOS do OsmAnd você pode ler no projeto <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.


Os blocos online podem ser úteis quando você precisa apenas de uma pequena seção do mapa ou de um tipo específico dele para usar em uma área limitada, mas não quer baixar a região inteira. Eles podem ser úteis em inúmeras situações.

![Mapas Online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mapas Online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

### Problemas Comuns e Soluções {#common-issues-and-solutions}

1. Mapas Online não aparecem no menu Fonte do Mapa:  
  
    - Verifique se o plugin Mapas Online está ativado: *Menu → Plugins → Mapas Online*.  
    - Certifique-se de ter uma conexão ativa com a internet para acessar imagens de satélite.  
    - Verifique se o Mapa Online selecionado foi baixado ou requer [configurações adicionais](../map/raster-maps.md#select-raster-maps).

> *Última atualização: janeiro de 2025*