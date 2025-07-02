---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title: Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Atrasos de localização (falhas ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

O Android Auto e o OsmAnd podem detetar simultaneamente a localização do veículo, o que pode causar um atraso de 3 a 5 segundos na exibição de informações nos widgets relacionados ou congelamento. Para evitar isso, é necessário:

1. Abrir as configurações do Android Auto.
2. Em Configurações, encontrar Permissões de localização.
3. Esta seção exibe uma lista de aplicativos que têm permissão para usar a localização no Android Auto. Encontre o aplicativo OsmAnd e permita o uso da localização.
4. A localização agora será detetada apenas pelo aplicativo OsmAnd no Android Auto, evitando atrasos na exibição das informações de localização.

## Problema de orientação do mapa {#map-orientation-issue}

A orientação do mapa na direção do movimento está [invertida e tremida](https://github.com/osmandapp/OsmAnd/issues/16041). Resolvido ativando a opção ["Orientação aproximada"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- Visível apenas se o [Desenvolvimento do OsmAnd](../plugins/development.md) estiver ativado.
- Localizado em *Menu → Configurações → Perfil → Configurações de navegação → [Mapa durante a navegação](../navigation/guidance/map-during-navigation.md) → Orientação aproximada*.

## Problema de controlo de volume {#volume-control-issue}

Na maioria dos casos, todos os tipos de **sinais** permanecem em volume máximo constante, o que não é afetado pelas configurações de reprodução de áudio simultâneas. Para alterar o volume dos avisos de navegação do OsmAnd ao usar o Android Auto, vá para *Configuração → Voz → Volume da voz* na tela do sistema multimédia do veículo.

Se este método não funcionar, há outra opção. Para ajustar o volume da notificação, você precisa ativar o Google Assistant durante uma chamada. Mantenha pressionado o botão no volante que ativa o Google Assistant e, durante a chamada, ajuste o volume usando o painel ou o volante.