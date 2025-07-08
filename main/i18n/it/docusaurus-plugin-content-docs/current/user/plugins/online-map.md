---
source-hash: 1b9d749ebb8730c64d4b1fceddc86003dfc6c14c7f5e556129e21a75f245cdc3
sidebar_position: 8
title: Mappe Online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Panoramica {#overview}

Le mappe online di OsmAnd sono un'ampia aggiunta al database OpenStreetMap già presente nell'applicazione. Con questo plugin, puoi aggiungere livelli alla tua mappa con informazioni provenienti da una fonte diversa, a partire dalla vista satellitare o dei percorsi escursionistici e terminando con dati molto specifici, come la posizione degli idranti. Puoi anche cambiare la fonte principale della mappa da mappe vettoriali a tessere online.

## Parametri di configurazione richiesti {#required-setup-parameters}

La possibilità di utilizzare le mappe online è automaticamente abilitata nella versione iOS di OsmAnd. Per visualizzare le mappe online in Android, devi effettuare le seguenti impostazioni:

1. [Abilita](../plugins/index.md#enable--disable) il plugin **Mappe online** nel *Menu principale → Plugin → Mappe online*.
2. Effettua le impostazioni necessarie nella sezione [Fonte mappa](../map/raster-maps.md#select-raster-maps) del menu Configura mappa.
3. Imposta la *Fonte mappa*, la mappa *Sovrapposizione* e *Sottoposta*. Seleziona il tuo provider di mappe satellitari preferito.
4. Scarica la [Mappa online](#how-to-prepare-raster-maps) selezionata, se necessario.

## Utilizza mappe raster sul dispositivo {#use-raster-maps-on-device}

Puoi trovare informazioni dettagliate sulla visualizzazione e personalizzazione delle mappe raster nell'articolo [Mappe raster](../map/raster-maps.md). Come utilizzare:

1. [Seleziona](../map/raster-maps.md#select-raster-maps) la mappa raster come livello *Principale*, *Sottoposto* o *Sovrapposizione*.
- [Modifica](../map/raster-maps.md#how-to-use-raster-maps) i parametri del livello (trasparenza).

2. [Prepara/copia](../map/raster-maps.md#prepare--copy-raster-maps-to-device) le mappe raster sul dispositivo.
- [Aggiungi una nuova fonte di mappe raster online](../map/raster-maps.md#add-new-online-raster-map-source)
- [Aggiungi URL magico](../map/raster-maps.md#magic-url-to-install-map-source) per installare la fonte della mappa.

3. [Gestisci](../map/raster-maps.md#manage-raster-maps) le mappe raster.
- [Scarica/aggiorna tessere](../map/raster-maps.md#download--update-tiles).
- [Modifica](../map/raster-maps.md#change-raster-map-parameters) i parametri della mappa raster.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configura sottoposto/sovrapposizione Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configura sottoposto/sovrapposizione iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>

## Come preparare mappe raster {#how-to-prepare-raster-maps}

:::info
Articolo principale per preparare le mappe [leggi qui](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Nonostante il plugin si chiami *Mappe online*, puoi utilizzare le mappe anche senza connessione internet. Devi solo salvare le parti delle mappe (spesso chiamate tessere) per usarle in seguito. Per farlo, scarica uno specifico [strumento Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) sviluppato dal team OsmAnd.

Seleziona l'area che devi scaricare, clicca su Preload area, quindi imposta i livelli di zoom più piccoli e più grandi che vuoi visualizzare e scarica le tessere.
Per la **versione Android** puoi copiarle nella cartella *osmand/tiles/*tipo di tessera** del tuo telefono. Dovrai anche aprire *Configura mappa - Mappa sovrapposizione* e scegliere le tessere online di OsmAnd.

Per la **versione iOS** puoi scegliere un file SQ Lite nel tuo telefono (qualsiasi messenger o dropbox), OsmAnd suggerirà di aggiungerlo. Dovrai anche aprire *Mappa → Sovrapposizione/Sottoposto o Tipo di mappa* e scegliere la nuova fonte della mappa.

Come aggiungere un file SQ Lite nelle versioni Android e iOS di OsmAnd puoi leggere nel progetto <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis</b></a>.

Le tessere online possono essere utili quando hai bisogno solo di una piccola sezione della mappa o di un tipo specifico di essa da utilizzare in un'area limitata, ma non vuoi scaricare l'intera regione. Possono essere utili in infinite situazioni.

![Mappe online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mappe online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)

## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (stili mappa)](../../user/map/vector-maps.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

1. Le mappe online non compaiono nel menu Fonte mappa:

- Verifica che il plugin Mappe online sia abilitato: *Menu → Plugin → Mappe online*.
- Assicurati di avere una connessione internet attiva per accedere alle immagini satellitari.
- Controlla se la mappa online selezionata è scaricata o richiede [impostazioni aggiuntive](../map/raster-maps.md#select-raster-maps).

> *Ultimo aggiornamento: Gennaio 2025*