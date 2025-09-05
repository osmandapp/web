---
source-hash: 32e4659b9165cb30c26907433bd60d7e450043c64b5dd1d074dd139baf41e938
sidebar_position: 10
title: Desenvolvimento do OsmAnd
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Visão geral {#overview}

As funções de teste do aplicativo são coletadas no plugin de desenvolvimento do OsmAnd. Use-as por sua conta e risco.

O plugin de desenvolvimento do OsmAnd permite que você experimente novos recursos do aplicativo ou configure o OsmAnd para testes: simular rotas de navegação, verificar o desempenho da renderização da tela, etc. O plugin foi projetado para *desenvolvedores e usuários experientes* e não é necessário para o uso diário do aplicativo.

## Parâmetros de configuração necessários {#required-setup-parameters}

Para ativar recursos especiais para desenvolvedores e testadores:

1. [Ative](../plugins/index.md#enable--disable) o plugin de desenvolvimento do OsmAnd na seção Plugins do *Menu Principal*.
2. Faça as configurações necessárias no [menu de configurações](#plugin-settings) do plugin.
3. Ative os **widgets de desenvolvedor** se necessário.

## Configurações do plugin {#plugin-settings}

:::info info
As configurações do plugin de desenvolvimento do OsmAnd são globais e se aplicam a todos os perfis.
:::

Use um dos seguintes caminhos para abrir as configurações do plugin:

- *Menu Principal → Plugins → Desenvolvimento do OsmAnd → Configurações*.
- *Menu Principal → [Configurações Globais](../personal/global-settings.md) → Perfil → Configurações do plugin de desenvolvimento do OsmAnd*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>

### Terreno {#terrain}

- **Usar formato raster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) para relevo e inclinação** (*Android*). Carrega mapas raster de formato antigo.

### Solução de problemas {#troubleshotting}

- **Simular sua posição** (*Android* / *iOS*). [Simula