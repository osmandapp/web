---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title: Meus Lugares
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

**Meus Lugares** é o centro no aplicativo OsmAnd para gerenciar e personalizar todos os dados pessoais. Você pode usar esta seção para organizar [Pontos Favoritos](#favorites) marcados como importantes ou frequentemente visitados. A aba [Rotas](#tracks) permite visualizar, importar, gravar e criar arquivos GPX para ajudar a manter um histórico detalhado de suas rotas e viagens. Você também pode gerenciar suas [Edições do OpenStreetMap](#openstreetmap-edits), facilitando a contribuição para melhorias e atualizações do mapa. O plugin e os widgets [Notas de Áudio / Vídeo](#audiovideo-notes) permitem que usuários Android criem e salvem notas multimídia relacionadas a locais específicos, adicionando contexto às suas viagens. No iOS, Meus Lugares também fornece acesso aos [Guias de Viagem](#travel-guides) marcados como favoritos, permitindo que você organize e abra rapidamente o conteúdo de viagem salvo.

## Menu Meus Lugares {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Meus Lugares é organizado por categorias. Selecione uma aba para gerenciar os dados correspondentes.

**Nota:** Todos os dados armazenados no menu *Meus Lugares* podem ser movidos usando um formato `.osf` especial através de aplicativos em seu dispositivo. Este processo simplifica o salvamento e a transferência de dados entre dispositivos e permite que você os compartilhe com outros usuários do OsmAnd. 

### Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Favoritos** permitem que você marque locais importantes ou frequentemente visitados. Esses pontos favoritos são organizados em pastas e podem ser personalizados com diferentes cores, formas e ícones. Você pode navegar rapidamente para qualquer lugar favorito através do menu **Meus Lugares** sem precisar procurá-lo repetidamente.

Para instruções completas, consulte o artigo [Favoritos](../personal/favorites.md).

### Rotas {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Rotas** oferecem ferramentas poderosas para gravar, criar e gerenciar rotas dentro do OsmAnd. Elas podem ser usadas para [navegação](../navigation/setup/gpx-navigation.md), [gravação de viagem](../plugins/trip-recording.md) ou [integração](../personal/tracks/manage-tracks.md#import) de arquivos GPX externos.

Para orientação abrangente, consulte o artigo [Gerenciar Rotas](../personal/tracks/manage-tracks.md).

### Edições do OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

O recurso **Edições do OpenStreetMap** do OsmAnd permite que você contribua para a comunidade global de mapeamento adicionando, modificando ou comentando dados do mapa.

Consulte o [plugin de Edição OSM](../plugins/osm-editing.md) para obter instruções passo a passo.

### Notas de Áudio/Vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

O **plugin de Notas de Áudio/Vídeo** permite que você crie notas multimídia vinculadas a locais específicos do mapa. Essas notas são armazenadas em **Meus Lugares** na **Aba Notas A/V**.

Para obter mais informações, visite a página do [plugin de Notas de Áudio/Vídeo](../plugins/audio-video-notes.md).

### Guias de Viagem (iOS) {#travel-guides}

Vá para: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

A seção **Viagem** contém guias de viagem e artigos marcados como favoritos salvos para acesso offline. Você pode abrir, organizar e gerenciar rapidamente seu conteúdo de viagem salvo a partir de Meus Lugares. A seção Viagem é exibida apenas quando mais de um guia de viagem foi marcado como favorito.

Para informações detalhadas, consulte o artigo [Guias de Viagem](../plan-route/travel-guides.md).

## Artigos Relacionados {#related-articles}

- [Gerenciar Rotas](../personal/tracks/manage-tracks.md#import--export-track)
- [Favoritos](../personal/favorites.md)
- [Edição do OpenStreetMap](../plugins/osm-editing.md)
- [Notas de Áudio/Vídeo](../plugins/audio-video-notes.md)
- [Guias de Viagem](../plan-route/travel-guides.md)
- [Histórico de Pesquisa](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Cores](../personal/color-palette-schemes.md)